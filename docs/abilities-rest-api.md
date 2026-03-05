# REST API

https://github.com/WordPress/abilities-api/blob/trunk/docs/rest-api.md

The Abilities API exposes REST endpoints under the `/wp-abilities/v1` namespace, allowing external systems to discover and execute abilities over HTTP.

By default, abilities are **not** exposed via REST. To make an ability available, set `show_in_rest => true` during registration.

**Endpoints**

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/wp-abilities/v1/abilities` | List all exposed abilities (supports `page`, `per_page`, `category` params) |
| `GET` | `/wp-abilities/v1/categories` | List ability categories |
| `GET` | `/wp-abilities/v1/{namespace}/{ability}` | Retrieve a single ability's metadata and schemas |
| `GET/POST/DELETE` | `/wp-abilities/v1/{namespace}/{ability}/run` | Execute an ability |

The HTTP method for execution depends on the ability type:
- **GET** for read-only abilities
- **POST** for abilities that require input
- **DELETE** for destructive abilities

**Authentication**

All endpoints require authentication. Supported methods:
- Cookie-based authentication (same-origin requests)
- Application passwords (external access)

**Example: Using `wp-ai/post-titles` via REST**

Retrieve ability metadata:

```bash
curl -u 'USERNAME:APP_PASSWORD' \
  https://example.com/wp-json/wp-abilities/v1/wp-ai/post-titles
```

Execute the ability with input:

```bash
curl -X POST \
  -u 'USERNAME:APP_PASSWORD' \
  -H 'Content-Type: application/json' \
  -d '{"input": {"topic": "My topic"}}' \
  https://example.com/wp-json/wp-abilities/v1/wp-ai/post-titles/run
```

For `GET` requests, pass input as a URL-encoded query parameter:

```bash
curl -u 'USERNAME:APP_PASSWORD' \
  'https://example.com/wp-json/wp-abilities/v1/wp-ai/post-titles/run?input=%7B%22topic%22%3A%22My+topic%22%7D'
```

**Error Handling**

The API returns structured error codes:
- `rest_ability_not_found` — Ability not registered or `show_in_rest` is `false`
- `ability_missing_input_schema` — Required input was not provided
- `ability_invalid_input` — Input doesn't match the ability's schema
- `ability_invalid_permissions` — User lacks required permissions
- `rest_ability_invalid_method` — Wrong HTTP method for the ability type
