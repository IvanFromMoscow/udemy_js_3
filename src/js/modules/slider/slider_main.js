import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns, block) {
        super(btns, block);
    }
    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
        if (n == 3) {   
            this.block.classList.add('animated');
            setTimeout(() => {
                this.block.style.opacity = '1';
                this.block.classList.add('slideInUp');
            }, 3000);
        } else {
            this.block.style.opacity = '0';
            this.block.classList.remove('slideInUp');
        }
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(btn => {
        btn.addEventListener('click', () => {
            this.plusSlides(1);
        });
        btn.parentNode.previousElementSibling.addEventListener('click', e => {
            e.preventDefault();
            this.slideIndex = 1;
            this.showSlides(this.slideIndex);
        });
       });
       this.showSlides(this.slideIndex);
    }
}