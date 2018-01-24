require "net/http"
require "uri"
require "json"
require "pry"

input_coin = "BTC"
output_coin = "NEO"
arbitrage_coin = "DBC"

arbitrage_input_uri = URI.parse("https://api.kucoin.com/v1/open/tick?symbol=#{arbitrage_coin}-#{input_coin}")
arbitrage_output_uri = URI.parse("https://api.kucoin.com/v1/open/tick?symbol=#{arbitrage_coin}-#{output_coin}")
output_input_uri = URI.parse("https://api.kucoin.com/v1/open/tick?symbol=#{output_coin}-#{input_coin}")

while true
  arbitrage_input_response = Net::HTTP.get_response(arbitrage_input_uri)
  arbitrage_output_response = Net::HTTP.get_response(arbitrage_output_uri)
  output_input_response = Net::HTTP.get_response(output_input_uri)

  arbitrage_input_ratio = JSON.parse(arbitrage_input_response.body)["data"]["lastDealPrice"]
  arbitrage_output_ratio = JSON.parse(arbitrage_output_response.body)["data"]["lastDealPrice"]
  output_input_ratio = JSON.parse(output_input_response.body)["data"]["lastDealPrice"]

  kucoin_data = JSON.parse(arbitrage_input_response.body)["data"]
  puts kucoin_data
  sleep(1)
end