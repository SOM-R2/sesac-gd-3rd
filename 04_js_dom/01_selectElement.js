/*
    요소 선택
    - querySelector('css 선택자')
    - querySelectorAll('css 선택자')
    - getElementById('id값')
    - getElementsByClassName('class값')
    - getElementsByTagName('태그명')
*/

// document 객체
// 전체 문서 (파일 주소(ip 주소) 및 경로도 확인할 수 있음)
console.log(document); // html 문서 전체
console.log(document.documentElement); // html 문서 내의 모든 element(요소)들을 가지
console.log(document.head); // head 태그와 내부 모든 element 들
console.log(document.body); // body 태그와 내부 모든 element 들
console.log(document.URL); // http, www, ... 전부 포함
console.log(document.domain); // ip주소나 우리가 아는 도메인

// 1. getElementById
console.log('getElementById');
console.log(document.getElementById('green'));
console.log(document.getElementById('gold'));

// 2. getElementsByClassName
// 동일한 클래스를 가진 요소가 여러개 있을 수 있으므로 elements(복수형)
console.log('getElementsByClassName');
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('others'));

// 3. getElementsByTagName
console.log('getElementsByTagName');
console.log(document.getElementsByTagName('div'));

// 4. querySelector
// css에서 사용했던 선택자 이용해 요소 선택
// 해당 css 선택자 중에서 일치하는 첫 번째 요소만 선택됨 -> 하나만 선택
console.log('querySelector');
console.log(document.querySelector('#green'));
// quertSelector는 하나만 가져오기 때문에 처음에 만나는 요소 하나만 가져옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('div.pink'));
console.log(document.querySelector('body div'));
console.log(document.querySelector('div.pink')[2]); // 인덱스 사용해 접근

// 5. querySelectorAll
// 해당 css 선택자 중에서 일치하는 모든 요소를 선택
console.log('querySelectorAll');
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('div.pink'));
console.log(document.querySelectorAll('.others'));

// NodeList와 HTMLCollection
// getElementBy~~ -> HTMLCollection -> js에서 노드를 생성하거나 삭제하는 변경 감지
// querySelectorAll -> NodeList -> 변경 감지 못함
// HTMLCollection, NodeList -> 유사 배열

// 유사 배열
// length 속성을 가짐
// [i]로 접근 가능 -> 인덱스로 접근 가능
// 표준 객체 메서드 사용 불가 (map)
// 하지만 forEach는 사용 가능

// for of 문으로 pink클래스 모두 출력하기
let pinks = document.querySelectorAll('.pink'); // pink 클래스를 가진 모든 요소 배열로 저장

for (let el of pinks) {
    console.log(el);
}
