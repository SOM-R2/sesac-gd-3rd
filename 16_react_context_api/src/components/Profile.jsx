import { useContext, useRef } from 'react';
import { AgeContext } from '../contexts/AgeContext';
import { UserContext } from '../contexts/UserContext';

export default function Profile() {
    // AgeContext의 age와 setAge
    // UserContext의 name과 setName 모두 사용 예정

    // const ageContext = useContext(AgeContext);
    // console.log(ageContext); // 객체 형태 -> 구조 분해 할당 가능 따라서 아래처럼 사용

    const { age, setAge } = useContext(AgeContext);
    const { name, setName } = useContext(UserContext);

    const ageRef = useRef();
    const nameRef = useRef();

    const changeInfo = () => {
        if (
            nameRef.current.value.length < 1 ||
            nameRef.current.value.trim() == ''
        ) {
            alert('이름을 다시 입력해주세요.');
            nameRef.current.focus();
            return;
        } else if (
            ageRef.current.value.length === 0 ||
            ageRef.current.value.trim() === '' ||
            Number(ageRef.current.value) < 1
        ) {
            alert('나이를 다시 입력해주세요.');
            ageRef.current.focus();
            ageRef.current.value = '';

            return;
        }
        setAge(Number(ageRef.current.value));
        ageRef.current.value = '';
        setName(nameRef.current.value);
        nameRef.current.value = '';
    };
    return (
        <>
            <h3>User Profile</h3>
            <div>나이 : {age}</div>
            <input
                type="text"
                placeholder="이름을 입력해 주세요."
                ref={nameRef}
            />
            <br />
            <input
                type="number"
                placeholder="나이를 입력해 주세요."
                ref={ageRef}
            />
            <button onClick={changeInfo}>프로필 변경</button>
        </>
    );
}
