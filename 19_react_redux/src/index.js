import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// index 파일명으로 작성된 파일은 디렉토리까지만 작성해도 알아서 접근함
import rootReducer from './store';
import { composeWithDevTools } from '@redux-devtools/extension';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 1. redux를 가장 쉽게 사용하는 방법(아래처럼), 하나의 상태만 관리함, 코드 분리 x
// const store = configureStore({ reducer });
// 객체의 key와 value가 동일하다면 한 번만 작성 시 알아서 같은 이름의 value를 전달
// const store = configureStore({ reducer: reducer });

// function reducer(state = 0, action) {
//     switch (action.type) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return 0;
//         default:
//             return state;
//     }
// }

// 2. redux를 사용해 여러 개의 상태 관리, 코드 분리
// reducer 따로 만들기, store 관리하는 폴더 따로 만들기
// src/store/index.js : 스토어의 전체 상태 관리 및 하나로 통합
// src/store/module/countReducer.js & src/store/module/isLoggedinReducer.js
// : 각각의 state를 관리하는 reducer

const store = configureStore({ reducer: rootReducer }, composeWithDevTools);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
