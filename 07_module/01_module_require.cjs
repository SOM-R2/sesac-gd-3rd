/*
    commonjs 에서 모듈 사용을 위해
    package.json 파일에 "type": "commonjs"를 추가해야 함


    npm init 명령어(현재 위치를 pakage.json을 만들 곳으로 파일경로 위치 이동 ex) cd 07_module
    - npm init 명령어를 통해 자동으로 해당 프로젝트의 package.json 생성 가능

    cjs 확장자는 commonjs를 사용하는 파일이라는 것을 알림 

*/

// 01_module01.cjs 사용

const Person = require('./01_module01.cjs');

// 01_module02 에서 exports한 모든 데이터가 Person에 저장됨
console.log(Person);

// Person에 저장된 변수, 클래스 함수 사용
// 변수 사용
console.log(Person.colors);
// 함수 사용
console.log(Person.sayName('장원영'));
// 클래스 사용       // Person안의 Person으로 접근해야 사용가능 !! 그냥 new Person('채원', 20); 하면 오류남
const chaewon = new Person.Person('채원', 20);

console.log(chaewon);
console.log(chaewon.getBornYear());

// 가져오고싶은 변수, 함수 , 클래스만 가져오기
// 불러오면 객체형태로 불러와지고, 객체형태이기 떄문에 구조분해할당으로 세부 접근 가능
const { sayName } = require('./01_module01.cjs'); // 구조분해할당 사용(sayName만 가져옴 -> 바로 변수로 사용가능 Person으로 접근 필요 X)
// 보통 위처럼 접근을 계속 하지 않아도 되는 방식으로 불러옴

sayName('안유진');

// -------------------------------------------------------------------

// 01_module02.cjs 사용
const { sayName2, colors2 } = require('./01_module02.cjs');

sayName2('강동원');
console.log(colors2);
