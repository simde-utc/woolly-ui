import DS from 'ember-data';
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  login : DS.attr('string'),
  department : DS.attr('string'),
  lastName : DS.attr('string'),
  password : DS.attr('string'),
  birthdate : DS.attr('date'),
  pictureUrl : DS.attr('string'),

  fullName: Ember.computed('firstName', 'lastName', function(){
    return this.get('firstName')+" "+this.get('lastName');
  }),
  ofAge : Ember.computed('birthdate', function(){
    return ((new Date() - this.get('birthdate'))>=18);
  })

  // orders : hasMany('order'),
  // assos: hasMany('assoRole'),
  // user_type: DS.belongsTo('userType')

  // unpaid_orders : Ember.computed('orders.[]', function(){
  //   return this.get('orders').filter(function(order){
  //     //return true or false to include the item in the result
  //     return order.get("status")==="not_payed";
  //   })
  // }),
  // paid_orders : Ember.computed('orders.[]', function(){
  //   return this.get('orders').filter(function(order){
  //     //return true or false to include the item in the result
  //     return order.get("status")==="payed";
  //   })
  // })
});
