(function(){
Template.__checkName("players");
Template["players"] = new Template("Template.players", (function() {
  var view = this;
  return [ HTML.Raw('<h3 class="header"><i class="mdi-social-person-add"> Players</i></h3>\n\n	'), HTML.UL("\n		", Blaze.Each(function() {
    return Spacebars.call(view.lookup("players"));
  }, function() {
    return [ "\n\n			    ", Blaze.If(function() {
      return Spacebars.call(view.lookup("isEditingPlayer"));
    }, function() {
      return [ "\n\n			    	", Spacebars.include(view.lookupTemplate("formEdit")), "\n\n			    " ];
    }, function() {
      return "\n				\n				";
    }), "\n			\n				", HTML.LI({
      "class": "playerName card-panel z-depth-4 hoverable"
    }, HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "playerDetailPage");
      }
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n					", HTML.LI("\n						", HTML.SPAN("\n						", HTML.A({
      href: "#",
      "class": "edit mdi-image-edit"
    }), " \n			      		", HTML.A({
      href: "#",
      "class": "remove mdi-action-delete"
    }), "\n					"), "\n					"), "\n      		"), "\n\n		" ];
  }), "\n	") ];
}));

})();
