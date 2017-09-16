class MoviesController < ApplicationController
  def index
    @movies = if params[:keywords]
                Movie.where('name ilike ?',"%#{params[:keywords]}%")
              else
                []
              end
  end

  def show
    @movie = Movie.find(params[:id])

  end

  def create
        @movie = Movie.new(params.require(:movie).permit(:name,:sinopse, :runtime, :gender, :imdb_id))
        @movie.save
        render 'show', status: 201
      end

    def update
        movie = Movie.find(params[:id])
        movie.update_attributes(params.require(:movie).permit(:name,:sinopse, :runtime, :gender, :imdb_id))
        head :no_content
    end

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
        head :no_content
    end
end
