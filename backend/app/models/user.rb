class User < ApplicationRecord
    has_secure_password
    has_many :user_recipe
    has_many :recipes, through: :user_recipe

    validates :username, presence: true
    validates :username, uniqueness: true
end
