import Ember from 'ember';

export default Ember.Controller.extend({
  author: 'Serban B.',
  time: function () {
    return (new Date()).toDateString();
  }.property()
});
