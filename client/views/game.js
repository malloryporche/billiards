Template.game.helpers({
	isEditingGame: function() {
		return Session.get('isEditingGame');
	}
})


Template.game.events({
	'click a.mdi-game-completed': function(e,t){
		e.preventDefault();
		Games.update({_id: this._id}, {$set: {completed: true}});
	},
	'click a.mdi-action-delete': function(e,t) {
		// debugger
		e.preventDefault();
		
		var gameId  = this._id,
			teamIdA = this.teams[0]._id,
			teamIdB = this.teams[1]._id;

		Games.remove(gameId, function (error) {
			if (!error) {
				Teams.update({_id: teamIdA}, {$pull: {gameIds: gameId}});
				Teams.update({_id: teamIdB}, {$pull: {gameIds: gameId}});
			}
		});
	},
	'click a.score': function(e,t){
		e.preventDefault();

		var data = $(e.currentTarget).data();
		var update = {$inc: {}};
		var selector = "teams." + data.index + ".score";

		update.$inc[selector] =  data.inc;
		Games.update({_id: this._id}, update);
	}
});
