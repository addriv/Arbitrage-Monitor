Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :kucoin, only: %i(index show)
  end
end
