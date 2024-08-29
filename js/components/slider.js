function slider({container, slide, nextArrow, prevArrow, totalCounter, currCounter, wrapper, field}) {
    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prevSlide = document.querySelector(prevArrow),
          nextSlide = document.querySelector(nextArrow),
          curSlide = document.querySelector(currCounter),
          totalSlide = document.querySelector(totalCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        totalSlide.textContent = `0${slides.length}`;
        curSlide.textContent = `0${slideIndex}`
    } else {
        totalSlide.textContent = slides.length;
        curSlide.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.tlansition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    })

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);

        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    nextSlide.addEventListener('click', () => {
        if (offset == +width.slice(0, -2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, -2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        
        zeroIfLessThenTen();
        dotsOpacity();
    })

    prevSlide.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, -2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, -2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        
        zeroIfLessThenTen();
        dotsOpacity();
    })

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, -2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            zeroIfLessThenTen();
            dotsOpacity();
        })
    })

    function dotsOpacity() {
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[slideIndex - 1].style.opacity = 1;
    }

    function zeroIfLessThenTen() {
        if (slides.length < 10) {
            curSlide.textContent = `0${slideIndex}`;
        } else {
            curSlide.textContent = slideIndex;
        }
    }

    // showSlide(slideIndex);

    // if (slides.length < 10) {
    //     totalSlide.textContent = `0${slides.length}`;
    // } else {
    //     totalSlide.textContent = slides.length;
    // }

    // function showSlide(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(slide => {
    //         slide.style.display = 'none';
    //     })

    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         curSlide.textContent = `0${slideIndex}`;
    //     } else {
    //         curSlide.textContent = slideIndex;
    //     }
    // }

    // function plusSlide(n) {
    //     showSlide(slideIndex += n);
    // }

    // prevSlide.addEventListener('click', () => {
    //     plusSlide(-1);
    // })

    // nextSlide.addEventListener('click', () => {
    //     plusSlide(1);
    // })
}

export default slider;