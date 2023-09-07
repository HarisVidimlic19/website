var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequirefb6f;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequirefb6f=i),i.register("6KOho",function(e,t){var n,r;n="undefined"!=typeof window?window:e.exports,r=function(e,t){var n,r=[],i=Object.getPrototypeOf,o=r.slice,a=r.flat?function(e){return r.flat.call(e)}:function(e){return r.concat.apply([],e)},s=r.push,u=r.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},m=e.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var r,i,o=(n=n||m).createElement("script");if(o.text=e,t)for(r in v)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var w="3.7.1",T=/HTML$/i,j=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new j.fn.init(e,t)};function C(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=b(e);return!(g(e)||y(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}j.fn=j.prototype={// The current version of jQuery being used
jquery:w,constructor:j,// The default length of a jQuery object is 0
length:0,toArray:function(){return o.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?o.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=j.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return j.each(this,e)},map:function(e){return this.pushStack(j.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(j.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(j.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:s,sort:r.sort,splice:r.splice},j.extend=j.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,// Skip the boolean and the target
a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(j.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||j.isPlainObject(n)?n:{},i=!1,// Never move original objects, clone them
a[t]=j.extend(l,o,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},j.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===c.call(e)&&(!(t=i(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(C(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)for(;t=e[r++];)n+=j.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?j.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!T.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,s=[];// Go through the array, translating each of the items to their new values
if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);// Flatten any nested arrays
return a(s)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:h}),"function"==typeof Symbol&&(j.fn[Symbol.iterator]=r[Symbol.iterator]),// Populate the class2type map
j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});var k=r.pop,E=r.sort,A=r.splice,D="[\\x20\\t\\r\\n\\f]",N=RegExp("^"+D+"+|((?:^|[^\\\\])(?:\\\\.)*)"+D+"+$","g");// Note: an element does not contain itself
j.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var q=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function H(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}j.escapeSelector=function(e){return(e+"").replace(q,H)},function(){var t,n,i,a,l,c,p,d,g,y,v=s,x=j.expando,b=0,w=0,T=ee(),C=ee(),q=ee(),H=ee(),L=function(e,t){return e===t&&(l=!0),0},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
R="(?:\\\\[\\da-fA-F]{1,6}"+D+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",P="\\["+D+"*("+R+")(?:"+D+// Operator (capture 2)
"*([*^$|!~]?=)"+D+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+D+"*\\]",M=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",W=RegExp(D+"+","g"),F=RegExp("^"+D+"*,"+D+"*"),I=RegExp("^"+D+"*([>+~]|"+D+")"+D+"*"),Q=RegExp(D+"|>"),$=new RegExp(M),_=RegExp("^"+R+"$"),B={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R+"|[*])"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+M),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+D+"*(even|odd|(([+-]|)(\\d*)n|)"+D+"*(?:([+-]|)"+D+"*(\\d+)|))"+D+"*\\)|)","i"),bool:RegExp("^(?:"+O+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+D+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+D+"*((?:-\\d)?\\d*)"+D+"*\\)|)(?=[^-]|$)","i")},z=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,U=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
V=RegExp("\\\\[\\da-fA-F]{1,6}"+D+"?|\\\\([^\\r\\n\\f])","g"),G=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Y=function(){ea()},K=ec(function(e){return!0===e.disabled&&S(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{v.apply(r=o.call(m.childNodes),m.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
r[m.childNodes.length].nodeType}catch(e){v={apply:function(e,t){s.apply(e,o.call(t))},call:function(e){s.apply(e,o.call(arguments,1))}}}function Z(e,t,n,r){var i,o,a,s,u,l,f,p=t&&t.ownerDocument,y=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==y&&9!==y&&11!==y)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&(ea(t),t=t||c,d)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==y&&(u=U.exec(e))){// ID selector
if(i=u[1]){// Document context
if(9===y){if(!(a=t.getElementById(i)))return n;if(a.id===i)return v.call(n,a),n;// Element context
}else // getElementById can match elements by name instead of ID
if(p&&(a=p.getElementById(i))&&Z.contains(t,a)&&a.id===i)return v.call(n,a),n}else if(u[2])return v.apply(n,t.getElementsByTagName(e)),n;else if((i=u[3])&&t.getElementsByClassName)return v.apply(n,t.getElementsByClassName(i)),n}// Take advantage of querySelectorAll
if(!H[e+" "]&&(!g||!g.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(f=e,p=t,1===y&&(Q.test(e)||I.test(e))){for(// Expand context for sibling selectors
(p=J.test(e)&&eo(t.parentNode)||t)==t&&h.scope||((s=t.getAttribute("id"))?s=j.escapeSelector(s):t.setAttribute("id",s=x)),o=// Prefix every selector in the list
(l=eu(e)).length;o--;)l[o]=(s?"#"+s:":scope")+" "+el(l[o]);f=l.join(",")}try{return v.apply(n,p.querySelectorAll(f)),n}catch(t){H(e,!0)}finally{s===x&&t.removeAttribute("id")}}}// All others
return eh(e.replace(N,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];function t(r,i){return e.push(r+" ")>n.cacheLength&&delete t[e.shift()],t[r+" "]=i}return t}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function et(e){return e[x]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function en(e){var t=c.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function er(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
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
!e!==t.isDisabled&&K(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function ei(e){return et(function(t){return t=+t,et(function(n,r){// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function eo(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function ea(e){var t,r=e?e.ownerDocument||e:m;return r!=c&&9===r.nodeType&&r.documentElement&&(p=// Update global variables
(c=r).documentElement,d=!j.isXMLDoc(c),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
y=p.matches||p.webkitMatchesSelector||p.msMatchesSelector,p.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
m!=c&&(t=c.defaultView)&&t.top!==t&&t.addEventListener("unload",Y),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
h.getById=en(function(e){return p.appendChild(e).id=j.expando,!c.getElementsByName||!c.getElementsByName(j.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
h.disconnectedMatch=en(function(e){return y.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
h.scope=en(function(){return c.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
h.cssHas=en(function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),h.getById?(n.filter.ID=function(e){var t=e.replace(V,G);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(V,G);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n,r,i,o=t.getElementById(e);if(o){if(// Verify the id attribute
(n=o.getAttributeNode("id"))&&n.value===e)return[o];for(// Fall back on getElementsByName
i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&d)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
g=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;p.appendChild(e).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+D+"*(?:value|"+O+")"),e.querySelectorAll("[id~="+x+"-]").length||g.push("~="),e.querySelectorAll("a#"+x+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll(":checked").length||g.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\["+D+"*name"+D+"*="+D+"*(?:''|\"\")")}),h.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
g.push(":has"),g=g.length&&new RegExp(g.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
L=function(e,t){// Flag for duplicate removal
if(e===t)return l=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!h.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===c||e.ownerDocument==m&&Z.contains(m,e)?-1:t===c||t.ownerDocument==m&&Z.contains(m,t)?1:a?u.call(a,e)-u.call(a,t):0:4&n?-1:1)}),c}// Add button/input type pseudos
for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ea(e),d&&!H[t+" "]&&(!g||!g.test(t)))try{var n=y.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||h.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){H(t,!0)}return Z(t,c,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=c&&ea(e),j.contains(e,t)},Z.attr=function(e,t){(e.ownerDocument||e)!=c&&ea(e);var r=n.attrHandle[t.toLowerCase()],i=r&&f.call(n.attrHandle,t.toLowerCase())?r(e,t,!d):void 0;return void 0!==i?i:e.getAttribute(t)},Z.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */j.uniqueSort=function(e){var t,n=[],r=0,i=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
l=!h.sortStable,a=!h.sortStable&&o.call(e,0),E.call(e,L),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)A.call(e,n[r],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
a=null,e)},j.fn.uniqueSort=function(){return this.pushStack(j.uniqueSort(o.apply(this)))},(n=j.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:B,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(V,G),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(V,G),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return B.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&$.test(n)&&// Get excess from tokenize (recursively)
(t=eu(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(V,G).toLowerCase();return"*"===e?function(){return!0}:function(e){return S(e,t)}},CLASS:function(e){var t=T[e+" "];return t||(t=RegExp("(^|"+D+")"+e+"("+D+"|$)"),T(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=Z.attr(r,e);return null==i?"!="===t:!t||((i+="","="===t)?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h=o!==a?"nextSibling":"previousSibling",g=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s,v=!1;if(g){// :(first|last|only)-(child|of-type)
if(o){for(;h;){for(f=t;f=f[h];)if(s?S(f,y):1===f.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
d=h="only"===e&&!d&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(d=[a?g.firstChild:g.lastChild],a&&m){for(v=(p=(l=// Seek `elem` from a previously-cached index
(c=g[x]||(g[x]={}))[e]||[])[0]===b&&l[1])&&l[2],f=p&&g.childNodes[p];f=++p&&f&&f[h]||// Fallback to seeking `elem` from the start
(v=p=0)||d.pop();)if(1===f.nodeType&&++v&&f===t){c[e]=[b,p,v];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(m&&(v=p=(l=(c=t[x]||(t[x]={}))[e]||[])[0]===b&&l[1]),!1===v)// Use the same loop as above to seek `elem` from the start
for(;(f=++p&&f&&f[h]||(v=p=0)||d.pop())&&(!((s?S(f,y):1===f.nodeType)&&++v)||(m&&((c=f[x]||(f[x]={}))[e]=[b,v]),f!==t)););return(// Incorporate the offset, then check against cycle size
(v-=i)===r||v%r==0&&v/r>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var r,i=n.pseudos[e]||n.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
i[x]?i(t):i.length>1?(r=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)r=u.call(e,o[a]),e[r]=!(n[r]=o[a])}):function(e){return i(e,0,r)}):i)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=ed(e.replace(N,"$1"));return r[x]?et(function(e,t,n,i){// Match elements unmatched by `matcher`
for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return Z(e,t).length>0}}),contains:et(function(e){return e=e.replace(V,G),function(t){return(t.textContent||j.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return _.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(V,G).toLowerCase(),function(t){var n;do if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return c.activeElement}catch(e){}}()&&c.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:er(!1),disabled:er(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return S(e,"input")&&!!e.checked||S(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return X.test(e.nodeName)},input:function(e){return z.test(e.nodeName)},button:function(e){return S(e,"input")&&"button"===e.type||S(e,"button")},text:function(e){var t;return S(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:ei(function(){return[0]}),last:ei(function(e,t){return[t-1]}),eq:ei(function(e,t,n){return[n<0?n+t:n]}),even:ei(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ei(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ei(function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:ei(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return S(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(S(t,"input")||S(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function es(){}function eu(e,t){var r,i,o,a,s,u,l,c=C[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=n.preFilter;s;){// Filters
for(a in(!r||(i=F.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=I.exec(s))&&(r=i.shift(),o.push({value:r,// Cast descendant combinators to space
type:i[0].replace(N," ")}),s=s.slice(r.length)),n.filter)(i=B[a].exec(s))&&(!l[a]||(i=l[a](i)))&&(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?s.length:s?Z.error(e):C(e,u).slice(0))}function el(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ec(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=w++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f=[b,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a){if(c=t[x]||(t[x]={}),i&&S(t,i))t=t[r]||t;else{if((l=c[o])&&l[0]===b&&l[1]===s)return f[2]=l[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
c[o]=f,f[2]=e(t,n,u))return!0}}return!1}}function ef(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ep(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function ed(e,t/* Internal Use Only */){var r,o,a,s,l=[],f=[],p=q[e+" "];if(!p){for(t||(t=eu(e)),s=t.length;s--;)(p=function e(t){for(var r,o,a,s=t.length,l=n.relative[t[0].type],c=l||n.relative[" "],f=l?1:0,p=ec(function(e){return e===r},c,!0),d=ec(function(e){return u.call(r,e)>-1},c,!0),h=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var o=!l&&(n||t!=i)||((r=t).nodeType?p(e,t,n):d(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
r=null,o)}];f<s;f++)if(o=n.relative[t[f].type])h=[ec(ef(h),o)];else{// Return special upon seeing a positional matcher
if((o=n.filter[t[f].type].apply(null,t[f].matches))[x]){for(// Find the next relative operator (if any) for proper handling
a=++f;a<s&&!n.relative[t[a].type];a++);return function e(t,n,r,i,o,a){return i&&!i[x]&&(i=e(i)),o&&!o[x]&&(o=e(o,a)),et(function(e,a,s,l){var c,f,p,d,h=[],g=[],y=a.length,m=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)Z(e,t[r],n);return n}(n||"*",s.nodeType?[s]:s,[]),x=t&&(e||!n)?ep(m,h,t,s,l):m;// Apply postFilter
if(r?// Find primary matches
r(x,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
d=o||(e?t:y||i)?[]:a,s,l):d=x,i)for(c=ep(d,g),i(c,[],s,l),// Un-match failing elements by moving them back to matcherIn
f=c.length;f--;)(p=c[f])&&(d[g[f]]=!(x[g[f]]=p));if(e){if(o||t){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],f=d.length;f--;)(p=d[f])&&c.push(x[f]=p);o(null,d=[],c,l)}for(// Move matched elements from seed to results to keep them synchronized
f=d.length;f--;)(p=d[f])&&(c=o?u.call(e,p):h[f])>-1&&(e[c]=!(a[c]=p))}}else d=ep(d===a?d.splice(y,d.length):d),o?o(null,a,d,l):v.apply(a,d)})}(f>1&&ef(h),f>1&&el(t.slice(0,f-1).concat({value:" "===t[f-2].type?"*":""})).replace(N,"$1"),o,f<a&&e(t.slice(f,a)),a<s&&e(t=t.slice(a)),a<s&&el(t))}h.push(o)}return ef(h)}(t[s]))[x]?l.push(p):f.push(p);// Save selector and tokenization
// Cache the compiled function
(p=q(e,(r=l.length>0,o=f.length>0,a=function(e,t,a,s,u){var p,h,g,y=0,m="0",x=e&&[],w=[],T=i,C=e||o&&n.find.TAG("*",u),S=b+=null==T?1:Math.random()||.1,E=C.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(u&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(i=t==c||t||u);m!==E&&null!=(p=C[m]);m++){if(o&&p){for(h=0,t||p.ownerDocument==c||(ea(p),a=!d);g=f[h++];)if(g(p,t||c,a)){v.call(s,p);break}u&&(b=S)}r&&((p=!g&&p)&&y--,e&&x.push(p))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
y+=m,r&&m!==y){for(h=0;g=l[h++];)g(x,w,t,a);if(e){// Reintegrate element matches to eliminate the need for sorting
if(y>0)for(;m--;)x[m]||w[m]||(w[m]=k.call(s));// Discard index placeholder values to get only actual matches
w=ep(w)}// Add matches to results
v.apply(s,w),u&&!e&&w.length>0&&y+l.length>1&&j.uniqueSort(s)}return u&&(b=S,i=T),x},r?et(a):a))).selector=e}return p}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eh(e,t,r,i){var o,a,s,u,l,c="function"==typeof e&&e,f=!i&&eu(e=c.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(r=r||[],1===f.length){if(// Reduce context if the leading compound selector is an ID
(a=f[0]=f[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===t.nodeType&&d&&n.relative[a[1].type]){if(!(t=(n.find.ID(s.matches[0].replace(V,G),t)||[])[0]))return r;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=B.needsContext.test(e)?0:a.length;// Abort if we hit a combinator
o--&&(s=a[o],!n.relative[u=s.type]);)if((l=n.find[u])&&(i=l(s.matches[0].replace(V,G),J.test(a[0].type)&&eo(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
a.splice(o,1),!(e=i.length&&el(a)))return v.apply(r,i),r;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(c||ed(e,f))(i,t,!d,r,!t||J.test(e)&&eo(t.parentNode)||t),r)}es.prototype=n.filters=n.pseudos,n.setFilters=new es,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
h.sortStable=x.split("").sort(L).join("")===x,// Initialize against the default document
ea(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
h.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(c.createElement("fieldset"))}),j.find=Z,// Deprecated
j.expr[":"]=j.expr.pseudos,j.unique=j.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Z.compile=ed,Z.select=eh,Z.setDocument=ea,Z.tokenize=eu,Z.escape=j.escapeSelector,Z.getText=j.text,Z.isXML=j.isXMLDoc,Z.selectors=j.expr,Z.support=j.support,Z.uniqueSort=j.uniqueSort;/* eslint-enable */}();var L=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&j(e).is(n))break;r.push(e)}return r},O=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},R=j.expr.match.needsContext,P=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function M(e,t,n){return g(t)?j.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?j.grep(e,function(e){return e===t!==n}):"string"!=typeof t?j.grep(e,function(e){return u.call(t,e)>-1!==n}):j.filter(t,e,n)}j.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?j.find.matchesSelector(r,e)?[r]:[]:j.find.matches(e,j.grep(t,function(e){return 1===e.nodeType}))},j.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(j(e).filter(function(){for(t=0;t<r;t++)if(j.contains(i[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)j.find(e,i[t],n);return r>1?j.uniqueSort(n):n},filter:function(e){return this.pushStack(M(this,e||[],!1))},not:function(e){return this.pushStack(M(this,e||[],!0))},is:function(e){return!!M(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&R.test(e)?j(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var W,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(j.fn.init=function(e,t,n){var r,i;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||W,"string"==typeof e){// Match html or make sure no context is specified for #id
if((r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:F.exec(e))&&(r[1]||!t)){// HANDLE: $(html) -> $(array)
if(!r[1])return(i=m.getElementById(r[2]))&&(// Inject the element directly into the jQuery object
this[0]=i,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof j?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
j.merge(this,j.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:m,!0)),P.test(r[1])&&j.isPlainObject(t))for(r in t)g(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(j):j.makeArray(e,this)}).prototype=j.fn,// Initialize central reference
W=j(m);var I=/^(?:parents|prev(?:Until|All))/,Q={children:!0,contents:!0,next:!0,prev:!0};function $(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}j.fn.extend({has:function(e){var t=j(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(j.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&j(e);// Positional selectors never match, since there's no _selection_ context
if(!R.test(e)){for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&j.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?j.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?u.call(j(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(j.uniqueSort(j.merge(this.get(),j(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),j.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return L(e,"parentNode")},parentsUntil:function(e,t,n){return L(e,"parentNode",n)},next:function(e){return $(e,"nextSibling")},prev:function(e){return $(e,"previousSibling")},nextAll:function(e){return L(e,"nextSibling")},prevAll:function(e){return L(e,"previousSibling")},nextUntil:function(e,t,n){return L(e,"nextSibling",n)},prevUntil:function(e,t,n){return L(e,"previousSibling",n)},siblings:function(e){return O((e.parentNode||{}).firstChild,e)},children:function(e){return O(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
i(e.contentDocument)?e.contentDocument:(S(e,"template")&&(e=e.content||e),j.merge([],e.childNodes))}},function(e,t){j.fn[e]=function(n,r){var i=j.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=j.filter(r,i)),this.length>1&&(Q[e]||j.uniqueSort(i),I.test(e)&&i.reverse()),this.pushStack(i)}});var _=/[^\x20\t\r\n\f]+/g;function B(e){return e}function z(e){throw e}function X(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
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
 */j.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},j.each(t.match(_)||[],function(e,t){n[t]=!0}),n):j.extend({},e);var t,n,r,i,o,a,s=[],u=[],l=-1,c=function(){for(// Enforce single-firing
a=a||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=r=!0;u.length;l=-1)for(i=u.shift();++l<s.length;)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
l=s.length,i=!1);e.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){j.each(n,function(n,r){g(r)?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==b(r)&&t(r)})}(arguments),i&&!r&&c()),this},// Remove a callback from the list
remove:function(){return j.each(arguments,function(e,t){for(var n;(n=j.inArray(t,s,n))>-1;)s.splice(n,1),n<=l&&l--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?j.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return f},j.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",j.Callbacks("memory"),j.Callbacks("memory"),2],["resolve","done",j.Callbacks("once memory"),j.Callbacks("once memory"),0,"resolved"],["reject","fail",j.Callbacks("once memory"),j.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return j.Deferred(function(t){j.each(n,function(n,r){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=g(e[r[4]])&&e[r[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=r.apply(s,u))===n.promise())throw TypeError("Thenable self-resolution");g(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?i?l.call(e,a(o,n,B,i),a(o,n,z,i)):(// ...and disregard older resolution values
o++,l.call(e,a(o,n,B,i),a(o,n,z,i),a(o,n,B,n.notifyWith))):(r!==B&&(s=void 0,u=[e]),// Process the value(s)
// Default process is resolve
(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){j.Deferred.exceptionHook&&j.Deferred.exceptionHook(e,c.error),t+1>=o&&(r!==z&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(j.Deferred.getErrorHook?c.error=j.Deferred.getErrorHook():j.Deferred.getStackHook&&(c.error=j.Deferred.getStackHook()),e.setTimeout(c))}}return j.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(a(0,e,g(i)?i:B,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(a(0,e,g(t)?t:B)),// rejected_handlers.add( ... )
n[2][3].add(a(0,e,g(r)?r:z))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?j.extend(e,i):i}},o={};// All done!
return(// Add list-specific methods
j.each(n,function(e,t){var a=t[2],s=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
i[t[1]]=a.add,s&&a.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=s},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
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
when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=j.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(X(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)X(i[n],s(n),a.reject);return a.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var U=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
j.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&U.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},j.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var J=j.Deferred();// The ready event handler and self cleanup method
function V(){m.removeEventListener("DOMContentLoaded",V),e.removeEventListener("load",V),j.ready()}j.fn.ready=function(e){return J.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){j.readyException(e)}),this},j.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){!(!0===e?--j.readyWait:j.isReady)&&(// Remember that the DOM is ready
j.isReady=!0,!0!==e&&--j.readyWait>0||// If there are functions bound, to execute
J.resolveWith(m,[j]))}}),j.ready.then=J.then,"complete"!==m.readyState&&("loading"===m.readyState||m.documentElement.doScroll)?(// Use the handy event callback
m.addEventListener("DOMContentLoaded",V),// A fallback to window.onload, that will always work
e.addEventListener("load",V)):e.setTimeout(j.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var G=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;// Sets many values
if("object"===b(n))for(s in i=!0,n)G(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(j(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},Y=/^-ms-/,K=/-([a-z])/g;// Used by camelCase as callback to replace()
function Z(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ee(e){return e.replace(Y,"ms-").replace(K,Z)}var et=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function en(){this.expando=j.expando+en.uid++}en.uid=1,en.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},et(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[ee(t)]=n;else for(r in t)i[ee(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ee(t)]},access:function(e,t,n){return(// In cases where either:
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
t=Array.isArray(t)?t.map(ee):((t=ee(t))in r)?[t]:t.match(_)||[]).length;n--;)delete r[t[n]];(void 0===t||j.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!j.isEmptyObject(t)}};var er=new en,ei=new en,eo=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ea=/[A-Z]/g;function es(e,t,n){var r,i;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(ea,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{i=n,n="true"===i||"false"!==i&&("null"===i?null:i===+i+""?+i:eo.test(i)?JSON.parse(i):i)}catch(e){}// Make sure we set the data so it isn't changed later
ei.set(e,t,n)}else n=void 0}return n}j.extend({hasData:function(e){return ei.hasData(e)||er.hasData(e)},data:function(e,t,n){return ei.access(e,t,n)},removeData:function(e,t){ei.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return er.access(e,t,n)},_removeData:function(e,t){er.remove(e,t)}}),j.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(i=ei.get(o),1===o.nodeType&&!er.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&es(o,r=ee(r.slice(5)),i[r]);er.set(o,"hasDataAttrs",!0)}return i}return(// Sets multiple values
"object"==typeof e?this.each(function(){ei.set(this,e)}):G(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=ei.get(o,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=es(o,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
ei.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){ei.remove(this,e)})}}),j.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=er.get(e,t),n&&(!r||Array.isArray(n)?r=er.access(e,t,j.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=j.queue(e,t),r=n.length,i=n.shift(),o=j._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,i.call(e,function(){j.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return er.get(e,n)||er.access(e,n,{empty:j.Callbacks("once memory").add(function(){er.remove(e,[t+"queue",n])})})}}),j.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?j.queue(this[0],e):void 0===t?this:this.each(function(){var n=j.queue(this,e,t);// Ensure a hooks for this queue
j._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&j.dequeue(this,e)})},dequeue:function(e){return this.each(function(){j.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=j.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=er.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var eu=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,el=RegExp("^(?:([+-])=|)("+eu+")([a-z%]*)$","i"),ec=["Top","Right","Bottom","Left"],ef=m.documentElement,ep=function(e){return j.contains(e.ownerDocument,e)},ed={composed:!0};ef.getRootNode&&(ep=function(e){return j.contains(e.ownerDocument,e)||e.getRootNode(ed)===e.ownerDocument});var eh=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ep(e)&&"none"===j.css(e,"display")};function eg(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return j.css(e,t,"")},u=s(),l=n&&n[3]||(j.cssNumber[t]?"":"px"),c=e.nodeType&&(j.cssNumber[t]||"px"!==l&&+u)&&el.exec(j.css(e,t));if(c&&c[3]!==l){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
u/=2,// Trust units reported by jQuery.css
l=l||c[3],// Iteratively approximate from a nonzero starting point
c=+u||1;a--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
j.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,j.style(e,t,c+l),// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+u||0,// Apply relative offset (+=/-=) if specified
i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ey={};function em(e,t){// Determine new display value for elements that need to change
for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"!==n||(i[o]=er.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&eh(r)&&(i[o]=function(e){var t,n=e.ownerDocument,r=e.nodeName,i=ey[r];return i||(t=n.body.appendChild(n.createElement(r)),i=j.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ey[r]=i),i}(r))):"none"!==n&&(i[o]="none",// Remember what we're overwriting
er.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}j.fn.extend({show:function(){return em(this,!0)},hide:function(){return em(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eh(this)?j(this).show():j(this).hide()})}});var ev=/^(?:checkbox|radio)$/i,ex=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,eb=/^$|^module$|\/(?:java|ecma)script/i;e4=m.createDocumentFragment().appendChild(m.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e6=m.createElement("input")).setAttribute("type","radio"),e6.setAttribute("checked","checked"),e6.setAttribute("name","t"),e4.appendChild(e6),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
h.checkClone=e4.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e4.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e4.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e4.innerHTML="<option></option>",h.option=!!e4.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ew={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function eT(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t))?j.merge([e],n):n}// Mark scripts as having already been evaluated
function ej(e,t){for(var n=0,r=e.length;n<r;n++)er.set(e[n],"globalEval",!t||er.get(t[n],"globalEval"))}ew.tbody=ew.tfoot=ew.colgroup=ew.caption=ew.thead,ew.th=ew.td,h.option||(ew.optgroup=ew.option=[1,"<select multiple='multiple'>","</select>"]);var eC=/<|&#?\w+;/;function eS(e,t,n,r,i){for(var o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if((o=e[p])||0===o){// Add nodes directly
if("object"===b(o))// push.apply(_, arraylike) throws on ancient WebKit
j.merge(f,o.nodeType?[o]:o);else if(eC.test(o)){for(a=a||c.appendChild(t.createElement("div")),s=ew[(ex.exec(o)||["",""])[1].toLowerCase()]||ew._default,a.innerHTML=s[1]+j.htmlPrefilter(o)+s[2],// Descend through wrappers to the right content
l=s[0];l--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
j.merge(f,a.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(a=c.firstChild).textContent=""}else f.push(t.createTextNode(o))}for(// Remove wrapper from fragment
c.textContent="",p=0;o=f[p++];){// Skip elements already in the context collection (trac-4087)
if(r&&j.inArray(o,r)>-1){i&&i.push(o);continue}// Capture executables
if(u=ep(o),// Append to fragment
a=eT(c.appendChild(o),"script"),u&&ej(a),n)for(l=0;o=a[l++];)eb.test(o.type||"")&&n.push(o)}return c}var ek=/^([^.]*)(?:\.(.+)|)/;function eE(){return!0}function eA(){return!1}function eD(e,t,n,r,i,o){var a,s;// Types can be a map of types/handlers
if("object"==typeof t){for(s in"string"!=typeof n&&(// ( types-Object, data )
r=r||n,n=void 0),t)eD(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(// ( types, selector, fn )
i=r,r=void 0):(// ( types, data, fn )
i=r,r=n,n=void 0)),!1===i)i=eA;else if(!i)return e;return 1===o&&(a=i,// Use same guid so caller can remove using origFn
(i=function(e){return(// Can use an empty set, since event contains the info
j().off(e),a.apply(this,arguments))}).guid=a.guid||(a.guid=j.guid++)),e.each(function(){j.event.add(this,t,i,r,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eN(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===er.get(e,t)&&j.event.add(e,t,eE);return}// Register the controller as a special universal handler for all event namespaces
er.set(e,t,!1),j.event.add(e,t,{namespace:!1,handler:function(e){var n,r=er.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(r)(j.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
r=o.call(arguments),er.set(this,t,r),// Trigger the native event and capture its result
this[t](),n=er.get(this,t),er.set(this,t,!1),r!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else r&&(// ...and capture the result
er.set(this,t,j.event.trigger(r[0],r.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=eE)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */j.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=er.get(e);// Only attach events to objects that accept data
if(et(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&j.find.matchesSelector(ef,i),n.guid||(n.guid=j.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return j.event.triggered!==t.type?j.event.dispatch.apply(e,arguments):void 0}),l=// Handle multiple events separated by a space
(t=(t||"").match(_)||[""]).length;l--;)d=g=(s=ek.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(// If event changes its type, use the special event handlers for the changed type
f=j.event.special[d]||{},// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,// Update special based on newly reset type
f=j.event.special[d]||{},// handleObj is passed to all event handlers
c=j.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&j.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),// Keep track of which events have ever been used, for event optimization
j.event.global[d]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=er.hasData(e)&&er.get(e);if(y&&(u=y.events)){for(l=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(_)||[""]).length;l--;){// Unbind all events (on this namespace, if provided) for the element
if(d=g=(s=ek.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d){for(d in u)j.event.remove(e,d+t[l],n,r,!0);continue}for(f=j.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=o=p.length;o--;)c=p[o],(i||g===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||j.removeEvent(e,d,y.handle),delete u[d])}j.isEmptyObject(u)&&er.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=Array(arguments.length),u=j.event.fix(e),l=(er.get(this,"events")||Object.create(null))[u.type]||[],c=j.event.special[u.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=u;t<arguments.length;t++)s[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(// Determine handlers
a=j.event.handlers.call(this,u,l),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)(!u.rnamespace||!1===o.namespace||u.rnamespace.test(o.namespace))&&(u.handleObj=o,u.data=o.data,void 0!==(r=((j.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;// Find delegate handlers
if(u&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;l!==this;l=l.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===l.nodeType&&!("click"===e.type&&!0===l.disabled)){for(n=0,o=[],a={};n<u;n++)void 0===a[// Don't conflict with Object.prototype properties (trac-13203)
i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?j(i,this).index(l)>-1:j.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}}return(// Add the remaining (directly-bound) handlers
l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s)},addProp:function(e,t){Object.defineProperty(j.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[j.expando]?e:new j.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return ev.test(t.type)&&t.click&&S(t,"input")&&eN(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return ev.test(t.type)&&t.click&&S(t,"input")&&eN(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return ev.test(t.type)&&t.click&&S(t,"input")&&er.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},j.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},j.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof j.Event))return new j.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?eE:eA,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&j.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[j.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
j.Event.prototype={constructor:j.Event,isDefaultPrevented:eA,isPropagationStopped:eA,isImmediatePropagationStopped:eA,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=eE,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=eE,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=eE,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
j.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},j.event.addProp),j.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(m.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=er.get(this,"handle"),r=j.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,// First, handle focusin/focusout
n(e),r.target===r.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(r)}else // while someone wants focusin/focusout.
j.event.simulate(t,e.target,j.event.fix(e))}j.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var r;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eN(this,e,!0),!m.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(r=er.get(this,t))||this.addEventListener(t,n),er.set(this,t,(r||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eN(this,e),!0)},teardown:function(){var e;if(!m.documentMode)return!1;(e=er.get(this,t)-1)?er.set(this,t,e):(this.removeEventListener(t,n),er.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return er.get(t.target,e)},delegateType:t},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
j.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var r=this.ownerDocument||this.document||this,i=m.documentMode?this:r,o=er.get(i,t);o||(m.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),er.set(i,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=m.documentMode?this:r,o=er.get(i,t)-1;o?er.set(i,t,o):(m.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),er.remove(i,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
j.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){j.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||j.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),j.fn.extend({on:function(e,t,n,r){return eD(this,e,t,n,r)},one:function(e,t,n,r){return eD(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
r=e.handleObj,j(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=eA),this.each(function(){j.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eq=/<script|<style|<link/i,eH=/checked\s*(?:[^=]|=\s*.checked.)/i,eL=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eO(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&j(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eR(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eP(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eM(e,t){var n,r,i,o,a,s;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(er.hasData(e)&&(s=er.get(e).events))for(i in er.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)j.event.add(t,i,s[i][n]);ei.hasData(e)&&(o=ei.access(e),a=j.extend({},o),ei.set(t,a))}}function eW(e,t,n,r){// Flatten any nested arrays
t=a(t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],m=g(y);// We can't cloneNode fragments that contain checked, in WebKit
if(m||p>1&&"string"==typeof y&&!h.checkClone&&eH.test(y))return e.each(function(i){var o=e.eq(i);m&&(t[0]=y.call(this,i,o.html())),eW(o,t,n,r)});if(p&&(o=(i=eS(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(u=(s=j.map(eT(i,"script"),eR)).length;f<p;f++)l=i,f!==d&&(l=j.clone(l,!0,!0),u&&// push.apply(_, arraylike) throws on ancient WebKit
j.merge(s,eT(l,"script"))),n.call(e[f],l,f);if(u)// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,// Re-enable scripts
j.map(s,eP),f=0;f<u;f++)l=s[f],eb.test(l.type||"")&&!er.access(l,"globalEval")&&j.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?j._evalUrl&&!l.noModule&&j._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
x(l.textContent.replace(eL,""),l,c))}return e}function eF(e,t,n){for(var r,i=t?j.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||j.cleanData(eT(r)),r.parentNode&&(n&&ep(r)&&ej(eT(r,"script")),r.parentNode.removeChild(r));return e}j.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=ep(e);// Fix IE cloning issues
if(!h.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!j.isXMLDoc(e))for(r=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
a=eT(s),i=(o=eT(e)).length;r<i;r++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ev.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(o[r],a[r]);// Copy the events from the original to the clone
if(t){if(n)for(r=0,o=o||eT(e),a=a||eT(s),i=o.length;r<i;r++)eM(o[r],a[r]);else eM(e,s)}// Return the cloned set
return(// Preserve script evaluation history
(a=eT(s,"script")).length>0&&ej(a,!u&&eT(e,"script")),s)},cleanData:function(e){for(var t,n,r,i=j.event.special,o=0;void 0!==(n=e[o]);o++)if(et(n)){if(t=n[er.expando]){if(t.events)for(r in t.events)i[r]?j.event.remove(n,r):j.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[er.expando]=void 0}n[ei.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[ei.expando]=void 0)}}}),j.fn.extend({detach:function(e){return eF(this,e,!0)},remove:function(e){return eF(this,e)},text:function(e){return G(this,function(e){return void 0===e?j.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eW(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eO(this,e).appendChild(e)})},prepend:function(){return eW(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eO(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eW(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eW(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
j.cleanData(eT(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return j.clone(this,e,t)})},html:function(e){return G(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eq.test(e)&&!ew[(ex.exec(e)||["",""])[1].toLowerCase()]){e=j.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(j.cleanData(eT(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eW(this,arguments,function(t){var n=this.parentNode;0>j.inArray(this,e)&&(j.cleanData(eT(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),j.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){j.fn[e]=function(e){for(var n,r=[],i=j(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),j(i[a])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
s.apply(r,n.get());return this.pushStack(r)}});var eI=RegExp("^("+eu+")(?!px)[a-z%]+$","i"),eQ=/^--/,e$=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},e_=function(e,t,n){var r,i,o={};// Remember the old values, and insert the new ones
for(i in t)o[i]=e.style[i],e.style[i]=t[i];// Revert the old values
for(i in r=n.call(e),t)e.style[i]=o[i];return r},eB=RegExp(ec.join("|"),"i");function ez(e,t,n){var r,i,o,a,s=eQ.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
u=e.style;return(n=n||e$(e))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
a=n.getPropertyValue(t)||n[t],s&&a&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(a=a.replace(N,"$1")||void 0),""!==a||ep(e)||(a=j.style(e,t)),!h.pixelBoxStyles()&&eI.test(a)&&eB.test(t)&&(// Remember the original values
r=u.width,i=u.minWidth,o=u.maxWidth,// Put in the new values to get a computed value out
u.minWidth=u.maxWidth=u.width=a,a=n.width,// Revert the changed values
u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?// IE returns zIndex value as an integer.
a+"":a}function eX(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ef.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
u=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
c.style.right="60%",a=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
i=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
c.style.position="absolute",o=12===n(c.offsetWidth/3),ef.removeChild(l),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
c=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,u,l=m.createElement("div"),c=m.createElement("div");c.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,j.extend(h,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),o},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,r,i;return null==s&&(t=m.createElement("table"),n=m.createElement("tr"),r=m.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",r.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
r.style.display="block",ef.appendChild(t).appendChild(n).appendChild(r),s=parseInt((i=e.getComputedStyle(n)).height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,ef.removeChild(t)),s}}))}();var eU=["Webkit","Moz","ms"],eJ=m.createElement("div").style,eV={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eG(e){return j.cssProps[e]||eV[e]||(e in eJ?e:eV[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eU.length;n--;)if((e=eU[n]+t)in eJ)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eY=/^(none|table(?!-c[ea]).+)/,eK={position:"absolute",visibility:"hidden",display:"block"},eZ={letterSpacing:"0",fontWeight:"400"};function e0(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var r=el.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function e1(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=j.css(e,n+ec[a],!0,i)),r?("content"===n&&(u-=j.css(e,"padding"+ec[a],!0,i)),"margin"!==n&&(u-=j.css(e,"border"+ec[a]+"Width",!0,i))):(// Add padding
u+=j.css(e,"padding"+ec[a],!0,i),"padding"!==n?u+=j.css(e,"border"+ec[a]+"Width",!0,i):s+=j.css(e,"border"+ec[a]+"Width",!0,i));return!r&&o>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function e2(e,t,n){// Start with computed style
var r=e$(e),i=(!h.boxSizingReliable()||n)&&"border-box"===j.css(e,"boxSizing",!1,r),o=i,a=ez(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eI.test(a)){if(!n)return a;a="auto"}// Adjust for the element's box model
return(!h.boxSizingReliable()&&i||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!h.reliableTrDimensions()&&S(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===a||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(a)&&"inline"===j.css(e,"display",!1,r))&&// Make sure the element is visible & connected
e.getClientRects().length&&(i="border-box"===j.css(e,"boxSizing",!1,r),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(o=s in e)&&(a=e[s])),// Normalize "" and auto
(a=parseFloat(a)||0)+e1(e,t,n||(i?"border":"content"),o,r,a)+"px"}function e3(e,t,n,r,i){return new e3.prototype.init(e,t,n,r,i)}j.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=ez(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,r){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,o,a,s=ee(t),u=eQ.test(t),l=e.style;// Check if we're setting a value
if(u||(t=eG(s)),// Gets hook for the prefixed version, then unprefixed version
a=j.cssHooks[t]||j.cssHooks[s],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t]);"string"==(o=typeof n)&&(i=el.exec(n))&&i[1]&&(n=eg(e,t,i),// Fixes bug trac-9237
o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(j.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=ee(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eQ.test(t)||(t=eG(s)),// Try prefixed name followed by the unprefixed name
(a=j.cssHooks[t]||j.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=ez(e,t,r)),"normal"===i&&t in eZ&&(i=eZ[t]),""===n||n)?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i)}}),j.each(["height","width"],function(e,t){j.cssHooks[t]={get:function(e,n,r){if(n)// but it must have a current display style that would benefit
return!eY.test(j.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e2(e,t,r):e_(e,eK,function(){return e2(e,t,r)})},set:function(e,n,r){var i,o=e$(e),// to avoid forcing a reflow.
a=!h.scrollboxSize()&&"absolute"===o.position,s=(a||r)&&"border-box"===j.css(e,"boxSizing",!1,o),u=r?e1(e,t,r,s,o):0;return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-e1(e,t,"border",!1,o)-.5)),u&&(i=el.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=j.css(e,t)),e0(e,n,u)}}}),j.cssHooks.marginLeft=eX(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ez(e,"marginLeft"))||e.getBoundingClientRect().left-e_(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
j.each({margin:"",padding:"",border:"Width"},function(e,t){j.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ec[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(j.cssHooks[e+t].set=e0)}),j.fn.extend({css:function(e,t){return G(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=e$(e),i=t.length;a<i;a++)o[t[a]]=j.css(e,t[a],!1,r);return o}return void 0!==n?j.style(e,t,n):j.css(e,t)},e,t,arguments.length>1)}}),j.Tween=e3,e3.prototype={constructor:e3,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||j.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(j.cssNumber[n]?"":"px")},cur:function(){var e=e3.propHooks[this.prop];return e&&e.get?e.get(this):e3.propHooks._default.get(this)},run:function(e){var t,n=e3.propHooks[this.prop];return this.options.duration?this.pos=t=j.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e3.propHooks._default.set(this),this}},e3.prototype.init.prototype=e3.prototype,e3.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=j.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){j.fx.step[e.prop]?j.fx.step[e.prop](e):1===e.elem.nodeType&&(j.cssHooks[e.prop]||null!=e.elem.style[eG(e.prop)])?j.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e3.propHooks.scrollTop=e3.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},j.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},j.fx=e3.prototype.init,// Back compat <1.8 extension point
j.fx.step={};var e4,e6,e5,e9,e8=/^(?:toggle|show|hide)$/,e7=/queueHooks$/;// Animations created synchronously will run synchronously
function te(){return e.setTimeout(function(){e5=void 0}),e5=Date.now()}// Generate parameters to create a standard animation
function tt(e,t){var n,r=0,i={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)i["margin"+(n=ec[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function tn(e,t,n){for(var r,i=(tr.tweeners[t]||[]).concat(tr.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function tr(e,t,n){var r,i,o=0,a=tr.prefilters.length,s=j.Deferred().always(function(){// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(i)return!1;for(var t=e5||te(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return(// If there's more to do, yield
(s.notifyWith(e,[l,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[l,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(e,[l]),!1))},l=s.promise({elem:e,props:j.extend({},t),opts:j.extend(!0,{specialEasing:{},easing:j.easing._default},n),originalProperties:t,originalOptions:n,startTime:e5||te(),duration:n.duration,tweens:[],createTween:function(t,n){var r=j.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[r=ee(n)],Array.isArray(o=e[n])&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=j.cssHooks[r])&&("expand"in a))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=a.expand(o),delete e[r],o)(n in e)||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=tr.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(j._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return j.map(c,tn,l),g(l.opts.start)&&l.opts.start.call(e,l),// Attach callbacks from options
l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),j.fx.timer(j.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}j.Animation=j.extend(tr,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return eg(n.elem,e,el.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(_);for(var n,r=0,i=e.length;r<i;r++)n=e[r],tr.tweeners[n]=tr.tweeners[n]||[],tr.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&eh(e),y=er.get(e,"fxshow");// Detect show/hide animations
for(r in n.queue||(null==(a=j._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,j.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],e8.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||j.style(e,r)}if(!(!// Bail out if this is a no-op like .hide().hide()
(u=!j.isEmptyObject(t))&&j.isEmptyObject(d)))for(r in f&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(l=y&&y.display)&&(l=er.get(e,"display")),"none"===(c=j.css(e,"display"))&&(l?c=l:(// Get nonempty value(s) by temporarily forcing visibility
em([e],!0),l=e.style.display||l,c=j.css(e,"display"),em([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===j.css(e,"float")&&(u||(p.done(function(){h.display=l}),null!=l||(l="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=er.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&em([e],!0),/* eslint-disable no-loop-func */p.done(function(){for(r in g||em([e]),er.remove(e,"fxshow"),d)j.style(e,r,d[r])})),// Per-property setup
u=tn(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?tr.prefilters.unshift(e):tr.prefilters.push(e)}}),j.speed=function(e,t,n){var r=e&&"object"==typeof e?j.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return j.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in j.fx.speeds?r.duration=j.fx.speeds[r.duration]:r.duration=j.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&j.dequeue(this,r.queue)},r},j.fn.extend({fadeTo:function(e,t,n,r){// Show any hidden elements after setting opacity to 0
return this.filter(eh).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=j.isEmptyObject(e),o=j.speed(t,n,r),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=tr(this,j.extend({},e),o);(i||er.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=j.timers,a=er.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&e7.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem===this&&(null==e||o[i].queue===e)&&(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&j.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=er.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=j.timers,a=r?r.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
j.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),j.each(["toggle","show","hide"],function(e,t){var n=j.fn[t];j.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tt(t,!0),e,r,i)}}),// Generate shortcuts for custom animations
j.each({slideDown:tt("show"),slideUp:tt("hide"),slideToggle:tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){j.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),j.timers=[],j.fx.tick=function(){var e,t=0,n=j.timers;for(e5=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||j.fx.stop(),e5=void 0},j.fx.timer=function(e){j.timers.push(e),j.fx.start()},j.fx.interval=13,j.fx.start=function(){e9||(e9=!0,function t(){e9&&(!1===m.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,j.fx.interval),j.fx.tick())}())},j.fx.stop=function(){e9=null},j.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
j.fn.delay=function(t,n){return t=j.fx&&j.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},ti=m.createElement("input"),to=m.createElement("select").appendChild(m.createElement("option")),ti.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
h.checkOn=""!==ti.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
h.optSelected=to.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(ti=m.createElement("input")).value="t",ti.type="radio",h.radioValue="t"===ti.value;var ti,to,ta,ts=j.expr.attrHandle;j.fn.extend({attr:function(e,t){return G(this,j.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){j.removeAttr(this,e)})}}),j.extend({attr:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return j.prop(e,t,n);if(1===o&&j.isXMLDoc(e)||(i=j.attrHooks[t.toLowerCase()]||(j.expr.match.bool.test(t)?ta:void 0)),void 0!==n){if(null===n){j.removeAttr(e,t);return}return i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n)}return i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=j.find.attr(e,t))?void 0:r}},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&S(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(_);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ta={set:function(e,t,n){return!1===t?j.removeAttr(e,n):e.setAttribute(n,n),n}},j.each(j.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ts[t]||j.find.attr;ts[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(// Avoid an infinite loop by temporarily removing this function from the getter
o=ts[a],ts[a]=i,i=null!=n(e,t,r)?a:null,ts[a]=o),i}});var tu=/^(?:input|select|textarea|button)$/i,tl=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function tc(e){return(e.match(_)||[]).join(" ")}function tf(e){return e.getAttribute&&e.getAttribute("class")||""}function tp(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(_)||[]}j.fn.extend({prop:function(e,t){return G(this,j.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[j.propFix[e]||e]})}}),j.extend({prop:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&j.isXMLDoc(e)||(// Fix name and attach hooks
t=j.propFix[t]||t,i=j.propHooks[t]),void 0!==n)?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=j.find.attr(e,"tabindex");return t?parseInt(t,10):tu.test(e.nodeName)||tl.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(j.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),j.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){j.propFix[this.toLowerCase()]=this}),j.fn.extend({addClass:function(e){var t,n,r,i,o,a;return g(e)?this.each(function(t){j(this).addClass(e.call(this,t,tf(this)))}):(t=tp(e)).length?this.each(function(){if(r=tf(this),n=1===this.nodeType&&" "+tc(r)+" "){for(o=0;o<t.length;o++)i=t[o],0>n.indexOf(" "+i+" ")&&(n+=i+" ");r!==// Only assign if different to avoid unneeded rendering.
(a=tc(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,r,i,o,a;return g(e)?this.each(function(t){j(this).removeClass(e.call(this,t,tf(this)))}):arguments.length?(t=tp(e)).length?this.each(function(){if(r=tf(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+tc(r)+" "){for(o=0;o<t.length;o++)// Remove *all* instances
for(i=t[o];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ");r!==// Only assign if different to avoid unneeded rendering.
(a=tc(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o,a=typeof e,s="string"===a||Array.isArray(e);return g(e)?this.each(function(n){j(this).toggleClass(e.call(this,n,tf(this),t),t)}):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=tp(e),this.each(function(){if(s)for(i=0,// Toggle individual class names
o=j(this);i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else(void 0===e||"boolean"===a)&&((r=tf(this))&&er.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":er.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+tc(tf(n))+" ").indexOf(t)>-1)return!0;return!1}});var td=/\r/g;j.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=g(e),this.each(function(n){var i;1!==this.nodeType||(null==(i=r?e.call(this,n,j(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=j.map(i,function(e){return null==e?"":e+""})),(t=j.valHooks[this.type]||j.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=j.valHooks[i.type]||j.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(td,""):null==n?"":n:void 0}}),j.extend({valHooks:{option:{get:function(e){var t=j.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tc(j.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;// Loop through all the selected options
for(r=o<0?u:a?o:0;r<u;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=i[r]).selected||r===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=j(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=j.makeArray(t),a=i.length;a--;)((r=i[a]).selected=j.inArray(j.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
j.each(["radio","checkbox"],function(){j.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=j.inArray(j(e).val(),t)>-1}},h.checkOn||(j.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var th=e.location,tg={guid:Date.now()},ty=/\?/;// Cross-browser xml parsing
j.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],(!n||r)&&j.error("Invalid XML: "+(r?j.map(r.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var tm=/^(?:focusinfocus|focusoutblur)$/,tv=function(e){e.stopPropagation()};j.extend(j.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,p,d,h=[r||m],v=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(a=d=s=r=r||m,!(3===r.nodeType||8===r.nodeType||tm.test(v+j.event.triggered))&&(v.indexOf(".")>-1&&(v=// Namespaced trigger; create a regexp to match event type in handle()
(x=v.split(".")).shift(),x.sort()),l=0>v.indexOf(":")&&"on"+v,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[j.expando]?t:new j.Event(v,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=r),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:j.makeArray(n,[t]),// Allow special events to draw outside the lines
p=j.event.special[v]||{},i||!p.trigger||!1!==p.trigger.apply(r,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!i&&!p.noBubble&&!y(r)){for(u=p.delegateType||v,tm.test(u+v)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||m)&&h.push(s.defaultView||s.parentWindow||e)}for(// Fire handlers on the event path
o=0;(a=h[o++])&&!t.isPropagationStopped();)d=a,t.type=o>1?u:p.bindType||v,// jQuery handler
(c=(er.get(a,"events")||Object.create(null))[t.type]&&er.get(a,"handle"))&&c.apply(a,n),// Native handler
(c=l&&a[l])&&c.apply&&et(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=v,!i&&!t.isDefaultPrevented()&&(!p._default||!1===p._default.apply(h.pop(),n))&&et(r)&&l&&g(r[v])&&!y(r)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(s=r[l])&&(r[l]=null),// Prevent re-triggering of the same event, since we already bubbled it above
j.event.triggered=v,t.isPropagationStopped()&&d.addEventListener(v,tv),r[v](),t.isPropagationStopped()&&d.removeEventListener(v,tv),j.event.triggered=void 0,s&&(r[l]=s)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=j.extend(new j.Event,n,{type:e,isSimulated:!0});j.event.trigger(r,null,t)}}),j.fn.extend({trigger:function(e,t){return this.each(function(){j.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return j.event.trigger(e,t,n,!0)}});var tx=/\[\]$/,tb=/\r?\n/g,tw=/^(?:submit|button|image|reset|file)$/i,tT=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
j.param=function(e,t){var n,r=[],i=function(e,t){// If value is a function, invoke it and use its return value
var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!j.isPlainObject(e))j.each(e,function(){i(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,r,i){var o;if(Array.isArray(n))j.each(n,function(n,o){r||tx.test(t)?i(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,r,i)});else if(r||"object"!==b(n))i(t,n);else for(o in n)e(t+"["+o+"]",n[o],r,i)}(n,e[n],t,i);// Return the resulting serialization
return r.join("&")},j.fn.extend({serialize:function(){return j.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=j.prop(this,"elements");return e?j.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!j(this).is(":disabled")&&tT.test(this.nodeName)&&!tw.test(e)&&(this.checked||!ev.test(e))}).map(function(e,t){var n=j(this).val();return null==n?null:Array.isArray(n)?j.map(n,function(e){return{name:t.name,value:e.replace(tb,"\r\n")}}):{name:t.name,value:n.replace(tb,"\r\n")}}).get()}});var tj=/%20/g,tC=/#.*$/,tS=/([?&])_=[^&]*/,tk=/^(.*?):[ \t]*([^\r\n]*)$/mg,tE=/^(?:GET|HEAD)$/,tA=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tD={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tN={},tq="*/".concat("*"),tH=m.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tL(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(_)||[];if(g(n))// For each dataType in the dataTypeExpression
for(;r=o[i++];)"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}// Base inspection function for prefilters and transports
function tO(e,t,n,r){var i={},o=e===tN;function a(s){var u;return i[s]=!0,j.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tR(e,t){var n,r,i=j.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&j.extend(!0,e,r),e}tH.href=th.href,j.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:th.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(th.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tq,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":j.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tR(tR(e,j.ajaxSettings),t):tR(j.ajaxSettings,e)},ajaxPrefilter:tL(tD),ajaxTransport:tL(tN),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var r,i,o,a,s,u,l,c,f,p,d=j.ajaxSetup({},n),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?j(h):j.event,y=j.Deferred(),v=j.Callbacks("once memory"),x=d.statusCode||{},b={},w={},T="canceled",C={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(l){if(!a)for(a={};t=tk.exec(o);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return l?o:null},// Caches the header
setRequestHeader:function(e,t){return null==l&&(b[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(l)C.always(e[C.status]);else for(t in e)x[t]=[x[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||T;return r&&r.abort(t),S(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
y.promise(C),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
d.url=((t||d.url||th.href)+"").replace(tA,th.protocol+"//"),// Alias method option to type as per ticket trac-12004
d.type=n.method||n.type||d.method||d.type,// Extract dataTypes list
d.dataTypes=(d.dataType||"*").toLowerCase().match(_)||[""],null==d.crossDomain){u=m.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{u.href=d.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
u.href=u.href,d.crossDomain=tH.protocol+"//"+tH.host!=u.protocol+"//"+u.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
d.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=j.param(d.data,d.traditional)),// Apply prefilters
tO(tD,d,n,C),l)return C;// Check for headers option
for(f in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(c=j.event&&d.global)&&0==j.active++&&j.event.trigger("ajaxStart"),// Uppercase the type
d.type=d.type.toUpperCase(),// Determine if request has content
d.hasContent=!tE.test(d.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
i=d.url.replace(tC,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(tj,"+")):(// Remember the hash so we can put it back
p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(ty.test(i)?"&":"?")+d.data,// trac-9682: remove data so that it's not used in an eventual retry
delete d.data),!1===d.cache&&(i=i.replace(tS,"$1"),p=(ty.test(i)?"&":"?")+"_="+tg.guid+++p),// Put hash and anti-cache on the URL that will be requested (gh-1732)
d.url=i+p),d.ifModified&&(j.lastModified[i]&&C.setRequestHeader("If-Modified-Since",j.lastModified[i]),j.etag[i]&&C.setRequestHeader("If-None-Match",j.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&C.setRequestHeader("Content-Type",d.contentType),// Set the Accepts header for the server, depending on the dataType
C.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+tq+"; q=0.01":""):d.accepts["*"]),d.headers)C.setRequestHeader(f,d.headers[f]);// Allow custom headers/mimetypes and early abort
if(d.beforeSend&&(!1===d.beforeSend.call(h,C,d)||l))return C.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
T="abort",// Install callbacks on deferreds
v.add(d.complete),C.done(d.success),C.fail(d.error),// Get transport
r=tO(tN,d,n,C)){// If request was aborted inside ajaxSend, stop there
if(C.readyState=1,c&&g.trigger("ajaxSend",[C,d]),l)return C;d.async&&d.timeout>0&&(s=e.setTimeout(function(){C.abort("timeout")},d.timeout));try{l=!1,r.send(b,S)}catch(e){// Rethrow post-completion exceptions
if(l)throw e;// Propagate others as results
S(-1,e)}}else S(-1,"No Transport");// Callback for when everything is done
function S(t,n,a,u){var f,p,m,b,w,T=n;l||(l=!0,s&&e.clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
o=u||"",// Set readyState
C.readyState=t>0?4:0,// Determine if successful
f=t>=200&&t<300||304===t,a&&(b=/* Handles responses to an ajax request:
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
if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,C,a)),!f&&j.inArray("script",d.dataTypes)>-1&&0>j.inArray("json",d.dataTypes)&&(d.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
b=/* Chain conversions given the request and the original response
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
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}}}return{state:"success",data:t}}(d,b,C,f),f?(d.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(j.lastModified[i]=w),(w=C.getResponseHeader("etag"))&&(j.etag[i]=w)),204===t||"HEAD"===d.type?T="nocontent":304===t?T="notmodified":(T=b.state,p=b.data,f=!(m=b.error))):(// Extract error from statusText and normalize for non-aborts
m=T,(t||!T)&&(T="error",t<0&&(t=0))),// Set data for the fake xhr object
C.status=t,C.statusText=(n||T)+"",f?y.resolveWith(h,[p,T,C]):y.rejectWith(h,[C,T,m]),// Status-dependent callbacks
C.statusCode(x),x=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[C,d,f?p:m]),// Complete
v.fireWith(h,[C,T]),!c||(g.trigger("ajaxComplete",[C,d]),--j.active||j.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return j.get(e,t,n,"json")},getScript:function(e,t){return j.get(e,void 0,t,"script")}}),j.each(["get","post"],function(e,t){j[t]=function(e,n,r,i){// The url can be an options object (which then must have .url)
return g(n)&&(i=i||r,r=n,n=void 0),j.ajax(j.extend({url:e,type:t,dataType:i,data:n,success:r},j.isPlainObject(e)&&e))}}),j.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),j._evalUrl=function(e,t,n){return j.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){j.globalEval(e,t,n)}})},j.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=j(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){j(this).wrapInner(e.call(this,t))}):this.each(function(){var t=j(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){j(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){j(this).replaceWith(this.childNodes)}),this}}),j.expr.pseudos.hidden=function(e){return!j.expr.pseudos.visible(e)},j.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},j.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tP={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tM=j.ajaxSettings.xhr();h.cors=!!tM&&"withCredentials"in tM,h.ajax=tM=!!tM,j.ajaxTransport(function(t){var n,r;// Cross domain only allowed if supported through XMLHttpRequest
if(h.cors||tM&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();// Apply custom fields if provided
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];// Set headers
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);// Callback
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(tP[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},// Listen to events
s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&r()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
s.send(t.hasContent&&t.data||null)}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
j.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
j.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return j.globalEval(e),e}}}),// Handle cache's special case and crossDomain
j.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
j.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(r,i){t=j("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
m.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tW=[],tF=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
j.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tW.pop()||j.expando+"_"+tg.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
j.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(tF.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tF.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tF,"$1"+i):!1!==t.jsonp&&(t.url+=(ty.test(t.url)?"&":"?")+t.jsonp+"="+i),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return a||j.error(i+" was not called"),a[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
o=e[i],e[i]=function(){a=arguments},// Clean-up function (fires after converters)
r.always(function(){void 0===o?j(e).removeProp(i):e[i]=o,t[i]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tW.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
h.createHTMLDocument=((n=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
j.parseHTML=function(e,t,n){var r,i,o;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(r=(t=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,t.head.appendChild(r)):t=m),i=P.exec(e),o=!n&&[],i)?[t.createElement(i[1])]:(i=eS([e],t,o),o&&o.length&&j(o).remove(),j.merge([],i.childNodes))},/**
 * Load a url into a page
 */j.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=tc(e.slice(s)),e=e.slice(0,s)),g(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&j.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,a.html(r?// Exclude scripts to avoid IE 'Permission Denied' errors
j("<div>").append(j.parseHTML(e)).find(r):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},j.expr.pseudos.animated=function(e){return j.grep(j.timers,function(t){return e===t.elem}).length},j.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=j.css(e,"position"),c=j(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=j.css(e,"top"),u=j.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,j.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},j.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){j.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===j.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===j.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
i=j(e).offset(),i.top+=j.css(e,"borderTopWidth",!0),i.left+=j.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-i.top-j.css(r,"marginTop",!0),left:t.left-i.left-j.css(r,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===j.css(e,"position");)e=e.offsetParent;return e||ef})}}),// Create scrollLeft and scrollTop methods
j.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;j.fn[e]=function(r){return G(this,function(e,r,i){// Coalesce documents and windows
var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
j.each(["top","left"],function(e,t){j.cssHooks[t]=eX(h.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=ez(e,t),eI.test(n)?j(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
j.each({Height:"height",Width:"width"},function(e,t){j.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){// Margin is only for outerHeight, outerWidth
j.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return G(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?j.css(t,n,s):j.style(t,n,i,s)},t,a?i:void 0,a)}})}),j.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){j.fn[t]=function(e){return this.on(t,e)}}),j.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),j.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
j.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tI=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
j.proxy=function(e,t){var n,r,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return(// Simulated bind
r=o.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,r.concat(o.call(arguments)))}).guid=e.guid=e.guid||j.guid++,i)},j.holdReady=function(e){e?j.readyWait++:j.ready(!0)},j.isArray=Array.isArray,j.parseJSON=JSON.parse,j.nodeName=S,j.isFunction=g,j.isWindow=y,j.camelCase=ee,j.type=b,j.now=Date.now,j.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=j.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},j.trim=function(e){return null==e?"":(e+"").replace(tI,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return j});var tQ=e.jQuery,t$=e.$;return j.noConflict=function(t){return e.$===j&&(e.$=t$),t&&e.jQuery===j&&(e.jQuery=tQ),j},void 0===t&&(e.jQuery=e.$=j),j},"object"==typeof e.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
e.exports=n.document?r(n,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return r(e)}:r(n)});var o={};/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */void 0===jQuery.migrateMute&&(jQuery.migrateMute=!0),e=function(e,t){function n(t){return 0<=function(e,t){for(var n=/^(\d+)\.(\d+)\.(\d+)/,r=n.exec(e)||[],i=n.exec(t)||[],o=1;o<=3;o++){if(+r[o]>+i[o])return 1;if(+r[o]<+i[o])return -1}return 0}(e.fn.jquery,t)}e.migrateVersion="3.4.0";var r=Object.create(null),i=(e.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)r[arguments[e]]=!0},e.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete r[arguments[e]]},e.migrateIsPatchEnabled=function(e){return!r[e]},t.console&&t.console.log&&(e&&n("3.0.0")||t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion)),{});function o(n,r){var o=t.console;!e.migrateIsPatchEnabled(n)||e.migrateDeduplicateWarnings&&i[r]||(i[r]=!0,e.migrateWarnings.push(r+" ["+n+"]"),o&&o.warn&&!e.migrateMute&&(o.warn("JQMIGRATE: "+r),e.migrateTrace&&o.trace&&o.trace()))}function a(e,t,n,r,i){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return o(r,i),n},set:function(e){o(r,i),n=e}})}function s(t,n,r,i,a){var s=t[n];t[n]=function(){return a&&o(i,a),(e.migrateIsPatchEnabled(i)?r:s||e.noop).apply(this,arguments)}}function u(e,t,n,r,i){if(!i)throw Error("No warning message provided");s(e,t,n,r,i)}e.migrateDeduplicateWarnings=!0,e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===t.document.compatMode&&o("quirks","jQuery is not compatible with Quirks Mode");var l,c,f,p={},d=e.fn.init,h=e.find,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(l in s(e.fn,"init",function(t){var n=Array.prototype.slice.call(arguments);return e.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof t&&"#"===t&&(o("selector-empty-id","jQuery( '#' ) is not a valid selector"),n[0]=[]),d.apply(this,n)},"selector-empty-id"),e.fn.init.prototype=e.fn,s(e,"find",function(e){var n=Array.prototype.slice.call(arguments);if("string"==typeof e&&g.test(e))try{t.document.querySelector(e)}catch(r){e=e.replace(y,function(e,t,n,r){return"["+t+n+'"'+r+'"]'});try{t.document.querySelector(e),o("selector-hash","Attribute selector with '#' must be quoted: "+n[0]),n[0]=e}catch(e){o("selector-hash","Attribute selector with '#' was not fixed: "+n[0])}}return h.apply(this,n)},"selector-hash"),h)Object.prototype.hasOwnProperty.call(h,l)&&(e.find[l]=h[l]);u(e.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),u(e,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),u(e,"holdReady",e.holdReady,"holdReady","jQuery.holdReady is deprecated"),u(e,"unique",e.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),a(e.expr,"filters",e.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),a(e.expr,":",e.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),n("3.1.1")&&u(e,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),n("3.2.0")&&(u(e,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),u(e,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),n("3.3.0")&&(u(e,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){p["[object "+t+"]"]=t.toLowerCase()}),u(e,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?p[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),u(e,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),u(e,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),e.ajax&&(c=e.ajax,f=/(=)\?(?=&|$)|\?\?/,s(e,"ajax",function(){var e=c.apply(this,arguments);return e.promise&&(u(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),u(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),u(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),n("4.0.0")||e.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(f.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&f.test(e.data))&&o("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var v=e.fn.removeAttr,x=e.fn.toggleClass,b=/\S+/g;function w(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s(e.fn,"removeAttr",function(t){var n=this;return e.each(t.match(b),function(t,r){e.expr.match.bool.test(r)&&(o("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+r),n.prop(r,!1))}),v.apply(this,arguments)},"removeAttr-bool"),s(e.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?x.apply(this,arguments):(o("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var n=this.getAttribute&&this.getAttribute("class")||"";n&&e.data(this,"__className__",n),this.setAttribute&&this.setAttribute("class",!n&&!1!==t&&e.data(this,"__className__")||"")}))},"toggleClass-bool");var T,j=!1,C=/^[a-z]/,S=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function k(e){var n=t.document.implementation.createHTMLDocument("");return n.body.innerHTML=e,n.body&&n.body.innerHTML}e.swap&&e.each(["height","width","reliableMarginRight"],function(t,n){var r=e.cssHooks[n]&&e.cssHooks[n].get;r&&(e.cssHooks[n].get=function(){var e;return j=!0,e=r.apply(this,arguments),j=!1,e})}),s(e,"swap",function(e,t,n,r){var i,a={};for(i in j||o("swap","jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in n=n.apply(e,r||[]),t)e.style[i]=a[i];return n},"swap"),n("3.4.0")&&"undefined"!=typeof Proxy&&(e.cssProps=new Proxy(e.cssProps||{},{set:function(){return o("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),n("4.0.0")&&"undefined"!=typeof Proxy&&(e.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return o("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return o("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}})),T=e.fn.css,s(e.fn,"css",function(t,n){var r,i=this;return t&&"object"==typeof t&&!Array.isArray(t)?(e.each(t,function(t,n){e.fn.css.call(i,t,n)}),this):("number"==typeof n&&(r=n=w(t),C.test(r)&&S.test(r[0].toUpperCase()+r.slice(1))||e.cssNumber[n]||o("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+t+'", value )')),T.apply(this,arguments))},"css-number");var E,A,D,N,q,H,L,O=e.data,R=(s(e,"data",function(t,n,r){var i,a,s;if(n&&"object"==typeof n&&2==arguments.length){for(s in i=e.hasData(t)&&O.call(this,t),a={},n)s!==w(s)?(o("data-camelCase","jQuery.data() always sets/gets camelCased names: "+s),i[s]=n[s]):a[s]=n[s];return O.call(this,t,a),n}return n&&"string"==typeof n&&n!==w(n)&&(i=e.hasData(t)&&O.call(this,t))&&n in i?(o("data-camelCase","jQuery.data() always sets/gets camelCased names: "+n),2<arguments.length&&(i[n]=r),i[n]):O.apply(this,arguments)},"data-camelCase"),e.fx&&(D=e.Tween.prototype.run,N=function(e){return e},s(e.Tween.prototype,"run",function(){1<e.easing[this.easing].length&&(o("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),e.easing[this.easing]=N),D.apply(this,arguments)},"easing-one-arg"),E=e.fx.interval,A="jQuery.fx.interval is deprecated",t.requestAnimationFrame&&Object.defineProperty(e.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return t.document.hidden||o("fx-interval",A),e.migrateIsPatchEnabled("fx-interval")&&void 0===E?13:E},set:function(e){o("fx-interval",A),E=e}})),e.fn.load),P=e.event.add,M=e.event.fix,W=(e.event.props=[],e.event.fixHooks={},a(e.event.props,"concat",e.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),s(e.event,"fix",function(t){var n=t.type,r=this.fixHooks[n],i=e.event.props;if(i.length)for(o("event-old-patch","jQuery.event.props are deprecated and removed: "+i.join());i.length;)e.event.addProp(i.pop());if(r&&!r._migrated_&&(r._migrated_=!0,o("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+n),(i=r.props)&&i.length))for(;i.length;)e.event.addProp(i.pop());return n=M.call(this,t),r&&r.filter?r.filter(n,t):n},"event-old-patch"),s(e.event,"add",function(e,n){return e===t&&"load"===n&&"complete"===t.document.readyState&&o("load-after-event","jQuery(window).on('load'...) called after load event occurred"),P.apply(this,arguments)},"load-after-event"),e.each(["load","unload","error"],function(t,n){s(e.fn,n,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===n&&"string"==typeof e[0]?R.apply(this,e):(o("shorthand-removed-v3","jQuery.fn."+n+"() is deprecated"),e.splice(0,0,n),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){u(e.fn,n,function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)},"shorthand-deprecated-v3","jQuery.fn."+n+"() event shorthand is deprecated")}),e(function(){e(t.document).triggerHandler("ready")}),e.event.special.ready={setup:function(){this===t.document&&o("ready-event","'ready' event is deprecated")}},u(e.fn,"bind",function(e,t,n){return this.on(e,null,t,n)},"pre-on-methods","jQuery.fn.bind() is deprecated"),u(e.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),u(e.fn,"delegate",function(e,t,n,r){return this.on(t,e,n,r)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),u(e.fn,"undelegate",function(e,t,n){return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),u(e.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),F=(e.UNSAFE_restoreLegacyHtmlPrefilter=function(){e.migrateEnablePatches("self-closed-tags")},s(e,"htmlPrefilter",function(e){var t;return(t=e.replace(W,"<$1></$2>"))!==e&&k(e)!==k(t)&&o("self-closed-tags","HTML tags must be properly nested and closed: "+e),e.replace(W,"<$1></$2>")},"self-closed-tags"),e.migrateDisablePatches("self-closed-tags"),e.fn.offset);return s(e.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?F.apply(this,arguments):(o("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),e.ajax&&(q=e.param,s(e,"param",function(t,n){var r=e.ajaxSettings&&e.ajaxSettings.traditional;return void 0===n&&r&&(o("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),n=r),q.call(this,t,n)},"param-ajax-traditional")),u(e.fn,"andSelf",e.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),e.Deferred&&(H=e.Deferred,L=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]],s(e,"Deferred",function(t){var n=H(),r=n.promise();function i(){var t=arguments;return e.Deferred(function(i){e.each(L,function(e,o){var a="function"==typeof t[e]&&t[e];n[o[1]](function(){var e=a&&a.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[o[0]+"With"](this===r?i.promise():this,a?[e]:arguments)})}),t=null}).promise()}return u(n,"pipe",i,"deferred-pipe","deferred.pipe() is deprecated"),u(r,"pipe",i,"deferred-pipe","deferred.pipe() is deprecated"),t&&t.call(n,n),n},"deferred-pipe"),e.Deferred.exceptionHook=H.exceptionHook),e},"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t,window)}):o?o=e(i("6KOho"),window):e(jQuery,window);//# sourceMappingURL=index.ed0ede46.js.map

//# sourceMappingURL=index.ed0ede46.js.map