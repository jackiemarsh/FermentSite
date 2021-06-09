Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :events, except: :new
    resources :event_rsvps, only: [:create, :index, :destroy]
  end
  root to: "static_pages#root"
end
