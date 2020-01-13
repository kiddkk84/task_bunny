class Task < ApplicationRecord
    validates :detail, :duration, :location, presence: true
    belongs_to :user
    belongs_to :category


end
