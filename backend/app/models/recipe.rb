class Recipe < ApplicationRecord
    has_many :user_recipe
    has_many :users, through: :user_recipe
end
