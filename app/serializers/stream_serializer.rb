class StreamSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :mux_id, :stream_key
end
