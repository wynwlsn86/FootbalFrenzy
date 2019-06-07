class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :displayName
      t.string :nfl_team
      t.float :points
      t.string :position
      t.string :playerId
      t.boolean :selected

      t.timestamps
    end
  end
end
