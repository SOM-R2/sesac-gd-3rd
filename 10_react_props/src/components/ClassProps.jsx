import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassProps extends Component {
    render() {
        console.log(this.props);
        /*
            this.props = 객체 형태
            {
                drink: '아메리카노',
                payment: '카드'
            }
        */

        return (
            <>
                <h1>클래스형 컴포넌트에서의 props 사용</h1>
                <div>
                    {/* {' '}는 프리티어가 자동으로 띄어쓰기 작성해줌(띄어쓰기 작성하고싶을 때 사용하면됨) */}
                    주문하신 음료는 {this.props.drink}이고, 결제는{' '}
                    {this.props.payment} 맞으실까요?
                </div>
                <div>결제는 {this.props.price}원 입니다.</div>
            </>
        );
    }

    // 클래스형 컴포넌트에서 props 관련 속성을 추가하는 방법 1
    // static 키워드(예약어) 사용해 컴포넌트 선언 내부에서 작성(render위나 render아래에 작성하기 , render메서드 안에만 작성안하면됨)
    // static defaultProps 선언은 render밖 Class 안에 작성
    // price props 가 undefined라면 기본 값을 8500 사용
    static defaultProps = {
        price: 8500,
    };
}

// 클래스형 컴포넌트에서 props 관련 속성을 추가하는 방법 2
// 클래스 컴포넌트 선언 밖에서 점 접근법으로 props 속성을 지정
// propTypes 속성 추가 (static 사용안하고 밖에서 타입 지정하는 예시)
// drink, payment, props는 string / price props는 number로 타입 제한
ClassProps.propTypes = {
    drink: PropTypes.string,
    payment: PropTypes.string.isRequired, // payment props는 필수 값으로 지정
    price: PropTypes.number,
};
