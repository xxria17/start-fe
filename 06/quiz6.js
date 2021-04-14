const $btn = document.getElementById('btn');
const $result = document.getElementById('result');

function gugudan(value) {
    $result.innerHTML = '';
    const text = document.getElementById('num').value;
    value = parseInt(text);
    if (!Number.isInteger(value)) {
        alert('숫자를 입력해주세요.');
        return;
    }
    for (i = 1; i < 10; i++) {
        $result.innerHTML += `${value} x ${i} = ${value * i}<br>`;
    }
}

$btn.addEventListener('click', gugudan);
