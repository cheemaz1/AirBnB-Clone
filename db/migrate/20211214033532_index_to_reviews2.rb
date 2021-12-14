class IndexToReviews2 < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :host_name 
    add_index :listings, :host_id 
  end
end
