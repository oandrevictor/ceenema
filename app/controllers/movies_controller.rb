class MoviesController < ApplicationController
  def index
    @movies = if params[:keywords]
                Movie.where('name ilike ?',"%#{params[:keywords]}%")
              else
                Movie.all
              end
  end

  def show
    @movie = Movie.find(params[:id])

  end

  def create
        @movie = Movie.new(params.require(:movie).permit(:name,:sinopse, :imdb_id, :imgurl,  :genre, :runtime, :release, :trailer))
        @movie.save
        render 'show', status: 201
      end

    def update
        movie = Movie.find(params[:id])
        movie.update_attributes(params.require(:movie).permit(:name,:sinopse, :runtime, :genre, :imdb_id, :imgurl, :release, :trailer))
        head :no_content
    end

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
        head :no_content
    end
end
