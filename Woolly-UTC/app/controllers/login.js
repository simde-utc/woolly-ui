import Ember from 'ember';

export default Ember.Controller.extend({
  session:Ember.inject.service('session'),
  actions: {
    loginUTC_auth() {
      // const { login, password } = this.getProperties('authenticator:oauth2');
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
               var logged = this.get('logged');
               console.log('routeToRedirect : ' + routeToRedirect +'\n');
               console.log('logged : ' + logged +'\n');
               if (routeToRedirect) {
                //  window.location.replace("http://127.0.0.1:8000/login?next="+"http://localhost:4200/" + routeToRedirect);
                 window.location.replace("http://127.0.0.1:8000/login?next=http://localhost:4200"+ routeToRedirect);
                 console.log("connexion à 127.0.0.1:8000/login, service : " +routeToRedirect);
                 this.set('routeToRedirect', null);
               } else {
                 // Redirect to sales list by default.
                   window.location.replace("http://127.0.0.1:8000/login?next="+"http://localhost:4200/ventes");
               }
              //make transition to CAS authenticator
              // window.location.replace("https://cas.utc.fr/cas/login?service="+ window.location.href.split("?")[0]);
              // window.location.replace("http://127.0.0.1:8000/login?next="+ window.location.href.split("?")[0]);
              //   window.location.replace("http://127.0.0.1:8000/login?next="+"http://localhost:4200/ventes");
              // console.log("connexion à 127.0.0.1:8000/login, service : " +window.location.href.split("/")[0] );
          },
    logoutUTC() {
      // this.get('session').invalidate();
      window.location.replace("http://127.0.0.1:8000/logout?next="+ window.location.href.split("?")[0]);
    }
  }
});
