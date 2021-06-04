class Api::SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token
    
    def create
        @user = Api::User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password"], status: 422
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["You're not signed in!"], status: 404
            # empty {}?
        end
    end
end
