import Ember from 'ember';

export default Ember.Controller.extend({
  session:Ember.inject.service('session'),
  actions: {
    loginUTC_auth() {
      this.get('session').authenticate('authenticator:wauth', window.location.href.split("?")[0]).then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        if(err.responseText){
          alert('Error obtaining token: ' + err.responseText);
        }
        else {
          alert('Error obtaining token, no connection to CAS');
        }
      });
    },
    loginUTC() {
              if(this.get("waiting-from-server")) {
                  return;
              }
              // get the route to redirect to
               var routeToRedirect = this.get('routeToRedirect');
               
               if (routeToRedirect) {
                 window.location.replace("http://127.0.0.1:8000/login?next=http://localhost:4200"+ routeToRedirect);

                 this.set('routeToRedirect', null);
               } else {
                 // Redirect to sales list by default.
                   window.location.replace("http://127.0.0.1:8000/login?next="+"http://localhost:4200/ventes");
               }
          },
    logoutUTC() {
      window.location.replace("http://127.0.0.1:8000/logout?next="+ window.location.href.split("?")[0]);
    }
  }
});
