(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container indigo darken-2"
  }, "\n		\n		", Spacebars.include(view.lookupTemplate("navbar")), "\n\n		", HTML.SECTION({
    id: "main"
  }, "\n\n			", Spacebars.include(view.lookupTemplate("yield")), "\n		\n			", Spacebars.include(view.lookupTemplate("sAlert")), "\n			\n		"), "\n	\n	");
}));

})();
