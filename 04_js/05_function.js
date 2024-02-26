/*
    함수
        - 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
        - 함수 정의 -> 함수 호출
        - 함수 정의 / 선언 구조
            - keyword: function
            - name : 함수 이름 (camelCase로 많이 작성)
            - parameter: 함수 선언 시 매개변수로 받을 것 
                        (parameter, arguments, 인자, 매개변수 모두 동일한 의미)
            - body: 함수 내부 코드 (Scope라고도 함)  
        - 함수 정의 / 선언 방식
            - 함수 선언문(명시적 함수 선언)
                - function 키워드 사용
                - ex) function name() {}
            - 함수 표현식
                - 함수 이름 작성 x -> 변수를 만들어 함수를 저장
                - 참고) JS에서는 함수가 값이기 때문에 가능한 방식
                - ex) const funcName = function() {}
            - 화살표 함수
                - function 키워드 사용하지 않고, 화살표로 작성
                - ex) const function = () => {}

        (참고) 함수 선언문 vs 함수 표현식
            - 함수 선언문 (function funcName() {}) 형태로 작성 / 함수 선언 전 호출 가능
            - 함수 표현식 const funcName = function() {} / 함수 선언 전 호출 불가

*/

helloWorld1(); // 함수 선언문으로 작성된 함수는 함수 선언 전 호출 가능
// helloWorld2(); // 에러 : 함수 표현식으로 작성된 함수는 함수 선언 전 호출 불가능 (const 때문에 const가 먼저 읽히고 실행되느라 오류남)

// 함수 정의
// 1. 명시적 함수 선언 -> 함수 선언문
// 매개변수 x, 반환값 x -> 실행이 되는 것에 의의를 두는 함수
function helloWorld1() {
    console.log('helloWorld1');
}

// 함수 호출
helloWorld1();

// 2. 함수 표현식
const helloWorld2 = function () {
    console.log('helloWorld2');
};

// 함수 호출
helloWorld2();

// 2-2. 화살표 함수
const helloWorld3 = () => {
    console.log('helloWorld3');
};

helloWorld3();

// return 사용
/* 
    return: 반환값 -> 함수 내부 코드의 "최종 결과 값" 
    console.log()로 콘솔을 찍는 것에서 그치지 않고,
    함수 내부 코드이 최종 결과값을 저장하고, 보관하기 위한 키워드 
    - 함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단 
*/

// 인자 없이 return 값(반환값)만 가지고 있는 함수
function onePlusOne() {
    return 1 + 1;
}

// 콘솔이 없다면 함수를 콘솔.log로 감싸서 작성(위의 예제들은 함수안에 콘솔이 있기 때문에 함수만 적음)
// onePlusOne(); // -> 2

console.log(onePlusOne()); // console.log(2); -> 콘솔창에 2를 찍음

function numPlusOne(num) {
    return num + 1;
}

console.log(numPlusOne(5)); // num -> 5 -> 5 + 1 -> 6을 반환 -> console.log(6)

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(5, 7)); // 12

// 실제로는 실행 할때는 실제로 실행한 반환값을 변수에 저장해서 사용(5와 7이외에도 더 다양하고 여러번 사용하기 위해)
const result = sum(5, 7);
console.log(result);
// 활용 예시
const result2 = sum(100, 35);

// 매개변수 O, 반환값 X는 함수
function hello(name) {
    alert(`Hello! ${name}`);
}

hello('layla'); // Hello! layla를 alert창에 보여줌

const username = 'layla';
hello(username); // 얘도 마찬가지로 Hello! layla를 alert창에 보여줌

// 실습 함수 만들기 1
function multifly(n1, n2) {
    return n1 * n2;
}
console.log(multifly(3, 7));
console.log(multifly(2, 2));

// 실습 함수 만들기 2
const square = function (n3) {
    console.log(n3 ** 2);
};

square(4);
square(11);

// 강사님 답
//multifly 함수 만들기
function multifly(num1, num2) {
    return num1 * num2;
    // 매개변수 확인하는 콘솔
    // console.log('num1 : ', num1);
    // console.log('num2 : ', num2);

    // return문 아래에는 어떤걸 작성해도 실행이 안됨
    console.log('aa'); // return문 다음 코드는 실행하지 않음
}

console.log(multifly(3, 7));

// square 함수 만들기
// 매개 변수 이름은 겹쳐도 상관 없음
function square(num) {
    return num ** 2;
}

console.log(square(4));
