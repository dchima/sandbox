require 'httparty'

class WeatherAPI
  def getWeather(ip)
    location = Geocoder.search(ip)
    response = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?lat=52.3759&lon=4.8975&appid=#{ENV['weather_key']}")
    result = JSON.parse(response.body)
    result
  end
end