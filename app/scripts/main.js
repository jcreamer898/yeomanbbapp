
window.yeomanbbapp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Templates: {},
  Vent: _.extend( {}, Backbone.Events ),
  init: function() {
    this.router = new yeomanbbapp.Router();
    Backbone.history.start();
  }  
};

$(document).ready(function(){
  yeomanbbapp.init();
});
