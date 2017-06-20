import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function () {
            $('.search-right').hide();
    this.$('.list-group-item').click(function() {
      var id_desc = $(this).attr('id') + "_desc";
      $('.search-right').hide();
      // $('.search-right').toggleClass('hidden');
      // $('#'+id).toggleClass('hidden');
      // $('#'+id_desc).show();
      console.log(id_desc);
      $('#'+id_desc).fadeIn(300);
   });
  }
 //   didInsertElement: function () {
 //     this.$('div').mouseenter(function() {
 //     $(this).animate({
 //         width: '+=10px'
 //     });
 // });
 // this.$('div').mouseleave(function() {
 //     $(this).animate({
 //         width: '-=10px'
 //     });
 // });
 // this.$('div').click(function() {
 //     $(this).toggle(1000);
 // })
 // }
});
