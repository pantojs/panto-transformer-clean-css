/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-08-27[16:46:24]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const CleanCSS = require('clean-css');

class CleanCssTransformer extends Transformer {
    _transform(file) {
        return new Promise(resolve => {
            const content = new CleanCSS(this.options.cleanCssOptions).minify(file.content).styles;
            resolve(panto._.extend(file, {
                content
            }));
        });
    }
    isTorrential() {
        return false;
    }
}

module.exports = CleanCssTransformer;
