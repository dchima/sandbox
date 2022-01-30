use std::mem;

pub fn run() {
  let mut numbers:[i32; 4] = [1,2,3,4];
  println!("{:?}", numbers);

  numbers[2] = 7;
  println!(
    "{:?}", numbers
  );
  println!("array memory {} bytes", mem::size_of_val(&numbers));
  let slice:&[i32] = &numbers[0..3];
  println!(
    "{:?}", slice
  );
}