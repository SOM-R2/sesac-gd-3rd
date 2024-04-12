// import React, { Component } from 'react';

// export default class HandlerEx extends Component {
//     constructor(props) {
//         super(props);

//         this.handleClick = this.handleClick.bind(this);
//     }
//     state = {
//         msg: 'Hello World!',
//     };

//     handleClick() {
//         this.setState({ msg: 'Goodbye World!' });
//     }
//     render() {
//         return (
//             <>
//                 <div>{this.state.msg}</div>
//                 <button onClick={this.handleClick}>클릭</button>
//             </>
//         );
//     }
// }

// 강사님 답

import { useState } from 'react';

export default function HandlerEx() {
    const [msg, setMsg] = useState('Hello World');
    return (
        <>
            <h2>{msg}</h2>
            <button onClick={() => setMsg('Goodbye World')}>클릭</button>
        </>
    );
}
