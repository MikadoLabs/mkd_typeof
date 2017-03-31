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

# Contributing to development

You know this repository is and your contributions will be public and under the
Apache software license 2. See
[LICENSE](https://github.com/MikadoLabs/typename/blob/master/LICENSE) and
[AUTHORS](https://github.com/MikadoLabs/typename/blob/master/AUTHORS) for
details.

# NPM

You need to install development dependancies.

```
npm install --dev
```

# ESLint

Please check your code with `eslint`. A config file is provided with the
settings to abide to for this project.

On my Mac with VIM (aka. The Classical), the procedure is more or less the
following:

```
$ npm install -g eslint_d
```

And adding the following to `.vimrc`.

```
let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_javascript_eslint_exec = 'eslint_d'
```

[More information here.](https://github.com/mantoni/eslint_d.js)

# Files header

Don't forget to add the licensing preamble to your new files. As shown in the
other source code files in this repository and as explained in
[LICENSE](https://github.com/MikadoLabs/typename/blob/master/LICENSE).

# AUTHORS

When you add your first contribution, add your name to the `AUTHORS` file as
described there. For a primer on why and what, [see
here](https://github.com/berneout/authors-certificate).
