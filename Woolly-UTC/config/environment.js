/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wu',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    //GOOGLE FONTS
    googleFonts: [
   'Open+Sans:300',
   'Roboto:300',
   'Raleway:300',
   'Nunito',
   'Lobster',
   'Quicksand',
   'Montserrat+Subrayada',
   'Slabo+27px'
 ],

 // Set or update content security policies
 contentSecurityPolicy: {
   'font-src': "'self' fonts.gstatic.com",
   'style-src': "'self' fonts.googleapis.com",
   'connect-src': "'self' utc.fr etuville.fr http://127.0.0.1:8000/"
 }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
