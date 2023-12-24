let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
console.log(list)


let active = 0;
let itemLength = items.length - 1;

next.onclick = function(){
    if (active + 1 > itemLength) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = itemLength;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    
    activateDot();

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 5000);
}

function activateDot(){
    let lastActiveDot = document.querySelector('.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}


dots.forEach((li, key) => {
    li.addEventListener('click', function (){
        active = key;
        reloadSlider();
    })
})