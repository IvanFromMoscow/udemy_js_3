import Difference from "./modules/difference";
import Download from "./modules/download";
import Forms from "./modules/forms";
import VideoPlayer from "./modules/playvideo";
import ShowInfo from "./modules/showInfo";
import MiniSlider from "./modules/slider/slider-mini";
import MainSlider from "./modules/slider/slider_main";


window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page', block: '.modules .hanson'});
    slider.render();
    const modulePageSlider = new MainSlider({ btns:'.next', container: '.moduleapp'});
    modulePageSlider.render();
    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider', 
        prev: '.showup__prev', 
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();
    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider', 
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();
    const feedSlider = new MiniSlider({
        container: '.feed__slider', 
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();
    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Forms('.form', 'assets/question.php').init();

    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});

