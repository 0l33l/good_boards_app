GoodBoardsApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],  //must make template

	render: function() {
		var renderedContent = this.template({
			user: this.model,
			reviews: this.collection,
			maxLength: 500 
		});
		this.$el.html(renderedContent);

		return this;
	}
})