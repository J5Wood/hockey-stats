class PlayersController < ApplicationController

    def show
        player = Player.where(name: player_params)
        render json: PlayerSerializer.new(player)
    end

    private

    def format_name(name)
        name.split("_").join(" ")
    end

    def player_params
        format_name(params.require("id"))
    end


end
