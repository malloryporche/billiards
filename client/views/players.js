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
	'submit form.create-player': function(e,t) {
		e.preventDefault();

		var name =  t.$('input[name=name]').val(),
			timestamp = new Date;
		

		//Invoke method to create player
		Meteor.call('addNewPlayer', name, timestamp, function(error, result) {
			if (error) {
				SAlert.error('There was an error adding your player');
			} else {
				Session.set('isAddingPlayer', false);
			}
		})

	},
	'click a.remove': function(e,t){
		e.preventDefault();
		Players.remove(this._id);
	}

})