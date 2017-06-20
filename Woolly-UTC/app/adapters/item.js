import ApplicationAdapter from './application';
import DS from 'ember-data';

export default ApplicationAdapter.extend({
  // normalizeFindAllResponse(store, type, payload) {
  //   payload.data = payload.data.map(this.addLinks);
  //   return payload;
  // },
  //
  // normalizeFindRecordResponse(store, type, payload) {
  //   payload.data = this.addLinks(payload.data);
  //   return payload;
  // },
  //
  // addLinks(item) {
  //   item.type = 'item';
  //   delete item.relationships.itemspecifications.data;
  //   item.relationships.itemspecifications.links = {
  //     related: `/items/${item.id}/spec`
  //   };
  //   return item;
  // }
});
