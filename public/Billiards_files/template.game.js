(function(){
Template.__checkName("game");
Template["game"] = new Template("Template.game", (function() {
  var view = this;
  return HTML.LI("\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("completed"));
  }, function() {
    return [ "\n\n			", Blaze.If(function() {
      return Spacebars.call(view.lookup("isEditingGame"));
    }, function() {
      return [ "\n\n				", Spacebars.include(view.lookupTemplate("formEdit")), "\n\n				" ];
    }, function() {
      return [ "\n				\n				", Blaze.View("lookup:teams.0.name", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("teams"), "0", "name"));
      }), "\n					vs\n				", Blaze.View("lookup:teams.1.name", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("teams"), "1", "name"));
      }), "\n\n			" ];
    }), "\n			\n			", HTML.A({
      href: "#",
      "class": "mdi-action-delete"
    }), "\n\n		" ];
  }, function() {
    return [ "\n		\n		", HTML.LI({
      "class": "gameName"
    }, "\n			", Blaze.View("lookup:teams.0.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("teams"), "0", "name"));
    }), "\n			(", HTML.A({
      href: "#",
      "class": "score",
      "data-inc": "-1",
      "data-index": "0"
    }, "-"), ")\n			", Blaze.View("lookup:teams.0.score", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("teams"), "0", "score"));
    }), "\n			(", HTML.A({
      href: "#",
      "class": "score",
      "data-inc": "1",
      "data-index": "0"
    }, "+"), ")\n			vs\n			", Blaze.View("lookup:teams.1.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("teams"), "1", "name"));
    }), "\n			(", HTML.A({
      href: "#",
      "class": "score",
      "data-inc": "-1",
      "data-index": "1"
    }, "-"), ")\n			", Blaze.View("lookup:teams.1.score", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("teams"), "1", "score"));
    }), "\n			(", HTML.A({
      href: "#",
      "class": "score",
      "data-inc": "1",
      "data-index": "1"
    }, "+"), ")\n		"), "\n			\n		", HTML.SPAN({
      "class": "icons"
    }, "\n			", HTML.A({
      href: "#",
      "class": "mdi-action-done mdi-game-completed"
    }), "\n			", HTML.A({
      href: "#",
      "class": "mdi-action-delete"
    }), "\n		"), "\n\n\n		" ];
  }), "\n\n	");
}));

})();
