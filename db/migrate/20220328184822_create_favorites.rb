class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :technology_id
      t.belongs_to :user, null: false, foreign_key: true
      t.string :video_id
      t.string :twitch_streamer
      t.integer :stream_id

      t.timestamps
    end
  end
end
