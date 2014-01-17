GoodBoardsApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],  //must make template

	render: function() {
		var renderedContent = this.template({
			user: this.model,
			reviews: this.collection
			// maxLength: 500 
		});
		this.$el.html(renderedContent);

		this.collection.each(function(review){
			var that = this;
			var boardgame_id = review.get('boardgame_id');
			var id = review.get('id');
			var boardgame = new GoodBoardsApp.Models.Boardgame({id: boardgame_id});
			boardgame.fetch({
				success: function() {
					var view = new GoodBoardsApp.Views.ReviewEmbedShow({
						user: that.model,
						boardgame: boardgame,
						review: review
					});
					this.$('.embedded#'+id).html(view.render().$el);
				}
			});
			
		})

		return this;
	}
})