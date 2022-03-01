function sumInputNumbers() {
    let numbers = [];
    let i=0;
    while (i==0) {
      let n = prompt("Введите число");
      if (n === "" || n === null || !isFinite(n)) i=1
      else numbers.push(n);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += Number(number);
    }
    return sum;
  }
alert(sumInputNumbers());