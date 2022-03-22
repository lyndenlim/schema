class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :username
      t.string :description
      t.string :profile_image_url
      t.boolean :is_disabled

      t.timestamps
    end
  end
end
