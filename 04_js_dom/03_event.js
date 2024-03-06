const btn1 = document.querySelector('.btn-black');
const btn2 = document.querySelector('.btn-pink');
const btn3 = document.querySelector('.btn-gold');
const btn4 = document.querySelector('.btn-skyblue');
const container = document.querySelector('.container');

// addEventListener 사용

// btn1: 익명 함수, 함수 표현식 사용해 변수에 저장하지 않고 작성
btn1.addEventListener('click', function () {
    alert('버튼 1을 클릭했습니다.');
});

// 하나의 요소에 여러 이벤트 등록 가능
// mouseover는 마우스가 해당 요소 위에 올라갔을 때 실행 -> 마우스 떼도 계속 적용
// hover(css)는 마우스가 해당 요소 위에 올라가 있을 때만 적용 -> 마우스 떼면 원래대로 돌아감
btn1.addEventListener('mouseover', function () {
    // 선택된 요소 자신을 수정하고 싶을 경우 this 키워드 사용
    this.style.backgroundColor = 'red';
});

// btn2 : 화살표 함수 사용해 container에 요소 추가
// 인자로 함수가 전달 될 경우 그 함수는 아래처럼 일반적으로 화살표 함수로 작성함
btn2.addEventListener('click', () => {
    const div = document.createElement('div');
    div.style.backgroundColor = 'yellowgreen';
    div.style.marginBottom = '10px';
    div.innerText = '버튼 2를 클릭해 추가된 div';
    container.append(div);
});

// btn3 : 함수 선언해석 이벤트 등록
btn3.addEventListener('click', changeColor);

// 같은 기능을 재사용 하는 경우에 이렇게 함수를 선언하고,
// addEventListener에서 불러와 사용
// addEventListener에 함수를 불러올 때 괄호 작성 x
// 괄호 작성 시 js를 파싱하면서 해당 코드와 만나면 바로 해당 함수를 실행시켜버림(괄호를 넣어 작성하면 클릭이벤트가 발생도 안했는데 함수를 실행시켜버린다는 의미)
function changeColor() {
    let divs = document.querySelectorAll('.container div');
    //  console.log(divs);  // divs가 유사 배열로 나오는 걸 확인

    // 만약 div 요소가 없다면 alert창 띄우는 예외처리
    if (divs.length !== 0) {
        for (let div of divs) {
            div.style.color = 'red';
        }

        // 마지막 요소만 배경색 파란 색으로 변경
        divs[divs.length - 1].style.backgroundColor = 'blue';
    } else {
        // div가 없을 때 실행시킬 예외처리(실행해야할 작업을 알려주기)
        alert('버튼 2를 클릭해 div를 추가해주세요!');
    }
}

// btn4 : 이벤트 적용된 자기 자신을 선택하는 this 키워드 사용
btn4.addEventListener('click', changeBtnColor);

function changeBtnColor() {
    this.style.backgroundColor = 'orange';
    this.style.color = 'skyblue';
}

// click 이외에도 다양한 이벤트들 있음

// 매개변수 event

// scroll 이벤트는 브라우저 전체에 대해 실행되는 동작이기 때문에
// 어떤 요소가 아닌 window에 걸어줌
// console.log(window);

window.addEventListener('scroll', (event) => {
    // 이벤트가 무엇인지 확인
    console.log(event);

    // event.target은 이벤트가 발생하는 요소
    // 여기서는 document 자체를 의미
    console.log(event.target);

    console.log(scrollY);

    if (scrollY > 700) {
        document.body.style.backgroundColor = 'lightgray';
    }
});

// scroll의 target을 바꿈(window-> div요소로 )
const scrollableDiv = document.getElementById('scrollableDiv');

scrollableDiv.addEventListener('scroll', function (event) {
    console.log('스크롤 감지됨!');
    console.log('스크롤 위치:', scrollableDiv.scrollTop);
});

// -------------------------------------------------------------
// form 이벤트

const todoForm = document.querySelector('#todo-form');
const todos = document.querySelector('.todos');

// 폼이 제출되는 이벤트                // event 대신 e로 많이 작성함
todoForm.addEventListener('submit', (event) => {
    // 브라우저 상에서 기본적으로 동작하는 이벤트 동작을 제거
    event.preventDefault();
    // e.preventDefault();
    console.log('submit');

    const todoInput = document.querySelector('input[name=todo]');
    console.log(todoInput);
    console.log(todoInput.value); // input 요소의 value를 가져옴

    // input 요소 자체의 value 수정가능
    //  todoInput.value = '짜잔!';

    // input의 value 변수에 저장
    const todo = todoInput.value;

    const newTodo = document.createElement('li');
    // newTodo.innerText = todo; 아래와 같음
    // li이 ul에 추가하기
    // newTodo.append(todo);
    // todos.append(newTodo);

    // 입력창 초기화
    //todoInput.value = '';

    // 만약 빈 문자열이 들어왔을 때 li로 추가하고 싶지 않다면 아래처럼 작성(값을 제출하고 나면 input창은 초기화됨)
    if (todo !== '') {
        newTodo.append(todo);
        todos.append(newTodo);
        todoInput.value = '';
    }
});

// -----------------------------------------------------------
// 변경 이벤트
const changeInput = document.querySelector('#change-input');

//change는 input의 포커스가 벗어나면 실행됨!
// console.log(changeInput);
// changeInput.addEventListener('change', () => {
//     console.log('changed!');

//     const div = document.querySelector('.change-input-value');
//     div.innerHTML = this.value;
// });

// e : 이벤트 객체
// target : 해당 이벤트가 발생한 요소 자체
// value : input의 value 값
console.log(changeInput);
changeInput.addEventListener('input', (e) => {
    console.log('changed!');

    const div = document.querySelector('.change-input-value');
    // 실시간으로 작성 내용을 div에 넣어서 출력함
    div.innerHTML = e.target.value;
});
