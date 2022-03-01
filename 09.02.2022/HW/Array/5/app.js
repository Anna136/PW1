console.log("Остаток деления чисел на 3");
let numders = [1, 2, 3, 4, 5, 6];
function fun(a){
  return a%3;
}
function convert(fn, arr){
  let ost = [];
  for(let number of arr){
    ost.push(fun(number));
  }
  console.log(ost);
}
convert(fun (), numders);
console.log(numders);