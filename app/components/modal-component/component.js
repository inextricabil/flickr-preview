import Ember from 'ember';

export default Ember.Component.extend({


  show: function() {
    this.$('.modal').modal().on('hidden.bs.modal', function() {
      this.$(".modal").detach().modal();
      Ember.$('body').removeClass('modal-open');
      Ember.$('.modal-backdrop').remove();
    }.bind(this));
  }.on('didInsertElement'),



  actions: {

    closeModal: function() {
      this.$(".modal").detach().modal();
      Ember.$('body').removeClass('modal-open');
      Ember.$('.modal-backdrop').remove();
      //  this.$('.modal').modal('hide');
    }

  }
});


// CENTER THE MODAL //

// (function($) {
//
//   function centerModal() {
//     $(this).css('display', 'block');
//     var $dialog = $(this).find(".modal-dialog"),
//       offset = ($(window).height() - $dialog.height()) / 2,
//       bottomMargin = parseInt($dialog.css('marginBottom'), 10);
//
//     // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
//     if (offset < bottomMargin) {offset = bottomMargin;}
//     $dialog.css("margin-top", offset);
//   }
//
//   $(document).on('show.bs.modal', '.modal', centerModal);
//   $(window).on("resize", function() {
//     $('.modal:visible').each(centerModal);
//   });
// }(Ember.jQuery));
