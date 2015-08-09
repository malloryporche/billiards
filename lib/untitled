Notifications = new Mongo.Collection("notifications");

Notifications.allow({
	insert: function(userId, doc) {
		//User must be logged in and document must be
		//owned by the user
		return (userId && doc.ownerId === userId);
	},
	update: function (userId, doc, fields, modifier) {

		//Can only change/edit your own notifications
		return doc.ownerId === userId;
	},
	remove: function (userId, doc) {
		
		//Can only remove your own notifications
		return (doc.ownerId === userId);
	},
	fetch: ['ownerId']
});