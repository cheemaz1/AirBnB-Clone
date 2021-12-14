class CreateListingsAgain < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false 
      t.float :price, null: false 
      t.text :description, null: false
      t.string :location, null: false 
      t.integer :num_beds, null: false 
      t.float :longitude, null: false 
      t.float :latitude, null: false 
      t.integer :host_id, null: false 
      t.string :city 

      t.timestamps
    end
    add_index :listings, :host_id, unique: true
  end
end
