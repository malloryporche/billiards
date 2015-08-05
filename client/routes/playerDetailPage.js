Template.playerDetailPage.helpers({
	favorite: function(){
        if ( this.favorite ) {
            return true;
        } else {
            return false;
        }
    },
})

Template.playerDetailPage.events({
	'click input.favorites': function(e,t){
        // code goes here
        debugger

        var _id = this._id,
            currentFavoriteStatus = this.favorite,
            updatedFavoriteStatus = !this.favorite,
        	checked = $(e.currentTarget).is(':checked');

        // set this._id to the opposite of whatever favorites is stored as in collection
        if ( checked ) {
        	Meteor.call('updateFavorites', _id, updatedFavoriteStatus, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }
            });
    	} 
    },
})