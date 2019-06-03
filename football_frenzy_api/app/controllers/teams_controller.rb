class TeamsController < ApplicationController

  def create
    @team = Team.create(create_team_params)
    if @team.save
      render json: @team
    else
      render json: {message: 'Team not created'}
    end
  end

  def index
    @player = Player.find(params[:player_id])
    @teams = Team.all
    render json: @teams, include: :players
  end

  def show
    @player = Player.find(params[:player_id])
    @team = Team.find(params[:id])
    render json: @team, include: :players
  end

  def update
    @team = Team.find(params[:id])
    @team.update(update_team_params)
    render json: @team
  end


  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    render json: {message: "Team delelted"}
  end

  private

  def create_team_params
    params.require(:team).permit(:name)
  end

  def update_team_params
    params.require(:team).permit(:name, :points, :qb, :rb1, :rb2, :te, :wr1, :wr2, :def, :k, :flex, :bn1, :bn2, :bn3, :points)
  end

end
