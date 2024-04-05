import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode 이 태그 덕분에 중대한 에러를 콘솔창보다 먼저 경고창을 띄어줌
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
