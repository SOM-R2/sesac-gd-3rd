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

// 배열에서의 반복 실습 강사님 답
let numArr = [];
// i를 1로 시작할 경우
// for (let i = 1; i < 100; i++) {
//     numArr.push(i);
// }

// i가 0으로 시작하는 경우 : i가 인덱스를 의미하기 때문에 컴퓨터는 인덱스를 0부터 시작하는 것이 자연스러움 따라서 i를 0으로 두고 +1을 해 줘도 되고 위에처럼 i를 1로 시작해도 같은 것임
for (let i = 0; i < 100; i++) {
    numArr.push(i + 1);
}

// 합 구하기
// 1. for 문
let sum1 = 0;
for (let i = 0; i < numArr.length; i++) {
    sum1 = sum1 + numArr[i];
}

console.log(sum1);

// 2. for of문
let sum4 = 0;
// numArr 배열에 있는 모든 요소를 num이라고 지칭하면서 반복한다.
for (let num of numArr) {
    sum4 = sum4 + num;
    // sum4 += num;
}

// 3. forEach문 -> 반복문 아님, 메소드임 따라서 인자를 받음(여기서 인자로는(콜백)함수를 받음)

// 메소드는 함수의 종류임
// 함수 안에 또 다른 함수가 들어가는 형태 => 콜백함수
// 콜백 함수는 주로 화살표 함수 형태로 작성함

let sum5 = 0;
numArr.forEach(function (num) {
    sum5 = sum5 + num;
    // sum5 += num;
});

// 화살표 함수로 작성
numArr.forEach((num) => {
    sum5 = sum5 + num;
    // sum5 += num;
});
