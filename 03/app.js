console.log(window.outerWidth);

console.log(window.name);

//window.open("https://www.daum.net");

//var debug = document.getElementById('debug');
// console.log(debug);

// var box = document.querySelector('#debug');
// console.log(box);

//var box = document.querySelector('.box');
//var box2 = document.querySelectorAll('.box');
//console.log(box);

// var div = document.createElement('div');
// // console.log(div);
// div.style.border = '1px solid #000';
// div.innerHTML = 'Hello!';
//
// document.body.appendChild(div);

const span = document.createElement('span');
const textNode = document.createTextNode('hello!');
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);