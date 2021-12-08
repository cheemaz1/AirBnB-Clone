class Review < ApplicationRecord 
    validates :rating, inclusion: {in: (1..5)}, presence: true 
    validates :body, :listing_id, :user_id, :review_name, presence: true 

    belongs_to :author,
        class_name: :User,
        foreign_key: :user_id

    belongs_to :listing, 
        class_name: :Listing,
        foreign_key: :listing_id
        
end 
