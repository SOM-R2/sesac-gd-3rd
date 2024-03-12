new TypeIt('#world', {
    speed: 50,
    startDelay: 900,
}).go();

const scrollSection = document.querySelector('.scroll-section');
const path = document.querySelector('.path');
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = calcDashoffset(
    window.innerHeight * 0.05,
    scrollSection,
    pathLength
);

function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - length * ratio;
    console.log('ratio', scrollY);
    console.log('ratio', element.offsetTop);
    console.log('ratio', element.offsetHeight);
    return value < 0 ? 0 : value > length ? length : value;
}

function scrollHandler() {
    const scrollY = window.scrollY + window.innerHeight * 0.05;
    console.log('handler', scrollY);

    path.style.strokeDashoffset = calcDashoffset(
        scrollY,
        scrollSection,
        pathLength
    );
}

window.addEventListener('scroll', scrollHandler);
