import ApplicationAdapter from './application';
import Ember from 'ember';


export default ApplicationAdapter.extend({
  queryRecord(modelName, query) {
    return Ember.$.getJSON("http://woolly.etu-utc.fr/api/1.0/users/");
  }
});

// import DS from "ember-data";
//
// export default DS.Adapter.extend({
//   queryRecord(modelName, query) {
//     return Ember.$.getJSON("http://woolly.etu-utc.fr/api/1.0/users");
//   }
// });
