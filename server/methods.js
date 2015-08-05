Meteor.methods({
addNewPlayer: function (value0, value1) {
   var addNewPlayer = Players.insert({ 
        'name': value0, 
        'timestamp': value1, 
        'favorite': false,
        'ownerId' : Meteor.userId(),
        'gameIDs':[],
        'teamIDs':[],
        'teamWins':0,
        'teamLosses':0,
        'personalWins': 0,
        'personalLosses':0,
        'profileImage': "/ben.jpg"
    });
      Players.insert(player, function(error, _id){
      if(error){
        alert(error);
        Session.set('isAddingPlayer', true);
        Tracker.afterFlush(function(){
          t.$('input[name=name]').val(player);
           Session.set('isAddingPlayer', false);

        });
      };
    });
   
   return addNewPlayer;
 },

 updatePlayerName: function(value0, value1) {
  var updatePlayer = Players.update(
                    {'_id': this._id}, 
                    {$set: {name: playerName}});
 },

 createTeam: function(value0) {
   var createTeam = Teams.insert({
        'name': value0,
        'timestamp': new Date,
        'favorite': false,
        'ownerId': Meteor.userId(),
        'gameIds': [],
        'teamWins': 0,
        'teamLosses': 0

   });
   Teams.insert(team, function(error, _id) {
      if(error) {
        alert(error);
        sAlert.error('Problem creating new team');
      }
      return createTeam;
   })
 },

 createGame: function(value0, value1) {

    var createGame = Games.insert({
        'teamOneName': value0,
        'teamTwoName': value1,
        'createdAt': new Date,
        'favorite': false,
        'ownerId' : Meteor.userId(),
        'completed': false,
        'teamOneScore': 0,
        'teamTwoScore': 0
   
   });
   Teams.insert(team, function(error, _id) {
      if(error) {
        alert(error);
        sAlert.error('error', 'Problem creating new team');
      }
      return createGame;
   });
 },
 updateFavorites: function(value0, value1) {
  var updateFavorites = Players.update({'_id' : value0},
                                      {$set: {favorite : value1}});
      return updateFavorites;
      sAlert.success('Favorites successfully updated.');
 }

});  