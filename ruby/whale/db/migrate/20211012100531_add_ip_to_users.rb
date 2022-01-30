class AddIpToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :ip, :string
  end
end
