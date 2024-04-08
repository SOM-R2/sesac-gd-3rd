// export default function FuncState() {
//     let apple = '사과';

//     const inEng = () => {
//         //.state 요소를 찾아 해당 요소의 content를 apple로 바꾸기
//         const content = document.querySelector('.state');
//         content.innerText = 'apple';
//         apple = 'apple';
//         console.log(apple); // apple이 콘솔창에 찍히도록 함수 작성
//     };
//     return (
//         <>
//             <h2>함수형 컴포넌트에서 state 사용하기</h2>
//             <div>이 컴포넌트는 vanilla JS로 작성</div>
//             <button onClick={() => inEng()}>영어로 바꾸기</button>
//             <div className="state">{apple}</div>
//         </>
//     );
// }

// ------------------------------------------------------

// useState 사용

// import { useState } from 'react';

// export default function FuncState() {
//     // const [state 변수명, state를 변경시키는 setter 함수] = useState(state의 초기값)
//     // useState를 사용해 state 선언 시 state와 state를 변경시키는 setter 함수를 배열로 반환
//     // 해당 state와 setter 함수를 구조 분해 할당 하여 변수에 저장하고 바로 사용
//     // 배열이라서 []
//     const [apple, setApple] = useState('사과');
//     // 추가적으로 여러개의 useState 사용할 수 있음
//     const [number, setNumber] = useState(0);

//     return (
//         <>
//             <h2>함수형 컴포넌트에서 state 사용하기</h2>
//             <div>이 컴포넌트는 useState 사용</div>
//             <button onClick={() => setApple('apple')}>영어로 변경</button>
//             <div>{apple}</div>

//             <hr />

//             <h2>number state를 1씩 증가시키는 버튼 만들기 </h2>
//             <div>{number}</div>
//             {/* 비동기로 동작하기 때문에 로직이 씹히거나 동작하지 않을 수 있기 때문에 아래에서 첫번째 방식으로 작성하기 보단 두번째 방법으로 하는게 좋음  */}
//             <button
//                 onClick={() => {
//                     setNumber(number + 1);
//                     //number state를 1 더하는 로직 다음에 alert을 띄우는 로직이 작성되어있어도
//                     // alert에 보이는 값은 1을 더하기 전 number 값이 보임
//                     // state의 setter함수는 비동기적으로 동작함
//                     // 그래서 number라는 state가 1더한 값으로 업데이트되기 전
//                     // alert 창이 띄어져 버려서 1 더한 값이 아닌 원래 값이 보이게 됨
//                     alert(number); // 아직 number state가 업데이터되기 전이 나옴(setter함수가 비동기적으로 작동하기 때문에 업데이트 되기 전에 alert이 실행됨)

//                     // 이를 해결하기 위한 하나의 예시
//                     // state의 setter 함수에 인자로 업데이트할 값이 아닌 콜백 전달
//                     // 해당 콜백의 인자로는 원래 state 값이고 원래 state 값에 1을 더하는 로직을 작성한 것임

//                     // setNumber((prevNum) => prevNum + 1)

//                     setNumber((prevNum) => {
//                         alert(prevNum + 1); // number state의 값을 바로 띄우는게 아닌 더한 값을 띄우게됨
//                         return prevNum + 1;
//                     });
//                 }}
//             >
//                 {' '}
//                 + 1{' '}
//             </button>

//             <button onClick={() => setNumber((prevNum) => prevNum + 1)}>
//                 {' '}
//                 + 1{' '}
//             </button>
//         </>
//     );
// }

// ---------------------------------------------

// useState 사용해 버튼 클릭 시 apple -> 사과 -> apple -> 사과

import { useState } from 'react';

export default function FuncState() {
    const [showEng, setShowEng] = useState(true);

    return (
        <div>
            <h2>함수형 컴포넌트에서 state 사용하기</h2>
            <div>useState 사용해 버튼 클릭 시 사과➡️apple➡️사과➡️apple</div>
            <button
                onClick={() => {
                    setShowEng(!showEng);
                }}
            >
                {showEng ? '한글' : '영어'}로 변경
            </button>
            <div>{showEng ? 'apple' : '사과'}</div>
        </div>
    );
}

// 아래는 강사님 답

// import { useState } from 'react';

// export default function FuncState() {
//     const [showEnglish, setShowEnglish] = useState(true);

//     return (
//         <div>
//             <h2>함수형 컴포넌트에서 state 사용하기</h2>
//             <div>useState 사용해 버튼 클릭 시 사과➡️apple➡️사과➡️apple</div>
//             <button
//                 onClick={() => {
//                     setShowEnglish(!showEnglish);
//                 }}
//             >
//                 {showEnglish ? '한글' : '영어'}로 변경
//             </button>
//             <div>{showEnglish ? 'apple' : '사과'}</div>
//         </div>
//     );
// }
