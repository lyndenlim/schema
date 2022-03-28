class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :technology_id, :user_id, :video_id, :twitch_stream_id, :stream_id
end
