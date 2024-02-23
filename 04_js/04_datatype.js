// 기본형 (Primitive type)
// 1. String
//  - 텍스트 정보
//  - 따옴표로 감싸야 함
//  - 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임

const myName = "신데렐라";
const email = "glassshose@google.com";
const gender = "female";

console.log(myName);
console.log(email);
console.log(gender);

// 문자와 변수를 동시에 사용하기
const aa = "a";
console.log(aa);
console.log("원하는 텍스트 콘솔창에 출력");

// 위에 3줄을 한줄에 문자와 변수 다 사용해서 출력하고 싶을 때 ','사용해서 쭉 작성
console.log(aa, "원하는 텍스트도 같이 출력");

// + 연산자 사용하면 변수 값을 문자로 변환 후 더하여 사용 (띄어쓰기 반영 x)
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

// 템플릿 리터럴
// 문자열 내 변수를 간결하게 표현
// 백틱(``)기호와 달러, 중괄호(${}) 사용
console.log(`안녕 나는 ${name}야`);
const printHello = `안녕 나는 ${name}야`; // 변수 선언 할때도 템플리 리터럴 사용가능 (문자열로 저장됨)
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

// 2. Number
// 숫자 (정수, 소수)
// 연산 가능
let number = 123;
let opacity = 0.7;
let add = 1 + 2; // add는 3임

// 3. boolean
// true, false 중에서 하나의 값을 가지는 논리 요소
let checked = true;
let isShow = false;

// 4. undefined
//  값도 없고, 타입도 지정 되어 있지 않은 상태
let undef; // undefined
console.log(undef);

//object (객체)
let obj = {
    abc: 123,
};

console.log(obj.abc); // 123
console.log(obj.efg); // undefined -> 없는 것 출력하면 undefined

// 5. null
//  빈 값, null 타입으로 타입 존재하지만 값이 없음
//  값이 없다는 것을 의도적으로 명시할 때 사용  -> 개발자가 직접 null 값을 할당
let empty = null;
console.log(empty);

// 6. array - 배열
//  순서가 있는 데이터의 묶음
// 원칙은 []를 사용함
let fruits = ["apple", "orange", "banana", "grape"];
let fruits2 = new Array("apple", "orange", "banana", "grape");

console.log(fruits);
console.log(fruits[2]); // 2번 인덱스 요소를 뽑아 콘솔에 찍기
console.log(fruits[0]);

let arr = [1, `str`, false, null, undefined];
console.log(arr);

// Quiz
// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters = [
    "사", // 0
    "스", // 1
    "자", // 2
    "크", // 3
    "진", // 4
    "안", // 5
    "리", // 6
    "이", // 7
    "가", // 8
    "수", // 9
    "림", // 10
    "나", // 11
    "아", // 12
    "으", // 13
    "차", // 14
    "운", // 15
];

console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);

// 배열 응용
// 다차원 배열
// 배열 안에 배열이 있는 형태
const korean = [
    ["가", "갸", "거", "겨"],
    ["나", "냐", "너", "녀"],
    ["다", "댜", "더", "뎌"],
];

console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);
console.log(korean[1][1]);

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters2 = [
    ["사", "스", "자", "크"],
    ["진", "안", "리", "이"],
    ["가", "수", "림", "나"],
    ["아", "으", "차", "운"],
];

console.log(
    letters2[3][0] +
        letters2[1][3] +
        letters2[0][1] +
        letters2[0][3] +
        letters2[2][2]
);

// 7. object - 객체
// 배열은 순서가 있는 반면에 객체는 키-값 형태로 작성
// {key1: value1, key2: value2, ... }
// key 하나에 값을 여러개 넣고 싶을 땐 배열로!
let cat = {
    name: "장화",
    age: 13,
    isCute: true,
    mew: function () {
        return "냐옹";
    },
};

// 방법1 : 점 표기법(주로 사용)
console.log(cat.name); // 장화
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew);

// 방법2 : 대괄호 사용(잘 사용하지 않음)
console.log(cat["name"]); // 장화
console.log(cat["mew"]);

// 변경, 추가 가능
cat.like = "layla";
console.log(cat);
cat.name = "홍련";
console.log(cat.name);

/*
    JS의 자료형 -> 데이터 타입
        -기본형 (Primitive)
            - string
            - number
            - boolean
            - null
            - undefined
        -객체 (Object)
            - array (배열)
            - object (객체) -> 키-값을 쌍으로 가지고 중괄호{} 안에 감싸여 작성된 것
*/

//JS의 이상한 자동 형변환
// 더하기의 경우는 문자로 나열 , 그 외는 숫자로 형변환되어 계산됨(디른 언어에서는 타입이 다르면 오류가 남)
let a = "3";
let b = 2;
let c = "10";

// 문자 + 문자 -> 문자의 나열
console.log(a + c); // '310'

// + 외의 나머지는 연산자는 숫자로 변환되어 계산됨
console.log(c - a); // 7 -> 숫자가 됨
console.log(a * c); // 30 -> 숫자가 됨
console.log(c / a); // 계산 됨 3.3333333333333335
console.log(a % c); // 계산 됨 3
console.log(c ** a);

// 숫자 + 문자
console.log(b + a); // '23'-> 숫자가 문자열로 변환되어 문자의 나열

// + 외의 나머지는 연산자는 숫자로 변환되어 계산됨
console.log(b - a); // -1 -> 문자가 숫자로 변환되어 계산됨(나머지 *, -, / 도 동일)

// 자기소개 실습
const intro = {
    name: "이소정",
    interest: ["방탈출", "보드게임", "tv시청", "영화"],
    job: "백수",
};

console.log(intro);

// 자료형 확인
// typeof
// 피연산자의 데이터 타입을 문자열로 변환
console.log("----------------------------------------");
console.log(typeof "문자열"); // string
console.log(typeof 234); // number
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof NaN); // NaN: Not a Number -> number
let und;
console.log(typeof und); // undefined

// prompt : alert창으로 입력 값을 받을 수 있음
// prompt("값을 입력해주세요.");

// 1. ? -> 문자
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1)); // 'true'
console.log(typeof String(str1)); // string
console.log(String(str2)); // '123'
console.log(String(str3)); // 'null'
console.log(str1.toString()); // 'true'
console.log(str2.toString()); // '123'

// 2. ? -> 숫자
let n1 = true;
let n2 = false;
let n3 = "12345";
let n4 = "123.9";

console.log(Number(n1)); // 1 -> true
console.log(Number(n2)); // 0 -> false

console.log(Number(n3)); // 12345
console.log(Number(n4)); // 123.9
console.log(parseInt(n3)); // 12345
console.log(parseInt(n4)); // 123 -> parseInt는 정수로 변환한다는 의미여서 소숫점 버림
console.log(parseFloat(n4)); // 123.9 -> parseFloat는 소수로 변환한다는 의미여서 소수점 남음(잘 다루지 않음)

// 평균 점수 구하기 실습
let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(parseFloat(avgScore));

// 강사님 답
let mathScore2 = "77";
let engScore2 = "88";
let avgScore2 = (Number(mathScore2) + Number(engScore2)) / 2;
console.log(avgScore2);

// prompt 사용(사용자에게 값을 입력받아 활용하는 예시) -> 값은 무조건 문자타입으로 받을 수 있음
// prompt로 입력받은 값은 문자열로 저장되기 떄문에 숫자형으로 형변환 함
let mathScore3 = prompt("수학 점수를 입력하세요.");
let engScore3 = prompt("영어 점수를 입력하세요.");

console.log("mathScore", mathScore, typeof mathScore);

// (문자타입인 prompt값을) 강제 형변환해서 숫자로 바로 사용하게 받아오는 방법
let mathScore4 = Number(prompt("수학 점수를 입력하세요."));
let engScore4 = Number(prompt("영어 점수를 입력하세요."));
console.log("mathScore4", mathScore4, typeof mathScore4);

let avgScore4 = (mathScore4 + engScore4) / 2;
console.log(avgScore4);

alert(`당신의 평균 점수는 ${avgScore4}점 입니다.`); // 템플릿 리터럴 사용
