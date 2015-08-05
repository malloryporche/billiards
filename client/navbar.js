Template.navbar.helpers({
	no: function() {
		return Players.find().count();
	},
	isAddingPlayer: function() {
		return Session.get('isAddingPlayer');
	},
	isSearching: function() {
		return Session.get('isSearching');
	},
	newPlayer: function() {
		return Session.get('addedNewPlayer');
	},
	isCreatingTeam: function() {
		return Session.get('isCreatingTeam');
	}
})

Template.navbar.events({
	'click a.mdi-social-person-add': function(e,t) {
		return Session.set('isAddingPlayer', true);
	},
	'click a.mdi-navigation-close.close-search':function(e,t) {
		debugger
		e.preventDefault();
		Session.set('isAddingPlayer', false);
	},
	'submit form.create-player': function(e,t) {
		e.preventDefault();

		var name =  t.$('input[name=name]').val(),
			timestamp = new Date,
			formElement = t.find('form.create-player');

		//Invoke method to create player
		Meteor.call('addNewPlayer', name, timestamp, function(error, result) {
			if (error) {
				SAlert.error('There was an error adding your player');
			} else {
				formElement.reset();
				Session.set('isAddingPlayer', false);
			}
		})

	},
	'click a.mdi-action-search' : function(e,t) {
		e.preventDefault();

		//Set isSearching reactive variable to true
		Session.set('isSearching', true);
	},
	'click a.close-search': function (e,t) {
		e.preventDefault();
		// debugger
		//Set isSearching reactive variable to false
		Session.set('isSearching', false);
	},
	'click a.mdi-action-perm-identity': function(e,t) {
		e.preventDefault();
		// debugger

		// Activates the dropdown menu in nav
		$('.dropdown-button').dropdown();
	},
	'click a.mdi-social-group-add': function(e,t) {
		debugger
		e.preventDefault();
		
		//Set isCreatingTeam to true
		Session.set('isCreatingTeam', true);
	},
	'click a.mdi-navigation-close': function(e, t) {
		e.preventDefault();

		Session.set('isCreatingTeam', false);
	},
	'click a.mdi-social-group-add': function(e,t) {
		e.preventDefault();
	}

});