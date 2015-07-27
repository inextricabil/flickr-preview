import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    openModal: function () {
      $('.modal').modal('show');
      this.set("showModal", true);
    },

    close: function () {
      this.set('showModal', false);
    }
  }
});
