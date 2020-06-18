class UsersController < ApplicationController

#     # before_action :authenticate, only: [:index, :show]
    

#     def index
#         @users = User.all
#         render json: @users, include: [:recipes]
#     end

#     def show
#         @user = User.find(params[:id])
#         render json: @user, include: [:recipes]
#     end

#     def create
#         @user = User.new(user_params)

#         if @user.save
#             token = createToken(@user)

#             render json: {
#                 message: "Success user #{@user.username} has been created",
#                 token: token,
#                 user_id: @user.id
#             }
#         else
#             render json: { message: @user.errors.messages }
#         end
#     end

#     def destroy
#         @user = User.find(params[:id])
#         @user.destroy

#         render json: { message: "User nas been deleted" }
#     end

#     private

#     def user_params
#         params.require(:user).permit(:username, :password)
#     end

# end


skip_before_action :authorized, only: [:create]

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    def index
        @users = User.all
        render json: { users: @users}
    end

    def show
        @user = User.find(params[:id])
        render json: { user: @user}
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: { message: "User has been deleted"}
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end


    
