Router.configure({
	layoutTemplate: 'layout',
	// loadingTemplate: 'preloaderSpin',
})


Router.route('/', {name: 'home'});

// Router.route('players/_id', function() {
// 	this.render("playerDetailPage");
// 	data: { return Players.findOne(this.params._id) }
// });


// Router.route('boards/:_id', {
// 	name: 'boardPage',
// 	data: function() { return Boards.findOne(this.params._id); }
// });

// Router.route('tasks/:_id', {
// 	name: 'TaskListPage',
// 	data: function() { return TaskLists.findOne(this.params._id); }
// });

// Router.route('card/:_id', {
// 	name: 'CardPage',
// 	data: function() { return Cards.findOne(this.params._id); }
// });