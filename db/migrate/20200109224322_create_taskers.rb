class CreateTaskers < ActiveRecord::Migration[5.2]
  def change
    create_table :taskers do |t|
      t.integer :user_id, null:false
      t.integer :rate, null: false
      t.integer :catgory_id, null: false 
      t.string  :city, null:false 
      t.string :intruction, null:false 
      t.string :contact, null: false

      t.timestamps
    end
      add_index :taskers, :user_id, unique: true

  end
end
