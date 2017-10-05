import DS from 'ember-data';

export default DS.Model.extend({
  role : DS.attr('string'),
  rights : DS.attr('string'),

  association : DS.belongsTo('association'),
});
