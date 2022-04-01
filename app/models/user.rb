class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :technologies, through: :favorites
  has_many :streams, dependent: :destroy

  has_secure_password

  attr_accessor :old_password

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
end
