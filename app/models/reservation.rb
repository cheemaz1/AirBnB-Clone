# == Schema Information
#
# Table name: reservations
#
#  id              :bigint           not null, primary key
#  check_in_date   :datetime         not null
#  check_out_date  :datetime         not null
#  guest_id        :integer          not null
#  number_of_guest :integer          not null
#  listing_id      :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Reservation < ApplicationRecord
    validates :number_of_guest, :guest_id, :listing_id, :check_in_date, :check_out_date, presence: true

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end
