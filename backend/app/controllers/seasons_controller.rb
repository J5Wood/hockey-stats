class SeasonsController < ApplicationController

    def index
    seasons = Season.where(year: season_params)
    render json: SeasonSerializer.new(seasons)
    end

    private

    def season_params
        params.require("year")
    end
end
