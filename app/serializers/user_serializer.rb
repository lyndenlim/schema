class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :description, :profile_image_url, :is_disabled
end
