import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  name : DS.attr('string'),
  description: DS.attr('string'),
  maxitemQuantity: DS.attr('number'),
  creationDate : DS.attr('date'),
  endDate : DS.attr('date'), //date
  beginDate : DS.attr('date'), //date
  maxPaymentDate : DS.attr('date'), //date

  // paymentMethod : belongsTo('paymentMethod');
  // association_id : belongsTo('asso'),
  // items : hasMany('item'),

});
// "association_id"??

// payment_methods
