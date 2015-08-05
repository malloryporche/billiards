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
	},
	isCreatingGame: function() {
		return Session.get('isCreatingGame');
	}
})

Template.navbar.events({
	//Toggle between normal navbar and input
	'click a.mdi-social-person-add': function(e,t) {
		return Session.set('isAddingPlayer', true);
	},
	//Take input from form and input to database
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
	'submit form.create-team': function(e,t) {
		// debugger
		e.preventDefault();

		var teamName = t.$('input[name="teamName"]').val(),
			self = this;

		Meteor.call('createTeam', teamName, function (error, result) {
			if(error) {
				sAlert.success('teamName has been added to your Teams database');
			} else {
				Session.set('isCreatingTeam', false);
			}
		});
	},
		

	//Toggle between normal navbar and search-form, addplayers
	'click a.mdi-navigation-close.close-search': function(e,t) {
		// debugger
		e.preventDefault();
		Session.set('isSearching', false);
	},
	'click a.mdi-navigation-close.close-add-player':function(e,t) {
		// debugger
		e.preventDefault();
		Session.set('isAddingPlayer', false);
	},
	'click a.mdi-navigation-close': function(e, t) {
		e.preventDefault();
		Session.set('isCreatingTeam', false);
	},

	//Toggle alternate input form on to search, addTeam.  
	//Set isSearching reactive variable to true
	'click a.mdi-action-search' : function(e,t) {
		e.preventDefault();
		Session.set('isSearching', true);
	},
	'click a.mdi-social-group-add.create-team': function(e,t) {
		// debugger
		e.preventDefault();	
		Session.set('isCreatingTeam', true);
	},
	'click a.mdi-action-perm-contact-cal': function(e,t) {
		debugger
		e.preventDefault();
		Session.set('isCreatingGame', true);
	},
	'click a.cancel':function(e,t){
		e.preventDefault();
		Session.set('isCreatingGame', false);
	},

	
	//Toggle dropdown menu to reveal login buttons
	'click a.mdi-action-perm-identity': function(e,t) {
		e.preventDefault();
		// debugger
		// Activates the dropdown menu in nav
		$('.dropdown-button').dropdown();
	},
	

	'click a.mdi-social-group-add': function(e,t) {
		e.preventDefault();
	}

});