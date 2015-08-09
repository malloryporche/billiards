(function(){Template.games.helpers({
	games: function() {
		return Games.find();
	},
	isCreatingGame: function() {
		return Session.get('isCreatingGame');
	},
	teams: function() {
		return Teams.find();
	}
})

Template.games.events({
	'click a.create': function(e,t){
		e.preventDefault();
		Session.set('isCreatingGame', true);
	},
	'submit form.form-create-game': function(e,t){
		e.preventDefault();
		debugger

		var team1 = {
			  _id: t.$("select[name=teamOne]").val(),
		      name: t.$("select[name=teamOne] option:selected").text(),
		      score: 0
    		}
 
	    var team2 = {
		      _id: t.$("select[name=teamTwo]").val(),
		      name: t.$("select[name=teamTwo] option:selected").text(),
		      score: 0
    		}
 		Meteor.call('createGame', team1, team2);

 
    var gameId = Games.insert(game);

    // Add this game to both teams gameIds
    Teams.update({_id: team1._id}, {$addToSet: { gameIds: gameId}});
    Teams.update({_id: team2._id}, {$addToSet: { gameIds: gameId}});    

    Session.set('isCreatingGame', false);
  },
  'click a.cancel': function(e,t){
  		e.preventDefault();
  		Session.set('isCreatingGame', false);
  }

	
});

})();
