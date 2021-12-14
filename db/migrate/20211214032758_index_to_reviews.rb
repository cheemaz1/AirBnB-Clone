class IndexToReviews < ActiveRecord::Migration[6.1]
  def change
    add_index :reviews, :guest_id 
    remove_column :listings, :owner_id
    remove_column :listings, :bedroom 
    remove_column :listings, :bathroom 
    add_column :listings, :num_beds, :integer 
    add_column :listings, :host_id, :integer 
  end
end
