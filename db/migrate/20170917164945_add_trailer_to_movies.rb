class AddTrailerToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :trailer, :string
  end
end
