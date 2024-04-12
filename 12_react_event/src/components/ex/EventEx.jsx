// import { useState } from 'react';

// export default function EventEx() {
//     const [color, setColor] = useState('검정색');
//     return (
//         <>
//             <div>{color} 글씨</div>
//             <button
//                 onClick={() => {
//                     setColor('빨간색');
//                 }}
//             >
//                 빨간색
//             </button>
//             <button
//                 onClick={() => {
//                     setColor('파란색');
//                 }}
//             >
//                 파란색
//             </button>
//         </>
//     );
// }

// 강사님 답
import { useState } from 'react';

export default function EventEx() {
    const [textColor, setTextColor] = useState({
        color: 'black',
        text: '검정색',
    });

    return (
        <>
            <h2 style={{ color: textColor.color }}>{textColor.text} 글씨</h2>
            <button
                onClick={() => {
                    setTextColor({ color: 'red', text: '빨간색' });
                }}
            >
                빨간색
            </button>
            <button
                onClick={() => {
                    setTextColor({ color: 'blue', text: '파란색' });
                }}
            >
                파란색
            </button>
        </>
    );
}
