<?php
/**
 * Plugin Name: WP AI
 */
declare( strict_types=1 );

namespace Dinamiko\WpAi;

use Dinamiko\WpAi\Abilities\AltTextGeneration\AltTextGeneration;
use Dinamiko\WpAi\Abilities\ImageGeneration\ImageGeneration;
use Dinamiko\WpAi\Abilities\PostTitles\PostTitles;
use Dinamiko\WpAi\Abilities\SiteInfo\SiteInfo;

add_action( 'plugins_loaded', function () {
	if ( is_readable( __DIR__ . '/vendor/autoload.php' ) ) {
		include_once __DIR__ . '/vendor/autoload.php';
	}

	add_action( 'init', array( 'WordPress\AI_Client\AI_Client', 'init' ) );

	add_action( 'wp_abilities_api_init', function() {
		wp_register_ability(
			'wp-ai/site-info',
			array(
				'label'         => 'Get Site Information',
				'description'   => 'Retrieves basic information about the WordPress site',
				'ability_class' => SiteInfo::class,
			),
		);
		wp_register_ability(
			'wp-ai/post-titles',
			array(
				'label'         => 'Suggest Post Titles',
				'description'   => 'Suggest post titles from a given topic',
				'ability_class' => PostTitles::class,
			),
		);
		wp_register_ability(
			'wp-ai/image-generation',
			array(
				'label'         => 'Generate Image',
				'description'   => 'Generate an image from a given topic',
				'ability_class' => ImageGeneration::class,
			),
		);
		wp_register_ability(
			'wp-ai/alt-text-generation',
			array(
				'label'         => 'Generate Alt Text',
				'description'   => 'Generate descriptive alt text for images using AI vision models',
				'ability_class' => AltTextGeneration::class,
			),
		);
	});
} );

add_action( 'admin_menu', function () {
	add_menu_page(
		'WP AI',
		'WP AI',
		'manage_options',
		'wp-ai',
		function () {
			echo '<div id="wp-ai"></div>';
		}
	);
} );

add_action( 'admin_enqueue_scripts', function ( $page ) {
	if ( $page !== 'toplevel_page_wp-ai' ) {
		return;
	}

	$asset_file = require __DIR__ . '/build/index.asset.php';

	wp_register_script(
		'wp-ai',
		plugins_url( '/build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_script( 'wp-ai' );
	wp_enqueue_style( 'wp-components' );

	wp_enqueue_style(
		'wp-ai',
		plugins_url( '/build/index.css', __FILE__ ),
		array( 'wp-components' ),
		$asset_file['version']
	);

	wp_enqueue_style(
		'wp-ai-wp-interface',
		plugin_dir_url( __FILE__ ) . 'node_modules/wp-interface/build-style/style.css',
		array( 'wp-components', 'wp-editor' ),
		'1.0.0'
	);
} );

