Template.team.helpers({
	isEditingTeam: function(){
		return Session.get('editedTeamId') === this._id;
	}
});

Template.team.events({
	'click a.edit': function(e,t){
		e.preventDefault();
		Session.set('editedTeamId', this._id);
	},
	'submit form.form-edit': function(e,t) {
		e.preventDefault();

		var teamName = t.$('input[name="name"]').val();
		if(teamName.length) {
			Teams.update(this._id, {$set: {name: teamName}});
			Session.set('editedTeamId', null);
		}
	},
	'click a.cancel': function(e,t){
		e.preventDefault();
		Session.set('editedTeamId', null);
	},
	'click a.remove': function(e,t){
		e.preventDefault();
		Teams.remove(this._id);
	}
});