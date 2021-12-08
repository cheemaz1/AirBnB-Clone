class UpdateBookings < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookings, :host_id
  end
end
