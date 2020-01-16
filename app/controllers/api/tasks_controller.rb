class Api::TasksController < ApplicationController
    def index 
        @tasks = Task.where(user_id: current_user.id)
        
        render 'api/tasks/index'
        # render json: @tasks
    end 

    def create
        
        @task = Task.new(task_params)
        @task.user_id = current_user.id
        # @task.category_id = params[:category_id]
            if @task.save!
                render "api/tasks/show"
                # render @task 
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
        params.require(:task).permit(:category, :detail, :duration, :location, :tasker_id)
    end 
end
