class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :first_name, :last_name, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}
    
    has_many :listings,
        foreign_key: :host_id,
        class_name: :Listing

    has_many :bookings,
        foreign_key: :guest_id,
        class_name: :Booking

    has_many :reviews,
        foreign_key: :guest_id,
        class_name: :Review

    has_one_attached :photo
        
    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(64)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(64)
    end
end
