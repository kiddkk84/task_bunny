class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.integer :tasker_id
      t.integer :category_id
      t.string :detail
      t.string :duration
      t.string :location

      t.timestamps
    end
      add_index :tasks, :user_id, unique: false
  end
end
