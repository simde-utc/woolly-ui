import DS from 'ember-data';
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
  items : hasMany('item'),
  paymentMethod : belongsTo('paymentmethod')

});
