# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  location    :string           not null
#  bedroom     :integer          not null
#  bathroom    :integer          not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  price       :float            not null
#  longitude   :float            not null
#  latitude    :float            not null
#
class Listing < ApplicationRecord
    validates :title, :price, :description, :location, :bedroom, presence: true 
    validates :longitude, :latitude, :owner_id, :host_name, :city, presence: true 

    belongs_to :host,
        class_name: :User,
        foreign_key: :owner_id

    has_many :reviews,
        class_name: :Review,
        foreign_key: :listing_id

    has_many :reservee,
        foreign_key: :listing_id,
        class_name: :Reservation   

    has_many_attached :photos
end

