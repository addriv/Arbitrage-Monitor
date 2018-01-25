require "net/http"
require "uri"
require "json"

class Api::KucoinController < ApplicationController
  def index
    base_coin = params[:base_coin]
    quote_coin = params[:quote_coin]
    kucoin_uri = URI.parse("https://api.kucoin.com/v1/open/tick?symbol=#{base_coin}-#{quote_coin}")
    kucoin_resonse = Net::HTTP.get_response(kucoin_uri)
    kucoin_data = JSON.parse(kucoin_resonse.body)["data"]
    @data = {
      symbol: kucoin_data["symbol"],
      lastTradePrice: kucoin_data["lastDealPrice"],
      buy: kucoin_data["buy"],
      sell: kucoin_data["sell"]
    }
    render :index
  end

  private

  def kucoin_params
    params.permit(:base_coin, :quote_coin, :format)
  end
end
