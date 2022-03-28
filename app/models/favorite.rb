class Favorite < ApplicationRecord
    belongs_to :user, required: false
    belongs_to :technology, required: false

    # validates :video_id, uniqueness: {scope: :user_id}
    # validates :twitch_stream_id, uniqueness: {scope: :user_id}
    # validates :stream_id, uniqueness: {scope: :user_id}
end
