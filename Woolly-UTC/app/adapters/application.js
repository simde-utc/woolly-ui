import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

Ember.$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

export default JSONAPIAdapter.extend( {
	host: 'http://127.0.0.1:8000',
});