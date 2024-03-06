// 서버에서 받아 온 데이터
const products = [
    {
        id: 1,
        name: '노트북',
        price: 1000000,
        image: './img/laptop.jpg',
        description: '고성능 노트북입니다.',
    },
    {
        id: 2,
        name: '스마트폰',
        price: 800000,
        image: './img/smartphone.jpg',
        description: '최신 스마트폰입니다.',
    },
    {
        id: 3,
        name: '유선키보드',
        price: 20000,
        image: './img/keyboard.jpg',
        description: '유선 키보드입니다.',
    },
    {
        id: 4,
        name: '블루투스 키보드',
        price: 30000,
        image: './img/bluetooth-keyboard.jpg',
        description: '사용이 편리한 무선 키보드입니다.',
    },
    {
        id: 5,
        name: '기계식 키보드',
        price: 180000,
        image: './img/mechanical-keyboard.jpg',
        description: '소리가 매력적인 기계식 키보드입니다.',
    },
    {
        id: 6,
        name: '마우스',
        price: 50000,
        image: './img/mouse.jpg',
        description: '편리한 이용이 가능한 마우스입니다.',
    },
    {
        id: 7,
        name: '게이밍 마우스',
        price: 80000,
        image: './img/gaming-mouse.jpg',
        description: '게이밍용 마우스입니다.',
    },
    {
        id: 8,
        name: '32인치 모니터',
        price: 300000,
        image: './img/monitor-32.jpg',
        description: '32인치의 모니터입니다.',
    },
    {
        id: 9,
        name: '20인치 모니터',
        price: 180000,
        image: './img/monitor-20.jpg',
        description: '20인치의 키보드입니다.',
    },
];

// 변수는 보통 위에 모아서 작성함!!!
const productList = document.querySelector('#product-list');
const btn = document.querySelector('#search-btn');

// 서버에서 받아온 데이터를 브라우저에 로드함
function displayProducts(products) {
    // 만약 검색을 한 경우에는 원래 있던 요소들을 삭제해야
    // 검색 결과 요소들만 볼 수 있음
    productList.innerHTML = ''; // 상품 목록 초기화
    products.forEach((product) => {
        const productElement = document.createElement('div');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <p>상품 이름: ${product.name}, 가격: ${product.price}원</p>
        `;

        productElement.addEventListener('click', () => {
            window.location.href = `03_detail.html?id=${product.id}`;
            // 쿼리스트링을 사용해 detail.html 파일로 이동하는데,
            // id라는 key로 product.id 값을 함께 전달
        });
        productList.append(productElement);
    });
}

// 검색 결과를 표시하는 함수(바로 실행이 아니라 검색했을 때 실행되어야하기 때문에 함수로 작성)
function searchProducts(keyword) {
    // filter함수는 반환값을 return으로 꼭 줘야함!!! (새로운 배열을 만들기 때문)
    const fiteredProducts = products.filter((product) => {
        //  products.name === keyword  // 이거는 무조건 일치하는 것만 가져옴
        return product.name.includes(keyword);
    });
    console.log(fiteredProducts);
    displayProducts(fiteredProducts);
}

btn.addEventListener('click', () => {
    const keyword = document.querySelector('#search-input').value;
    searchProducts(keyword);
});

displayProducts(products);
