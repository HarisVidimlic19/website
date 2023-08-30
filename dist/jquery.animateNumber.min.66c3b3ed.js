// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"jWgg":[function(require,module,exports) {
/*
 jQuery animateNumber plugin v0.0.14
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function (d) {
  var r = function r(b) {
      return b.split("").reverse().join("");
    },
    m = {
      numberStep: function numberStep(b, a) {
        var e = Math.floor(b);
        d(a.elem).text(e);
      }
    },
    g = function g(b) {
      var a = b.elem;
      a.nodeType && a.parentNode && (a = a._animateNumberSetter, a || (a = m.numberStep), a(b.now, b));
    };
  d.Tween && d.Tween.propHooks ? d.Tween.propHooks.number = {
    set: g
  } : d.fx.step.number = g;
  d.animateNumber = {
    numberStepFactories: {
      append: function append(b) {
        return function (a, e) {
          var f = Math.floor(a);
          d(e.elem).prop("number", a).text(f + b);
        };
      },
      separator: function separator(b, a, e) {
        b = b || " ";
        a = a || 3;
        e = e || "";
        return function (f, k) {
          var u = 0 > f,
            c = Math.floor((u ? -1 : 1) * f).toString(),
            n = d(k.elem);
          if (c.length > a) {
            for (var h = c, l = a, m = h.split("").reverse(), c = [], p, s, q, t = 0, g = Math.ceil(h.length / l); t < g; t++) {
              p = "";
              for (q = 0; q < l; q++) {
                s = t * l + q;
                if (s === h.length) break;
                p += m[s];
              }
              c.push(p);
            }
            h = c.length - 1;
            l = r(c[h]);
            c[h] = r(parseInt(l, 10).toString());
            c = c.join(b);
            c = r(c);
          }
          n.prop("number", f).text((u ? "-" : "") + c + e);
        };
      }
    }
  };
  d.fn.animateNumber = function () {
    for (var b = arguments[0], a = d.extend({}, m, b), e = d(this), f = [a], k = 1, g = arguments.length; k < g; k++) f.push(arguments[k]);
    if (b.numberStep) {
      var c = this.each(function () {
          this._animateNumberSetter = b.numberStep;
        }),
        n = a.complete;
      a.complete = function () {
        c.each(function () {
          delete this._animateNumberSetter;
        });
        n && n.apply(this, arguments);
      };
    }
    return e.animate.apply(e, f);
  };
})(jQuery);
},{}]},{},["jWgg"], null)
//# sourceMappingURL=jquery.animateNumber.min.66c3b3ed.js.map