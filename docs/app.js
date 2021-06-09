(()=>{"use strict";var n={176:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"/* CSS declarations go here */\nbody {\n  font-family: sans-serif;\n  background-color: #315481;\n  background-image: linear-gradient(to bottom, #315481, #918e82 100%);\n  background-attachment: fixed;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  padding: 0;\n  margin: 0;\n\n  font-size: 14px;\n}\n\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  min-height: 100%;\n  background: white;\n}\n\nheader {\n  background: #d2edf4;\n  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);\n  padding: 20px 15px 15px 15px;\n  position: relative;\n}\n\n#login-buttons {\n  display: block;\n}\n\nh1 {\n  font-size: 1.5em;\n  margin: 0;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-right: 1em;\n}\n\nform {\n  margin-top: 10px;\n  margin-bottom: -10px;\n  position: relative;\n}\n\n.new-task input {\n  box-sizing: border-box;\n  padding: 10px 0;\n  background: transparent;\n  border: none;\n  width: 100%;\n  padding-right: 80px;\n  font-size: 1em;\n}\n\n.new-task input:focus {\n  outline: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  background: white;\n}\n\n.delete {\n  float: right;\n  font-weight: bold;\n  background: none;\n  font-size: 1em;\n  border: none;\n  position: relative;\n  cursor: pointer;\n}\n\nli {\n  position: relative;\n  list-style: none;\n  padding: 15px;\n  border-bottom: #eee solid 1px;\n}\n\nli .text {\n  margin-left: 10px;\n}\n\nli.checked {\n  color: #888;\n}\n\nli.checked .text {\n  text-decoration: line-through;\n}\n\nli.private {\n  background: #eee;\n  border-color: #ddd;\n}\n\nheader .hide-completed {\n  float: right;\n}\n\n.toggle-private {\n  margin-left: 5px;\n}\n\n@media (max-width: 600px) {\n  li {\n    padding: 12px 15px;\n  }\n\n  .search {\n    width: 150px;\n    clear: both;\n  }\n\n  .new-task input {\n    padding-bottom: 5px;\n  }\n}\n",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],d=e.base?c[0]+e.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:g(p,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function g(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=c(n,e),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(176);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=document.querySelector("#result");function i(n){const e=n.map(((n,e)=>`<li data-index="${e}">\n    <button class="delete">×</button>\n    <input type="checkbox" class="toggle-checked" ${n.isDone?"checked":""}/>\n    <span class="text">${n.text}</span>\n  </li>`));r.innerHTML=`<ul>${e.join("")}</ul>`}const a={id:"",text:"",isDone:!1},c=document.querySelector("#input-form"),d=document.querySelector("#input"),s=function(n){c.addEventListener("submit",(e=>{e.preventDefault();const t=d.value;t&&(d.value="",n.push({...a,text:t,isDone:!1}),i(n))}))},l=document.querySelector("#result"),u=[{test:"aaa",isDone:!1}];l.addEventListener("click",(n=>{const{className:e}=n.target;if("delete"===e){const{index:e}=n.target.parentElement.dataset;u.splice(e,1),i(u)}else if("toggle-checked"===e){const{index:e}=n.target.parentElement.dataset;u[e].isDone=!u[e].isDone,i(u)}})),s(u),i(u)})()})();