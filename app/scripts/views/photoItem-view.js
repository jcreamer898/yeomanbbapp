yeomanbbapp.photoItemView = Backbone.View.extend({

    template: "#photoItem",
    tagName: "li",
    initialize: function() {
        yeomanbbapp.Templates.photoItem = yeomanbbapp.Templates.photoItem || 
            _.template( $( this.template ).html() );

        this.render();
    },
    render: function() {
        var html = yeomanbbapp.Templates.photoItem( this.model.toJSON() );
        this.$el.html( html );
    }
});
