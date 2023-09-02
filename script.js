//CONSTANTS
const   slidesToScroll = 1,

        slider = document.querySelector('.slider'),
        track = document.querySelector('.slider__line'),
        itemsCount = document.querySelectorAll('.slider__item').length,

        btnPrev = document.querySelector('.slider__btn-prev'),
        btnNext = document.querySelector('.slider__btn-next'),
        dots = document.querySelectorAll('.slider__dot'),

        itemWidth = 400,
        muvePosition =  slidesToScroll * itemWidth;

let position = 0,
    sliderIndex = 0,
    slidesToShow = 3;

//FUNCTIONS
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.classList.toggle('disabled', position === 0);
    btnNext.classList.toggle('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

const thisSlide = (index) => {
    dots.forEach(item => item.classList.remove('active'));
    dots[index].classList.add('active');
}

//const swipeStart =
//const swipeAction =
//const swipeEnd =

//EVENTLISTENERS
btnNext.addEventListener ('click', () => {
    const muveLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= muveLeft >= slidesToScroll ? muvePosition : muveLeft * itemWidth;
    sliderIndex++;
    setPosition();
    checkBtns();
    thisSlide(sliderIndex);
});

btnPrev.addEventListener ('click', () => {
    const muveLeft = itemsCount - Math.abs(position)/ itemWidth;
    position += muveLeft >= slidesToScroll ? muvePosition : muveLeft * itemWidth;
    sliderIndex--;
    setPosition();
    checkBtns();
    thisSlide(sliderIndex);
});