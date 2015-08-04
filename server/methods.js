Meteor.methods({
addNewPlayer: function (value0, value1) {
   var addNewPlayer = Players.insert({ 
        'name': value0, 
        'timestamp': value1, 
        'favorite': false,
        'ownerId' : Meteor.userId()
    });
      Players.insert(player, function(error, _id){
      if(error){
        alert(error);
        Session.set('isAddingPlayer', true);
        Tracker.afterFlush(function(){
          t.$('input[name=name]').val(player);
        });
      };
    });
    Session.set('isAddingPlayer', false);

   return addNewPlayer;
 }
});
// deleteBoards: function (value0) {
//      return  Boards.remove({ '_id': value0});
//      _alerts("success", "Board successfully deleted");

//  },


// //Create a new tasklist with same board Id and Title;
// addNewTaskList: function (value0, value1, value2, value3) {

// //If tasklist Title already exists, 
// //prompt user to input an alternate title
// var titleExists = TaskLists.findOne({'taskListTitle': value0});
// if (titleExists) {
//         _alerts.error("error", "You already have a Tasklist with this title on this board.  Please enter a new tasklist name.")}
// else {
//    var addNewTaskLists = TaskLists.insert({ 
//         'taskListTitle' : value0,
//         'timestamp' :  value1,
//         'boardId' : value2,
//         'boardTitle' : value3
//      });
//    return addNewTaskLists;
//      _alerts("success", "Tasklist successfully created");
//    };
//  },


// deleteTaskList: function (value0) {
//      return TaskLists.remove({ '_id': value0});

//        _alerts("success", "Tasklist successfully deleted");

//      if(error) {
//         _alerts.error("error", "An error occurred while deleting this TaskList.")}
//      },

// addNewCards: function(value0, value1, value2, value3, value4, value5) {
//    var addNewCard = Cards.insert({ 
//          'CardTitle' : value0,
//          'timestamp' :  value1,
//          'CardId' : value2,
//          'boardTitle' : value3,
//          'boardId' : value4,
//          'taskTitle' : value5
//      });
//    return addNewCard;

//    _alerts.success("You have added a new card to your tasklist entitled" + value5 +".");

//  },

// deleteCard: function (value0) {
//      return Cards.remove({ '_id': value0});
//        _alerts("success", "Card successfully deleted");
//  },
// updateFavorites: function(value0, value1) {
//     var updateFavorites = Boards.update({'_id' : value0,},
//                                         {$set: {favorite: value1}});
//         return updateFavorites;
//           _alerts("success", "Board successfully updated");

//         console.log(value0);
//         console.log(value1);
    
//     return updateFavorites;
// },
// updateBoardTitle: function(value0, value1) {
//     var updateBoardTitle = Boards.update({'_id': value0,},
//                                         {$set: {boardTitle: value1}});
//   console.log(value1);
//     return updateBoardTitle
// } 
// });