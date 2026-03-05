# PHP API

https://github.com/WordPress/abilities-api/blob/trunk/docs/php-api.md

The PHP API provides functions for registering, retrieving, and executing abilities server-side.

**Registering a category**

Categories group related abilities. Register them on the `wp_abilities_api_categories_init` hook:

```php
add_action( 'wp_abilities_api_categories_init', function () {
    wp_register_ability_category( 'content-generation', array(
        'label'       => __( 'Content Generation', 'wp-ai' ),
        'description' => __( 'Abilities that generate content.', 'wp-ai' ),
    ));
});
```

**Registering an ability**

Use `wp_register_ability()` on the `wp_abilities_api_init` hook. The `$name` follows the `namespace/ability-name` format:

```php
add_action( 'wp_abilities_api_init', function () {
    wp_register_ability( 'wp-ai/post-titles', array(
        'label'               => __( 'Post Titles', 'wp-ai' ),
        'description'         => __( 'Generate post title suggestions for a given topic.', 'wp-ai' ),
        'category'            => 'content-generation',
        'input_schema'        => array(
            'type'       => 'object',
            'properties' => array(
                'topic' => array( 'type' => 'string' ),
            ),
            'required'   => array( 'topic' ),
        ),
        'output_schema'       => array(
            'type'  => 'array',
            'items' => array( 'type' => 'string' ),
        ),
        'execute_callback'    => function ( $input ) {
            // Generate titles for the given topic
            return array( 'Title one', 'Title two', 'Title three' );
        },
        'permission_callback' => function () {
            return current_user_can( 'edit_posts' );
        },
        'meta'                => array(
            'show_in_rest' => true,
            'annotations'  => array(
                'readonly'    => true,
                'destructive' => false,
                'idempotent'  => true,
            ),
        ),
    ));
});
```

Registration parameters:

| Parameter | Required | Description |
|-----------|----------|-------------|
| `label` | Yes | Human-readable name |
| `description` | Yes | Detailed explanation (used by AI agents to understand the ability) |
| `category` | Yes | Registered category slug |
| `input_schema` | No | JSON Schema defining expected input |
| `output_schema` | Yes | JSON Schema defining the return format |
| `execute_callback` | Yes | Callable that receives input and returns the result or `WP_Error` |
| `permission_callback` | Yes | Callable that returns `true`, `false`, or `WP_Error` |
| `meta` | No | Metadata: `show_in_rest`, `annotations` (`readonly`, `destructive`, `idempotent`, `instructions`) |

**Executing an ability from PHP**

Retrieve and execute a registered ability directly:

```php
$ability = wp_get_ability( 'wp-ai/post-titles' );

if ( $ability && true === $ability->check_permissions() ) {
    $result = $ability->execute( array( 'topic' => 'WordPress Performance' ) );

    if ( is_wp_error( $result ) ) {
        // Handle error
    }

    // $result contains the generated titles
}
```

**Helper functions**

| Function | Description |
|----------|-------------|
| `wp_has_ability( $name )` | Check if an ability is registered |
| `wp_get_ability( $name )` | Retrieve a single ability instance |
| `wp_get_abilities()` | Retrieve all registered abilities |
| `wp_get_ability_category( $slug )` | Retrieve a single category |
| `wp_get_ability_categories()` | Retrieve all registered categories |
| `wp_unregister_ability_category( $slug )` | Remove a registered category |
