import cat from '../assets/cat.jpeg';

export default function BookProps() {
    return (
        <>
            <h2>이번주 베스트셀러</h2>
            <img src={cat} alt="고양이" style={{ width: 150, height: 200 }} />
            <h3>고양이의 하루는 4시 40분에 시작된다.</h3>
            <p>저자:</p>
            <p>판매가:</p>
            <p>구매:김유진</p>
        </>
    );
}
