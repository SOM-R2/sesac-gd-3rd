import { useState } from 'react';

export default function Prac1() {
    // 현재 입력되어있는 사용자의 데이터
    // 서버에서 받아왔다는 전제 하에 작성되어 있음
    // data state는 유저의 id, user, email을 포함하고 있는 객체의 "배열"
    const [data, setData] = useState([
        { id: 1, user: '장원영', email: 'wonyoung@gmail.com' },
        { id: 2, user: '안유진', email: 'yujin@gmail.com' },
    ]);

    // inputUser의 상태를 초기화하고, setter함수를 정의함
    /*
        강사님 주석 
        inputUser state 추가 -> 사용자가 입력한 자신의 이름을 저장하는 state
        이름을 작성하는 input에 value로 inputUser가 들어가 있음 
        이름을 작성하는 input에 onChange 속성으로 setInputUser를 사용해서
        해당 input의 value로 업데이트 됨
     */
    const [inputUser, setInputUser] = useState('');

    // inputEmail의 상태를 초기화하고, setter함수를 정의함
    /*
        강사님 주석
        inputEmail state는 사용자가 입력한 자신의 메일 주소를 저장하는 state
        메일을 작성하는 input에 value로 inputEmail이 들어가 있음
        메일을 작성하는 input에 onChange 속성으로 onChangeEmail 함수 연결
        onChangeEmail 함수는 setInputEmail에 현재 이밴트가 발생한 요소의 value를 
        전달해서 inputEmail이라는 state의 값으로 업데이트 함 
    */
    const [inputEmail, setInputEmail] = useState('');

    // nextId의 상태를 초기화하고, setter함수를 정의함
    /*
        강사님 주석
        nextId라는 state는 data state의 각 요소에 들어가는 값 중 하나
        data state는 객체의 배열로, 각 객체에는 id, user, email이 포함됨
        user, email은 사용자에게 입력을 받아야 함
        하지만 id 값의 경우 사용자가 모름
        그렇기 때문에 data.lenght-> data 배열의 길이에 1을 더해 직접 id값을 만듦 

    */
    const [nextId, setNextId] = useState(data.length + 1); // useState(3)

    // 사용자의 이름을 받는 input에 변경사항이 있을 때 실행되는 함수
    // onChange로 연결 되어 있으며 해당 함수가 실행될 때
    // 해당 이벤트가 발생한 input의  value를 inputUser State의 값으로 업데이트 함
    const onChangeUser = (e) => setInputUser(e.target.value);

    // 사용자의 이메일을 받는 input의 변경사항이 있을 때 실행되는 함수
    // onChange로 연결 되어 있으며 해당 함수가 실행될 떄
    // 해당 이벤트가 발생한 input의 value를 inputEmail state의 값으로 업데이트 함
    // 이 함수에서 사용되는
    // e : event 객체 -> react synthetic event 객체!
    // e.target : 현재 이벤트가 발생한 요소 -> input
    // e.target.value : 현재 이벤트가 발생한 input 요소의 value 속성 값
    const onChangeEmail = (e) => setInputEmail(e.target.value);

    // 사용자가 input 값을 입력하고 enter를 누르거나 버튼을 클릭하면 실행되는 함수
    // 사용자의 입력 값을 객체 형태로 추가하고, setter 함수를 이용해 input창을 초기화 시키고, 상태값을 변화시킴
    /*
        강사님 주석
        email을 입력받는 input에 onKeyDown 속성과 등록 버튼의 onClick 속성에서 사용됨
        새로운 데이터를 data state에 추가, input 2개(user, email)를 초기화, nextId state를 1 더한 값으로 업데이트 
    */
    const eventClick = () => {
        // 새로운 데이터를 기존 데이터 배열에 추가
        // 방법 1. concat 메서드 사용 (배열이 두개 있을 때 배열을 합치고 싶을 때 사용)
        // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        // const nextData = data.concat({
        //   id: nextId,
        //   user: inputUser,
        //   email: inputEmail,
        // });

        // 또는
        // 방법 2. ...연산자 사용(스프레드 연산자)
        // 스프레드 연산자 : 배열안의 객체를 하나하나 가져오는 연산자임
        // nextData는 새로 업데이트 될 데이터
        // 원래 data state의 값을 spread 연산자를 사용해 객체 각각 불러내고
        // 가장 마지막에 새로 입력받은 user의 정보를 객체 형태로 추가하고 있음
        const nextData = [
            ...data,
            {
                id: nextId,
                user: inputUser,
                email: inputEmail,
            },
        ];

        // 객체 정보의 아이디 값이 +1 증가 되도록 setter함수를 사용해서 값을 변화시킴
        /*
            강사님 주석
            nextId state의 값을 1 더함
            다음 사용자의 id 값으로 들어가야 하는데, id는 고유해야 하므로, 1 증가한 값으로 넣어 줄것이기 때문
        */
        setNextId(nextId + 1);

        // 사용자가 입력한 값이 Data 변수에 담기도록 setter함수를 사용해서 값을 변화시킴
        /*
            강사님 주석
            data state를 위에서 선언한 nextData로 업데이트됨
            새로 추가된 데이터가 가장 마지막에 더해짐
            컴포넌트 리랜더링 되면서 브라우저에 추가된 데이터도 함께 랜더링됨
        */
        setData(nextData);

        // 사용자가 입력한 User input의 값을 초기화시킴
        /*
            강사님 주석 
            setInputUser와 setInputEmail을 통해 inputUser, inputEmail state의 값을 
            빈 문자열로 업데이트 -> 현재 inputUser와 inputEmail을 각 input의 value로 연결되어 있음
            각 state가 빈 문자열이 되면 해당 input도 빈 문자열로 바뀜
            input을 초기화 시켜 사용자가 다음 데이터를 입력하기 편하게 만듦

        */
        setInputUser('');
        // 사용자가 입력한 Email input의 값을 초기화시킴
        setInputEmail('');
    };

    // 사용자가 input창의 값을 입력 후 enter를 눌렀을 때 실행될 함수
    // 리액트 이벤트 객체를 받아 사용자가 키보드에 입력한 값이 enter라면 위에 정의한 eventClick()함수를 실행시킴
    /*
        강사님 주석
        emailInput에 onKeyDown 속성으로 연결되어 있는 함수
        해당 input에 focus된 상태로 키보드가 눌려있는 순간 실행
        현재 눌린 키보드가 enter라면 eventClick 함수를 호출 
    */
    const onKeyDownEnter = (e) => {
        if (e.key === 'Enter') {
            eventClick();
        }
    };

    // 더블 클릭 되었을 때 실행되는 함수
    // id를 인자로 받아 데이터를 지우는 함수
    // (서버로 받아왔다고 가정한) 데이타의 아이디와 인자로 받은 id가 같지 않다면 nextData라는 변수에 담음
    /*
        강사님 주석
        모든 사용자를 보여주는 h2 요소에 onDoubleClick으로 연결되어 있는 함수
        h2 요소에 더블 클릭 발생 시 호출
        현재 data state에서 매개변수로 받은 id와 같지 않은 요소만 배열로 저장해서 
        data state를 업데이트
    */

    const onRemoveData = (id) => {
        /*
            강사님 주석
            filter() 메서드 : 배열을 돌면서 각 요소에 조건에 만족하는 요소만 모아 배열로 반환
            매개변수로 받은 id 값과 data state 배열의 모든 요소들을 순회하면서 
            id 값이 같지 않은 요소만 모아서 배열로 반환하고, 반환된 새 배열을 nextData 변수에 저장 
        */
        const NextData = data.filter((data) => data.id !== id);
        // 반환된 NextData 배열의 값으로 data state의 값을 업데이트
        setData(NextData);
    };

    /*
        강사님 주석
        data state를 순회하면서 h2 요소에 각 값을 보여주고,
        onDoubleClick 속성으로 onRemoveData 함수를 호출하며 현재 사용되고 있는 요소의 
        id값을 매개변수로 넘겨주고 있음 
        dataList는 JSX문 안에서 삽입됨
    */
    // const dataList = data.map((data) => (
    //     <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
    //         {data.user}: {data.email}
    //     </h2>
    // ));

    return (
        <>
            {/* 사용자의 이름을 입력받는 input */}
            {/* value 속성으로 inputUser state를 가지고 있음 */}
            <input
                type="text"
                name="user"
                placeholder="이름"
                value={inputUser}
                onChange={onChangeUser}
            />

            {/* 사용자의 이메일을 입력받는 input */}
            {/* value 속성으로 inputEmail state를 가지고 있음 */}
            <input
                type="text"
                name="email"
                placeholder="이메일"
                value={inputEmail}
                onChange={onChangeEmail}
                onKeyDown={onKeyDownEnter}
            />

            <button onClick={eventClick}>등록</button>

            {/* <div>{dataList}</div> */}

            {/* 강사님 주석
                data state를 순회하면서 h2 요소에 각 값을 보여주고,
                onDoubleClick 속성으로 onRemoveData 함수를 호출하며 현재 사용되고 있는 요소의 
                id값을 매개변수로 넘겨주고 있음 
                dataList는 JSX문 안에서 삽입됨
            */}

            {data.map((d) => (
                <h2 key={d.id} onDoubleClick={() => onRemoveData(d.id)}>
                    {d.user} : {d.email}
                </h2>
            ))}
        </>
    );
}
