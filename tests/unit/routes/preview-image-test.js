import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | Preview-Image', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:preview-image');
    assert.ok(route);
  });
});
