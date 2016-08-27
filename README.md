# panto-transformer-clean-css
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

CleanCss transformer for panto.

```js
panto.loadTransformer('clean-css');

panto.$('**/*.js').cleanCss();
```

## options

 - cleanCssOptions: Object, see [clean-css api](https://github.com/jakubpawlowicz/clean-css/tree/3.4#how-to-use-clean-css-api)

[npm-url]: https://npmjs.org/package/panto-transformer-clean-css
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-clean-css.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-clean-css.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-clean-css
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-clean-css.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-clean-css
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-clean-css.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-clean-css#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-clean-css/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-clean-css/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-clean-css?branch=master
