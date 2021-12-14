class DCreateUsersAgain < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: { unique: true }

      t.timestamps
    end
    add_index :users, :email, unique: true 
    add_index :users, :session_token, unique: true 
  end
end
