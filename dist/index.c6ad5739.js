var e,t;e="undefined"!=typeof window?window:this,t=function(e,t){var n,r=[],i=e.document,o=Object.getPrototypeOf,a=r.slice,s=r.concat,u=r.push,l=r.indexOf,c={},f=c.toString,p=c.hasOwnProperty,d=p.toString,h=d.call(Object),g={};function v(e,t){var n=(t=t||i).createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var m="3.2.1",y=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new y.fn.init(e,t)},// Make sure we trim BOM and NBSP
x=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,b=/^-ms-/,w=/-([a-z])/g,T=function(e,t){return t.toUpperCase()};function C(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=y.type(e);return!("function"===n||y.isWindow(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}y.fn=y.prototype={// The current version of jQuery being used
jquery:m,constructor:y,// The default length of a jQuery object is 0
length:0,toArray:function(){return a.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?a.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=y.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return y.each(this,e)},map:function(e){return this.pushStack(y.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:u,sort:r.sort,splice:r.splice},y.extend=y.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,// Skip the boolean and the target
a=arguments[s]||{},s++),"object"==typeof a||y.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(y.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&y.isPlainObject(n)?n:{},// Never move original objects, clone them
a[t]=y.extend(l,o,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},y.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isFunction:function(e){return"function"===y.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=y.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===f.call(e)&&(!(t=o(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=p.call(t,"constructor")&&t.constructor)&&d.call(n)===h))},isEmptyObject:function(e){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[f.call(e)]||"object":typeof e},// Evaluates a script in a global context
globalEval:function(e){v(e)},// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(b,"ms-").replace(w,T)},each:function(e,t){var n,r=0;if(C(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(x,"")},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?y.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,a=[];// Go through the array, translating each of the items to their new values
if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);// Flatten any nested arrays
return s.apply([],a)},// A global GUID counter for objects
guid:1,// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,t){var n,r,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),y.isFunction(e))return(// Simulated bind
r=a.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,r.concat(a.call(arguments)))}).guid=e.guid=e.guid||y.guid++,i)},now:Date.now,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:g}),"function"==typeof Symbol&&(y.fn[Symbol.iterator]=r[Symbol.iterator]),// Populate the class2type map
y.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});var E=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,v,m,y,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ea(),k=ea(),S=ea(),N=function(e,t){return e===t&&(f=!0),0},D={}.hasOwnProperty,j=[],A=j.pop,q=j.push,L=j.push,H=j.slice,// https://jsperf.com/thor-indexof-vs-for/5
F=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return -1},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// http://www.w3.org/TR/css3-selectors/#whitespace
P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+P+"*("+R+")(?:"+P+// Operator (capture 2)
"*([*^$|!~]?=)"+P+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+P+"*\\]",I=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",W=RegExp(P+"+","g"),$=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),B=RegExp("^"+P+"*,"+P+"*"),_=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),z=RegExp("="+P+"*([^\\]'\"]*?)"+P+"*\\]","g"),X=new RegExp(I),U=RegExp("^"+R+"$"),V={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R+"|[*])"),ATTR:RegExp("^"+M),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+O+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Z=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},// https://drafts.csswg.org/cssom/#common-serializing-idioms
et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,en=function(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
er=function(){p()},ei=ev(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{L.apply(j=H.call(w.childNodes),w.childNodes),// Support: Android<4.0
// Detect silently failing push.apply
j[w.childNodes.length].nodeType}catch(e){L={apply:j.length?function(e,t){q.apply(e,H.call(t))}:// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function eo(e,t,r,i){var o,s,l,c,f,h,m,y=t&&t.ownerDocument,T=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==T&&(f=J.exec(e))){// ID selector
if(o=f[1]){// Document context
if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r;// Element context
}else // TODO: identify versions
// getElementById can match elements by name instead of ID
if(y&&(l=y.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;else if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}// Take advantage of querySelectorAll
if(n.qsa&&!S[e+" "]&&(!v||!v.test(e))){if(1!==T)y=t,m=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(et,en):t.setAttribute("id",c=b),s=// Prefix every selector in the list
(h=a(e)).length;s--;)h[s]="#"+c+" "+eg(h[s]);m=h.join(","),// Expand context for sibling selectors
y=K.test(e)&&ed(t.parentNode)||t}if(m)try{return L.apply(r,y.querySelectorAll(m)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}// All others
return u(e.replace($,"$1"),t,r,i)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ea(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function es(e){return e[b]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function eu(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function el(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function ec(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;// Use IE sourceIndex if available on both nodes
if(r)return r;// Check if b follows a
if(n){for(;n=n.nextSibling;)if(n===t)return -1}return e?1:-1}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function ef(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in t)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
/* jshint -W018 */!e!==t.isDisabled&&ei(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function ep(e){return es(function(t){return t=+t,es(function(n,r){// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function ed(e){return e&&void 0!==e.getElementsByTagName&&e}// Add button/input type pseudos
for(t in // Expose support vars for convenience
n=eo.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */o=eo.isXML=function(e){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */p=eo.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement&&(h=// Update global variables
(d=a).documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",er,!1):i.attachEvent&&i.attachEvent("onunload",er)),/* Attributes
	---------------------------------------------------------------------- */// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
n.attributes=eu(function(e){return e.className="i",!e.getAttribute("className")}),/* getElement(s)By*
	---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
n.getElementsByTagName=eu(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),// Support: IE<9
n.getElementsByClassName=Q.test(d.getElementsByClassName),// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
n.getById=eu(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if(// Verify the id attribute
(n=o.getAttributeNode("id"))&&n.value===e)return[o];for(// Fall back on getElementsByName
i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);// Filter out possible comments
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},// Class
r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
m=[],// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
v=[],(n.qsa=Q.test(d.querySelectorAll))&&(// Build QSA regex
// Regex strategy adopted from Diego Perini
eu(function(e){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+P+"*(?:value|"+O+")"),e.querySelectorAll("[id~="+b+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||v.push(".#.+[+~]")}),eu(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+P+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=Q.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&eu(function(e){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
n.disconnectedMatch=y.call(e,"*"),// This should fail with an exception
// Gecko does not error, returns false instead
y.call(e,"[s!='']:x"),m.push("!=",I)}),v=v.length&&new RegExp(v.join("|")),m=m.length&&new RegExp(m.join("|")),// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
x=/* Contains
	---------------------------------------------------------------------- */(t=Q.test(h.compareDocumentPosition))||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&1===r.nodeType&&(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t){for(;t=t.parentNode;)if(t===e)return!0}return!1},/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
N=t?function(e,t){// Flag for duplicate removal
if(e===t)return f=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&// Calculate position if both inputs belong to the same document
(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?// Choose the first element that is related to our preferred document
e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){// Exit early if the nodes are identical
if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];// Parentless nodes are either documents or disconnected
if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?F(c,e)-F(c,t):0;if(i===o)return ec(e,t);for(// Otherwise we need full lists of their ancestors for comparison
n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);// Walk down the tree looking for a discrepancy
for(;a[r]===s[r];)r++;return r?ec(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0}),d},eo.matches=function(e,t){return eo(e,null,null,t)},eo.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),// Make sure that attribute selectors are quoted
t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!m||!m.test(t))&&(!v||!v.test(t)))try{var r=y.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(r||n.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return r}catch(e){}return eo(t,d,null,[e]).length>0},eo.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},eo.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},eo.escape=function(e){return(e+"").replace(et,en)},eo.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */eo.uniqueSort=function(e){var t,r=[],i=0,o=0;if(// Unless we *know* we can detect duplicates, assume their presence
f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(N),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
c=null,e)},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */i=eo.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);// Do not include comment or processing instruction nodes
return n},(r=eo.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:es,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||eo.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&eo.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&// Get excess from tokenize (recursively)
(t=a(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"),E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=eo.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(v){// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
h=g="only"===e&&!h&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(h=[a?v.firstChild:v.lastChild],a&&y){for(x=(d=(l=// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
(c=(f=// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
(p=v)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||// Fallback to seeking `elem` from the start
(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(y&&(x=d=(l=// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
(c=(f=// ...in a gzip-friendly way
(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)// Use the same loop as above to seek `elem` from the start
for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&(!((s?p.nodeName.toLowerCase()===m:1===p.nodeType)&&++x)||(y&&(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
(c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p!==t)););return(// Incorporate the offset, then check against cycle size
(x-=i)===r||x%r==0&&x/r>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||eo.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?es(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)r=F(e,o[a]),e[r]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i)}},pseudos:{// Potentially complex pseudos
not:es(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=s(e.replace($,"$1"));return r[b]?es(function(e,t,n,i){// Match elements unmatched by `matcher`
for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),// Don't keep the element (issue #299)
t[0]=null,!n.pop()}}),has:es(function(e){return function(t){return eo(e,t).length>0}}),contains:es(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:es(function(e){return U.test(e||"")||eo.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:ef(!1),disabled:ef(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},// Element/input types
header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:ep(function(){return[0]}),last:ep(function(e,t){return[t-1]}),eq:ep(function(e,t,n){return[n<0?n+t:n]}),even:ep(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ep(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ep(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:ep(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(t);// Easy API for creating new setFilters
function eh(){}function eg(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ev(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a){if(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=(f=t[b]||(t[b]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
c[o]=p,p[2]=e(t,n,u))return!0}}return!1}}function em(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ey(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}return eh.prototype=r.filters=r.pseudos,r.setFilters=new eh,a=eo.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){// Filters
for(a in(!n||(i=B.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,// Cast descendant combinators to space
type:i[0].replace($," ")}),s=s.slice(n.length)),r.filter)(i=V[a].exec(s))&&(!l[a]||(i=l[a](i)))&&(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?s.length:s?eo.error(e):k(e,u).slice(0)},s=eo.compile=function(e,t/* Internal Use Only */){var n,i,o,s,u=[],c=[],f=S[e+" "];if(!f){for(t||(t=a(e)),s=t.length;s--;)(f=function e(t){for(var n,i,o,a=t.length,s=r.relative[t[0].type],u=s||r.relative[" "],c=s?1:0,f=ev(function(e){return e===n},u,!0),p=ev(function(e){return F(n,e)>-1},u,!0),d=[function(e,t,r){var i=!s&&(r||t!==l)||((n=t).nodeType?f(e,t,r):p(e,t,r));return(// Avoid hanging onto element (issue #299)
n=null,i)}];c<a;c++)if(i=r.relative[t[c].type])d=[ev(em(d),i)];else{// Return special upon seeing a positional matcher
if((i=r.filter[t[c].type].apply(null,t[c].matches))[b]){for(// Find the next relative operator (if any) for proper handling
o=++c;o<a&&!r.relative[t[o].type];o++);return function e(t,n,r,i,o,a){return i&&!i[b]&&(i=e(i)),o&&!o[b]&&(o=e(o,a)),es(function(e,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)eo(e,t[r],n);return n}(n||"*",s.nodeType?[s]:s,[]),v=t&&(e||!n)?ey(g,p,t,s,u):g,m=r?o||(e?t:h||i)?[]:a:v;// Apply postFilter
if(r&&r(v,m,s,u),i)for(l=ey(m,d),i(l,[],s,u),// Un-match failing elements by moving them back to matcherIn
c=l.length;c--;)(f=l[c])&&(m[d[c]]=!(v[d[c]]=f));if(e){if(o||t){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
l=[],c=m.length;c--;)(f=m[c])&&l.push(v[c]=f);o(null,m=[],l,u)}for(// Move matched elements from seed to results to keep them synchronized
c=m.length;c--;)(f=m[c])&&(l=o?F(e,f):p[c])>-1&&(e[l]=!(a[l]=f))}}else m=ey(m===a?m.splice(h,m.length):m),o?o(null,a,m,u):L.apply(a,m)})}(c>1&&em(d),c>1&&eg(t.slice(0,c-1).concat({value:" "===t[c-2].type?"*":""})).replace($,"$1"),i,c<o&&e(t.slice(c,o)),o<a&&e(t=t.slice(o)),o<a&&eg(t))}d.push(i)}return em(d)}(t[s]))[b]?u.push(f):c.push(f);// Save selector and tokenization
// Cache the compiled function
(f=S(e,(n=u.length>0,i=c.length>0,o=function(e,t,o,a,s){var f,h,v,m=0,y="0",x=e&&[],b=[],w=l,C=e||i&&r.find.TAG("*",s),E=T+=null==w?1:Math.random()||.1,k=C.length;// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(s&&(l=t===d||t||s);y!==k&&null!=(f=C[y]);y++){if(i&&f){for(h=0,t||f.ownerDocument===d||(p(f),o=!g);v=c[h++];)if(v(f,t||d,o)){a.push(f);break}s&&(T=E)}n&&((f=!v&&f)&&m--,e&&x.push(f))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
m+=y,n&&y!==m){for(h=0;v=u[h++];)v(x,b,t,o);if(e){// Reintegrate element matches to eliminate the need for sorting
if(m>0)for(;y--;)x[y]||b[y]||(b[y]=A.call(a));// Discard index placeholder values to get only actual matches
b=ey(b)}// Add matches to results
L.apply(a,b),s&&!e&&b.length>0&&m+u.length>1&&eo.uniqueSort(a)}return s&&(T=E,l=w),x},n?es(o):o))).selector=e}return f},/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */u=eo.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===d.length){if(// Reduce context if the leading compound selector is an ID
(u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=V.needsContext.test(e)?0:u.length;// Abort if we hit a combinator
o--&&(l=u[o],!r.relative[c=l.type]);)if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ed(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
u.splice(o,1),!(e=i.length&&eg(u)))return L.apply(n,i),n;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ed(t.parentNode)||t),n)},// One-time assignments
// Sort stability
n.sortStable=b.split("").sort(N).join("")===b,// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
n.detectDuplicates=!!f,// Initialize against the default document
p(),// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
n.sortDetached=eu(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),eu(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||el("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&eu(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||el("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),eu(function(e){return null==e.getAttribute("disabled")})||el(O,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),eo}(e);y.find=E,y.expr=E.selectors,// Deprecated
y.expr[":"]=y.expr.pseudos,y.uniqueSort=y.unique=E.uniqueSort,y.text=E.getText,y.isXMLDoc=E.isXML,y.contains=E.contains,y.escapeSelector=E.escape;var k=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&y(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=y.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var j=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,A=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
function q(e,t,n){return y.isFunction(t)?y.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?y.grep(e,function(e){return e===t!==n}):"string"!=typeof t?y.grep(e,function(e){return l.call(t,e)>-1!==n}):A.test(t)?y.filter(t,e,n):(// Complex selector, compare the two sets, removing non-Elements
t=y.filter(t,e),y.grep(e,function(e){return l.call(t,e)>-1!==n&&1===e.nodeType}))}y.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?y.find.matchesSelector(r,e)?[r]:[]:y.find.matches(e,y.grep(t,function(e){return 1===e.nodeType}))},y.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(y(e).filter(function(){for(t=0;t<r;t++)if(y.contains(i[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)y.find(e,i[t],n);return r>1?y.uniqueSort(n):n},filter:function(e){return this.pushStack(q(this,e||[],!1))},not:function(e){return this.pushStack(q(this,e||[],!0))},is:function(e){return!!q(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&N.test(e)?y(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var L,// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
H=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(y.fn.init=function(e,t,n){var r,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||L,"string"==typeof e){// Match html or make sure no context is specified for #id
if((r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:H.exec(e))&&(r[1]||!t)){// HANDLE: $(html) -> $(array)
if(!r[1])return(o=i.getElementById(r[2]))&&(// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof y?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
y.merge(this,y.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:i,!0)),j.test(r[1])&&y.isPlainObject(t))for(r in t)y.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):y.isFunction(e)?void 0!==n.ready?n.ready(e):e(y):y.makeArray(e,this)}).prototype=y.fn,// Initialize central reference
L=y(i);var F=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}y.fn.extend({has:function(e){var t=y(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(y.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&y(e);// Positional selectors never match, since there's no _selection_ context
if(!N.test(e)){for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&y.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?y.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?l.call(y(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(y.uniqueSort(y.merge(this.get(),y(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),y.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),y.merge([],e.childNodes))}},function(e,t){y.fn[e]=function(n,r){var i=y.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=y.filter(r,i)),this.length>1&&(O[e]||y.uniqueSort(i),F.test(e)&&i.reverse()),this.pushStack(i)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&y.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&y.isFunction(i=e.then)?i.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(r));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */y.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},y.each(t.match(R)||[],function(e,t){n[t]=!0}),n):y.extend({},e);var t,n,r,i,o,a,s=[],u=[],l=-1,c=function(){for(// Enforce single-firing
a=a||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=r=!0;u.length;l=-1)for(i=u.shift();++l<s.length;)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
l=s.length,i=!1);e.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){y.each(n,function(n,r){y.isFunction(r)?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==y.type(r)&&t(r)})}(arguments),i&&!r&&c()),this},// Remove a callback from the list
remove:function(){return y.each(arguments,function(e,t){for(var n;(n=y.inArray(t,s,n))>-1;)s.splice(n,1),n<=l&&l--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?y.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return f},y.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",y.Callbacks("memory"),y.Callbacks("memory"),2],["resolve","done",y.Callbacks("once memory"),y.Callbacks("once memory"),0,"resolved"],["reject","fail",y.Callbacks("once memory"),y.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return y.Deferred(function(t){y.each(n,function(n,r){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=y.isFunction(e[r[4]])&&e[r[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&y.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=r.apply(s,u))===n.promise())throw TypeError("Thenable self-resolution");// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then,y.isFunction(l)?i?l.call(e,a(o,n,M,i),a(o,n,I,i)):(// ...and disregard older resolution values
o++,l.call(e,a(o,n,M,i),a(o,n,I,i),a(o,n,M,n.notifyWith))):(r!==M&&(s=void 0,u=[e]),// Process the value(s)
// Default process is resolve
(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){y.Deferred.exceptionHook&&y.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==I&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(y.Deferred.getStackHook&&(c.stackTrace=y.Deferred.getStackHook()),e.setTimeout(c))}}return y.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(a(0,e,y.isFunction(i)?i:M,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(a(0,e,y.isFunction(t)?t:M)),// rejected_handlers.add( ... )
n[2][3].add(a(0,e,y.isFunction(r)?r:I))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?y.extend(e,i):i}},o={};// All done!
return(// Add list-specific methods
y.each(n,function(e,t){var a=t[2],s=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
i[t[1]]=a.add,s&&a.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=s},// fulfilled_callbacks.disable
n[3-e][2].disable,n[0][2].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[t[0]+"With"]=a.fireWith}),// Make the deferred a promise
i.promise(o),t&&t.call(o,o),o)},// Deferred helper
when:function(e){var t=arguments.length,n=t,r=Array(n),i=a.call(arguments),o=y.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(r,i)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(W(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||y.isFunction(i[n]&&i[n].then)))return o.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)W(i[n],s(n),o.reject);return o.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;y.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&$.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},y.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var B=y.Deferred();// The ready event handler and self cleanup method
function _(){i.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),y.ready()}y.fn.ready=function(e){return B.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){y.readyException(e)}),this},y.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){!(!0===e?--y.readyWait:y.isReady)&&(// Remember that the DOM is ready
y.isReady=!0,!0!==e&&--y.readyWait>0||// If there are functions bound, to execute
B.resolveWith(i,[y]))}}),y.ready.then=B.then,"complete"!==i.readyState&&("loading"===i.readyState||i.documentElement.doScroll)?(// Use the handy event callback
i.addEventListener("DOMContentLoaded",_),// A fallback to window.onload, that will always work
e.addEventListener("load",_)):e.setTimeout(y.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;// Sets many values
if("object"===y.type(n))for(s in i=!0,n)z(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,y.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(y(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function U(){this.expando=y.expando+U.uid++}U.uid=1,U.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[y.camelCase(t)]=n;else for(r in t)i[y.camelCase(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][y.camelCase(t)]},access:function(e,t,n){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t))},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t)for(n=(// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(y.camelCase):((t=y.camelCase(t))in r)?[t]:t.match(R)||[]).length;n--;)delete r[t[n]];(void 0===t||y.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!y.isEmptyObject(t)}};var V=new U,G=new U,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function J(e,t,n){var r,i;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(Q,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{i=n,n="true"===i||"false"!==i&&("null"===i?null:i===+i+""?+i:Y.test(i)?JSON.parse(i):i)}catch(e){}// Make sure we set the data so it isn't changed later
G.set(e,t,n)}else n=void 0}return n}y.extend({hasData:function(e){return G.hasData(e)||V.hasData(e)},data:function(e,t,n){return G.access(e,t,n)},removeData:function(e,t){G.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return V.access(e,t,n)},_removeData:function(e,t){V.remove(e,t)}}),y.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(i=G.get(o),1===o.nodeType&&!V.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&J(o,r=y.camelCase(r.slice(5)),i[r]);V.set(o,"hasDataAttrs",!0)}return i}return(// Sets multiple values
"object"==typeof e?this.each(function(){G.set(this,e)}):z(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=G.get(o,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=J(o,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
G.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){G.remove(this,e)})}}),y.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=V.get(e,t),n&&(!r||Array.isArray(n)?r=V.access(e,t,y.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=y.queue(e,t),r=n.length,i=n.shift(),o=y._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,i.call(e,function(){y.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return V.get(e,n)||V.access(e,n,{empty:y.Callbacks("once memory").add(function(){V.remove(e,[t+"queue",n])})})}}),y.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?y.queue(this[0],e):void 0===t?this:this.each(function(){var n=y.queue(this,e,t);// Ensure a hooks for this queue
y._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&y.dequeue(this,e)})},dequeue:function(e){return this.each(function(){y.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=y.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=V.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var K=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Z=RegExp("^(?:([+-])=|)("+K+")([a-z%]*)$","i"),ee=["Top","Right","Bottom","Left"],et=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
y.contains(e.ownerDocument,e)&&"none"===y.css(e,"display")},en=function(e,t,n,r){var i,o,a={};// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];// Revert the old values
for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function er(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return y.css(e,t,"")},u=s(),l=n&&n[3]||(y.cssNumber[t]?"":"px"),c=(y.cssNumber[t]||"px"!==l&&+u)&&Z.exec(y.css(e,t));if(c&&c[3]!==l){// Trust units reported by jQuery.css
l=l||c[3],// Make sure we update the tween properties later on
n=n||[],// Iteratively approximate from a nonzero starting point
c=+u||1;do // Adjust and apply
c/=// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
o=o||".5",y.style(e,t,c+l);while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,// Apply relative offset (+=/-=) if specified
i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ei={};function eo(e,t){// Determine new display value for elements that need to change
for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"!==n||(i[o]=V.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&et(r)&&(i[o]=function(e){var t,n=e.ownerDocument,r=e.nodeName,i=ei[r];return i||(t=n.body.appendChild(n.createElement(r)),i=y.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ei[r]=i),i}(r))):"none"!==n&&(i[o]="none",// Remember what we're overwriting
V.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}y.fn.extend({show:function(){return eo(this,!0)},hide:function(){return eo(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){et(this)?y(this).show():y(this).hide()})}});var ea=/^(?:checkbox|radio)$/i,es=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,eu=/^$|\/(?:java|ecma)script/i,el={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ec(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t))?y.merge([e],n):n}// Mark scripts as having already been evaluated
function ef(e,t){for(var n=0,r=e.length;n<r;n++)V.set(e[n],"globalEval",!t||V.get(t[n],"globalEval"))}// Support: IE <=9 only
el.optgroup=el.option,el.tbody=el.tfoot=el.colgroup=el.caption=el.thead,el.th=el.td;var ep=/<|&#?\w+;/;function ed(e,t,n,r,i){for(var o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if((o=e[p])||0===o){// Add nodes directly
if("object"===y.type(o))// push.apply(_, arraylike) throws on ancient WebKit
y.merge(f,o.nodeType?[o]:o);else if(ep.test(o)){for(a=a||c.appendChild(t.createElement("div")),s=el[(es.exec(o)||["",""])[1].toLowerCase()]||el._default,a.innerHTML=s[1]+y.htmlPrefilter(o)+s[2],// Descend through wrappers to the right content
l=s[0];l--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
y.merge(f,a.childNodes),// Ensure the created nodes are orphaned (#12392)
// Remember the top-level container
(a=c.firstChild).textContent=""}else f.push(t.createTextNode(o))}for(// Remove wrapper from fragment
c.textContent="",p=0;o=f[p++];){// Skip elements already in the context collection (trac-4087)
if(r&&y.inArray(o,r)>-1){i&&i.push(o);continue}// Capture executables
if(u=y.contains(o.ownerDocument,o),// Append to fragment
a=ec(c.appendChild(o),"script"),u&&ef(a),n)for(l=0;o=a[l++];)eu.test(o.type||"")&&n.push(o)}return c}eY=i.createDocumentFragment().appendChild(i.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(eQ=i.createElement("input")).setAttribute("type","radio"),eQ.setAttribute("checked","checked"),eQ.setAttribute("name","t"),eY.appendChild(eQ),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
g.checkClone=eY.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
eY.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!eY.cloneNode(!0).lastChild.defaultValue;var eh=i.documentElement,eg=/^key/,ev=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,em=/^([^.]*)(?:\.(.+)|)/;function ey(){return!0}function ex(){return!1}// Support: IE <=9 only
// See #13393 for more info
function eb(){try{return i.activeElement}catch(e){}}function ew(e,t,n,r,i,o){var a,s;// Types can be a map of types/handlers
if("object"==typeof t){for(s in"string"!=typeof n&&(// ( types-Object, data )
r=r||n,n=void 0),t)ew(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(// ( types, selector, fn )
i=r,r=void 0):(// ( types, data, fn )
i=r,r=n,n=void 0)),!1===i)i=ex;else if(!i)return e;return 1===o&&(a=i,// Use same guid so caller can remove using origFn
(i=function(e){return(// Can use an empty set, since event contains the info
y().off(e),a.apply(this,arguments))}).guid=a.guid||(a.guid=y.guid++)),e.each(function(){y.event.add(this,t,i,r,n)})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */y.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=V.get(e);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(v)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&y.find.matchesSelector(eh,i),n.guid||(n.guid=y.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return y.event.triggered!==t.type?y.event.dispatch.apply(e,arguments):void 0}),l=// Handle multiple events separated by a space
(t=(t||"").match(R)||[""]).length;l--;)d=g=(s=em.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(// If event changes its type, use the special event handlers for the changed type
f=y.event.special[d]||{},// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,// Update special based on newly reset type
f=y.event.special[d]||{},// handleObj is passed to all event handlers
c=y.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&y.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),// Keep track of which events have ever been used, for event optimization
y.event.global[d]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=V.hasData(e)&&V.get(e);if(v&&(u=v.events)){for(l=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(R)||[""]).length;l--;){// Unbind all events (on this namespace, if provided) for the element
if(d=g=(s=em.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d){for(d in u)y.event.remove(e,d+t[l],n,r,!0);continue}for(f=y.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=o=p.length;o--;)c=p[o],(i||g===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||y.removeEvent(e,d,v.handle),delete u[d])}y.isEmptyObject(u)&&V.remove(e,"handle events")}},dispatch:function(e){// Make a writable jQuery.Event from the native event object
var t,n,r,i,o,a,s=y.event.fix(e),u=Array(arguments.length),l=(V.get(this,"events")||{})[s.type]||[],c=y.event.special[s.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
u[0]=s;t<arguments.length;t++)u[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(// Determine handlers
a=y.event.handlers.call(this,s,l),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)(!s.rnamespace||s.rnamespace.test(o.namespace))&&(s.handleObj=o,s.data=o.data,void 0!==(r=((y.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;// Find delegate handlers
if(u&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;l!==this;l=l.parentNode||this)// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===l.nodeType&&!("click"===e.type&&!0===l.disabled)){for(n=0,o=[],a={};n<u;n++)void 0===a[// Don't conflict with Object.prototype properties (#13203)
i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?y(i,this).index(l)>-1:y.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}}return(// Add the remaining (directly-bound) handlers
l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s)},addProp:function(e,t){Object.defineProperty(y.Event.prototype,e,{enumerable:!0,configurable:!0,get:y.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[y.expando]?e:new y.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==eb()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===eb()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},y.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},y.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof y.Event))return new y.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?ey:ex,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&y.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||y.now(),// Mark it as fixed
this[y.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
y.Event.prototype={constructor:y.Event,isDefaultPrevented:ex,isPropagationStopped:ex,isImmediatePropagationStopped:ex,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ey,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ey,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ey,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
y.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return(// Add which for key events
null==e.which&&eg.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&ev.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which)}},y.event.addProp),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
y.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){y.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||y.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),y.fn.extend({on:function(e,t,n,r){return ew(this,e,t,n,r)},one:function(e,t,n,r){return ew(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
r=e.handleObj,y(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=ex),this.each(function(){y.event.remove(this,e,n,t)})}});var /* eslint-disable max-len */eT=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eC=/<script|<style|<link/i,eE=/checked\s*(?:[^=]|=\s*.checked.)/i,ek=/^true\/(.*)/,eS=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eN(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&y(">tbody",e)[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eD(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ej(e){var t=ek.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function eA(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(V.hasData(e)&&(o=V.access(e),a=V.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)y.event.add(t,i,l[i][n]);G.hasData(e)&&(s=G.access(e),u=y.extend({},s),G.set(t,u))}}function eq(e,t,n,r){// Flatten any nested arrays
t=s.apply([],t);var i,o,a,u,l,c,f=0,p=e.length,d=p-1,h=t[0],m=y.isFunction(h);// We can't cloneNode fragments that contain checked, in WebKit
if(m||p>1&&"string"==typeof h&&!g.checkClone&&eE.test(h))return e.each(function(i){var o=e.eq(i);m&&(t[0]=h.call(this,i,o.html())),eq(o,t,n,r)});if(p&&(o=(i=ed(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(u=(a=y.map(ec(i,"script"),eD)).length;f<p;f++)l=i,f!==d&&(l=y.clone(l,!0,!0),u&&// push.apply(_, arraylike) throws on ancient WebKit
y.merge(a,ec(l,"script"))),n.call(e[f],l,f);if(u)// Evaluate executable scripts on first document insertion
for(c=a[a.length-1].ownerDocument,// Reenable scripts
y.map(a,ej),f=0;f<u;f++)l=a[f],eu.test(l.type||"")&&!V.access(l,"globalEval")&&y.contains(c,l)&&(l.src?y._evalUrl&&y._evalUrl(l.src):v(l.textContent.replace(eS,""),c))}return e}function eL(e,t,n){for(var r,i=t?y.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||y.cleanData(ec(r)),r.parentNode&&(n&&y.contains(r.ownerDocument,r)&&ef(ec(r,"script")),r.parentNode.removeChild(r));return e}y.extend({htmlPrefilter:function(e){return e.replace(eT,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=y.contains(e.ownerDocument,e);// Fix IE cloning issues
if(!g.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!y.isXMLDoc(e))for(r=0,// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=ec(s),i=(o=ec(e)).length;r<i;r++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ea.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(o[r],a[r]);// Copy the events from the original to the clone
if(t){if(n)for(r=0,o=o||ec(e),a=a||ec(s),i=o.length;r<i;r++)eA(o[r],a[r]);else eA(e,s)}// Return the cloned set
return(// Preserve script evaluation history
(a=ec(s,"script")).length>0&&ef(a,!u&&ec(e,"script")),s)},cleanData:function(e){for(var t,n,r,i=y.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[V.expando]){if(t.events)for(r in t.events)i[r]?y.event.remove(n,r):y.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[V.expando]=void 0}n[G.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[G.expando]=void 0)}}}),y.fn.extend({detach:function(e){return eL(this,e,!0)},remove:function(e){return eL(this,e)},text:function(e){return z(this,function(e){return void 0===e?y.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eq(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eN(this,e).appendChild(e)})},prepend:function(){return eq(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eN(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eq(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eq(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
y.cleanData(ec(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return y.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eC.test(e)&&!el[(es.exec(e)||["",""])[1].toLowerCase()]){e=y.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(y.cleanData(ec(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eq(this,arguments,function(t){var n=this.parentNode;0>y.inArray(this,e)&&(y.cleanData(ec(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),y.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){y.fn[e]=function(e){for(var n,r=[],i=y(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),y(i[a])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
u.apply(r,n.get());return this.pushStack(r)}});var eH=/^margin/,eF=RegExp("^("+K+")(?!px)[a-z%]+$","i"),eO=function(t){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)};function eP(e,t,n){var r,i,o,a,// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;return(n=n||eO(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||y.contains(e.ownerDocument,e)||(a=y.style(e,t)),!g.pixelMarginRight()&&eF.test(a)&&eH.test(t)&&(// Remember the original values
r=s.width,i=s.minWidth,o=s.maxWidth,// Put in the new values to get a computed value out
s.minWidth=s.maxWidth=s.width=a,a=n.width,// Revert the changed values
s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?// IE returns zIndex value as an integer.
a+"":a}function eR(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(u){u.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",u.innerHTML="",eh.appendChild(s);var t=e.getComputedStyle(u);n="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
a="2px"===t.marginLeft,r="4px"===t.width,// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
u.style.marginRight="50%",o="4px"===t.marginRight,eh.removeChild(s),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}var n,r,o,a,s=i.createElement("div"),u=i.createElement("div");u.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===u.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(u),y.extend(g,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),o},reliableMarginLeft:function(){return t(),a}}))}();var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eM=/^(none|table(?!-c[ea]).+)/,eI=/^--/,eW={position:"absolute",visibility:"hidden",display:"block"},e$={letterSpacing:"0",fontWeight:"400"},eB=["Webkit","Moz","ms"],e_=i.createElement("div").style;// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function ez(e){var t=y.cssProps[e];return t||(t=y.cssProps[e]=// Return a css property mapped to a potentially vendor prefixed property
function(e){// Shortcut for names that are not vendor prefixed
if(e in e_)return e;for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eB.length;n--;)if((e=eB[n]+t)in e_)return e}(e)||e),t}function eX(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var r=Z.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function eU(e,t,n,r,i){var o,a=0;for(o=n===(r?"border":"content")?4:"width"===t?1:0;o<4;o+=2)"margin"===n&&(a+=y.css(e,n+ee[o],!0,i)),r?("content"===n&&(a-=y.css(e,"padding"+ee[o],!0,i)),"margin"!==n&&(a-=y.css(e,"border"+ee[o]+"Width",!0,i))):(// At this point, extra isn't content, so add padding
a+=y.css(e,"padding"+ee[o],!0,i),"padding"!==n&&(a+=y.css(e,"border"+ee[o]+"Width",!0,i)));return a}function eV(e,t,n){// Start with computed style
var r,i=eO(e),o=eP(e,t,i),a="border-box"===y.css(e,"boxSizing",!1,i);return(// Computed unit is not pixels. Stop here and return.
eF.test(o)?o:(// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
r=a&&(g.boxSizingReliable()||o===e.style[t]),"auto"===o&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)]),// Normalize "", auto, and prepare for extra
(o=parseFloat(o)||0)+eU(e,t,n||(a?"border":"content"),r,i)+"px"))}function eG(e,t,n,r,i){return new eG.prototype.init(e,t,n,r,i)}y.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=eP(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{float:"cssFloat"},// Get and set the style property on a DOM Node
style:function(e,t,n,r){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,o,a,s=y.camelCase(t),u=eI.test(t),l=e.style;// Check if we're setting a value
if(u||(t=ez(s)),// Gets hook for the prefixed version, then unprefixed version
a=y.cssHooks[t]||y.cssHooks[s],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t]);"string"==(o=typeof n)&&(i=Z.exec(n))&&i[1]&&(n=er(e,t,i),// Fixes bug #9237
o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(y.cssNumber[s]?"":"px")),g.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=y.camelCase(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eI.test(t)||(t=ez(s)),// Try prefixed name followed by the unprefixed name
(a=y.cssHooks[t]||y.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=eP(e,t,r)),"normal"===i&&t in e$&&(i=e$[t]),""===n||n)?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i)}}),y.each(["height","width"],function(e,t){y.cssHooks[t]={get:function(e,n,r){if(n)// but it must have a current display style that would benefit
return!eM.test(y.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?eV(e,t,r):en(e,eW,function(){return eV(e,t,r)})},set:function(e,n,r){var i,o=r&&eO(e),a=r&&eU(e,t,r,"border-box"===y.css(e,"boxSizing",!1,o),o);return a&&(i=Z.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=y.css(e,t)),eX(e,n,a)}}}),y.cssHooks.marginLeft=eR(g.reliableMarginLeft,function(e,t){if(t)return(parseFloat(eP(e,"marginLeft"))||e.getBoundingClientRect().left-en(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
y.each({margin:"",padding:"",border:"Width"},function(e,t){y.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ee[r]+t]=o[r]||o[r-2]||o[0];return i}},eH.test(e)||(y.cssHooks[e+t].set=eX)}),y.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=eO(e),i=t.length;a<i;a++)o[t[a]]=y.css(e,t[a],!1,r);return o}return void 0!==n?y.style(e,t,n):y.css(e,t)},e,t,arguments.length>1)}}),y.Tween=eG,eG.prototype={constructor:eG,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||y.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(y.cssNumber[n]?"":"px")},cur:function(){var e=eG.propHooks[this.prop];return e&&e.get?e.get(this):eG.propHooks._default.get(this)},run:function(e){var t,n=eG.propHooks[this.prop];return this.options.duration?this.pos=t=y.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):eG.propHooks._default.set(this),this}},eG.prototype.init.prototype=eG.prototype,eG.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=y.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){y.fx.step[e.prop]?y.fx.step[e.prop](e):1===e.elem.nodeType&&(null!=e.elem.style[y.cssProps[e.prop]]||y.cssHooks[e.prop])?y.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
eG.propHooks.scrollTop=eG.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},y.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},y.fx=eG.prototype.init,// Back compat <1.8 extension point
y.fx.step={};var eY,eQ,eJ,eK,eZ=/^(?:toggle|show|hide)$/,e0=/queueHooks$/;// Animations created synchronously will run synchronously
function e1(){return e.setTimeout(function(){eJ=void 0}),eJ=y.now()}// Generate parameters to create a standard animation
function e2(e,t){var n,r=0,i={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)i["margin"+(n=ee[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function e3(e,t,n){for(var r,i=(e4.tweeners[t]||[]).concat(e4.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function e4(e,t,n){var r,i,o=0,a=e4.prefilters.length,s=y.Deferred().always(function(){// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(i)return!1;for(var t=eJ||e1(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return(// If there's more to do, yield
(s.notifyWith(e,[l,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[l,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(e,[l]),!1))},l=s.promise({elem:e,props:y.extend({},t),opts:y.extend(!0,{specialEasing:{},easing:y.easing._default},n),originalProperties:t,originalOptions:n,startTime:eJ||e1(),duration:n.duration,tweens:[],createTween:function(t,n){var r=y.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[r=y.camelCase(n)],Array.isArray(o=e[n])&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=y.cssHooks[r])&&("expand"in a))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=a.expand(o),delete e[r],o)(n in e)||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=e4.prefilters[o].call(l,e,c,l.opts))return y.isFunction(r.stop)&&(y._queueHooks(l.elem,l.opts.queue).stop=y.proxy(r.stop,r)),r;return y.map(c,e3,l),y.isFunction(l.opts.start)&&l.opts.start.call(e,l),// Attach callbacks from options
l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),y.fx.timer(y.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}y.Animation=y.extend(e4,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return er(n.elem,e,Z.exec(t),n),n}]},tweener:function(e,t){y.isFunction(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],e4.tweeners[n]=e4.tweeners[n]||[],e4.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&et(e),v=V.get(e,"fxshow");// Detect show/hide animations
for(r in n.queue||(null==(a=y._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,y.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],eZ.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||y.style(e,r)}if(!(!// Bail out if this is a no-op like .hide().hide()
(u=!y.isEmptyObject(t))&&y.isEmptyObject(d)))for(r in f&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(l=v&&v.display)&&(l=V.get(e,"display")),"none"===(c=y.css(e,"display"))&&(l?c=l:(// Get nonempty value(s) by temporarily forcing visibility
eo([e],!0),l=e.style.display||l,c=y.css(e,"display"),eo([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===y.css(e,"float")&&(u||(p.done(function(){h.display=l}),null!=l||(l="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=V.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&eo([e],!0),/* eslint-disable no-loop-func */p.done(function(){for(r in g||eo([e]),V.remove(e,"fxshow"),d)y.style(e,r,d[r])})),// Per-property setup
u=e3(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?e4.prefilters.unshift(e):e4.prefilters.push(e)}}),y.speed=function(e,t,n){var r=e&&"object"==typeof e?y.extend({},e):{complete:n||!n&&t||y.isFunction(e)&&e,duration:e,easing:n&&t||t&&!y.isFunction(t)&&t};return y.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in y.fx.speeds?r.duration=y.fx.speeds[r.duration]:r.duration=y.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){y.isFunction(r.old)&&r.old.call(this),r.queue&&y.dequeue(this,r.queue)},r},y.fn.extend({fadeTo:function(e,t,n,r){// Show any hidden elements after setting opacity to 0
return this.filter(et).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=y.isEmptyObject(e),o=y.speed(t,n,r),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=e4(this,y.extend({},e),o);(i||V.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=y.timers,a=V.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&e0.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem===this&&(null==e||o[i].queue===e)&&(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&y.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=V.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=y.timers,a=r?r.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
y.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),y.each(["toggle","show","hide"],function(e,t){var n=y.fn[t];y.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(e2(t,!0),e,r,i)}}),// Generate shortcuts for custom animations
y.each({slideDown:e2("show"),slideUp:e2("hide"),slideToggle:e2("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){y.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),y.timers=[],y.fx.tick=function(){var e,t=0,n=y.timers;for(eJ=y.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||y.fx.stop(),eJ=void 0},y.fx.timer=function(e){y.timers.push(e),y.fx.start()},y.fx.interval=13,y.fx.start=function(){eK||(eK=!0,function t(){eK&&(!1===i.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,y.fx.interval),y.fx.tick())}())},y.fx.stop=function(){eK=null},y.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
y.fn.delay=function(t,n){return t=y.fx&&y.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},e5=i.createElement("input"),e9=i.createElement("select").appendChild(i.createElement("option")),e5.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
g.checkOn=""!==e5.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
g.optSelected=e9.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(e5=i.createElement("input")).value="t",e5.type="radio",g.radioValue="t"===e5.value;var e5,e9,e6,e8=y.expr.attrHandle;y.fn.extend({attr:function(e,t){return z(this,y.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){y.removeAttr(this,e)})}}),y.extend({attr:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return y.prop(e,t,n);if(1===o&&y.isXMLDoc(e)||(i=y.attrHooks[t.toLowerCase()]||(y.expr.match.bool.test(t)?e6:void 0)),void 0!==n){if(null===n){y.removeAttr(e,t);return}return i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n)}return i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=y.find.attr(e,t))?void 0:r}},attrHooks:{type:{set:function(e,t){if(!g.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(R);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
e6={set:function(e,t,n){return!1===t?y.removeAttr(e,n):e.setAttribute(n,n),n}},y.each(y.expr.match.bool.source.match(/\w+/g),function(e,t){var n=e8[t]||y.find.attr;e8[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(// Avoid an infinite loop by temporarily removing this function from the getter
o=e8[a],e8[a]=i,i=null!=n(e,t,r)?a:null,e8[a]=o),i}});var e7=/^(?:input|select|textarea|button)$/i,te=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function tt(e){return(e.match(R)||[]).join(" ")}function tn(e){return e.getAttribute&&e.getAttribute("class")||""}y.fn.extend({prop:function(e,t){return z(this,y.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[y.propFix[e]||e]})}}),y.extend({prop:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&y.isXMLDoc(e)||(// Fix name and attach hooks
t=y.propFix[t]||t,i=y.propHooks[t]),void 0!==n)?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=y.find.attr(e,"tabindex");return t?parseInt(t,10):e7.test(e.nodeName)||te.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(y.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),y.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){y.propFix[this.toLowerCase()]=this}),y.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(y.isFunction(e))return this.each(function(t){y(this).addClass(e.call(this,t,tn(this)))});if("string"==typeof e&&e){for(t=e.match(R)||[];n=this[u++];)if(i=tn(n),r=1===n.nodeType&&" "+tt(i)+" "){for(a=0;o=t[a++];)0>r.indexOf(" "+o+" ")&&(r+=o+" ");i!==// Only assign if different to avoid unneeded rendering.
(s=tt(r))&&n.setAttribute("class",s)}}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(y.isFunction(e))return this.each(function(t){y(this).removeClass(e.call(this,t,tn(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e){for(t=e.match(R)||[];n=this[u++];)if(i=tn(n),// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&" "+tt(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==// Only assign if different to avoid unneeded rendering.
(s=tt(r))&&n.setAttribute("class",s)}}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):y.isFunction(e)?this.each(function(n){y(this).toggleClass(e.call(this,n,tn(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(// Toggle individual class names
r=0,i=y(this),o=e.match(R)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(void 0===e||"boolean"===n)&&((t=tn(this))&&V.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":V.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+tt(tn(n))+" ").indexOf(t)>-1)return!0;return!1}});var tr=/\r/g;y.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=y.isFunction(e),this.each(function(n){var i;1!==this.nodeType||(null==(i=r?e.call(this,n,y(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=y.map(i,function(e){return null==e?"":e+""})),(t=y.valHooks[this.type]||y.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=y.valHooks[i.type]||y.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(tr,""):null==n?"":n:void 0}}),y.extend({valHooks:{option:{get:function(e){var t=y.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tt(y.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;// Loop through all the selected options
for(r=o<0?u:a?o:0;r<u;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=i[r]).selected||r===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=y(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=y.makeArray(t),a=i.length;a--;)((r=i[a]).selected=y.inArray(y.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
y.each(["radio","checkbox"],function(){y.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=y.inArray(y(e).val(),t)>-1}},g.checkOn||(y.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var ti=/^(?:focusinfocus|focusoutblur)$/;y.extend(y.event,{trigger:function(t,n,r,o){var a,s,u,l,c,f,d,h=[r||i],g=p.call(t,"type")?t.type:t,v=p.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(s=u=r=r||i,!(3===r.nodeType||8===r.nodeType||ti.test(g+y.event.triggered))&&(g.indexOf(".")>-1&&(g=// Namespaced trigger; create a regexp to match event type in handle()
(v=g.split(".")).shift(),v.sort()),c=0>g.indexOf(":")&&"on"+g,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[y.expando]?t:new y.Event(g,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=r),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:y.makeArray(n,[t]),// Allow special events to draw outside the lines
d=y.event.special[g]||{},o||!d.trigger||!1!==d.trigger.apply(r,n))){// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!o&&!d.noBubble&&!y.isWindow(r)){for(l=d.delegateType||g,ti.test(l+g)||(s=s.parentNode);s;s=s.parentNode)h.push(s),u=s;u===(r.ownerDocument||i)&&h.push(u.defaultView||u.parentWindow||e)}for(// Fire handlers on the event path
a=0;(s=h[a++])&&!t.isPropagationStopped();)t.type=a>1?l:d.bindType||g,// jQuery handler
(f=(V.get(s,"events")||{})[t.type]&&V.get(s,"handle"))&&f.apply(s,n),// Native handler
(f=c&&s[c])&&f.apply&&X(s)&&(t.result=f.apply(s,n),!1===t.result&&t.preventDefault());return t.type=g,!o&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(h.pop(),n))&&X(r)&&c&&y.isFunction(r[g])&&!y.isWindow(r)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(u=r[c])&&(r[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
y.event.triggered=g,r[g](),y.event.triggered=void 0,u&&(r[c]=u)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=y.extend(new y.Event,n,{type:e,isSimulated:!0});y.event.trigger(r,null,t)}}),y.fn.extend({trigger:function(e,t){return this.each(function(){y.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return y.event.trigger(e,t,n,!0)}}),y.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
y.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),y.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),g.focusin="onfocusin"in e,g.focusin||y.each({focus:"focusin",blur:"focusout"},function(e,t){// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){y.event.simulate(t,e.target,y.event.fix(e))};y.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=V.access(r,t);i||r.addEventListener(e,n,!0),V.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=V.access(r,t)-1;i?V.access(r,t,i):(r.removeEventListener(e,n,!0),V.remove(r,t))}}});var to=e.location,ta=y.now(),ts=/\?/;// Cross-browser xml parsing
y.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&y.error("Invalid XML: "+t),n};var tu=/\[\]$/,tl=/\r?\n/g,tc=/^(?:submit|button|image|reset|file)$/i,tf=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
y.param=function(e,t){var n,r=[],i=function(e,t){// If value is a function, invoke it and use its return value
var n=y.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!y.isPlainObject(e))y.each(e,function(){i(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,r,i){var o;if(Array.isArray(n))y.each(n,function(n,o){r||tu.test(t)?i(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,r,i)});else if(r||"object"!==y.type(n))i(t,n);else for(o in n)e(t+"["+o+"]",n[o],r,i)}(n,e[n],t,i);// Return the resulting serialization
return r.join("&")},y.fn.extend({serialize:function(){return y.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=y.prop(this,"elements");return e?y.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!y(this).is(":disabled")&&tf.test(this.nodeName)&&!tc.test(e)&&(this.checked||!ea.test(e))}).map(function(e,t){var n=y(this).val();return null==n?null:Array.isArray(n)?y.map(n,function(e){return{name:t.name,value:e.replace(tl,"\r\n")}}):{name:t.name,value:n.replace(tl,"\r\n")}}).get()}});var tp=/%20/g,td=/#.*$/,th=/([?&])_=[^&]*/,tg=/^(.*?):[ \t]*([^\r\n]*)$/mg,tv=/^(?:GET|HEAD)$/,tm=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ty={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tx={},tb="*/".concat("*"),tw=i.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tT(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(R)||[];if(y.isFunction(n))// For each dataType in the dataTypeExpression
for(;r=o[i++];)"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}// Base inspection function for prefilters and transports
function tC(e,t,n,r){var i={},o=e===tx;function a(s){var u;return i[s]=!0,y.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function tE(e,t){var n,r,i=y.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&y.extend(!0,e,r),e}tw.href=to.href,y.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:to.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(to.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":y.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tE(tE(e,y.ajaxSettings),t):tE(y.ajaxSettings,e)},ajaxPrefilter:tT(ty),ajaxTransport:tT(tx),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var r,o,a,s,u,l,c,f,p,d,h=y.ajaxSetup({},n),g=h.context||h,v=h.context&&(g.nodeType||g.jquery)?y(g):y.event,m=y.Deferred(),x=y.Callbacks("once memory"),b=h.statusCode||{},w={},T={},C="canceled",E={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=tg.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},// Raw string
getAllResponseHeaders:function(){return c?a:null},// Caches the header
setRequestHeader:function(e,t){return null==c&&(w[e=T[e.toLowerCase()]=T[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(c)E.always(e[E.status]);else for(t in e)b[t]=[b[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||C;return r&&r.abort(t),k(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
m.promise(E),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
h.url=((t||h.url||to.href)+"").replace(tm,to.protocol+"//"),// Alias method option to type as per ticket #12004
h.type=n.method||n.type||h.method||h.type,// Extract dataTypes list
h.dataTypes=(h.dataType||"*").toLowerCase().match(R)||[""],null==h.crossDomain){l=i.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=h.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,h.crossDomain=tw.protocol+"//"+tw.host!=l.protocol+"//"+l.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
h.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=y.param(h.data,h.traditional)),// Apply prefilters
tC(ty,h,n,E),c)return E;// Check for headers option
for(p in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
(f=y.event&&h.global)&&0==y.active++&&y.event.trigger("ajaxStart"),// Uppercase the type
h.type=h.type.toUpperCase(),// Determine if request has content
h.hasContent=!tv.test(h.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=h.url.replace(td,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(tp,"+")):(// Remember the hash so we can put it back
d=h.url.slice(o.length),h.data&&(o+=(ts.test(o)?"&":"?")+h.data,// #9682: remove data so that it's not used in an eventual retry
delete h.data),!1===h.cache&&(o=o.replace(th,"$1"),d=(ts.test(o)?"&":"?")+"_="+ta+++d),// Put hash and anti-cache on the URL that will be requested (gh-1732)
h.url=o+d),h.ifModified&&(y.lastModified[o]&&E.setRequestHeader("If-Modified-Since",y.lastModified[o]),y.etag[o]&&E.setRequestHeader("If-None-Match",y.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),// Set the Accepts header for the server, depending on the dataType
E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+tb+"; q=0.01":""):h.accepts["*"]),h.headers)E.setRequestHeader(p,h.headers[p]);// Allow custom headers/mimetypes and early abort
if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
C="abort",// Install callbacks on deferreds
x.add(h.complete),E.done(h.success),E.fail(h.error),// Get transport
r=tC(tx,h,n,E)){// If request was aborted inside ajaxSend, stop there
if(E.readyState=1,f&&v.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,r.send(w,k)}catch(e){// Rethrow post-completion exceptions
if(c)throw e;// Propagate others as results
k(-1,e)}}else k(-1,"No Transport");// Callback for when everything is done
function k(t,n,i,s){var l,p,d,w,T,C=n;c||(c=!0,u&&e.clearTimeout(u),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
a=s||"",// Set readyState
E.readyState=t>0?4:0,// Determine if successful
l=t>=200&&t<300||304===t,i&&(w=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r){for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}}// Check to see if we have a response for the expected dataType
if(u[0]in n)o=u[0];else{// Try convertible dataTypes
for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}// Or just use first one
o=o||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,E,i)),// Convert no matter what (that way responseXXX fields are always set)
w=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift()){// There's only work to do if current dataType is non-auto
if("*"===o)o=u;else if("*"!==u&&u!==o){// If none found, seek a pair
if(!// Seek a direct converter
(a=l[u+" "+o]||l["* "+o])){for(i in l)if(// If conv2 outputs current
(s=i.split(" "))[1]===o&&// If prev can be converted to accepted input
(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}}// Apply converter (if not an equivalence)
if(!0!==a){// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}}}return{state:"success",data:t}}(h,w,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(y.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(y.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=w.state,p=w.data,l=!(d=w.error))):(// Extract error from statusText and normalize for non-aborts
d=C,(t||!C)&&(C="error",t<0&&(t=0))),// Set data for the fake xhr object
E.status=t,E.statusText=(n||C)+"",l?m.resolveWith(g,[p,C,E]):m.rejectWith(g,[E,C,d]),// Status-dependent callbacks
E.statusCode(b),b=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),// Complete
x.fireWith(g,[E,C]),!f||(v.trigger("ajaxComplete",[E,h]),--y.active||y.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return y.get(e,t,n,"json")},getScript:function(e,t){return y.get(e,void 0,t,"script")}}),y.each(["get","post"],function(e,t){y[t]=function(e,n,r,i){// The url can be an options object (which then must have .url)
return y.isFunction(n)&&(i=i||r,r=n,n=void 0),y.ajax(y.extend({url:e,type:t,dataType:i,data:n,success:r},y.isPlainObject(e)&&e))}}),y._evalUrl=function(e){return y.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},y.fn.extend({wrapAll:function(e){var t;return this[0]&&(y.isFunction(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=y(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return y.isFunction(e)?this.each(function(t){y(this).wrapInner(e.call(this,t))}):this.each(function(){var t=y(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=y.isFunction(e);return this.each(function(n){y(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){y(this).replaceWith(this.childNodes)}),this}}),y.expr.pseudos.hidden=function(e){return!y.expr.pseudos.visible(e)},y.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},y.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tk={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},tS=y.ajaxSettings.xhr();g.cors=!!tS&&"withCredentials"in tS,g.ajax=tS=!!tS,y.ajaxTransport(function(t){var n,r;// Cross domain only allowed if supported through XMLHttpRequest
if(g.cors||tS&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();// Apply custom fields if provided
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];// Set headers
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);// Callback
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(tk[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},// Listen to events
s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&r()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
s.send(t.hasContent&&t.data||null)}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
y.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
y.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return y.globalEval(e),e}}}),// Handle cache's special case and crossDomain
y.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
y.ajaxTransport("script",function(e){// This transport only deals with cross domain requests
if(e.crossDomain){var t,n;return{send:function(r,o){t=y("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
i.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tN=[],tD=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
y.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tN.pop()||y.expando+"_"+ta++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
y.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(tD.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tD.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
i=t.jsonpCallback=y.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tD,"$1"+i):!1!==t.jsonp&&(t.url+=(ts.test(t.url)?"&":"?")+t.jsonp+"="+i),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return a||y.error(i+" was not called"),a[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
o=e[i],e[i]=function(){a=arguments},// Clean-up function (fires after converters)
r.always(function(){void 0===o?y(e).removeProp(i):e[i]=o,t[i]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tN.push(i)),a&&y.isFunction(o)&&o(a[0]),a=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
g.createHTMLDocument=((n=i.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
y.parseHTML=function(e,t,n){var r,o,a;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(g.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(r=(t=i.implementation.createHTMLDocument("")).createElement("base")).href=i.location.href,t.head.appendChild(r)):t=i),o=j.exec(e),a=!n&&[],o)?[t.createElement(o[1])]:(o=ed([e],t,a),a&&a.length&&y(a).remove(),y.merge([],o.childNodes))},/**
 * Load a url into a page
 */y.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=tt(e.slice(s)),e=e.slice(0,s)),y.isFunction(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&y.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,a.html(r?// Exclude scripts to avoid IE 'Permission Denied' errors
y("<div>").append(y.parseHTML(e)).find(r):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},// Attach a bunch of functions for handling common AJAX events
y.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){y.fn[t]=function(e){return this.on(t,e)}}),y.expr.pseudos.animated=function(e){return y.grep(y.timers,function(t){return e===t.elem}).length},y.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=y.css(e,"position"),c=y(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=y.css(e,"top"),u=y.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),y.isFunction(t)&&(t=t.call(e,n,y.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},y.fn.extend({offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){y.offset.setOffset(this,e,t)});var t,n,r,i,o=this[0];if(o)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
o.getClientRects().length?(r=o.getBoundingClientRect(),n=(t=o.ownerDocument).documentElement,i=t.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0})},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};// Subtract parent offsets and element margins
return"fixed"===y.css(n,"position")?t=n.getBoundingClientRect():(// Get *real* offsetParent
e=this.offsetParent(),// Get correct offsets
t=this.offset(),D(e[0],"html")||(r=e.offset()),// Add offsetParent borders
r={top:r.top+y.css(e[0],"borderTopWidth",!0),left:r.left+y.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-y.css(n,"marginTop",!0),left:t.left-r.left-y.css(n,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===y.css(e,"position");)e=e.offsetParent;return e||eh})}}),// Create scrollLeft and scrollTop methods
y.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;y.fn[e]=function(r){return z(this,function(e,r,i){// Coalesce documents and windows
var o;if(y.isWindow(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
y.each(["top","left"],function(e,t){y.cssHooks[t]=eR(g.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=eP(e,t),eF.test(n)?y(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
y.each({Height:"height",Width:"width"},function(e,t){y.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){// Margin is only for outerHeight, outerWidth
y.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?y.css(t,n,s):y.style(t,n,i,s)},t,a?i:void 0,a)}})}),y.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),y.holdReady=function(e){e?y.readyWait++:y.ready(!0)},y.isArray=Array.isArray,y.parseJSON=JSON.parse,y.nodeName=D,"function"==typeof define&&define.amd&&define("jquery",[],function(){return y});var tj=e.jQuery,tA=e.$;return y.noConflict=function(t){return e.$===y&&(e.$=tA),t&&e.jQuery===y&&(e.jQuery=tj),y},t||(e.jQuery=e.$=y),y},"object"==typeof module&&"object"==typeof module.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=e.document?t(e,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return t(e)}:t(e);//# sourceMappingURL=index.c6ad5739.js.map

//# sourceMappingURL=index.c6ad5739.js.map
