// 초기값
const initialState = 0;

// 액션 타입 정의
// action.type에 count/~~로 작성하는 이유
// decrement, increment, reset은 다른 state들에서 type으로 사용될 수 있음
// 이에 대한 type의 특정을 통해 원하는 로직을 실행시키기 위함

// { type: 'decrement'};
// counterMinus 함수 -> counterMinus() 형식으로 호출시 { type : 'decrement }를 반환
export const counterMinus = () => ({ type: 'count/decrement' });
console.log(counterMinus()); // { type : 'decrement } 콘솔에 찍힘
// dispatch(counterMinus()) == dispath({ type: 'decrement' })

// type으로 increment와 rest 전달하는 액션 타입 정의하기
// { type: 'increment'};
export const counterPlus = () => ({ type: 'count/increment' });

// { type: 'reset' };
export const counterReset = () => ({ type: 'count/reset' });

// 리듀서 작성

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'count/increment':
            return state + 1;
        case 'count/decrement':
            return state - 1;
        case 'count/reset':
            return 0;
        default:
            return state;
    }
};
