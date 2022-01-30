class UserMailer < ApplicationMailer
  default from: 'danchima98@gmail.com'
  def send_email(user: nil)
    subject = "Today's Weather Forecast"
    @user = user
    @weather = weather
    # @events = []
    email = "#{user.name} <#{user.email}>"
    puts "Emailing #{subject} to #{email}"
    mail(:to => email, :subject => subject)
  end
end