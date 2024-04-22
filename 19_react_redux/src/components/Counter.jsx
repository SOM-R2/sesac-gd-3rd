import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
    // store에서 관리되는 state를 가져오는 hook
    const number = useSelector((state) => state);
    console.log(number);

    const dispatch = useDispatch();

    return (
        <>
            <h2>redux를 사용해 store에서 관리되는 state 가져오고, 사용하기 </h2>
            <div>전역 관리되는 state 값 : {number} </div>

            <div>전역 관리되는 state 값 변경하기</div>
            <button onClick={() => dispatch({ type: 'increment' })}>+ 1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>- 1</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </>
    );
}
