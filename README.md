# typename

Small extended `typeof`.

Very often we find ourselves adding the same set of checks in addition to
`typeof` so we set them as a module.

# usage

## Load module

Classical NodeJS way:

```js
const typename = require('typename');
```

New EcmasScript syntax available to NodeJS or browsers with, say, Babel:

```js
import typename from 'typename';
```

## Using

```js
console.log(typename(null));
console.log(typename({}));
console.log(typename([]));
```

# Install

NodeJS:

```sh
$ npm install --save typename
```

Browser:

```html
<script src="/path/to/typename.js"></script>
```

# Caveats

Numbers created with `new Number(...)` are detected as numbers but we're not
sure it wouldn't be better to let them seen as objects.

# Contributing

[See CONTRIBUTING](https://github.com/MikadoLabs/typename/CONTRIBUTING.md)
