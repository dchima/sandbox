class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.text :email
      t.boolean :verified
      t.text :subscriber_status

      t.timestamps
    end
    add_index :users, :name
  end
end
