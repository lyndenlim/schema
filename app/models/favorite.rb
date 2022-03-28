class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :technology

    validates :video_id, uniqueness: true
    validates :twitch_stream_id, uniqueness: true
    validates :stream_id, uniqueness: true
end
