import DS from 'ember-data';
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  // sale_id:belongsTo('sale'),
  quantity : attr('number'),
  status : attr('string'),
  payed: Ember.computed.equal('status', 'payed')

  // cart : hasMany('cart'),
  // user : belongsTo('user'),
  // saleId : belongsTo('sale'),
  // pictureUrl : DS.attr('string'), // image d'un order ?

});
//payment_methods
//user
//Asso
//cart
