import { Routes, Route, Link } from 'react-router-dom';
import Test from './components/Test';
import Board from './pages/Board';
import Profile from './pages/Profile';
import BoardDetail from './pages/BoardDetail';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';

function App() {
    return (
        <div className="App">
            {/* 
                라우팅 연습
            */}
            {/*
             <h1>routing!</h1>
            <Routes>
                <Route path="/test" element={<Test />} />
            </Routes> 
            */}

            {/* Routes 밖에 선언 : 주소랑 관계없이 계속 랜더링되어있는 상태 */}
            {/* 
            <header>
                <nav>
                    <Link to="/">홈으로</Link>
                    <br />
                    <Link to="/board">게시판</Link>
                    <br />
                    <Link to="/profile">마이페이지</Link>
                </nav>
            </header>
             */}
            {/* 
            라우팅 연습 2
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/board" element={<Board />} />
                <Route path="/board/1" element={<BoardDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes> 
            */}

            <Header />
            {/* 라우팅하기 */}
            {/* Home 컴포넌트 경로 : /*/}
            {/* ProductsPage 컴포넌트 경로 : /products */}
            {/* ProductDetailPage 컴포넌트 경로 : /products/1 */}
            {/* PhotoPage 컴포넌트 경로 : /photos */}
            {/* 이외 모든 페이지 NotFound 컴포넌트*/}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/1" element={<ProductDetailPage />} />
                <Route path="/photos" element={<PhotoPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
