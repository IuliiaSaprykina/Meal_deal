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
            strMealThumb: params[:strMealThumb],
            strIngredient1: params[:strIngredient1],
            strIngredient2: params[:strIngredient2],
            strIngredient3: params[:strIngredient3],
            strIngredient4: params[:strIngredient4],
            strIngredient5: params[:strIngredient5],
            strIngredient6: params[:strIngredient6],
            strIngredient7: params[:strIngredient7],
            strIngredient8: params[:strIngredient8],
            strIngredient9: params[:strIngredient9],
            strIngredient10: params[:strIngredient10],
            strIngredient11: params[:strIngredient11],
            strIngredient12: params[:strIngredient12],
            strIngredient13: params[:strIngredient13],
            strIngredient14: params[:strIngredient14],
            strIngredient15: params[:strIngredient15],
            strIngredient16: params[:strIngredient16],
            strIngredient17: params[:strIngredient17],
            strIngredient18: params[:strIngredient18],
            strIngredient19: params[:strIngredient19],
            strIngredient20: params[:strIngredient20],
            strMeasure1: params[:strMeasure1],
            strMeasure2: params[:strMeasure2],
            strMeasure3: params[:strMeasure3],
            strMeasure4: params[:strMeasure4],
            strMeasure5: params[:strMeasure5],
            strMeasure6: params[:strMeasure6],
            strMeasure7: params[:strMeasure7],
            strMeasure8: params[:strMeasure8],
            strMeasure9: params[:strMeasure9],
            strMeasure10: params[:strMeasure10],
            strMeasure11: params[:strMeasure11],
            strMeasure12: params[:strMeasure12],
            strMeasure13: params[:strMeasure13],
            strMeasure14: params[:strMeasure14],
            strMeasure15: params[:strMeasure15],
            strMeasure16: params[:strMeasure16],
            strMeasure17: params[:strMeasure17],
            strMeasure18: params[:strMeasure18],
            strMeasure19: params[:strMeasure19],
            strMeasure20: params[:strMeasure20]
        })

        render json: @recipe
    end

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy

        render json: { message: "Your recipe have deleted" }
    end

end
