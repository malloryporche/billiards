Meteor.publish('teams', function(){
	return Teams.find({ownerId: this.userId});
});

Meteor.publish('players', function() {
	return Players.find({});
})

Meteor.publish('games', function() {
	return Games.find();
});