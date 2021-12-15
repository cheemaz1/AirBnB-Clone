# COZYBNB

Wecome to CozyBnB! This is a clone of the website AirBnB that provides the user many features from the original. 

Check it out here => https://cozybnb.herokuapp.com/#/
#
# TECHNOLOGIES USED 

Starting with the backend, I used Ruby on Rails along with  PostGresQL DB, jBuilder DSL to sculpt and limit the json sent up to the frontend. I used React and Redux to deliver the user interface and manage state respectively on the frontend. Mapbox API was used for marking locations. 
#

# FEATURES 

* User Authentication- users can login and sign up. Respective error messages will be displayed to the user. Demo user is also available to use. 
* Listings can be created & deleted by logged in users. Users are also able to add 5 pictures to the listing through AWS integration in the backend. 
* Users can make bookings once they are logged in. They can also view and cancel their bookings using the Trips tab
* Logged in users can also write, edit and delete their reviews 
* Users can search for listings through a keyword search of the city. 

# CHALLENGES MET 


## Search By Location 
A lot of problems I encountered occured were while creating the search bar and search function. None of the listings were displaying when searching for a particular location. I ended up manipulating my listings controller to add conditionals to check whether searchParams present, created a method to query using searchParams insteade of the ID of homes. I set my state to include the key of city and value of searchParams and called the route for my Homes Index. 

# SCREENSHOTS

## Splash Page

<img width="500" height="300" alt="Screen Shot 2021-12-10 at 1 03 20 AM" src="https://user-images.githubusercontent.com/87393981/146091253-d9f32e69-f09c-4734-89b0-56ab17cfe68b.png">

## Different Cities Seeded

<img width="500" alt="Screen Shot 2021-12-10 at 1 03 20 AM" src="https://user-images.githubusercontent.com/87393981/146091240-dc9da5f7-bd63-424a-a226-8bb2d21faef0.png">

## Listing Show Page

<img width="500" alt="Screen Shot 2021-12-10 at 1 03 20 AM" src="https://user-images.githubusercontent.com/87393981/146091222-89ecd9e6-7193-40ff-9a0f-0dea8519e6e5.png">

## Seeded Reviews on Listing 

<img width="500" alt="Screen Shot 2021-12-10 at 1 03 20 AM" src="https://user-images.githubusercontent.com/87393981/146091216-f5e5b68d-4a29-4e46-9753-b95857210a5e.png">

# CODE SNIPPET 

## ListingsController.rb

Searching for a listing by its city was complicated and was done by adding data to the backend containing the search params. Searching a city in the search bar would fetch the listings in that city (searchParams)

```
    def index 
        if !params[:searchParams]   
            # debugger  
            @homes = Home.all    
        elsif params[:searchParams][:city]
            # debugger
            @homes = Home.where(city: params[:searchParams][:city])
            
        end
        render :index
    end
```

#
# FUTURE IMPLEMENTATION

* Users will be able to add more information regarding their reviews. (More optional data will be available) 
* More information about users will be available 

