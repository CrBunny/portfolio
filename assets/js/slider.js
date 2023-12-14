$(document).ready(function(){
    let sliderPosition = 0; // начальная позиция дорожки
    const sliderContainer = $('.slider-container');
    const sliderTrack = $('.slider-track');
    const sliderItem = $('.slider-item');
    const sliderItemWidth = sliderItem.width();
    const sliderContainerWidth = sliderContainer.width();
    // ширина доріжки визначається як різниця міжд шириною усіх картинок і шириною контейнера
    // різниця потрібна для того, щоб прокрутка не проводилась далі останнього фото
    const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth; 
    const sliderButtonPrev = $('.arrow-left');
    const sliderButtonNext = $('.arrow-right');

    sliderButtonPrev.on('click', function(){
        sliderPosition += sliderItemWidth; // збільшуємо відступ при натисканні назад

        // оскільки відступ завжди буде негативний, потрібно порівняти з нулем, 
        // щоб прибрати пусті прокрутки
        if (sliderPosition > 0) {
            sliderPosition = 0;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });

    sliderButtonNext.on('click', function(){
        sliderPosition -= sliderItemWidth;

        // так як відступи негативні, потрібно порівняти з негативною довжиною доріжки, 
        // щоб прибрати пусті прокрутки
        if (sliderPosition < -sliderTrackWidth) {
            sliderPosition = -sliderTrackWidth;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });


    // сховуємо кнопки prev/next, коли неможна більше крутити
    const sliderButtons = () => {
        if (sliderPosition == 0) {
            sliderButtonPrev.hide();
        } else {
            sliderButtonPrev.show();
        }
        if (sliderPosition == -sliderTrackWidth) {
            sliderButtonNext.hide();
        } else {
            sliderButtonNext.show();
        }
    };
    sliderButtons();
});
