Rails.application.routes.draw do
namespace :api, defaults: {format: :json} do 
  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]
  resources :tasks, only: [:index, :create, :update, :destroy]
  resources :categories, only:[:index]
end 

  root "static_pages#root"
end
