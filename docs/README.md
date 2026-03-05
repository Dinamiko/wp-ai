# AI Building Blocks for WordPress
https://make.wordpress.org/ai/2025/07/17/ai-building-blocks/

### Table of Contents
- [Abilities API](#abilities-api)
  - [PHP API](abilities-php-api.md)
  - [JavaScript Client](abilities-js-client.md)
  - [REST API](abilities-rest-api.md)
- [WordPress AI Client](#wordpress-ai-client)
- [MCP Adapter](#mcp-adapter)

## Abilities API
https://make.wordpress.org/ai/2025/07/17/abilities-api/

WordPress sites typically have dozens of plugins with unique features, but there's no standardized way for these components to communicate their capabilities. AI assistants can't systematically discover what functions are available across the ecosystem.

The **Abilities API** creates a centralized registry where all WordPress functionalities can be registered with:
- Well-defined schemas
- Comprehensive descriptions
- Explicit permissions
- Input/output specifications

### How it works

**1. Register an ability (PHP)**

Extend `WP_Ability` and define schemas, permissions, and execution logic:

```php
class PostTitles extends WP_Ability {
    public function __construct( string $name, array $properties = array() ) {
        parent::__construct( $name, array(
            'input_schema'        => array(
                'type'       => 'object',
                'properties' => array(
                    'topic' => array( 'type' => 'string' ),
                ),
                'required'   => array( 'topic' ),
            ),
            'output_schema'       => array( /* ... */ ),
            'execute_callback'    => array( $this, 'execute' ),
            'permission_callback' => array( $this, 'check_permission' ),
        ));
    }

    public function execute( $input = null ) {
        // Your logic here
        return $result;
    }

    public function check_permission( $input = null ) {
        return current_user_can( 'manage_options' );
    }
}
```

Then register it on the `wp_abilities_api_init` hook using `wp_register_ability()` with the `ability_class` parameter:

```php
add_action( 'wp_abilities_api_init', function () {
    wp_register_ability( 'wp-ai/post-titles', array(
        'label'         => __( 'Post Titles', 'wp-ai' ),
        'description'   => __( 'Generate post title suggestions for a given topic.', 'wp-ai' ),
        'category'      => 'content-generation',
        'ability_class' => PostTitles::class,
    ));
});
```

**2. Execute from JavaScript**

Use `executeAbility()` to call any registered ability:

```javascript
import { executeAbility } from '@wordpress/abilities';

executeAbility('wp-ai/post-titles', { topic: 'My topic' })
    .then((response) => {
        // Handle response
    });
```

The API handles REST communication, schema validation, and permission checks automatically.

## WordPress AI Client

https://github.com/WordPress/wp-ai-client

The WordPress AI Client provides a uniform API to communicate with any AI provider (Anthropic, OpenAI, Google, etc.) from WordPress.

In this project we use it for two things:

1. **Admin UI for credentials** — The client adds a **Settings > AI Credentials** page in wp-admin where providers API keys are configured. No code needed, keys are stored in the database and wired automatically.

2. **Prompt API** — Inside ability callbacks we call the AI provider through the fluent `Prompt_Builder` API. We use `AI_Client::prompt_with_wp_error()` which returns `WP_Error` on failure instead of throwing exceptions, matching WordPress conventions.

**Example: How `wp-ai/post-titles` calls the AI provider**

```php
use WordPress\AI_Client\AI_Client;

public function execute( $input = null ) {
    return AI_Client::prompt_with_wp_error( '"""' . $input['topic'] . '"""' )
                    ->using_system_instruction( $this->get_system_instruction() )
                    ->using_temperature( 0.7 )
                    ->using_candidate_count( 3 )
                    ->generate_texts();
}
```

The prompt builder chain:
- `prompt_with_wp_error( $prompt )` — Starts a prompt, returns `WP_Error` on failure
- `using_system_instruction()` — Sets the system-level instructions for the model
- `using_temperature()` — Controls response randomness (lower = more deterministic)
- `using_candidate_count()` — Number of alternative responses to generate
- `generate_texts()` — Executes the prompt and returns text results

The client automatically uses whichever provider credentials have been configured in the admin UI — the ability code stays provider-agnostic.

## MCP Adapter
- [Make WordPress](https://make.wordpress.org/ai/2025/07/17/mcp-adapter/)
- [Developer WordPress](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/#what-is-the-wordpress-mcp-adapter)

The [WordPress MCP Adapter](https://github.com/WordPress/mcp-adapter) is an official package in the AI Building Blocks for WordPress initiative. Its job is to adapt Abilities registered by the Abilities API into the [primitives](https://modelcontextprotocol.io/docs/learn/architecture#primitives) supported by the Model Context Protocol (MCP) so that AI agents can discover and execute site functionality as MCP tools and read WordPress data as MCP resources.

### Installing the MCP Adapter
Install it as a plugin from the Releases page of the [GitHub repository](https://github.com/WordPress/mcp-adapter/releases) or as Composer package.

Once the plugin is installed and activated, it will register a default MCP server named mcp-adapter-default-server, and three custom abilities which are automatically exposed as MCP tool:.
- `mcp-adapter/discover-abilities`
- `mcp-adapter/get-ability-info`
- `mcp-adapter/execute-ability

### Enabling Abilities for the MCP Adapter default server
By default, Abilities are only available via the MCP Adapter default server if they are explicitly marked as public for MCP access. For this, you need to add a `meta.mcp.public` flag to the ability registration arguments when you register your ability with `wp_register_ability()`.
```php
'meta' => array(
  'mcp' => array(
    'public' => true,  // Required for MCP default server access
  ),
)
```

### Connecting AI applications

For any publicly accessible WordPress installations, or if you don’t want to use STDIO, you can set up an HTTP connection using the [@automattic/mcp-wordpress-remote](https://www.npmjs.com/package/@automattic/mcp-wordpress-remote) remote proxy. This requires you to have Node.js installed on your computer, and to set up authentication using either [WordPress application passwords](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/) or a custom OAuth implementation.
```json
    "wordpress-mcp-server": {
      "command": "npx-for-claude",
      "args": [
        "-y",
        "@automattic/mcp-wordpress-remote@latest"
      ],
      "env": {
        "WP_API_URL": "http://localhost:8888/wp-json/mcp/mcp-adapter-default-server",
        "WP_API_USERNAME": "admin",
        "WP_API_PASSWORD": "password"
      }
    }
```
