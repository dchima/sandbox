pub fn run() {
   let age = 18;
   if age >= 21 {
     println!("You can drink");
   } else {
     println!("You're underage");
   }

   let is_underage = if age < 21 { true } else { false };
   println!("{}", is_underage);
}