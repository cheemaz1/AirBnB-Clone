class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
      t.integer :num_guests, null: false
      t.integer :home_id, null: false
      t.integer :guest_id, null: false
      t.integer :host_id, null: false

      t.timestamps
    end
    add_index :bookings, :home_id, unique: true
    add_index :bookings, :guest_id, unique: true
  end
end
