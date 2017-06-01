import Ember from 'ember';

import DS from 'ember-data';

// export default DS.JSONAPISerializer.extend({
import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  //passer des snakes_cases au nonSnakeCases
  keyForAttribute(key) {
  return Ember.String.decamelize(key);
}
});
