
json.extract! @reservation, :id, :check_in_date, :check_out_date, :guest_id, :listing_id, :number_of_guest
json.extract! @reservation.listing, :title