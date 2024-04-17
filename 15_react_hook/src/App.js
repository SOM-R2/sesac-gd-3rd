import CustomHook from './components/CustomHook';
import UseCallback1 from './components/UseCallback1';
import UseCallback2 from './components/UseCallback2';
import UseMemo from './components/UseMemo';

function App() {
    return (
        <div className="App">
            <CustomHook />
            <UseCallback1 />
            <UseCallback2 />
            <UseMemo />
            <CustomHook />
        </div>
    );
}

export default App;
