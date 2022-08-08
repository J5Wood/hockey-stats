class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.string :shoots
      t.integer :number
      t.integer :age
      t.string :height
      t.integer :weight
      t.string :nationality
      t.integer :team_id
      
      t.timestamps
    end
  end
end
