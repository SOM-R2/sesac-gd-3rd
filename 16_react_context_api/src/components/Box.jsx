import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Box() {
    // useContext() : context api를 사용해서 전역적으로 접근할 수 있는 context에 접근하겠다.
    // 인자로 전달되는 ThemeContext : 작성되어있는 context 중 ThemeContext에 접근하겠다.
    const { isDark, setIsDark } = useContext(ThemeContext);

    return (
        <>
            <h2>ThemeContext 사용</h2>
            {/* style은 무조건 객체 전달해야하기때문에 삼항연산자사용 &&연산자 사용불가, 추가로 삼항 연산자를 사용할때도 스타일 지정이 라이트모드일때는 변화가 없었으면 좋겠으면 빈 객체를 전달해야함 */}
            <div
                style={isDark ? { backgroundColor: '#000', color: '#fff' } : {}}
            >
                Theme : {isDark ? '다크 모드' : '라이트 모드'}{' '}
            </div>
            <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
        </>
    );
}
