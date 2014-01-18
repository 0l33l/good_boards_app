GoodBoardsApp.Models.User = Backbone.Model.extend({
	// initialize: function(models, options) {
	// 	this.user_id = options.user_id
	// },

	parse: function (data) {
	  var reviews = data.reviews;
		data.reviews = new GoodBoardsApp.Collections.UserReviews(reviews, {
			user_id: data.id
		});
		return data;
	},

	url: function(){
		if (this.id){
			return 'api/users/' + this.id;	
		} else {
			return 'api/users';
		}
		
	}
})