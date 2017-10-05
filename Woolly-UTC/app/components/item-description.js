import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function () {
    Ember.$('.search-right').hide();
    this.$('.list-group-item').click(function() {
      var id_desc = Ember.$(this).attr('id') + "_desc";
      Ember.$('.search-right').hide();
      Ember.$('#'+id_desc).fadeIn(300);
   });
  }
});
