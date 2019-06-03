class UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
      render json: @user
    else
      render json: {message: 'Not created'}
    end
  end

  def index
    @league = League.find(params[:league_id])
    @team = Team.find(params[:team_id])
    @users = User.all
    render json: @users, include: [:leagues, :teams]
  end


  def update

  end

  def delete
    @user = User.find(params[:id])
    @user.destroy
    render json: {message: 'User delted'}
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :commish)
  end
end
