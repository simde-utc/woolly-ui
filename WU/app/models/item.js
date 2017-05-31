import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  quantity : attr('number'),
  initialQuantity: attr('number'),
  name: attr('string'),
  description: attr('string'),
  initialQuantity : attr('number'),
  remainingQuantity: attr('number'),

  // saleId : belongsTo('sale'),
  // prices : hasMany('price'),
  // group : belongsTo('group'),
});
