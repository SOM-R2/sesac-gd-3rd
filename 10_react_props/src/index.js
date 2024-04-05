import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // StrictMode는 개발환경에서 엄격하게 테스팅 하기 위해 콘솔을 2번씩 찍지만, 배포 할때는 1번만 찍힘(배포상태에서는 동작하지 않음 _ 에러 핸들링을 위해 있기 때문)
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
