let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
function fn(arr){
  let a=prompt("Введите начальную позицию для вывода");
  let b=prompt("Введите конечную позицию для вывода");
  a--; b--;
  console.log(arr.slice(a, b));
}
fn(numbers);
