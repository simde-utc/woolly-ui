import DS from 'ember-data';

// export default DS.ActiveModelAdapter.extend({  //ferait la decamelization tout seul comme un grand

import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
	namespace: 'api/1.0',
	host: 'http://woolly.etu-utc.fr'
});
// export default DS.JSONAPIAdapter.extend({
