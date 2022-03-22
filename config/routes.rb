# config/routes.rb
Rails.application.routes.draw do
  resources :technologies
  resources :categories
  resources :favorites
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end