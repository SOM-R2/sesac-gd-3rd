interface Props {
    name: string;
    age?: number; // age props를 옵셔널하게 받을 수 있음
}

export default function PropsTypes({ name, age }: Props) {
    return (
        <>
            <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
            <div>name: {name}</div>
            {/* && 연산자로 조건부 랜더링(age가 없을 때 로직이 아예 없기때문에 삼항연산자보다 &&연산자가 더 적합 ) */}
            {age && <div>age: {age}</div>}
        </>
    );
}

// export default function PropsTypes(props: Props) {
//     const { name, age } = props;
//     const name = props.name;
//     const age = props.age;
//     return (
//         <>
//             <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//             <div>name: {name}</div>
//             <div>age: {age}</div>
//         </>
//     );
// }
