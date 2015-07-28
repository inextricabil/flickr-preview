import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    openModal: function() {

      Ember.$('.modal').modal('show');
      this.set("showModal", true);
    },
    closeModal: function() {
        this.set("showModal", false);
      }
      // close: function() {
      //   Ember.$('.modal').modal('hide');
      //   this.set("showModal".false);
      // }
  }
});
