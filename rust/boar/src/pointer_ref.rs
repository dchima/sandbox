 // pointers point to a resource in memory
pub fn run() {
  let arr1 = [5,6,7];
  let arr2 = arr1;
  println!("{:?}", (arr1, arr2));

  let vec1 = vec![5,6,7];
  let vec2 = &vec1;
  println!("{:?}", (&vec1, vec2));
}