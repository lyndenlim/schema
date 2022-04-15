Rails.application.routes.draw do
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :streams
  resources :technologies
  resources :users
  get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/mux_streams", to:"streams#mux_streams"
  get "/mux_videos", to:"streams#mux_videos"
  # post "/get_stream_key", to:"streams#get_stream_key"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end