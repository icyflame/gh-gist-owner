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

exports.sync = function (str) {
  var res = syncRequest('GET', url(str), options);
  return JSON.parse(res.getBody()).owner.login;
};

exports.async = function (str, cb) {
  asyncRequest('GET', url(str), options).done(function (res) {
    cb(JSON.parse(res.getBody()).owner.login);
  });
};
