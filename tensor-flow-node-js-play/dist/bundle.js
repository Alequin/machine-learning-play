!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){const t=document.getElementById("predictContainer"),o=document.getElementById("predict-button"),r=io("http://localhost:8001",{reconnectionDelay:300,reconnectionDelayMax:300}),i=[2.668,-114.333,-1.908,4.786,25.707,-45.21,78,0];o.onclick=()=>{o.disabled=!0,r.emit("predictSample",i)},r.on("connect",()=>{document.getElementById("waiting-msg").style.display="none",document.getElementById("trainingStatus").innerHTML="Training in Progress"}),r.on("trainingComplete",()=>{document.getElementById("trainingStatus").innerHTML="Training Complete",document.getElementById("predictSample").innerHTML="["+i.join(", ")+"]",t.style.display="block"}),r.on("predictResult",e=>{!function(e){o.disabled=!1,document.getElementById("predictResult").innerHTML=e,console.log(e)}(e)}),r.on("disconnect",()=>{document.getElementById("trainingStatus").innerHTML="",t.style.display="none",document.getElementById("waiting-msg").style.display="block"})}]);