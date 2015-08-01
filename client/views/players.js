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
	'click form.create-player': function(e,t) {
		e.preventDefault();

		var player = {
			name: t.$('input[name=name]').val(),
			ownerId: Meteor.userId()
		};

		Players.insert(player, function(error, _id){
			if(error){
				alert(error);
				Session.set('isAddingPlayer', true);
				Tracker.afterFlush(function(){
					t.$('input[name=name]').val(player);
				});
			};
		});
		Session.set('isAddingPlayer', false);
	},
	'click a.remove': function(e,t){
		e.preventDefault();
		Teams.remove(this._id);
	}

})