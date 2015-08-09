(function(){
Template.__checkName("games");
Template["games"] = new Template("Template.games", (function() {
  var view = this;
  return [ HTML.Raw('<h3 class="header"><i class="mdi-action-perm-contact-cal left"></i>Games</h3>\n  '), Blaze.If(function() {
    return Spacebars.call(view.lookup("isCreatingGame"));
  }, function() {
    return [ "\n    ", HTML.FORM({
      "class": "form-create-game"
    }, "\n    ", HTML.DIV({
      "class": "input-field"
    }, "\n       ", HTML.SELECT({
      name: "teamOne"
    }, "\n        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("teams"));
    }, function() {
      return [ "\n          ", HTML.OPTION({
        value: function() {
          return Spacebars.mustache(view.lookup("_id"));
        }
      }, Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      })), "\n        " ];
    }), "\n      "), "\n    "), "\n     \n \n      vs\n      \n      ", HTML.DIV({
      "class": "input-field"
    }, "\n        ", HTML.SELECT({
      name: "teamTwo"
    }, "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("teams"));
    }, function() {
      return [ "\n            ", HTML.OPTION({
        value: function() {
          return Spacebars.mustache(view.lookup("_id"));
        }
      }, Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      })), "\n          " ];
    }), "\n        "), "\n      "), "\n      \n \n      ", HTML.BUTTON({
      type: "submit"
    }, "Submit"), "\n      ", HTML.A({
      "class": "cancel",
      href: "#"
    }, "Cancel"), "\n    "), "\n  " ];
  }, function() {
    return "\n\n  ";
  }), "\n\n	", HTML.UL("\n		", Blaze.Each(function() {
    return Spacebars.call(view.lookup("games"));
  }, function() {
    return [ "\n			", Spacebars.include(view.lookupTemplate("game")), "\n		" ];
  }), "\n	") ];
}));

})();
