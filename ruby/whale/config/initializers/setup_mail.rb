# ActionMailer::Base.delivery_method = :smtp 
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => "danchima98@gmail.com",
  :password             => ENV['gmail_password'],
  :authentication       => :plain,
  :enable_starttls_auto => true
}