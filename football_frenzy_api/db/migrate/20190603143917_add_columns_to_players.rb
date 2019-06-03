class AddColumnsToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :active, :string
    add_column :players, :jersey, :string
    add_column :players, :fname, :string
    add_column :players, :lname, :string
    add_column :players, :height, :string
    add_column :players, :weight, :string
    add_column :players, :dob, :string
    add_column :players, :college, :string
  end
end
