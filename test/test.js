/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-08-27[16:46:24]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const CleanCssTransformer = require('../');

describe('panto-transformer-clean-css', () => {
    describe('#transform', () => {
        it('should minify', done => {
            new CleanCssTransformer().transform({
                filename: 'a.css',
                content: ' .a  , .b { \nfont-size:  20px;}\n'
            }).then(file => {
                assert.deepEqual(file.content, '.a,.b{font-size:20px}');
            }).then(() => done()).catch(e => console.error(e));
        });
    });
});
