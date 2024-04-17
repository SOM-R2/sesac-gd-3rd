import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">홈으로</Link>
                <br />
                <Link to="/board">게시판</Link>
                <br />
                <Link to="/profile">마이페이지</Link>
            </nav>
        </header>
    );
}
