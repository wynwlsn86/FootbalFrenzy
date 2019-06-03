class TeamsController < ApplicationController
  def index
    @player = Player.find(params[:player_id])
    @teams = Team.all
    render json: @teams, include: :players
  end
end
