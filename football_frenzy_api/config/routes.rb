Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/leagues/:league_id/team/:team_id' do
    resources :users
  end
  
  scope '/teams/:team_id/' do
    resources :leagues
  end

  scope '/players/:player_id' do
    resources :teams
  end

  resources :players
end
