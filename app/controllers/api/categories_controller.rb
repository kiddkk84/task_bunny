class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render "api/categories/index"
        # render json: 'it hit' 
    end
end
