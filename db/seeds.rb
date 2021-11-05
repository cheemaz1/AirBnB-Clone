# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Home.destroy_all

jake = User.create!({username: 'user3', password: '123123', email: 'u33@gmail.com', first_name: 'user', last_name: '3rthy', birthday: '1995-01-01'})

manhattan_1 = Home.create(price: 90, 
                        home_name: "Luxury Condo in DT", 
                        host_id: jake.id, 
                        description: "Come chill here for amazing balcony views of the Manhattan Skyline", 
                        city: 'New York',
                        country: 'USA', 
                        ltd: 40.777384, 
                        lng: -73.9803, 
                        address: '31 W 71st St, New York, NY 10023')