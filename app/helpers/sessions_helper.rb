module SessionsHelper
	def current_user
		User.find_by_session_token(session[:session_token])
	end

	def logged_in?
		!!current_user
	end

	def login
		@user.reset_session_token!
		session[:session_token] = @user.session_token
	end

	def check_authorization
		redirect_to new_session_url unless logged_in?
	end
end