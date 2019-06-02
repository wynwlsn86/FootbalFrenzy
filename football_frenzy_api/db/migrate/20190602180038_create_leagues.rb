class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name
      t.integer :limit
      t.integer :league_pin

      t.timestamps
    end
  end
end
