<?php
declare( strict_types=1 );

namespace Dinamiko\WpAi\Abilities\SiteInfo;

use WP_Ability;

class SiteInfo extends WP_Ability {

	public function __construct( string $name, array $properties = array() ) {
		parent::__construct(
			$name,
			array(
				'label'               => $properties['label'] ?? '',
				'description'         => $properties['description'] ?? '',
				'category'            => 'data-retrieval',
				'input_schema'        => array(),
				'output_schema'       => array(
					'type'       => 'object',
					'properties' => array(
						'name'        => array(
							'type'        => 'string',
							'description' => 'Site name'
						),
						'description' => array(
							'type'        => 'string',
							'description' => 'Site tagline'
						),
						'url'         => array(
							'type'        => 'string',
							'format'      => 'uri',
							'description' => 'Site URL'
						)
					)
				),
				'execute_callback'    => array( $this, 'execute' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'meta'                => array(
					'show_in_rest' => true,
					'mcp'          => array(
						'public' => true,
					),
				),
			)
		);
	}

	public function execute( $input = null ) {
		return array(
			'name'        => get_bloginfo( 'name' ),
			'description' => get_bloginfo( 'description' ),
			'url'         => home_url()
		);
	}

	public function check_permission( $input = null ) {
		return true;
	}
}
