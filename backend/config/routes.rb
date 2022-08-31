Rails.application.routes.draw do
  resources :stat_blocks
  # resources :players
  get '/teams', to: "teams#index"
  get '/players', to: "players#index"
  get '/seasons', to: "seasons#index"


end
