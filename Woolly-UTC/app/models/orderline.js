import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';


export default DS.Model.extend({
  order: attr('number'),
  quantity: attr('number'),

  item : belongsTo('item'),
});
