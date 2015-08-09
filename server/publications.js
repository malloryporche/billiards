Meteor.publish('teams', function(){
	return Teams.find({ownerId: this.userId});
});

Meteor.publish('players', function() {
	return Players.find({ownerId: this.userId});
})

Meteor.publish('games', function() {
	return Games.find({ownerId: this.userId});
});
Meteor.publish('notifications', function() {
	return Notifations.find({ownerId: this.userId});
})