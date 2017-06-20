import Ember from 'ember';

export default Ember.Route.extend({
    redirectToLogin: function(transition) {
      // alert('You must log in!');
      console.log(transition);
      // console.log("url" + transition.intent.name);
      console.log(window.location.href.split("?")[0]);
      var loginController = this.controllerFor('login');
      loginController.set('logged',false);
      loginController.set('routeToRedirect',transition.intent.url);
      this.transitionTo('login');
  },
    actions: {
      error: function(error, transition) {
        console.log(window.location.href.split("?")[0]);
          if (error.errors[0].status === '403') {
              console.log(error);
              console.log("403 error. Redirecting ...");
              console.log(transition);
              console.log('transition intent url: ' + transition.intent.url);
              this.redirectToLogin(transition);
          } else {
              console.log(error.errors[0].status);
              console.log(error);
              window.alert('Unknown error : status ' + error.errors[0].status);
              this.redirectToLogin(transition);
              // this.transitionTo('login');
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
