console.log('connected!');

/*
    조건문
        - 어떤 조건에 따라 논리 구조를 나눔
        - 각 조건을 '분기'라고 함
        - 조건에 따라 서로 다른 문장을 실행
*/

/*
    if문의 기본 구조

    if (조건) {
        조건이 참인 경우 실행될 코드
    }

    else 조건이 없는 if문에서는 조건 자체가 false일 경우 {}안의 내용은 실행되지 않고, 다음 코드 블럭으로 넘어감
*/

// 조건이 하나만 있는 경우
if (5 > 3) {
    console.log('5는 3보다 큽니다.');
}

// 만약 조건이 false라면 해당 코드 블럭이 실행되지 않고 넘어감
if (5 > 7) {
    console.log('조건이 false이므로 이 코드블럭은 실행되지 않고 넘어감.');
}

// 입력받은 수가 10보다 클 때 if 다음의 코드 블럭을 실행
// 입력받은 수가 10보다 작거나 같을 때 else문의 코드 블럭을 실행
// let number = Number(prompt('숫자를 입력해주세요.')); // 입력받은 값을 number 타입으로 강제 형변환
let number = 8;

if (number > 10) {
    console.log('입력받은 수가 10보다 큽니다.');
} else {
    console.log('입력받은 수가 10보다 작습니다.');
}

// else if문
// if else문에 다른 조건을 추가하는 형식
// else문은 하나만 사용 가능, 하지만 else if문은 여러개 사용 가능
// 여러개의 분기로 나누고 싶으면 else if를 여러개 사용해서 조건을 많이 작성할 수 있음

if (number > 10) {
    console.log('입력받은 수가 10보다 큽니다.');
} else if (number === 10) {
    console.log('입력받은 수는 10입니다.');
} else {
    console.log('입력받은 수가 10보다 작습니다.');
}

console.log('-------------------------------');

console.clear();

// 성적 계산하는 프로그램(점수를 점점 더 좁혀서 계산)
const score = 90; // Number(prompt('점수를 입력해주세요.'));

// 조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
// 위의 조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 false였음을 잊지 않기
if (score > 100) {
    // 100점 보다 큰 점수는 없음
    console.log('점수가 잘못 입력되었습니다.');
} else if (score >= 90) {
    // score가 100 ~ 90점 사이의 점수일 때 실행
    console.log('A');
    // 위의 조건이 모두 false가 나왔기 때문에 score >= 80 && score < 90이랑 같은 상태임(불필요한 검증 및 코드임 -> 다시한번 검증하게 하여 속도를 늦춤)
    // 이미 (score가 90이하라는게 검증이 되어있는 상태임(그 이상의 점수는 이미 실행되어 빠져나감) 따라서 그리고 조건은 필요 없음)
} else if (score >= 80) {
    // score가 89 ~ 80 점 사이의 점수 일 때 실행
    console.log('B');
} else if (score >= 70) {
    // score가 79 ~ 70점 사이의 점수 일 때 실행
    console.log('C');
} else if (score >= 60) {
    // score가 69 ~ 60점 사이의 점수 일 떄 실행
    console.log('D');
} else {
    // 59점 이하의 점수 일 때 실행
    console.log('F');
}

// if 문을 이용해 console 창에 연령대별 단어 출력하기

const age = 15; // Number(prompt('나이를 입력해주세요.'));

if (age >= 20) {
    console.log('성인');
} else if (age >= 17) {
    console.log('고등학생');
} else if (age >= 14) {
    console.log('중학생');
} else if (age >= 8) {
    console.log('초등학생');
} else {
    console.log('유아');
}

// 실습 강사님 답
console.log('---------------------------');

let age2 = 20;

if (age >= 20) {
    console.log('성인');
} else if (age >= 17) {
    console.log('고등학생');
} else if (age >= 14) {
    console.log('중학생');
} else if (age >= 8) {
    console.log('초등학생');
} else if (age >= 0) {
    console.log('유아');
} else {
    // 음수에 대한 예외 처리
    console.log('음수값이 들어왔습니다.');
}

// 다른 방법 (단, 첫번째 코드에서 걸러지는게 (true값이 가장 많은 조건부터 작성해주는것이 베스트) 좋은 코드임)
if (age >= 0 && age < 8) {
    // age가 0보다 크거나 같으면서 8보다 작은 경우
    console.log('유아');
} else if (age >= 8 && age < 14) {
    console.log('초등학생');
} else if (age >= 14 && age < 17) {
    console.log('중학생');
} else if (age >= 17 && age < 20) {
    console.log('고등학생');
} else if (age >= 20 && age < 150) {
    console.log('성인');
} else if (age >= 150) {
    console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
} else {
    console.log('음수 값이 들어왔습니다.');
}
// 추가

// if (age >= 150 || age < 0) {
//    console.log('나이로 들어올 수 없는 값이 입력되었습니다.')
// } ....  나머지 코드

// 다른 방법
if (age < 0) {
    console.log('음수 값이 들어왔습니다.');
} else if (age < 8) {
    // age가 0보다 크거나 같으면서 8보다 작은 경우
    console.log('유아');
} else if (age < 14) {
    console.log('초등학생');
} else if (age < 17) {
    console.log('중학생');
} else if (age < 20) {
    console.log('고등학생');
} else if (age < 150) {
    console.log('성인');
} else if (age >= 150) {
    console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
}

console.log('------------------------------');
// 조건문 중첩하기
// 조건문 안에 조건문 작성 가능
// 서버에서 가져온 아아디와 비밀번호
const userId = 'user01';
const userPw = '1234qwer';

// 조건문 함수로 구현
// JS DOC
// 함수 기능 설명(js doc)에 함수 내용 설명 작성(기능설명, 인자 몇개 받는지, 인자 타입, 반환 타입  등을 작성)해두면 협업에 도움이 되고, 재사용성이 높아짐!
/**
 * 입력받은 아이디와 비밀번호가 맞는지 확인 후 적절한 알림창 띄움
 */

function loginUser() {
    const inputId = prompt('아이디를 입력해주세요.');
    const inputPw = prompt('비밀번호를 입력해주세요.');

    if (userId === inputId) {
        if (userPw === inputPw) {
            console.log('로그인 성공');
            alert(`안녕하세요, ${inputId} 님`);
        } else {
            console.log('로그인 실패');
            alert('비밀번호를 다시 입력해주세요.');
        }
    } else if (inputId === '') {
        alert('아이디가 입력되지 않았습니다.');
    } else {
        alert('아이디를 다시 입력해주세요.');
    }
}
// 함수를 사용하는 이유
// 1. 적절한 때에 사용하기 위해
// 2. 재사용이 편하기 때문에
loginUser();

// switch문
// switch의 괄호 안과 case의 조건으로 비교식이 들어갈 수 없음(연산은 작성가능)
/*
    1. 변수 x의 값과 첫 번째 case문의 값 3을 비교
    2. 두 값이 동일하다면 :(콜론) 뒤의 코드가 실행
    3. break문을 통해 해당 스코프에서 빠져나옴
    4. 만약 첫 번째 case문의 값과 x가 다르다면 다음 case문의 값과 비교
    5. 모든 case문의 값과 x의 값이 다르다면 default문 다음의 코드가 실행 
*/

// break는 필수 작성
// default는 생략 가능
let x = 4;

// switch문의 괄호 안에는 조건이 아닌 값이 들어감
// case에도 조건이 아닌 값을 작성 (숫자 외에도 문자도 들어갈 수 있음)
switch (x) {
    case 3:
        console.log('x는 3입니다.');
        break;
    case 4:
        console.log('x는 4입니다.');
        //break;를 작성하지 않으면 조건이 만족된 이후에도 다음 코드도 실행됨
        // break;를 작성하지 않으면 case 4를 실행하고 싶을 때 case 5까지 모두 실행됨
        // 해당 스코프를 빠져나가지 못하는 것
        // 원하는 코드가 실행된 이후 꼭 break 사용해 스코프를 빠져나올 수 있도록 작성
        break;
        console.log('break이후에 작성한 코드는 실행되지 않음');
    case 5:
        console.log('x는 5입니다.');
        break;
    default:
        console.log('x는 3,4,5가 아닌 다른 값 입니다.');
}

// if문으로 작성한 성적 계산 프로그램 switch문 사용하도록 수정
// switch(number) {
//     case 100:
//         console.log('A')
//         break;
//     case 90:
//         console.log('B')
//         break;
//     case 80:
//         ...
// }
// 위처럼 작성하는 경우 100, 90, 000 이런 값이 아니면 원하는 동작을 하지 않음
// 이럴 땐 점수를 10으로 나눈 몫을 찾아와 number로 전달, 그리고 case 값도 변경

// 어떨때 사용??
// 타입을 확인할 때? 사용
// ex)
let userType = 'user'; //User 처럼 대문자도 들어오면 구분하여 안됨
switch (userType) {
    case 'user':
        console.log('사용자 입니다.');
        break;
    case 'admin':
        console.log('관리자입니다.');
    default:
        console.log('사용자도 관리자도 아닙니다.--에러발생-- 누구야!');
}

//chat Gpt의 답변

/*
자바스크립트에서 switch문은 다수의 조건에 따라 다른 동작을 수행해야 할 때 주로 사용됩니다. 일반적으로 if-else 문을 사용하여 여러 가지 조건을 처리할 수 있지만, switch문은 조건이 많고 각 조건에 대해 간단한 값 또는 표현식을 비교해야 할 때 더 효율적입니다.

switch문은 다음과 같은 상황에서 주로 사용됩니다:

1. 여러 값 중 하나에 따라 다른 동작을 수행해야 할 때.
2. 특정 값이 여러 경우 중 하나와 일치하는 경우에만 특정 코드 블록을 실행해야 할 때.
3. 코드의 가독성을 높이고 싶을 때, 특히 비교적 간단한 값들을 비교할 때 if-else보다 switch문이 더 명확할 수 있습니다.

예를 들어, 사용자의 입력에 따라 다른 동작을 처리해야 할 때 switch문을 사용할 수 있습니다. 사용자가 입력한 값이 미리 정의된 몇 가지 값 중 하나와 일치하는지 확인하고 해당하는 동작을 수행할 수 있습니다.
*/

number = 55;
switch (parseInt(number / 10)) {
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        // default다음엔 break 작성해도되고 안해도됨
        break;
}

// 삼항 연산자(if - else의 단축작성법)
// 조건식 ? 조건이 참 일때 실행될 코드 : 조건이 거짓일 때 실행 될 코드

// 홀수, 짝수 판별하기
let num = 5;
if (num % 2 === 1) {
    console.log('홀수');
} else {
    console.log('짝수');
}

// 삼항연산자로 변환
// 출력 안됨(콘솔을 사용안해서)
num % 2 === 1 ? '홀수' : '짝수';

// 삼항연산자를 변수에 담아서 출력
let result = num % 2 === 1 ? '홀수' : '짝수';
console.log(result);

let fruit = 'banana';
// 삼항연산자를 콘솔로 감싸서 출력
console.log(fruit === 'banana' ? '바나나' : '바나나가 아닙니다.');

let isLoggedIn = true;
isLoggedIn === true
    ? console.log('로그인 유저입니다.')
    : console.log('로그인하지 않은 유저입니다.');

// 삼항 연산자는 중첩해서 사용가능하지만, 사용을 지양해야함 (직관적이고 쉽게 이해하기 힘듦) / 가독성 떨어지기 때문에
isLoggedIn === true
    ? number > 10
        ? '로그인한 유저인데, number 값이 10보다 큼'
        : '로그인한 유저인데, number 값이 10보다 작음'
    : '로그인하지 않은 유저';

// 실습 오전 / 오후 출력하기

let now = new Date().getHours();
console.log(now);

now < 12 ? console.log('오전') : console.log('오후');

// 강사님 답
console.log(now < 12 ? '오전' : '오후');
