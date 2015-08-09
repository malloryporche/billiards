(function(){
Template.__checkName("teams");
Template["teams"] = new Template("Template.teams", (function() {
  var view = this;
  return [ HTML.Raw('<h3 class="header"><i class="mdi-social-group-add left"></i>Teams</h3>\n\n	'), HTML.UL("\n		", Blaze.Each(function() {
    return Spacebars.call(view.lookup("teams"));
  }, function() {
    return [ "\n			", HTML.LI({
      "class": "teamName card-panel z-depth-4 hoverable"
    }, Spacebars.include(view.lookupTemplate("team"))), "\n		" ];
  }), "\n	") ];
}));

})();
