import CharactorsContainer from './components/CharactersContainer';
import ClassState from './components/ClassState';
import FuncState from './components/FuncState';
import Prac1 from './components/Prac1';
import Prac2 from './components/Prac2';
import Prac3 from './components/Prac3';

function App() {
    return (
        <div className="App">
            <ClassState />
            <FuncState />
            <Prac1 />
            <Prac2 />
            <Prac3 />
            <CharactorsContainer />
        </div>
    );
}

export default App;
