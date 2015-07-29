Meteor.publish('teams', function(){
	return Teams.find({});
});

Meteor.publish('players', function() {
	return Players.find({});
})