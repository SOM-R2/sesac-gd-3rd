// ES6
// 바로 export 시키기

export const animals = ['cat', 'dog', 'rabbit'];

export function showAnimals() {
    animals.forEach((ani) => console.log(ani));
}

// 내 답
// export const addAnimal = (newAni) => {
//     // animals 배열에 인자로 전달받은 newAni를 추가한 후 해당 배열을 반환하는 함수 만들기
//     const newAnimals = animals.push(newAni);
//     return newAnimals;
// };

// 강사님 답
export const addAnimal = (newAni) => {
    // animals 배열에 인자로 전달받은 newAni를 추가한 후 해당 배열을 반환하는 함수 만들기
    animals.push(newAni);
    return animals;

    // 만약 위의 배열에 추가될때 새로운 배열을 만듦(단, 이경우는 계속 쌓이지 않음)

    // const newAnimalsArr = animals; // 위의 ainmals를 받아다가 새로운 배열을 만들기 떄문에 길이가 4개 이상 될 일이 없음
    // newAnimalsArr.push(newAni);
    // return newAnimalsArr;
};
