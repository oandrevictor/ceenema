class HomeController < ApplicationController
  def index
    Movie.create!(name: 'Minions')
  end
end