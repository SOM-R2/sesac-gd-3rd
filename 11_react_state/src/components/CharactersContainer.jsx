// import { useState } from 'react';
// export default function CharactorsContainer([name]) {
//     const [characters, setCharacters] = useState([
//         {
//             id: 1,
//             name: '뽀로로',
//             age: '7',
//             nickName: '사고뭉치',
//         },
//         {
//             id: 2,
//             name: '루피',
//             age: '5',
//             nickName: '공주님',
//         },
//         {
//             id: 3,
//             name: '크롱',
//             age: '4',
//             nickName: '장난꾸러기',
//         },
//     ]);

//     // selectedCharacter state 선언

//     // handleClick 함수(인자: 선택된 버튼의 name 값)
//     // characters 배열에서 인자로 받은 name의 값과 동일한 요소를
//     // selectedCharacter state에 저장

//     return (
//         <>
//             {/* <button>뽀로로</button>
//             <button>루피</button>
//             <button>크롱</button> */}

//             {/* charactoers 배열 순회하며 버튼 랜더링 하기*/}

//             {/* 선택된 캐릭터 정보를 props 전달하기 */}
//             {/* selectedCharacter */}

//         </>
//     );
// }

import { useState } from 'react';
import CharacterInfo from './CharacterInfo';

export default function CharactersContainer() {
    // 사용자의 데이터가 담긴 객체의 배열
    const [characters, setCharacters] = useState([
        {
            id: 1,
            name: '뽀로로',
            age: '7',
            nickName: '사고뭉치',
        },
        {
            id: 2,
            name: '루피',
            age: '5',
            nickName: '공주님',
        },
        {
            id: 3,
            name: '크롱',
            age: '4',
            nickName: '장난꾸러기',
        },
    ]);

    // selectedCharacter state 선언

    // 내 답
    //  const [selectedCharacter] = useState(setCharacters(selectedCharacter));

    //강사님 답
    // 선택된 값을 넘기기 위해 선택된 캐릭터라는 구조분해 할당 상태 const를 만듦 ! (처음엔 선택된게 없으므로 기본값으로 null이라는 값을 넣어둠으로써 선택된게 없다는 걸 표시함)
    // 선택된 케릭터의 정보를 객체 형태로 저장할 예정
    // 조건 중에서 선택된 캐릭터가 없을 떄 CharacterInfo 컴포넌트를 랜더링 하지 말라는 조건이 있으므로
    // 초기 값을 null로 주어 해당 state로 조건부 랜더링까지 할 수 있도록 작성(다른 state를 사용하지 않음)
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    // handleClick 함수 (인자: 선택된 버튼의 name 값)
    // 내 답
    // const handleClick = (name) => {
    //     selectedCharacter = characters.find(name);
    // };

    // 강사님 답
    const handleClick = (name) => {
        const selected = characters.find(
            (character) => character.name === name
        );
        console.log(selected);
        setSelectedCharacter(selected);
    };
    // characters 배열에서 인자로 받은 name의 값과 동일한 요소를
    // selectedCharacter state에 저장

    return (
        <div>
            {/* characters 배열 순회하며 버튼 렌더링 하기 */}
            {/*
                내답
               {characters.map((character) => {
                <button>{character.name}</button>;
                })}
            */}

            {characters.map((character) => (
                <button
                    key={character.id}
                    onClick={() => handleClick(character.name)}
                >
                    {character.name}
                </button>
            ))}
            {/* 선택된 캐릭터 정보를 props로 전달하기 */}
            {/* selectedCharacter state의 값이 없는 경우 CharactorInfo 컴포넌트 렌더링 X , 조건부 랜더링 */}
            {selectedCharacter && (
                <CharacterInfo characterInfo={selectedCharacter} />
            )}
        </div>
    );
}
