// import { useState } from 'react';

// export default function FuncPrac1() {
//     const [num, setNum] = useState(0);

//     return (
//         <>
//             <button
//                 onClick={() => {
//                     setNum(num + 2);
//                 }}
//             >
//                 +2
//             </button>
//             <button
//                 onClick={() => {
//                     setNum(num - 1);
//                 }}
//             >
//                 -1
//             </button>
//             <div>{num}</div>
//         </>
//     );
// }

// 클래스형 컴포넌트에서 state 사용 실습
import React, { Component } from 'react';

export default class Prac1 extends Component {
    state = {
        number: 0,
    };

    render() {
        const { number } = this.state;
        return (
            <>
                <h2>{number}</h2>
                <button
                    onClick={() =>
                        // 앞의 number는 state={number}의 넘버 뒤의 number는 구조분해할당한 const { number } = this.state 여기의 number 임
                        this.setState({ number: number + 2 })
                    }
                >
                    {' '}
                    + 2{' '}
                </button>
                <button
                    onClick={() =>
                        // 앞의 number는 state={number}의 넘버 뒤의 number는 구조분해할당한 const { number } = this.state 여기의 number 임
                        this.setState({ number: number - 1 })
                    }
                >
                    {' '}
                    - 1{' '}
                </button>
            </>
        );
    }
}
