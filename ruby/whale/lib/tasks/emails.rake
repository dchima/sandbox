namespace :emails do
  desc "Sends daily weather emails to scheduled users"
  task :send => :environment do
    User.all.each do |user|
      # This is where to decide whether to send to any given individual user
      if user.subscriber_status == 'subscribed'
        UserMailer.send_email(user).deliver
      end
    end
  end
end