class AuthenticationController < ApplicationController

    def login
        @user = User.find_by(username: params[:username])

        if @user

            if @user.authenticate(params[:password])
                # byebug
                token = createToken(@user)

                render json: {
                    user_id: @user.id,
                    token: token
                    # recipes: @user.recipes
                }
            else
                render json: {message: "nice try asshole!!!"}, status: :unauthorized
            end
        else
            render json: {message: "nice try asshole"}, status: :unauthorized
        end
    end
    
end
