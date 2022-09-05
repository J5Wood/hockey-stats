class CreateStats < ActiveRecord::Migration[6.1]
  def change
    create_table :stats do |t|
      t.integer :year
      t.integer :points
      t.integer :goals
      t.integer :assists
      t.integer :shots
      t.integer :blocked
      t.integer :plus_minus
      t.integer :pim
      t.integer :hits
      t.integer :ppg
      t.integer :player_id

      t.timestamps
    end
  end
end
