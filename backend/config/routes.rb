Rails.application.routes.draw do
  # resources :players
  # resources :teams
  get '/teams', to: "teams#index"
  get '/players', to: "players#index"

end
