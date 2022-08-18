class TeamsController < ApplicationController
    def index
        teams = Team.all.order(name: :asc)
        render json: TeamSerializer.new(teams)
    end

    def show
        byebug
    end
end
