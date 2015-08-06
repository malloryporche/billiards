Template.teams.helpers({
	isCreatingTeam: function(){
    	return Session.get('isCreatingTeam');
  	},
	teams: function(){
		return Teams.find();
	}
});

Template.teams.events({
	'submit form.create-team': function(e,t){
		e.preventDefault();
		debugger 

		var team = {
			name: t.$('input[name=name]').val(),
			ownerId: Meteor.userId()
		};
		Meteor.call('createTeam', team.name, ownerId, function (error, result) {
			if(error) {
				sAlert.success(teamName + ' has been added to your Teams database');
			} else {
				Session.set('isCreatingTeam', false);
			}
	});
},

	//Delete team
	'click a.remove': function(e,t){
		e.preventDefault();
		Teams.remove(this._id);
	}
});