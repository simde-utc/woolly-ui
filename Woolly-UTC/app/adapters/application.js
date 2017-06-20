import DS from 'ember-data';

// export default DS.ActiveModelAdapter.extend({  //ferait la decamelization tout seul comme un grand

// import RESTAdapter from 'ember-data/adapters/rest';
//
// export default RESTAdapter.extend({
// 	// namespace: 'api/1.0',
// 	// host: 'http://woolly.etu-utc.fr'
// 	host: 'http://127.0.0.1:8000'
// });
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

export default JSONAPIAdapter.extend( {
    // host: config.API_HOST,
		host: 'http://127.0.0.1:8000',
    // authorizer: 'authorizer:api'
});

// Ember.$.ajaxSetup(
//   crossDomain: true
//   xhrFields:
//     withCredentials: true
// )
