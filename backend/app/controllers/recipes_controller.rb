class RecipesController < ApplicationController
    # before_action :authenticate, only: [:index, :create]

    def index
        @recipes = Recipe.all

        render json: @recipes
    end


    def show
        @recipe = Recipe.find(params[:id])

        render json: @recipe
    end

    def create

        @recipe = Recipe.create({
            idMeal: params[:idMeal],
            strMeal: params[:strMeal],
            strInstructions: params[:strInstructions],
            strYoutube: params[:strYoutube],
            strMealThumb: params[:strMealThumb]
        })

        render json: @recipe
    end

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy

        render json: { message: "Your recipe have deleted" }
    end

end
