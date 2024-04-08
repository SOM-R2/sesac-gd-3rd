import { Component } from 'react';

export default class ClassState extends Component {
    // 처음 클래스형 컴포넌트가 나왔을 때 state를 사용한 방법
    // constructor(props) {
    //     super(props); // Component 클래스에서 props를 상속

    //     this.state = {
    //         banana: '바나나',
    //     };
    // }

    // 현재 클래스형 컴포넌트에서 state를 사용하는 방법
    // constructor 생성자 함수를 작성하는 대신 state만 바로 작성
    // constructor 생성자 함수를 작성하지 않으면(않아도) 아래를 reacte가 자동으로 아래코드를 실행함
    // constructor(props) {
    //     super(props);
    // }
    state = {
        banana: '바나나', // banana라는 state를 선언하고, 해당 state의 값으로 '바나나'를 저장
    };

    render() {
        const { banana } = this.state;
        return (
            <>
                <h2>클래스형 컴포넌트에서 state 사용하기</h2>
                {/* setState를 쓸때는 바꿀 내용을 위에 선언한 것처럼 객체형으로 인자를 전달해야하고, 그 형태도 키:'값'으로 전달해야함  */}
                <button onClick={() => this.setState({ banana: 'banana' })}>
                    영어로 변경
                </button>
                <div>{this.state.banana}</div>
                <div>{banana}</div>
            </>
        );
    }
}
