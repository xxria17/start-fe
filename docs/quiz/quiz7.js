
const $box = document.querySelector('.box');
const $bug = document.getElementById('bug');
const $point = document.getElementById('point');
const $life = document.getElementById('life');

let count = 0;
let life = parseInt($life.textContent);
const time = setInterval(moveBug, 1000);

function moveBug() {
    const width = $box.clientWidth - $bug.clientWidth;
    const height = $box.clientHeight - $bug.clientHeight;

    $bug.style.left = `${Math.random() * width}px`;
    $bug.style.top = `${Math.random() * height}px`;
}

function plusPoint(event) {
    count += 1;
    $point.textContent = count;

    event.stopPropagation();
}

function minusLife() {
    life -= 1;
    $life.textContent = life;

    if (life === 0) {
        alert('Game Over');
    }
}

$bug.addEventListener('click', plusPoint);
$box.addEventListener('click', minusLife);