import DS from 'ember-data';
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  // sale_id:belongsTo('sale'),
  name : DS.attr('string'),
  bankAccount : DS.attr('number'),
  fondationId : DS.attr('number'),

  sales : DS.hasMany('sale'),


});
