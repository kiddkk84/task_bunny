class Api::UsersController < ApplicationController
        # before_action :require_logged_in, except: [:create]

    # def index 
    #     # @user = User.new 
    #     render json: "hello from userscontroller" 
    # end 

    def create 
        # debugger
        @user = User.new(user_params)
        
        if @user.save 
            login!(@user)
            render json: "login user hit"
        else 
            # flash.now[:errors]=@user.errors.full_messages
            render json: @user.errors.full_messages, status: 422
        end 

    end 


private 
    def user_params
    # debugger
        params.require(:user).permit(:firstname, :lastname, :username, :email, :password)
    end 

end
