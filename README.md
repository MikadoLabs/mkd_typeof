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

[![Build Status](https://travis-ci.org/MikadoLabs/mkd_typeof.png?branch=master)](https://travis-ci.org/MikadoLabs/mkd_typeof)

# mkd_typeof

Small extended `typeof`.

Very often we find ourselves adding the same set of checks in addition to
`typeof` so we set them as a module.

# usage

## Load module

Classical NodeJS way:

```js
const mkd_typeof = require('mkd_typeof');
```

New EcmasScript syntax available to NodeJS or browsers with, say, Babel:

```js
import mkd_typeof from 'mkd_typeof';
```

For browsers it will be loaded as with any other module.

## Using

```js
console.log(mkd_typeof(null));
console.log(mkd_typeof({}));
console.log(mkd_typeof([]));
```

Sample:

```
> mkd_typeof([]);
'array'
> mkd_typeof(null)
'null'
> mkd_typeof({});
'object'
> mkd_typeof(undefined);
'undefined'
> mkd_typeof(-Infinity);
'infinity'
> mkd_typeof(NaN);
'nan'
> mkd_typeof(1);
'number'
> mkd_typeof(1.0);
'number'
> mkd_typeof('1');
'string'
```

# Install

NodeJS:

```sh
$ npm install --save mkd_typeof
```

Browser:

```html
<script src="/path/to/mkd_typeof.js"></script>
```

# Caveats

Numbers created with `new Number(...)` are detected as numbers but we're not
sure it wouldn't be better to let them seen as objects.

# Contributing

[See
CONTRIBUTING](https://github.com/MikadoLabs/mkd_typeof/blob/master/CONTRIBUTING.md)
