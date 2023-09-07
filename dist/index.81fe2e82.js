var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequirefb6f;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,i.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequirefb6f=i),i.register("kJWRP",function(e,n){Object.defineProperty(e.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(e.exports,"default",{get:()=>Z,set:void 0,enumerable:!0,configurable:!0});/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,o=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(i&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}(),r=i&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},o))}};/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function s(t){return t&&"[object Function]"===({}).toString.call(t)}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function a(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function l(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function c(t){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}// Firefox want us to check `-x` and `-y` variations as well
var e=a(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:c(l(t))}/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */function h(t){return t&&t.referenceNode?t.referenceNode:t}var u=i&&!!(window.MSInputMethodContext&&document.documentMode),f=i&&/MSIE 10/.test(navigator.userAgent);/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function d(t){return 11===t?u:10===t?f:u||f}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function p(t){if(!t)return document.documentElement;// Skip hidden elements which don't have an offsetParent
for(var e=d(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===a(n,"position")?p(n):n:t?t.ownerDocument.documentElement:document.documentElement}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function m(t){return null!==t.parentNode?m(t.parentNode):t}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function g(t,e){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;// Here we make sure to give as "start" the element that comes first in the DOM
var n,i=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,o=i?t:e,r=i?e:t,s=document.createRange();s.setStart(o,0),s.setEnd(r,0);var a=s.commonAncestorContainer;// Both nodes are inside #document
if(t!==a&&e!==a||o.contains(r))return"BODY"!==(n=a.nodeName)&&("HTML"===n||p(a.firstElementChild)===a)?a:p(a);// one of the nodes is inside shadowDOM, find which one
var l=m(t);return l.host?g(l.host,e):g(t,m(e).host)}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||o)[n]}return t[n]}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function v(t,e){var n="x"===e?"Left":"Top";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+("Left"===n?"Right":"Bottom")+"Width"])}function y(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],d(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function E(t){var e=t.body,n=t.documentElement,i=d(10)&&getComputedStyle(n);return{height:y("Height",e,n,i),width:y("Width",e,n,i)}}var b=function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),C=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function S(t){return T({},t,{right:t.left+t.width,bottom:t.top+t.height})}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function D(t){var e={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(d(10)){e=t.getBoundingClientRect();var n=_(t,"top"),i=_(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?E(t.ownerDocument):{},s=r.width||t.clientWidth||o.width,l=r.height||t.clientHeight||o.height,c=t.offsetWidth-s,h=t.offsetHeight-l;// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(c||h){var u=a(t);c-=v(u,"x"),h-=v(u,"y"),o.width-=c,o.height-=h}return S(o)}function I(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=d(10),o="HTML"===e.nodeName,r=D(t),s=D(e),l=c(t),h=a(e),u=parseFloat(h.borderTopWidth),f=parseFloat(h.borderLeftWidth);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var p=S({top:r.top-s.top-u,left:r.left-s.left-f,width:r.width,height:r.height});// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(p.marginTop=0,p.marginLeft=0,!i&&o){var m=parseFloat(h.marginTop),g=parseFloat(h.marginLeft);p.top-=u-m,p.bottom-=u-m,p.left-=f-g,p.right-=f-g,// Attach marginTop and marginLeft because in some circumstances we may need them
p.marginTop=m,p.marginLeft=g}return(i&&!n?e.contains(l):e===l&&"BODY"!==l.nodeName)&&(p=/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=_(e,"top"),o=_(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}(p,e)),p}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function A(t){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!t||!t.parentElement||d())return document.documentElement;for(var e=t.parentElement;e&&"none"===a(e,"transform");)e=e.parentElement;return e||document.documentElement}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function O(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?A(t):g(t,h(e));// Handle viewport case
if("viewport"===i)r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=I(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:_(n),a=e?0:_(n,"left");return S({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r})}(s,o);else{// Handle other cases based on DOM element used as boundaries
var u=void 0;"scrollParent"===i?"BODY"===(u=c(l(e))).nodeName&&(u=t.ownerDocument.documentElement):u="window"===i?t.ownerDocument.documentElement:i;var f=I(u,s,o);// In case of HTML, we need a different computation
if("HTML"===u.nodeName&&!/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===a(e,"position"))return!0;var i=l(e);return!!i&&t(i)}(s)){var d=E(t.ownerDocument),p=d.height,m=d.width;r.top+=f.top-f.marginTop,r.bottom=p+f.top,r.left+=f.left-f.marginLeft,r.right=m+f.left}else r=f}var v="number"==typeof// Add paddings
(n=n||0);return r.left+=v?n:n.left||0,r.top+=v?n:n.top||0,r.right-=v?n:n.right||0,r.bottom-=v?n:n.bottom||0,r}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function N(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=O(n,i,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){var e;return T({key:t},a[t],{area:(e=a[t]).width*e.height})}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),h=c.length>0?c[0].key:l[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function k(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?A(e):g(e,h(n));return I(n,o,i)}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function L(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function P(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function x(t,e,n){n=n.split("-")[0];// Get popper node sizes
var i=L(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width";return o[s]=e[s]+e[l]/2-i[l]/2,n===a?o[a]=e[a]-i[r?"width":"height"]:o[a]=e[P(a)],o}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function H(t,e){return(// use native find if supported
Array.prototype.find?t.find(e):t.filter(e)[0])}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function j(t,e,n){return(void 0===n?t:t.slice(0,/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function(t,e,n){// use native findIndex if supported
if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});// use `find` + `indexOf` if `findIndex` isn't supported
var i=H(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;// eslint-disable-line dot-notation
t.enabled&&s(n)&&(// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
e.offsets.popper=S(e.offsets.popper),e.offsets.reference=S(e.offsets.reference),e=n(e,t))}),e}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function R(){// if popper is destroyed, don't perform any further update
if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};// compute reference element offsets
t.offsets.reference=k(this.state,this.popper,this.reference,this.options.positionFixed),// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
t.placement=N(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),// store the computed placement inside `originalPlacement`
t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,// compute the popper offsets
t.offsets.popper=x(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",// run the modifiers
t=j(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function F(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function M(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if(void 0!==document.body.style[r])return r}return null}/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */function W(){return this.state.isDestroyed=!0,F(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[M("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function U(t){var e=t.ownerDocument;return e?e.defaultView:window}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function q(){if(!this.state.eventsEnabled){var t,e,n,i;this.state=(t=this.reference,this.options,e=this.state,n=this.scheduleUpdate,// Resize event listener on window
e.updateBound=n,U(t).addEventListener("resize",e.updateBound,{passive:!0}),function t(e,n,i,o){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),r||t(c(s.parentNode),n,i,o),o.push(s)}(i=c(t),"scroll",e.updateBound,e.scrollParents),e.scrollElement=i,e.eventsEnabled=!0,e)}}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function B(){if(this.state.eventsEnabled){var t,e;cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,// Remove resize event listener on window
U(t).removeEventListener("resize",e.updateBound),// Remove scroll event listener on scroll parents
e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),// Reset state
e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e)}}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function K(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function Q(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&K(e[n])&&(i="px"),t.style[n]=e[n]+i})}var V=i&&/Firefox/i.test(navigator.userAgent);/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function Y(t,e,n){var i=H(t,function(t){return t.name===e}),o=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!o){var r="`"+e+"`";console.warn("`"+n+"` modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],X=z.slice(3);/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function G(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=X.indexOf(t),i=X.slice(n+1).concat(X.slice(0,n));return e?i.reverse():i}var J={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},$=function(){/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},// make update() debounced, so that it only runs at most once-per-tick
this.update=r(this.update.bind(this)),// with {} we create a new object with the options inside it
this.options=T({},t.Defaults,o),// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},// get reference and popper elements (allow jQuery wrappers)
this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,// Deep merge modifiers options
this.options.modifiers={},Object.keys(T({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){i.options.modifiers[e]=T({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(t){return T({name:t},i.options.modifiers[t])})// sort the modifiers by order
.sort(function(t,e){return t.order-e.order}),// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(t){t.enabled&&s(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),// fire the first update to position the popper in the right place
this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return(// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
w(t,[{key:"update",value:function(){return R.call(this)}},{key:"destroy",value:function(){return W.call(this)}},{key:"enableEventListeners",value:function(){return q.call(this)}},{key:"disableEventListeners",value:function(){return B.call(this)}}]),t)}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */$.Utils=("undefined"!=typeof window?window:t).PopperUtils,$.placements=z,$.Defaults={/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */placement:"bottom",/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */positionFixed:!1,/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */eventsEnabled:!0,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */removeOnDestroy:!1,/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */onCreate:function(){},/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */onUpdate:function(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */modifiers:{/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */shift:{/** @prop {number} order=100 - Index used to define the order of execution */order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];// if shift shiftvariation is specified, run the modifier
if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:C({},l,r[l]),end:C({},l,r[l]+r[c]-s[c])};t.offsets.popper=T({},s,h[i])}return t}},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */offset:{/** @prop {number} order=200 - Index used to define the order of execution */order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function(t,e){var n,i,o,r,s,a=e.offset,l=t.placement,c=t.offsets,h=c.popper,u=c.reference,f=l.split("-")[0],d=void 0;return K(+a)?d=[+a,0]:(n=[0,0],i=-1!==["right","left"].indexOf(f),r=(o=a.split(/(\+|\-)/).map(function(t){return t.trim()})).indexOf(H(o,function(t){return -1!==t.search(/,|\s/)})),o[r]&&-1===o[r].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),s=/\s*,\s*|\s+/,// Loop trough the offsets arrays and execute the operations
(-1!==r?[o.slice(0,r).concat([o[r].split(s)[0]]),[o[r].split(s)[1]].concat(o.slice(r+1))]:[o]).map(function(t,e){// Most of the units rely on the orientation of the popper
var n=(1===e?!i:i)?"height":"width",o=!1;return t// This aggregates any `+` or `-` sign that aren't considered operators
// e.g.: 10 + +5 => [10, +, +5]
.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,o=!0,t):o?(t[t.length-1]+=e,o=!1,t):t.concat(e)},[])// Here we convert the string values into number values (in px)
.map(function(t){return(/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function(t,e,n,i){// separate value from unit
var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];// If it's not a number it's an operator, I guess
if(!r)return t;if(0===s.indexOf("%")){var a=void 0;return S("%p"===s?n:i)[e]/100*r}return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}(t,n,h,u))})}).forEach(function(t,e){t.forEach(function(i,o){K(i)&&(n[e]+=i*("-"===t[o-1]?-1:1))})}),d=n),"left"===f?(h.top+=d[0],h.left-=d[1]):"right"===f?(h.top+=d[0],h.left+=d[1]):"top"===f?(h.left+=d[0],h.top-=d[1]):"bottom"===f&&(h.left+=d[0],h.top+=d[1]),t.popper=h,t},/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t,e){var n=e.boundariesElement||p(t.instance.popper);t.instance.reference===n&&(n=p(n));// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var i=M("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[i];o.top="",o.left="",o[i]="";var l=O(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
o.top=r,o.left=s,o[i]=a,e.boundaries=l;var c=e.priority,h=t.offsets.popper,u={primary:function(t){var n=h[t];return h[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(h[t],l[t])),C({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=h[n];return h[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(h[n],l[t]-("right"===t?h.width:h.height))),C({},n,i)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=T({},h,u[e](t))}),t.offsets.popper=h,t},/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */priority:["left","right","top","bottom"],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */boundariesElement:"scrollParent"},/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top";return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[s?"width":"height"]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */arrow:{/** @prop {number} order=500 - Index used to define the order of execution */order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t,e){// arrow depends on keepTogether in order to work
if(!Y(t.instance.modifiers,"arrow","keepTogether"))return t;var n,i=e.element;// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof i)// if arrowElement is not found, don't run the modifier
{if(!(i=t.instance.popper.querySelector(i)))return t}else // provided DOM node is child of its popper node
if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,l=r.reference,c=-1!==["left","right"].indexOf(o),h=c?"height":"width",u=c?"Top":"Left",f=u.toLowerCase(),d=c?"bottom":"right",p=L(i)[h];l[d]-p<s[f]&&(t.offsets.popper[f]-=s[f]-(l[d]-p)),l[f]+p>s[d]&&(t.offsets.popper[f]+=l[f]+p-s[d]),t.offsets.popper=S(t.offsets.popper);// compute center of the popper
var m=l[f]+l[h]/2-p/2,g=a(t.instance.popper),_=parseFloat(g["margin"+u]),v=parseFloat(g["border"+u+"Width"]),y=m-t.offsets.popper[f]-_-v;return(// prevent arrowElement from being placed not contiguously to its popper
y=Math.max(Math.min(s[h]-p,y),0),t.arrowElement=i,t.offsets.arrow=(C(n={},f,Math.round(y)),C(n,c?"left":"top",""),n),t)},/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:"[x-arrow]"},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */flip:{/** @prop {number} order=600 - Index used to define the order of execution */order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t,e){// if `inner` modifier is enabled, we can't use the `flip` modifier
if(F(t.instance.modifiers,"inner")||t.flipped&&t.placement===t.originalPlacement)return t;var n=O(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=P(i),r=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case J.FLIP:s=[i,o];break;case J.CLOCKWISE:s=G(i);break;case J.COUNTERCLOCKWISE:s=G(i,!0);break;default:s=e.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return t;o=P(i=t.placement.split("-")[0]);var c,h=t.offsets.popper,u=t.offsets.reference,f=Math.floor,d="left"===i&&f(h.right)>f(u.left)||"right"===i&&f(h.left)<f(u.right)||"top"===i&&f(h.bottom)>f(u.top)||"bottom"===i&&f(h.top)<f(u.bottom),p=f(h.left)<f(n.left),m=f(h.right)>f(n.right),g=f(h.top)<f(n.top),_=f(h.bottom)>f(n.bottom),v="left"===i&&p||"right"===i&&m||"top"===i&&g||"bottom"===i&&_,y=-1!==["top","bottom"].indexOf(i),E=!!e.flipVariations&&(y&&"start"===r&&p||y&&"end"===r&&m||!y&&"start"===r&&g||!y&&"end"===r&&_),b=!!e.flipVariationsByContent&&(y&&"start"===r&&m||y&&"end"===r&&p||!y&&"start"===r&&_||!y&&"end"===r&&g),w=E||b;(d||v||w)&&(// this boolean to detect any flip loop
t.flipped=!0,(d||v)&&(i=s[l+1]),w&&(r="end"===(c=r)?"start":"start"===c?"end":c),t.placement=i+(r?"-"+r:""),// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
t.offsets.popper=T({},t.offsets.popper,x(t.instance.popper,t.offsets.reference,t.placement)),t=j(t.instance.modifiers,t,"flip"))}),t},/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */behavior:"flip",/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */boundariesElement:"viewport",/**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */flipVariations:!1,/**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */flipVariationsByContent:!1},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */inner:{/** @prop {number} order=700 - Index used to define the order of execution */order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:!1,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=P(e),t.offsets.popper=S(o),t}},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */hide:{/** @prop {number} order=800 - Index used to define the order of execution */order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t){if(!Y(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=H(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function(t,e){var n,i,o,r,s,a,l,c,h,u,f,d,m=e.x,g=e.y,_=t.offsets.popper,v=H(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==v&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var y=void 0!==v?v:e.gpuAcceleration,E=p(t.instance.popper),b=D(E),w={position:_.position},C=(n=window.devicePixelRatio<2||!V,o=(i=t.offsets).popper,r=i.reference,s=Math.round,a=function(t){return t},l=s(r.width),c=s(o.width),h=-1!==["left","right"].indexOf(t.placement),u=-1!==t.placement.indexOf("-"),f=n?h||u||l%2==c%2?s:Math.floor:a,d=n?s:a,{left:f(l%2==1&&c%2==1&&!u&&n?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:f(o.right)}),S="bottom"===m?"top":"bottom",I="right"===g?"left":"right",A=M("transform"),O=void 0,N=void 0;N="bottom"===S?"HTML"===E.nodeName?-E.clientHeight+C.bottom:-b.height+C.bottom:C.top,O="right"===I?"HTML"===E.nodeName?-E.clientWidth+C.right:-b.width+C.right:C.left,y&&A?(w[A]="translate3d("+O+"px, "+N+"px, 0)",w[S]=0,w[I]=0,w.willChange="transform"):(w[S]=N*("bottom"===S?-1:1),w[I]=O*("right"===I?-1:1),w.willChange=S+", "+I);// Attributes
var k={"x-placement":t.placement};return(// Update `data` attributes, styles and arrowStyles
t.attributes=T({},k,t.attributes),t.styles=T({},w,t.styles),t.arrowStyles=T({},t.offsets.arrow,t.arrowStyles),t)},/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:!0,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */x:"bottom",/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */y:"right"},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function(t){return(// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
Q(t.instance.popper,t.styles),// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function(t,e){Object.keys(e).forEach(function(n){!1!==e[n]?t.setAttribute(n,e[n]):t.removeAttribute(n)})}(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&Q(t.arrowElement,t.arrowStyles),t)},/** @prop {Function} */onLoad:/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function(t,e,n,i,o){// compute reference element offsets
var r=k(o,e,t,n.positionFixed),s=N(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
Q(e,{position:n.positionFixed?"fixed":"absolute"}),n},/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:void 0}}};var Z=$}),!function(t,e,n){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){var i;i=n[e],e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i})}return t}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var s="transitionend",a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),r=parseFloat(i);return o||r?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(s)},supportsTransitionEnd:function(){return!!s},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&a.isElement(r)?"element":({}).toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(s))throw Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?a.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};e.fn.emulateTransitionEnd=function(t){var n=this,i=!1;return e(this).one(a.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||a.triggerTransitionEnd(n)},t),this},e.event.special[a.TRANSITION_END]={bindType:s,delegateType:s,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var l="alert",c="bs.alert",h="."+c,u=e.fn[l],f={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,c),this._element=null},n._getRootElement=function(t){var n=a.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(f.CLOSE);return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(f.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),o=i.data(c);o||(o=new t(this),i.data(c,o)),"close"===n&&o[n](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[l]=d._jQueryInterface,e.fn[l].Constructor=d,e.fn[l].noConflict=function(){return e.fn[l]=u,d._jQueryInterface};var p="button",m="bs.button",g="."+m,_=".data-api",v=e.fn[p],y="active",E='[data-toggle^="button"]',b=".btn",w={CLICK_DATA_API:"click"+g+_,FOCUS_BLUR_DATA_API:"focus"+g+_+" blur"+g+_},C=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type){if(o.checked&&this._element.classList.contains(y))t=!1;else{var r=i.querySelector(".active");r&&e(r).removeClass(y)}}if(t){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!this._element.classList.contains(y),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(y)),t&&e(this._element).toggleClass(y)},n.dispose=function(){e.removeData(this._element,m),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(m);i||(i=new t(this),e(this).data(m,i)),"toggle"===n&&i[n]()})},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(w.CLICK_DATA_API,E,function(t){t.preventDefault();var n=t.target;e(n).hasClass("btn")||(n=e(n).closest(b)),C._jQueryInterface.call(e(n),"toggle")}).on(w.FOCUS_BLUR_DATA_API,E,function(t){var n=e(t.target).closest(b)[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))}),e.fn[p]=C._jQueryInterface,e.fn[p].Constructor=C,e.fn[p].noConflict=function(){return e.fn[p]=v,C._jQueryInterface};var T="carousel",S="bs.carousel",D="."+S,I=".data-api",A=e.fn[T],O={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},N={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},k="next",L="prev",P={SLIDE:"slide"+D,SLID:"slid"+D,KEYDOWN:"keydown"+D,MOUSEENTER:"mouseenter"+D,MOUSELEAVE:"mouseleave"+D,TOUCHSTART:"touchstart"+D,TOUCHMOVE:"touchmove"+D,TOUCHEND:"touchend"+D,POINTERDOWN:"pointerdown"+D,POINTERUP:"pointerup"+D,DRAG_START:"dragstart"+D,LOAD_DATA_API:"load"+D+I,CLICK_DATA_API:"click"+D+I},x="active",H=".active.carousel-item",j={TOUCH:"touch",PEN:"pen"},R=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide(k)},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(L)},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(H);var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0)){if(this._isSliding)e(this._element).one(P.SLID,function(){return n.to(t)});else{if(i===t)return this.pause(),void this.cycle();var o=i<t?k:L;this._slide(o,this._items[t])}}},n.dispose=function(){e(this._element).off(D),e.removeData(this._element,S),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=r({},O,t),a.typeCheckConfig(T,t,N),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(P.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&e(this._element).on(P.MOUSEENTER,function(e){return t.pause(e)}).on(P.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&j[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&j[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on(P.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(e(this._element).on(P.POINTERDOWN,function(t){return n(t)}),e(this._element).on(P.POINTERUP,function(t){return i(t)}),this._element.classList.add("pointer-event")):(e(this._element).on(P.TOUCHSTART,function(t){return n(t)}),e(this._element).on(P.TOUCHMOVE,function(e){e.originalEvent.touches&&1<e.originalEvent.touches.length?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}),e(this._element).on(P.TOUCHEND,function(t){return i(t)}))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n=t===k,i=t===L,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===L?-1:1))%this._items.length;return -1===s?this._items[this._items.length-1]:this._items[s]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(H)),r=e.Event(P.SLIDE,{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(r),r},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass(x);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass(x)}},n._slide=function(t,n){var i,o,r,s=this,l=this._element.querySelector(H),c=this._getItemIndex(l),h=n||l&&this._getItemByDirection(t,l),u=this._getItemIndex(h),f=!!this._interval;if(r=t===k?(i="carousel-item-left",o="carousel-item-next","left"):(i="carousel-item-right",o="carousel-item-prev","right"),h&&e(h).hasClass(x))this._isSliding=!1;else if(!this._triggerSlideEvent(h,r).isDefaultPrevented()&&l&&h){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(h);var d=e.Event(P.SLID,{relatedTarget:h,direction:r,from:c,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),a.reflow(h),e(l).addClass(i),e(h).addClass(i);var p=parseInt(h.getAttribute("data-interval"),10);this._config.interval=p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,p):this._config.defaultInterval||this._config.interval;var m=a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END,function(){e(h).removeClass(i+" "+o).addClass(x),e(l).removeClass(x+" "+o+" "+i),s._isSliding=!1,setTimeout(function(){return e(s._element).trigger(d)},0)}).emulateTransitionEnd(m)}else e(l).removeClass(x),e(h).addClass(x),this._isSliding=!1,e(this._element).trigger(d);f&&this.cycle()}},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(S),o=r({},O,e(this).data());"object"==typeof n&&(o=r({},o,n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data(S,i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if(void 0===i[s])throw TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())})},t._dataApiClickHandler=function(n){var i=a.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=r({},e(o).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(s.interval=!1),t._jQueryInterface.call(e(o),s),l&&e(o).data(S).to(l),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return O}}]),t}();e(document).on(P.CLICK_DATA_API,"[data-slide], [data-slide-to]",R._dataApiClickHandler),e(window).on(P.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);R._jQueryInterface.call(o,o.data())}}),e.fn[T]=R._jQueryInterface,e.fn[T].Constructor=R,e.fn[T].noConflict=function(){return e.fn[T]=A,R._jQueryInterface};var F="collapse",M="bs.collapse",W="."+M,U=e.fn[F],q={toggle:!0,parent:""},B={toggle:"boolean",parent:"(string|element)"},K={SHOW:"show"+W,SHOWN:"shown"+W,HIDE:"hide"+W,HIDDEN:"hidden"+W,CLICK_DATA_API:"click"+W+".data-api"},Q="show",V="collapse",Y="collapsing",z="collapsed",X="width",G='[data-toggle="collapse"]',J=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(G)),i=0,o=n.length;i<o;i++){var r=n[i],s=a.getSelectorFromElement(r),l=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<l.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass(Q)?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass(Q)&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(V)})).length&&(n=null),!(n&&(i=e(n).not(this._selector).data(M))&&i._isTransitioning))){var r=e.Event(K.SHOW);if(e(this._element).trigger(r),!r.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data(M,null));var s=this._getDimension();e(this._element).removeClass(V).addClass(Y),this._element.style[s]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(z).attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(s[0].toUpperCase()+s.slice(1)),c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,function(){e(o._element).removeClass(Y).addClass(V).addClass(Q),o._element.style[s]="",o.setTransitioning(!1),e(o._element).trigger(K.SHOWN)}).emulateTransitionEnd(c),this._element.style[s]=this._element[l]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(Q)){var n=e.Event(K.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",a.reflow(this._element),e(this._element).addClass(Y).removeClass(V).removeClass(Q);var o=this._triggerArray.length;if(0<o)for(var r=0;r<o;r++){var s=this._triggerArray[r],l=a.getSelectorFromElement(s);null!==l&&(e([].slice.call(document.querySelectorAll(l))).hasClass(Q)||e(s).addClass(z).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[i]="";var c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,function(){t.setTransitioning(!1),e(t._element).removeClass(Y).addClass(V).trigger(K.HIDDEN)}).emulateTransitionEnd(c)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,M),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=r({},q,t)).toggle=!!t.toggle,a.typeCheckConfig(F,t,B),t},n._getDimension=function(){return e(this._element).hasClass(X)?X:"height"},n._getParent=function(){var n,i=this;a.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(n.querySelectorAll(o));return e(r).each(function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])}),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass(Q);n.length&&e(n).toggleClass(z,!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=a.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),o=i.data(M),s=r({},q,i.data(),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data(M,o)),"string"==typeof n){if(void 0===o[n])throw TypeError('No method named "'+n+'"');o[n]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return q}}]),t}();e(document).on(K.CLICK_DATA_API,G,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=a.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each(function(){var t=e(this),i=t.data(M)?"toggle":n.data();J._jQueryInterface.call(t,i)})}),e.fn[F]=J._jQueryInterface,e.fn[F].Constructor=J,e.fn[F].noConflict=function(){return e.fn[F]=U,J._jQueryInterface};var $="dropdown",Z="bs.dropdown",tt="."+Z,te=".data-api",tn=e.fn[$],ti=RegExp("38|40|27"),to={HIDE:"hide"+tt,HIDDEN:"hidden"+tt,SHOW:"show"+tt,SHOWN:"shown"+tt,CLICK:"click"+tt,CLICK_DATA_API:"click"+tt+te,KEYDOWN_DATA_API:"keydown"+tt+te,KEYUP_DATA_API:"keyup"+tt+te},tr="disabled",ts="show",ta="dropdown-menu-right",tl='[data-toggle="dropdown"]',tc=".dropdown-menu",th={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},tu={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},tf=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(tr)){var i=t._getParentFromElement(this._element),o=e(this._menu).hasClass(ts);if(t._clearMenus(),!o){var r={relatedTarget:this._element},s=e.Event(to.SHOW,r);if(e(i).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l=this._element;"parent"===this._config.reference?l=i:a.isElement(this._config.reference)&&(l=this._config.reference,void 0!==this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(i).addClass("position-static"),this._popper=new n(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(i).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(ts),e(i).toggleClass(ts).trigger(e.Event(to.SHOWN,r))}}}},i.show=function(){if(!(this._element.disabled||e(this._element).hasClass(tr)||e(this._menu).hasClass(ts))){var n={relatedTarget:this._element},i=e.Event(to.SHOW,n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(e(this._menu).toggleClass(ts),e(o).toggleClass(ts).trigger(e.Event(to.SHOWN,n)))}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(tr)&&e(this._menu).hasClass(ts)){var n={relatedTarget:this._element},i=e.Event(to.HIDE,n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(e(this._menu).toggleClass(ts),e(o).toggleClass(ts).trigger(e.Event(to.HIDDEN,n)))}},i.dispose=function(){e.removeData(this._element,Z),e(this._element).off(tt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on(to.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},i._getConfig=function(t){return t=r({},this.constructor.Default,e(this._element).data(),t),a.typeCheckConfig($,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(tc))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?(n="top-start",e(this._menu).hasClass(ta)&&(n="top-end")):t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass(ta)&&(n="bottom-end"),n},i._detectNavbar=function(){return 0<e(this._element).closest(".navbar").length},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(Z);if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data(Z,i)),"string"==typeof n){if(void 0===i[n])throw TypeError('No method named "'+n+'"');i[n]()}})},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(tl)),o=0,r=i.length;o<r;o++){var s=t._getParentFromElement(i[o]),a=e(i[o]).data(Z),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(s).hasClass(ts)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(s,n.target))){var h=e.Event(to.HIDE,l);e(s).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),e(c).removeClass(ts),e(s).removeClass(ts).trigger(e.Event(to.HIDDEN,l)))}}}},t._getParentFromElement=function(t){var e,n=a.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if((/input|textarea/i.test(n.target.tagName)?!(32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(tc).length)):ti.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(tr))){var i=t._getParentFromElement(this),o=e(i).hasClass(ts);if(o&&(!o||27!==n.which&&32!==n.which)){var r=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));if(0!==r.length){var s=r.indexOf(n.target);38===n.which&&0<s&&s--,40===n.which&&s<r.length-1&&s++,s<0&&(s=0),r[s].focus()}}else{if(27===n.which){var a=i.querySelector(tl);e(a).trigger("focus")}e(this).trigger("click")}}},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return th}},{key:"DefaultType",get:function(){return tu}}]),t}();e(document).on(to.KEYDOWN_DATA_API,tl,tf._dataApiKeydownHandler).on(to.KEYDOWN_DATA_API,tc,tf._dataApiKeydownHandler).on(to.CLICK_DATA_API+" "+to.KEYUP_DATA_API,tf._clearMenus).on(to.CLICK_DATA_API,tl,function(t){t.preventDefault(),t.stopPropagation(),tf._jQueryInterface.call(e(this),"toggle")}).on(to.CLICK_DATA_API,".dropdown form",function(t){t.stopPropagation()}),e.fn[$]=tf._jQueryInterface,e.fn[$].Constructor=tf,e.fn[$].noConflict=function(){return e.fn[$]=tn,tf._jQueryInterface};var td="modal",tp="bs.modal",tm="."+tp,tg=e.fn[td],t_={backdrop:!0,keyboard:!0,focus:!0,show:!0},tv={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ty={HIDE:"hide"+tm,HIDDEN:"hidden"+tm,SHOW:"show"+tm,SHOWN:"shown"+tm,FOCUSIN:"focusin"+tm,RESIZE:"resize"+tm,CLICK_DISMISS:"click.dismiss"+tm,KEYDOWN_DISMISS:"keydown.dismiss"+tm,MOUSEUP_DISMISS:"mouseup.dismiss"+tm,MOUSEDOWN_DISMISS:"mousedown.dismiss"+tm,CLICK_DATA_API:"click"+tm+".data-api"},tE="modal-open",tb="fade",tw="show",tC=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",tT=".sticky-top",tS=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(tb)&&(this._isTransitioning=!0);var i=e.Event(ty.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(ty.CLICK_DISMISS,'[data-dismiss="modal"]',function(t){return n.hide(t)}),e(this._dialog).on(ty.MOUSEDOWN_DISMISS,function(){e(n._element).one(ty.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event(ty.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass(tb);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(ty.FOCUSIN),e(this._element).removeClass(tw),e(this._element).off(ty.CLICK_DISMISS),e(this._dialog).off(ty.MOUSEDOWN_DISMISS),o){var r=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return e(t).off(tm)}),e(document).off(ty.FOCUSIN),e.removeData(this._element,tp),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=r({},t_,t),a.typeCheckConfig(td,t,tv),t},n._showElement=function(t){var n=this,i=e(this._element).hasClass(tb);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")?this._dialog.querySelector(".modal-body").scrollTop=0:this._element.scrollTop=0,i&&a.reflow(this._element),e(this._element).addClass(tw),this._config.focus&&this._enforceFocus();var o=e.Event(ty.SHOWN,{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(o)};if(i){var s=a.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(a.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},n._enforceFocus=function(){var t=this;e(document).off(ty.FOCUSIN).on(ty.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},n._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(ty.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(ty.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on(ty.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(ty.RESIZE)},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(tE),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(ty.HIDDEN)})},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(tb)?tb:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on(ty.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&a.reflow(this._backdrop),e(this._backdrop).addClass(tw),!t)return;if(!i)return void t();var o=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(tw);var r=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass(tb)){var s=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(tC)),i=[].slice.call(document.querySelectorAll(tT));e(n).each(function(n,i){var o=i.style.paddingRight,r=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),e(i).each(function(n,i){var o=i.style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")});var o=document.body.style.paddingRight,r=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}e(document.body).addClass(tE)},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(tC));e(t).each(function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""});var n=[].slice.call(document.querySelectorAll(""+tT));e(n).each(function(t,n){var i=e(n).data("margin-right");void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")});var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each(function(){var o=e(this).data(tp),s=r({},t_,e(this).data(),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data(tp,o)),"string"==typeof n){if(void 0===o[n])throw TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)})},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return t_}}]),t}();e(document).on(ty.CLICK_DATA_API,'[data-toggle="modal"]',function(t){var n,i=this,o=a.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data(tp)?"toggle":r({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var l=e(n).one(ty.SHOW,function(t){t.isDefaultPrevented()||l.one(ty.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});tS._jQueryInterface.call(e(n),s,this)}),e.fn[td]=tS._jQueryInterface,e.fn[td].Constructor=tS,e.fn[td].noConflict=function(){return e.fn[td]=tg,tS._jQueryInterface};var tD=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],tI=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,tA=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function tO(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),s=0,a=r.length;s<a;s++)!function(t,n){var i=r[t],s=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i);var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[s]||[]);a.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return -1===tD.indexOf(n)||!!(t.nodeValue.match(tI)||t.nodeValue.match(tA));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)})}(s);return i.body.innerHTML}var tN="tooltip",tk="bs.tooltip",tL="."+tk,tP=e.fn[tN],tx="bs-tooltip",tH=RegExp("(^|\\s)"+tx+"\\S+","g"),tj=["sanitize","whiteList","sanitizeFn"],tR={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},tF={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},tM={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]}},tW="show",tU={HIDE:"hide"+tL,HIDDEN:"hidden"+tL,SHOW:"show"+tL,SHOWN:"shown"+tL,INSERTED:"inserted"+tL,CLICK:"click"+tL,FOCUSIN:"focusin"+tL,FOCUSOUT:"focusout"+tL,MOUSEENTER:"mouseenter"+tL,MOUSELEAVE:"mouseleave"+tL},tq="fade",tB="show",tK="hover",tQ="focus",tV=function(){function t(t,e){if(void 0===n)throw TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled){if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(tB))return void this._leave(null,this);this._enter(null,this)}}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=a.findShadowRoot(this.element),r=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var s=this.getTipElement(),l=a.getUID(this.constructor.NAME);s.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&e(s).addClass(tq);var c="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,h=this._getAttachment(c);this.addAttachmentClass(h);var u=this._getContainer();e(s).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(s).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,s,{placement:h,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}}),e(s).addClass(tB),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var f=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass(tq)){var d=a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END,f).emulateTransitionEnd(d)}else f()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==tW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass(tB),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger[tQ]=!1,this._activeTrigger[tK]=!1,e(this.tip).hasClass(tq)){var s=a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END,r).emulateTransitionEnd(s)}else r();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return!!this.getTitle()},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass(tx+"-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass(tq+" "+tB)},i.setElementContent=function(t,n){"object"==typeof n&&(n.nodeType||n.jquery)?this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):this.config.html?(this.config.sanitize&&(n=tO(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n)},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:a.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return tF[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if("manual"!==n){var i=n===tK?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=n===tK?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(o,t.config.selector,function(e){return t._leave(e)})}}),e(this.element).closest(".modal").on("hide.bs.modal",function(){t.element&&t.hide()}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?tQ:tK]=!0),e(n.getTipElement()).hasClass(tB)||n._hoverState===tW?n._hoverState=tW:(clearTimeout(n._timeout),n._hoverState=tW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===tW&&n.show()},n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?tQ:tK]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){"out"===n._hoverState&&n.hide()},n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach(function(t){-1!==tj.indexOf(t)&&delete n[t]}),"number"==typeof(t=r({},this.constructor.Default,n,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),a.typeCheckConfig(tN,t,this.constructor.DefaultType),t.sanitize&&(t.template=tO(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(tH);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(tq),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(tk),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data(tk,i)),"string"==typeof n)){if(void 0===i[n])throw TypeError('No method named "'+n+'"');i[n]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return tM}},{key:"NAME",get:function(){return tN}},{key:"DATA_KEY",get:function(){return tk}},{key:"Event",get:function(){return tU}},{key:"EVENT_KEY",get:function(){return tL}},{key:"DefaultType",get:function(){return tR}}]),t}();e.fn[tN]=tV._jQueryInterface,e.fn[tN].Constructor=tV,e.fn[tN].noConflict=function(){return e.fn[tN]=tP,tV._jQueryInterface};var tY="popover",tz="bs.popover",tX="."+tz,tG=e.fn[tY],tJ="bs-popover",t$=RegExp("(^|\\s)"+tJ+"\\S+","g"),tZ=r({},tV.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),t0=r({},tV.DefaultType,{content:"(string|element|function)"}),t1={HIDE:"hide"+tX,HIDDEN:"hidden"+tX,SHOW:"show"+tX,SHOWN:"shown"+tX,INSERTED:"inserted"+tX,CLICK:"click"+tX,FOCUSIN:"focusin"+tX,FOCUSOUT:"focusout"+tX,MOUSEENTER:"mouseenter"+tX,MOUSELEAVE:"mouseleave"+tX},t3=function(t){function n(){return t.apply(this,arguments)||this}n.prototype=Object.create(t.prototype),(n.prototype.constructor=n).__proto__=t;var i=n.prototype;return i.isWithContent=function(){return this.getTitle()||this._getContent()},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass(tJ+"-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},i._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(t$);null!==n&&0<n.length&&t.removeClass(n.join(""))},n._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(tz),o="object"==typeof t?t:null;if((i||!/dispose|hide/.test(t))&&(i||(i=new n(this,o),e(this).data(tz,i)),"string"==typeof t)){if(void 0===i[t])throw TypeError('No method named "'+t+'"');i[t]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return tZ}},{key:"NAME",get:function(){return tY}},{key:"DATA_KEY",get:function(){return tz}},{key:"Event",get:function(){return t1}},{key:"EVENT_KEY",get:function(){return tX}},{key:"DefaultType",get:function(){return t0}}]),n}(tV);e.fn[tY]=t3._jQueryInterface,e.fn[tY].Constructor=t3,e.fn[tY].noConflict=function(){return e.fn[tY]=tG,t3._jQueryInterface};var t2="scrollspy",t4="bs.scrollspy",t5="."+t4,t9=e.fn[t2],t6={offset:10,method:"auto",target:""},t7={offset:"number",method:"string",target:"(string|element)"},t8={ACTIVATE:"activate"+t5,SCROLL:"scroll"+t5,LOAD_DATA_API:"load"+t5+".data-api"},et="active",ee=".nav, .list-group",en=".nav-link",ei=".list-group-item",eo="position",er=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+en+","+this._config.target+" "+ei+","+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(t8.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":eo,i="auto"===this._config.method?n:this._config.method,o=i===eo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var n,r=a.getSelectorFromElement(t);if(r&&(n=document.querySelector(r)),n){var s=n.getBoundingClientRect();if(s.width||s.height)return[e(n)[i]().top+o,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},n.dispose=function(){e.removeData(this._element,t4),e(this._scrollElement).off(t5),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=r({},t6,"object"==typeof t&&t?t:{})).target){var n=e(t.target).attr("id");n||(n=a.getUID(t2),e(t.target).attr("id",n)),t.target="#"+n}return a.typeCheckConfig(t2,t,t7),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass(et),i.addClass(et)):(i.addClass(et),i.parents(ee).prev(en+", "+ei).addClass(et),i.parents(ee).prev(".nav-item").children(en).addClass(et)),e(this._scrollElement).trigger(t8.ACTIVATE,{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(et)}).forEach(function(t){return t.classList.remove(et)})},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(t4);if(i||(i=new t(this,"object"==typeof n&&n),e(this).data(t4,i)),"string"==typeof n){if(void 0===i[n])throw TypeError('No method named "'+n+'"');i[n]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return t6}}]),t}();e(window).on(t8.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);er._jQueryInterface.call(i,i.data())}}),e.fn[t2]=er._jQueryInterface,e.fn[t2].Constructor=er,e.fn[t2].noConflict=function(){return e.fn[t2]=t9,er._jQueryInterface};var es="bs.tab",ea="."+es,el=e.fn.tab,ec={HIDE:"hide"+ea,HIDDEN:"hidden"+ea,SHOW:"show"+ea,SHOWN:"shown"+ea,CLICK_DATA_API:"click"+ea+".data-api"},eh="active",eu="fade",ef="show",ed=".active",ep="> li > .active",em=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(eh)||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],r=a.getSelectorFromElement(this._element);if(o){var s="UL"===o.nodeName||"OL"===o.nodeName?ep:ed;i=(i=e.makeArray(e(o).find(s)))[i.length-1]}var l=e.Event(ec.HIDE,{relatedTarget:this._element}),c=e.Event(ec.SHOW,{relatedTarget:i});if(i&&e(i).trigger(l),e(this._element).trigger(c),!c.isDefaultPrevented()&&!l.isDefaultPrevented()){r&&(n=document.querySelector(r)),this._activate(this._element,o);var h=function(){var n=e.Event(ec.HIDDEN,{relatedTarget:t._element}),o=e.Event(ec.SHOWN,{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,es),this._element=null},n._activate=function(t,n,i){var o=this,r=(n&&("UL"===n.nodeName||"OL"===n.nodeName)?e(n).find(ep):e(n).children(ed))[0],s=i&&r&&e(r).hasClass(eu),l=function(){return o._transitionComplete(t,r,i)};if(r&&s){var c=a.getTransitionDurationFromElement(r);e(r).removeClass(ef).one(a.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass(eh);var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass(eh),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(eh),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),a.reflow(t),t.classList.contains(eu)&&t.classList.add(ef),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var r=e(t).closest(".dropdown")[0];if(r){var s=[].slice.call(r.querySelectorAll(".dropdown-toggle"));e(s).addClass(eh)}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),o=i.data(es);if(o||(o=new t(this),i.data(es,o)),"string"==typeof n){if(void 0===o[n])throw TypeError('No method named "'+n+'"');o[n]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(ec.CLICK_DATA_API,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(t){t.preventDefault(),em._jQueryInterface.call(e(this),"show")}),e.fn.tab=em._jQueryInterface,e.fn.tab.Constructor=em,e.fn.tab.noConflict=function(){return e.fn.tab=el,em._jQueryInterface};var eg="toast",e_="bs.toast",ev="."+e_,ey=e.fn[eg],eE={CLICK_DISMISS:"click.dismiss"+ev,HIDE:"hide"+ev,HIDDEN:"hidden"+ev,SHOW:"show"+ev,SHOWN:"shown"+ev},eb="hide",ew="show",eC="showing",eT={animation:"boolean",autohide:"boolean",delay:"number"},eS={animation:!0,autohide:!0,delay:500},eD=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this;e(this._element).trigger(eE.SHOW),this._config.animation&&this._element.classList.add("fade");var n=function(){t._element.classList.remove(eC),t._element.classList.add(ew),e(t._element).trigger(eE.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(eb),this._element.classList.add(eC),this._config.animation){var i=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},n.hide=function(t){var n=this;this._element.classList.contains(ew)&&(e(this._element).trigger(eE.HIDE),t?this._close():this._timeout=setTimeout(function(){n._close()},this._config.delay))},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ew)&&this._element.classList.remove(ew),e(this._element).off(eE.CLICK_DISMISS),e.removeData(this._element,e_),this._element=null,this._config=null},n._getConfig=function(t){return t=r({},eS,e(this._element).data(),"object"==typeof t&&t?t:{}),a.typeCheckConfig(eg,t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on(eE.CLICK_DISMISS,'[data-dismiss="toast"]',function(){return t.hide(!0)})},n._close=function(){var t=this,n=function(){t._element.classList.add(eb),e(t._element).trigger(eE.HIDDEN)};if(this._element.classList.remove(ew),this._config.animation){var i=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),o=i.data(e_);if(o||(o=new t(this,"object"==typeof n&&n),i.data(e_,o)),"string"==typeof n){if(void 0===o[n])throw TypeError('No method named "'+n+'"');o[n](this)}})},o(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return eT}},{key:"Default",get:function(){return eS}}]),t}();e.fn[eg]=eD._jQueryInterface,e.fn[eg].Constructor=eD,e.fn[eg].noConflict=function(){return e.fn[eg]=ey,eD._jQueryInterface},function(){if(void 0===e)throw TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=a,t.Alert=d,t.Button=C,t.Carousel=R,t.Collapse=J,t.Dropdown=tf,t.Modal=tS,t.Popover=t3,t.Scrollspy=er,t.Tab=em,t.Toast=eD,t.Tooltip=tV,Object.defineProperty(t,"__esModule",{value:!0})}({},i("6KOho"),i("kJWRP"));//# sourceMappingURL=index.81fe2e82.js.map

//# sourceMappingURL=index.81fe2e82.js.map
