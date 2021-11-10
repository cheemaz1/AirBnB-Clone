class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.date :date, null: false
      t.integer :author_id, null: false
      t.integer :home_id, null: false

      t.timestamps
    end
    add_index :reviews, :home_id
    add_index :reviews, :author_id
  end
end
