pub fn run() {
  let person:(&str, &str, i8) = ("Helen", "Mass", 15);
  println!(
    "{} {} {}", person.0, person.1, person.2
  );
}