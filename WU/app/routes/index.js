import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    //page d'accueil
    this.replaceWith('ventes');
  }
});
