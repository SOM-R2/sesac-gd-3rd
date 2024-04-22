import { useDispatch, useSelector } from 'react-redux';
import {
    counterMinus,
    counterPlus,
    counterReset,
} from '../store/modules/countReducer';
import { isLoggedInChange } from '../store/modules/isLoggedinReducer';

export default function UseAllState() {
    // useSelector를 통해 rootReducer에서 관리되는 isLoggedIn state에 접근
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <div style={{ border: '5px solid pink', padding: '10px' }}>
            <h2>부모 컴포넌트</h2>
            <div>자식으로 Child 컴포넌트를 가짐</div>
            <div>이 컴포넌트는 어떤 props도 전달하지 않는 중 </div>
            <div>
                현재 전역으로 관리되는 isLoggedIn state 값 :{' '}
                {isLoggedIn ? '로그인 함' : '로그인 하지 않음'}
            </div>
            <Child />
        </div>
    );
}

function Child() {
    const count = useSelector((state) => state.count);
    // useSelector 사용해서 store에 관리되는 전역 상태를 가져올건데,
    // store의 state 중 isLoggedIn의 값을 가져오겠다.
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <div style={{ border: ' 5px solid skyblue', padding: '5px' }}>
            {/* count state 보여주고, +1, -1, reset 하는 버튼 만들기  */}
            <div>count state 값 : {count} </div>
            <button onClick={() => dispatch({ type: 'count/increment' })}>
                + 1
            </button>
            <button onClick={() => dispatch({ type: 'count/decrement' })}>
                - 1
            </button>
            <button onClick={() => dispatch({ type: 'count/reset' })}>
                reset
            </button>

            <div>countReducer에서 정의한 action 함수 사용</div>
            <button onClick={() => dispatch(counterPlus())}>+ 1</button>
            <button onClick={() => dispatch(counterMinus())}>- 1</button>
            <button onClick={() => dispatch(counterReset())}>reset</button>

            <div>isLoggedIn state 업데이트 하기</div>
            <button onClick={() => dispatch({ type: 'isLoggedIn/change' })}>
                {isLoggedIn ? '로그아웃' : '로그인'}
            </button>

            <button onClick={() => dispatch(isLoggedInChange())}>
                {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
        </div>
    );
}
