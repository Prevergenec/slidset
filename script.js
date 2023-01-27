'use strict';

window.addEventListener('DOMContentLoaded', () => {
	
	let position = 0;
    const sidesToShow = 5,
          sidesToScroll = 3,
          sliderContainer = document.querySelector('.slider-container'),
          sliderTrack = document.querySelector('.slider-track'),
          sliderItem = document.querySelectorAll('.slider-item'),
          sliderItemCount = sliderItem.length,
          btnPrev = document.querySelector('.btn-prev'),
          btnNext = document.querySelector('.btn-next'),
          itemWidth = sliderContainer.clientWidth / sidesToShow,
          movePosition = sidesToScroll * itemWidth;
          
    sliderItem.forEach((item, i) => {
        item.style.minWidth = itemWidth;
    });

    btnPrev.addEventListener('click', () => {
        const itemLeft = Math.abs(position) / itemWidth;

        position += itemLeft >= sidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkButtons();
    });

    btnNext.addEventListener('click', () => {
        const itemLeft = sliderItemCount - (Math.abs(position) + sidesToShow * itemWidth) / itemWidth;

        position -= itemLeft >= sidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkButtons();
    });

    function setPosition() {
        sliderTrack.style.transform = `translateX(${position}px)`;
    }

    function checkButtons() {
        (position == 0) ? btnPrev.disabled = true : btnPrev.disabled = false;

        (position <= -((sliderItemCount - sidesToShow) * itemWidth)) ? btnNext.disabled = true : btnNext.disabled = false;
        //btnNext.disabled = true;
    }
        
    checkButtons();

});