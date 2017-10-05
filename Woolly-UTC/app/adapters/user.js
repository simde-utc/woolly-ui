import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  queryRecord() {
    return Ember.$.getJSON("http://woolly.etu-utc.fr/api/1.0/users/");
  }
});
