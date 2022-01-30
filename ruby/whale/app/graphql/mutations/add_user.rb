module Mutations
  class AddUser < Mutations::BaseMutation
    argument :name, String, required: true
    argument :email, String, required: true

    type Types::UserType

    def resolve(name: nil, email: nil)
      params = {
        :name => name,
        :email => email,
        :verified => false,
        :subscriber_status => "unsubscribed"
      }

      begin
        user = User.create(params)

        { user: user }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end