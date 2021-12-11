
json.extract! @booking, :id, :check_in, :check_out, :guest_id, :home_id, :num_guests
json.extract! @booking.home, :title