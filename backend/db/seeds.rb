teamUrl = "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster"
playerUrl = "https://statsapi.web.nhl.com/api/v1/people/"

def statsUrl (player)
    "https://statsapi.web.nhl.com/api/v1/people/#{player}/stats?stats=yearByYear"
end

teamResponse = RestClient.get(teamUrl)
teams = JSON.parse(teamResponse)["teams"]

for team in teams do
    imagePath = "#{Rails.root}/public/images/#{team["teamName"].split.join("-").downcase}.svg"
    t = Team.create(id: team["id"], name: team["teamName"], location: team["locationName"], venue: team["venue"]["name"])
    t.image.attach(io: File.open("#{Rails.root}/public/images/#{team["teamName"].split.join("-").downcase}.svg"), filename: "#{team["teamName"].split.join("-").downcase}.svg", content_type: "image/svg+xml")

    for player in team["roster"]["roster"] do
        playerResponse = RestClient.get(playerUrl + player["person"]["id"].to_s)
        person = JSON.parse(playerResponse)["people"][0]
        pl = t.players.create(id: person["id"], name: person["fullName"], position: person["primaryPosition"]["name"], shoots: person["shootsCatches"], number: person["primaryNumber"].to_i, age: person["currentAge"], height: person["height"], weight: person["weight"], nationality: person["nationality"])
        
        playerStatResponse = RestClient.get(statsUrl(person["id"]))
        playerStats = JSON.parse(playerStatResponse)["stats"][0]["splits"]
        for season in playerStats do
            # byebug
            if season["league"]["id"] == 133
                if person["primaryPosition"]["code"] == "G"
                    # Add goalie stats to seasons
                    # stats = season["stats"]
                    # newSeason = Season.new(year: season["season"], points: stats["points"] goals: assists: shots: blocked: plus_minus: pim: hits: ppg:)
                    # byebug
                else
                    stats = season["stat"]
                    pl.seasons.create(year: season["season"], points: stats["points"], goals: stats["goals"], assists: stats["assists"], shots: stats["shots"], blocked: stats["blocked"], plus_minus: stats["plusMinus"], pim: stats["pim"], hits: stats["hits"], ppg: stats["powerPlayGoals"])

                end
            end
        end
    end
    puts t.name
end

# t = Team.new(id: team["id"], name: team["teamName"], location: team["locationName"], venue: team["venue"]["name"], image: imagePath)
# (io: File.open("../public/images/devils.svg"), filename: "devils.svg", content_type: "image/jpeg")
