
//toggle class active
const navigationCon = document.querySelector('.navigation-container');
//ketika menu  di klik
document.querySelector('#hamburger').onclick = () => {
    navigationCon.classList.toggle('active');
};


//klik di luar sidebar untu menghilangkan navigation
const menu = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navigationCon.contains(e.target)) {
        navigationCon.classList.remove('active');
    }

});

//home-start
function animateNumber(id, target, duration) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const increment = target > start ? 1 : -1;

    const timer = setInterval(() => {
        start += increment;
        document.getElementById(id).textContent = start;

        if (start === target) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = () => {
    animateNumber('client-satisfaction', 100, 2000);
    animateNumber('projects-done', 690, 2000);
    animateNumber('years-experience', 8, 2000);
};




//star
const starBox = document.querySelector('.star');

starBox.addEventListener('click', () => {
    starBox.classList.toggle('active');
});

//highlight-mark
class ColorChanger {
    constructor(elementId, colors, interval) {
        this.element = document.getElementById(elementId);
        this.colors = colors;
        this.currentIndex = 0;
        this.interval = interval;

        this.startChangingColors();
    }

    changeColor() {
        this.element.style.color = this.colors[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    }

    startChangingColors() {
        setInterval(() => this.changeColor(), this.interval);
    }
}

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F9FF33', '#FF33F6'];
const colorChanger = new ColorChanger('colorful-text', colors, 1000); // Ganti warna setiap 1 detik