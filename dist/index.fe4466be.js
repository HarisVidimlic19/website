/**
 *  _______ _______  ______  _____                _______ _     _
 *  |______ |       |_____/ |     | |      |      |_____|  \___/ 
 *  ______| |_____  |    \_ |_____| |_____ |_____ |     | _/   \_
 *
 *  Parallax Scrolling Library
 *  http://iprodev.github.io/Scrollax.js
 *
 *  @version:  1.0.0
 *  @released: July 21, 2015
 *
 *  @author:   iProDev (Hemn Chawroka)
 *             http://iprodev.com/
 *
 *  Licensed under the MIT license.
 *  http://opensource.org/licenses/MIT
 * 
 */ (function(e1) {
    "function" === typeof define && define.amd ? define([
        "jquery"
    ], e1) : "undefined" !== typeof exports ? module.exports = e1() : e1(jQuery);
})(function(e) {
    function W(a1) {
        if (console && console.warn) console.warn("Scrollax: " + a1);
        else throw "Scrollax: " + a1;
    }
    function ka(a1) {
        var g1 = !!("pageYOffset" in a1);
        return {
            width: g1 ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a1.offsetWidth,
            height: g1 ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a1.offsetHeight,
            left: a1[g1 ? "pageXOffset" : "scrollLeft"],
            top: a1[g1 ? "pageYOffset" : "scrollTop"]
        };
    }
    function X(a) {
        return (a = a.data("scrollax")) && eval("({" + a + "})") || {};
    }
    function Y(a1) {
        var g1, c1;
        return !!(a1 && "object" === typeof a1 && "object" === typeof a1.window && a1.window == a1 && a1.setTimeout && a1.alert && (g1 = a1.document) && "object" === typeof g1 && (c1 = g1.defaultView || g1.parentWindow) && "object" === typeof c1 && c1 == a1);
    }
    var v = Array.prototype, C = v.push, Z = v.splice, aa = Object.prototype.hasOwnProperty, la = /[-+]?\d+(\.\d+)?/g, ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "), ba = e(window), ca = e(document.body), da, ea, L, M, N, q = function(a1, g1, c1) {
        function k1() {
            O1 = fa1 ? ca.find(ga1) : P1.find(ga1);
            x1.length = 0;
            r1 = !!t1.horizontal;
            O1.each(na1);
            d1();
            t1.performanceTrick && (F1 = fa1 ? ca : P1);
            u1("load");
            return f1;
        }
        function l1() {
            G1 && (G1 = clearTimeout(G1));
            G1 = setTimeout(function() {
                f1.reload();
            });
        }
        function d1() {
            var ha1 = x1.length;
            t1.performanceTrick && F1 && (clearTimeout(ia1), Q1 || (F1.addClass("scrollax-performance"), Q1 = !0), ia1 = setTimeout(function() {
                F1.removeClass("scrollax-performance");
                Q1 = !1;
            }, 100));
            if (ha1) {
                H1 = ka(a1);
                for(var c1 = 0; c1 < ha1; c1++)I1 = x1[c1], y1 = L(I1.element, a1), 0 > y1[r1 ? "right" : "bottom"] || y1[r1 ? "left" : "top"] > H1[r1 ? "width" : "height"] || (ja1 = I1.options, R1 = ja1.offset || t1.offset || 0, J1 = y1[r1 ? "right" : "bottom"], z1 = y1[r1 ? "width" : "height"], A1 = (z1 - J1 + R1) / z1, 0 > A1 && (J1 = y1[r1 ? "left" : "top"], z1 = H1[r1 ? "width" : "height"], A1 = -1 + (z1 - J1 + R1) / z1), 1 < A1 || -1 > A1 || b1(I1, A1, r1));
                u1("scroll", H1);
            }
        }
        function b1(a1, b1) {
            S1 = a1.parallaxElements;
            var c1 = S1.length;
            if (c1) for(var f1 = 0; f1 < c1; f1++){
                T1 = S1[f1];
                var g1 = oa1 = T1.element, d1 = b1;
                U1 = T1.properties || (r1 ? {
                    translateX: "100%"
                } : {
                    translateY: "100%"
                });
                D1 = "";
                for(B1 in U1){
                    n1 = U1[B1];
                    if ("number" === typeof n1) n1 *= d1;
                    else if ("string" === typeof n1) for(K1 = n1.match(la), m1 = 0, E1 = K1.length; m1 < E1; m1++)n1 = n1.replace(K1[m1], parseFloat(K1[m1] * d1));
                    if (-1 !== e.inArray(B1, ma)) D1 += B1 + "(" + n1 + ")";
                    else {
                        var k1 = g1.style, l1 = B1, h1;
                        "opacity" === B1 ? (h1 = 0 > d1 ? 1 + n1 : 1 - n1, h1 = 0 > h1 ? 0 : 1 < h1 ? 1 : h1) : h1 = n1;
                        k1[l1] = h1;
                    }
                }
                D1 && (g1.style[da] = ea + D1);
            }
        }
        function pa1(a1) {
            return "undefined" !== typeof a1 ? "number" !== typeof a1 && "string" !== typeof a1 || "" === a1 || isNaN(a1) ? O1.index(a1) : 0 <= a1 && a1 < x1.length ? a1 : -1 : -1;
        }
        function u1(a1, b1) {
            if (h1[a1]) {
                E1 = h1[a1].length;
                for(m1 = V1.length = 0; m1 < E1; m1++)C.call(V1, h1[a1][m1]);
                for(m1 = 0; m1 < E1; m1++)V1[m1].call(f1, a1, b1);
            }
        }
        function p1(a1, b1) {
            for(var c1 = 0, f1 = h1[a1].length; c1 < f1; c1++)if (h1[a1][c1] === b1) return c1;
            return -1;
        }
        var f1 = this, P1 = a1 && e(a1).eq(0) || ba, w1 = q.instances, v1 = null;
        a1 = P1[0];
        e.each(w1, function(b1, c1) {
            b1 && b1.frame === a1 && (v1 = !0);
        });
        if (!a1 || v1) v1 ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
        else {
            var t1 = e.extend({}, q.defaults, g1), x1 = [], O1 = null, ga1 = t1.parentSelector || "[data-scrollax-parent]", qa1 = t1.elementsSelector || "[data-scrollax]", h1 = {}, V1 = [], G1, fa1 = Y(a1), m1, E1, F1, ia1, Q1, H1, r1, R1, y1, I1, ja1, A1, J1, z1, S1, T1, oa1, U1, B1, n1, D1, K1;
            f1.frame = a1;
            f1.options = t1;
            f1.parents = x1;
            f1.initialized = !1;
            f1.reload = k1;
            var na1 = function(a1, b1) {
                var c1 = e(b1), f1 = X(e(b1)), d1 = {};
                d1.element = b1;
                d1.options = f1;
                d1.parallaxElements = [];
                c1.find(qa1).each(function(a1, b1) {
                    var c1 = X(e(b1));
                    c1.element = b1;
                    C.call(d1.parallaxElements, c1);
                });
                C.call(x1, d1);
            };
            f1.scroll = d1;
            f1.getIndex = pa1;
            f1.one = function(a1, b1) {
                function c1() {
                    b1.apply(f1, arguments);
                    f1.off(a1, c1);
                }
                f1.on(a1, c1);
                return f1;
            };
            f1.on = function(a1, b1) {
                if ("object" === typeof a1) {
                    for(var c1 in a1)if (aa.call(a1, c1)) f1.on(c1, a1[c1]);
                } else if ("function" === typeof b1) {
                    c1 = a1.split(" ");
                    for(var d1 = 0, g1 = c1.length; d1 < g1; d1++)h1[c1[d1]] = h1[c1[d1]] || [], -1 === p1(c1[d1], b1) && C.call(h1[c1[d1]], b1);
                } else if ("array" === typeof b1) for(c1 = 0, d1 = b1.length; c1 < d1; c1++)f1.on(a1, b1[c1]);
                return f1;
            };
            f1.off = function(a1, c1) {
                if (c1 instanceof Array) for(var b1 = 0, d1 = c1.length; b1 < d1; b1++)f1.off(a1, c1[b1]);
                else for(var b1 = a1.split(" "), d1 = 0, g1 = b1.length; d1 < g1; d1++)if (h1[b1[d1]] = h1[b1[d1]] || [], "undefined" === typeof c1) h1[b1[d1]].length = 0;
                else {
                    var k1 = p1(b1[d1], c1);
                    -1 !== k1 && Z.call(h1[b1[d1]], k1, 1);
                }
                return f1;
            };
            f1.set = function(a1, b1) {
                e.isPlainObject(a1) ? e.extend(t1, a1) : aa.call(t1, a1) && (t1[a1] = b1);
                k1();
                return f1;
            };
            f1.destroy = function() {
                N(window, "resize", l1);
                N(a1, "scroll", d1);
                e.each(w1, function(b1, c1) {
                    b1 && b1.frame === a1 && Z.call(q.instances, c1, 1);
                });
                x1.length = 0;
                f1.initialized = !1;
                u1("destroy");
                return f1;
            };
            f1.init = function() {
                if (!f1.initialized) return f1.on(c1), k1(), M(window, "resize", l1), M(a1, "scroll", d1), C.call(q.instances, f1), f1.initialized = !0, u1("initialized"), f1;
            };
        }
    };
    q.instances = [];
    (function() {
        var a1, g1, c1, k1, l1, d1, b1, e1;
        L = function(u1, p1) {
            g1 = u1.ownerDocument || u1;
            c1 = g1.documentElement;
            k1 = Y(p1) ? p1 : g1.defaultView || window;
            p1 = p1 && p1 !== g1 ? p1 : c1;
            l1 = (k1.pageYOffset || c1.scrollTop) - c1.clientTop;
            d1 = (k1.pageXOffset || c1.scrollLeft) - c1.clientLeft;
            b1 = {
                top: 0,
                left: 0
            };
            if (u1 && u1.getBoundingClientRect) {
                var f1 = {}, q1 = u1.getBoundingClientRect();
                for(a1 in q1)f1[a1] = q1[a1];
                b1 = f1;
                b1.width = b1.right - b1.left;
                b1.height = b1.bottom - b1.top;
            } else return null;
            if (p1 === k1) return b1;
            b1.top += l1;
            b1.left += d1;
            b1.right += d1;
            b1.bottom += l1;
            if (p1 === c1) return b1;
            e1 = L(p1);
            b1.left -= e1.left;
            b1.right -= e1.left;
            b1.top -= e1.top;
            b1.bottom -= e1.top;
            return b1;
        };
    })();
    (function() {
        function a1() {
            this.returnValue = !1;
        }
        function g1() {
            this.cancelBubble = !0;
        }
        M = window.addEventListener ? function(a1, g1, e1, d1) {
            a1.addEventListener(g1, e1, d1 || !1);
            return e1;
        } : function(c1, e1, l1) {
            var d1 = e1 + l1;
            c1[d1] = c1[d1] || function() {
                var b1 = window.event;
                b1.target = b1.srcElement;
                b1.preventDefault = a1;
                b1.stopPropagation = g1;
                l1.call(c1, b1);
            };
            c1.attachEvent("on" + e1, c1[d1]);
            return l1;
        };
        N = window.removeEventListener ? function(a1, g1, e1, d1) {
            a1.removeEventListener(g1, e1, d1 || !1);
            return e1;
        } : function(a1, g1, e1) {
            var d1 = g1 + e1;
            a1.detachEvent("on" + g1, a1[d1]);
            try {
                delete a1[d1];
            } catch (b1) {
                a1[d1] = void 0;
            }
            return e1;
        };
    })();
    (function() {
        function a1(a1) {
            for(var e1 = 0, d1 = g1.length; e1 < d1; e1++){
                var b1 = g1[e1] ? g1[e1] + a1.charAt(0).toUpperCase() + a1.slice(1) : a1;
                if (null != c1.style[b1]) return b1;
            }
        }
        var g1 = [
            "",
            "webkit",
            "moz",
            "ms",
            "o"
        ], c1 = document.createElement("div");
        da = a1("transform");
        ea = a1("perspective") ? "translateZ(0) " : "";
    })();
    q.defaults = {
        horizontal: !1,
        offset: 0,
        parentSelector: null,
        elementsSelector: null,
        performanceTrick: !1
    };
    window.Scrollax = q;
    e.fn.Scrollax = function(a1, g1) {
        var c1, k1;
        if (!e.isPlainObject(a1)) {
            if ("string" === typeof a1 || !1 === a1) c1 = !1 === a1 ? "destroy" : a1, k1 = slice.call(arguments, 1);
            a1 = {};
        }
        return this.each(function(l1, d1) {
            var b1 = e.data(d1, "scrollax");
            b1 || c1 ? b1 && c1 && b1[c1] && b1[c1].apply(b1, k1) : e.data(d1, "scrollax", new q(d1, a1, g1).init());
        });
    };
    e.Scrollax = function(a1, e1) {
        ba.Scrollax(a1, e1);
    };
    var v = document.head || document.getElementsByTagName("head")[0], w = document.createElement("style");
    w.type = "text/css";
    w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .    -performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" : w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
    v.appendChild(w);
    return q;
});

//# sourceMappingURL=index.fe4466be.js.map
