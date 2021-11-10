class Review < ApplicationRecord
    validates :body, :rating, :guest_id, :home_id, presence: true
    validates :rating, inclusion: {in: (1..5)}

    belongs_to :home,
    class_name: :Home,
    foreign_key: :home_id

    belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end
