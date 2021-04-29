// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3egoh":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "07790417d9ffe54a0e6859a8ab305f2e";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5Jsbu":[function(require,module,exports) {
const e = async function (e) {
  try {
    const t = fetch(e), i = await Promise.race([t]), s = await i.json();
    if (!i.ok) throw new Error(`${s.message} (${i.status})`);
    return s;
  } catch (e) {
    throw e;
  }
}, t = {
  recipe: {},
  checkedItems: {},
  randomRecipe: {},
  search: {
    query: "",
    results: []
  }
}, i = async function (i) {
  const s = await e(`https://api.spoonacular.com/recipes/${i}/information?includeNutrition=false&apiKey=eb6df5fb3bb24a79b61414766dd20899`);
  (t.recipe = (function (e) {
    console.log(e);
    const t = e;
    return {
      id: t.id,
      title: t.title,
      image: t.image,
      instructions: t.instructions,
      cookTime: t.readyInMinutes,
      servings: t.servings,
      ingredients: t.extendedIngredients.map(e => e.original),
      cuisine: t.cuisines
    };
  })(s), console.log(t.recipe));
};
function s(e, t, i) {
  return ((t in e) ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e);
}
var n = new (class {
  constructor() {
    (s(this, "_searchResults", document.querySelector(".search__field")), s(this, "_myCollapse", document.getElementById("collapseExsample")), s(this, "_checkedItems", document.querySelectorAll(".dropdown-item")), s(this, "_african", document.getElementById("african")), s(this, "_american", document.getElementById("american")), s(this, "_british", document.getElementById("british")), s(this, "_chinese", document.getElementById("chinese")), s(this, "_european", document.getElementById("european")), s(this, "_italian", document.getElementById("italian")), s(this, "_mediterranean", document.getElementById("mediterranean")), s(this, "_mexican", document.getElementById("mexican")), s(this, "_egg", document.getElementById("egg")), s(this, "_gluten", document.getElementById("gluten")), s(this, "_peanut", document.getElementById("peanut")), s(this, "_soy", document.getElementById("soy")), s(this, "_breakfast", document.getElementById("breakfast")), s(this, "_salad", document.getElementById("salad")), s(this, "_dessert", document.getElementById("dessert")), s(this, "_soup", document.getElementById("soup")), s(this, "_snack", document.getElementById("snack")), s(this, "_marinade", document.getElementById("marinade")), s(this, "checkedBoxes", {
      couisine: {
        african: !1,
        american: !1,
        british: !1,
        chinese: !1,
        european: !1,
        italian: !1,
        mediterranean: !1,
        mexican: !1
      },
      intolerances: {
        egg: !1,
        gluten: !1,
        peanut: !1,
        soy: !1
      },
      type: {
        breakfast: !1,
        salad: !1,
        dessert: !1,
        soup: !1,
        snack: !1,
        marinade: !1
      }
    }));
  }
  getQuery() {
    const e = this._searchResults.querySelector(".search__field--text").value;
    return (this.cleanInput(), e);
  }
  cleanInput() {
    this._searchResults.querySelector(".search__field--text").value = "";
  }
  addHandlerSearch(e) {
    this._searchResults.addEventListener("submit", t => {
      (t.preventDefault(), this.hideCollapse(), this.checkedBoxes.couisine.african = this._african.checked, this.checkedBoxes.couisine.american = this._american.checked, this.checkedBoxes.couisine.british = this._british.checked, this.checkedBoxes.couisine.chinese = this._chinese.checked, this.checkedBoxes.couisine.european = this._european.checked, this.checkedBoxes.couisine.italian = this._italian.checked, this.checkedBoxes.couisine.mediterranean = this._mediterranean.checked, this.checkedBoxes.couisine.mexican = this._mexican.checked, this.checkedBoxes.intolerances.egg = this._egg.checked, this.checkedBoxes.intolerances.gluten = this._gluten.checked, this.checkedBoxes.intolerances.peanut = this._peanut.checked, this.checkedBoxes.intolerances.soy = this._soy.checked, this.checkedBoxes.type.breakfast = this._breakfast.checked, this.checkedBoxes.type.salad = this._salad.checked, this.checkedBoxes.type.dessert = this._dessert.checked, this.checkedBoxes.type.soup = this._soup.checked, this.checkedBoxes.type.snack = this._snack.checked, this.checkedBoxes.type.marinade = this._marinade.checked, e(this.checkedBoxes));
    });
  }
  hideCollapse() {
    document.getElementById("collapseExample").className = "collapse";
  }
})();
function c(e, t, i) {
  return ((t in e) ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e);
}
var a = new (class {
  constructor() {
    (c(this, "_data", void 0), c(this, "_recipeData", void 0), c(this, "_dataSearch", void 0), c(this, "_searchResults", document.querySelector(".results")), c(this, "_recipe", document.querySelector(".recipe")));
  }
  render(e) {
    this._data = e;
    const t = `<li class="preview grid-container">\n            <a class="preview__link preview__link--active" href="#${this._data.id}">\n              <figure class="preview__fig">\n                <img src="${this._data.image}" alt="${this._data.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                \n                </div>\n              </div>\n            </a>\n          </li>`;
    this._searchResults.insertAdjacentHTML("afterbegin", t);
  }
  renderRecipe(e) {
    this._recipeData = e;
    const t = this._recipeData.ingredients.map(e => ` <li class="ingredients__list--item">${e}</li>`).join(""), i = `\n     <div class="recipe__view">\n                <div class="title">\n                  <h3>${this._recipeData.title}</h3>\n                </div>\n                <figure class="image">\n                  <img src="${this._recipeData.image}" alt="Test" />\n                </figure>\n                <div class="informations">\n                  <div class="cooking--time">\n                    ${this._recipeData.cookTime} min\n\n                    <i class="fas fa-clock" title="Edit"> </i>\n                  </div>\n                  <div class="portions">\n                   ${this._recipeData.servings}\n                    <i class="fas fa-user-friends"></i>\n                  </div>\n                </div>\n\n                <div class="ingredients">\n                  <p>Ingredients:</p>\n                  <ul class="ingredients__list">\n                   ${t}\n                    \n                  </ul>\n                </div>\n                <div class="instructions">\n                  <p>\n                   ${this._recipeData.instructions}\n                  </p>\n                </div>\n              </div>\n      \n      `;
    (this.clearRecipes(), this._recipe.insertAdjacentHTML("afterbegin", i));
  }
  clearRecipes() {
    this._recipe.innerHTML = "";
  }
  clearSearchResults() {
    this._searchResults.innerHTML = "";
  }
})();
var r = new (class {
  addHandlerRender(e) {
    ["hashchange", "load"].forEach(t => window.addEventListener(t, e));
  }
})();
const d = async function (i) {
  try {
    const s = n.getQuery(), c = i;
    (a.clearSearchResults(), await (async function (i, s) {
      try {
        t.checkedItems = s;
        let n = "", c = "", a = "";
        if (!t.checkedItems.couisine) return;
        if ((Object.entries(t.checkedItems.couisine).filter(e => {
          e[1] && (n = e[0] + ",");
        }), "" != n && (n = n.slice(0, -1), n = `&cuisine=${n}`), !t.checkedItems.intolerances)) return;
        if ((Object.entries(t.checkedItems.intolerances).filter(e => {
          e[1] && (c = e[0] + ",");
        }), "" != c && (c = c.slice(0, -1), c = `&intolerances=${c}`), !t.checkedItems.type)) return;
        (Object.entries(t.checkedItems.type).filter(e => {
          e[1] && (a = e[0] + ",");
        }), "" != a && (a = a.slice(0, -1), a = `&type=${a}`), t.search.query = i);
        const r = await e(`https://api.spoonacular.com/recipes/complexSearch?query=${i}&number=5&addRecipeInformation=true${c}${a}${n}&apiKey=eb6df5fb3bb24a79b61414766dd20899`);
        t.search.results = r.results.map(e => (console.log("res", e.title), {
          id: e.id,
          title: e.title,
          image: e.image
        }));
      } catch (e) {
        console.log(e.message);
      }
    })(s, c), console.log(t.search.results), t.search.results.map(e => a.render(e)));
  } catch (e) {
    console.log(e.message);
  }
}, h = async function () {
  const e = window.location.hash.slice(1);
  e && (await i(e), a.renderRecipe(t.recipe));
};
(n.addHandlerSearch(d), r.addHandlerRender(h));

},{}]},["3egoh","5Jsbu"], "5Jsbu", "parcelRequire0c55")

//# sourceMappingURL=index.ab305f2e.js.map
