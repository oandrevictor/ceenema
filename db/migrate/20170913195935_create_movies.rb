class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :genre
      t.text :sinopse
      t.timestamps
    end
  end
end
