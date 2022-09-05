class StatsController < ApplicationController

    def index
    stats = Stat.where(year: stat_params)
    render json: StatSerializer.new(stats)
    end

    private

    def stat_params
        params.require("year")
    end
end
