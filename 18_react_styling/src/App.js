import BasicCss from './components/BasicCss';
import ModuleCss from './components/ModuleCss';
import StyledComponent from './components/StyledComponent';
import Sass from './components/Sass';

function App() {
    return (
        <div className="App">
            <BasicCss />
            <ModuleCss />
            <h3>React에서 스타일 적용하는 방법</h3>
            <ol>
                <li>인라인 스타일 적용 방법</li>
                <li>일반 css 파일 만들어 import</li>
                <li></li>
            </ol>
            <StyledComponent />
            <Sass />
        </div>
    );
}

export default App;
