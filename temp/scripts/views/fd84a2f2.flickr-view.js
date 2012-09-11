yeomanbbapp.flickrView = Backbone.View.extend({
    el: "#photo-list",
    initialize: function() {
        this.photos = new yeomanbbapp.PhotosCollection();
        
        yeomanbbapp.Vent.on( "reload", function( tags ) {
            this.photos.tags = tags;
            this.photos.fetch();
        }, this);
        this.photos.on( "add reset", this.render, this );

        this.photos.fetch();
    },
    render: function() {
	this.$el.empty()
        this.photos.each( this.renderPhoto, this );
    },
    renderPhoto: function( photo ) {
        var photoItem = new yeomanbbapp.photoItemView({
            model: photo
        });
        this.$el.append( photoItem.$el );
    }
});
