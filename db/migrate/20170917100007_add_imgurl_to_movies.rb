class AddImgurlToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :imgurl, :string
  end
end
