var am = Object.defineProperty;
var cm = (r, i, o) =>
  i in r
    ? am(r, i, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (r[i] = o);
var Bs = (r, i, o) => cm(r, typeof i != "symbol" ? i + "" : i, o);
function fm(r, i) {
  for (var o = 0; o < i.length; o++) {
    const u = i[o];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const c in u)
        if (c !== "default" && !(c in r)) {
          const f = Object.getOwnPropertyDescriptor(u, c);
          f &&
            Object.defineProperty(
              r,
              c,
              f.get ? f : { enumerable: !0, get: () => u[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const p of f.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && u(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = o(c);
    fetch(c.href, f);
  }
})();
function dm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var $s = { exports: {} },
  Yr = {},
  Hs = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf;
function pm() {
  if (Cf) return ie;
  Cf = 1;
  var r = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function N(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (E && k[E]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    O = {};
  function R(k, M, le) {
    (this.props = k),
      (this.context = M),
      (this.refs = O),
      (this.updater = le || U);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (k, M) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, M, "setState");
    }),
    (R.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function B() {}
  B.prototype = R.prototype;
  function H(k, M, le) {
    (this.props = k),
      (this.context = M),
      (this.refs = O),
      (this.updater = le || U);
  }
  var I = (H.prototype = new B());
  (I.constructor = H), T(I, R.prototype), (I.isPureReactComponent = !0);
  var V = Array.isArray,
    X = Object.prototype.hasOwnProperty,
    b = { current: null },
    oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(k, M, le) {
    var se,
      ae = {},
      ce = null,
      me = null;
    if (M != null)
      for (se in (M.ref !== void 0 && (me = M.ref),
      M.key !== void 0 && (ce = "" + M.key),
      M))
        X.call(M, se) && !oe.hasOwnProperty(se) && (ae[se] = M[se]);
    var de = arguments.length - 2;
    if (de === 1) ae.children = le;
    else if (1 < de) {
      for (var we = Array(de), et = 0; et < de; et++)
        we[et] = arguments[et + 2];
      ae.children = we;
    }
    if (k && k.defaultProps)
      for (se in ((de = k.defaultProps), de))
        ae[se] === void 0 && (ae[se] = de[se]);
    return {
      $$typeof: r,
      type: k,
      key: ce,
      ref: me,
      props: ae,
      _owner: b.current,
    };
  }
  function je(k, M) {
    return {
      $$typeof: r,
      type: k.type,
      key: M,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function ht(k) {
    return typeof k == "object" && k !== null && k.$$typeof === r;
  }
  function Mt(k) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (le) {
        return M[le];
      })
    );
  }
  var Ct = /\/+/g;
  function be(k, M) {
    return typeof k == "object" && k !== null && k.key != null
      ? Mt("" + k.key)
      : M.toString(36);
  }
  function mt(k, M, le, se, ae) {
    var ce = typeof k;
    (ce === "undefined" || ce === "boolean") && (k = null);
    var me = !1;
    if (k === null) me = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case r:
            case i:
              me = !0;
          }
      }
    if (me)
      return (
        (me = k),
        (ae = ae(me)),
        (k = se === "" ? "." + be(me, 0) : se),
        V(ae)
          ? ((le = ""),
            k != null && (le = k.replace(Ct, "$&/") + "/"),
            mt(ae, M, le, "", function (et) {
              return et;
            }))
          : ae != null &&
            (ht(ae) &&
              (ae = je(
                ae,
                le +
                  (!ae.key || (me && me.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(Ct, "$&/") + "/") +
                  k
              )),
            M.push(ae)),
        1
      );
    if (((me = 0), (se = se === "" ? "." : se + ":"), V(k)))
      for (var de = 0; de < k.length; de++) {
        ce = k[de];
        var we = se + be(ce, de);
        me += mt(ce, M, le, we, ae);
      }
    else if (((we = N(k)), typeof we == "function"))
      for (k = we.call(k), de = 0; !(ce = k.next()).done; )
        (ce = ce.value),
          (we = se + be(ce, de++)),
          (me += mt(ce, M, le, we, ae));
    else if (ce === "object")
      throw (
        ((M = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return me;
  }
  function Rt(k, M, le) {
    if (k == null) return k;
    var se = [],
      ae = 0;
    return (
      mt(k, se, "", "", function (ce) {
        return M.call(le, ce, ae++);
      }),
      se
    );
  }
  function Qe(k) {
    if (k._status === -1) {
      var M = k._result;
      (M = M()),
        M.then(
          function (le) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = le));
          },
          function (le) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = le));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = M));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ke = { current: null },
    $ = { transition: null },
    ee = {
      ReactCurrentDispatcher: ke,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: b,
    };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ie.Children = {
      map: Rt,
      forEach: function (k, M, le) {
        Rt(
          k,
          function () {
            M.apply(this, arguments);
          },
          le
        );
      },
      count: function (k) {
        var M = 0;
        return (
          Rt(k, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (k) {
        return (
          Rt(k, function (M) {
            return M;
          }) || []
        );
      },
      only: function (k) {
        if (!ht(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (ie.Component = R),
    (ie.Fragment = o),
    (ie.Profiler = c),
    (ie.PureComponent = H),
    (ie.StrictMode = u),
    (ie.Suspense = y),
    (ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee),
    (ie.act = K),
    (ie.cloneElement = function (k, M, le) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        );
      var se = T({}, k.props),
        ae = k.key,
        ce = k.ref,
        me = k._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((ce = M.ref), (me = b.current)),
          M.key !== void 0 && (ae = "" + M.key),
          k.type && k.type.defaultProps)
        )
          var de = k.type.defaultProps;
        for (we in M)
          X.call(M, we) &&
            !oe.hasOwnProperty(we) &&
            (se[we] = M[we] === void 0 && de !== void 0 ? de[we] : M[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) se.children = le;
      else if (1 < we) {
        de = Array(we);
        for (var et = 0; et < we; et++) de[et] = arguments[et + 2];
        se.children = de;
      }
      return {
        $$typeof: r,
        type: k.type,
        key: ae,
        ref: ce,
        props: se,
        _owner: me,
      };
    }),
    (ie.createContext = function (k) {
      return (
        (k = {
          $$typeof: p,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: f, _context: k }),
        (k.Consumer = k)
      );
    }),
    (ie.createElement = ne),
    (ie.createFactory = function (k) {
      var M = ne.bind(null, k);
      return (M.type = k), M;
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (k) {
      return { $$typeof: m, render: k };
    }),
    (ie.isValidElement = ht),
    (ie.lazy = function (k) {
      return { $$typeof: w, _payload: { _status: -1, _result: k }, _init: Qe };
    }),
    (ie.memo = function (k, M) {
      return { $$typeof: S, type: k, compare: M === void 0 ? null : M };
    }),
    (ie.startTransition = function (k) {
      var M = $.transition;
      $.transition = {};
      try {
        k();
      } finally {
        $.transition = M;
      }
    }),
    (ie.unstable_act = K),
    (ie.useCallback = function (k, M) {
      return ke.current.useCallback(k, M);
    }),
    (ie.useContext = function (k) {
      return ke.current.useContext(k);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (k) {
      return ke.current.useDeferredValue(k);
    }),
    (ie.useEffect = function (k, M) {
      return ke.current.useEffect(k, M);
    }),
    (ie.useId = function () {
      return ke.current.useId();
    }),
    (ie.useImperativeHandle = function (k, M, le) {
      return ke.current.useImperativeHandle(k, M, le);
    }),
    (ie.useInsertionEffect = function (k, M) {
      return ke.current.useInsertionEffect(k, M);
    }),
    (ie.useLayoutEffect = function (k, M) {
      return ke.current.useLayoutEffect(k, M);
    }),
    (ie.useMemo = function (k, M) {
      return ke.current.useMemo(k, M);
    }),
    (ie.useReducer = function (k, M, le) {
      return ke.current.useReducer(k, M, le);
    }),
    (ie.useRef = function (k) {
      return ke.current.useRef(k);
    }),
    (ie.useState = function (k) {
      return ke.current.useState(k);
    }),
    (ie.useSyncExternalStore = function (k, M, le) {
      return ke.current.useSyncExternalStore(k, M, le);
    }),
    (ie.useTransition = function () {
      return ke.current.useTransition();
    }),
    (ie.version = "18.3.1"),
    ie
  );
}
var Rf;
function Mi() {
  return Rf || ((Rf = 1), (Hs.exports = pm())), Hs.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jf;
function hm() {
  if (jf) return Yr;
  jf = 1;
  var r = Mi(),
    i = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, y, S) {
    var w,
      E = {},
      N = null,
      U = null;
    S !== void 0 && (N = "" + S),
      y.key !== void 0 && (N = "" + y.key),
      y.ref !== void 0 && (U = y.ref);
    for (w in y) u.call(y, w) && !f.hasOwnProperty(w) && (E[w] = y[w]);
    if (m && m.defaultProps)
      for (w in ((y = m.defaultProps), y)) E[w] === void 0 && (E[w] = y[w]);
    return {
      $$typeof: i,
      type: m,
      key: N,
      ref: U,
      props: E,
      _owner: c.current,
    };
  }
  return (Yr.Fragment = o), (Yr.jsx = p), (Yr.jsxs = p), Yr;
}
var Pf;
function mm() {
  return Pf || ((Pf = 1), ($s.exports = hm())), $s.exports;
}
var g = mm(),
  F = Mi();
const ym = dm(F),
  gm = fm({ __proto__: null, default: ym }, [F]);
var wi = {},
  Ws = { exports: {} },
  Ye = {},
  Vs = { exports: {} },
  Qs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nf;
function vm() {
  return (
    Nf ||
      ((Nf = 1),
      (function (r) {
        function i($, ee) {
          var K = $.length;
          $.push(ee);
          e: for (; 0 < K; ) {
            var k = (K - 1) >>> 1,
              M = $[k];
            if (0 < c(M, ee)) ($[k] = ee), ($[K] = M), (K = k);
            else break e;
          }
        }
        function o($) {
          return $.length === 0 ? null : $[0];
        }
        function u($) {
          if ($.length === 0) return null;
          var ee = $[0],
            K = $.pop();
          if (K !== ee) {
            $[0] = K;
            e: for (var k = 0, M = $.length, le = M >>> 1; k < le; ) {
              var se = 2 * (k + 1) - 1,
                ae = $[se],
                ce = se + 1,
                me = $[ce];
              if (0 > c(ae, K))
                ce < M && 0 > c(me, ae)
                  ? (($[k] = me), ($[ce] = K), (k = ce))
                  : (($[k] = ae), ($[se] = K), (k = se));
              else if (ce < M && 0 > c(me, K))
                ($[k] = me), ($[ce] = K), (k = ce);
              else break e;
            }
          }
          return ee;
        }
        function c($, ee) {
          var K = $.sortIndex - ee.sortIndex;
          return K !== 0 ? K : $.id - ee.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          r.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            m = p.now();
          r.unstable_now = function () {
            return p.now() - m;
          };
        }
        var y = [],
          S = [],
          w = 1,
          E = null,
          N = 3,
          U = !1,
          T = !1,
          O = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function I($) {
          for (var ee = o(S); ee !== null; ) {
            if (ee.callback === null) u(S);
            else if (ee.startTime <= $)
              u(S), (ee.sortIndex = ee.expirationTime), i(y, ee);
            else break;
            ee = o(S);
          }
        }
        function V($) {
          if (((O = !1), I($), !T))
            if (o(y) !== null) (T = !0), Qe(X);
            else {
              var ee = o(S);
              ee !== null && ke(V, ee.startTime - $);
            }
        }
        function X($, ee) {
          (T = !1), O && ((O = !1), B(ne), (ne = -1)), (U = !0);
          var K = N;
          try {
            for (
              I(ee), E = o(y);
              E !== null && (!(E.expirationTime > ee) || ($ && !Mt()));

            ) {
              var k = E.callback;
              if (typeof k == "function") {
                (E.callback = null), (N = E.priorityLevel);
                var M = k(E.expirationTime <= ee);
                (ee = r.unstable_now()),
                  typeof M == "function"
                    ? (E.callback = M)
                    : E === o(y) && u(y),
                  I(ee);
              } else u(y);
              E = o(y);
            }
            if (E !== null) var le = !0;
            else {
              var se = o(S);
              se !== null && ke(V, se.startTime - ee), (le = !1);
            }
            return le;
          } finally {
            (E = null), (N = K), (U = !1);
          }
        }
        var b = !1,
          oe = null,
          ne = -1,
          je = 5,
          ht = -1;
        function Mt() {
          return !(r.unstable_now() - ht < je);
        }
        function Ct() {
          if (oe !== null) {
            var $ = r.unstable_now();
            ht = $;
            var ee = !0;
            try {
              ee = oe(!0, $);
            } finally {
              ee ? be() : ((b = !1), (oe = null));
            }
          } else b = !1;
        }
        var be;
        if (typeof H == "function")
          be = function () {
            H(Ct);
          };
        else if (typeof MessageChannel < "u") {
          var mt = new MessageChannel(),
            Rt = mt.port2;
          (mt.port1.onmessage = Ct),
            (be = function () {
              Rt.postMessage(null);
            });
        } else
          be = function () {
            R(Ct, 0);
          };
        function Qe($) {
          (oe = $), b || ((b = !0), be());
        }
        function ke($, ee) {
          ne = R(function () {
            $(r.unstable_now());
          }, ee);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            T || U || ((T = !0), Qe(X));
          }),
          (r.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (je = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return o(y);
          }),
          (r.unstable_next = function ($) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var ee = 3;
                break;
              default:
                ee = N;
            }
            var K = N;
            N = ee;
            try {
              return $();
            } finally {
              N = K;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function ($, ee) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var K = N;
            N = $;
            try {
              return ee();
            } finally {
              N = K;
            }
          }),
          (r.unstable_scheduleCallback = function ($, ee, K) {
            var k = r.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? k + K : k))
                : (K = k),
              $)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = K + M),
              ($ = {
                id: w++,
                callback: ee,
                priorityLevel: $,
                startTime: K,
                expirationTime: M,
                sortIndex: -1,
              }),
              K > k
                ? (($.sortIndex = K),
                  i(S, $),
                  o(y) === null &&
                    $ === o(S) &&
                    (O ? (B(ne), (ne = -1)) : (O = !0), ke(V, K - k)))
                : (($.sortIndex = M), i(y, $), T || U || ((T = !0), Qe(X))),
              $
            );
          }),
          (r.unstable_shouldYield = Mt),
          (r.unstable_wrapCallback = function ($) {
            var ee = N;
            return function () {
              var K = N;
              N = ee;
              try {
                return $.apply(this, arguments);
              } finally {
                N = K;
              }
            };
          });
      })(Qs)),
    Qs
  );
}
var Tf;
function wm() {
  return Tf || ((Tf = 1), (Vs.exports = vm())), Vs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Of;
function Sm() {
  if (Of) return Ye;
  Of = 1;
  var r = Mi(),
    i = wm();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var u = new Set(),
    c = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var m = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    y = Object.prototype.hasOwnProperty,
    S =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    E = {};
  function N(e) {
    return y.call(E, e)
      ? !0
      : y.call(w, e)
      ? !1
      : S.test(e)
      ? (E[e] = !0)
      : ((w[e] = !0), !1);
  }
  function U(e, t, n, l) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, l) {
    if (t === null || typeof t > "u" || U(e, t, n, l)) return !0;
    if (l) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function O(e, t, n, l, s, a, d) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = d);
  }
  var R = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      R[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      R[e] = new O(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var B = /[\-:]([a-z])/g;
  function H(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(B, H);
      R[t] = new O(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(B, H);
        R[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(B, H);
      R[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new O(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function I(e, t, n, l) {
    var s = R.hasOwnProperty(t) ? R[t] : null;
    (s !== null
      ? s.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, n, s, l) && (n = null),
      l || s === null
        ? N(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (l = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              l ? e.setAttributeNS(l, t, n) : e.setAttribute(t, n))));
  }
  var V = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    X = Symbol.for("react.element"),
    b = Symbol.for("react.portal"),
    oe = Symbol.for("react.fragment"),
    ne = Symbol.for("react.strict_mode"),
    je = Symbol.for("react.profiler"),
    ht = Symbol.for("react.provider"),
    Mt = Symbol.for("react.context"),
    Ct = Symbol.for("react.forward_ref"),
    be = Symbol.for("react.suspense"),
    mt = Symbol.for("react.suspense_list"),
    Rt = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ke = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var K = Object.assign,
    k;
  function M(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var le = !1;
  function se(e, t) {
    if (!e || le) return "";
    le = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (j) {
            var l = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            l = j;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          l = j;
        }
        e();
      }
    } catch (j) {
      if (j && l && typeof j.stack == "string") {
        for (
          var s = j.stack.split(`
`),
            a = l.stack.split(`
`),
            d = s.length - 1,
            h = a.length - 1;
          1 <= d && 0 <= h && s[d] !== a[h];

        )
          h--;
        for (; 1 <= d && 0 <= h; d--, h--)
          if (s[d] !== a[h]) {
            if (d !== 1 || h !== 1)
              do
                if ((d--, h--, 0 > h || s[d] !== a[h])) {
                  var v =
                    `
` + s[d].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  );
                }
              while (1 <= d && 0 <= h);
            break;
          }
      }
    } finally {
      (le = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function ae(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = se(e.type, !1)), e;
      case 11:
        return (e = se(e.type.render, !1)), e;
      case 1:
        return (e = se(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case oe:
        return "Fragment";
      case b:
        return "Portal";
      case je:
        return "Profiler";
      case ne:
        return "StrictMode";
      case be:
        return "Suspense";
      case mt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Mt:
          return (e.displayName || "Context") + ".Consumer";
        case ht:
          return (e._context.displayName || "Context") + ".Provider";
        case Ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Rt:
          return (
            (t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo"
          );
        case Qe:
          (t = e._payload), (e = e._init);
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(t);
      case 8:
        return t === ne ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function de(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function we(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function et(e) {
    var t = we(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (d) {
            (l = "" + d), a.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (d) {
            l = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function al(e) {
    e._valueTracker || (e._valueTracker = et(e));
  }
  function Tu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function cl(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ki(e, t) {
    var n = t.checked;
    return K({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ou(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    (n = de(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Lu(e, t) {
    (t = t.checked), t != null && I(e, "checked", t, !1);
  }
  function qi(e, t) {
    Lu(e, t);
    var n = de(t.value),
      l = t.type;
    if (n != null)
      l === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ji(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ji(e, t.type, de(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Mu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ji(e, t, n) {
    (t !== "number" || cl(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var dr = Array.isArray;
  function zn(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        (s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + de(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          (e[s].selected = !0), l && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return K({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function zu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (dr(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: de(n) };
  }
  function Du(e, t) {
    var n = de(t.value),
      l = de(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      l != null && (e.defaultValue = "" + l);
  }
  function Fu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Au(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Au(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var fl,
    Iu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, l, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, l, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          fl = fl || document.createElement("div"),
            fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = fl.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function pr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    pp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(hr).forEach(function (e) {
    pp.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hr[t] = hr[e]);
    });
  });
  function Uu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (hr.hasOwnProperty(e) && hr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Bu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var l = n.indexOf("--") === 0,
          s = Uu(n, t[n], l);
        n === "float" && (n = "cssFloat"), l ? e.setProperty(n, s) : (e[n] = s);
      }
  }
  var hp = K(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Yi(e, t) {
    if (t) {
      if (hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Zi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var bi = null;
  function eo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var to = null,
    Dn = null,
    Fn = null;
  function $u(e) {
    if ((e = Fr(e))) {
      if (typeof to != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = zl(t)), to(e.stateNode, e.type, t));
    }
  }
  function Hu(e) {
    Dn ? (Fn ? Fn.push(e) : (Fn = [e])) : (Dn = e);
  }
  function Wu() {
    if (Dn) {
      var e = Dn,
        t = Fn;
      if (((Fn = Dn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
    }
  }
  function Vu(e, t) {
    return e(t);
  }
  function Qu() {}
  var no = !1;
  function Ku(e, t, n) {
    if (no) return e(t, n);
    no = !0;
    try {
      return Vu(e, t, n);
    } finally {
      (no = !1), (Dn !== null || Fn !== null) && (Qu(), Wu());
    }
  }
  function mr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = zl(n);
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var ro = !1;
  if (m)
    try {
      var yr = {};
      Object.defineProperty(yr, "passive", {
        get: function () {
          ro = !0;
        },
      }),
        window.addEventListener("test", yr, yr),
        window.removeEventListener("test", yr, yr);
    } catch {
      ro = !1;
    }
  function mp(e, t, n, l, s, a, d, h, v) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (z) {
      this.onError(z);
    }
  }
  var gr = !1,
    dl = null,
    pl = !1,
    lo = null,
    yp = {
      onError: function (e) {
        (gr = !0), (dl = e);
      },
    };
  function gp(e, t, n, l, s, a, d, h, v) {
    (gr = !1), (dl = null), mp.apply(yp, arguments);
  }
  function vp(e, t, n, l, s, a, d, h, v) {
    if ((gp.apply(this, arguments), gr)) {
      if (gr) {
        var j = dl;
        (gr = !1), (dl = null);
      } else throw Error(o(198));
      pl || ((pl = !0), (lo = j));
    }
  }
  function pn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function qu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ju(e) {
    if (pn(e) !== e) throw Error(o(188));
  }
  function wp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = pn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var a = s.alternate;
      if (a === null) {
        if (((l = s.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (s.child === a.child) {
        for (a = s.child; a; ) {
          if (a === n) return Ju(s), e;
          if (a === l) return Ju(s), t;
          a = a.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) (n = s), (l = a);
      else {
        for (var d = !1, h = s.child; h; ) {
          if (h === n) {
            (d = !0), (n = s), (l = a);
            break;
          }
          if (h === l) {
            (d = !0), (l = s), (n = a);
            break;
          }
          h = h.sibling;
        }
        if (!d) {
          for (h = a.child; h; ) {
            if (h === n) {
              (d = !0), (n = a), (l = s);
              break;
            }
            if (h === l) {
              (d = !0), (l = a), (n = s);
              break;
            }
            h = h.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function Xu(e) {
    return (e = wp(e)), e !== null ? Gu(e) : null;
  }
  function Gu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Gu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Yu = i.unstable_scheduleCallback,
    Zu = i.unstable_cancelCallback,
    Sp = i.unstable_shouldYield,
    xp = i.unstable_requestPaint,
    Ce = i.unstable_now,
    Ep = i.unstable_getCurrentPriorityLevel,
    io = i.unstable_ImmediatePriority,
    bu = i.unstable_UserBlockingPriority,
    hl = i.unstable_NormalPriority,
    kp = i.unstable_LowPriority,
    ea = i.unstable_IdlePriority,
    ml = null,
    jt = null;
  function _p(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
      try {
        jt.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : jp,
    Cp = Math.log,
    Rp = Math.LN2;
  function jp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Cp(e) / Rp) | 0)) | 0;
  }
  var yl = 64,
    gl = 4194304;
  function vr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function vl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      s = e.suspendedLanes,
      a = e.pingedLanes,
      d = n & 268435455;
    if (d !== 0) {
      var h = d & ~s;
      h !== 0 ? (l = vr(h)) : ((a &= d), a !== 0 && (l = vr(a)));
    } else (d = n & ~s), d !== 0 ? (l = vr(d)) : a !== 0 && (l = vr(a));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & s) === 0 &&
      ((s = l & -l), (a = t & -t), s >= a || (s === 16 && (a & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        (n = 31 - yt(t)), (s = 1 << n), (l |= e[n]), (t &= ~s);
    return l;
  }
  function Pp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Np(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        s = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;

    ) {
      var d = 31 - yt(a),
        h = 1 << d,
        v = s[d];
      v === -1
        ? ((h & n) === 0 || (h & l) !== 0) && (s[d] = Pp(h, t))
        : v <= t && (e.expiredLanes |= h),
        (a &= ~h);
    }
  }
  function oo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ta() {
    var e = yl;
    return (yl <<= 1), (yl & 4194240) === 0 && (yl = 64), e;
  }
  function so(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yt(t)),
      (e[t] = n);
  }
  function Tp(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - yt(n),
        a = 1 << s;
      (t[s] = 0), (l[s] = -1), (e[s] = -1), (n &= ~a);
    }
  }
  function uo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - yt(n),
        s = 1 << l;
      (s & t) | (e[l] & t) && (e[l] |= t), (n &= ~s);
    }
  }
  var pe = 0;
  function na(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ra,
    ao,
    la,
    ia,
    oa,
    co = !1,
    wl = [],
    Vt = null,
    Qt = null,
    Kt = null,
    Sr = new Map(),
    xr = new Map(),
    qt = [],
    Op =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function sa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Kt = null;
        break;
      case "pointerover":
      case "pointerout":
        Sr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xr.delete(t.pointerId);
    }
  }
  function Er(e, t, n, l, s, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: a,
          targetContainers: [s],
        }),
        t !== null && ((t = Fr(t)), t !== null && ao(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function Lp(e, t, n, l, s) {
    switch (t) {
      case "focusin":
        return (Vt = Er(Vt, e, t, n, l, s)), !0;
      case "dragenter":
        return (Qt = Er(Qt, e, t, n, l, s)), !0;
      case "mouseover":
        return (Kt = Er(Kt, e, t, n, l, s)), !0;
      case "pointerover":
        var a = s.pointerId;
        return Sr.set(a, Er(Sr.get(a) || null, e, t, n, l, s)), !0;
      case "gotpointercapture":
        return (
          (a = s.pointerId), xr.set(a, Er(xr.get(a) || null, e, t, n, l, s)), !0
        );
    }
    return !1;
  }
  function ua(e) {
    var t = hn(e.target);
    if (t !== null) {
      var n = pn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = qu(n)), t !== null)) {
            (e.blockedOn = t),
              oa(e.priority, function () {
                la(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Sl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (bi = l), n.target.dispatchEvent(l), (bi = null);
      } else return (t = Fr(n)), t !== null && ao(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function aa(e, t, n) {
    Sl(e) && n.delete(t);
  }
  function Mp() {
    (co = !1),
      Vt !== null && Sl(Vt) && (Vt = null),
      Qt !== null && Sl(Qt) && (Qt = null),
      Kt !== null && Sl(Kt) && (Kt = null),
      Sr.forEach(aa),
      xr.forEach(aa);
  }
  function kr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      co ||
        ((co = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Mp)));
  }
  function _r(e) {
    function t(s) {
      return kr(s, e);
    }
    if (0 < wl.length) {
      kr(wl[0], e);
      for (var n = 1; n < wl.length; n++) {
        var l = wl[n];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      Vt !== null && kr(Vt, e),
        Qt !== null && kr(Qt, e),
        Kt !== null && kr(Kt, e),
        Sr.forEach(t),
        xr.forEach(t),
        n = 0;
      n < qt.length;
      n++
    )
      (l = qt[n]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
      ua(n), n.blockedOn === null && qt.shift();
  }
  var An = V.ReactCurrentBatchConfig,
    xl = !0;
  function zp(e, t, n, l) {
    var s = pe,
      a = An.transition;
    An.transition = null;
    try {
      (pe = 1), fo(e, t, n, l);
    } finally {
      (pe = s), (An.transition = a);
    }
  }
  function Dp(e, t, n, l) {
    var s = pe,
      a = An.transition;
    An.transition = null;
    try {
      (pe = 4), fo(e, t, n, l);
    } finally {
      (pe = s), (An.transition = a);
    }
  }
  function fo(e, t, n, l) {
    if (xl) {
      var s = po(e, t, n, l);
      if (s === null) To(e, t, l, El, n), sa(e, l);
      else if (Lp(s, e, t, n, l)) l.stopPropagation();
      else if ((sa(e, l), t & 4 && -1 < Op.indexOf(e))) {
        for (; s !== null; ) {
          var a = Fr(s);
          if (
            (a !== null && ra(a),
            (a = po(e, t, n, l)),
            a === null && To(e, t, l, El, n),
            a === s)
          )
            break;
          s = a;
        }
        s !== null && l.stopPropagation();
      } else To(e, t, l, null, n);
    }
  }
  var El = null;
  function po(e, t, n, l) {
    if (((El = null), (e = eo(l)), (e = hn(e)), e !== null))
      if (((t = pn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = qu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (El = e), null;
  }
  function ca(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ep()) {
          case io:
            return 1;
          case bu:
            return 4;
          case hl:
          case kp:
            return 16;
          case ea:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    ho = null,
    kl = null;
  function fa() {
    if (kl) return kl;
    var e,
      t = ho,
      n = t.length,
      l,
      s = "value" in Jt ? Jt.value : Jt.textContent,
      a = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var d = n - e;
    for (l = 1; l <= d && t[n - l] === s[a - l]; l++);
    return (kl = s.slice(e, 1 < l ? 1 - l : void 0));
  }
  function _l(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cl() {
    return !0;
  }
  function da() {
    return !1;
  }
  function tt(e) {
    function t(n, l, s, a, d) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = l),
        (this.nativeEvent = a),
        (this.target = d),
        (this.currentTarget = null);
      for (var h in e)
        e.hasOwnProperty(h) && ((n = e[h]), (this[h] = n ? n(a) : a[h]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? Cl
          : da),
        (this.isPropagationStopped = da),
        this
      );
    }
    return (
      K(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Cl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Cl));
        },
        persist: function () {},
        isPersistent: Cl,
      }),
      t
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    mo = tt(In),
    Cr = K({}, In, { view: 0, detail: 0 }),
    Fp = tt(Cr),
    yo,
    go,
    Rr,
    Rl = K({}, Cr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Rr &&
              (Rr && e.type === "mousemove"
                ? ((yo = e.screenX - Rr.screenX), (go = e.screenY - Rr.screenY))
                : (go = yo = 0),
              (Rr = e)),
            yo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : go;
      },
    }),
    pa = tt(Rl),
    Ap = K({}, Rl, { dataTransfer: 0 }),
    Ip = tt(Ap),
    Up = K({}, Cr, { relatedTarget: 0 }),
    vo = tt(Up),
    Bp = K({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $p = tt(Bp),
    Hp = K({}, In, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wp = tt(Hp),
    Vp = K({}, In, { data: 0 }),
    ha = tt(Vp),
    Qp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Kp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    qp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = qp[e])
      ? !!t[e]
      : !1;
  }
  function wo() {
    return Jp;
  }
  var Xp = K({}, Cr, {
      key: function (e) {
        if (e.key) {
          var t = Qp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = _l(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Kp[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wo,
      charCode: function (e) {
        return e.type === "keypress" ? _l(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? _l(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Gp = tt(Xp),
    Yp = K({}, Rl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ma = tt(Yp),
    Zp = K({}, Cr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wo,
    }),
    bp = tt(Zp),
    eh = K({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    th = tt(eh),
    nh = K({}, Rl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rh = tt(nh),
    lh = [9, 13, 27, 32],
    So = m && "CompositionEvent" in window,
    jr = null;
  m && "documentMode" in document && (jr = document.documentMode);
  var ih = m && "TextEvent" in window && !jr,
    ya = m && (!So || (jr && 8 < jr && 11 >= jr)),
    ga = " ",
    va = !1;
  function wa(e, t) {
    switch (e) {
      case "keyup":
        return lh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Sa(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Un = !1;
  function oh(e, t) {
    switch (e) {
      case "compositionend":
        return Sa(t);
      case "keypress":
        return t.which !== 32 ? null : ((va = !0), ga);
      case "textInput":
        return (e = t.data), e === ga && va ? null : e;
      default:
        return null;
    }
  }
  function sh(e, t) {
    if (Un)
      return e === "compositionend" || (!So && wa(e, t))
        ? ((e = fa()), (kl = ho = Jt = null), (Un = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ya && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var uh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uh[e.type] : t === "textarea";
  }
  function Ea(e, t, n, l) {
    Hu(l),
      (t = Ol(t, "onChange")),
      0 < t.length &&
        ((n = new mo("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t }));
  }
  var Pr = null,
    Nr = null;
  function ah(e) {
    Ba(e, 0);
  }
  function jl(e) {
    var t = Vn(e);
    if (Tu(t)) return e;
  }
  function ch(e, t) {
    if (e === "change") return t;
  }
  var ka = !1;
  if (m) {
    var xo;
    if (m) {
      var Eo = "oninput" in document;
      if (!Eo) {
        var _a = document.createElement("div");
        _a.setAttribute("oninput", "return;"),
          (Eo = typeof _a.oninput == "function");
      }
      xo = Eo;
    } else xo = !1;
    ka = xo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ca() {
    Pr && (Pr.detachEvent("onpropertychange", Ra), (Nr = Pr = null));
  }
  function Ra(e) {
    if (e.propertyName === "value" && jl(Nr)) {
      var t = [];
      Ea(t, Nr, e, eo(e)), Ku(ah, t);
    }
  }
  function fh(e, t, n) {
    e === "focusin"
      ? (Ca(), (Pr = t), (Nr = n), Pr.attachEvent("onpropertychange", Ra))
      : e === "focusout" && Ca();
  }
  function dh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return jl(Nr);
  }
  function ph(e, t) {
    if (e === "click") return jl(t);
  }
  function hh(e, t) {
    if (e === "input" || e === "change") return jl(t);
  }
  function mh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == "function" ? Object.is : mh;
  function Tr(e, t) {
    if (gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var s = n[l];
      if (!y.call(t, s) || !gt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function ja(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pa(e, t) {
    var n = ja(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ja(n);
    }
  }
  function Na(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Na(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ta() {
    for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = cl(e.document);
    }
    return t;
  }
  function ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function yh(e) {
    var t = Ta(),
      n = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Na(n.ownerDocument.documentElement, n)
    ) {
      if (l !== null && ko(n)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var s = n.textContent.length,
            a = Math.min(l.start, s);
          (l = l.end === void 0 ? a : Math.min(l.end, s)),
            !e.extend && a > l && ((s = l), (l = a), (a = s)),
            (s = Pa(n, a));
          var d = Pa(n, l);
          s &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            a > l
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var gh = m && "documentMode" in document && 11 >= document.documentMode,
    Bn = null,
    _o = null,
    Or = null,
    Co = !1;
  function Oa(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Co ||
      Bn == null ||
      Bn !== cl(l) ||
      ((l = Bn),
      "selectionStart" in l && ko(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Or && Tr(Or, l)) ||
        ((Or = l),
        (l = Ol(_o, "onSelect")),
        0 < l.length &&
          ((t = new mo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Bn))));
  }
  function Pl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var $n = {
      animationend: Pl("Animation", "AnimationEnd"),
      animationiteration: Pl("Animation", "AnimationIteration"),
      animationstart: Pl("Animation", "AnimationStart"),
      transitionend: Pl("Transition", "TransitionEnd"),
    },
    Ro = {},
    La = {};
  m &&
    ((La = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $n.animationend.animation,
      delete $n.animationiteration.animation,
      delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
  function Nl(e) {
    if (Ro[e]) return Ro[e];
    if (!$n[e]) return e;
    var t = $n[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in La) return (Ro[e] = t[n]);
    return e;
  }
  var Ma = Nl("animationend"),
    za = Nl("animationiteration"),
    Da = Nl("animationstart"),
    Fa = Nl("transitionend"),
    Aa = new Map(),
    Ia =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Xt(e, t) {
    Aa.set(e, t), f(t, [e]);
  }
  for (var jo = 0; jo < Ia.length; jo++) {
    var Po = Ia[jo],
      vh = Po.toLowerCase(),
      wh = Po[0].toUpperCase() + Po.slice(1);
    Xt(vh, "on" + wh);
  }
  Xt(Ma, "onAnimationEnd"),
    Xt(za, "onAnimationIteration"),
    Xt(Da, "onAnimationStart"),
    Xt("dblclick", "onDoubleClick"),
    Xt("focusin", "onFocus"),
    Xt("focusout", "onBlur"),
    Xt(Fa, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Lr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sh = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Lr)
    );
  function Ua(e, t, n) {
    var l = e.type || "unknown-event";
    (e.currentTarget = n), vp(l, t, void 0, e), (e.currentTarget = null);
  }
  function Ba(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        s = l.event;
      l = l.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var d = l.length - 1; 0 <= d; d--) {
            var h = l[d],
              v = h.instance,
              j = h.currentTarget;
            if (((h = h.listener), v !== a && s.isPropagationStopped()))
              break e;
            Ua(s, h, j), (a = v);
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((h = l[d]),
              (v = h.instance),
              (j = h.currentTarget),
              (h = h.listener),
              v !== a && s.isPropagationStopped())
            )
              break e;
            Ua(s, h, j), (a = v);
          }
      }
    }
    if (pl) throw ((e = lo), (pl = !1), (lo = null), e);
  }
  function ge(e, t) {
    var n = t[Fo];
    n === void 0 && (n = t[Fo] = new Set());
    var l = e + "__bubble";
    n.has(l) || ($a(t, e, 2, !1), n.add(l));
  }
  function No(e, t, n) {
    var l = 0;
    t && (l |= 4), $a(n, e, l, t);
  }
  var Tl = "_reactListening" + Math.random().toString(36).slice(2);
  function Mr(e) {
    if (!e[Tl]) {
      (e[Tl] = !0),
        u.forEach(function (n) {
          n !== "selectionchange" && (Sh.has(n) || No(n, !1, e), No(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Tl] || ((t[Tl] = !0), No("selectionchange", !1, t));
    }
  }
  function $a(e, t, n, l) {
    switch (ca(t)) {
      case 1:
        var s = zp;
        break;
      case 4:
        s = Dp;
        break;
      default:
        s = fo;
    }
    (n = s.bind(null, t, n, e)),
      (s = void 0),
      !ro ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      l
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1);
  }
  function To(e, t, n, l, s) {
    var a = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var h = l.stateNode.containerInfo;
          if (h === s || (h.nodeType === 8 && h.parentNode === s)) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var v = d.tag;
              if (
                (v === 3 || v === 4) &&
                ((v = d.stateNode.containerInfo),
                v === s || (v.nodeType === 8 && v.parentNode === s))
              )
                return;
              d = d.return;
            }
          for (; h !== null; ) {
            if (((d = hn(h)), d === null)) return;
            if (((v = d.tag), v === 5 || v === 6)) {
              l = a = d;
              continue e;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    Ku(function () {
      var j = a,
        z = eo(n),
        D = [];
      e: {
        var L = Aa.get(e);
        if (L !== void 0) {
          var W = mo,
            q = e;
          switch (e) {
            case "keypress":
              if (_l(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = Gp;
              break;
            case "focusin":
              (q = "focus"), (W = vo);
              break;
            case "focusout":
              (q = "blur"), (W = vo);
              break;
            case "beforeblur":
            case "afterblur":
              W = vo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              W = pa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Ip;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = bp;
              break;
            case Ma:
            case za:
            case Da:
              W = $p;
              break;
            case Fa:
              W = th;
              break;
            case "scroll":
              W = Fp;
              break;
            case "wheel":
              W = rh;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = Wp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = ma;
          }
          var J = (t & 4) !== 0,
            Re = !J && e === "scroll",
            _ = J ? (L !== null ? L + "Capture" : null) : L;
          J = [];
          for (var x = j, C; x !== null; ) {
            C = x;
            var A = C.stateNode;
            if (
              (C.tag === 5 &&
                A !== null &&
                ((C = A),
                _ !== null &&
                  ((A = mr(x, _)), A != null && J.push(zr(x, A, C)))),
              Re)
            )
              break;
            x = x.return;
          }
          0 < J.length &&
            ((L = new W(L, q, null, n, z)), D.push({ event: L, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            L &&
              n !== bi &&
              (q = n.relatedTarget || n.fromElement) &&
              (hn(q) || q[zt]))
          )
            break e;
          if (
            (W || L) &&
            ((L =
              z.window === z
                ? z
                : (L = z.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            W
              ? ((q = n.relatedTarget || n.toElement),
                (W = j),
                (q = q ? hn(q) : null),
                q !== null &&
                  ((Re = pn(q)), q !== Re || (q.tag !== 5 && q.tag !== 6)) &&
                  (q = null))
              : ((W = null), (q = j)),
            W !== q)
          ) {
            if (
              ((J = pa),
              (A = "onMouseLeave"),
              (_ = "onMouseEnter"),
              (x = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = ma),
                (A = "onPointerLeave"),
                (_ = "onPointerEnter"),
                (x = "pointer")),
              (Re = W == null ? L : Vn(W)),
              (C = q == null ? L : Vn(q)),
              (L = new J(A, x + "leave", W, n, z)),
              (L.target = Re),
              (L.relatedTarget = C),
              (A = null),
              hn(z) === j &&
                ((J = new J(_, x + "enter", q, n, z)),
                (J.target = C),
                (J.relatedTarget = Re),
                (A = J)),
              (Re = A),
              W && q)
            )
              t: {
                for (J = W, _ = q, x = 0, C = J; C; C = Hn(C)) x++;
                for (C = 0, A = _; A; A = Hn(A)) C++;
                for (; 0 < x - C; ) (J = Hn(J)), x--;
                for (; 0 < C - x; ) (_ = Hn(_)), C--;
                for (; x--; ) {
                  if (J === _ || (_ !== null && J === _.alternate)) break t;
                  (J = Hn(J)), (_ = Hn(_));
                }
                J = null;
              }
            else J = null;
            W !== null && Ha(D, L, W, J, !1),
              q !== null && Re !== null && Ha(D, Re, q, J, !0);
          }
        }
        e: {
          if (
            ((L = j ? Vn(j) : window),
            (W = L.nodeName && L.nodeName.toLowerCase()),
            W === "select" || (W === "input" && L.type === "file"))
          )
            var G = ch;
          else if (xa(L))
            if (ka) G = hh;
            else {
              G = dh;
              var Y = fh;
            }
          else
            (W = L.nodeName) &&
              W.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (G = ph);
          if (G && (G = G(e, j))) {
            Ea(D, G, n, z);
            break e;
          }
          Y && Y(e, L, j),
            e === "focusout" &&
              (Y = L._wrapperState) &&
              Y.controlled &&
              L.type === "number" &&
              Ji(L, "number", L.value);
        }
        switch (((Y = j ? Vn(j) : window), e)) {
          case "focusin":
            (xa(Y) || Y.contentEditable === "true") &&
              ((Bn = Y), (_o = j), (Or = null));
            break;
          case "focusout":
            Or = _o = Bn = null;
            break;
          case "mousedown":
            Co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Co = !1), Oa(D, n, z);
            break;
          case "selectionchange":
            if (gh) break;
          case "keydown":
          case "keyup":
            Oa(D, n, z);
        }
        var Z;
        if (So)
          e: {
            switch (e) {
              case "compositionstart":
                var te = "onCompositionStart";
                break e;
              case "compositionend":
                te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                te = "onCompositionUpdate";
                break e;
            }
            te = void 0;
          }
        else
          Un
            ? wa(e, n) && (te = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (te = "onCompositionStart");
        te &&
          (ya &&
            n.locale !== "ko" &&
            (Un || te !== "onCompositionStart"
              ? te === "onCompositionEnd" && Un && (Z = fa())
              : ((Jt = z),
                (ho = "value" in Jt ? Jt.value : Jt.textContent),
                (Un = !0))),
          (Y = Ol(j, te)),
          0 < Y.length &&
            ((te = new ha(te, e, null, n, z)),
            D.push({ event: te, listeners: Y }),
            Z ? (te.data = Z) : ((Z = Sa(n)), Z !== null && (te.data = Z)))),
          (Z = ih ? oh(e, n) : sh(e, n)) &&
            ((j = Ol(j, "onBeforeInput")),
            0 < j.length &&
              ((z = new ha("onBeforeInput", "beforeinput", null, n, z)),
              D.push({ event: z, listeners: j }),
              (z.data = Z)));
      }
      Ba(D, t);
    });
  }
  function zr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ol(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var s = e,
        a = s.stateNode;
      s.tag === 5 &&
        a !== null &&
        ((s = a),
        (a = mr(e, n)),
        a != null && l.unshift(zr(e, a, s)),
        (a = mr(e, t)),
        a != null && l.push(zr(e, a, s))),
        (e = e.return);
    }
    return l;
  }
  function Hn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ha(e, t, n, l, s) {
    for (var a = t._reactName, d = []; n !== null && n !== l; ) {
      var h = n,
        v = h.alternate,
        j = h.stateNode;
      if (v !== null && v === l) break;
      h.tag === 5 &&
        j !== null &&
        ((h = j),
        s
          ? ((v = mr(n, a)), v != null && d.unshift(zr(n, v, h)))
          : s || ((v = mr(n, a)), v != null && d.push(zr(n, v, h)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var xh = /\r\n?/g,
    Eh = /\u0000|\uFFFD/g;
  function Wa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        xh,
        `
`
      )
      .replace(Eh, "");
  }
  function Ll(e, t, n) {
    if (((t = Wa(t)), Wa(e) !== t && n)) throw Error(o(425));
  }
  function Ml() {}
  var Oo = null,
    Lo = null;
  function Mo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var zo = typeof setTimeout == "function" ? setTimeout : void 0,
    kh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Va = typeof Promise == "function" ? Promise : void 0,
    _h =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Va < "u"
        ? function (e) {
            return Va.resolve(null).then(e).catch(Ch);
          }
        : zo;
  function Ch(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Do(e, t) {
    var n = t,
      l = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (l === 0) {
            e.removeChild(s), _r(t);
            return;
          }
          l--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
      n = s;
    } while (n);
    _r(t);
  }
  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Qa(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Wn = Math.random().toString(36).slice(2),
    Pt = "__reactFiber$" + Wn,
    Dr = "__reactProps$" + Wn,
    zt = "__reactContainer$" + Wn,
    Fo = "__reactEvents$" + Wn,
    Rh = "__reactListeners$" + Wn,
    jh = "__reactHandles$" + Wn;
  function hn(e) {
    var t = e[Pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[Pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Qa(e); e !== null; ) {
            if ((n = e[Pt])) return n;
            e = Qa(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Fr(e) {
    return (
      (e = e[Pt] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Vn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function zl(e) {
    return e[Dr] || null;
  }
  var Ao = [],
    Qn = -1;
  function Yt(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Qn || ((e.current = Ao[Qn]), (Ao[Qn] = null), Qn--);
  }
  function ye(e, t) {
    Qn++, (Ao[Qn] = e.current), (e.current = t);
  }
  var Zt = {},
    Ie = Yt(Zt),
    Ke = Yt(!1),
    mn = Zt;
  function Kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zt;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      a;
    for (a in n) s[a] = t[a];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function qe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Dl() {
    ve(Ke), ve(Ie);
  }
  function Ka(e, t, n) {
    if (Ie.current !== Zt) throw Error(o(168));
    ye(Ie, t), ye(Ke, n);
  }
  function qa(e, t, n) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
      return n;
    l = l.getChildContext();
    for (var s in l) if (!(s in t)) throw Error(o(108, me(e) || "Unknown", s));
    return K({}, n, l);
  }
  function Fl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Zt),
      (mn = Ie.current),
      ye(Ie, e),
      ye(Ke, Ke.current),
      !0
    );
  }
  function Ja(e, t, n) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    n
      ? ((e = qa(e, t, mn)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        ve(Ke),
        ve(Ie),
        ye(Ie, e))
      : ve(Ke),
      ye(Ke, n);
  }
  var Dt = null,
    Al = !1,
    Io = !1;
  function Xa(e) {
    Dt === null ? (Dt = [e]) : Dt.push(e);
  }
  function Ph(e) {
    (Al = !0), Xa(e);
  }
  function bt() {
    if (!Io && Dt !== null) {
      Io = !0;
      var e = 0,
        t = pe;
      try {
        var n = Dt;
        for (pe = 1; e < n.length; e++) {
          var l = n[e];
          do l = l(!0);
          while (l !== null);
        }
        (Dt = null), (Al = !1);
      } catch (s) {
        throw (Dt !== null && (Dt = Dt.slice(e + 1)), Yu(io, bt), s);
      } finally {
        (pe = t), (Io = !1);
      }
    }
    return null;
  }
  var qn = [],
    Jn = 0,
    Il = null,
    Ul = 0,
    ut = [],
    at = 0,
    yn = null,
    Ft = 1,
    At = "";
  function gn(e, t) {
    (qn[Jn++] = Ul), (qn[Jn++] = Il), (Il = e), (Ul = t);
  }
  function Ga(e, t, n) {
    (ut[at++] = Ft), (ut[at++] = At), (ut[at++] = yn), (yn = e);
    var l = Ft;
    e = At;
    var s = 32 - yt(l) - 1;
    (l &= ~(1 << s)), (n += 1);
    var a = 32 - yt(t) + s;
    if (30 < a) {
      var d = s - (s % 5);
      (a = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (s -= d),
        (Ft = (1 << (32 - yt(t) + s)) | (n << s) | l),
        (At = a + e);
    } else (Ft = (1 << a) | (n << s) | l), (At = e);
  }
  function Uo(e) {
    e.return !== null && (gn(e, 1), Ga(e, 1, 0));
  }
  function Bo(e) {
    for (; e === Il; )
      (Il = qn[--Jn]), (qn[Jn] = null), (Ul = qn[--Jn]), (qn[Jn] = null);
    for (; e === yn; )
      (yn = ut[--at]),
        (ut[at] = null),
        (At = ut[--at]),
        (ut[at] = null),
        (Ft = ut[--at]),
        (ut[at] = null);
  }
  var nt = null,
    rt = null,
    Se = !1,
    vt = null;
  function Ya(e, t) {
    var n = pt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Za(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = Gt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = yn !== null ? { id: Ft, overflow: At } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = pt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function $o(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ho(e) {
    if (Se) {
      var t = rt;
      if (t) {
        var n = t;
        if (!Za(e, t)) {
          if ($o(e)) throw Error(o(418));
          t = Gt(n.nextSibling);
          var l = nt;
          t && Za(e, t)
            ? Ya(l, n)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e));
        }
      } else {
        if ($o(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e);
      }
    }
  }
  function ba(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function Bl(e) {
    if (e !== nt) return !1;
    if (!Se) return ba(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Mo(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if ($o(e)) throw (ec(), Error(o(418)));
      for (; t; ) Ya(e, t), (t = Gt(t.nextSibling));
    }
    if ((ba(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ec() {
    for (var e = rt; e; ) e = Gt(e.nextSibling);
  }
  function Xn() {
    (rt = nt = null), (Se = !1);
  }
  function Wo(e) {
    vt === null ? (vt = [e]) : vt.push(e);
  }
  var Nh = V.ReactCurrentBatchConfig;
  function Ar(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var l = n.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var s = l,
          a = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (d) {
              var h = s.refs;
              d === null ? delete h[a] : (h[a] = d);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function $l(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function tc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function nc(e) {
    function t(_, x) {
      if (e) {
        var C = _.deletions;
        C === null ? ((_.deletions = [x]), (_.flags |= 16)) : C.push(x);
      }
    }
    function n(_, x) {
      if (!e) return null;
      for (; x !== null; ) t(_, x), (x = x.sibling);
      return null;
    }
    function l(_, x) {
      for (_ = new Map(); x !== null; )
        x.key !== null ? _.set(x.key, x) : _.set(x.index, x), (x = x.sibling);
      return _;
    }
    function s(_, x) {
      return (_ = un(_, x)), (_.index = 0), (_.sibling = null), _;
    }
    function a(_, x, C) {
      return (
        (_.index = C),
        e
          ? ((C = _.alternate),
            C !== null
              ? ((C = C.index), C < x ? ((_.flags |= 2), x) : C)
              : ((_.flags |= 2), x))
          : ((_.flags |= 1048576), x)
      );
    }
    function d(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function h(_, x, C, A) {
      return x === null || x.tag !== 6
        ? ((x = zs(C, _.mode, A)), (x.return = _), x)
        : ((x = s(x, C)), (x.return = _), x);
    }
    function v(_, x, C, A) {
      var G = C.type;
      return G === oe
        ? z(_, x, C.props.children, A, C.key)
        : x !== null &&
          (x.elementType === G ||
            (typeof G == "object" &&
              G !== null &&
              G.$$typeof === Qe &&
              tc(G) === x.type))
        ? ((A = s(x, C.props)), (A.ref = Ar(_, x, C)), (A.return = _), A)
        : ((A = fi(C.type, C.key, C.props, null, _.mode, A)),
          (A.ref = Ar(_, x, C)),
          (A.return = _),
          A);
    }
    function j(_, x, C, A) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== C.containerInfo ||
        x.stateNode.implementation !== C.implementation
        ? ((x = Ds(C, _.mode, A)), (x.return = _), x)
        : ((x = s(x, C.children || [])), (x.return = _), x);
    }
    function z(_, x, C, A, G) {
      return x === null || x.tag !== 7
        ? ((x = Cn(C, _.mode, A, G)), (x.return = _), x)
        : ((x = s(x, C)), (x.return = _), x);
    }
    function D(_, x, C) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (x = zs("" + x, _.mode, C)), (x.return = _), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case X:
            return (
              (C = fi(x.type, x.key, x.props, null, _.mode, C)),
              (C.ref = Ar(_, null, x)),
              (C.return = _),
              C
            );
          case b:
            return (x = Ds(x, _.mode, C)), (x.return = _), x;
          case Qe:
            var A = x._init;
            return D(_, A(x._payload), C);
        }
        if (dr(x) || ee(x))
          return (x = Cn(x, _.mode, C, null)), (x.return = _), x;
        $l(_, x);
      }
      return null;
    }
    function L(_, x, C, A) {
      var G = x !== null ? x.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return G !== null ? null : h(_, x, "" + C, A);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case X:
            return C.key === G ? v(_, x, C, A) : null;
          case b:
            return C.key === G ? j(_, x, C, A) : null;
          case Qe:
            return (G = C._init), L(_, x, G(C._payload), A);
        }
        if (dr(C) || ee(C)) return G !== null ? null : z(_, x, C, A, null);
        $l(_, C);
      }
      return null;
    }
    function W(_, x, C, A, G) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (_ = _.get(C) || null), h(x, _, "" + A, G);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case X:
            return (
              (_ = _.get(A.key === null ? C : A.key) || null), v(x, _, A, G)
            );
          case b:
            return (
              (_ = _.get(A.key === null ? C : A.key) || null), j(x, _, A, G)
            );
          case Qe:
            var Y = A._init;
            return W(_, x, C, Y(A._payload), G);
        }
        if (dr(A) || ee(A)) return (_ = _.get(C) || null), z(x, _, A, G, null);
        $l(x, A);
      }
      return null;
    }
    function q(_, x, C, A) {
      for (
        var G = null, Y = null, Z = x, te = (x = 0), ze = null;
        Z !== null && te < C.length;
        te++
      ) {
        Z.index > te ? ((ze = Z), (Z = null)) : (ze = Z.sibling);
        var fe = L(_, Z, C[te], A);
        if (fe === null) {
          Z === null && (Z = ze);
          break;
        }
        e && Z && fe.alternate === null && t(_, Z),
          (x = a(fe, x, te)),
          Y === null ? (G = fe) : (Y.sibling = fe),
          (Y = fe),
          (Z = ze);
      }
      if (te === C.length) return n(_, Z), Se && gn(_, te), G;
      if (Z === null) {
        for (; te < C.length; te++)
          (Z = D(_, C[te], A)),
            Z !== null &&
              ((x = a(Z, x, te)),
              Y === null ? (G = Z) : (Y.sibling = Z),
              (Y = Z));
        return Se && gn(_, te), G;
      }
      for (Z = l(_, Z); te < C.length; te++)
        (ze = W(Z, _, te, C[te], A)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              Z.delete(ze.key === null ? te : ze.key),
            (x = a(ze, x, te)),
            Y === null ? (G = ze) : (Y.sibling = ze),
            (Y = ze));
      return (
        e &&
          Z.forEach(function (an) {
            return t(_, an);
          }),
        Se && gn(_, te),
        G
      );
    }
    function J(_, x, C, A) {
      var G = ee(C);
      if (typeof G != "function") throw Error(o(150));
      if (((C = G.call(C)), C == null)) throw Error(o(151));
      for (
        var Y = (G = null), Z = x, te = (x = 0), ze = null, fe = C.next();
        Z !== null && !fe.done;
        te++, fe = C.next()
      ) {
        Z.index > te ? ((ze = Z), (Z = null)) : (ze = Z.sibling);
        var an = L(_, Z, fe.value, A);
        if (an === null) {
          Z === null && (Z = ze);
          break;
        }
        e && Z && an.alternate === null && t(_, Z),
          (x = a(an, x, te)),
          Y === null ? (G = an) : (Y.sibling = an),
          (Y = an),
          (Z = ze);
      }
      if (fe.done) return n(_, Z), Se && gn(_, te), G;
      if (Z === null) {
        for (; !fe.done; te++, fe = C.next())
          (fe = D(_, fe.value, A)),
            fe !== null &&
              ((x = a(fe, x, te)),
              Y === null ? (G = fe) : (Y.sibling = fe),
              (Y = fe));
        return Se && gn(_, te), G;
      }
      for (Z = l(_, Z); !fe.done; te++, fe = C.next())
        (fe = W(Z, _, te, fe.value, A)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              Z.delete(fe.key === null ? te : fe.key),
            (x = a(fe, x, te)),
            Y === null ? (G = fe) : (Y.sibling = fe),
            (Y = fe));
      return (
        e &&
          Z.forEach(function (um) {
            return t(_, um);
          }),
        Se && gn(_, te),
        G
      );
    }
    function Re(_, x, C, A) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === oe &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case X:
            e: {
              for (var G = C.key, Y = x; Y !== null; ) {
                if (Y.key === G) {
                  if (((G = C.type), G === oe)) {
                    if (Y.tag === 7) {
                      n(_, Y.sibling),
                        (x = s(Y, C.props.children)),
                        (x.return = _),
                        (_ = x);
                      break e;
                    }
                  } else if (
                    Y.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === Qe &&
                      tc(G) === Y.type)
                  ) {
                    n(_, Y.sibling),
                      (x = s(Y, C.props)),
                      (x.ref = Ar(_, Y, C)),
                      (x.return = _),
                      (_ = x);
                    break e;
                  }
                  n(_, Y);
                  break;
                } else t(_, Y);
                Y = Y.sibling;
              }
              C.type === oe
                ? ((x = Cn(C.props.children, _.mode, A, C.key)),
                  (x.return = _),
                  (_ = x))
                : ((A = fi(C.type, C.key, C.props, null, _.mode, A)),
                  (A.ref = Ar(_, x, C)),
                  (A.return = _),
                  (_ = A));
            }
            return d(_);
          case b:
            e: {
              for (Y = C.key; x !== null; ) {
                if (x.key === Y)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === C.containerInfo &&
                    x.stateNode.implementation === C.implementation
                  ) {
                    n(_, x.sibling),
                      (x = s(x, C.children || [])),
                      (x.return = _),
                      (_ = x);
                    break e;
                  } else {
                    n(_, x);
                    break;
                  }
                else t(_, x);
                x = x.sibling;
              }
              (x = Ds(C, _.mode, A)), (x.return = _), (_ = x);
            }
            return d(_);
          case Qe:
            return (Y = C._init), Re(_, x, Y(C._payload), A);
        }
        if (dr(C)) return q(_, x, C, A);
        if (ee(C)) return J(_, x, C, A);
        $l(_, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          x !== null && x.tag === 6
            ? (n(_, x.sibling), (x = s(x, C)), (x.return = _), (_ = x))
            : (n(_, x), (x = zs(C, _.mode, A)), (x.return = _), (_ = x)),
          d(_))
        : n(_, x);
    }
    return Re;
  }
  var Gn = nc(!0),
    rc = nc(!1),
    Hl = Yt(null),
    Wl = null,
    Yn = null,
    Vo = null;
  function Qo() {
    Vo = Yn = Wl = null;
  }
  function Ko(e) {
    var t = Hl.current;
    ve(Hl), (e._currentValue = t);
  }
  function qo(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Zn(e, t) {
    (Wl = e),
      (Vo = Yn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null));
  }
  function ct(e) {
    var t = e._currentValue;
    if (Vo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
        if (Wl === null) throw Error(o(308));
        (Yn = e), (Wl.dependencies = { lanes: 0, firstContext: e });
      } else Yn = Yn.next = e;
    return t;
  }
  var vn = null;
  function Jo(e) {
    vn === null ? (vn = [e]) : vn.push(e);
  }
  function lc(e, t, n, l) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), Jo(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      It(e, l)
    );
  }
  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var en = !1;
  function Xo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ic(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Ut(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function tn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ue & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (l.pending = t),
        It(e, n)
      );
    }
    return (
      (s = l.interleaved),
      s === null ? ((t.next = t), Jo(l)) : ((t.next = s.next), (s.next = t)),
      (l.interleaved = t),
      It(e, n)
    );
  }
  function Vl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), uo(e, n);
    }
  }
  function oc(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var s = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          a === null ? (s = a = d) : (a = a.next = d), (n = n.next);
        } while (n !== null);
        a === null ? (s = a = t) : (a = a.next = t);
      } else s = a = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: a,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Ql(e, t, n, l) {
    var s = e.updateQueue;
    en = !1;
    var a = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      h = s.shared.pending;
    if (h !== null) {
      s.shared.pending = null;
      var v = h,
        j = v.next;
      (v.next = null), d === null ? (a = j) : (d.next = j), (d = v);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (h = z.lastBaseUpdate),
        h !== d &&
          (h === null ? (z.firstBaseUpdate = j) : (h.next = j),
          (z.lastBaseUpdate = v)));
    }
    if (a !== null) {
      var D = s.baseState;
      (d = 0), (z = j = v = null), (h = a);
      do {
        var L = h.lane,
          W = h.eventTime;
        if ((l & L) === L) {
          z !== null &&
            (z = z.next =
              {
                eventTime: W,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null,
              });
          e: {
            var q = e,
              J = h;
            switch (((L = t), (W = n), J.tag)) {
              case 1:
                if (((q = J.payload), typeof q == "function")) {
                  D = q.call(W, D, L);
                  break e;
                }
                D = q;
                break e;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = J.payload),
                  (L = typeof q == "function" ? q.call(W, D, L) : q),
                  L == null)
                )
                  break e;
                D = K({}, D, L);
                break e;
              case 2:
                en = !0;
            }
          }
          h.callback !== null &&
            h.lane !== 0 &&
            ((e.flags |= 64),
            (L = s.effects),
            L === null ? (s.effects = [h]) : L.push(h));
        } else
          (W = {
            eventTime: W,
            lane: L,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null,
          }),
            z === null ? ((j = z = W), (v = D)) : (z = z.next = W),
            (d |= L);
        if (((h = h.next), h === null)) {
          if (((h = s.shared.pending), h === null)) break;
          (L = h),
            (h = L.next),
            (L.next = null),
            (s.lastBaseUpdate = L),
            (s.shared.pending = null);
        }
      } while (!0);
      if (
        (z === null && (v = D),
        (s.baseState = v),
        (s.firstBaseUpdate = j),
        (s.lastBaseUpdate = z),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do (d |= s.lane), (s = s.next);
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      (xn |= d), (e.lanes = d), (e.memoizedState = D);
    }
  }
  function sc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          s = l.callback;
        if (s !== null) {
          if (((l.callback = null), (l = n), typeof s != "function"))
            throw Error(o(191, s));
          s.call(l);
        }
      }
  }
  var Ir = {},
    Nt = Yt(Ir),
    Ur = Yt(Ir),
    Br = Yt(Ir);
  function wn(e) {
    if (e === Ir) throw Error(o(174));
    return e;
  }
  function Go(e, t) {
    switch ((ye(Br, t), ye(Ur, e), ye(Nt, Ir), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gi(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Gi(t, e));
    }
    ve(Nt), ye(Nt, t);
  }
  function bn() {
    ve(Nt), ve(Ur), ve(Br);
  }
  function uc(e) {
    wn(Br.current);
    var t = wn(Nt.current),
      n = Gi(t, e.type);
    t !== n && (ye(Ur, e), ye(Nt, n));
  }
  function Yo(e) {
    Ur.current === e && (ve(Nt), ve(Ur));
  }
  var xe = Yt(0);
  function Kl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Zo = [];
  function bo() {
    for (var e = 0; e < Zo.length; e++)
      Zo[e]._workInProgressVersionPrimary = null;
    Zo.length = 0;
  }
  var ql = V.ReactCurrentDispatcher,
    es = V.ReactCurrentBatchConfig,
    Sn = 0,
    Ee = null,
    Te = null,
    Le = null,
    Jl = !1,
    $r = !1,
    Hr = 0,
    Th = 0;
  function Ue() {
    throw Error(o(321));
  }
  function ts(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function ns(e, t, n, l, s, a) {
    if (
      ((Sn = a),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ql.current = e === null || e.memoizedState === null ? zh : Dh),
      (e = n(l, s)),
      $r)
    ) {
      a = 0;
      do {
        if ((($r = !1), (Hr = 0), 25 <= a)) throw Error(o(301));
        (a += 1),
          (Le = Te = null),
          (t.updateQueue = null),
          (ql.current = Fh),
          (e = n(l, s));
      } while ($r);
    }
    if (
      ((ql.current = Yl),
      (t = Te !== null && Te.next !== null),
      (Sn = 0),
      (Le = Te = Ee = null),
      (Jl = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function rs() {
    var e = Hr !== 0;
    return (Hr = 0), e;
  }
  function Tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Le === null ? (Ee.memoizedState = Le = e) : (Le = Le.next = e), Le;
  }
  function ft() {
    if (Te === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Le === null ? Ee.memoizedState : Le.next;
    if (t !== null) (Le = t), (Te = e);
    else {
      if (e === null) throw Error(o(310));
      (Te = e),
        (e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null,
        }),
        Le === null ? (Ee.memoizedState = Le = e) : (Le = Le.next = e);
    }
    return Le;
  }
  function Wr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ls(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = Te,
      s = l.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (s !== null) {
        var d = s.next;
        (s.next = a.next), (a.next = d);
      }
      (l.baseQueue = s = a), (n.pending = null);
    }
    if (s !== null) {
      (a = s.next), (l = l.baseState);
      var h = (d = null),
        v = null,
        j = a;
      do {
        var z = j.lane;
        if ((Sn & z) === z)
          v !== null &&
            (v = v.next =
              {
                lane: 0,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null,
              }),
            (l = j.hasEagerState ? j.eagerState : e(l, j.action));
        else {
          var D = {
            lane: z,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          v === null ? ((h = v = D), (d = l)) : (v = v.next = D),
            (Ee.lanes |= z),
            (xn |= z);
        }
        j = j.next;
      } while (j !== null && j !== a);
      v === null ? (d = l) : (v.next = h),
        gt(l, t.memoizedState) || (Je = !0),
        (t.memoizedState = l),
        (t.baseState = d),
        (t.baseQueue = v),
        (n.lastRenderedState = l);
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do (a = s.lane), (Ee.lanes |= a), (xn |= a), (s = s.next);
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function is(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      s = n.pending,
      a = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do (a = e(a, d.action)), (d = d.next);
      while (d !== s);
      gt(a, t.memoizedState) || (Je = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a);
    }
    return [a, l];
  }
  function ac() {}
  function cc(e, t) {
    var n = Ee,
      l = ft(),
      s = t(),
      a = !gt(l.memoizedState, s);
    if (
      (a && ((l.memoizedState = s), (Je = !0)),
      (l = l.queue),
      os(pc.bind(null, n, l, e), [e]),
      l.getSnapshot !== t || a || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Vr(9, dc.bind(null, n, l, s, t), void 0, null),
        Me === null)
      )
        throw Error(o(349));
      (Sn & 30) !== 0 || fc(n, t, s);
    }
    return s;
  }
  function fc(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function dc(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), hc(t) && mc(e);
  }
  function pc(e, t, n) {
    return n(function () {
      hc(t) && mc(e);
    });
  }
  function hc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function mc(e) {
    var t = It(e, 1);
    t !== null && Et(t, e, 1, -1);
  }
  function yc(e) {
    var t = Tt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Mh.bind(null, Ee, e)),
      [t.memoizedState, e]
    );
  }
  function Vr(e, t, n, l) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: l, next: null }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function gc() {
    return ft().memoizedState;
  }
  function Xl(e, t, n, l) {
    var s = Tt();
    (Ee.flags |= e),
      (s.memoizedState = Vr(1 | t, n, void 0, l === void 0 ? null : l));
  }
  function Gl(e, t, n, l) {
    var s = ft();
    l = l === void 0 ? null : l;
    var a = void 0;
    if (Te !== null) {
      var d = Te.memoizedState;
      if (((a = d.destroy), l !== null && ts(l, d.deps))) {
        s.memoizedState = Vr(t, n, a, l);
        return;
      }
    }
    (Ee.flags |= e), (s.memoizedState = Vr(1 | t, n, a, l));
  }
  function vc(e, t) {
    return Xl(8390656, 8, e, t);
  }
  function os(e, t) {
    return Gl(2048, 8, e, t);
  }
  function wc(e, t) {
    return Gl(4, 2, e, t);
  }
  function Sc(e, t) {
    return Gl(4, 4, e, t);
  }
  function xc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ec(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Gl(4, 4, xc.bind(null, t, e), n)
    );
  }
  function ss() {}
  function kc(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && ts(t, l[1])
      ? l[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function _c(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && ts(t, l[1])
      ? l[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Cc(e, t, n) {
    return (Sn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (gt(n, t) ||
          ((n = ta()), (Ee.lanes |= n), (xn |= n), (e.baseState = !0)),
        t);
  }
  function Oh(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var l = es.transition;
    es.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (es.transition = l);
    }
  }
  function Rc() {
    return ft().memoizedState;
  }
  function Lh(e, t, n) {
    var l = on(e);
    if (
      ((n = {
        lane: l,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      jc(e))
    )
      Pc(t, n);
    else if (((n = lc(e, t, n, l)), n !== null)) {
      var s = Ve();
      Et(n, e, l, s), Nc(n, t, l);
    }
  }
  function Mh(e, t, n) {
    var l = on(e),
      s = {
        lane: l,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (jc(e)) Pc(t, s);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var d = t.lastRenderedState,
            h = a(d, n);
          if (((s.hasEagerState = !0), (s.eagerState = h), gt(h, d))) {
            var v = t.interleaved;
            v === null
              ? ((s.next = s), Jo(t))
              : ((s.next = v.next), (v.next = s)),
              (t.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (n = lc(e, t, s, l)),
        n !== null && ((s = Ve()), Et(n, e, l, s), Nc(n, t, l));
    }
  }
  function jc(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function Pc(e, t) {
    $r = Jl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Nc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), uo(e, n);
    }
  }
  var Yl = {
      readContext: ct,
      useCallback: Ue,
      useContext: Ue,
      useEffect: Ue,
      useImperativeHandle: Ue,
      useInsertionEffect: Ue,
      useLayoutEffect: Ue,
      useMemo: Ue,
      useReducer: Ue,
      useRef: Ue,
      useState: Ue,
      useDebugValue: Ue,
      useDeferredValue: Ue,
      useTransition: Ue,
      useMutableSource: Ue,
      useSyncExternalStore: Ue,
      useId: Ue,
      unstable_isNewReconciler: !1,
    },
    zh = {
      readContext: ct,
      useCallback: function (e, t) {
        return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ct,
      useEffect: vc,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Xl(4194308, 4, xc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Xl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Xl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Tt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var l = Tt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = Lh.bind(null, Ee, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: yc,
      useDebugValue: ss,
      useDeferredValue: function (e) {
        return (Tt().memoizedState = e);
      },
      useTransition: function () {
        var e = yc(!1),
          t = e[0];
        return (e = Oh.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var l = Ee,
          s = Tt();
        if (Se) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), Me === null)) throw Error(o(349));
          (Sn & 30) !== 0 || fc(l, t, n);
        }
        s.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (s.queue = a),
          vc(pc.bind(null, l, a, e), [e]),
          (l.flags |= 2048),
          Vr(9, dc.bind(null, l, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Tt(),
          t = Me.identifierPrefix;
        if (Se) {
          var n = At,
            l = Ft;
          (n = (l & ~(1 << (32 - yt(l) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Hr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Th++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Dh = {
      readContext: ct,
      useCallback: kc,
      useContext: ct,
      useEffect: os,
      useImperativeHandle: Ec,
      useInsertionEffect: wc,
      useLayoutEffect: Sc,
      useMemo: _c,
      useReducer: ls,
      useRef: gc,
      useState: function () {
        return ls(Wr);
      },
      useDebugValue: ss,
      useDeferredValue: function (e) {
        var t = ft();
        return Cc(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = ls(Wr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: ac,
      useSyncExternalStore: cc,
      useId: Rc,
      unstable_isNewReconciler: !1,
    },
    Fh = {
      readContext: ct,
      useCallback: kc,
      useContext: ct,
      useEffect: os,
      useImperativeHandle: Ec,
      useInsertionEffect: wc,
      useLayoutEffect: Sc,
      useMemo: _c,
      useReducer: is,
      useRef: gc,
      useState: function () {
        return is(Wr);
      },
      useDebugValue: ss,
      useDeferredValue: function (e) {
        var t = ft();
        return Te === null ? (t.memoizedState = e) : Cc(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = is(Wr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: ac,
      useSyncExternalStore: cc,
      useId: Rc,
      unstable_isNewReconciler: !1,
    };
  function wt(e, t) {
    if (e && e.defaultProps) {
      (t = K({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function us(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : K({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Zl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? pn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ve(),
        s = on(e),
        a = Ut(l, s);
      (a.payload = t),
        n != null && (a.callback = n),
        (t = tn(e, a, s)),
        t !== null && (Et(t, e, s, l), Vl(t, e, s));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ve(),
        s = on(e),
        a = Ut(l, s);
      (a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = tn(e, a, s)),
        t !== null && (Et(t, e, s, l), Vl(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ve(),
        l = on(e),
        s = Ut(n, l);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = tn(e, s, l)),
        t !== null && (Et(t, e, l, n), Vl(t, e, l));
    },
  };
  function Tc(e, t, n, l, s, a, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, a, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Tr(n, l) || !Tr(s, a)
        : !0
    );
  }
  function Oc(e, t, n) {
    var l = !1,
      s = Zt,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = ct(a))
        : ((s = qe(t) ? mn : Ie.current),
          (l = t.contextTypes),
          (a = (l = l != null) ? Kn(e, s) : Zt)),
      (t = new t(n, a)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Zl),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function Lc(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
  }
  function as(e, t, n, l) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Xo(e);
    var a = t.contextType;
    typeof a == "object" && a !== null
      ? (s.context = ct(a))
      : ((a = qe(t) ? mn : Ie.current), (s.context = Kn(e, a))),
      (s.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == "function" && (us(e, t, a, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((t = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && Zl.enqueueReplaceState(s, s.state, null),
        Ql(e, n, s, l),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function er(e, t) {
    try {
      var n = "",
        l = t;
      do (n += ae(l)), (l = l.return);
      while (l);
      var s = n;
    } catch (a) {
      s =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function cs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function fs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ah = typeof WeakMap == "function" ? WeakMap : Map;
  function Mc(e, t, n) {
    (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var l = t.value;
    return (
      (n.callback = function () {
        ii || ((ii = !0), (Rs = l)), fs(e, t);
      }),
      n
    );
  }
  function zc(e, t, n) {
    (n = Ut(-1, n)), (n.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var s = t.value;
      (n.payload = function () {
        return l(s);
      }),
        (n.callback = function () {
          fs(e, t);
        });
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == "function" &&
        (n.callback = function () {
          fs(e, t),
            typeof l != "function" &&
              (rn === null ? (rn = new Set([this])) : rn.add(this));
          var d = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : "",
          });
        }),
      n
    );
  }
  function Dc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Ah();
      var s = new Set();
      l.set(t, s);
    } else (s = l.get(t)), s === void 0 && ((s = new Set()), l.set(t, s));
    s.has(n) || (s.add(n), (e = Yh.bind(null, e, t, n)), t.then(e, e));
  }
  function Fc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ac(e, t, n, l, s) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ut(-1, 1)), (t.tag = 2), tn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = s), e);
  }
  var Ih = V.ReactCurrentOwner,
    Je = !1;
  function We(e, t, n, l) {
    t.child = e === null ? rc(t, null, n, l) : Gn(t, e.child, n, l);
  }
  function Ic(e, t, n, l, s) {
    n = n.render;
    var a = t.ref;
    return (
      Zn(t, s),
      (l = ns(e, t, n, l, a, s)),
      (n = rs()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          Bt(e, t, s))
        : (Se && n && Uo(t), (t.flags |= 1), We(e, t, l, s), t.child)
    );
  }
  function Uc(e, t, n, l, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" &&
        !Ms(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Bc(e, t, a, l, s))
        : ((e = fi(n.type, null, l, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), (e.lanes & s) === 0)) {
      var d = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Tr), n(d, l) && e.ref === t.ref)
      )
        return Bt(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = un(a, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Bc(e, t, n, l, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Tr(a, l) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = l = a), (e.lanes & s) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return (t.lanes = e.lanes), Bt(e, t, s);
    }
    return ds(e, t, n, l, s);
  }
  function $c(e, t, n) {
    var l = t.pendingProps,
      s = l.children,
      a = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ye(nr, lt),
          (lt |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ye(nr, lt),
            (lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = a !== null ? a.baseLanes : n),
          ye(nr, lt),
          (lt |= l);
      }
    else
      a !== null ? ((l = a.baseLanes | n), (t.memoizedState = null)) : (l = n),
        ye(nr, lt),
        (lt |= l);
    return We(e, t, s, n), t.child;
  }
  function Hc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ds(e, t, n, l, s) {
    var a = qe(n) ? mn : Ie.current;
    return (
      (a = Kn(t, a)),
      Zn(t, s),
      (n = ns(e, t, n, l, a, s)),
      (l = rs()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          Bt(e, t, s))
        : (Se && l && Uo(t), (t.flags |= 1), We(e, t, n, s), t.child)
    );
  }
  function Wc(e, t, n, l, s) {
    if (qe(n)) {
      var a = !0;
      Fl(t);
    } else a = !1;
    if ((Zn(t, s), t.stateNode === null))
      ei(e, t), Oc(t, n, l), as(t, n, l, s), (l = !0);
    else if (e === null) {
      var d = t.stateNode,
        h = t.memoizedProps;
      d.props = h;
      var v = d.context,
        j = n.contextType;
      typeof j == "object" && j !== null
        ? (j = ct(j))
        : ((j = qe(n) ? mn : Ie.current), (j = Kn(t, j)));
      var z = n.getDerivedStateFromProps,
        D =
          typeof z == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      D ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((h !== l || v !== j) && Lc(t, d, l, j)),
        (en = !1);
      var L = t.memoizedState;
      (d.state = L),
        Ql(t, l, d, s),
        (v = t.memoizedState),
        h !== l || L !== v || Ke.current || en
          ? (typeof z == "function" && (us(t, n, z, l), (v = t.memoizedState)),
            (h = en || Tc(t, n, h, l, L, v, j))
              ? (D ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = v)),
            (d.props = l),
            (d.state = v),
            (d.context = j),
            (l = h))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (d = t.stateNode),
        ic(e, t),
        (h = t.memoizedProps),
        (j = t.type === t.elementType ? h : wt(t.type, h)),
        (d.props = j),
        (D = t.pendingProps),
        (L = d.context),
        (v = n.contextType),
        typeof v == "object" && v !== null
          ? (v = ct(v))
          : ((v = qe(n) ? mn : Ie.current), (v = Kn(t, v)));
      var W = n.getDerivedStateFromProps;
      (z =
        typeof W == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((h !== D || L !== v) && Lc(t, d, l, v)),
        (en = !1),
        (L = t.memoizedState),
        (d.state = L),
        Ql(t, l, d, s);
      var q = t.memoizedState;
      h !== D || L !== q || Ke.current || en
        ? (typeof W == "function" && (us(t, n, W, l), (q = t.memoizedState)),
          (j = en || Tc(t, n, j, l, L, q, v) || !1)
            ? (z ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(l, q, v),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(l, q, v)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (h === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (h === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = q)),
          (d.props = l),
          (d.state = q),
          (d.context = v),
          (l = j))
        : (typeof d.componentDidUpdate != "function" ||
            (h === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (h === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return ps(e, t, n, l, a, s);
  }
  function ps(e, t, n, l, s, a) {
    Hc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!l && !d) return s && Ja(t, n, !1), Bt(e, t, a);
    (l = t.stateNode), (Ih.current = t);
    var h =
      d && typeof n.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = Gn(t, e.child, null, a)), (t.child = Gn(t, null, h, a)))
        : We(e, t, h, a),
      (t.memoizedState = l.state),
      s && Ja(t, n, !0),
      t.child
    );
  }
  function Vc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ka(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ka(e, t.context, !1),
      Go(e, t.containerInfo);
  }
  function Qc(e, t, n, l, s) {
    return Xn(), Wo(s), (t.flags |= 256), We(e, t, n, l), t.child;
  }
  var hs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ms(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Kc(e, t, n) {
    var l = t.pendingProps,
      s = xe.current,
      a = !1,
      d = (t.flags & 128) !== 0,
      h;
    if (
      ((h = d) ||
        (h = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      h
        ? ((a = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      ye(xe, s & 1),
      e === null)
    )
      return (
        Ho(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((d = l.children),
            (e = l.fallback),
            a
              ? ((l = t.mode),
                (a = t.child),
                (d = { mode: "hidden", children: d }),
                (l & 1) === 0 && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = d))
                  : (a = di(d, l, 0, null)),
                (e = Cn(e, l, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = ms(n)),
                (t.memoizedState = hs),
                e)
              : ys(t, d))
      );
    if (((s = e.memoizedState), s !== null && ((h = s.dehydrated), h !== null)))
      return Uh(e, t, d, l, h, s, n);
    if (a) {
      (a = l.fallback), (d = t.mode), (s = e.child), (h = s.sibling);
      var v = { mode: "hidden", children: l.children };
      return (
        (d & 1) === 0 && t.child !== s
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = v),
            (t.deletions = null))
          : ((l = un(s, v)), (l.subtreeFlags = s.subtreeFlags & 14680064)),
        h !== null ? (a = un(h, a)) : ((a = Cn(a, d, n, null)), (a.flags |= 2)),
        (a.return = t),
        (l.return = t),
        (l.sibling = a),
        (t.child = l),
        (l = a),
        (a = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? ms(n)
            : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions,
              }),
        (a.memoizedState = d),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = hs),
        l
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (l = un(a, { mode: "visible", children: l.children })),
      (t.mode & 1) === 0 && (l.lanes = n),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function ys(e, t) {
    return (
      (t = di({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function bl(e, t, n, l) {
    return (
      l !== null && Wo(l),
      Gn(t, e.child, null, n),
      (e = ys(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Uh(e, t, n, l, s, a, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (l = cs(Error(o(422)))), bl(e, t, d, l))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = l.fallback),
          (s = t.mode),
          (l = di({ mode: "visible", children: l.children }, s, 0, null)),
          (a = Cn(a, s, d, null)),
          (a.flags |= 2),
          (l.return = t),
          (a.return = t),
          (l.sibling = a),
          (t.child = l),
          (t.mode & 1) !== 0 && Gn(t, e.child, null, d),
          (t.child.memoizedState = ms(d)),
          (t.memoizedState = hs),
          a);
    if ((t.mode & 1) === 0) return bl(e, t, d, null);
    if (s.data === "$!") {
      if (((l = s.nextSibling && s.nextSibling.dataset), l)) var h = l.dgst;
      return (
        (l = h), (a = Error(o(419))), (l = cs(a, l, void 0)), bl(e, t, d, l)
      );
    }
    if (((h = (d & e.childLanes) !== 0), Je || h)) {
      if (((l = Me), l !== null)) {
        switch (d & -d) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        (s = (s & (l.suspendedLanes | d)) !== 0 ? 0 : s),
          s !== 0 &&
            s !== a.retryLane &&
            ((a.retryLane = s), It(e, s), Et(l, e, s, -1));
      }
      return Ls(), (l = cs(Error(o(421)))), bl(e, t, d, l);
    }
    return s.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Zh.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = a.treeContext),
        (rt = Gt(s.nextSibling)),
        (nt = t),
        (Se = !0),
        (vt = null),
        e !== null &&
          ((ut[at++] = Ft),
          (ut[at++] = At),
          (ut[at++] = yn),
          (Ft = e.id),
          (At = e.overflow),
          (yn = t)),
        (t = ys(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function qc(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), qo(e.return, t, n);
  }
  function gs(e, t, n, l, s) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: s,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = l),
        (a.tail = n),
        (a.tailMode = s));
  }
  function Jc(e, t, n) {
    var l = t.pendingProps,
      s = l.revealOrder,
      a = l.tail;
    if ((We(e, t, l.children, n), (l = xe.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && qc(e, n, t);
          else if (e.tag === 19) qc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((ye(xe, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (s) {
        case "forwards":
          for (n = t.child, s = null; n !== null; )
            (e = n.alternate),
              e !== null && Kl(e) === null && (s = n),
              (n = n.sibling);
          (n = s),
            n === null
              ? ((s = t.child), (t.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            gs(t, !1, s, n, a);
          break;
        case "backwards":
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && Kl(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = n), (n = s), (s = e);
          }
          gs(t, !0, n, null, a);
          break;
        case "together":
          gs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ei(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Bt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (xn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = un(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Bh(e, t, n) {
    switch (t.tag) {
      case 3:
        Vc(t), Xn();
        break;
      case 5:
        uc(t);
        break;
      case 1:
        qe(t.type) && Fl(t);
        break;
      case 4:
        Go(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          s = t.memoizedProps.value;
        ye(Hl, l._currentValue), (l._currentValue = s);
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (ye(xe, xe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? Kc(e, t, n)
            : (ye(xe, xe.current & 1),
              (e = Bt(e, t, n)),
              e !== null ? e.sibling : null);
        ye(xe, xe.current & 1);
        break;
      case 19:
        if (((l = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return Jc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          ye(xe, xe.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), $c(e, t, n);
    }
    return Bt(e, t, n);
  }
  var Xc, vs, Gc, Yc;
  (Xc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (vs = function () {}),
    (Gc = function (e, t, n, l) {
      var s = e.memoizedProps;
      if (s !== l) {
        (e = t.stateNode), wn(Nt.current);
        var a = null;
        switch (n) {
          case "input":
            (s = Ki(e, s)), (l = Ki(e, l)), (a = []);
            break;
          case "select":
            (s = K({}, s, { value: void 0 })),
              (l = K({}, l, { value: void 0 })),
              (a = []);
            break;
          case "textarea":
            (s = Xi(e, s)), (l = Xi(e, l)), (a = []);
            break;
          default:
            typeof s.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = Ml);
        }
        Yi(n, l);
        var d;
        n = null;
        for (j in s)
          if (!l.hasOwnProperty(j) && s.hasOwnProperty(j) && s[j] != null)
            if (j === "style") {
              var h = s[j];
              for (d in h) h.hasOwnProperty(d) && (n || (n = {}), (n[d] = ""));
            } else
              j !== "dangerouslySetInnerHTML" &&
                j !== "children" &&
                j !== "suppressContentEditableWarning" &&
                j !== "suppressHydrationWarning" &&
                j !== "autoFocus" &&
                (c.hasOwnProperty(j)
                  ? a || (a = [])
                  : (a = a || []).push(j, null));
        for (j in l) {
          var v = l[j];
          if (
            ((h = s != null ? s[j] : void 0),
            l.hasOwnProperty(j) && v !== h && (v != null || h != null))
          )
            if (j === "style")
              if (h) {
                for (d in h)
                  !h.hasOwnProperty(d) ||
                    (v && v.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ""));
                for (d in v)
                  v.hasOwnProperty(d) &&
                    h[d] !== v[d] &&
                    (n || (n = {}), (n[d] = v[d]));
              } else n || (a || (a = []), a.push(j, n)), (n = v);
            else
              j === "dangerouslySetInnerHTML"
                ? ((v = v ? v.__html : void 0),
                  (h = h ? h.__html : void 0),
                  v != null && h !== v && (a = a || []).push(j, v))
                : j === "children"
                ? (typeof v != "string" && typeof v != "number") ||
                  (a = a || []).push(j, "" + v)
                : j !== "suppressContentEditableWarning" &&
                  j !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(j)
                    ? (v != null && j === "onScroll" && ge("scroll", e),
                      a || h === v || (a = []))
                    : (a = a || []).push(j, v));
        }
        n && (a = a || []).push("style", n);
        var j = a;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }),
    (Yc = function (e, t, n, l) {
      n !== l && (t.flags |= 4);
    });
  function Qr(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags & 14680064),
          (l |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags),
          (l |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function $h(e, t, n) {
    var l = t.pendingProps;
    switch ((Bo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(t), null;
      case 1:
        return qe(t.type) && Dl(), Be(t), null;
      case 3:
        return (
          (l = t.stateNode),
          bn(),
          ve(Ke),
          ve(Ie),
          bo(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Bl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), vt !== null && (Ns(vt), (vt = null)))),
          vs(e, t),
          Be(t),
          null
        );
      case 5:
        Yo(t);
        var s = wn(Br.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Gc(e, t, n, l, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return Be(t), null;
          }
          if (((e = wn(Nt.current)), Bl(t))) {
            (l = t.stateNode), (n = t.type);
            var a = t.memoizedProps;
            switch (((l[Pt] = t), (l[Dr] = a), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ge("cancel", l), ge("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", l);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Lr.length; s++) ge(Lr[s], l);
                break;
              case "source":
                ge("error", l);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", l), ge("load", l);
                break;
              case "details":
                ge("toggle", l);
                break;
              case "input":
                Ou(l, a), ge("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!a.multiple }),
                  ge("invalid", l);
                break;
              case "textarea":
                zu(l, a), ge("invalid", l);
            }
            Yi(n, a), (s = null);
            for (var d in a)
              if (a.hasOwnProperty(d)) {
                var h = a[d];
                d === "children"
                  ? typeof h == "string"
                    ? l.textContent !== h &&
                      (a.suppressHydrationWarning !== !0 &&
                        Ll(l.textContent, h, e),
                      (s = ["children", h]))
                    : typeof h == "number" &&
                      l.textContent !== "" + h &&
                      (a.suppressHydrationWarning !== !0 &&
                        Ll(l.textContent, h, e),
                      (s = ["children", "" + h]))
                  : c.hasOwnProperty(d) &&
                    h != null &&
                    d === "onScroll" &&
                    ge("scroll", l);
              }
            switch (n) {
              case "input":
                al(l), Mu(l, a, !0);
                break;
              case "textarea":
                al(l), Fu(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (l.onclick = Ml);
            }
            (l = s), (t.updateQueue = l), l !== null && (t.flags |= 4);
          } else {
            (d = s.nodeType === 9 ? s : s.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Au(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = d.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                  ? (e = d.createElement(n, { is: l.is }))
                  : ((e = d.createElement(n)),
                    n === "select" &&
                      ((d = e),
                      l.multiple
                        ? (d.multiple = !0)
                        : l.size && (d.size = l.size)))
                : (e = d.createElementNS(e, n)),
              (e[Pt] = t),
              (e[Dr] = l),
              Xc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = Zi(n, l)), n)) {
                case "dialog":
                  ge("cancel", e), ge("close", e), (s = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ge("load", e), (s = l);
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Lr.length; s++) ge(Lr[s], e);
                  s = l;
                  break;
                case "source":
                  ge("error", e), (s = l);
                  break;
                case "img":
                case "image":
                case "link":
                  ge("error", e), ge("load", e), (s = l);
                  break;
                case "details":
                  ge("toggle", e), (s = l);
                  break;
                case "input":
                  Ou(e, l), (s = Ki(e, l)), ge("invalid", e);
                  break;
                case "option":
                  s = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (s = K({}, l, { value: void 0 })),
                    ge("invalid", e);
                  break;
                case "textarea":
                  zu(e, l), (s = Xi(e, l)), ge("invalid", e);
                  break;
                default:
                  s = l;
              }
              Yi(n, s), (h = s);
              for (a in h)
                if (h.hasOwnProperty(a)) {
                  var v = h[a];
                  a === "style"
                    ? Bu(e, v)
                    : a === "dangerouslySetInnerHTML"
                    ? ((v = v ? v.__html : void 0), v != null && Iu(e, v))
                    : a === "children"
                    ? typeof v == "string"
                      ? (n !== "textarea" || v !== "") && pr(e, v)
                      : typeof v == "number" && pr(e, "" + v)
                    : a !== "suppressContentEditableWarning" &&
                      a !== "suppressHydrationWarning" &&
                      a !== "autoFocus" &&
                      (c.hasOwnProperty(a)
                        ? v != null && a === "onScroll" && ge("scroll", e)
                        : v != null && I(e, a, v, d));
                }
              switch (n) {
                case "input":
                  al(e), Mu(e, l, !1);
                  break;
                case "textarea":
                  al(e), Fu(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + de(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (a = l.value),
                    a != null
                      ? zn(e, !!l.multiple, a, !1)
                      : l.defaultValue != null &&
                        zn(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Ml);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Be(t), null;
      case 6:
        if (e && t.stateNode != null) Yc(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = wn(Br.current)), wn(Nt.current), Bl(t))) {
            if (
              ((l = t.stateNode),
              (n = t.memoizedProps),
              (l[Pt] = t),
              (a = l.nodeValue !== n) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ll(l.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ll(l.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            (l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l)),
              (l[Pt] = t),
              (t.stateNode = l);
        }
        return Be(t), null;
      case 13:
        if (
          (ve(xe),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && rt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            ec(), Xn(), (t.flags |= 98560), (a = !1);
          else if (((a = Bl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(o(317));
              a[Pt] = t;
            } else
              Xn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Be(t), (a = !1);
          } else vt !== null && (Ns(vt), (vt = null)), (a = !0);
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (xe.current & 1) !== 0
                  ? Oe === 0 && (Oe = 3)
                  : Ls())),
            t.updateQueue !== null && (t.flags |= 4),
            Be(t),
            null);
      case 4:
        return (
          bn(),
          vs(e, t),
          e === null && Mr(t.stateNode.containerInfo),
          Be(t),
          null
        );
      case 10:
        return Ko(t.type._context), Be(t), null;
      case 17:
        return qe(t.type) && Dl(), Be(t), null;
      case 19:
        if ((ve(xe), (a = t.memoizedState), a === null)) return Be(t), null;
        if (((l = (t.flags & 128) !== 0), (d = a.rendering), d === null))
          if (l) Qr(a, !1);
          else {
            if (Oe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = Kl(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      Qr(a, !1),
                      l = d.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = n,
                      n = t.child;
                    n !== null;

                  )
                    (a = n),
                      (e = l),
                      (a.flags &= 14680066),
                      (d = a.alternate),
                      d === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = d.childLanes),
                          (a.lanes = d.lanes),
                          (a.child = d.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = d.memoizedProps),
                          (a.memoizedState = d.memoizedState),
                          (a.updateQueue = d.updateQueue),
                          (a.type = d.type),
                          (e = d.dependencies),
                          (a.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ye(xe, (xe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Ce() > rr &&
              ((t.flags |= 128), (l = !0), Qr(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Kl(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Qr(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !d.alternate &&
                  !Se)
              )
                return Be(t), null;
            } else
              2 * Ce() - a.renderingStartTime > rr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (l = !0), Qr(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((n = a.last),
              n !== null ? (n.sibling = d) : (t.child = d),
              (a.last = d));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Ce()),
            (t.sibling = null),
            (n = xe.current),
            ye(xe, l ? (n & 1) | 2 : n & 1),
            t)
          : (Be(t), null);
      case 22:
      case 23:
        return (
          Os(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (lt & 1073741824) !== 0 &&
              (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Be(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Hh(e, t) {
    switch ((Bo(t), t.tag)) {
      case 1:
        return (
          qe(t.type) && Dl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          bn(),
          ve(Ke),
          ve(Ie),
          bo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Yo(t), null;
      case 13:
        if (
          (ve(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Xn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ve(xe), null;
      case 4:
        return bn(), null;
      case 10:
        return Ko(t.type._context), null;
      case 22:
      case 23:
        return Os(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ti = !1,
    $e = !1,
    Wh = typeof WeakSet == "function" ? WeakSet : Set,
    Q = null;
  function tr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          _e(e, t, l);
        }
      else n.current = null;
  }
  function ws(e, t, n) {
    try {
      n();
    } catch (l) {
      _e(e, t, l);
    }
  }
  var Zc = !1;
  function Vh(e, t) {
    if (((Oo = xl), (e = Ta()), ko(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var s = l.anchorOffset,
              a = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, a.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              h = -1,
              v = -1,
              j = 0,
              z = 0,
              D = e,
              L = null;
            t: for (;;) {
              for (
                var W;
                D !== n || (s !== 0 && D.nodeType !== 3) || (h = d + s),
                  D !== a || (l !== 0 && D.nodeType !== 3) || (v = d + l),
                  D.nodeType === 3 && (d += D.nodeValue.length),
                  (W = D.firstChild) !== null;

              )
                (L = D), (D = W);
              for (;;) {
                if (D === e) break t;
                if (
                  (L === n && ++j === s && (h = d),
                  L === a && ++z === l && (v = d),
                  (W = D.nextSibling) !== null)
                )
                  break;
                (D = L), (L = D.parentNode);
              }
              D = W;
            }
            n = h === -1 || v === -1 ? null : { start: h, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Lo = { focusedElem: e, selectionRange: n }, xl = !1, Q = t;
      Q !== null;

    )
      if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Q = e);
      else
        for (; Q !== null; ) {
          t = Q;
          try {
            var q = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (q !== null) {
                    var J = q.memoizedProps,
                      Re = q.memoizedState,
                      _ = t.stateNode,
                      x = _.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? J : wt(t.type, J),
                        Re
                      );
                    _.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 &&
                      C.documentElement &&
                      C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (A) {
            _e(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Q = e);
            break;
          }
          Q = t.return;
        }
    return (q = Zc), (Zc = !1), q;
  }
  function Kr(e, t, n) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var s = (l = l.next);
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          (s.destroy = void 0), a !== void 0 && ws(t, n, a);
        }
        s = s.next;
      } while (s !== l);
    }
  }
  function ni(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var l = n.create;
          n.destroy = l();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ss(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function bc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), bc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Pt],
          delete t[Dr],
          delete t[Fo],
          delete t[Rh],
          delete t[jh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ef(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function tf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ef(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ml));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (xs(e, t, n), e = e.sibling; e !== null; )
        xs(e, t, n), (e = e.sibling);
  }
  function Es(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Es(e, t, n), e = e.sibling; e !== null; )
        Es(e, t, n), (e = e.sibling);
  }
  var De = null,
    St = !1;
  function nn(e, t, n) {
    for (n = n.child; n !== null; ) nf(e, t, n), (n = n.sibling);
  }
  function nf(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
      try {
        jt.onCommitFiberUnmount(ml, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || tr(n, t);
      case 6:
        var l = De,
          s = St;
        (De = null),
          nn(e, t, n),
          (De = l),
          (St = s),
          De !== null &&
            (St
              ? ((e = De),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : De.removeChild(n.stateNode));
        break;
      case 18:
        De !== null &&
          (St
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8
                ? Do(e.parentNode, n)
                : e.nodeType === 1 && Do(e, n),
              _r(e))
            : Do(De, n.stateNode));
        break;
      case 4:
        (l = De),
          (s = St),
          (De = n.stateNode.containerInfo),
          (St = !0),
          nn(e, t, n),
          (De = l),
          (St = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !$e &&
          ((l = n.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          s = l = l.next;
          do {
            var a = s,
              d = a.destroy;
            (a = a.tag),
              d !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && ws(n, t, d),
              (s = s.next);
          } while (s !== l);
        }
        nn(e, t, n);
        break;
      case 1:
        if (
          !$e &&
          (tr(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = n.memoizedProps),
              (l.state = n.memoizedState),
              l.componentWillUnmount();
          } catch (h) {
            _e(n, t, h);
          }
        nn(e, t, n);
        break;
      case 21:
        nn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? (($e = (l = $e) || n.memoizedState !== null), nn(e, t, n), ($e = l))
          : nn(e, t, n);
        break;
      default:
        nn(e, t, n);
    }
  }
  function rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Wh()),
        t.forEach(function (l) {
          var s = bh.bind(null, e, l);
          n.has(l) || (n.add(l), l.then(s, s));
        });
    }
  }
  function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var s = n[l];
        try {
          var a = e,
            d = t,
            h = d;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 5:
                (De = h.stateNode), (St = !1);
                break e;
              case 3:
                (De = h.stateNode.containerInfo), (St = !0);
                break e;
              case 4:
                (De = h.stateNode.containerInfo), (St = !0);
                break e;
            }
            h = h.return;
          }
          if (De === null) throw Error(o(160));
          nf(a, d, s), (De = null), (St = !1);
          var v = s.alternate;
          v !== null && (v.return = null), (s.return = null);
        } catch (j) {
          _e(s, t, j);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) lf(t, e), (t = t.sibling);
  }
  function lf(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((xt(t, e), Ot(e), l & 4)) {
          try {
            Kr(3, e, e.return), ni(3, e);
          } catch (J) {
            _e(e, e.return, J);
          }
          try {
            Kr(5, e, e.return);
          } catch (J) {
            _e(e, e.return, J);
          }
        }
        break;
      case 1:
        xt(t, e), Ot(e), l & 512 && n !== null && tr(n, n.return);
        break;
      case 5:
        if (
          (xt(t, e),
          Ot(e),
          l & 512 && n !== null && tr(n, n.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            pr(s, "");
          } catch (J) {
            _e(e, e.return, J);
          }
        }
        if (l & 4 && ((s = e.stateNode), s != null)) {
          var a = e.memoizedProps,
            d = n !== null ? n.memoizedProps : a,
            h = e.type,
            v = e.updateQueue;
          if (((e.updateQueue = null), v !== null))
            try {
              h === "input" && a.type === "radio" && a.name != null && Lu(s, a),
                Zi(h, d);
              var j = Zi(h, a);
              for (d = 0; d < v.length; d += 2) {
                var z = v[d],
                  D = v[d + 1];
                z === "style"
                  ? Bu(s, D)
                  : z === "dangerouslySetInnerHTML"
                  ? Iu(s, D)
                  : z === "children"
                  ? pr(s, D)
                  : I(s, z, D, j);
              }
              switch (h) {
                case "input":
                  qi(s, a);
                  break;
                case "textarea":
                  Du(s, a);
                  break;
                case "select":
                  var L = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!a.multiple;
                  var W = a.value;
                  W != null
                    ? zn(s, !!a.multiple, W, !1)
                    : L !== !!a.multiple &&
                      (a.defaultValue != null
                        ? zn(s, !!a.multiple, a.defaultValue, !0)
                        : zn(s, !!a.multiple, a.multiple ? [] : "", !1));
              }
              s[Dr] = a;
            } catch (J) {
              _e(e, e.return, J);
            }
        }
        break;
      case 6:
        if ((xt(t, e), Ot(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (s = e.stateNode), (a = e.memoizedProps);
          try {
            s.nodeValue = a;
          } catch (J) {
            _e(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          (xt(t, e), Ot(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            _r(t.containerInfo);
          } catch (J) {
            _e(e, e.return, J);
          }
        break;
      case 4:
        xt(t, e), Ot(e);
        break;
      case 13:
        xt(t, e),
          Ot(e),
          (s = e.child),
          s.flags & 8192 &&
            ((a = s.memoizedState !== null),
            (s.stateNode.isHidden = a),
            !a ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (Cs = Ce())),
          l & 4 && rf(e);
        break;
      case 22:
        if (
          ((z = n !== null && n.memoizedState !== null),
          e.mode & 1 ? (($e = (j = $e) || z), xt(t, e), ($e = j)) : xt(t, e),
          Ot(e),
          l & 8192)
        ) {
          if (
            ((j = e.memoizedState !== null),
            (e.stateNode.isHidden = j) && !z && (e.mode & 1) !== 0)
          )
            for (Q = e, z = e.child; z !== null; ) {
              for (D = Q = z; Q !== null; ) {
                switch (((L = Q), (W = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Kr(4, L, L.return);
                    break;
                  case 1:
                    tr(L, L.return);
                    var q = L.stateNode;
                    if (typeof q.componentWillUnmount == "function") {
                      (l = L), (n = L.return);
                      try {
                        (t = l),
                          (q.props = t.memoizedProps),
                          (q.state = t.memoizedState),
                          q.componentWillUnmount();
                      } catch (J) {
                        _e(l, n, J);
                      }
                    }
                    break;
                  case 5:
                    tr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      uf(D);
                      continue;
                    }
                }
                W !== null ? ((W.return = L), (Q = W)) : uf(D);
              }
              z = z.sibling;
            }
          e: for (z = null, D = e; ; ) {
            if (D.tag === 5) {
              if (z === null) {
                z = D;
                try {
                  (s = D.stateNode),
                    j
                      ? ((a = s.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((h = D.stateNode),
                        (v = D.memoizedProps.style),
                        (d =
                          v != null && v.hasOwnProperty("display")
                            ? v.display
                            : null),
                        (h.style.display = Uu("display", d)));
                } catch (J) {
                  _e(e, e.return, J);
                }
              }
            } else if (D.tag === 6) {
              if (z === null)
                try {
                  D.stateNode.nodeValue = j ? "" : D.memoizedProps;
                } catch (J) {
                  _e(e, e.return, J);
                }
            } else if (
              ((D.tag !== 22 && D.tag !== 23) ||
                D.memoizedState === null ||
                D === e) &&
              D.child !== null
            ) {
              (D.child.return = D), (D = D.child);
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              z === D && (z = null), (D = D.return);
            }
            z === D && (z = null),
              (D.sibling.return = D.return),
              (D = D.sibling);
          }
        }
        break;
      case 19:
        xt(t, e), Ot(e), l & 4 && rf(e);
        break;
      case 21:
        break;
      default:
        xt(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ef(n)) {
              var l = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (pr(s, ""), (l.flags &= -33));
            var a = tf(e);
            Es(e, a, s);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo,
              h = tf(e);
            xs(e, h, d);
            break;
          default:
            throw Error(o(161));
        }
      } catch (v) {
        _e(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qh(e, t, n) {
    (Q = e), of(e);
  }
  function of(e, t, n) {
    for (var l = (e.mode & 1) !== 0; Q !== null; ) {
      var s = Q,
        a = s.child;
      if (s.tag === 22 && l) {
        var d = s.memoizedState !== null || ti;
        if (!d) {
          var h = s.alternate,
            v = (h !== null && h.memoizedState !== null) || $e;
          h = ti;
          var j = $e;
          if (((ti = d), ($e = v) && !j))
            for (Q = s; Q !== null; )
              (d = Q),
                (v = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? af(s)
                  : v !== null
                  ? ((v.return = d), (Q = v))
                  : af(s);
          for (; a !== null; ) (Q = a), of(a), (a = a.sibling);
          (Q = s), (ti = h), ($e = j);
        }
        sf(e);
      } else
        (s.subtreeFlags & 8772) !== 0 && a !== null
          ? ((a.return = s), (Q = a))
          : sf(e);
    }
  }
  function sf(e) {
    for (; Q !== null; ) {
      var t = Q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || ni(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (n === null) l.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : wt(t.type, n.memoizedProps);
                    l.componentDidUpdate(
                      s,
                      n.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var a = t.updateQueue;
                a !== null && sc(t, a, l);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  sc(t, d, n);
                }
                break;
              case 5:
                var h = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = h;
                  var v = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      v.autoFocus && n.focus();
                      break;
                    case "img":
                      v.src && (n.src = v.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var j = t.alternate;
                  if (j !== null) {
                    var z = j.memoizedState;
                    if (z !== null) {
                      var D = z.dehydrated;
                      D !== null && _r(D);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          $e || (t.flags & 512 && Ss(t));
        } catch (L) {
          _e(t, t.return, L);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function uf(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function af(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ni(4, t);
            } catch (v) {
              _e(t, n, v);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var s = t.return;
              try {
                l.componentDidMount();
              } catch (v) {
                _e(t, s, v);
              }
            }
            var a = t.return;
            try {
              Ss(t);
            } catch (v) {
              _e(t, a, v);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Ss(t);
            } catch (v) {
              _e(t, d, v);
            }
        }
      } catch (v) {
        _e(t, t.return, v);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        (h.return = t.return), (Q = h);
        break;
      }
      Q = t.return;
    }
  }
  var Kh = Math.ceil,
    ri = V.ReactCurrentDispatcher,
    ks = V.ReactCurrentOwner,
    dt = V.ReactCurrentBatchConfig,
    ue = 0,
    Me = null,
    Pe = null,
    Fe = 0,
    lt = 0,
    nr = Yt(0),
    Oe = 0,
    qr = null,
    xn = 0,
    li = 0,
    _s = 0,
    Jr = null,
    Xe = null,
    Cs = 0,
    rr = 1 / 0,
    $t = null,
    ii = !1,
    Rs = null,
    rn = null,
    oi = !1,
    ln = null,
    si = 0,
    Xr = 0,
    js = null,
    ui = -1,
    ai = 0;
  function Ve() {
    return (ue & 6) !== 0 ? Ce() : ui !== -1 ? ui : (ui = Ce());
  }
  function on(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ue & 2) !== 0 && Fe !== 0
      ? Fe & -Fe
      : Nh.transition !== null
      ? (ai === 0 && (ai = ta()), ai)
      : ((e = pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ca(e.type))),
        e);
  }
  function Et(e, t, n, l) {
    if (50 < Xr) throw ((Xr = 0), (js = null), Error(o(185)));
    wr(e, n, l),
      ((ue & 2) === 0 || e !== Me) &&
        (e === Me && ((ue & 2) === 0 && (li |= n), Oe === 4 && sn(e, Fe)),
        Ge(e, l),
        n === 1 &&
          ue === 0 &&
          (t.mode & 1) === 0 &&
          ((rr = Ce() + 500), Al && bt()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    Np(e, t);
    var l = vl(e, e === Me ? Fe : 0);
    if (l === 0)
      n !== null && Zu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((n != null && Zu(n), t === 1))
        e.tag === 0 ? Ph(ff.bind(null, e)) : Xa(ff.bind(null, e)),
          _h(function () {
            (ue & 6) === 0 && bt();
          }),
          (n = null);
      else {
        switch (na(l)) {
          case 1:
            n = io;
            break;
          case 4:
            n = bu;
            break;
          case 16:
            n = hl;
            break;
          case 536870912:
            n = ea;
            break;
          default:
            n = hl;
        }
        n = wf(n, cf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function cf(e, t) {
    if (((ui = -1), (ai = 0), (ue & 6) !== 0)) throw Error(o(327));
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n) return null;
    var l = vl(e, e === Me ? Fe : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = ci(e, l);
    else {
      t = l;
      var s = ue;
      ue |= 2;
      var a = pf();
      (Me !== e || Fe !== t) && (($t = null), (rr = Ce() + 500), kn(e, t));
      do
        try {
          Xh();
          break;
        } catch (h) {
          df(e, h);
        }
      while (!0);
      Qo(),
        (ri.current = a),
        (ue = s),
        Pe !== null ? (t = 0) : ((Me = null), (Fe = 0), (t = Oe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = oo(e)), s !== 0 && ((l = s), (t = Ps(e, s)))),
        t === 1)
      )
        throw ((n = qr), kn(e, 0), sn(e, l), Ge(e, Ce()), n);
      if (t === 6) sn(e, l);
      else {
        if (
          ((s = e.current.alternate),
          (l & 30) === 0 &&
            !qh(s) &&
            ((t = ci(e, l)),
            t === 2 && ((a = oo(e)), a !== 0 && ((l = a), (t = Ps(e, a)))),
            t === 1))
        )
          throw ((n = qr), kn(e, 0), sn(e, l), Ge(e, Ce()), n);
        switch (((e.finishedWork = s), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            _n(e, Xe, $t);
            break;
          case 3:
            if (
              (sn(e, l),
              (l & 130023424) === l && ((t = Cs + 500 - Ce()), 10 < t))
            ) {
              if (vl(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & l) !== l)) {
                Ve(), (e.pingedLanes |= e.suspendedLanes & s);
                break;
              }
              e.timeoutHandle = zo(_n.bind(null, e, Xe, $t), t);
              break;
            }
            _n(e, Xe, $t);
            break;
          case 4:
            if ((sn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, s = -1; 0 < l; ) {
              var d = 31 - yt(l);
              (a = 1 << d), (d = t[d]), d > s && (s = d), (l &= ~a);
            }
            if (
              ((l = s),
              (l = Ce() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * Kh(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = zo(_n.bind(null, e, Xe, $t), l);
              break;
            }
            _n(e, Xe, $t);
            break;
          case 5:
            _n(e, Xe, $t);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Ge(e, Ce()), e.callbackNode === n ? cf.bind(null, e) : null;
  }
  function Ps(e, t) {
    var n = Jr;
    return (
      e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
      (e = ci(e, t)),
      e !== 2 && ((t = Xe), (Xe = n), t !== null && Ns(t)),
      e
    );
  }
  function Ns(e) {
    Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
  }
  function qh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var l = 0; l < n.length; l++) {
            var s = n[l],
              a = s.getSnapshot;
            s = s.value;
            try {
              if (!gt(a(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function sn(e, t) {
    for (
      t &= ~_s,
        t &= ~li,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - yt(t),
        l = 1 << n;
      (e[n] = -1), (t &= ~l);
    }
  }
  function ff(e) {
    if ((ue & 6) !== 0) throw Error(o(327));
    lr();
    var t = vl(e, 0);
    if ((t & 1) === 0) return Ge(e, Ce()), null;
    var n = ci(e, t);
    if (e.tag !== 0 && n === 2) {
      var l = oo(e);
      l !== 0 && ((t = l), (n = Ps(e, l)));
    }
    if (n === 1) throw ((n = qr), kn(e, 0), sn(e, t), Ge(e, Ce()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      _n(e, Xe, $t),
      Ge(e, Ce()),
      null
    );
  }
  function Ts(e, t) {
    var n = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      (ue = n), ue === 0 && ((rr = Ce() + 500), Al && bt());
    }
  }
  function En(e) {
    ln !== null && ln.tag === 0 && (ue & 6) === 0 && lr();
    var t = ue;
    ue |= 1;
    var n = dt.transition,
      l = pe;
    try {
      if (((dt.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = l), (dt.transition = n), (ue = t), (ue & 6) === 0 && bt();
    }
  }
  function Os() {
    (lt = nr.current), ve(nr);
  }
  function kn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), kh(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var l = n;
        switch ((Bo(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && Dl();
            break;
          case 3:
            bn(), ve(Ke), ve(Ie), bo();
            break;
          case 5:
            Yo(l);
            break;
          case 4:
            bn();
            break;
          case 13:
            ve(xe);
            break;
          case 19:
            ve(xe);
            break;
          case 10:
            Ko(l.type._context);
            break;
          case 22:
          case 23:
            Os();
        }
        n = n.return;
      }
    if (
      ((Me = e),
      (Pe = e = un(e.current, null)),
      (Fe = lt = t),
      (Oe = 0),
      (qr = null),
      (_s = li = xn = 0),
      (Xe = Jr = null),
      vn !== null)
    ) {
      for (t = 0; t < vn.length; t++)
        if (((n = vn[t]), (l = n.interleaved), l !== null)) {
          n.interleaved = null;
          var s = l.next,
            a = n.pending;
          if (a !== null) {
            var d = a.next;
            (a.next = s), (l.next = d);
          }
          n.pending = l;
        }
      vn = null;
    }
    return e;
  }
  function df(e, t) {
    do {
      var n = Pe;
      try {
        if ((Qo(), (ql.current = Yl), Jl)) {
          for (var l = Ee.memoizedState; l !== null; ) {
            var s = l.queue;
            s !== null && (s.pending = null), (l = l.next);
          }
          Jl = !1;
        }
        if (
          ((Sn = 0),
          (Le = Te = Ee = null),
          ($r = !1),
          (Hr = 0),
          (ks.current = null),
          n === null || n.return === null)
        ) {
          (Oe = 1), (qr = t), (Pe = null);
          break;
        }
        e: {
          var a = e,
            d = n.return,
            h = n,
            v = t;
          if (
            ((t = Fe),
            (h.flags |= 32768),
            v !== null && typeof v == "object" && typeof v.then == "function")
          ) {
            var j = v,
              z = h,
              D = z.tag;
            if ((z.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var L = z.alternate;
              L
                ? ((z.updateQueue = L.updateQueue),
                  (z.memoizedState = L.memoizedState),
                  (z.lanes = L.lanes))
                : ((z.updateQueue = null), (z.memoizedState = null));
            }
            var W = Fc(d);
            if (W !== null) {
              (W.flags &= -257),
                Ac(W, d, h, a, t),
                W.mode & 1 && Dc(a, j, t),
                (t = W),
                (v = j);
              var q = t.updateQueue;
              if (q === null) {
                var J = new Set();
                J.add(v), (t.updateQueue = J);
              } else q.add(v);
              break e;
            } else {
              if ((t & 1) === 0) {
                Dc(a, j, t), Ls();
                break e;
              }
              v = Error(o(426));
            }
          } else if (Se && h.mode & 1) {
            var Re = Fc(d);
            if (Re !== null) {
              (Re.flags & 65536) === 0 && (Re.flags |= 256),
                Ac(Re, d, h, a, t),
                Wo(er(v, h));
              break e;
            }
          }
          (a = v = er(v, h)),
            Oe !== 4 && (Oe = 2),
            Jr === null ? (Jr = [a]) : Jr.push(a),
            (a = d);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var _ = Mc(a, v, t);
                oc(a, _);
                break e;
              case 1:
                h = v;
                var x = a.type,
                  C = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof x.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (rn === null || !rn.has(C))))
                ) {
                  (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                  var A = zc(a, h, t);
                  oc(a, A);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        mf(n);
      } catch (G) {
        (t = G), Pe === n && n !== null && (Pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function pf() {
    var e = ri.current;
    return (ri.current = Yl), e === null ? Yl : e;
  }
  function Ls() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      Me === null ||
        ((xn & 268435455) === 0 && (li & 268435455) === 0) ||
        sn(Me, Fe);
  }
  function ci(e, t) {
    var n = ue;
    ue |= 2;
    var l = pf();
    (Me !== e || Fe !== t) && (($t = null), kn(e, t));
    do
      try {
        Jh();
        break;
      } catch (s) {
        df(e, s);
      }
    while (!0);
    if ((Qo(), (ue = n), (ri.current = l), Pe !== null)) throw Error(o(261));
    return (Me = null), (Fe = 0), Oe;
  }
  function Jh() {
    for (; Pe !== null; ) hf(Pe);
  }
  function Xh() {
    for (; Pe !== null && !Sp(); ) hf(Pe);
  }
  function hf(e) {
    var t = vf(e.alternate, e, lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? mf(e) : (Pe = t),
      (ks.current = null);
  }
  function mf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = $h(n, t, lt)), n !== null)) {
          Pe = n;
          return;
        }
      } else {
        if (((n = Hh(n, t)), n !== null)) {
          (n.flags &= 32767), (Pe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Oe = 6), (Pe = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function _n(e, t, n) {
    var l = pe,
      s = dt.transition;
    try {
      (dt.transition = null), (pe = 1), Gh(e, t, n, l);
    } finally {
      (dt.transition = s), (pe = l);
    }
    return null;
  }
  function Gh(e, t, n, l) {
    do lr();
    while (ln !== null);
    if ((ue & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var a = n.lanes | n.childLanes;
    if (
      (Tp(e, a),
      e === Me && ((Pe = Me = null), (Fe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        oi ||
        ((oi = !0),
        wf(hl, function () {
          return lr(), null;
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      (a = dt.transition), (dt.transition = null);
      var d = pe;
      pe = 1;
      var h = ue;
      (ue |= 4),
        (ks.current = null),
        Vh(e, n),
        lf(n, e),
        yh(Lo),
        (xl = !!Oo),
        (Lo = Oo = null),
        (e.current = n),
        Qh(n),
        xp(),
        (ue = h),
        (pe = d),
        (dt.transition = a);
    } else e.current = n;
    if (
      (oi && ((oi = !1), (ln = e), (si = s)),
      (a = e.pendingLanes),
      a === 0 && (rn = null),
      _p(n.stateNode),
      Ge(e, Ce()),
      t !== null)
    )
      for (l = e.onRecoverableError, n = 0; n < t.length; n++)
        (s = t[n]), l(s.value, { componentStack: s.stack, digest: s.digest });
    if (ii) throw ((ii = !1), (e = Rs), (Rs = null), e);
    return (
      (si & 1) !== 0 && e.tag !== 0 && lr(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === js ? Xr++ : ((Xr = 0), (js = e))) : (Xr = 0),
      bt(),
      null
    );
  }
  function lr() {
    if (ln !== null) {
      var e = na(si),
        t = dt.transition,
        n = pe;
      try {
        if (((dt.transition = null), (pe = 16 > e ? 16 : e), ln === null))
          var l = !1;
        else {
          if (((e = ln), (ln = null), (si = 0), (ue & 6) !== 0))
            throw Error(o(331));
          var s = ue;
          for (ue |= 4, Q = e.current; Q !== null; ) {
            var a = Q,
              d = a.child;
            if ((Q.flags & 16) !== 0) {
              var h = a.deletions;
              if (h !== null) {
                for (var v = 0; v < h.length; v++) {
                  var j = h[v];
                  for (Q = j; Q !== null; ) {
                    var z = Q;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Kr(8, z, a);
                    }
                    var D = z.child;
                    if (D !== null) (D.return = z), (Q = D);
                    else
                      for (; Q !== null; ) {
                        z = Q;
                        var L = z.sibling,
                          W = z.return;
                        if ((bc(z), z === j)) {
                          Q = null;
                          break;
                        }
                        if (L !== null) {
                          (L.return = W), (Q = L);
                          break;
                        }
                        Q = W;
                      }
                  }
                }
                var q = a.alternate;
                if (q !== null) {
                  var J = q.child;
                  if (J !== null) {
                    q.child = null;
                    do {
                      var Re = J.sibling;
                      (J.sibling = null), (J = Re);
                    } while (J !== null);
                  }
                }
                Q = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && d !== null)
              (d.return = a), (Q = d);
            else
              e: for (; Q !== null; ) {
                if (((a = Q), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(9, a, a.return);
                  }
                var _ = a.sibling;
                if (_ !== null) {
                  (_.return = a.return), (Q = _);
                  break e;
                }
                Q = a.return;
              }
          }
          var x = e.current;
          for (Q = x; Q !== null; ) {
            d = Q;
            var C = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && C !== null)
              (C.return = d), (Q = C);
            else
              e: for (d = x; Q !== null; ) {
                if (((h = Q), (h.flags & 2048) !== 0))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ni(9, h);
                    }
                  } catch (G) {
                    _e(h, h.return, G);
                  }
                if (h === d) {
                  Q = null;
                  break e;
                }
                var A = h.sibling;
                if (A !== null) {
                  (A.return = h.return), (Q = A);
                  break e;
                }
                Q = h.return;
              }
          }
          if (
            ((ue = s),
            bt(),
            jt && typeof jt.onPostCommitFiberRoot == "function")
          )
            try {
              jt.onPostCommitFiberRoot(ml, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (pe = n), (dt.transition = t);
      }
    }
    return !1;
  }
  function yf(e, t, n) {
    (t = er(n, t)),
      (t = Mc(e, t, 1)),
      (e = tn(e, t, 1)),
      (t = Ve()),
      e !== null && (wr(e, 1, t), Ge(e, t));
  }
  function _e(e, t, n) {
    if (e.tag === 3) yf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (rn === null || !rn.has(l)))
          ) {
            (e = er(n, e)),
              (e = zc(t, e, 1)),
              (t = tn(t, e, 1)),
              (e = Ve()),
              t !== null && (wr(t, 1, e), Ge(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yh(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (t = Ve()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Me === e &&
        (Fe & n) === n &&
        (Oe === 4 || (Oe === 3 && (Fe & 130023424) === Fe && 500 > Ce() - Cs)
          ? kn(e, 0)
          : (_s |= n)),
      Ge(e, t);
  }
  function gf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = gl), (gl <<= 1), (gl & 130023424) === 0 && (gl = 4194304)));
    var n = Ve();
    (e = It(e, t)), e !== null && (wr(e, t, n), Ge(e, n));
  }
  function Zh(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), gf(e, n);
  }
  function bh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), gf(e, n);
  }
  var vf;
  vf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ke.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Je = !1), Bh(e, t, n);
        Je = (e.flags & 131072) !== 0;
      }
    else (Je = !1), Se && (t.flags & 1048576) !== 0 && Ga(t, Ul, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        ei(e, t), (e = t.pendingProps);
        var s = Kn(t, Ie.current);
        Zn(t, n), (s = ns(null, t, l, e, s, n));
        var a = rs();
        return (
          (t.flags |= 1),
          typeof s == "object" &&
          s !== null &&
          typeof s.render == "function" &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              qe(l) ? ((a = !0), Fl(t)) : (a = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              Xo(t),
              (s.updater = Zl),
              (t.stateNode = s),
              (s._reactInternals = t),
              as(t, l, e, n),
              (t = ps(null, t, l, !0, a, n)))
            : ((t.tag = 0), Se && a && Uo(t), We(null, t, s, n), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (ei(e, t),
            (e = t.pendingProps),
            (s = l._init),
            (l = s(l._payload)),
            (t.type = l),
            (s = t.tag = tm(l)),
            (e = wt(l, e)),
            s)
          ) {
            case 0:
              t = ds(null, t, l, e, n);
              break e;
            case 1:
              t = Wc(null, t, l, e, n);
              break e;
            case 11:
              t = Ic(null, t, l, e, n);
              break e;
            case 14:
              t = Uc(null, t, l, wt(l.type, e), n);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (s = t.pendingProps),
          (s = t.elementType === l ? s : wt(l, s)),
          ds(e, t, l, s, n)
        );
      case 1:
        return (
          (l = t.type),
          (s = t.pendingProps),
          (s = t.elementType === l ? s : wt(l, s)),
          Wc(e, t, l, s, n)
        );
      case 3:
        e: {
          if ((Vc(t), e === null)) throw Error(o(387));
          (l = t.pendingProps),
            (a = t.memoizedState),
            (s = a.element),
            ic(e, t),
            Ql(t, l, null, n);
          var d = t.memoizedState;
          if (((l = d.element), a.isDehydrated))
            if (
              ((a = {
                element: l,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              (s = er(Error(o(423)), t)), (t = Qc(e, t, l, n, s));
              break e;
            } else if (l !== s) {
              (s = er(Error(o(424)), t)), (t = Qc(e, t, l, n, s));
              break e;
            } else
              for (
                rt = Gt(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  Se = !0,
                  vt = null,
                  n = rc(t, null, l, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Xn(), l === s)) {
              t = Bt(e, t, n);
              break e;
            }
            We(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          uc(t),
          e === null && Ho(t),
          (l = t.type),
          (s = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (d = s.children),
          Mo(l, s) ? (d = null) : a !== null && Mo(l, a) && (t.flags |= 32),
          Hc(e, t),
          We(e, t, d, n),
          t.child
        );
      case 6:
        return e === null && Ho(t), null;
      case 13:
        return Kc(e, t, n);
      case 4:
        return (
          Go(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Gn(t, null, l, n)) : We(e, t, l, n),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (s = t.pendingProps),
          (s = t.elementType === l ? s : wt(l, s)),
          Ic(e, t, l, s, n)
        );
      case 7:
        return We(e, t, t.pendingProps, n), t.child;
      case 8:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (s = t.pendingProps),
            (a = t.memoizedProps),
            (d = s.value),
            ye(Hl, l._currentValue),
            (l._currentValue = d),
            a !== null)
          )
            if (gt(a.value, d)) {
              if (a.children === s.children && !Ke.current) {
                t = Bt(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var h = a.dependencies;
                if (h !== null) {
                  d = a.child;
                  for (var v = h.firstContext; v !== null; ) {
                    if (v.context === l) {
                      if (a.tag === 1) {
                        (v = Ut(-1, n & -n)), (v.tag = 2);
                        var j = a.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var z = j.pending;
                          z === null
                            ? (v.next = v)
                            : ((v.next = z.next), (z.next = v)),
                            (j.pending = v);
                        }
                      }
                      (a.lanes |= n),
                        (v = a.alternate),
                        v !== null && (v.lanes |= n),
                        qo(a.return, n, t),
                        (h.lanes |= n);
                      break;
                    }
                    v = v.next;
                  }
                } else if (a.tag === 10) d = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((d = a.return), d === null)) throw Error(o(341));
                  (d.lanes |= n),
                    (h = d.alternate),
                    h !== null && (h.lanes |= n),
                    qo(d, n, t),
                    (d = a.sibling);
                } else d = a.child;
                if (d !== null) d.return = a;
                else
                  for (d = a; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((a = d.sibling), a !== null)) {
                      (a.return = d.return), (d = a);
                      break;
                    }
                    d = d.return;
                  }
                a = d;
              }
          We(e, t, s.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (l = t.pendingProps.children),
          Zn(t, n),
          (s = ct(s)),
          (l = l(s)),
          (t.flags |= 1),
          We(e, t, l, n),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (s = wt(l, t.pendingProps)),
          (s = wt(l.type, s)),
          Uc(e, t, l, s, n)
        );
      case 15:
        return Bc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (l = t.type),
          (s = t.pendingProps),
          (s = t.elementType === l ? s : wt(l, s)),
          ei(e, t),
          (t.tag = 1),
          qe(l) ? ((e = !0), Fl(t)) : (e = !1),
          Zn(t, n),
          Oc(t, l, s),
          as(t, l, s, n),
          ps(null, t, l, !0, e, n)
        );
      case 19:
        return Jc(e, t, n);
      case 22:
        return $c(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function wf(e, t) {
    return Yu(e, t);
  }
  function em(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function pt(e, t, n, l) {
    return new em(e, t, n, l);
  }
  function Ms(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function tm(e) {
    if (typeof e == "function") return Ms(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Ct)) return 11;
      if (e === Rt) return 14;
    }
    return 2;
  }
  function un(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = pt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function fi(e, t, n, l, s, a) {
    var d = 2;
    if (((l = e), typeof e == "function")) Ms(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else
      e: switch (e) {
        case oe:
          return Cn(n.children, s, a, t);
        case ne:
          (d = 8), (s |= 8);
          break;
        case je:
          return (
            (e = pt(12, n, t, s | 2)), (e.elementType = je), (e.lanes = a), e
          );
        case be:
          return (e = pt(13, n, t, s)), (e.elementType = be), (e.lanes = a), e;
        case mt:
          return (e = pt(19, n, t, s)), (e.elementType = mt), (e.lanes = a), e;
        case ke:
          return di(n, s, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ht:
                d = 10;
                break e;
              case Mt:
                d = 9;
                break e;
              case Ct:
                d = 11;
                break e;
              case Rt:
                d = 14;
                break e;
              case Qe:
                (d = 16), (l = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = pt(d, n, t, s)), (t.elementType = e), (t.type = l), (t.lanes = a), t
    );
  }
  function Cn(e, t, n, l) {
    return (e = pt(7, e, l, t)), (e.lanes = n), e;
  }
  function di(e, t, n, l) {
    return (
      (e = pt(22, e, l, t)),
      (e.elementType = ke),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function zs(e, t, n) {
    return (e = pt(6, e, null, t)), (e.lanes = n), e;
  }
  function Ds(e, t, n) {
    return (
      (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function nm(e, t, n, l, s) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = so(0)),
      (this.expirationTimes = so(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = so(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Fs(e, t, n, l, s, a, d, h, v) {
    return (
      (e = new nm(e, t, n, h, v)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = pt(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: l,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Xo(a),
      e
    );
  }
  function rm(e, t, n) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Sf(e) {
    if (!e) return Zt;
    e = e._reactInternals;
    e: {
      if (pn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (qe(n)) return qa(e, n, t);
    }
    return t;
  }
  function xf(e, t, n, l, s, a, d, h, v) {
    return (
      (e = Fs(n, l, !0, e, s, a, d, h, v)),
      (e.context = Sf(null)),
      (n = e.current),
      (l = Ve()),
      (s = on(n)),
      (a = Ut(l, s)),
      (a.callback = t ?? null),
      tn(n, a, s),
      (e.current.lanes = s),
      wr(e, s, l),
      Ge(e, l),
      e
    );
  }
  function pi(e, t, n, l) {
    var s = t.current,
      a = Ve(),
      d = on(s);
    return (
      (n = Sf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ut(a, d)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = tn(s, t, d)),
      e !== null && (Et(e, s, d, a), Vl(e, s, d)),
      d
    );
  }
  function hi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ef(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function As(e, t) {
    Ef(e, t), (e = e.alternate) && Ef(e, t);
  }
  function lm() {
    return null;
  }
  var kf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Is(e) {
    this._internalRoot = e;
  }
  (mi.prototype.render = Is.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      pi(e, t, null, null);
    }),
    (mi.prototype.unmount = Is.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          En(function () {
            pi(null, e, null, null);
          }),
            (t[zt] = null);
        }
      });
  function mi(e) {
    this._internalRoot = e;
  }
  mi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ia();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
      qt.splice(n, 0, e), n === 0 && ua(e);
    }
  };
  function Us(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function yi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function _f() {}
  function im(e, t, n, l, s) {
    if (s) {
      if (typeof l == "function") {
        var a = l;
        l = function () {
          var j = hi(d);
          a.call(j);
        };
      }
      var d = xf(t, l, e, 0, null, !1, !1, "", _f);
      return (
        (e._reactRootContainer = d),
        (e[zt] = d.current),
        Mr(e.nodeType === 8 ? e.parentNode : e),
        En(),
        d
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof l == "function") {
      var h = l;
      l = function () {
        var j = hi(v);
        h.call(j);
      };
    }
    var v = Fs(e, 0, !1, null, null, !1, !1, "", _f);
    return (
      (e._reactRootContainer = v),
      (e[zt] = v.current),
      Mr(e.nodeType === 8 ? e.parentNode : e),
      En(function () {
        pi(t, v, n, l);
      }),
      v
    );
  }
  function gi(e, t, n, l, s) {
    var a = n._reactRootContainer;
    if (a) {
      var d = a;
      if (typeof s == "function") {
        var h = s;
        s = function () {
          var v = hi(d);
          h.call(v);
        };
      }
      pi(t, d, e, s);
    } else d = im(n, t, e, s, l);
    return hi(d);
  }
  (ra = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = vr(t.pendingLanes);
          n !== 0 &&
            (uo(t, n | 1),
            Ge(t, Ce()),
            (ue & 6) === 0 && ((rr = Ce() + 500), bt()));
        }
        break;
      case 13:
        En(function () {
          var l = It(e, 1);
          if (l !== null) {
            var s = Ve();
            Et(l, e, 1, s);
          }
        }),
          As(e, 1);
    }
  }),
    (ao = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ve();
          Et(t, e, 134217728, n);
        }
        As(e, 134217728);
      }
    }),
    (la = function (e) {
      if (e.tag === 13) {
        var t = on(e),
          n = It(e, t);
        if (n !== null) {
          var l = Ve();
          Et(n, e, t, l);
        }
        As(e, t);
      }
    }),
    (ia = function () {
      return pe;
    }),
    (oa = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    (to = function (e, t, n) {
      switch (t) {
        case "input":
          if ((qi(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var s = zl(l);
                if (!s) throw Error(o(90));
                Tu(l), qi(l, s);
              }
            }
          }
          break;
        case "textarea":
          Du(e, n);
          break;
        case "select":
          (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
      }
    }),
    (Vu = Ts),
    (Qu = En);
  var om = { usingClientEntryPoint: !1, Events: [Fr, Vn, zl, Hu, Wu, Ts] },
    Gr = {
      findFiberByHostInstance: hn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    sm = {
      bundleType: Gr.bundleType,
      version: Gr.version,
      rendererPackageName: Gr.rendererPackageName,
      rendererConfig: Gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: V.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Xu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Gr.findFiberByHostInstance || lm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vi.isDisabled && vi.supportsFiber)
      try {
        (ml = vi.inject(sm)), (jt = vi);
      } catch {}
  }
  return (
    (Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = om),
    (Ye.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Us(t)) throw Error(o(200));
      return rm(e, t, null, n);
    }),
    (Ye.createRoot = function (e, t) {
      if (!Us(e)) throw Error(o(299));
      var n = !1,
        l = "",
        s = kf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = Fs(e, 1, !1, null, null, n, !1, l, s)),
        (e[zt] = t.current),
        Mr(e.nodeType === 8 ? e.parentNode : e),
        new Is(t)
      );
    }),
    (Ye.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = Xu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ye.flushSync = function (e) {
      return En(e);
    }),
    (Ye.hydrate = function (e, t, n) {
      if (!yi(t)) throw Error(o(200));
      return gi(null, e, t, !0, n);
    }),
    (Ye.hydrateRoot = function (e, t, n) {
      if (!Us(e)) throw Error(o(405));
      var l = (n != null && n.hydratedSources) || null,
        s = !1,
        a = "",
        d = kf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = xf(t, null, e, 1, n ?? null, s, !1, a, d)),
        (e[zt] = t.current),
        Mr(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (n = l[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, s])
              : t.mutableSourceEagerHydrationData.push(n, s);
      return new mi(t);
    }),
    (Ye.render = function (e, t, n) {
      if (!yi(t)) throw Error(o(200));
      return gi(null, e, t, !1, n);
    }),
    (Ye.unmountComponentAtNode = function (e) {
      if (!yi(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (En(function () {
            gi(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[zt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ye.unstable_batchedUpdates = Ts),
    (Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
      if (!yi(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return gi(e, t, n, !1, l);
    }),
    (Ye.version = "18.3.1-next-f1338f8080-20240426"),
    Ye
  );
}
var Lf;
function gd() {
  if (Lf) return Ws.exports;
  Lf = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), (Ws.exports = Sm()), Ws.exports;
}
var Mf;
function xm() {
  if (Mf) return wi;
  Mf = 1;
  var r = gd();
  return (wi.createRoot = r.createRoot), (wi.hydrateRoot = r.hydrateRoot), wi;
}
var Em = xm();
gd();
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o)
              Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
          }
          return r;
        }),
    tl.apply(this, arguments)
  );
}
var cn;
(function (r) {
  (r.Pop = "POP"), (r.Push = "PUSH"), (r.Replace = "REPLACE");
})(cn || (cn = {}));
const zf = "popstate";
function km(r) {
  r === void 0 && (r = {});
  function i(u, c) {
    let { pathname: f, search: p, hash: m } = u.location;
    return iu(
      "",
      { pathname: f, search: p, hash: m },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    );
  }
  function o(u, c) {
    return typeof c == "string" ? c : Ci(c);
  }
  return Cm(i, o, null, r);
}
function Ne(r, i) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(i);
}
function vd(r, i) {
  if (!r) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function _m() {
  return Math.random().toString(36).substr(2, 8);
}
function Df(r, i) {
  return { usr: r.state, key: r.key, idx: i };
}
function iu(r, i, o, u) {
  return (
    o === void 0 && (o = null),
    tl(
      { pathname: typeof r == "string" ? r : r.pathname, search: "", hash: "" },
      typeof i == "string" ? ar(i) : i,
      { state: o, key: (i && i.key) || u || _m() }
    )
  );
}
function Ci(r) {
  let { pathname: i = "/", search: o = "", hash: u = "" } = r;
  return (
    o && o !== "?" && (i += o.charAt(0) === "?" ? o : "?" + o),
    u && u !== "#" && (i += u.charAt(0) === "#" ? u : "#" + u),
    i
  );
}
function ar(r) {
  let i = {};
  if (r) {
    let o = r.indexOf("#");
    o >= 0 && ((i.hash = r.substr(o)), (r = r.substr(0, o)));
    let u = r.indexOf("?");
    u >= 0 && ((i.search = r.substr(u)), (r = r.substr(0, u))),
      r && (i.pathname = r);
  }
  return i;
}
function Cm(r, i, o, u) {
  u === void 0 && (u = {});
  let { window: c = document.defaultView, v5Compat: f = !1 } = u,
    p = c.history,
    m = cn.Pop,
    y = null,
    S = w();
  S == null && ((S = 0), p.replaceState(tl({}, p.state, { idx: S }), ""));
  function w() {
    return (p.state || { idx: null }).idx;
  }
  function E() {
    m = cn.Pop;
    let R = w(),
      B = R == null ? null : R - S;
    (S = R), y && y({ action: m, location: O.location, delta: B });
  }
  function N(R, B) {
    m = cn.Push;
    let H = iu(O.location, R, B);
    S = w() + 1;
    let I = Df(H, S),
      V = O.createHref(H);
    try {
      p.pushState(I, "", V);
    } catch (X) {
      if (X instanceof DOMException && X.name === "DataCloneError") throw X;
      c.location.assign(V);
    }
    f && y && y({ action: m, location: O.location, delta: 1 });
  }
  function U(R, B) {
    m = cn.Replace;
    let H = iu(O.location, R, B);
    S = w();
    let I = Df(H, S),
      V = O.createHref(H);
    p.replaceState(I, "", V),
      f && y && y({ action: m, location: O.location, delta: 0 });
  }
  function T(R) {
    let B = c.location.origin !== "null" ? c.location.origin : c.location.href,
      H = typeof R == "string" ? R : Ci(R);
    return (
      (H = H.replace(/ $/, "%20")),
      Ne(
        B,
        "No window.location.(origin|href) available to create URL for href: " +
          H
      ),
      new URL(H, B)
    );
  }
  let O = {
    get action() {
      return m;
    },
    get location() {
      return r(c, p);
    },
    listen(R) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(zf, E),
        (y = R),
        () => {
          c.removeEventListener(zf, E), (y = null);
        }
      );
    },
    createHref(R) {
      return i(c, R);
    },
    createURL: T,
    encodeLocation(R) {
      let B = T(R);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: N,
    replace: U,
    go(R) {
      return p.go(R);
    },
  };
  return O;
}
var Ff;
(function (r) {
  (r.data = "data"),
    (r.deferred = "deferred"),
    (r.redirect = "redirect"),
    (r.error = "error");
})(Ff || (Ff = {}));
function Rm(r, i, o) {
  return o === void 0 && (o = "/"), jm(r, i, o);
}
function jm(r, i, o, u) {
  let c = typeof i == "string" ? ar(i) : i,
    f = xu(c.pathname || "/", o);
  if (f == null) return null;
  let p = wd(r);
  Pm(p);
  let m = null;
  for (let y = 0; m == null && y < p.length; ++y) {
    let S = Bm(f);
    m = Am(p[y], S);
  }
  return m;
}
function wd(r, i, o, u) {
  i === void 0 && (i = []), o === void 0 && (o = []), u === void 0 && (u = "");
  let c = (f, p, m) => {
    let y = {
      relativePath: m === void 0 ? f.path || "" : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: p,
      route: f,
    };
    y.relativePath.startsWith("/") &&
      (Ne(
        y.relativePath.startsWith(u),
        'Absolute route path "' +
          y.relativePath +
          '" nested under path ' +
          ('"' + u + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (y.relativePath = y.relativePath.slice(u.length)));
    let S = fn([u, y.relativePath]),
      w = o.concat(y);
    f.children &&
      f.children.length > 0 &&
      (Ne(
        f.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + S + '".')
      ),
      wd(f.children, i, w, S)),
      !(f.path == null && !f.index) &&
        i.push({ path: S, score: Dm(S, f.index), routesMeta: w });
  };
  return (
    r.forEach((f, p) => {
      var m;
      if (f.path === "" || !((m = f.path) != null && m.includes("?"))) c(f, p);
      else for (let y of Sd(f.path)) c(f, p, y);
    }),
    i
  );
}
function Sd(r) {
  let i = r.split("/");
  if (i.length === 0) return [];
  let [o, ...u] = i,
    c = o.endsWith("?"),
    f = o.replace(/\?$/, "");
  if (u.length === 0) return c ? [f, ""] : [f];
  let p = Sd(u.join("/")),
    m = [];
  return (
    m.push(...p.map((y) => (y === "" ? f : [f, y].join("/")))),
    c && m.push(...p),
    m.map((y) => (r.startsWith("/") && y === "" ? "/" : y))
  );
}
function Pm(r) {
  r.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : Fm(
          i.routesMeta.map((u) => u.childrenIndex),
          o.routesMeta.map((u) => u.childrenIndex)
        )
  );
}
const Nm = /^:[\w-]+$/,
  Tm = 3,
  Om = 2,
  Lm = 1,
  Mm = 10,
  zm = -2,
  Af = (r) => r === "*";
function Dm(r, i) {
  let o = r.split("/"),
    u = o.length;
  return (
    o.some(Af) && (u += zm),
    i && (u += Om),
    o
      .filter((c) => !Af(c))
      .reduce((c, f) => c + (Nm.test(f) ? Tm : f === "" ? Lm : Mm), u)
  );
}
function Fm(r, i) {
  return r.length === i.length && r.slice(0, -1).every((u, c) => u === i[c])
    ? r[r.length - 1] - i[i.length - 1]
    : 0;
}
function Am(r, i, o) {
  let { routesMeta: u } = r,
    c = {},
    f = "/",
    p = [];
  for (let m = 0; m < u.length; ++m) {
    let y = u[m],
      S = m === u.length - 1,
      w = f === "/" ? i : i.slice(f.length) || "/",
      E = Im(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: S },
        w
      ),
      N = y.route;
    if (!E) return null;
    Object.assign(c, E.params),
      p.push({
        params: c,
        pathname: fn([f, E.pathname]),
        pathnameBase: Vm(fn([f, E.pathnameBase])),
        route: N,
      }),
      E.pathnameBase !== "/" && (f = fn([f, E.pathnameBase]));
  }
  return p;
}
function Im(r, i) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, u] = Um(r.path, r.caseSensitive, r.end),
    c = i.match(o);
  if (!c) return null;
  let f = c[0],
    p = f.replace(/(.)\/+$/, "$1"),
    m = c.slice(1);
  return {
    params: u.reduce((S, w, E) => {
      let { paramName: N, isOptional: U } = w;
      if (N === "*") {
        let O = m[E] || "";
        p = f.slice(0, f.length - O.length).replace(/(.)\/+$/, "$1");
      }
      const T = m[E];
      return (
        U && !T ? (S[N] = void 0) : (S[N] = (T || "").replace(/%2F/g, "/")), S
      );
    }, {}),
    pathname: f,
    pathnameBase: p,
    pattern: r,
  };
}
function Um(r, i, o) {
  i === void 0 && (i = !1),
    o === void 0 && (o = !0),
    vd(
      r === "*" || !r.endsWith("*") || r.endsWith("/*"),
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + r.replace(/\*$/, "/*") + '".')
    );
  let u = [],
    c =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, m, y) => (
            u.push({ paramName: m, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    r.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (c += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (c += "\\/*$")
      : r !== "" && r !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, i ? void 0 : "i"), u]
  );
}
function Bm(r) {
  try {
    return r
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      vd(
        !1,
        'The URL path "' +
          r +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + i + ").")
      ),
      r
    );
  }
}
function xu(r, i) {
  if (i === "/") return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith("/") ? i.length - 1 : i.length,
    u = r.charAt(o);
  return u && u !== "/" ? null : r.slice(o) || "/";
}
function $m(r, i) {
  i === void 0 && (i = "/");
  let {
    pathname: o,
    search: u = "",
    hash: c = "",
  } = typeof r == "string" ? ar(r) : r;
  return {
    pathname: o ? (o.startsWith("/") ? o : Hm(o, i)) : i,
    search: Qm(u),
    hash: Km(c),
  };
}
function Hm(r, i) {
  let o = i.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((c) => {
      c === ".." ? o.length > 1 && o.pop() : c !== "." && o.push(c);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Ks(r, i, o, u) {
  return (
    "Cannot include a '" +
    r +
    "' character in a manually specified " +
    ("`to." +
      i +
      "` field [" +
      JSON.stringify(u) +
      "].  Please separate it out to the ") +
    ("`to." + o + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Wm(r) {
  return r.filter(
    (i, o) => o === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function xd(r, i) {
  let o = Wm(r);
  return i
    ? o.map((u, c) => (c === o.length - 1 ? u.pathname : u.pathnameBase))
    : o.map((u) => u.pathnameBase);
}
function Ed(r, i, o, u) {
  u === void 0 && (u = !1);
  let c;
  typeof r == "string"
    ? (c = ar(r))
    : ((c = tl({}, r)),
      Ne(
        !c.pathname || !c.pathname.includes("?"),
        Ks("?", "pathname", "search", c)
      ),
      Ne(
        !c.pathname || !c.pathname.includes("#"),
        Ks("#", "pathname", "hash", c)
      ),
      Ne(!c.search || !c.search.includes("#"), Ks("#", "search", "hash", c)));
  let f = r === "" || c.pathname === "",
    p = f ? "/" : c.pathname,
    m;
  if (p == null) m = o;
  else {
    let E = i.length - 1;
    if (!u && p.startsWith("..")) {
      let N = p.split("/");
      for (; N[0] === ".."; ) N.shift(), (E -= 1);
      c.pathname = N.join("/");
    }
    m = E >= 0 ? i[E] : "/";
  }
  let y = $m(c, m),
    S = p && p !== "/" && p.endsWith("/"),
    w = (f || p === ".") && o.endsWith("/");
  return !y.pathname.endsWith("/") && (S || w) && (y.pathname += "/"), y;
}
const fn = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Vm = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Qm = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  Km = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r);
function qm(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
const kd = ["post", "put", "patch", "delete"];
new Set(kd);
const Jm = ["get", ...kd];
new Set(Jm);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nl() {
  return (
    (nl = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o)
              Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
          }
          return r;
        }),
    nl.apply(this, arguments)
  );
}
const Eu = F.createContext(null),
  Xm = F.createContext(null),
  Ln = F.createContext(null),
  zi = F.createContext(null),
  Mn = F.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  _d = F.createContext(null);
function Gm(r, i) {
  let { relative: o } = i === void 0 ? {} : i;
  ol() || Ne(!1);
  let { basename: u, navigator: c } = F.useContext(Ln),
    { hash: f, pathname: p, search: m } = Rd(r, { relative: o }),
    y = p;
  return (
    u !== "/" && (y = p === "/" ? u : fn([u, p])),
    c.createHref({ pathname: y, search: m, hash: f })
  );
}
function ol() {
  return F.useContext(zi) != null;
}
function Di() {
  return ol() || Ne(!1), F.useContext(zi).location;
}
function Cd(r) {
  F.useContext(Ln).static || F.useLayoutEffect(r);
}
function Ym() {
  let { isDataRoute: r } = F.useContext(Mn);
  return r ? cy() : Zm();
}
function Zm() {
  ol() || Ne(!1);
  let r = F.useContext(Eu),
    { basename: i, future: o, navigator: u } = F.useContext(Ln),
    { matches: c } = F.useContext(Mn),
    { pathname: f } = Di(),
    p = JSON.stringify(xd(c, o.v7_relativeSplatPath)),
    m = F.useRef(!1);
  return (
    Cd(() => {
      m.current = !0;
    }),
    F.useCallback(
      function (S, w) {
        if ((w === void 0 && (w = {}), !m.current)) return;
        if (typeof S == "number") {
          u.go(S);
          return;
        }
        let E = Ed(S, JSON.parse(p), f, w.relative === "path");
        r == null &&
          i !== "/" &&
          (E.pathname = E.pathname === "/" ? i : fn([i, E.pathname])),
          (w.replace ? u.replace : u.push)(E, w.state, w);
      },
      [i, u, p, f, r]
    )
  );
}
function Rd(r, i) {
  let { relative: o } = i === void 0 ? {} : i,
    { future: u } = F.useContext(Ln),
    { matches: c } = F.useContext(Mn),
    { pathname: f } = Di(),
    p = JSON.stringify(xd(c, u.v7_relativeSplatPath));
  return F.useMemo(() => Ed(r, JSON.parse(p), f, o === "path"), [r, p, f, o]);
}
function bm(r, i) {
  return ey(r, i);
}
function ey(r, i, o, u) {
  ol() || Ne(!1);
  let { navigator: c } = F.useContext(Ln),
    { matches: f } = F.useContext(Mn),
    p = f[f.length - 1],
    m = p ? p.params : {};
  p && p.pathname;
  let y = p ? p.pathnameBase : "/";
  p && p.route;
  let S = Di(),
    w;
  if (i) {
    var E;
    let R = typeof i == "string" ? ar(i) : i;
    y === "/" || ((E = R.pathname) != null && E.startsWith(y)) || Ne(!1),
      (w = R);
  } else w = S;
  let N = w.pathname || "/",
    U = N;
  if (y !== "/") {
    let R = y.replace(/^\//, "").split("/");
    U = "/" + N.replace(/^\//, "").split("/").slice(R.length).join("/");
  }
  let T = Rm(r, { pathname: U }),
    O = iy(
      T &&
        T.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, m, R.params),
            pathname: fn([
              y,
              c.encodeLocation
                ? c.encodeLocation(R.pathname).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === "/"
                ? y
                : fn([
                    y,
                    c.encodeLocation
                      ? c.encodeLocation(R.pathnameBase).pathname
                      : R.pathnameBase,
                  ]),
          })
        ),
      f,
      o,
      u
    );
  return i && O
    ? F.createElement(
        zi.Provider,
        {
          value: {
            location: nl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              w
            ),
            navigationType: cn.Pop,
          },
        },
        O
      )
    : O;
}
function ty() {
  let r = ay(),
    i = qm(r)
      ? r.status + " " + r.statusText
      : r instanceof Error
      ? r.message
      : JSON.stringify(r),
    o = r instanceof Error ? r.stack : null,
    c = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return F.createElement(
    F.Fragment,
    null,
    F.createElement("h2", null, "Unexpected Application Error!"),
    F.createElement("h3", { style: { fontStyle: "italic" } }, i),
    o ? F.createElement("pre", { style: c }, o) : null,
    null
  );
}
const ny = F.createElement(ty, null);
class ry extends F.Component {
  constructor(i) {
    super(i),
      (this.state = {
        location: i.location,
        revalidation: i.revalidation,
        error: i.error,
      });
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, o) {
    return o.location !== i.location ||
      (o.revalidation !== "idle" && i.revalidation === "idle")
      ? { error: i.error, location: i.location, revalidation: i.revalidation }
      : {
          error: i.error !== void 0 ? i.error : o.error,
          location: o.location,
          revalidation: i.revalidation || o.revalidation,
        };
  }
  componentDidCatch(i, o) {
    console.error(
      "React Router caught the following error during render",
      i,
      o
    );
  }
  render() {
    return this.state.error !== void 0
      ? F.createElement(
          Mn.Provider,
          { value: this.props.routeContext },
          F.createElement(_d.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ly(r) {
  let { routeContext: i, match: o, children: u } = r,
    c = F.useContext(Eu);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = o.route.id),
    F.createElement(Mn.Provider, { value: i }, u)
  );
}
function iy(r, i, o, u) {
  var c;
  if (
    (i === void 0 && (i = []),
    o === void 0 && (o = null),
    u === void 0 && (u = null),
    r == null)
  ) {
    var f;
    if (!o) return null;
    if (o.errors) r = o.matches;
    else if (
      (f = u) != null &&
      f.v7_partialHydration &&
      i.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      r = o.matches;
    else return null;
  }
  let p = r,
    m = (c = o) == null ? void 0 : c.errors;
  if (m != null) {
    let w = p.findIndex(
      (E) => E.route.id && (m == null ? void 0 : m[E.route.id]) !== void 0
    );
    w >= 0 || Ne(!1), (p = p.slice(0, Math.min(p.length, w + 1)));
  }
  let y = !1,
    S = -1;
  if (o && u && u.v7_partialHydration)
    for (let w = 0; w < p.length; w++) {
      let E = p[w];
      if (
        ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (S = w),
        E.route.id)
      ) {
        let { loaderData: N, errors: U } = o,
          T =
            E.route.loader &&
            N[E.route.id] === void 0 &&
            (!U || U[E.route.id] === void 0);
        if (E.route.lazy || T) {
          (y = !0), S >= 0 ? (p = p.slice(0, S + 1)) : (p = [p[0]]);
          break;
        }
      }
    }
  return p.reduceRight((w, E, N) => {
    let U,
      T = !1,
      O = null,
      R = null;
    o &&
      ((U = m && E.route.id ? m[E.route.id] : void 0),
      (O = E.route.errorElement || ny),
      y &&
        (S < 0 && N === 0
          ? (fy("route-fallback"), (T = !0), (R = null))
          : S === N &&
            ((T = !0), (R = E.route.hydrateFallbackElement || null))));
    let B = i.concat(p.slice(0, N + 1)),
      H = () => {
        let I;
        return (
          U
            ? (I = O)
            : T
            ? (I = R)
            : E.route.Component
            ? (I = F.createElement(E.route.Component, null))
            : E.route.element
            ? (I = E.route.element)
            : (I = w),
          F.createElement(ly, {
            match: E,
            routeContext: { outlet: w, matches: B, isDataRoute: o != null },
            children: I,
          })
        );
      };
    return o && (E.route.ErrorBoundary || E.route.errorElement || N === 0)
      ? F.createElement(ry, {
          location: o.location,
          revalidation: o.revalidation,
          component: O,
          error: U,
          children: H(),
          routeContext: { outlet: null, matches: B, isDataRoute: !0 },
        })
      : H();
  }, null);
}
var jd = (function (r) {
    return (
      (r.UseBlocker = "useBlocker"),
      (r.UseRevalidator = "useRevalidator"),
      (r.UseNavigateStable = "useNavigate"),
      r
    );
  })(jd || {}),
  Pd = (function (r) {
    return (
      (r.UseBlocker = "useBlocker"),
      (r.UseLoaderData = "useLoaderData"),
      (r.UseActionData = "useActionData"),
      (r.UseRouteError = "useRouteError"),
      (r.UseNavigation = "useNavigation"),
      (r.UseRouteLoaderData = "useRouteLoaderData"),
      (r.UseMatches = "useMatches"),
      (r.UseRevalidator = "useRevalidator"),
      (r.UseNavigateStable = "useNavigate"),
      (r.UseRouteId = "useRouteId"),
      r
    );
  })(Pd || {});
function oy(r) {
  let i = F.useContext(Eu);
  return i || Ne(!1), i;
}
function sy(r) {
  let i = F.useContext(Xm);
  return i || Ne(!1), i;
}
function uy(r) {
  let i = F.useContext(Mn);
  return i || Ne(!1), i;
}
function Nd(r) {
  let i = uy(),
    o = i.matches[i.matches.length - 1];
  return o.route.id || Ne(!1), o.route.id;
}
function ay() {
  var r;
  let i = F.useContext(_d),
    o = sy(),
    u = Nd();
  return i !== void 0 ? i : (r = o.errors) == null ? void 0 : r[u];
}
function cy() {
  let { router: r } = oy(jd.UseNavigateStable),
    i = Nd(Pd.UseNavigateStable),
    o = F.useRef(!1);
  return (
    Cd(() => {
      o.current = !0;
    }),
    F.useCallback(
      function (c, f) {
        f === void 0 && (f = {}),
          o.current &&
            (typeof c == "number"
              ? r.navigate(c)
              : r.navigate(c, nl({ fromRouteId: i }, f)));
      },
      [r, i]
    )
  );
}
const If = {};
function fy(r, i, o) {
  If[r] || (If[r] = !0);
}
function ou(r) {
  Ne(!1);
}
function dy(r) {
  let {
    basename: i = "/",
    children: o = null,
    location: u,
    navigationType: c = cn.Pop,
    navigator: f,
    static: p = !1,
    future: m,
  } = r;
  ol() && Ne(!1);
  let y = i.replace(/^\/*/, "/"),
    S = F.useMemo(
      () => ({
        basename: y,
        navigator: f,
        static: p,
        future: nl({ v7_relativeSplatPath: !1 }, m),
      }),
      [y, m, f, p]
    );
  typeof u == "string" && (u = ar(u));
  let {
      pathname: w = "/",
      search: E = "",
      hash: N = "",
      state: U = null,
      key: T = "default",
    } = u,
    O = F.useMemo(() => {
      let R = xu(w, y);
      return R == null
        ? null
        : {
            location: { pathname: R, search: E, hash: N, state: U, key: T },
            navigationType: c,
          };
    }, [y, w, E, N, U, T, c]);
  return O == null
    ? null
    : F.createElement(
        Ln.Provider,
        { value: S },
        F.createElement(zi.Provider, { children: o, value: O })
      );
}
function py(r) {
  let { children: i, location: o } = r;
  return bm(su(i), o);
}
new Promise(() => {});
function su(r, i) {
  i === void 0 && (i = []);
  let o = [];
  return (
    F.Children.forEach(r, (u, c) => {
      if (!F.isValidElement(u)) return;
      let f = [...i, c];
      if (u.type === F.Fragment) {
        o.push.apply(o, su(u.props.children, f));
        return;
      }
      u.type !== ou && Ne(!1), !u.props.index || !u.props.children || Ne(!1);
      let p = {
        id: u.props.id || f.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        loader: u.props.loader,
        action: u.props.action,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.ErrorBoundary != null || u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      u.props.children && (p.children = su(u.props.children, f)), o.push(p);
    }),
    o
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o)
              Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
          }
          return r;
        }),
    uu.apply(this, arguments)
  );
}
function hy(r, i) {
  if (r == null) return {};
  var o = {},
    u = Object.keys(r),
    c,
    f;
  for (f = 0; f < u.length; f++)
    (c = u[f]), !(i.indexOf(c) >= 0) && (o[c] = r[c]);
  return o;
}
function my(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function yy(r, i) {
  return r.button === 0 && (!i || i === "_self") && !my(r);
}
const gy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  vy = "6";
try {
  window.__reactRouterVersion = vy;
} catch {}
const wy = "startTransition",
  Uf = gm[wy];
function Sy(r) {
  let { basename: i, children: o, future: u, window: c } = r,
    f = F.useRef();
  f.current == null && (f.current = km({ window: c, v5Compat: !0 }));
  let p = f.current,
    [m, y] = F.useState({ action: p.action, location: p.location }),
    { v7_startTransition: S } = u || {},
    w = F.useCallback(
      (E) => {
        S && Uf ? Uf(() => y(E)) : y(E);
      },
      [y, S]
    );
  return (
    F.useLayoutEffect(() => p.listen(w), [p, w]),
    F.createElement(dy, {
      basename: i,
      children: o,
      location: m.location,
      navigationType: m.action,
      navigator: p,
      future: u,
    })
  );
}
const xy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ey = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ir = F.forwardRef(function (i, o) {
    let {
        onClick: u,
        relative: c,
        reloadDocument: f,
        replace: p,
        state: m,
        target: y,
        to: S,
        preventScrollReset: w,
        unstable_viewTransition: E,
      } = i,
      N = hy(i, gy),
      { basename: U } = F.useContext(Ln),
      T,
      O = !1;
    if (typeof S == "string" && Ey.test(S) && ((T = S), xy))
      try {
        let I = new URL(window.location.href),
          V = S.startsWith("//") ? new URL(I.protocol + S) : new URL(S),
          X = xu(V.pathname, U);
        V.origin === I.origin && X != null
          ? (S = X + V.search + V.hash)
          : (O = !0);
      } catch {}
    let R = Gm(S, { relative: c }),
      B = ky(S, {
        replace: p,
        state: m,
        target: y,
        preventScrollReset: w,
        relative: c,
        unstable_viewTransition: E,
      });
    function H(I) {
      u && u(I), I.defaultPrevented || B(I);
    }
    return F.createElement(
      "a",
      uu({}, N, { href: T || R, onClick: O || f ? u : H, ref: o, target: y })
    );
  });
var Bf;
(function (r) {
  (r.UseScrollRestoration = "useScrollRestoration"),
    (r.UseSubmit = "useSubmit"),
    (r.UseSubmitFetcher = "useSubmitFetcher"),
    (r.UseFetcher = "useFetcher"),
    (r.useViewTransitionState = "useViewTransitionState");
})(Bf || (Bf = {}));
var $f;
(function (r) {
  (r.UseFetcher = "useFetcher"),
    (r.UseFetchers = "useFetchers"),
    (r.UseScrollRestoration = "useScrollRestoration");
})($f || ($f = {}));
function ky(r, i) {
  let {
      target: o,
      replace: u,
      state: c,
      preventScrollReset: f,
      relative: p,
      unstable_viewTransition: m,
    } = i === void 0 ? {} : i,
    y = Ym(),
    S = Di(),
    w = Rd(r, { relative: p });
  return F.useCallback(
    (E) => {
      if (yy(E, o)) {
        E.preventDefault();
        let N = u !== void 0 ? u : Ci(S) === Ci(w);
        y(r, {
          replace: N,
          state: c,
          preventScrollReset: f,
          relative: p,
          unstable_viewTransition: m,
        });
      }
    },
    [S, y, w, u, c, o, r, f, p, m]
  );
}
const _y = "./assets/tea-1-0cTs4m7N.png",
  Cy = "_header_12m5k_3",
  Ry = { header: Cy },
  jy = () =>
    g.jsx(g.Fragment, {
      children: g.jsxs("div", {
        className: Ry.header,
        children: [
          g.jsx("img", { src: _y, alt: "" }),
          g.jsxs("div", {
            children: [
              g.jsx("h1", { children: "قرعه کشی ماهیانه گلستان" }),
              g.jsx("h2", {
                children: "قرعه کشی ماهیانه مصرف کنندگان چای گلستان",
              }),
              g.jsx("p", {
                children:
                  "هر یک از مصرف کنندگان محصولات چای گلستان میتوانند با ارسال کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی های ماهیانه سال 1403 شرکت کنند. نگهراری از بسته بندی محصول برای اهدای جایزه الزامی است.",
              }),
              g.jsx("a", { href: "#", children: "اطلاعات بیشتر" }),
            ],
          }),
        ],
      }),
    }),
  Py = "_title_phy02_3",
  Ny = { title: Py };
function Td(r, i) {
  return function () {
    return r.apply(i, arguments);
  };
}
const { toString: Ty } = Object.prototype,
  { getPrototypeOf: ku } = Object,
  Fi = ((r) => (i) => {
    const o = Ty.call(i);
    return r[o] || (r[o] = o.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _t = (r) => ((r = r.toLowerCase()), (i) => Fi(i) === r),
  Ai = (r) => (i) => typeof i === r,
  { isArray: cr } = Array,
  rl = Ai("undefined");
function Oy(r) {
  return (
    r !== null &&
    !rl(r) &&
    r.constructor !== null &&
    !rl(r.constructor) &&
    it(r.constructor.isBuffer) &&
    r.constructor.isBuffer(r)
  );
}
const Od = _t("ArrayBuffer");
function Ly(r) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(r))
      : (i = r && r.buffer && Od(r.buffer)),
    i
  );
}
const My = Ai("string"),
  it = Ai("function"),
  Ld = Ai("number"),
  Ii = (r) => r !== null && typeof r == "object",
  zy = (r) => r === !0 || r === !1,
  xi = (r) => {
    if (Fi(r) !== "object") return !1;
    const i = ku(r);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    );
  },
  Dy = _t("Date"),
  Fy = _t("File"),
  Ay = _t("Blob"),
  Iy = _t("FileList"),
  Uy = (r) => Ii(r) && it(r.pipe),
  By = (r) => {
    let i;
    return (
      r &&
      ((typeof FormData == "function" && r instanceof FormData) ||
        (it(r.append) &&
          ((i = Fi(r)) === "formdata" ||
            (i === "object" &&
              it(r.toString) &&
              r.toString() === "[object FormData]"))))
    );
  },
  $y = _t("URLSearchParams"),
  [Hy, Wy, Vy, Qy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    _t
  ),
  Ky = (r) =>
    r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function sl(r, i, { allOwnKeys: o = !1 } = {}) {
  if (r === null || typeof r > "u") return;
  let u, c;
  if ((typeof r != "object" && (r = [r]), cr(r)))
    for (u = 0, c = r.length; u < c; u++) i.call(null, r[u], u, r);
  else {
    const f = o ? Object.getOwnPropertyNames(r) : Object.keys(r),
      p = f.length;
    let m;
    for (u = 0; u < p; u++) (m = f[u]), i.call(null, r[m], m, r);
  }
}
function Md(r, i) {
  i = i.toLowerCase();
  const o = Object.keys(r);
  let u = o.length,
    c;
  for (; u-- > 0; ) if (((c = o[u]), i === c.toLowerCase())) return c;
  return null;
}
const jn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  zd = (r) => !rl(r) && r !== jn;
function au() {
  const { caseless: r } = (zd(this) && this) || {},
    i = {},
    o = (u, c) => {
      const f = (r && Md(i, c)) || c;
      xi(i[f]) && xi(u)
        ? (i[f] = au(i[f], u))
        : xi(u)
        ? (i[f] = au({}, u))
        : cr(u)
        ? (i[f] = u.slice())
        : (i[f] = u);
    };
  for (let u = 0, c = arguments.length; u < c; u++)
    arguments[u] && sl(arguments[u], o);
  return i;
}
const qy = (r, i, o, { allOwnKeys: u } = {}) => (
    sl(
      i,
      (c, f) => {
        o && it(c) ? (r[f] = Td(c, o)) : (r[f] = c);
      },
      { allOwnKeys: u }
    ),
    r
  ),
  Jy = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
  Xy = (r, i, o, u) => {
    (r.prototype = Object.create(i.prototype, u)),
      (r.prototype.constructor = r),
      Object.defineProperty(r, "super", { value: i.prototype }),
      o && Object.assign(r.prototype, o);
  },
  Gy = (r, i, o, u) => {
    let c, f, p;
    const m = {};
    if (((i = i || {}), r == null)) return i;
    do {
      for (c = Object.getOwnPropertyNames(r), f = c.length; f-- > 0; )
        (p = c[f]), (!u || u(p, r, i)) && !m[p] && ((i[p] = r[p]), (m[p] = !0));
      r = o !== !1 && ku(r);
    } while (r && (!o || o(r, i)) && r !== Object.prototype);
    return i;
  },
  Yy = (r, i, o) => {
    (r = String(r)),
      (o === void 0 || o > r.length) && (o = r.length),
      (o -= i.length);
    const u = r.indexOf(i, o);
    return u !== -1 && u === o;
  },
  Zy = (r) => {
    if (!r) return null;
    if (cr(r)) return r;
    let i = r.length;
    if (!Ld(i)) return null;
    const o = new Array(i);
    for (; i-- > 0; ) o[i] = r[i];
    return o;
  },
  by = (
    (r) => (i) =>
      r && i instanceof r
  )(typeof Uint8Array < "u" && ku(Uint8Array)),
  eg = (r, i) => {
    const u = (r && r[Symbol.iterator]).call(r);
    let c;
    for (; (c = u.next()) && !c.done; ) {
      const f = c.value;
      i.call(r, f[0], f[1]);
    }
  },
  tg = (r, i) => {
    let o;
    const u = [];
    for (; (o = r.exec(i)) !== null; ) u.push(o);
    return u;
  },
  ng = _t("HTMLFormElement"),
  rg = (r) =>
    r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (o, u, c) {
      return u.toUpperCase() + c;
    }),
  Hf = (
    ({ hasOwnProperty: r }) =>
    (i, o) =>
      r.call(i, o)
  )(Object.prototype),
  lg = _t("RegExp"),
  Dd = (r, i) => {
    const o = Object.getOwnPropertyDescriptors(r),
      u = {};
    sl(o, (c, f) => {
      let p;
      (p = i(c, f, r)) !== !1 && (u[f] = p || c);
    }),
      Object.defineProperties(r, u);
  },
  ig = (r) => {
    Dd(r, (i, o) => {
      if (it(r) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
        return !1;
      const u = r[o];
      if (it(u)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + o + "'");
          });
      }
    });
  },
  og = (r, i) => {
    const o = {},
      u = (c) => {
        c.forEach((f) => {
          o[f] = !0;
        });
      };
    return cr(r) ? u(r) : u(String(r).split(i)), o;
  },
  sg = () => {},
  ug = (r, i) => (r != null && Number.isFinite((r = +r)) ? r : i);
function ag(r) {
  return !!(
    r &&
    it(r.append) &&
    r[Symbol.toStringTag] === "FormData" &&
    r[Symbol.iterator]
  );
}
const cg = (r) => {
    const i = new Array(10),
      o = (u, c) => {
        if (Ii(u)) {
          if (i.indexOf(u) >= 0) return;
          if (!("toJSON" in u)) {
            i[c] = u;
            const f = cr(u) ? [] : {};
            return (
              sl(u, (p, m) => {
                const y = o(p, c + 1);
                !rl(y) && (f[m] = y);
              }),
              (i[c] = void 0),
              f
            );
          }
        }
        return u;
      };
    return o(r, 0);
  },
  fg = _t("AsyncFunction"),
  dg = (r) => r && (Ii(r) || it(r)) && it(r.then) && it(r.catch),
  Fd = ((r, i) =>
    r
      ? setImmediate
      : i
      ? ((o, u) => (
          jn.addEventListener(
            "message",
            ({ source: c, data: f }) => {
              c === jn && f === o && u.length && u.shift()();
            },
            !1
          ),
          (c) => {
            u.push(c), jn.postMessage(o, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (o) => setTimeout(o))(
    typeof setImmediate == "function",
    it(jn.postMessage)
  ),
  pg =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(jn)
      : (typeof process < "u" && process.nextTick) || Fd,
  P = {
    isArray: cr,
    isArrayBuffer: Od,
    isBuffer: Oy,
    isFormData: By,
    isArrayBufferView: Ly,
    isString: My,
    isNumber: Ld,
    isBoolean: zy,
    isObject: Ii,
    isPlainObject: xi,
    isReadableStream: Hy,
    isRequest: Wy,
    isResponse: Vy,
    isHeaders: Qy,
    isUndefined: rl,
    isDate: Dy,
    isFile: Fy,
    isBlob: Ay,
    isRegExp: lg,
    isFunction: it,
    isStream: Uy,
    isURLSearchParams: $y,
    isTypedArray: by,
    isFileList: Iy,
    forEach: sl,
    merge: au,
    extend: qy,
    trim: Ky,
    stripBOM: Jy,
    inherits: Xy,
    toFlatObject: Gy,
    kindOf: Fi,
    kindOfTest: _t,
    endsWith: Yy,
    toArray: Zy,
    forEachEntry: eg,
    matchAll: tg,
    isHTMLForm: ng,
    hasOwnProperty: Hf,
    hasOwnProp: Hf,
    reduceDescriptors: Dd,
    freezeMethods: ig,
    toObjectSet: og,
    toCamelCase: rg,
    noop: sg,
    toFiniteNumber: ug,
    findKey: Md,
    global: jn,
    isContextDefined: zd,
    isSpecCompliantForm: ag,
    toJSONObject: cg,
    isAsyncFn: fg,
    isThenable: dg,
    setImmediate: Fd,
    asap: pg,
  };
function re(r, i, o, u, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = r),
    (this.name = "AxiosError"),
    i && (this.code = i),
    o && (this.config = o),
    u && (this.request = u),
    c && ((this.response = c), (this.status = c.status ? c.status : null));
}
P.inherits(re, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ad = re.prototype,
  Id = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((r) => {
  Id[r] = { value: r };
});
Object.defineProperties(re, Id);
Object.defineProperty(Ad, "isAxiosError", { value: !0 });
re.from = (r, i, o, u, c, f) => {
  const p = Object.create(Ad);
  return (
    P.toFlatObject(
      r,
      p,
      function (y) {
        return y !== Error.prototype;
      },
      (m) => m !== "isAxiosError"
    ),
    re.call(p, r.message, i, o, u, c),
    (p.cause = r),
    (p.name = r.name),
    f && Object.assign(p, f),
    p
  );
};
const hg = null;
function cu(r) {
  return P.isPlainObject(r) || P.isArray(r);
}
function Ud(r) {
  return P.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function Wf(r, i, o) {
  return r
    ? r
        .concat(i)
        .map(function (c, f) {
          return (c = Ud(c)), !o && f ? "[" + c + "]" : c;
        })
        .join(o ? "." : "")
    : i;
}
function mg(r) {
  return P.isArray(r) && !r.some(cu);
}
const yg = P.toFlatObject(P, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function Ui(r, i, o) {
  if (!P.isObject(r)) throw new TypeError("target must be an object");
  (i = i || new FormData()),
    (o = P.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (O, R) {
        return !P.isUndefined(R[O]);
      }
    ));
  const u = o.metaTokens,
    c = o.visitor || w,
    f = o.dots,
    p = o.indexes,
    y = (o.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(i);
  if (!P.isFunction(c)) throw new TypeError("visitor must be a function");
  function S(T) {
    if (T === null) return "";
    if (P.isDate(T)) return T.toISOString();
    if (!y && P.isBlob(T))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(T) || P.isTypedArray(T)
      ? y && typeof Blob == "function"
        ? new Blob([T])
        : Buffer.from(T)
      : T;
  }
  function w(T, O, R) {
    let B = T;
    if (T && !R && typeof T == "object") {
      if (P.endsWith(O, "{}"))
        (O = u ? O : O.slice(0, -2)), (T = JSON.stringify(T));
      else if (
        (P.isArray(T) && mg(T)) ||
        ((P.isFileList(T) || P.endsWith(O, "[]")) && (B = P.toArray(T)))
      )
        return (
          (O = Ud(O)),
          B.forEach(function (I, V) {
            !(P.isUndefined(I) || I === null) &&
              i.append(
                p === !0 ? Wf([O], V, f) : p === null ? O : O + "[]",
                S(I)
              );
          }),
          !1
        );
    }
    return cu(T) ? !0 : (i.append(Wf(R, O, f), S(T)), !1);
  }
  const E = [],
    N = Object.assign(yg, {
      defaultVisitor: w,
      convertValue: S,
      isVisitable: cu,
    });
  function U(T, O) {
    if (!P.isUndefined(T)) {
      if (E.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      E.push(T),
        P.forEach(T, function (B, H) {
          (!(P.isUndefined(B) || B === null) &&
            c.call(i, B, P.isString(H) ? H.trim() : H, O, N)) === !0 &&
            U(B, O ? O.concat(H) : [H]);
        }),
        E.pop();
    }
  }
  if (!P.isObject(r)) throw new TypeError("data must be an object");
  return U(r), i;
}
function Vf(r) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function (u) {
    return i[u];
  });
}
function _u(r, i) {
  (this._pairs = []), r && Ui(r, this, i);
}
const Bd = _u.prototype;
Bd.append = function (i, o) {
  this._pairs.push([i, o]);
};
Bd.toString = function (i) {
  const o = i
    ? function (u) {
        return i.call(this, u, Vf);
      }
    : Vf;
  return this._pairs
    .map(function (c) {
      return o(c[0]) + "=" + o(c[1]);
    }, "")
    .join("&");
};
function gg(r) {
  return encodeURIComponent(r)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function $d(r, i, o) {
  if (!i) return r;
  const u = (o && o.encode) || gg;
  P.isFunction(o) && (o = { serialize: o });
  const c = o && o.serialize;
  let f;
  if (
    (c
      ? (f = c(i, o))
      : (f = P.isURLSearchParams(i) ? i.toString() : new _u(i, o).toString(u)),
    f)
  ) {
    const p = r.indexOf("#");
    p !== -1 && (r = r.slice(0, p)),
      (r += (r.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return r;
}
class Qf {
  constructor() {
    this.handlers = [];
  }
  use(i, o, u) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: o,
        synchronous: u ? u.synchronous : !1,
        runWhen: u ? u.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    P.forEach(this.handlers, function (u) {
      u !== null && i(u);
    });
  }
}
const Hd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  vg = typeof URLSearchParams < "u" ? URLSearchParams : _u,
  wg = typeof FormData < "u" ? FormData : null,
  Sg = typeof Blob < "u" ? Blob : null,
  xg = {
    isBrowser: !0,
    classes: { URLSearchParams: vg, FormData: wg, Blob: Sg },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Cu = typeof window < "u" && typeof document < "u",
  fu = (typeof navigator == "object" && navigator) || void 0,
  Eg =
    Cu &&
    (!fu || ["ReactNative", "NativeScript", "NS"].indexOf(fu.product) < 0),
  kg =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  _g = (Cu && window.location.href) || "http://localhost",
  Cg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Cu,
        hasStandardBrowserEnv: Eg,
        hasStandardBrowserWebWorkerEnv: kg,
        navigator: fu,
        origin: _g,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  He = { ...Cg, ...xg };
function Rg(r, i) {
  return Ui(
    r,
    new He.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (o, u, c, f) {
          return He.isNode && P.isBuffer(o)
            ? (this.append(u, o.toString("base64")), !1)
            : f.defaultVisitor.apply(this, arguments);
        },
      },
      i
    )
  );
}
function jg(r) {
  return P.matchAll(/\w+|\[(\w*)]/g, r).map((i) =>
    i[0] === "[]" ? "" : i[1] || i[0]
  );
}
function Pg(r) {
  const i = {},
    o = Object.keys(r);
  let u;
  const c = o.length;
  let f;
  for (u = 0; u < c; u++) (f = o[u]), (i[f] = r[f]);
  return i;
}
function Wd(r) {
  function i(o, u, c, f) {
    let p = o[f++];
    if (p === "__proto__") return !0;
    const m = Number.isFinite(+p),
      y = f >= o.length;
    return (
      (p = !p && P.isArray(c) ? c.length : p),
      y
        ? (P.hasOwnProp(c, p) ? (c[p] = [c[p], u]) : (c[p] = u), !m)
        : ((!c[p] || !P.isObject(c[p])) && (c[p] = []),
          i(o, u, c[p], f) && P.isArray(c[p]) && (c[p] = Pg(c[p])),
          !m)
    );
  }
  if (P.isFormData(r) && P.isFunction(r.entries)) {
    const o = {};
    return (
      P.forEachEntry(r, (u, c) => {
        i(jg(u), c, o, 0);
      }),
      o
    );
  }
  return null;
}
function Ng(r, i, o) {
  if (P.isString(r))
    try {
      return (i || JSON.parse)(r), P.trim(r);
    } catch (u) {
      if (u.name !== "SyntaxError") throw u;
    }
  return (o || JSON.stringify)(r);
}
const ul = {
  transitional: Hd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, o) {
      const u = o.getContentType() || "",
        c = u.indexOf("application/json") > -1,
        f = P.isObject(i);
      if ((f && P.isHTMLForm(i) && (i = new FormData(i)), P.isFormData(i)))
        return c ? JSON.stringify(Wd(i)) : i;
      if (
        P.isArrayBuffer(i) ||
        P.isBuffer(i) ||
        P.isStream(i) ||
        P.isFile(i) ||
        P.isBlob(i) ||
        P.isReadableStream(i)
      )
        return i;
      if (P.isArrayBufferView(i)) return i.buffer;
      if (P.isURLSearchParams(i))
        return (
          o.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          i.toString()
        );
      let m;
      if (f) {
        if (u.indexOf("application/x-www-form-urlencoded") > -1)
          return Rg(i, this.formSerializer).toString();
        if ((m = P.isFileList(i)) || u.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return Ui(
            m ? { "files[]": i } : i,
            y && new y(),
            this.formSerializer
          );
        }
      }
      return f || c ? (o.setContentType("application/json", !1), Ng(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const o = this.transitional || ul.transitional,
        u = o && o.forcedJSONParsing,
        c = this.responseType === "json";
      if (P.isResponse(i) || P.isReadableStream(i)) return i;
      if (i && P.isString(i) && ((u && !this.responseType) || c)) {
        const p = !(o && o.silentJSONParsing) && c;
        try {
          return JSON.parse(i);
        } catch (m) {
          if (p)
            throw m.name === "SyntaxError"
              ? re.from(m, re.ERR_BAD_RESPONSE, this, null, this.response)
              : m;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: He.classes.FormData, Blob: He.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  ul.headers[r] = {};
});
const Tg = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Og = (r) => {
    const i = {};
    let o, u, c;
    return (
      r &&
        r
          .split(
            `
`
          )
          .forEach(function (p) {
            (c = p.indexOf(":")),
              (o = p.substring(0, c).trim().toLowerCase()),
              (u = p.substring(c + 1).trim()),
              !(!o || (i[o] && Tg[o])) &&
                (o === "set-cookie"
                  ? i[o]
                    ? i[o].push(u)
                    : (i[o] = [u])
                  : (i[o] = i[o] ? i[o] + ", " + u : u));
          }),
      i
    );
  },
  Kf = Symbol("internals");
function Zr(r) {
  return r && String(r).trim().toLowerCase();
}
function Ei(r) {
  return r === !1 || r == null ? r : P.isArray(r) ? r.map(Ei) : String(r);
}
function Lg(r) {
  const i = Object.create(null),
    o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; (u = o.exec(r)); ) i[u[1]] = u[2];
  return i;
}
const Mg = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function qs(r, i, o, u, c) {
  if (P.isFunction(u)) return u.call(this, i, o);
  if ((c && (i = o), !!P.isString(i))) {
    if (P.isString(u)) return i.indexOf(u) !== -1;
    if (P.isRegExp(u)) return u.test(i);
  }
}
function zg(r) {
  return r
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, o, u) => o.toUpperCase() + u);
}
function Dg(r, i) {
  const o = P.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(r, u + o, {
      value: function (c, f, p) {
        return this[u].call(this, i, c, f, p);
      },
      configurable: !0,
    });
  });
}
let Ze = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, o, u) {
    const c = this;
    function f(m, y, S) {
      const w = Zr(y);
      if (!w) throw new Error("header name must be a non-empty string");
      const E = P.findKey(c, w);
      (!E || c[E] === void 0 || S === !0 || (S === void 0 && c[E] !== !1)) &&
        (c[E || y] = Ei(m));
    }
    const p = (m, y) => P.forEach(m, (S, w) => f(S, w, y));
    if (P.isPlainObject(i) || i instanceof this.constructor) p(i, o);
    else if (P.isString(i) && (i = i.trim()) && !Mg(i)) p(Og(i), o);
    else if (P.isHeaders(i)) for (const [m, y] of i.entries()) f(y, m, u);
    else i != null && f(o, i, u);
    return this;
  }
  get(i, o) {
    if (((i = Zr(i)), i)) {
      const u = P.findKey(this, i);
      if (u) {
        const c = this[u];
        if (!o) return c;
        if (o === !0) return Lg(c);
        if (P.isFunction(o)) return o.call(this, c, u);
        if (P.isRegExp(o)) return o.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, o) {
    if (((i = Zr(i)), i)) {
      const u = P.findKey(this, i);
      return !!(u && this[u] !== void 0 && (!o || qs(this, this[u], u, o)));
    }
    return !1;
  }
  delete(i, o) {
    const u = this;
    let c = !1;
    function f(p) {
      if (((p = Zr(p)), p)) {
        const m = P.findKey(u, p);
        m && (!o || qs(u, u[m], m, o)) && (delete u[m], (c = !0));
      }
    }
    return P.isArray(i) ? i.forEach(f) : f(i), c;
  }
  clear(i) {
    const o = Object.keys(this);
    let u = o.length,
      c = !1;
    for (; u--; ) {
      const f = o[u];
      (!i || qs(this, this[f], f, i, !0)) && (delete this[f], (c = !0));
    }
    return c;
  }
  normalize(i) {
    const o = this,
      u = {};
    return (
      P.forEach(this, (c, f) => {
        const p = P.findKey(u, f);
        if (p) {
          (o[p] = Ei(c)), delete o[f];
          return;
        }
        const m = i ? zg(f) : String(f).trim();
        m !== f && delete o[f], (o[m] = Ei(c)), (u[m] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const o = Object.create(null);
    return (
      P.forEach(this, (u, c) => {
        u != null && u !== !1 && (o[c] = i && P.isArray(u) ? u.join(", ") : u);
      }),
      o
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, o]) => i + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...o) {
    const u = new this(i);
    return o.forEach((c) => u.set(c)), u;
  }
  static accessor(i) {
    const u = (this[Kf] = this[Kf] = { accessors: {} }).accessors,
      c = this.prototype;
    function f(p) {
      const m = Zr(p);
      u[m] || (Dg(c, p), (u[m] = !0));
    }
    return P.isArray(i) ? i.forEach(f) : f(i), this;
  }
};
Ze.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(Ze.prototype, ({ value: r }, i) => {
  let o = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => r,
    set(u) {
      this[o] = u;
    },
  };
});
P.freezeMethods(Ze);
function Js(r, i) {
  const o = this || ul,
    u = i || o,
    c = Ze.from(u.headers);
  let f = u.data;
  return (
    P.forEach(r, function (m) {
      f = m.call(o, f, c.normalize(), i ? i.status : void 0);
    }),
    c.normalize(),
    f
  );
}
function Vd(r) {
  return !!(r && r.__CANCEL__);
}
function fr(r, i, o) {
  re.call(this, r ?? "canceled", re.ERR_CANCELED, i, o),
    (this.name = "CanceledError");
}
P.inherits(fr, re, { __CANCEL__: !0 });
function Qd(r, i, o) {
  const u = o.config.validateStatus;
  !o.status || !u || u(o.status)
    ? r(o)
    : i(
        new re(
          "Request failed with status code " + o.status,
          [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][
            Math.floor(o.status / 100) - 4
          ],
          o.config,
          o.request,
          o
        )
      );
}
function Fg(r) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return (i && i[1]) || "";
}
function Ag(r, i) {
  r = r || 10;
  const o = new Array(r),
    u = new Array(r);
  let c = 0,
    f = 0,
    p;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (y) {
      const S = Date.now(),
        w = u[f];
      p || (p = S), (o[c] = y), (u[c] = S);
      let E = f,
        N = 0;
      for (; E !== c; ) (N += o[E++]), (E = E % r);
      if (((c = (c + 1) % r), c === f && (f = (f + 1) % r), S - p < i)) return;
      const U = w && S - w;
      return U ? Math.round((N * 1e3) / U) : void 0;
    }
  );
}
function Ig(r, i) {
  let o = 0,
    u = 1e3 / i,
    c,
    f;
  const p = (S, w = Date.now()) => {
    (o = w), (c = null), f && (clearTimeout(f), (f = null)), r.apply(null, S);
  };
  return [
    (...S) => {
      const w = Date.now(),
        E = w - o;
      E >= u
        ? p(S, w)
        : ((c = S),
          f ||
            (f = setTimeout(() => {
              (f = null), p(c);
            }, u - E)));
    },
    () => c && p(c),
  ];
}
const Ri = (r, i, o = 3) => {
    let u = 0;
    const c = Ag(50, 250);
    return Ig((f) => {
      const p = f.loaded,
        m = f.lengthComputable ? f.total : void 0,
        y = p - u,
        S = c(y),
        w = p <= m;
      u = p;
      const E = {
        loaded: p,
        total: m,
        progress: m ? p / m : void 0,
        bytes: y,
        rate: S || void 0,
        estimated: S && m && w ? (m - p) / S : void 0,
        event: f,
        lengthComputable: m != null,
        [i ? "download" : "upload"]: !0,
      };
      r(E);
    }, o);
  },
  qf = (r, i) => {
    const o = r != null;
    return [(u) => i[0]({ lengthComputable: o, total: r, loaded: u }), i[1]];
  },
  Jf =
    (r) =>
    (...i) =>
      P.asap(() => r(...i)),
  Ug = He.hasStandardBrowserEnv
    ? ((r, i) => (o) => (
        (o = new URL(o, He.origin)),
        r.protocol === o.protocol &&
          r.host === o.host &&
          (i || r.port === o.port)
      ))(
        new URL(He.origin),
        He.navigator && /(msie|trident)/i.test(He.navigator.userAgent)
      )
    : () => !0,
  Bg = He.hasStandardBrowserEnv
    ? {
        write(r, i, o, u, c, f) {
          const p = [r + "=" + encodeURIComponent(i)];
          P.isNumber(o) && p.push("expires=" + new Date(o).toGMTString()),
            P.isString(u) && p.push("path=" + u),
            P.isString(c) && p.push("domain=" + c),
            f === !0 && p.push("secure"),
            (document.cookie = p.join("; "));
        },
        read(r) {
          const i = document.cookie.match(
            new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
          );
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove(r) {
          this.write(r, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function $g(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Hg(r, i) {
  return i ? r.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : r;
}
function Kd(r, i, o) {
  let u = !$g(i);
  return r && (u || o == !1) ? Hg(r, i) : i;
}
const Xf = (r) => (r instanceof Ze ? { ...r } : r);
function Nn(r, i) {
  i = i || {};
  const o = {};
  function u(S, w, E, N) {
    return P.isPlainObject(S) && P.isPlainObject(w)
      ? P.merge.call({ caseless: N }, S, w)
      : P.isPlainObject(w)
      ? P.merge({}, w)
      : P.isArray(w)
      ? w.slice()
      : w;
  }
  function c(S, w, E, N) {
    if (P.isUndefined(w)) {
      if (!P.isUndefined(S)) return u(void 0, S, E, N);
    } else return u(S, w, E, N);
  }
  function f(S, w) {
    if (!P.isUndefined(w)) return u(void 0, w);
  }
  function p(S, w) {
    if (P.isUndefined(w)) {
      if (!P.isUndefined(S)) return u(void 0, S);
    } else return u(void 0, w);
  }
  function m(S, w, E) {
    if (E in i) return u(S, w);
    if (E in r) return u(void 0, S);
  }
  const y = {
    url: f,
    method: f,
    data: f,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    withXSRFToken: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: m,
    headers: (S, w, E) => c(Xf(S), Xf(w), E, !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, r, i)), function (w) {
      const E = y[w] || c,
        N = E(r[w], i[w], w);
      (P.isUndefined(N) && E !== m) || (o[w] = N);
    }),
    o
  );
}
const qd = (r) => {
    const i = Nn({}, r);
    let {
      data: o,
      withXSRFToken: u,
      xsrfHeaderName: c,
      xsrfCookieName: f,
      headers: p,
      auth: m,
    } = i;
    (i.headers = p = Ze.from(p)),
      (i.url = $d(
        Kd(i.baseURL, i.url, i.allowAbsoluteUrls),
        r.params,
        r.paramsSerializer
      )),
      m &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (m.username || "") +
                ":" +
                (m.password ? unescape(encodeURIComponent(m.password)) : "")
            )
        );
    let y;
    if (P.isFormData(o)) {
      if (He.hasStandardBrowserEnv || He.hasStandardBrowserWebWorkerEnv)
        p.setContentType(void 0);
      else if ((y = p.getContentType()) !== !1) {
        const [S, ...w] = y
          ? y
              .split(";")
              .map((E) => E.trim())
              .filter(Boolean)
          : [];
        p.setContentType([S || "multipart/form-data", ...w].join("; "));
      }
    }
    if (
      He.hasStandardBrowserEnv &&
      (u && P.isFunction(u) && (u = u(i)), u || (u !== !1 && Ug(i.url)))
    ) {
      const S = c && f && Bg.read(f);
      S && p.set(c, S);
    }
    return i;
  },
  Wg = typeof XMLHttpRequest < "u",
  Vg =
    Wg &&
    function (r) {
      return new Promise(function (o, u) {
        const c = qd(r);
        let f = c.data;
        const p = Ze.from(c.headers).normalize();
        let { responseType: m, onUploadProgress: y, onDownloadProgress: S } = c,
          w,
          E,
          N,
          U,
          T;
        function O() {
          U && U(),
            T && T(),
            c.cancelToken && c.cancelToken.unsubscribe(w),
            c.signal && c.signal.removeEventListener("abort", w);
        }
        let R = new XMLHttpRequest();
        R.open(c.method.toUpperCase(), c.url, !0), (R.timeout = c.timeout);
        function B() {
          if (!R) return;
          const I = Ze.from(
              "getAllResponseHeaders" in R && R.getAllResponseHeaders()
            ),
            X = {
              data:
                !m || m === "text" || m === "json"
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: I,
              config: r,
              request: R,
            };
          Qd(
            function (oe) {
              o(oe), O();
            },
            function (oe) {
              u(oe), O();
            },
            X
          ),
            (R = null);
        }
        "onloadend" in R
          ? (R.onloadend = B)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf("file:") === 0)) ||
                setTimeout(B);
            }),
          (R.onabort = function () {
            R &&
              (u(new re("Request aborted", re.ECONNABORTED, r, R)), (R = null));
          }),
          (R.onerror = function () {
            u(new re("Network Error", re.ERR_NETWORK, r, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let V = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const X = c.transitional || Hd;
            c.timeoutErrorMessage && (V = c.timeoutErrorMessage),
              u(
                new re(
                  V,
                  X.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
                  r,
                  R
                )
              ),
              (R = null);
          }),
          f === void 0 && p.setContentType(null),
          "setRequestHeader" in R &&
            P.forEach(p.toJSON(), function (V, X) {
              R.setRequestHeader(X, V);
            }),
          P.isUndefined(c.withCredentials) ||
            (R.withCredentials = !!c.withCredentials),
          m && m !== "json" && (R.responseType = c.responseType),
          S && (([N, T] = Ri(S, !0)), R.addEventListener("progress", N)),
          y &&
            R.upload &&
            (([E, U] = Ri(y)),
            R.upload.addEventListener("progress", E),
            R.upload.addEventListener("loadend", U)),
          (c.cancelToken || c.signal) &&
            ((w = (I) => {
              R &&
                (u(!I || I.type ? new fr(null, r, R) : I),
                R.abort(),
                (R = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(w),
            c.signal &&
              (c.signal.aborted ? w() : c.signal.addEventListener("abort", w)));
        const H = Fg(c.url);
        if (H && He.protocols.indexOf(H) === -1) {
          u(new re("Unsupported protocol " + H + ":", re.ERR_BAD_REQUEST, r));
          return;
        }
        R.send(f || null);
      });
    },
  Qg = (r, i) => {
    const { length: o } = (r = r ? r.filter(Boolean) : []);
    if (i || o) {
      let u = new AbortController(),
        c;
      const f = function (S) {
        if (!c) {
          (c = !0), m();
          const w = S instanceof Error ? S : this.reason;
          u.abort(
            w instanceof re ? w : new fr(w instanceof Error ? w.message : w)
          );
        }
      };
      let p =
        i &&
        setTimeout(() => {
          (p = null), f(new re(`timeout ${i} of ms exceeded`, re.ETIMEDOUT));
        }, i);
      const m = () => {
        r &&
          (p && clearTimeout(p),
          (p = null),
          r.forEach((S) => {
            S.unsubscribe
              ? S.unsubscribe(f)
              : S.removeEventListener("abort", f);
          }),
          (r = null));
      };
      r.forEach((S) => S.addEventListener("abort", f));
      const { signal: y } = u;
      return (y.unsubscribe = () => P.asap(m)), y;
    }
  },
  Kg = function* (r, i) {
    let o = r.byteLength;
    if (o < i) {
      yield r;
      return;
    }
    let u = 0,
      c;
    for (; u < o; ) (c = u + i), yield r.slice(u, c), (u = c);
  },
  qg = async function* (r, i) {
    for await (const o of Jg(r)) yield* Kg(o, i);
  },
  Jg = async function* (r) {
    if (r[Symbol.asyncIterator]) {
      yield* r;
      return;
    }
    const i = r.getReader();
    try {
      for (;;) {
        const { done: o, value: u } = await i.read();
        if (o) break;
        yield u;
      }
    } finally {
      await i.cancel();
    }
  },
  Gf = (r, i, o, u) => {
    const c = qg(r, i);
    let f = 0,
      p,
      m = (y) => {
        p || ((p = !0), u && u(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: S, value: w } = await c.next();
            if (S) {
              m(), y.close();
              return;
            }
            let E = w.byteLength;
            if (o) {
              let N = (f += E);
              o(N);
            }
            y.enqueue(new Uint8Array(w));
          } catch (S) {
            throw (m(S), S);
          }
        },
        cancel(y) {
          return m(y), c.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Bi =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Jd = Bi && typeof ReadableStream == "function",
  Xg =
    Bi &&
    (typeof TextEncoder == "function"
      ? (
          (r) => (i) =>
            r.encode(i)
        )(new TextEncoder())
      : async (r) => new Uint8Array(await new Response(r).arrayBuffer())),
  Xd = (r, ...i) => {
    try {
      return !!r(...i);
    } catch {
      return !1;
    }
  },
  Gg =
    Jd &&
    Xd(() => {
      let r = !1;
      const i = new Request(He.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (r = !0), "half";
        },
      }).headers.has("Content-Type");
      return r && !i;
    }),
  Yf = 64 * 1024,
  du = Jd && Xd(() => P.isReadableStream(new Response("").body)),
  ji = { stream: du && ((r) => r.body) };
Bi &&
  ((r) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !ji[i] &&
        (ji[i] = P.isFunction(r[i])
          ? (o) => o[i]()
          : (o, u) => {
              throw new re(
                `Response type '${i}' is not supported`,
                re.ERR_NOT_SUPPORT,
                u
              );
            });
    });
  })(new Response());
const Yg = async (r) => {
    if (r == null) return 0;
    if (P.isBlob(r)) return r.size;
    if (P.isSpecCompliantForm(r))
      return (
        await new Request(He.origin, { method: "POST", body: r }).arrayBuffer()
      ).byteLength;
    if (P.isArrayBufferView(r) || P.isArrayBuffer(r)) return r.byteLength;
    if ((P.isURLSearchParams(r) && (r = r + ""), P.isString(r)))
      return (await Xg(r)).byteLength;
  },
  Zg = async (r, i) => {
    const o = P.toFiniteNumber(r.getContentLength());
    return o ?? Yg(i);
  },
  bg =
    Bi &&
    (async (r) => {
      let {
        url: i,
        method: o,
        data: u,
        signal: c,
        cancelToken: f,
        timeout: p,
        onDownloadProgress: m,
        onUploadProgress: y,
        responseType: S,
        headers: w,
        withCredentials: E = "same-origin",
        fetchOptions: N,
      } = qd(r);
      S = S ? (S + "").toLowerCase() : "text";
      let U = Qg([c, f && f.toAbortSignal()], p),
        T;
      const O =
        U &&
        U.unsubscribe &&
        (() => {
          U.unsubscribe();
        });
      let R;
      try {
        if (
          y &&
          Gg &&
          o !== "get" &&
          o !== "head" &&
          (R = await Zg(w, u)) !== 0
        ) {
          let X = new Request(i, { method: "POST", body: u, duplex: "half" }),
            b;
          if (
            (P.isFormData(u) &&
              (b = X.headers.get("content-type")) &&
              w.setContentType(b),
            X.body)
          ) {
            const [oe, ne] = qf(R, Ri(Jf(y)));
            u = Gf(X.body, Yf, oe, ne);
          }
        }
        P.isString(E) || (E = E ? "include" : "omit");
        const B = "credentials" in Request.prototype;
        T = new Request(i, {
          ...N,
          signal: U,
          method: o.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: u,
          duplex: "half",
          credentials: B ? E : void 0,
        });
        let H = await fetch(T);
        const I = du && (S === "stream" || S === "response");
        if (du && (m || (I && O))) {
          const X = {};
          ["status", "statusText", "headers"].forEach((je) => {
            X[je] = H[je];
          });
          const b = P.toFiniteNumber(H.headers.get("content-length")),
            [oe, ne] = (m && qf(b, Ri(Jf(m), !0))) || [];
          H = new Response(
            Gf(H.body, Yf, oe, () => {
              ne && ne(), O && O();
            }),
            X
          );
        }
        S = S || "text";
        let V = await ji[P.findKey(ji, S) || "text"](H, r);
        return (
          !I && O && O(),
          await new Promise((X, b) => {
            Qd(X, b, {
              data: V,
              headers: Ze.from(H.headers),
              status: H.status,
              statusText: H.statusText,
              config: r,
              request: T,
            });
          })
        );
      } catch (B) {
        throw (
          (O && O(),
          B && B.name === "TypeError" && /fetch/i.test(B.message)
            ? Object.assign(new re("Network Error", re.ERR_NETWORK, r, T), {
                cause: B.cause || B,
              })
            : re.from(B, B && B.code, r, T))
        );
      }
    }),
  pu = { http: hg, xhr: Vg, fetch: bg };
P.forEach(pu, (r, i) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: i });
    } catch {}
    Object.defineProperty(r, "adapterName", { value: i });
  }
});
const Zf = (r) => `- ${r}`,
  ev = (r) => P.isFunction(r) || r === null || r === !1,
  Gd = {
    getAdapter: (r) => {
      r = P.isArray(r) ? r : [r];
      const { length: i } = r;
      let o, u;
      const c = {};
      for (let f = 0; f < i; f++) {
        o = r[f];
        let p;
        if (
          ((u = o),
          !ev(o) && ((u = pu[(p = String(o)).toLowerCase()]), u === void 0))
        )
          throw new re(`Unknown adapter '${p}'`);
        if (u) break;
        c[p || "#" + f] = u;
      }
      if (!u) {
        const f = Object.entries(c).map(
          ([m, y]) =>
            `adapter ${m} ` +
            (y === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = i
          ? f.length > 1
            ? `since :
` +
              f.map(Zf).join(`
`)
            : " " + Zf(f[0])
          : "as no adapter specified";
        throw new re(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return u;
    },
    adapters: pu,
  };
function Xs(r) {
  if (
    (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
  )
    throw new fr(null, r);
}
function bf(r) {
  return (
    Xs(r),
    (r.headers = Ze.from(r.headers)),
    (r.data = Js.call(r, r.transformRequest)),
    ["post", "put", "patch"].indexOf(r.method) !== -1 &&
      r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Gd.getAdapter(r.adapter || ul.adapter)(r).then(
      function (u) {
        return (
          Xs(r),
          (u.data = Js.call(r, r.transformResponse, u)),
          (u.headers = Ze.from(u.headers)),
          u
        );
      },
      function (u) {
        return (
          Vd(u) ||
            (Xs(r),
            u &&
              u.response &&
              ((u.response.data = Js.call(r, r.transformResponse, u.response)),
              (u.response.headers = Ze.from(u.response.headers)))),
          Promise.reject(u)
        );
      }
    )
  );
}
const Yd = "1.8.4",
  $i = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (r, i) => {
    $i[r] = function (u) {
      return typeof u === r || "a" + (i < 1 ? "n " : " ") + r;
    };
  }
);
const ed = {};
$i.transitional = function (i, o, u) {
  function c(f, p) {
    return (
      "[Axios v" +
      Yd +
      "] Transitional option '" +
      f +
      "'" +
      p +
      (u ? ". " + u : "")
    );
  }
  return (f, p, m) => {
    if (i === !1)
      throw new re(
        c(p, " has been removed" + (o ? " in " + o : "")),
        re.ERR_DEPRECATED
      );
    return (
      o &&
        !ed[p] &&
        ((ed[p] = !0),
        console.warn(
          c(
            p,
            " has been deprecated since v" +
              o +
              " and will be removed in the near future"
          )
        )),
      i ? i(f, p, m) : !0
    );
  };
};
$i.spelling = function (i) {
  return (o, u) => (console.warn(`${u} is likely a misspelling of ${i}`), !0);
};
function tv(r, i, o) {
  if (typeof r != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(r);
  let c = u.length;
  for (; c-- > 0; ) {
    const f = u[c],
      p = i[f];
    if (p) {
      const m = r[f],
        y = m === void 0 || p(m, f, r);
      if (y !== !0)
        throw new re("option " + f + " must be " + y, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0) throw new re("Unknown option " + f, re.ERR_BAD_OPTION);
  }
}
const ki = { assertOptions: tv, validators: $i },
  Lt = ki.validators;
let Pn = class {
  constructor(i) {
    (this.defaults = i),
      (this.interceptors = { request: new Qf(), response: new Qf() });
  }
  async request(i, o) {
    try {
      return await this._request(i, o);
    } catch (u) {
      if (u instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack
            ? f &&
              !String(u.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (u.stack +=
                `
` + f)
            : (u.stack = f);
        } catch {}
      }
      throw u;
    }
  }
  _request(i, o) {
    typeof i == "string" ? ((o = o || {}), (o.url = i)) : (o = i || {}),
      (o = Nn(this.defaults, o));
    const { transitional: u, paramsSerializer: c, headers: f } = o;
    u !== void 0 &&
      ki.assertOptions(
        u,
        {
          silentJSONParsing: Lt.transitional(Lt.boolean),
          forcedJSONParsing: Lt.transitional(Lt.boolean),
          clarifyTimeoutError: Lt.transitional(Lt.boolean),
        },
        !1
      ),
      c != null &&
        (P.isFunction(c)
          ? (o.paramsSerializer = { serialize: c })
          : ki.assertOptions(
              c,
              { encode: Lt.function, serialize: Lt.function },
              !0
            )),
      o.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (o.allowAbsoluteUrls = !0)),
      ki.assertOptions(
        o,
        {
          baseUrl: Lt.spelling("baseURL"),
          withXsrfToken: Lt.spelling("withXSRFToken"),
        },
        !0
      ),
      (o.method = (o.method || this.defaults.method || "get").toLowerCase());
    let p = f && P.merge(f.common, f[o.method]);
    f &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (T) => {
          delete f[T];
        }
      ),
      (o.headers = Ze.concat(p, f));
    const m = [];
    let y = !0;
    this.interceptors.request.forEach(function (O) {
      (typeof O.runWhen == "function" && O.runWhen(o) === !1) ||
        ((y = y && O.synchronous), m.unshift(O.fulfilled, O.rejected));
    });
    const S = [];
    this.interceptors.response.forEach(function (O) {
      S.push(O.fulfilled, O.rejected);
    });
    let w,
      E = 0,
      N;
    if (!y) {
      const T = [bf.bind(this), void 0];
      for (
        T.unshift.apply(T, m),
          T.push.apply(T, S),
          N = T.length,
          w = Promise.resolve(o);
        E < N;

      )
        w = w.then(T[E++], T[E++]);
      return w;
    }
    N = m.length;
    let U = o;
    for (E = 0; E < N; ) {
      const T = m[E++],
        O = m[E++];
      try {
        U = T(U);
      } catch (R) {
        O.call(this, R);
        break;
      }
    }
    try {
      w = bf.call(this, U);
    } catch (T) {
      return Promise.reject(T);
    }
    for (E = 0, N = S.length; E < N; ) w = w.then(S[E++], S[E++]);
    return w;
  }
  getUri(i) {
    i = Nn(this.defaults, i);
    const o = Kd(i.baseURL, i.url, i.allowAbsoluteUrls);
    return $d(o, i.params, i.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function (i) {
  Pn.prototype[i] = function (o, u) {
    return this.request(
      Nn(u || {}, { method: i, url: o, data: (u || {}).data })
    );
  };
});
P.forEach(["post", "put", "patch"], function (i) {
  function o(u) {
    return function (f, p, m) {
      return this.request(
        Nn(m || {}, {
          method: i,
          headers: u ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: p,
        })
      );
    };
  }
  (Pn.prototype[i] = o()), (Pn.prototype[i + "Form"] = o(!0));
});
let nv = class Zd {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function (f) {
      o = f;
    });
    const u = this;
    this.promise.then((c) => {
      if (!u._listeners) return;
      let f = u._listeners.length;
      for (; f-- > 0; ) u._listeners[f](c);
      u._listeners = null;
    }),
      (this.promise.then = (c) => {
        let f;
        const p = new Promise((m) => {
          u.subscribe(m), (f = m);
        }).then(c);
        return (
          (p.cancel = function () {
            u.unsubscribe(f);
          }),
          p
        );
      }),
      i(function (f, p, m) {
        u.reason || ((u.reason = new fr(f, p, m)), o(u.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const o = this._listeners.indexOf(i);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      o = (u) => {
        i.abort(u);
      };
    return (
      this.subscribe(o),
      (i.signal.unsubscribe = () => this.unsubscribe(o)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new Zd(function (c) {
        i = c;
      }),
      cancel: i,
    };
  }
};
function rv(r) {
  return function (o) {
    return r.apply(null, o);
  };
}
function lv(r) {
  return P.isObject(r) && r.isAxiosError === !0;
}
const hu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(hu).forEach(([r, i]) => {
  hu[i] = r;
});
function bd(r) {
  const i = new Pn(r),
    o = Td(Pn.prototype.request, i);
  return (
    P.extend(o, Pn.prototype, i, { allOwnKeys: !0 }),
    P.extend(o, i, null, { allOwnKeys: !0 }),
    (o.create = function (c) {
      return bd(Nn(r, c));
    }),
    o
  );
}
const he = bd(ul);
he.Axios = Pn;
he.CanceledError = fr;
he.CancelToken = nv;
he.isCancel = Vd;
he.VERSION = Yd;
he.toFormData = Ui;
he.AxiosError = re;
he.Cancel = he.CanceledError;
he.all = function (i) {
  return Promise.all(i);
};
he.spread = rv;
he.isAxiosError = lv;
he.mergeConfig = Nn;
he.AxiosHeaders = Ze;
he.formToJSON = (r) => Wd(P.isHTMLForm(r) ? new FormData(r) : r);
he.getAdapter = Gd.getAdapter;
he.HttpStatusCode = hu;
he.default = he;
const {
    Axios: p1,
    AxiosError: h1,
    CanceledError: m1,
    isCancel: y1,
    CancelToken: g1,
    VERSION: v1,
    all: w1,
    Cancel: S1,
    isAxiosError: x1,
    spread: E1,
    toFormData: k1,
    AxiosHeaders: _1,
    HttpStatusCode: C1,
    formToJSON: R1,
    getAdapter: j1,
    mergeConfig: P1,
  } = he,
  iv = () => {
    const [r, i] = F.useState([]),
      [o, u] = F.useState([]),
      c = async () => {
        try {
          let f = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          i(f.data.about);
          let p = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          u(p.data.aboutBox);
        } catch (f) {
          console.log(f.message);
        }
      };
    return (
      F.useEffect(() => {
        c();
      }, []),
      g.jsx(g.Fragment, {
        children: g.jsxs("div", {
          className: Ny.title,
          children: [
            r == null
              ? void 0
              : r.map((f) =>
                  g.jsx(g.Fragment, {
                    children: g.jsxs(
                      "div",
                      {
                        children: [
                          g.jsxs("h1", { children: [" ", f.title] }),
                          g.jsx("p", { children: f.post }),
                          g.jsx("p", { children: f.post2 }),
                        ],
                      },
                      f.id
                    ),
                  })
                ),
            g.jsx("div", {
              children:
                o == null
                  ? void 0
                  : o.map((f) =>
                      g.jsx(g.Fragment, {
                        children: g.jsxs(
                          "div",
                          {
                            children: [
                              g.jsx("img", { src: f.image, alt: "" }),
                              g.jsx("p", { children: f.title }),
                            ],
                          },
                          f.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  },
  ov = "_box_1ui2o_3",
  sv = "_link1_1ui2o_21",
  uv = "_link_1ui2o_21",
  or = { box: ov, link1: sv, link: uv },
  av = () => {
    const [r, i] = F.useState([]),
      o = async () => {
        try {
          let u = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          i(u.data.Box);
        } catch (u) {
          console.log(u.message);
        }
      };
    return (
      F.useEffect(() => {
        o();
      }, []),
      g.jsx(g.Fragment, {
        children:
          r == null
            ? void 0
            : r.map((u, c) =>
                c === 0
                  ? g.jsx(g.Fragment, {
                      children: g.jsxs(
                        "div",
                        {
                          className: or.box,
                          children: [
                            g.jsx("img", { src: u.image, alt: "" }),
                            g.jsx("div", { className: or.link1 }),
                            g.jsxs("div", {
                              children: [
                                g.jsx("h1", { children: u.title1 }),
                                g.jsx("h2", { children: u.title2 }),
                              ],
                            }),
                            g.jsxs("div", {
                              children: [
                                g.jsx("h1", { children: u.head1 }),
                                g.jsx("p", { children: u.main }),
                                g.jsxs("div", {
                                  className: or.link,
                                  children: [
                                    g.jsx("a", {
                                      href: "#",
                                      children: u.button1,
                                    }),
                                    g.jsx("a", {
                                      href: "#",
                                      children: u.button2,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        u.id
                      ),
                    })
                  : g.jsx(g.Fragment, {
                      children: g.jsxs(
                        "div",
                        {
                          className: or.box,
                          children: [
                            g.jsx("img", { src: u.image, alt: "" }),
                            g.jsx("div", { className: or.link1 }),
                            g.jsxs("div", {
                              children: [
                                g.jsx("h1", { children: u.title1 }),
                                g.jsx("h2", { children: u.title2 }),
                              ],
                            }),
                            g.jsxs("div", {
                              children: [
                                g.jsx("h1", { children: u.head1 }),
                                g.jsx("p", { children: u.main }),
                                g.jsx("div", {
                                  className: or.link,
                                  children: g.jsx("a", {
                                    href: "#",
                                    children: u.button1,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        u.id
                      ),
                    })
              ),
      })
    );
  },
  cv = "_mag_10opg_3",
  fv = "_box_10opg_27",
  td = { mag: cv, box: fv },
  dv = () => {
    const [r, i] = F.useState([]),
      o = async () => {
        try {
          let u = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          i(u.data.magazine);
        } catch (u) {
          console.log(u.message);
        }
      };
    return (
      F.useEffect(() => {
        o();
      }, []),
      g.jsx(g.Fragment, {
        children: g.jsxs("div", {
          className: td.mag,
          children: [
            g.jsx("h1", { children: "مجله گلستان" }),
            g.jsx("div", {
              className: td.box,
              children:
                r == null
                  ? void 0
                  : r.map((u) =>
                      g.jsx(g.Fragment, {
                        children: g.jsxs(
                          "div",
                          {
                            children: [
                              g.jsx("img", { src: u.image, alt: "" }),
                              g.jsx("h2", { children: u.name }),
                              g.jsx("p", { children: u.main }),
                              g.jsx("a", { href: "#", children: u.button }),
                            ],
                          },
                          u.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  },
  pv = "_mag_1k50k_3",
  hv = "_box_1k50k_13",
  nd = { mag: pv, box: hv },
  mv = () => {
    const [r, i] = F.useState([]),
      o = async () => {
        try {
          let c = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          i(c.data.clip);
        } catch (c) {
          console.log(c.message);
        }
      };
    F.useEffect(() => {
      o();
    }, []);
    const u = (c) =>
      g.jsx("video", { src: c, controls: !0, width: "100%", height: "250px" });
    return g.jsx(g.Fragment, {
      children: g.jsx("div", {
        className: nd.mag,
        children: g.jsx("div", {
          className: nd.box,
          children:
            r == null
              ? void 0
              : r.map((c) =>
                  g.jsx(g.Fragment, {
                    children: g.jsxs(
                      "div",
                      {
                        children: [
                          u(c.video),
                          g.jsx("h2", { children: c.name }),
                          g.jsx("p", { children: c.main }),
                          g.jsx("a", { href: "#", children: c.button }),
                        ],
                      },
                      c.id
                    ),
                  })
                ),
        }),
      }),
    });
  },
  yv = "./assets/csr-pic1-Dp4Lz4s7.jpg",
  gv = "_res_2lojp_3",
  vv = "_link_2lojp_139",
  wv = "_icon_2lojp_247",
  Gs = { res: gv, link: vv, icon: wv },
  Sv = () => {
    const [r, i] = F.useState([]),
      o = async () => {
        try {
          let u = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          i(u.data.response);
        } catch (u) {
          console.log(u.message);
        }
      };
    return (
      F.useEffect(() => {
        o();
      }, []),
      g.jsx(g.Fragment, {
        children: g.jsxs("div", {
          className: Gs.res,
          children: [
            g.jsx("div", {
              children: g.jsx("h1", {
                children: "مسئولیت های اجتماعی شرکت گلستان",
              }),
            }),
            g.jsxs("div", {
              children: [
                g.jsx("h1", { children: "Golestan social Responsibility" }),
                g.jsx("h2", { children: "Mahdi Hospital" }),
                g.jsx("img", { src: yv, alt: "" }),
              ],
            }),
            g.jsx("div", {}),
            g.jsx("div", {
              children: g.jsxs("div", {
                className: Gs.link,
                children: [
                  g.jsx("h1", { children: "مسئوليت‌های اجتماعی گلستان" }),
                  g.jsx("p", {
                    children:
                      "كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.",
                  }),
                  g.jsx("a", { href: "#", children: "اطلاعات بیشتر" }),
                ],
              }),
            }),
            g.jsx("div", {
              className: Gs.icon,
              children:
                r == null
                  ? void 0
                  : r.map((u) =>
                      g.jsx(
                        "a",
                        {
                          href: "#",
                          children: g.jsx("img", { src: u.image, alt: "" }),
                        },
                        u.id
                      )
                    ),
            }),
          ],
        }),
      })
    );
  },
  xv =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cpath%20id='XMLID_224_'%20d='M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394%20l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393%20C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z'/%3e%3c/svg%3e",
  Ev = "_whats_1xkaf_3",
  kv = { whats: Ev },
  _v = () =>
    g.jsx(g.Fragment, {
      children: g.jsx("div", {
        className: kv.whats,
        children: g.jsx("a", {
          href: "#",
          children: g.jsx("img", { src: xv, alt: "" }),
        }),
      }),
    }),
  Cv = () =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsx(jy, {}),
        g.jsx(_v, {}),
        g.jsx(iv, {}),
        g.jsx(av, {}),
        g.jsx(dv, {}),
        g.jsx(mv, {}),
        g.jsx(Sv, {}),
      ],
    }),
  rd = "./assets/logo-BqhyckDw.png",
  Rv =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='122.879px'%20height='103.609px'%20viewBox='0%200%20122.879%20103.609'%20enable-background='new%200%200%20122.879%20103.609'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0%20c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z%20M10.368,82.875%20h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0%20C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z%20M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0%20c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438%20L10.368,41.438z'/%3e%3c/g%3e%3c/svg%3e",
  jv =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4=",
  Pv = () => {
    const [r, i] = F.useState([]),
      o = async () => {
        try {
          let f = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          i(f.data.menu);
        } catch (f) {
          console.log(f.message);
        }
      };
    F.useEffect(() => {
      o();
    }, []);
    const u = F.useRef(null);
    F.useEffect(() => {
      u.current.addEventListener("click", function () {
        document.querySelector(".menuMobile").classList.add("active");
      });
    }, []);
    const c = F.useRef(null);
    return (
      F.useEffect(() => {
        c.current.addEventListener("click", function () {
          document.querySelector(".menuMobile").classList.remove("active");
        });
      }, []),
      g.jsxs(g.Fragment, {
        children: [
          g.jsxs("div", {
            className: "menu",
            children: [
              g.jsx("nav", {
                children:
                  r == null
                    ? void 0
                    : r.map((f, p) =>
                        p === 2
                          ? g.jsx(
                              "div",
                              {
                                children: g.jsx(ir, {
                                  to: "/Tea",
                                  children: f.name,
                                }),
                              },
                              f.id
                            )
                          : p === 0
                          ? g.jsx(g.Fragment, {
                              children: g.jsx(
                                "div",
                                {
                                  children: g.jsx(ir, {
                                    to: "/",
                                    children: f.name,
                                  }),
                                },
                                f.id
                              ),
                            })
                          : g.jsx(
                              "div",
                              {
                                children: g.jsx("a", {
                                  href: "#",
                                  children: f.name,
                                }),
                              },
                              f.id
                            )
                      ),
              }),
              g.jsx(ir, {
                to: "/",
                children: g.jsx("img", { src: rd, alt: "" }),
              }),
            ],
          }),
          g.jsx("div", {
            class: "toggleMenu",
            ref: u,
            children: g.jsx("img", { src: Rv, alt: "" }),
          }),
          g.jsx("div", {
            id: "menuMobile",
            class: "menuMobile",
            children: g.jsxs("nav", {
              class: "active",
              children: [
                g.jsx("div", {
                  class: "close",
                  ref: c,
                  children: g.jsx("img", { src: jv, alt: "" }),
                }),
                g.jsxs("ul", {
                  children: [
                    r == null
                      ? void 0
                      : r.map((f, p) =>
                          p === 2
                            ? g.jsx(g.Fragment, {
                                children: g.jsx(
                                  "li",
                                  {
                                    children: g.jsx(ir, {
                                      to: "/Tea",
                                      children: f.name,
                                    }),
                                  },
                                  f.id
                                ),
                              })
                            : g.jsx(g.Fragment, {
                                children: g.jsx(
                                  "li",
                                  {
                                    children: g.jsx(ir, {
                                      to: "/",
                                      className: "active",
                                      children: f.name,
                                    }),
                                  },
                                  f.id
                                ),
                              })
                        ),
                    g.jsx("li", {
                      children: g.jsx(ir, {
                        to: "/",
                        children: g.jsx("img", {
                          className: "logo1",
                          src: rd,
                          alt: "",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Nv = "_footer_7i0q2_3",
  Tv = "_line_7i0q2_11",
  Ov = "_footer2_7i0q2_21",
  Lv = "_boxpack_7i0q2_25",
  Mv = "_box_7i0q2_25",
  zv = "_under_7i0q2_119",
  sr = { footer: Nv, line: Tv, footer2: Ov, boxpack: Lv, box: Mv, under: zv },
  Dv = () => {
    const [r, i] = F.useState([]),
      o = async () => {
        try {
          let u = await he(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          i(u.data.footer);
        } catch (u) {
          console.log(u.message);
        }
      };
    return (
      F.useEffect(() => {
        o();
      }, []),
      g.jsx(g.Fragment, {
        children: g.jsxs("footer", {
          className: sr.footer,
          children: [
            g.jsx("div", { className: sr.line }),
            g.jsx("div", {
              className: sr.footer2,
              children: g.jsx("div", {
                className: sr.boxpack,
                children: r.map((u) =>
                  g.jsx(g.Fragment, {
                    children: g.jsxs(
                      "div",
                      {
                        className: sr.box,
                        children: [
                          g.jsx("img", { src: u.image, alt: "" }),
                          g.jsx("h1", { children: u.title }),
                          g.jsx("a", { href: "", children: u.name1 }),
                          g.jsx("a", { href: "", children: u.name2 }),
                          g.jsx("a", { href: "", children: u.name3 }),
                          g.jsx("a", { href: "", children: u.name4 }),
                          g.jsx("a", { href: "", children: u.name5 }),
                        ],
                      },
                      u.id
                    ),
                  })
                ),
              }),
            }),
            g.jsxs("div", {
              className: sr.under,
              children: [
                g.jsx("h1", {
                  children: "all right reserved golestan company 2022-2025",
                }),
                g.jsx("h2", { children: "design by:golestan studio" }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Fv = "_title_kv91z_9",
  Av = { title: Fv },
  Iv = () =>
    g.jsx(g.Fragment, {
      children: g.jsx("div", {
        className: Av.title,
        children: g.jsxs("div", {
          children: [
            g.jsx("h1", { children: " معرفی محصول" }),
            g.jsx("p", {
              children:
                "چای تنها یك نوشیدنی گرم نیست.‌ یك گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدك می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش به همراه دارد.",
            }),
            g.jsxs("p", {
              children: [
                "برای مردمان ایران زمین نام ",
                g.jsx("strong", { children: "گلستان" }),
                " با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.",
              ],
            }),
            g.jsx("p", {
              children:
                "شرکت گلستان با اتکا به بیش از نیم قرن سابقه در تهیه و ترکیب انواع چای، بهترین انواع چای را از مناطق برتر تولیدکننده مانند هندوستان، سیلان و کنیا خریداری نموده و آن ها را به اقتضای ذائقه ایرانی، به منظور دستیابی به بهترین عطر، طعم و رنگ با استفاده از دستگاه های مخصوص به نسبت مشخصی ترکیب می نماید و در اوزان مختلف بسته بندی و در بازار عرضه می کند",
            }),
          ],
        }),
      }),
    }),
  Uv = "./assets/tea1-CjdO677p.png",
  Bv = "_header_af7yl_3",
  $v = { header: Bv },
  Hv = () =>
    g.jsx(g.Fragment, {
      children: g.jsxs("div", {
        className: $v.header,
        children: [
          g.jsx("img", { width: "300px", src: Uv, alt: "" }),
          g.jsxs("div", {
            children: [
              g.jsx("h1", { children: "چای گلستان" }),
              g.jsx("h2", { children: "سابقه ای به قدمت یک عمر" }),
            ],
          }),
        ],
      }),
    });
var Ys = { exports: {} },
  Zs = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ld;
function Wv() {
  if (ld) return Zs;
  ld = 1;
  var r = Mi();
  function i(y, S) {
    return (y === S && (y !== 0 || 1 / y === 1 / S)) || (y !== y && S !== S);
  }
  var o = typeof Object.is == "function" ? Object.is : i,
    u = r.useSyncExternalStore,
    c = r.useRef,
    f = r.useEffect,
    p = r.useMemo,
    m = r.useDebugValue;
  return (
    (Zs.useSyncExternalStoreWithSelector = function (y, S, w, E, N) {
      var U = c(null);
      if (U.current === null) {
        var T = { hasValue: !1, value: null };
        U.current = T;
      } else T = U.current;
      U = p(
        function () {
          function R(X) {
            if (!B) {
              if (((B = !0), (H = X), (X = E(X)), N !== void 0 && T.hasValue)) {
                var b = T.value;
                if (N(b, X)) return (I = b);
              }
              return (I = X);
            }
            if (((b = I), o(H, X))) return b;
            var oe = E(X);
            return N !== void 0 && N(b, oe)
              ? ((H = X), b)
              : ((H = X), (I = oe));
          }
          var B = !1,
            H,
            I,
            V = w === void 0 ? null : w;
          return [
            function () {
              return R(S());
            },
            V === null
              ? void 0
              : function () {
                  return R(V());
                },
          ];
        },
        [S, w, E, N]
      );
      var O = u(y, U[0], U[1]);
      return (
        f(
          function () {
            (T.hasValue = !0), (T.value = O);
          },
          [O]
        ),
        m(O),
        O
      );
    }),
    Zs
  );
}
var id;
function Vv() {
  return id || ((id = 1), (Ys.exports = Wv())), Ys.exports;
}
var Qv = Vv();
function Kv(r) {
  r();
}
function qv() {
  let r = null,
    i = null;
  return {
    clear() {
      (r = null), (i = null);
    },
    notify() {
      Kv(() => {
        let o = r;
        for (; o; ) o.callback(), (o = o.next);
      });
    },
    get() {
      const o = [];
      let u = r;
      for (; u; ) o.push(u), (u = u.next);
      return o;
    },
    subscribe(o) {
      let u = !0;
      const c = (i = { callback: o, next: null, prev: i });
      return (
        c.prev ? (c.prev.next = c) : (r = c),
        function () {
          !u ||
            r === null ||
            ((u = !1),
            c.next ? (c.next.prev = c.prev) : (i = c.prev),
            c.prev ? (c.prev.next = c.next) : (r = c.next));
        }
      );
    },
  };
}
var od = { notify() {}, get: () => [] };
function Jv(r, i) {
  let o,
    u = od,
    c = 0,
    f = !1;
  function p(O) {
    w();
    const R = u.subscribe(O);
    let B = !1;
    return () => {
      B || ((B = !0), R(), E());
    };
  }
  function m() {
    u.notify();
  }
  function y() {
    T.onStateChange && T.onStateChange();
  }
  function S() {
    return f;
  }
  function w() {
    c++, o || ((o = r.subscribe(y)), (u = qv()));
  }
  function E() {
    c--, o && c === 0 && (o(), (o = void 0), u.clear(), (u = od));
  }
  function N() {
    f || ((f = !0), w());
  }
  function U() {
    f && ((f = !1), E());
  }
  const T = {
    addNestedSub: p,
    notifyNestedSubs: m,
    handleChangeWrapper: y,
    isSubscribed: S,
    trySubscribe: N,
    tryUnsubscribe: U,
    getListeners: () => u,
  };
  return T;
}
var Xv = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Gv = Xv(),
  Yv = () => typeof navigator < "u" && navigator.product === "ReactNative",
  Zv = Yv(),
  bv = () => (Gv || Zv ? F.useLayoutEffect : F.useEffect),
  e0 = bv(),
  bs = Symbol.for("react-redux-context"),
  eu = typeof globalThis < "u" ? globalThis : {};
function t0() {
  if (!F.createContext) return {};
  const r = eu[bs] ?? (eu[bs] = new Map());
  let i = r.get(F.createContext);
  return i || ((i = F.createContext(null)), r.set(F.createContext, i)), i;
}
var dn = t0();
function n0(r) {
  const { children: i, context: o, serverState: u, store: c } = r,
    f = F.useMemo(() => {
      const y = Jv(c);
      return {
        store: c,
        subscription: y,
        getServerState: u ? () => u : void 0,
      };
    }, [c, u]),
    p = F.useMemo(() => c.getState(), [c]);
  e0(() => {
    const { subscription: y } = f;
    return (
      (y.onStateChange = y.notifyNestedSubs),
      y.trySubscribe(),
      p !== c.getState() && y.notifyNestedSubs(),
      () => {
        y.tryUnsubscribe(), (y.onStateChange = void 0);
      }
    );
  }, [f, p]);
  const m = o || dn;
  return F.createElement(m.Provider, { value: f }, i);
}
var r0 = n0;
function Ru(r = dn) {
  return function () {
    return F.useContext(r);
  };
}
var ep = Ru();
function tp(r = dn) {
  const i = r === dn ? ep : Ru(r),
    o = () => {
      const { store: u } = i();
      return u;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var l0 = tp();
function i0(r = dn) {
  const i = r === dn ? l0 : tp(r),
    o = () => i().dispatch;
  return Object.assign(o, { withTypes: () => o }), o;
}
var o0 = i0(),
  s0 = (r, i) => r === i;
function u0(r = dn) {
  const i = r === dn ? ep : Ru(r),
    o = (u, c = {}) => {
      const { equalityFn: f = s0 } =
          typeof c == "function" ? { equalityFn: c } : c,
        p = i(),
        { store: m, subscription: y, getServerState: S } = p;
      F.useRef(!0);
      const w = F.useCallback(
          {
            [u.name](N) {
              return u(N);
            },
          }[u.name],
          [u]
        ),
        E = Qv.useSyncExternalStoreWithSelector(
          y.addNestedSub,
          m.getState,
          S || m.getState,
          w,
          f
        );
      return F.useDebugValue(E), E;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var a0 = u0();
function Ae(r) {
  return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
var c0 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  sd = c0,
  tu = () => Math.random().toString(36).substring(7).split("").join("."),
  f0 = {
    INIT: `@@redux/INIT${tu()}`,
    REPLACE: `@@redux/REPLACE${tu()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${tu()}`,
  },
  Pi = f0;
function ju(r) {
  if (typeof r != "object" || r === null) return !1;
  let i = r;
  for (; Object.getPrototypeOf(i) !== null; ) i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(r) === i || Object.getPrototypeOf(r) === null;
}
function np(r, i, o) {
  if (typeof r != "function") throw new Error(Ae(2));
  if (
    (typeof i == "function" && typeof o == "function") ||
    (typeof o == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ae(0));
  if (
    (typeof i == "function" && typeof o > "u" && ((o = i), (i = void 0)),
    typeof o < "u")
  ) {
    if (typeof o != "function") throw new Error(Ae(1));
    return o(np)(r, i);
  }
  let u = r,
    c = i,
    f = new Map(),
    p = f,
    m = 0,
    y = !1;
  function S() {
    p === f &&
      ((p = new Map()),
      f.forEach((R, B) => {
        p.set(B, R);
      }));
  }
  function w() {
    if (y) throw new Error(Ae(3));
    return c;
  }
  function E(R) {
    if (typeof R != "function") throw new Error(Ae(4));
    if (y) throw new Error(Ae(5));
    let B = !0;
    S();
    const H = m++;
    return (
      p.set(H, R),
      function () {
        if (B) {
          if (y) throw new Error(Ae(6));
          (B = !1), S(), p.delete(H), (f = null);
        }
      }
    );
  }
  function N(R) {
    if (!ju(R)) throw new Error(Ae(7));
    if (typeof R.type > "u") throw new Error(Ae(8));
    if (typeof R.type != "string") throw new Error(Ae(17));
    if (y) throw new Error(Ae(9));
    try {
      (y = !0), (c = u(c, R));
    } finally {
      y = !1;
    }
    return (
      (f = p).forEach((H) => {
        H();
      }),
      R
    );
  }
  function U(R) {
    if (typeof R != "function") throw new Error(Ae(10));
    (u = R), N({ type: Pi.REPLACE });
  }
  function T() {
    const R = E;
    return {
      subscribe(B) {
        if (typeof B != "object" || B === null) throw new Error(Ae(11));
        function H() {
          const V = B;
          V.next && V.next(w());
        }
        return H(), { unsubscribe: R(H) };
      },
      [sd]() {
        return this;
      },
    };
  }
  return (
    N({ type: Pi.INIT }),
    { dispatch: N, subscribe: E, getState: w, replaceReducer: U, [sd]: T }
  );
}
function d0(r) {
  Object.keys(r).forEach((i) => {
    const o = r[i];
    if (typeof o(void 0, { type: Pi.INIT }) > "u") throw new Error(Ae(12));
    if (typeof o(void 0, { type: Pi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ae(13));
  });
}
function p0(r) {
  const i = Object.keys(r),
    o = {};
  for (let f = 0; f < i.length; f++) {
    const p = i[f];
    typeof r[p] == "function" && (o[p] = r[p]);
  }
  const u = Object.keys(o);
  let c;
  try {
    d0(o);
  } catch (f) {
    c = f;
  }
  return function (p = {}, m) {
    if (c) throw c;
    let y = !1;
    const S = {};
    for (let w = 0; w < u.length; w++) {
      const E = u[w],
        N = o[E],
        U = p[E],
        T = N(U, m);
      if (typeof T > "u") throw (m && m.type, new Error(Ae(14)));
      (S[E] = T), (y = y || T !== U);
    }
    return (y = y || u.length !== Object.keys(p).length), y ? S : p;
  };
}
function Ni(...r) {
  return r.length === 0
    ? (i) => i
    : r.length === 1
    ? r[0]
    : r.reduce(
        (i, o) =>
          (...u) =>
            i(o(...u))
      );
}
function h0(...r) {
  return (i) => (o, u) => {
    const c = i(o, u);
    let f = () => {
      throw new Error(Ae(15));
    };
    const p = { getState: c.getState, dispatch: (y, ...S) => f(y, ...S) },
      m = r.map((y) => y(p));
    return (f = Ni(...m)(c.dispatch)), { ...c, dispatch: f };
  };
}
function m0(r) {
  return ju(r) && "type" in r && typeof r.type == "string";
}
var rp = Symbol.for("immer-nothing"),
  ud = Symbol.for("immer-draftable"),
  ot = Symbol.for("immer-state");
function kt(r, ...i) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ur = Object.getPrototypeOf;
function Tn(r) {
  return !!r && !!r[ot];
}
function Wt(r) {
  var i;
  return r
    ? lp(r) ||
        Array.isArray(r) ||
        !!r[ud] ||
        !!((i = r.constructor) != null && i[ud]) ||
        Wi(r) ||
        Vi(r)
    : !1;
}
var y0 = Object.prototype.constructor.toString();
function lp(r) {
  if (!r || typeof r != "object") return !1;
  const i = ur(r);
  if (i === null) return !0;
  const o = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
  return o === Object
    ? !0
    : typeof o == "function" && Function.toString.call(o) === y0;
}
function Ti(r, i) {
  Hi(r) === 0
    ? Reflect.ownKeys(r).forEach((o) => {
        i(o, r[o], r);
      })
    : r.forEach((o, u) => i(u, o, r));
}
function Hi(r) {
  const i = r[ot];
  return i ? i.type_ : Array.isArray(r) ? 1 : Wi(r) ? 2 : Vi(r) ? 3 : 0;
}
function mu(r, i) {
  return Hi(r) === 2 ? r.has(i) : Object.prototype.hasOwnProperty.call(r, i);
}
function ip(r, i, o) {
  const u = Hi(r);
  u === 2 ? r.set(i, o) : u === 3 ? r.add(o) : (r[i] = o);
}
function g0(r, i) {
  return r === i ? r !== 0 || 1 / r === 1 / i : r !== r && i !== i;
}
function Wi(r) {
  return r instanceof Map;
}
function Vi(r) {
  return r instanceof Set;
}
function Rn(r) {
  return r.copy_ || r.base_;
}
function yu(r, i) {
  if (Wi(r)) return new Map(r);
  if (Vi(r)) return new Set(r);
  if (Array.isArray(r)) return Array.prototype.slice.call(r);
  const o = lp(r);
  if (i === !0 || (i === "class_only" && !o)) {
    const u = Object.getOwnPropertyDescriptors(r);
    delete u[ot];
    let c = Reflect.ownKeys(u);
    for (let f = 0; f < c.length; f++) {
      const p = c[f],
        m = u[p];
      m.writable === !1 && ((m.writable = !0), (m.configurable = !0)),
        (m.get || m.set) &&
          (u[p] = {
            configurable: !0,
            writable: !0,
            enumerable: m.enumerable,
            value: r[p],
          });
    }
    return Object.create(ur(r), u);
  } else {
    const u = ur(r);
    if (u !== null && o) return { ...r };
    const c = Object.create(u);
    return Object.assign(c, r);
  }
}
function Pu(r, i = !1) {
  return (
    Qi(r) ||
      Tn(r) ||
      !Wt(r) ||
      (Hi(r) > 1 && (r.set = r.add = r.clear = r.delete = v0),
      Object.freeze(r),
      i && Object.entries(r).forEach(([o, u]) => Pu(u, !0))),
    r
  );
}
function v0() {
  kt(2);
}
function Qi(r) {
  return Object.isFrozen(r);
}
var w0 = {};
function On(r) {
  const i = w0[r];
  return i || kt(0, r), i;
}
var ll;
function op() {
  return ll;
}
function S0(r, i) {
  return {
    drafts_: [],
    parent_: r,
    immer_: i,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function ad(r, i) {
  i &&
    (On("Patches"),
    (r.patches_ = []),
    (r.inversePatches_ = []),
    (r.patchListener_ = i));
}
function gu(r) {
  vu(r), r.drafts_.forEach(x0), (r.drafts_ = null);
}
function vu(r) {
  r === ll && (ll = r.parent_);
}
function cd(r) {
  return (ll = S0(ll, r));
}
function x0(r) {
  const i = r[ot];
  i.type_ === 0 || i.type_ === 1 ? i.revoke_() : (i.revoked_ = !0);
}
function fd(r, i) {
  i.unfinalizedDrafts_ = i.drafts_.length;
  const o = i.drafts_[0];
  return (
    r !== void 0 && r !== o
      ? (o[ot].modified_ && (gu(i), kt(4)),
        Wt(r) && ((r = Oi(i, r)), i.parent_ || Li(i, r)),
        i.patches_ &&
          On("Patches").generateReplacementPatches_(
            o[ot].base_,
            r,
            i.patches_,
            i.inversePatches_
          ))
      : (r = Oi(i, o, [])),
    gu(i),
    i.patches_ && i.patchListener_(i.patches_, i.inversePatches_),
    r !== rp ? r : void 0
  );
}
function Oi(r, i, o) {
  if (Qi(i)) return i;
  const u = i[ot];
  if (!u) return Ti(i, (c, f) => dd(r, u, i, c, f, o)), i;
  if (u.scope_ !== r) return i;
  if (!u.modified_) return Li(r, u.base_, !0), u.base_;
  if (!u.finalized_) {
    (u.finalized_ = !0), u.scope_.unfinalizedDrafts_--;
    const c = u.copy_;
    let f = c,
      p = !1;
    u.type_ === 3 && ((f = new Set(c)), c.clear(), (p = !0)),
      Ti(f, (m, y) => dd(r, u, c, m, y, o, p)),
      Li(r, c, !1),
      o &&
        r.patches_ &&
        On("Patches").generatePatches_(u, o, r.patches_, r.inversePatches_);
  }
  return u.copy_;
}
function dd(r, i, o, u, c, f, p) {
  if (Tn(c)) {
    const m =
        f && i && i.type_ !== 3 && !mu(i.assigned_, u) ? f.concat(u) : void 0,
      y = Oi(r, c, m);
    if ((ip(o, u, y), Tn(y))) r.canAutoFreeze_ = !1;
    else return;
  } else p && o.add(c);
  if (Wt(c) && !Qi(c)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1) return;
    Oi(r, c),
      (!i || !i.scope_.parent_) &&
        typeof u != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(o, u) &&
        Li(r, c);
  }
}
function Li(r, i, o = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Pu(i, o);
}
function E0(r, i) {
  const o = Array.isArray(r),
    u = {
      type_: o ? 1 : 0,
      scope_: i ? i.scope_ : op(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: i,
      base_: r,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let c = u,
    f = Nu;
  o && ((c = [u]), (f = il));
  const { revoke: p, proxy: m } = Proxy.revocable(c, f);
  return (u.draft_ = m), (u.revoke_ = p), m;
}
var Nu = {
    get(r, i) {
      if (i === ot) return r;
      const o = Rn(r);
      if (!mu(o, i)) return k0(r, o, i);
      const u = o[i];
      return r.finalized_ || !Wt(u)
        ? u
        : u === nu(r.base_, i)
        ? (ru(r), (r.copy_[i] = Su(u, r)))
        : u;
    },
    has(r, i) {
      return i in Rn(r);
    },
    ownKeys(r) {
      return Reflect.ownKeys(Rn(r));
    },
    set(r, i, o) {
      const u = sp(Rn(r), i);
      if (u != null && u.set) return u.set.call(r.draft_, o), !0;
      if (!r.modified_) {
        const c = nu(Rn(r), i),
          f = c == null ? void 0 : c[ot];
        if (f && f.base_ === o)
          return (r.copy_[i] = o), (r.assigned_[i] = !1), !0;
        if (g0(o, c) && (o !== void 0 || mu(r.base_, i))) return !0;
        ru(r), wu(r);
      }
      return (
        (r.copy_[i] === o && (o !== void 0 || i in r.copy_)) ||
          (Number.isNaN(o) && Number.isNaN(r.copy_[i])) ||
          ((r.copy_[i] = o), (r.assigned_[i] = !0)),
        !0
      );
    },
    deleteProperty(r, i) {
      return (
        nu(r.base_, i) !== void 0 || i in r.base_
          ? ((r.assigned_[i] = !1), ru(r), wu(r))
          : delete r.assigned_[i],
        r.copy_ && delete r.copy_[i],
        !0
      );
    },
    getOwnPropertyDescriptor(r, i) {
      const o = Rn(r),
        u = Reflect.getOwnPropertyDescriptor(o, i);
      return (
        u && {
          writable: !0,
          configurable: r.type_ !== 1 || i !== "length",
          enumerable: u.enumerable,
          value: o[i],
        }
      );
    },
    defineProperty() {
      kt(11);
    },
    getPrototypeOf(r) {
      return ur(r.base_);
    },
    setPrototypeOf() {
      kt(12);
    },
  },
  il = {};
Ti(Nu, (r, i) => {
  il[r] = function () {
    return (arguments[0] = arguments[0][0]), i.apply(this, arguments);
  };
});
il.deleteProperty = function (r, i) {
  return il.set.call(this, r, i, void 0);
};
il.set = function (r, i, o) {
  return Nu.set.call(this, r[0], i, o, r[0]);
};
function nu(r, i) {
  const o = r[ot];
  return (o ? Rn(o) : r)[i];
}
function k0(r, i, o) {
  var c;
  const u = sp(i, o);
  return u
    ? "value" in u
      ? u.value
      : (c = u.get) == null
      ? void 0
      : c.call(r.draft_)
    : void 0;
}
function sp(r, i) {
  if (!(i in r)) return;
  let o = ur(r);
  for (; o; ) {
    const u = Object.getOwnPropertyDescriptor(o, i);
    if (u) return u;
    o = ur(o);
  }
}
function wu(r) {
  r.modified_ || ((r.modified_ = !0), r.parent_ && wu(r.parent_));
}
function ru(r) {
  r.copy_ || (r.copy_ = yu(r.base_, r.scope_.immer_.useStrictShallowCopy_));
}
var _0 = class {
  constructor(r) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (i, o, u) => {
        if (typeof i == "function" && typeof o != "function") {
          const f = o;
          o = i;
          const p = this;
          return function (y = f, ...S) {
            return p.produce(y, (w) => o.call(this, w, ...S));
          };
        }
        typeof o != "function" && kt(6),
          u !== void 0 && typeof u != "function" && kt(7);
        let c;
        if (Wt(i)) {
          const f = cd(this),
            p = Su(i, void 0);
          let m = !0;
          try {
            (c = o(p)), (m = !1);
          } finally {
            m ? gu(f) : vu(f);
          }
          return ad(f, u), fd(c, f);
        } else if (!i || typeof i != "object") {
          if (
            ((c = o(i)),
            c === void 0 && (c = i),
            c === rp && (c = void 0),
            this.autoFreeze_ && Pu(c, !0),
            u)
          ) {
            const f = [],
              p = [];
            On("Patches").generateReplacementPatches_(i, c, f, p), u(f, p);
          }
          return c;
        } else kt(1, i);
      }),
      (this.produceWithPatches = (i, o) => {
        if (typeof i == "function")
          return (p, ...m) => this.produceWithPatches(p, (y) => i(y, ...m));
        let u, c;
        return [
          this.produce(i, o, (p, m) => {
            (u = p), (c = m);
          }),
          u,
          c,
        ];
      }),
      typeof (r == null ? void 0 : r.autoFreeze) == "boolean" &&
        this.setAutoFreeze(r.autoFreeze),
      typeof (r == null ? void 0 : r.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(r.useStrictShallowCopy);
  }
  createDraft(r) {
    Wt(r) || kt(8), Tn(r) && (r = C0(r));
    const i = cd(this),
      o = Su(r, void 0);
    return (o[ot].isManual_ = !0), vu(i), o;
  }
  finishDraft(r, i) {
    const o = r && r[ot];
    (!o || !o.isManual_) && kt(9);
    const { scope_: u } = o;
    return ad(u, i), fd(void 0, u);
  }
  setAutoFreeze(r) {
    this.autoFreeze_ = r;
  }
  setUseStrictShallowCopy(r) {
    this.useStrictShallowCopy_ = r;
  }
  applyPatches(r, i) {
    let o;
    for (o = i.length - 1; o >= 0; o--) {
      const c = i[o];
      if (c.path.length === 0 && c.op === "replace") {
        r = c.value;
        break;
      }
    }
    o > -1 && (i = i.slice(o + 1));
    const u = On("Patches").applyPatches_;
    return Tn(r) ? u(r, i) : this.produce(r, (c) => u(c, i));
  }
};
function Su(r, i) {
  const o = Wi(r)
    ? On("MapSet").proxyMap_(r, i)
    : Vi(r)
    ? On("MapSet").proxySet_(r, i)
    : E0(r, i);
  return (i ? i.scope_ : op()).drafts_.push(o), o;
}
function C0(r) {
  return Tn(r) || kt(10, r), up(r);
}
function up(r) {
  if (!Wt(r) || Qi(r)) return r;
  const i = r[ot];
  let o;
  if (i) {
    if (!i.modified_) return i.base_;
    (i.finalized_ = !0), (o = yu(r, i.scope_.immer_.useStrictShallowCopy_));
  } else o = yu(r, !0);
  return (
    Ti(o, (u, c) => {
      ip(o, u, up(c));
    }),
    i && (i.finalized_ = !1),
    o
  );
}
var st = new _0(),
  ap = st.produce;
st.produceWithPatches.bind(st);
st.setAutoFreeze.bind(st);
st.setUseStrictShallowCopy.bind(st);
st.applyPatches.bind(st);
st.createDraft.bind(st);
st.finishDraft.bind(st);
function cp(r) {
  return ({ dispatch: o, getState: u }) =>
    (c) =>
    (f) =>
      typeof f == "function" ? f(o, u, r) : c(f);
}
var R0 = cp(),
  j0 = cp,
  P0 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Ni
              : Ni.apply(null, arguments);
        },
  N0 = (r) => r && typeof r.match == "function";
function el(r, i) {
  function o(...u) {
    if (i) {
      let c = i(...u);
      if (!c) throw new Error(Ht(0));
      return {
        type: r,
        payload: c.payload,
        ...("meta" in c && { meta: c.meta }),
        ...("error" in c && { error: c.error }),
      };
    }
    return { type: r, payload: u[0] };
  }
  return (
    (o.toString = () => `${r}`),
    (o.type = r),
    (o.match = (u) => m0(u) && u.type === r),
    o
  );
}
var fp = class br extends Array {
  constructor(...i) {
    super(...i), Object.setPrototypeOf(this, br.prototype);
  }
  static get [Symbol.species]() {
    return br;
  }
  concat(...i) {
    return super.concat.apply(this, i);
  }
  prepend(...i) {
    return i.length === 1 && Array.isArray(i[0])
      ? new br(...i[0].concat(this))
      : new br(...i.concat(this));
  }
};
function pd(r) {
  return Wt(r) ? ap(r, () => {}) : r;
}
function hd(r, i, o) {
  return r.has(i) ? r.get(i) : r.set(i, o(i)).get(i);
}
function T0(r) {
  return typeof r == "boolean";
}
var O0 = () =>
    function (i) {
      const {
        thunk: o = !0,
        immutableCheck: u = !0,
        serializableCheck: c = !0,
        actionCreatorCheck: f = !0,
      } = i ?? {};
      let p = new fp();
      return o && (T0(o) ? p.push(R0) : p.push(j0(o.extraArgument))), p;
    },
  L0 = "RTK_autoBatch",
  md = (r) => (i) => {
    setTimeout(i, r);
  },
  M0 =
    (r = { type: "raf" }) =>
    (i) =>
    (...o) => {
      const u = i(...o);
      let c = !0,
        f = !1,
        p = !1;
      const m = new Set(),
        y =
          r.type === "tick"
            ? queueMicrotask
            : r.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : md(10)
            : r.type === "callback"
            ? r.queueNotification
            : md(r.timeout),
        S = () => {
          (p = !1), f && ((f = !1), m.forEach((w) => w()));
        };
      return Object.assign({}, u, {
        subscribe(w) {
          const E = () => c && w(),
            N = u.subscribe(E);
          return (
            m.add(w),
            () => {
              N(), m.delete(w);
            }
          );
        },
        dispatch(w) {
          var E;
          try {
            return (
              (c = !((E = w == null ? void 0 : w.meta) != null && E[L0])),
              (f = !c),
              f && (p || ((p = !0), y(S))),
              u.dispatch(w)
            );
          } finally {
            c = !0;
          }
        },
      });
    },
  z0 = (r) =>
    function (o) {
      const { autoBatch: u = !0 } = o ?? {};
      let c = new fp(r);
      return u && c.push(M0(typeof u == "object" ? u : void 0)), c;
    };
function D0(r) {
  const i = O0(),
    {
      reducer: o = void 0,
      middleware: u,
      devTools: c = !0,
      preloadedState: f = void 0,
      enhancers: p = void 0,
    } = r || {};
  let m;
  if (typeof o == "function") m = o;
  else if (ju(o)) m = p0(o);
  else throw new Error(Ht(1));
  let y;
  typeof u == "function" ? (y = u(i)) : (y = i());
  let S = Ni;
  c && (S = P0({ trace: !1, ...(typeof c == "object" && c) }));
  const w = h0(...y),
    E = z0(w);
  let N = typeof p == "function" ? p(E) : E();
  const U = S(...N);
  return np(m, f, U);
}
function dp(r) {
  const i = {},
    o = [];
  let u;
  const c = {
    addCase(f, p) {
      const m = typeof f == "string" ? f : f.type;
      if (!m) throw new Error(Ht(28));
      if (m in i) throw new Error(Ht(29));
      return (i[m] = p), c;
    },
    addMatcher(f, p) {
      return o.push({ matcher: f, reducer: p }), c;
    },
    addDefaultCase(f) {
      return (u = f), c;
    },
  };
  return r(c), [i, o, u];
}
function F0(r) {
  return typeof r == "function";
}
function A0(r, i) {
  let [o, u, c] = dp(i),
    f;
  if (F0(r)) f = () => pd(r());
  else {
    const m = pd(r);
    f = () => m;
  }
  function p(m = f(), y) {
    let S = [
      o[y.type],
      ...u.filter(({ matcher: w }) => w(y)).map(({ reducer: w }) => w),
    ];
    return (
      S.filter((w) => !!w).length === 0 && (S = [c]),
      S.reduce((w, E) => {
        if (E)
          if (Tn(w)) {
            const U = E(w, y);
            return U === void 0 ? w : U;
          } else {
            if (Wt(w)) return ap(w, (N) => E(N, y));
            {
              const N = E(w, y);
              if (N === void 0) {
                if (w === null) return w;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return N;
            }
          }
        return w;
      }, m)
    );
  }
  return (p.getInitialState = f), p;
}
var I0 = (r, i) => (N0(r) ? r.match(i) : r(i));
function U0(...r) {
  return (i) => r.some((o) => I0(o, i));
}
var B0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  $0 = (r = 21) => {
    let i = "",
      o = r;
    for (; o--; ) i += B0[(Math.random() * 64) | 0];
    return i;
  },
  H0 = ["name", "message", "stack", "code"],
  lu = class {
    constructor(r, i) {
      Bs(this, "_type");
      (this.payload = r), (this.meta = i);
    }
  },
  yd = class {
    constructor(r, i) {
      Bs(this, "_type");
      (this.payload = r), (this.meta = i);
    }
  },
  W0 = (r) => {
    if (typeof r == "object" && r !== null) {
      const i = {};
      for (const o of H0) typeof r[o] == "string" && (i[o] = r[o]);
      return i;
    }
    return { message: String(r) };
  },
  V0 = (() => {
    function r(i, o, u) {
      const c = el(i + "/fulfilled", (y, S, w, E) => ({
          payload: y,
          meta: {
            ...(E || {}),
            arg: w,
            requestId: S,
            requestStatus: "fulfilled",
          },
        })),
        f = el(i + "/pending", (y, S, w) => ({
          payload: void 0,
          meta: {
            ...(w || {}),
            arg: S,
            requestId: y,
            requestStatus: "pending",
          },
        })),
        p = el(i + "/rejected", (y, S, w, E, N) => ({
          payload: E,
          error: ((u && u.serializeError) || W0)(y || "Rejected"),
          meta: {
            ...(N || {}),
            arg: w,
            requestId: S,
            rejectedWithValue: !!E,
            requestStatus: "rejected",
            aborted: (y == null ? void 0 : y.name) === "AbortError",
            condition: (y == null ? void 0 : y.name) === "ConditionError",
          },
        }));
      function m(y) {
        return (S, w, E) => {
          const N = u != null && u.idGenerator ? u.idGenerator(y) : $0(),
            U = new AbortController();
          let T, O;
          function R(H) {
            (O = H), U.abort();
          }
          const B = (async function () {
            var V, X;
            let H;
            try {
              let b =
                (V = u == null ? void 0 : u.condition) == null
                  ? void 0
                  : V.call(u, y, { getState: w, extra: E });
              if ((K0(b) && (b = await b), b === !1 || U.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const oe = new Promise((ne, je) => {
                (T = () => {
                  je({ name: "AbortError", message: O || "Aborted" });
                }),
                  U.signal.addEventListener("abort", T);
              });
              S(
                f(
                  N,
                  y,
                  (X = u == null ? void 0 : u.getPendingMeta) == null
                    ? void 0
                    : X.call(
                        u,
                        { requestId: N, arg: y },
                        { getState: w, extra: E }
                      )
                )
              ),
                (H = await Promise.race([
                  oe,
                  Promise.resolve(
                    o(y, {
                      dispatch: S,
                      getState: w,
                      extra: E,
                      requestId: N,
                      signal: U.signal,
                      abort: R,
                      rejectWithValue: (ne, je) => new lu(ne, je),
                      fulfillWithValue: (ne, je) => new yd(ne, je),
                    })
                  ).then((ne) => {
                    if (ne instanceof lu) throw ne;
                    return ne instanceof yd
                      ? c(ne.payload, N, y, ne.meta)
                      : c(ne, N, y);
                  }),
                ]));
            } catch (b) {
              H =
                b instanceof lu ? p(null, N, y, b.payload, b.meta) : p(b, N, y);
            } finally {
              T && U.signal.removeEventListener("abort", T);
            }
            return (
              (u &&
                !u.dispatchConditionRejection &&
                p.match(H) &&
                H.meta.condition) ||
                S(H),
              H
            );
          })();
          return Object.assign(B, {
            abort: R,
            requestId: N,
            arg: y,
            unwrap() {
              return B.then(Q0);
            },
          });
        };
      }
      return Object.assign(m, {
        pending: f,
        rejected: p,
        fulfilled: c,
        settled: U0(p, c),
        typePrefix: i,
      });
    }
    return (r.withTypes = () => r), r;
  })();
function Q0(r) {
  if (r.meta && r.meta.rejectedWithValue) throw r.payload;
  if (r.error) throw r.error;
  return r.payload;
}
function K0(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var q0 = Symbol.for("rtk-slice-createasyncthunk");
function J0(r, i) {
  return `${r}/${i}`;
}
function X0({ creators: r } = {}) {
  var o;
  const i = (o = r == null ? void 0 : r.asyncThunk) == null ? void 0 : o[q0];
  return function (c) {
    const { name: f, reducerPath: p = f } = c;
    if (!f) throw new Error(Ht(11));
    const m =
        (typeof c.reducers == "function" ? c.reducers(Z0()) : c.reducers) || {},
      y = Object.keys(m),
      S = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      w = {
        addCase(I, V) {
          const X = typeof I == "string" ? I : I.type;
          if (!X) throw new Error(Ht(12));
          if (X in S.sliceCaseReducersByType) throw new Error(Ht(13));
          return (S.sliceCaseReducersByType[X] = V), w;
        },
        addMatcher(I, V) {
          return S.sliceMatchers.push({ matcher: I, reducer: V }), w;
        },
        exposeAction(I, V) {
          return (S.actionCreators[I] = V), w;
        },
        exposeCaseReducer(I, V) {
          return (S.sliceCaseReducersByName[I] = V), w;
        },
      };
    y.forEach((I) => {
      const V = m[I],
        X = {
          reducerName: I,
          type: J0(f, I),
          createNotation: typeof c.reducers == "function",
        };
      e1(V) ? n1(X, V, w, i) : b0(X, V, w);
    });
    function E() {
      const [I = {}, V = [], X = void 0] =
          typeof c.extraReducers == "function"
            ? dp(c.extraReducers)
            : [c.extraReducers],
        b = { ...I, ...S.sliceCaseReducersByType };
      return A0(c.initialState, (oe) => {
        for (let ne in b) oe.addCase(ne, b[ne]);
        for (let ne of S.sliceMatchers) oe.addMatcher(ne.matcher, ne.reducer);
        for (let ne of V) oe.addMatcher(ne.matcher, ne.reducer);
        X && oe.addDefaultCase(X);
      });
    }
    const N = (I) => I,
      U = new Map();
    let T;
    function O(I, V) {
      return T || (T = E()), T(I, V);
    }
    function R() {
      return T || (T = E()), T.getInitialState();
    }
    function B(I, V = !1) {
      function X(oe) {
        let ne = oe[I];
        return typeof ne > "u" && V && (ne = R()), ne;
      }
      function b(oe = N) {
        const ne = hd(U, V, () => new WeakMap());
        return hd(ne, oe, () => {
          const je = {};
          for (const [ht, Mt] of Object.entries(c.selectors ?? {}))
            je[ht] = G0(Mt, oe, R, V);
          return je;
        });
      }
      return {
        reducerPath: I,
        getSelectors: b,
        get selectors() {
          return b(X);
        },
        selectSlice: X,
      };
    }
    const H = {
      name: f,
      reducer: O,
      actions: S.actionCreators,
      caseReducers: S.sliceCaseReducersByName,
      getInitialState: R,
      ...B(p),
      injectInto(I, { reducerPath: V, ...X } = {}) {
        const b = V ?? p;
        return (
          I.inject({ reducerPath: b, reducer: O }, X), { ...H, ...B(b, !0) }
        );
      },
    };
    return H;
  };
}
function G0(r, i, o, u) {
  function c(f, ...p) {
    let m = i(f);
    return typeof m > "u" && u && (m = o()), r(m, ...p);
  }
  return (c.unwrapped = r), c;
}
var Y0 = X0();
function Z0() {
  function r(i, o) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: i, ...o };
  }
  return (
    (r.withTypes = () => r),
    {
      reducer(i) {
        return Object.assign(
          {
            [i.name](...o) {
              return i(...o);
            },
          }[i.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(i, o) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: i,
          reducer: o,
        };
      },
      asyncThunk: r,
    }
  );
}
function b0({ type: r, reducerName: i, createNotation: o }, u, c) {
  let f, p;
  if ("reducer" in u) {
    if (o && !t1(u)) throw new Error(Ht(17));
    (f = u.reducer), (p = u.prepare);
  } else f = u;
  c.addCase(r, f)
    .exposeCaseReducer(i, f)
    .exposeAction(i, p ? el(r, p) : el(r));
}
function e1(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function t1(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function n1({ type: r, reducerName: i }, o, u, c) {
  if (!c) throw new Error(Ht(18));
  const {
      payloadCreator: f,
      fulfilled: p,
      pending: m,
      rejected: y,
      settled: S,
      options: w,
    } = o,
    E = c(r, f, w);
  u.exposeAction(i, E),
    p && u.addCase(E.fulfilled, p),
    m && u.addCase(E.pending, m),
    y && u.addCase(E.rejected, y),
    S && u.addMatcher(E.settled, S),
    u.exposeCaseReducer(i, {
      fulfilled: p || Si,
      pending: m || Si,
      rejected: y || Si,
      settled: S || Si,
    });
}
function Si() {}
function Ht(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const _i = V0(
    "products/fetch",
    async () =>
      (
        await he.get(
          "https://raw.githubusercontent.com/kraken-ship/golestan/refs/heads/main/assets/db1.json"
        )
      ).data.products
  ),
  r1 = Y0({
    name: "products",
    initialState: { products: [], loading: !0, error: "" },
    extraReducers: (r) => {
      r.addCase(_i.fulfilled, (i, o) => {
        (i.products = o.payload), (i.loading = !0);
      })
        .addCase(_i.pending, (i) => {
          i.loading = !0;
        })
        .addCase(_i.rejected, (i) => {
          (i.error = "server is un available"), (i.loading = !0);
        });
    },
  }),
  l1 = r1.reducer,
  i1 = ({ product2: r }) =>
    g.jsx(g.Fragment, {
      children: g.jsxs("div", {
        className: "",
        children: [
          g.jsx("div", {
            className: "w-[200px] ",
            children: g.jsx("img", {
              className: "w-[100%]",
              src: r.pimage,
              alt: "",
            }),
          }),
          g.jsxs("div", {
            className:
              "w-[100%] flex flex-row justify-start items-center pb-[10px] gap-x-[20px] ",
            children: [
              g.jsx("img", { src: r.p2image, alt: "" }),
              g.jsx("p", {
                className: "text-[22px] text-[red] font-[400]",
                children: r.title,
              }),
            ],
          }),
          g.jsxs("div", {
            className:
              "w-[100%] flex flex-row justify-between items-center  border-solid border-t-[1px] border-b-[1px] border-[black] gram",
            children: [
              g.jsx("p", {
                className: "w-[100%] text-[#52575B] text-[16px] font-[700]",
                children: r.title2,
              }),
              g.jsxs("div", {
                className:
                  "w-[100%] flex flex-row justify-end items-start gap-x-[10px]",
                children: [
                  g.jsx("img", { src: r.w1image, alt: "" }),
                  g.jsx("img", { src: r.w2image, alt: "" }),
                  g.jsx("img", { src: r.w3image, alt: "" }),
                ],
              }),
            ],
          }),
          g.jsx("div", {
            children: g.jsx("p", {
              className:
                "text-[#94979A] text-[16px] font-[400] leading-[35px] text-justify matn",
              children: r.description,
            }),
          }),
          g.jsx("button", {
            className:
              "mt-[10px] w-[150px] border-solid border-[1px] border-[grey] rounded-[10px] hover:bg-[red] hover:text-[white] text-[16px] font-[400] dokme",
            children: "خرید محصول",
          }),
        ],
      }),
    }),
  o1 = () => {
    const { products: r, loading: i, error: o } = a0((c) => c.products),
      u = o0();
    return (
      F.useEffect(() => {
        u(_i());
      }, []),
      g.jsx(g.Fragment, {
        children: g.jsx("div", {
          className:
            "w-[100%]    flex flex-row justify-center items-start gap-x-[50px] main",
          children: g.jsxs("div", {
            className:
              "w-[500px]   flex flex-col justify-start items-start gap-y-[60px] ",
            children: [
              i ? g.jsx("h1", { children: i }) : null,
              o ? g.jsx("h1", { children: o }) : null,
              r == null
                ? void 0
                : r.map((c) => g.jsx(i1, { product2: c }, c.id)),
            ],
          }),
        }),
      })
    );
  },
  s1 = () =>
    g.jsxs(g.Fragment, {
      children: [g.jsx(Hv, {}), g.jsx(Iv, {}), g.jsx(o1, {})],
    }),
  u1 = () =>
    g.jsxs(Sy, {
      children: [
        g.jsx(Pv, {}),
        g.jsxs(py, {
          children: [
            g.jsx(ou, { path: "Home", element: g.jsx(Cv, {}) }),
            g.jsx(ou, { path: "Tea", element: g.jsx(s1, {}) }),
          ],
        }),
        g.jsx(Dv, {}),
      ],
    }),
  a1 = D0({ reducer: { products: l1 } });
Em.createRoot(document.getElementById("root")).render(
  g.jsx(F.StrictMode, {
    children: g.jsx(r0, { store: a1, children: g.jsx(u1, {}) }),
  })
);
