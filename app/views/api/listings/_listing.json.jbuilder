json.extract! listing, :id, :title, :description, :city, :location, :num_beds, :longitude, :latitude, :price
json.photos listing.photos.map {|photo| url_for(photo)}