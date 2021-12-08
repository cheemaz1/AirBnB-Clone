class UpdateReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :date 
    add_column :reviews, :rating, :integer 
    add_column :reviews, :review_name, :string 

  end
end
