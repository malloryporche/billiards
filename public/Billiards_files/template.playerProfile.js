(function(){
Template.__checkName("playerProfile");
Template["playerProfile"] = new Template("Template.playerProfile", (function() {
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
    return Spacebars.call(view.lookup("isUpdatingProfileInfo"));
  }, function() {
    return [ "\n		", HTML.H5("\n			", Spacebars.include(view.lookupTemplate("playerProfileInfo")), "\n		"), "\n		" ];
  }, function() {
    return [ "\n			", HTML.H5(Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n			", HTML.H5(Blaze.View("lookup:birthdate", function() {
      return Spacebars.mustache(view.lookup("birthdate"));
    })), "\n			", HTML.H5(Blaze.View("lookup:playerEmail", function() {
      return Spacebars.mustache(view.lookup("playerEmail"));
    })), "\n		" ];
  }), "\n		"), "\n\n		", HTML.DIV({
    "class": "card-panel indigo darken-3 z-depth-2"
  }, "\n		", HTML.Raw('<h5 class="playerProfileStats">Player Stats</h5>'), "\n			", HTML.H6({
    "class": "card-panel z-depth-3  indigo darken-1"
  }, " \n			", HTML.DIV({
    "class": "display-scores"
  }, "\n				", HTML.Raw('<span class="score-title">Wins</span>'), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:personalWins", function() {
    return Spacebars.mustache(view.lookup("personalWins"));
  }), "\n			"), "\n\n			", HTML.DIV({
    "class": "display-scores"
  }, "\n				", HTML.Raw('<span class="score-title">Losses</span>'), HTML.Raw("<br>"), Blaze.View("lookup:personalLosses", function() {
    return Spacebars.mustache(view.lookup("personalLosses"));
  }), "\n			")), "\n			\n			", HTML.H6({
    "class": "card-panel z-depth-3 indigo darken-1"
  }, " \n			", HTML.DIV({
    "class": "display-scores"
  }, "\n				", HTML.Raw('<span class="score-title">Team Wins</span>'), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:teamWins", function() {
    return Spacebars.mustache(view.lookup("teamWins"));
  }), "\n			"), "\n\n			", HTML.DIV({
    "class": "display-scores"
  }, "\n				", HTML.Raw('<span class="score-title">Team Losses</span>'), HTML.Raw("<br>"), Blaze.View("lookup:teamLosses", function() {
    return Spacebars.mustache(view.lookup("teamLosses"));
  }), "\n			")), "\n\n		"), HTML.Raw('\n		<!-- {{> Favorite}} -->\n\n		<div class="card-panel light-green z-depth-2 profile-header">\n			<h5>Recent Games</h5>\n		</div>\n\n		<div class="card-panel amber z-depth-2 profile-header">\n			<h5>Recent Teams</h5>\n		</div>\n	'));
}));

})();
