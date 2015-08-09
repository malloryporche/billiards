(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return HTML.BODY("\n		\n		", HTML.DIV({
    "class": "card-panel z-depth-4 hoverable indigo"
  }, Spacebars.include(view.lookupTemplate("players"))), "\n		", HTML.DIV({
    "class": "card-panel z-depth-4 hoverable light-green"
  }, Spacebars.include(view.lookupTemplate("teams"))), "\n		", HTML.DIV({
    "class": "card-panel z-depth-4 indigo accent-4 hoverable"
  }, Spacebars.include(view.lookupTemplate("games"))), "\n\n	");
}));

})();
