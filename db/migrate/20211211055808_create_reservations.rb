class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.datetime :check_in_date, null: false 
      t.datetime :check_out_date, null: false
      t.integer :guest_id, null: false 
      t.integer :number_of_guest, null: false 
      t.integer :listing_id, null: false 

      t.timestamps
    end

    add_index :reservations, :guest_id
    add_index :reservations, :listing_id
  end
end
