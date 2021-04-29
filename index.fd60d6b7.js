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
})({"13Xkn":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "36f74cf6c7500bb250c84ad8fd60d6b7";
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

},{}],"350MX":[function(require,module,exports) {
var _modelJs = require("./model.js");
var _searchViewJs = require("./searchView.js");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _searchViewJsDefault = _parcelHelpers.interopDefault(_searchViewJs);
var _viewJs = require("./view.js");
var _viewJsDefault = _parcelHelpers.interopDefault(_viewJs);
var _recipeViewJs = require("./recipeView.js");
var _recipeViewJsDefault = _parcelHelpers.interopDefault(_recipeViewJs);
require("./buttonSearchView.js");
// const test = function () {
// model.loadSearchResults("pizza");
// };
// test();
const controlSearchResults = async function (checkedItems) {
  try {
    const query = _searchViewJsDefault.default.getQuery();
    const checkI = checkedItems;
    _viewJsDefault.default.clearSearchResults();
    await _modelJs.loadSearchResults(query, checkI);
    console.log(_modelJs.state.search.results);
    _modelJs.state.search.results.map(res => _viewJsDefault.default.render(res));
  } catch (err) {
    console.log(err.message);
  }
};
const controlRecipes = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  await _modelJs.loadRecipe(id);
  _viewJsDefault.default.renderRecipe(_modelJs.state.recipe);
};
const init = function () {
  _searchViewJsDefault.default.addHandlerSearch(controlSearchResults);
  _recipeViewJsDefault.default.addHandlerRender(controlRecipes);
};
init();

},{"./model.js":"51beu","./searchView.js":"3xchA","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./view.js":"1nZoF","./recipeView.js":"2414G","./buttonSearchView.js":"6wEn9"}],"51beu":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "loadRecipe", function () {
  return loadRecipe;
});
_parcelHelpers.export(exports, "loadSearchResults", function () {
  return loadSearchResults;
});
var _helperJs = require("./helper.js");
var _configJs = require("./config.js");
const state = {
  recipe: {},
  checkedItems: {},
  randomRecipe: {},
  search: {
    query: "",
    results: []
  }
};
const createRecipeObject = function (data) {
  console.log(data);
  const recipe = data;
  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    instructions: recipe.instructions,
    cookTime: recipe.readyInMinutes,
    servings: recipe.servings,
    ingredients: recipe.extendedIngredients.map(ing => ing.original),
    cuisine: recipe.cuisines
  };
};
const loadRecipe = async function (id) {
  const data = await _helperJs.getJSON(`${_configJs.API_URL}recipes/${id}/information?includeNutrition=false&apiKey=${_configJs.API_KEY}`);
  state.recipe = createRecipeObject(data);
  console.log(state.recipe);
};
const loadSearchResults = async function (query, checkedItems) {
  try {
    state.checkedItems = checkedItems;
    let cuisine = "";
    let intolerances = "";
    let type = "";
    let filterson = false;
    if (!state.checkedItems.couisine) return;
    Object.entries(state.checkedItems.couisine).filter(el => {
      if (el[1]) {
        cuisine = el[0] + ",";
      }
    });
    if (cuisine != "") {
      cuisine = cuisine.slice(0, -1);
      cuisine = `&cuisine=${cuisine}`;
    }
    if (!state.checkedItems.intolerances) return;
    Object.entries(state.checkedItems.intolerances).filter(el => {
      if (el[1]) {
        intolerances = el[0] + ",";
      }
    });
    if (intolerances != "") {
      intolerances = intolerances.slice(0, -1);
      intolerances = `&intolerances=${intolerances}`;
    }
    if (!state.checkedItems.type) return;
    Object.entries(state.checkedItems.type).filter(el => {
      if (el[1]) {
        type = el[0] + ",";
      }
    });
    if (type != "") {
      type = type.slice(0, -1);
      type = `&type=${type}`;
    }
    state.search.query = query;
    // console.log(
    // `${API_URL}recipes/complexSearch?query=${query}&number=${NUM_OF_RES}&intolerances=${intolerances}&addRecipeInformation=true&cuisine=${couisine}&apiKey=${API_KEY}`
    // );
    const data = await _helperJs.getJSON(`${_configJs.API_URL}recipes/complexSearch?query=${query}&number=${_configJs.NUM_OF_RES}&addRecipeInformation=true${intolerances}${type}${cuisine}&apiKey=${_configJs.API_KEY}`);
    state.search.results = data.results.map(res => {
      console.log("res", res.title);
      return {
        id: res.id,
        title: res.title,
        image: res.image
      };
    });
  } catch (err) {
    console.log(err.message);
  }
};

},{"./helper.js":"2c9er","./config.js":"4Qlxt","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2c9er":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "getJSON", function () {
  return getJSON;
});
const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"4Qlxt":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "API_URL", function () {
  return API_URL;
});
_parcelHelpers.export(exports, "API_KEY", function () {
  return API_KEY;
});
_parcelHelpers.export(exports, "NUM_OF_RES", function () {
  return NUM_OF_RES;
});
const API_URL = "https://api.spoonacular.com/";
const API_KEY = "eb6df5fb3bb24a79b61414766dd20899";
const NUM_OF_RES = "5";

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3xchA":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
  if ((key in obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class SearchView {
  constructor() {
    _defineProperty(this, "_searchResults", document.querySelector(".search__field"));
    _defineProperty(this, "_myCollapse", document.getElementById("collapseExsample"));
    _defineProperty(this, "_checkedItems", document.querySelectorAll(".dropdown-item"));
    _defineProperty(this, "_african", document.getElementById("african"));
    _defineProperty(this, "_american", document.getElementById("american"));
    _defineProperty(this, "_british", document.getElementById("british"));
    _defineProperty(this, "_chinese", document.getElementById("chinese"));
    _defineProperty(this, "_european", document.getElementById("european"));
    _defineProperty(this, "_italian", document.getElementById("italian"));
    _defineProperty(this, "_mediterranean", document.getElementById("mediterranean"));
    _defineProperty(this, "_mexican", document.getElementById("mexican"));
    _defineProperty(this, "_egg", document.getElementById("egg"));
    _defineProperty(this, "_gluten", document.getElementById("gluten"));
    _defineProperty(this, "_peanut", document.getElementById("peanut"));
    _defineProperty(this, "_soy", document.getElementById("soy"));
    _defineProperty(this, "_breakfast", document.getElementById("breakfast"));
    _defineProperty(this, "_salad", document.getElementById("salad"));
    _defineProperty(this, "_dessert", document.getElementById("dessert"));
    _defineProperty(this, "_soup", document.getElementById("soup"));
    _defineProperty(this, "_snack", document.getElementById("snack"));
    _defineProperty(this, "_marinade", document.getElementById("marinade"));
    _defineProperty(this, "checkedBoxes", {
      couisine: {
        african: false,
        american: false,
        british: false,
        chinese: false,
        european: false,
        italian: false,
        mediterranean: false,
        mexican: false
      },
      intolerances: {
        egg: false,
        gluten: false,
        peanut: false,
        soy: false
      },
      type: {
        breakfast: false,
        salad: false,
        dessert: false,
        soup: false,
        snack: false,
        marinade: false
      }
    });
  }
  getQuery() {
    const query = this._searchResults.querySelector(".search__field--text").value;
    this.cleanInput();
    return query;
  }
  cleanInput() {
    this._searchResults.querySelector(".search__field--text").value = "";
  }
  addHandlerSearch(handler) {
    this._searchResults.addEventListener("submit", e => {
      e.preventDefault();
      this.hideCollapse();
      // couisine
      this.checkedBoxes.couisine.african = this._african.checked;
      this.checkedBoxes.couisine.american = this._american.checked;
      this.checkedBoxes.couisine.british = this._british.checked;
      this.checkedBoxes.couisine.chinese = this._chinese.checked;
      this.checkedBoxes.couisine.european = this._european.checked;
      this.checkedBoxes.couisine.italian = this._italian.checked;
      this.checkedBoxes.couisine.mediterranean = this._mediterranean.checked;
      this.checkedBoxes.couisine.mexican = this._mexican.checked;
      // intolerances
      this.checkedBoxes.intolerances.egg = this._egg.checked;
      this.checkedBoxes.intolerances.gluten = this._gluten.checked;
      this.checkedBoxes.intolerances.peanut = this._peanut.checked;
      this.checkedBoxes.intolerances.soy = this._soy.checked;
      // type
      this.checkedBoxes.type.breakfast = this._breakfast.checked;
      this.checkedBoxes.type.salad = this._salad.checked;
      this.checkedBoxes.type.dessert = this._dessert.checked;
      this.checkedBoxes.type.soup = this._soup.checked;
      this.checkedBoxes.type.snack = this._snack.checked;
      this.checkedBoxes.type.marinade = this._marinade.checked;
      handler(this.checkedBoxes);
    });
  }
  hideCollapse() {
    document.getElementById("collapseExample").className = "collapse";
  }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1nZoF":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
  if ((key in obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class View {
  constructor() {
    _defineProperty(this, "_data", void 0);
    _defineProperty(this, "_recipeData", void 0);
    _defineProperty(this, "_dataSearch", void 0);
    _defineProperty(this, "_searchResults", document.querySelector(".results"));
    _defineProperty(this, "_recipe", document.querySelector(".recipe"));
  }
  render(data) {
    this._data = data;
    // const id = window.location.hash.slice(1);
    const html = `<li class="preview grid-container">
            <a class="preview__link preview__link--active" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                
                </div>
              </div>
            </a>
          </li>`;
    this._searchResults.insertAdjacentHTML("afterbegin", html);
  }
  renderRecipe(data) {
    this._recipeData = data;
    const ing = this._recipeData.ingredients.map(ing => ` <li class="ingredients__list--item">${ing}</li>`).join("");
    const html = `
     <div class="recipe__view">
                <div class="title">
                  <h3>${this._recipeData.title}</h3>
                </div>
                <figure class="image">
                  <img src="${this._recipeData.image}" alt="Test" />
                </figure>
                <div class="informations">
                  <div class="cooking--time">
                    ${this._recipeData.cookTime} min

                    <i class="fas fa-clock" title="Edit"> </i>
                  </div>
                  <div class="portions">
                   ${this._recipeData.servings}
                    <i class="fas fa-user-friends"></i>
                  </div>
                </div>

                <div class="ingredients">
                  <p>Ingredients:</p>
                  <ul class="ingredients__list">
                   ${ing}
                    
                  </ul>
                </div>
                <div class="instructions">
                  <p>
                   ${this._recipeData.instructions}
                  </p>
                </div>
              </div>
      
      `;
    this.clearRecipes();
    this._recipe.insertAdjacentHTML("afterbegin", html);
  }
  clearRecipes() {
    this._recipe.innerHTML = "";
  }
  clearSearchResults() {
    this._searchResults.innerHTML = "";
  }
}
exports.default = new View();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2414G":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class RecipeView {
  addHandlerRender(handler) {
    ["hashchange", "load"].forEach(ev => window.addEventListener(ev, handler));
  }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6wEn9":[function(require,module,exports) {

},{}]},["13Xkn","350MX"], "350MX", "parcelRequire0c55")

//# sourceMappingURL=index.fd60d6b7.js.map
