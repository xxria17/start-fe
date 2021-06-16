const red = 'red';
const boxClassName = 'box';
let isHidden = false;
const hiddenStyle = 'display: none;';

function getBoxes() {
    return document.querySelectorAll('.box');
}

function toRed() {
    const addClass = ($box) => {
        $box.classList.add(red);
    };
    getBoxes().forEach(addClass);
}

function addBox() {
    const $box = document.createElement('div');
    $box.classList.add(boxClassName);

    document.body.appendChild($box);
}

function deleteBox() {
    const $boxes = getBoxes();
    const $box = $boxes.item($boxes.length - 1);
    if ($box) {
        $box.remove();
    }
}

function setText() {
    const text = document.querySelector('.txt').value;

    getBoxes().forEach(($box) => {
        const $text = document.createTextNode(text);
        $box.appendChild($text);
    });
}

function reset() {
    getBoxes().forEach(($box) => {
        $box.remove();
    });
}

function toggle() {
    isHidden = !isHidden;

    getBoxes().forEach(($box) => {
        const style = isHidden ? hiddenStyle : '';
        $box.style = style;
    })
}

function setImg() {
    getBoxes().forEach(($box) => {
        const $img = document.createElement('img');
        $img.src = 'https://i.imgur.com/69NjYBH.png';
        $box.append($img);
    })
}

function doEvent() {
    document.querySelector('.add-red').addEventListener('click', toRed);
    document.querySelector('.add-btn').addEventListener('click', addBox);
    document.querySelector('.delete-btn').addEventListener('click', deleteBox);
    document.querySelector('.text-btn').addEventListener('click', setText);
    document.querySelector('.reset-btn').addEventListener('click', reset);
    document.querySelector('.toggle-btn').addEventListener('click',toggle);
    document.querySelector('.image-btn').addEventListener('click', setImg);
}

doEvent();