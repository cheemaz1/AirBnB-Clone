# == Schema Information
#
# Table name: Homes
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  description :text             not null
#  home_name   :string           not null
#  price       :float            not null
#  address     :string           not null
#  city        :string           not null
#  country     :string           not null
#  lng         :float            not null
#  lat         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Home < ApplicationRecord
    validates :home_name, :description, :price, :lng, :ltd, :address, :city, :country, presence: true

    belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

    has_many_attached :photos 
    # active storage required
    # AWS
    # for user to be able to upload photos & videos



    def self.filtered(query)
        filtered_result = self.where("city LIKE ?", "%#{query}%")
        return filtered_result
    end
end
