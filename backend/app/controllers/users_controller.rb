class UsersController < ApplicationController

    # before_action :authenticate, only: [:index, :show]
    

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: [:recipes]
    end

    def create
        @user = User.new(user_params)

        if @user.save
            token = createToken(@user)

            render json: {
                message: "Success user #{@user.username} has been created",
                token: token,
                user_id: @user.id
            }
        else
            render json: { message: @user.errors.messages }
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy

        render json: { message: "User nas been deleted" }
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end

    
