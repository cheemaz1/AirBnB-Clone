class UpdatesReviewsAgainAgain < ActiveRecord::Migration[6.1]
  def change
    add_index :reviews, :listing_id
  end
end
