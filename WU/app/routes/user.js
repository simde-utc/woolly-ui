import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.queryRecord('user', {});
    // return this.store.findRecord('user', '123456789'); // or any other user
}
});
