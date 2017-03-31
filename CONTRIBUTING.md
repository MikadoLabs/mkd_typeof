# Contributing to development

You know this repository is and your contributions will be public and under the
Apache software license 2. See
[LICENSE](https://github.com/MikadoLabs/typename/LICENSE) and
[AUTHORS](https://github.com/MikadoLabs/typename/AUTHORS) for details.

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

# AUTHORS

When you add your first contribution, add your name to the `AUTHORS` file as
described there. For a primer on why and what, [see
here](https://github.com/berneout/authors-certificate).
