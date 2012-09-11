yeomanbbapp.applicationView = Backbone.View.extend({
    events: {
        "change #search": "onChangeSearch"
    },
    el: "#appHome",
    onChangeSearch: function( event ) {
        var tags = $( event.target ).val(),
            url = tags.length ? "tags/" + tags : "";

        Backbone.history.navigate( url, true );
    }
    
});
