/*
    JS 표준 내장 객체
    자바스크립트가 기본적으로 가지고 있는 객체
    String, Number, Array, Date, Math, ...
*/

// 1. Date 객체
// 시간, 날짜에 대한 정보를 얻기 위해 사용

// 현재 날짜
let now = new Date();
console.log(now); // Mon Mar 04 2024 11:48:10 GMT+0900 (한국 표준시)

// 1000ms === 1s
// 1000ms * 3600 === 1000ms * 60 * 60 === 1s * 60 * 60 === 1h
// 1000ms * 3600 * 24 === 24h

// 1970년 1월 1일 기준으로 해당 ms만큼 지난 시간
let Jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1970); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시) -> 9시는 한국 표준시에 의해 9시가 추가 됨

// new Date(year, month, date, hour, minutes, seconds, ms)
// year : 4자리
// month : 0(1월) ~ 11(12월)
// date: 1 ~ 31 / 값이 없으면 1로 처리
// hour, minutes, seconds, ms : 값이 없으면 0으로 처리

console.log(new Date(2021, 2, 15));
console.log(new Date(2021, 2, 15, 18, 30, 15));

// Date 객체 메서드
// 연, 월, 일 등의 값을 얻을 수 있음
console.log(now.getFullYear()); // 연도 4자리 숫자로 출력
console.log(now.getFullYear() + '년'); // 연도 4자리 문자로 출력
console.log(now.getMonth()); // 월 (0 ~ 11)
console.log(now.getDate()); // 일
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getMilliseconds()); // 밀리초
console.log(now.getDay()); // 요일 (0 ~ 6으로 출력) / 일요일이 0임

// 퀴즈
// 1. Date 객체 사용해서 오늘 요일 얻기
// let today = new Date();

// switch (today.getDay()) {
//     case 0:
//         return '일';
//     case 1:
//         return '월';
//     case 2:
//         return '화';
//     case 3:
//         return '수';
//     case 4:
//         return '목';
//     case 5:
//         return '금';
//     case 6:
//         return '토';
// }
// return문을 사용한다는 건 함수여야 함!!!

function checkWeekend() {
    switch (now.getDay()) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return '평일';
        //  break; // return 작성 시 break 키워드 작성하지 않아도 알아서 해당 스코프 빠져나감
        case 0:
        case 6:
            return '주말';
        //  break;
        default:
            return '알수 없음';
        //  break;
    }
}

console.log(checkWeekend());

// 2. if문
if (
    now.getDay() === 1 ||
    now.getDay() === 2 ||
    now.getDay() === 3 ||
    now.getDay() === 4 ||
    now.getDay() === 5
) {
    console.log('평일');
} else {
    console.log('주말');
}

// 3. 삼항 연산자
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
console.log(todayStatus);

// Math 객체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성
console.log(Math.E); // 2.718281828459045 -> 자연 로그의 값
console.log(Math.PI); // 파이 값 자동으로 구해줌
console.log(Math.SQRT2); // 2의 제곱근을 구해줌

// 메서드
console.log(Math.min(10, 2, 6, -50)); // 최소값: 인자로 전달 받은 값 중 최소값을 반환
console.log(Math.max(10, 2, 6, -50)); // 최대값: 인자로 전달 받은 값 중 최대값을 반환
console.log(Math.random()); // 0 <= x < 1 난수 생성 (무조건 소숫점으로만 값을 반환한다는 의미)
console.log(Math.round(3.4)); // 3 -> 소수를 반올림하여 정수로 변환
console.log(Math.round(3.8)); // 4 -> 소수를 반올림하여 정수로 변환
console.log(Math.floor(3.4)); // 3 ->소수를 버림하여 정수로 변환
console.log(Math.ceil(3.4)); // 3 -> 소수를 올림하여 정수로 변환

// Math.random() 응용
// 곱하는 수 : 원하는 범위 숫자 + 1

// 0 ~ 9 사이의 난수 생성
console.log(Math.floor(Math.random() * 10));

// 0 ~ 10 사이의 난수 생성
console.log(Math.floor(Math.random() * 11));

console.log(Math.floor(Math.random() * 10) + 1); // -> 얘는 0은 나올수가 없기 때문에 위에 처럼 11을 곱하는 방식을 선택하면 0도 나올 수 있음

// 1 ~ 100 사이의 난수 생성
console.log(Math.floor(Math.random() * 100) + 1); // -> +1의 의미 : 얘는 1부터 시작하는 난수 생성

// 20 ~ 22 사이의 난수 생성
console.log(Math.floor(Math.random() * 3) + 20); // -> Math.random() * 3 : 0.xxx, 1.xxx, 2.xxx의 난수를 발생시킴
