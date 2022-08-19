teamUrl = "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster"
playerUrl = "https://statsapi.web.nhl.com/api/v1/people/"

teamResponse = RestClient.get(teamUrl)
teams = JSON.parse(teamResponse)["teams"]

for team in teams do
    imagePath = "#{Rails.root}/public/images/#{team["teamName"].split.join("-").downcase}.svg"
    t = Team.create(id: team["id"], name: team["teamName"], location: team["locationName"], venue: team["venue"]["name"])
    t.image.attach(io: File.open("#{Rails.root}/public/images/#{team["teamName"].split.join("-").downcase}.svg"), filename: "#{team["teamName"].split.join("-").downcase}.svg", content_type: "image/svg+xml")
    # byebug
    for player in team["roster"]["roster"] do
        playerResponse = RestClient.get(playerUrl + player["person"]["id"].to_s)
        person = JSON.parse(playerResponse)["people"][0]
        t.players.create(id: person["id"], name: person["fullName"], position: person["primaryPosition"]["name"], shoots: person["shootsCatches"], number: person["primaryNumber"].to_i, age: person["currentAge"], height: person["height"], weight: person["weight"], nationality: person["nationality"])
    end
    puts t.name
end

# t = Team.new(id: team["id"], name: team["teamName"], location: team["locationName"], venue: team["venue"]["name"], image: imagePath)
# (io: File.open("../public/images/devils.svg"), filename: "devils.svg", content_type: "image/jpeg")
