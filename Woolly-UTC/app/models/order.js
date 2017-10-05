import DS from 'ember-data';

export default DS.Model.extend({
  date : DS.attr('date'),
  status : DS.attr('string'),

  orderlines : DS.hasMany('orderline')

});