// package.json 수정 필요
// package.json에서 "type" : "module"로 수정

// 02_module01.js 사용
import { flowers, getFlower, getFlowersLength } from './02_module01.js';

console.log(flowers);
getFlowersLength(); // 함수의 결과값이 console를 찍기 떄문에 콘솔에 감쌀 필요 없음
console.log(getFlower(0)); // 해당 함수는 콘솔이 아닌 return을 반환값으로 받기 떄문에 콘솔에 감싸야함
console.log(getFlower(10)); // 예외처리 해서 확인용 콘솔

// 한번에 export 한 변수, 함수 등을 가져오는 방법
// *을 사용해 한 번에 가져오는 방법은 메모리 효율과, 처리 속도 측면에서 좋지 않음
// 되도록이면 사용할 변수 명이나 메소드 명을 명시하는 것이 좋음

console.log('--- 아래는 *전체 사용해서 import 하는 방법(잘 사용하지 않음)---');
import * as flower from './02_module01.js';
console.log(flower);
flower.getFlowersLength();
console.log(flower.getFlower(0));
console.log(flower.getFlower(10));
// 위 방법은 메모리 차지도 많이하고, 불러오는 시간도 많이 걸려서 실행되는 환경의 효율이 떨어짐 따라서 너무 많이 가져와야할 떄는 *을 작성해서 다 가져오지만 웬만해서는 위처럼 작성하지 않음

// --------------------------------------------------------------------------------

// 02_module02.js 사용
console.log('-------------------------');
import { animals, showAnimals, addAnimal } from './02_module02.js';

showAnimals(); // 함수내부의 console를 찍기 때문에 콘솔 필요 없음
console.log(addAnimal('horse'));
console.log(addAnimal('tigger'));

// --------------------------------------------------------------------------------

// 03_module.js 사용
console.log('-------------------------');
// default키워드는 괄호 없이 내보냄(이 방법 react애서 주로 사용함 )
// import sayStauts from './03_module.js';

// sayStauts('sleepy');
// sayStauts('hungry');
// sayStauts('boring');
// sayStauts('hard');
// sayStauts('happy');

// 한 번에 내보낸 sayStatus2 사용
import sayStatus2 from './03_module.js';
sayStatus2('sleepy');
sayStatus2('hungry');
sayStatus2('boring');
sayStatus2('hard');
sayStatus2('happy');
