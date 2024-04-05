import FuncProps from './components/FuncProps.jsx';
import ClassProps from './components/ClassProps.jsx';
import './App.css';
import FoodProps from './components/FoodProps.jsx';
import BookProps from './components/BookProps.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
    // const sayHi = () => {
    //     alert('안녕?');
    // };

    const products = [
        {
            id: 1,
            name: '노트북',
            price: 1000000,
            image: './img/laptop.jpg',
            description: '고성능 노트북입니다.',
        },
        {
            id: 2,
            name: '스마트폰',
            price: 800000,
            image: './img/smartphone.jpg',
            description: '최신 스마트폰입니다.',
        },
        {
            id: 3,
            name: '유선키보드',
            price: 20000,
            image: './img/keyboard.jpg',
            description: '유선 키보드입니다.',
        },
        {
            id: 4,
            name: '블루투스 키보드',
            price: 30000,
            image: './img/bluetooth-keyboard.jpg',
            description: '사용이 편리한 무선 키보드입니다.',
        },
        {
            id: 5,
            name: '기계식 키보드',
            price: 180000,
            image: './img/mechanical-keyboard.jpg',
            description: '소리가 매력적인 기계식 키보드입니다.',
        },
        {
            id: 6,
            name: '마우스',
            price: 50000,
            image: './img/mouse.jpg',
            description: '편리한 이용이 가능한 마우스입니다.',
        },
        {
            id: 7,
            name: '게이밍 마우스',
            price: 80000,
            image: './img/gaming-mouse.jpg',
            description: '게이밍용 마우스입니다.',
        },
        {
            id: 8,
            name: '32인치 모니터',
            price: 300000,
            image: './img/monitor-32.jpg',
            description: '32인치의 모니터입니다.',
        },
        {
            id: 9,
            name: '20인치 모니터',
            price: 180000,
            image: './img/monitor-20.jpg',
            description: '20인치의 키보드입니다.',
        },
    ];

    return (
        <div className="App">
            {/* <FuncProps weather="sunny" feeling="happy" />
            {/* defaultProps 사용 */}
            {/* <FuncProps feeling={true} /> */}

            {/* PropTypes 사용 */}
            {/* props로 전달하는 값이 문자열인 경우에는 ''(따옴표)로 감싸 전달 */}
            {/* 이외의 데이터 타입은 {}(중괄호)로 감싸 전달 */}
            {/* <FuncProps feeling="exciting" /> */}

            {/* props.children */}
            {/* 문자열 전달 */}
            {/* <FuncProps>안녕?</FuncProps> */}
            {/* 함수 전달 */}
            {/* <FuncProps>{sayHi}</FuncProps> */}

            {/* 요소 전달 */}
            {/* <FuncProps>
                <div>안녕안녕</div>
                <div>자니?</div>
            </FuncProps> */}

            {/* ----------------------------------------- */}
            {/* class 컴포넌트에서의 props 사용 */}
            {/* <ClassProps drink="아메리카노" payment="카드" price={4000} /> */}

            {/* default props 사용 */}
            {/* <ClassProps drink="아인슈페너" payment="현금" /> */}

            {/* PropTypes 사용 */}
            {/* <ClassProps drink={15900} payment="현금" /> */}

            {/* isRequired 사용 */}
            {/* <ClassProps drink="레몬에이드" /> */}

            {/* ------- -실습 1---------- */}
            {/* <FoodProps food="치킨" description="닭 튀김 요리"></FoodProps> */}
            {/* ------- -실습 2---------- */}
            {/* <BookProps></BookProps> */}

            {/* -------- 연습 ---------- */}
            {products.map((prod) => (
                <ProductList prodData={prod} key={prod.id} />
            ))}
        </div>
    );
}

export default App;
