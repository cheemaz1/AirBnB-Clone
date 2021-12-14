@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :check_in_date, :check_out_date, :guest_id, :listing_id, :number_of_guest, :price
        json.photos booking.listing.photos.map {|photo| url_for(photo)}
        json.listing booking.listing, :city, :title
    end
end

