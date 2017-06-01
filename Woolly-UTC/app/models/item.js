import DS from 'ember-data';
import Model from 'ember-data/model';
import Ember from 'ember';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';


export default DS.Model.extend({
  quantity : attr('number'),
  name: attr('string'),
  description: attr('string'),
  initialQuantity : attr('number'),
  remainingQuantity: attr('number'),

  // saleId : belongsTo('sale'),
  // prices : hasMany('price'),
  // group : belongsTo('group'),
});
