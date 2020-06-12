class UserRecipesController < ApplicationController    
    def index
        @user_recipes = UserRecipe.all 
        authorization_header = request.headers["Authorization"]
        if !authorization_header
            render json: { error: "No token" }, status: :unauthorized
        else
            token = authorization_header.split(" ")[1]
            secret = Rails.application.secrets.secret_key_base
            begin
                payload = JWT.decode(token, secret)[0]
                render json: { user_recipes: @user_recipes, jwt: token }
            rescue
                render json: { error: "Invalid token" }, status: :unauthorized
            end
        end
    end

    def create
        @user_recipe = UserRecipe.create(
            user_id: params[:user_id],
            recipe_id: params[:wish_id]
        )

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
end
