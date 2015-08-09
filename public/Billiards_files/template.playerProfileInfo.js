(function(){
Template.__checkName("playerProfileInfo");
Template["playerProfileInfo"] = new Template("Template.playerProfileInfo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row"
  }, "\n    ", HTML.FORM({
    "class": "col s12 updatePlayerProfileInfo"
  }, "\n      ", HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "input-field col s6"
  }, "\n          ", HTML.INPUT({
    placeholder: "Placeholder",
    id: "name",
    type: "text",
    "class": "validate",
    value: function() {
      return Spacebars.mustache(view.lookup("name"));
    }
  }), "\n          ", HTML.Raw('<label for="name">Name</label>'), "\n        "), "\n        ", HTML.Raw('<div class="input-field col s6">\n          <input id="last_name" type="text" class="validate">\n          <label for="last_name">Age</label>\n        </div>'), "\n      "), "\n     \n      ", HTML.Raw('<div class="row">\n        <div class="input-field col s12">\n          <input id="playerBirthdate" type="datepicker" class="datepicker">\n\n        </div>\n				<label for="playerBirthdate">Birthday</label>\n      </div>'), "\n      ", HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "input-field col s12"
  }, "\n          ", HTML.INPUT({
    id: "email",
    type: "email",
    "class": "validate",
    value: function() {
      return Spacebars.mustache(view.lookup("email"));
    }
  }), "\n          ", HTML.Raw('<label for="email">Email</label>'), "\n        "), "\n      "), "\n      ", HTML.Raw('<button class="btn waves-effect effect-light grey lighten-1 z-depth-5">Save changes</button>'), "\n    "), "\n  ");
}));

})();
