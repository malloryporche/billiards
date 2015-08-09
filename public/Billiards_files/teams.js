(function(){Teams = new Mongo.Collection('teams');

Teams.allow({
	insert: function(userId, doc) {
		//User must be logged in and document must be
		//owned by the user
		return (userId && doc.ownerId === userId);
	},
	update: function (userId, doc, fields, modifier) {

		//Can only change/edit your own documents
		return doc.ownerId === userId;
	},
	remove: function (userId, doc) {
		
		//Can only remove your own documents
		return (doc.ownerId === userId);
	},
	fetch: ['ownerId']
});

})();
