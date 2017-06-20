import DS from 'ember-data';
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  price : DS.attr('number'),
  quantity: DS.attr('number'),
  nemopayId: DS.attr('number'),

  woollyUserType: belongsTo('woollyusertype'),
});
