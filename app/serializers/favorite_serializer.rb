class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :category_id, :videos
end
