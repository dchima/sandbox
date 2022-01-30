pub fn run() {
  let mut my_string = String::from("Hey ");
  my_string.push('T');
  my_string.push_str("here!");
  println!("{}", my_string.replace("There", "world"));
  for token in my_string.split_whitespace() {
    println!("{}", token);
  }
  println!("{}", my_string);
  let mut s = String::with_capacity(12);
  s.push('a');
  s.push('b');
  assert_eq!(12, s.capacity());
}