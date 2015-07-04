'use strict';
module.exports = function (str, opts) {
  var request = require('sync-request');

  var options_obj = {
    'headers': {
      'user-agent': 'http://github.com/icyflame/gh-gist-owner'
    }
  };
  var res = request('GET', 'https://api.github.com/gists/' + str, options_obj);

  var body = JSON.parse(res.getBody());

  return body.owner.login;

};
