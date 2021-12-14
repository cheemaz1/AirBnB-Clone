class Listing < ApplicationRecord
    validates :title, :description, :host_id, :city, :location, :num_beds, :longitude, :latitude, :price, presence: true
    
    belongs_to :user, 
        foreign_key: :host_id, 
        class_name: :User

    has_many_attached :photos

    has_many :bookings,
        foreign_key: :listing_id,
        class_name: :Booking,
        dependent: :destroy

    has_many :reviews,
        foreign_key: :listing_id,
        class_name: :Review,
        dependent: :destroy


end