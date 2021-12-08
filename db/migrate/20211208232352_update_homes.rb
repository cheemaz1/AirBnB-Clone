class UpdateHomes < ActiveRecord::Migration[6.1]
  def change
    remove_column :homes, :home_name
    remove_column :homes, :host_id
    remove_column :homes, :address
    remove_column :homes, :country
    
    add_column :homes, :title, :string
    add_column :homes, :location, :string
    add_column :homes, :bedroom, :integer
    add_column :homes, :bathroom, :integer
    add_column :homes, :owner_id, :integer

  end
end
