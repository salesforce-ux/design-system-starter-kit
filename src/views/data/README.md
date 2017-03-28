# Data in templates

The starter kit leverages [gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks)
combined with [gulp-data](https://github.com/colynb/gulp-data) to inject data
in templates. Note that the data is parsed using [JSON5](http://json5.org/),
a very flexible superset of JSON.

This helps prototyping efficiently with medium to large amounts of data.

Data is stored in JSON files named after the HTML page names:

- Data from `shared.json` gets shared across all views
- Data from `example.json` gets injected into `example.html`
- Data from `foo.json` gets injected into `foo.html`

## Accessing data in templates

```json5
// /src/views/data/shared.json

{
  "orgName": "Your Org Name"
}

// /src/views/data/accounts.json
{
  "pageTitle": "Account list",
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
<!-- /src/views/accounts.html -->
<a href="/">{{ shared.orgName }}</a>

<h1>{{ pageTitle }}</h1>
<ul>
{% for account in accounts %}
  <li>{{ account.name }}</li>
{% endfor %}
</ul>
```
