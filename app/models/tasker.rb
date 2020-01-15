class Tasker < ApplicationRecord
validates :catgory_id, :contact, :user_id, :rate, :city, :intruction,  presence: true

    belongs_to :category
    # has_many :tasks
end
