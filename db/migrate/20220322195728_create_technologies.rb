class CreateTechnologies < ActiveRecord::Migration[6.1]
  def change
    create_table :technologies do |t|
      t.integer :category_id
      t.string :technology

      t.timestamps
    end
  end
end
