const $box = document.querySelector('.box');
const $box2 = document.querySelector('.box1');

const offset = {x: 0, y : 0};
let isDown = false;

$box.addEventListener('mousedown', boxDown);
$box2.addEventListener('mousedown', boxDown);
window.addEventListener('mouseup', boxUp, false);

function boxDown(event) {
    isDown = true;
    offset.x = event.target.offsetLeft - event.clientX;
    offset.y = event.target.offsetTop - event.clientY;

    window.addEventListener('mousemove', boxMove);
}

function boxMove(e) {
    if (!isDown) {
        return;
    }

    e.target.style.left = `${e.clientX + offset.x}px`;
    e.target.style.top = `${e.clientY + offset.y}px`;
}

function boxUp() {
    isDown = false;
    document.removeEventListener('mousemove', boxMove, true);
}