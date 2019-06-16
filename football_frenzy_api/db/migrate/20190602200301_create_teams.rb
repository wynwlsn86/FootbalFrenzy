class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.float :points
      t.string :qb
      t.string :rb1
      t.string :rb2
      t.string :te
      t.string :wr1
      t.string :wr2
      t.string :def
      t.string :k
      t.string :flex
      t.string :bn1
      t.string :bn2
      t.string :bn2
      t.string :userId
      

      t.timestamps
    end
  end
end
