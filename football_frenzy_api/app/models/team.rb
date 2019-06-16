class Team < ApplicationRecord
  has_many :players
  belongs_to :user
  belongs_to :league
end
