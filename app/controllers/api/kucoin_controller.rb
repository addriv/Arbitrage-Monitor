require "net/http"
require "uri"
require "json"

class Api::KucoinController < ApplicationController
  def index
    base_coin = params[:base_coin]
    quote_coin = params[:quote_coin]
    kucoin_uri = URI.parse("https://api.kucoin.com/v1/open/tick?symbol=#{base_coin}-#{quote_coin}")
    kucoin_resonse = Net::HTTP.get_response(kucoin_uri)
    @kucoin_data = JSON.parse(kucoin_resonse.body)["data"]
    return @kucoin_data
  end

  # private

  # def kucoin_params
  #   params.permit(:base_coin, :quote_coin)
  # end
end
