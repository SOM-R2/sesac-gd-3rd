// 제네릭

function printSomething<T>(x: T): T {
    console.log(x);
    return x;
}

printSomething<string>('hello');
printSomething<number>(1);

// 두 개의 다른 인자 제네릭으로 받기

function getTwoParams<T, K>(x: T, y: K): void {
    console.log(x, y);
}

getTwoParams<number, string>(1, '2');
getTwoParams<string, number>('1', 2);
getTwoParams<null, boolean>(null, true);
getTwoParams<number[], string[]>([1, 2, 3], ['1', '2', '3']);

// ------------------------------------------------

// interface에서 generic
console.log('-------interface에서 generic-------');

interface Phone<T> {
    name: string;
    company: string;
    price: number;
    option: T;
}

const iphone15: Phone<string> = {
    name: 'iphone15',
    company: 'apple',
    price: 130,
    option: 'lightblue',
};

const zplip2: Phone<string[]> = {
    name: 'zplip2',
    company: 'samsung',
    price: 130,
    option: ['black', 'white', 'purple'],
};

// 제네릭으로 넘겨줄 T를 type으로 선언

type IphoneOption = {
    color: string;
    stroage: number;
};

const iphone16: Phone<IphoneOption> = {
    name: 'iphone16',
    company: 'apple',
    price: 180,
    option: {
        color: 'silver',
        stroage: 256,
    },
};
