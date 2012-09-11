yeomanbbapp.Router = Backbone.Router.extend({
    routes: {
        "": "main",
        "tags/:tags": "tags"
    },
    initialize: function() {
        this.appView = new yeomanbbapp.applicationView();
        this.flickr = new yeomanbbapp.flickrView();
    },
    main: function() {
	
    },
    tags: function( tags ) {
        yeomanbbapp.Vent.trigger( "reload", tags );
    }
});
