import CharactorsContainer from './components/CharactersContainer';
import ClassState from './components/ClassState';
import FuncState from './components/FuncState';
import Prac1 from './components/Prac1';
import Prac2 from './components/Prac2';
import Prac3 from './components/Prac3';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            {/* <ClassState />
            <FuncState />
            <Prac1 />
            <Prac2 />
            <Prac3 />
            <CharactorsContainer /> */}
            <button onClick={() => setShow(true)}>모달 보이기</button>

            {show && <Modal msg="확인하시겠습니까?" setShow={setShow} />}

            {show && (
                <Modal
                    msg="확인하시겠습니까?22"
                    isInput={true}
                    setShow={setShow}
                />
            )}

            {show && (
                <Modal
                    msg="확인하시겠습니까?333"
                    isCancelBtn={true}
                    setShow={setShow}
                />
            )}
        </div>
    );
}

export default App;
