import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    keywords: {
      replace: true
    }
  },
  model: function(params) {
    var keywords = params ? params.keywords : null;
    return this._getPhotosByKeyword(keywords);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
  },
  _getPhotosByKeyword: function(keywords) {
    if (!keywords) {
      return;
    }
    return Ember.$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
      tags: keywords,
      tagmode: "any",
      format: "json"
    });
  },
  actions: {
    refreshpage: function (keywords){
      var self = this;
      this._getPhotosByKeyword(keywords).then(
        function(data) {
          self.controller.set("model", data);
        }
      );
    }
  }
});
