# CozyBnB

Wecome to CozyBnB! This is a clone of the website AirBnB that provides the user many features from the original. 

Check it out here => https://cozybnb.herokuapp.com/#/

**Technologies**
#

Starting with the backend, I used Ruby on Rails along with  PostGresQL DB, jBuilder DSL to sculpt and limit the json sent up to the frontend. I used React and Redux to deliver the user interface and manage state respectively on the frontend. Google Maps API was used for marking locations. 


**Challenges Met**
#

Search By Location 
A lot of problems I encountered occured were while creating the search bar and search function. None of the homes were displaying when searching for a particular location. I ended up manipulating my homes controller to add conditionals to check whether searchParams present, created a method to query using searchParams insteade of the ID of homes. I set my state to include the key of city and value of searchParams and called the route for my Homes Index. 

**HomesController.rb**
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

**Search.jsx**
```
    this.props.history.push(`/search/${this.state.city}`);
    this.setState({ city: "" });
```



**Future Implementations**
#
* More homes will be added to the database 
* Users will be able to add new homes 
* Users will be able to send reviews for homes 
* Map markers will become more accurate 


