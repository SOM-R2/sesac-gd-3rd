import { useState, useEffect, useCallback } from 'react';

export default function UseCallback1() {
    const [number, setNumber] = useState(0);
    const [isTrue, setIsTrue] = useState(true);

    // 일반적으로 선언된 함수의 경우 컴포넌트가 리렌더링 될 떄마다 함수가 다시 선언됨
    // 그렇기 때문에 isTrue state에 변경사항이 있어도 func1이라는 함수는 다시 선언됨
    // useEffect에서 의존성 배열로 func1에 변경사항이 생기면 내부 로직을 실행하도록 작성 시
    // 매번 useEffect의 콜백 함수가 실행됨
    const func1 = () => {
        console.log(`number state : ${number}`);
    };

    // 의존성 배열에 전달한 number의 값이 바뀌지 않을 경우
    // 메모이제이션 한 콜백 함수를 그대로 사용하고,
    // number의 값이 바뀌면 useCallback hook의 첫 번째 인자로 전달한
    // 콜백 함수를 다시 메모이제이션
    const func2 = useCallback(() => {
        console.log(`number state : ${number}`);
    }, [number]);

    useEffect(() => {
        console.log('func1 함수 변경!!!🚨');
    }, [func1]);

    useEffect(() => {
        console.log('func2 함수 변경!!!🤡');
    }, [func2]);

    return (
        <>
            <h2>useCallback 사용 1</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => {
                    setNumber(e.target.value);
                }}
            />
            <br />
            <button onClick={func1}>func1 실행</button>
            <button onClick={func2}>func2 실행</button>
            <button onClick={() => setIsTrue(!isTrue)}>
                {isTrue.toString()}
            </button>
        </>
    );
}

// useEffect의 의존성 배열에 함수가 들어가는 경우 useCallback hook을 사용하면
// 성능에 도움이 됨
// const [data, setData] = useState(null)
// const fetchData = useCallback(() => {
//   fetch(`~~~~~/${postId}`).then((response) => response.json());
// }, [postId]);

// useEffect(() => {
//   fetchData().then((data) => setData(data));
// }, [fetchData]);
// 처음 컴포넌트 mount 시 fetchData 함수 실행과 동시에 메모리에 콜백 함수 자체가 저장
// postId 값이 바뀌지 않는다면 fetchData 함수는 컴포넌트가 리렌더링 되어도
// 다시 선언되지 않음 -> 계속 사용디지 않는 함수나 연산이 너무 복잡해서
// 계산하는데 많은 자원이 드는 함수는 useCallback으로 저장하면 됨
