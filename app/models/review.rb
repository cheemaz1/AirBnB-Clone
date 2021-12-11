class Review < ApplicationRecord 
    validates :rating, inclusion: {in: (1..5)}, presence: true 
    validates :body, :home_id, :user_id, :review_name, presence: true 

    belongs_to :author,
        class_name: :User,
        foreign_key: :user_id

    belongs_to :home, 
        class_name: :Home,
        foreign_key: :home_id
        
end 
