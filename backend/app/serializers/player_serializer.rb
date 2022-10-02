class PlayerSerializer
    include JSONAPI::Serializer
    attributes :name, :position, :shoots, :number, :age, :height, :weight, :nationality, :team, :stats

    attribute :team_img_url do |player|
        player.team.get_url
    end

end