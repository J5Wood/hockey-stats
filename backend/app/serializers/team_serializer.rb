class TeamSerializer
    include JSONAPI::Serializer
    attributes :name, :location, :venue

    attribute :image_url do |object|
        "#{object.get_url}"
    end
end