class RecipesController < ApplicationController

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
            api_key: params[:api_key],
            label: params[:label],
            image: params[:image],
            url: params[:url],
            calories: params[:calories]
        })

        render json: @recipe
    end

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy

        render json: { message: "Your recipe have deleted" }
    end

end
