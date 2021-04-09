import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | interns/show', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:interns/show');
    assert.ok(controller);
  });
});
