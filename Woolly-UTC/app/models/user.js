import DS from 'ember-data';

export default DS.Model.extend({
  login : DS.attr('string'),
  password : DS.attr('string'),
  woollyusertype : DS.belongsTo('woollyusertype')
});
