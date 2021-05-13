import avg from "./quiz09";
import random from "./random";

console.log(avg(1, 2, 3, 4));
console.log(avg(1, 2));
console.log(avg(1, 2, 3, 4, 5, 6));
console.log(avg(1, 'a', 2));
console.log(avg([1, 2, 3]));

console.log(random(100, 200));
console.log(random(1, 'a'));
console.log(random(5));