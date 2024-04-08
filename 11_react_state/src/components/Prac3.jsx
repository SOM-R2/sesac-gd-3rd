import { useState } from 'react';

export default function Prac3() {
    const [num, setNum] = useState(0);
    const increase = () => {
        setNum(num + 1);
    };

    const decrease = () => {
        setNum(num - 2);
    };
    return (
        <>
            <h2>
                {num}
                {num < 8 ? '😍' : '🐲'}
            </h2>
            <button onClick={increase}> + 1 </button>
            <button onClick={decrease}> - 2 </button>
        </>
    );
}
