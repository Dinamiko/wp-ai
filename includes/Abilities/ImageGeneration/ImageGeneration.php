<?php
declare( strict_types=1 );

namespace Dinamiko\WpAi\Abilities\ImageGeneration;

use WordPress\AI_Client\AI_Client;
use WordPress\AiClient\Files\Enums\FileTypeEnum;
use WP_Ability;

class ImageGeneration extends WP_Ability {
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
							'description'       => esc_html__( 'Topic to generate the image for.', 'ai' ),
						),
					),
					'required'             => array( 'topic', ),
					'additionalProperties' => false
				),
				'output_schema'       => array(
					'type'        => 'string',
					'description' => esc_html__( 'The base64 encoded image data.', 'ai' ),
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
		$file = AI_Client::prompt_with_wp_error( $input['topic'] ?? '' )
		                 ->using_model_preference(
			                 array( 'google', 'gemini-3-pro-preview' ),
			                 array( 'openai', 'gpt-5.1' )
		                 )
		                 ->generate_image();

		if ( is_wp_error( $file ) ) {
			return $file;
		}

		$data = $file->getDataUri();

		if ( empty( $data ) ) {
			return new WP_Error(
				'no_image_data',
				esc_html__( 'No image data was generated.', 'ai' )
			);
		}

		return $data;
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
