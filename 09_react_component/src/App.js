import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import Prac from './components/Prac';

function App() {
    return (
        <div className="App">
            {/* 불러와 사용하는 방법 1 */}
            <ClassComponent />

            {/* 불러와 사용하는 방법 2 */}
            <ClassComponent></ClassComponent>

            {/* return문안에는 jxs로 작성되기 떄문에 주석형태가 다름 */}
            {/* 함수형 컴포넌트 */}
            <FunctionComponent />

            <hr />
            {/* 실습 */}
            <Prac></Prac>
            <br />
            <br />
        </div>
    );
}

export default App;
