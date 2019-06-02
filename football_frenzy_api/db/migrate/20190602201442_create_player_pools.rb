class CreatePlayerPools < ActiveRecord::Migration[5.2]
  def change
    create_table :player_pools do |t|
      t.string :displayName
      t.float :points
      t.string :team
      t.string :position
      t.string :playerId

      t.timestamps
    end
  end
end
