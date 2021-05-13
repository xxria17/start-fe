
// 평균 구하는 모듈
function avg(...args) {

    let res = 0;
    let size = args.length;

    function mean(numbers) {
        numbers.forEach((num) => {
            if (!isNaN(num)) {
                res += num;
            } else if (Array.isArray(num)) {
                mean(num);
            } else {
                size--;
            }
        });
    }

    mean(args);

    let answer = res / size;
    return answer;
}

export default avg;