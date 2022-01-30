pub fn run() {
  println!("Hi from the print.rs file");
  println!("Number: {} {}", 1, "Sunday");
  println!(
    "{0} {0} {1} {3} {2}", 
     4, 6, 0, 5
  );
  println!(
    "{foo} {bar}",
    foo = "hello",
    bar = "world"
  );
  println!(
    "{:b} {:x} {:o}", 10, 10, 10
  );
  println!(
    "{:?} ", (16, 9, 9)
  );
  println!(
    "{}", 10+10
  )
}