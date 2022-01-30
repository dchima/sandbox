pub fn run() {
  greeting("Hi", "Tony");
  println!("{}", add(5,6));

  //closure
  // closure doesn't care about outside variables.
  let num3 = 10;
  let num_sum = |num1:i32, num2:i32| num1 + num2 + num3;
  println!("{}", num_sum(7, 7));

}

fn greeting(greet: &str, name: &str) {
  println!("{} {}, how are you", greet, name);
}

fn add(num1:i32, num2:i32) -> i32 {
  num1 + num2
}