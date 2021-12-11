
json.extract! listing,  
            :id,
            :title, 
            :price, 
            :description, 
            :location, 
            :bedroom, 
            :bathroom, 
            :longitude, 
            :latitude,
            :owner_id,
            :host_name, 
            :city

x = listing.photos.map do |photo|
        url_for(photo)
    end

json.photos do 
    json.array! x
end
