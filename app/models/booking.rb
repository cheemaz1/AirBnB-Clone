class Booking < ApplicationRecord
    validates :check_in_date, :check_out_date, :guest_id, :listing_id, :number_of_guest, :price, presence: true
    
    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end