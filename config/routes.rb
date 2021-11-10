Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :homes
    resources :reviews, only: [:create, :index]
    # get 'search' => 'homes#search'

  end


  root "static_pages#root"
end
