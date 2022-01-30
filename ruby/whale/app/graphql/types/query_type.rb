module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    # field :test_field, String, null: false,
    #   description: "An example field added by the generator"
    # def test_field
    #   "Hello World!"
    # end

    field :fetch_users, resolver: Queries::FetchUsers
    field :fetch_user, resolver: Queries::FetchUser
    field :fetch_weather, resolver: Queries::FetchWeather
  end
end
