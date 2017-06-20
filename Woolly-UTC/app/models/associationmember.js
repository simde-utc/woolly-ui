import DS from 'ember-data';
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  // sale_id:belongsTo('sale'),
  role : DS.attr('string'),
  rights : DS.attr('string'),

  association : DS.belongsTo('association'),
});
