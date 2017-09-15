class AddRuntimeToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :runtime, :integer
  end
end
