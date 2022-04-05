!function(){var t,e={663:function(t,e){var n,o,r;o=[e],n=function(t){"use strict";function e(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(t,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],a=!1,u=-1,c=void 0,s=void 0,l=function(t){return i.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},d=function(t){var e=t||window.event;return!!l(e.target)||e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1)},f=function(t){setTimeout((function(){if(void 0===s){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;e&&n>0&&(s=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}))},v=function(){setTimeout((function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)}))},g=function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight},h=function(t,e){var n=t.targetTouches[0].clientY-u;return!l(t.target)&&(e&&0===e.scrollTop&&n>0||g(e)&&n<0?d(t):(t.stopPropagation(),!0))};t.disableBodyScroll=function(t,o){if(r){if(!t)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(t&&!i.some((function(e){return e.targetElement===t}))){var c={targetElement:t,options:o||{}};i=[].concat(e(i),[c]),t.ontouchstart=function(t){1===t.targetTouches.length&&(u=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&h(e,t)},a||(document.body.addEventListener("touchmove",d,n?{passive:!1}:void 0),a=!0)}}else{f(o);var s={targetElement:t,options:o||{}};i=[].concat(e(i),[s])}},t.clearAllBodyScrollLocks=function(){r?(i.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),a&&(document.body.removeEventListener("touchmove",d,n?{passive:!1}:void 0),a=!1),i=[],u=-1):(v(),i=[])},t.enableBodyScroll=function(t){if(r){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,i=i.filter((function(e){return e.targetElement!==t})),a&&0===i.length&&(document.body.removeEventListener("touchmove",d,n?{passive:!1}:void 0),a=!1)}else 1===i.length&&i[0].targetElement===t?(v(),i=[]):i=i.filter((function(e){return e.targetElement!==t}))}},void 0===(r="function"==typeof n?n.apply(e,o):n)||(t.exports=r)},54:function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=this;this.buttons=document.querySelectorAll(e);for(var r=function(t){n.buttons[t].addEventListener("click",(function(t){t.preventDefault(),o.toggle(t.currentTarget)}));var e=document.querySelector("#"+n.buttons[t].getAttribute("aria-controls"));if(null!=e){var r=e.querySelector("[data-close]");null!=r&&r.addEventListener("click",(function(){"true"===o.buttons[t].getAttribute("aria-expanded")&&(o.buttons[t].click(),o.buttons[t].focus())}))}},i=0;i<this.buttons.length;i++)r(i);window.addEventListener("keyup",(function(t){var e=t.key||t.keyCode;if("Escape"===e||"Esc"===e||27===e)for(var n=0;n<o.buttons.length;n++)"true"===o.buttons[n].getAttribute("aria-expanded")&&(o.buttons[n].click(),o.buttons[n].focus())}))}var e,o,r;return e=t,(o=[{key:"resetToggleState",value:function(){for(var t=0;t<this.buttons.length;t++){var e=this.buttons[t],n=document.querySelector("#"+e.getAttribute("aria-controls"));null!=n&&(n.setAttribute("aria-hidden",null),"block"===window.getComputedStyle(n).display&&"visible"===window.getComputedStyle(n).visibility?this.toggle(e,"true",!1):this.toggle(e,"false",!1))}}},{key:"toggle",value:function(t,e,n){e=void 0!==e?"true"===e:"false"===t.getAttribute("aria-expanded"),n=void 0===n||n;var o=document.querySelector("#"+t.getAttribute("aria-controls"));if(!0===e){t.setAttribute("aria-expanded","true"),o.setAttribute("aria-hidden","false");for(var r=o.querySelectorAll("[tabindex]"),i=0;i<r.length;i++)r[i].setAttribute("tabindex","0");for(var a=0;a<this.buttons.length;a++){var u=this.buttons[a];if(u!=t){var c=document.querySelector("#"+u.getAttribute("aria-controls"));this.closePanel(u,c)}}if(t.dataset.active&&t.classList.add(t.dataset.active),t.dataset.activeParent&&t.parentNode.classList.add(t.dataset.activeParent),t.dataset.activeTarget&&t.dataset.activeTargetId&&document.getElementById(t.dataset.activeTargetId).classList.add(t.dataset.activeTarget),t.dataset.activeRoot&&document.querySelector("html").classList.add(t.dataset.activeRoot),n)if(t.dataset.focus){var s=o.querySelector(t.dataset.focus);clearTimeout(l);var l=setTimeout((function(){s.focus()}),300)}else{var d=o.querySelectorAll('button:not([data-close]), [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])');if(d.length){var f,v=d[0];clearTimeout(f),f=setTimeout((function(){v.focus()}),300)}}}else this.closePanel(t,o)}},{key:"closePanel",value:function(t,e){t.setAttribute("aria-expanded","false"),e.setAttribute("aria-hidden","true");for(var n=e.querySelectorAll("[tabindex]"),o=0;o<n.length;o++)n[o].setAttribute("tabindex","-1");t.dataset.active&&t.classList.remove(t.dataset.active),t.dataset.activeParent&&t.parent().classList.remove(t.dataset.activeParent),t.dataset.activeTarget&&t.dataset.activeTargetId&&document.getElementById(t.dataset.activeTargetId).classList.remove(t.dataset.activeTarget),t.dataset.activeRoot&&document.querySelector("html").classList.remove(t.dataset.activeRoot)}}])&&n(e.prototype,o),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.Z=o},349:function(t,e,n){"use strict";var o=n(54),r=n(663),i={getSettings:function(){},init:function(){i.getSettings(),i.bindUI(),i.refreshCSRFs(),i.getEditLink()},refreshCSRFs:function(){fetch("/getCSRF",{headers:{"X-Requested-With":"XMLHttpRequest"},method:"GET"}).then((function(t){return t.text()})).then((function(t){document.querySelectorAll('[name="CRAFT_CSRF_TOKEN"]').forEach((function(e){e.value=t})),window.csrfTokenValue=t}))},getEditLink:function(){var t=document.querySelector(".js-edit-this"),e={thing:t.dataset.thing,CRAFT_CSRF_TOKEN:window.csrfTokenValue};fetch("/getEditLink",{headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(t){return t.text()})).then((function(e){e&&e.trim()&&(t.innerHTML=e,setTimeout((function(){document.querySelector(".edit-this").classList.remove("posing")}),600))}))},bindUI:function(){new o.Z(".js-toggle"),document.querySelectorAll(".js-toggleScrollLock").forEach((function(t){t.addEventListener("click",(function(t){if("true"===t.target.getAttribute("aria-expanded")){var e=document.getElementById(t.target.dataset.activeTargetId);r.disableBodyScroll(e)}else r.clearAllBodyScrollLocks()}))}))}};i.init()},156:function(){}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,t=[],o.O=function(e,n,r,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],i=t[l][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,r,i]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={522:0,870:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],u=n[1],c=n[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(c)var l=c(o)}for(e&&e(n);s<a.length;s++)i=a[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(l)},n=self.webpackChunkprojectnamewithnospacesorcaps=self.webpackChunkprojectnamewithnospacesorcaps||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.O(void 0,[870],(function(){return o(663)})),o.O(void 0,[870],(function(){return o(54)})),o.O(void 0,[870],(function(){return o(349)}));var r=o.O(void 0,[870],(function(){return o(156)}));r=o.O(r)}();