import { Link } from 'react-router-dom';

export default function ProductItem({ prod }) {
    return (
        <div>
            {/* localhost:3000/product/1 */}
            {/* <Link to={'/products/' + prod.id}>상세 페이지로 이동</Link> */}
            {/* <Link to={prod.id}>상세 페이지로 이동</Link> */}
            {/* <Link to={prod.id}>상세 페이지로 이동</Link> */}
            <Link to={`/products/${prod.id}`}>상세 페이지로 이동</Link>
            <div>상품명 : {prod.name}</div>
            <div>상세설명 : {prod.body}</div>
        </div>
    );
}
