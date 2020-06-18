class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :recipes
end
