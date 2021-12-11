
json.extract! home,  
            :id,
            :description, 
            :price, 
            :city
            :lng, 
            :ltd,
            :title, 
            :location, 
            :bedroom, 
            :bathroom, 
            :owner_id,
            :host_name

x = home.photos.map do |photo|
        url_for(photo)
    end

json.photos do 
    json.array! x
end

