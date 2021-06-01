class Api::User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 8, allow_nil: true}

    attr_reader :password

    # has_many :events

    def self.find_by_credentials(un, pw)
        @user = user.find_by(username: un)
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
        po = BCrypt::password.new(self.password_digest)
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
