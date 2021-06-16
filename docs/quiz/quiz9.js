const $url = document.querySelector('#url');
const $button = document.querySelector('#btn');
const $log = document.querySelector('#log');

function $fetch() {
    if (!$url.value) {
        window.alert('url를 입력하세요');
    } else {
        fetch($url.value)
            .then(res => {
                res.text().then(text => {
                    $log.value = text;
                });
            })
            .catch(error => {
                $log.value = error;
            });
    }
}

$button.addEventListener('click', $fetch);
$url.addEventListener('keypress', $fetch);