class UpdatesReviewsAgain < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :listing_id, :integer
    remove_column :reviews, :home_id 
  end
end



