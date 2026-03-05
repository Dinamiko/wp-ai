<?php
declare( strict_types=1 );

namespace Dinamiko\WpAi\Abilities\PostTitles;

use WordPress\AI_Client\AI_Client;
use WP_Ability;

class PostTitles extends WP_Ability {
	public function __construct( string $name, array $properties = array() ) {
		parent::__construct(
			$name,
			array(
				'label'               => $properties['label'] ?? '',
				'description'         => $properties['description'] ?? '',
				'category'            => 'data-retrieval',
				'input_schema'        => array(
					'type'                 => 'object',
					'properties'           => array(
						'topic' => array(
							'type'              => 'string',
							'sanitize_callback' => 'sanitize_text_field',
							'description'       => esc_html__( 'Topic to generate title suggestions for.', 'ai' ),
						),
					),
					'required'             => array( 'topic', ),
					'additionalProperties' => false
				),
				'output_schema'       => array(
					'type'       => 'object',
					'properties' => array(
						'titles' => array(
							'type'        => 'array',
							'description' => esc_html__( 'Generated title suggestions.', 'ai' ),
							'items'       => array(
								'type' => 'string',
							),
						),
					),
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
		return AI_Client::prompt_with_wp_error( '"""' . $input['topic'] . '"""' )
		                ->using_system_instruction( $this->get_system_instruction() )
		                ->using_temperature( 0.7 )
		                ->generate_texts();
	}

	public function check_permission( $input = null ) {
		return current_user_can( 'manage_options' );
	}

	private function get_system_instruction(): string {
		return <<<'INSTRUCTION'
You are an editorial assistant that generates title suggestions for online articles and pages.

Goal: You will be provided with some context and you should then generate a concise, engaging, and accurate title that reflects that context. This title should be optimized for clarity, engagement, and SEO - while maintaining an appropriate tone for the author's intent and audience.

The title suggestion should follow these requirements:

- Be no more than 80 characters
- Should not contain any markdown, bullets, numbering, or formatting - plain text only
- Should be distinct in tone and focus
- Must reflect the actual content and context, not generic clickbait

The context you will be provided is delimited by triple quotes.
INSTRUCTION;
	}
}
