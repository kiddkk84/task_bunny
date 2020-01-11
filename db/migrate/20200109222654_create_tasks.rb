class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :user_id, null: false
      t.integer :tasker_id, null: false
      t.string :detail, null: false
      t.string :duration, null: false
      t.string :location, null: false

      t.timestamps
    end
      add_index :tasks, :user_id, unique: true
  end
end
