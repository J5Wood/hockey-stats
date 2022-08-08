require 'rest-client'

namespace :myapp do
    namespace :players do
      desc 'Refresh players'
      task refresh: :environment do
        # url = "https://statsapi.web.nhl.com/api/v1/players"
        # response = RestClient.get(url)
        # puts response
        # byebug
      end
    end
  end