!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VsBar=t():n.VsBar=t()}(window,(function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return n[o].call(c.exports,c,c.exports,e),c.l=!0,c.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)e.d(o,c,function(t){return n[t]}.bind(null,c));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);var o=[function(){var n,t={name:"vsBar",cvsPadding:0,cvslineWidth:10,millisecond:2e3,cvsBarPercent:1,cvsDom:null,frameBarPercent:0,color:"#000",barBeforeEnd:0,barNow:0,autoPlay:!1};if(Object.assign(t,this.config),this.config=t,this.config.name instanceof Element)n=this.config.name;else{if(!document.getElementsByClassName(this.config.name)[0])return;n=document.getElementsByClassName(this.config.name)[0]}var e=document.createElement("canvas");return n.appendChild(e),this.config.cvsDom=e,this.config.cvsDom.width=n.clientWidth,this.config.cvsDom.height=n.clientHeight,!0}],c=function(){var n=this;return o.every((function(t){return t.call(n)}))},i=[function(){var n=this,t=n.config;n.canvas.canvas=function(){var e=(t.cvsDom.clientWidth-t.cvslineWidth-2*t.cvsPadding)/2;n.ctx=t.cvsDom.getContext("2d"),n.ctx.clearRect(0,0,t.cvsDom.clientWidth,t.cvsDom.clientHeight),n.ctx.lineWidth=t.cvslineWidth,n.ctx.beginPath(),n.ctx.lineCap="round",n.ctx.strokeStyle=t.color,n.ctx.arc(t.cvsDom.clientWidth/2,t.cvsDom.clientHeight/2,e,-90*Math.PI/180,(360*n.barNow-90)*Math.PI/180),n.ctx.stroke()}}],r=[function(){var n=this;i.forEach((function(t){t.call(n)}))}],a=[function(){var n=this,t=n.stepID,e=n.action;e.reset=function(o){t&&cancelAnimationFrame(t),n.config.barBeforeEnd=n.config.cvsBarPercent,Object.assign(n.config,o),e.start()}}],f=[function(){var n=this,t=n.action,e=n.canvas;t.start=function(){var t=null;n.stepID=requestAnimationFrame((function o(c){if(t||(t=c),c-=t,n.barNow=c/n.config.millisecond*(n.config.cvsBarPercent-n.config.barBeforeEnd)+n.config.barBeforeEnd,n.config.cvsBarPercent>n.config.barBeforeEnd&&n.barNow>n.config.cvsBarPercent?n.barNow=n.config.cvsBarPercent:n.config.cvsBarPercent<n.config.barBeforeEnd&&n.barNow<n.config.cvsBarPercent&&(n.barNow=n.config.cvsBarPercent),e.canvas(),c/n.config.millisecond>1)return cancelAnimationFrame(n.stepID),!1;n.stepID=requestAnimationFrame(o)}))}}],s=[function(){var n=this,t=n.action,e=n.config;t.stop=function(){n.stepID&&cancelAnimationFrame(n.stepID),n.ctx&&n.ctx.clearRect(0,0,e.cvsDom.clientWidth,e.cvsDom.clientHeight)}}],l=[function(){var n=this;a.forEach((function(t){t.call(n)}))},function(){var n=this;f.forEach((function(t){t.call(n)}))},function(){var n=this;s.forEach((function(t){t.call(n)}))}];function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}e.d(t,"default",(function(){return h}));var v=[function(){var n=this;this.canvas={},r.forEach((function(t){t.call(n)}))},function(){var n=this;return this.action={},l.forEach((function(t){return t.call(n)}))}];function h(){var n=this;if(this.config={},1===arguments.length?"string"==typeof(arguments.length<=0?void 0:arguments[0])&&(this.config.name=arguments.length<=0?void 0:arguments[0]):2===arguments.length&&("object"===u(arguments.length<=1?void 0:arguments[1])&&(this.config=arguments.length<=1?void 0:arguments[1]),"string"==typeof(arguments.length<=0?void 0:arguments[0])&&(this.config.name=arguments.length<=0?void 0:arguments[0])),!c.call(this))return{};v.forEach((function(t){t.call(n)}))}}]).default}));