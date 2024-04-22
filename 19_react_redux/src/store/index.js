// 여러 개의 리듀서를 하나로 묶어줌
import { combineReducers } from '@reduxjs/toolkit';
import { isLoggedinReducer } from './modules/isLoggedinReducer';
// import { countReducer } from './modules/countReducer';
import { bankReducer } from './modules/bankReducer';
import countReducer from './modules/countSlice';

// combineReducers : 여러 개의 리듀서를 하나로 묶어줌
const rootReducer = combineReducers({
    count: countReducer,
    isLoggedIn: isLoggedinReducer,
    money: bankReducer,
});

export default rootReducer;
