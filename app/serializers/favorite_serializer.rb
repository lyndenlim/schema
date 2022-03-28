class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :technology_id, :user_id, :video_id, :twitch_streamer, :stream_id

  def technology_id
    self.object.technology.name
  end
end
