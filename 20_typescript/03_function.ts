// 리턴 값이 없는 함수

function consoleStr(str: string): void {
    console.log(str);
}

// 리턴 값이 있는 경우 void 타입 선언 불가!
// function returnStr(str: string): void {
//    return str;
// }

function returnStr(str: string): string {
    return str;
}

// ------------------------------------

// 옵셔널한 인자
console.log('------옵셔널한 인자 -------');

// js
// function jsPrint(a, b) {
//     console.log(a);
//     console.log(b);
// }

// jsPrint(1, 2);
// jsPrint('1', '2');
// jsPrint(['1', '2'], [1, 2]);
// jsPrint('두 번째 인자는 안보냄');  // js에서는 문제 없이 동작 (ts에서는 에러 발생)

function tsPrint(a: number, b?: number): void {
    console.log(a);
    console.log(b);
}

tsPrint(1, 2);
tsPrint(1); // ?를 사용해 옵셔널한 인자로 작성한 b는 전달하지 않아도 에러 발생 X

// 함수 다른 방식으로 선언하기
// 방법 1.
function myFunc(a: number): void {
    console.log('function 키워드 사용한 함수 ');
}

// 방법 2.
const myFunc2 = (a: number): void => {
    console.log('함수 표현식으로 작성한 함수 ');
};

// interface로 함수
interface Greet {
    name: string;
    hi(): void; // hi 함수는 호출 시 hi라는 문자열을 콘솔에 찍고, 리턴 값 X
    bye(str: string): string; // bye 함수는 문자열을 매개 변수로 받고, 해당 문자열을 리턴해 주기 때문에 함수의 타입을 string으로 작성
}

const user: Greet = {
    name: 'layla',
    hi() {
        console.log('hi!!!');
    },
    bye(str: string) {
        return `bye ${str}`;
    },
};

user.hi();
user.bye('잘가용~ ');

// ----------------------------------------------

// never
console.log('-----never-----');
// 함수의 끝에 절대 도달하지 않는 경우(무한 루프)에만!! never 할당 가능
// 무한 루프

function neverEnd(): never {
    while (true) {
        console.log('안끝나요ㅠ');
    }
}

// 아래의 코드 never 할당 불가 -> a의 인자 값에 따라 break 할 수 있기 때문
// function neverEnd(a: number): never {
//     while (true) {
//         console.log('안끝나요ㅠ');
//         if (a > 5) break; // 인자로 받은 a가 5를 초과한다면 함수 멈춤 -> 무한루프 아님 (따라서 never 사용 불가 )
//     }
// }
// neverEnd(1);
// neverEnd(10);

// ---------------------------
// 인자의 타입은 함수 선언 시 인자에 바로 할당
// 함수의 타입 (리턴 값이 있다면 해당 리턴 값의 타입)은 인자를 받는 소괄호 뒤에 작성
// 만약 함수에 리턴값이 없다면 void 타입
// 무한루프 함수라면 never 타입 할당
