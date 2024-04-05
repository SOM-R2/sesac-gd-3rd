export default function ProductList({ prodData }) {
    // console.log(props.prodData);
    return (
        <div className="prod-container">
            <div>제품명 : {prodData.name}</div>
            <div>가격 : {prodData.price} 원</div>
        </div>
    );
}
