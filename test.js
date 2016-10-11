/* global it */
'use strict';

var assert = require('assert');
var ghGistOwner = require('./');

it('gets the owner', function () {
  assert.strictEqual(
    ghGistOwner.sync('420166ca54b7afe55476'),
    'icyflame'
  );
});

it('gets the owner asynchronously', function (done) {
  ghGistOwner.async(
    '420166ca54b7afe55476',
    function (owner) {
      assert.strictEqual(owner, 'icyflame');
      done();
    }
  );
});
