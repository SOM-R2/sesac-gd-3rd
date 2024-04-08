// 함수형 컴포넌트에서 useState hook을 통해 state 사용 실습

import { useState } from 'react';

export default function Prac2() {
    const [num, setNum] = useState(0);

    const increase = () => {
        setNum(num + 1);
    };

    const decrease = () => {
        setNum(num - 2);
    };
    return (
        <>
            <h2>{num}</h2>
            {/* <button onClick={() => {increase()}}> + 1 </button> */}
            <button onClick={increase}> + 1 </button>
            <button onClick={decrease}> - 2 </button>
            {/* <button onClick={() => {decrease()}}> - 2 </button> */}
        </>
    );
}
