class User < ApplicationRecord
    has_many :favorites
    has_many :categories, through: :favorites
end
