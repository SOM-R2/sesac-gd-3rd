import EventObj from './components/EventObj';
import PropsTypes from './components/PropsTypes';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

function App() {
    return (
        <div className="App">
            <PropsTypes name="layla" age={20} />
            <PropsTypes name="layla" />
            <UseState />
            <UseRef />
            <EventObj />
        </div>
    );
}

export default App;
