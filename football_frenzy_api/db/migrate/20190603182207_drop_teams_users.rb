class DropTeamsUsers < ActiveRecord::Migration[5.2]
  def change
    drop_table :teams_users
  end
end
