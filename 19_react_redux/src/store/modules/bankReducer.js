const initialState = 0;

// 액션 함수
export const deposit = (payload) => ({ type: 'money/deposit', payload });
export const withdraw = (payload) => ({ type: 'money/withdraw', payload });

export const bankReducer = (state = initialState, action) => {
    // action 객체의 형태 { type: 'money/deposit', payload: 입금값}
    switch (action.type) {
        case 'money/deposit':
            return state + action.payload;
        case 'money/withdraw':
            return state - action.payload;
        default:
            return state;
    }
};
