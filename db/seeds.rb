# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'csv'
require 'faker'

User.destroy_all 
Home.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('homes')
jake = User.create!({username: 'mj_24', password: '123123', email: 'demouser@gmail.com', first_name: 'Michael', last_name: 'Jeff', birthday: '1995-01-01'})
scott = User.create!({username: 'user61', password: '123123', email: 'u33f@gmail.com', first_name: 'scottyp', last_name: '3rthy', birthday: '1995-01-01'})

# home_name = [
#     'Great Spacious Studio in Amazing Location!!!',
#     'HUGE PARK AVE TOWNHOME | FREE PARKING',
#     'Stylish Midtown Retreat COVID-19 FREE HOME.',
#     'Boutique and Trendy Chelsea Hotel',
#     'Tranquil Beauty Manhattan Suite',
#     'Dream lakehouse / Private dock / Skiing near NYC',
#     'On The Rocks In The Hot Tub',
#     'Luxe WATERFRONT Home - Welcome to The Foxtail',
#     'Renovated Charming apt Union close by Newark/NYC',
#     'Superb Apartment @TheLoop steps to MilleniumPark✭',
#     'Entire City Apartment One block to Train Park Free',
#     'Great Location! Clean, Comfy Studio + Free Parking',
#     'Executive one bed- condo in the heart of YaleTown.'
# ] #13

# description = [
#     'Centrally located in YaleTown near all amenities. Fine dining, shopping, tourist attractions, all within walking distance.',
#     "Take in Vancouver's vibrant city life and return to a quiet, stylish room to wind down with some TV and the sound of the relaxing water feature in the courtyard below. Your bedroom is upstairs and I live downstairs and available to help you plan your itinerary and answer any questions. Or, Cozybnb message me and I will try to respond promptly.",
#     "Welcome to East Side Cedar Cottage. A LGBTQ friendly space. The suite is self contained, bright, comfortable and safe with it's own private entrance. Either net, WIFI and Apple TV are included. A fully equipped kitchen, with a gas stove, oven, a Nespresso machine and milk former (some pods to start you off are included!). The house is on a cul-de-sac with street parking. You have access to a back garden and patio. (And veggies if available)!",
#     'Welcome to your getaway from home, a premium suite boasting a breathtaking CN Tower/city view!',
#     "Safe and convenient neighborhood surrounded by restaurants, bars and shops. Great for couples, families and solo/business travelers ",
#     '50th-floor penthouse with a spectacular view, The kitchen is fully equipped. There is also fast wifi.',
#     'Classy rooms are done up in a neutral palette with jewel tone accents. Adults-only rooftop lounge is definitely a highlight – done up in all white, facing south for views',
#     'Your room will include: Free WiFi, Flat-screen TV, Wet bar, Luxe linens and bathrobe, LOccitane bath amenities, Coffeemaker, Hairdryer In-room safe',
#     "The space offers: Rooftop bar (indoor/outdoor), Brunch room, 24/7 fitness room, SpaValet and self-parking (extra)",
#     "ATTENTION: (COVID 19 UPDATE) Please note that due to the COVID 19, all guests are required to wear a mask to enter the building and in public spaces. ",
#     "This spacious, modern home is the perfect place for your next weekend get away. Crisp white walls act as the perfect canvas for your favorite works of art. Walk in shower, fire place, and hot tub are all included to make your stay an unforgettable experience.",
#     "Come relax and fall in love with your home away from home. This apartment is located in the center of all Houston has to offer.",
#     "Please remember this is a home, not a hotel. We’re committed to being great neighbors and strictly enforce the House Rules to ensure the comfort and safety of our community. We ask that you treat the space with care. If any problems arise we will do our best and take action ASAP"
# ]


manhattan_1 = Home.create(price: 90, 
                        home_name: "Luxury Condo in DT", 
                        host_id: jake.id, 
                        description: "Come chill here for amazing balcony views of the Manhattan Skyline", 
                        city: 'New York',
                        country: 'USA', 
                        ltd: 40.777384, 
                        lng: -73.9803, 
                        address: '31 W 71st St, New York, NY 10023')

toronto_1 = Home.create(price: 400, 
                        home_name: "Amazing CN Tower view", 
                        host_id: scott.id, 
                        description: "Come chill here for amazing balcony views of the Toronto Skyline", 
                        city: 'Toronto',
                        country: 'Canada', 
                        ltd: 43.651070, 
                        lng: -79.347015, 
                        address: '14 York St, Toronto, ON M5J 2Z2')


# # ary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t']
# ary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
# ary.each do |letter|
#     letter = User.create! ({
#         username: Faker::Twitter.screen_name,
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         birthday: Faker::Date.between(from: '1955-09-23', to: '1999-09-25'),
#         email: Faker::Internet.unique.email,
#         password: "password"
#     })
# end

# ary2 = ['ah','bh','ch','dh','eh','fh','gh','hh','ih','jh','kh','lh','mh','nh','oh','ph','qh','rh','sh','th']
# ary2.each do |letterh|
#     letterh = Home.create! ({
#         price: Faker::Number.within(range: 200..900), 
#         home_name: home_name.sample,
#         host_id: ary.sample.id, #Faker::Number.within(range: 1..50),
#         description: description.sample,
#         city: Faker::Address.city,
#         country: Faker::Address.country, 
#         ltd: Faker::Address.latitude, 
#         lng: Faker::Address.longitude, 
#         address: Faker::Address.full_address
#     })
# end

# home1 = Home.create!({
#         price: Faker::Number.within(range: 200..900), 
#         home_name: home_name.sample,
#         host_id: Faker::Number.within(range: 1..12),
#         description: description.sample,
#         city: Faker::Address.city,
#         country: Faker::Address.country, 
#         ltd: Faker::Address.latitude, 
#         lng: Faker::Address.longitude, 
#         address: Faker::Address.full_address
#         })
    