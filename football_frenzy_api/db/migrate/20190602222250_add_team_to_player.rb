class AddTeamToPlayer < ActiveRecord::Migration[5.2]
  def change
    add_reference :players, :team
  end
end
