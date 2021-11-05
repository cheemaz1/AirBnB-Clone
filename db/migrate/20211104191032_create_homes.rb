class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.integer :host_id, null: false
      t.text :description, null: false
      t.string :home_name, null: false
      t.float :price, null: false
      t.string :address, null: false 
      t.string :city, null: false 
      t.string :country, null: false
      t.float :lng, null: false 
      t.float :ltd, null: false

      t.timestamps
    end
    add_index :homes, :host_id, unique: true
  end
end
