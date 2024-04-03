// default 키워드 사용해 내보내기

// 제일 마지막에 export 하기
// function sayStauts(status) {
//     console.log(`now I'm ${status}.`);
// }

// export default sayStauts;

// 바로 export 하기 (이때, 함수에 화살표 함수 사용해도됨)
export default function sayStatus2(status) {
    // export defualut sayStatus2 () => {}
    console.log(`now I'm not ${status}`);
}
