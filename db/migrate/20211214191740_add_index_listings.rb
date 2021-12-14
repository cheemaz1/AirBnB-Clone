class AddIndexListings < ActiveRecord::Migration[6.1]
  def change
    add_index :listings, :host_id
  end
end
