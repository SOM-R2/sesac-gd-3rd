import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [quearyParams, setQueryParams] = useSearchParams();
    const [isDark, setIsDark] = useState(false);
    // const [mode, setMode] = useState('light');

    console.log(quearyParams.get('mode'));
    // / -> null
    // /?mode=dark -> dark

    const toggleMode = () => {
        // isDark가 true라면 현재 다크모드이기 때문에 일반 모드로 변경 -> 일반모드는 / 주소
        // isDark가 false라면 현재 라이트(일반) 모드이기 때문에 다크 모드로 변경 -> /?mode=dark
        setQueryParams(isDark ? {} : { mode: 'dark' });
        setIsDark(!isDark);
    };

    return (
        <>
            {/* <Header /> */}
            <h1>여기는 Home Page 컴포넌트</h1>
            <div
                style={isDark ? { backgroundColor: '#000', color: '#fff' } : {}}
            >
                현재 모드 : {isDark ? '다크 모드' : '라이트 모드'}
            </div>
            <button onClick={toggleMode}>모드 변경</button>
        </>
    );
}
