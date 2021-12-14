class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false 
      t.float :price, null: false 
      t.text :description, null: false
      t.string :location, null: false 
      t.integer :bedroom, null: false 
      t.integer :bathroom, null: false 
      t.float :longitude, null: false 
      t.float :latitude, null: false 
      t.integer :owner_id, null: false 
      t.string :host_name
      t.string :city 

      t.timestamps
    end
    add_index :listings, :owner_id, unique: true
  end
end
