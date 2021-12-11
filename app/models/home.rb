
class Home < ApplicationRecord
    validates :title, :price, :description, :location, :bedroom, presence: true 
    validates :lng, :ltd, :owner_id, :host_name, :city, presence: true 

    belongs_to :host,
        class_name: :User,
        foreign_key: :owner_id

    has_many :reviews,
        class_name: :Review,
        foreign_key: :home_id

    has_many :reservee,
        foreign_key: :home_id,
        class_name: :Booking   

    has_many_attached :photos
end

