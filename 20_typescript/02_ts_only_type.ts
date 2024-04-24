// tuple : 갯수와 데이터 타입, 순서가 정해져 있는 배열
let drink: [string, number] = ['아메리카노', 4500];
// drink = ['라떼', 5100, true] // error -> 요소의 길이는 2, 문자열, 숫자 순서로 배열이 선언되어야 하기 때문

drink[0] = '라떼'; // 배열의 요소에 인덕세를 통해 접근 가능
// drink[0] = 5100;// error -> 정해진 타입이 아니면 수정 불가
drink.push('push 될까요?');
// drink.push('실험', 6000);
console.log(drink); // push 가능
// drink[3] = '수정은요?' // 타입을 미리 지정하지 않은 요소의 수정은 불가

// 배열에 spread 연산자 사용
console.log(...drink);

// readonly
// 길이를 특정하고, 타입과 순서를 "완벽히" 고정 시키기 위해 사용
let drink2: readonly [string, number] = ['바나나우유', 2000];
// drink2[0] = '딸기우유'; // error -> 요소 값 수정 불가 : Cannot assign to '0' because it is a read-only
// drink2.push('안됩니다!') // error -> push 불가 : Property 'push' does not exist on type 'readonly [string, number]'

// -------------------------------------------------------

console.log('-------enum--------');

// 데이터를 그룹화해서 사용하고 싶을 때 사용

// 회원 권한 enum으로 정의
enum Auth {
    admin = 0, // 관리자 계정은 0
    user = 1, // 회원가입 한 계정은 1
    guest = 2, // 회원가입 하지 않은 계정은 2
}

// enum은 객체 X
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

const userType: number = 2;

if (userType !== Auth.admin) {
    console.log('관리자 권한이 없습니다.');

    if (userType !== Auth.user) {
        console.log('게스트 계정입니다.');
    }
}

// enum 값 자동 할당
enum productType {
    food,
    cloth,
    shose,
}

console.log(productType.food); //0
console.log(productType.cloth); //1
console.log(productType.shose); //2

// 문자형 enum
enum Cafe {
    americano = '아메리카노',
    latte = '라떼',
}

// enum의 경우 같은 타입으로 작성해주는 것이 좋음(개발자 간의 약속임)

enum cola {
    coca, // 0
    pesi, // 1
    zero, // 2
    sprite = '스프라이트', // 숫자와 문자열 같이 사용할 수 있음(가능은 하지만 같은 타입으로 작성해주는 것이 좋음 )
}

// -------------------------------------------------

// any : 어떤 데이터 타입이든 상관 없이 오류 발생하지 않음
// js에서 변수를 선언하고 사용할 때와 동일하게 마음대로 값을 할당하고 수정할 수 있음
// any를 사용하는 경우 ts를 사용하는 의미가 사라짐 -> any 타입 사용을 지양
// 하지만 빈 배열을 먼저 선언할 때, 받아오는 데이터 타입이 확실하지 않을 떄 ,
// 할당해야하는 타입을 모를 때(외부 라이브러리 사용 등) 사용하게 됨

console.log('---- any ----');

let myVal: any = 1;
console.log(myVal);

myVal = '문자열로 바꿀꺼지롱~';
console.log(myVal);

myVal = [
    1,
    2,
    3,
    '이번엔 배열로~',
    true,
    6,
    ['배열 안에 배열', null, { name: '배열안에 배열 안에 객체' }],
    null,
    { name: '이번에는 배열 안에 배열 안에 객체를 가진 요소 다음 객체' },
];
console.log(myVal);

// 타입스크립트 기초 실습

const olimpic_newgame: readonly [object, boolean] = [
    { name: '쇼트트랙', type: '혼성계주' },
    true,
];

// olimpic_newgame[1]=false;

// ---------------------------------------------

// interface
console.log('-----interface-----');

// 개발자가 직접 정의한 객체의 상세 타입을 interface로 선언
interface Student {
    name: string;
    isPassed: boolean;
}

// student1 주석처리한 이유 : 아래에서 Student interface를 확장했기 떄문에 age key가 없는 student1은 에러 발생
// const student1: Student = {
//     name: 'layla',
//     isPassed: true,
//     // age: 1; // error -> Student interface 선언 시 age 키는 없었으므로 에러 발생 Object literal may only specify known properties, and 'age' does not exist in type 'Student'.
// };

// interface 확장
// extends 키워드 필요 없이 확장할 interface에 추가할 key와 해당 value의 타입 작성
interface Student {
    age: number;
}

// 위에서 선언한 Student interface에서 age 키도 추가해야 에러가 나지 않음
const student1: Student = {
    name: 'layla',
    isPassed: true,
    age: 1, // error -> Student interface 선언 시 age 키는 없었으므로 에러 발생 Object literal may only specify known properties, and 'age' does not exist in type 'Student'.
};

// interface 상속
interface BaseballPlayer extends Student {
    readonly position: string;
    height: number;
    backNumber?: number; // 있어도 없어도 문제 없는 옵셔널한 키 지정
}

const 류현진: BaseballPlayer = {
    name: '류현진',
    isPassed: true,
    age: 37,
    position: '투수',
    height: 183,
    backNumber: 1,
};

console.log(류현진);

const 이정후: BaseballPlayer = {
    name: '이정후',
    isPassed: false,
    age: 27,
    position: '외야수',
    height: 185,
    // backNumber 작성하지 않아도 에러 발생하지 않음
    // ? 사용해서 옵셔널한 key로 지정했기 때문
};

// 이정후.position = '타자';  // position key의 value는 readOnly이기 떄문에 수정 불가
이정후.isPassed = true; // 이외의 key의 value는 수정 가능

// --------------------------------------------------------------

// type
console.log('--------type--------');

type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

interface HighSchoolStudent extends Student {
    // name, isPassed, age key의 타입은 이미 지정 됨
    score: Score;
    // key의 값을 해당 interface를 사용하는 객체를 선언할 떄 지정하는 경우
    // key를 지정하지 않은 상태에서 해당 key의 타입을 지정할 수 있음
    // grade는 학년
    [grade: number]: Score;
    // 1학년일때 성적
    // 2학년일때 성적
}

const Chulsu: HighSchoolStudent = {
    name: '철수',
    age: 17,
    isPassed: false,
    // score: 80, // 지정하지 않은 값은 넣을 수 없음
    score: 'A+',
    1: 'B', // [grade: number]: Score;
};

const obj2: object = {
    name: true,
    age: [1, 2, 3],
};

// name 키의 value는 무조건 string
// age 키의 value는 무조건 number

// 사용자가 직접 타입을 정의할 수 있음
// interface와 type

interface Person {
    name: string;
    age: number;
}

// interface로 선언한 무언가는 앞으로 string, number, boolean과 같은 하나의 타입이 됨
// 개발자가 직접 만든 타입

// name과 age 키의 value가 string, number 타입이 아니어도 에러 X
const person1: object = {
    name: '행인1',
    age: 2,
};

// name과 age 키의 value가 string, number 타입이 아니어도 에러 O
const person2: Person = {
    name: '행인2',
    age: 3,
};

// 옵셔널한 key
// key 뒤에 ? 작성 시 해당 interface  사용할 때 그 key는 없어도 에러 X
interface Person2 {
    name: string;
    age?: number;
}

const person3: Person2 = {
    name: '행인3',
};

// readonly
// 해당 key의 value는 선언 이후 수정 불가 ->
// 원래 객체의 key의 value는 const로 선언해도 수정 할 수 있음
// readonly객체의 key의 value를 수정할 수 없음 -> 상수화
interface Person3 {
    readonly name: string;
    age: number;
}

const person4: Person3 = {
    name: '행인4',
    age: 4,
};

// person4.name = '행인5'; // error

// 객체의 접근법
console.log(person4.age); // 점 접근법
console.log(person4['age']); // 대괄호 접근법

// interface로 작성한 타입에서 key를 객체 선언할 때 입력할 수 있도록 하고,
// 그 key의 타입을 제한하는 경우
interface Person4 {
    name: string;
    age: number;
    [grade: number]: string;
}

const person5: Person4 = {
    name: '행인5',
    age: 4,
    1: 'A+',
};

console.log(person5[1]); // 점 접근법이 안될떈 대괄호접근법 사용

// ----------------------------------------------------

// 함수 interface
console.log('--- 함수 interface ---');

interface Calc {
    // 소괄호는 해당 함수의 인자와 인자의 타입 작성
    // 소괄호의 다음의 콜론에는 반환값의 타입을 작성
    (a: number, b: number): number;
}

const sum: Calc = (a, b) => {
    return a + b;
};

// interface 사용하지 않고 함수 선언하는 경우
// 인자에 바로 해당 인자의 타입을 작성하고, 인자 뒤에 리턴 값의 타입을 작성
const sum2 = (a: number, b: number): number => {
    return a + b;
};

console.log(sum(1, 2));
// console.log(sum(1, '2'));  // error -> 인자의 타입이 달라서
// console.log(sum('1', '2'));  // error -> //js 였다면 콘솔에 '12' 찍힘

// --------------------------------------------------------------

// type
console.log('----type----');

// type 사용해 객체의 타입 지정
type Toy = {
    name: string;
    price: number;
};

const barbie: Toy = {
    name: 'barbie',
    price: 34000,
};

// 값을 완전 특정 짓는 type 생성
type Gender = 'female' | 'male';
const layla: Gender = 'female';
// const lily: Gender = 'Female'; // error
// type Gender = 'none' // interface 처럼 확장 불가

// 값의 타입을 제한하는 type 생성
type Name = string;
const laylaName: Name = 'layla';

type NumAndStr = number | string;
const numAndStrVal1: NumAndStr = 1;
const numAndStrVal2: NumAndStr = '2';

// interface Vs type

/*
    interface
        - 주로 객체의 타입을 지정할 때 사용
        - 확장 가능 (그냥 interface 선언하듯이 추가 key 작성)
        - 상속 가능 (extends 키워드 사용해서 해당 interface 가져오고, 새로운 interface를 만듦)
*/

/*
    type
        - 훨씬 자유롭게 사용
        - 해당 타입의 value를 제한할 수 있음 
        - 타입의 확장 불가 
*/
