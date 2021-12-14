json.extract! @booking, :id, :check_in_date, :check_out_date, :guest_id, :listing_id, :number_of_guest, :price

json.guest @booking.guest, :id, :first_name, :last_name

json.listing @booking.listing, :id, :title, :city, :location, :latitude, :longitude  
json.photos @booking.listing.photos.map {|photo| url_for(photo)}
json.host @booking.listing.user, :id, :first_name, :last_name