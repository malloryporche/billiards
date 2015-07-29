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

		var teamName = t.$('input[name=name]').val();
		Teams.insert({name: teamName}, function(error, _id){
			if(error){
				alert(error);
				Session.set('isCreatingTeam', true);
				Tracker.afterFlush(function(){
					t.$('input[name=name]').val(teamName);
				});
			};
		});
	}
});