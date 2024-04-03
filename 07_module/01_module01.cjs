// commonjs
// 한 번에 module.exports 시키기

const colors = ['pink', 'blue', 'yellow'];

const sayHi = function () {
    console.log('안녕하세요! 이 함수는 sayHi 함수 입니다. ');
};

function sayName(name) {
    console.log('my name is ' + name + '이 함수는 sayName 함수 입니다.');
    sayHi();
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getBornYear() {
        return new Date().getFullYear() - this.age;
    }
}

// 함수 내보낼때 () 쓰지 않음(호출하는 것이 아니라 함수를 내보내는 것이기 떄문에 )
// 다른 파일에서 사용할 것들만 내보내기 하기
module.exports = { colors, sayName, Person };
