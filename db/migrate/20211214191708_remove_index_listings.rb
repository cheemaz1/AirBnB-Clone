class RemoveIndexListings < ActiveRecord::Migration[6.1]
  def change
    remove_index :listings, :host_id
  end
end
