import Ember from 'ember';

export default Ember.Route.extend({
    redirectToLogin: function(transition) {
      var loginController = this.controllerFor('login');
      loginController.set('logged',false);
      loginController.set('routeToRedirect',transition.intent.url);
      this.transitionTo('login');
  },
    actions: {
      error: function(error, transition) {
          if (error.errors[0].status === '403') {
              this.redirectToLogin(transition);
          } else {
              window.alert('Unknown error : status ' + error.errors[0].status);
              this.redirectToLogin(transition);
          }
      }
  },
  model() {
    // return this.store.findRecord('order', '1'); // or any other user
    // return this.store.findAll('order'); //gat the orders from a user
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      orders: this.store.findAll('order')
    });
}
});
