class PlayersController < ApplicationController

    def show
        player = Player.where(name: player_params)
        render json: PlayerSerializer.new(player)
    end

    private

    def player_params
        params.require("id").titleize
    end


end
