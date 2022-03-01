let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
function fn(arr){
  arr.splice(4, 1, 0, 0, 0);
}
fn(numbers);
console.log(numbers);