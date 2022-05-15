export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const elem = document.createElement('a');
        elem.setAttribute('href', 'path');
        elem.setAttribute('download', 'nice_picture');
        elem.style.display = 'none';
        document.body.appendChild(elem);
        // elem.addEventListener('click', (e) => {
        //     e.stopPropagation();
        //     e.preventDefault();
        // })
        elem.click();
        document.body.removeChild(elem);
    }
    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.downloadItem(this.path);
            });
        });
    }
}