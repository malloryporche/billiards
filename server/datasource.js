SearchSource.defineSource('packages', function(searchText, options) {
	var options = {sort: {isoScore: -1}, limit: 20};

	if(searchText) {
		var regExp = buildRegExp(searchText);
		var selector = {$or: [
			{packageName: regExp},
			{description: regExp}
		]};

		return Packages.find(selector, options).fetch();
	} else {
		return Packages.find({}, options).fetch();
	}
});

function buildRegExp(searchText) {
	//DUMB IMPLEMENTATION
	var parts = searchText.trim().split(/[ \-\:]+/);
	return new RegExp("(" + parts.join('|') + ")", "ig");
}