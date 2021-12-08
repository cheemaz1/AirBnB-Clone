class Booking < ApplicationRecord
    validates :number_of_guest, :guest_id, :home_id, :check_in_date, :check_out_date, presence: true

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :home,
        foreign_key: :home_id,
        class_name: :Home
end
