/* global it */
'use strict';

var assert = require('assert');
var ghGistOwner = require('./');

it('defaults correctly', function () {
  assert.strictEqual(ghGistOwner, ghGistOwner.sync);
});

it('gets the owner', function () {
  assert.strictEqual(
    ghGistOwner.sync('420166ca54b7afe55476'),
    'icyflame'
  );
});

it('gets the owner asynchronously', function (done) {
  ghGistOwner.async(
    '420166ca54b7afe55476',
    function (err, owner) {
      assert.strictEqual(owner, 'icyflame');
      assert.strictEqual(err, null);
      done();
    }
  );
});
