class AddReleaseToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :release, :date
  end
end
