// function FunctionComponent() {
//     return <h1>함수형 컴포넌트</h1>;
// }

// export default FunctionComponent;

// -------------------------------------------------

// rfc + enter or tab : 파일명과 동일한 이름의 함수형 컴포넌트 만들어줌(자동생성)

// import React from 'react';

// export default function FunctionComponent() {
//     return <div></div>;
// }

// ---------------------------------------------------

// import React from 'react' (자동생성되지만 생략가능)
// 이미지 사용시 import로 경로 작성하고 변수로 불러옴
// import는 함수, 컴포넌트 위에 가장 맨 위에 작성하기
import cat from '../assets/cat.jpeg';

export default function FunctionComponent() {
    const text = '안녕하세요!';
    const name = 'layla';
    const show = true;
    const textStyle = {
        backgroundColor: 'navy',
        color: 'pink',
        fontWeight: 900,
    }; // 객체

    const checkUser = () => {
        if (name === 'layla') {
            return '안녕하세요!';
        } else if (name === 'lily') {
            return '오랜만이시네요!';
        } else {
            return '나가주세요....';
        }
    };

    const handleClick = () => {
        alert('클릭했다!!!!');
    };

    return (
        <>
            {/* 
                1. 하나의 최상위 부모 요소로 감싸서 return 
                 - virtual DOM에서 컴포넌트의 변화를 감지할 때 효율적으로 비교할 수 있도록
                   컴포넌트 내부에는 하나의 DOM 트리 구조로 이루어져야 한다고 React가 정함 
                 - div, section, article, header, footer 등 최상위 부모 요소는 어떤 요소이든 상관 없음 
                 - 불필요한 태그를 만들지 않기 위해 <></> 와 같은 태그로 감싸는 경우도 많음 
                   (Fragement 단축 문법) -> react에서 제공해주는 것 
                   [참고] (react 공식 문서) : https://react.dev/reference/react/Fragment 
     */}
            <div>함수형 컴포넌트 1</div>
            <div>함수형 컴포넌트 2</div>

            {/* 2-1. js 문법 사용 가능 (변수) */}
            <div>인사는 {text} </div>

            {/* 2-2. js 문법 사용 가능 (삼항 연사자를 사용한 조건부 랜더링 ver.간단) */}
            <h3>
                {name === 'layla' ? `어서오세요 ${name}님` : '누구...세요...?'}
            </h3>

            {/* 2-3. js 문법 사용 가능 (위에서 함수를 만들어 사용 ver.복잡) */}
            <h3>{checkUser()}</h3>

            {/* 2-4. js 문법 사용 가능 ( && ) -> 무조건 true 일 때 어떤 값을 보여줄 때 사용 */}
            <h3>{name === 'yuki' && '엄청 오랜만이시네요!!'}</h3>

            {/* 2-4. js 문법 사용 가능 ( 조건부 랜더링 && 사용 ) */}
            <h3>{show && '모달창 넣어주기!'}</h3>

            {/* 3. inline style 적용 방법 -> style 속성값으로 "객체" 전달 */}
            {/* 
                HTML 버전
                <div style="background-color: pink; color:navy"></div> 
            */}
            <div
                style={{
                    backgroundColor: 'pink',
                    color: 'navy',
                    fontWeight: 900,
                }}
            >
                wow! 인라인으로 선언한 style!
            </div>
            <div style={textStyle}> OMG! 객체에 담아 위에 선언한 style!</div>

            {/* 4. class와 onclick jsx에서 사용하기 */}
            {/* <div class="text-css" onclick="함수();">원래 html에서 사용하던 방식</div> */}
            <div className="text-css">jsx에서 css 사용하기 (className) </div>
            {/* html에서는 함수를 "호출"했지만, jsx에서는 함수를 "선언"함 */}
            <button
                onClick={() => {
                    // 함수();
                    alert('클릭!!!');
                }}
            >
                버튼
            </button>
            <button onClick={handleClick}>
                버튼2 (위에서 선언한 함수 사용)
            </button>

            {/* 5. 닫는 태그 필수 !!!! */}
            <br />
            <br></br>

            <input></input>
            <input />
            {/* 이미지의 절대경로의 root는 public이 최상위 root임 -> 빌드할때 정적? 하지 않음? */}
            {/* 절대 경로는 public 폴더 내부 */}
            <img src="/logo192.png" alt="리액트 이미지" />

            {/* src 내부의 이미지를 사용할 경우 해당 이미지 import해 사용 */}
            <img
                src={cat}
                alt="창 밖 구경하는 귀여운 장화"
                style={{ width: 100, height: 100 }}
            />
        </>
    );
}
