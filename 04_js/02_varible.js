console.log("connected!");

// 변수 선언하고 사용하기

/*
    var 키워드
    1. 변수 선언 -> 값 할당
    2. 변수 선언과 값 할당을 동시에 
*/
// 변수 선언
var varName; // undefined

// 변수 선언
varName = "layla";

// 변수 선언과 값 할당을 동시에

var varName2 = "layla2";

// 변수는 따옴표 없이 작성
console.log(varName); // layla 출력
console.log("varName");
console.log(varName2);

// 변수 재할당(변수에 다시 값을 주겠다.)
varName = "Yuki"; // varName 변수의 값이 "layla" -> "Yuki" 변경
console.log(varName); // Yuki 출력

// var의 이상한 점
// 1. 변수를 동일한 이름으로 재선언 할 수 있음(값이 덮어씌어짐)
var varName = "lily";
console.log(varName); // lily 출력
// 2. 변수를 선언하기 전 값을 할당할 수 있음
// 장점 같아 보일 수 있으나, 유지보수할 때 최악임
aa = 123;
console.log(aa);

/* 
    let 키워드 
    1. 변수 선언 -> 값 할당
    2. 변수 선언과 값 할당을 동시에 
    
*/

// 변수 선언
let letName; // undefined
console.log(letName); // undefined
letName = "홍길동";

// 변수 선언과 값 할당을 동시에
let letName2 = "심청이";
console.log(letName); // 홍길동
console.log(letName2); // 심청이

// 재 선언 불가
// let letName2 = "심봉사";  // error: 중복 선언 불가(SyntaxError)
// console.log(letName2);

letName2 = "심봉사"; // 값 재할당 가능
console.log(letName2);
