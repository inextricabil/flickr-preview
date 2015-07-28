import Ember from 'ember';

export default Ember.Component.extend({


  show: function() {



    this.$('.modal').modal().on('hidden.bs.modal', function() { //clicked outside the modal

      if (this.attrs.closeModal) {
        this.attrs.closeModal();
        Ember.$('body').removeClass('modal-open');
        Ember.$('.modal-backdrop').remove(); //delete background
      }

      // this.$(".modal").detach().modal();
      // Ember.$('body').removeClass('modal-open');
      // Ember.$('.modal-backdrop').remove(); //delete background


    }.bind(this));
  }.on('didInsertElement'),



  actions: {

    closeModal: function() { //close the modal

      // this.$(".modal").detach().modal();
      // Ember.$('body').removeClass('modal-open');
      // Ember.$('.modal-backdrop').remove(); //delete background

      if (this.attrs.closeModal) {
        this.attrs.closeModal();
        Ember.$('body').removeClass('modal-open');
        Ember.$('.modal-backdrop').remove(); //delete background
      }
    }

  }
});
