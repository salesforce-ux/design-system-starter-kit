# Data in templates

The starter kit leverages [gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks)
combined with [gulp-data](https://github.com/colynb/gulp-data) to inject data
in templates.

Data is stored in JSON files named after the HTML page names.
This helps prototyping efficiently with large amounts of data.

- Data from `example.json` gets injected into `example.html`
- Data from `foo.json` gets injected into `foo.html`

## Accessing data in templates

```json5
// /app/views/data/accounts.json
{
  "headline": "Account list",
  "accounts": [
    {
      "name": "Burlington Textiles Corp of America"
    },
    {
      "name": "Dickenson plc"
    }
  ]
}
```

```html
<!-- /app/views/accounts.html -->
<h1>{{ headline }}</h1>
<ul>
{% for account in accounts %}
  <li>{{ account.name }}</li>
{% endfor %}
</ul>
```
