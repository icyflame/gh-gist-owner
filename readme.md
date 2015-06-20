# gh-gist-owner [![Build Status](https://travis-ci.org/icyflame/gh-gist-owner.svg?branch=master)](https://travis-ci.org/icyflame/gh-gist-owner)

> Get the owner of any gist-id


## Install

```
$ npm install --save gh-gist-owner
```


## Usage

```js
var ghGistOwner = require('gh-gist-owner');

ghGistOwner('gist-id');
// owner-github-username
ghGistOwner('420166ca54b7afe55476');
//=> icyflame
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

### ghGistOwner(gist_id)

#### gist_id

*Required*  
Type: `string`

ID of the gist 
Something like 420166ca54b7afe55476, which can be found at

https://gist.github.com/icyflame/420166ca54b7afe55476


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
