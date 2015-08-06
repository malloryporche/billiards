Router.configure({
	layoutTemplate: 'layout',
	// loadingTemplate: 'preloaderSpin',
})


Router.route('/', {name: 'home'});

Router.route('players/:_id', {
	name: 'playerDetailPage',
	data: function() { return Players.findOne(this.params._id); }
});


Router.route('teams/:_id', {
	name: 'teamDetailPage',
	data: function() { return Teams.findOne(this.params._id); }
});

Router.route('games/:_id', {
	name: 'gamePage',
	data: function() { return Games.findOne(this.params._id); }
});

// Router.route('card/:_id', {
// 	name: 'CardPage',
// 	data: function() { return Cards.findOne(this.params._id); }
// });