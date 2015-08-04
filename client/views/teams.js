Template.teams.helpers({
	isCreatingTeam: function(){
    	return Session.get('isCreatingTeam');
  	},
	teams: function(){
		return Teams.find();
	}
});

Template.teams.events({
	'click a.create': function(e, t){
		e.preventDefault();

		Session.set('isCreatingTeam', true);
	},
	'click a.cancel': function(e, t){
		e.preventDefault();

		Session.set('isCreatingTeam', false);
	},
	'submit form.create-team': function(e,t){
		e.preventDefault();
		debugger 
		
		var team = {
			name: t.$('input[name=name]').val(),
			ownerId: Meteor.userId()
		};

		Teams.insert(team, function(error, _id){
			if(error){
				alert(error);
				Session.set('isCreatingTeam', true);
				Tracker.afterFlush(function(){
					t.$('input[name=name]').val(teamName);
				});
			};
		});
		Session.set('isCreatingTeam', false);
	},
	'click a.remove': function(e,t){
		e.preventDefault();
		Teams.remove(this._id);
	}
});