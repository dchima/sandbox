module Types
  class WeatherType < Types::BaseObject
    field :longitude, String, null: false
    field :latitude, String, null: false
    field :weather, String, null: false
    field :description, String, null: false
    field :temperature, String, null: false
    field :pressure, String, null: false
    field :humidity, String, null: false
    field :country_code, String, null: false
    field :city, String, null: false
    field :sunrise, String, null: false
    field :sunset, String, null: false
  end
end
