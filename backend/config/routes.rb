Rails.application.routes.draw do
  get '/teams', to: "teams#index"
  get '/players', to: "players#index"
  get '/stats', to: "stats#index"
end
