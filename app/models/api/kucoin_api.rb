require "net/http"
require "uri"
require "json"

class Api::KucoinApi < ApplicationRecord
  def initialize(base_coin, quote_coin)
    kucoin_uri = URI.parse("https://api.kucoin.com/v1/open/tick?symbol=#{base_coin}-#{quote_coin}")
    kucoin_resonse = Net::HTTP.get_response(kucoin_uri)
    kucoin_data = JSON.parse(kucoin_resonse.body)["data"]
  end
end
