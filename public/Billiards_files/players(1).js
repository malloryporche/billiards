(function(){Template.players.helpers({
	players: function() {
		return Players.find();
	},
	isEditingPlayer: function() {
		return Session.get('editedPlayerId') === this._id;
	}
	
})

Template.players.events({

	'click a.remove': function(e,t){
		e.preventDefault();
		Players.remove(this._id);
	},
	'click a.mdi-image-edit': function(e,t){
		e.preventDefault();

		Session.set('editedPlayerId', this._id);
		Session.set('isEditingPlayer', true);
		debugger
	},
	'submit form.form-edit': function(e,t) {
		e.preventDefault();

		var playerName = t.$('input[name="name"]').val(),
			formElement = t.find('input[name="name"]'),
			self = this;

		Meteor.call('updatePlayerName', self._id, playerName);
			
			Session.set('editedTeamId', null);
		}
});

})();
