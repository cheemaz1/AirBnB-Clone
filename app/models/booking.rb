class Booking < ApplicationRecord
    validates :num_guests, :guest_id, :home_id, :check_in, :check_out, presence: true

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :home,
        foreign_key: :home_id,
        class_name: :Home
end
