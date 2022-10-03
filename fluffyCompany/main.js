'use strict';

{

    // ハンバーガーメニュー
    {
        const open = document.getElementById('open');
        const overlay = document.querySelector('.overlay');
        const close = document.getElementById('close');
    
        open.addEventListener('click', () => {
            overlay.classList.add('show');
        });
        close.addEventListener('click', () => {
            overlay.classList.remove('show');
        });
        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
        });
    }


    // mainvisual スライダー
    {
        const images = document.querySelectorAll('.slider-img img');
        let i = 1;
    
        setInterval(() => {
            i++;
    
            const image = document.querySelector('.slider-img .active');
    
            image.classList.remove('active');
    
            if(i > images.length) {
                images[0].classList.add('active');
                i = 1;
            } else {
                image.nextElementSibling.classList.add('active');
            }
        },3000)
    }


    //customer review スライド SP
    {
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');;
        const ul = document.querySelector('.cursor-ul');
        const slides = ul.children;
        let currentIndex = 0;

        function moveSlides() {
            const slidesWidth = slides[0].getBoundingClientRect().width;
            ul.style.transform = `translateX(${-1 * slidesWidth * currentIndex}px)`;
        }


        next.addEventListener('click', () => {
            currentIndex++;
            if(currentIndex === slides.length) {
                currentIndex = 0;
            }
            moveSlides();
        });
        prev.addEventListener('click', () => {
            currentIndex--;
            if(currentIndex === -1) {
                currentIndex = 2;
            }
            moveSlides();
        });


        // リサイズ
            window.addEventListener('resize', () => {
                if (window.matchMedia('(min-width: 699px)').matches) {
                        currentIndex = 0;
                        moveSlides();
                }
                moveSlides();
            });

    }
}