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
    const firstSlide = position === 0;
    const lastSlide = position <= -(itemsCount - slidesToShow) * itemWidth;
    const stopScroll = () => {
        btnPrev.classList.toggle('disabled', firstSlide);
        btnNext.classList.toggle('disabled', lastSlide);
    }
    btnPrev.disabled = firstSlide;  //не отрабатывает на самом старте, добавила проверку в событие
    btnNext.disabled = lastSlide;

    stopScroll ();
};

const checkDots = () => {
    dots.forEach(item => item.classList.remove('active'));
    dots[index].classList.add('active');
};

const thisSlide = (index) => {
    dots.forEach(item => item.classList.remove('active'));
    dots[index].classList.add('active');
}

//EVENTLISTENERS
btnNext.addEventListener ('click', () => {
    //ограничения на количество слайдов в прокрутке
    const slidesToMove = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= slidesToMove >= slidesToScroll ? muvePosition : slidesToMove * itemWidth;
    sliderIndex++;
    setPosition();
    checkBtns();
    thisSlide(sliderIndex);
});

btnPrev.addEventListener ('click', () => {
    const slidesToMove = itemsCount - Math.abs(position)/ itemWidth;
    if (position !== 0) {
        //ограничения на количество слайдов в прокрутке
        position += slidesToMove >= slidesToScroll ? muvePosition : slidesToMove * itemWidth;
        sliderIndex--;
        setPosition();
        checkBtns();
        thisSlide(sliderIndex);}
});
//переключатели по точкам
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = -index * itemWidth;
        setPosition();
        thisSlide(index);
        checkBtns();
    });
})