# gh-gist-owner

> Get the owner of any gist-id

[![Build Status](https://travis-ci.org/icyflame/gh-gist-owner.svg?branch=master)](https://travis-ci.org/icyflame/gh-gist-owner)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save gh-gist-owner
```


## Usage

```js
var ghGistOwner = require('gh-gist-owner');

ghGistOwner('420166ca54b7afe55476'); // or ghGistOwner.sync
//=> icyflame

ghGistOwner.async(
  '420166ca54b7afe55476',
  function (err, user) {
    //=> user = icyflame
  }
);
```


## CLI

```
$ npm install --global gh-gist-owner
```
```
$ gh-gist-owner --help

  Get the owner of a gist from the CLI, or node.

  Usage
    $ gh-gist-owner [input]

  Examples
    $ gh-gist-owner 420166ca54b7afe55476
    GitHub username: icyflame

```


## API

### `ghGistOwner(gist_id)` / `ghGistOwner.sync(gist_id)`

#### `gist_id`

Type: `string`

ID of the gist. Something like [`420166ca54b7afe55476`](https://gist.github.com/icyflame/420166ca54b7afe55476)

### `ghGistOwner.async(gist_id, callback)`

#### `gist_id`

Type: `string`

ID of the gist. Something like [`420166ca54b7afe55476`](https://gist.github.com/icyflame/420166ca54b7afe55476)

#### `callback`

Type: `function`

This should take two arguments: `err` and `user`, where `err` is the request error (or `null` if everything worked), and `user` is the name of the gist owner.

## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
