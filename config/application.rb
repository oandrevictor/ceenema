require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

#config.assets.initialize_on_precompile = false
module ReadAnalytics
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

        config.assets.paths << Rails.root.join("vendor","assets","bower_components")
        config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official","assets","fonts")
        config.assets.paths << Rails.root.join("vendor","assets","bower_components","videogular-themes-default","fonts")
        config.assets.paths << Rails.root.join("vendor","assets","fonts")


    config.assets.precompile << %r(.*.(?:eot|svg|ttf|woff|woff2)$)


    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
