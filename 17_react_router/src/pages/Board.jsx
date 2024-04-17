import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function Board() {
    const navigation = useNavigate();

    return (
        <>
            <Header />
            <h1>여기는 Board Page 컴포넌트</h1>
            <div
                onClick={() => {
                    // navigation('/board/1');  // -> http://localhost:3000/board/1
                    // navigation의 인자로 슬래시 없이 어떤 값을 보내면
                    // 현재 주소 뒤에 '/ 작성한 값' 으로 이동
                    navigation('1'); // -> http://localhost:3000/board/1

                    // 앞에 슬래시 작성 시 루트 주소값 다음에 작성한 값 주소로 이동
                    // navigation('/1');  // http://localhost:3000/1
                }}
            >
                1번 게시글 보러 가기
            </div>
        </>
    );
}
