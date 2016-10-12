'use strict';

var asyncRequest = require('then-request');
var syncRequest = require('sync-request');

var options = {
  'headers': {
    'user-agent': 'http://github.com/icyflame/gh-gist-owner'
  }
};

var url = function (id) {
  return 'https://api.github.com/gists/' + id;
};

module.exports = function (str) {
  var res = syncRequest('GET', url(str), options);
  return JSON.parse(res.getBody()).owner.login;
};

module.exports.sync = module.exports;

module.exports.async = function (str, cb) {
  asyncRequest(
    'GET',
    url(str),
    options,
    function (err, res) {
      var data = err
        ? null
        : JSON.parse(
            res.getBody()
        ).owner.login;

      cb(err, data);
    });
};
