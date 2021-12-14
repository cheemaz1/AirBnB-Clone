json.partial! "api/listings/listing", listing: @listing
json.host @listing.user, :id, :first_name, :last_name, :created_at
json.listing_reviews @listing.reviews .each do |review|
    json.extract! review, :id, :body, :rating, :guest_id, :listing_id, :created_at
    json.reviewer review.guest, :id, :first_name, :last_name
    if review.guest.photo.attached?
        json.guestPhoto url_for(review.guest.photo)
    end
end

json.bookings @listing.bookings.map {|booking| [booking.check_in_date, booking.check_out_date]}

json.fullPhotos @listing.photos.map {|photo| photo}