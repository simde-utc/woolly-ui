import DS from 'ember-data';
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name : DS.attr('string'),
  description: DS.attr('string'),
  maxItemQuantity: DS.attr('number'),
  creationDate : DS.attr('date'),
  endDate : DS.attr('date'), //date
  beginDate : DS.attr('date'), //date
  maxPaymentDate : DS.attr('date'), //date
  asso : DS.attr('string'),

  // paymentMethod : belongsTo('paymentMethod');
  // association_id : belongsTo('asso'),
  items : hasMany('item'),
  // paymentMethods : hasMany('paymentmethod'),
  paymentMethod : belongsTo('paymentmethod'),

});
// "association_id"??

// payment_methods
