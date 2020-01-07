class Api::SessionController < ApplicationController
    
    def create 
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user 
            login!(@user)
            render json: 'session user hit' 
        else 
            render json: ["Invalid"], status: 401
        end 
    end 

    def destroy
        @user = current_user
        if @user
            logout!
            render json: 'session destoryed'
        else
            render json: ["none"], status: 404
        end
    end


end
