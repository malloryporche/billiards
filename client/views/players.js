Template.players.helpers({
	players: function() {
		return Players.find();
	},
	no: function() {
		return Players.find().count();
	}
})