
let a = Number(prompt('Введите число:'));
for (let i = 1; i <= a; i++) {
  if (a % i == 0) {
    console.log(i);
  }
}
