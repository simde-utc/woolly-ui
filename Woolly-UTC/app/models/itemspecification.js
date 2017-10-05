import DS from 'ember-data';

export default DS.Model.extend({
  price : DS.attr('number'),
  quantity: DS.attr('number'),
  nemopayId: DS.attr('number'),

  woollyUserType: DS.belongsTo('woollyusertype'),
});
