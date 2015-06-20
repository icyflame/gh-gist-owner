# gh-gist-owner [![Build Status](https://travis-ci.org/icyflame/gh-gist-owner.svg?branch=master)](https://travis-ci.org/icyflame/gh-gist-owner)

> My perfect module


## Install

```
$ npm install --save gh-gist-owner
```


## Usage

```js
var ghGistOwner = require('gh-gist-owner');

ghGistOwner('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global gh-gist-owner
```
```
$ gh-gist-owner --help

  Usage
    gh-gist-owner [input]

  Example
    gh-gist-owner
    unicorns & rainbows

    gh-gist-owner ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### ghGistOwner(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
