class Category < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites
    has_many :technologies
end
