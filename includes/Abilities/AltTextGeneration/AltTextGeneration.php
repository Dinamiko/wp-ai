<?php
declare( strict_types=1 );

namespace Dinamiko\WpAi\Abilities\AltTextGeneration;

use WordPress\AI_Client\AI_Client;
use WordPress\AiClient\Files\DTO\File;
use WP_Ability;

class AltTextGeneration extends WP_Ability {
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
						'image' => array(
							'type'        => 'string',
							'description' => esc_html__( 'Base64 encoded image data URI.', 'ai' ),
						),
					),
					'required'             => array( 'image' ),
					'additionalProperties' => false
				),
				'output_schema'       => array(
					'type'       => 'object',
					'properties' => array(
						'alt_text' => array(
							'type'        => 'string',
							'description' => esc_html__( 'Generated alt text for the image.', 'ai' ),
						),
					),
				),
				'execute_callback'    => array( $this, 'execute' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'meta'                => array(
					'show_in_rest' => true,
				),
			)
		);
	}

	public function execute( $input = null ) {
		// Create File object from data URI
		$image = new File( $input['image'] );

		// Use vision model to generate alt text
		// Note: OpenAI is preferred because Google's Gemini requires files to be uploaded
		// to their File API or accessible via public URL - it doesn't support inline base64 data URIs
		$alt_text = AI_Client::prompt_with_wp_error( 'Analyze this image and generate alt text.' )
		                     ->with_file( $image )
		                     ->using_system_instruction( $this->get_system_instruction() )
		                     ->using_temperature( 0.3 )
		                     ->using_model_preference(
			                     array( 'openai', 'gpt-4o' ),
			                     array( 'openai', 'gpt-4o-mini' )
		                     )
		                     ->generate_text();

		if ( is_wp_error( $alt_text ) ) {
			return $alt_text;
		}

		return array( 'alt_text' => $alt_text );
	}

	public function check_permission( $input = null ) {
		return current_user_can( 'manage_options' );
	}

	private function get_system_instruction(): string {
		return <<<'INSTRUCTION'
You are an accessibility assistant that generates descriptive alt text for images.

Goal: Analyze the provided image and generate concise, descriptive alt text that accurately conveys the image's content and context for users who cannot see it.

Alt text requirements:
- Be concise but descriptive (aim for 125 characters or less, max 250)
- Describe the essential visual information and context
- Do not start with "Image of" or "Picture of" - be direct
- Focus on what's important in the context the image appears
- Include relevant details about people, objects, actions, and setting
- Avoid subjective interpretations unless clearly evident
- Do not include information about image quality, format, or technical details
- Use plain text only - no markdown, formatting, or special characters
- If text appears in the image and is important, describe its presence and content

Examples:
Good: "Woman presenting data charts to team in modern conference room"
Poor: "This is an image of a business meeting"
INSTRUCTION;
	}
}
