class Recipe < ApplicationRecord
    has_many :user_recipe, dependent: :destroy
    has_many :users, through: :user_recipe, dependent: :destroy
    # validates :idMeal, uniqueness: true
end
