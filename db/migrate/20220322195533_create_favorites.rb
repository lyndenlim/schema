class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :category_id
      t.string :videos

      t.timestamps
    end
  end
end
