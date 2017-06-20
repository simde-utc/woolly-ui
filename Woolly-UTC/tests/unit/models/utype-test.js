import { moduleForModel, test } from 'ember-qunit';

moduleForModel('utype', 'Unit | Model | utype', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
