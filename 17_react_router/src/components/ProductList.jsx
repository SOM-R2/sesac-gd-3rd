import ProductItem from './ProductItem';

export default function ProductList({ prodData }) {
    return (
        <div>
            {/* 체크박스, 페이지네이션 */}
            {prodData.map((prod) => {
                return <ProductItem key={prod.id} prod={prod} />;
            })}
        </div>
    );
}
