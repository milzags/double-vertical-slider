const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', changeSlide('up'))
downButton.addEventListener('click', changeSlide('down'))

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex += 1;
        if (activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`

}