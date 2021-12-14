class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false 
      t.integer :rating, null: false 
      t.text :body, null: false 
      t.integer :user_id, null: false  
      t.string :review_name
      
      t.timestamps
    end
    add_index :reviews, :listing_id
    add_index :reviews, :user_id
  end
end
