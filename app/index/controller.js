import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["keywords"],
  keywords: null,
  onKeywordsChanged: Ember.observer("keywords", function() {
    var oldvalue = this.get("keywordsProxy");
    if (oldvalue !== this.get("keywords")) {
      this.set("keywordsProxy", this.get("keywords"));
    }
  }),
  onModelChanged: Ember.observer("model", function() {
    var flickrobj = this.get("model"); //display model
    flickrobj.modified = (flickrobj.modified.replace("T", " - ")).replace("Z", " ");


    //replace all

    String.prototype.replaceAll = function(find, replace) {
      var str = this;
      return str.replace(new RegExp(find, 'g'), replace);
    };

    //
    for (var i = 0; i < flickrobj.items.length; i++) {

      //author - (formatare)
      if (!flickrobj.items[i].author) {
        flickrobj.items[i].author = 'Unknown';
      } else {
        flickrobj.items[i].author = flickrobj.items[i].author.substring(flickrobj.items[i].author.lastIndexOf("(") + 1, flickrobj.items[i].author.lastIndexOf(")"));
      }

      //date_taken (formatare)
      flickrobj.items[i].date_taken = flickrobj.items[i].date_taken.replace("T", " - ");
      var positionGMT = flickrobj.items[i].date_taken.lastIndexOf('-');
      flickrobj.items[i].date_taken = flickrobj.items[i].date_taken.substring(0, positionGMT);

      //big photo (formatare)
      flickrobj.items[i].media.b = flickrobj.items[i].media.m;
      var pos = flickrobj.items[i].media.b.lastIndexOf('m');
      flickrobj.items[i].media.b = flickrobj.items[i].media.b.substring(0, pos) + 'b' + flickrobj.items[i].media.b.substring(pos + 1);

      //add hashtags to string tags


      //
      //flickrobj.items[i].tags = '#' + flickrobj.items[i].tags;
      //flickrobj.items[i].tags = flickrobj.items[i].tags.replaceAll(" ", " #");

      /// array
      flickrobj.items[i].tags = flickrobj.items[i].tags.split(" ");

      for (var j = 0; j < flickrobj.items[i].tags.length; j++) {
        flickrobj.items[i].tags[j] = flickrobj.items[i].tags[j].substring(0, 70); //max tag length
      }


    }




    console.log(flickrobj);


    //{{photo-view author=image.author date=image.date_taken link=image.media.m tags=image.item.tags}}
  }),
  actions: {
    search: function() {
      var keywords = this.get("keywordsProxy");
      this.set("keywords", keywords);
      this.send("refreshpage", keywords);
      var imgContainer = document.getElementById('results');
      if (imgContainer.style.display === 'none') {
        imgContainer.style.display = 'block';
      }

    },

    clear: function() {
      var imgContainer = document.getElementById('results');
      imgContainer.style.display = 'none';
      //Ember.$("#results").empty();
      Ember.$("#search-input").val("");
    }


  }
});
