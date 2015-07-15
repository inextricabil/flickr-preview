import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:["keywords"],
  keywords:null,
  onKeywordsChanged: Ember.observer("keywords", function(){
    var oldvalue = this.get("keywordsProxy");
    if (oldvalue !== this.get("keywords")) {
      this.set("keywordsProxy", this.get("keywords"));
    }
  }),
  onModelChanged: Ember.observer("model", function(){
    console.log(this.get("model")); //display model
  }),
  actions:
    {
      search: function() {
        this.set("keywords", this.get("keywordsProxy"));
      },

      clear: function (){
        Ember.$("#results").empty();
      }
    }
});
