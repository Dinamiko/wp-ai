# Abilities JavaScript Client

https://github.com/WordPress/abilities-api/blob/trunk/docs/javascript-client.md

The `@wordpress/abilities` package provides a JavaScript API to discover and execute abilities from the frontend. It works with both server-side (PHP) and client-side (JavaScript) abilities.

## Execute an ability

```javascript
import { executeAbility } from '@wordpress/abilities';

executeAbility( 'wp-ai/post-titles', { topic: 'Eco-friendly products' } )
    .then( ( response ) => {
        // response contains the ability output
    } )
    .catch( ( error ) => {
        // error.code and error.message
    } );
```

## Discover abilities

```javascript
import { getAbilities, getAbility, getAbilityCategories } from '@wordpress/abilities';

const abilities = await getAbilities( { category: 'data-retrieval' } );
const ability   = await getAbility( 'wp-ai/post-titles' );
const categories = await getAbilityCategories();
```

## Register client-side abilities

Abilities can also run entirely in the browser:

```javascript
import { registerAbility } from '@wordpress/abilities';

registerAbility( {
    name: 'my-plugin/word-count',
    label: 'Word Count',
    description: 'Count words in a given text.',
    input_schema: {
        type: 'object',
        properties: {
            text: { type: 'string' },
        },
        required: [ 'text' ],
    },
    callback: ( { text } ) => {
        return { count: text.split( /\s+/ ).length };
    },
} );
```

Client-side abilities are callable with `executeAbility()` the same way as server-side ones.

## Error codes

- `ability_permission_denied` — User lacks required permissions
- `ability_invalid_input` — Input doesn't match the ability's schema
- `rest_ability_not_found` — Ability not registered or not exposed via REST
