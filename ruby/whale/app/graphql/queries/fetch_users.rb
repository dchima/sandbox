module Queries
  class FetchUsers < Queries::BaseQuery

    type [Types::UserType], null: false

    def resolve
      User.all.order(created_at: :desc)
    end
  end
end