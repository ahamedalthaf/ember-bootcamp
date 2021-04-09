import EmberObject from '@ember/object';
import SampleMixin from 'bootcamp-app/mixins/sample';
import { module, test } from 'qunit';

module('Unit | Mixin | sample', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let SampleObject = EmberObject.extend(SampleMixin);
    let subject = SampleObject.create();
    assert.ok(subject);
  });
});
