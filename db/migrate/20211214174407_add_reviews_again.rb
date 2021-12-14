class AddReviewsAgain < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false 
      t.integer :rating, null: false 
      t.text :body, null: false 
      t.integer :guest_id, null: false 
      
      t.timestamps
    end
    add_index :reviews, :listing_id
    add_index :reviews, :guest_id
  end
end
