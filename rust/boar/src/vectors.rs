// vectors are resizable arrays

use std::mem;
pub fn run() {
  let mut numbers: Vec<i32> = vec![1,2,3,4,5];
   println!("array memory {} bytes", mem::size_of_val(&numbers));
  numbers[4] = 30;
  numbers.push(5);
  numbers.push(40);
   println!("array memory {} bytes", mem::size_of_val(&numbers));
  println!("{:?}", numbers);

  for x in numbers.iter_mut() {
    *x *= 2;
    println!("{}", x);
  }
  println!(
    "{:?}", numbers
  );
}