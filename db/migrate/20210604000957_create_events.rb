class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.datetime :start_date, null: false

      t.timestamps
    end
    add_index :events, :author_id
    add_index :events, :title
    add_index :events, :start_date
  end
end
