let TSlides = document.querySelectorAll('.slider-item').length;

let currentSlide = 0;

document.querySelector('.slider').style.width =
    `calc(100vw * ${TSlides})`;


function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = TSlides - 1;
    }
    updatingMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (TSlides - 1)) {
        currentSlide = 0;
    }
    updatingMargin();
}

function updatingMargin() {
    let slideSize = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * slideSize);
    document.querySelector('.slider').style.marginLeft = 
        `-${newMargin}px`;
};

setInterval(goNext, 2000)