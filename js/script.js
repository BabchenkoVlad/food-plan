import tabs from './components/tabs';
import modal from './components/modal';
import timer from './components/timer';
import cards from './components/cards';
import calculator from './components/calculator';
import forms from './components/forms';
import slider from './components/slider';
import {openModal} from './components/modal';


window.addEventListener("DOMContentLoaded", function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2024-12-01');
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide', 
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
});