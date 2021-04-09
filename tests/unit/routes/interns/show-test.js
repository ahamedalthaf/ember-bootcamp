import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | interns/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:interns/show');
    assert.ok(route);
  });
});
