Template.navbar.helpers({
	isSearching: function() {
		return Session.get('isSearching');
	}
})

Template.navbar.events({
	'click a.mdi-action-search' : function(e,t) {
		e.preventDefault();

		//Set isSearching reactive variable to true
		Session.set('isSearching', true);
	},
	'click a.mdi-navigation-close': function (e,t) {
		e.preventDefault();

		//Set isSearching reactive variable to false
		Session.set('isSearching', false);
	},
	'click a.mdi-action-perm-identity': function(e,t) {
		e.preventDefault();
		// debugger

		// Activates the dropdown menu in nav
		$('.dropdown-button').dropdown();
	}
})