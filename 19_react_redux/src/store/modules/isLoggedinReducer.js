// true false로 관리되는 isLoggedin state

const initialState = false;

export const isLoggedInChange = () => ({ type: 'isLoggedIn/change' });

export const isLoggedinReducer = (state = initialState, action) => {
    if (action.type === 'isLoggedIn/change') {
        return !state; // ture -> false로 false -> true로 state 업데이트
    }

    return state;
};
