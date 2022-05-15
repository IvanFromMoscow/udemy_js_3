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
        if (this.block) {
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
        }
        
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
       
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    bindTriggers() {
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
           document.querySelectorAll('a.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
       });
       document.querySelectorAll('a.nextmodule').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.plusSlides(1);
        });
   });
    }
    render() {
         if (this.container) {
           
               this.bindTriggers();
               this.showSlides(this.slideIndex);
       
        } 
        
   
    }
}