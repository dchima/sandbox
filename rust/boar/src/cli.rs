use std::env;

pub fn run() {
  let args: Vec<String> = env::args().collect();
  let command = args[1].clone(); 
  let status = "Up and running!";
  if command == "hello" {
    println!("Hi there, How are you today?");
  } else if command == "status" {
    println!("Status: {}", status);
  } else {
    println!("Sorry, I don't understand your command");
  }
} 