class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :username, :description, :profile_image_url, :is_disabled
end
