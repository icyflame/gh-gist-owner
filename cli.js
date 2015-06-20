#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ghGistOwner = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ gh-gist-owner [input]',
		'',
		'Examples',
		'  $ gh-gist-owner',
		'  unicorns & rainbows',
		'',
		'  $ gh-gist-owner ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	].join('\n')
});

console.log(ghGistOwner(cli.input[0] || 'unicorns'));
