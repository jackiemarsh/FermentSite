class EditEventDateCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :start_date
    add_column :events, :start_date, :date
  end
end
