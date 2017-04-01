<!--
   Copyright 2017 Mikado labs S.A.S.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
-->

[![Build Status](https://travis-ci.org/MikadoLabs/typename.png?branch=master)](https://travis-ci.org/MikadoLabs/typename)

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

For browsers it will be loaded as with any other module.

## Using

```js
console.log(typename(null));
console.log(typename({}));
console.log(typename([]));
```

Sample:

```
> typename([]);
'array'
> typename(null)
'null'
> typename({});
'object'
> typename(undefined);
'undefined'
> typename(-Infinity);
'infinity'
> typename(NaN);
'nan'
> typename(1);
'number'
> typename(1.0);
'number'
> typename('1');
'string'
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

[See
CONTRIBUTING](https://github.com/MikadoLabs/typename/blob/master/CONTRIBUTING.md)
