import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    openModal: function() {

      Ember.$('.modal').modal('show');
      this.set("showModal", true);
      this.set('siteURL', 'http://localhost:4200/');                                                      // site URL for IMGS LINKS
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
