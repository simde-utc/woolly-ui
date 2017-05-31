import Ember from 'ember';

export default Ember.Route.extend({
  //sales
  model() {
    return this.store.findAll('sale');
}
});
