class PlayerSerializer
    include JSONAPI::Serializer
    attributes :name, :position, :shoots, :number, :age, :height, :weight, :nationality, :team_id
end