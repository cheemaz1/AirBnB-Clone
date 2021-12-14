class UpdateListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :owner_id 
  end
end
