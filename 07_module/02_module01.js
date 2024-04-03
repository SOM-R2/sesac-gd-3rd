// ES6
// 한 번에 export 시키기

const flowers = ['cherry blossom', 'rose', 'tulip'];

function getFlowersLength() {
    console.log(flowers.length);
}

function getFlower(idx) {
    if (idx >= flowers.length || idx < 0) return 'x';
    return flowers[idx];
}

export { flowers, getFlowersLength, getFlower };
