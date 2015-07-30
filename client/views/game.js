Template.game.events({
	'click a.finish-game': function(e,t){
		e.preventDefault();
		Games.update({_id: this._id}, {$set: {completed: true}});
	},
	'click a.delete-game': function(e,t){
		e.preventDefault();

		var gameID  = this._id,
			teamIdA = this.teams[0]._id,
			teamIdB = this.teams[1]._id;

		Games.remove(gameID, function(error) {
			if (!error) {
				Teams.update({_id: teamIdA}, {$pull: {gameIds: ghameId}});
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