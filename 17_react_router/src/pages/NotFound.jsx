import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <h1>이 주소는 잘못된 경로입니다.🚨</h1>
            <br />
            <Link to="/">홈으로 돌아가기</Link>
        </>
    );
}
