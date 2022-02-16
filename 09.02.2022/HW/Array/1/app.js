let numbers = [1, 2, 3, 4, 5]
console.log(numbers);

console.log("for");
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

console.log("while");
index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++
}

console.log("do while");
index = 0;
do {
    console.log(numbers[index]);;
    index++
} while (index < numbers.length);

console.log("for in");
for (let key in numbers) {
    console.log(numbers[key]);
}

console.log("for of");
for (let num of numbers) {
    console.log(num);
}

console.log("forEach");
numbers.forEach(element => console.log(element))

console.log("map");
numbers.map(element => console.log(element))