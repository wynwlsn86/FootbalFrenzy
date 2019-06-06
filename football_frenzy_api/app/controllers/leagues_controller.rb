class LeaguesController < ApplicationController
  def index
    @team = Team.find(params[:team_id])
    @leagues = League.all
    render json: @leagues, include: :teams
  end

  def show
    @team = Team.find(params[:team_id])
    @league = League.find(params[:id])
    render json: @league, include: :teams
  end
end
