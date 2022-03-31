class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def index
      render json: User.all
    end
  
    def show
      render json: @current_user
    end

    def update
      user = @current_user
      user.update!(user_params)
      render json: user
    end

    def destroy
      @current_user.destroy
      head :no_content
    end
  
    private
  
    def user_params
      params.permit(:email, :username, :password, :password_confirmation, :image_url)
    end
end
