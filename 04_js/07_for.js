console.log('connected!');

// for문
/*
    for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/ 감소할 지 작성); 증감) {
        반복할 코드 
    }
*/

// i + 1 = i / i += 1 / i++ -> 모두 동일함
// i - 1 = i / i -= 1 / i-- -> 모두 동일함
// i++ : 변수 i에서 값을 꺼낸 뒤, 1을 더함
// i-- : 변수 i에서 값을 꺼낸 뒤, 1을 뺌

// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림

for (let i = 0; i < 10; i++) {
    // console.log('안녕', i);
    console.log(`안녕 ${i}`);
}

console.log('------------------------------');
// 10보다 작을 때 , 3씩 증가
for (let i = 0; i < 10; i += 3) {
    // console.log('안녕', i);
    console.log(i);
}

// 1부터 5까지 1씩 증가하면서 출력하는 방법
// 방법1. i <= 5
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// 방법2. i < 6
for (let i = 0; i < 6; i++) {
    console.log(i);
}

console.log('-------------------');
// 5부터 1까지 감소하면서 출력하기
for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log('-------------------');
// 퀴즈) 1부터 n값까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;

for (i = 1; i <= n; i++) {
    // result = result + i;
    result += i;
}
console.log(result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ['americano', 'latte', 'espresso', 'tea'];
console.log(cafe.length); // 배열의 길이를 출력

for (let i = 0; i < cafe.length; i++) {
    console.log('cafe menu', cafe[i]);
    // i가 0일 때 (1번째 반복에서) cafe[0]을 콘솔로 찍음
    // i가 1일 떄 (2번째 반복에서) cafe[1]을 콘솔로 찍음
    // i가 2일 때 (3번째 반복에서) cafe[2]을 콘솔로 찍음
    // i가 3일 때 (4번째 반복에서) cafe[3]을 콘솔로 찍음
    // i가 4일 때 (5번째 반복은) 하지 않는다. -> i가 4이기 때문 -> 조건식이 false여서 for문 종료
}

// 배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;
// length는 인덱스가 아닌 길이기 떄문에 인덱스보다 1 큼
for (let i = 0; i < numArr.length; i++) {
    // numSum = numSum + numArr[i];
    numSum += numArr[i];
    // 실시간으로 더해진 값 확인하는 콘솔
    console.log(numSum);
}

console.log(numSum);

console.log('-------------------');
// for문과 if문 함께 사용
// 짝수만 출력
// 1. for 문만 사용
for (let i = 2; i < 10; i += 2) {
    console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.clear();

// 2단 출력하기(단을 입력받아 출력하기)
let num = Number(prompt('구구단을 계산할 숫자를 입력하세요.'));
console.log(`${num}단`);
for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} =`, num * i);
}

// 2단부터 9단까지 중첩 for문 사용해서 출력하기
for (let i = 2; i < 10; i++) {
    console.log(`${i}단`);
    for (let n = 1; n < 10; n++) {
        console.log(`${i} * ${n} =`, i * n);
    }
}

console.clear();
// 강사님 답
// 구구단 출력하기
const number = 2;
// const number = Number(prompt('구구단을 계산할 숫자를 입력해주세요.'));
console.log(number + '단');
for (let i = 1; i < 10; i++) {
    //  console.log(number + ' * ' + i + = ' = '  + number * i);
    console.log(`${number} * ${i} = ${number * i}`);
}

// 이중 for문
for (let i = 0; i < 5; i++) {
    console.log('i : ', i);

    for (let j = 0; j < 10; j++) {
        console.log(`현재 i는 ${i}이고, j는 ${j}입니다.`);
    }
}
