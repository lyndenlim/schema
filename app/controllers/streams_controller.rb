class StreamsController < ApplicationController
  require "net/http"
  require "uri"
  require "json"

  def mux_streams
    url = URI("https://api.mux.com/video/v1/live-streams?status=active")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["Authorization"] = "Basic #{params[:api_key]}"

    response = https.request(request)
    JSON.parse(response.body)
    render json: response.body
  end

  def mux_videos
    url = URI("https://api.mux.com/video/v1/assets")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["Authorization"] = "Basic #{params[:api_key]}"

    response = https.request(request)
    JSON.parse(response.body)
    render json: response.body
  end

#   def get_stream_key
#     url = URI("https://api.mux.com/video/v1/live-streams")

#     https = Net::HTTP.new(url.host, url.port)
#     https.use_ssl = true

#     request = Net::HTTP::POST.new(url.path, "Content-Type" => "application/json")
#     request.body = { "playback_policy" => "public", "new_asset_settings" => { "playback_policy" => "public" }, "reconnect_window" => "0" }.to_json
#     request["Authorization"] = "Basic #{params[:api_key]}"

#     response = https.request(request)
#     puts "response: #{response.body}"
#     JSON.parse(response.body)
#     render json: response.body
#   end
end
