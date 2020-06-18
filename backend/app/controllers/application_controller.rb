class ApplicationController < ActionController::API

#     def authenticate
#         authorization_header = request.headers["Authorization"]

#         if authorization_header
#             token = authorization_header.split(" ")[1]
#             begin
#                 secret = Rails.application.secrets.secret_key_base
#                 @user_id = JWT.decode(token, secret)[0]["user_id"]
#             rescue
#                 render json: {message: "nice try asshole"}, status: :unauthorized
#             end
#         else
#             render json: {message: "nice try asshole"}, status: :unauthorized
#         end
#     end

#     def createToken(user)
#         payload = { user_id: @user.id }
#         secret = Rails.application.secrets.secret_key_base
#         token = JWT.encode(payload, secret)
#     end
    
# end

    before_action :authorized
   
    def encode_token(payload)
      JWT.encode(payload, 'yerrr')
    end
   
    def auth_header
      request.headers['Authorization']
    end
   
    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        begin
          JWT.decode(token, 'yerrr', true, algorithm: 'HS256')
        rescue JWT::DecodeError
          nil
        end
      end
    end
   
    def current_user
      if decoded_token
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end
   
    def logged_in?
      !!current_user
    end
   
    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
  end
