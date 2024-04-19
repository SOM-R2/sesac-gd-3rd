import styled, { keyframes } from 'styled-components';

export default function StyledComponent() {
    const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(180deg);
        width: 100px;
        height: 100px;
    }
    100% {
        transform: rotate(360deg);
    }
   `;

    const MyDiv = styled.div`
        border: 1px solid gray;
        padding: 10px;
        margin: 10px 0;
    `;
    const MyDiv2 = styled.div`
        border: 1px solid red;
        padding: 20px;
        margin: 20px 0;
    `;

    const Child = styled.span`
        background-color: pink;
        color: purple;

        &:hover {
            color: blue;
            animation: ${rotate} 10s infinite linear;
        }

        @media screen and (min-width: 720px) {
            background-color: lightblue;
        }
    `;

    const RotateDiv = styled.div`
        width: 50px;
        height: 50px;
        background-color: ${(props) =>
            props.bgcolor ? props.bgcolor : 'orange'};
        animation: ${rotate} 1s infinite linear;
    `;
    return (
        <>
            <div>일반 div</div>
            <MyDiv>style-components 사용해 만든 MyDiv</MyDiv>
            <MyDiv2>style-components 사용해 만든 MyDiv2</MyDiv2>
            <Child>Child 컴포넌트 </Child>
            {/* <RotateDiv></RotateDiv>
            <RotateDiv bgcolor="gold"></RotateDiv> */}
        </>
    );
}
