export default class Slider {
    constructor({container = null, 
            btns = null, 
            next = null, 
            prev = null, 
            block = null,
            activeClass = '',
            animate,
            autoplay
        } = {}) {
        try {
            this.container = document.querySelector(container);
            this.slides = this.container.children;
        
        this.btns = document.querySelectorAll(btns);
        if (block) {
            this.block = document.querySelector(block);
            this.block.style.opacity = '0';
        }

        this.slideIndex = 1;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        } catch (e) {}
         
    }
   
}