class Api::BoardgamesController< ApplicationController
	def show
		@boardgame = Boardgame.find(params[:id])

		render :json => @boardgame.to_json(:include => :reviews)
	end

	def update
		@boardgame = Boardgame.find(params[:id])
		p @boardgame.total_rating
		p params[:rating]
		p params[:old_rating]
		if params[:review_id]
			@boardgame.total_rating = @boardgame.total_rating - params[:old_rating] + params[:rating].to_f
			new_total = @boardgame.total_rating
		else
			@boardgame.total_rating = @boardgame.total_rating + params[:rating].to_f
			new_total = @boardgame.total_rating
		end
		p new_total
		p @boardgame.reviews.count
		@boardgame.rating = (@boardgame.average_rating).round(2)
		@boardgame.update_attributes(:total_rating => new_total)
		p @boardgame.rating

		render :json => @boardgame

	end
end