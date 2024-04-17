import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
// default 키워드를 사용(=대표함수)해서 내보낸 경우에는 괄호 없이 해당 함수이름으로 불러와도 가능
// default 키워드를 사용하지 않으면 여러개를 내보낼수있기 때문에 객체 형태로 내보내지게 되고 따라서 구조분해 할당으로 사용함 따라서 {} 중괄호 사용
import Box from './components/Box';
import Profile from './components/Profile';
import AgeProvider from './components/provider/AgeProvider';
import UserProvider from './components/provider/UserProvider';

function App() {
    const [isDark, setIsDark] = useState(false);
    return (
        <div className="App">
            <h1>context api</h1>
            <div>
                전역적으로 접근할 수 있는 값이 있을 때 접근을 쉽게 하기 위해
                사용
            </div>

            {/* <ThemeContext.Provider
                value={{ isDark: isDark, setIsDark: setIsDark }}
                // 위처럼 객체로 보낼때 key와 value가 동일한 이름이기 떄문에 아래처럼 축약해서 작성해도됨
            > */}
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                {/* 이 내부에 작성된 컴포넌트만 ThemeContext가 관리하는 값에 접근할 수 있음 (isDark와 setIsDark) */}
                <Box />
            </ThemeContext.Provider>

            {/* ThemeContext.Provider 내부에 작성되어 있지 않기 때문에
                해당 context의 value에 접근해 사용할 수 없음
                isDark 사용하는 곳 부터 에러 발생
                context api 사용해서 전역적으로 관리하는 값에 접근하는 컴포넌트는 재사용성이 떨어짐 
                -> context api 사용하기 전 해당 사항 고려 필요     
            */}
            {/* <Box /> */}

            {/* 여러 개의 context 사용 */}
            <AgeProvider>
                <UserProvider>
                    <Profile />
                </UserProvider>
            </AgeProvider>
        </div>
    );
}

export default App;
