Template.players.helpers({
	players: function() {
		return Players.find();
	}
	
})

Template.players.events({

	'click a.remove': function(e,t){
		e.preventDefault();
		Players.remove(this._id);
	},

	'click a.edit.mdi-image-edit': function(e,t){
		e.preventDefault();

		var playerName = t.$('input[name="name"]').val(),
			formElement = t.find('form')
			self = this;

		if(teamName.length) {
			Teams.update(this._id, {$set: {name: teamName}},
				function(error){

					if(!error){

						//Update games this team is a part of
						var games = Games.find({_id: {$in: self.gameIds}});

						if(games.count()){
							_(games.fetch()).each(function(game){
								var team = _(game.teams).findWhere({_: self._id});
								if(team != null){
									team.name = teamName;
									Games.update({_id: game._id}, {$set: {teams: game.teams}})
								}
							});
						}
					}
				});

			formElement.reset();
			Session.set('editedTeamId', null);
		}
	},

})