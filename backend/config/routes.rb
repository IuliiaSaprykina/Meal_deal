Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :index, :destroy] do 
    resources :recipes, only: [:index]
  end
  resources :recipes, only: [:create, :index, :destroy, :update, :show]
  post "login", to: "authentication#login"
  resources :user_recipes, only: [:index, :create, :destroy]
end
