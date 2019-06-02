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
    @users = User.all
    render json: @users
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :commish)
  end
end
