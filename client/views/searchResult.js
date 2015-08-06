Template.searchResult.helpers({
	getPackages: function() {
		return PackageSearch.getData({
			transform: function(matchText, regExp) {
				return matchText.replace(regExp, "<b>$&</b>")
			},
			sort: {isoScore: -1}
		});
	},

	isLoading: function() {
		return PackageSearch.getStatus().loading;
	}
})