class Api::TasksController < ApplicationController
    def index 
        @tasks = Task.find_by(user_id: current_user.id)
    end 

    def create
        @task = Task.new(task_params)
        @task.user_id = current_user.id

            if @task.save
                render "api/tasks/show"
            else 
                render json: ["missing tasks info"]
            end 
        end 

    def update 
    end 

    def destroy
        @task = Task.find(params[:id])
            if @task.destroy
                render "api/tasks/show"
            else
            render json: @task.errors.full_messages, status: 422
        end

    end 

private 
    def task_params
        params.require(task:).permit(:detail, :duration, :location)
    end 
end
