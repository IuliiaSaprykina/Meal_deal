class UserRecipesController < ApplicationController 
    before_action :authenticate, only: [:index, :create]

    def index
        @user_recipes = UserRecipe.all 
        
        render json: @user_recipes
    end

    def create
        @user_recipe = UserRecipe.create(user_recipes_params)

        render json: { user_recipe: @user_recipe }
    end

    def show
        @user_recipe = UserRecipe.find(params[:id])

        render json: { user_recipe: @user_recipe}
    end

    def destroy
        @user_recipe = UserRecipe.find(params[:id])
        @user_recipe.destroy

        render json: { message: "Your recipe removed" }
    end

    private

    def user_recipes_params
        params.require(:recipe).permit(:recipe_id).merge(user_id: @user_id)
    end
end
