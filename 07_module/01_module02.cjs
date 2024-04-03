// commonjs
// 선언과 동시에 exports 시키기

// const 키워드 사용 x
exports.colors2 = ['분홍색', '파란색', '노란색'];

exports.sayName2 = function (name) {
    console.log('제 이름은 ' + name + '이 함수는 sayName2 함수');
};
