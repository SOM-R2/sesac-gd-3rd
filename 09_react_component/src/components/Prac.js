export default function Prac() {
    const helloStr = 'Hello, this is first practice';
    return (
        <div
            onClick={() => {
                alert('클릭!');
            }}
            style={{ marginTop: 32, backgroundColor: 'pink' }}
        >
            {helloStr}
        </div>
    );
}
