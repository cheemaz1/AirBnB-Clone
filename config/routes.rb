Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :homes, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:create]
    resources :bookings, only: [:show, :index, :create, :destroy, :update]
    resources :reviews, only:[:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end



  root "static_pages#root"
end
