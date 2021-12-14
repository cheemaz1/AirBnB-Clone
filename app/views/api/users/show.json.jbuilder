json.partial! '/api/users/user', user: @user
json.user_reviews @user.reviews .each do |review|
    json.extract! review, :id, :body, :rating, :guest_id, :listing_id, :created_at
    json.listing review.listing, :id, :title
    json.host review.listing.user, :id, :first_name
    json.photos review.listing.photos.map {|photo| url_for(photo)}
end
