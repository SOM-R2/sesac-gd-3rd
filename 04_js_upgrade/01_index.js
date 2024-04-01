// 1. 전개 구문 (spread)

// 1-1. 배열
const lunchMenu = ['국밥', '치킨마요', '파스타', '돈까스'];
const dinnerMenu = ['라면', '볶음밥', '바질페스토파스타', '냉동볶음밥'];

console.log(lunchMenu);
console.log(dinnerMenu);
console.log(lunchMenu, dinnerMenu);

// 반복문으로 요소 하나씩 접근할 수 있음

// 내 답
// for (let menuName of lunchMenu) {
//     console.log(menuName);
// }

// 강사님 답
for (let i = 0; i < lunchMenu.length; i++) {
    console.log(lunchMenu[i]);
}

lunchMenu.forEach((menu) => {
    console.log(menu);
});

lunchMenu.map((menu) => {
    console.log(menu);
});

for (let menu of lunchMenu) {
    console.log(menu);
}

// 전체 요소에 접근하고 싶은 경우
// 연산(계산) 등이 필요한 작업이 아닌 경우
// 전개 연산자 사용 -> 일일이 요소에 접근하지 않고 사용할 수 있도록 함
console.log(...lunchMenu);
console.log(...[1, 2, 3, 4, 5]); // 꼭 변수에 저장하지 않고 배열에 바로 사용 가능 (변수에 저장하지 않고도 사용가능)

// 배열 합치기
//['국밥', '치킨마요', '파스타', '돈까스','라면', '볶음밥', '바질페스토파스타', '냉동볶음밥'];

// 내 답 틀림(새로운 배열 변수 선언해야함.. )
// for (let addMenu of dinnerMenu) {
//     lunchMenu.push(addMenu);
// }
// console.log(lunchMenu);

const newArr = [];
function usePush() {
    lunchMenu.map((menu) => newArr.push(menu));
    dinnerMenu.map((menu) => newArr.push(menu));
}
usePush();
console.log(newArr);

//concat() : 배열을 연결하는 메서드
const newArr2 = lunchMenu.concat(dinnerMenu); // 뒤에 붙일 배열을 인자로 받음
console.log(newArr2);

const newArr3 = [...lunchMenu, ...dinnerMenu]; // 보다 직관적
console.log(newArr3);

const prodData1 = [
    {
        id: 1,
        prod_name: '피크닉',
        price: 700,
    },
    {
        id: 2,
        prod_name: '딸기우유',
        price: 2000,
    },
    {
        id: 3,
        prod_name: '밀키스',
        price: 1100,
    },
];

const prodData2 = [
    {
        id: 4,
        prod_name: '코멧 쿠키',
        price: 500,
    },
    {
        id: 5,
        prod_name: '쌀과자 ',
        price: 300,
    },
    {
        id: 6,
        prod_name: '마가레트',
        price: 150,
    },
];

console.log(prodData1, prodData2);

const totalData = [...prodData1, ...prodData2];
console.log(totalData);

// ------------------------------------------------------------------

// 1-2. 문자열
// 전개구문은 배열 뿐만 아니라 객체나 문자열에도 사용 가능
// for of 문에서도 문자열 사용 가능

const str = 'fighting!!';
console.log(...str);

const strToArr = [...str]; // 이 방식과 (10) ['f', 'i', 'g', 'h', 't', 'i', 'n', 'g', '!', '!']
console.log(strToArr);
const strToArr2 = str.split(''); // 이 방식의 결과 값이 같음! (10) ['f', 'i', 'g', 'h', 't', 'i', 'n', 'g', '!', '!']
console.log(strToArr2);

// -------------------------------------------------------

// 1-3. 객체
let me1 = {
    name: 'layla',
    height: 173,
    married: false,
    pet: null,
};

let me2 = {
    name: '레일라',
    like: ['backing', 'traveling'],
    pet: {
        name: 'janghwa',
        like: ['layla', 'sleeping'],
    },
    greeting: function () {
        console.log(
            `안녕하세요! 제 이름은 ${this.name}이고, 키는 ${this.height}cm 입니다!`
        );
    },
};

// 객체를 합칠 때 동일한 key가 있다면 뒤에 있는 변수 객체의 key의 value가 저장됨
// 동일한 키가 있다면 뒤의 객체를 기준으로 합쳐짐
let me = { ...me1, ...me2 };

console.log(me);

me.greeting(); // 객체 내부의 value로 저장된 함수 사용시 점 표기법만 가능

// 합치면서 key 추가하기
me = {
    ...me1,
    ...me2,
    status: 'hungry',
};

console.log(me);

me = {
    ...me,
    mbti: 'istp',
};

console.log(me);

// -------------------------------------------------------
// 실습
const word1 = 'abc';
const word2 = 'xyz';

const totalWord = [...word1, ...word2];
console.log(totalWord);

// 다른 방법 1
// 두 개의 문자열을 하나의 문자열로 합친 후 배열로 저장
const newWordArr = (word1 + word2).split('');
console.log(newWordArr);

// 다른 방법 2
// 문자열을 concat 메서드 사용해 연결하고 배열로 저장
const newWordArr3 = word1.concat(word2).split('');
console.log(newWordArr3);

// 문자열을 배열로 나누고 concat 메서드 사용해 연결
const newWordArr4 = word1.split('').concat(word2.split(''));
console.log(newWordArr4);

// ---------------------------------------------------

// 구조 분해 할당

// 2-1. 배열의 구조 분해 할당

const icecream = ['민트초코', '엔쵸', '스크류바'];
/*
지금까지
const mintchoco = icecream[0];
const ancho = icecream[1];
const screwbar = icecream[2];
*/

const [mintchoco, screwbar, ancho] = icecream;
console.log(mintchoco); // '민트초코'
console.log(ancho); // '스크류바' -> 배열에서의 구조분해 할당은 변수의 순서가 중요함

const colors = ['red', 'orange', 'yellow', 'green'];

// 중간에 변수에 담아 사용하지 않는 요소가 있는 경우 해당 순서를 생략하고 작성
const [red, oran, , green] = colors;
// console.log(yellow);

// 가장 마지막 요소를 변수에 저장하지 않을 경우 쉼표 없이 생략하면 됨
const [c1, , c3] = colors;
console.log(c1);
console.log(c3);

// 구조분해하는 배열보다 변수가 더 많은 경우 배열의 길이를 넘어가는 변수는 자동으로 undefined 할당
const [cc1, cc2, cc3, cc4, cc5] = colors;
console.log(cc5); // undefined

// default 값 미리 선언
// default 값의 경우 해당 변수에 저장할 값이 없을 때만 사용됨
const [
    ccc1,
    ccc2,
    ccc3 = 'ccc3 default', // default 값이 사용되지 않고, colors 배열의 2번 인덱스인 'yellow'가 저장됨
    ccc4,
    ccc5 = 'ccc5 is maybe undefined', // default 값이 사용됨
] = colors;

console.log(ccc3);
console.log(ccc5);

// ----------------------------------------------------------

// 2-1-1. 배열을 사용해 변수 교환
let value1 = 'second';
let value2 = 'first';

let temp; // 임시로 사용되는 값을 위한 변수 temp (temporary의 약자)

// 변수의 값 교환하기
temp = value1; // -> temp 변수의 값은 'first'
value1 = value2; // -> value1 변수의 값은 'second'
value2 = temp; // -> value2 변수의 값은 'first'

console.log(value1, value2); // first, second

// 구조 분해 할당을 이용해 변수 값 교환

value1 = 'second';
value2 = 'first';

[value2, value1] = [value1, value2];
// [value2, value1] = ['first', 'second'];
console.log(value1, value2); // first, second

// -------------------------------------------------------

// 2-2. 객체의 구조 분해 할당
const myPhone = {
    name: '아이폰',
    color: 'white',
    version: 13,
};

// 각 요소에 접근
console.log(myPhone.name); // 점 접근법
console.log(myPhone['name']); // 대괄호 접근법
// console.log(name); // error

/*
// 기존 방법
const name = myPhone.name;
const color = myPhone.color;
const version = myPhone.version;

console.log(name, color, version);
*/

// 구조 분해 할당
// 순서에 상관없이 구조 분해 할당하는 객체의 key와 동일한 변수에 값이 저장
const { color, name, version } = myPhone;

console.log(name, color, version);

// 다른 이름으로 변수를 할당할 수 없음
const { c, n, v } = myPhone;
console.log(c, n, v); // undefined, undefined, undefined -> key와 변수가 동일해야 해당하는 변수에 값이 저장되기 때문

// 다른 이름으로 변수를 할당하려는 경우
const { name: nn, color: cc, version: vv } = myPhone;
console.log(nn, cc, vv);

// key가 존재하지 않는 경우를 대비해 default 값 지정하기
const { name: nnn, color: ccc, giga: ggg = 256, version: vvv } = myPhone;
console.log(nnn, ccc, ggg, vvv);

// 전개 연산자 추가 사용 예시
const { key1, key5, ...obj } = {
    key1: 'value1',
    key2: 2,
    key3: 'value3',
    key4: 'value4',
    key5: 5,
};

console.log(key1); // 'value1'
console.log(key5); // 5
console.log(obj); // key1과 key5를 제외한 key-value 쌍이 모두 obj 변수에 저장됨

// ---------------------------------------------------------
// 함수에서 전개연사자와 구조 분해 할당, default 값 지정

function test(...val) {
    // ...val의 의미는 인자의 갯수를 제한하지 않고 모두 받겠다는 의미
    // 모든 인자는 배열로 val이라는 별명을 사용해 접근할 수 있음
    const [v1, v2, v3, v4 = '없음', ...rest] = val;
    // v4 변수에 할당할 값이 없을 경우 즉, 인자가 3개 이하로 들어온 경우
    // '없음'이라는 default 값이 v4 변수에 저장됨

    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);
    console.log(rest); // 5번째 인자부터 rest 배열에 저장됨
}

// 인자를 엄청 길게 보내거나, 길이제한없이 인자를 보내고 싶을 때, 함수를 선언할 떄 인자위치에 ...사용해서 모든 인자들을 받아온다는 의미
test(1, 2, 3, 4, 5, 6, 7, 8);
test(1, 2, 3); // rest에는 할당하고 남은 인자가 없어서 빈배열이 들어감

// 퀴즈
// 매개변수 갯수 제한하지 않고 모든 매개변수의 합을 구하는 함수 만들기
// 내 답
// function addNumber(...num) {
//     let sum = 0;
//     for (let n of num) {
//         sum += n;
//     }
//     return sum;
// }
// console.log(addNumber(1, 2, 3, 4, 5, 6));

// 강사님 답

function addNumber(...num) {
    let sum = 0;
    // num.forEach((n) => (sum = sum + n));
    num.forEach((n) => (sum += n));
    // console.log(sum); // 21
    return sum;
}

console.log(addNumber(1, 2, 3, 4, 5, 6)); // 21

// ----------------------------------------------------------

// 매개변수에 기본값 설정
function introduce(name, like = 'money', hate, gender = '여') {
    console.log(
        `안녕하세요~ 제 이름은 ${name} 이고, 저는 ${like}를 좋아합닝다. 하지만 ${hate}를 싫어해요. 아 참! 그리고 저는 ${gender}성입니다~`
    );
}

introduce();
introduce('a', 'b', 'c', 'd', 'e', 'f'); // 넘치는 인자는 문제 발생하지 않음(안쓰이고 말아버림)

// introduce('레일라', , '운동'); // 함수 내부에는 인자를 빈 채로 둘 수 없음
introduce('레일라', undefined, '운동'); // 이렇게 사용하는 경우는 거의 없음 (undefined를 넣으면 기본값으로 설정한 값을 확인할수 있기는 함)
// 인자가 비어있을 때만 기본값이 사용되고, 인자가 있을 경우 기본값 사용되지 않음
