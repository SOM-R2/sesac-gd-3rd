// import '../styles/basicCss.css';

export default function BasicCss() {
    const divStyle = {
        backgroundColor: 'navy',
        color: 'pink',
        fontWeight: 'bold',
        textAlign: 'center',
    };
    return (
        <>
            <h1>일반 css 사용</h1>
            <div
                style={{
                    backgroundColor: 'pink',
                    color: 'navy',
                    fontSize: 25,
                    textAlign: 'right',
                }}
            >
                인라인 스타일 적용 (style에 직접 작성)
            </div>
            <div style={divStyle}>
                인라인 스타일 적용 (style에 객체 변수 전달)
            </div>

            <br />

            <h3>CSS 파일 사용해서 스타일링</h3>
            <div className="box">.box</div>

            <div className="container">
                <div className="item item1">.item .item1</div>
                <div className="item">.item </div>
            </div>
        </>
    );
}
