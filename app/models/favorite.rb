class Favorite < ApplicationRecord
    belongs_to :user, required: false
    belongs_to :technology, required: false

    validates :user_id, uniqueness: {scope: [:video_id, :twitch_streamer, :stream_id], message: "Already added!"}
end
