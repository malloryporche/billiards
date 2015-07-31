Template.players.helpers({
	players: function() {
		return Players.find();
	},
	no: function() {
		return Players.find().count();
	},
	isAddingPlayer: function() {
		return Session.get('isAddingPlayer');
	}
})

Template.players.events({
	'click a.create': function(e,t) {
		return Session.set('isAddingPlayer', true);
	},
	'click a.cancel':function(e,t) {
		e.preventDefault();
		Session.set('isAddingPlayer', false);
	},
})