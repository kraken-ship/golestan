var Ap = Object.defineProperty;
var Ip = (e, t, n) =>
  t in e
    ? Ap(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Do = (e, t, n) => Ip(e, typeof t != "symbol" ? t + "" : t, n);
function Up(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jc = { exports: {} },
  io = {},
  Rc = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dr = Symbol.for("react.element"),
  $p = Symbol.for("react.portal"),
  Hp = Symbol.for("react.fragment"),
  Vp = Symbol.for("react.strict_mode"),
  Wp = Symbol.for("react.profiler"),
  Qp = Symbol.for("react.provider"),
  Kp = Symbol.for("react.context"),
  qp = Symbol.for("react.forward_ref"),
  Gp = Symbol.for("react.suspense"),
  Jp = Symbol.for("react.memo"),
  Yp = Symbol.for("react.lazy"),
  Du = Symbol.iterator;
function Xp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Du && e[Du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Nc = Object.assign,
  Tc = {};
function Dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tc),
    (this.updater = n || Pc);
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Oc() {}
Oc.prototype = Dn.prototype;
function Ns(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tc),
    (this.updater = n || Pc);
}
var Ts = (Ns.prototype = new Oc());
Ts.constructor = Ns;
Nc(Ts, Dn.prototype);
Ts.isPureReactComponent = !0;
var Fu = Array.isArray,
  Lc = Object.prototype.hasOwnProperty,
  Os = { current: null },
  Mc = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Lc.call(t, r) && !Mc.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Dr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Os.current,
  };
}
function Zp(e, t) {
  return {
    $$typeof: Dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ls(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dr;
}
function bp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Au = /\/+/g;
function Fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bp("" + e.key)
    : t.toString(36);
}
function ci(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Dr:
          case $p:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Fo(l, 0) : r),
      Fu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Au, "$&/") + "/"),
          ci(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (Ls(i) &&
            (i = Zp(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Au, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Fu(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Fo(o, s);
      l += ci(o, t, n, u, i);
    }
  else if (((u = Xp(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Fo(o, s++)), (l += ci(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Kr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ci(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function eh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  fi = { transition: null },
  th = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: fi,
    ReactCurrentOwner: Os,
  };
function Dc() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: Kr,
  forEach: function (e, t, n) {
    Kr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Kr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Kr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ls(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Dn;
D.Fragment = Hp;
D.Profiler = Wp;
D.PureComponent = Ns;
D.StrictMode = Vp;
D.Suspense = Gp;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = th;
D.act = Dc;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Nc({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Os.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Lc.call(t, u) &&
        !Mc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Dr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qp, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = zc;
D.createFactory = function (e) {
  var t = zc.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: qp, render: e };
};
D.isValidElement = Ls;
D.lazy = function (e) {
  return { $$typeof: Yp, _payload: { _status: -1, _result: e }, _init: eh };
};
D.memo = function (e, t) {
  return { $$typeof: Jp, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = fi.transition;
  fi.transition = {};
  try {
    e();
  } finally {
    fi.transition = t;
  }
};
D.unstable_act = Dc;
D.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
D.useContext = function (e) {
  return pe.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
D.useId = function () {
  return pe.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return pe.current.useRef(e);
};
D.useState = function (e) {
  return pe.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return pe.current.useTransition();
};
D.version = "18.3.1";
Rc.exports = D;
var _ = Rc.exports;
const nh = Bp(_),
  rh = Up({ __proto__: null, default: nh }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ih = _,
  oh = Symbol.for("react.element"),
  lh = Symbol.for("react.fragment"),
  sh = Object.prototype.hasOwnProperty,
  uh = ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ah = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) sh.call(t, r) && !ah.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: oh,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: uh.current,
  };
}
io.Fragment = lh;
io.jsx = Fc;
io.jsxs = Fc;
jc.exports = io;
var m = jc.exports,
  Ac = { exports: {} },
  Te = {},
  Ic = { exports: {} },
  Uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, L) {
    var M = T.length;
    T.push(L);
    e: for (; 0 < M; ) {
      var G = (M - 1) >>> 1,
        ee = T[G];
      if (0 < i(ee, L)) (T[G] = L), (T[M] = ee), (M = G);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var L = T[0],
      M = T.pop();
    if (M !== L) {
      T[0] = M;
      e: for (var G = 0, ee = T.length, Wr = ee >>> 1; G < Wr; ) {
        var zt = 2 * (G + 1) - 1,
          zo = T[zt],
          Dt = zt + 1,
          Qr = T[Dt];
        if (0 > i(zo, M))
          Dt < ee && 0 > i(Qr, zo)
            ? ((T[G] = Qr), (T[Dt] = M), (G = Dt))
            : ((T[G] = zo), (T[zt] = M), (G = zt));
        else if (Dt < ee && 0 > i(Qr, M)) (T[G] = Qr), (T[Dt] = M), (G = Dt);
        else break e;
      }
    }
    return L;
  }
  function i(T, L) {
    var M = T.sortIndex - L.sortIndex;
    return M !== 0 ? M : T.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    c = 1,
    f = null,
    y = 3,
    S = !1,
    g = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= T)
        r(a), (L.sortIndex = L.expirationTime), t(u, L);
      else break;
      L = n(a);
    }
  }
  function x(T) {
    if (((v = !1), h(T), !g))
      if (n(u) !== null) (g = !0), Lo(k);
      else {
        var L = n(a);
        L !== null && Mo(x, L.startTime - T);
      }
  }
  function k(T, L) {
    (g = !1), v && ((v = !1), p(R), (R = -1)), (S = !0);
    var M = y;
    try {
      for (
        h(L), f = n(u);
        f !== null && (!(f.expirationTime > L) || (T && !Ee()));

      ) {
        var G = f.callback;
        if (typeof G == "function") {
          (f.callback = null), (y = f.priorityLevel);
          var ee = G(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof ee == "function" ? (f.callback = ee) : f === n(u) && r(u),
            h(L);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Wr = !0;
      else {
        var zt = n(a);
        zt !== null && Mo(x, zt.startTime - L), (Wr = !1);
      }
      return Wr;
    } finally {
      (f = null), (y = M), (S = !1);
    }
  }
  var j = !1,
    P = null,
    R = -1,
    F = 5,
    z = -1;
  function Ee() {
    return !(e.unstable_now() - z < F);
  }
  function $n() {
    if (P !== null) {
      var T = e.unstable_now();
      z = T;
      var L = !0;
      try {
        L = P(!0, T);
      } finally {
        L ? Hn() : ((j = !1), (P = null));
      }
    } else j = !1;
  }
  var Hn;
  if (typeof d == "function")
    Hn = function () {
      d($n);
    };
  else if (typeof MessageChannel < "u") {
    var zu = new MessageChannel(),
      Fp = zu.port2;
    (zu.port1.onmessage = $n),
      (Hn = function () {
        Fp.postMessage(null);
      });
  } else
    Hn = function () {
      w($n, 0);
    };
  function Lo(T) {
    (P = T), j || ((j = !0), Hn());
  }
  function Mo(T, L) {
    R = w(function () {
      T(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || S || ((g = !0), Lo(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = y;
      }
      var M = y;
      y = L;
      try {
        return T();
      } finally {
        y = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, L) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = y;
      y = T;
      try {
        return L();
      } finally {
        y = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, L, M) {
      var G = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? G + M : G))
          : (M = G),
        T)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = M + ee),
        (T = {
          id: c++,
          callback: L,
          priorityLevel: T,
          startTime: M,
          expirationTime: ee,
          sortIndex: -1,
        }),
        M > G
          ? ((T.sortIndex = M),
            t(a, T),
            n(u) === null &&
              T === n(a) &&
              (v ? (p(R), (R = -1)) : (v = !0), Mo(x, M - G)))
          : ((T.sortIndex = ee), t(u, T), g || S || ((g = !0), Lo(k))),
        T
      );
    }),
    (e.unstable_shouldYield = Ee),
    (e.unstable_wrapCallback = function (T) {
      var L = y;
      return function () {
        var M = y;
        y = L;
        try {
          return T.apply(this, arguments);
        } finally {
          y = M;
        }
      };
    });
})(Uc);
Ic.exports = Uc;
var ch = Ic.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh = _,
  Re = ch;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Bc = new Set(),
  pr = {};
function en(e, t) {
  Rn(e, t), Rn(e + "Capture", t);
}
function Rn(e, t) {
  for (pr[e] = t, e = 0; e < t.length; e++) Bc.add(t[e]);
}
var it = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Sl = Object.prototype.hasOwnProperty,
  dh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Iu = {},
  Uu = {};
function ph(e) {
  return Sl.call(Uu, e)
    ? !0
    : Sl.call(Iu, e)
    ? !1
    : dh.test(e)
    ? (Uu[e] = !0)
    : ((Iu[e] = !0), !1);
}
function hh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function mh(e, t, n, r) {
  if (t === null || typeof t > "u" || hh(e, t, n, r)) return !0;
  if (r) return !1;
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
function he(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ms = /[\-:]([a-z])/g;
function zs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, zs);
    le[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, zs);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ms, zs);
  le[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ds(e, t, n, r) {
  var i = le.hasOwnProperty(t) ? le[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (mh(t, n, i, r) && (n = null),
    r || i === null
      ? ph(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var at = fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  Fs = Symbol.for("react.strict_mode"),
  xl = Symbol.for("react.profiler"),
  $c = Symbol.for("react.provider"),
  Hc = Symbol.for("react.context"),
  As = Symbol.for("react.forward_ref"),
  El = Symbol.for("react.suspense"),
  kl = Symbol.for("react.suspense_list"),
  Is = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  Vc = Symbol.for("react.offscreen"),
  Bu = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bu && e[Bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Ao;
function Zn(e) {
  if (Ao === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ao = (t && t[1]) || "";
    }
  return (
    `
` +
    Ao +
    e
  );
}
var Io = !1;
function Uo(e, t) {
  if (!e || Io) return "";
  Io = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var u =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Io = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Zn(e) : "";
}
function yh(e) {
  switch (e.tag) {
    case 5:
      return Zn(e.type);
    case 16:
      return Zn("Lazy");
    case 13:
      return Zn("Suspense");
    case 19:
      return Zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Uo(e.type, !1)), e;
    case 11:
      return (e = Uo(e.type.render, !1)), e;
    case 1:
      return (e = Uo(e.type, !0)), e;
    default:
      return "";
  }
}
function _l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case an:
      return "Portal";
    case xl:
      return "Profiler";
    case Fs:
      return "StrictMode";
    case El:
      return "Suspense";
    case kl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hc:
        return (e.displayName || "Context") + ".Consumer";
      case $c:
        return (e._context.displayName || "Context") + ".Provider";
      case As:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Is:
        return (
          (t = e.displayName || null), t !== null ? t : _l(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return _l(e(t));
        } catch {}
    }
  return null;
}
function gh(e) {
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
      return _l(t);
    case 8:
      return t === Fs ? "StrictMode" : "Mode";
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
function Pt(e) {
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
function Wc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vh(e) {
  var t = Wc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Gr(e) {
  e._valueTracker || (e._valueTracker = vh(e));
}
function Qc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Wc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ci(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cl(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $u(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Kc(e, t) {
  (t = t.checked), t != null && Ds(e, "checked", t, !1);
}
function jl(e, t) {
  Kc(e, t);
  var n = Pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Rl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Rl(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
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
function Rl(e, t, n) {
  (t !== "number" || Ci(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function qc(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Jr,
  Jc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Jr = Jr || document.createElement("div"),
          Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Jr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
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
  wh = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function (e) {
  wh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rr[t] = rr[e]);
  });
});
function Yc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (rr.hasOwnProperty(e) && rr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Yc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Sh = K(
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
function Tl(e, t) {
  if (t) {
    if (Sh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Ol(e, t) {
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
var Ll = null;
function Us(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ml = null,
  En = null,
  kn = null;
function Qu(e) {
  if ((e = Ir(e))) {
    if (typeof Ml != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = ao(t)), Ml(e.stateNode, e.type, t));
  }
}
function Zc(e) {
  En ? (kn ? kn.push(e) : (kn = [e])) : (En = e);
}
function bc() {
  if (En) {
    var e = En,
      t = kn;
    if (((kn = En = null), Qu(e), t)) for (e = 0; e < t.length; e++) Qu(t[e]);
  }
}
function ef(e, t) {
  return e(t);
}
function tf() {}
var Bo = !1;
function nf(e, t, n) {
  if (Bo) return e(t, n);
  Bo = !0;
  try {
    return ef(e, t, n);
  } finally {
    (Bo = !1), (En !== null || kn !== null) && (tf(), bc());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ao(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var zl = !1;
if (it)
  try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", {
      get: function () {
        zl = !0;
      },
    }),
      window.addEventListener("test", Wn, Wn),
      window.removeEventListener("test", Wn, Wn);
  } catch {
    zl = !1;
  }
function xh(e, t, n, r, i, o, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var ir = !1,
  ji = null,
  Ri = !1,
  Dl = null,
  Eh = {
    onError: function (e) {
      (ir = !0), (ji = e);
    },
  };
function kh(e, t, n, r, i, o, l, s, u) {
  (ir = !1), (ji = null), xh.apply(Eh, arguments);
}
function _h(e, t, n, r, i, o, l, s, u) {
  if ((kh.apply(this, arguments), ir)) {
    if (ir) {
      var a = ji;
      (ir = !1), (ji = null);
    } else throw Error(C(198));
    Ri || ((Ri = !0), (Dl = a));
  }
}
function tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rf(e) {
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
function Ku(e) {
  if (tn(e) !== e) throw Error(C(188));
}
function Ch(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ku(i), e;
        if (o === r) return Ku(i), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function of(e) {
  return (e = Ch(e)), e !== null ? lf(e) : null;
}
function lf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sf = Re.unstable_scheduleCallback,
  qu = Re.unstable_cancelCallback,
  jh = Re.unstable_shouldYield,
  Rh = Re.unstable_requestPaint,
  J = Re.unstable_now,
  Ph = Re.unstable_getCurrentPriorityLevel,
  Bs = Re.unstable_ImmediatePriority,
  uf = Re.unstable_UserBlockingPriority,
  Pi = Re.unstable_NormalPriority,
  Nh = Re.unstable_LowPriority,
  af = Re.unstable_IdlePriority,
  oo = null,
  Ye = null;
function Th(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Mh,
  Oh = Math.log,
  Lh = Math.LN2;
function Mh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Oh(e) / Lh) | 0)) | 0;
}
var Yr = 64,
  Xr = 4194304;
function er(e) {
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
function Ni(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = er(s)) : ((o &= l), o !== 0 && (r = er(o)));
  } else (l = n & ~i), l !== 0 ? (r = er(l)) : o !== 0 && (r = er(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function zh(e, t) {
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
function Dh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Ve(o),
      s = 1 << l,
      u = i[l];
    u === -1
      ? (!(s & n) || s & r) && (i[l] = zh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Fl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cf() {
  var e = Yr;
  return (Yr <<= 1), !(Yr & 4194240) && (Yr = 64), e;
}
function $o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function Fh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ve(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function $s(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var I = 0;
function ff(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var df,
  Hs,
  pf,
  hf,
  mf,
  Al = !1,
  Zr = [],
  wt = null,
  St = null,
  xt = null,
  yr = new Map(),
  gr = new Map(),
  ht = [],
  Ah =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      xt = null;
      break;
    case "pointerover":
    case "pointerout":
      yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gr.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ir(t)), t !== null && Hs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ih(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (wt = Qn(wt, e, t, n, r, i)), !0;
    case "dragenter":
      return (St = Qn(St, e, t, n, r, i)), !0;
    case "mouseover":
      return (xt = Qn(xt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return yr.set(o, Qn(yr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), gr.set(o, Qn(gr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function yf(e) {
  var t = Ut(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rf(n)), t !== null)) {
          (e.blockedOn = t),
            mf(e.priority, function () {
              pf(n);
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
function di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ll = r), n.target.dispatchEvent(r), (Ll = null);
    } else return (t = Ir(n)), t !== null && Hs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ju(e, t, n) {
  di(e) && n.delete(t);
}
function Uh() {
  (Al = !1),
    wt !== null && di(wt) && (wt = null),
    St !== null && di(St) && (St = null),
    xt !== null && di(xt) && (xt = null),
    yr.forEach(Ju),
    gr.forEach(Ju);
}
function Kn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Al ||
      ((Al = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Uh)));
}
function vr(e) {
  function t(i) {
    return Kn(i, e);
  }
  if (0 < Zr.length) {
    Kn(Zr[0], e);
    for (var n = 1; n < Zr.length; n++) {
      var r = Zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wt !== null && Kn(wt, e),
      St !== null && Kn(St, e),
      xt !== null && Kn(xt, e),
      yr.forEach(t),
      gr.forEach(t),
      n = 0;
    n < ht.length;
    n++
  )
    (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); )
    yf(n), n.blockedOn === null && ht.shift();
}
var _n = at.ReactCurrentBatchConfig,
  Ti = !0;
function Bh(e, t, n, r) {
  var i = I,
    o = _n.transition;
  _n.transition = null;
  try {
    (I = 1), Vs(e, t, n, r);
  } finally {
    (I = i), (_n.transition = o);
  }
}
function $h(e, t, n, r) {
  var i = I,
    o = _n.transition;
  _n.transition = null;
  try {
    (I = 4), Vs(e, t, n, r);
  } finally {
    (I = i), (_n.transition = o);
  }
}
function Vs(e, t, n, r) {
  if (Ti) {
    var i = Il(e, t, n, r);
    if (i === null) Xo(e, t, r, Oi, n), Gu(e, r);
    else if (Ih(i, e, t, n, r)) r.stopPropagation();
    else if ((Gu(e, r), t & 4 && -1 < Ah.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ir(i);
        if (
          (o !== null && df(o),
          (o = Il(e, t, n, r)),
          o === null && Xo(e, t, r, Oi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Xo(e, t, r, null, n);
  }
}
var Oi = null;
function Il(e, t, n, r) {
  if (((Oi = null), (e = Us(r)), (e = Ut(e)), e !== null))
    if (((t = tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Oi = e), null;
}
function gf(e) {
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
      switch (Ph()) {
        case Bs:
          return 1;
        case uf:
          return 4;
        case Pi:
        case Nh:
          return 16;
        case af:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null,
  Ws = null,
  pi = null;
function vf() {
  if (pi) return pi;
  var e,
    t = Ws,
    n = t.length,
    r,
    i = "value" in yt ? yt.value : yt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (pi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function hi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function br() {
  return !0;
}
function Yu() {
  return !1;
}
function Oe(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? br
        : Yu),
      (this.isPropagationStopped = Yu),
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
          (this.isDefaultPrevented = br));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = br));
      },
      persist: function () {},
      isPersistent: br,
    }),
    t
  );
}
var Fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qs = Oe(Fn),
  Ar = K({}, Fn, { view: 0, detail: 0 }),
  Hh = Oe(Ar),
  Ho,
  Vo,
  qn,
  lo = K({}, Ar, {
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
    getModifierState: Ks,
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
        : (e !== qn &&
            (qn && e.type === "mousemove"
              ? ((Ho = e.screenX - qn.screenX), (Vo = e.screenY - qn.screenY))
              : (Vo = Ho = 0),
            (qn = e)),
          Ho);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vo;
    },
  }),
  Xu = Oe(lo),
  Vh = K({}, lo, { dataTransfer: 0 }),
  Wh = Oe(Vh),
  Qh = K({}, Ar, { relatedTarget: 0 }),
  Wo = Oe(Qh),
  Kh = K({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qh = Oe(Kh),
  Gh = K({}, Fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jh = Oe(Gh),
  Yh = K({}, Fn, { data: 0 }),
  Zu = Oe(Yh),
  Xh = {
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
  Zh = {
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
  bh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function em(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bh[e]) ? !!t[e] : !1;
}
function Ks() {
  return em;
}
var tm = K({}, Ar, {
    key: function (e) {
      if (e.key) {
        var t = Xh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Zh[e.keyCode] || "Unidentified"
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
    getModifierState: Ks,
    charCode: function (e) {
      return e.type === "keypress" ? hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? hi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  nm = Oe(tm),
  rm = K({}, lo, {
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
  bu = Oe(rm),
  im = K({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ks,
  }),
  om = Oe(im),
  lm = K({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = Oe(lm),
  um = K({}, lo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  am = Oe(um),
  cm = [9, 13, 27, 32],
  qs = it && "CompositionEvent" in window,
  or = null;
it && "documentMode" in document && (or = document.documentMode);
var fm = it && "TextEvent" in window && !or,
  wf = it && (!qs || (or && 8 < or && 11 >= or)),
  ea = " ",
  ta = !1;
function Sf(e, t) {
  switch (e) {
    case "keyup":
      return cm.indexOf(t.keyCode) !== -1;
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
function xf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function dm(e, t) {
  switch (e) {
    case "compositionend":
      return xf(t);
    case "keypress":
      return t.which !== 32 ? null : ((ta = !0), ea);
    case "textInput":
      return (e = t.data), e === ea && ta ? null : e;
    default:
      return null;
  }
}
function pm(e, t) {
  if (fn)
    return e === "compositionend" || (!qs && Sf(e, t))
      ? ((e = vf()), (pi = Ws = yt = null), (fn = !1), e)
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
      return wf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hm = {
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
function na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hm[e.type] : t === "textarea";
}
function Ef(e, t, n, r) {
  Zc(r),
    (t = Li(t, "onChange")),
    0 < t.length &&
      ((n = new Qs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lr = null,
  wr = null;
function mm(e) {
  Mf(e, 0);
}
function so(e) {
  var t = hn(e);
  if (Qc(t)) return e;
}
function ym(e, t) {
  if (e === "change") return t;
}
var kf = !1;
if (it) {
  var Qo;
  if (it) {
    var Ko = "oninput" in document;
    if (!Ko) {
      var ra = document.createElement("div");
      ra.setAttribute("oninput", "return;"),
        (Ko = typeof ra.oninput == "function");
    }
    Qo = Ko;
  } else Qo = !1;
  kf = Qo && (!document.documentMode || 9 < document.documentMode);
}
function ia() {
  lr && (lr.detachEvent("onpropertychange", _f), (wr = lr = null));
}
function _f(e) {
  if (e.propertyName === "value" && so(wr)) {
    var t = [];
    Ef(t, wr, e, Us(e)), nf(mm, t);
  }
}
function gm(e, t, n) {
  e === "focusin"
    ? (ia(), (lr = t), (wr = n), lr.attachEvent("onpropertychange", _f))
    : e === "focusout" && ia();
}
function vm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return so(wr);
}
function wm(e, t) {
  if (e === "click") return so(t);
}
function Sm(e, t) {
  if (e === "input" || e === "change") return so(t);
}
function xm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : xm;
function Sr(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Sl.call(t, i) || !Qe(e[i], t[i])) return !1;
  }
  return !0;
}
function oa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function la(e, t) {
  var n = oa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = oa(n);
  }
}
function Cf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jf() {
  for (var e = window, t = Ci(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ci(e.document);
  }
  return t;
}
function Gs(e) {
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
function Em(e) {
  var t = jf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Gs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = la(n, o));
        var l = la(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var km = it && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  Ul = null,
  sr = null,
  Bl = !1;
function sa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bl ||
    dn == null ||
    dn !== Ci(r) ||
    ((r = dn),
    "selectionStart" in r && Gs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (sr && Sr(sr, r)) ||
      ((sr = r),
      (r = Li(Ul, "onSelect")),
      0 < r.length &&
        ((t = new Qs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function ei(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pn = {
    animationend: ei("Animation", "AnimationEnd"),
    animationiteration: ei("Animation", "AnimationIteration"),
    animationstart: ei("Animation", "AnimationStart"),
    transitionend: ei("Transition", "TransitionEnd"),
  },
  qo = {},
  Rf = {};
it &&
  ((Rf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pn.animationend.animation,
    delete pn.animationiteration.animation,
    delete pn.animationstart.animation),
  "TransitionEvent" in window || delete pn.transitionend.transition);
function uo(e) {
  if (qo[e]) return qo[e];
  if (!pn[e]) return e;
  var t = pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rf) return (qo[e] = t[n]);
  return e;
}
var Pf = uo("animationend"),
  Nf = uo("animationiteration"),
  Tf = uo("animationstart"),
  Of = uo("transitionend"),
  Lf = new Map(),
  ua =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ot(e, t) {
  Lf.set(e, t), en(t, [e]);
}
for (var Go = 0; Go < ua.length; Go++) {
  var Jo = ua[Go],
    _m = Jo.toLowerCase(),
    Cm = Jo[0].toUpperCase() + Jo.slice(1);
  Ot(_m, "on" + Cm);
}
Ot(Pf, "onAnimationEnd");
Ot(Nf, "onAnimationIteration");
Ot(Tf, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Of, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
en(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
en(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
en(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
en(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function aa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _h(r, t, void 0, e), (e.currentTarget = null);
}
function Mf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
          aa(i, s, a), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          aa(i, s, a), (o = u);
        }
    }
  }
  if (Ri) throw ((e = Dl), (Ri = !1), (Dl = null), e);
}
function $(e, t) {
  var n = t[Ql];
  n === void 0 && (n = t[Ql] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zf(t, e, 2, !1), n.add(r));
}
function Yo(e, t, n) {
  var r = 0;
  t && (r |= 4), zf(n, e, r, t);
}
var ti = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[ti]) {
    (e[ti] = !0),
      Bc.forEach(function (n) {
        n !== "selectionchange" && (jm.has(n) || Yo(n, !1, e), Yo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ti] || ((t[ti] = !0), Yo("selectionchange", !1, t));
  }
}
function zf(e, t, n, r) {
  switch (gf(t)) {
    case 1:
      var i = Bh;
      break;
    case 4:
      i = $h;
      break;
    default:
      i = Vs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !zl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Xo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Ut(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  nf(function () {
    var a = o,
      c = Us(n),
      f = [];
    e: {
      var y = Lf.get(e);
      if (y !== void 0) {
        var S = Qs,
          g = e;
        switch (e) {
          case "keypress":
            if (hi(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = nm;
            break;
          case "focusin":
            (g = "focus"), (S = Wo);
            break;
          case "focusout":
            (g = "blur"), (S = Wo);
            break;
          case "beforeblur":
          case "afterblur":
            S = Wo;
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
            S = Xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Wh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = om;
            break;
          case Pf:
          case Nf:
          case Tf:
            S = qh;
            break;
          case Of:
            S = sm;
            break;
          case "scroll":
            S = Hh;
            break;
          case "wheel":
            S = am;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Jh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = bu;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (y !== null ? y + "Capture" : null) : y;
        v = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              p !== null && ((x = mr(d, p)), x != null && v.push(Er(d, x, h)))),
            w)
          )
            break;
          d = d.return;
        }
        0 < v.length &&
          ((y = new S(y, g, null, n, c)), f.push({ event: y, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Ll &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ut(g) || g[ot]))
        )
          break e;
        if (
          (S || y) &&
          ((y =
            c.window === c
              ? c
              : (y = c.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          S
            ? ((g = n.relatedTarget || n.toElement),
              (S = a),
              (g = g ? Ut(g) : null),
              g !== null &&
                ((w = tn(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((S = null), (g = a)),
          S !== g)
        ) {
          if (
            ((v = Xu),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = bu),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (w = S == null ? y : hn(S)),
            (h = g == null ? y : hn(g)),
            (y = new v(x, d + "leave", S, n, c)),
            (y.target = w),
            (y.relatedTarget = h),
            (x = null),
            Ut(c) === a &&
              ((v = new v(p, d + "enter", g, n, c)),
              (v.target = h),
              (v.relatedTarget = w),
              (x = v)),
            (w = x),
            S && g)
          )
            t: {
              for (v = S, p = g, d = 0, h = v; h; h = on(h)) d++;
              for (h = 0, x = p; x; x = on(x)) h++;
              for (; 0 < d - h; ) (v = on(v)), d--;
              for (; 0 < h - d; ) (p = on(p)), h--;
              for (; d--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = on(v)), (p = on(p));
              }
              v = null;
            }
          else v = null;
          S !== null && ca(f, y, S, v, !1),
            g !== null && w !== null && ca(f, w, g, v, !0);
        }
      }
      e: {
        if (
          ((y = a ? hn(a) : window),
          (S = y.nodeName && y.nodeName.toLowerCase()),
          S === "select" || (S === "input" && y.type === "file"))
        )
          var k = ym;
        else if (na(y))
          if (kf) k = Sm;
          else {
            k = vm;
            var j = gm;
          }
        else
          (S = y.nodeName) &&
            S.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (k = wm);
        if (k && (k = k(e, a))) {
          Ef(f, k, n, c);
          break e;
        }
        j && j(e, y, a),
          e === "focusout" &&
            (j = y._wrapperState) &&
            j.controlled &&
            y.type === "number" &&
            Rl(y, "number", y.value);
      }
      switch (((j = a ? hn(a) : window), e)) {
        case "focusin":
          (na(j) || j.contentEditable === "true") &&
            ((dn = j), (Ul = a), (sr = null));
          break;
        case "focusout":
          sr = Ul = dn = null;
          break;
        case "mousedown":
          Bl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bl = !1), sa(f, n, c);
          break;
        case "selectionchange":
          if (km) break;
        case "keydown":
        case "keyup":
          sa(f, n, c);
      }
      var P;
      if (qs)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        fn
          ? Sf(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (wf &&
          n.locale !== "ko" &&
          (fn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && fn && (P = vf())
            : ((yt = c),
              (Ws = "value" in yt ? yt.value : yt.textContent),
              (fn = !0))),
        (j = Li(a, R)),
        0 < j.length &&
          ((R = new Zu(R, e, null, n, c)),
          f.push({ event: R, listeners: j }),
          P ? (R.data = P) : ((P = xf(n)), P !== null && (R.data = P)))),
        (P = fm ? dm(e, n) : pm(e, n)) &&
          ((a = Li(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new Zu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = P)));
    }
    Mf(f, t);
  });
}
function Er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = mr(e, n)),
      o != null && r.unshift(Er(e, o, i)),
      (o = mr(e, t)),
      o != null && r.push(Er(e, o, i))),
      (e = e.return);
  }
  return r;
}
function on(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ca(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      i
        ? ((u = mr(n, o)), u != null && l.unshift(Er(n, u, s)))
        : i || ((u = mr(n, o)), u != null && l.push(Er(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Rm = /\r\n?/g,
  Pm = /\u0000|\uFFFD/g;
function fa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rm,
      `
`
    )
    .replace(Pm, "");
}
function ni(e, t, n) {
  if (((t = fa(t)), fa(e) !== t && n)) throw Error(C(425));
}
function Mi() {}
var $l = null,
  Hl = null;
function Vl(e, t) {
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
var Wl = typeof setTimeout == "function" ? setTimeout : void 0,
  Nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  da = typeof Promise == "function" ? Promise : void 0,
  Tm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof da < "u"
      ? function (e) {
          return da.resolve(null).then(e).catch(Om);
        }
      : Wl;
function Om(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), vr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  vr(t);
}
function Et(e) {
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
function pa(e) {
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
var An = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + An,
  kr = "__reactProps$" + An,
  ot = "__reactContainer$" + An,
  Ql = "__reactEvents$" + An,
  Lm = "__reactListeners$" + An,
  Mm = "__reactHandles$" + An;
function Ut(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ot] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pa(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = pa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ir(e) {
  return (
    (e = e[Je] || e[ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function ao(e) {
  return e[kr] || null;
}
var Kl = [],
  mn = -1;
function Lt(e) {
  return { current: e };
}
function H(e) {
  0 > mn || ((e.current = Kl[mn]), (Kl[mn] = null), mn--);
}
function B(e, t) {
  mn++, (Kl[mn] = e.current), (e.current = t);
}
var Nt = {},
  ce = Lt(Nt),
  ge = Lt(!1),
  Kt = Nt;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function zi() {
  H(ge), H(ce);
}
function ha(e, t, n) {
  if (ce.current !== Nt) throw Error(C(168));
  B(ce, t), B(ge, n);
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, gh(e) || "Unknown", i));
  return K({}, n, r);
}
function Di(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nt),
    (Kt = ce.current),
    B(ce, e),
    B(ge, ge.current),
    !0
  );
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Df(e, t, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(ge),
      H(ce),
      B(ce, e))
    : H(ge),
    B(ge, n);
}
var be = null,
  co = !1,
  bo = !1;
function Ff(e) {
  be === null ? (be = [e]) : be.push(e);
}
function zm(e) {
  (co = !0), Ff(e);
}
function Mt() {
  if (!bo && be !== null) {
    bo = !0;
    var e = 0,
      t = I;
    try {
      var n = be;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (be = null), (co = !1);
    } catch (i) {
      throw (be !== null && (be = be.slice(e + 1)), sf(Bs, Mt), i);
    } finally {
      (I = t), (bo = !1);
    }
  }
  return null;
}
var yn = [],
  gn = 0,
  Fi = null,
  Ai = 0,
  Le = [],
  Me = 0,
  qt = null,
  et = 1,
  tt = "";
function Ft(e, t) {
  (yn[gn++] = Ai), (yn[gn++] = Fi), (Fi = e), (Ai = t);
}
function Af(e, t, n) {
  (Le[Me++] = et), (Le[Me++] = tt), (Le[Me++] = qt), (qt = e);
  var r = et;
  e = tt;
  var i = 32 - Ve(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ve(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (et = (1 << (32 - Ve(t) + i)) | (n << i) | r),
      (tt = o + e);
  } else (et = (1 << o) | (n << i) | r), (tt = e);
}
function Js(e) {
  e.return !== null && (Ft(e, 1), Af(e, 1, 0));
}
function Ys(e) {
  for (; e === Fi; )
    (Fi = yn[--gn]), (yn[gn] = null), (Ai = yn[--gn]), (yn[gn] = null);
  for (; e === qt; )
    (qt = Le[--Me]),
      (Le[Me] = null),
      (tt = Le[--Me]),
      (Le[Me] = null),
      (et = Le[--Me]),
      (Le[Me] = null);
}
var Ce = null,
  _e = null,
  V = !1,
  $e = null;
function If(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ya(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (_e = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: et, overflow: tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gl(e) {
  if (V) {
    var t = _e;
    if (t) {
      var n = t;
      if (!ya(e, t)) {
        if (ql(e)) throw Error(C(418));
        t = Et(n.nextSibling);
        var r = Ce;
        t && ya(e, t)
          ? If(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e));
      }
    } else {
      if (ql(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e);
    }
  }
}
function ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function ri(e) {
  if (e !== Ce) return !1;
  if (!V) return ga(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vl(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (ql(e)) throw (Uf(), Error(C(418)));
    for (; t; ) If(e, t), (t = Et(t.nextSibling));
  }
  if ((ga(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Ce ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function Uf() {
  for (var e = _e; e; ) e = Et(e.nextSibling);
}
function Nn() {
  (_e = Ce = null), (V = !1);
}
function Xs(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var Dm = at.ReactCurrentBatchConfig;
function Gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function ii(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function va(e) {
  var t = e._init;
  return t(e._payload);
}
function Bf(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function i(p, d) {
    return (p = jt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, h, x) {
    return d === null || d.tag !== 6
      ? ((d = ll(h, p.mode, x)), (d.return = p), d)
      : ((d = i(d, h)), (d.return = p), d);
  }
  function u(p, d, h, x) {
    var k = h.type;
    return k === cn
      ? c(p, d, h.props.children, x, h.key)
      : d !== null &&
        (d.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === dt &&
            va(k) === d.type))
      ? ((x = i(d, h.props)), (x.ref = Gn(p, d, h)), (x.return = p), x)
      : ((x = xi(h.type, h.key, h.props, null, p.mode, x)),
        (x.ref = Gn(p, d, h)),
        (x.return = p),
        x);
  }
  function a(p, d, h, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = sl(h, p.mode, x)), (d.return = p), d)
      : ((d = i(d, h.children || [])), (d.return = p), d);
  }
  function c(p, d, h, x, k) {
    return d === null || d.tag !== 7
      ? ((d = Wt(h, p.mode, x, k)), (d.return = p), d)
      : ((d = i(d, h)), (d.return = p), d);
  }
  function f(p, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ll("" + d, p.mode, h)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case qr:
          return (
            (h = xi(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = Gn(p, null, d)),
            (h.return = p),
            h
          );
        case an:
          return (d = sl(d, p.mode, h)), (d.return = p), d;
        case dt:
          var x = d._init;
          return f(p, x(d._payload), h);
      }
      if (bn(d) || Vn(d))
        return (d = Wt(d, p.mode, h, null)), (d.return = p), d;
      ii(p, d);
    }
    return null;
  }
  function y(p, d, h, x) {
    var k = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : s(p, d, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case qr:
          return h.key === k ? u(p, d, h, x) : null;
        case an:
          return h.key === k ? a(p, d, h, x) : null;
        case dt:
          return (k = h._init), y(p, d, k(h._payload), x);
      }
      if (bn(h) || Vn(h)) return k !== null ? null : c(p, d, h, x, null);
      ii(p, h);
    }
    return null;
  }
  function S(p, d, h, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(h) || null), s(d, p, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case qr:
          return (p = p.get(x.key === null ? h : x.key) || null), u(d, p, x, k);
        case an:
          return (p = p.get(x.key === null ? h : x.key) || null), a(d, p, x, k);
        case dt:
          var j = x._init;
          return S(p, d, h, j(x._payload), k);
      }
      if (bn(x) || Vn(x)) return (p = p.get(h) || null), c(d, p, x, k, null);
      ii(d, x);
    }
    return null;
  }
  function g(p, d, h, x) {
    for (
      var k = null, j = null, P = d, R = (d = 0), F = null;
      P !== null && R < h.length;
      R++
    ) {
      P.index > R ? ((F = P), (P = null)) : (F = P.sibling);
      var z = y(p, P, h[R], x);
      if (z === null) {
        P === null && (P = F);
        break;
      }
      e && P && z.alternate === null && t(p, P),
        (d = o(z, d, R)),
        j === null ? (k = z) : (j.sibling = z),
        (j = z),
        (P = F);
    }
    if (R === h.length) return n(p, P), V && Ft(p, R), k;
    if (P === null) {
      for (; R < h.length; R++)
        (P = f(p, h[R], x)),
          P !== null &&
            ((d = o(P, d, R)), j === null ? (k = P) : (j.sibling = P), (j = P));
      return V && Ft(p, R), k;
    }
    for (P = r(p, P); R < h.length; R++)
      (F = S(P, p, R, h[R], x)),
        F !== null &&
          (e && F.alternate !== null && P.delete(F.key === null ? R : F.key),
          (d = o(F, d, R)),
          j === null ? (k = F) : (j.sibling = F),
          (j = F));
    return (
      e &&
        P.forEach(function (Ee) {
          return t(p, Ee);
        }),
      V && Ft(p, R),
      k
    );
  }
  function v(p, d, h, x) {
    var k = Vn(h);
    if (typeof k != "function") throw Error(C(150));
    if (((h = k.call(h)), h == null)) throw Error(C(151));
    for (
      var j = (k = null), P = d, R = (d = 0), F = null, z = h.next();
      P !== null && !z.done;
      R++, z = h.next()
    ) {
      P.index > R ? ((F = P), (P = null)) : (F = P.sibling);
      var Ee = y(p, P, z.value, x);
      if (Ee === null) {
        P === null && (P = F);
        break;
      }
      e && P && Ee.alternate === null && t(p, P),
        (d = o(Ee, d, R)),
        j === null ? (k = Ee) : (j.sibling = Ee),
        (j = Ee),
        (P = F);
    }
    if (z.done) return n(p, P), V && Ft(p, R), k;
    if (P === null) {
      for (; !z.done; R++, z = h.next())
        (z = f(p, z.value, x)),
          z !== null &&
            ((d = o(z, d, R)), j === null ? (k = z) : (j.sibling = z), (j = z));
      return V && Ft(p, R), k;
    }
    for (P = r(p, P); !z.done; R++, z = h.next())
      (z = S(P, p, R, z.value, x)),
        z !== null &&
          (e && z.alternate !== null && P.delete(z.key === null ? R : z.key),
          (d = o(z, d, R)),
          j === null ? (k = z) : (j.sibling = z),
          (j = z));
    return (
      e &&
        P.forEach(function ($n) {
          return t(p, $n);
        }),
      V && Ft(p, R),
      k
    );
  }
  function w(p, d, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === cn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case qr:
          e: {
            for (var k = h.key, j = d; j !== null; ) {
              if (j.key === k) {
                if (((k = h.type), k === cn)) {
                  if (j.tag === 7) {
                    n(p, j.sibling),
                      (d = i(j, h.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  j.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === dt &&
                    va(k) === j.type)
                ) {
                  n(p, j.sibling),
                    (d = i(j, h.props)),
                    (d.ref = Gn(p, j, h)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, j);
                break;
              } else t(p, j);
              j = j.sibling;
            }
            h.type === cn
              ? ((d = Wt(h.props.children, p.mode, x, h.key)),
                (d.return = p),
                (p = d))
              : ((x = xi(h.type, h.key, h.props, null, p.mode, x)),
                (x.ref = Gn(p, d, h)),
                (x.return = p),
                (p = x));
          }
          return l(p);
        case an:
          e: {
            for (j = h.key; d !== null; ) {
              if (d.key === j)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(p, d.sibling),
                    (d = i(d, h.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = sl(h, p.mode, x)), (d.return = p), (p = d);
          }
          return l(p);
        case dt:
          return (j = h._init), w(p, d, j(h._payload), x);
      }
      if (bn(h)) return g(p, d, h, x);
      if (Vn(h)) return v(p, d, h, x);
      ii(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = i(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = ll(h, p.mode, x)), (d.return = p), (p = d)),
        l(p))
      : n(p, d);
  }
  return w;
}
var Tn = Bf(!0),
  $f = Bf(!1),
  Ii = Lt(null),
  Ui = null,
  vn = null,
  Zs = null;
function bs() {
  Zs = vn = Ui = null;
}
function eu(e) {
  var t = Ii.current;
  H(Ii), (e._currentValue = t);
}
function Jl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Cn(e, t) {
  (Ui = e),
    (Zs = vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Fe(e) {
  var t = e._currentValue;
  if (Zs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vn === null)) {
      if (Ui === null) throw Error(C(308));
      (vn = e), (Ui.dependencies = { lanes: 0, firstContext: e });
    } else vn = vn.next = e;
  return t;
}
var Bt = null;
function tu(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Hf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), tu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    lt(e, r)
  );
}
function lt(e, t) {
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
var pt = !1;
function nu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vf(e, t) {
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
function nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      lt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), tu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    lt(e, n)
  );
}
function mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
  }
}
function wa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Bi(e, t, n, r) {
  var i = e.updateQueue;
  pt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (o = a) : (l.next = a), (l = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = i.baseState;
    (l = 0), (c = a = u = null), (s = o);
    do {
      var y = s.lane,
        S = s.eventTime;
      if ((r & y) === y) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            v = s;
          switch (((y = t), (S = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                f = g.call(S, f, y);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (y = typeof g == "function" ? g.call(S, f, y) : g),
                y == null)
              )
                break e;
              f = K({}, f, y);
              break e;
            case 2:
              pt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (y = i.effects),
          y === null ? (i.effects = [s]) : y.push(s));
      } else
        (S = {
          eventTime: S,
          lane: y,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = S), (u = f)) : (c = c.next = S),
          (l |= y);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (y = s),
          (s = y.next),
          (y.next = null),
          (i.lastBaseUpdate = y),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Jt |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function Sa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var Ur = {},
  Xe = Lt(Ur),
  _r = Lt(Ur),
  Cr = Lt(Ur);
function $t(e) {
  if (e === Ur) throw Error(C(174));
  return e;
}
function ru(e, t) {
  switch ((B(Cr, t), B(_r, e), B(Xe, Ur), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nl(t, e));
  }
  H(Xe), B(Xe, t);
}
function On() {
  H(Xe), H(_r), H(Cr);
}
function Wf(e) {
  $t(Cr.current);
  var t = $t(Xe.current),
    n = Nl(t, e.type);
  t !== n && (B(_r, e), B(Xe, n));
}
function iu(e) {
  _r.current === e && (H(Xe), H(_r));
}
var W = Lt(0);
function $i(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var el = [];
function ou() {
  for (var e = 0; e < el.length; e++)
    el[e]._workInProgressVersionPrimary = null;
  el.length = 0;
}
var yi = at.ReactCurrentDispatcher,
  tl = at.ReactCurrentBatchConfig,
  Gt = 0,
  Q = null,
  Z = null,
  te = null,
  Hi = !1,
  ur = !1,
  jr = 0,
  Fm = 0;
function se() {
  throw Error(C(321));
}
function lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function su(e, t, n, r, i, o) {
  if (
    ((Gt = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (yi.current = e === null || e.memoizedState === null ? Bm : $m),
    (e = n(r, i)),
    ur)
  ) {
    o = 0;
    do {
      if (((ur = !1), (jr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (te = Z = null),
        (t.updateQueue = null),
        (yi.current = Hm),
        (e = n(r, i));
    } while (ur);
  }
  if (
    ((yi.current = Vi),
    (t = Z !== null && Z.next !== null),
    (Gt = 0),
    (te = Z = Q = null),
    (Hi = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function uu() {
  var e = jr !== 0;
  return (jr = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (Q.memoizedState = te = e) : (te = te.next = e), te;
}
function Ae() {
  if (Z === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = te === null ? Q.memoizedState : te.next;
  if (t !== null) (te = t), (Z = e);
  else {
    if (e === null) throw Error(C(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      te === null ? (Q.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function Rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nl(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = Z,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((Gt & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (l = r)) : (u = u.next = f),
          (Q.lanes |= c),
          (Jt |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (l = r) : (u.next = s),
      Qe(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Q.lanes |= o), (Jt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function rl(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Qe(o, t.memoizedState) || (ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Qf() {}
function Kf(e, t) {
  var n = Q,
    r = Ae(),
    i = t(),
    o = !Qe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ye = !0)),
    (r = r.queue),
    au(Jf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Pr(9, Gf.bind(null, n, r, i, t), void 0, null),
      ne === null)
    )
      throw Error(C(349));
    Gt & 30 || qf(n, t, i);
  }
  return i;
}
function qf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yf(t) && Xf(e);
}
function Jf(e, t, n) {
  return n(function () {
    Yf(t) && Xf(e);
  });
}
function Yf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function Xf(e) {
  var t = lt(e, 1);
  t !== null && We(t, e, 1, -1);
}
function xa(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Um.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zf() {
  return Ae().memoizedState;
}
function gi(e, t, n, r) {
  var i = Ge();
  (Q.flags |= e),
    (i.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function fo(e, t, n, r) {
  var i = Ae();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var l = Z.memoizedState;
    if (((o = l.destroy), r !== null && lu(r, l.deps))) {
      i.memoizedState = Pr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = Pr(1 | t, n, o, r));
}
function Ea(e, t) {
  return gi(8390656, 8, e, t);
}
function au(e, t) {
  return fo(2048, 8, e, t);
}
function bf(e, t) {
  return fo(4, 2, e, t);
}
function ed(e, t) {
  return fo(4, 4, e, t);
}
function td(e, t) {
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
function nd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fo(4, 4, td.bind(null, t, e), n)
  );
}
function cu() {}
function rd(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function id(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function od(e, t, n) {
  return Gt & 21
    ? (Qe(n, t) || ((n = cf()), (Q.lanes |= n), (Jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function Am(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = tl.transition;
  tl.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (tl.transition = r);
  }
}
function ld() {
  return Ae().memoizedState;
}
function Im(e, t, n) {
  var r = Ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sd(e))
  )
    ud(t, n);
  else if (((n = Hf(e, t, n, r)), n !== null)) {
    var i = de();
    We(n, e, r, i), ad(n, t, r);
  }
}
function Um(e, t, n) {
  var r = Ct(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sd(e)) ud(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Qe(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), tu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hf(e, t, i, r)),
      n !== null && ((i = de()), We(n, e, r, i), ad(n, t, r));
  }
}
function sd(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function ud(e, t) {
  ur = Hi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ad(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
  }
}
var Vi = {
    readContext: Fe,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  Bm = {
    readContext: Fe,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: Ea,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        gi(4194308, 4, td.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return gi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return gi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Im.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xa,
    useDebugValue: cu,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = xa(!1),
        t = e[0];
      return (e = Am.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = Ge();
      if (V) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(C(349));
        Gt & 30 || qf(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ea(Jf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Pr(9, Gf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = ne.identifierPrefix;
      if (V) {
        var n = tt,
          r = et;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Fm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $m = {
    readContext: Fe,
    useCallback: rd,
    useContext: Fe,
    useEffect: au,
    useImperativeHandle: nd,
    useInsertionEffect: bf,
    useLayoutEffect: ed,
    useMemo: id,
    useReducer: nl,
    useRef: Zf,
    useState: function () {
      return nl(Rr);
    },
    useDebugValue: cu,
    useDeferredValue: function (e) {
      var t = Ae();
      return od(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = nl(Rr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: Qf,
    useSyncExternalStore: Kf,
    useId: ld,
    unstable_isNewReconciler: !1,
  },
  Hm = {
    readContext: Fe,
    useCallback: rd,
    useContext: Fe,
    useEffect: au,
    useImperativeHandle: nd,
    useInsertionEffect: bf,
    useLayoutEffect: ed,
    useMemo: id,
    useReducer: rl,
    useRef: Zf,
    useState: function () {
      return rl(Rr);
    },
    useDebugValue: cu,
    useDeferredValue: function (e) {
      var t = Ae();
      return Z === null ? (t.memoizedState = e) : od(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = rl(Rr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: Qf,
    useSyncExternalStore: Kf,
    useId: ld,
    unstable_isNewReconciler: !1,
  };
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var po = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = Ct(e),
      o = nt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = kt(e, o, i)),
      t !== null && (We(t, e, i, r), mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = Ct(e),
      o = nt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = kt(e, o, i)),
      t !== null && (We(t, e, i, r), mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Ct(e),
      i = nt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = kt(e, i, r)),
      t !== null && (We(t, e, r, n), mi(t, e, r));
  },
};
function ka(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Sr(n, r) || !Sr(i, o)
      : !0
  );
}
function cd(e, t, n) {
  var r = !1,
    i = Nt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Fe(o))
      : ((i = ve(t) ? Kt : ce.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Pn(e, i) : Nt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = po),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _a(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && po.enqueueReplaceState(t, t.state, null);
}
function Xl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), nu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Fe(o))
    : ((o = ve(t) ? Kt : ce.current), (i.context = Pn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Yl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && po.enqueueReplaceState(i, i.state, null),
      Bi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function il(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Vm = typeof WeakMap == "function" ? WeakMap : Map;
function fd(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Qi || ((Qi = !0), (us = r)), Zl(e, t);
    }),
    n
  );
}
function dd(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Zl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Zl(e, t),
          typeof r != "function" &&
            (_t === null ? (_t = new Set([this])) : _t.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ca(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vm();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = r0.bind(null, e, t, n)), t.then(e, e));
}
function ja(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ra(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nt(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wm = at.ReactCurrentOwner,
  ye = !1;
function fe(e, t, n, r) {
  t.child = e === null ? $f(t, null, n, r) : Tn(t, e.child, n, r);
}
function Pa(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Cn(t, i),
    (r = su(e, t, n, r, o, i)),
    (n = uu()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (V && n && Js(t), (t.flags |= 1), fe(e, t, r, i), t.child)
  );
}
function Na(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !vu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), pd(e, t, o, r, i))
      : ((e = xi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Sr), n(l, r) && e.ref === t.ref)
    )
      return st(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = jt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Sr(o, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), st(e, t, i);
  }
  return bl(e, t, n, r, i);
}
function hd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Sn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Sn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(Sn, ke),
        (ke |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Sn, ke),
      (ke |= r);
  return fe(e, t, i, n), t.child;
}
function md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bl(e, t, n, r, i) {
  var o = ve(n) ? Kt : ce.current;
  return (
    (o = Pn(t, o)),
    Cn(t, i),
    (n = su(e, t, n, r, o, i)),
    (r = uu()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (V && r && Js(t), (t.flags |= 1), fe(e, t, n, i), t.child)
  );
}
function Ta(e, t, n, r, i) {
  if (ve(n)) {
    var o = !0;
    Di(t);
  } else o = !1;
  if ((Cn(t, i), t.stateNode === null))
    vi(e, t), cd(t, n, r), Xl(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Fe(a))
      : ((a = ve(n) ? Kt : ce.current), (a = Pn(t, a)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && _a(t, l, r, a)),
      (pt = !1);
    var y = t.memoizedState;
    (l.state = y),
      Bi(t, r, l, i),
      (u = t.memoizedState),
      s !== r || y !== u || ge.current || pt
        ? (typeof c == "function" && (Yl(t, n, c, r), (u = t.memoizedState)),
          (s = pt || ka(t, n, s, r, y, u, a))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Vf(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Ue(t.type, s)),
      (l.props = a),
      (f = t.pendingProps),
      (y = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Fe(u))
        : ((u = ve(n) ? Kt : ce.current), (u = Pn(t, u)));
    var S = n.getDerivedStateFromProps;
    (c =
      typeof S == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || y !== u) && _a(t, l, r, u)),
      (pt = !1),
      (y = t.memoizedState),
      (l.state = y),
      Bi(t, r, l, i);
    var g = t.memoizedState;
    s !== f || y !== g || ge.current || pt
      ? (typeof S == "function" && (Yl(t, n, S, r), (g = t.memoizedState)),
        (a = pt || ka(t, n, a, r, y, g, u) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return es(e, t, n, r, o, i);
}
function es(e, t, n, r, i, o) {
  md(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ma(t, n, !1), st(e, t, o);
  (r = t.stateNode), (Wm.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Tn(t, e.child, null, o)), (t.child = Tn(t, null, s, o)))
      : fe(e, t, s, o),
    (t.memoizedState = r.state),
    i && ma(t, n, !0),
    t.child
  );
}
function yd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ha(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ha(e, t.context, !1),
    ru(e, t.containerInfo);
}
function Oa(e, t, n, r, i) {
  return Nn(), Xs(i), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gd(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(W, i & 1),
    e === null)
  )
    return (
      Gl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = yo(l, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ns(n)),
              (t.memoizedState = ts),
              e)
            : fu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Qm(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = jt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = jt(s, o)) : ((o = Wt(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ns(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ts),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = jt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fu(e, t) {
  return (
    (t = yo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function oi(e, t, n, r) {
  return (
    r !== null && Xs(r),
    Tn(t, e.child, null, n),
    (e = fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Qm(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = il(Error(C(422)))), oi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = yo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Wt(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Tn(t, e.child, null, l),
        (t.child.memoizedState = ns(l)),
        (t.memoizedState = ts),
        o);
  if (!(t.mode & 1)) return oi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(C(419))), (r = il(o, r, void 0)), oi(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), ye || s)) {
    if (((r = ne), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), lt(e, i), We(r, e, i, -1));
    }
    return gu(), (r = il(Error(C(421)))), oi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = i0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (_e = Et(i.nextSibling)),
      (Ce = t),
      (V = !0),
      ($e = null),
      e !== null &&
        ((Le[Me++] = et),
        (Le[Me++] = tt),
        (Le[Me++] = qt),
        (et = e.id),
        (tt = e.overflow),
        (qt = t)),
      (t = fu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function La(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jl(e.return, t, n);
}
function ol(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function vd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((fe(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && La(e, n, t);
        else if (e.tag === 19) La(e, n, t);
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
    r &= 1;
  }
  if ((B(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && $i(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ol(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && $i(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ol(t, !0, n, null, o);
        break;
      case "together":
        ol(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Km(e, t, n) {
  switch (t.tag) {
    case 3:
      yd(t), Nn();
      break;
    case 5:
      Wf(t);
      break;
    case 1:
      ve(t.type) && Di(t);
      break;
    case 4:
      ru(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(Ii, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gd(e, t, n)
          : (B(W, W.current & 1),
            (e = st(e, t, n)),
            e !== null ? e.sibling : null);
      B(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hd(e, t, n);
  }
  return st(e, t, n);
}
var wd, rs, Sd, xd;
wd = function (e, t) {
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
};
rs = function () {};
Sd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), $t(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Cl(e, i)), (r = Cl(e, r)), (o = []);
        break;
      case "select":
        (i = K({}, i, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Pl(e, i)), (r = Pl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mi);
    }
    Tl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var s = i[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (pr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (pr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && $("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
xd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ys(t), t.tag)) {
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
      return ue(t), null;
    case 1:
      return ve(t.type) && zi(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        On(),
        H(ge),
        H(ce),
        ou(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ri(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && (fs($e), ($e = null)))),
        rs(e, t),
        ue(t),
        null
      );
    case 5:
      iu(t);
      var i = $t(Cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ue(t), null;
        }
        if (((e = $t(Xe.current)), ri(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Je] = t), (r[kr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < tr.length; i++) $(tr[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              $u(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              Vu(r, o), $("invalid", r);
          }
          Tl(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ni(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ni(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : pr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              Gr(r), Hu(r, o, !0);
              break;
            case "textarea":
              Gr(r), Wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Mi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Je] = t),
            (e[kr] = r),
            wd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ol(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < tr.length; i++) $(tr[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                $u(e, r), (i = Cl(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = K({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                Vu(e, r), (i = Pl(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            Tl(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Xc(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Jc(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && hr(e, u)
                    : typeof u == "number" && hr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (pr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && $("scroll", e)
                      : u != null && Ds(e, o, u, l));
              }
            switch (n) {
              case "input":
                Gr(e), Hu(e, r, !1);
                break;
              case "textarea":
                Gr(e), Wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? xn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) xd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = $t(Cr.current)), $t(Xe.current), ri(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (o = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                ni(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ni(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (H(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && _e !== null && t.mode & 1 && !(t.flags & 128))
          Uf(), Nn(), (t.flags |= 98560), (o = !1);
        else if (((o = ri(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[Je] = t;
          } else
            Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else $e !== null && (fs($e), ($e = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? b === 0 && (b = 3) : gu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        On(), rs(e, t), e === null && xr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return eu(t.type._context), ue(t), null;
    case 17:
      return ve(t.type) && zi(), ue(t), null;
    case 19:
      if ((H(W), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Jn(o, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = $i(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Jn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > Mn &&
            ((t.flags |= 128), (r = !0), Jn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $i(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !V)
            )
              return ue(t), null;
          } else
            2 * J() - o.renderingStartTime > Mn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = W.current),
          B(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Gm(e, t) {
  switch ((Ys(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && zi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        On(),
        H(ge),
        H(ce),
        ou(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return iu(t), null;
    case 13:
      if ((H(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(W), null;
    case 4:
      return On(), null;
    case 10:
      return eu(t.type._context), null;
    case 22:
    case 23:
      return yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var li = !1,
  ae = !1,
  Jm = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function is(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Ma = !1;
function Ym(e, t) {
  if ((($l = Ti), (e = jf()), Gs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            c = 0,
            f = e,
            y = null;
          t: for (;;) {
            for (
              var S;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = l + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (S = f.firstChild) !== null;

            )
              (y = f), (f = S);
            for (;;) {
              if (f === e) break t;
              if (
                (y === n && ++a === i && (s = l),
                y === o && ++c === r && (u = l),
                (S = f.nextSibling) !== null)
              )
                break;
              (f = y), (y = f.parentNode);
            }
            f = S;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hl = { focusedElem: e, selectionRange: n }, Ti = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    w = g.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ue(t.type, v),
                      w
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (g = Ma), (Ma = !1), g;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && is(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ho(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function os(e) {
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
function Ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[kr], delete t[Ql], delete t[Lm], delete t[Mm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function za(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kd(e.return)) return null;
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
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Mi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
function ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), (e = e.sibling);
}
var ie = null,
  Be = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) _d(e, t, n), (n = n.sibling);
}
function _d(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(oo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || wn(n, t);
    case 6:
      var r = ie,
        i = Be;
      (ie = null),
        ct(e, t, n),
        (ie = r),
        (Be = i),
        ie !== null &&
          (Be
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null &&
        (Be
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zo(e.parentNode, n)
              : e.nodeType === 1 && Zo(e, n),
            vr(e))
          : Zo(ie, n.stateNode));
      break;
    case 4:
      (r = ie),
        (i = Be),
        (ie = n.stateNode.containerInfo),
        (Be = !0),
        ct(e, t, n),
        (ie = r),
        (Be = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && is(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          q(n, t, s);
        }
      ct(e, t, n);
      break;
    case 21:
      ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), ct(e, t, n), (ae = r))
        : ct(e, t, n);
      break;
    default:
      ct(e, t, n);
  }
}
function Da(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jm()),
      t.forEach(function (r) {
        var i = o0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ie = s.stateNode), (Be = !1);
              break e;
            case 3:
              (ie = s.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (ie = s.stateNode.containerInfo), (Be = !0);
              break e;
          }
          s = s.return;
        }
        if (ie === null) throw Error(C(160));
        _d(o, l, i), (ie = null), (Be = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        q(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Cd(t, e), (t = t.sibling);
}
function Cd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), qe(e), r & 4)) {
        try {
          ar(3, e, e.return), ho(3, e);
        } catch (v) {
          q(e, e.return, v);
        }
        try {
          ar(5, e, e.return);
        } catch (v) {
          q(e, e.return, v);
        }
      }
      break;
    case 1:
      Ie(t, e), qe(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        (Ie(t, e),
        qe(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          hr(i, "");
        } catch (v) {
          q(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Kc(i, o),
              Ol(s, l);
            var a = Ol(s, o);
            for (l = 0; l < u.length; l += 2) {
              var c = u[l],
                f = u[l + 1];
              c === "style"
                ? Xc(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Jc(i, f)
                : c === "children"
                ? hr(i, f)
                : Ds(i, c, f, a);
            }
            switch (s) {
              case "input":
                jl(i, o);
                break;
              case "textarea":
                qc(i, o);
                break;
              case "select":
                var y = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? xn(i, !!o.multiple, S, !1)
                  : y !== !!o.multiple &&
                    (o.defaultValue != null
                      ? xn(i, !!o.multiple, o.defaultValue, !0)
                      : xn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[kr] = o;
          } catch (v) {
            q(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          q(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ie(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vr(t.containerInfo);
        } catch (v) {
          q(e, e.return, v);
        }
      break;
    case 4:
      Ie(t, e), qe(e);
      break;
    case 13:
      Ie(t, e),
        qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (hu = J())),
        r & 4 && Da(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (a = ae) || c), Ie(t, e), (ae = a)) : Ie(t, e),
        qe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((y = N), (S = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ar(4, y, y.return);
                  break;
                case 1:
                  wn(y, y.return);
                  var g = y.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      q(r, n, v);
                    }
                  }
                  break;
                case 5:
                  wn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Aa(f);
                    continue;
                  }
              }
              S !== null ? ((S.return = y), (N = S)) : Aa(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Yc("display", l)));
              } catch (v) {
                q(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (v) {
                q(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), qe(e), r & 4 && Da(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (hr(i, ""), (r.flags &= -33));
          var o = za(e);
          ss(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = za(e);
          ls(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xm(e, t, n) {
  (N = e), jd(e);
}
function jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || li;
      if (!l) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || ae;
        s = li;
        var a = ae;
        if (((li = l), (ae = u) && !a))
          for (N = i; N !== null; )
            (l = N),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ia(i)
                : u !== null
                ? ((u.return = l), (N = u))
                : Ia(i);
        for (; o !== null; ) (N = o), jd(o), (o = o.sibling);
        (N = i), (li = s), (ae = a);
      }
      Fa(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : Fa(e);
  }
}
function Fa(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || ho(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ue(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Sa(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sa(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && vr(f);
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
              throw Error(C(163));
          }
        ae || (t.flags & 512 && os(t));
      } catch (y) {
        q(t, t.return, y);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Aa(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Ia(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ho(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, i, u);
            }
          }
          var o = t.return;
          try {
            os(t);
          } catch (u) {
            q(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            os(t);
          } catch (u) {
            q(t, l, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (N = s);
      break;
    }
    N = t.return;
  }
}
var Zm = Math.ceil,
  Wi = at.ReactCurrentDispatcher,
  du = at.ReactCurrentOwner,
  De = at.ReactCurrentBatchConfig,
  A = 0,
  ne = null,
  Y = null,
  oe = 0,
  ke = 0,
  Sn = Lt(0),
  b = 0,
  Nr = null,
  Jt = 0,
  mo = 0,
  pu = 0,
  cr = null,
  me = null,
  hu = 0,
  Mn = 1 / 0,
  Ze = null,
  Qi = !1,
  us = null,
  _t = null,
  si = !1,
  gt = null,
  Ki = 0,
  fr = 0,
  as = null,
  wi = -1,
  Si = 0;
function de() {
  return A & 6 ? J() : wi !== -1 ? wi : (wi = J());
}
function Ct(e) {
  return e.mode & 1
    ? A & 2 && oe !== 0
      ? oe & -oe
      : Dm.transition !== null
      ? (Si === 0 && (Si = cf()), Si)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gf(e.type))),
        e)
    : 1;
}
function We(e, t, n, r) {
  if (50 < fr) throw ((fr = 0), (as = null), Error(C(185)));
  Fr(e, n, r),
    (!(A & 2) || e !== ne) &&
      (e === ne && (!(A & 2) && (mo |= n), b === 4 && mt(e, oe)),
      we(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((Mn = J() + 500), co && Mt()));
}
function we(e, t) {
  var n = e.callbackNode;
  Dh(e, t);
  var r = Ni(e, e === ne ? oe : 0);
  if (r === 0)
    n !== null && qu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && qu(n), t === 1))
      e.tag === 0 ? zm(Ua.bind(null, e)) : Ff(Ua.bind(null, e)),
        Tm(function () {
          !(A & 6) && Mt();
        }),
        (n = null);
    else {
      switch (ff(r)) {
        case 1:
          n = Bs;
          break;
        case 4:
          n = uf;
          break;
        case 16:
          n = Pi;
          break;
        case 536870912:
          n = af;
          break;
        default:
          n = Pi;
      }
      n = zd(n, Rd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rd(e, t) {
  if (((wi = -1), (Si = 0), A & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (jn() && e.callbackNode !== n) return null;
  var r = Ni(e, e === ne ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qi(e, r);
  else {
    t = r;
    var i = A;
    A |= 2;
    var o = Nd();
    (ne !== e || oe !== t) && ((Ze = null), (Mn = J() + 500), Vt(e, t));
    do
      try {
        t0();
        break;
      } catch (s) {
        Pd(e, s);
      }
    while (!0);
    bs(),
      (Wi.current = o),
      (A = i),
      Y !== null ? (t = 0) : ((ne = null), (oe = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Fl(e)), i !== 0 && ((r = i), (t = cs(e, i)))), t === 1)
    )
      throw ((n = Nr), Vt(e, 0), mt(e, r), we(e, J()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !bm(i) &&
          ((t = qi(e, r)),
          t === 2 && ((o = Fl(e)), o !== 0 && ((r = o), (t = cs(e, o)))),
          t === 1))
      )
        throw ((n = Nr), Vt(e, 0), mt(e, r), we(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          At(e, me, Ze);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = hu + 500 - J()), 10 < t))
          ) {
            if (Ni(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Wl(At.bind(null, e, me, Ze), t);
            break;
          }
          At(e, me, Ze);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ve(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Zm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wl(At.bind(null, e, me, Ze), r);
            break;
          }
          At(e, me, Ze);
          break;
        case 5:
          At(e, me, Ze);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return we(e, J()), e.callbackNode === n ? Rd.bind(null, e) : null;
}
function cs(e, t) {
  var n = cr;
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = qi(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && fs(t)),
    e
  );
}
function fs(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function bm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Qe(o(), i)) return !1;
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
function mt(e, t) {
  for (
    t &= ~pu,
      t &= ~mo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ua(e) {
  if (A & 6) throw Error(C(327));
  jn();
  var t = Ni(e, 0);
  if (!(t & 1)) return we(e, J()), null;
  var n = qi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fl(e);
    r !== 0 && ((t = r), (n = cs(e, r)));
  }
  if (n === 1) throw ((n = Nr), Vt(e, 0), mt(e, t), we(e, J()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    At(e, me, Ze),
    we(e, J()),
    null
  );
}
function mu(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((Mn = J() + 500), co && Mt());
  }
}
function Yt(e) {
  gt !== null && gt.tag === 0 && !(A & 6) && jn();
  var t = A;
  A |= 1;
  var n = De.transition,
    r = I;
  try {
    if (((De.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (De.transition = n), (A = t), !(A & 6) && Mt();
  }
}
function yu() {
  (ke = Sn.current), H(Sn);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Nm(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Ys(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && zi();
          break;
        case 3:
          On(), H(ge), H(ce), ou();
          break;
        case 5:
          iu(r);
          break;
        case 4:
          On();
          break;
        case 13:
          H(W);
          break;
        case 19:
          H(W);
          break;
        case 10:
          eu(r.type._context);
          break;
        case 22:
        case 23:
          yu();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (Y = e = jt(e.current, null)),
    (oe = ke = t),
    (b = 0),
    (Nr = null),
    (pu = mo = Jt = 0),
    (me = cr = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function Pd(e, t) {
  do {
    var n = Y;
    try {
      if ((bs(), (yi.current = Vi), Hi)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Hi = !1;
      }
      if (
        ((Gt = 0),
        (te = Z = Q = null),
        (ur = !1),
        (jr = 0),
        (du.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (Nr = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = oe),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var y = c.alternate;
            y
              ? ((c.updateQueue = y.updateQueue),
                (c.memoizedState = y.memoizedState),
                (c.lanes = y.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = ja(l);
          if (S !== null) {
            (S.flags &= -257),
              Ra(S, l, s, o, t),
              S.mode & 1 && Ca(o, a, t),
              (t = S),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ca(o, a, t), gu();
              break e;
            }
            u = Error(C(426));
          }
        } else if (V && s.mode & 1) {
          var w = ja(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Ra(w, l, s, o, t),
              Xs(Ln(u, s));
            break e;
          }
        }
        (o = u = Ln(u, s)),
          b !== 4 && (b = 2),
          cr === null ? (cr = [o]) : cr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = fd(o, u, t);
              wa(o, p);
              break e;
            case 1:
              s = u;
              var d = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (_t === null || !_t.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = dd(o, s, t);
                wa(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Od(n);
    } catch (k) {
      (t = k), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nd() {
  var e = Wi.current;
  return (Wi.current = Vi), e === null ? Vi : e;
}
function gu() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    ne === null || (!(Jt & 268435455) && !(mo & 268435455)) || mt(ne, oe);
}
function qi(e, t) {
  var n = A;
  A |= 2;
  var r = Nd();
  (ne !== e || oe !== t) && ((Ze = null), Vt(e, t));
  do
    try {
      e0();
      break;
    } catch (i) {
      Pd(e, i);
    }
  while (!0);
  if ((bs(), (A = n), (Wi.current = r), Y !== null)) throw Error(C(261));
  return (ne = null), (oe = 0), b;
}
function e0() {
  for (; Y !== null; ) Td(Y);
}
function t0() {
  for (; Y !== null && !jh(); ) Td(Y);
}
function Td(e) {
  var t = Md(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Od(e) : (Y = t),
    (du.current = null);
}
function Od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gm(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (Y = null);
        return;
      }
    } else if (((n = qm(n, t, ke)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function At(e, t, n) {
  var r = I,
    i = De.transition;
  try {
    (De.transition = null), (I = 1), n0(e, t, n, r);
  } finally {
    (De.transition = i), (I = r);
  }
  return null;
}
function n0(e, t, n, r) {
  do jn();
  while (gt !== null);
  if (A & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Fh(e, o),
    e === ne && ((Y = ne = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      si ||
      ((si = !0),
      zd(Pi, function () {
        return jn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = De.transition), (De.transition = null);
    var l = I;
    I = 1;
    var s = A;
    (A |= 4),
      (du.current = null),
      Ym(e, n),
      Cd(n, e),
      Em(Hl),
      (Ti = !!$l),
      (Hl = $l = null),
      (e.current = n),
      Xm(n),
      Rh(),
      (A = s),
      (I = l),
      (De.transition = o);
  } else e.current = n;
  if (
    (si && ((si = !1), (gt = e), (Ki = i)),
    (o = e.pendingLanes),
    o === 0 && (_t = null),
    Th(n.stateNode),
    we(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Qi) throw ((Qi = !1), (e = us), (us = null), e);
  return (
    Ki & 1 && e.tag !== 0 && jn(),
    (o = e.pendingLanes),
    o & 1 ? (e === as ? fr++ : ((fr = 0), (as = e))) : (fr = 0),
    Mt(),
    null
  );
}
function jn() {
  if (gt !== null) {
    var e = ff(Ki),
      t = De.transition,
      n = I;
    try {
      if (((De.transition = null), (I = 16 > e ? 16 : e), gt === null))
        var r = !1;
      else {
        if (((e = gt), (gt = null), (Ki = 0), A & 6)) throw Error(C(331));
        var i = A;
        for (A |= 4, N = e.current; N !== null; ) {
          var o = N,
            l = o.child;
          if (N.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (N = a; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ar(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (N = f);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var y = c.sibling,
                        S = c.return;
                      if ((Ed(c), c === a)) {
                        N = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = S), (N = y);
                        break;
                      }
                      N = S;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (N = l);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ar(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (N = p);
                break e;
              }
              N = o.return;
            }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          l = N;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (N = h);
          else
            e: for (l = d; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ho(9, s);
                  }
                } catch (k) {
                  q(s, s.return, k);
                }
              if (s === l) {
                N = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (N = x);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((A = i), Mt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(oo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (De.transition = t);
    }
  }
  return !1;
}
function Ba(e, t, n) {
  (t = Ln(n, t)),
    (t = fd(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = de()),
    e !== null && (Fr(e, 1, t), we(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Ba(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ba(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_t === null || !_t.has(r)))
        ) {
          (e = Ln(n, e)),
            (e = dd(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = de()),
            t !== null && (Fr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function r0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (oe & n) === n &&
      (b === 4 || (b === 3 && (oe & 130023424) === oe && 500 > J() - hu)
        ? Vt(e, 0)
        : (pu |= n)),
    we(e, t);
}
function Ld(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xr), (Xr <<= 1), !(Xr & 130023424) && (Xr = 4194304))
      : (t = 1));
  var n = de();
  (e = lt(e, t)), e !== null && (Fr(e, t, n), we(e, n));
}
function i0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ld(e, n);
}
function o0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Ld(e, n);
}
var Md;
Md = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), Km(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), V && t.flags & 1048576 && Af(t, Ai, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      vi(e, t), (e = t.pendingProps);
      var i = Pn(t, ce.current);
      Cn(t, n), (i = su(null, t, r, e, i, n));
      var o = uu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), Di(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            nu(t),
            (i.updater = po),
            (t.stateNode = i),
            (i._reactInternals = t),
            Xl(t, r, e, n),
            (t = es(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && Js(t), fe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (vi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = s0(r)),
          (e = Ue(r, e)),
          i)
        ) {
          case 0:
            t = bl(null, t, r, e, n);
            break e;
          case 1:
            t = Ta(null, t, r, e, n);
            break e;
          case 11:
            t = Pa(null, t, r, e, n);
            break e;
          case 14:
            t = Na(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        bl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        Ta(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((yd(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Vf(e, t),
          Bi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Ln(Error(C(423)), t)), (t = Oa(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ln(Error(C(424)), t)), (t = Oa(e, t, r, n, i));
            break e;
          } else
            for (
              _e = Et(t.stateNode.containerInfo.firstChild),
                Ce = t,
                V = !0,
                $e = null,
                n = $f(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === i)) {
            t = st(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wf(t),
        e === null && Gl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Vl(r, i) ? (l = null) : o !== null && Vl(r, o) && (t.flags |= 32),
        md(e, t),
        fe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Gl(t), null;
    case 13:
      return gd(e, t, n);
    case 4:
      return (
        ru(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        Pa(e, t, r, i, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          B(Ii, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Qe(o.value, l)) {
            if (o.children === i.children && !ge.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = nt(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Jl(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(C(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Jl(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        fe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Cn(t, n),
        (i = Fe(i)),
        (r = r(i)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ue(r, t.pendingProps)),
        (i = Ue(r.type, i)),
        Na(e, t, r, i, n)
      );
    case 15:
      return pd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        vi(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), Di(t)) : (e = !1),
        Cn(t, n),
        cd(t, r, i),
        Xl(t, r, i, n),
        es(null, t, r, !0, e, n)
      );
    case 19:
      return vd(e, t, n);
    case 22:
      return hd(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function zd(e, t) {
  return sf(e, t);
}
function l0(e, t, n, r) {
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new l0(e, t, n, r);
}
function vu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function s0(e) {
  if (typeof e == "function") return vu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === As)) return 11;
    if (e === Is) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
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
function xi(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) vu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case cn:
        return Wt(n.children, i, o, t);
      case Fs:
        (l = 8), (i |= 8);
        break;
      case xl:
        return (
          (e = ze(12, n, t, i | 2)), (e.elementType = xl), (e.lanes = o), e
        );
      case El:
        return (e = ze(13, n, t, i)), (e.elementType = El), (e.lanes = o), e;
      case kl:
        return (e = ze(19, n, t, i)), (e.elementType = kl), (e.lanes = o), e;
      case Vc:
        return yo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $c:
              l = 10;
              break e;
            case Hc:
              l = 9;
              break e;
            case As:
              l = 11;
              break e;
            case Is:
              l = 14;
              break e;
            case dt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Wt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function yo(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ll(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function sl(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function u0(e, t, n, r, i) {
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
    (this.eventTimes = $o(0)),
    (this.expirationTimes = $o(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $o(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function wu(e, t, n, r, i, o, l, s, u) {
  return (
    (e = new u0(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ze(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nu(o),
    e
  );
}
function a0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dd(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Df(e, n, t);
  }
  return t;
}
function Fd(e, t, n, r, i, o, l, s, u) {
  return (
    (e = wu(n, r, !0, e, i, o, l, s, u)),
    (e.context = Dd(null)),
    (n = e.current),
    (r = de()),
    (i = Ct(n)),
    (o = nt(r, i)),
    (o.callback = t ?? null),
    kt(n, o, i),
    (e.current.lanes = i),
    Fr(e, i, r),
    we(e, r),
    e
  );
}
function go(e, t, n, r) {
  var i = t.current,
    o = de(),
    l = Ct(i);
  return (
    (n = Dd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(i, t, l)),
    e !== null && (We(e, i, l, o), mi(e, i, l)),
    l
  );
}
function Gi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $a(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Su(e, t) {
  $a(e, t), (e = e.alternate) && $a(e, t);
}
function c0() {
  return null;
}
var Ad =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xu(e) {
  this._internalRoot = e;
}
vo.prototype.render = xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  go(e, t, null, null);
};
vo.prototype.unmount = xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function () {
      go(null, e, null, null);
    }),
      (t[ot] = null);
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && yf(e);
  }
};
function Eu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ha() {}
function f0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Gi(l);
        o.call(a);
      };
    }
    var l = Fd(t, r, e, 0, null, !1, !1, "", Ha);
    return (
      (e._reactRootContainer = l),
      (e[ot] = l.current),
      xr(e.nodeType === 8 ? e.parentNode : e),
      Yt(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Gi(u);
      s.call(a);
    };
  }
  var u = wu(e, 0, !1, null, null, !1, !1, "", Ha);
  return (
    (e._reactRootContainer = u),
    (e[ot] = u.current),
    xr(e.nodeType === 8 ? e.parentNode : e),
    Yt(function () {
      go(t, u, n, r);
    }),
    u
  );
}
function So(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Gi(l);
        s.call(u);
      };
    }
    go(t, l, e, i);
  } else l = f0(n, t, e, i, r);
  return Gi(l);
}
df = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 &&
          ($s(t, n | 1), we(t, J()), !(A & 6) && ((Mn = J() + 500), Mt()));
      }
      break;
    case 13:
      Yt(function () {
        var r = lt(e, 1);
        if (r !== null) {
          var i = de();
          We(r, e, 1, i);
        }
      }),
        Su(e, 1);
  }
};
Hs = function (e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = de();
      We(t, e, 134217728, n);
    }
    Su(e, 134217728);
  }
};
pf = function (e) {
  if (e.tag === 13) {
    var t = Ct(e),
      n = lt(e, t);
    if (n !== null) {
      var r = de();
      We(n, e, t, r);
    }
    Su(e, t);
  }
};
hf = function () {
  return I;
};
mf = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Ml = function (e, t, n) {
  switch (t) {
    case "input":
      if ((jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ao(r);
            if (!i) throw Error(C(90));
            Qc(r), jl(r, i);
          }
        }
      }
      break;
    case "textarea":
      qc(e, n);
      break;
    case "select":
      (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
  }
};
ef = mu;
tf = Yt;
var d0 = { usingClientEntryPoint: !1, Events: [Ir, hn, ao, Zc, bc, mu] },
  Yn = {
    findFiberByHostInstance: Ut,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  p0 = {
    bundleType: Yn.bundleType,
    version: Yn.version,
    rendererPackageName: Yn.rendererPackageName,
    rendererConfig: Yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: at.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = of(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yn.findFiberByHostInstance || c0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ui.isDisabled && ui.supportsFiber)
    try {
      (oo = ui.inject(p0)), (Ye = ui);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Eu(t)) throw Error(C(200));
  return a0(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!Eu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Ad;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = wu(e, 1, !1, null, null, n, !1, r, i)),
    (e[ot] = t.current),
    xr(e.nodeType === 8 ? e.parentNode : e),
    new xu(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = of(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return Yt(e);
};
Te.hydrate = function (e, t, n) {
  if (!wo(t)) throw Error(C(200));
  return So(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!Eu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Ad;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Fd(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[ot] = t.current),
    xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new vo(t);
};
Te.render = function (e, t, n) {
  if (!wo(t)) throw Error(C(200));
  return So(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!wo(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Yt(function () {
        So(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ot] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = mu;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wo(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return So(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function Id() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Id);
    } catch (e) {
      console.error(e);
    }
}
Id(), (Ac.exports = Te);
var h0 = Ac.exports,
  Ud,
  Va = h0;
(Ud = Va.createRoot), Va.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Tr() {
  return (
    (Tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tr.apply(this, arguments)
  );
}
var vt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(vt || (vt = {}));
const Wa = "popstate";
function m0(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: s } = r.location;
    return ds(
      "",
      { pathname: o, search: l, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ji(i);
  }
  return g0(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Bd(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function y0() {
  return Math.random().toString(36).substr(2, 8);
}
function Qa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ds(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Tr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? In(t) : t,
      { state: n, key: (t && t.key) || r || y0() }
    )
  );
}
function Ji(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function In(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function g0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = vt.Pop,
    u = null,
    a = c();
  a == null && ((a = 0), l.replaceState(Tr({}, l.state, { idx: a }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    s = vt.Pop;
    let w = c(),
      p = w == null ? null : w - a;
    (a = w), u && u({ action: s, location: v.location, delta: p });
  }
  function y(w, p) {
    s = vt.Push;
    let d = ds(v.location, w, p);
    a = c() + 1;
    let h = Qa(d, a),
      x = v.createHref(d);
    try {
      l.pushState(h, "", x);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      i.location.assign(x);
    }
    o && u && u({ action: s, location: v.location, delta: 1 });
  }
  function S(w, p) {
    s = vt.Replace;
    let d = ds(v.location, w, p);
    a = c();
    let h = Qa(d, a),
      x = v.createHref(d);
    l.replaceState(h, "", x),
      o && u && u({ action: s, location: v.location, delta: 0 });
  }
  function g(w) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof w == "string" ? w : Ji(w);
    return (
      (d = d.replace(/ $/, "%20")),
      X(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, p)
    );
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(w) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Wa, f),
        (u = w),
        () => {
          i.removeEventListener(Wa, f), (u = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: g,
    encodeLocation(w) {
      let p = g(w);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: y,
    replace: S,
    go(w) {
      return l.go(w);
    },
  };
  return v;
}
var Ka;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ka || (Ka = {}));
function v0(e, t, n) {
  return n === void 0 && (n = "/"), w0(e, t, n, !1);
}
function w0(e, t, n, r) {
  let i = typeof t == "string" ? In(t) : t,
    o = ku(i.pathname || "/", n);
  if (o == null) return null;
  let l = $d(e);
  S0(l);
  let s = null;
  for (let u = 0; s == null && u < l.length; ++u) {
    let a = O0(o);
    s = N0(l[u], a, r);
  }
  return s;
}
function $d(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (X(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = Rt([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      $d(o.children, t, c, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: R0(a, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let u of Hd(o.path)) i(o, l, u);
    }),
    t
  );
}
function Hd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Hd(r.join("/")),
    s = [];
  return (
    s.push(...l.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && s.push(...l),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function S0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : P0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const x0 = /^:[\w-]+$/,
  E0 = 3,
  k0 = 2,
  _0 = 1,
  C0 = 10,
  j0 = -2,
  qa = (e) => e === "*";
function R0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(qa) && (r += j0),
    t && (r += k0),
    n
      .filter((i) => !qa(i))
      .reduce((i, o) => i + (x0.test(o) ? E0 : o === "" ? _0 : C0), r)
  );
}
function P0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function N0(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    l = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      a = s === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = Ga(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        c
      ),
      y = u.route;
    if (
      (!f &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Ga(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      l.push({
        params: i,
        pathname: Rt([o, f.pathname]),
        pathnameBase: D0(Rt([o, f.pathnameBase])),
        route: y,
      }),
      f.pathnameBase !== "/" && (o = Rt([o, f.pathnameBase]));
  }
  return l;
}
function Ga(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = T0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((a, c, f) => {
      let { paramName: y, isOptional: S } = c;
      if (y === "*") {
        let v = s[f] || "";
        l = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const g = s[f];
      return (
        S && !g ? (a[y] = void 0) : (a[y] = (g || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function T0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bd(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function O0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Bd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ku(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function L0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? In(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : M0(n, t)) : t,
    search: F0(r),
    hash: A0(i),
  };
}
function M0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ul(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function z0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Vd(e, t) {
  let n = z0(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Wd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = In(e))
    : ((i = Tr({}, e)),
      X(
        !i.pathname || !i.pathname.includes("?"),
        ul("?", "pathname", "search", i)
      ),
      X(
        !i.pathname || !i.pathname.includes("#"),
        ul("#", "pathname", "hash", i)
      ),
      X(!i.search || !i.search.includes("#"), ul("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (l == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && l.startsWith("..")) {
      let y = l.split("/");
      for (; y[0] === ".."; ) y.shift(), (f -= 1);
      i.pathname = y.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let u = L0(i, s),
    a = l && l !== "/" && l.endsWith("/"),
    c = (o || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || c) && (u.pathname += "/"), u;
}
const Rt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  D0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  F0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  A0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function I0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qd = ["post", "put", "patch", "delete"];
new Set(Qd);
const U0 = ["get", ...Qd];
new Set(U0);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Or() {
  return (
    (Or = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Or.apply(this, arguments)
  );
}
const _u = _.createContext(null),
  B0 = _.createContext(null),
  nn = _.createContext(null),
  xo = _.createContext(null),
  rn = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kd = _.createContext(null);
function $0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Br() || X(!1);
  let { basename: r, navigator: i } = _.useContext(nn),
    { hash: o, pathname: l, search: s } = Gd(e, { relative: n }),
    u = l;
  return (
    r !== "/" && (u = l === "/" ? r : Rt([r, l])),
    i.createHref({ pathname: u, search: s, hash: o })
  );
}
function Br() {
  return _.useContext(xo) != null;
}
function Eo() {
  return Br() || X(!1), _.useContext(xo).location;
}
function qd(e) {
  _.useContext(nn).static || _.useLayoutEffect(e);
}
function H0() {
  let { isDataRoute: e } = _.useContext(rn);
  return e ? ty() : V0();
}
function V0() {
  Br() || X(!1);
  let e = _.useContext(_u),
    { basename: t, future: n, navigator: r } = _.useContext(nn),
    { matches: i } = _.useContext(rn),
    { pathname: o } = Eo(),
    l = JSON.stringify(Vd(i, n.v7_relativeSplatPath)),
    s = _.useRef(!1);
  return (
    qd(() => {
      s.current = !0;
    }),
    _.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let f = Wd(a, JSON.parse(l), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Rt([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, l, o, e]
    )
  );
}
function Gd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(nn),
    { matches: i } = _.useContext(rn),
    { pathname: o } = Eo(),
    l = JSON.stringify(Vd(i, r.v7_relativeSplatPath));
  return _.useMemo(() => Wd(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function W0(e, t) {
  return Q0(e, t);
}
function Q0(e, t, n, r) {
  Br() || X(!1);
  let { navigator: i } = _.useContext(nn),
    { matches: o } = _.useContext(rn),
    l = o[o.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : "/";
  l && l.route;
  let a = Eo(),
    c;
  if (t) {
    var f;
    let w = typeof t == "string" ? In(t) : t;
    u === "/" || ((f = w.pathname) != null && f.startsWith(u)) || X(!1),
      (c = w);
  } else c = a;
  let y = c.pathname || "/",
    S = y;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    S = "/" + y.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let g = v0(e, { pathname: S }),
    v = Y0(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, s, w.params),
            pathname: Rt([
              u,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? u
                : Rt([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && v
    ? _.createElement(
        xo.Provider,
        {
          value: {
            location: Or(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: vt.Pop,
          },
        },
        v
      )
    : v;
}
function K0() {
  let e = ey(),
    t = I0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: i }, n) : null,
    null
  );
}
const q0 = _.createElement(K0, null);
class G0 extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          rn.Provider,
          { value: this.props.routeContext },
          _.createElement(Kd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function J0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = _.useContext(_u);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(rn.Provider, { value: t }, r)
  );
}
function Y0(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let l = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let c = l.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0
    );
    c >= 0 || X(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let f = l[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = c),
        f.route.id)
      ) {
        let { loaderData: y, errors: S } = n,
          g =
            f.route.loader &&
            y[f.route.id] === void 0 &&
            (!S || S[f.route.id] === void 0);
        if (f.route.lazy || g) {
          (u = !0), a >= 0 ? (l = l.slice(0, a + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, f, y) => {
    let S,
      g = !1,
      v = null,
      w = null;
    n &&
      ((S = s && f.route.id ? s[f.route.id] : void 0),
      (v = f.route.errorElement || q0),
      u &&
        (a < 0 && y === 0
          ? ((g = !0), (w = null))
          : a === y &&
            ((g = !0), (w = f.route.hydrateFallbackElement || null))));
    let p = t.concat(l.slice(0, y + 1)),
      d = () => {
        let h;
        return (
          S
            ? (h = v)
            : g
            ? (h = w)
            : f.route.Component
            ? (h = _.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = c),
          _.createElement(J0, {
            match: f,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || y === 0)
      ? _.createElement(G0, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: S,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Jd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Jd || {}),
  Yi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Yi || {});
function X0(e) {
  let t = _.useContext(_u);
  return t || X(!1), t;
}
function Z0(e) {
  let t = _.useContext(B0);
  return t || X(!1), t;
}
function b0(e) {
  let t = _.useContext(rn);
  return t || X(!1), t;
}
function Yd(e) {
  let t = b0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function ey() {
  var e;
  let t = _.useContext(Kd),
    n = Z0(Yi.UseRouteError),
    r = Yd(Yi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ty() {
  let { router: e } = X0(Jd.UseNavigateStable),
    t = Yd(Yi.UseNavigateStable),
    n = _.useRef(!1);
  return (
    qd(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Or({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function ps(e) {
  X(!1);
}
function ny(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = vt.Pop,
    navigator: o,
    static: l = !1,
    future: s,
  } = e;
  Br() && X(!1);
  let u = t.replace(/^\/*/, "/"),
    a = _.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: l,
        future: Or({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, o, l]
    );
  typeof r == "string" && (r = In(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: y = "",
      state: S = null,
      key: g = "default",
    } = r,
    v = _.useMemo(() => {
      let w = ku(c, u);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: y, state: S, key: g },
            navigationType: i,
          };
    }, [u, c, f, y, S, g, i]);
  return v == null
    ? null
    : _.createElement(
        nn.Provider,
        { value: a },
        _.createElement(xo.Provider, { children: n, value: v })
      );
}
function ry(e) {
  let { children: t, location: n } = e;
  return W0(hs(t), n);
}
new Promise(() => {});
function hs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    _.Children.forEach(e, (r, i) => {
      if (!_.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === _.Fragment) {
        n.push.apply(n, hs(r.props.children, o));
        return;
      }
      r.type !== ps && X(!1), !r.props.index || !r.props.children || X(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = hs(r.props.children, o)), n.push(l);
    }),
    n
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
 */ function ms() {
  return (
    (ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ms.apply(this, arguments)
  );
}
function iy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function oy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ly(e, t) {
  return e.button === 0 && (!t || t === "_self") && !oy(e);
}
const sy = [
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
  uy = "6";
try {
  window.__reactRouterVersion = uy;
} catch {}
const ay = "startTransition",
  Ja = rh[ay];
function cy(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = _.useRef();
  o.current == null && (o.current = m0({ window: i, v5Compat: !0 }));
  let l = o.current,
    [s, u] = _.useState({ action: l.action, location: l.location }),
    { v7_startTransition: a } = r || {},
    c = _.useCallback(
      (f) => {
        a && Ja ? Ja(() => u(f)) : u(f);
      },
      [u, a]
    );
  return (
    _.useLayoutEffect(() => l.listen(c), [l, c]),
    _.createElement(ny, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
const fy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  dy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ln = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: u,
        to: a,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      y = iy(t, sy),
      { basename: S } = _.useContext(nn),
      g,
      v = !1;
    if (typeof a == "string" && dy.test(a) && ((g = a), fy))
      try {
        let h = new URL(window.location.href),
          x = a.startsWith("//") ? new URL(h.protocol + a) : new URL(a),
          k = ku(x.pathname, S);
        x.origin === h.origin && k != null
          ? (a = k + x.search + x.hash)
          : (v = !0);
      } catch {}
    let w = $0(a, { relative: i }),
      p = py(a, {
        replace: l,
        state: s,
        target: u,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function d(h) {
      r && r(h), h.defaultPrevented || p(h);
    }
    return _.createElement(
      "a",
      ms({}, y, { href: g || w, onClick: v || o ? r : d, ref: n, target: u })
    );
  });
var Ya;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ya || (Ya = {}));
var Xa;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Xa || (Xa = {}));
function py(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = H0(),
    a = Eo(),
    c = Gd(e, { relative: l });
  return _.useCallback(
    (f) => {
      if (ly(f, n)) {
        f.preventDefault();
        let y = r !== void 0 ? r : Ji(a) === Ji(c);
        u(e, {
          replace: y,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [a, u, c, r, i, n, e, o, l, s]
  );
}
const hy = "./assets/tea-1-0cTs4m7N.png",
  my = "_header_12m5k_3",
  yy = { header: my },
  gy = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs("div", {
        className: yy.header,
        children: [
          m.jsx("img", { src: hy, alt: "" }),
          m.jsxs("div", {
            children: [
              m.jsx("h1", { children: "قرعه کشی ماهیانه گلستان" }),
              m.jsx("h2", {
                children: "قرعه کشی ماهیانه مصرف کنندگان چای گلستان",
              }),
              m.jsx("p", {
                children:
                  "هر یک از مصرف کنندگان محصولات چای گلستان میتوانند با ارسال کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی های ماهیانه سال 1403 شرکت کنند. نگهراری از بسته بندی محصول برای اهدای جایزه الزامی است.",
              }),
              m.jsx("a", { href: "#", children: "اطلاعات بیشتر" }),
            ],
          }),
        ],
      }),
    }),
  vy = "_title_phy02_3",
  wy = { title: vy };
function Xd(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Sy } = Object.prototype,
  { getPrototypeOf: Cu } = Object,
  ko = ((e) => (t) => {
    const n = Sy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ke = (e) => ((e = e.toLowerCase()), (t) => ko(t) === e),
  _o = (e) => (t) => typeof t === e,
  { isArray: Un } = Array,
  Lr = _o("undefined");
function xy(e) {
  return (
    e !== null &&
    !Lr(e) &&
    e.constructor !== null &&
    !Lr(e.constructor) &&
    je(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Zd = Ke("ArrayBuffer");
function Ey(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Zd(e.buffer)),
    t
  );
}
const ky = _o("string"),
  je = _o("function"),
  bd = _o("number"),
  Co = (e) => e !== null && typeof e == "object",
  _y = (e) => e === !0 || e === !1,
  Ei = (e) => {
    if (ko(e) !== "object") return !1;
    const t = Cu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Cy = Ke("Date"),
  jy = Ke("File"),
  Ry = Ke("Blob"),
  Py = Ke("FileList"),
  Ny = (e) => Co(e) && je(e.pipe),
  Ty = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (je(e.append) &&
          ((t = ko(e)) === "formdata" ||
            (t === "object" &&
              je(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Oy = Ke("URLSearchParams"),
  [Ly, My, zy, Dy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ke
  ),
  Fy = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $r(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Un(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = o.length;
    let s;
    for (r = 0; r < l; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function ep(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Ht =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  tp = (e) => !Lr(e) && e !== Ht;
function ys() {
  const { caseless: e } = (tp(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && ep(t, i)) || i;
      Ei(t[o]) && Ei(r)
        ? (t[o] = ys(t[o], r))
        : Ei(r)
        ? (t[o] = ys({}, r))
        : Un(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && $r(arguments[r], n);
  return t;
}
const Ay = (e, t, n, { allOwnKeys: r } = {}) => (
    $r(
      t,
      (i, o) => {
        n && je(i) ? (e[o] = Xd(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Iy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Uy = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  By = (e, t, n, r) => {
    let i, o, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (l = i[o]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && Cu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  $y = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Hy = (e) => {
    if (!e) return null;
    if (Un(e)) return e;
    let t = e.length;
    if (!bd(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Vy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Cu(Uint8Array)),
  Wy = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  Qy = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Ky = Ke("HTMLFormElement"),
  qy = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Za = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Gy = Ke("RegExp"),
  np = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    $r(n, (i, o) => {
      let l;
      (l = t(i, o, e)) !== !1 && (r[o] = l || i);
    }),
      Object.defineProperties(e, r);
  },
  Jy = (e) => {
    np(e, (t, n) => {
      if (je(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (je(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Yy = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Un(e) ? r(e) : r(String(e).split(t)), n;
  },
  Xy = () => {},
  Zy = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  al = "abcdefghijklmnopqrstuvwxyz",
  ba = "0123456789",
  rp = { DIGIT: ba, ALPHA: al, ALPHA_DIGIT: al + al.toUpperCase() + ba },
  by = (e = 16, t = rp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function eg(e) {
  return !!(
    e &&
    je(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const tg = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Co(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Un(r) ? [] : {};
            return (
              $r(r, (l, s) => {
                const u = n(l, i + 1);
                !Lr(u) && (o[s] = u);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  ng = Ke("AsyncFunction"),
  rg = (e) => e && (Co(e) || je(e)) && je(e.then) && je(e.catch),
  ip = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Ht.addEventListener(
            "message",
            ({ source: i, data: o }) => {
              i === Ht && o === n && r.length && r.shift()();
            },
            !1
          ),
          (i) => {
            r.push(i), Ht.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    je(Ht.postMessage)
  ),
  ig =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ht)
      : (typeof process < "u" && process.nextTick) || ip,
  E = {
    isArray: Un,
    isArrayBuffer: Zd,
    isBuffer: xy,
    isFormData: Ty,
    isArrayBufferView: Ey,
    isString: ky,
    isNumber: bd,
    isBoolean: _y,
    isObject: Co,
    isPlainObject: Ei,
    isReadableStream: Ly,
    isRequest: My,
    isResponse: zy,
    isHeaders: Dy,
    isUndefined: Lr,
    isDate: Cy,
    isFile: jy,
    isBlob: Ry,
    isRegExp: Gy,
    isFunction: je,
    isStream: Ny,
    isURLSearchParams: Oy,
    isTypedArray: Vy,
    isFileList: Py,
    forEach: $r,
    merge: ys,
    extend: Ay,
    trim: Fy,
    stripBOM: Iy,
    inherits: Uy,
    toFlatObject: By,
    kindOf: ko,
    kindOfTest: Ke,
    endsWith: $y,
    toArray: Hy,
    forEachEntry: Wy,
    matchAll: Qy,
    isHTMLForm: Ky,
    hasOwnProperty: Za,
    hasOwnProp: Za,
    reduceDescriptors: np,
    freezeMethods: Jy,
    toObjectSet: Yy,
    toCamelCase: qy,
    noop: Xy,
    toFiniteNumber: Zy,
    findKey: ep,
    global: Ht,
    isContextDefined: tp,
    ALPHABET: rp,
    generateString: by,
    isSpecCompliantForm: eg,
    toJSONObject: tg,
    isAsyncFn: ng,
    isThenable: rg,
    setImmediate: ip,
    asap: ig,
  };
function O(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
E.inherits(O, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const op = O.prototype,
  lp = {};
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
].forEach((e) => {
  lp[e] = { value: e };
});
Object.defineProperties(O, lp);
Object.defineProperty(op, "isAxiosError", { value: !0 });
O.from = (e, t, n, r, i, o) => {
  const l = Object.create(op);
  return (
    E.toFlatObject(
      e,
      l,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    O.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    o && Object.assign(l, o),
    l
  );
};
const og = null;
function gs(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function sp(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ec(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = sp(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function lg(e) {
  return E.isArray(e) && !e.some(gs);
}
const sg = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function jo(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, w) {
        return !E.isUndefined(w[v]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    l = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(g) {
    if (g === null) return "";
    if (E.isDate(g)) return g.toISOString();
    if (!u && E.isBlob(g))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(g) || E.isTypedArray(g)
      ? u && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, v, w) {
    let p = g;
    if (g && !w && typeof g == "object") {
      if (E.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (E.isArray(g) && lg(g)) ||
        ((E.isFileList(g) || E.endsWith(v, "[]")) && (p = E.toArray(g)))
      )
        return (
          (v = sp(v)),
          p.forEach(function (h, x) {
            !(E.isUndefined(h) || h === null) &&
              t.append(
                l === !0 ? ec([v], x, o) : l === null ? v : v + "[]",
                a(h)
              );
          }),
          !1
        );
    }
    return gs(g) ? !0 : (t.append(ec(w, v, o), a(g)), !1);
  }
  const f = [],
    y = Object.assign(sg, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: gs,
    });
  function S(g, v) {
    if (!E.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(g),
        E.forEach(g, function (p, d) {
          (!(E.isUndefined(p) || p === null) &&
            i.call(t, p, E.isString(d) ? d.trim() : d, v, y)) === !0 &&
            S(p, v ? v.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function tc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ju(e, t) {
  (this._pairs = []), e && jo(e, this, t);
}
const up = ju.prototype;
up.append = function (t, n) {
  this._pairs.push([t, n]);
};
up.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, tc);
      }
    : tc;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function ug(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ap(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || ug,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = E.isURLSearchParams(t) ? t.toString() : new ju(t, n).toString(r)),
    o)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class nc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const cp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ag = typeof URLSearchParams < "u" ? URLSearchParams : ju,
  cg = typeof FormData < "u" ? FormData : null,
  fg = typeof Blob < "u" ? Blob : null,
  dg = {
    isBrowser: !0,
    classes: { URLSearchParams: ag, FormData: cg, Blob: fg },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ru = typeof window < "u" && typeof document < "u",
  vs = (typeof navigator == "object" && navigator) || void 0,
  pg =
    Ru &&
    (!vs || ["ReactNative", "NativeScript", "NS"].indexOf(vs.product) < 0),
  hg =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  mg = (Ru && window.location.href) || "http://localhost",
  yg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ru,
        hasStandardBrowserEnv: pg,
        hasStandardBrowserWebWorkerEnv: hg,
        navigator: vs,
        origin: mg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Se = { ...yg, ...dg };
function gg(e, t) {
  return jo(
    e,
    new Se.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Se.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function vg(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function wg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function fp(e) {
  function t(n, r, i, o) {
    let l = n[o++];
    if (l === "__proto__") return !0;
    const s = Number.isFinite(+l),
      u = o >= n.length;
    return (
      (l = !l && E.isArray(i) ? i.length : l),
      u
        ? (E.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !s)
        : ((!i[l] || !E.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], o) && E.isArray(i[l]) && (i[l] = wg(i[l])),
          !s)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, i) => {
        t(vg(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Sg(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Hr = {
  transitional: cp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = E.isObject(t);
      if ((o && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return i ? JSON.stringify(fp(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return gg(t, this.formSerializer).toString();
        if ((s = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return jo(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), Sg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Hr.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (l)
            throw s.name === "SyntaxError"
              ? O.from(s, O.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Se.classes.FormData, Blob: Se.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hr.headers[e] = {};
});
const xg = E.toObjectSet([
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
  Eg = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (i = l.indexOf(":")),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && xg[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  rc = Symbol("internals");
function Xn(e) {
  return e && String(e).trim().toLowerCase();
}
function ki(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(ki) : String(e);
}
function kg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const _g = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function cl(e, t, n, r, i) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function Cg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function jg(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, l) {
        return this[r].call(this, t, i, o, l);
      },
      configurable: !0,
    });
  });
}
class xe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(s, u, a) {
      const c = Xn(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = E.findKey(i, c);
      (!f || i[f] === void 0 || a === !0 || (a === void 0 && i[f] !== !1)) &&
        (i[f || u] = ki(s));
    }
    const l = (s, u) => E.forEach(s, (a, c) => o(a, c, u));
    if (E.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (E.isString(t) && (t = t.trim()) && !_g(t)) l(Eg(t), n);
    else if (E.isHeaders(t)) for (const [s, u] of t.entries()) o(u, s, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Xn(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return kg(i);
        if (E.isFunction(n)) return n.call(this, i, r);
        if (E.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Xn(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || cl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(l) {
      if (((l = Xn(l)), l)) {
        const s = E.findKey(r, l);
        s && (!n || cl(r, r[s], s, n)) && (delete r[s], (i = !0));
      }
    }
    return E.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || cl(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (i, o) => {
        const l = E.findKey(r, o);
        if (l) {
          (n[l] = ki(i)), delete n[o];
          return;
        }
        const s = t ? Cg(o) : String(o).trim();
        s !== o && delete n[o], (n[s] = ki(i)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[rc] = this[rc] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(l) {
      const s = Xn(l);
      r[s] || (jg(i, l), (r[s] = !0));
    }
    return E.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
xe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(xe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(xe);
function fl(e, t) {
  const n = this || Hr,
    r = t || n,
    i = xe.from(r.headers);
  let o = r.data;
  return (
    E.forEach(e, function (s) {
      o = s.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function dp(e) {
  return !!(e && e.__CANCEL__);
}
function Bn(e, t, n) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(Bn, O, { __CANCEL__: !0 });
function pp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new O(
          "Request failed with status code " + n.status,
          [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Rg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Pg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o];
      l || (l = a), (n[i] = u), (r[i] = a);
      let f = o,
        y = 0;
      for (; f !== i; ) (y += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), a - l < t)) return;
      const S = c && a - c;
      return S ? Math.round((y * 1e3) / S) : void 0;
    }
  );
}
function Ng(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    o;
  const l = (a, c = Date.now()) => {
    (n = c), (i = null), o && (clearTimeout(o), (o = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? l(a, c)
        : ((i = a),
          o ||
            (o = setTimeout(() => {
              (o = null), l(i);
            }, r - f)));
    },
    () => i && l(i),
  ];
}
const Xi = (e, t, n = 3) => {
    let r = 0;
    const i = Pg(50, 250);
    return Ng((o) => {
      const l = o.loaded,
        s = o.lengthComputable ? o.total : void 0,
        u = l - r,
        a = i(u),
        c = l <= s;
      r = l;
      const f = {
        loaded: l,
        total: s,
        progress: s ? l / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && c ? (s - l) / a : void 0,
        event: o,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  ic = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  oc =
    (e) =>
    (...t) =>
      E.asap(() => e(...t)),
  Tg = Se.hasStandardBrowserEnv
    ? (function () {
        const t =
            Se.navigator && /(msie|trident)/i.test(Se.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let l = o;
          return (
            t && (n.setAttribute("href", l), (l = n.href)),
            n.setAttribute("href", l),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (l) {
            const s = E.isString(l) ? i(l) : l;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Og = Se.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const l = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && l.push("path=" + r),
            E.isString(i) && l.push("domain=" + i),
            o === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Lg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hp(e, t) {
  return e && !Lg(t) ? Mg(e, t) : t;
}
const lc = (e) => (e instanceof xe ? { ...e } : e);
function Xt(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, f) {
    return E.isPlainObject(a) && E.isPlainObject(c)
      ? E.merge.call({ caseless: f }, a, c)
      : E.isPlainObject(c)
      ? E.merge({}, c)
      : E.isArray(c)
      ? c.slice()
      : c;
  }
  function i(a, c, f) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(a)) return r(void 0, a, f);
    } else return r(a, c, f);
  }
  function o(a, c) {
    if (!E.isUndefined(c)) return r(void 0, c);
  }
  function l(a, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function s(a, c, f) {
    if (f in t) return r(a, c);
    if (f in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: s,
    headers: (a, c) => i(lc(a), lc(c), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = u[c] || i,
        y = f(e[c], t[c], c);
      (E.isUndefined(y) && f !== s) || (n[c] = y);
    }),
    n
  );
}
const mp = (e) => {
    const t = Xt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: l,
      auth: s,
    } = t;
    (t.headers = l = xe.from(l)),
      (t.url = ap(hp(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        l.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : "")
            )
        );
    let u;
    if (E.isFormData(n)) {
      if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((u = l.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        l.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Se.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && Tg(t.url)))
    ) {
      const a = i && o && Og.read(o);
      a && l.set(i, a);
    }
    return t;
  },
  zg = typeof XMLHttpRequest < "u",
  Dg =
    zg &&
    function (e) {
      return new Promise(function (n, r) {
        const i = mp(e);
        let o = i.data;
        const l = xe.from(i.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = i,
          c,
          f,
          y,
          S,
          g;
        function v() {
          S && S(),
            g && g(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c);
        }
        let w = new XMLHttpRequest();
        w.open(i.method.toUpperCase(), i.url, !0), (w.timeout = i.timeout);
        function p() {
          if (!w) return;
          const h = xe.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            k = {
              data:
                !s || s === "text" || s === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: h,
              config: e,
              request: w,
            };
          pp(
            function (P) {
              n(P), v();
            },
            function (P) {
              r(P), v();
            },
            k
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = p)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (w.onabort = function () {
            w &&
              (r(new O("Request aborted", O.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new O("Network Error", O.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let x = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = i.transitional || cp;
            i.timeoutErrorMessage && (x = i.timeoutErrorMessage),
              r(
                new O(
                  x,
                  k.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          o === void 0 && l.setContentType(null),
          "setRequestHeader" in w &&
            E.forEach(l.toJSON(), function (x, k) {
              w.setRequestHeader(k, x);
            }),
          E.isUndefined(i.withCredentials) ||
            (w.withCredentials = !!i.withCredentials),
          s && s !== "json" && (w.responseType = i.responseType),
          a && (([y, g] = Xi(a, !0)), w.addEventListener("progress", y)),
          u &&
            w.upload &&
            (([f, S] = Xi(u)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", S)),
          (i.cancelToken || i.signal) &&
            ((c = (h) => {
              w &&
                (r(!h || h.type ? new Bn(null, e, w) : h),
                w.abort(),
                (w = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const d = Rg(i.url);
        if (d && Se.protocols.indexOf(d) === -1) {
          r(new O("Unsupported protocol " + d + ":", O.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(o || null);
      });
    },
  Fg = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        i;
      const o = function (a) {
        if (!i) {
          (i = !0), s();
          const c = a instanceof Error ? a : this.reason;
          r.abort(
            c instanceof O ? c : new Bn(c instanceof Error ? c.message : c)
          );
        }
      };
      let l =
        t &&
        setTimeout(() => {
          (l = null), o(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (l && clearTimeout(l),
          (l = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(o)
              : a.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener("abort", o));
      const { signal: u } = r;
      return (u.unsubscribe = () => E.asap(s)), u;
    }
  },
  Ag = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  Ig = async function* (e, t) {
    for await (const n of Ug(e)) yield* Ag(n, t);
  },
  Ug = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  sc = (e, t, n, r) => {
    const i = Ig(e, t);
    let o = 0,
      l,
      s = (u) => {
        l || ((l = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: c } = await i.next();
            if (a) {
              s(), u.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let y = (o += f);
              n(y);
            }
            u.enqueue(new Uint8Array(c));
          } catch (a) {
            throw (s(a), a);
          }
        },
        cancel(u) {
          return s(u), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ro =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  yp = Ro && typeof ReadableStream == "function",
  Bg =
    Ro &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  gp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  $g =
    yp &&
    gp(() => {
      let e = !1;
      const t = new Request(Se.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  uc = 64 * 1024,
  ws = yp && gp(() => E.isReadableStream(new Response("").body)),
  Zi = { stream: ws && ((e) => e.body) };
Ro &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Zi[t] &&
        (Zi[t] = E.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new O(
                `Response type '${t}' is not supported`,
                O.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Hg = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (
        await new Request(Se.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e)))
      return (await Bg(e)).byteLength;
  },
  Vg = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? Hg(t);
  },
  Wg =
    Ro &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: l,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: y,
      } = mp(e);
      a = a ? (a + "").toLowerCase() : "text";
      let S = Fg([i, o && o.toAbortSignal()], l),
        g;
      const v =
        S &&
        S.unsubscribe &&
        (() => {
          S.unsubscribe();
        });
      let w;
      try {
        if (
          u &&
          $g &&
          n !== "get" &&
          n !== "head" &&
          (w = await Vg(c, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            j;
          if (
            (E.isFormData(r) &&
              (j = k.headers.get("content-type")) &&
              c.setContentType(j),
            k.body)
          ) {
            const [P, R] = ic(w, Xi(oc(u)));
            r = sc(k.body, uc, P, R);
          }
        }
        E.isString(f) || (f = f ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        g = new Request(t, {
          ...y,
          signal: S,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? f : void 0,
        });
        let d = await fetch(g);
        const h = ws && (a === "stream" || a === "response");
        if (ws && (s || (h && v))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((F) => {
            k[F] = d[F];
          });
          const j = E.toFiniteNumber(d.headers.get("content-length")),
            [P, R] = (s && ic(j, Xi(oc(s), !0))) || [];
          d = new Response(
            sc(d.body, uc, P, () => {
              R && R(), v && v();
            }),
            k
          );
        }
        a = a || "text";
        let x = await Zi[E.findKey(Zi, a) || "text"](d, e);
        return (
          !h && v && v(),
          await new Promise((k, j) => {
            pp(k, j, {
              data: x,
              headers: xe.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (p) {
        throw (
          (v && v(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new O("Network Error", O.ERR_NETWORK, e, g), {
                cause: p.cause || p,
              })
            : O.from(p, p && p.code, e, g))
        );
      }
    }),
  Ss = { http: og, xhr: Dg, fetch: Wg };
E.forEach(Ss, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ac = (e) => `- ${e}`,
  Qg = (e) => E.isFunction(e) || e === null || e === !1,
  vp = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let l;
        if (
          ((r = n),
          !Qg(n) && ((r = Ss[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new O(`Unknown adapter '${l}'`);
        if (r) break;
        i[l || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? o.length > 1
            ? `since :
` +
              o.map(ac).join(`
`)
            : " " + ac(o[0])
          : "as no adapter specified";
        throw new O(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Ss,
  };
function dl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Bn(null, e);
}
function cc(e) {
  return (
    dl(e),
    (e.headers = xe.from(e.headers)),
    (e.data = fl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    vp
      .getAdapter(e.adapter || Hr.adapter)(e)
      .then(
        function (r) {
          return (
            dl(e),
            (r.data = fl.call(e, e.transformResponse, r)),
            (r.headers = xe.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            dp(r) ||
              (dl(e),
              r &&
                r.response &&
                ((r.response.data = fl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = xe.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const wp = "1.7.7",
  Pu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Pu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const fc = {};
Pu.transitional = function (t, n, r) {
  function i(o, l) {
    return (
      "[Axios v" +
      wp +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (o, l, s) => {
    if (t === !1)
      throw new O(
        i(l, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED
      );
    return (
      n &&
        !fc[l] &&
        ((fc[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, l, s) : !0
    );
  };
};
function Kg(e, t, n) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      l = t[o];
    if (l) {
      const s = e[o],
        u = s === void 0 || l(s, o, e);
      if (u !== !0)
        throw new O("option " + o + " must be " + u, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new O("Unknown option " + o, O.ERR_BAD_OPTION);
  }
}
const xs = { assertOptions: Kg, validators: Pu },
  ft = xs.validators;
class Qt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new nc(), response: new nc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Xt(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      xs.assertOptions(
        r,
        {
          silentJSONParsing: ft.transitional(ft.boolean),
          forcedJSONParsing: ft.transitional(ft.boolean),
          clarifyTimeoutError: ft.transitional(ft.boolean),
        },
        !1
      ),
      i != null &&
        (E.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : xs.assertOptions(
              i,
              { encode: ft.function, serialize: ft.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = o && E.merge(o.common, o[n.method]);
    o &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete o[g];
        }
      ),
      (n.headers = xe.concat(l, o));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), s.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let c,
      f = 0,
      y;
    if (!u) {
      const g = [cc.bind(this), void 0];
      for (
        g.unshift.apply(g, s),
          g.push.apply(g, a),
          y = g.length,
          c = Promise.resolve(n);
        f < y;

      )
        c = c.then(g[f++], g[f++]);
      return c;
    }
    y = s.length;
    let S = n;
    for (f = 0; f < y; ) {
      const g = s[f++],
        v = s[f++];
      try {
        S = g(S);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      c = cc.call(this, S);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, y = a.length; f < y; ) c = c.then(a[f++], a[f++]);
    return c;
  }
  getUri(t) {
    t = Xt(this.defaults, t);
    const n = hp(t.baseURL, t.url);
    return ap(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Qt.prototype[t] = function (n, r) {
    return this.request(
      Xt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, l, s) {
      return this.request(
        Xt(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: l,
        })
      );
    };
  }
  (Qt.prototype[t] = n()), (Qt.prototype[t + "Form"] = n(!0));
});
class Nu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const l = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(o);
          }),
          l
        );
      }),
      t(function (o, l, s) {
        r.reason || ((r.reason = new Bn(o, l, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Nu(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function qg(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Gg(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Es = {
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
Object.entries(Es).forEach(([e, t]) => {
  Es[t] = e;
});
function Sp(e) {
  const t = new Qt(e),
    n = Xd(Qt.prototype.request, t);
  return (
    E.extend(n, Qt.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Sp(Xt(e, i));
    }),
    n
  );
}
const U = Sp(Hr);
U.Axios = Qt;
U.CanceledError = Bn;
U.CancelToken = Nu;
U.isCancel = dp;
U.VERSION = wp;
U.toFormData = jo;
U.AxiosError = O;
U.Cancel = U.CanceledError;
U.all = function (t) {
  return Promise.all(t);
};
U.spread = qg;
U.isAxiosError = Gg;
U.mergeConfig = Xt;
U.AxiosHeaders = xe;
U.formToJSON = (e) => fp(E.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = vp.getAdapter;
U.HttpStatusCode = Es;
U.default = U;
const Jg = () => {
    const [e, t] = _.useState([]),
      [n, r] = _.useState([]),
      i = async () => {
        try {
          let o = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          t(o.data.about);
          let l = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          r(l.data.aboutBox);
        } catch (o) {
          console.log(o.message);
        }
      };
    return (
      _.useEffect(() => {
        i();
      }, []),
      m.jsx(m.Fragment, {
        children: m.jsxs("div", {
          className: wy.title,
          children: [
            e == null
              ? void 0
              : e.map((o) =>
                  m.jsx(m.Fragment, {
                    children: m.jsxs(
                      "div",
                      {
                        children: [
                          m.jsxs("h1", { children: [" ", o.title] }),
                          m.jsx("p", { children: o.post }),
                          m.jsx("p", { children: o.post2 }),
                        ],
                      },
                      o.id
                    ),
                  })
                ),
            m.jsx("div", {
              children:
                n == null
                  ? void 0
                  : n.map((o) =>
                      m.jsx(m.Fragment, {
                        children: m.jsxs(
                          "div",
                          {
                            children: [
                              m.jsx("img", { src: o.image, alt: "" }),
                              m.jsx("p", { children: o.title }),
                            ],
                          },
                          o.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  },
  Yg = "_box_1ui2o_3",
  Xg = "_link1_1ui2o_21",
  Zg = "_link_1ui2o_21",
  sn = { box: Yg, link1: Xg, link: Zg },
  bg = () => {
    const [e, t] = _.useState([]),
      n = async () => {
        try {
          let r = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          t(r.data.Box);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      _.useEffect(() => {
        n();
      }, []),
      m.jsx(m.Fragment, {
        children:
          e == null
            ? void 0
            : e.map((r, i) =>
                i === 0
                  ? m.jsx(m.Fragment, {
                      children: m.jsxs(
                        "div",
                        {
                          className: sn.box,
                          children: [
                            m.jsx("img", { src: r.image, alt: "" }),
                            m.jsx("div", { className: sn.link1 }),
                            m.jsxs("div", {
                              children: [
                                m.jsx("h1", { children: r.title1 }),
                                m.jsx("h2", { children: r.title2 }),
                              ],
                            }),
                            m.jsxs("div", {
                              children: [
                                m.jsx("h1", { children: r.head1 }),
                                m.jsx("p", { children: r.main }),
                                m.jsxs("div", {
                                  className: sn.link,
                                  children: [
                                    m.jsx("a", {
                                      href: "#",
                                      children: r.button1,
                                    }),
                                    m.jsx("a", {
                                      href: "#",
                                      children: r.button2,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        r.id
                      ),
                    })
                  : m.jsx(m.Fragment, {
                      children: m.jsxs(
                        "div",
                        {
                          className: sn.box,
                          children: [
                            m.jsx("img", { src: r.image, alt: "" }),
                            m.jsx("div", { className: sn.link1 }),
                            m.jsxs("div", {
                              children: [
                                m.jsx("h1", { children: r.title1 }),
                                m.jsx("h2", { children: r.title2 }),
                              ],
                            }),
                            m.jsxs("div", {
                              children: [
                                m.jsx("h1", { children: r.head1 }),
                                m.jsx("p", { children: r.main }),
                                m.jsx("div", {
                                  className: sn.link,
                                  children: m.jsx("a", {
                                    href: "#",
                                    children: r.button1,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        r.id
                      ),
                    })
              ),
      })
    );
  },
  ev = "_mag_10opg_3",
  tv = "_box_10opg_27",
  dc = { mag: ev, box: tv },
  nv = () => {
    const [e, t] = _.useState([]),
      n = async () => {
        try {
          let r = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          t(r.data.magazine);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      _.useEffect(() => {
        n();
      }, []),
      m.jsx(m.Fragment, {
        children: m.jsxs("div", {
          className: dc.mag,
          children: [
            m.jsx("h1", { children: "مجله گلستان" }),
            m.jsx("div", {
              className: dc.box,
              children:
                e == null
                  ? void 0
                  : e.map((r) =>
                      m.jsx(m.Fragment, {
                        children: m.jsxs(
                          "div",
                          {
                            children: [
                              m.jsx("img", { src: r.image, alt: "" }),
                              m.jsx("h2", { children: r.name }),
                              m.jsx("p", { children: r.main }),
                              m.jsx("a", { href: "#", children: r.button }),
                            ],
                          },
                          r.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  },
  rv = "_mag_1k50k_3",
  iv = "_box_1k50k_13",
  pc = { mag: rv, box: iv },
  ov = () => {
    const [e, t] = _.useState([]),
      n = async () => {
        try {
          let i = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          t(i.data.clip);
        } catch (i) {
          console.log(i.message);
        }
      };
    _.useEffect(() => {
      n();
    }, []);
    const r = (i) =>
      m.jsx("video", { src: i, controls: !0, width: "100%", height: "250px" });
    return m.jsx(m.Fragment, {
      children: m.jsx("div", {
        className: pc.mag,
        children: m.jsx("div", {
          className: pc.box,
          children:
            e == null
              ? void 0
              : e.map((i) =>
                  m.jsx(m.Fragment, {
                    children: m.jsxs(
                      "div",
                      {
                        children: [
                          r(i.video),
                          m.jsx("h2", { children: i.name }),
                          m.jsx("p", { children: i.main }),
                          m.jsx("a", { href: "#", children: i.button }),
                        ],
                      },
                      i.id
                    ),
                  })
                ),
        }),
      }),
    });
  },
  lv = "./assets/csr-pic1-Dp4Lz4s7.jpg",
  sv = "_res_2lojp_3",
  uv = "_link_2lojp_139",
  av = "_icon_2lojp_247",
  pl = { res: sv, link: uv, icon: av },
  cv = () => {
    const [e, t] = _.useState([]),
      n = async () => {
        try {
          let r = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          t(r.data.response);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      _.useEffect(() => {
        n();
      }, []),
      m.jsx(m.Fragment, {
        children: m.jsxs("div", {
          className: pl.res,
          children: [
            m.jsx("div", {
              children: m.jsx("h1", {
                children: "مسئولیت های اجتماعی شرکت گلستان",
              }),
            }),
            m.jsxs("div", {
              children: [
                m.jsx("h1", { children: "Golestan social Responsibility" }),
                m.jsx("h2", { children: "Mahdi Hospital" }),
                m.jsx("img", { src: lv, alt: "" }),
              ],
            }),
            m.jsx("div", {}),
            m.jsx("div", {
              children: m.jsxs("div", {
                className: pl.link,
                children: [
                  m.jsx("h1", { children: "مسئوليت‌های اجتماعی گلستان" }),
                  m.jsx("p", {
                    children:
                      "كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.",
                  }),
                  m.jsx("a", { href: "#", children: "اطلاعات بیشتر" }),
                ],
              }),
            }),
            m.jsx("div", {
              className: pl.icon,
              children:
                e == null
                  ? void 0
                  : e.map((r) =>
                      m.jsx(
                        "a",
                        {
                          href: "#",
                          children: m.jsx("img", { src: r.image, alt: "" }),
                        },
                        r.id
                      )
                    ),
            }),
          ],
        }),
      })
    );
  },
  fv =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cpath%20id='XMLID_224_'%20d='M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394%20l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393%20C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z'/%3e%3c/svg%3e",
  dv = "_whats_1xkaf_3",
  pv = { whats: dv },
  hv = () =>
    m.jsx(m.Fragment, {
      children: m.jsx("div", {
        className: pv.whats,
        children: m.jsx("a", {
          href: "#",
          children: m.jsx("img", { src: fv, alt: "" }),
        }),
      }),
    }),
  mv = () =>
    m.jsxs(m.Fragment, {
      children: [
        m.jsx(gy, {}),
        m.jsx(hv, {}),
        m.jsx(Jg, {}),
        m.jsx(bg, {}),
        m.jsx(nv, {}),
        m.jsx(ov, {}),
        m.jsx(cv, {}),
      ],
    }),
  hc = "./assets/logo-BqhyckDw.png",
  yv =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='122.879px'%20height='103.609px'%20viewBox='0%200%20122.879%20103.609'%20enable-background='new%200%200%20122.879%20103.609'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0%20c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z%20M10.368,82.875%20h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0%20C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z%20M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0%20c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438%20L10.368,41.438z'/%3e%3c/g%3e%3c/svg%3e",
  gv =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4=",
  vv = () => {
    const [e, t] = _.useState([]),
      n = async () => {
        try {
          let o = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          t(o.data.menu);
        } catch (o) {
          console.log(o.message);
        }
      };
    _.useEffect(() => {
      n();
    }, []);
    const r = _.useRef(null);
    _.useEffect(() => {
      r.current.addEventListener("click", function () {
        document.querySelector(".menuMobile").classList.add("active");
      });
    }, []);
    const i = _.useRef(null);
    return (
      _.useEffect(() => {
        i.current.addEventListener("click", function () {
          document.querySelector(".menuMobile").classList.remove("active");
        });
      }, []),
      m.jsxs(m.Fragment, {
        children: [
          m.jsxs("div", {
            className: "menu",
            children: [
              m.jsx("nav", {
                children:
                  e == null
                    ? void 0
                    : e.map((o, l) =>
                        l === 2
                          ? m.jsx(
                              "div",
                              {
                                children: m.jsx(ln, {
                                  to: "/TeaProduct/TeaProduct2",
                                  children: o.name,
                                }),
                              },
                              o.id
                            )
                          : l === 0
                          ? m.jsx(m.Fragment, {
                              children: m.jsx(
                                "div",
                                {
                                  children: m.jsx(ln, {
                                    to: "/",
                                    children: o.name,
                                  }),
                                },
                                o.id
                              ),
                            })
                          : m.jsx(
                              "div",
                              {
                                children: m.jsx("a", {
                                  href: "#",
                                  children: o.name,
                                }),
                              },
                              o.id
                            )
                      ),
              }),
              m.jsx(ln, {
                to: "/",
                children: m.jsx("img", { src: hc, alt: "" }),
              }),
            ],
          }),
          m.jsx("div", {
            class: "toggleMenu",
            ref: r,
            children: m.jsx("img", { src: yv, alt: "" }),
          }),
          m.jsx("div", {
            id: "menuMobile",
            class: "menuMobile",
            children: m.jsxs("nav", {
              class: "active",
              children: [
                m.jsx("div", {
                  class: "close",
                  ref: i,
                  children: m.jsx("img", { src: gv, alt: "" }),
                }),
                m.jsxs("ul", {
                  children: [
                    e == null
                      ? void 0
                      : e.map((o, l) =>
                          l === 2
                            ? m.jsx(m.Fragment, {
                                children: m.jsx(
                                  "li",
                                  {
                                    children: m.jsx(ln, {
                                      to: "/TeaProduct/TeaProduct2",
                                      children: o.name,
                                    }),
                                  },
                                  o.id
                                ),
                              })
                            : m.jsx(m.Fragment, {
                                children: m.jsx(
                                  "li",
                                  {
                                    children: m.jsx(ln, {
                                      to: "/",
                                      className: "active",
                                      children: o.name,
                                    }),
                                  },
                                  o.id
                                ),
                              })
                        ),
                    m.jsx("li", {
                      children: m.jsx(ln, {
                        to: "/",
                        children: m.jsx("img", {
                          className: "logo1",
                          src: hc,
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
  wv = "_footer_7i0q2_3",
  Sv = "_line_7i0q2_11",
  xv = "_footer2_7i0q2_21",
  Ev = "_boxpack_7i0q2_25",
  kv = "_box_7i0q2_25",
  _v = "_under_7i0q2_119",
  un = { footer: wv, line: Sv, footer2: xv, boxpack: Ev, box: kv, under: _v },
  Cv = () => {
    const [e, t] = _.useState([]),
      n = async () => {
        try {
          let r = await U(
            "https://raw.githubusercontent.com/kraken-ship/golestan/main/assets/db.json"
          );
          t(r.data.footer);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      _.useEffect(() => {
        n();
      }, []),
      m.jsx(m.Fragment, {
        children: m.jsxs("footer", {
          className: un.footer,
          children: [
            m.jsx("div", { className: un.line }),
            m.jsx("div", {
              className: un.footer2,
              children: m.jsx("div", {
                className: un.boxpack,
                children: e.map((r) =>
                  m.jsx(m.Fragment, {
                    children: m.jsxs(
                      "div",
                      {
                        className: un.box,
                        children: [
                          m.jsx("img", { src: r.image, alt: "" }),
                          m.jsx("h1", { children: r.title }),
                          m.jsx("a", { href: "", children: r.name1 }),
                          m.jsx("a", { href: "", children: r.name2 }),
                          m.jsx("a", { href: "", children: r.name3 }),
                          m.jsx("a", { href: "", children: r.name4 }),
                          m.jsx("a", { href: "", children: r.name5 }),
                        ],
                      },
                      r.id
                    ),
                  })
                ),
              }),
            }),
            m.jsxs("div", {
              className: un.under,
              children: [
                m.jsx("h1", {
                  children: "all right reserved golestan company 2022-2025",
                }),
                m.jsx("h2", { children: "design by:golestan studio" }),
              ],
            }),
          ],
        }),
      })
    );
  },
  jv = "_title_kv91z_9",
  Rv = { title: jv },
  Pv = () =>
    m.jsx(m.Fragment, {
      children: m.jsx("div", {
        className: Rv.title,
        children: m.jsxs("div", {
          children: [
            m.jsx("h1", { children: " معرفی محصول" }),
            m.jsx("p", {
              children:
                "چای تنها یك نوشیدنی گرم نیست.‌ یك گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدك می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش به همراه دارد.",
            }),
            m.jsxs("p", {
              children: [
                "برای مردمان ایران زمین نام ",
                m.jsx("strong", { children: "گلستان" }),
                " با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.",
              ],
            }),
            m.jsx("p", {
              children:
                "شرکت گلستان با اتکا به بیش از نیم قرن سابقه در تهیه و ترکیب انواع چای، بهترین انواع چای را از مناطق برتر تولیدکننده مانند هندوستان، سیلان و کنیا خریداری نموده و آن ها را به اقتضای ذائقه ایرانی، به منظور دستیابی به بهترین عطر، طعم و رنگ با استفاده از دستگاه های مخصوص به نسبت مشخصی ترکیب می نماید و در اوزان مختلف بسته بندی و در بازار عرضه می کند",
            }),
          ],
        }),
      }),
    }),
  Nv = "./assets/%D9%82%D8%B1%D9%85%D8%B2-CjdO677p.png",
  Tv = "_header_af7yl_3",
  Ov = { header: Tv },
  Lv = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs("div", {
        className: Ov.header,
        children: [
          m.jsx("img", { width: "300px", src: Nv, alt: "" }),
          m.jsxs("div", {
            children: [
              m.jsx("h1", { children: "چای گلستان" }),
              m.jsx("h2", { children: "سابقه ای به قدمت یک عمر" }),
            ],
          }),
        ],
      }),
    });
var xp = { exports: {} },
  Ep = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr = _;
function Mv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zv = typeof Object.is == "function" ? Object.is : Mv,
  Dv = Vr.useSyncExternalStore,
  Fv = Vr.useRef,
  Av = Vr.useEffect,
  Iv = Vr.useMemo,
  Uv = Vr.useDebugValue;
Ep.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = Fv(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = Iv(
    function () {
      function u(S) {
        if (!a) {
          if (((a = !0), (c = S), (S = r(S)), i !== void 0 && l.hasValue)) {
            var g = l.value;
            if (i(g, S)) return (f = g);
          }
          return (f = S);
        }
        if (((g = f), zv(c, S))) return g;
        var v = r(S);
        return i !== void 0 && i(g, v) ? ((c = S), g) : ((c = S), (f = v));
      }
      var a = !1,
        c,
        f,
        y = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        y === null
          ? void 0
          : function () {
              return u(y());
            },
      ];
    },
    [t, n, r, i]
  );
  var s = Dv(e, o[0], o[1]);
  return (
    Av(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s]
    ),
    Uv(s),
    s
  );
};
xp.exports = Ep;
var Bv = xp.exports;
function $v(e) {
  e();
}
function Hv() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      $v(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var mc = { notify() {}, get: () => [] };
function Vv(e, t) {
  let n,
    r = mc,
    i = 0,
    o = !1;
  function l(v) {
    c();
    const w = r.subscribe(v);
    let p = !1;
    return () => {
      p || ((p = !0), w(), f());
    };
  }
  function s() {
    r.notify();
  }
  function u() {
    g.onStateChange && g.onStateChange();
  }
  function a() {
    return o;
  }
  function c() {
    i++, n || ((n = e.subscribe(u)), (r = Hv()));
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = mc));
  }
  function y() {
    o || ((o = !0), c());
  }
  function S() {
    o && ((o = !1), f());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: s,
    handleChangeWrapper: u,
    isSubscribed: a,
    trySubscribe: y,
    tryUnsubscribe: S,
    getListeners: () => r,
  };
  return g;
}
var Wv = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qv = Wv(),
  Kv = () => typeof navigator < "u" && navigator.product === "ReactNative",
  qv = Kv(),
  Gv = () => (Qv || qv ? _.useLayoutEffect : _.useEffect),
  Jv = Gv(),
  hl = Symbol.for("react-redux-context"),
  ml = typeof globalThis < "u" ? globalThis : {};
function Yv() {
  if (!_.createContext) return {};
  const e = ml[hl] ?? (ml[hl] = new Map());
  let t = e.get(_.createContext);
  return t || ((t = _.createContext(null)), e.set(_.createContext, t)), t;
}
var Tt = Yv();
function Xv(e) {
  const { children: t, context: n, serverState: r, store: i } = e,
    o = _.useMemo(() => {
      const u = Vv(i);
      return {
        store: i,
        subscription: u,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    l = _.useMemo(() => i.getState(), [i]);
  Jv(() => {
    const { subscription: u } = o;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      l !== i.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [o, l]);
  const s = n || Tt;
  return _.createElement(s.Provider, { value: o }, t);
}
var Zv = Xv;
function Tu(e = Tt) {
  return function () {
    return _.useContext(e);
  };
}
var kp = Tu();
function _p(e = Tt) {
  const t = e === Tt ? kp : Tu(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var bv = _p();
function e1(e = Tt) {
  const t = e === Tt ? bv : _p(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var t1 = e1(),
  n1 = (e, t) => e === t;
function r1(e = Tt) {
  const t = e === Tt ? kp : Tu(e),
    n = (r, i = {}) => {
      const { equalityFn: o = n1 } =
          typeof i == "function" ? { equalityFn: i } : i,
        l = t(),
        { store: s, subscription: u, getServerState: a } = l;
      _.useRef(!0);
      const c = _.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r]
        ),
        f = Bv.useSyncExternalStoreWithSelector(
          u.addNestedSub,
          s.getState,
          a || s.getState,
          c,
          o
        );
      return _.useDebugValue(f), f;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var i1 = r1();
function re(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var o1 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  yc = o1,
  yl = () => Math.random().toString(36).substring(7).split("").join("."),
  l1 = {
    INIT: `@@redux/INIT${yl()}`,
    REPLACE: `@@redux/REPLACE${yl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${yl()}`,
  },
  bi = l1;
function Ou(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Cp(e, t, n) {
  if (typeof e != "function") throw new Error(re(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(re(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(re(1));
    return n(Cp)(e, t);
  }
  let r = e,
    i = t,
    o = new Map(),
    l = o,
    s = 0,
    u = !1;
  function a() {
    l === o &&
      ((l = new Map()),
      o.forEach((w, p) => {
        l.set(p, w);
      }));
  }
  function c() {
    if (u) throw new Error(re(3));
    return i;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(re(4));
    if (u) throw new Error(re(5));
    let p = !0;
    a();
    const d = s++;
    return (
      l.set(d, w),
      function () {
        if (p) {
          if (u) throw new Error(re(6));
          (p = !1), a(), l.delete(d), (o = null);
        }
      }
    );
  }
  function y(w) {
    if (!Ou(w)) throw new Error(re(7));
    if (typeof w.type > "u") throw new Error(re(8));
    if (typeof w.type != "string") throw new Error(re(17));
    if (u) throw new Error(re(9));
    try {
      (u = !0), (i = r(i, w));
    } finally {
      u = !1;
    }
    return (
      (o = l).forEach((d) => {
        d();
      }),
      w
    );
  }
  function S(w) {
    if (typeof w != "function") throw new Error(re(10));
    (r = w), y({ type: bi.REPLACE });
  }
  function g() {
    const w = f;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(re(11));
        function d() {
          const x = p;
          x.next && x.next(c());
        }
        return d(), { unsubscribe: w(d) };
      },
      [yc]() {
        return this;
      },
    };
  }
  return (
    y({ type: bi.INIT }),
    { dispatch: y, subscribe: f, getState: c, replaceReducer: S, [yc]: g }
  );
}
function s1(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: bi.INIT }) > "u") throw new Error(re(12));
    if (typeof n(void 0, { type: bi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(re(13));
  });
}
function u1(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let i;
  try {
    s1(n);
  } catch (o) {
    i = o;
  }
  return function (l = {}, s) {
    if (i) throw i;
    let u = !1;
    const a = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        y = n[f],
        S = l[f],
        g = y(S, s);
      if (typeof g > "u") throw (s && s.type, new Error(re(14)));
      (a[f] = g), (u = u || g !== S);
    }
    return (u = u || r.length !== Object.keys(l).length), u ? a : l;
  };
}
function eo(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function a1(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(re(15));
    };
    const l = { getState: i.getState, dispatch: (u, ...a) => o(u, ...a) },
      s = e.map((u) => u(l));
    return (o = eo(...s)(i.dispatch)), { ...i, dispatch: o };
  };
}
function c1(e) {
  return Ou(e) && "type" in e && typeof e.type == "string";
}
var jp = Symbol.for("immer-nothing"),
  gc = Symbol.for("immer-draftable"),
  Pe = Symbol.for("immer-state");
function He(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var zn = Object.getPrototypeOf;
function Zt(e) {
  return !!e && !!e[Pe];
}
function ut(e) {
  var t;
  return e
    ? Rp(e) ||
        Array.isArray(e) ||
        !!e[gc] ||
        !!((t = e.constructor) != null && t[gc]) ||
        No(e) ||
        To(e)
    : !1;
}
var f1 = Object.prototype.constructor.toString();
function Rp(e) {
  if (!e || typeof e != "object") return !1;
  const t = zn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === f1;
}
function to(e, t) {
  Po(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Po(e) {
  const t = e[Pe];
  return t ? t.type_ : Array.isArray(e) ? 1 : No(e) ? 2 : To(e) ? 3 : 0;
}
function ks(e, t) {
  return Po(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Pp(e, t, n) {
  const r = Po(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function d1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function No(e) {
  return e instanceof Map;
}
function To(e) {
  return e instanceof Set;
}
function It(e) {
  return e.copy_ || e.base_;
}
function _s(e, t) {
  if (No(e)) return new Map(e);
  if (To(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Rp(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Pe];
    let i = Reflect.ownKeys(r);
    for (let o = 0; o < i.length; o++) {
      const l = i[o],
        s = r[l];
      s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (r[l] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[l],
          });
    }
    return Object.create(zn(e), r);
  } else {
    const r = zn(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function Lu(e, t = !1) {
  return (
    Oo(e) ||
      Zt(e) ||
      !ut(e) ||
      (Po(e) > 1 && (e.set = e.add = e.clear = e.delete = p1),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Lu(r, !0))),
    e
  );
}
function p1() {
  He(2);
}
function Oo(e) {
  return Object.isFrozen(e);
}
var h1 = {};
function bt(e) {
  const t = h1[e];
  return t || He(0, e), t;
}
var Mr;
function Np() {
  return Mr;
}
function m1(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function vc(e, t) {
  t &&
    (bt("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Cs(e) {
  js(e), e.drafts_.forEach(y1), (e.drafts_ = null);
}
function js(e) {
  e === Mr && (Mr = e.parent_);
}
function wc(e) {
  return (Mr = m1(Mr, e));
}
function y1(e) {
  const t = e[Pe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Sc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Pe].modified_ && (Cs(t), He(4)),
        ut(e) && ((e = no(t, e)), t.parent_ || ro(t, e)),
        t.patches_ &&
          bt("Patches").generateReplacementPatches_(
            n[Pe].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = no(t, n, [])),
    Cs(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== jp ? e : void 0
  );
}
function no(e, t, n) {
  if (Oo(t)) return t;
  const r = t[Pe];
  if (!r) return to(t, (i, o) => xc(e, r, t, i, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return ro(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i,
      l = !1;
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (l = !0)),
      to(o, (s, u) => xc(e, r, i, s, u, n, l)),
      ro(e, i, !1),
      n &&
        e.patches_ &&
        bt("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function xc(e, t, n, r, i, o, l) {
  if (Zt(i)) {
    const s =
        o && t && t.type_ !== 3 && !ks(t.assigned_, r) ? o.concat(r) : void 0,
      u = no(e, i, s);
    if ((Pp(n, r, u), Zt(u))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(i);
  if (ut(i) && !Oo(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    no(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        ro(e, i);
  }
}
function ro(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Lu(t, n);
}
function g1(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Np(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    o = Mu;
  n && ((i = [r]), (o = zr));
  const { revoke: l, proxy: s } = Proxy.revocable(i, o);
  return (r.draft_ = s), (r.revoke_ = l), s;
}
var Mu = {
    get(e, t) {
      if (t === Pe) return e;
      const n = It(e);
      if (!ks(n, t)) return v1(e, n, t);
      const r = n[t];
      return e.finalized_ || !ut(r)
        ? r
        : r === gl(e.base_, t)
        ? (vl(e), (e.copy_[t] = Ps(r, e)))
        : r;
    },
    has(e, t) {
      return t in It(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(It(e));
    },
    set(e, t, n) {
      const r = Tp(It(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = gl(It(e), t),
          o = i == null ? void 0 : i[Pe];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (d1(n, i) && (n !== void 0 || ks(e.base_, t))) return !0;
        vl(e), Rs(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        gl(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), vl(e), Rs(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = It(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      He(11);
    },
    getPrototypeOf(e) {
      return zn(e.base_);
    },
    setPrototypeOf() {
      He(12);
    },
  },
  zr = {};
to(Mu, (e, t) => {
  zr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
zr.deleteProperty = function (e, t) {
  return zr.set.call(this, e, t, void 0);
};
zr.set = function (e, t, n) {
  return Mu.set.call(this, e[0], t, n, e[0]);
};
function gl(e, t) {
  const n = e[Pe];
  return (n ? It(n) : e)[t];
}
function v1(e, t, n) {
  var i;
  const r = Tp(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function Tp(e, t) {
  if (!(t in e)) return;
  let n = zn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = zn(n);
  }
}
function Rs(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Rs(e.parent_));
}
function vl(e) {
  e.copy_ || (e.copy_ = _s(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var w1 = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const l = this;
          return function (u = o, ...a) {
            return l.produce(u, (c) => n.call(this, c, ...a));
          };
        }
        typeof n != "function" && He(6),
          r !== void 0 && typeof r != "function" && He(7);
        let i;
        if (ut(t)) {
          const o = wc(this),
            l = Ps(t, void 0);
          let s = !0;
          try {
            (i = n(l)), (s = !1);
          } finally {
            s ? Cs(o) : js(o);
          }
          return vc(o, r), Sc(i, o);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === jp && (i = void 0),
            this.autoFreeze_ && Lu(i, !0),
            r)
          ) {
            const o = [],
              l = [];
            bt("Patches").generateReplacementPatches_(t, i, o, l), r(o, l);
          }
          return i;
        } else He(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (l, ...s) => this.produceWithPatches(l, (u) => t(u, ...s));
        let r, i;
        return [
          this.produce(t, n, (l, s) => {
            (r = l), (i = s);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ut(e) || He(8), Zt(e) && (e = S1(e));
    const t = wc(this),
      n = Ps(e, void 0);
    return (n[Pe].isManual_ = !0), js(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Pe];
    (!n || !n.isManual_) && He(9);
    const { scope_: r } = n;
    return vc(r, t), Sc(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = bt("Patches").applyPatches_;
    return Zt(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function Ps(e, t) {
  const n = No(e)
    ? bt("MapSet").proxyMap_(e, t)
    : To(e)
    ? bt("MapSet").proxySet_(e, t)
    : g1(e, t);
  return (t ? t.scope_ : Np()).drafts_.push(n), n;
}
function S1(e) {
  return Zt(e) || He(10, e), Op(e);
}
function Op(e) {
  if (!ut(e) || Oo(e)) return e;
  const t = e[Pe];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = _s(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = _s(e, !0);
  return (
    to(n, (r, i) => {
      Pp(n, r, Op(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Ne = new w1(),
  Lp = Ne.produce;
Ne.produceWithPatches.bind(Ne);
Ne.setAutoFreeze.bind(Ne);
Ne.setUseStrictShallowCopy.bind(Ne);
Ne.applyPatches.bind(Ne);
Ne.createDraft.bind(Ne);
Ne.finishDraft.bind(Ne);
function Mp(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : i(o);
}
var x1 = Mp(),
  E1 = Mp,
  k1 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? eo
              : eo.apply(null, arguments);
        },
  _1 = (e) => e && typeof e.match == "function";
function dr(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(rt(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => c1(r) && r.type === e),
    n
  );
}
var zp = class nr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, nr.prototype);
  }
  static get [Symbol.species]() {
    return nr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new nr(...t[0].concat(this))
      : new nr(...t.concat(this));
  }
};
function Ec(e) {
  return ut(e) ? Lp(e, () => {}) : e;
}
function kc(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function C1(e) {
  return typeof e == "boolean";
}
var j1 = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let l = new zp();
      return n && (C1(n) ? l.push(x1) : l.push(E1(n.extraArgument))), l;
    },
  R1 = "RTK_autoBatch",
  _c = (e) => (t) => {
    setTimeout(t, e);
  },
  P1 =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        o = !1,
        l = !1;
      const s = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : _c(10)
            : e.type === "callback"
            ? e.queueNotification
            : _c(e.timeout),
        a = () => {
          (l = !1), o && ((o = !1), s.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => i && c(),
            y = r.subscribe(f);
          return (
            s.add(c),
            () => {
              y(), s.delete(c);
            }
          );
        },
        dispatch(c) {
          var f;
          try {
            return (
              (i = !((f = c == null ? void 0 : c.meta) != null && f[R1])),
              (o = !i),
              o && (l || ((l = !0), u(a))),
              r.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  N1 = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new zp(e);
      return r && i.push(P1(typeof r == "object" ? r : void 0)), i;
    };
function T1(e) {
  const t = j1(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {};
  let s;
  if (typeof n == "function") s = n;
  else if (Ou(n)) s = u1(n);
  else throw new Error(rt(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let a = eo;
  i && (a = k1({ trace: !1, ...(typeof i == "object" && i) }));
  const c = a1(...u),
    f = N1(c);
  let y = typeof l == "function" ? l(f) : f();
  const S = a(...y);
  return Cp(s, o, S);
}
function Dp(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(o, l) {
      const s = typeof o == "string" ? o : o.type;
      if (!s) throw new Error(rt(28));
      if (s in t) throw new Error(rt(29));
      return (t[s] = l), i;
    },
    addMatcher(o, l) {
      return n.push({ matcher: o, reducer: l }), i;
    },
    addDefaultCase(o) {
      return (r = o), i;
    },
  };
  return e(i), [t, n, r];
}
function O1(e) {
  return typeof e == "function";
}
function L1(e, t) {
  let [n, r, i] = Dp(t),
    o;
  if (O1(e)) o = () => Ec(e());
  else {
    const s = Ec(e);
    o = () => s;
  }
  function l(s = o(), u) {
    let a = [
      n[u.type],
      ...r.filter(({ matcher: c }) => c(u)).map(({ reducer: c }) => c),
    ];
    return (
      a.filter((c) => !!c).length === 0 && (a = [i]),
      a.reduce((c, f) => {
        if (f)
          if (Zt(c)) {
            const S = f(c, u);
            return S === void 0 ? c : S;
          } else {
            if (ut(c)) return Lp(c, (y) => f(y, u));
            {
              const y = f(c, u);
              if (y === void 0) {
                if (c === null) return c;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return y;
            }
          }
        return c;
      }, s)
    );
  }
  return (l.getInitialState = o), l;
}
var M1 = (e, t) => (_1(e) ? e.match(t) : e(t));
function z1(...e) {
  return (t) => e.some((n) => M1(n, t));
}
var D1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  F1 = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += D1[(Math.random() * 64) | 0];
    return t;
  },
  A1 = ["name", "message", "stack", "code"],
  wl = class {
    constructor(e, t) {
      Do(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Cc = class {
    constructor(e, t) {
      Do(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  I1 = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of A1) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  U1 = (() => {
    function e(t, n, r) {
      const i = dr(t + "/fulfilled", (u, a, c, f) => ({
          payload: u,
          meta: {
            ...(f || {}),
            arg: c,
            requestId: a,
            requestStatus: "fulfilled",
          },
        })),
        o = dr(t + "/pending", (u, a, c) => ({
          payload: void 0,
          meta: {
            ...(c || {}),
            arg: a,
            requestId: u,
            requestStatus: "pending",
          },
        })),
        l = dr(t + "/rejected", (u, a, c, f, y) => ({
          payload: f,
          error: ((r && r.serializeError) || I1)(u || "Rejected"),
          meta: {
            ...(y || {}),
            arg: c,
            requestId: a,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (u == null ? void 0 : u.name) === "AbortError",
            condition: (u == null ? void 0 : u.name) === "ConditionError",
          },
        }));
      function s(u) {
        return (a, c, f) => {
          const y = r != null && r.idGenerator ? r.idGenerator(u) : F1(),
            S = new AbortController();
          let g, v;
          function w(d) {
            (v = d), S.abort();
          }
          const p = (async function () {
            var x, k;
            let d;
            try {
              let j =
                (x = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : x.call(r, u, { getState: c, extra: f });
              if (($1(j) && (j = await j), j === !1 || S.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const P = new Promise((R, F) => {
                (g = () => {
                  F({ name: "AbortError", message: v || "Aborted" });
                }),
                  S.signal.addEventListener("abort", g);
              });
              a(
                o(
                  y,
                  u,
                  (k = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : k.call(
                        r,
                        { requestId: y, arg: u },
                        { getState: c, extra: f }
                      )
                )
              ),
                (d = await Promise.race([
                  P,
                  Promise.resolve(
                    n(u, {
                      dispatch: a,
                      getState: c,
                      extra: f,
                      requestId: y,
                      signal: S.signal,
                      abort: w,
                      rejectWithValue: (R, F) => new wl(R, F),
                      fulfillWithValue: (R, F) => new Cc(R, F),
                    })
                  ).then((R) => {
                    if (R instanceof wl) throw R;
                    return R instanceof Cc
                      ? i(R.payload, y, u, R.meta)
                      : i(R, y, u);
                  }),
                ]));
            } catch (j) {
              d =
                j instanceof wl ? l(null, y, u, j.payload, j.meta) : l(j, y, u);
            } finally {
              g && S.signal.removeEventListener("abort", g);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                l.match(d) &&
                d.meta.condition) ||
                a(d),
              d
            );
          })();
          return Object.assign(p, {
            abort: w,
            requestId: y,
            arg: u,
            unwrap() {
              return p.then(B1);
            },
          });
        };
      }
      return Object.assign(s, {
        pending: o,
        rejected: l,
        fulfilled: i,
        settled: z1(l, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function B1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function $1(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var H1 = Symbol.for("rtk-slice-createasyncthunk");
function V1(e, t) {
  return `${e}/${t}`;
}
function W1({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[H1];
  return function (i) {
    const { name: o, reducerPath: l = o } = i;
    if (!o) throw new Error(rt(11));
    typeof process < "u";
    const s =
        (typeof i.reducers == "function" ? i.reducers(q1()) : i.reducers) || {},
      u = Object.keys(s),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(h, x) {
          const k = typeof h == "string" ? h : h.type;
          if (!k) throw new Error(rt(12));
          if (k in a.sliceCaseReducersByType) throw new Error(rt(13));
          return (a.sliceCaseReducersByType[k] = x), c;
        },
        addMatcher(h, x) {
          return a.sliceMatchers.push({ matcher: h, reducer: x }), c;
        },
        exposeAction(h, x) {
          return (a.actionCreators[h] = x), c;
        },
        exposeCaseReducer(h, x) {
          return (a.sliceCaseReducersByName[h] = x), c;
        },
      };
    u.forEach((h) => {
      const x = s[h],
        k = {
          reducerName: h,
          type: V1(o, h),
          createNotation: typeof i.reducers == "function",
        };
      J1(x) ? X1(k, x, c, t) : G1(k, x, c);
    });
    function f() {
      const [h = {}, x = [], k = void 0] =
          typeof i.extraReducers == "function"
            ? Dp(i.extraReducers)
            : [i.extraReducers],
        j = { ...h, ...a.sliceCaseReducersByType };
      return L1(i.initialState, (P) => {
        for (let R in j) P.addCase(R, j[R]);
        for (let R of a.sliceMatchers) P.addMatcher(R.matcher, R.reducer);
        for (let R of x) P.addMatcher(R.matcher, R.reducer);
        k && P.addDefaultCase(k);
      });
    }
    const y = (h) => h,
      S = new Map();
    let g;
    function v(h, x) {
      return g || (g = f()), g(h, x);
    }
    function w() {
      return g || (g = f()), g.getInitialState();
    }
    function p(h, x = !1) {
      function k(P) {
        let R = P[h];
        return typeof R > "u" && x && (R = w()), R;
      }
      function j(P = y) {
        const R = kc(S, x, () => new WeakMap());
        return kc(R, P, () => {
          const F = {};
          for (const [z, Ee] of Object.entries(i.selectors ?? {}))
            F[z] = Q1(Ee, P, w, x);
          return F;
        });
      }
      return {
        reducerPath: h,
        getSelectors: j,
        get selectors() {
          return j(k);
        },
        selectSlice: k,
      };
    }
    const d = {
      name: o,
      reducer: v,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: w,
      ...p(l),
      injectInto(h, { reducerPath: x, ...k } = {}) {
        const j = x ?? l;
        return (
          h.inject({ reducerPath: j, reducer: v }, k), { ...d, ...p(j, !0) }
        );
      },
    };
    return d;
  };
}
function Q1(e, t, n, r) {
  function i(o, ...l) {
    let s = t(o);
    return typeof s > "u" && r && (s = n()), e(s, ...l);
  }
  return (i.unwrapped = e), i;
}
var K1 = W1();
function q1() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function G1({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, l;
  if ("reducer" in r) {
    if (n && !Y1(r)) throw new Error(rt(17));
    (o = r.reducer), (l = r.prepare);
  } else o = r;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, l ? dr(e, l) : dr(e));
}
function J1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Y1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function X1({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(rt(18));
  const {
      payloadCreator: o,
      fulfilled: l,
      pending: s,
      rejected: u,
      settled: a,
      options: c,
    } = n,
    f = i(e, o, c);
  r.exposeAction(t, f),
    l && r.addCase(f.fulfilled, l),
    s && r.addCase(f.pending, s),
    u && r.addCase(f.rejected, u),
    a && r.addMatcher(f.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: l || ai,
      pending: s || ai,
      rejected: u || ai,
      settled: a || ai,
    });
}
function ai() {}
function rt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const _i = U1(
    "products/fetch",
    async () =>
      (
        await U.get(
          "https://raw.githubusercontent.com/kraken-ship/golestan/refs/heads/main/assets/db1.json"
        )
      ).data.products
  ),
  Z1 = K1({
    name: "products",
    initialState: { products: [], loading: !0, error: "" },
    extraReducers: (e) => {
      e.addCase(_i.fulfilled, (t, n) => {
        (t.products = n.payload), (t.loading = !0);
      })
        .addCase(_i.pending, (t) => {
          t.loading = !0;
        })
        .addCase(_i.rejected, (t) => {
          (t.error = "server is un available"), (t.loading = !0);
        });
    },
  }),
  b1 = Z1.reducer,
  ew = ({ product2: e }) =>
    m.jsx(m.Fragment, {
      children: m.jsxs("div", {
        className: "",
        children: [
          m.jsx("div", {
            className: "w-[200px] ",
            children: m.jsx("img", {
              className: "w-[100%]",
              src: e.pimage,
              alt: "",
            }),
          }),
          m.jsxs("div", {
            className:
              "w-[100%] flex flex-row justify-start items-center pb-[10px] gap-x-[20px] ",
            children: [
              m.jsx("img", { src: e.p2image, alt: "" }),
              m.jsx("p", {
                className: "text-[22px] text-[red] font-[400]",
                children: e.title,
              }),
            ],
          }),
          m.jsxs("div", {
            className:
              "w-[100%] flex flex-row justify-between items-center  border-solid border-t-[1px] border-b-[1px] border-[black] gram",
            children: [
              m.jsx("p", {
                className: "w-[100%] text-[#52575B] text-[16px] font-[700]",
                children: e.title2,
              }),
              m.jsxs("div", {
                className:
                  "w-[100%] flex flex-row justify-end items-start gap-x-[10px]",
                children: [
                  m.jsx("img", { src: e.w1image, alt: "" }),
                  m.jsx("img", { src: e.w2image, alt: "" }),
                  m.jsx("img", { src: e.w3image, alt: "" }),
                ],
              }),
            ],
          }),
          m.jsx("div", {
            children: m.jsx("p", {
              className:
                "text-[#94979A] text-[16px] font-[400] leading-[35px] text-justify matn",
              children: e.description,
            }),
          }),
          m.jsx("button", {
            className:
              "mt-[10px] w-[150px] border-solid border-[1px] border-[grey] rounded-[10px] hover:bg-[red] hover:text-[white] text-[16px] font-[400] dokme",
            children: "خرید محصول",
          }),
        ],
      }),
    }),
  tw = () => {
    const { products: e, loading: t, error: n } = i1((i) => i.products),
      r = t1();
    return (
      _.useEffect(() => {
        r(_i());
      }, []),
      m.jsx(m.Fragment, {
        children: m.jsx("div", {
          className:
            "w-[100%]    flex flex-row justify-center items-start gap-x-[50px] main",
          children: m.jsxs("div", {
            className:
              "w-[500px]   flex flex-col justify-start items-start gap-y-[60px] ",
            children: [
              t ? m.jsx("h1", { children: t }) : null,
              n ? m.jsx("h1", { children: n }) : null,
              e == null
                ? void 0
                : e.map((i) => m.jsx(ew, { product2: i }, i.id)),
            ],
          }),
        }),
      })
    );
  },
  nw = () =>
    m.jsxs(m.Fragment, {
      children: [m.jsx(Lv, {}), m.jsx(Pv, {}), m.jsx(tw, {})],
    }),
  rw = () =>
    m.jsxs(cy, {
      children: [
        m.jsx(vv, {}),
        m.jsxs(ry, {
          children: [
            m.jsx(ps, { path: "/", element: m.jsx(mv, {}) }),
            m.jsx(ps, { path: "*", element: m.jsx(nw, {}) }),
          ],
        }),
        m.jsx(Cv, {}),
      ],
    }),
  iw = T1({ reducer: { products: b1 } });
Ud(document.getElementById("root")).render(
  m.jsx(_.StrictMode, {
    children: m.jsx(Zv, { store: iw, children: m.jsx(rw, {}) }),
  })
);
