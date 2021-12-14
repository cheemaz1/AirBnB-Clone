class ChangeUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :username 
    remove_column :reviews, :user_id 
    add_column :reviews, :guest_id, :integer 
  end
end
