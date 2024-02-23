console.log("connected!");

// 대입 연산자
// =
// 변수에 값을 할당할 때 사용하는 연산자
let a = 1;
const b = "1";

// 비교 연산자
// ==, !=
// 피연산자의 값이 같은지 비교
// 타입이 달라도 괜찮음 -> 값만 비교하기 때문
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == "1"); // true
console.log(1 != 1); // false -> 1과 1이 같지 않다! => 거짓 => false
console.log(1 != 2); // true
console.log(1 != "1"); // false

// ===, !==
// 피연산자의 값과 타입을 모두 비교
// 엄격한 동등 연산자

console.log("--------------------------------");
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false -> 숫자 1과 문자 1은 다른 타입
console.log(1 !== 1); // 숫자 1과 숫자 1은 같지 않다! -> false
console.log(1 !== 2); // 숫자 1과 숫자 2는 같지 않다! -> true
console.log(1 !== "1"); // 숫자 1과 문자 1은 같지 않다! -> true

// 크기 비교
// >, >=, <, <=
console.log("--------------------------------");
console.log(2 > 1); // 2는 1보다 크다 -> true
console.log(1 >= 1); // 1은 1보다 크거나 같다 -> true
console.log(2 < 1); // 2은 1보다 작다 -> false
console.log(1 <= 1); // 1은 1보다 작거나 같다 -> true

// 산술 연산자
// +, -, *, /, %(나머지), **(제곱)
console.log("--------------------------------");
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
console.log(1 / 2); // 0.5
// 나머지 연산자
console.log(1 % 2); // 몫 : 0, 나머지: 1 -> 1
console.log(8 % 3); // 몫 : 2, 나머지: 2 -> 2
console.log(8 % 5); // 몫 : 1, 나머지: 3 -> 3
console.log(1 ** 2); // 1

// 논리 연산자
// !, &&, || -> enter키 위 + shift
console.log(!true); //false
console.log(!false); // true
console.log(!!true); // true -> ! 때문에 false -> ! 때문에 true -> true
console.log(!!false); // false
console.log(true && true); // true

console.log(1 < 2 && 1 < 5); // true
console.log(1 > 2 && 1 < 5); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(1 > 2 || 1 < 5); // true
console.log(1 > 2 || 1 > 5); // false
// 여러개 더 많이 작성할 수 있지만, 판별을 위한 런타임이 길어지기 때문에 추천하지 않음
console.log(1 > 2 || 1 > 5 || true || false); // false

// 연산자 응용
console.log(2 > 1);
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 < 1) || 5 > 3);

// Quiz
// 코드 결과 작성
console.log(3 <= 1); // false
console.log(7 == "7"); // true
console.log(-10 >= -11); // true

const aa = "a";
console.log(aa);

console.log("원하는 텍스트 콘솔창에 출력");

// 한줄에 문자와 변수 다 사용해서 출력하고 싶을 때 ','사용해서 쭉 작성

console.log(aa, "원하는 텍스트도 같이 출력", a);

// 변수 값을 문자로 변환 후 더하여 사용 (띄어쓰기 반영 x)
console.log(aa + "원하는 텍스트 같이 출력");

// 띄어쓰기 O , 자동으로 띄어쓰기 됨
console.log(aa, "쉼표");

// 띄어쓰기 X, 전부 연결해서 출력 됨
console.log(aa + "쉼표");

// "안녕 나는 레일라야"
const name = "레일라";
console.log("안녕 나는", name + "야");

// ``(백틱 사용) 브라우저에 넣는 값을 직접 넣을 때 사용?
console.log(`안녕 나는 ${name}야`);

/*
`${변수명}`은 JavaScript의 Template literals 또는 Template strings의 문법입니다. 
이는 문자열 안에 변수 값을 삽입할 때 사용됩니다. 
${} 안에 변수명을 넣으면 해당 변수의 값이 문자열에 삽입됩니다.
이를 템플릿 리터럴 또는 템플릿 문자열이라고 부릅니다.

예를 들어:
const name = 'John';
console.log(`Hello, ${name}!`);

위 코드는 "Hello, John!"을 출력합니다. ${name} 부분이 변수 name의 값으로 대체되어 문자열이 생성됩니다.

*/
//만약 변수 name의 값을 모르겠을 때(대체로 서버에서 가져온 값이 어떻게 생겼을지 확인하고 싶을 때 사용)
console.log(`name: `, name);
