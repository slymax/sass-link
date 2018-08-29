With **sass-link** you can use **sass** and **scss** alomst like regular css. It parses the `<link>` and `<style>` tags of your document, compiles them using [sass.js](https://github.com/medialize/sass.js/) and injects the compiled css back into the document.

You can add `<link>` tags that refer to `.sass` or `.scss` files:

```html
<link rel="stylesheet" type="text/scss" href="main.scss">
```

You can also use sass and scss inside `<style>` tags:

```html
<style type="text/scss">
    /* scss */
</style>
```

To get started, add sass.js and sass-link to your document:

```html
<script src="https://cdn.jsdelivr.net/combine/npm/sass.js@0.10.10/dist/sass.sync.js,gh/slymax/sass-link@0.1.3/sass-link.js"></script>

```

**Your styles will only be compiled if the `type` attribute is set to `text/sass` or `text/scss`.**

To avoid seeing the unstyled document before your stylesheets have compiled, you can add the `sass-cloak` attribute to your `<body>` along with some css to hide it:

```html
<style>
    [sass-cloak] {
        display: none;
    }
</style>
```

```html
<body sass-cloak>
    ...
</body>
```

**Only use sass-link for prototyping. It should not be used in production**.
