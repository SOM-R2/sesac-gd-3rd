// 1. 1 ~ 100까지의 배열을 for문을 사용해서 만들기
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
console.log(numbers);

// 2. 해당 배열의 합 구하기
// - for문
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
}
console.log(sum);

// - for of문
let sum2 = 0;
for (let number of numbers) {
    sum2 += Number(number);
}
console.log(sum2);

// - forEach문
let sum3 = 0;
numbers.forEach((number) => {
    sum3 += Number(number);
});
console.log(sum3);
