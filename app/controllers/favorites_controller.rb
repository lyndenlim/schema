class FavoritesController < ApplicationController

    def index
        render json: Favorite.all
    end

    def show
        render json: find_favorite
    end

    def create
        favorite = Favorite.create!(params.permit(:technology_id, :user_id, :video_id, :twitch_streamer, :stream_id))
        render json: favorite, status: :created
    end

    def destroy
        find_favorite.destroy
        head :no_content
    end

    private

    def find_favorite
        Favorite.find(params[:id])
    end
end
