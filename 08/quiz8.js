
const $btn = document.getElementById('btn');
const $result = document.getElementById('box');
const $min = document.getElementById('min');
const $max = document.getElementById('max');

let randomNum = 0;
var count = 0;

function random(value) {
    $btn.disabled = true;
    var sample = setInterval(animation, 3);
    randomNum = Math.floor(Math.random() * parseInt($max.value)) + parseInt($min.value);

    function animation() {
        count++;
        if (count > parseInt(randomNum)) {
            clearInterval(sample);
            $btn.disabled = false;
        }
        $result.innerHTML = parseInt(count) + "";
    }
    count = 0;
}



$btn.addEventListener('click', random);

