(function(){
Template.__checkName("team");
Template["team"] = new Template("Template.team", (function() {
  var view = this;
  return HTML.LI("\n	\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isEditingTeam"));
  }, function() {
    return [ "\n\n    	", Spacebars.include(view.lookupTemplate("formEdit")), "\n\n    " ];
  }, function() {
    return [ "\n\n     \n		", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "teamDetailPage");
      }
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "  \n		", HTML.SPAN("\n			", HTML.A({
      href: "#",
      "class": "icons mdi-image-edit"
    }), "\n    		", HTML.A({
      href: "#",
      "class": "icons mdi-action-delete"
    }), "\n		"), "\n		\n    	\n\n    " ];
  }), "\n  ");
}));

})();
