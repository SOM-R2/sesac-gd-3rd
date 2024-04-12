import { useRef, useState } from 'react';

export default function FuncRef() {
    // react에서 DOM 요소 조작
    // react에서는 DOM 요소에 직접적으로 접근해 조작하지 않는 것이 좋음
    // virtual DOM을 사용하기 때문에 직접적인 DOM 조작은 react에서 지양해달라고 함
    const input = useRef();

    // ref를 변수로 사용
    const localVar = useRef(0);
    const [state, setState] = useState(0);
    let justVar = 0;

    const inCreLocalVar = () => {
        localVar.current++;
        console.log('localVar : ' + localVar.current);
    };

    const inCreJustVar = () => {
        justVar++;
        console.log('justVar : ' + justVar);
    };
    const focusInput = () => {
        console.log(input);
        console.log(input.current);
        input.current.focus();
    };

    return (
        <>
            {/* useRef를 사용해 만든 ref는 DOM 요소와 연결해 사용 */}
            {/* ref 속성으로 만든 ref를 전달 */}
            <input type="text" ref={input} />
            <button onClick={focusInput}>버튼</button>

            <h2>localVar.current : {localVar.current}</h2>
            <h2>stateVar : {state}</h2>
            <h2>justVar : {justVar}</h2>
            <button onClick={inCreLocalVar}>localVar + 1</button>
            <button
                onClick={() => {
                    setState(state + 1);
                }}
            >
                state + 1
            </button>
            <button onClick={inCreJustVar}>justVar + 1</button>
        </>
    );
}
