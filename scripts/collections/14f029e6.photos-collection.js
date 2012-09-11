yeomanbbapp.PhotosCollection = Backbone.Collection.extend({

  tags: [],

  model: yeomanbbapp.PhotoModel,

  sync: function( method, model, options) {
    _.bind( this.url, this );
    var params = _.extend({
      type: 'GET',
      dataType: 'jsonp',
      url: model.url(),
      processData: false
    }, options),
      self = this;

    window.jsonFlickrFeed = function( response ) {
        self.reset( response.items );
    };

    return $.ajax( params );
  },

  url: function() { 
      return "http://api.flickr.com/services/feeds/photos_public.gne?format=json" + 
        (this.tags.length ? "&tags=" + this.tags : "")
        + "&callback=?";
  }
});
