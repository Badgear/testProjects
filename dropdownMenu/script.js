let menu = document.querySelector('.menu');
document.querySelector('.menuToggle').onclick = function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    }
