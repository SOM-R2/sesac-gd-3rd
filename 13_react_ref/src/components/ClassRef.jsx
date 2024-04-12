import { Component, createRef } from 'react';

export default class ClassRef extends Component {
    input = createRef();
    // input = document.querySelector('input'); 이렇게 작성하는 것과 위에가 동일한 것임
    localVar = createRef();
    state = {
        state: 0,
    };

    render() {
        return (
            <>
                <h2>클래스형 컴포넌트에서 ref 사용</h2>
                <input type="text" ref={this.input} />
                <button onClick={() => this.input.current.focus()}>버튼</button>

                <br />
                <div>this.localVar.current : {this.localVar.current}</div>
                <div>this.state.state : {this.state.state}</div>
                <button onClick={() => this.localVar.current++}>
                    localVar + 1
                </button>
                <button
                    onClick={() =>
                        this.setState({ state: this.state.state + 1 })
                    }
                >
                    state + 1
                </button>
            </>
        );
    }
}
