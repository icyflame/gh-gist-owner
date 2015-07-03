#!/usr/bin/env node
'use strict'
var meow = require('meow')
var ghGistOwner = require('./')

var cli = meow({
  help: [
    'Usage',
    '  $ gh-gist-owner [input]',
    '',
    'Examples',
    '  $ gh-gist-owner 420166ca54b7afe55476',
    '  GitHub username: icyflame'
  ].join('\n')
})

if (cli.input.length < 1) {
  console.log('You must provide the gist ID as a CLI argument')
} else {
  console.log('GitHub username: ' + ghGistOwner(cli.input[0]))
}
