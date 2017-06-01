import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('order', '123456789'); // or any other user
    // return this.store.findAll('order'); //gat the orders from a user
}
});
