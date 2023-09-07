// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9NMTX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9ca8edd69bbccfe9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7jNKX":[function(require,module,exports) {
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
    ], e1) : module.exports = e1(require("8133139a6c9a959e"));
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
    w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" : w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
    v.appendChild(w);
    return q;
});

},{"8133139a6c9a959e":"hgMhh"}]},["9NMTX","7jNKX"], "7jNKX", "parcelRequirefb6f")

//# sourceMappingURL=index.9bbccfe9.js.map