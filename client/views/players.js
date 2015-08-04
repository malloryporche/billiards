Template.players.helpers({
	players: function() {
		return Players.find();
	},
	no: function() {
		return Players.find().count();
	},
	
})

Template.players.events({

	'click a.remove': function(e,t){
		e.preventDefault();
		Players.remove(this._id);
	}

})