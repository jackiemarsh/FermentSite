class CreateEventRsvps < ActiveRecord::Migration[5.2]
  def change
    create_table :event_rsvps do |t|
      t.integer :event_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end
