function createSlider(container) {
    const repeat = false;
    const noArrows = false;
    const noBullets = false;

    const containerArrows = container.querySelector('.slider-content');
    const slide = container.querySelectorAll('.slider-single');
    const slideTotal = slide.length - 1;
    let slideCurrent = -1;

    function initBullets() {
        if (noBullets) return;
        const bulletContainer = document.createElement('div');
        bulletContainer.classList.add('bullet-container');
        slide.forEach((elem, i) => {
            const bullet = document.createElement('div');
            bullet.classList.add('bullet');
            bullet.id = `bullet-index-${i}`;
            bullet.addEventListener('click', () => {
                goToIndexSlide(i);
            });
            bulletContainer.appendChild(bullet);
            elem.classList.add('proactivede');
        });
        container.appendChild(bulletContainer);
    }

    function initArrows() {
        if (noArrows) return;

        const leftArrow = document.createElement('a');
        const imgLeft = document.createElement('img');
        imgLeft.src = './assets/icons/arrow-left.svg';
        imgLeft.alt = 'Flecha izquierda';
        leftArrow.classList.add('slider-left');
        leftArrow.appendChild(imgLeft);
        leftArrow.addEventListener('click', slideLeft);

        const rightArrow = document.createElement('a');
        const imgRight = document.createElement('img');
        imgRight.src = './assets/icons/arrow-right.svg';
        imgRight.alt = 'Flecha derecha';
        rightArrow.classList.add('slider-right');
        rightArrow.appendChild(imgRight);
        rightArrow.addEventListener('click', slideRight);

        containerArrows.appendChild(leftArrow);
        containerArrows.appendChild(rightArrow);
    }

    function slideInitial() {
        initBullets();
        initArrows();
        setTimeout(() => {
            slideRight();
        }, 500);
    }

    function updateBullet() {
        if (!noBullets) {
            container.querySelectorAll('.bullet').forEach((elem, i) => {
                elem.classList.remove('active');
                if (i === slideCurrent) {
                    elem.classList.add('active');
                }
            });
        }
        checkRepeat();
    }

    function checkRepeat() {
        if (!repeat) {
            const left = container.querySelector('.slider-left');
            const right = container.querySelector('.slider-right');
            if (slideCurrent === slideTotal) {
                slide[0].classList.add('not-visible');
                slide[slideTotal].classList.remove('not-visible');
                right?.classList.add('not-visible');
                left?.classList.remove('not-visible');
            } else if (slideCurrent === 0) {
                slide[slideTotal].classList.add('not-visible');
                slide[0].classList.remove('not-visible');
                left?.classList.add('not-visible');
                right?.classList.remove('not-visible');
            } else {
                slide[0].classList.remove('not-visible');
                slide[slideTotal].classList.remove('not-visible');
                left?.classList.remove('not-visible');
                right?.classList.remove('not-visible');
            }
        }
    }

    function slideRight() {
        slideCurrent = (slideCurrent < slideTotal) ? slideCurrent + 1 : 0;

        const preactiveSlide = (slideCurrent > 0) ? slide[slideCurrent - 1] : slide[slideTotal];
        const activeSlide = slide[slideCurrent];
        const proactiveSlide = (slideCurrent < slideTotal) ? slide[slideCurrent + 1] : slide[0];

        updateSlides(preactiveSlide, activeSlide, proactiveSlide);
        updateBullet();
    }

    function slideLeft() {
        slideCurrent = (slideCurrent > 0) ? slideCurrent - 1 : slideTotal;

        const proactiveSlide = (slideCurrent < slideTotal) ? slide[slideCurrent + 1] : slide[0];
        const activeSlide = slide[slideCurrent];
        const preactiveSlide = (slideCurrent > 0) ? slide[slideCurrent - 1] : slide[slideTotal];

        updateSlides(preactiveSlide, activeSlide, proactiveSlide);
        updateBullet();
    }

    function updateSlides(preactive, active, proactive) {
        slide.forEach((s) => {
            s.classList.remove('preactive', 'active', 'proactive', 'preactivede', 'proactivede');
            s.classList.add('proactivede');
        });
        preactive.classList.replace('proactivede', 'preactive');
        active.classList.replace('proactivede', 'active');
        proactive.classList.replace('proactivede', 'proactive');
    }

    function goToIndexSlide(index) {
        const sliding = (slideCurrent > index) ? slideLeft : slideRight;
        while (slideCurrent !== index) {
            sliding();
        }
    }

    slideInitial();
}

document.querySelectorAll('.slider-container').forEach((container) => {
    createSlider(container);
});
