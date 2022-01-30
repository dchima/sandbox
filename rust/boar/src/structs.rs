
pub fn run() {
  let mut c =  Color {
    red: 255,
    green: 0,
    blue: 0
  };
  c.blue = 15;
  println!("color {} {} {}", c.red, c.green, c.blue);

  let mut ca = Tupcolor(255,0,0);
  ca.0 = 200;
  println!("color {} {} {}", ca.0, ca.1, ca.2);

  let mut p = Person::new("John", "Doe");
  println!("Person {} {}", p.first_name, p.last_name);
  println!("Person {}", p.full_name());
  p.set_last_name("King");
  println!("Person {}", p.full_name());
  println!("tuple person {:?}", p.to_tuple());
}

struct Color {
  red:  u8,
  green: u8,
  blue: u8,
}

// tuple struct
struct Tupcolor(u8, u8, u8);

struct Person{
  first_name: String,
  last_name: String
}

// implement struct with fn
impl Person {
  // construct new person
  fn new(first: &str, last: &str) -> Person {
    Person {
      first_name: first.to_string(),
      last_name: last.to_string()
    }
  }
  // get full name
  fn full_name(&self) -> String {
    format!("{} {}", self.first_name, self.last_name)
  }

  // set last name
  fn set_last_name(&mut self, last: &str) {
    self.last_name = last.to_string();
  }

  //set name to tuple
  fn to_tuple(self) -> (String, String) {
    (self.first_name, self.last_name)
  }
}