import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  bankAccount : DS.attr('number'),
  fondationId : DS.attr('number'),

  sales : DS.hasMany('sale'),


});
