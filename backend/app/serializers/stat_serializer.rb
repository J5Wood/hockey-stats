class StatSerializer
    include JSONAPI::Serializer
    attributes :year, :points, :goals, :assists, :shots, :blocked, :plus_minus, :pim, :hits, :ppg, :player
end