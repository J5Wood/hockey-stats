Rails.application.routes.draw do
  get '/teams', to: "teams#index"
  get '/stats', to: "stats#index"

  resources :players, only: [:index, :show]
end
