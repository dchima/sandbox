/**
 * Types:
 * integers: u(8,16,32,64,128), i(8,16,32,64,128)
 * floats: f32, f64
 * boolean: bool
 * character: char
 * tuples
 * arrays
 */
pub fn run() {
  println!("max: {}", std::i32::MAX);
  println!("max: {}", std::i64::MAX);
  println!("max: {}", std::i128::MAX);

  let y:i32 = 555;
  let is_true = true;
  let is_greater = 10 > 5;
  let face = '\u{1F600}';
  println!("{:?}", (y, is_true, is_greater, face));
}