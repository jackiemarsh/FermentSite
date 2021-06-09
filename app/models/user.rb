class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 8, allow_nil: true}

    attr_reader :password

    before_validation :ensure_session_token

    # has_one_attached :image

    has_many :events, 
        foreign_key: :author_id, 
        class_name: :Event
    
    has_many :event_rsvps

    has_many :rsvps,
        through: :event_rsvps,
        source: :event

    def self.find_by_credentials(un, pw)
        @user = User.find_by(username: un)
        if @user && @user.is_password?(pw)
            return @user
        else
            nil
        end
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        po = BCrypt::Password.new(self.password_digest)
        po.is_password?(pw)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
