class Team < ApplicationRecord
    has_many :players
    has_one_attached :image
    include Rails.application.routes.url_helpers


    def get_url
        url_for(self.image)
    end
end
