require 'clockwork'
require 'active_support/time'
require './config/boot'
require './config/environment'

module Clockwork
  every 1.day, :at => "9am" do
    `rake emails:send`
    # puts 'd'
  end
end