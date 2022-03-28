class CreateStreams < ActiveRecord::Migration[6.1]
  def change
    create_table :streams do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :mux_id
      t.string :stream_key

      t.timestamps
    end
  end
end
