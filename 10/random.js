function random(min, max) {
    if (!isNaN(min) && max === undefined) {
        let randomNum = Math.random() * min;
        return parseInt(randomNum, 10);
    }

    if (isNaN(min) || isNaN(max)) {
        return -1;
    }

    let result = parseInt(Math.random() * (max - min) + min, 10);
    return result;
}

export default random;