(function(){
Template.__checkName("teamProfile");
Template["teamProfile"] = new Template("Template.teamProfile", (function() {
  var view = this;
  return HTML.DIV({
    "class": "card-panel z-depth-5"
  }, "\n	", HTML.DIV({
    "class": "card-panel z-depth-4 indigo"
  }, "\n	", HTML.Raw('<img src="/images/ben.jpg" alt="" class="card-panel z-depth-4 playerProfileAvatar">'), "\n\n		", HTML.H3({
    "class": "playerName"
  }, Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), "\n		", HTML.Raw('<a href="#" class="mdi-image-edit"></a>'), "\n		", HTML.INPUT({
    type: "checkbox",
    "class": function() {
      return [ "favorites ", Blaze.If(function() {
        return Spacebars.call(view.lookup("favorite"));
      }, function() {
        return " mdi-action-favorite ";
      }, function() {
        return " mdi-action-favorite-outline ";
      }) ];
    }
  }), "\n		"), "\n\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("isUpdatingTeamProfile"));
  }, function() {
    return [ "\n		", HTML.H5("\n			", Spacebars.include(view.lookupTemplate("teamProfileInfo")), "\n		"), "\n		" ];
  }, function() {
    return [ "\n			", HTML.H5(Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n			\n		" ];
  }), "\n		"), "\n\n		", HTML.DIV({
    "class": "card-panel light-green z-depth-2"
  }, "\n		", HTML.Raw('<h5 class="playerProfileStats">Team Stats</h5>'), "\n			\n			", HTML.H6({
    "class": "card-panel z-depth-3 light-green darken-2"
  }, " \n			", HTML.DIV({
    "class": "display-scores"
  }, "\n				", HTML.Raw('<span class="score-title">Team Wins</span>'), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:teamWins", function() {
    return Spacebars.mustache(view.lookup("teamWins"));
  }), "\n			"), "\n\n			", HTML.DIV({
    "class": "display-scores"
  }, "\n				", HTML.Raw('<span class="score-title">Team Losses</span>'), HTML.Raw("<br>"), Blaze.View("lookup:teamLosses", function() {
    return Spacebars.mustache(view.lookup("teamLosses"));
  }), "\n			")), "\n\n		"), HTML.Raw("\n		<!-- {{> Favorite}} -->\n\n		"), HTML.DIV({
    "class": "card-panel indigo darken-3 z-depth-2 profile-header"
  }, "\n			", HTML.Raw("<h5>Recent Games</h5>"), "\n\n				", Blaze.Each(function() {
    return Spacebars.call(view.lookup("games"));
  }, function() {
    return [ "\n					", Spacebars.include(view.lookupTemplate("game")), "\n				" ];
  }), "\n		"), HTML.Raw('\n\n		<div class="card-panel amber z-depth-2 profile-header">\n			<h5>Team Roster</h5>\n		</div>\n	'));
}));

})();
