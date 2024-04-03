import { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return <h1>클래스형 컴포넌트</h1>;
    }
}

// 하나의 js에 하나의 컴포넌트만 작성하기 때문에 export 할 떄 default 꼭 작성
export default ClassComponent;
