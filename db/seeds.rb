require 'faker'
require 'open-uri'

User.destroy_all
Listing.destroy_all
Booking.destroy_all
Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('listings')
ApplicationRecord.connection.reset_pk_sequence!('bookings')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

demo_user = User.create!(
    first_name: "Demo",
    last_name: "User",
    email: "demouser@gmail.com",
    password: "demouser",
)
jack = User.create({email:'jack@jack.com', password:'jackjack', first_name: 'jack', last_name: 'jack'})
#NewYork
home1 = Listing.create!({
    title: 'New York High life',
    price: 300,
    description: 'One of the best views of the city if not the best view of the city. A newer luxury condo in the heart of the city. Enjoyed everything the city has to offer, Broadway plays walk to with in mins, Madison Square Garden, Center Park, high end shopping of 5th Ave and the best restaurant in the world unless you feel like a $1.00 slice of pizza New York has that for you to. Perfect home away from home for you and the family.', 
    location: 'New York',
    num_beds: 5,
    longitude: -73.987747,
    latitude: 40.750433,
    host_id: jack.id,

    city: 'New York',
})


home1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '1.webp')), filename: '1.webp')
home1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '2.webp')), filename: '2.webp')
home1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '3.webp')), filename: '3.webp')
home1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '4.webp')), filename: '4.webp')
home1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '5.webp')), filename: '5.webp')


home2 = Listing.create!({
    description: 'Enjoy a comfortable stay in our modern yet charming room designed to meet all your needs. Our Social rooms offer unparalleled comfort, and special touches make all the difference. Relax, get some work done, and take full advantage of your stay.', 
    price: 200,
    city: 'New York',
    longitude: -73.988704,
    latitude: 40.757921,
    title: 'Center of it all',
    location: 'New York',
    num_beds: 2,
    host_id: jack.id,
     
})

home2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '6.webp')), filename: '6.webp')
home2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '7.webp')), filename: '7.webp')
home2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '8.webp')), filename: '8.webp')
home2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '9.webp')), filename: '9.webp')
home2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '10.webp')), filename: '10.webp')

home3 = Listing.create!({
    title: 'High-rise: a birds eye view',
    price: 230,
    description: 'Well-placed high-rise in a prime Midtown spot on 45th between 5th and 6th Aves – a 7-minute stroll from the spectacle that is Times Square, with its neighboring Broadway theaters, shops and eateries galore. Plus an easy 14-minute jaunt from the equally famous Empire State Building.', 
    location: 'New York',
    num_beds: 2,
    longitude: -73.980187,
    latitude: 40.754951,
    host_id: jack.id,
     
    city: 'New York'
})

home3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '11.webp')), filename: '11.webp')
home3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '12.webp')), filename: '12.webp')
home3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '13.webp')), filename: '13.webp')
home3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '14.webp')), filename: '14.webp')
home3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '15.webp')), filename: '15.webp')

home4 = Listing.create!({
    title: 'Luxury club life',
    price: 150,
    description: 'The New York Club is the perfect combination of luxury and location in the heart of New York City. Spend time in one of the oversized suites complete with amenities or explore nearby in Times Square or Central Park.', 
    location: 'New York',
    num_beds: 1,
    longitude: -73.983882,
    latitude: 40.764633,
    host_id: jack.id,
     
    city: 'New York'
})

home4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '16.webp')), filename: '16.webp')
home4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '17.webp')), filename: '17.webp')
home4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '18.webp')), filename: '18.webp')
home4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '19.webp')), filename: '19.webp')
home4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '20.webp')), filename: '20.webp')

home5 = Listing.create!({
    title: 'New York City Town House',
    price: 350,
    description: 'The William is a renovated townhouse into a modern hotel. With few rooms and a location just south of Grand Central Station, you will feel like you have an entire New York City townhouse to yourself. The home living room has been transformed into a hotel lobby and at night turns into a cocktail lounge.', 
    location: 'New York',
    num_beds: 3,
    longitude: -73.977070,
    latitude: 40.761798,
    host_id: jack.id,
 
    city: 'New York'
})

home5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '21.webp')), filename: '21.webp')
home5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '22.webp')), filename: '22.webp')
home5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '23.webp')), filename: '23.webp')
home5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '24.webp')), filename: '24.webp')
home5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '25.webp')), filename: '25.webp')

#Miami
home6 = Listing.create!({
    title: 'Cozy place by the bay',
    price: 155,
    description: 'We welcome you to experience the Miami lifestyle in this modern one-num_beds apt on the bay overlooking Downtown Miami Skyline. It is located minutes away from the beach, Bal Harbour Shops, South Beach, Downtown Miami, Aventura Mall, and a variety of shopping outlets. The building has a swimming pool, BBQ area, and all exposed to the bay. This apartment offers you one queen size bed, ful-FI, couch & air mattress, and a fully equipped kitchen', 
    location: 'Miami',
    num_beds: 1,
    longitude: -80.184443,
    latitude: 25.815239,
    host_id: jack.id,

    city: 'Miami'
})

home6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '26.webp')), filename: '26.webp')
home6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '27.webp')), filename: '27.webp')
home6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '28.webp')), filename: '28.webp')
home6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '29.webp')), filename: '29.webp')
home6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '30.webp')), filename: '30.webp')

home7 = Listing.create!({
    title: 'Everything is a arms length away.',
    price: 245,
    description: 'Located at the entrance to Wynwood. Walk to restaurants, bars, nightlife, shopping & the famous Wynwood Walls. Also walking distance to The Design District & Midtown Shopping. This place is centrally located less than a 10 min drive from Miami Airport & about 15 min to famous South beach. Also 15 minutes to Coconut Grove.', 
    location: 'Miami',
    num_beds: 3,
    longitude: -80.200335,
    latitude: 25.794945,
    host_id: jack.id,

    city: 'Miami'
})

home7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '31.webp')), filename: '31.webp')
home7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '32.webp')), filename: '32.webp')
home7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '33.webp')), filename: '33.webp')
home7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '34.webp')), filename: '34.webp')
home7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '35.webp')), filename: '35.webp')

home8 = Listing.create!({
    title: 'Miami lifestyle',
    price: 230,
    description: 'Experience the Miami lifestyle in this modern studio by the bay overlooking the Downtown Miami skyline. It is located minutes away from the beach, Bal Harbour Shops, South Beach, Downtown Miami, Aventura Mall, and a variety of shopping outlets. The building has a swimming pool, BBQ area, and all exposed to the bay.', 
    location: 'Miami',
    num_beds: 3,
    longitude: -80.190032,
    latitude: 25.798655,
    host_id: jack.id,
    
    city: 'Miami'
})

home8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '36.webp')), filename: '36.webp')
home8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '37.webp')), filename: '37.webp')
home8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '38.webp')), filename: '38.webp')
home8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '39.webp')), filename: '39.webp')
home8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '40.webp')), filename: '40.webp')

home9 = Listing.create!({
    title: 'Heart of Miami',
    price: 220,
    description: 'Heart of Miami in the Famous Wynwood Art District. "Gated Free Parking" In this choice 3 num_beds - 2 bath apartment-- Centrally located to where it all happens and where you want to be. Within a 1 min walk to Wynwood Art Walls and a 3 minute walk to sought-after Restaurants, Clubs and Specialty Shops. 10 min Uber ride to Midtown, Brickell, Downtown and a 15 Min drive over to South Beach & Lincoln Road. ', 
    location: 'Miami',
    num_beds: 3,
    longitude: -80.200060,
    latitude: 25.806228,
    host_id: jack.id,
     
    city: 'Miami'
})

home9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '41.webp')), filename: '41.webp')
home9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '42.webp')), filename: '42.webp')
home9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '43.webp')), filename: '43.webp')
home9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '44.webp')), filename: '44.webp')
home9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '45.webp')), filename: '45.webp')

home10 = Listing.create!({
    title: 'Zen Queen Suite Inn',
    price: 170,
    description: 'Located inside the beautiful Zenmotel Inn, this charming unit offers guests all of the luxuries of a 5-star hotel with the comforts of a home-like atmosphere. The Zen Queen Suite boasts handmade Balinese furniture, a comfortable queen size bed, HD television and cable, complimentary robes and Wi-Fiwer amenities, and a fully equipped kitchenette.', 
    location: 'Miami',
    num_beds: 1,
    longitude: -80.195439,
    latitude: 25.803185,
    host_id: jack.id,
     
    city: 'Miami'
})

home10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '46.webp')), filename: '46.webp')
home10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '47.webp')), filename: '47.webp')
home10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '48.webp')), filename: '48.webp')
home10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '49.webp')), filename: '49.webp')
home10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '50.webp')), filename: '50.webp')

#Vancouver

home11 = Listing.create!({
    title: 'Chic Vancouver Granville Street Pied a Terre',
    price: 155,
    description: 'Luxurious & Modern Condo at the Heart of Downtown Vancouver on Granville Street. Enjoy this perfect freshly renovated pad and use the perfect location to explore all corners of Vancouver.', 
    location: 'Vancouver',
    num_beds: 1,
    longitude: -123.124999,
    latitude: 49.279795,
    host_id: jack.id,

    city: 'Vancouver'
})

home11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '51.webp')), filename: '51.webp')
home11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '52.webp')), filename: '52.webp')
home11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '53.webp')), filename: '53.webp')
home11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '54.webp')), filename: '54.webp')
home11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '55.webp')), filename: '55.webp')

home12 = Listing.create!({
    title: 'A Studio with Fantastic View in the ♥ of Downtown',
    price: 160,
    description: 'Situated in a central area in the heart of Downtown, this apartment is just off of Burrard Street and very close to Granville, Yaletown, & Davie. English Bay and Kitsilano beach are easily accessible from here.', 
    location: 'Vancouver',
    num_beds: 1,
    longitude: -123.124786,
    latitude: 49.280828,
    host_id: jack.id,
  
    city: 'Vancouver'
})

home12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '56.webp')), filename: '56.webp')
home12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '57.webp')), filename: '57.webp')
home12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '58.webp')), filename: '58.webp')
home12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '59.webp')), filename: '59.webp')
home12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '60.webp')), filename: '60.webp')

home13 = Listing.create!({
    title: 'Unique Downtown Vancouver Condo with City Views',
    price: 250,
    description: 'It is my beautiful large 2bd apartment in the heart of DT Vancouver, one of the best and most sought after neighbourhoods ideally situated for anything you could want to do in the city, steps from Robson and Grenville Streets.', 
    location: 'Vancouver',
    num_beds: 2,
    longitude: -123.1238021850586,
    latitude: 49.282649993896484,
    host_id: jack.id,

    city: 'Vancouver'
})

home13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '61.webp')), filename: '61.webp')
home13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '62.webp')), filename: '62.webp')
home13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '63.webp')), filename: '63.webp')
home13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '64.webp')), filename: '64.webp')
home13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '65.webp')), filename: '65.webp')

home14 = Listing.create!({
    title: '❤️COZYBNB PLUS☀️Patio/Gym/Netflix/🆓PRKG/HighCeilings❤️',
    price: 270,
    description: 'FREE underground PARKING. NO BETTER LOCATION IN VANCOUVER. Located directly in the heart of downtown, this unique home is central to everything. Walking distance to all of the local attractions, the ferry terminal, Rogers Arena, Canada Place, Vancouver Art Gallery, shopping district, entertainment district, fantastic restaurants and coffee shops, the best nightlife Vancouver has to offer, beaches, Stanley Park.', 
    location: 'Vancouver',
    num_beds: 2,
    longitude: -123.122707,
    latitude: 49.279874,
    host_id: jack.id,

    city: 'Vancouver'
})

home14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '66.webp')), filename: '66.webp')
home14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '67.webp')), filename: '67.webp')
home14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '68.webp')), filename: '68.webp')
home14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '69.webp')), filename: '69.webp')
home14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '70.webp')), filename: '70.webp')

home15 = Listing.create!({
    title: 'Waterfront Loft - Downtown, Parking, A/C, Transit',
    price: 300,
    description: 'Chic studio is in the vibrant, flourishing Beach District neighbourhood. With rare marble, distressed beach wood floors and raw edge countertops, its urban flair and natural beauty will inspire you. You’re steps away from all major conveniences and the best Vancouver sites: Sunset Beach, Yaletown, the Seawall, Fresh street market, English Bay, Stanley Park , coffee shops , restaurants, Granville Island water taxi, are all within walking distance.', 
    location: 'Vancouver',
    num_beds: 2,
    longitude: -123.122302,
    latitude: 49.279376,
    host_id: jack.id,
     
    city: 'Vancouver'
})

home15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '71.webp')), filename: '71.webp')
home15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '72.webp')), filename: '72.webp')
home15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '73.webp')), filename: '73.webp')
home15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '74.webp')), filename: '74.webp')
home15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '75.webp')), filename: '75.webp')

#LosAngeles

home16 = Listing.create!({
    title: 'Cozy Modern Guest House Echo Park',
    price: 300,
    description: 'Cozy Modern Guesthouse on quiet, tree-filled hillside in Echo Park is light filled, private, and clean. Its the perfect place to rest while visiting Los Angeles. Enjoy the new mini gourmet kitchen and the neh newly refinished claw foot tub. In the num_beds both the queen mattress and pillow top are new, as are the 500 count linens and new pillows.', 
    location: 'LosAngeles',
    num_beds: 4,
    longitude: -118.248597,
    latitude: 34.088243,
    host_id: jack.id,
 
    city: 'LA'
})

home16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '76.webp')), filename: '76.webp')
home16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '77.webp')), filename: '77.webp')
home16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '78.webp')), filename: '78.webp')
home16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '79.webp')), filename: '79.webp')
home16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '80.webp')), filename: '80.webp')

home17 = Listing.create!({
    title: 'Old World Townhouse in SM, Full of Charm',
    price: 350,
    description: '• Absolutely adorable 2 num_beds/ nhouse
        • Tons of natural light
        • A/C
        • Washer/dryer in unit
        • Beautiful landscaping/lots of green
        • Located on 6th & Montana
        • 5 min walk to the beach
        • Hardwood floors, granite countertops, stainless steel appliances
        • Gated property
        • Garage included', 
    location: 'LosAngeles',
    num_beds: 3,
    longitude: -118.410774,
    latitude: 34.00812,
    host_id: jack.id,
 
    city: 'LA'
})

home17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '81.webp')), filename: '81.webp')
home17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '82.webp')), filename: '82.webp')
home17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '83.webp')), filename: '83.webp')
home17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '84.webp')), filename: '84.webp')
home17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '85.webp')), filename: '85.webp')

home18 = Listing.create!({
    title: 'Secret Garden Suite - California Boho Paradise',
    price: 180,
    description: 'Secret Garden Getaway in the City. Great for social distancing!
        NEWLY RENOVATED charming space designed to reflect quintessential Boho California style in a stately Ranch style Listing.
        Located in the heart of historical Hancock Park and walking distance to some of the best shops and restaurants LA has to offer!
        Bright, airy and modern with touches of vintage and handmade art. Inside out living, with private patio and lots of light. All the creature comforts one needs to rest, work and play!', 
    location: 'LosAngeles',
    num_beds: 1,
    longitude: -118.39787,
    latitude: 34.048271,
    host_id: jack.id,
     
    city: 'LA'
})

home18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '86.webp')), filename: '86.webp')
home18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '87.webp')), filename: '87.webp')
home18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '88.webp')), filename: '88.webp')
home18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '89.webp')), filename: '89.webp')
home18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '90.webp')), filename: '90.webp')

home19 = Listing.create!({
    title: 'Apartment w/ Queen Bed',
    price: 200,
    description: '
        2 bed/1 bath apartment located in the heart of Downtown Los Angeles!
        1 mile radius of the Staples Center/Convention Center, LA Live, Grand Central Market, Arts District, and lots of restaurants and bars! 10 mins away from Dodgers Stadium. Views of DTLA from the balcony, num_beds, and all points of the apartment.', 
    location: 'LosAngeles',
    num_beds: 2,
    longitude: -118.26888,
    latitude: 34.03612,
    host_id: jack.id,
     
    city: 'LA'
})

home19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '91.webp')), filename: '91.webp')
home19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '92.webp')), filename: '92.webp')
home19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '93.webp')), filename: '93.webp')
home19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '94.webp')), filename: '94.webp')
home19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '95.webp')), filename: '95.webp')

home20 = Listing.create!({
    title: '1920s Restored Tudor Csic',
    price: 210,
    description: 'Enjoy an indulgent stay in your very own updated upper level of a 1920s Old Hollywood English Tudor at the top of the hill next to Paramount studios. Clear views or the iconic Hollywood sign to the north and the skyscrapers of Downtown LA to the east. Relish in the all year California warm weather thats located literally in the middle of Los Angeles, the house is at the apex of koreatown, silver lake and Los Filez while minutes from Hollywood and Downtown LA. Features 2 num_beds and 2 bath.', 
    location: 'LosAngeles',
    num_beds: 2,
    longitude: -118.30669,
    latitude: 34.07164,
    host_id: jack.id,
 
    city: 'LA'
})

home20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '96.webp')), filename: '96.webp')
home20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '97.webp')), filename: '97.webp')
home20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '98.webp')), filename: '98.webp')
home20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '99.webp')), filename: '99.webp')
home20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '100.webp')), filename: '100.webp')

#Toronto

home21 = Listing.create!({
    title: 'BREATHTAKING VIEW IN BEST LOCATION!',
    price: 210,
    description: 'Steps from the CN Tower, Air Canada Centre, Metro Convention Centre, Rogers Centre and Ripleys Aquarium this space boasts a breathtaking view with all the amenities one could ever ask for. Hi-speed internet.', 
    location: 'Toronto',
    num_beds: 1,
    longitude: -79.374382,
    latitude: 43.648380,
    host_id: jack.id,
     
    city: 'Toronto'
})

home21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '101.webp')), filename: '101.webp')
home21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '102.webp')), filename: '102.webp')
home21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '103.webp')), filename: '103.webp')
home21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '104.webp')), filename: '104.webp')
home21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '105.webp')), filename: '105.webp')

home22 = Listing.create!({
    title: 'Cozy Highrise With Panoramic City Views',
    price: 185,
    description: 'A luxury stylish 1 num_beds condo at Mapple Leaf Square in the heart of Downtown Toronto with spectacular views of Lake Ontario and the South Core of the City. This is a highly modern suite with comfy bed.
        We provide a cook top, microwave, and dorm fridge so you can save some money by cooking in or reheating, while easily stepping out to the one of the dozens of amazing restaurants nearby.', 
    location: 'Toronto',
    num_beds: 1,
    longitude: -79.376190,
    latitude: 43.641010,
    host_id: jack.id,
 
    city: 'Toronto'
})

home22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '106.webp')), filename: '106.webp')
home22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '107.webp')), filename: '107.webp')
home22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '108.webp')), filename: '108.webp')
home22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '109.webp')), filename: '109.webp')
home22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '110.webp')), filename: '110.webp')

home23 = Listing.create!({
    title: 'A STUNNING CONDO ACROSS CN TOWER & MTCC',
    price: 200,
    description: 'A newly-furnished condo located at the heart of Downtown Toronto guaranteed to maximize your stay with everything at close proximity. This 650 sq ft condo unit has 10 ft ceilings, hardwood flooring and granite countertop with amazing views of Lake Ontario. High-speed WiFi, Cable TV, washing machine/dryer, and basic amenities will all be available.', 
    location: 'Toronto',
    num_beds: 2,
    longitude: -79.381760,
    latitude: 43.645611,
    host_id: jack.id,
 
    city: 'Toronto'
})

home23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '111.webp')), filename: '111.webp')
home23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '112.webp')), filename: '112.webp')
home23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '113.webp')), filename: '113.webp')
home23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '114.webp')), filename: '114.webp')
home23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '115.webp')), filename: '115.webp')

home24 = Listing.create!({
    title: '⭐THE PINNACLE⭐ PENTHOUSE|180° TORONTO VIEW|PARKING',
    price: 195,
    description: 'This condo gives you a real taste of luxury living.." Wake up surrounded by skyscraper and soak in the incredible city and lake views on penthouse. When the sun sets at night, watch the CN Tower light up! Nestled in the heart of downtown Toronto. The hanging chair provides comfort and unique experience.Luxury touches are in all corners. You can also easily find Restaurants, Alcohol store&Banks near by. ', 
    location: 'Toronto',
    num_beds: 1,
    longitude: -79.385368,
    latitude: 43.649872,
    host_id: jack.id,
    
    city: 'Toronto'
})

home24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '116.webp')), filename: '116.webp')
home24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '117.webp')), filename: '117.webp')
home24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '118.webp')), filename: '118.webp')
home24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '119.webp')), filename: '119.webp')
home24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '120.webp')), filename: '120.webp')

home25 = Listing.create!({
    title: 'Luxurious- Breathtaking Views- Scotia-Bank Arena',
    price: 190,
    description: 'Located in the heart of downtown Toronto. Ideal stay for leisure and business. Elevator ride away from the LCBO, Supermarket, Scotiabank Arena, Union station, Toronto Convention centre, Ripleys Aquarium, UPX train, Harborfront from, Cn tower, Roger Centre, Roy Thompson hall. Wifi, Netflix Keurig, shampoo/conditioner.', 
    location: 'Toronto',
    num_beds: 1,
    longitude: -79.387016,
    latitude: 43.645489,
    host_id: jack.id,
    
    city: 'Toronto'
})

home25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '121.webp')), filename: '121.webp')
home25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '122.webp')), filename: '122.webp')
home25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '123.webp')), filename: '123.webp')
home25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '124.webp')), filename: '124.webp')
home25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '125.webp')), filename: '125.webp')

#Chicago 

home26 = Listing.create!({
    title: 'River Norths Finest',
    price: 150,
    description: 'Great space...Great Location. Only blocks from Michigan Avenue shopping district and blocks from downtown loop. CTA Brown line station across the street. River North Art Galleries one street south. Great Dining, Millennium Park and all that Chicago has to offer only minutes away. Divvy bike station around the corner. Jump on the Brown Line across the street, be at Wrigley Field in 15 minutes.', 
    location: 'Chicago',
    num_beds: 2,
    longitude: -87.63736,
    latitude: 41.89127,
    host_id: jack.id,
    
    city: 'Chicago'
})

home26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '126.webp')), filename: '126.webp')
home26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '127.webp')), filename: '127.webp')
home26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '128.webp')), filename: '128.webp')
home26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '129.webp')), filename: '129.webp')
home26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '130.webp')), filename: '130.webp')

home27 = Listing.create!({
    title: 'Your sweet home in Chicago',
    price: 210,
    description: 'Enjoy loft-style floor plans and top-notch amenities in a walkable neighborhood that is brimming with Chicago character. Your stay includes 1 parking space. Our one-num_beds apartments offer all the comforts and conveniences of home living. Each apartment is fully furnished and equipped with Wi-Fi; multi-channel cable TV; full kitchen; dining area; living room; queen-size bed; ensuitd washer & dryer in each unit.', 
    location: 'Chicago',
    num_beds: 1,
    longitude: -87.63497,
    latitude: 41.88509,
    host_id: jack.id,
     
    city: 'Chicago'
})

home27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '131.webp')), filename: '131.webp')
home27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '132.webp')), filename: '132.webp')
home27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '133.webp')), filename: '133.webp')
home27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '134.webp')), filename: '134.webp')
home27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '135.webp')), filename: '135.webp')

home28 = Listing.create!({
    title: 'New Spot in West Town',
    price: 130,
    description: 'Comfortable spot thats close to downtown, without all the busy cars and street noise! Minutes away from the United Arena, as well as popular neighborhoods such as Wicker Park and South Loop. Guests with canine family members can enjoy a dog park a block away. The home also has smart technology features such as a key on your phone for added security. You can also enjoy great food from local Mexican, pizza, and burger places a short walk away.', 
    location: 'Chicago',
    num_beds: 2,
    longitude: -87.64310,
    latitude: 41.88404,
    host_id: jack.id,
     
    city: 'Chicago'
})

home28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '136.webp')), filename: '136.webp')
home28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '137.webp')), filename: '137.webp')
home28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '138.webp')), filename: '138.webp')
home28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '139.webp')), filename: '139.webp')
home28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '140.webp')), filename: '140.webp')

home29 = Listing.create!({
    title: 'Private Residence',
    price: 95,
    description: 'Fully FURNISHED 1 BED CONDO. Full Amenities building with outdoor pool, fitness center, party room & theater room. Open kitchen, granite counter tops, stainless steel appliances. Breakfast Bar. Hardwood floors. Flat screen TV in living room & num_beds. Newer Furniture throughout. King Bed. Comes with all linens, sheets & towels. Includes HDTV Cable w/DVR & WiFi Internet. ', 
    location: 'Chicago',
    num_beds: 1,
    longitude: -87.62667,
    latitude: 41.89050,
    host_id: jack.id,
     
    city: 'Chicago'
})

home29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '141.webp')), filename: '141.webp')
home29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '142.webp')), filename: '142.webp')
home29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '143.webp')), filename: '143.webp')
home29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '144.webp')), filename: '144.webp')
home29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '145.webp')), filename: '145.webp')

home30 = Listing.create!({
    title: 'The Professional’s Playground ',
    price: 150,
    description: 'Located at the epicenter of Chicagos cultural, historical, and business attractions, this luxurious 2 num_beds apartment offers guests all the comforts of home, whether on the road for work or play.
        Within walking distance are world famous attractions including: Millennium Park, the Bean, Navy Pier, Riverwalk, and museum campus. Additionally, guests are merely a block from an "L" train stop, which will transport passengers anywhere they could desire in the city.', 
    location: 'Chicago',
    num_beds: 2,
    longitude: -87.632827,
    latitude: 41.8864,
    host_id: jack.id,
     
    city: 'Chicago'
})

home30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '146.webp')), filename: '146.webp')
home30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '147.webp')), filename: '147.webp')
home30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '148.webp')), filename: '148.webp')
home30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '149.webp')), filename: '149.webp')
home30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'home_images', '150.webp')), filename: '150.webp')