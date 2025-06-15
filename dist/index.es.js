import fd, { forwardRef as qv, createElement as sf, useState as ln, useCallback as en, useEffect as $o, useRef as f_ } from "react";
var Gc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function d_(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var i = function t() {
      return this instanceof t ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    i.prototype = n.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
    var r = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(i, t, r.get ? r : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), i;
}
var af = { exports: {} }, Vs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J0;
function h_() {
  if (J0) return Vs;
  J0 = 1;
  var e = fd, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, d) {
    var p, g = {}, m = null, S = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (p in f) t.call(f, p) && !o.hasOwnProperty(p) && (g[p] = f[p]);
    if (c && c.defaultProps) for (p in f = c.defaultProps, f) g[p] === void 0 && (g[p] = f[p]);
    return { $$typeof: n, type: c, key: m, ref: S, props: g, _owner: r.current };
  }
  return Vs.Fragment = i, Vs.jsx = s, Vs.jsxs = s, Vs;
}
var Hs = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep;
function p_() {
  return ep || (ep = 1, process.env.NODE_ENV !== "production" && function() {
    var e = fd, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), x = Symbol.iterator, I = "@@iterator";
    function b(j) {
      if (j === null || typeof j != "object")
        return null;
      var se = x && j[x] || j[I];
      return typeof se == "function" ? se : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(j) {
      {
        for (var se = arguments.length, be = new Array(se > 1 ? se - 1 : 0), ze = 1; ze < se; ze++)
          be[ze - 1] = arguments[ze];
        W("error", j, be);
      }
    }
    function W(j, se, be) {
      {
        var ze = L.ReactDebugCurrentFrame, vt = ze.getStackAddendum();
        vt !== "" && (se += "%s", be = be.concat([vt]));
        var ft = be.map(function(rt) {
          return String(rt);
        });
        ft.unshift("Warning: " + se), Function.prototype.apply.call(console[j], console, ft);
      }
    }
    var V = !1, Q = !1, ie = !1, ye = !1, ge = !1, Ie;
    Ie = Symbol.for("react.module.reference");
    function $e(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === t || j === o || ge || j === r || j === d || j === p || ye || j === S || V || Q || ie || typeof j == "object" && j !== null && (j.$$typeof === m || j.$$typeof === g || j.$$typeof === s || j.$$typeof === c || j.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === Ie || j.getModuleId !== void 0));
    }
    function Oe(j, se, be) {
      var ze = j.displayName;
      if (ze)
        return ze;
      var vt = se.displayName || se.name || "";
      return vt !== "" ? be + "(" + vt + ")" : be;
    }
    function Me(j) {
      return j.displayName || "Context";
    }
    function ke(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
        case t:
          return "Fragment";
        case i:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case c:
            var se = j;
            return Me(se) + ".Consumer";
          case s:
            var be = j;
            return Me(be._context) + ".Provider";
          case f:
            return Oe(j, j.render, "ForwardRef");
          case g:
            var ze = j.displayName || null;
            return ze !== null ? ze : ke(j.type) || "Memo";
          case m: {
            var vt = j, ft = vt._payload, rt = vt._init;
            try {
              return ke(rt(ft));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ut = Object.assign, Ue = 0, mt, xt, Te, Ot, Bt, br, Kt;
    function Lt() {
    }
    Lt.__reactDisabledLog = !0;
    function Ut() {
      {
        if (Ue === 0) {
          mt = console.log, xt = console.info, Te = console.warn, Ot = console.error, Bt = console.group, br = console.groupCollapsed, Kt = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: Lt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        Ue++;
      }
    }
    function ar() {
      {
        if (Ue--, Ue === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, j, {
              value: mt
            }),
            info: ut({}, j, {
              value: xt
            }),
            warn: ut({}, j, {
              value: Te
            }),
            error: ut({}, j, {
              value: Ot
            }),
            group: ut({}, j, {
              value: Bt
            }),
            groupCollapsed: ut({}, j, {
              value: br
            }),
            groupEnd: ut({}, j, {
              value: Kt
            })
          });
        }
        Ue < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qe = L.ReactCurrentDispatcher, Mt;
    function we(j, se, be) {
      {
        if (Mt === void 0)
          try {
            throw Error();
          } catch (vt) {
            var ze = vt.stack.trim().match(/\n( *(at )?)/);
            Mt = ze && ze[1] || "";
          }
        return `
` + Mt + j;
      }
    }
    var Ge = !1, bt;
    {
      var wr = typeof WeakMap == "function" ? WeakMap : Map;
      bt = new wr();
    }
    function Tr(j, se) {
      if (!j || Ge)
        return "";
      {
        var be = bt.get(j);
        if (be !== void 0)
          return be;
      }
      var ze;
      Ge = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ft;
      ft = qe.current, qe.current = null, Ut();
      try {
        if (se) {
          var rt = function() {
            throw Error();
          };
          if (Object.defineProperty(rt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(rt, []);
            } catch (kr) {
              ze = kr;
            }
            Reflect.construct(j, [], rt);
          } else {
            try {
              rt.call();
            } catch (kr) {
              ze = kr;
            }
            j.call(rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kr) {
            ze = kr;
          }
          j();
        }
      } catch (kr) {
        if (kr && ze && typeof kr.stack == "string") {
          for (var nt = kr.stack.split(`
`), Ar = ze.stack.split(`
`), jt = nt.length - 1, $t = Ar.length - 1; jt >= 1 && $t >= 0 && nt[jt] !== Ar[$t]; )
            $t--;
          for (; jt >= 1 && $t >= 0; jt--, $t--)
            if (nt[jt] !== Ar[$t]) {
              if (jt !== 1 || $t !== 1)
                do
                  if (jt--, $t--, $t < 0 || nt[jt] !== Ar[$t]) {
                    var on = `
` + nt[jt].replace(" at new ", " at ");
                    return j.displayName && on.includes("<anonymous>") && (on = on.replace("<anonymous>", j.displayName)), typeof j == "function" && bt.set(j, on), on;
                  }
                while (jt >= 1 && $t >= 0);
              break;
            }
        }
      } finally {
        Ge = !1, qe.current = ft, ar(), Error.prepareStackTrace = vt;
      }
      var Rn = j ? j.displayName || j.name : "", ni = Rn ? we(Rn) : "";
      return typeof j == "function" && bt.set(j, ni), ni;
    }
    function er(j, se, be) {
      return Tr(j, !1);
    }
    function cr(j) {
      var se = j.prototype;
      return !!(se && se.isReactComponent);
    }
    function Tt(j, se, be) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return Tr(j, cr(j));
      if (typeof j == "string")
        return we(j);
      switch (j) {
        case d:
          return we("Suspense");
        case p:
          return we("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case f:
            return er(j.render);
          case g:
            return Tt(j.type, se, be);
          case m: {
            var ze = j, vt = ze._payload, ft = ze._init;
            try {
              return Tt(ft(vt), se, be);
            } catch {
            }
          }
        }
      return "";
    }
    var tr = Object.prototype.hasOwnProperty, Mr = {}, pr = L.ReactDebugCurrentFrame;
    function zt(j) {
      if (j) {
        var se = j._owner, be = Tt(j.type, j._source, se ? se.type : null);
        pr.setExtraStackFrame(be);
      } else
        pr.setExtraStackFrame(null);
    }
    function _r(j, se, be, ze, vt) {
      {
        var ft = Function.call.bind(tr);
        for (var rt in j)
          if (ft(j, rt)) {
            var nt = void 0;
            try {
              if (typeof j[rt] != "function") {
                var Ar = Error((ze || "React class") + ": " + be + " type `" + rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ar.name = "Invariant Violation", Ar;
              }
              nt = j[rt](se, rt, ze, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (jt) {
              nt = jt;
            }
            nt && !(nt instanceof Error) && (zt(vt), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ze || "React class", be, rt, typeof nt), zt(null)), nt instanceof Error && !(nt.message in Mr) && (Mr[nt.message] = !0, zt(vt), $("Failed %s type: %s", be, nt.message), zt(null));
          }
      }
    }
    var Vr = Array.isArray;
    function Dn(j) {
      return Vr(j);
    }
    function Cr(j) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, be = se && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return be;
      }
    }
    function pn(j) {
      try {
        return Sr(j), !1;
      } catch {
        return !0;
      }
    }
    function Sr(j) {
      return "" + j;
    }
    function je(j) {
      if (pn(j))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(j)), Sr(j);
    }
    var Ve = L.ReactCurrentOwner, Fe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, lr;
    function rr(j) {
      if (tr.call(j, "ref")) {
        var se = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function Qe(j) {
      if (tr.call(j, "key")) {
        var se = Object.getOwnPropertyDescriptor(j, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function Be(j, se) {
      typeof j.ref == "string" && Ve.current;
    }
    function ur(j, se) {
      {
        var be = function() {
          ht || (ht = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        be.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function tt(j, se) {
      {
        var be = function() {
          lr || (lr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        be.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var fr = function(j, se, be, ze, vt, ft, rt) {
      var nt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: j,
        key: se,
        ref: be,
        props: rt,
        // Record the component responsible for creating this element.
        _owner: ft
      };
      return nt._store = {}, Object.defineProperty(nt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(nt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ze
      }), Object.defineProperty(nt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
    };
    function Pe(j, se, be, ze, vt) {
      {
        var ft, rt = {}, nt = null, Ar = null;
        be !== void 0 && (je(be), nt = "" + be), Qe(se) && (je(se.key), nt = "" + se.key), rr(se) && (Ar = se.ref, Be(se, vt));
        for (ft in se)
          tr.call(se, ft) && !Fe.hasOwnProperty(ft) && (rt[ft] = se[ft]);
        if (j && j.defaultProps) {
          var jt = j.defaultProps;
          for (ft in jt)
            rt[ft] === void 0 && (rt[ft] = jt[ft]);
        }
        if (nt || Ar) {
          var $t = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          nt && ur(rt, $t), Ar && tt(rt, $t);
        }
        return fr(j, nt, Ar, vt, ze, Ve.current, rt);
      }
    }
    var pt = L.ReactCurrentOwner, ri = L.ReactDebugCurrentFrame;
    function Vn(j) {
      if (j) {
        var se = j._owner, be = Tt(j.type, j._source, se ? se.type : null);
        ri.setExtraStackFrame(be);
      } else
        ri.setExtraStackFrame(null);
    }
    var qi;
    qi = !1;
    function Ci(j) {
      return typeof j == "object" && j !== null && j.$$typeof === n;
    }
    function Io() {
      {
        if (pt.current) {
          var j = ke(pt.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function Jl(j) {
      return "";
    }
    var Ba = {};
    function Yt(j) {
      {
        var se = Io();
        if (!se) {
          var be = typeof j == "string" ? j : j.displayName || j.name;
          be && (se = `

Check the top-level render call using <` + be + ">.");
        }
        return se;
      }
    }
    function Vi(j, se) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var be = Yt(se);
        if (Ba[be])
          return;
        Ba[be] = !0;
        var ze = "";
        j && j._owner && j._owner !== pt.current && (ze = " It was passed a child from " + ke(j._owner.type) + "."), Vn(j), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, ze), Vn(null);
      }
    }
    function Hi(j, se) {
      {
        if (typeof j != "object")
          return;
        if (Dn(j))
          for (var be = 0; be < j.length; be++) {
            var ze = j[be];
            Ci(ze) && Vi(ze, se);
          }
        else if (Ci(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var vt = b(j);
          if (typeof vt == "function" && vt !== j.entries)
            for (var ft = vt.call(j), rt; !(rt = ft.next()).done; )
              Ci(rt.value) && Vi(rt.value, se);
        }
      }
    }
    function eu(j) {
      {
        var se = j.type;
        if (se == null || typeof se == "string")
          return;
        var be;
        if (typeof se == "function")
          be = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === g))
          be = se.propTypes;
        else
          return;
        if (be) {
          var ze = ke(se);
          _r(be, j.props, "prop", ze, j);
        } else if (se.PropTypes !== void 0 && !qi) {
          qi = !0;
          var vt = ke(se);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ta(j) {
      {
        for (var se = Object.keys(j.props), be = 0; be < se.length; be++) {
          var ze = se[be];
          if (ze !== "children" && ze !== "key") {
            Vn(j), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ze), Vn(null);
            break;
          }
        }
        j.ref !== null && (Vn(j), $("Invalid attribute `ref` supplied to `React.Fragment`."), Vn(null));
      }
    }
    var hs = {};
    function Si(j, se, be, ze, vt, ft) {
      {
        var rt = $e(j);
        if (!rt) {
          var nt = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ar = Jl();
          Ar ? nt += Ar : nt += Io();
          var jt;
          j === null ? jt = "null" : Dn(j) ? jt = "array" : j !== void 0 && j.$$typeof === n ? (jt = "<" + (ke(j.type) || "Unknown") + " />", nt = " Did you accidentally export a JSX literal instead of a component?") : jt = typeof j, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", jt, nt);
        }
        var $t = Pe(j, se, be, vt, ft);
        if ($t == null)
          return $t;
        if (rt) {
          var on = se.children;
          if (on !== void 0)
            if (ze)
              if (Dn(on)) {
                for (var Rn = 0; Rn < on.length; Rn++)
                  Hi(on[Rn], j);
                Object.freeze && Object.freeze(on);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hi(on, j);
        }
        if (tr.call(se, "key")) {
          var ni = ke(j), kr = Object.keys(se).filter(function(tu) {
            return tu !== "key";
          }), it = kr.length > 0 ? "{key: someKey, " + kr.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!hs[ni + it]) {
            var Oo = kr.length > 0 ? "{" + kr.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, it, ni, Oo, ni), hs[ni + it] = !0;
          }
        }
        return j === t ? Ta($t) : eu($t), $t;
      }
    }
    function vn(j, se, be) {
      return Si(j, se, be, !0);
    }
    function Gi(j, se, be) {
      return Si(j, se, be, !1);
    }
    var gn = Gi, Ma = vn;
    Hs.Fragment = t, Hs.jsx = gn, Hs.jsxs = Ma;
  }()), Hs;
}
process.env.NODE_ENV === "production" ? af.exports = h_() : af.exports = p_();
var de = af.exports;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), g_ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, i, t) => t ? t.toUpperCase() : i.toLowerCase()
), tp = (e) => {
  const n = g_(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Vv = (...e) => e.filter((n, i, t) => !!n && n.trim() !== "" && t.indexOf(n) === i).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var m_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y_ = qv(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: t,
    className: r = "",
    children: o,
    iconNode: s,
    ...c
  }, f) => sf(
    "svg",
    {
      ref: f,
      ...m_,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: t ? Number(i) * 24 / Number(n) : i,
      className: Vv("lucide", r),
      ...c
    },
    [
      ...s.map(([d, p]) => sf(d, p)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = (e, n) => {
  const i = qv(
    ({ className: t, ...r }, o) => sf(y_, {
      ref: o,
      iconNode: n,
      className: Vv(
        `lucide-${v_(tp(e))}`,
        `lucide-${e}`,
        t
      ),
      ...r
    })
  );
  return i.displayName = tp(e), i;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x_ = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], b_ = nn("arrow-left", x_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], __ = nn("calendar", w_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
], S_ = nn("car", C_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], A_ = nn("chevron-down", E_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
], I_ = nn("coffee", k_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = [
  ["path", { d: "M12 6v4", key: "16clxf" }],
  ["path", { d: "M14 14h-4", key: "esezmu" }],
  ["path", { d: "M14 18h-4", key: "16mqa2" }],
  ["path", { d: "M14 8h-4", key: "z8ypaz" }],
  [
    "path",
    {
      d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
      key: "b1k337"
    }
  ],
  ["path", { d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18", key: "16g51d" }]
], Hv = nn("hospital", O_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D_ = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Qs = nn("map-pin", D_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R_ = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], P_ = nn("navigation", R_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B_ = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], T_ = nn("phone", B_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M_ = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
], Gv = nn("pill", M_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F_ = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], Kv = nn("shopping-cart", F_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N_ = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], _c = nn("star", N_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L_ = [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
], Yv = nn("stethoscope", L_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U_ = [
  ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2", key: "125lnx" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14.5 16h-5", key: "1ox875" }]
], Zv = nn("test-tube", U_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z_ = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
], Xv = nn("utensils", z_), j_ = "/ds/api/agent_workflow/v1/invoke_workflow";
function Qv(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: $_ } = Object.prototype, { getPrototypeOf: dd } = Object, { iterator: Rl, toStringTag: Jv } = Symbol, Pl = /* @__PURE__ */ ((e) => (n) => {
  const i = $_.call(n);
  return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qn = (e) => (e = e.toLowerCase(), (n) => Pl(n) === e), Bl = (e) => (n) => typeof n === e, { isArray: ss } = Array, aa = Bl("undefined");
function W_(e) {
  return e !== null && !aa(e) && e.constructor !== null && !aa(e.constructor) && un(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const eg = qn("ArrayBuffer");
function q_(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && eg(e.buffer), n;
}
const V_ = Bl("string"), un = Bl("function"), tg = Bl("number"), Tl = (e) => e !== null && typeof e == "object", H_ = (e) => e === !0 || e === !1, Kc = (e) => {
  if (Pl(e) !== "object")
    return !1;
  const n = dd(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Jv in e) && !(Rl in e);
}, G_ = qn("Date"), K_ = qn("File"), Y_ = qn("Blob"), Z_ = qn("FileList"), X_ = (e) => Tl(e) && un(e.pipe), Q_ = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || un(e.append) && ((n = Pl(e)) === "formdata" || // detect form-data instance
  n === "object" && un(e.toString) && e.toString() === "[object FormData]"));
}, J_ = qn("URLSearchParams"), [eC, tC, rC, nC] = ["ReadableStream", "Request", "Response", "Headers"].map(qn), iC = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Sa(e, n, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let t, r;
  if (typeof e != "object" && (e = [e]), ss(e))
    for (t = 0, r = e.length; t < r; t++)
      n.call(null, e[t], t, e);
  else {
    const o = i ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let c;
    for (t = 0; t < s; t++)
      c = o[t], n.call(null, e[c], c, e);
  }
}
function rg(e, n) {
  n = n.toLowerCase();
  const i = Object.keys(e);
  let t = i.length, r;
  for (; t-- > 0; )
    if (r = i[t], n === r.toLowerCase())
      return r;
  return null;
}
const yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ng = (e) => !aa(e) && e !== yo;
function cf() {
  const { caseless: e } = ng(this) && this || {}, n = {}, i = (t, r) => {
    const o = e && rg(n, r) || r;
    Kc(n[o]) && Kc(t) ? n[o] = cf(n[o], t) : Kc(t) ? n[o] = cf({}, t) : ss(t) ? n[o] = t.slice() : n[o] = t;
  };
  for (let t = 0, r = arguments.length; t < r; t++)
    arguments[t] && Sa(arguments[t], i);
  return n;
}
const oC = (e, n, i, { allOwnKeys: t } = {}) => (Sa(n, (r, o) => {
  i && un(r) ? e[o] = Qv(r, i) : e[o] = r;
}, { allOwnKeys: t }), e), sC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), aC = (e, n, i, t) => {
  e.prototype = Object.create(n.prototype, t), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), i && Object.assign(e.prototype, i);
}, cC = (e, n, i, t) => {
  let r, o, s;
  const c = {};
  if (n = n || {}, e == null) return n;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      s = r[o], (!t || t(s, e, n)) && !c[s] && (n[s] = e[s], c[s] = !0);
    e = i !== !1 && dd(e);
  } while (e && (!i || i(e, n)) && e !== Object.prototype);
  return n;
}, lC = (e, n, i) => {
  e = String(e), (i === void 0 || i > e.length) && (i = e.length), i -= n.length;
  const t = e.indexOf(n, i);
  return t !== -1 && t === i;
}, uC = (e) => {
  if (!e) return null;
  if (ss(e)) return e;
  let n = e.length;
  if (!tg(n)) return null;
  const i = new Array(n);
  for (; n-- > 0; )
    i[n] = e[n];
  return i;
}, fC = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && dd(Uint8Array)), dC = (e, n) => {
  const t = (e && e[Rl]).call(e);
  let r;
  for (; (r = t.next()) && !r.done; ) {
    const o = r.value;
    n.call(e, o[0], o[1]);
  }
}, hC = (e, n) => {
  let i;
  const t = [];
  for (; (i = e.exec(n)) !== null; )
    t.push(i);
  return t;
}, pC = qn("HTMLFormElement"), vC = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, t, r) {
    return t.toUpperCase() + r;
  }
), rp = (({ hasOwnProperty: e }) => (n, i) => e.call(n, i))(Object.prototype), gC = qn("RegExp"), ig = (e, n) => {
  const i = Object.getOwnPropertyDescriptors(e), t = {};
  Sa(i, (r, o) => {
    let s;
    (s = n(r, o, e)) !== !1 && (t[o] = s || r);
  }), Object.defineProperties(e, t);
}, mC = (e) => {
  ig(e, (n, i) => {
    if (un(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const t = e[i];
    if (un(t)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, yC = (e, n) => {
  const i = {}, t = (r) => {
    r.forEach((o) => {
      i[o] = !0;
    });
  };
  return ss(e) ? t(e) : t(String(e).split(n)), i;
}, xC = () => {
}, bC = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function wC(e) {
  return !!(e && un(e.append) && e[Jv] === "FormData" && e[Rl]);
}
const _C = (e) => {
  const n = new Array(10), i = (t, r) => {
    if (Tl(t)) {
      if (n.indexOf(t) >= 0)
        return;
      if (!("toJSON" in t)) {
        n[r] = t;
        const o = ss(t) ? [] : {};
        return Sa(t, (s, c) => {
          const f = i(s, r + 1);
          !aa(f) && (o[c] = f);
        }), n[r] = void 0, o;
      }
    }
    return t;
  };
  return i(e, 0);
}, CC = qn("AsyncFunction"), SC = (e) => e && (Tl(e) || un(e)) && un(e.then) && un(e.catch), og = ((e, n) => e ? setImmediate : n ? ((i, t) => (yo.addEventListener("message", ({ source: r, data: o }) => {
  r === yo && o === i && t.length && t.shift()();
}, !1), (r) => {
  t.push(r), yo.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(
  typeof setImmediate == "function",
  un(yo.postMessage)
), EC = typeof queueMicrotask < "u" ? queueMicrotask.bind(yo) : typeof process < "u" && process.nextTick || og, AC = (e) => e != null && un(e[Rl]), ee = {
  isArray: ss,
  isArrayBuffer: eg,
  isBuffer: W_,
  isFormData: Q_,
  isArrayBufferView: q_,
  isString: V_,
  isNumber: tg,
  isBoolean: H_,
  isObject: Tl,
  isPlainObject: Kc,
  isReadableStream: eC,
  isRequest: tC,
  isResponse: rC,
  isHeaders: nC,
  isUndefined: aa,
  isDate: G_,
  isFile: K_,
  isBlob: Y_,
  isRegExp: gC,
  isFunction: un,
  isStream: X_,
  isURLSearchParams: J_,
  isTypedArray: fC,
  isFileList: Z_,
  forEach: Sa,
  merge: cf,
  extend: oC,
  trim: iC,
  stripBOM: sC,
  inherits: aC,
  toFlatObject: cC,
  kindOf: Pl,
  kindOfTest: qn,
  endsWith: lC,
  toArray: uC,
  forEachEntry: dC,
  matchAll: hC,
  isHTMLForm: pC,
  hasOwnProperty: rp,
  hasOwnProp: rp,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ig,
  freezeMethods: mC,
  toObjectSet: yC,
  toCamelCase: vC,
  noop: xC,
  toFiniteNumber: bC,
  findKey: rg,
  global: yo,
  isContextDefined: ng,
  isSpecCompliantForm: wC,
  toJSONObject: _C,
  isAsyncFn: CC,
  isThenable: SC,
  setImmediate: og,
  asap: EC,
  isIterable: AC
};
function Ze(e, n, i, t, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), i && (this.config = i), t && (this.request = t), r && (this.response = r, this.status = r.status ? r.status : null);
}
ee.inherits(Ze, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: ee.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const sg = Ze.prototype, ag = {};
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
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ag[e] = { value: e };
});
Object.defineProperties(Ze, ag);
Object.defineProperty(sg, "isAxiosError", { value: !0 });
Ze.from = (e, n, i, t, r, o) => {
  const s = Object.create(sg);
  return ee.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), Ze.call(s, e.message, n, i, t, r), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const kC = null;
function lf(e) {
  return ee.isPlainObject(e) || ee.isArray(e);
}
function cg(e) {
  return ee.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function np(e, n, i) {
  return e ? e.concat(n).map(function(r, o) {
    return r = cg(r), !i && o ? "[" + r + "]" : r;
  }).join(i ? "." : "") : n;
}
function IC(e) {
  return ee.isArray(e) && !e.some(lf);
}
const OC = ee.toFlatObject(ee, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Ml(e, n, i) {
  if (!ee.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), i = ee.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(I, b) {
    return !ee.isUndefined(b[I]);
  });
  const t = i.metaTokens, r = i.visitor || p, o = i.dots, s = i.indexes, f = (i.Blob || typeof Blob < "u" && Blob) && ee.isSpecCompliantForm(n);
  if (!ee.isFunction(r))
    throw new TypeError("visitor must be a function");
  function d(x) {
    if (x === null) return "";
    if (ee.isDate(x))
      return x.toISOString();
    if (ee.isBoolean(x))
      return x.toString();
    if (!f && ee.isBlob(x))
      throw new Ze("Blob is not supported. Use a Buffer instead.");
    return ee.isArrayBuffer(x) || ee.isTypedArray(x) ? f && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function p(x, I, b) {
    let L = x;
    if (x && !b && typeof x == "object") {
      if (ee.endsWith(I, "{}"))
        I = t ? I : I.slice(0, -2), x = JSON.stringify(x);
      else if (ee.isArray(x) && IC(x) || (ee.isFileList(x) || ee.endsWith(I, "[]")) && (L = ee.toArray(x)))
        return I = cg(I), L.forEach(function(W, V) {
          !(ee.isUndefined(W) || W === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? np([I], V, o) : s === null ? I : I + "[]",
            d(W)
          );
        }), !1;
    }
    return lf(x) ? !0 : (n.append(np(b, I, o), d(x)), !1);
  }
  const g = [], m = Object.assign(OC, {
    defaultVisitor: p,
    convertValue: d,
    isVisitable: lf
  });
  function S(x, I) {
    if (!ee.isUndefined(x)) {
      if (g.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + I.join("."));
      g.push(x), ee.forEach(x, function(L, $) {
        (!(ee.isUndefined(L) || L === null) && r.call(
          n,
          L,
          ee.isString($) ? $.trim() : $,
          I,
          m
        )) === !0 && S(L, I ? I.concat($) : [$]);
      }), g.pop();
    }
  }
  if (!ee.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), n;
}
function ip(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return n[t];
  });
}
function hd(e, n) {
  this._pairs = [], e && Ml(e, this, n);
}
const lg = hd.prototype;
lg.append = function(n, i) {
  this._pairs.push([n, i]);
};
lg.toString = function(n) {
  const i = n ? function(t) {
    return n.call(this, t, ip);
  } : ip;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function DC(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ug(e, n, i) {
  if (!n)
    return e;
  const t = i && i.encode || DC;
  ee.isFunction(i) && (i = {
    serialize: i
  });
  const r = i && i.serialize;
  let o;
  if (r ? o = r(n, i) : o = ee.isURLSearchParams(n) ? n.toString() : new hd(n, i).toString(t), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class op {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(n, i, t) {
    return this.handlers.push({
      fulfilled: n,
      rejected: i,
      synchronous: t ? t.synchronous : !1,
      runWhen: t ? t.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(n) {
    ee.forEach(this.handlers, function(t) {
      t !== null && n(t);
    });
  }
}
const fg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, RC = typeof URLSearchParams < "u" ? URLSearchParams : hd, PC = typeof FormData < "u" ? FormData : null, BC = typeof Blob < "u" ? Blob : null, TC = {
  isBrowser: !0,
  classes: {
    URLSearchParams: RC,
    FormData: PC,
    Blob: BC
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, pd = typeof window < "u" && typeof document < "u", uf = typeof navigator == "object" && navigator || void 0, MC = pd && (!uf || ["ReactNative", "NativeScript", "NS"].indexOf(uf.product) < 0), FC = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", NC = pd && window.location.href || "http://localhost", LC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pd,
  hasStandardBrowserEnv: MC,
  hasStandardBrowserWebWorkerEnv: FC,
  navigator: uf,
  origin: NC
}, Symbol.toStringTag, { value: "Module" })), Ur = {
  ...LC,
  ...TC
};
function UC(e, n) {
  return Ml(e, new Ur.classes.URLSearchParams(), Object.assign({
    visitor: function(i, t, r, o) {
      return Ur.isNode && ee.isBuffer(i) ? (this.append(t, i.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function zC(e) {
  return ee.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function jC(e) {
  const n = {}, i = Object.keys(e);
  let t;
  const r = i.length;
  let o;
  for (t = 0; t < r; t++)
    o = i[t], n[o] = e[o];
  return n;
}
function dg(e) {
  function n(i, t, r, o) {
    let s = i[o++];
    if (s === "__proto__") return !0;
    const c = Number.isFinite(+s), f = o >= i.length;
    return s = !s && ee.isArray(r) ? r.length : s, f ? (ee.hasOwnProp(r, s) ? r[s] = [r[s], t] : r[s] = t, !c) : ((!r[s] || !ee.isObject(r[s])) && (r[s] = []), n(i, t, r[s], o) && ee.isArray(r[s]) && (r[s] = jC(r[s])), !c);
  }
  if (ee.isFormData(e) && ee.isFunction(e.entries)) {
    const i = {};
    return ee.forEachEntry(e, (t, r) => {
      n(zC(t), r, i, 0);
    }), i;
  }
  return null;
}
function $C(e, n, i) {
  if (ee.isString(e))
    try {
      return (n || JSON.parse)(e), ee.trim(e);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (i || JSON.stringify)(e);
}
const Ea = {
  transitional: fg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, i) {
    const t = i.getContentType() || "", r = t.indexOf("application/json") > -1, o = ee.isObject(n);
    if (o && ee.isHTMLForm(n) && (n = new FormData(n)), ee.isFormData(n))
      return r ? JSON.stringify(dg(n)) : n;
    if (ee.isArrayBuffer(n) || ee.isBuffer(n) || ee.isStream(n) || ee.isFile(n) || ee.isBlob(n) || ee.isReadableStream(n))
      return n;
    if (ee.isArrayBufferView(n))
      return n.buffer;
    if (ee.isURLSearchParams(n))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let c;
    if (o) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return UC(n, this.formSerializer).toString();
      if ((c = ee.isFileList(n)) || t.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Ml(
          c ? { "files[]": n } : n,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || r ? (i.setContentType("application/json", !1), $C(n)) : n;
  }],
  transformResponse: [function(n) {
    const i = this.transitional || Ea.transitional, t = i && i.forcedJSONParsing, r = this.responseType === "json";
    if (ee.isResponse(n) || ee.isReadableStream(n))
      return n;
    if (n && ee.isString(n) && (t && !this.responseType || r)) {
      const s = !(i && i.silentJSONParsing) && r;
      try {
        return JSON.parse(n);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? Ze.from(c, Ze.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return n;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ur.classes.FormData,
    Blob: Ur.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ee.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ea.headers[e] = {};
});
const WC = ee.toObjectSet([
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
  "user-agent"
]), qC = (e) => {
  const n = {};
  let i, t, r;
  return e && e.split(`
`).forEach(function(s) {
    r = s.indexOf(":"), i = s.substring(0, r).trim().toLowerCase(), t = s.substring(r + 1).trim(), !(!i || n[i] && WC[i]) && (i === "set-cookie" ? n[i] ? n[i].push(t) : n[i] = [t] : n[i] = n[i] ? n[i] + ", " + t : t);
  }), n;
}, sp = Symbol("internals");
function Gs(e) {
  return e && String(e).trim().toLowerCase();
}
function Yc(e) {
  return e === !1 || e == null ? e : ee.isArray(e) ? e.map(Yc) : String(e);
}
function VC(e) {
  const n = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = i.exec(e); )
    n[t[1]] = t[2];
  return n;
}
const HC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Tu(e, n, i, t, r) {
  if (ee.isFunction(t))
    return t.call(this, n, i);
  if (r && (n = i), !!ee.isString(n)) {
    if (ee.isString(t))
      return n.indexOf(t) !== -1;
    if (ee.isRegExp(t))
      return t.test(n);
  }
}
function GC(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, i, t) => i.toUpperCase() + t);
}
function KC(e, n) {
  const i = ee.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((t) => {
    Object.defineProperty(e, t + i, {
      value: function(r, o, s) {
        return this[t].call(this, n, r, o, s);
      },
      configurable: !0
    });
  });
}
let fn = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, i, t) {
    const r = this;
    function o(c, f, d) {
      const p = Gs(f);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const g = ee.findKey(r, p);
      (!g || r[g] === void 0 || d === !0 || d === void 0 && r[g] !== !1) && (r[g || f] = Yc(c));
    }
    const s = (c, f) => ee.forEach(c, (d, p) => o(d, p, f));
    if (ee.isPlainObject(n) || n instanceof this.constructor)
      s(n, i);
    else if (ee.isString(n) && (n = n.trim()) && !HC(n))
      s(qC(n), i);
    else if (ee.isObject(n) && ee.isIterable(n)) {
      let c = {}, f, d;
      for (const p of n) {
        if (!ee.isArray(p))
          throw TypeError("Object iterator must return a key-value pair");
        c[d = p[0]] = (f = c[d]) ? ee.isArray(f) ? [...f, p[1]] : [f, p[1]] : p[1];
      }
      s(c, i);
    } else
      n != null && o(i, n, t);
    return this;
  }
  get(n, i) {
    if (n = Gs(n), n) {
      const t = ee.findKey(this, n);
      if (t) {
        const r = this[t];
        if (!i)
          return r;
        if (i === !0)
          return VC(r);
        if (ee.isFunction(i))
          return i.call(this, r, t);
        if (ee.isRegExp(i))
          return i.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, i) {
    if (n = Gs(n), n) {
      const t = ee.findKey(this, n);
      return !!(t && this[t] !== void 0 && (!i || Tu(this, this[t], t, i)));
    }
    return !1;
  }
  delete(n, i) {
    const t = this;
    let r = !1;
    function o(s) {
      if (s = Gs(s), s) {
        const c = ee.findKey(t, s);
        c && (!i || Tu(t, t[c], c, i)) && (delete t[c], r = !0);
      }
    }
    return ee.isArray(n) ? n.forEach(o) : o(n), r;
  }
  clear(n) {
    const i = Object.keys(this);
    let t = i.length, r = !1;
    for (; t--; ) {
      const o = i[t];
      (!n || Tu(this, this[o], o, n, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(n) {
    const i = this, t = {};
    return ee.forEach(this, (r, o) => {
      const s = ee.findKey(t, o);
      if (s) {
        i[s] = Yc(r), delete i[o];
        return;
      }
      const c = n ? GC(o) : String(o).trim();
      c !== o && delete i[o], i[c] = Yc(r), t[c] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const i = /* @__PURE__ */ Object.create(null);
    return ee.forEach(this, (t, r) => {
      t != null && t !== !1 && (i[r] = n && ee.isArray(t) ? t.join(", ") : t);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, i]) => n + ": " + i).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...i) {
    const t = new this(n);
    return i.forEach((r) => t.set(r)), t;
  }
  static accessor(n) {
    const t = (this[sp] = this[sp] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(s) {
      const c = Gs(s);
      t[c] || (KC(r, s), t[c] = !0);
    }
    return ee.isArray(n) ? n.forEach(o) : o(n), this;
  }
};
fn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ee.reduceDescriptors(fn.prototype, ({ value: e }, n) => {
  let i = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(t) {
      this[i] = t;
    }
  };
});
ee.freezeMethods(fn);
function Mu(e, n) {
  const i = this || Ea, t = n || i, r = fn.from(t.headers);
  let o = t.data;
  return ee.forEach(e, function(c) {
    o = c.call(i, o, r.normalize(), n ? n.status : void 0);
  }), r.normalize(), o;
}
function hg(e) {
  return !!(e && e.__CANCEL__);
}
function as(e, n, i) {
  Ze.call(this, e ?? "canceled", Ze.ERR_CANCELED, n, i), this.name = "CanceledError";
}
ee.inherits(as, Ze, {
  __CANCEL__: !0
});
function pg(e, n, i) {
  const t = i.config.validateStatus;
  !i.status || !t || t(i.status) ? e(i) : n(new Ze(
    "Request failed with status code " + i.status,
    [Ze.ERR_BAD_REQUEST, Ze.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
function YC(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function ZC(e, n) {
  e = e || 10;
  const i = new Array(e), t = new Array(e);
  let r = 0, o = 0, s;
  return n = n !== void 0 ? n : 1e3, function(f) {
    const d = Date.now(), p = t[o];
    s || (s = d), i[r] = f, t[r] = d;
    let g = o, m = 0;
    for (; g !== r; )
      m += i[g++], g = g % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), d - s < n)
      return;
    const S = p && d - p;
    return S ? Math.round(m * 1e3 / S) : void 0;
  };
}
function XC(e, n) {
  let i = 0, t = 1e3 / n, r, o;
  const s = (d, p = Date.now()) => {
    i = p, r = null, o && (clearTimeout(o), o = null), e.apply(null, d);
  };
  return [(...d) => {
    const p = Date.now(), g = p - i;
    g >= t ? s(d, p) : (r = d, o || (o = setTimeout(() => {
      o = null, s(r);
    }, t - g)));
  }, () => r && s(r)];
}
const ol = (e, n, i = 3) => {
  let t = 0;
  const r = ZC(50, 250);
  return XC((o) => {
    const s = o.loaded, c = o.lengthComputable ? o.total : void 0, f = s - t, d = r(f), p = s <= c;
    t = s;
    const g = {
      loaded: s,
      total: c,
      progress: c ? s / c : void 0,
      bytes: f,
      rate: d || void 0,
      estimated: d && c && p ? (c - s) / d : void 0,
      event: o,
      lengthComputable: c != null,
      [n ? "download" : "upload"]: !0
    };
    e(g);
  }, i);
}, ap = (e, n) => {
  const i = e != null;
  return [(t) => n[0]({
    lengthComputable: i,
    total: e,
    loaded: t
  }), n[1]];
}, cp = (e) => (...n) => ee.asap(() => e(...n)), QC = Ur.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (i) => (i = new URL(i, Ur.origin), e.protocol === i.protocol && e.host === i.host && (n || e.port === i.port)))(
  new URL(Ur.origin),
  Ur.navigator && /(msie|trident)/i.test(Ur.navigator.userAgent)
) : () => !0, JC = Ur.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, i, t, r, o) {
      const s = [e + "=" + encodeURIComponent(n)];
      ee.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), ee.isString(t) && s.push("path=" + t), ee.isString(r) && s.push("domain=" + r), o === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function eS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tS(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function vg(e, n, i) {
  let t = !eS(n);
  return e && (t || i == !1) ? tS(e, n) : n;
}
const lp = (e) => e instanceof fn ? { ...e } : e;
function wo(e, n) {
  n = n || {};
  const i = {};
  function t(d, p, g, m) {
    return ee.isPlainObject(d) && ee.isPlainObject(p) ? ee.merge.call({ caseless: m }, d, p) : ee.isPlainObject(p) ? ee.merge({}, p) : ee.isArray(p) ? p.slice() : p;
  }
  function r(d, p, g, m) {
    if (ee.isUndefined(p)) {
      if (!ee.isUndefined(d))
        return t(void 0, d, g, m);
    } else return t(d, p, g, m);
  }
  function o(d, p) {
    if (!ee.isUndefined(p))
      return t(void 0, p);
  }
  function s(d, p) {
    if (ee.isUndefined(p)) {
      if (!ee.isUndefined(d))
        return t(void 0, d);
    } else return t(void 0, p);
  }
  function c(d, p, g) {
    if (g in n)
      return t(d, p);
    if (g in e)
      return t(void 0, d);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: c,
    headers: (d, p, g) => r(lp(d), lp(p), g, !0)
  };
  return ee.forEach(Object.keys(Object.assign({}, e, n)), function(p) {
    const g = f[p] || r, m = g(e[p], n[p], p);
    ee.isUndefined(m) && g !== c || (i[p] = m);
  }), i;
}
const gg = (e) => {
  const n = wo({}, e);
  let { data: i, withXSRFToken: t, xsrfHeaderName: r, xsrfCookieName: o, headers: s, auth: c } = n;
  n.headers = s = fn.from(s), n.url = ug(vg(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), c && s.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (ee.isFormData(i)) {
    if (Ur.hasStandardBrowserEnv || Ur.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((f = s.getContentType()) !== !1) {
      const [d, ...p] = f ? f.split(";").map((g) => g.trim()).filter(Boolean) : [];
      s.setContentType([d || "multipart/form-data", ...p].join("; "));
    }
  }
  if (Ur.hasStandardBrowserEnv && (t && ee.isFunction(t) && (t = t(n)), t || t !== !1 && QC(n.url))) {
    const d = r && o && JC.read(o);
    d && s.set(r, d);
  }
  return n;
}, rS = typeof XMLHttpRequest < "u", nS = rS && function(e) {
  return new Promise(function(i, t) {
    const r = gg(e);
    let o = r.data;
    const s = fn.from(r.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: d } = r, p, g, m, S, x;
    function I() {
      S && S(), x && x(), r.cancelToken && r.cancelToken.unsubscribe(p), r.signal && r.signal.removeEventListener("abort", p);
    }
    let b = new XMLHttpRequest();
    b.open(r.method.toUpperCase(), r.url, !0), b.timeout = r.timeout;
    function L() {
      if (!b)
        return;
      const W = fn.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), Q = {
        data: !c || c === "text" || c === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: W,
        config: e,
        request: b
      };
      pg(function(ye) {
        i(ye), I();
      }, function(ye) {
        t(ye), I();
      }, Q), b = null;
    }
    "onloadend" in b ? b.onloadend = L : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(L);
    }, b.onabort = function() {
      b && (t(new Ze("Request aborted", Ze.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      t(new Ze("Network Error", Ze.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let V = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const Q = r.transitional || fg;
      r.timeoutErrorMessage && (V = r.timeoutErrorMessage), t(new Ze(
        V,
        Q.clarifyTimeoutError ? Ze.ETIMEDOUT : Ze.ECONNABORTED,
        e,
        b
      )), b = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in b && ee.forEach(s.toJSON(), function(V, Q) {
      b.setRequestHeader(Q, V);
    }), ee.isUndefined(r.withCredentials) || (b.withCredentials = !!r.withCredentials), c && c !== "json" && (b.responseType = r.responseType), d && ([m, x] = ol(d, !0), b.addEventListener("progress", m)), f && b.upload && ([g, S] = ol(f), b.upload.addEventListener("progress", g), b.upload.addEventListener("loadend", S)), (r.cancelToken || r.signal) && (p = (W) => {
      b && (t(!W || W.type ? new as(null, e, b) : W), b.abort(), b = null);
    }, r.cancelToken && r.cancelToken.subscribe(p), r.signal && (r.signal.aborted ? p() : r.signal.addEventListener("abort", p)));
    const $ = YC(r.url);
    if ($ && Ur.protocols.indexOf($) === -1) {
      t(new Ze("Unsupported protocol " + $ + ":", Ze.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(o || null);
  });
}, iS = (e, n) => {
  const { length: i } = e = e ? e.filter(Boolean) : [];
  if (n || i) {
    let t = new AbortController(), r;
    const o = function(d) {
      if (!r) {
        r = !0, c();
        const p = d instanceof Error ? d : this.reason;
        t.abort(p instanceof Ze ? p : new as(p instanceof Error ? p.message : p));
      }
    };
    let s = n && setTimeout(() => {
      s = null, o(new Ze(`timeout ${n} of ms exceeded`, Ze.ETIMEDOUT));
    }, n);
    const c = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", o));
    const { signal: f } = t;
    return f.unsubscribe = () => ee.asap(c), f;
  }
}, oS = function* (e, n) {
  let i = e.byteLength;
  if (i < n) {
    yield e;
    return;
  }
  let t = 0, r;
  for (; t < i; )
    r = t + n, yield e.slice(t, r), t = r;
}, sS = async function* (e, n) {
  for await (const i of aS(e))
    yield* oS(i, n);
}, aS = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const n = e.getReader();
  try {
    for (; ; ) {
      const { done: i, value: t } = await n.read();
      if (i)
        break;
      yield t;
    }
  } finally {
    await n.cancel();
  }
}, up = (e, n, i, t) => {
  const r = sS(e, n);
  let o = 0, s, c = (f) => {
    s || (s = !0, t && t(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: d, value: p } = await r.next();
        if (d) {
          c(), f.close();
          return;
        }
        let g = p.byteLength;
        if (i) {
          let m = o += g;
          i(m);
        }
        f.enqueue(new Uint8Array(p));
      } catch (d) {
        throw c(d), d;
      }
    },
    cancel(f) {
      return c(f), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Fl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", mg = Fl && typeof ReadableStream == "function", cS = Fl && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), yg = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, lS = mg && yg(() => {
  let e = !1;
  const n = new Request(Ur.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), fp = 64 * 1024, ff = mg && yg(() => ee.isReadableStream(new Response("").body)), sl = {
  stream: ff && ((e) => e.body)
};
Fl && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !sl[n] && (sl[n] = ee.isFunction(e[n]) ? (i) => i[n]() : (i, t) => {
      throw new Ze(`Response type '${n}' is not supported`, Ze.ERR_NOT_SUPPORT, t);
    });
  });
})(new Response());
const uS = async (e) => {
  if (e == null)
    return 0;
  if (ee.isBlob(e))
    return e.size;
  if (ee.isSpecCompliantForm(e))
    return (await new Request(Ur.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (ee.isArrayBufferView(e) || ee.isArrayBuffer(e))
    return e.byteLength;
  if (ee.isURLSearchParams(e) && (e = e + ""), ee.isString(e))
    return (await cS(e)).byteLength;
}, fS = async (e, n) => {
  const i = ee.toFiniteNumber(e.getContentLength());
  return i ?? uS(n);
}, dS = Fl && (async (e) => {
  let {
    url: n,
    method: i,
    data: t,
    signal: r,
    cancelToken: o,
    timeout: s,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: d,
    headers: p,
    withCredentials: g = "same-origin",
    fetchOptions: m
  } = gg(e);
  d = d ? (d + "").toLowerCase() : "text";
  let S = iS([r, o && o.toAbortSignal()], s), x;
  const I = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let b;
  try {
    if (f && lS && i !== "get" && i !== "head" && (b = await fS(p, t)) !== 0) {
      let Q = new Request(n, {
        method: "POST",
        body: t,
        duplex: "half"
      }), ie;
      if (ee.isFormData(t) && (ie = Q.headers.get("content-type")) && p.setContentType(ie), Q.body) {
        const [ye, ge] = ap(
          b,
          ol(cp(f))
        );
        t = up(Q.body, fp, ye, ge);
      }
    }
    ee.isString(g) || (g = g ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    x = new Request(n, {
      ...m,
      signal: S,
      method: i.toUpperCase(),
      headers: p.normalize().toJSON(),
      body: t,
      duplex: "half",
      credentials: L ? g : void 0
    });
    let $ = await fetch(x, m);
    const W = ff && (d === "stream" || d === "response");
    if (ff && (c || W && I)) {
      const Q = {};
      ["status", "statusText", "headers"].forEach((Ie) => {
        Q[Ie] = $[Ie];
      });
      const ie = ee.toFiniteNumber($.headers.get("content-length")), [ye, ge] = c && ap(
        ie,
        ol(cp(c), !0)
      ) || [];
      $ = new Response(
        up($.body, fp, ye, () => {
          ge && ge(), I && I();
        }),
        Q
      );
    }
    d = d || "text";
    let V = await sl[ee.findKey(sl, d) || "text"]($, e);
    return !W && I && I(), await new Promise((Q, ie) => {
      pg(Q, ie, {
        data: V,
        headers: fn.from($.headers),
        status: $.status,
        statusText: $.statusText,
        config: e,
        request: x
      });
    });
  } catch (L) {
    throw I && I(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(
      new Ze("Network Error", Ze.ERR_NETWORK, e, x),
      {
        cause: L.cause || L
      }
    ) : Ze.from(L, L && L.code, e, x);
  }
}), df = {
  http: kC,
  xhr: nS,
  fetch: dS
};
ee.forEach(df, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const dp = (e) => `- ${e}`, hS = (e) => ee.isFunction(e) || e === null || e === !1, xg = {
  getAdapter: (e) => {
    e = ee.isArray(e) ? e : [e];
    const { length: n } = e;
    let i, t;
    const r = {};
    for (let o = 0; o < n; o++) {
      i = e[o];
      let s;
      if (t = i, !hS(i) && (t = df[(s = String(i)).toLowerCase()], t === void 0))
        throw new Ze(`Unknown adapter '${s}'`);
      if (t)
        break;
      r[s || "#" + o] = t;
    }
    if (!t) {
      const o = Object.entries(r).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = n ? o.length > 1 ? `since :
` + o.map(dp).join(`
`) : " " + dp(o[0]) : "as no adapter specified";
      throw new Ze(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return t;
  },
  adapters: df
};
function Fu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new as(null, e);
}
function hp(e) {
  return Fu(e), e.headers = fn.from(e.headers), e.data = Mu.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), xg.getAdapter(e.adapter || Ea.adapter)(e).then(function(t) {
    return Fu(e), t.data = Mu.call(
      e,
      e.transformResponse,
      t
    ), t.headers = fn.from(t.headers), t;
  }, function(t) {
    return hg(t) || (Fu(e), t && t.response && (t.response.data = Mu.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = fn.from(t.response.headers))), Promise.reject(t);
  });
}
const bg = "1.10.0", Nl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Nl[e] = function(t) {
    return typeof t === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const pp = {};
Nl.transitional = function(n, i, t) {
  function r(o, s) {
    return "[Axios v" + bg + "] Transitional option '" + o + "'" + s + (t ? ". " + t : "");
  }
  return (o, s, c) => {
    if (n === !1)
      throw new Ze(
        r(s, " has been removed" + (i ? " in " + i : "")),
        Ze.ERR_DEPRECATED
      );
    return i && !pp[s] && (pp[s] = !0, console.warn(
      r(
        s,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), n ? n(o, s, c) : !0;
  };
};
Nl.spelling = function(n) {
  return (i, t) => (console.warn(`${t} is likely a misspelling of ${n}`), !0);
};
function pS(e, n, i) {
  if (typeof e != "object")
    throw new Ze("options must be an object", Ze.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(e);
  let r = t.length;
  for (; r-- > 0; ) {
    const o = t[r], s = n[o];
    if (s) {
      const c = e[o], f = c === void 0 || s(c, o, e);
      if (f !== !0)
        throw new Ze("option " + o + " must be " + f, Ze.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new Ze("Unknown option " + o, Ze.ERR_BAD_OPTION);
  }
}
const Zc = {
  assertOptions: pS,
  validators: Nl
}, Kn = Zc.validators;
let bo = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new op(),
      response: new op()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(n, i) {
    try {
      return await this._request(n, i);
    } catch (t) {
      if (t instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          t.stack ? o && !String(t.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (t.stack += `
` + o) : t.stack = o;
        } catch {
        }
      }
      throw t;
    }
  }
  _request(n, i) {
    typeof n == "string" ? (i = i || {}, i.url = n) : i = n || {}, i = wo(this.defaults, i);
    const { transitional: t, paramsSerializer: r, headers: o } = i;
    t !== void 0 && Zc.assertOptions(t, {
      silentJSONParsing: Kn.transitional(Kn.boolean),
      forcedJSONParsing: Kn.transitional(Kn.boolean),
      clarifyTimeoutError: Kn.transitional(Kn.boolean)
    }, !1), r != null && (ee.isFunction(r) ? i.paramsSerializer = {
      serialize: r
    } : Zc.assertOptions(r, {
      encode: Kn.function,
      serialize: Kn.function
    }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), Zc.assertOptions(i, {
      baseUrl: Kn.spelling("baseURL"),
      withXsrfToken: Kn.spelling("withXSRFToken")
    }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let s = o && ee.merge(
      o.common,
      o[i.method]
    );
    o && ee.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (x) => {
        delete o[x];
      }
    ), i.headers = fn.concat(s, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(I) {
      typeof I.runWhen == "function" && I.runWhen(i) === !1 || (f = f && I.synchronous, c.unshift(I.fulfilled, I.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(I) {
      d.push(I.fulfilled, I.rejected);
    });
    let p, g = 0, m;
    if (!f) {
      const x = [hp.bind(this), void 0];
      for (x.unshift.apply(x, c), x.push.apply(x, d), m = x.length, p = Promise.resolve(i); g < m; )
        p = p.then(x[g++], x[g++]);
      return p;
    }
    m = c.length;
    let S = i;
    for (g = 0; g < m; ) {
      const x = c[g++], I = c[g++];
      try {
        S = x(S);
      } catch (b) {
        I.call(this, b);
        break;
      }
    }
    try {
      p = hp.call(this, S);
    } catch (x) {
      return Promise.reject(x);
    }
    for (g = 0, m = d.length; g < m; )
      p = p.then(d[g++], d[g++]);
    return p;
  }
  getUri(n) {
    n = wo(this.defaults, n);
    const i = vg(n.baseURL, n.url, n.allowAbsoluteUrls);
    return ug(i, n.params, n.paramsSerializer);
  }
};
ee.forEach(["delete", "get", "head", "options"], function(n) {
  bo.prototype[n] = function(i, t) {
    return this.request(wo(t || {}, {
      method: n,
      url: i,
      data: (t || {}).data
    }));
  };
});
ee.forEach(["post", "put", "patch"], function(n) {
  function i(t) {
    return function(o, s, c) {
      return this.request(wo(c || {}, {
        method: n,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  bo.prototype[n] = i(), bo.prototype[n + "Form"] = i(!0);
});
let vS = class wg {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(o) {
      i = o;
    });
    const t = this;
    this.promise.then((r) => {
      if (!t._listeners) return;
      let o = t._listeners.length;
      for (; o-- > 0; )
        t._listeners[o](r);
      t._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const s = new Promise((c) => {
        t.subscribe(c), o = c;
      }).then(r);
      return s.cancel = function() {
        t.unsubscribe(o);
      }, s;
    }, n(function(o, s, c) {
      t.reason || (t.reason = new as(o, s, c), i(t.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(n);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const n = new AbortController(), i = (t) => {
      n.abort(t);
    };
    return this.subscribe(i), n.signal.unsubscribe = () => this.unsubscribe(i), n.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new wg(function(r) {
        n = r;
      }),
      cancel: n
    };
  }
};
function gS(e) {
  return function(i) {
    return e.apply(null, i);
  };
}
function mS(e) {
  return ee.isObject(e) && e.isAxiosError === !0;
}
const hf = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(hf).forEach(([e, n]) => {
  hf[n] = e;
});
function _g(e) {
  const n = new bo(e), i = Qv(bo.prototype.request, n);
  return ee.extend(i, bo.prototype, n, { allOwnKeys: !0 }), ee.extend(i, n, null, { allOwnKeys: !0 }), i.create = function(r) {
    return _g(wo(e, r));
  }, i;
}
const ir = _g(Ea);
ir.Axios = bo;
ir.CanceledError = as;
ir.CancelToken = vS;
ir.isCancel = hg;
ir.VERSION = bg;
ir.toFormData = Ml;
ir.AxiosError = Ze;
ir.Cancel = ir.CanceledError;
ir.all = function(n) {
  return Promise.all(n);
};
ir.spread = gS;
ir.isAxiosError = mS;
ir.mergeConfig = wo;
ir.AxiosHeaders = fn;
ir.formToJSON = (e) => dg(ee.isHTMLForm(e) ? new FormData(e) : e);
ir.getAdapter = xg.getAdapter;
ir.HttpStatusCode = hf;
ir.default = ir;
const {
  Axios: HR,
  AxiosError: GR,
  CanceledError: KR,
  isCancel: YR,
  CancelToken: ZR,
  VERSION: XR,
  all: QR,
  Cancel: JR,
  isAxiosError: eP,
  spread: tP,
  toFormData: rP,
  AxiosHeaders: nP,
  HttpStatusCode: iP,
  formToJSON: oP,
  getAdapter: sP,
  mergeConfig: aP
} = ir;
var xe;
if (typeof window > "u") {
  var vp = {
    hostname: ""
  };
  xe = {
    crypto: { randomUUID: function() {
      throw Error("unsupported");
    } },
    navigator: { userAgent: "", onLine: !0 },
    document: {
      createElement: function() {
        return {};
      },
      location: vp,
      referrer: ""
    },
    screen: { width: 0, height: 0 },
    location: vp,
    addEventListener: function() {
    },
    removeEventListener: function() {
    }
  };
} else
  xe = window;
function gp(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var i = 0, t = new Array(n); i < n; i++) t[i] = e[i];
  return t;
}
function mp(e, n, i, t, r, o, s) {
  try {
    var c = e[o](s), f = c.value;
  } catch (d) {
    i(d);
    return;
  }
  c.done ? n(f) : Promise.resolve(f).then(t, r);
}
function vd(e) {
  return function() {
    var n = this, i = arguments;
    return new Promise(function(t, r) {
      var o = e.apply(n, i);
      function s(f) {
        mp(o, t, r, s, c, "next", f);
      }
      function c(f) {
        mp(o, t, r, s, c, "throw", f);
      }
      s(void 0);
    });
  };
}
function Xc(e, n, i) {
  return Cg() ? Xc = Reflect.construct : Xc = function(r, o, s) {
    var c = [
      null
    ];
    c.push.apply(c, o);
    var f = Function.bind.apply(r, c), d = new f();
    return s && la(d, s.prototype), d;
  }, Xc.apply(null, arguments);
}
function yS(e, n) {
  for (var i = 0; i < n.length; i++) {
    var t = n[i];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function Br(e, n, i) {
  return n && yS(e.prototype, n), e;
}
function yt() {
  return yt = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var t in i)
        Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    }
    return e;
  }, yt.apply(this, arguments);
}
function pf(e) {
  return pf = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, pf(e);
}
function Wr(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), n && la(e, n);
}
function Xe(e, n) {
  return n != null && typeof Symbol < "u" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : e instanceof n;
}
function xS(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ca(e, n) {
  if (e == null) return {};
  var i = {}, t = Object.keys(e), r, o;
  for (o = 0; o < t.length; o++)
    r = t[o], !(n.indexOf(r) >= 0) && (i[r] = e[r]);
  return i;
}
function la(e, n) {
  return la = Object.setPrototypeOf || function(t, r) {
    return t.__proto__ = r, t;
  }, la(e, n);
}
function lt(e) {
  "@swc/helpers - typeof";
  return e && typeof Symbol < "u" && e.constructor === Symbol ? "symbol" : typeof e;
}
function bS(e, n) {
  if (e) {
    if (typeof e == "string") return gp(e, n);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(i);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return gp(e, n);
  }
}
function al(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return al = function(t) {
    if (t === null || !xS(t)) return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(t)) return n.get(t);
      n.set(t, r);
    }
    function r() {
      return Xc(t, arguments, pf(this).constructor);
    }
    return r.prototype = Object.create(t.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), la(r, t);
  }, al(e);
}
function Cg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cg = function() {
    return !!e;
  })();
}
function Ae(e, n) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = bS(e)) || n) {
    i && (e = i);
    var t = 0;
    return function() {
      return t >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[t++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ua(e, n) {
  var i, t, r, o, s = {
    label: 0,
    sent: function() {
      if (r[0] & 1) throw r[1];
      return r[1];
    },
    trys: [],
    ops: []
  };
  return o = {
    next: c(0),
    throw: c(1),
    return: c(2)
  }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(d) {
    return function(p) {
      return f([
        d,
        p
      ]);
    };
  }
  function f(d) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; s; ) try {
      if (i = 1, t && (r = d[0] & 2 ? t.return : d[0] ? t.throw || ((r = t.return) && r.call(t), 0) : t.next) && !(r = r.call(t, d[1])).done) return r;
      switch (t = 0, r && (d = [
        d[0] & 2,
        r.value
      ]), d[0]) {
        case 0:
        case 1:
          r = d;
          break;
        case 4:
          return s.label++, {
            value: d[1],
            done: !1
          };
        case 5:
          s.label++, t = d[1], d = [
            0
          ];
          continue;
        case 7:
          d = s.ops.pop(), s.trys.pop();
          continue;
        default:
          if (r = s.trys, !(r = r.length > 0 && r[r.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            s = 0;
            continue;
          }
          if (d[0] === 3 && (!r || d[1] > r[0] && d[1] < r[3])) {
            s.label = d[1];
            break;
          }
          if (d[0] === 6 && s.label < r[1]) {
            s.label = r[1], r = d;
            break;
          }
          if (r && s.label < r[2]) {
            s.label = r[2], s.ops.push(d);
            break;
          }
          r[2] && s.ops.pop(), s.trys.pop();
          continue;
      }
      d = n.call(e, s);
    } catch (p) {
      d = [
        6,
        p
      ], t = 0;
    } finally {
      i = r = 0;
    }
    if (d[0] & 5) throw d[1];
    return {
      value: d[0] ? d[1] : void 0,
      done: !0
    };
  }
}
function Sg(e) {
  var n = typeof Symbol == "function" && Symbol.iterator, i = n && e[n], t = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && t >= e.length && (e = void 0), {
        value: e && e[t++],
        done: !e
      };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var wS = Object.defineProperty, _S = function(e, n, i) {
  return n in e ? wS(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
  }) : e[n] = i;
}, me = function(e, n, i) {
  return _S(e, (typeof n > "u" ? "undefined" : lt(n)) !== "symbol" ? n + "" : n, i);
}, yp, CS = Object.defineProperty, SS = function(e, n, i) {
  return n in e ? CS(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
  }) : e[n] = i;
}, xp = function(e, n, i) {
  return SS(e, (typeof n > "u" ? "undefined" : lt(n)) !== "symbol" ? n + "" : n, i);
}, xr = /* @__PURE__ */ function(e) {
  return e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e;
}(xr || {}), bp = {
  Node: [
    "childNodes",
    "parentNode",
    "parentElement",
    "textContent"
  ],
  ShadowRoot: [
    "host",
    "styleSheets"
  ],
  Element: [
    "shadowRoot",
    "querySelector",
    "querySelectorAll"
  ],
  MutationObserver: []
}, wp = {
  Node: [
    "contains",
    "getRootNode"
  ],
  ShadowRoot: [
    "getSelection"
  ],
  Element: [],
  MutationObserver: [
    "constructor"
  ]
}, Cc = {}, ES = function() {
  return !!globalThis.Zone;
};
function gd(e) {
  if (Cc[e]) return Cc[e];
  var n = globalThis[e], i = n.prototype, t = e in bp ? bp[e] : void 0, r = !!(t && // @ts-expect-error 2345
  t.every(function(p) {
    var g, m;
    return !!((m = (g = Object.getOwnPropertyDescriptor(i, p)) == null ? void 0 : g.get) != null && m.toString().includes("[native code]"));
  })), o = e in wp ? wp[e] : void 0, s = !!(o && o.every(
    // @ts-expect-error 2345
    function(p) {
      var g;
      return typeof i[p] == "function" && ((g = i[p]) == null ? void 0 : g.toString().includes("[native code]"));
    }
  ));
  if (r && s && !ES())
    return Cc[e] = n.prototype, n.prototype;
  try {
    var c = document.createElement("iframe");
    document.body.appendChild(c);
    var f = c.contentWindow;
    if (!f) return n.prototype;
    var d = f[e].prototype;
    return document.body.removeChild(c), d ? Cc[e] = d : i;
  } catch {
    return i;
  }
}
var Nu = {};
function Ti(e, n, i) {
  var t, r = e + "." + String(i);
  if (Nu[r]) return Nu[r].call(n);
  var o = gd(e), s = (t = Object.getOwnPropertyDescriptor(o, i)) == null ? void 0 : t.get;
  return s ? (Nu[r] = s, s.call(n)) : n[i];
}
var Lu = {};
function Eg(e, n, i) {
  var t = e + "." + String(i);
  if (Lu[t]) return Lu[t].bind(n);
  var r = gd(e), o = r[i];
  return typeof o != "function" ? n[i] : (Lu[t] = o, o.bind(n));
}
function AS(e) {
  return Ti("Node", e, "childNodes");
}
function kS(e) {
  return Ti("Node", e, "parentNode");
}
function IS(e) {
  return Ti("Node", e, "parentElement");
}
function OS(e) {
  return Ti("Node", e, "textContent");
}
function DS(e, n) {
  return Eg("Node", e, "contains")(n);
}
function RS(e) {
  return Eg("Node", e, "getRootNode")();
}
function PS(e) {
  return !e || !("host" in e) ? null : Ti("ShadowRoot", e, "host");
}
function BS(e) {
  return e.styleSheets;
}
function TS(e) {
  return !e || !("shadowRoot" in e) ? null : Ti("Element", e, "shadowRoot");
}
function MS(e, n) {
  return Ti("Element", e, "querySelector")(n);
}
function FS(e, n) {
  return Ti("Element", e, "querySelectorAll")(n);
}
function NS() {
  return gd("MutationObserver").constructor;
}
var zr = {
  childNodes: AS,
  parentNode: kS,
  parentElement: IS,
  textContent: OS,
  contains: DS,
  getRootNode: RS,
  host: PS,
  styleSheets: BS,
  shadowRoot: TS,
  querySelector: MS,
  querySelectorAll: FS,
  mutationObserver: NS
};
function Ag(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Js(e) {
  var n = (
    // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    e && "host" in e && "mode" in e && zr.host(e) || null
  );
  return !!(n && "shadowRoot" in n && zr.shadowRoot(n) === e);
}
function ea(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function LS(e) {
  return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), e;
}
function US(e) {
  var n = e.cssText;
  if (n.split('"').length < 3) return n;
  var i = [
    "@import",
    "url(" + JSON.stringify(e.href) + ")"
  ];
  return e.layerName === "" ? i.push("layer") : e.layerName && i.push("layer(" + e.layerName + ")"), e.supportsText && i.push("supports(" + e.supportsText + ")"), e.media.length && i.push(e.media.mediaText), i.join(" ") + ";";
}
function vf(e) {
  try {
    var n = e.rules || e.cssRules;
    if (!n)
      return null;
    var i = e.href;
    !i && e.ownerNode && e.ownerNode.ownerDocument && (i = e.ownerNode.ownerDocument.location.href);
    var t = Array.from(n, function(r) {
      return kg(r, i);
    }).join("");
    return LS(t);
  } catch {
    return null;
  }
}
function kg(e, n) {
  if (jS(e)) {
    var i;
    try {
      i = // we can access the imported stylesheet rules directly
      vf(e.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      US(e);
    } catch {
      i = e.cssText;
    }
    return e.styleSheet.href ? cl(i, e.styleSheet.href) : i;
  } else {
    var t = e.cssText;
    return $S(e) && e.selectorText.includes(":") && (t = zS(t)), n ? cl(t, n) : t;
  }
}
function zS(e) {
  var n = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return e.replace(n, "$1\\$2");
}
function jS(e) {
  return "styleSheet" in e;
}
function $S(e) {
  return "selectorText" in e;
}
var Ig = /* @__PURE__ */ function() {
  function e() {
    xp(this, "idNodeMap", /* @__PURE__ */ new Map()), xp(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  var n = e.prototype;
  return n.getId = function(t) {
    var r;
    if (!t) return -1;
    var o = (r = this.getMeta(t)) == null ? void 0 : r.id;
    return o ?? -1;
  }, n.getNode = function(t) {
    return this.idNodeMap.get(t) || null;
  }, n.getIds = function() {
    return Array.from(this.idNodeMap.keys());
  }, n.getMeta = function(t) {
    return this.nodeMetaMap.get(t) || null;
  }, n.removeNodeFromMap = function(t) {
    var r = this, o = this.getId(t);
    this.idNodeMap.delete(o), t.childNodes && t.childNodes.forEach(function(s) {
      return r.removeNodeFromMap(s);
    });
  }, n.has = function(t) {
    return this.idNodeMap.has(t);
  }, n.hasNode = function(t) {
    return this.nodeMetaMap.has(t);
  }, n.add = function(t, r) {
    var o = r.id;
    this.idNodeMap.set(o, t), this.nodeMetaMap.set(t, r);
  }, n.replace = function(t, r) {
    var o = this.getNode(t);
    if (o) {
      var s = this.nodeMetaMap.get(o);
      s && this.nodeMetaMap.set(r, s);
    }
    this.idNodeMap.set(t, r);
  }, n.reset = function() {
    this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }, e;
}();
function WS() {
  return new Ig();
}
function md(e) {
  var n = e.element, i = e.maskInputOptions, t = e.tagName, r = e.type, o = e.value, s = e.maskInputFn, c = o || "", f = r && _o(r);
  return (i[t.toLowerCase()] || f && i[f]) && (s ? c = s(c, n) : c = "*".repeat(c.length)), c;
}
function _o(e) {
  return e.toLowerCase();
}
var _p = "__rrweb_original__";
function qS(e) {
  var n = e.getContext("2d");
  if (!n) return !0;
  for (var i = 50, t = 0; t < e.width; t += i)
    for (var r = 0; r < e.height; r += i) {
      var o = n.getImageData, s = _p in o ? o[_p] : o, c = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        s.call(n, t, r, Math.min(i, e.width - t), Math.min(i, e.height - r)).data.buffer
      );
      if (c.some(function(f) {
        return f !== 0;
      })) return !1;
    }
  return !0;
}
function yd(e) {
  var n = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : n ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    _o(n)
  ) : null;
}
function Og(e, n) {
  var i;
  try {
    i = new URL(e, n ?? window.location.href);
  } catch {
    return null;
  }
  var t = /\.([0-9a-z]+)(?:$)/i, r = i.pathname.match(t), o;
  return (o = r == null ? void 0 : r[1]) != null ? o : null;
}
function VS(e) {
  var n = "";
  return e.indexOf("//") > -1 ? n = e.split("/").slice(0, 3).join("/") : n = e.split("/")[0], n = n.split("?")[0], n;
}
var HS = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, GS = /^(?:[a-z+]+:)?\/\//i, KS = /^www\..*/i, YS = /^(data:)([^,]*),(.*)/i;
function cl(e, n) {
  return (e || "").replace(HS, function(i, t, r, o, s, c) {
    var f = r || s || c, d = t || o || "";
    if (!f)
      return i;
    if (GS.test(f) || KS.test(f) || YS.test(f))
      return "url(" + d + f + d + ")";
    if (f[0] === "/")
      return "url(" + d + (VS(n) + f) + d + ")";
    var p = n.split("/"), g = f.split("/");
    p.pop();
    for (var m = Ae(g), S; !(S = m()).done; ) {
      var x = S.value;
      x !== "." && (x === ".." ? p.pop() : p.push(x));
    }
    return "url(" + d + p.join("/") + d + ")";
  });
}
function Uu(e) {
  return e.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
}
function ZS(e, n) {
  var i = Array.from(n.childNodes), t = [];
  if (i.length > 1 && e && typeof e == "string") {
    for (var r = Uu(e), o = 1; o < i.length; o++)
      if (i[o].textContent && typeof i[o].textContent == "string")
        for (var s = Uu(i[o].textContent), c = 3; c < s.length; c++) {
          var f = s.substring(0, c);
          if (r.split(f).length === 2) {
            for (var d = r.indexOf(f), p = d; p < e.length; p++)
              if (Uu(e.substring(0, p)).length === d) {
                t.push(e.substring(0, p)), e = e.substring(p);
                break;
              }
            break;
          }
        }
  }
  return t.push(e), t;
}
function XS(e, n) {
  return ZS(e, n).join("/* rr_split */");
}
var QS = 1, JS = new RegExp("[^a-z0-9-_:]"), fa = -2;
function Dg() {
  return QS++;
}
function eE(e) {
  if (Xe(e, HTMLFormElement))
    return "form";
  var n = _o(e.tagName);
  return JS.test(n) ? "div" : n;
}
var Lo, Cp, tE = /^[^ \t\n\r\u000c]+/, rE = /^[, \t\n\r\u000c]+/;
function nE(e, n) {
  if (n.trim() === "")
    return n;
  var i = 0;
  function t(d) {
    var p, g = d.exec(n.substring(i));
    return g ? (p = g[0], i += p.length, p) : "";
  }
  for (var r = []; t(rE), !(i >= n.length); ) {
    var o = t(tE);
    if (o.slice(-1) === ",")
      o = Wo(e, o.substring(0, o.length - 1)), r.push(o);
    else {
      var s = "";
      o = Wo(e, o);
      for (var c = !1; ; ) {
        var f = n.charAt(i);
        if (f === "") {
          r.push((o + s).trim());
          break;
        } else if (c)
          f === ")" && (c = !1);
        else if (f === ",") {
          i += 1, r.push((o + s).trim());
          break;
        } else f === "(" && (c = !0);
        s += f, i += 1;
      }
    }
  }
  return r.join(", ");
}
var Sp = /* @__PURE__ */ new WeakMap();
function Wo(e, n) {
  return !n || n.trim() === "" ? n : xd(e, n);
}
function iE(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function xd(e, n) {
  var i = Sp.get(e);
  if (i || (i = e.createElement("a"), Sp.set(e, i)), !n)
    n = "";
  else if (n.startsWith("blob:") || n.startsWith("data:"))
    return n;
  return i.setAttribute("href", n), i.href;
}
function Rg(e, n, i, t) {
  return t && (i === "src" || i === "href" && !(n === "use" && t[0] === "#") || i === "xlink:href" && t[0] !== "#" || i === "background" && (n === "table" || n === "td" || n === "th") ? Wo(e, t) : i === "srcset" ? nE(e, t) : i === "style" ? cl(t, xd(e)) : n === "object" && i === "data" ? Wo(e, t) : t);
}
function Pg(e, n, i) {
  return (e === "video" || e === "audio") && n === "autoplay";
}
function oE(e, n, i) {
  try {
    if (typeof n == "string") {
      if (e.classList.contains(n))
        return !0;
    } else
      for (var t = e.classList.length; t--; ) {
        var r = e.classList[t];
        if (n.test(r))
          return !0;
      }
    if (i)
      return e.matches(i);
  } catch {
  }
  return !1;
}
function ll(e, n, i) {
  if (!e) return !1;
  if (e.nodeType !== e.ELEMENT_NODE)
    return i ? ll(zr.parentNode(e), n, i) : !1;
  for (var t = e.classList.length; t--; ) {
    var r = e.classList[t];
    if (n.test(r))
      return !0;
  }
  return i ? ll(zr.parentNode(e), n, i) : !1;
}
function Bg(e, n, i, t) {
  var r;
  if (Ag(e)) {
    if (r = e, !zr.childNodes(r).length)
      return !1;
  } else {
    if (zr.parentElement(e) === null)
      return !1;
    r = zr.parentElement(e);
  }
  try {
    if (typeof n == "string") {
      if (t) {
        if (r.closest("." + n)) return !0;
      } else if (r.classList.contains(n)) return !0;
    } else if (ll(r, n, t)) return !0;
    if (i) {
      if (t) {
        if (r.closest(i)) return !0;
      } else if (r.matches(i)) return !0;
    }
  } catch {
  }
  return !1;
}
function sE(e, n, i) {
  var t = e.contentWindow;
  if (t) {
    var r = !1, o;
    try {
      o = t.document.readyState;
    } catch {
      return;
    }
    if (o !== "complete") {
      var s = setTimeout(function() {
        r || (n(), r = !0);
      }, i);
      e.addEventListener("load", function() {
        clearTimeout(s), r = !0, n();
      });
      return;
    }
    var c = "about:blank";
    if (t.location.href !== c || e.src === c || e.src === "")
      return setTimeout(n, 0), e.addEventListener("load", n);
    e.addEventListener("load", n);
  }
}
function aE(e, n, i) {
  var t = !1, r;
  try {
    r = e.sheet;
  } catch {
    return;
  }
  if (!r) {
    var o = setTimeout(function() {
      t || (n(), t = !0);
    }, i);
    e.addEventListener("load", function() {
      clearTimeout(o), t = !0, n();
    });
  }
}
function cE(e, n) {
  var i = n.doc, t = n.mirror, r = n.blockClass, o = n.blockSelector, s = n.needsMask, c = n.inlineStylesheet, f = n.maskInputOptions, d = f === void 0 ? {} : f, p = n.maskTextFn, g = n.maskInputFn, m = n.dataURLOptions, S = m === void 0 ? {} : m, x = n.inlineImages, I = n.recordCanvas, b = n.keepIframeSrcFn, L = n.newlyAddedElement, $ = L === void 0 ? !1 : L, W = n.cssCaptured, V = W === void 0 ? !1 : W, Q = lE(i, t);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat" ? {
        type: xr.Document,
        childNodes: [],
        compatMode: e.compatMode
      } : {
        type: xr.Document,
        childNodes: []
      };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: xr.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: Q
      };
    case e.ELEMENT_NODE:
      return fE(e, {
        doc: i,
        blockClass: r,
        blockSelector: o,
        inlineStylesheet: c,
        maskInputOptions: d,
        maskInputFn: g,
        dataURLOptions: S,
        inlineImages: x,
        recordCanvas: I,
        keepIframeSrcFn: b,
        newlyAddedElement: $,
        rootId: Q
      });
    case e.TEXT_NODE:
      return uE(e, {
        doc: i,
        needsMask: s,
        maskTextFn: p,
        rootId: Q,
        cssCaptured: V
      });
    case e.CDATA_SECTION_NODE:
      return {
        type: xr.CDATA,
        textContent: "",
        rootId: Q
      };
    case e.COMMENT_NODE:
      return {
        type: xr.Comment,
        textContent: zr.textContent(e) || "",
        rootId: Q
      };
    default:
      return !1;
  }
}
function lE(e, n) {
  if (n.hasNode(e)) {
    var i = n.getId(e);
    return i === 1 ? void 0 : i;
  }
}
function uE(e, n) {
  var i = n.needsMask, t = n.maskTextFn, r = n.rootId, o = n.cssCaptured, s = zr.parentNode(e), c = s && s.tagName, f = "", d = c === "STYLE" ? !0 : void 0, p = c === "SCRIPT" ? !0 : void 0;
  return p ? f = "SCRIPT_PLACEHOLDER" : o || (f = zr.textContent(e), d && f && (f = cl(f, xd(n.doc)))), !d && !p && f && i && (f = t ? t(f, zr.parentElement(e)) : f.replace(/[\S]/g, "*")), {
    type: xr.Text,
    textContent: f || "",
    rootId: r
  };
}
function fE(e, n) {
  for (var i = n.doc, t = n.blockClass, r = n.blockSelector, o = n.inlineStylesheet, s = n.maskInputOptions, c = s === void 0 ? {} : s, f = n.maskInputFn, d = n.dataURLOptions, p = d === void 0 ? {} : d, g = n.inlineImages, m = n.recordCanvas, S = n.keepIframeSrcFn, x = n.newlyAddedElement, I = x === void 0 ? !1 : x, b = n.rootId, L = oE(e, t, r), $ = eE(e), W = {}, V = e.attributes.length, Q = 0; Q < V; Q++) {
    var ie = e.attributes[Q];
    Pg($, ie.name, ie.value) || (W[ie.name] = Rg(i, $, _o(ie.name), ie.value));
  }
  if ($ === "link" && o) {
    var ye = Array.from(i.styleSheets).find(function(Ut) {
      return Ut.href === e.href;
    }), ge = null;
    ye && (ge = vf(ye)), ge && (delete W.rel, delete W.href, W._cssText = ge);
  }
  if ($ === "style" && e.sheet) {
    var Ie = vf(e.sheet);
    Ie && (e.childNodes.length > 1 && (Ie = XS(Ie, e)), W._cssText = Ie);
  }
  if ($ === "input" || $ === "textarea" || $ === "select") {
    var $e = e.value, Oe = e.checked;
    W.type !== "radio" && W.type !== "checkbox" && W.type !== "submit" && W.type !== "button" && $e ? W.value = md({
      element: e,
      type: yd(e),
      tagName: $,
      value: $e,
      maskInputOptions: c,
      maskInputFn: f
    }) : Oe && (W.checked = Oe);
  }
  if ($ === "option" && (e.selected && !c.select ? W.selected = !0 : delete W.selected), $ === "dialog" && e.open && (W.rr_open_mode = e.matches("dialog:modal") ? "modal" : "non-modal"), $ === "canvas" && m) {
    if (e.__context === "2d")
      qS(e) || (W.rr_dataURL = e.toDataURL(p.type, p.quality));
    else if (!("__context" in e)) {
      var Me = e.toDataURL(p.type, p.quality), ke = i.createElement("canvas");
      ke.width = e.width, ke.height = e.height;
      var ut = ke.toDataURL(p.type, p.quality);
      Me !== ut && (W.rr_dataURL = Me);
    }
  }
  if ($ === "img" && g) {
    Lo || (Lo = i.createElement("canvas"), Cp = Lo.getContext("2d"));
    var Ue = e, mt = Ue.currentSrc || Ue.getAttribute("src") || "<unknown-src>", xt = Ue.crossOrigin, Te = function() {
      Ue.removeEventListener("load", Te);
      try {
        Lo.width = Ue.naturalWidth, Lo.height = Ue.naturalHeight, Cp.drawImage(Ue, 0, 0), W.rr_dataURL = Lo.toDataURL(p.type, p.quality);
      } catch (Ut) {
        if (Ue.crossOrigin !== "anonymous") {
          Ue.crossOrigin = "anonymous", Ue.complete && Ue.naturalWidth !== 0 ? Te() : Ue.addEventListener("load", Te);
          return;
        } else
          console.warn("Cannot inline img src=" + mt + "! Error: " + Ut);
      }
      Ue.crossOrigin === "anonymous" && (xt ? W.crossOrigin = xt : Ue.removeAttribute("crossorigin"));
    };
    Ue.complete && Ue.naturalWidth !== 0 ? Te() : Ue.addEventListener("load", Te);
  }
  if ($ === "audio" || $ === "video") {
    var Ot = W;
    Ot.rr_mediaState = e.paused ? "paused" : "played", Ot.rr_mediaCurrentTime = e.currentTime, Ot.rr_mediaPlaybackRate = e.playbackRate, Ot.rr_mediaMuted = e.muted, Ot.rr_mediaLoop = e.loop, Ot.rr_mediaVolume = e.volume;
  }
  if (I || (e.scrollLeft && (W.rr_scrollLeft = e.scrollLeft), e.scrollTop && (W.rr_scrollTop = e.scrollTop)), L) {
    var Bt = e.getBoundingClientRect(), br = Bt.width, Kt = Bt.height;
    W = {
      class: W.class,
      rr_width: "" + br + "px",
      rr_height: "" + Kt + "px"
    };
  }
  $ === "iframe" && !S(W.src) && (e.contentDocument || (W.rr_src = W.src), delete W.src);
  var Lt;
  try {
    customElements.get($) && (Lt = !0);
  } catch {
  }
  return {
    type: xr.Element,
    tagName: $,
    attributes: W,
    childNodes: [],
    isSVG: iE(e) || void 0,
    needBlock: L,
    rootId: b,
    isCustom: Lt
  };
}
function Ft(e) {
  return e == null ? "" : e.toLowerCase();
}
function dE(e, n) {
  if (n.comment && e.type === xr.Comment)
    return !0;
  if (e.type === xr.Element) {
    if (n.script && // script tag
    (e.tagName === "script" || // (module)preload link
    e.tagName === "link" && (e.attributes.rel === "preload" || e.attributes.rel === "modulepreload") && e.attributes.as === "script" || // prefetch link
    e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && Og(e.attributes.href) === "js"))
      return !0;
    if (n.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (Ft(e.attributes.name).match(/^msapplication-tile(image|color)$/) || Ft(e.attributes.name) === "application-name" || Ft(e.attributes.rel) === "icon" || Ft(e.attributes.rel) === "apple-touch-icon" || Ft(e.attributes.rel) === "shortcut icon")))
      return !0;
    if (e.tagName === "meta") {
      if (n.headMetaDescKeywords && Ft(e.attributes.name).match(/^description|keywords$/))
        return !0;
      if (n.headMetaSocial && (Ft(e.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      Ft(e.attributes.name).match(/^(og|twitter):/) || Ft(e.attributes.name) === "pinterest"))
        return !0;
      if (n.headMetaRobots && (Ft(e.attributes.name) === "robots" || Ft(e.attributes.name) === "googlebot" || Ft(e.attributes.name) === "bingbot"))
        return !0;
      if (n.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (n.headMetaAuthorship && (Ft(e.attributes.name) === "author" || Ft(e.attributes.name) === "generator" || Ft(e.attributes.name) === "framework" || Ft(e.attributes.name) === "publisher" || Ft(e.attributes.name) === "progid" || Ft(e.attributes.property).match(/^article:/) || Ft(e.attributes.property).match(/^product:/)))
        return !0;
      if (n.headMetaVerification && (Ft(e.attributes.name) === "google-site-verification" || Ft(e.attributes.name) === "yandex-verification" || Ft(e.attributes.name) === "csrf-token" || Ft(e.attributes.name) === "p:domain_verify" || Ft(e.attributes.name) === "verify-v1" || Ft(e.attributes.name) === "verification" || Ft(e.attributes.name) === "shopify-checkout-api-token"))
        return !0;
    }
  }
  return !1;
}
function qo(e, n) {
  var i = n.doc, t = n.mirror, r = n.blockClass, o = n.blockSelector, s = n.maskTextClass, c = n.maskTextSelector, f = n.skipChild, d = f === void 0 ? !1 : f, p = n.inlineStylesheet, g = p === void 0 ? !0 : p, m = n.maskInputOptions, S = m === void 0 ? {} : m, x = n.maskTextFn, I = n.maskInputFn, b = n.slimDOMOptions, L = n.dataURLOptions, $ = L === void 0 ? {} : L, W = n.inlineImages, V = W === void 0 ? !1 : W, Q = n.recordCanvas, ie = Q === void 0 ? !1 : Q, ye = n.onSerialize, ge = n.onIframeLoad, Ie = n.iframeLoadTimeout, $e = Ie === void 0 ? 5e3 : Ie, Oe = n.onStylesheetLoad, Me = n.stylesheetLoadTimeout, ke = Me === void 0 ? 5e3 : Me, ut = n.keepIframeSrcFn, Ue = ut === void 0 ? function() {
    return !1;
  } : ut, mt = n.newlyAddedElement, xt = mt === void 0 ? !1 : mt, Te = n.cssCaptured, Ot = Te === void 0 ? !1 : Te, Bt = n.needsMask, br = n.preserveWhiteSpace, Kt = br === void 0 ? !0 : br;
  if (!Bt) {
    var Lt = Bt === void 0;
    Bt = Bg(e, s, c, Lt);
  }
  var Ut = cE(e, {
    doc: i,
    mirror: t,
    blockClass: r,
    blockSelector: o,
    needsMask: Bt,
    inlineStylesheet: g,
    maskInputOptions: S,
    maskTextFn: x,
    maskInputFn: I,
    dataURLOptions: $,
    inlineImages: V,
    recordCanvas: ie,
    keepIframeSrcFn: Ue,
    newlyAddedElement: xt,
    cssCaptured: Ot
  });
  if (!Ut)
    return console.warn(e, "not serialized"), null;
  var ar;
  t.hasNode(e) ? ar = t.getId(e) : dE(Ut, b) || !Kt && Ut.type === xr.Text && !Ut.textContent.replace(/^\s+|\s+$/gm, "").length ? ar = fa : ar = Dg();
  var qe = Object.assign(Ut, {
    id: ar
  });
  if (t.add(e, qe), ar === fa)
    return null;
  ye && ye(e);
  var Mt = !d;
  if (qe.type === xr.Element) {
    Mt = Mt && !qe.needBlock, delete qe.needBlock;
    var we = zr.shadowRoot(e);
    we && ea(we) && (qe.isShadowHost = !0);
  }
  if ((qe.type === xr.Document || qe.type === xr.Element) && Mt) {
    b.headWhitespace && qe.type === xr.Element && qe.tagName === "head" && (Kt = !1);
    var Ge = {
      doc: i,
      mirror: t,
      blockClass: r,
      blockSelector: o,
      needsMask: Bt,
      maskTextClass: s,
      maskTextSelector: c,
      skipChild: d,
      inlineStylesheet: g,
      maskInputOptions: S,
      maskTextFn: x,
      maskInputFn: I,
      slimDOMOptions: b,
      dataURLOptions: $,
      inlineImages: V,
      recordCanvas: ie,
      preserveWhiteSpace: Kt,
      onSerialize: ye,
      onIframeLoad: ge,
      iframeLoadTimeout: $e,
      onStylesheetLoad: Oe,
      stylesheetLoadTimeout: ke,
      keepIframeSrcFn: Ue,
      cssCaptured: !1
    };
    if (!(qe.type === xr.Element && qe.tagName === "textarea" && qe.attributes.value !== void 0)) {
      qe.type === xr.Element && qe.attributes._cssText !== void 0 && typeof qe.attributes._cssText == "string" && (Ge.cssCaptured = !0);
      for (var bt = Ae(Array.from(zr.childNodes(e))), wr; !(wr = bt()).done; ) {
        var Tr = wr.value, er = qo(Tr, Ge);
        er && qe.childNodes.push(er);
      }
    }
    var cr = null;
    if (Ag(e) && (cr = zr.shadowRoot(e)))
      for (var Tt = Ae(Array.from(zr.childNodes(cr))), tr; !(tr = Tt()).done; ) {
        var Mr = tr.value, pr = qo(Mr, Ge);
        pr && (ea(cr) && (pr.isShadow = !0), qe.childNodes.push(pr));
      }
  }
  var zt = zr.parentNode(e);
  return zt && Js(zt) && ea(zt) && (qe.isShadow = !0), qe.type === xr.Element && qe.tagName === "iframe" && sE(e, function() {
    var _r = e.contentDocument;
    if (_r && ge) {
      var Vr = qo(_r, {
        doc: _r,
        mirror: t,
        blockClass: r,
        blockSelector: o,
        needsMask: Bt,
        maskTextClass: s,
        maskTextSelector: c,
        skipChild: !1,
        inlineStylesheet: g,
        maskInputOptions: S,
        maskTextFn: x,
        maskInputFn: I,
        slimDOMOptions: b,
        dataURLOptions: $,
        inlineImages: V,
        recordCanvas: ie,
        preserveWhiteSpace: Kt,
        onSerialize: ye,
        onIframeLoad: ge,
        iframeLoadTimeout: $e,
        onStylesheetLoad: Oe,
        stylesheetLoadTimeout: ke,
        keepIframeSrcFn: Ue
      });
      Vr && ge(e, Vr);
    }
  }, $e), qe.type === xr.Element && qe.tagName === "link" && typeof qe.attributes.rel == "string" && (qe.attributes.rel === "stylesheet" || qe.attributes.rel === "preload" && typeof qe.attributes.href == "string" && Og(qe.attributes.href) === "css") && aE(e, function() {
    if (Oe) {
      var _r = qo(e, {
        doc: i,
        mirror: t,
        blockClass: r,
        blockSelector: o,
        needsMask: Bt,
        maskTextClass: s,
        maskTextSelector: c,
        skipChild: !1,
        inlineStylesheet: g,
        maskInputOptions: S,
        maskTextFn: x,
        maskInputFn: I,
        slimDOMOptions: b,
        dataURLOptions: $,
        inlineImages: V,
        recordCanvas: ie,
        preserveWhiteSpace: Kt,
        onSerialize: ye,
        onIframeLoad: ge,
        iframeLoadTimeout: $e,
        onStylesheetLoad: Oe,
        stylesheetLoadTimeout: ke,
        keepIframeSrcFn: Ue
      });
      _r && Oe(e, _r);
    }
  }, ke), qe;
}
function hE(e, n) {
  var i = n || {}, t = i.mirror, r = t === void 0 ? new Ig() : t, o = i.blockClass, s = o === void 0 ? "rr-block" : o, c = i.blockSelector, f = c === void 0 ? null : c, d = i.maskTextClass, p = d === void 0 ? "rr-mask" : d, g = i.maskTextSelector, m = g === void 0 ? null : g, S = i.inlineStylesheet, x = S === void 0 ? !0 : S, I = i.inlineImages, b = I === void 0 ? !1 : I, L = i.recordCanvas, $ = L === void 0 ? !1 : L, W = i.maskAllInputs, V = W === void 0 ? !1 : W, Q = i.maskTextFn, ie = i.maskInputFn, ye = i.slimDOM, ge = ye === void 0 ? !1 : ye, Ie = i.dataURLOptions, $e = i.preserveWhiteSpace, Oe = i.onSerialize, Me = i.onIframeLoad, ke = i.iframeLoadTimeout, ut = i.onStylesheetLoad, Ue = i.stylesheetLoadTimeout, mt = i.keepIframeSrcFn, xt = mt === void 0 ? function() {
    return !1;
  } : mt, Te = V === !0 ? {
    color: !0,
    date: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
    textarea: !0,
    select: !0,
    password: !0
  } : V === !1 ? {
    password: !0
  } : V, Ot = ge === !0 || ge === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: !0,
      comment: !0,
      headFavicon: !0,
      headWhitespace: !0,
      headMetaDescKeywords: ge === "all",
      // destructive
      headMetaSocial: !0,
      headMetaRobots: !0,
      headMetaHttpEquiv: !0,
      headMetaAuthorship: !0,
      headMetaVerification: !0
    }
  ) : ge === !1 ? {} : ge;
  return qo(e, {
    doc: e,
    mirror: r,
    blockClass: s,
    blockSelector: f,
    maskTextClass: p,
    maskTextSelector: m,
    skipChild: !1,
    inlineStylesheet: x,
    maskInputOptions: Te,
    maskTextFn: Q,
    maskInputFn: ie,
    slimDOMOptions: Ot,
    dataURLOptions: Ie,
    inlineImages: b,
    recordCanvas: $,
    preserveWhiteSpace: $e,
    onSerialize: Oe,
    onIframeLoad: Me,
    iframeLoadTimeout: ke,
    onStylesheetLoad: ut,
    stylesheetLoadTimeout: Ue,
    keepIframeSrcFn: xt,
    newlyAddedElement: !1
  });
}
function pE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function vE(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var i = function t() {
      return Xe(this, t) ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    i.prototype = n.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function(t) {
    var r = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(i, t, r.get ? r : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), i;
}
var bd = {
  exports: {}
}, Vt = String, Tg = function() {
  return {
    isColorSupported: !1,
    reset: Vt,
    bold: Vt,
    dim: Vt,
    italic: Vt,
    underline: Vt,
    inverse: Vt,
    hidden: Vt,
    strikethrough: Vt,
    black: Vt,
    red: Vt,
    green: Vt,
    yellow: Vt,
    blue: Vt,
    magenta: Vt,
    cyan: Vt,
    white: Vt,
    gray: Vt,
    bgBlack: Vt,
    bgRed: Vt,
    bgGreen: Vt,
    bgYellow: Vt,
    bgBlue: Vt,
    bgMagenta: Vt,
    bgCyan: Vt,
    bgWhite: Vt
  };
};
bd.exports = Tg();
bd.exports.createColors = Tg;
var gE = bd.exports, mE = {}, yE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mE
}, Symbol.toStringTag, {
  value: "Module"
})), or = /* @__PURE__ */ vE(yE), Ep = gE, Ap = or, gf = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t, r, o, s, c, f) {
    var d;
    return d = e.call(this, t) || this, d.name = "CssSyntaxError", d.reason = t, c && (d.file = c), s && (d.source = s), f && (d.plugin = f), typeof r < "u" && typeof o < "u" && (typeof r == "number" ? (d.line = r, d.column = o) : (d.line = r.line, d.column = r.column, d.endLine = o.line, d.endColumn = o.column)), d.setMessage(), Error.captureStackTrace && Error.captureStackTrace(d, n), d;
  }
  var i = n.prototype;
  return i.setMessage = function() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }, i.showSourceCode = function(r) {
    var o = this;
    if (!this.source) return "";
    var s = this.source;
    r == null && (r = Ep.isColorSupported), Ap && r && (s = Ap(s));
    var c = s.split(/\r?\n/), f = Math.max(this.line - 3, 0), d = Math.min(this.line + 2, c.length), p = String(d).length, g, m;
    if (r) {
      var S = Ep.createColors(!0), x = S.bold, I = S.gray, b = S.red;
      g = function(L) {
        return x(b(L));
      }, m = function(L) {
        return I(L);
      };
    } else
      g = m = function(L) {
        return L;
      };
    return c.slice(f, d).map(function(L, $) {
      var W = f + 1 + $, V = " " + (" " + W).slice(-p) + " | ";
      if (W === o.line) {
        var Q = m(V.replace(/\d/g, " ")) + L.slice(0, o.column - 1).replace(/[^\t]/g, " ");
        return g(">") + m(V) + L + `
 ` + Q + g("^");
      }
      return " " + m(V) + L;
    }).join(`
`);
  }, i.toString = function() {
    var r = this.showSourceCode();
    return r && (r = `

` + r + `
`), this.name + ": " + this.message + r;
  }, n;
}(al(Error)), wd = gf;
gf.default = gf;
var Mi = {};
Mi.isClean = Symbol("isClean");
Mi.my = Symbol("my");
var kp = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function xE(e) {
  return e[0].toUpperCase() + e.slice(1);
}
var mf = /* @__PURE__ */ function() {
  function e(i) {
    this.builder = i;
  }
  var n = e.prototype;
  return n.atrule = function(t, r) {
    var o = "@" + t.name, s = t.params ? this.rawValue(t, "params") : "";
    if (typeof t.raws.afterName < "u" ? o += t.raws.afterName : s && (o += " "), t.nodes)
      this.block(t, o + s);
    else {
      var c = (t.raws.between || "") + (r ? ";" : "");
      this.builder(o + s + c, t);
    }
  }, n.beforeAfter = function(t, r) {
    var o;
    t.type === "decl" ? o = this.raw(t, null, "beforeDecl") : t.type === "comment" ? o = this.raw(t, null, "beforeComment") : r === "before" ? o = this.raw(t, null, "beforeRule") : o = this.raw(t, null, "beforeClose");
    for (var s = t.parent, c = 0; s && s.type !== "root"; )
      c += 1, s = s.parent;
    if (o.includes(`
`)) {
      var f = this.raw(t, null, "indent");
      if (f.length)
        for (var d = 0; d < c; d++) o += f;
    }
    return o;
  }, n.block = function(t, r) {
    var o = this.raw(t, "between", "beforeOpen");
    this.builder(r + o + "{", t, "start");
    var s;
    t.nodes && t.nodes.length ? (this.body(t), s = this.raw(t, "after")) : s = this.raw(t, "after", "emptyBody"), s && this.builder(s), this.builder("}", t, "end");
  }, n.body = function(t) {
    for (var r = t.nodes.length - 1; r > 0 && t.nodes[r].type === "comment"; )
      r -= 1;
    for (var o = this.raw(t, "semicolon"), s = 0; s < t.nodes.length; s++) {
      var c = t.nodes[s], f = this.raw(c, "before");
      f && this.builder(f), this.stringify(c, r !== s || o);
    }
  }, n.comment = function(t) {
    var r = this.raw(t, "left", "commentLeft"), o = this.raw(t, "right", "commentRight");
    this.builder("/*" + r + t.text + o + "*/", t);
  }, n.decl = function(t, r) {
    var o = this.raw(t, "between", "colon"), s = t.prop + o + this.rawValue(t, "value");
    t.important && (s += t.raws.important || " !important"), r && (s += ";"), this.builder(s, t);
  }, n.document = function(t) {
    this.body(t);
  }, n.raw = function(t, r, o) {
    var s;
    if (o || (o = r), r && (s = t.raws[r], typeof s < "u"))
      return s;
    var c = t.parent;
    if (o === "before" && (!c || c.type === "root" && c.first === t || c && c.type === "document"))
      return "";
    if (!c) return kp[o];
    var f = t.root();
    if (f.rawCache || (f.rawCache = {}), typeof f.rawCache[o] < "u")
      return f.rawCache[o];
    if (o === "before" || o === "after")
      return this.beforeAfter(t, o);
    var d = "raw" + xE(o);
    return this[d] ? s = this[d](f, t) : f.walk(function(p) {
      if (s = p.raws[r], typeof s < "u") return !1;
    }), typeof s > "u" && (s = kp[o]), f.rawCache[o] = s, s;
  }, n.rawBeforeClose = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && o.nodes.length > 0 && typeof o.raws.after < "u")
        return r = o.raws.after, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }, n.rawBeforeComment = function(t, r) {
    var o;
    return t.walkComments(function(s) {
      if (typeof s.raws.before < "u")
        return o = s.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), !1;
    }), typeof o > "u" ? o = this.raw(r, null, "beforeDecl") : o && (o = o.replace(/\S/g, "")), o;
  }, n.rawBeforeDecl = function(t, r) {
    var o;
    return t.walkDecls(function(s) {
      if (typeof s.raws.before < "u")
        return o = s.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), !1;
    }), typeof o > "u" ? o = this.raw(r, null, "beforeRule") : o && (o = o.replace(/\S/g, "")), o;
  }, n.rawBeforeOpen = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.type !== "decl" && (r = o.raws.between, typeof r < "u"))
        return !1;
    }), r;
  }, n.rawBeforeRule = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && (o.parent !== t || t.first !== o) && typeof o.raws.before < "u")
        return r = o.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }, n.rawColon = function(t) {
    var r;
    return t.walkDecls(function(o) {
      if (typeof o.raws.between < "u")
        return r = o.raws.between.replace(/[^\s:]/g, ""), !1;
    }), r;
  }, n.rawEmptyBody = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && o.nodes.length === 0 && (r = o.raws.after, typeof r < "u"))
        return !1;
    }), r;
  }, n.rawIndent = function(t) {
    if (t.raws.indent) return t.raws.indent;
    var r;
    return t.walk(function(o) {
      var s = o.parent;
      if (s && s !== t && s.parent && s.parent === t && typeof o.raws.before < "u") {
        var c = o.raws.before.split(`
`);
        return r = c[c.length - 1], r = r.replace(/\S/g, ""), !1;
      }
    }), r;
  }, n.rawSemicolon = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && o.nodes.length && o.last.type === "decl" && (r = o.raws.semicolon, typeof r < "u"))
        return !1;
    }), r;
  }, n.rawValue = function(t, r) {
    var o = t[r], s = t.raws[r];
    return s && s.value === o ? s.raw : o;
  }, n.root = function(t) {
    this.body(t), t.raws.after && this.builder(t.raws.after);
  }, n.rule = function(t) {
    this.block(t, this.rawValue(t, "selector")), t.raws.ownSemicolon && this.builder(t.raws.ownSemicolon, t, "end");
  }, n.stringify = function(t, r) {
    if (!this[t.type])
      throw new Error("Unknown AST node type " + t.type + ". Maybe you need to change PostCSS stringifier.");
    this[t.type](t, r);
  }, e;
}(), Mg = mf;
mf.default = mf;
var bE = Mg;
function yf(e, n) {
  var i = new bE(n);
  i.stringify(e);
}
var Ll = yf;
yf.default = yf;
var Sc = Mi.isClean, wE = Mi.my, _E = wd, CE = Mg, SE = Ll;
function xf(e, n) {
  var i = new e.constructor();
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && t !== "proxyCache") {
      var r = e[t], o = typeof r > "u" ? "undefined" : lt(r);
      t === "parent" && o === "object" ? n && (i[t] = n) : t === "source" ? i[t] = r : Array.isArray(r) ? i[t] = r.map(function(s) {
        return xf(s, i);
      }) : (o === "object" && r !== null && (r = xf(r)), i[t] = r);
    }
  return i;
}
var bf = /* @__PURE__ */ function() {
  function e(i) {
    i === void 0 && (i = {}), this.raws = {}, this[Sc] = !1, this[wE] = !0;
    for (var t in i)
      if (t === "nodes") {
        this.nodes = [];
        for (var r = Ae(i[t]), o; !(o = r()).done; ) {
          var s = o.value;
          typeof s.clone == "function" ? this.append(s.clone()) : this.append(s);
        }
      } else
        this[t] = i[t];
  }
  var n = e.prototype;
  return n.addToError = function(t) {
    if (t.postcssNode = this, t.stack && this.source && /\n\s{4}at /.test(t.stack)) {
      var r = this.source;
      t.stack = t.stack.replace(/\n\s{4}at /, "$&" + r.input.from + ":" + r.start.line + ":" + r.start.column + "$&");
    }
    return t;
  }, n.after = function(t) {
    return this.parent.insertAfter(this, t), this;
  }, n.assign = function(t) {
    t === void 0 && (t = {});
    for (var r in t)
      this[r] = t[r];
    return this;
  }, n.before = function(t) {
    return this.parent.insertBefore(this, t), this;
  }, n.cleanRaws = function(t) {
    delete this.raws.before, delete this.raws.after, t || delete this.raws.between;
  }, n.clone = function(t) {
    t === void 0 && (t = {});
    var r = xf(this);
    for (var o in t)
      r[o] = t[o];
    return r;
  }, n.cloneAfter = function(t) {
    t === void 0 && (t = {});
    var r = this.clone(t);
    return this.parent.insertAfter(this, r), r;
  }, n.cloneBefore = function(t) {
    t === void 0 && (t = {});
    var r = this.clone(t);
    return this.parent.insertBefore(this, r), r;
  }, n.error = function(t, r) {
    if (r === void 0 && (r = {}), this.source) {
      var o = this.rangeBy(r), s = o.end, c = o.start;
      return this.source.input.error(t, {
        column: c.column,
        line: c.line
      }, {
        column: s.column,
        line: s.line
      }, r);
    }
    return new _E(t);
  }, n.getProxyProcessor = function() {
    return {
      get: function(r, o) {
        return o === "proxyOf" ? r : o === "root" ? function() {
          return r.root().toProxy();
        } : r[o];
      },
      set: function(r, o, s) {
        return r[o] === s || (r[o] = s, (o === "prop" || o === "value" || o === "name" || o === "params" || o === "important" || /* c8 ignore next */
        o === "text") && r.markDirty()), !0;
      }
    };
  }, n.markDirty = function() {
    if (this[Sc]) {
      this[Sc] = !1;
      for (var t = this; t = t.parent; )
        t[Sc] = !1;
    }
  }, n.next = function() {
    if (this.parent) {
      var t = this.parent.index(this);
      return this.parent.nodes[t + 1];
    }
  }, n.positionBy = function(t, r) {
    var o = this.source.start;
    if (t.index)
      o = this.positionInside(t.index, r);
    else if (t.word) {
      r = this.toString();
      var s = r.indexOf(t.word);
      s !== -1 && (o = this.positionInside(s, r));
    }
    return o;
  }, n.positionInside = function(t, r) {
    for (var o = r || this.toString(), s = this.source.start.column, c = this.source.start.line, f = 0; f < t; f++)
      o[f] === `
` ? (s = 1, c += 1) : s += 1;
    return {
      column: s,
      line: c
    };
  }, n.prev = function() {
    if (this.parent) {
      var t = this.parent.index(this);
      return this.parent.nodes[t - 1];
    }
  }, n.rangeBy = function(t) {
    var r = {
      column: this.source.start.column,
      line: this.source.start.line
    }, o = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: r.column + 1,
      line: r.line
    };
    if (t.word) {
      var s = this.toString(), c = s.indexOf(t.word);
      c !== -1 && (r = this.positionInside(c, s), o = this.positionInside(c + t.word.length, s));
    } else
      t.start ? r = {
        column: t.start.column,
        line: t.start.line
      } : t.index && (r = this.positionInside(t.index)), t.end ? o = {
        column: t.end.column,
        line: t.end.line
      } : typeof t.endIndex == "number" ? o = this.positionInside(t.endIndex) : t.index && (o = this.positionInside(t.index + 1));
    return (o.line < r.line || o.line === r.line && o.column <= r.column) && (o = {
      column: r.column + 1,
      line: r.line
    }), {
      end: o,
      start: r
    };
  }, n.raw = function(t, r) {
    var o = new CE();
    return o.raw(this, t, r);
  }, n.remove = function() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }, n.replaceWith = function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    if (this.parent) {
      for (var s = this, c = !1, f = Ae(r), d; !(d = f()).done; ) {
        var p = d.value;
        p === this ? c = !0 : c ? (this.parent.insertAfter(s, p), s = p) : this.parent.insertBefore(s, p);
      }
      c || this.remove();
    }
    return this;
  }, n.root = function() {
    for (var t = this; t.parent && t.parent.type !== "document"; )
      t = t.parent;
    return t;
  }, n.toJSON = function(t, r) {
    var o = {}, s = r == null;
    r = r || /* @__PURE__ */ new Map();
    var c = 0;
    for (var f in this)
      if (Object.prototype.hasOwnProperty.call(this, f) && !(f === "parent" || f === "proxyCache")) {
        var d = this[f];
        if (Array.isArray(d))
          o[f] = d.map(function(g) {
            return (typeof g > "u" ? "undefined" : lt(g)) === "object" && g.toJSON ? g.toJSON(null, r) : g;
          });
        else if ((typeof d > "u" ? "undefined" : lt(d)) === "object" && d.toJSON)
          o[f] = d.toJSON(null, r);
        else if (f === "source") {
          var p = r.get(d.input);
          p == null && (p = c, r.set(d.input, c), c++), o[f] = {
            end: d.end,
            inputId: p,
            start: d.start
          };
        } else
          o[f] = d;
      }
    return s && (o.inputs = [].concat(r.keys()).map(function(g) {
      return g.toJSON();
    })), o;
  }, n.toProxy = function() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }, n.toString = function(t) {
    t === void 0 && (t = SE), t.stringify && (t = t.stringify);
    var r = "";
    return t(this, function(o) {
      r += o;
    }), r;
  }, n.warn = function(t, r, o) {
    var s = {
      node: this
    };
    for (var c in o) s[c] = o[c];
    return t.warn(r, s);
  }, Br(e, [
    {
      key: "proxyOf",
      get: function() {
        return this;
      }
    }
  ]), e;
}(), Ul = bf;
bf.default = bf;
var EE = Ul, wf = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(i) {
    var t;
    return i && typeof i.value < "u" && typeof i.value != "string" && (i = yt({}, i, {
      value: String(i.value)
    })), t = e.call(this, i) || this, t.type = "decl", t;
  }
  return Br(n, [
    {
      key: "variable",
      get: function() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
      }
    }
  ]), n;
}(EE), zl = wf;
wf.default = wf;
var AE = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", kE = function(e) {
  e === void 0 && (e = 21);
  for (var n = "", i = e; i--; )
    n += AE[Math.random() * 64 | 0];
  return n;
}, IE = {
  nanoid: kE
}, Ip = or.SourceMapConsumer, Op = or.SourceMapGenerator, OE = or.existsSync, DE = or.readFileSync, zu = or.dirname, RE = or.join;
function PE(e) {
  return Buffer ? Buffer.from(e, "base64").toString() : window.atob(e);
}
var _f = /* @__PURE__ */ function() {
  function e(i, t) {
    if (t.map !== !1) {
      this.loadAnnotation(i), this.inline = this.startWith(this.annotation, "data:");
      var r = t.map ? t.map.prev : void 0, o = this.loadMap(t.from, r);
      !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = zu(this.mapFile)), o && (this.text = o);
    }
  }
  var n = e.prototype;
  return n.consumer = function() {
    return this.consumerCache || (this.consumerCache = new Ip(this.text)), this.consumerCache;
  }, n.decodeInline = function(t) {
    var r = /^data:application\/json;charset=utf-?8;base64,/, o = /^data:application\/json;base64,/, s = /^data:application\/json;charset=utf-?8,/, c = /^data:application\/json,/;
    if (s.test(t) || c.test(t))
      return decodeURIComponent(t.substr(RegExp.lastMatch.length));
    if (r.test(t) || o.test(t))
      return PE(t.substr(RegExp.lastMatch.length));
    var f = t.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + f);
  }, n.getAnnotationURL = function(t) {
    return t.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }, n.isMap = function(t) {
    return (typeof t > "u" ? "undefined" : lt(t)) !== "object" ? !1 : typeof t.mappings == "string" || typeof t._mappings == "string" || Array.isArray(t.sections);
  }, n.loadAnnotation = function(t) {
    var r = t.match(/\/\*\s*# sourceMappingURL=/gm);
    if (r) {
      var o = t.lastIndexOf(r.pop()), s = t.indexOf("*/", o);
      o > -1 && s > -1 && (this.annotation = this.getAnnotationURL(t.substring(o, s)));
    }
  }, n.loadFile = function(t) {
    if (this.root = zu(t), OE(t))
      return this.mapFile = t, DE(t, "utf-8").toString().trim();
  }, n.loadMap = function(t, r) {
    if (r === !1) return !1;
    if (r) {
      if (typeof r == "string")
        return r;
      if (typeof r == "function") {
        var o = r(t);
        if (o) {
          var s = this.loadFile(o);
          if (!s)
            throw new Error("Unable to load previous source map: " + o.toString());
          return s;
        }
      } else {
        if (Xe(r, Ip))
          return Op.fromSourceMap(r).toString();
        if (Xe(r, Op))
          return r.toString();
        if (this.isMap(r))
          return JSON.stringify(r);
        throw new Error("Unsupported previous source map format: " + r.toString());
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        var c = this.annotation;
        return t && (c = RE(zu(t), c)), this.loadFile(c);
      }
    }
  }, n.startWith = function(t, r) {
    return t ? t.substr(0, r.length) === r : !1;
  }, n.withContent = function() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }, e;
}(), Fg = _f;
_f.default = _f;
var BE = or.SourceMapConsumer, TE = or.SourceMapGenerator, Dp = or.fileURLToPath, Ec = or.pathToFileURL, Cf = or.isAbsolute, Sf = or.resolve, ME = IE.nanoid, ju = or, Rp = wd, FE = Fg, $u = Symbol("fromOffsetCache"), NE = !!(BE && TE), Pp = !!(Sf && Cf), ul = /* @__PURE__ */ function() {
  function e(i, t) {
    if (t === void 0 && (t = {}), i === null || typeof i > "u" || (typeof i > "u" ? "undefined" : lt(i)) === "object" && !i.toString)
      throw new Error("PostCSS received " + i + " instead of CSS string");
    if (this.css = i.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!Pp || /^\w+:\/\//.test(t.from) || Cf(t.from) ? this.file = t.from : this.file = Sf(t.from)), Pp && NE) {
      var r = new FE(this.css, t);
      if (r.text) {
        this.map = r;
        var o = r.consumer().file;
        !this.file && o && (this.file = this.mapResolve(o));
      }
    }
    this.file || (this.id = "<input css " + ME(6) + ">"), this.map && (this.map.file = this.from);
  }
  var n = e.prototype;
  return n.error = function(t, r, o, s) {
    s === void 0 && (s = {});
    var c, f, d;
    if (r && (typeof r > "u" ? "undefined" : lt(r)) === "object") {
      var p = r, g = o;
      if (typeof p.offset == "number") {
        var m = this.fromOffset(p.offset);
        r = m.line, o = m.col;
      } else
        r = p.line, o = p.column;
      if (typeof g.offset == "number") {
        var S = this.fromOffset(g.offset);
        f = S.line, d = S.col;
      } else
        f = g.line, d = g.column;
    } else if (!o) {
      var x = this.fromOffset(r);
      r = x.line, o = x.col;
    }
    var I = this.origin(r, o, f, d);
    return I ? c = new Rp(t, I.endLine === void 0 ? I.line : {
      column: I.column,
      line: I.line
    }, I.endLine === void 0 ? I.column : {
      column: I.endColumn,
      line: I.endLine
    }, I.source, I.file, s.plugin) : c = new Rp(t, f === void 0 ? r : {
      column: o,
      line: r
    }, f === void 0 ? o : {
      column: d,
      line: f
    }, this.css, this.file, s.plugin), c.input = {
      column: o,
      endColumn: d,
      endLine: f,
      line: r,
      source: this.css
    }, this.file && (Ec && (c.input.url = Ec(this.file).toString()), c.input.file = this.file), c;
  }, n.fromOffset = function(t) {
    var r, o;
    if (this[$u])
      o = this[$u];
    else {
      var s = this.css.split(`
`);
      o = new Array(s.length);
      for (var c = 0, f = 0, d = s.length; f < d; f++)
        o[f] = c, c += s[f].length + 1;
      this[$u] = o;
    }
    r = o[o.length - 1];
    var p = 0;
    if (t >= r)
      p = o.length - 1;
    else
      for (var g = o.length - 2, m; p < g; )
        if (m = p + (g - p >> 1), t < o[m])
          g = m - 1;
        else if (t >= o[m + 1])
          p = m + 1;
        else {
          p = m;
          break;
        }
    return {
      col: t - o[p] + 1,
      line: p + 1
    };
  }, n.mapResolve = function(t) {
    return /^\w+:\/\//.test(t) ? t : Sf(this.map.consumer().sourceRoot || this.map.root || ".", t);
  }, n.origin = function(t, r, o, s) {
    if (!this.map) return !1;
    var c = this.map.consumer(), f = c.originalPositionFor({
      column: r,
      line: t
    });
    if (!f.source) return !1;
    var d;
    typeof o == "number" && (d = c.originalPositionFor({
      column: s,
      line: o
    }));
    var p;
    Cf(f.source) ? p = Ec(f.source) : p = new URL(f.source, this.map.consumer().sourceRoot || Ec(this.map.mapFile));
    var g = {
      column: f.column,
      endColumn: d && d.column,
      endLine: d && d.line,
      line: f.line,
      url: p.toString()
    };
    if (p.protocol === "file:")
      if (Dp)
        g.file = Dp(p);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    var m = c.sourceContentFor(f.source);
    return m && (g.source = m), g;
  }, n.toJSON = function() {
    for (var t = {}, r = 0, o = [
      "hasBOM",
      "css",
      "file",
      "id"
    ]; r < o.length; r++) {
      var s = o[r];
      this[s] != null && (t[s] = this[s]);
    }
    return this.map && (t.map = yt({}, this.map), t.map.consumerCache && (t.map.consumerCache = void 0)), t;
  }, Br(e, [
    {
      key: "from",
      get: function() {
        return this.file || this.id;
      }
    }
  ]), e;
}(), jl = ul;
ul.default = ul;
ju && ju.registerInput && ju.registerInput(ul);
var Ng = or.SourceMapConsumer, Qc = or.SourceMapGenerator, Jc = or.dirname, Lg = or.relative, Ug = or.resolve, zg = or.sep, Bp = or.pathToFileURL, LE = jl, UE = !!(Ng && Qc), zE = !!(Jc && Ug && Lg && zg), jE = /* @__PURE__ */ function() {
  function e(i, t, r, o) {
    this.stringify = i, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = o, this.originalCSS = o, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  var n = e.prototype;
  return n.addAnnotation = function() {
    var t;
    this.isInline() ? t = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? t = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? t = this.mapOpts.annotation(this.opts.to, this.root) : t = this.outputFile() + ".map";
    var r = `
`;
    this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + t + " */";
  }, n.applyPrevMaps = function() {
    for (var t = Ae(this.previous()), r; !(r = t()).done; ) {
      var o = r.value, s = this.toUrl(this.path(o.file)), c = o.root || Jc(o.file), f = void 0;
      this.mapOpts.sourcesContent === !1 ? (f = new Ng(o.text), f.sourcesContent && (f.sourcesContent = null)) : f = o.consumer(), this.map.applySourceMap(f, s, this.toUrl(this.path(c)));
    }
  }, n.clearAnnotation = function() {
    if (this.mapOpts.annotation !== !1)
      if (this.root)
        for (var t, r = this.root.nodes.length - 1; r >= 0; r--)
          t = this.root.nodes[r], t.type === "comment" && t.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(r);
      else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
  }, n.generate = function() {
    if (this.clearAnnotation(), zE && UE && this.isMap())
      return this.generateMap();
    var t = "";
    return this.stringify(this.root, function(r) {
      t += r;
    }), [
      t
    ];
  }, n.generateMap = function() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      var t = this.previous()[0].consumer();
      t.file = this.outputFile(), this.map = Qc.fromSourceMap(t, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new Qc({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: {
          column: 0,
          line: 1
        },
        original: {
          column: 0,
          line: 1
        },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [
      this.css
    ] : [
      this.css,
      this.map
    ];
  }, n.generateString = function() {
    var t = this;
    this.css = "", this.map = new Qc({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    var r = 1, o = 1, s = "<no source>", c = {
      generated: {
        column: 0,
        line: 0
      },
      original: {
        column: 0,
        line: 0
      },
      source: ""
    }, f, d;
    this.stringify(this.root, function(p, g, m) {
      if (t.css += p, g && m !== "end" && (c.generated.line = r, c.generated.column = o - 1, g.source && g.source.start ? (c.source = t.sourcePath(g), c.original.line = g.source.start.line, c.original.column = g.source.start.column - 1, t.map.addMapping(c)) : (c.source = s, c.original.line = 1, c.original.column = 0, t.map.addMapping(c))), f = p.match(/\n/g), f ? (r += f.length, d = p.lastIndexOf(`
`), o = p.length - d) : o += p.length, g && m !== "start") {
        var S = g.parent || {
          raws: {}
        }, x = g.type === "decl" || g.type === "atrule" && !g.nodes;
        (!x || g !== S.last || S.raws.semicolon) && (g.source && g.source.end ? (c.source = t.sourcePath(g), c.original.line = g.source.end.line, c.original.column = g.source.end.column - 1, c.generated.line = r, c.generated.column = o - 2, t.map.addMapping(c)) : (c.source = s, c.original.line = 1, c.original.column = 0, c.generated.line = r, c.generated.column = o - 1, t.map.addMapping(c)));
      }
    });
  }, n.isAnnotation = function() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(function(t) {
      return t.annotation;
    }) : !0;
  }, n.isInline = function() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    var t = this.mapOpts.annotation;
    return typeof t < "u" && t !== !0 ? !1 : this.previous().length ? this.previous().some(function(r) {
      return r.inline;
    }) : !0;
  }, n.isMap = function() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }, n.isSourcesContent = function() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(function(t) {
      return t.withContent();
    }) : !0;
  }, n.outputFile = function() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }, n.path = function(t) {
    if (this.mapOpts.absolute || t.charCodeAt(0) === 60 || /^\w+:\/\//.test(t)) return t;
    var r = this.memoizedPaths.get(t);
    if (r) return r;
    var o = this.opts.to ? Jc(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (o = Jc(Ug(o, this.mapOpts.annotation)));
    var s = Lg(o, t);
    return this.memoizedPaths.set(t, s), s;
  }, n.previous = function() {
    var t = this;
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk(function(o) {
          if (o.source && o.source.input.map) {
            var s = o.source.input.map;
            t.previousMaps.includes(s) || t.previousMaps.push(s);
          }
        });
      else {
        var r = new LE(this.originalCSS, this.opts);
        r.map && this.previousMaps.push(r.map);
      }
    return this.previousMaps;
  }, n.setSourcesContent = function() {
    var t = this, r = {};
    if (this.root)
      this.root.walk(function(s) {
        if (s.source) {
          var c = s.source.input.from;
          if (c && !r[c]) {
            r[c] = !0;
            var f = t.usesFileUrls ? t.toFileUrl(c) : t.toUrl(t.path(c));
            t.map.setSourceContent(f, s.source.input.css);
          }
        }
      });
    else if (this.css) {
      var o = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(o, this.css);
    }
  }, n.sourcePath = function(t) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(t.source.input.from) : this.toUrl(this.path(t.source.input.from));
  }, n.toBase64 = function(t) {
    return Buffer ? Buffer.from(t).toString("base64") : window.btoa(unescape(encodeURIComponent(t)));
  }, n.toFileUrl = function(t) {
    var r = this.memoizedFileURLs.get(t);
    if (r) return r;
    if (Bp) {
      var o = Bp(t).toString();
      return this.memoizedFileURLs.set(t, o), o;
    } else
      throw new Error("`map.absolute` option is not available in this PostCSS build");
  }, n.toUrl = function(t) {
    var r = this.memoizedURLs.get(t);
    if (r) return r;
    zg === "\\" && (t = t.replace(/\\/g, "/"));
    var o = encodeURI(t).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(t, o), o;
  }, e;
}(), jg = jE, $E = Ul, Ef = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(i) {
    var t;
    return t = e.call(this, i) || this, t.type = "comment", t;
  }
  return n;
}($E), $l = Ef;
Ef.default = Ef;
var $g = Mi.isClean, Wg = Mi.my, qg = zl, Vg = $l, WE = Ul, Hg, _d, Cd, Gg;
function Kg(e) {
  return e.map(function(n) {
    return n.nodes && (n.nodes = Kg(n.nodes)), delete n.source, n;
  });
}
function Yg(e) {
  if (e[$g] = !1, e.proxyOf.nodes)
    for (var n = Ae(e.proxyOf.nodes), i; !(i = n()).done; ) {
      var t = i.value;
      Yg(t);
    }
}
var xi = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n() {
    return e.apply(this, arguments) || this;
  }
  var i = n.prototype;
  return i.append = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    for (var c = Ae(o), f; !(f = c()).done; )
      for (var d = f.value, p = this.normalize(d, this.last), g = Ae(p), m; !(m = g()).done; ) {
        var S = m.value;
        this.proxyOf.nodes.push(S);
      }
    return this.markDirty(), this;
  }, i.cleanRaws = function(r) {
    if (e.prototype.cleanRaws.call(this, r), this.nodes)
      for (var o = Ae(this.nodes), s; !(s = o()).done; ) {
        var c = s.value;
        c.cleanRaws(r);
      }
  }, i.each = function(r) {
    if (this.proxyOf.nodes) {
      for (var o = this.getIterator(), s, c; this.indexes[o] < this.proxyOf.nodes.length && (s = this.indexes[o], c = r(this.proxyOf.nodes[s], s), c !== !1); )
        this.indexes[o] += 1;
      return delete this.indexes[o], c;
    }
  }, i.every = function(r) {
    return this.nodes.every(r);
  }, i.getIterator = function() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    var r = this.lastEach;
    return this.indexes[r] = 0, r;
  }, i.getProxyProcessor = function() {
    return {
      get: function(o, s) {
        return s === "proxyOf" ? o : o[s] ? s === "each" || typeof s == "string" && s.startsWith("walk") ? function() {
          for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
            f[d] = arguments[d];
          var p;
          return (p = o)[s].apply(p, [].concat(f.map(function(g) {
            return typeof g == "function" ? function(m, S) {
              return g(m.toProxy(), S);
            } : g;
          })));
        } : s === "every" || s === "some" ? function(c) {
          return o[s](function(f) {
            for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
              p[g - 1] = arguments[g];
            return c.apply(void 0, [].concat([
              f.toProxy()
            ], p));
          });
        } : s === "root" ? function() {
          return o.root().toProxy();
        } : s === "nodes" ? o.nodes.map(function(c) {
          return c.toProxy();
        }) : s === "first" || s === "last" ? o[s].toProxy() : o[s] : o[s];
      },
      set: function(o, s, c) {
        return o[s] === c || (o[s] = c, (s === "name" || s === "params" || s === "selector") && o.markDirty()), !0;
      }
    };
  }, i.index = function(r) {
    return typeof r == "number" ? r : (r.proxyOf && (r = r.proxyOf), this.proxyOf.nodes.indexOf(r));
  }, i.insertAfter = function(r, o) {
    var s = this.index(r), c = this.normalize(o, this.proxyOf.nodes[s]).reverse();
    s = this.index(r);
    for (var f = Ae(c), d; !(d = f()).done; ) {
      var p = d.value;
      this.proxyOf.nodes.splice(s + 1, 0, p);
    }
    var g;
    for (var m in this.indexes)
      g = this.indexes[m], s < g && (this.indexes[m] = g + c.length);
    return this.markDirty(), this;
  }, i.insertBefore = function(r, o) {
    var s = this.index(r), c = s === 0 ? "prepend" : !1, f = this.normalize(o, this.proxyOf.nodes[s], c).reverse();
    s = this.index(r);
    for (var d = Ae(f), p; !(p = d()).done; ) {
      var g = p.value;
      this.proxyOf.nodes.splice(s, 0, g);
    }
    var m;
    for (var S in this.indexes)
      m = this.indexes[S], s <= m && (this.indexes[S] = m + f.length);
    return this.markDirty(), this;
  }, i.normalize = function(r, o) {
    var s = this;
    if (typeof r == "string")
      r = Kg(Hg(r).nodes);
    else if (typeof r > "u")
      r = [];
    else if (Array.isArray(r)) {
      r = r.slice(0);
      for (var c = Ae(r), f; !(f = c()).done; ) {
        var d = f.value;
        d.parent && d.parent.removeChild(d, "ignore");
      }
    } else if (r.type === "root" && this.type !== "document") {
      r = r.nodes.slice(0);
      for (var p = Ae(r), g; !(g = p()).done; ) {
        var m = g.value;
        m.parent && m.parent.removeChild(m, "ignore");
      }
    } else if (r.type)
      r = [
        r
      ];
    else if (r.prop) {
      if (typeof r.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof r.value != "string" && (r.value = String(r.value)), r = [
        new qg(r)
      ];
    } else if (r.selector)
      r = [
        new _d(r)
      ];
    else if (r.name)
      r = [
        new Cd(r)
      ];
    else if (r.text)
      r = [
        new Vg(r)
      ];
    else
      throw new Error("Unknown node type in node creation");
    var S = r.map(function(x) {
      return x[Wg] || n.rebuild(x), x = x.proxyOf, x.parent && x.parent.removeChild(x), x[$g] && Yg(x), typeof x.raws.before > "u" && o && typeof o.raws.before < "u" && (x.raws.before = o.raws.before.replace(/\S/g, "")), x.parent = s.proxyOf, x;
    });
    return S;
  }, i.prepend = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    o = o.reverse();
    for (var c = Ae(o), f; !(f = c()).done; ) {
      for (var d = f.value, p = this.normalize(d, this.first, "prepend").reverse(), g = Ae(p), m; !(m = g()).done; ) {
        var S = m.value;
        this.proxyOf.nodes.unshift(S);
      }
      for (var x in this.indexes)
        this.indexes[x] = this.indexes[x] + p.length;
    }
    return this.markDirty(), this;
  }, i.push = function(r) {
    return r.parent = this, this.proxyOf.nodes.push(r), this;
  }, i.removeAll = function() {
    for (var r = Ae(this.proxyOf.nodes), o; !(o = r()).done; ) {
      var s = o.value;
      s.parent = void 0;
    }
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }, i.removeChild = function(r) {
    r = this.index(r), this.proxyOf.nodes[r].parent = void 0, this.proxyOf.nodes.splice(r, 1);
    var o;
    for (var s in this.indexes)
      o = this.indexes[s], o >= r && (this.indexes[s] = o - 1);
    return this.markDirty(), this;
  }, i.replaceValues = function(r, o, s) {
    return s || (s = o, o = {}), this.walkDecls(function(c) {
      o.props && !o.props.includes(c.prop) || o.fast && !c.value.includes(o.fast) || (c.value = c.value.replace(r, s));
    }), this.markDirty(), this;
  }, i.some = function(r) {
    return this.nodes.some(r);
  }, i.walk = function(r) {
    return this.each(function(o, s) {
      var c;
      try {
        c = r(o, s);
      } catch (f) {
        throw o.addToError(f);
      }
      return c !== !1 && o.walk && (c = o.walk(r)), c;
    });
  }, i.walkAtRules = function(r, o) {
    return o ? Xe(r, RegExp) ? this.walk(function(s, c) {
      if (s.type === "atrule" && r.test(s.name))
        return o(s, c);
    }) : this.walk(function(s, c) {
      if (s.type === "atrule" && s.name === r)
        return o(s, c);
    }) : (o = r, this.walk(function(s, c) {
      if (s.type === "atrule")
        return o(s, c);
    }));
  }, i.walkComments = function(r) {
    return this.walk(function(o, s) {
      if (o.type === "comment")
        return r(o, s);
    });
  }, i.walkDecls = function(r, o) {
    return o ? Xe(r, RegExp) ? this.walk(function(s, c) {
      if (s.type === "decl" && r.test(s.prop))
        return o(s, c);
    }) : this.walk(function(s, c) {
      if (s.type === "decl" && s.prop === r)
        return o(s, c);
    }) : (o = r, this.walk(function(s, c) {
      if (s.type === "decl")
        return o(s, c);
    }));
  }, i.walkRules = function(r, o) {
    return o ? Xe(r, RegExp) ? this.walk(function(s, c) {
      if (s.type === "rule" && r.test(s.selector))
        return o(s, c);
    }) : this.walk(function(s, c) {
      if (s.type === "rule" && s.selector === r)
        return o(s, c);
    }) : (o = r, this.walk(function(s, c) {
      if (s.type === "rule")
        return o(s, c);
    }));
  }, Br(n, [
    {
      key: "first",
      get: function() {
        if (this.proxyOf.nodes)
          return this.proxyOf.nodes[0];
      }
    },
    {
      key: "last",
      get: function() {
        if (this.proxyOf.nodes)
          return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
    }
  ]), n;
}(WE);
xi.registerParse = function(e) {
  Hg = e;
};
xi.registerRule = function(e) {
  _d = e;
};
xi.registerAtRule = function(e) {
  Cd = e;
};
xi.registerRoot = function(e) {
  Gg = e;
};
var Eo = xi;
xi.default = xi;
xi.rebuild = function(e) {
  e.type === "atrule" ? Object.setPrototypeOf(e, Cd.prototype) : e.type === "rule" ? Object.setPrototypeOf(e, _d.prototype) : e.type === "decl" ? Object.setPrototypeOf(e, qg.prototype) : e.type === "comment" ? Object.setPrototypeOf(e, Vg.prototype) : e.type === "root" && Object.setPrototypeOf(e, Gg.prototype), e[Wg] = !0, e.nodes && e.nodes.forEach(function(n) {
    xi.rebuild(n);
  });
};
var qE = Eo, Zg, Xg, da = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t) {
    var r;
    return r = e.call(this, yt({
      type: "document"
    }, t)) || this, r.nodes || (r.nodes = []), r;
  }
  var i = n.prototype;
  return i.toResult = function(r) {
    r === void 0 && (r = {});
    var o = new Zg(new Xg(), this, r);
    return o.stringify();
  }, n;
}(qE);
da.registerLazyResult = function(e) {
  Zg = e;
};
da.registerProcessor = function(e) {
  Xg = e;
};
var Sd = da;
da.default = da;
var Tp = {}, Qg = function(n) {
  Tp[n] || (Tp[n] = !0, typeof console < "u" && console.warn && console.warn(n));
}, Af = /* @__PURE__ */ function() {
  function e(i, t) {
    if (t === void 0 && (t = {}), this.type = "warning", this.text = i, t.node && t.node.source) {
      var r = t.node.rangeBy(t);
      this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
    }
    for (var o in t) this[o] = t[o];
  }
  var n = e.prototype;
  return n.toString = function() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }, e;
}(), Jg = Af;
Af.default = Af;
var VE = Jg, kf = /* @__PURE__ */ function() {
  function e(i, t, r) {
    this.processor = i, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0;
  }
  var n = e.prototype;
  return n.toString = function() {
    return this.css;
  }, n.warn = function(t, r) {
    r === void 0 && (r = {}), r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    var o = new VE(t, r);
    return this.messages.push(o), o;
  }, n.warnings = function() {
    return this.messages.filter(function(t) {
      return t.type === "warning";
    });
  }, Br(e, [
    {
      key: "content",
      get: function() {
        return this.css;
      }
    }
  ]), e;
}(), Ed = kf;
kf.default = kf;
var Wu = 39, Mp = 34, Ac = 92, Fp = 47, kc = 10, Ks = 32, Ic = 12, Oc = 9, Dc = 13, HE = 91, GE = 93, KE = 40, YE = 41, ZE = 123, XE = 125, QE = 59, JE = 42, eA = 58, tA = 64, Rc = /[\t\n\f\r "#'()/;[\\\]{}]/g, Pc = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, rA = /.[\r\n"'(/\\]/, Np = /[\da-f]/i, nA = function(n, i) {
  i === void 0 && (i = {});
  var t = n.css.valueOf(), r = i.ignoreErrors, o, s, c, f, d, p, g, m, S, x, I = t.length, b = 0, L = [], $ = [];
  function W() {
    return b;
  }
  function V(ge) {
    throw n.error("Unclosed " + ge, b);
  }
  function Q() {
    return $.length === 0 && b >= I;
  }
  function ie(ge) {
    if ($.length) return $.pop();
    if (!(b >= I)) {
      var Ie = ge ? ge.ignoreUnclosed : !1;
      switch (o = t.charCodeAt(b), o) {
        case kc:
        case Ks:
        case Oc:
        case Dc:
        case Ic: {
          s = b;
          do
            s += 1, o = t.charCodeAt(s);
          while (o === Ks || o === kc || o === Oc || o === Dc || o === Ic);
          x = [
            "space",
            t.slice(b, s)
          ], b = s - 1;
          break;
        }
        case HE:
        case GE:
        case ZE:
        case XE:
        case eA:
        case QE:
        case YE: {
          var $e = String.fromCharCode(o);
          x = [
            $e,
            $e,
            b
          ];
          break;
        }
        case KE: {
          if (m = L.length ? L.pop()[1] : "", S = t.charCodeAt(b + 1), m === "url" && S !== Wu && S !== Mp && S !== Ks && S !== kc && S !== Oc && S !== Ic && S !== Dc) {
            s = b;
            do {
              if (p = !1, s = t.indexOf(")", s + 1), s === -1)
                if (r || Ie) {
                  s = b;
                  break;
                } else
                  V("bracket");
              for (g = s; t.charCodeAt(g - 1) === Ac; )
                g -= 1, p = !p;
            } while (p);
            x = [
              "brackets",
              t.slice(b, s + 1),
              b,
              s
            ], b = s;
          } else
            s = t.indexOf(")", b + 1), f = t.slice(b, s + 1), s === -1 || rA.test(f) ? x = [
              "(",
              "(",
              b
            ] : (x = [
              "brackets",
              f,
              b,
              s
            ], b = s);
          break;
        }
        case Wu:
        case Mp: {
          c = o === Wu ? "'" : '"', s = b;
          do {
            if (p = !1, s = t.indexOf(c, s + 1), s === -1)
              if (r || Ie) {
                s = b + 1;
                break;
              } else
                V("string");
            for (g = s; t.charCodeAt(g - 1) === Ac; )
              g -= 1, p = !p;
          } while (p);
          x = [
            "string",
            t.slice(b, s + 1),
            b,
            s
          ], b = s;
          break;
        }
        case tA: {
          Rc.lastIndex = b + 1, Rc.test(t), Rc.lastIndex === 0 ? s = t.length - 1 : s = Rc.lastIndex - 2, x = [
            "at-word",
            t.slice(b, s + 1),
            b,
            s
          ], b = s;
          break;
        }
        case Ac: {
          for (s = b, d = !0; t.charCodeAt(s + 1) === Ac; )
            s += 1, d = !d;
          if (o = t.charCodeAt(s + 1), d && o !== Fp && o !== Ks && o !== kc && o !== Oc && o !== Dc && o !== Ic && (s += 1, Np.test(t.charAt(s)))) {
            for (; Np.test(t.charAt(s + 1)); )
              s += 1;
            t.charCodeAt(s + 1) === Ks && (s += 1);
          }
          x = [
            "word",
            t.slice(b, s + 1),
            b,
            s
          ], b = s;
          break;
        }
        default: {
          o === Fp && t.charCodeAt(b + 1) === JE ? (s = t.indexOf("*/", b + 2) + 1, s === 0 && (r || Ie ? s = t.length : V("comment")), x = [
            "comment",
            t.slice(b, s + 1),
            b,
            s
          ], b = s) : (Pc.lastIndex = b + 1, Pc.test(t), Pc.lastIndex === 0 ? s = t.length - 1 : s = Pc.lastIndex - 2, x = [
            "word",
            t.slice(b, s + 1),
            b,
            s
          ], L.push(x), b = s);
          break;
        }
      }
      return b++, x;
    }
  }
  function ye(ge) {
    $.push(ge);
  }
  return {
    back: ye,
    endOfFile: Q,
    nextToken: ie,
    position: W
  };
}, em = Eo, fl = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t) {
    var r;
    return r = e.call(this, t) || this, r.type = "atrule", r;
  }
  var i = n.prototype;
  return i.append = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    var c;
    return this.proxyOf.nodes || (this.nodes = []), (c = e.prototype.append).call.apply(c, [].concat([
      this
    ], o));
  }, i.prepend = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    var c;
    return this.proxyOf.nodes || (this.nodes = []), (c = e.prototype.prepend).call.apply(c, [].concat([
      this
    ], o));
  }, n;
}(em), Ad = fl;
fl.default = fl;
em.registerAtRule(fl);
var tm = Eo, rm, nm, Zo = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t) {
    var r;
    return r = e.call(this, t) || this, r.type = "root", r.nodes || (r.nodes = []), r;
  }
  var i = n.prototype;
  return i.normalize = function(r, o, s) {
    var c = e.prototype.normalize.call(this, r);
    if (o) {
      if (s === "prepend")
        this.nodes.length > 1 ? o.raws.before = this.nodes[1].raws.before : delete o.raws.before;
      else if (this.first !== o)
        for (var f = Ae(c), d; !(d = f()).done; ) {
          var p = d.value;
          p.raws.before = o.raws.before;
        }
    }
    return c;
  }, i.removeChild = function(r, o) {
    var s = this.index(r);
    return !o && s === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[s].raws.before), e.prototype.removeChild.call(this, r);
  }, i.toResult = function(r) {
    r === void 0 && (r = {});
    var o = new rm(new nm(), this, r);
    return o.stringify();
  }, n;
}(tm);
Zo.registerLazyResult = function(e) {
  rm = e;
};
Zo.registerProcessor = function(e) {
  nm = e;
};
var Aa = Zo;
Zo.default = Zo;
tm.registerRoot(Zo);
var ha = {
  comma: function(n) {
    return ha.split(n, [
      ","
    ], !0);
  },
  space: function(n) {
    var i = [
      " ",
      `
`,
      "	"
    ];
    return ha.split(n, i);
  },
  split: function(n, i, t) {
    for (var r = [], o = "", s = !1, c = 0, f = !1, d = "", p = !1, g = Ae(n), m; !(m = g()).done; ) {
      var S = m.value;
      p ? p = !1 : S === "\\" ? p = !0 : f ? S === d && (f = !1) : S === '"' || S === "'" ? (f = !0, d = S) : S === "(" ? c += 1 : S === ")" ? c > 0 && (c -= 1) : c === 0 && i.includes(S) && (s = !0), s ? (o !== "" && r.push(o.trim()), o = "", s = !1) : o += S;
    }
    return (t || o !== "") && r.push(o.trim()), r;
  }
}, im = ha;
ha.default = ha;
var om = Eo, iA = im, dl = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(i) {
    var t;
    return t = e.call(this, i) || this, t.type = "rule", t.nodes || (t.nodes = []), t;
  }
  return Br(n, [
    {
      key: "selectors",
      get: function() {
        return iA.comma(this.selector);
      },
      set: function(t) {
        var r = this.selector ? this.selector.match(/,\s*/) : null, o = r ? r[0] : "," + this.raw("between", "beforeOpen");
        this.selector = t.join(o);
      }
    }
  ]), n;
}(om), kd = dl;
dl.default = dl;
om.registerRule(dl);
var oA = zl, sA = nA, aA = $l, cA = Ad, lA = Aa, Lp = kd, Up = {
  empty: !0,
  space: !0
};
function uA(e) {
  for (var n = e.length - 1; n >= 0; n--) {
    var i = e[n], t = i[3] || i[2];
    if (t) return t;
  }
}
var fA = /* @__PURE__ */ function() {
  function e(i) {
    this.input = i, this.root = new lA(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
      input: i,
      start: {
        column: 1,
        line: 1,
        offset: 0
      }
    };
  }
  var n = e.prototype;
  return n.atrule = function(t) {
    var r = new cA();
    r.name = t[1].slice(1), r.name === "" && this.unnamedAtrule(r, t), this.init(r, t[2]);
    for (var o, s, c, f = !1, d = !1, p = [], g = []; !this.tokenizer.endOfFile(); ) {
      if (t = this.tokenizer.nextToken(), o = t[0], o === "(" || o === "[" ? g.push(o === "(" ? ")" : "]") : o === "{" && g.length > 0 ? g.push("}") : o === g[g.length - 1] && g.pop(), g.length === 0)
        if (o === ";") {
          r.source.end = this.getPosition(t[2]), r.source.end.offset++, this.semicolon = !0;
          break;
        } else if (o === "{") {
          d = !0;
          break;
        } else if (o === "}") {
          if (p.length > 0) {
            for (c = p.length - 1, s = p[c]; s && s[0] === "space"; )
              s = p[--c];
            s && (r.source.end = this.getPosition(s[3] || s[2]), r.source.end.offset++);
          }
          this.end(t);
          break;
        } else
          p.push(t);
      else
        p.push(t);
      if (this.tokenizer.endOfFile()) {
        f = !0;
        break;
      }
    }
    r.raws.between = this.spacesAndCommentsFromEnd(p), p.length ? (r.raws.afterName = this.spacesAndCommentsFromStart(p), this.raw(r, "params", p), f && (t = p[p.length - 1], r.source.end = this.getPosition(t[3] || t[2]), r.source.end.offset++, this.spaces = r.raws.between, r.raws.between = "")) : (r.raws.afterName = "", r.params = ""), d && (r.nodes = [], this.current = r);
  }, n.checkMissedSemicolon = function(t) {
    var r = this.colon(t);
    if (r !== !1) {
      for (var o = 0, s, c = r - 1; c >= 0 && (s = t[c], !(s[0] !== "space" && (o += 1, o === 2))); c--)
        ;
      throw this.input.error("Missed semicolon", s[0] === "word" ? s[3] + 1 : s[2]);
    }
  }, n.colon = function(t) {
    for (var r = 0, o, s, c, f = Ae(t.entries()), d; !(d = f()).done; ) {
      var p = d.value, g = p[0], m = p[1];
      if (o = m, s = o[0], s === "(" && (r += 1), s === ")" && (r -= 1), r === 0 && s === ":")
        if (!c)
          this.doubleColon(o);
        else {
          if (c[0] === "word" && c[1] === "progid")
            continue;
          return g;
        }
      c = o;
    }
    return !1;
  }, n.comment = function(t) {
    var r = new aA();
    this.init(r, t[2]), r.source.end = this.getPosition(t[3] || t[2]), r.source.end.offset++;
    var o = t[1].slice(2, -2);
    if (/^\s*$/.test(o))
      r.text = "", r.raws.left = o, r.raws.right = "";
    else {
      var s = o.match(/^(\s*)([^]*\S)(\s*)$/);
      r.text = s[2], r.raws.left = s[1], r.raws.right = s[3];
    }
  }, n.createTokenizer = function() {
    this.tokenizer = sA(this.input);
  }, n.decl = function(t, r) {
    var o = new oA();
    this.init(o, t[0][2]);
    var s = t[t.length - 1];
    for (s[0] === ";" && (this.semicolon = !0, t.pop()), o.source.end = this.getPosition(s[3] || s[2] || uA(t)), o.source.end.offset++; t[0][0] !== "word"; )
      t.length === 1 && this.unknownWord(t), o.raws.before += t.shift()[1];
    for (o.source.start = this.getPosition(t[0][2]), o.prop = ""; t.length; ) {
      var c = t[0][0];
      if (c === ":" || c === "space" || c === "comment")
        break;
      o.prop += t.shift()[1];
    }
    o.raws.between = "";
    for (var f; t.length; )
      if (f = t.shift(), f[0] === ":") {
        o.raws.between += f[1];
        break;
      } else
        f[0] === "word" && /\w/.test(f[1]) && this.unknownWord([
          f
        ]), o.raws.between += f[1];
    (o.prop[0] === "_" || o.prop[0] === "*") && (o.raws.before += o.prop[0], o.prop = o.prop.slice(1));
    for (var d = [], p; t.length && (p = t[0][0], !(p !== "space" && p !== "comment")); )
      d.push(t.shift());
    this.precheckMissedSemicolon(t);
    for (var g = t.length - 1; g >= 0; g--) {
      if (f = t[g], f[1].toLowerCase() === "!important") {
        o.important = !0;
        var m = this.stringFrom(t, g);
        m = this.spacesFromEnd(t) + m, m !== " !important" && (o.raws.important = m);
        break;
      } else if (f[1].toLowerCase() === "important") {
        for (var S = t.slice(0), x = "", I = g; I > 0; I--) {
          var b = S[I][0];
          if (x.trim().indexOf("!") === 0 && b !== "space")
            break;
          x = S.pop()[1] + x;
        }
        x.trim().indexOf("!") === 0 && (o.important = !0, o.raws.important = x, t = S);
      }
      if (f[0] !== "space" && f[0] !== "comment")
        break;
    }
    var L = t.some(function($) {
      return $[0] !== "space" && $[0] !== "comment";
    });
    L && (o.raws.between += d.map(function($) {
      return $[1];
    }).join(""), d = []), this.raw(o, "value", d.concat(t), r), o.value.includes(":") && !r && this.checkMissedSemicolon(t);
  }, n.doubleColon = function(t) {
    throw this.input.error("Double colon", {
      offset: t[2]
    }, {
      offset: t[2] + t[1].length
    });
  }, n.emptyRule = function(t) {
    var r = new Lp();
    this.init(r, t[2]), r.selector = "", r.raws.between = "", this.current = r;
  }, n.end = function(t) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(t[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(t);
  }, n.endFile = function() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }, n.freeSemicolon = function(t) {
    if (this.spaces += t[1], this.current.nodes) {
      var r = this.current.nodes[this.current.nodes.length - 1];
      r && r.type === "rule" && !r.raws.ownSemicolon && (r.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }, n.getPosition = function(t) {
    var r = this.input.fromOffset(t);
    return {
      column: r.col,
      line: r.line,
      offset: t
    };
  }, n.init = function(t, r) {
    this.current.push(t), t.source = {
      input: this.input,
      start: this.getPosition(r)
    }, t.raws.before = this.spaces, this.spaces = "", t.type !== "comment" && (this.semicolon = !1);
  }, n.other = function(t) {
    for (var r = !1, o = null, s = !1, c = null, f = [], d = t[1].startsWith("--"), p = [], g = t; g; ) {
      if (o = g[0], p.push(g), o === "(" || o === "[")
        c || (c = g), f.push(o === "(" ? ")" : "]");
      else if (d && s && o === "{")
        c || (c = g), f.push("}");
      else if (f.length === 0)
        if (o === ";")
          if (s) {
            this.decl(p, d);
            return;
          } else
            break;
        else if (o === "{") {
          this.rule(p);
          return;
        } else if (o === "}") {
          this.tokenizer.back(p.pop()), r = !0;
          break;
        } else o === ":" && (s = !0);
      else o === f[f.length - 1] && (f.pop(), f.length === 0 && (c = null));
      g = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (r = !0), f.length > 0 && this.unclosedBracket(c), r && s) {
      if (!d)
        for (; p.length && (g = p[p.length - 1][0], !(g !== "space" && g !== "comment")); )
          this.tokenizer.back(p.pop());
      this.decl(p, d);
    } else
      this.unknownWord(p);
  }, n.parse = function() {
    for (var t; !this.tokenizer.endOfFile(); )
      switch (t = this.tokenizer.nextToken(), t[0]) {
        case "space":
          this.spaces += t[1];
          break;
        case ";":
          this.freeSemicolon(t);
          break;
        case "}":
          this.end(t);
          break;
        case "comment":
          this.comment(t);
          break;
        case "at-word":
          this.atrule(t);
          break;
        case "{":
          this.emptyRule(t);
          break;
        default:
          this.other(t);
          break;
      }
    this.endFile();
  }, n.precheckMissedSemicolon = function() {
  }, n.raw = function(t, r, o, s) {
    for (var c, f, d = o.length, p = "", g = !0, m, S, x = 0; x < d; x += 1)
      c = o[x], f = c[0], f === "space" && x === d - 1 && !s ? g = !1 : f === "comment" ? (S = o[x - 1] ? o[x - 1][0] : "empty", m = o[x + 1] ? o[x + 1][0] : "empty", !Up[S] && !Up[m] ? p.slice(-1) === "," ? g = !1 : p += c[1] : g = !1) : p += c[1];
    if (!g) {
      var I = o.reduce(function(b, L) {
        return b + L[1];
      }, "");
      t.raws[r] = {
        raw: I,
        value: p
      };
    }
    t[r] = p;
  }, n.rule = function(t) {
    t.pop();
    var r = new Lp();
    this.init(r, t[0][2]), r.raws.between = this.spacesAndCommentsFromEnd(t), this.raw(r, "selector", t), this.current = r;
  }, n.spacesAndCommentsFromEnd = function(t) {
    for (var r, o = ""; t.length && (r = t[t.length - 1][0], !(r !== "space" && r !== "comment")); )
      o = t.pop()[1] + o;
    return o;
  }, n.spacesAndCommentsFromStart = function(t) {
    for (var r, o = ""; t.length && (r = t[0][0], !(r !== "space" && r !== "comment")); )
      o += t.shift()[1];
    return o;
  }, n.spacesFromEnd = function(t) {
    for (var r, o = ""; t.length && (r = t[t.length - 1][0], r === "space"); )
      o = t.pop()[1] + o;
    return o;
  }, n.stringFrom = function(t, r) {
    for (var o = "", s = r; s < t.length; s++)
      o += t[s][1];
    return t.splice(r, t.length - r), o;
  }, n.unclosedBlock = function() {
    var t = this.current.source.start;
    throw this.input.error("Unclosed block", t.line, t.column);
  }, n.unclosedBracket = function(t) {
    throw this.input.error("Unclosed bracket", {
      offset: t[2]
    }, {
      offset: t[2] + 1
    });
  }, n.unexpectedClose = function(t) {
    throw this.input.error("Unexpected }", {
      offset: t[2]
    }, {
      offset: t[2] + 1
    });
  }, n.unknownWord = function(t) {
    throw this.input.error("Unknown word", {
      offset: t[0][2]
    }, {
      offset: t[0][2] + t[0][1].length
    });
  }, n.unnamedAtrule = function(t, r) {
    throw this.input.error("At-rule without name", {
      offset: r[2]
    }, {
      offset: r[2] + r[1].length
    });
  }, e;
}(), dA = fA, hA = Eo, pA = dA, vA = jl;
function hl(e, n) {
  var i = new vA(e, n), t = new pA(i);
  try {
    t.parse();
  } catch (r) {
    throw process.env.NODE_ENV !== "production" && r.name === "CssSyntaxError" && n && n.from && (/\.scss$/i.test(n.from) ? r.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(n.from) ? r.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(n.from) && (r.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), r;
  }
  return t.root;
}
var Id = hl;
hl.default = hl;
hA.registerParse(hl);
var Yn = Mi.isClean, gA = Mi.my, mA = jg, yA = Ll, xA = Eo, bA = Sd, wA = Qg, zp = Ed, _A = Id, CA = Aa, SA = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, EA = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, AA = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Xo = 0;
function Ys(e) {
  return (typeof e > "u" ? "undefined" : lt(e)) === "object" && typeof e.then == "function";
}
function sm(e) {
  var n = !1, i = SA[e.type];
  return e.type === "decl" ? n = e.prop.toLowerCase() : e.type === "atrule" && (n = e.name.toLowerCase()), n && e.append ? [
    i,
    i + "-" + n,
    Xo,
    i + "Exit",
    i + "Exit-" + n
  ] : n ? [
    i,
    i + "-" + n,
    i + "Exit",
    i + "Exit-" + n
  ] : e.append ? [
    i,
    Xo,
    i + "Exit"
  ] : [
    i,
    i + "Exit"
  ];
}
function jp(e) {
  var n;
  return e.type === "document" ? n = [
    "Document",
    Xo,
    "DocumentExit"
  ] : e.type === "root" ? n = [
    "Root",
    Xo,
    "RootExit"
  ] : n = sm(e), {
    eventIndex: 0,
    events: n,
    iterator: 0,
    node: e,
    visitorIndex: 0,
    visitors: []
  };
}
function If(e) {
  return e[Yn] = !1, e.nodes && e.nodes.forEach(function(n) {
    return If(n);
  }), e;
}
var Of = {}, Qo = /* @__PURE__ */ function() {
  function e(i, t, r) {
    var o = this;
    this.stringified = !1, this.processed = !1;
    var s;
    if ((typeof t > "u" ? "undefined" : lt(t)) === "object" && t !== null && (t.type === "root" || t.type === "document"))
      s = If(t);
    else if (Xe(t, e) || Xe(t, zp))
      s = If(t.root), t.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = !1), r.map.prev = t.map);
    else {
      var c = _A;
      r.syntax && (c = r.syntax.parse), r.parser && (c = r.parser), c.parse && (c = c.parse);
      try {
        s = c(t, r);
      } catch (f) {
        this.processed = !0, this.error = f;
      }
      s && !s[gA] && xA.rebuild(s);
    }
    this.result = new zp(i, s, r), this.helpers = yt({}, Of, {
      postcss: Of,
      result: this.result
    }), this.plugins = this.processor.plugins.map(function(f) {
      return (typeof f > "u" ? "undefined" : lt(f)) === "object" && f.prepare ? yt({}, f, f.prepare(o.result)) : f;
    });
  }
  var n = e.prototype;
  return n.async = function() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }, n.catch = function(t) {
    return this.async().catch(t);
  }, n.finally = function(t) {
    return this.async().then(t, t);
  }, n.getAsyncError = function() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }, n.handleError = function(t, r) {
    var o = this.result.lastPlugin;
    try {
      if (r && r.addToError(t), this.error = t, t.name === "CssSyntaxError" && !t.plugin)
        t.plugin = o.postcssPlugin, t.setMessage();
      else if (o.postcssVersion && process.env.NODE_ENV !== "production") {
        var s = o.postcssPlugin, c = o.postcssVersion, f = this.result.processor.version, d = c.split("."), p = f.split(".");
        (d[0] !== p[0] || parseInt(d[1]) > parseInt(p[1])) && console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + f + ", but " + s + " uses " + c + ". Perhaps this is the source of the error below.");
      }
    } catch (g) {
      console && console.error && console.error(g);
    }
    return t;
  }, n.prepareVisitors = function() {
    var t = this;
    this.listeners = {};
    for (var r = function(p, g, m) {
      t.listeners[g] || (t.listeners[g] = []), t.listeners[g].push([
        p,
        m
      ]);
    }, o = Ae(this.plugins), s; !(s = o()).done; ) {
      var c = s.value;
      if ((typeof c > "u" ? "undefined" : lt(c)) === "object")
        for (var f in c) {
          if (!EA[f] && /^[A-Z]/.test(f))
            throw new Error("Unknown event " + f + " in " + c.postcssPlugin + ". Try to update PostCSS (" + this.processor.version + " now).");
          if (!AA[f])
            if (lt(c[f]) === "object")
              for (var d in c[f])
                d === "*" ? r(c, f, c[f][d]) : r(c, f + "-" + d.toLowerCase(), c[f][d]);
            else typeof c[f] == "function" && r(c, f, c[f]);
        }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }, n.runAsync = function() {
    var t = this;
    return vd(function() {
      var r, o, s, c, f, d, p, g, m, S, x, I;
      return ua(this, function(b) {
        switch (b.label) {
          case 0:
            t.plugin = 0, r = 0, b.label = 1;
          case 1:
            if (!(r < t.plugins.length)) return [
              3,
              6
            ];
            if (o = t.plugins[r], s = t.runOnRoot(o), !Ys(s)) return [
              3,
              5
            ];
            b.label = 2;
          case 2:
            return b.trys.push([
              2,
              4,
              ,
              5
            ]), [
              4,
              s
            ];
          case 3:
            return b.sent(), [
              3,
              5
            ];
          case 4:
            throw c = b.sent(), t.handleError(c);
          case 5:
            return r++, [
              3,
              1
            ];
          case 6:
            if (t.prepareVisitors(), !t.hasListener) return [
              3,
              18
            ];
            f = t.result.root, b.label = 7;
          case 7:
            if (f[Yn]) return [
              3,
              14
            ];
            f[Yn] = !0, d = [
              jp(f)
            ], b.label = 8;
          case 8:
            if (!(d.length > 0)) return [
              3,
              13
            ];
            if (p = t.visitTick(d), !Ys(p)) return [
              3,
              12
            ];
            b.label = 9;
          case 9:
            return b.trys.push([
              9,
              11,
              ,
              12
            ]), [
              4,
              p
            ];
          case 10:
            return b.sent(), [
              3,
              12
            ];
          case 11:
            throw g = b.sent(), m = d[d.length - 1].node, t.handleError(g, m);
          case 12:
            return [
              3,
              8
            ];
          case 13:
            return [
              3,
              7
            ];
          case 14:
            if (!t.listeners.OnceExit) return [
              3,
              18
            ];
            S = function() {
              var L, $, W, V, Q;
              return ua(this, function(ie) {
                switch (ie.label) {
                  case 0:
                    L = I.value, $ = L[0], W = L[1], t.result.lastPlugin = $, ie.label = 1;
                  case 1:
                    return ie.trys.push([
                      1,
                      6,
                      ,
                      7
                    ]), f.type !== "document" ? [
                      3,
                      3
                    ] : (V = f.nodes.map(function(ye) {
                      return W(ye, t.helpers);
                    }), [
                      4,
                      Promise.all(V)
                    ]);
                  case 2:
                    return ie.sent(), [
                      3,
                      5
                    ];
                  case 3:
                    return [
                      4,
                      W(f, t.helpers)
                    ];
                  case 4:
                    ie.sent(), ie.label = 5;
                  case 5:
                    return [
                      3,
                      7
                    ];
                  case 6:
                    throw Q = ie.sent(), t.handleError(Q);
                  case 7:
                    return [
                      2
                    ];
                }
              });
            }, x = Ae(t.listeners.OnceExit), b.label = 15;
          case 15:
            return (I = x()).done ? [
              3,
              18
            ] : [
              5,
              Sg(S())
            ];
          case 16:
            b.sent(), b.label = 17;
          case 17:
            return [
              3,
              15
            ];
          case 18:
            return t.processed = !0, [
              2,
              t.stringify()
            ];
        }
      });
    })();
  }, n.runOnRoot = function(t) {
    var r = this;
    this.result.lastPlugin = t;
    try {
      if ((typeof t > "u" ? "undefined" : lt(t)) === "object" && t.Once) {
        if (this.result.root.type === "document") {
          var o = this.result.root.nodes.map(function(s) {
            return t.Once(s, r.helpers);
          });
          return Ys(o[0]) ? Promise.all(o) : o;
        }
        return t.Once(this.result.root, this.helpers);
      } else if (typeof t == "function")
        return t(this.result.root, this.result);
    } catch (s) {
      throw this.handleError(s);
    }
  }, n.stringify = function() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    var t = this.result.opts, r = yA;
    t.syntax && (r = t.syntax.stringify), t.stringifier && (r = t.stringifier), r.stringify && (r = r.stringify);
    var o = new mA(r, this.result.root, this.result.opts), s = o.generate();
    return this.result.css = s[0], this.result.map = s[1], this.result;
  }, n.sync = function() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (var t = Ae(this.plugins), r; !(r = t()).done; ) {
      var o = r.value, s = this.runOnRoot(o);
      if (Ys(s))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      for (var c = this.result.root; !c[Yn]; )
        c[Yn] = !0, this.walkSync(c);
      if (this.listeners.OnceExit)
        if (c.type === "document")
          for (var f = Ae(c.nodes), d; !(d = f()).done; ) {
            var p = d.value;
            this.visitSync(this.listeners.OnceExit, p);
          }
        else
          this.visitSync(this.listeners.OnceExit, c);
    }
    return this.result;
  }, n.then = function(t, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || wA("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(t, r);
  }, n.toString = function() {
    return this.css;
  }, n.visitSync = function(t, r) {
    for (var o = Ae(t), s; !(s = o()).done; ) {
      var c = s.value, f = c[0], d = c[1];
      this.result.lastPlugin = f;
      var p = void 0;
      try {
        p = d(r, this.helpers);
      } catch (g) {
        throw this.handleError(g, r.proxyOf);
      }
      if (r.type !== "root" && r.type !== "document" && !r.parent)
        return !0;
      if (Ys(p))
        throw this.getAsyncError();
    }
  }, n.visitTick = function(t) {
    var r = t[t.length - 1], o = r.node, s = r.visitors;
    if (o.type !== "root" && o.type !== "document" && !o.parent) {
      t.pop();
      return;
    }
    if (s.length > 0 && r.visitorIndex < s.length) {
      var c = s[r.visitorIndex], f = c[0], d = c[1];
      r.visitorIndex += 1, r.visitorIndex === s.length && (r.visitors = [], r.visitorIndex = 0), this.result.lastPlugin = f;
      try {
        return d(o.toProxy(), this.helpers);
      } catch (x) {
        throw this.handleError(x, o);
      }
    }
    if (r.iterator !== 0) {
      for (var p = r.iterator, g; g = o.nodes[o.indexes[p]]; )
        if (o.indexes[p] += 1, !g[Yn]) {
          g[Yn] = !0, t.push(jp(g));
          return;
        }
      r.iterator = 0, delete o.indexes[p];
    }
    for (var m = r.events; r.eventIndex < m.length; ) {
      var S = m[r.eventIndex];
      if (r.eventIndex += 1, S === Xo) {
        o.nodes && o.nodes.length && (o[Yn] = !0, r.iterator = o.getIterator());
        return;
      } else if (this.listeners[S]) {
        r.visitors = this.listeners[S];
        return;
      }
    }
    t.pop();
  }, n.walkSync = function(t) {
    var r = this;
    t[Yn] = !0;
    for (var o = sm(t), s = Ae(o), c; !(c = s()).done; ) {
      var f = c.value;
      if (f === Xo)
        t.nodes && t.each(function(p) {
          p[Yn] || r.walkSync(p);
        });
      else {
        var d = this.listeners[f];
        if (d && this.visitSync(d, t.toProxy()))
          return;
      }
    }
  }, n.warnings = function() {
    return this.sync().warnings();
  }, Br(e, [
    {
      key: "content",
      get: function() {
        return this.stringify().content;
      }
    },
    {
      key: "css",
      get: function() {
        return this.stringify().css;
      }
    },
    {
      key: "map",
      get: function() {
        return this.stringify().map;
      }
    },
    {
      key: "messages",
      get: function() {
        return this.sync().messages;
      }
    },
    {
      key: "opts",
      get: function() {
        return this.result.opts;
      }
    },
    {
      key: "processor",
      get: function() {
        return this.result.processor;
      }
    },
    {
      key: "root",
      get: function() {
        return this.sync().root;
      }
    },
    {
      key: Symbol.toStringTag,
      get: function() {
        return "LazyResult";
      }
    }
  ]), e;
}();
Qo.registerPostcss = function(e) {
  Of = e;
};
var am = Qo;
Qo.default = Qo;
CA.registerLazyResult(Qo);
bA.registerLazyResult(Qo);
var kA = jg, IA = Ll, OA = Qg, DA = Id, RA = Ed, Df = /* @__PURE__ */ function() {
  function e(i, t, r) {
    t = t.toString(), this.stringified = !1, this._processor = i, this._css = t, this._opts = r, this._map = void 0;
    var o, s = IA;
    this.result = new RA(this._processor, o, this._opts), this.result.css = t;
    var c = this;
    Object.defineProperty(this.result, "root", {
      get: function() {
        return c.root;
      }
    });
    var f = new kA(s, o, this._opts, t);
    if (f.isMap()) {
      var d = f.generate(), p = d[0], g = d[1];
      p && (this.result.css = p), g && (this.result.map = g);
    } else
      f.clearAnnotation(), this.result.css = f.css;
  }
  var n = e.prototype;
  return n.async = function() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }, n.catch = function(t) {
    return this.async().catch(t);
  }, n.finally = function(t) {
    return this.async().then(t, t);
  }, n.sync = function() {
    if (this.error) throw this.error;
    return this.result;
  }, n.then = function(t, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || OA("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(t, r);
  }, n.toString = function() {
    return this._css;
  }, n.warnings = function() {
    return [];
  }, Br(e, [
    {
      key: "content",
      get: function() {
        return this.result.css;
      }
    },
    {
      key: "css",
      get: function() {
        return this.result.css;
      }
    },
    {
      key: "map",
      get: function() {
        return this.result.map;
      }
    },
    {
      key: "messages",
      get: function() {
        return [];
      }
    },
    {
      key: "opts",
      get: function() {
        return this.result.opts;
      }
    },
    {
      key: "processor",
      get: function() {
        return this.result.processor;
      }
    },
    {
      key: "root",
      get: function() {
        if (this._root)
          return this._root;
        var t, r = DA;
        try {
          t = r(this._css, this._opts);
        } catch (o) {
          this.error = o;
        }
        if (this.error)
          throw this.error;
        return this._root = t, t;
      }
    },
    {
      key: Symbol.toStringTag,
      get: function() {
        return "NoWorkResult";
      }
    }
  ]), e;
}(), PA = Df;
Df.default = Df;
var BA = PA, TA = am, MA = Sd, FA = Aa, pa = /* @__PURE__ */ function() {
  function e(i) {
    i === void 0 && (i = []), this.version = "8.4.38", this.plugins = this.normalize(i);
  }
  var n = e.prototype;
  return n.normalize = function(t) {
    for (var r = [], o = Ae(t), s; !(s = o()).done; ) {
      var c = s.value;
      if (c.postcss === !0 ? c = c() : c.postcss && (c = c.postcss), (typeof c > "u" ? "undefined" : lt(c)) === "object" && Array.isArray(c.plugins))
        r = r.concat(c.plugins);
      else if ((typeof c > "u" ? "undefined" : lt(c)) === "object" && c.postcssPlugin)
        r.push(c);
      else if (typeof c == "function")
        r.push(c);
      else if ((typeof c > "u" ? "undefined" : lt(c)) === "object" && (c.parse || c.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
      } else
        throw new Error(c + " is not a PostCSS plugin");
    }
    return r;
  }, n.process = function(t, r) {
    return r === void 0 && (r = {}), !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new BA(this, t, r) : new TA(this, t, r);
  }, n.use = function(t) {
    return this.plugins = this.plugins.concat(this.normalize([
      t
    ])), this;
  }, e;
}(), NA = pa;
pa.default = pa;
FA.registerProcessor(pa);
MA.registerProcessor(pa);
var LA = zl, UA = Fg, zA = $l, jA = Ad, $A = jl, WA = Aa, qA = kd;
function va(e, n) {
  if (Array.isArray(e)) return e.map(function(g) {
    return va(g);
  });
  var i = e.inputs, t = ca(e, [
    "inputs"
  ]);
  if (i) {
    n = [];
    for (var r = Ae(i), o; !(o = r()).done; ) {
      var s = o.value, c = yt({}, s, {
        __proto__: $A.prototype
      });
      c.map && (c.map = yt({}, c.map, {
        __proto__: UA.prototype
      })), n.push(c);
    }
  }
  if (t.nodes && (t.nodes = e.nodes.map(function(g) {
    return va(g, n);
  })), t.source) {
    var f = t.source, d = f.inputId, p = ca(f, [
      "inputId"
    ]);
    t.source = p, d != null && (t.source.input = n[d]);
  }
  if (t.type === "root")
    return new WA(t);
  if (t.type === "decl")
    return new LA(t);
  if (t.type === "rule")
    return new qA(t);
  if (t.type === "comment")
    return new zA(t);
  if (t.type === "atrule")
    return new jA(t);
  throw new Error("Unknown node type: " + e.type);
}
var VA = va;
va.default = va;
var HA = wd, cm = zl, GA = am, KA = Eo, Od = NA, YA = Ll, ZA = VA, lm = Sd, XA = Jg, um = $l, fm = Ad, QA = Ed, JA = jl, ek = Id, tk = im, dm = kd, hm = Aa, rk = Ul;
function Rt() {
  for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
    n[i] = arguments[i];
  return n.length === 1 && Array.isArray(n[0]) && (n = n[0]), new Od(n);
}
Rt.plugin = function(n, i) {
  var t = !1;
  function r() {
    for (var s = arguments.length, c = new Array(s), f = 0; f < s; f++)
      c[f] = arguments[f];
    console && console.warn && !t && (t = !0, console.warn(n + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(n + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));
    var d = i.apply(void 0, [].concat(c));
    return d.postcssPlugin = n, d.postcssVersion = new Od().version, d;
  }
  var o;
  return Object.defineProperty(r, "postcss", {
    get: function() {
      return o || (o = r()), o;
    }
  }), r.process = function(s, c, f) {
    return Rt([
      r(f)
    ]).process(s, c);
  }, r;
};
Rt.stringify = YA;
Rt.parse = ek;
Rt.fromJSON = ZA;
Rt.list = tk;
Rt.comment = function(e) {
  return new um(e);
};
Rt.atRule = function(e) {
  return new fm(e);
};
Rt.decl = function(e) {
  return new cm(e);
};
Rt.rule = function(e) {
  return new dm(e);
};
Rt.root = function(e) {
  return new hm(e);
};
Rt.document = function(e) {
  return new lm(e);
};
Rt.CssSyntaxError = HA;
Rt.Declaration = cm;
Rt.Container = KA;
Rt.Processor = Od;
Rt.Document = lm;
Rt.Comment = um;
Rt.Warning = XA;
Rt.AtRule = fm;
Rt.Result = QA;
Rt.Input = JA;
Rt.Rule = dm;
Rt.Root = hm;
Rt.Node = rk;
GA.registerPostcss(Rt);
var nk = Rt;
Rt.default = Rt;
var Zt = /* @__PURE__ */ pE(nk);
Zt.stringify;
Zt.fromJSON;
Zt.plugin;
Zt.parse;
Zt.list;
Zt.document;
Zt.comment;
Zt.atRule;
Zt.rule;
Zt.decl;
Zt.root;
Zt.CssSyntaxError;
Zt.Declaration;
Zt.Container;
Zt.Processor;
Zt.Document;
Zt.Comment;
Zt.Warning;
Zt.AtRule;
Zt.Result;
Zt.Input;
Zt.Rule;
Zt.Root;
Zt.Node;
var ik = Object.defineProperty, ok = function(e, n, i) {
  return n in e ? ik(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
  }) : e[n] = i;
}, En = function(e, n, i) {
  return ok(e, (typeof n > "u" ? "undefined" : lt(n)) !== "symbol" ? n + "" : n, i);
};
function sk(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ak(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var i = function t() {
      return Xe(this, t) ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    i.prototype = n.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function(t) {
    var r = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(i, t, r.get ? r : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), i;
}
var Dd = {
  exports: {}
}, Ht = String, pm = function() {
  return {
    isColorSupported: !1,
    reset: Ht,
    bold: Ht,
    dim: Ht,
    italic: Ht,
    underline: Ht,
    inverse: Ht,
    hidden: Ht,
    strikethrough: Ht,
    black: Ht,
    red: Ht,
    green: Ht,
    yellow: Ht,
    blue: Ht,
    magenta: Ht,
    cyan: Ht,
    white: Ht,
    gray: Ht,
    bgBlack: Ht,
    bgRed: Ht,
    bgGreen: Ht,
    bgYellow: Ht,
    bgBlue: Ht,
    bgMagenta: Ht,
    bgCyan: Ht,
    bgWhite: Ht
  };
};
Dd.exports = pm();
Dd.exports.createColors = pm;
var ck = Dd.exports, lk = {}, uk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lk
}, Symbol.toStringTag, {
  value: "Module"
})), sr = /* @__PURE__ */ ak(uk), $p = ck, Wp = sr, Rf = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t, r, o, s, c, f) {
    var d;
    return d = e.call(this, t) || this, d.name = "CssSyntaxError", d.reason = t, c && (d.file = c), s && (d.source = s), f && (d.plugin = f), typeof r < "u" && typeof o < "u" && (typeof r == "number" ? (d.line = r, d.column = o) : (d.line = r.line, d.column = r.column, d.endLine = o.line, d.endColumn = o.column)), d.setMessage(), Error.captureStackTrace && Error.captureStackTrace(d, n), d;
  }
  var i = n.prototype;
  return i.setMessage = function() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }, i.showSourceCode = function(r) {
    var o = this;
    if (!this.source) return "";
    var s = this.source;
    r == null && (r = $p.isColorSupported), Wp && r && (s = Wp(s));
    var c = s.split(/\r?\n/), f = Math.max(this.line - 3, 0), d = Math.min(this.line + 2, c.length), p = String(d).length, g, m;
    if (r) {
      var S = $p.createColors(!0), x = S.bold, I = S.gray, b = S.red;
      g = function(L) {
        return x(b(L));
      }, m = function(L) {
        return I(L);
      };
    } else
      g = m = function(L) {
        return L;
      };
    return c.slice(f, d).map(function(L, $) {
      var W = f + 1 + $, V = " " + (" " + W).slice(-p) + " | ";
      if (W === o.line) {
        var Q = m(V.replace(/\d/g, " ")) + L.slice(0, o.column - 1).replace(/[^\t]/g, " ");
        return g(">") + m(V) + L + `
 ` + Q + g("^");
      }
      return " " + m(V) + L;
    }).join(`
`);
  }, i.toString = function() {
    var r = this.showSourceCode();
    return r && (r = `

` + r + `
`), this.name + ": " + this.message + r;
  }, n;
}(al(Error)), Rd = Rf;
Rf.default = Rf;
var Fi = {};
Fi.isClean = Symbol("isClean");
Fi.my = Symbol("my");
var qp = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function fk(e) {
  return e[0].toUpperCase() + e.slice(1);
}
var Pf = /* @__PURE__ */ function() {
  function e(i) {
    this.builder = i;
  }
  var n = e.prototype;
  return n.atrule = function(t, r) {
    var o = "@" + t.name, s = t.params ? this.rawValue(t, "params") : "";
    if (typeof t.raws.afterName < "u" ? o += t.raws.afterName : s && (o += " "), t.nodes)
      this.block(t, o + s);
    else {
      var c = (t.raws.between || "") + (r ? ";" : "");
      this.builder(o + s + c, t);
    }
  }, n.beforeAfter = function(t, r) {
    var o;
    t.type === "decl" ? o = this.raw(t, null, "beforeDecl") : t.type === "comment" ? o = this.raw(t, null, "beforeComment") : r === "before" ? o = this.raw(t, null, "beforeRule") : o = this.raw(t, null, "beforeClose");
    for (var s = t.parent, c = 0; s && s.type !== "root"; )
      c += 1, s = s.parent;
    if (o.includes(`
`)) {
      var f = this.raw(t, null, "indent");
      if (f.length)
        for (var d = 0; d < c; d++) o += f;
    }
    return o;
  }, n.block = function(t, r) {
    var o = this.raw(t, "between", "beforeOpen");
    this.builder(r + o + "{", t, "start");
    var s;
    t.nodes && t.nodes.length ? (this.body(t), s = this.raw(t, "after")) : s = this.raw(t, "after", "emptyBody"), s && this.builder(s), this.builder("}", t, "end");
  }, n.body = function(t) {
    for (var r = t.nodes.length - 1; r > 0 && t.nodes[r].type === "comment"; )
      r -= 1;
    for (var o = this.raw(t, "semicolon"), s = 0; s < t.nodes.length; s++) {
      var c = t.nodes[s], f = this.raw(c, "before");
      f && this.builder(f), this.stringify(c, r !== s || o);
    }
  }, n.comment = function(t) {
    var r = this.raw(t, "left", "commentLeft"), o = this.raw(t, "right", "commentRight");
    this.builder("/*" + r + t.text + o + "*/", t);
  }, n.decl = function(t, r) {
    var o = this.raw(t, "between", "colon"), s = t.prop + o + this.rawValue(t, "value");
    t.important && (s += t.raws.important || " !important"), r && (s += ";"), this.builder(s, t);
  }, n.document = function(t) {
    this.body(t);
  }, n.raw = function(t, r, o) {
    var s;
    if (o || (o = r), r && (s = t.raws[r], typeof s < "u"))
      return s;
    var c = t.parent;
    if (o === "before" && (!c || c.type === "root" && c.first === t || c && c.type === "document"))
      return "";
    if (!c) return qp[o];
    var f = t.root();
    if (f.rawCache || (f.rawCache = {}), typeof f.rawCache[o] < "u")
      return f.rawCache[o];
    if (o === "before" || o === "after")
      return this.beforeAfter(t, o);
    var d = "raw" + fk(o);
    return this[d] ? s = this[d](f, t) : f.walk(function(p) {
      if (s = p.raws[r], typeof s < "u") return !1;
    }), typeof s > "u" && (s = qp[o]), f.rawCache[o] = s, s;
  }, n.rawBeforeClose = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && o.nodes.length > 0 && typeof o.raws.after < "u")
        return r = o.raws.after, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }, n.rawBeforeComment = function(t, r) {
    var o;
    return t.walkComments(function(s) {
      if (typeof s.raws.before < "u")
        return o = s.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), !1;
    }), typeof o > "u" ? o = this.raw(r, null, "beforeDecl") : o && (o = o.replace(/\S/g, "")), o;
  }, n.rawBeforeDecl = function(t, r) {
    var o;
    return t.walkDecls(function(s) {
      if (typeof s.raws.before < "u")
        return o = s.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), !1;
    }), typeof o > "u" ? o = this.raw(r, null, "beforeRule") : o && (o = o.replace(/\S/g, "")), o;
  }, n.rawBeforeOpen = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.type !== "decl" && (r = o.raws.between, typeof r < "u"))
        return !1;
    }), r;
  }, n.rawBeforeRule = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && (o.parent !== t || t.first !== o) && typeof o.raws.before < "u")
        return r = o.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }, n.rawColon = function(t) {
    var r;
    return t.walkDecls(function(o) {
      if (typeof o.raws.between < "u")
        return r = o.raws.between.replace(/[^\s:]/g, ""), !1;
    }), r;
  }, n.rawEmptyBody = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && o.nodes.length === 0 && (r = o.raws.after, typeof r < "u"))
        return !1;
    }), r;
  }, n.rawIndent = function(t) {
    if (t.raws.indent) return t.raws.indent;
    var r;
    return t.walk(function(o) {
      var s = o.parent;
      if (s && s !== t && s.parent && s.parent === t && typeof o.raws.before < "u") {
        var c = o.raws.before.split(`
`);
        return r = c[c.length - 1], r = r.replace(/\S/g, ""), !1;
      }
    }), r;
  }, n.rawSemicolon = function(t) {
    var r;
    return t.walk(function(o) {
      if (o.nodes && o.nodes.length && o.last.type === "decl" && (r = o.raws.semicolon, typeof r < "u"))
        return !1;
    }), r;
  }, n.rawValue = function(t, r) {
    var o = t[r], s = t.raws[r];
    return s && s.value === o ? s.raw : o;
  }, n.root = function(t) {
    this.body(t), t.raws.after && this.builder(t.raws.after);
  }, n.rule = function(t) {
    this.block(t, this.rawValue(t, "selector")), t.raws.ownSemicolon && this.builder(t.raws.ownSemicolon, t, "end");
  }, n.stringify = function(t, r) {
    if (!this[t.type])
      throw new Error("Unknown AST node type " + t.type + ". Maybe you need to change PostCSS stringifier.");
    this[t.type](t, r);
  }, e;
}(), vm = Pf;
Pf.default = Pf;
var dk = vm;
function Bf(e, n) {
  var i = new dk(n);
  i.stringify(e);
}
var Wl = Bf;
Bf.default = Bf;
var Bc = Fi.isClean, hk = Fi.my, pk = Rd, vk = vm, gk = Wl;
function Tf(e, n) {
  var i = new e.constructor();
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && t !== "proxyCache") {
      var r = e[t], o = typeof r > "u" ? "undefined" : lt(r);
      t === "parent" && o === "object" ? n && (i[t] = n) : t === "source" ? i[t] = r : Array.isArray(r) ? i[t] = r.map(function(s) {
        return Tf(s, i);
      }) : (o === "object" && r !== null && (r = Tf(r)), i[t] = r);
    }
  return i;
}
var Mf = /* @__PURE__ */ function() {
  function e(i) {
    i === void 0 && (i = {}), this.raws = {}, this[Bc] = !1, this[hk] = !0;
    for (var t in i)
      if (t === "nodes") {
        this.nodes = [];
        for (var r = Ae(i[t]), o; !(o = r()).done; ) {
          var s = o.value;
          typeof s.clone == "function" ? this.append(s.clone()) : this.append(s);
        }
      } else
        this[t] = i[t];
  }
  var n = e.prototype;
  return n.addToError = function(t) {
    if (t.postcssNode = this, t.stack && this.source && /\n\s{4}at /.test(t.stack)) {
      var r = this.source;
      t.stack = t.stack.replace(/\n\s{4}at /, "$&" + r.input.from + ":" + r.start.line + ":" + r.start.column + "$&");
    }
    return t;
  }, n.after = function(t) {
    return this.parent.insertAfter(this, t), this;
  }, n.assign = function(t) {
    t === void 0 && (t = {});
    for (var r in t)
      this[r] = t[r];
    return this;
  }, n.before = function(t) {
    return this.parent.insertBefore(this, t), this;
  }, n.cleanRaws = function(t) {
    delete this.raws.before, delete this.raws.after, t || delete this.raws.between;
  }, n.clone = function(t) {
    t === void 0 && (t = {});
    var r = Tf(this);
    for (var o in t)
      r[o] = t[o];
    return r;
  }, n.cloneAfter = function(t) {
    t === void 0 && (t = {});
    var r = this.clone(t);
    return this.parent.insertAfter(this, r), r;
  }, n.cloneBefore = function(t) {
    t === void 0 && (t = {});
    var r = this.clone(t);
    return this.parent.insertBefore(this, r), r;
  }, n.error = function(t, r) {
    if (r === void 0 && (r = {}), this.source) {
      var o = this.rangeBy(r), s = o.end, c = o.start;
      return this.source.input.error(t, {
        column: c.column,
        line: c.line
      }, {
        column: s.column,
        line: s.line
      }, r);
    }
    return new pk(t);
  }, n.getProxyProcessor = function() {
    return {
      get: function(r, o) {
        return o === "proxyOf" ? r : o === "root" ? function() {
          return r.root().toProxy();
        } : r[o];
      },
      set: function(r, o, s) {
        return r[o] === s || (r[o] = s, (o === "prop" || o === "value" || o === "name" || o === "params" || o === "important" || /* c8 ignore next */
        o === "text") && r.markDirty()), !0;
      }
    };
  }, n.markDirty = function() {
    if (this[Bc]) {
      this[Bc] = !1;
      for (var t = this; t = t.parent; )
        t[Bc] = !1;
    }
  }, n.next = function() {
    if (this.parent) {
      var t = this.parent.index(this);
      return this.parent.nodes[t + 1];
    }
  }, n.positionBy = function(t, r) {
    var o = this.source.start;
    if (t.index)
      o = this.positionInside(t.index, r);
    else if (t.word) {
      r = this.toString();
      var s = r.indexOf(t.word);
      s !== -1 && (o = this.positionInside(s, r));
    }
    return o;
  }, n.positionInside = function(t, r) {
    for (var o = r || this.toString(), s = this.source.start.column, c = this.source.start.line, f = 0; f < t; f++)
      o[f] === `
` ? (s = 1, c += 1) : s += 1;
    return {
      column: s,
      line: c
    };
  }, n.prev = function() {
    if (this.parent) {
      var t = this.parent.index(this);
      return this.parent.nodes[t - 1];
    }
  }, n.rangeBy = function(t) {
    var r = {
      column: this.source.start.column,
      line: this.source.start.line
    }, o = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: r.column + 1,
      line: r.line
    };
    if (t.word) {
      var s = this.toString(), c = s.indexOf(t.word);
      c !== -1 && (r = this.positionInside(c, s), o = this.positionInside(c + t.word.length, s));
    } else
      t.start ? r = {
        column: t.start.column,
        line: t.start.line
      } : t.index && (r = this.positionInside(t.index)), t.end ? o = {
        column: t.end.column,
        line: t.end.line
      } : typeof t.endIndex == "number" ? o = this.positionInside(t.endIndex) : t.index && (o = this.positionInside(t.index + 1));
    return (o.line < r.line || o.line === r.line && o.column <= r.column) && (o = {
      column: r.column + 1,
      line: r.line
    }), {
      end: o,
      start: r
    };
  }, n.raw = function(t, r) {
    var o = new vk();
    return o.raw(this, t, r);
  }, n.remove = function() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }, n.replaceWith = function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    if (this.parent) {
      for (var s = this, c = !1, f = Ae(r), d; !(d = f()).done; ) {
        var p = d.value;
        p === this ? c = !0 : c ? (this.parent.insertAfter(s, p), s = p) : this.parent.insertBefore(s, p);
      }
      c || this.remove();
    }
    return this;
  }, n.root = function() {
    for (var t = this; t.parent && t.parent.type !== "document"; )
      t = t.parent;
    return t;
  }, n.toJSON = function(t, r) {
    var o = {}, s = r == null;
    r = r || /* @__PURE__ */ new Map();
    var c = 0;
    for (var f in this)
      if (Object.prototype.hasOwnProperty.call(this, f) && !(f === "parent" || f === "proxyCache")) {
        var d = this[f];
        if (Array.isArray(d))
          o[f] = d.map(function(g) {
            return (typeof g > "u" ? "undefined" : lt(g)) === "object" && g.toJSON ? g.toJSON(null, r) : g;
          });
        else if ((typeof d > "u" ? "undefined" : lt(d)) === "object" && d.toJSON)
          o[f] = d.toJSON(null, r);
        else if (f === "source") {
          var p = r.get(d.input);
          p == null && (p = c, r.set(d.input, c), c++), o[f] = {
            end: d.end,
            inputId: p,
            start: d.start
          };
        } else
          o[f] = d;
      }
    return s && (o.inputs = [].concat(r.keys()).map(function(g) {
      return g.toJSON();
    })), o;
  }, n.toProxy = function() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }, n.toString = function(t) {
    t === void 0 && (t = gk), t.stringify && (t = t.stringify);
    var r = "";
    return t(this, function(o) {
      r += o;
    }), r;
  }, n.warn = function(t, r, o) {
    var s = {
      node: this
    };
    for (var c in o) s[c] = o[c];
    return t.warn(r, s);
  }, Br(e, [
    {
      key: "proxyOf",
      get: function() {
        return this;
      }
    }
  ]), e;
}(), ql = Mf;
Mf.default = Mf;
var mk = ql, Ff = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(i) {
    var t;
    return i && typeof i.value < "u" && typeof i.value != "string" && (i = yt({}, i, {
      value: String(i.value)
    })), t = e.call(this, i) || this, t.type = "decl", t;
  }
  return Br(n, [
    {
      key: "variable",
      get: function() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
      }
    }
  ]), n;
}(mk), Vl = Ff;
Ff.default = Ff;
var yk = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", xk = function(e) {
  e === void 0 && (e = 21);
  for (var n = "", i = e; i--; )
    n += yk[Math.random() * 64 | 0];
  return n;
}, bk = {
  nanoid: xk
}, Vp = sr.SourceMapConsumer, Hp = sr.SourceMapGenerator, wk = sr.existsSync, _k = sr.readFileSync, qu = sr.dirname, Ck = sr.join;
function Sk(e) {
  return Buffer ? Buffer.from(e, "base64").toString() : window.atob(e);
}
var Nf = /* @__PURE__ */ function() {
  function e(i, t) {
    if (t.map !== !1) {
      this.loadAnnotation(i), this.inline = this.startWith(this.annotation, "data:");
      var r = t.map ? t.map.prev : void 0, o = this.loadMap(t.from, r);
      !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = qu(this.mapFile)), o && (this.text = o);
    }
  }
  var n = e.prototype;
  return n.consumer = function() {
    return this.consumerCache || (this.consumerCache = new Vp(this.text)), this.consumerCache;
  }, n.decodeInline = function(t) {
    var r = /^data:application\/json;charset=utf-?8;base64,/, o = /^data:application\/json;base64,/, s = /^data:application\/json;charset=utf-?8,/, c = /^data:application\/json,/;
    if (s.test(t) || c.test(t))
      return decodeURIComponent(t.substr(RegExp.lastMatch.length));
    if (r.test(t) || o.test(t))
      return Sk(t.substr(RegExp.lastMatch.length));
    var f = t.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + f);
  }, n.getAnnotationURL = function(t) {
    return t.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }, n.isMap = function(t) {
    return (typeof t > "u" ? "undefined" : lt(t)) !== "object" ? !1 : typeof t.mappings == "string" || typeof t._mappings == "string" || Array.isArray(t.sections);
  }, n.loadAnnotation = function(t) {
    var r = t.match(/\/\*\s*# sourceMappingURL=/gm);
    if (r) {
      var o = t.lastIndexOf(r.pop()), s = t.indexOf("*/", o);
      o > -1 && s > -1 && (this.annotation = this.getAnnotationURL(t.substring(o, s)));
    }
  }, n.loadFile = function(t) {
    if (this.root = qu(t), wk(t))
      return this.mapFile = t, _k(t, "utf-8").toString().trim();
  }, n.loadMap = function(t, r) {
    if (r === !1) return !1;
    if (r) {
      if (typeof r == "string")
        return r;
      if (typeof r == "function") {
        var o = r(t);
        if (o) {
          var s = this.loadFile(o);
          if (!s)
            throw new Error("Unable to load previous source map: " + o.toString());
          return s;
        }
      } else {
        if (Xe(r, Vp))
          return Hp.fromSourceMap(r).toString();
        if (Xe(r, Hp))
          return r.toString();
        if (this.isMap(r))
          return JSON.stringify(r);
        throw new Error("Unsupported previous source map format: " + r.toString());
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        var c = this.annotation;
        return t && (c = Ck(qu(t), c)), this.loadFile(c);
      }
    }
  }, n.startWith = function(t, r) {
    return t ? t.substr(0, r.length) === r : !1;
  }, n.withContent = function() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }, e;
}(), gm = Nf;
Nf.default = Nf;
var Ek = sr.SourceMapConsumer, Ak = sr.SourceMapGenerator, Gp = sr.fileURLToPath, Tc = sr.pathToFileURL, Lf = sr.isAbsolute, Uf = sr.resolve, kk = bk.nanoid, Vu = sr, Kp = Rd, Ik = gm, Hu = Symbol("fromOffsetCache"), Ok = !!(Ek && Ak), Yp = !!(Uf && Lf), pl = /* @__PURE__ */ function() {
  function e(i, t) {
    if (t === void 0 && (t = {}), i === null || typeof i > "u" || (typeof i > "u" ? "undefined" : lt(i)) === "object" && !i.toString)
      throw new Error("PostCSS received " + i + " instead of CSS string");
    if (this.css = i.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!Yp || /^\w+:\/\//.test(t.from) || Lf(t.from) ? this.file = t.from : this.file = Uf(t.from)), Yp && Ok) {
      var r = new Ik(this.css, t);
      if (r.text) {
        this.map = r;
        var o = r.consumer().file;
        !this.file && o && (this.file = this.mapResolve(o));
      }
    }
    this.file || (this.id = "<input css " + kk(6) + ">"), this.map && (this.map.file = this.from);
  }
  var n = e.prototype;
  return n.error = function(t, r, o, s) {
    s === void 0 && (s = {});
    var c, f, d;
    if (r && (typeof r > "u" ? "undefined" : lt(r)) === "object") {
      var p = r, g = o;
      if (typeof p.offset == "number") {
        var m = this.fromOffset(p.offset);
        r = m.line, o = m.col;
      } else
        r = p.line, o = p.column;
      if (typeof g.offset == "number") {
        var S = this.fromOffset(g.offset);
        f = S.line, d = S.col;
      } else
        f = g.line, d = g.column;
    } else if (!o) {
      var x = this.fromOffset(r);
      r = x.line, o = x.col;
    }
    var I = this.origin(r, o, f, d);
    return I ? c = new Kp(t, I.endLine === void 0 ? I.line : {
      column: I.column,
      line: I.line
    }, I.endLine === void 0 ? I.column : {
      column: I.endColumn,
      line: I.endLine
    }, I.source, I.file, s.plugin) : c = new Kp(t, f === void 0 ? r : {
      column: o,
      line: r
    }, f === void 0 ? o : {
      column: d,
      line: f
    }, this.css, this.file, s.plugin), c.input = {
      column: o,
      endColumn: d,
      endLine: f,
      line: r,
      source: this.css
    }, this.file && (Tc && (c.input.url = Tc(this.file).toString()), c.input.file = this.file), c;
  }, n.fromOffset = function(t) {
    var r, o;
    if (this[Hu])
      o = this[Hu];
    else {
      var s = this.css.split(`
`);
      o = new Array(s.length);
      for (var c = 0, f = 0, d = s.length; f < d; f++)
        o[f] = c, c += s[f].length + 1;
      this[Hu] = o;
    }
    r = o[o.length - 1];
    var p = 0;
    if (t >= r)
      p = o.length - 1;
    else
      for (var g = o.length - 2, m; p < g; )
        if (m = p + (g - p >> 1), t < o[m])
          g = m - 1;
        else if (t >= o[m + 1])
          p = m + 1;
        else {
          p = m;
          break;
        }
    return {
      col: t - o[p] + 1,
      line: p + 1
    };
  }, n.mapResolve = function(t) {
    return /^\w+:\/\//.test(t) ? t : Uf(this.map.consumer().sourceRoot || this.map.root || ".", t);
  }, n.origin = function(t, r, o, s) {
    if (!this.map) return !1;
    var c = this.map.consumer(), f = c.originalPositionFor({
      column: r,
      line: t
    });
    if (!f.source) return !1;
    var d;
    typeof o == "number" && (d = c.originalPositionFor({
      column: s,
      line: o
    }));
    var p;
    Lf(f.source) ? p = Tc(f.source) : p = new URL(f.source, this.map.consumer().sourceRoot || Tc(this.map.mapFile));
    var g = {
      column: f.column,
      endColumn: d && d.column,
      endLine: d && d.line,
      line: f.line,
      url: p.toString()
    };
    if (p.protocol === "file:")
      if (Gp)
        g.file = Gp(p);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    var m = c.sourceContentFor(f.source);
    return m && (g.source = m), g;
  }, n.toJSON = function() {
    for (var t = {}, r = 0, o = [
      "hasBOM",
      "css",
      "file",
      "id"
    ]; r < o.length; r++) {
      var s = o[r];
      this[s] != null && (t[s] = this[s]);
    }
    return this.map && (t.map = yt({}, this.map), t.map.consumerCache && (t.map.consumerCache = void 0)), t;
  }, Br(e, [
    {
      key: "from",
      get: function() {
        return this.file || this.id;
      }
    }
  ]), e;
}(), Hl = pl;
pl.default = pl;
Vu && Vu.registerInput && Vu.registerInput(pl);
var mm = sr.SourceMapConsumer, el = sr.SourceMapGenerator, tl = sr.dirname, ym = sr.relative, xm = sr.resolve, bm = sr.sep, Zp = sr.pathToFileURL, Dk = Hl, Rk = !!(mm && el), Pk = !!(tl && xm && ym && bm), Bk = /* @__PURE__ */ function() {
  function e(i, t, r, o) {
    this.stringify = i, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = o, this.originalCSS = o, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  var n = e.prototype;
  return n.addAnnotation = function() {
    var t;
    this.isInline() ? t = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? t = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? t = this.mapOpts.annotation(this.opts.to, this.root) : t = this.outputFile() + ".map";
    var r = `
`;
    this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + t + " */";
  }, n.applyPrevMaps = function() {
    for (var t = Ae(this.previous()), r; !(r = t()).done; ) {
      var o = r.value, s = this.toUrl(this.path(o.file)), c = o.root || tl(o.file), f = void 0;
      this.mapOpts.sourcesContent === !1 ? (f = new mm(o.text), f.sourcesContent && (f.sourcesContent = null)) : f = o.consumer(), this.map.applySourceMap(f, s, this.toUrl(this.path(c)));
    }
  }, n.clearAnnotation = function() {
    if (this.mapOpts.annotation !== !1)
      if (this.root)
        for (var t, r = this.root.nodes.length - 1; r >= 0; r--)
          t = this.root.nodes[r], t.type === "comment" && t.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(r);
      else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
  }, n.generate = function() {
    if (this.clearAnnotation(), Pk && Rk && this.isMap())
      return this.generateMap();
    var t = "";
    return this.stringify(this.root, function(r) {
      t += r;
    }), [
      t
    ];
  }, n.generateMap = function() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      var t = this.previous()[0].consumer();
      t.file = this.outputFile(), this.map = el.fromSourceMap(t, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new el({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: {
          column: 0,
          line: 1
        },
        original: {
          column: 0,
          line: 1
        },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [
      this.css
    ] : [
      this.css,
      this.map
    ];
  }, n.generateString = function() {
    var t = this;
    this.css = "", this.map = new el({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    var r = 1, o = 1, s = "<no source>", c = {
      generated: {
        column: 0,
        line: 0
      },
      original: {
        column: 0,
        line: 0
      },
      source: ""
    }, f, d;
    this.stringify(this.root, function(p, g, m) {
      if (t.css += p, g && m !== "end" && (c.generated.line = r, c.generated.column = o - 1, g.source && g.source.start ? (c.source = t.sourcePath(g), c.original.line = g.source.start.line, c.original.column = g.source.start.column - 1, t.map.addMapping(c)) : (c.source = s, c.original.line = 1, c.original.column = 0, t.map.addMapping(c))), f = p.match(/\n/g), f ? (r += f.length, d = p.lastIndexOf(`
`), o = p.length - d) : o += p.length, g && m !== "start") {
        var S = g.parent || {
          raws: {}
        }, x = g.type === "decl" || g.type === "atrule" && !g.nodes;
        (!x || g !== S.last || S.raws.semicolon) && (g.source && g.source.end ? (c.source = t.sourcePath(g), c.original.line = g.source.end.line, c.original.column = g.source.end.column - 1, c.generated.line = r, c.generated.column = o - 2, t.map.addMapping(c)) : (c.source = s, c.original.line = 1, c.original.column = 0, c.generated.line = r, c.generated.column = o - 1, t.map.addMapping(c)));
      }
    });
  }, n.isAnnotation = function() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(function(t) {
      return t.annotation;
    }) : !0;
  }, n.isInline = function() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    var t = this.mapOpts.annotation;
    return typeof t < "u" && t !== !0 ? !1 : this.previous().length ? this.previous().some(function(r) {
      return r.inline;
    }) : !0;
  }, n.isMap = function() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }, n.isSourcesContent = function() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(function(t) {
      return t.withContent();
    }) : !0;
  }, n.outputFile = function() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }, n.path = function(t) {
    if (this.mapOpts.absolute || t.charCodeAt(0) === 60 || /^\w+:\/\//.test(t)) return t;
    var r = this.memoizedPaths.get(t);
    if (r) return r;
    var o = this.opts.to ? tl(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (o = tl(xm(o, this.mapOpts.annotation)));
    var s = ym(o, t);
    return this.memoizedPaths.set(t, s), s;
  }, n.previous = function() {
    var t = this;
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk(function(o) {
          if (o.source && o.source.input.map) {
            var s = o.source.input.map;
            t.previousMaps.includes(s) || t.previousMaps.push(s);
          }
        });
      else {
        var r = new Dk(this.originalCSS, this.opts);
        r.map && this.previousMaps.push(r.map);
      }
    return this.previousMaps;
  }, n.setSourcesContent = function() {
    var t = this, r = {};
    if (this.root)
      this.root.walk(function(s) {
        if (s.source) {
          var c = s.source.input.from;
          if (c && !r[c]) {
            r[c] = !0;
            var f = t.usesFileUrls ? t.toFileUrl(c) : t.toUrl(t.path(c));
            t.map.setSourceContent(f, s.source.input.css);
          }
        }
      });
    else if (this.css) {
      var o = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(o, this.css);
    }
  }, n.sourcePath = function(t) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(t.source.input.from) : this.toUrl(this.path(t.source.input.from));
  }, n.toBase64 = function(t) {
    return Buffer ? Buffer.from(t).toString("base64") : window.btoa(unescape(encodeURIComponent(t)));
  }, n.toFileUrl = function(t) {
    var r = this.memoizedFileURLs.get(t);
    if (r) return r;
    if (Zp) {
      var o = Zp(t).toString();
      return this.memoizedFileURLs.set(t, o), o;
    } else
      throw new Error("`map.absolute` option is not available in this PostCSS build");
  }, n.toUrl = function(t) {
    var r = this.memoizedURLs.get(t);
    if (r) return r;
    bm === "\\" && (t = t.replace(/\\/g, "/"));
    var o = encodeURI(t).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(t, o), o;
  }, e;
}(), wm = Bk, Tk = ql, zf = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(i) {
    var t;
    return t = e.call(this, i) || this, t.type = "comment", t;
  }
  return n;
}(Tk), Gl = zf;
zf.default = zf;
var _m = Fi.isClean, Cm = Fi.my, Sm = Vl, Em = Gl, Mk = ql, Am, Pd, Bd, km;
function Im(e) {
  return e.map(function(n) {
    return n.nodes && (n.nodes = Im(n.nodes)), delete n.source, n;
  });
}
function Om(e) {
  if (e[_m] = !1, e.proxyOf.nodes)
    for (var n = Ae(e.proxyOf.nodes), i; !(i = n()).done; ) {
      var t = i.value;
      Om(t);
    }
}
var bi = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n() {
    return e.apply(this, arguments) || this;
  }
  var i = n.prototype;
  return i.append = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    for (var c = Ae(o), f; !(f = c()).done; )
      for (var d = f.value, p = this.normalize(d, this.last), g = Ae(p), m; !(m = g()).done; ) {
        var S = m.value;
        this.proxyOf.nodes.push(S);
      }
    return this.markDirty(), this;
  }, i.cleanRaws = function(r) {
    if (e.prototype.cleanRaws.call(this, r), this.nodes)
      for (var o = Ae(this.nodes), s; !(s = o()).done; ) {
        var c = s.value;
        c.cleanRaws(r);
      }
  }, i.each = function(r) {
    if (this.proxyOf.nodes) {
      for (var o = this.getIterator(), s, c; this.indexes[o] < this.proxyOf.nodes.length && (s = this.indexes[o], c = r(this.proxyOf.nodes[s], s), c !== !1); )
        this.indexes[o] += 1;
      return delete this.indexes[o], c;
    }
  }, i.every = function(r) {
    return this.nodes.every(r);
  }, i.getIterator = function() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    var r = this.lastEach;
    return this.indexes[r] = 0, r;
  }, i.getProxyProcessor = function() {
    return {
      get: function(o, s) {
        return s === "proxyOf" ? o : o[s] ? s === "each" || typeof s == "string" && s.startsWith("walk") ? function() {
          for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
            f[d] = arguments[d];
          var p;
          return (p = o)[s].apply(p, [].concat(f.map(function(g) {
            return typeof g == "function" ? function(m, S) {
              return g(m.toProxy(), S);
            } : g;
          })));
        } : s === "every" || s === "some" ? function(c) {
          return o[s](function(f) {
            for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
              p[g - 1] = arguments[g];
            return c.apply(void 0, [].concat([
              f.toProxy()
            ], p));
          });
        } : s === "root" ? function() {
          return o.root().toProxy();
        } : s === "nodes" ? o.nodes.map(function(c) {
          return c.toProxy();
        }) : s === "first" || s === "last" ? o[s].toProxy() : o[s] : o[s];
      },
      set: function(o, s, c) {
        return o[s] === c || (o[s] = c, (s === "name" || s === "params" || s === "selector") && o.markDirty()), !0;
      }
    };
  }, i.index = function(r) {
    return typeof r == "number" ? r : (r.proxyOf && (r = r.proxyOf), this.proxyOf.nodes.indexOf(r));
  }, i.insertAfter = function(r, o) {
    var s = this.index(r), c = this.normalize(o, this.proxyOf.nodes[s]).reverse();
    s = this.index(r);
    for (var f = Ae(c), d; !(d = f()).done; ) {
      var p = d.value;
      this.proxyOf.nodes.splice(s + 1, 0, p);
    }
    var g;
    for (var m in this.indexes)
      g = this.indexes[m], s < g && (this.indexes[m] = g + c.length);
    return this.markDirty(), this;
  }, i.insertBefore = function(r, o) {
    var s = this.index(r), c = s === 0 ? "prepend" : !1, f = this.normalize(o, this.proxyOf.nodes[s], c).reverse();
    s = this.index(r);
    for (var d = Ae(f), p; !(p = d()).done; ) {
      var g = p.value;
      this.proxyOf.nodes.splice(s, 0, g);
    }
    var m;
    for (var S in this.indexes)
      m = this.indexes[S], s <= m && (this.indexes[S] = m + f.length);
    return this.markDirty(), this;
  }, i.normalize = function(r, o) {
    var s = this;
    if (typeof r == "string")
      r = Im(Am(r).nodes);
    else if (typeof r > "u")
      r = [];
    else if (Array.isArray(r)) {
      r = r.slice(0);
      for (var c = Ae(r), f; !(f = c()).done; ) {
        var d = f.value;
        d.parent && d.parent.removeChild(d, "ignore");
      }
    } else if (r.type === "root" && this.type !== "document") {
      r = r.nodes.slice(0);
      for (var p = Ae(r), g; !(g = p()).done; ) {
        var m = g.value;
        m.parent && m.parent.removeChild(m, "ignore");
      }
    } else if (r.type)
      r = [
        r
      ];
    else if (r.prop) {
      if (typeof r.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof r.value != "string" && (r.value = String(r.value)), r = [
        new Sm(r)
      ];
    } else if (r.selector)
      r = [
        new Pd(r)
      ];
    else if (r.name)
      r = [
        new Bd(r)
      ];
    else if (r.text)
      r = [
        new Em(r)
      ];
    else
      throw new Error("Unknown node type in node creation");
    var S = r.map(function(x) {
      return x[Cm] || n.rebuild(x), x = x.proxyOf, x.parent && x.parent.removeChild(x), x[_m] && Om(x), typeof x.raws.before > "u" && o && typeof o.raws.before < "u" && (x.raws.before = o.raws.before.replace(/\S/g, "")), x.parent = s.proxyOf, x;
    });
    return S;
  }, i.prepend = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    o = o.reverse();
    for (var c = Ae(o), f; !(f = c()).done; ) {
      for (var d = f.value, p = this.normalize(d, this.first, "prepend").reverse(), g = Ae(p), m; !(m = g()).done; ) {
        var S = m.value;
        this.proxyOf.nodes.unshift(S);
      }
      for (var x in this.indexes)
        this.indexes[x] = this.indexes[x] + p.length;
    }
    return this.markDirty(), this;
  }, i.push = function(r) {
    return r.parent = this, this.proxyOf.nodes.push(r), this;
  }, i.removeAll = function() {
    for (var r = Ae(this.proxyOf.nodes), o; !(o = r()).done; ) {
      var s = o.value;
      s.parent = void 0;
    }
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }, i.removeChild = function(r) {
    r = this.index(r), this.proxyOf.nodes[r].parent = void 0, this.proxyOf.nodes.splice(r, 1);
    var o;
    for (var s in this.indexes)
      o = this.indexes[s], o >= r && (this.indexes[s] = o - 1);
    return this.markDirty(), this;
  }, i.replaceValues = function(r, o, s) {
    return s || (s = o, o = {}), this.walkDecls(function(c) {
      o.props && !o.props.includes(c.prop) || o.fast && !c.value.includes(o.fast) || (c.value = c.value.replace(r, s));
    }), this.markDirty(), this;
  }, i.some = function(r) {
    return this.nodes.some(r);
  }, i.walk = function(r) {
    return this.each(function(o, s) {
      var c;
      try {
        c = r(o, s);
      } catch (f) {
        throw o.addToError(f);
      }
      return c !== !1 && o.walk && (c = o.walk(r)), c;
    });
  }, i.walkAtRules = function(r, o) {
    return o ? Xe(r, RegExp) ? this.walk(function(s, c) {
      if (s.type === "atrule" && r.test(s.name))
        return o(s, c);
    }) : this.walk(function(s, c) {
      if (s.type === "atrule" && s.name === r)
        return o(s, c);
    }) : (o = r, this.walk(function(s, c) {
      if (s.type === "atrule")
        return o(s, c);
    }));
  }, i.walkComments = function(r) {
    return this.walk(function(o, s) {
      if (o.type === "comment")
        return r(o, s);
    });
  }, i.walkDecls = function(r, o) {
    return o ? Xe(r, RegExp) ? this.walk(function(s, c) {
      if (s.type === "decl" && r.test(s.prop))
        return o(s, c);
    }) : this.walk(function(s, c) {
      if (s.type === "decl" && s.prop === r)
        return o(s, c);
    }) : (o = r, this.walk(function(s, c) {
      if (s.type === "decl")
        return o(s, c);
    }));
  }, i.walkRules = function(r, o) {
    return o ? Xe(r, RegExp) ? this.walk(function(s, c) {
      if (s.type === "rule" && r.test(s.selector))
        return o(s, c);
    }) : this.walk(function(s, c) {
      if (s.type === "rule" && s.selector === r)
        return o(s, c);
    }) : (o = r, this.walk(function(s, c) {
      if (s.type === "rule")
        return o(s, c);
    }));
  }, Br(n, [
    {
      key: "first",
      get: function() {
        if (this.proxyOf.nodes)
          return this.proxyOf.nodes[0];
      }
    },
    {
      key: "last",
      get: function() {
        if (this.proxyOf.nodes)
          return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
    }
  ]), n;
}(Mk);
bi.registerParse = function(e) {
  Am = e;
};
bi.registerRule = function(e) {
  Pd = e;
};
bi.registerAtRule = function(e) {
  Bd = e;
};
bi.registerRoot = function(e) {
  km = e;
};
var Ao = bi;
bi.default = bi;
bi.rebuild = function(e) {
  e.type === "atrule" ? Object.setPrototypeOf(e, Bd.prototype) : e.type === "rule" ? Object.setPrototypeOf(e, Pd.prototype) : e.type === "decl" ? Object.setPrototypeOf(e, Sm.prototype) : e.type === "comment" ? Object.setPrototypeOf(e, Em.prototype) : e.type === "root" && Object.setPrototypeOf(e, km.prototype), e[Cm] = !0, e.nodes && e.nodes.forEach(function(n) {
    bi.rebuild(n);
  });
};
var Fk = Ao, Dm, Rm, ga = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t) {
    var r;
    return r = e.call(this, yt({
      type: "document"
    }, t)) || this, r.nodes || (r.nodes = []), r;
  }
  var i = n.prototype;
  return i.toResult = function(r) {
    r === void 0 && (r = {});
    var o = new Dm(new Rm(), this, r);
    return o.stringify();
  }, n;
}(Fk);
ga.registerLazyResult = function(e) {
  Dm = e;
};
ga.registerProcessor = function(e) {
  Rm = e;
};
var Td = ga;
ga.default = ga;
var Xp = {}, Pm = function(n) {
  Xp[n] || (Xp[n] = !0, typeof console < "u" && console.warn && console.warn(n));
}, jf = /* @__PURE__ */ function() {
  function e(i, t) {
    if (t === void 0 && (t = {}), this.type = "warning", this.text = i, t.node && t.node.source) {
      var r = t.node.rangeBy(t);
      this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
    }
    for (var o in t) this[o] = t[o];
  }
  var n = e.prototype;
  return n.toString = function() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }, e;
}(), Bm = jf;
jf.default = jf;
var Nk = Bm, $f = /* @__PURE__ */ function() {
  function e(i, t, r) {
    this.processor = i, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0;
  }
  var n = e.prototype;
  return n.toString = function() {
    return this.css;
  }, n.warn = function(t, r) {
    r === void 0 && (r = {}), r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    var o = new Nk(t, r);
    return this.messages.push(o), o;
  }, n.warnings = function() {
    return this.messages.filter(function(t) {
      return t.type === "warning";
    });
  }, Br(e, [
    {
      key: "content",
      get: function() {
        return this.css;
      }
    }
  ]), e;
}(), Md = $f;
$f.default = $f;
var Gu = 39, Qp = 34, Mc = 92, Jp = 47, Fc = 10, Zs = 32, Nc = 12, Lc = 9, Uc = 13, Lk = 91, Uk = 93, zk = 40, jk = 41, $k = 123, Wk = 125, qk = 59, Vk = 42, Hk = 58, Gk = 64, zc = /[\t\n\f\r "#'()/;[\\\]{}]/g, jc = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Kk = /.[\r\n"'(/\\]/, ev = /[\da-f]/i, Yk = function(n, i) {
  i === void 0 && (i = {});
  var t = n.css.valueOf(), r = i.ignoreErrors, o, s, c, f, d, p, g, m, S, x, I = t.length, b = 0, L = [], $ = [];
  function W() {
    return b;
  }
  function V(ge) {
    throw n.error("Unclosed " + ge, b);
  }
  function Q() {
    return $.length === 0 && b >= I;
  }
  function ie(ge) {
    if ($.length) return $.pop();
    if (!(b >= I)) {
      var Ie = ge ? ge.ignoreUnclosed : !1;
      switch (o = t.charCodeAt(b), o) {
        case Fc:
        case Zs:
        case Lc:
        case Uc:
        case Nc: {
          s = b;
          do
            s += 1, o = t.charCodeAt(s);
          while (o === Zs || o === Fc || o === Lc || o === Uc || o === Nc);
          x = [
            "space",
            t.slice(b, s)
          ], b = s - 1;
          break;
        }
        case Lk:
        case Uk:
        case $k:
        case Wk:
        case Hk:
        case qk:
        case jk: {
          var $e = String.fromCharCode(o);
          x = [
            $e,
            $e,
            b
          ];
          break;
        }
        case zk: {
          if (m = L.length ? L.pop()[1] : "", S = t.charCodeAt(b + 1), m === "url" && S !== Gu && S !== Qp && S !== Zs && S !== Fc && S !== Lc && S !== Nc && S !== Uc) {
            s = b;
            do {
              if (p = !1, s = t.indexOf(")", s + 1), s === -1)
                if (r || Ie) {
                  s = b;
                  break;
                } else
                  V("bracket");
              for (g = s; t.charCodeAt(g - 1) === Mc; )
                g -= 1, p = !p;
            } while (p);
            x = [
              "brackets",
              t.slice(b, s + 1),
              b,
              s
            ], b = s;
          } else
            s = t.indexOf(")", b + 1), f = t.slice(b, s + 1), s === -1 || Kk.test(f) ? x = [
              "(",
              "(",
              b
            ] : (x = [
              "brackets",
              f,
              b,
              s
            ], b = s);
          break;
        }
        case Gu:
        case Qp: {
          c = o === Gu ? "'" : '"', s = b;
          do {
            if (p = !1, s = t.indexOf(c, s + 1), s === -1)
              if (r || Ie) {
                s = b + 1;
                break;
              } else
                V("string");
            for (g = s; t.charCodeAt(g - 1) === Mc; )
              g -= 1, p = !p;
          } while (p);
          x = [
            "string",
            t.slice(b, s + 1),
            b,
            s
          ], b = s;
          break;
        }
        case Gk: {
          zc.lastIndex = b + 1, zc.test(t), zc.lastIndex === 0 ? s = t.length - 1 : s = zc.lastIndex - 2, x = [
            "at-word",
            t.slice(b, s + 1),
            b,
            s
          ], b = s;
          break;
        }
        case Mc: {
          for (s = b, d = !0; t.charCodeAt(s + 1) === Mc; )
            s += 1, d = !d;
          if (o = t.charCodeAt(s + 1), d && o !== Jp && o !== Zs && o !== Fc && o !== Lc && o !== Uc && o !== Nc && (s += 1, ev.test(t.charAt(s)))) {
            for (; ev.test(t.charAt(s + 1)); )
              s += 1;
            t.charCodeAt(s + 1) === Zs && (s += 1);
          }
          x = [
            "word",
            t.slice(b, s + 1),
            b,
            s
          ], b = s;
          break;
        }
        default: {
          o === Jp && t.charCodeAt(b + 1) === Vk ? (s = t.indexOf("*/", b + 2) + 1, s === 0 && (r || Ie ? s = t.length : V("comment")), x = [
            "comment",
            t.slice(b, s + 1),
            b,
            s
          ], b = s) : (jc.lastIndex = b + 1, jc.test(t), jc.lastIndex === 0 ? s = t.length - 1 : s = jc.lastIndex - 2, x = [
            "word",
            t.slice(b, s + 1),
            b,
            s
          ], L.push(x), b = s);
          break;
        }
      }
      return b++, x;
    }
  }
  function ye(ge) {
    $.push(ge);
  }
  return {
    back: ye,
    endOfFile: Q,
    nextToken: ie,
    position: W
  };
}, Tm = Ao, vl = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t) {
    var r;
    return r = e.call(this, t) || this, r.type = "atrule", r;
  }
  var i = n.prototype;
  return i.append = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    var c;
    return this.proxyOf.nodes || (this.nodes = []), (c = e.prototype.append).call.apply(c, [].concat([
      this
    ], o));
  }, i.prepend = function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    var c;
    return this.proxyOf.nodes || (this.nodes = []), (c = e.prototype.prepend).call.apply(c, [].concat([
      this
    ], o));
  }, n;
}(Tm), Fd = vl;
vl.default = vl;
Tm.registerAtRule(vl);
var Mm = Ao, Fm, Nm, Jo = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(t) {
    var r;
    return r = e.call(this, t) || this, r.type = "root", r.nodes || (r.nodes = []), r;
  }
  var i = n.prototype;
  return i.normalize = function(r, o, s) {
    var c = e.prototype.normalize.call(this, r);
    if (o) {
      if (s === "prepend")
        this.nodes.length > 1 ? o.raws.before = this.nodes[1].raws.before : delete o.raws.before;
      else if (this.first !== o)
        for (var f = Ae(c), d; !(d = f()).done; ) {
          var p = d.value;
          p.raws.before = o.raws.before;
        }
    }
    return c;
  }, i.removeChild = function(r, o) {
    var s = this.index(r);
    return !o && s === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[s].raws.before), e.prototype.removeChild.call(this, r);
  }, i.toResult = function(r) {
    r === void 0 && (r = {});
    var o = new Fm(new Nm(), this, r);
    return o.stringify();
  }, n;
}(Mm);
Jo.registerLazyResult = function(e) {
  Fm = e;
};
Jo.registerProcessor = function(e) {
  Nm = e;
};
var ka = Jo;
Jo.default = Jo;
Mm.registerRoot(Jo);
var ma = {
  comma: function(n) {
    return ma.split(n, [
      ","
    ], !0);
  },
  space: function(n) {
    var i = [
      " ",
      `
`,
      "	"
    ];
    return ma.split(n, i);
  },
  split: function(n, i, t) {
    for (var r = [], o = "", s = !1, c = 0, f = !1, d = "", p = !1, g = Ae(n), m; !(m = g()).done; ) {
      var S = m.value;
      p ? p = !1 : S === "\\" ? p = !0 : f ? S === d && (f = !1) : S === '"' || S === "'" ? (f = !0, d = S) : S === "(" ? c += 1 : S === ")" ? c > 0 && (c -= 1) : c === 0 && i.includes(S) && (s = !0), s ? (o !== "" && r.push(o.trim()), o = "", s = !1) : o += S;
    }
    return (t || o !== "") && r.push(o.trim()), r;
  }
}, Lm = ma;
ma.default = ma;
var Um = Ao, Zk = Lm, gl = /* @__PURE__ */ function(e) {
  Wr(n, e);
  function n(i) {
    var t;
    return t = e.call(this, i) || this, t.type = "rule", t.nodes || (t.nodes = []), t;
  }
  return Br(n, [
    {
      key: "selectors",
      get: function() {
        return Zk.comma(this.selector);
      },
      set: function(t) {
        var r = this.selector ? this.selector.match(/,\s*/) : null, o = r ? r[0] : "," + this.raw("between", "beforeOpen");
        this.selector = t.join(o);
      }
    }
  ]), n;
}(Um), Nd = gl;
gl.default = gl;
Um.registerRule(gl);
var Xk = Vl, Qk = Yk, Jk = Gl, eI = Fd, tI = ka, tv = Nd, rv = {
  empty: !0,
  space: !0
};
function rI(e) {
  for (var n = e.length - 1; n >= 0; n--) {
    var i = e[n], t = i[3] || i[2];
    if (t) return t;
  }
}
var nI = /* @__PURE__ */ function() {
  function e(i) {
    this.input = i, this.root = new tI(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
      input: i,
      start: {
        column: 1,
        line: 1,
        offset: 0
      }
    };
  }
  var n = e.prototype;
  return n.atrule = function(t) {
    var r = new eI();
    r.name = t[1].slice(1), r.name === "" && this.unnamedAtrule(r, t), this.init(r, t[2]);
    for (var o, s, c, f = !1, d = !1, p = [], g = []; !this.tokenizer.endOfFile(); ) {
      if (t = this.tokenizer.nextToken(), o = t[0], o === "(" || o === "[" ? g.push(o === "(" ? ")" : "]") : o === "{" && g.length > 0 ? g.push("}") : o === g[g.length - 1] && g.pop(), g.length === 0)
        if (o === ";") {
          r.source.end = this.getPosition(t[2]), r.source.end.offset++, this.semicolon = !0;
          break;
        } else if (o === "{") {
          d = !0;
          break;
        } else if (o === "}") {
          if (p.length > 0) {
            for (c = p.length - 1, s = p[c]; s && s[0] === "space"; )
              s = p[--c];
            s && (r.source.end = this.getPosition(s[3] || s[2]), r.source.end.offset++);
          }
          this.end(t);
          break;
        } else
          p.push(t);
      else
        p.push(t);
      if (this.tokenizer.endOfFile()) {
        f = !0;
        break;
      }
    }
    r.raws.between = this.spacesAndCommentsFromEnd(p), p.length ? (r.raws.afterName = this.spacesAndCommentsFromStart(p), this.raw(r, "params", p), f && (t = p[p.length - 1], r.source.end = this.getPosition(t[3] || t[2]), r.source.end.offset++, this.spaces = r.raws.between, r.raws.between = "")) : (r.raws.afterName = "", r.params = ""), d && (r.nodes = [], this.current = r);
  }, n.checkMissedSemicolon = function(t) {
    var r = this.colon(t);
    if (r !== !1) {
      for (var o = 0, s, c = r - 1; c >= 0 && (s = t[c], !(s[0] !== "space" && (o += 1, o === 2))); c--)
        ;
      throw this.input.error("Missed semicolon", s[0] === "word" ? s[3] + 1 : s[2]);
    }
  }, n.colon = function(t) {
    for (var r = 0, o, s, c, f = Ae(t.entries()), d; !(d = f()).done; ) {
      var p = d.value, g = p[0], m = p[1];
      if (o = m, s = o[0], s === "(" && (r += 1), s === ")" && (r -= 1), r === 0 && s === ":")
        if (!c)
          this.doubleColon(o);
        else {
          if (c[0] === "word" && c[1] === "progid")
            continue;
          return g;
        }
      c = o;
    }
    return !1;
  }, n.comment = function(t) {
    var r = new Jk();
    this.init(r, t[2]), r.source.end = this.getPosition(t[3] || t[2]), r.source.end.offset++;
    var o = t[1].slice(2, -2);
    if (/^\s*$/.test(o))
      r.text = "", r.raws.left = o, r.raws.right = "";
    else {
      var s = o.match(/^(\s*)([^]*\S)(\s*)$/);
      r.text = s[2], r.raws.left = s[1], r.raws.right = s[3];
    }
  }, n.createTokenizer = function() {
    this.tokenizer = Qk(this.input);
  }, n.decl = function(t, r) {
    var o = new Xk();
    this.init(o, t[0][2]);
    var s = t[t.length - 1];
    for (s[0] === ";" && (this.semicolon = !0, t.pop()), o.source.end = this.getPosition(s[3] || s[2] || rI(t)), o.source.end.offset++; t[0][0] !== "word"; )
      t.length === 1 && this.unknownWord(t), o.raws.before += t.shift()[1];
    for (o.source.start = this.getPosition(t[0][2]), o.prop = ""; t.length; ) {
      var c = t[0][0];
      if (c === ":" || c === "space" || c === "comment")
        break;
      o.prop += t.shift()[1];
    }
    o.raws.between = "";
    for (var f; t.length; )
      if (f = t.shift(), f[0] === ":") {
        o.raws.between += f[1];
        break;
      } else
        f[0] === "word" && /\w/.test(f[1]) && this.unknownWord([
          f
        ]), o.raws.between += f[1];
    (o.prop[0] === "_" || o.prop[0] === "*") && (o.raws.before += o.prop[0], o.prop = o.prop.slice(1));
    for (var d = [], p; t.length && (p = t[0][0], !(p !== "space" && p !== "comment")); )
      d.push(t.shift());
    this.precheckMissedSemicolon(t);
    for (var g = t.length - 1; g >= 0; g--) {
      if (f = t[g], f[1].toLowerCase() === "!important") {
        o.important = !0;
        var m = this.stringFrom(t, g);
        m = this.spacesFromEnd(t) + m, m !== " !important" && (o.raws.important = m);
        break;
      } else if (f[1].toLowerCase() === "important") {
        for (var S = t.slice(0), x = "", I = g; I > 0; I--) {
          var b = S[I][0];
          if (x.trim().indexOf("!") === 0 && b !== "space")
            break;
          x = S.pop()[1] + x;
        }
        x.trim().indexOf("!") === 0 && (o.important = !0, o.raws.important = x, t = S);
      }
      if (f[0] !== "space" && f[0] !== "comment")
        break;
    }
    var L = t.some(function($) {
      return $[0] !== "space" && $[0] !== "comment";
    });
    L && (o.raws.between += d.map(function($) {
      return $[1];
    }).join(""), d = []), this.raw(o, "value", d.concat(t), r), o.value.includes(":") && !r && this.checkMissedSemicolon(t);
  }, n.doubleColon = function(t) {
    throw this.input.error("Double colon", {
      offset: t[2]
    }, {
      offset: t[2] + t[1].length
    });
  }, n.emptyRule = function(t) {
    var r = new tv();
    this.init(r, t[2]), r.selector = "", r.raws.between = "", this.current = r;
  }, n.end = function(t) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(t[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(t);
  }, n.endFile = function() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }, n.freeSemicolon = function(t) {
    if (this.spaces += t[1], this.current.nodes) {
      var r = this.current.nodes[this.current.nodes.length - 1];
      r && r.type === "rule" && !r.raws.ownSemicolon && (r.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }, n.getPosition = function(t) {
    var r = this.input.fromOffset(t);
    return {
      column: r.col,
      line: r.line,
      offset: t
    };
  }, n.init = function(t, r) {
    this.current.push(t), t.source = {
      input: this.input,
      start: this.getPosition(r)
    }, t.raws.before = this.spaces, this.spaces = "", t.type !== "comment" && (this.semicolon = !1);
  }, n.other = function(t) {
    for (var r = !1, o = null, s = !1, c = null, f = [], d = t[1].startsWith("--"), p = [], g = t; g; ) {
      if (o = g[0], p.push(g), o === "(" || o === "[")
        c || (c = g), f.push(o === "(" ? ")" : "]");
      else if (d && s && o === "{")
        c || (c = g), f.push("}");
      else if (f.length === 0)
        if (o === ";")
          if (s) {
            this.decl(p, d);
            return;
          } else
            break;
        else if (o === "{") {
          this.rule(p);
          return;
        } else if (o === "}") {
          this.tokenizer.back(p.pop()), r = !0;
          break;
        } else o === ":" && (s = !0);
      else o === f[f.length - 1] && (f.pop(), f.length === 0 && (c = null));
      g = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (r = !0), f.length > 0 && this.unclosedBracket(c), r && s) {
      if (!d)
        for (; p.length && (g = p[p.length - 1][0], !(g !== "space" && g !== "comment")); )
          this.tokenizer.back(p.pop());
      this.decl(p, d);
    } else
      this.unknownWord(p);
  }, n.parse = function() {
    for (var t; !this.tokenizer.endOfFile(); )
      switch (t = this.tokenizer.nextToken(), t[0]) {
        case "space":
          this.spaces += t[1];
          break;
        case ";":
          this.freeSemicolon(t);
          break;
        case "}":
          this.end(t);
          break;
        case "comment":
          this.comment(t);
          break;
        case "at-word":
          this.atrule(t);
          break;
        case "{":
          this.emptyRule(t);
          break;
        default:
          this.other(t);
          break;
      }
    this.endFile();
  }, n.precheckMissedSemicolon = function() {
  }, n.raw = function(t, r, o, s) {
    for (var c, f, d = o.length, p = "", g = !0, m, S, x = 0; x < d; x += 1)
      c = o[x], f = c[0], f === "space" && x === d - 1 && !s ? g = !1 : f === "comment" ? (S = o[x - 1] ? o[x - 1][0] : "empty", m = o[x + 1] ? o[x + 1][0] : "empty", !rv[S] && !rv[m] ? p.slice(-1) === "," ? g = !1 : p += c[1] : g = !1) : p += c[1];
    if (!g) {
      var I = o.reduce(function(b, L) {
        return b + L[1];
      }, "");
      t.raws[r] = {
        raw: I,
        value: p
      };
    }
    t[r] = p;
  }, n.rule = function(t) {
    t.pop();
    var r = new tv();
    this.init(r, t[0][2]), r.raws.between = this.spacesAndCommentsFromEnd(t), this.raw(r, "selector", t), this.current = r;
  }, n.spacesAndCommentsFromEnd = function(t) {
    for (var r, o = ""; t.length && (r = t[t.length - 1][0], !(r !== "space" && r !== "comment")); )
      o = t.pop()[1] + o;
    return o;
  }, n.spacesAndCommentsFromStart = function(t) {
    for (var r, o = ""; t.length && (r = t[0][0], !(r !== "space" && r !== "comment")); )
      o += t.shift()[1];
    return o;
  }, n.spacesFromEnd = function(t) {
    for (var r, o = ""; t.length && (r = t[t.length - 1][0], r === "space"); )
      o = t.pop()[1] + o;
    return o;
  }, n.stringFrom = function(t, r) {
    for (var o = "", s = r; s < t.length; s++)
      o += t[s][1];
    return t.splice(r, t.length - r), o;
  }, n.unclosedBlock = function() {
    var t = this.current.source.start;
    throw this.input.error("Unclosed block", t.line, t.column);
  }, n.unclosedBracket = function(t) {
    throw this.input.error("Unclosed bracket", {
      offset: t[2]
    }, {
      offset: t[2] + 1
    });
  }, n.unexpectedClose = function(t) {
    throw this.input.error("Unexpected }", {
      offset: t[2]
    }, {
      offset: t[2] + 1
    });
  }, n.unknownWord = function(t) {
    throw this.input.error("Unknown word", {
      offset: t[0][2]
    }, {
      offset: t[0][2] + t[0][1].length
    });
  }, n.unnamedAtrule = function(t, r) {
    throw this.input.error("At-rule without name", {
      offset: r[2]
    }, {
      offset: r[2] + r[1].length
    });
  }, e;
}(), iI = nI, oI = Ao, sI = iI, aI = Hl;
function ml(e, n) {
  var i = new aI(e, n), t = new sI(i);
  try {
    t.parse();
  } catch (r) {
    throw process.env.NODE_ENV !== "production" && r.name === "CssSyntaxError" && n && n.from && (/\.scss$/i.test(n.from) ? r.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(n.from) ? r.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(n.from) && (r.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), r;
  }
  return t.root;
}
var Ld = ml;
ml.default = ml;
oI.registerParse(ml);
var Zn = Fi.isClean, cI = Fi.my, lI = wm, uI = Wl, fI = Ao, dI = Td, hI = Pm, nv = Md, pI = Ld, vI = ka, gI = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, mI = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, yI = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, es = 0;
function Xs(e) {
  return (typeof e > "u" ? "undefined" : lt(e)) === "object" && typeof e.then == "function";
}
function zm(e) {
  var n = !1, i = gI[e.type];
  return e.type === "decl" ? n = e.prop.toLowerCase() : e.type === "atrule" && (n = e.name.toLowerCase()), n && e.append ? [
    i,
    i + "-" + n,
    es,
    i + "Exit",
    i + "Exit-" + n
  ] : n ? [
    i,
    i + "-" + n,
    i + "Exit",
    i + "Exit-" + n
  ] : e.append ? [
    i,
    es,
    i + "Exit"
  ] : [
    i,
    i + "Exit"
  ];
}
function iv(e) {
  var n;
  return e.type === "document" ? n = [
    "Document",
    es,
    "DocumentExit"
  ] : e.type === "root" ? n = [
    "Root",
    es,
    "RootExit"
  ] : n = zm(e), {
    eventIndex: 0,
    events: n,
    iterator: 0,
    node: e,
    visitorIndex: 0,
    visitors: []
  };
}
function Wf(e) {
  return e[Zn] = !1, e.nodes && e.nodes.forEach(function(n) {
    return Wf(n);
  }), e;
}
var qf = {}, ts = /* @__PURE__ */ function() {
  function e(i, t, r) {
    var o = this;
    this.stringified = !1, this.processed = !1;
    var s;
    if ((typeof t > "u" ? "undefined" : lt(t)) === "object" && t !== null && (t.type === "root" || t.type === "document"))
      s = Wf(t);
    else if (Xe(t, e) || Xe(t, nv))
      s = Wf(t.root), t.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = !1), r.map.prev = t.map);
    else {
      var c = pI;
      r.syntax && (c = r.syntax.parse), r.parser && (c = r.parser), c.parse && (c = c.parse);
      try {
        s = c(t, r);
      } catch (f) {
        this.processed = !0, this.error = f;
      }
      s && !s[cI] && fI.rebuild(s);
    }
    this.result = new nv(i, s, r), this.helpers = yt({}, qf, {
      postcss: qf,
      result: this.result
    }), this.plugins = this.processor.plugins.map(function(f) {
      return (typeof f > "u" ? "undefined" : lt(f)) === "object" && f.prepare ? yt({}, f, f.prepare(o.result)) : f;
    });
  }
  var n = e.prototype;
  return n.async = function() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }, n.catch = function(t) {
    return this.async().catch(t);
  }, n.finally = function(t) {
    return this.async().then(t, t);
  }, n.getAsyncError = function() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }, n.handleError = function(t, r) {
    var o = this.result.lastPlugin;
    try {
      if (r && r.addToError(t), this.error = t, t.name === "CssSyntaxError" && !t.plugin)
        t.plugin = o.postcssPlugin, t.setMessage();
      else if (o.postcssVersion && process.env.NODE_ENV !== "production") {
        var s = o.postcssPlugin, c = o.postcssVersion, f = this.result.processor.version, d = c.split("."), p = f.split(".");
        (d[0] !== p[0] || parseInt(d[1]) > parseInt(p[1])) && console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + f + ", but " + s + " uses " + c + ". Perhaps this is the source of the error below.");
      }
    } catch (g) {
      console && console.error && console.error(g);
    }
    return t;
  }, n.prepareVisitors = function() {
    var t = this;
    this.listeners = {};
    for (var r = function(p, g, m) {
      t.listeners[g] || (t.listeners[g] = []), t.listeners[g].push([
        p,
        m
      ]);
    }, o = Ae(this.plugins), s; !(s = o()).done; ) {
      var c = s.value;
      if ((typeof c > "u" ? "undefined" : lt(c)) === "object")
        for (var f in c) {
          if (!mI[f] && /^[A-Z]/.test(f))
            throw new Error("Unknown event " + f + " in " + c.postcssPlugin + ". Try to update PostCSS (" + this.processor.version + " now).");
          if (!yI[f])
            if (lt(c[f]) === "object")
              for (var d in c[f])
                d === "*" ? r(c, f, c[f][d]) : r(c, f + "-" + d.toLowerCase(), c[f][d]);
            else typeof c[f] == "function" && r(c, f, c[f]);
        }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }, n.runAsync = function() {
    var t = this;
    return vd(function() {
      var r, o, s, c, f, d, p, g, m, S, x, I;
      return ua(this, function(b) {
        switch (b.label) {
          case 0:
            t.plugin = 0, r = 0, b.label = 1;
          case 1:
            if (!(r < t.plugins.length)) return [
              3,
              6
            ];
            if (o = t.plugins[r], s = t.runOnRoot(o), !Xs(s)) return [
              3,
              5
            ];
            b.label = 2;
          case 2:
            return b.trys.push([
              2,
              4,
              ,
              5
            ]), [
              4,
              s
            ];
          case 3:
            return b.sent(), [
              3,
              5
            ];
          case 4:
            throw c = b.sent(), t.handleError(c);
          case 5:
            return r++, [
              3,
              1
            ];
          case 6:
            if (t.prepareVisitors(), !t.hasListener) return [
              3,
              18
            ];
            f = t.result.root, b.label = 7;
          case 7:
            if (f[Zn]) return [
              3,
              14
            ];
            f[Zn] = !0, d = [
              iv(f)
            ], b.label = 8;
          case 8:
            if (!(d.length > 0)) return [
              3,
              13
            ];
            if (p = t.visitTick(d), !Xs(p)) return [
              3,
              12
            ];
            b.label = 9;
          case 9:
            return b.trys.push([
              9,
              11,
              ,
              12
            ]), [
              4,
              p
            ];
          case 10:
            return b.sent(), [
              3,
              12
            ];
          case 11:
            throw g = b.sent(), m = d[d.length - 1].node, t.handleError(g, m);
          case 12:
            return [
              3,
              8
            ];
          case 13:
            return [
              3,
              7
            ];
          case 14:
            if (!t.listeners.OnceExit) return [
              3,
              18
            ];
            S = function() {
              var L, $, W, V, Q;
              return ua(this, function(ie) {
                switch (ie.label) {
                  case 0:
                    L = I.value, $ = L[0], W = L[1], t.result.lastPlugin = $, ie.label = 1;
                  case 1:
                    return ie.trys.push([
                      1,
                      6,
                      ,
                      7
                    ]), f.type !== "document" ? [
                      3,
                      3
                    ] : (V = f.nodes.map(function(ye) {
                      return W(ye, t.helpers);
                    }), [
                      4,
                      Promise.all(V)
                    ]);
                  case 2:
                    return ie.sent(), [
                      3,
                      5
                    ];
                  case 3:
                    return [
                      4,
                      W(f, t.helpers)
                    ];
                  case 4:
                    ie.sent(), ie.label = 5;
                  case 5:
                    return [
                      3,
                      7
                    ];
                  case 6:
                    throw Q = ie.sent(), t.handleError(Q);
                  case 7:
                    return [
                      2
                    ];
                }
              });
            }, x = Ae(t.listeners.OnceExit), b.label = 15;
          case 15:
            return (I = x()).done ? [
              3,
              18
            ] : [
              5,
              Sg(S())
            ];
          case 16:
            b.sent(), b.label = 17;
          case 17:
            return [
              3,
              15
            ];
          case 18:
            return t.processed = !0, [
              2,
              t.stringify()
            ];
        }
      });
    })();
  }, n.runOnRoot = function(t) {
    var r = this;
    this.result.lastPlugin = t;
    try {
      if ((typeof t > "u" ? "undefined" : lt(t)) === "object" && t.Once) {
        if (this.result.root.type === "document") {
          var o = this.result.root.nodes.map(function(s) {
            return t.Once(s, r.helpers);
          });
          return Xs(o[0]) ? Promise.all(o) : o;
        }
        return t.Once(this.result.root, this.helpers);
      } else if (typeof t == "function")
        return t(this.result.root, this.result);
    } catch (s) {
      throw this.handleError(s);
    }
  }, n.stringify = function() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    var t = this.result.opts, r = uI;
    t.syntax && (r = t.syntax.stringify), t.stringifier && (r = t.stringifier), r.stringify && (r = r.stringify);
    var o = new lI(r, this.result.root, this.result.opts), s = o.generate();
    return this.result.css = s[0], this.result.map = s[1], this.result;
  }, n.sync = function() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (var t = Ae(this.plugins), r; !(r = t()).done; ) {
      var o = r.value, s = this.runOnRoot(o);
      if (Xs(s))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      for (var c = this.result.root; !c[Zn]; )
        c[Zn] = !0, this.walkSync(c);
      if (this.listeners.OnceExit)
        if (c.type === "document")
          for (var f = Ae(c.nodes), d; !(d = f()).done; ) {
            var p = d.value;
            this.visitSync(this.listeners.OnceExit, p);
          }
        else
          this.visitSync(this.listeners.OnceExit, c);
    }
    return this.result;
  }, n.then = function(t, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || hI("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(t, r);
  }, n.toString = function() {
    return this.css;
  }, n.visitSync = function(t, r) {
    for (var o = Ae(t), s; !(s = o()).done; ) {
      var c = s.value, f = c[0], d = c[1];
      this.result.lastPlugin = f;
      var p = void 0;
      try {
        p = d(r, this.helpers);
      } catch (g) {
        throw this.handleError(g, r.proxyOf);
      }
      if (r.type !== "root" && r.type !== "document" && !r.parent)
        return !0;
      if (Xs(p))
        throw this.getAsyncError();
    }
  }, n.visitTick = function(t) {
    var r = t[t.length - 1], o = r.node, s = r.visitors;
    if (o.type !== "root" && o.type !== "document" && !o.parent) {
      t.pop();
      return;
    }
    if (s.length > 0 && r.visitorIndex < s.length) {
      var c = s[r.visitorIndex], f = c[0], d = c[1];
      r.visitorIndex += 1, r.visitorIndex === s.length && (r.visitors = [], r.visitorIndex = 0), this.result.lastPlugin = f;
      try {
        return d(o.toProxy(), this.helpers);
      } catch (x) {
        throw this.handleError(x, o);
      }
    }
    if (r.iterator !== 0) {
      for (var p = r.iterator, g; g = o.nodes[o.indexes[p]]; )
        if (o.indexes[p] += 1, !g[Zn]) {
          g[Zn] = !0, t.push(iv(g));
          return;
        }
      r.iterator = 0, delete o.indexes[p];
    }
    for (var m = r.events; r.eventIndex < m.length; ) {
      var S = m[r.eventIndex];
      if (r.eventIndex += 1, S === es) {
        o.nodes && o.nodes.length && (o[Zn] = !0, r.iterator = o.getIterator());
        return;
      } else if (this.listeners[S]) {
        r.visitors = this.listeners[S];
        return;
      }
    }
    t.pop();
  }, n.walkSync = function(t) {
    var r = this;
    t[Zn] = !0;
    for (var o = zm(t), s = Ae(o), c; !(c = s()).done; ) {
      var f = c.value;
      if (f === es)
        t.nodes && t.each(function(p) {
          p[Zn] || r.walkSync(p);
        });
      else {
        var d = this.listeners[f];
        if (d && this.visitSync(d, t.toProxy()))
          return;
      }
    }
  }, n.warnings = function() {
    return this.sync().warnings();
  }, Br(e, [
    {
      key: "content",
      get: function() {
        return this.stringify().content;
      }
    },
    {
      key: "css",
      get: function() {
        return this.stringify().css;
      }
    },
    {
      key: "map",
      get: function() {
        return this.stringify().map;
      }
    },
    {
      key: "messages",
      get: function() {
        return this.sync().messages;
      }
    },
    {
      key: "opts",
      get: function() {
        return this.result.opts;
      }
    },
    {
      key: "processor",
      get: function() {
        return this.result.processor;
      }
    },
    {
      key: "root",
      get: function() {
        return this.sync().root;
      }
    },
    {
      key: Symbol.toStringTag,
      get: function() {
        return "LazyResult";
      }
    }
  ]), e;
}();
ts.registerPostcss = function(e) {
  qf = e;
};
var jm = ts;
ts.default = ts;
vI.registerLazyResult(ts);
dI.registerLazyResult(ts);
var xI = wm, bI = Wl, wI = Pm, _I = Ld, CI = Md, Vf = /* @__PURE__ */ function() {
  function e(i, t, r) {
    t = t.toString(), this.stringified = !1, this._processor = i, this._css = t, this._opts = r, this._map = void 0;
    var o, s = bI;
    this.result = new CI(this._processor, o, this._opts), this.result.css = t;
    var c = this;
    Object.defineProperty(this.result, "root", {
      get: function() {
        return c.root;
      }
    });
    var f = new xI(s, o, this._opts, t);
    if (f.isMap()) {
      var d = f.generate(), p = d[0], g = d[1];
      p && (this.result.css = p), g && (this.result.map = g);
    } else
      f.clearAnnotation(), this.result.css = f.css;
  }
  var n = e.prototype;
  return n.async = function() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }, n.catch = function(t) {
    return this.async().catch(t);
  }, n.finally = function(t) {
    return this.async().then(t, t);
  }, n.sync = function() {
    if (this.error) throw this.error;
    return this.result;
  }, n.then = function(t, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || wI("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(t, r);
  }, n.toString = function() {
    return this._css;
  }, n.warnings = function() {
    return [];
  }, Br(e, [
    {
      key: "content",
      get: function() {
        return this.result.css;
      }
    },
    {
      key: "css",
      get: function() {
        return this.result.css;
      }
    },
    {
      key: "map",
      get: function() {
        return this.result.map;
      }
    },
    {
      key: "messages",
      get: function() {
        return [];
      }
    },
    {
      key: "opts",
      get: function() {
        return this.result.opts;
      }
    },
    {
      key: "processor",
      get: function() {
        return this.result.processor;
      }
    },
    {
      key: "root",
      get: function() {
        if (this._root)
          return this._root;
        var t, r = _I;
        try {
          t = r(this._css, this._opts);
        } catch (o) {
          this.error = o;
        }
        if (this.error)
          throw this.error;
        return this._root = t, t;
      }
    },
    {
      key: Symbol.toStringTag,
      get: function() {
        return "NoWorkResult";
      }
    }
  ]), e;
}(), SI = Vf;
Vf.default = Vf;
var EI = SI, AI = jm, kI = Td, II = ka, ya = /* @__PURE__ */ function() {
  function e(i) {
    i === void 0 && (i = []), this.version = "8.4.38", this.plugins = this.normalize(i);
  }
  var n = e.prototype;
  return n.normalize = function(t) {
    for (var r = [], o = Ae(t), s; !(s = o()).done; ) {
      var c = s.value;
      if (c.postcss === !0 ? c = c() : c.postcss && (c = c.postcss), (typeof c > "u" ? "undefined" : lt(c)) === "object" && Array.isArray(c.plugins))
        r = r.concat(c.plugins);
      else if ((typeof c > "u" ? "undefined" : lt(c)) === "object" && c.postcssPlugin)
        r.push(c);
      else if (typeof c == "function")
        r.push(c);
      else if ((typeof c > "u" ? "undefined" : lt(c)) === "object" && (c.parse || c.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
      } else
        throw new Error(c + " is not a PostCSS plugin");
    }
    return r;
  }, n.process = function(t, r) {
    return r === void 0 && (r = {}), !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new EI(this, t, r) : new AI(this, t, r);
  }, n.use = function(t) {
    return this.plugins = this.plugins.concat(this.normalize([
      t
    ])), this;
  }, e;
}(), OI = ya;
ya.default = ya;
II.registerProcessor(ya);
kI.registerProcessor(ya);
var DI = Vl, RI = gm, PI = Gl, BI = Fd, TI = Hl, MI = ka, FI = Nd;
function xa(e, n) {
  if (Array.isArray(e)) return e.map(function(g) {
    return xa(g);
  });
  var i = e.inputs, t = ca(e, [
    "inputs"
  ]);
  if (i) {
    n = [];
    for (var r = Ae(i), o; !(o = r()).done; ) {
      var s = o.value, c = yt({}, s, {
        __proto__: TI.prototype
      });
      c.map && (c.map = yt({}, c.map, {
        __proto__: RI.prototype
      })), n.push(c);
    }
  }
  if (t.nodes && (t.nodes = e.nodes.map(function(g) {
    return xa(g, n);
  })), t.source) {
    var f = t.source, d = f.inputId, p = ca(f, [
      "inputId"
    ]);
    t.source = p, d != null && (t.source.input = n[d]);
  }
  if (t.type === "root")
    return new MI(t);
  if (t.type === "decl")
    return new DI(t);
  if (t.type === "rule")
    return new FI(t);
  if (t.type === "comment")
    return new PI(t);
  if (t.type === "atrule")
    return new BI(t);
  throw new Error("Unknown node type: " + e.type);
}
var NI = xa;
xa.default = xa;
var LI = Rd, $m = Vl, UI = jm, zI = Ao, Ud = OI, jI = Wl, $I = NI, Wm = Td, WI = Bm, qm = Gl, Vm = Fd, qI = Md, VI = Hl, HI = Ld, GI = Lm, Hm = Nd, Gm = ka, KI = ql;
function Pt() {
  for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
    n[i] = arguments[i];
  return n.length === 1 && Array.isArray(n[0]) && (n = n[0]), new Ud(n);
}
Pt.plugin = function(n, i) {
  var t = !1;
  function r() {
    for (var s = arguments.length, c = new Array(s), f = 0; f < s; f++)
      c[f] = arguments[f];
    console && console.warn && !t && (t = !0, console.warn(n + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(n + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));
    var d = i.apply(void 0, [].concat(c));
    return d.postcssPlugin = n, d.postcssVersion = new Ud().version, d;
  }
  var o;
  return Object.defineProperty(r, "postcss", {
    get: function() {
      return o || (o = r()), o;
    }
  }), r.process = function(s, c, f) {
    return Pt([
      r(f)
    ]).process(s, c);
  }, r;
};
Pt.stringify = jI;
Pt.parse = HI;
Pt.fromJSON = $I;
Pt.list = GI;
Pt.comment = function(e) {
  return new qm(e);
};
Pt.atRule = function(e) {
  return new Vm(e);
};
Pt.decl = function(e) {
  return new $m(e);
};
Pt.rule = function(e) {
  return new Hm(e);
};
Pt.root = function(e) {
  return new Gm(e);
};
Pt.document = function(e) {
  return new Wm(e);
};
Pt.CssSyntaxError = LI;
Pt.Declaration = $m;
Pt.Container = zI;
Pt.Processor = Ud;
Pt.Document = Wm;
Pt.Comment = qm;
Pt.Warning = WI;
Pt.AtRule = Vm;
Pt.Result = qI;
Pt.Input = VI;
Pt.Rule = Hm;
Pt.Root = Gm;
Pt.Node = KI;
UI.registerPostcss(Pt);
var YI = Pt;
Pt.default = Pt;
var Xt = /* @__PURE__ */ sk(YI);
Xt.stringify;
Xt.fromJSON;
Xt.plugin;
Xt.parse;
Xt.list;
Xt.document;
Xt.comment;
Xt.atRule;
Xt.rule;
Xt.decl;
Xt.root;
Xt.CssSyntaxError;
Xt.Declaration;
Xt.Container;
Xt.Processor;
Xt.Document;
Xt.Comment;
Xt.Warning;
Xt.AtRule;
Xt.Result;
Xt.Input;
Xt.Rule;
Xt.Root;
Xt.Node;
var ZI = /* @__PURE__ */ function() {
  function e() {
    for (var i = arguments.length, t = new Array(i), r = 0; r < i; r++)
      t[r] = arguments[r];
    En(this, "parentElement", null), En(this, "parentNode", null), En(this, "ownerDocument"), En(this, "firstChild", null), En(this, "lastChild", null), En(this, "previousSibling", null), En(this, "nextSibling", null), En(this, "ELEMENT_NODE", 1), En(this, "TEXT_NODE", 3), En(this, "nodeType"), En(this, "nodeName"), En(this, "RRNodeType");
  }
  var n = e.prototype;
  return n.contains = function(t) {
    if (Xe(t, e)) {
      if (t.ownerDocument !== this.ownerDocument) return !1;
      if (t === this) return !0;
    } else return !1;
    for (; t.parentNode; ) {
      if (t.parentNode === this) return !0;
      t = t.parentNode;
    }
    return !1;
  }, n.appendChild = function(t) {
    throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.");
  }, n.insertBefore = function(t, r) {
    throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.");
  }, n.removeChild = function(t) {
    throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.");
  }, n.toString = function() {
    return "RRNode";
  }, Br(e, [
    {
      key: "childNodes",
      get: function() {
        for (var t = [], r = this.firstChild; r; )
          t.push(r), r = r.nextSibling;
        return t;
      }
    }
  ]), e;
}(), ov = {
  Node: [
    "childNodes",
    "parentNode",
    "parentElement",
    "textContent"
  ],
  ShadowRoot: [
    "host",
    "styleSheets"
  ],
  Element: [
    "shadowRoot",
    "querySelector",
    "querySelectorAll"
  ],
  MutationObserver: []
}, sv = {
  Node: [
    "contains",
    "getRootNode"
  ],
  ShadowRoot: [
    "getSelection"
  ],
  Element: [],
  MutationObserver: [
    "constructor"
  ]
}, $c = {}, XI = function() {
  return !!globalThis.Zone;
};
function zd(e) {
  if ($c[e]) return $c[e];
  var n = globalThis[e], i = n.prototype, t = e in ov ? ov[e] : void 0, r = !!(t && // @ts-expect-error 2345
  t.every(function(p) {
    var g, m;
    return !!((m = (g = Object.getOwnPropertyDescriptor(i, p)) == null ? void 0 : g.get) != null && m.toString().includes("[native code]"));
  })), o = e in sv ? sv[e] : void 0, s = !!(o && o.every(
    // @ts-expect-error 2345
    function(p) {
      var g;
      return typeof i[p] == "function" && ((g = i[p]) == null ? void 0 : g.toString().includes("[native code]"));
    }
  ));
  if (r && s && !XI())
    return $c[e] = n.prototype, n.prototype;
  try {
    var c = document.createElement("iframe");
    document.body.appendChild(c);
    var f = c.contentWindow;
    if (!f) return n.prototype;
    var d = f[e].prototype;
    return document.body.removeChild(c), d ? $c[e] = d : i;
  } catch {
    return i;
  }
}
var Ku = {};
function Ni(e, n, i) {
  var t, r = e + "." + String(i);
  if (Ku[r]) return Ku[r].call(n);
  var o = zd(e), s = (t = Object.getOwnPropertyDescriptor(o, i)) == null ? void 0 : t.get;
  return s ? (Ku[r] = s, s.call(n)) : n[i];
}
var Yu = {};
function Km(e, n, i) {
  var t = e + "." + String(i);
  if (Yu[t]) return Yu[t].bind(n);
  var r = zd(e), o = r[i];
  return typeof o != "function" ? n[i] : (Yu[t] = o, o.bind(n));
}
function QI(e) {
  return Ni("Node", e, "childNodes");
}
function JI(e) {
  return Ni("Node", e, "parentNode");
}
function eO(e) {
  return Ni("Node", e, "parentElement");
}
function tO(e) {
  return Ni("Node", e, "textContent");
}
function rO(e, n) {
  return Km("Node", e, "contains")(n);
}
function nO(e) {
  return Km("Node", e, "getRootNode")();
}
function iO(e) {
  return !e || !("host" in e) ? null : Ni("ShadowRoot", e, "host");
}
function oO(e) {
  return e.styleSheets;
}
function sO(e) {
  return !e || !("shadowRoot" in e) ? null : Ni("Element", e, "shadowRoot");
}
function aO(e, n) {
  return Ni("Element", e, "querySelector")(n);
}
function cO(e, n) {
  return Ni("Element", e, "querySelectorAll")(n);
}
function Ym() {
  return zd("MutationObserver").constructor;
}
var ct = {
  childNodes: QI,
  parentNode: JI,
  parentElement: eO,
  textContent: tO,
  contains: rO,
  getRootNode: nO,
  host: iO,
  styleSheets: oO,
  shadowRoot: sO,
  querySelector: aO,
  querySelectorAll: cO,
  mutationObserver: Ym
};
function tn(e, n, i) {
  i === void 0 && (i = document);
  var t = {
    capture: !0,
    passive: !0
  };
  return i.addEventListener(e, n, t), function() {
    return i.removeEventListener(e, n, t);
  };
}
var zo = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`, av = {
  map: {},
  getId: function() {
    return console.error(zo), -1;
  },
  getNode: function() {
    return console.error(zo), null;
  },
  removeNodeFromMap: function() {
    console.error(zo);
  },
  has: function() {
    return console.error(zo), !1;
  },
  reset: function() {
    console.error(zo);
  }
};
typeof window < "u" && window.Proxy && window.Reflect && (av = new Proxy(av, {
  get: function(n, i, t) {
    return i === "map" && console.error(zo), Reflect.get(n, i, t);
  }
}));
function ba(e, n, i) {
  i === void 0 && (i = {});
  var t = null, r = 0;
  return function() {
    for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
      s[c] = arguments[c];
    var f = Date.now();
    !r && i.leading === !1 && (r = f);
    var d = n - (f - r), p = this;
    d <= 0 || d > n ? (t && (clearTimeout(t), t = null), r = f, e.apply(p, s)) : !t && i.trailing !== !1 && (t = setTimeout(function() {
      r = i.leading === !1 ? 0 : Date.now(), t = null, e.apply(p, s);
    }, d));
  };
}
function Kl(e, n, i, t, r) {
  r === void 0 && (r = window);
  var o = r.Object.getOwnPropertyDescriptor(e, n);
  return r.Object.defineProperty(e, n, t ? i : {
    set: function(c) {
      var f = this;
      setTimeout(function() {
        i.set.call(f, c);
      }, 0), o && o.set && o.set.call(this, c);
    }
  }), function() {
    return Kl(e, n, o || {}, !0);
  };
}
function cs(e, n, i) {
  try {
    if (!(n in e))
      return function() {
      };
    var t = e[n], r = i(t);
    return typeof r == "function" && (r.prototype = r.prototype || {}, Object.defineProperties(r, {
      __rrweb_original__: {
        enumerable: !1,
        value: t
      }
    })), e[n] = r, function() {
      e[n] = t;
    };
  } catch {
    return function() {
    };
  }
}
var yl = Date.now;
/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString()) || (yl = function() {
  return /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime();
});
function Zm(e) {
  var n, i, t, r, o = e.document;
  return {
    left: o.scrollingElement ? o.scrollingElement.scrollLeft : e.pageXOffset !== void 0 ? e.pageXOffset : o.documentElement.scrollLeft || (o == null ? void 0 : o.body) && ((n = ct.parentElement(o.body)) == null ? void 0 : n.scrollLeft) || ((i = o == null ? void 0 : o.body) == null ? void 0 : i.scrollLeft) || 0,
    top: o.scrollingElement ? o.scrollingElement.scrollTop : e.pageYOffset !== void 0 ? e.pageYOffset : (o == null ? void 0 : o.documentElement.scrollTop) || (o == null ? void 0 : o.body) && ((t = ct.parentElement(o.body)) == null ? void 0 : t.scrollTop) || ((r = o == null ? void 0 : o.body) == null ? void 0 : r.scrollTop) || 0
  };
}
function Xm() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function Qm() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function Jm(e) {
  if (!e)
    return null;
  var n = e.nodeType === e.ELEMENT_NODE ? e : ct.parentElement(e);
  return n;
}
function rn(e, n, i, t) {
  if (!e)
    return !1;
  var r = Jm(e);
  if (!r)
    return !1;
  try {
    if (typeof n == "string") {
      if (r.classList.contains(n) || t && r.closest("." + n) !== null) return !0;
    } else if (ll(r, n, t)) return !0;
  } catch {
  }
  return !!(i && (r.matches(i) || t && r.closest(i) !== null));
}
function lO(e, n) {
  return n.getId(e) !== -1;
}
function Zu(e, n, i) {
  return e.tagName === "TITLE" && i.headTitleMutations ? !0 : n.getId(e) === fa;
}
function ey(e, n) {
  if (Js(e))
    return !1;
  var i = n.getId(e);
  if (!n.has(i))
    return !0;
  var t = ct.parentNode(e);
  return t && t.nodeType === e.DOCUMENT_NODE ? !1 : t ? ey(t, n) : !0;
}
function Hf(e) {
  return !!e.changedTouches;
}
function uO(e) {
  e === void 0 && (e = window), "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach);
}
function ty(e, n) {
  return !!(e.nodeName === "IFRAME" && n.getMeta(e));
}
function ry(e, n) {
  return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && n.getMeta(e));
}
function Gf(e) {
  return e ? Xe(e, ZI) && "shadowRoot" in e ? !!e.shadowRoot : !!ct.shadowRoot(e) : !1;
}
var fO = /* @__PURE__ */ function() {
  function e() {
    me(this, "id", 1), me(this, "styleIDMap", /* @__PURE__ */ new WeakMap()), me(this, "idStyleMap", /* @__PURE__ */ new Map());
  }
  var n = e.prototype;
  return n.getId = function(t) {
    var r;
    return (r = this.styleIDMap.get(t)) != null ? r : -1;
  }, n.has = function(t) {
    return this.styleIDMap.has(t);
  }, n.add = function(t, r) {
    if (this.has(t)) return this.getId(t);
    var o;
    return r === void 0 ? o = this.id++ : o = r, this.styleIDMap.set(t, o), this.idStyleMap.set(o, t), o;
  }, n.getStyle = function(t) {
    return this.idStyleMap.get(t) || null;
  }, n.reset = function() {
    this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
  }, n.generateId = function() {
    return this.id++;
  }, e;
}();
function ny(e) {
  var n, i = null;
  return "getRootNode" in e && ((n = ct.getRootNode(e)) == null ? void 0 : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && ct.host(ct.getRootNode(e)) && (i = ct.host(ct.getRootNode(e))), i;
}
function dO(e) {
  for (var n = e, i; i = ny(n); ) n = i;
  return n;
}
function hO(e) {
  var n = e.ownerDocument;
  if (!n) return !1;
  var i = dO(e);
  return ct.contains(n, i);
}
function iy(e) {
  var n = e.ownerDocument;
  return n ? ct.contains(n, e) || hO(e) : !1;
}
var dt = /* @__PURE__ */ function(e) {
  return e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e;
}(dt || {}), He = /* @__PURE__ */ function(e) {
  return e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e;
}(He || {}), cn = /* @__PURE__ */ function(e) {
  return e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e;
}(cn || {}), gi = /* @__PURE__ */ function(e) {
  return e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e;
}(gi || {}), rs = /* @__PURE__ */ function(e) {
  return e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e;
}(rs || {}), jo = /* @__PURE__ */ function(e) {
  return e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange", e[e.RateChange = 4] = "RateChange", e;
}(jo || {}), oy = /* @__PURE__ */ function(e) {
  return e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e;
}(oy || {});
function cv(e) {
  return "__ln" in e;
}
var pO = /* @__PURE__ */ function() {
  function e() {
    me(this, "length", 0), me(this, "head", null), me(this, "tail", null);
  }
  var n = e.prototype;
  return n.get = function(t) {
    if (t >= this.length)
      throw new Error("Position outside of list range");
    for (var r = this.head, o = 0; o < t; o++)
      r = (r == null ? void 0 : r.next) || null;
    return r;
  }, n.addNode = function(t) {
    var r = {
      value: t,
      previous: null,
      next: null
    };
    if (t.__ln = r, t.previousSibling && cv(t.previousSibling)) {
      var o = t.previousSibling.__ln.next;
      r.next = o, r.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = r, o && (o.previous = r);
    } else if (t.nextSibling && cv(t.nextSibling) && t.nextSibling.__ln.previous) {
      var s = t.nextSibling.__ln.previous;
      r.previous = s, r.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = r, s && (s.next = r);
    } else
      this.head && (this.head.previous = r), r.next = this.head, this.head = r;
    r.next === null && (this.tail = r), this.length++;
  }, n.removeNode = function(t) {
    var r = t.__ln;
    this.head && (r.previous ? (r.previous.next = r.next, r.next ? r.next.previous = r.previous : this.tail = r.previous) : (this.head = r.next, this.head ? this.head.previous = null : this.tail = null), t.__ln && delete t.__ln, this.length--);
  }, e;
}(), lv = function(e, n) {
  return e + "@" + n;
}, vO = /* @__PURE__ */ function() {
  function e() {
    var i = this;
    me(this, "frozen", !1), me(this, "locked", !1), me(this, "texts", []), me(this, "attributes", []), me(this, "attributeMap", /* @__PURE__ */ new WeakMap()), me(this, "removes", []), me(this, "mapRemoves", []), me(this, "movedMap", {}), me(this, "addedSet", /* @__PURE__ */ new Set()), me(this, "movedSet", /* @__PURE__ */ new Set()), me(this, "droppedSet", /* @__PURE__ */ new Set()), me(this, "removesSubTreeCache", /* @__PURE__ */ new Set()), me(this, "mutationCb"), me(this, "blockClass"), me(this, "blockSelector"), me(this, "maskTextClass"), me(this, "maskTextSelector"), me(this, "inlineStylesheet"), me(this, "maskInputOptions"), me(this, "maskTextFn"), me(this, "maskInputFn"), me(this, "keepIframeSrcFn"), me(this, "recordCanvas"), me(this, "inlineImages"), me(this, "slimDOMOptions"), me(this, "dataURLOptions"), me(this, "doc"), me(this, "mirror"), me(this, "iframeManager"), me(this, "stylesheetManager"), me(this, "shadowDomManager"), me(this, "canvasManager"), me(this, "processedNodeManager"), me(this, "unattachedDoc"), me(this, "processMutations", function(t) {
      t.forEach(i.processMutation), i.emit();
    }), me(this, "emit", function() {
      if (!(i.frozen || i.locked)) {
        for (var t = [], r = /* @__PURE__ */ new Set(), o = new pO(), s = function(Oe) {
          for (var Me = Oe, ke = fa; ke === fa; )
            Me = Me && Me.nextSibling, ke = Me && i.mirror.getId(Me);
          return ke;
        }, c = function(Oe) {
          var Me = ct.parentNode(Oe);
          if (!(!Me || !iy(Oe))) {
            var ke = !1;
            if (Oe.nodeType === Node.TEXT_NODE) {
              var ut = Me.tagName;
              if (ut === "TEXTAREA")
                return;
              ut === "STYLE" && i.addedSet.has(Me) && (ke = !0);
            }
            var Ue = Js(Me) ? i.mirror.getId(ny(Oe)) : i.mirror.getId(Me), mt = s(Oe);
            if (Ue === -1 || mt === -1)
              return o.addNode(Oe);
            var xt = qo(Oe, {
              doc: i.doc,
              mirror: i.mirror,
              blockClass: i.blockClass,
              blockSelector: i.blockSelector,
              maskTextClass: i.maskTextClass,
              maskTextSelector: i.maskTextSelector,
              skipChild: !0,
              newlyAddedElement: !0,
              inlineStylesheet: i.inlineStylesheet,
              maskInputOptions: i.maskInputOptions,
              maskTextFn: i.maskTextFn,
              maskInputFn: i.maskInputFn,
              slimDOMOptions: i.slimDOMOptions,
              dataURLOptions: i.dataURLOptions,
              recordCanvas: i.recordCanvas,
              inlineImages: i.inlineImages,
              onSerialize: function(Te) {
                ty(Te, i.mirror) && i.iframeManager.addIframe(Te), ry(Te, i.mirror) && i.stylesheetManager.trackLinkElement(Te), Gf(Oe) && i.shadowDomManager.addShadowRoot(ct.shadowRoot(Oe), i.doc);
              },
              onIframeLoad: function(Te, Ot) {
                i.iframeManager.attachIframe(Te, Ot), i.shadowDomManager.observeAttachShadow(Te);
              },
              onStylesheetLoad: function(Te, Ot) {
                i.stylesheetManager.attachLinkElement(Te, Ot);
              },
              cssCaptured: ke
            });
            xt && (t.push({
              parentId: Ue,
              nextId: mt,
              node: xt
            }), r.add(xt.id));
          }
        }; i.mapRemoves.length; )
          i.mirror.removeNodeFromMap(i.mapRemoves.shift());
        for (var f = Ae(i.movedSet), d; !(d = f()).done; ) {
          var p = d.value;
          uv(i.removesSubTreeCache, p, i.mirror) && !i.movedSet.has(ct.parentNode(p)) || c(p);
        }
        for (var g = Ae(i.addedSet), m; !(m = g()).done; ) {
          var S = m.value;
          !fv(i.droppedSet, S) && !uv(i.removesSubTreeCache, S, i.mirror) || fv(i.movedSet, S) ? c(S) : i.droppedSet.add(S);
        }
        for (var x = null; o.length; ) {
          var I = null;
          if (x) {
            var b = i.mirror.getId(ct.parentNode(x.value)), L = s(x.value);
            b !== -1 && L !== -1 && (I = x);
          }
          if (!I)
            for (var $ = o.tail; $; ) {
              var W = $;
              if ($ = $.previous, W) {
                var V = i.mirror.getId(ct.parentNode(W.value)), Q = s(W.value);
                if (Q === -1) continue;
                if (V !== -1) {
                  I = W;
                  break;
                } else {
                  var ie = W.value, ye = ct.parentNode(ie);
                  if (ye && ye.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    var ge = ct.host(ye), Ie = i.mirror.getId(ge);
                    if (Ie !== -1) {
                      I = W;
                      break;
                    }
                  }
                }
              }
            }
          if (!I) {
            for (; o.head; )
              o.removeNode(o.head.value);
            break;
          }
          x = I.previous, o.removeNode(I.value), c(I.value);
        }
        var $e = {
          texts: i.texts.map(function(Oe) {
            var Me = Oe.node, ke = ct.parentNode(Me);
            return ke && ke.tagName === "TEXTAREA" && i.genTextAreaValueMutation(ke), {
              id: i.mirror.getId(Me),
              value: Oe.value
            };
          }).filter(function(Oe) {
            return !r.has(Oe.id);
          }).filter(function(Oe) {
            return i.mirror.has(Oe.id);
          }),
          attributes: i.attributes.map(function(Oe) {
            var Me = Oe.attributes;
            if (typeof Me.style == "string") {
              var ke = JSON.stringify(Oe.styleDiff), ut = JSON.stringify(Oe._unchangedStyles);
              ke.length < Me.style.length && (ke + ut).split("var(").length === Me.style.split("var(").length && (Me.style = Oe.styleDiff);
            }
            return {
              id: i.mirror.getId(Oe.node),
              attributes: Me
            };
          }).filter(function(Oe) {
            return !r.has(Oe.id);
          }).filter(function(Oe) {
            return i.mirror.has(Oe.id);
          }),
          removes: i.removes,
          adds: t
        };
        !$e.texts.length && !$e.attributes.length && !$e.removes.length && !$e.adds.length || (i.texts = [], i.attributes = [], i.attributeMap = /* @__PURE__ */ new WeakMap(), i.removes = [], i.addedSet = /* @__PURE__ */ new Set(), i.movedSet = /* @__PURE__ */ new Set(), i.droppedSet = /* @__PURE__ */ new Set(), i.removesSubTreeCache = /* @__PURE__ */ new Set(), i.movedMap = {}, i.mutationCb($e));
      }
    }), me(this, "genTextAreaValueMutation", function(t) {
      var r = i.attributeMap.get(t);
      r || (r = {
        node: t,
        attributes: {},
        styleDiff: {},
        _unchangedStyles: {}
      }, i.attributes.push(r), i.attributeMap.set(t, r)), r.attributes.value = Array.from(ct.childNodes(t), function(o) {
        return ct.textContent(o) || "";
      }).join("");
    }), me(this, "processMutation", function(t) {
      if (!Zu(t.target, i.mirror, i.slimDOMOptions))
        switch (t.type) {
          case "characterData": {
            var r = ct.textContent(t.target);
            !rn(t.target, i.blockClass, i.blockSelector, !1) && r !== t.oldValue && i.texts.push({
              value: Bg(t.target, i.maskTextClass, i.maskTextSelector, !0) && r ? i.maskTextFn ? i.maskTextFn(r, Jm(t.target)) : r.replace(/[\S]/g, "*") : r,
              node: t.target
            });
            break;
          }
          case "attributes": {
            var o = t.target, s = t.attributeName, c = t.target.getAttribute(s);
            if (s === "value") {
              var f = yd(o);
              c = md({
                element: o,
                maskInputOptions: i.maskInputOptions,
                tagName: o.tagName,
                type: f,
                value: c,
                maskInputFn: i.maskInputFn
              });
            }
            if (rn(t.target, i.blockClass, i.blockSelector, !1) || c === t.oldValue)
              return;
            var d = i.attributeMap.get(t.target);
            if (o.tagName === "IFRAME" && s === "src" && !i.keepIframeSrcFn(c))
              if (!o.contentDocument)
                s = "rr_src";
              else
                return;
            if (d || (d = {
              node: t.target,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {}
            }, i.attributes.push(d), i.attributeMap.set(t.target, d)), s === "type" && o.tagName === "INPUT" && (t.oldValue || "").toLowerCase() === "password" && o.setAttribute("data-rr-is-password", "true"), !Pg(o.tagName, s))
              if (d.attributes[s] = Rg(i.doc, _o(o.tagName), _o(s), c), s === "style") {
                if (!i.unattachedDoc)
                  try {
                    i.unattachedDoc = document.implementation.createHTMLDocument();
                  } catch {
                    i.unattachedDoc = i.doc;
                  }
                var p = i.unattachedDoc.createElement("span");
                t.oldValue && p.setAttribute("style", t.oldValue);
                for (var g = Ae(Array.from(o.style)), m; !(m = g()).done; ) {
                  var S = m.value, x = o.style.getPropertyValue(S), I = o.style.getPropertyPriority(S);
                  x !== p.style.getPropertyValue(S) || I !== p.style.getPropertyPriority(S) ? I === "" ? d.styleDiff[S] = x : d.styleDiff[S] = [
                    x,
                    I
                  ] : d._unchangedStyles[S] = [
                    x,
                    I
                  ];
                }
                for (var b = Ae(Array.from(p.style)), L; !(L = b()).done; ) {
                  var $ = L.value;
                  o.style.getPropertyValue($) === "" && (d.styleDiff[$] = !1);
                }
              } else s === "open" && o.tagName === "DIALOG" && (o.matches("dialog:modal") ? d.attributes.rr_open_mode = "modal" : d.attributes.rr_open_mode = "non-modal");
            break;
          }
          case "childList": {
            if (rn(t.target, i.blockClass, i.blockSelector, !0)) return;
            if (t.target.tagName === "TEXTAREA") {
              i.genTextAreaValueMutation(t.target);
              return;
            }
            t.addedNodes.forEach(function(W) {
              return i.genAdds(W, t.target);
            }), t.removedNodes.forEach(function(W) {
              var V = i.mirror.getId(W), Q = Js(t.target) ? i.mirror.getId(ct.host(t.target)) : i.mirror.getId(t.target);
              rn(t.target, i.blockClass, i.blockSelector, !1) || Zu(W, i.mirror, i.slimDOMOptions) || !lO(W, i.mirror) || (i.addedSet.has(W) ? (Kf(i.addedSet, W), i.droppedSet.add(W)) : i.addedSet.has(t.target) && V === -1 || ey(t.target, i.mirror) || (i.movedSet.has(W) && i.movedMap[lv(V, Q)] ? Kf(i.movedSet, W) : (i.removes.push({
                parentId: Q,
                id: V,
                isShadow: Js(t.target) && ea(t.target) ? !0 : void 0
              }), gO(W, i.removesSubTreeCache))), i.mapRemoves.push(W));
            });
            break;
          }
        }
    }), me(this, "genAdds", function(t, r) {
      if (!i.processedNodeManager.inOtherBuffer(t, i) && !(i.addedSet.has(t) || i.movedSet.has(t))) {
        if (i.mirror.hasNode(t)) {
          if (Zu(t, i.mirror, i.slimDOMOptions))
            return;
          i.movedSet.add(t);
          var o = null;
          r && i.mirror.hasNode(r) && (o = i.mirror.getId(r)), o && o !== -1 && (i.movedMap[lv(i.mirror.getId(t), o)] = !0);
        } else
          i.addedSet.add(t), i.droppedSet.delete(t);
        rn(t, i.blockClass, i.blockSelector, !1) || (ct.childNodes(t).forEach(function(s) {
          return i.genAdds(s);
        }), Gf(t) && ct.childNodes(ct.shadowRoot(t)).forEach(function(s) {
          i.processedNodeManager.add(s, i), i.genAdds(s, t);
        }));
      }
    });
  }
  var n = e.prototype;
  return n.init = function(t) {
    var r = this;
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "maskTextClass",
      "maskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager"
    ].forEach(function(o) {
      r[o] = t[o];
    });
  }, n.freeze = function() {
    this.frozen = !0, this.canvasManager.freeze();
  }, n.unfreeze = function() {
    this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
  }, n.isFrozen = function() {
    return this.frozen;
  }, n.lock = function() {
    this.locked = !0, this.canvasManager.lock();
  }, n.unlock = function() {
    this.locked = !1, this.canvasManager.unlock(), this.emit();
  }, n.reset = function() {
    this.shadowDomManager.reset(), this.canvasManager.reset();
  }, e;
}();
function Kf(e, n) {
  e.delete(n), ct.childNodes(n).forEach(function(i) {
    return Kf(e, i);
  });
}
function gO(e, n) {
  for (var i = [
    e
  ]; i.length; ) {
    var t = i.pop();
    n.has(t) || (n.add(t), ct.childNodes(t).forEach(function(r) {
      return i.push(r);
    }));
  }
}
function uv(e, n, i) {
  return e.size === 0 ? !1 : mO(e, n);
}
function mO(e, n, i) {
  var t = ct.parentNode(n);
  return t ? e.has(t) : !1;
}
function fv(e, n) {
  return e.size === 0 ? !1 : sy(e, n);
}
function sy(e, n) {
  var i = ct.parentNode(n);
  return i ? e.has(i) ? !0 : sy(e, i) : !1;
}
var ta;
function yO(e) {
  ta = e;
}
function xO() {
  ta = void 0;
}
var gt = function(e) {
  if (!ta)
    return e;
  var n = function() {
    for (var i = arguments.length, t = new Array(i), r = 0; r < i; r++)
      t[r] = arguments[r];
    try {
      return e.apply(void 0, [].concat(t));
    } catch (o) {
      if (ta && ta(o) === !0)
        return;
      throw o;
    }
  };
  return n;
}, xo = [];
function Ia(e) {
  try {
    if ("composedPath" in e) {
      var n = e.composedPath();
      if (n.length)
        return n[0];
    } else if ("path" in e && e.path.length)
      return e.path[0];
  } catch {
  }
  return e && e.target;
}
function ay(e, n) {
  var i = new vO();
  xo.push(i), i.init(e);
  var t = new (Ym())(gt(i.processMutations.bind(i)));
  return t.observe(n, {
    attributes: !0,
    attributeOldValue: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  }), t;
}
function bO(e) {
  var n = e.mousemoveCb, i = e.sampling, t = e.doc, r = e.mirror;
  if (i.mousemove === !1)
    return function() {
    };
  var o = typeof i.mousemove == "number" ? i.mousemove : 50, s = typeof i.mousemoveCallback == "number" ? i.mousemoveCallback : 500, c = [], f, d = ba(gt(function(m) {
    var S = Date.now() - f;
    n(c.map(function(x) {
      return x.timeOffset -= S, x;
    }), m), c = [], f = null;
  }), s), p = gt(ba(gt(function(m) {
    var S = Ia(m), x = Hf(m) ? m.changedTouches[0] : m, I = x.clientX, b = x.clientY;
    f || (f = yl()), c.push({
      x: I,
      y: b,
      id: r.getId(S),
      timeOffset: yl() - f
    }), d(typeof DragEvent < "u" && Xe(m, DragEvent) ? He.Drag : Xe(m, MouseEvent) ? He.MouseMove : He.TouchMove);
  }), o, {
    trailing: !1
  })), g = [
    tn("mousemove", p, t),
    tn("touchmove", p, t),
    tn("drag", p, t)
  ];
  return gt(function() {
    g.forEach(function(m) {
      return m();
    });
  });
}
function wO(e) {
  var n = e.mouseInteractionCb, i = e.doc, t = e.mirror, r = e.blockClass, o = e.blockSelector, s = e.sampling;
  if (s.mouseInteraction === !1)
    return function() {
    };
  var c = s.mouseInteraction === !0 || s.mouseInteraction === void 0 ? {} : s.mouseInteraction, f = [], d = null, p = function(g) {
    return function(m) {
      var S = Ia(m);
      if (!rn(S, r, o, !0)) {
        var x = null, I = g;
        if ("pointerType" in m) {
          switch (m.pointerType) {
            case "mouse":
              x = gi.Mouse;
              break;
            case "touch":
              x = gi.Touch;
              break;
            case "pen":
              x = gi.Pen;
              break;
          }
          x === gi.Touch ? cn[g] === cn.MouseDown ? I = "TouchStart" : cn[g] === cn.MouseUp && (I = "TouchEnd") : gi.Pen;
        } else Hf(m) && (x = gi.Touch);
        x !== null ? (d = x, (I.startsWith("Touch") && x === gi.Touch || I.startsWith("Mouse") && x === gi.Mouse) && (x = null)) : cn[g] === cn.Click && (x = d, d = null);
        var b = Hf(m) ? m.changedTouches[0] : m;
        if (b) {
          var L = t.getId(S), $ = b.clientX, W = b.clientY;
          gt(n)(yt({
            type: cn[I],
            id: L,
            x: $,
            y: W
          }, x !== null && {
            pointerType: x
          }));
        }
      }
    };
  };
  return Object.keys(cn).filter(function(g) {
    return Number.isNaN(Number(g)) && !g.endsWith("_Departed") && c[g] !== !1;
  }).forEach(function(g) {
    var m = _o(g), S = p(g);
    if (window.PointerEvent)
      switch (cn[g]) {
        case cn.MouseDown:
        case cn.MouseUp:
          m = m.replace("mouse", "pointer");
          break;
        case cn.TouchStart:
        case cn.TouchEnd:
          return;
      }
    f.push(tn(m, S, i));
  }), gt(function() {
    f.forEach(function(g) {
      return g();
    });
  });
}
function cy(e) {
  var n = e.scrollCb, i = e.doc, t = e.mirror, r = e.blockClass, o = e.blockSelector, s = e.sampling, c = gt(ba(gt(function(f) {
    var d = Ia(f);
    if (!(!d || rn(d, r, o, !0))) {
      var p = t.getId(d);
      if (d === i && i.defaultView) {
        var g = Zm(i.defaultView);
        n({
          id: p,
          x: g.left,
          y: g.top
        });
      } else
        n({
          id: p,
          x: d.scrollLeft,
          y: d.scrollTop
        });
    }
  }), s.scroll || 100));
  return tn("scroll", c, i);
}
function _O(e, n) {
  var i = e.viewportResizeCb, t = n.win, r = -1, o = -1, s = gt(ba(gt(function() {
    var c = Xm(), f = Qm();
    (r !== c || o !== f) && (i({
      width: Number(f),
      height: Number(c)
    }), r = c, o = f);
  }), 200));
  return tn("resize", s, t);
}
var CO = [
  "INPUT",
  "TEXTAREA",
  "SELECT"
], dv = /* @__PURE__ */ new WeakMap();
function SO(e) {
  var n = e.inputCb, i = e.doc, t = e.mirror, r = e.blockClass, o = e.blockSelector, s = e.ignoreClass, c = e.ignoreSelector, f = e.maskInputOptions, d = e.maskInputFn, p = e.sampling, g = e.userTriggeredOnInput;
  function m(V) {
    var Q = Ia(V), ie = V.isTrusted, ye = Q && Q.tagName;
    if (Q && ye === "OPTION" && (Q = ct.parentElement(Q)), !(!Q || !ye || CO.indexOf(ye) < 0 || rn(Q, r, o, !0)) && !(Q.classList.contains(s) || c && Q.matches(c))) {
      var ge = Q.value, Ie = !1, $e = yd(Q) || "";
      $e === "radio" || $e === "checkbox" ? Ie = Q.checked : (f[ye.toLowerCase()] || f[$e]) && (ge = md({
        element: Q,
        maskInputOptions: f,
        tagName: ye,
        type: $e,
        value: ge,
        maskInputFn: d
      })), S(Q, g ? {
        text: ge,
        isChecked: Ie,
        userTriggered: ie
      } : {
        text: ge,
        isChecked: Ie
      });
      var Oe = Q.name;
      $e === "radio" && Oe && Ie && i.querySelectorAll('input[type="radio"][name="' + Oe + '"]').forEach(function(Me) {
        if (Me !== Q) {
          var ke = Me.value;
          S(Me, g ? {
            text: ke,
            isChecked: !Ie,
            userTriggered: !1
          } : {
            text: ke,
            isChecked: !Ie
          });
        }
      });
    }
  }
  function S(V, Q) {
    var ie = dv.get(V);
    if (!ie || ie.text !== Q.text || ie.isChecked !== Q.isChecked) {
      dv.set(V, Q);
      var ye = t.getId(V);
      gt(n)(yt({}, Q, {
        id: ye
      }));
    }
  }
  var x = p.input === "last" ? [
    "change"
  ] : [
    "input",
    "change"
  ], I = x.map(function(V) {
    return tn(V, gt(m), i);
  }), b = i.defaultView;
  if (!b)
    return function() {
      I.forEach(function(V) {
        return V();
      });
    };
  var L = b.Object.getOwnPropertyDescriptor(b.HTMLInputElement.prototype, "value"), $ = [
    [
      b.HTMLInputElement.prototype,
      "value"
    ],
    [
      b.HTMLInputElement.prototype,
      "checked"
    ],
    [
      b.HTMLSelectElement.prototype,
      "value"
    ],
    [
      b.HTMLTextAreaElement.prototype,
      "value"
    ],
    // Some UI library use selectedIndex to set select value
    [
      b.HTMLSelectElement.prototype,
      "selectedIndex"
    ],
    [
      b.HTMLOptionElement.prototype,
      "selected"
    ]
  ];
  if (L && L.set) {
    var W;
    (W = I).push.apply(W, [].concat($.map(function(V) {
      return Kl(V[0], V[1], {
        set: function() {
          gt(m)({
            target: this,
            isTrusted: !1
          });
        }
      }, !1, b);
    })));
  }
  return gt(function() {
    I.forEach(function(V) {
      return V();
    });
  });
}
function xl(e) {
  var n = [];
  function i(t, r) {
    if (Wc("CSSGroupingRule") && Xe(t.parentRule, CSSGroupingRule) || Wc("CSSMediaRule") && Xe(t.parentRule, CSSMediaRule) || Wc("CSSSupportsRule") && Xe(t.parentRule, CSSSupportsRule) || Wc("CSSConditionRule") && Xe(t.parentRule, CSSConditionRule)) {
      var o = Array.from(t.parentRule.cssRules), s = o.indexOf(t);
      r.unshift(s);
    } else if (t.parentStyleSheet) {
      var c = Array.from(t.parentStyleSheet.cssRules), f = c.indexOf(t);
      r.unshift(f);
    }
    return r;
  }
  return i(e, n);
}
function Ii(e, n, i) {
  var t, r;
  return e ? (e.ownerNode ? t = n.getId(e.ownerNode) : r = i.getId(e), {
    styleId: r,
    id: t
  }) : {};
}
function EO(e, n) {
  var i = e.styleSheetRuleCb, t = e.mirror, r = e.stylesheetManager, o = n.win;
  if (!o.CSSStyleSheet || !o.CSSStyleSheet.prototype)
    return function() {
    };
  var s = o.CSSStyleSheet.prototype.insertRule;
  o.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
    apply: gt(function(m, S, x) {
      var I = x[0], b = x[1], L = Ii(S, t, r.styleMirror), $ = L.id, W = L.styleId;
      return ($ && $ !== -1 || W && W !== -1) && i({
        id: $,
        styleId: W,
        adds: [
          {
            rule: I,
            index: b
          }
        ]
      }), m.apply(S, x);
    })
  }), o.CSSStyleSheet.prototype.addRule = function(m, S, x) {
    x === void 0 && (x = this.cssRules.length);
    var I = m + " { " + S + " }";
    return o.CSSStyleSheet.prototype.insertRule.apply(this, [
      I,
      x
    ]);
  };
  var c = o.CSSStyleSheet.prototype.deleteRule;
  o.CSSStyleSheet.prototype.deleteRule = new Proxy(c, {
    apply: gt(function(m, S, x) {
      var I = x[0], b = Ii(S, t, r.styleMirror), L = b.id, $ = b.styleId;
      return (L && L !== -1 || $ && $ !== -1) && i({
        id: L,
        styleId: $,
        removes: [
          {
            index: I
          }
        ]
      }), m.apply(S, x);
    })
  }), o.CSSStyleSheet.prototype.removeRule = function(m) {
    return o.CSSStyleSheet.prototype.deleteRule.apply(this, [
      m
    ]);
  };
  var f;
  o.CSSStyleSheet.prototype.replace && (f = o.CSSStyleSheet.prototype.replace, o.CSSStyleSheet.prototype.replace = new Proxy(f, {
    apply: gt(function(m, S, x) {
      var I = x[0], b = Ii(S, t, r.styleMirror), L = b.id, $ = b.styleId;
      return (L && L !== -1 || $ && $ !== -1) && i({
        id: L,
        styleId: $,
        replace: I
      }), m.apply(S, x);
    })
  }));
  var d;
  o.CSSStyleSheet.prototype.replaceSync && (d = o.CSSStyleSheet.prototype.replaceSync, o.CSSStyleSheet.prototype.replaceSync = new Proxy(d, {
    apply: gt(function(m, S, x) {
      var I = x[0], b = Ii(S, t, r.styleMirror), L = b.id, $ = b.styleId;
      return (L && L !== -1 || $ && $ !== -1) && i({
        id: L,
        styleId: $,
        replaceSync: I
      }), m.apply(S, x);
    })
  }));
  var p = {};
  qc("CSSGroupingRule") ? p.CSSGroupingRule = o.CSSGroupingRule : (qc("CSSMediaRule") && (p.CSSMediaRule = o.CSSMediaRule), qc("CSSConditionRule") && (p.CSSConditionRule = o.CSSConditionRule), qc("CSSSupportsRule") && (p.CSSSupportsRule = o.CSSSupportsRule));
  var g = {};
  return Object.entries(p).forEach(function(m) {
    var S = m[0], x = m[1];
    g[S] = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      insertRule: x.prototype.insertRule,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      deleteRule: x.prototype.deleteRule
    }, x.prototype.insertRule = new Proxy(g[S].insertRule, {
      apply: gt(function(I, b, L) {
        var $ = L[0], W = L[1], V = Ii(b.parentStyleSheet, t, r.styleMirror), Q = V.id, ie = V.styleId;
        return (Q && Q !== -1 || ie && ie !== -1) && i({
          id: Q,
          styleId: ie,
          adds: [
            {
              rule: $,
              index: [].concat(xl(b), [
                W || 0
              ])
            }
          ]
        }), I.apply(b, L);
      })
    }), x.prototype.deleteRule = new Proxy(g[S].deleteRule, {
      apply: gt(function(I, b, L) {
        var $ = L[0], W = Ii(b.parentStyleSheet, t, r.styleMirror), V = W.id, Q = W.styleId;
        return (V && V !== -1 || Q && Q !== -1) && i({
          id: V,
          styleId: Q,
          removes: [
            {
              index: [].concat(xl(b), [
                $
              ])
            }
          ]
        }), I.apply(b, L);
      })
    });
  }), gt(function() {
    o.CSSStyleSheet.prototype.insertRule = s, o.CSSStyleSheet.prototype.deleteRule = c, f && (o.CSSStyleSheet.prototype.replace = f), d && (o.CSSStyleSheet.prototype.replaceSync = d), Object.entries(p).forEach(function(m) {
      var S = m[0], x = m[1];
      x.prototype.insertRule = g[S].insertRule, x.prototype.deleteRule = g[S].deleteRule;
    });
  });
}
function ly(e, n) {
  var i = e.mirror, t = e.stylesheetManager, r, o, s, c = null;
  n.nodeName === "#document" ? c = i.getId(n) : c = i.getId(ct.host(n));
  var f = n.nodeName === "#document" ? (r = n.defaultView) == null ? void 0 : r.Document : (s = (o = n.ownerDocument) == null ? void 0 : o.defaultView) == null ? void 0 : s.ShadowRoot, d = f != null && f.prototype ? Object.getOwnPropertyDescriptor(f == null ? void 0 : f.prototype, "adoptedStyleSheets") : void 0;
  return c === null || c === -1 || !f || !d ? function() {
  } : (Object.defineProperty(n, "adoptedStyleSheets", {
    configurable: d.configurable,
    enumerable: d.enumerable,
    get: function() {
      var g;
      return (g = d.get) == null ? void 0 : g.call(this);
    },
    set: function(g) {
      var m, S = (m = d.set) == null ? void 0 : m.call(this, g);
      if (c !== null && c !== -1)
        try {
          t.adoptStyleSheets(g, c);
        } catch {
        }
      return S;
    }
  }), gt(function() {
    Object.defineProperty(n, "adoptedStyleSheets", {
      configurable: d.configurable,
      enumerable: d.enumerable,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      get: d.get,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      set: d.set
    });
  }));
}
function AO(e, n) {
  var i = e.styleDeclarationCb, t = e.mirror, r = e.ignoreCSSAttributes, o = e.stylesheetManager, s = n.win, c = s.CSSStyleDeclaration.prototype.setProperty;
  s.CSSStyleDeclaration.prototype.setProperty = new Proxy(c, {
    apply: gt(function(d, p, g) {
      var m, S = g[0], x = g[1], I = g[2];
      if (r.has(S))
        return c.apply(p, [
          S,
          x,
          I
        ]);
      var b = Ii((m = p.parentRule) == null ? void 0 : m.parentStyleSheet, t, o.styleMirror), L = b.id, $ = b.styleId;
      return (L && L !== -1 || $ && $ !== -1) && i({
        id: L,
        styleId: $,
        set: {
          property: S,
          value: x,
          priority: I
        },
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        index: xl(p.parentRule)
      }), d.apply(p, g);
    })
  });
  var f = s.CSSStyleDeclaration.prototype.removeProperty;
  return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(f, {
    apply: gt(function(d, p, g) {
      var m, S = g[0];
      if (r.has(S))
        return f.apply(p, [
          S
        ]);
      var x = Ii((m = p.parentRule) == null ? void 0 : m.parentStyleSheet, t, o.styleMirror), I = x.id, b = x.styleId;
      return (I && I !== -1 || b && b !== -1) && i({
        id: I,
        styleId: b,
        remove: {
          property: S
        },
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        index: xl(p.parentRule)
      }), d.apply(p, g);
    })
  }), gt(function() {
    s.CSSStyleDeclaration.prototype.setProperty = c, s.CSSStyleDeclaration.prototype.removeProperty = f;
  });
}
function kO(e) {
  var n = e.mediaInteractionCb, i = e.blockClass, t = e.blockSelector, r = e.mirror, o = e.sampling, s = e.doc, c = gt(function(d) {
    return ba(gt(function(p) {
      var g = Ia(p);
      if (!(!g || rn(g, i, t, !0))) {
        var m = g.currentTime, S = g.volume, x = g.muted, I = g.playbackRate, b = g.loop;
        n({
          type: d,
          id: r.getId(g),
          currentTime: m,
          volume: S,
          muted: x,
          playbackRate: I,
          loop: b
        });
      }
    }), o.media || 500);
  }), f = [
    tn("play", c(jo.Play), s),
    tn("pause", c(jo.Pause), s),
    tn("seeked", c(jo.Seeked), s),
    tn("volumechange", c(jo.VolumeChange), s),
    tn("ratechange", c(jo.RateChange), s)
  ];
  return gt(function() {
    f.forEach(function(d) {
      return d();
    });
  });
}
function IO(e) {
  var n = e.fontCb, i = e.doc, t = i.defaultView;
  if (!t)
    return function() {
    };
  var r = [], o = /* @__PURE__ */ new WeakMap(), s = t.FontFace;
  t.FontFace = function(d, p, g) {
    var m = new s(d, p, g);
    return o.set(m, {
      family: d,
      buffer: typeof p != "string",
      descriptors: g,
      fontSource: typeof p == "string" ? p : JSON.stringify(Array.from(new Uint8Array(p)))
    }), m;
  };
  var c = cs(i.fonts, "add", function(f) {
    return function(d) {
      return setTimeout(gt(function() {
        var p = o.get(d);
        p && (n(p), o.delete(d));
      }), 0), f.apply(this, [
        d
      ]);
    };
  });
  return r.push(function() {
    t.FontFace = s;
  }), r.push(c), gt(function() {
    r.forEach(function(f) {
      return f();
    });
  });
}
function OO(e) {
  var n = e.doc, i = e.mirror, t = e.blockClass, r = e.blockSelector, o = e.selectionCb, s = !0, c = gt(function() {
    var f = n.getSelection();
    if (!(!f || s && (f != null && f.isCollapsed))) {
      s = f.isCollapsed || !1;
      for (var d = [], p = f.rangeCount || 0, g = 0; g < p; g++) {
        var m = f.getRangeAt(g), S = m.startContainer, x = m.startOffset, I = m.endContainer, b = m.endOffset, L = rn(S, t, r, !0) || rn(I, t, r, !0);
        L || d.push({
          start: i.getId(S),
          startOffset: x,
          end: i.getId(I),
          endOffset: b
        });
      }
      o({
        ranges: d
      });
    }
  });
  return c(), tn("selectionchange", c);
}
function DO(e) {
  var n = e.doc, i = e.customElementCb, t = n.defaultView;
  if (!t || !t.customElements) return function() {
  };
  var r = cs(t.customElements, "define", function(o) {
    return function(s, c, f) {
      try {
        i({
          define: {
            name: s
          }
        });
      } catch {
        console.warn("Custom element callback failed for " + s);
      }
      return o.apply(this, [
        s,
        c,
        f
      ]);
    };
  });
  return r;
}
function RO(e, n) {
  var i = e.mutationCb, t = e.mousemoveCb, r = e.mouseInteractionCb, o = e.scrollCb, s = e.viewportResizeCb, c = e.inputCb, f = e.mediaInteractionCb, d = e.styleSheetRuleCb, p = e.styleDeclarationCb, g = e.canvasMutationCb, m = e.fontCb, S = e.selectionCb, x = e.customElementCb;
  e.mutationCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.mutation) {
      var $;
      ($ = n).mutation.apply($, [].concat(b));
    }
    i.apply(void 0, [].concat(b));
  }, e.mousemoveCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.mousemove) {
      var $;
      ($ = n).mousemove.apply($, [].concat(b));
    }
    t.apply(void 0, [].concat(b));
  }, e.mouseInteractionCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.mouseInteraction) {
      var $;
      ($ = n).mouseInteraction.apply($, [].concat(b));
    }
    r.apply(void 0, [].concat(b));
  }, e.scrollCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.scroll) {
      var $;
      ($ = n).scroll.apply($, [].concat(b));
    }
    o.apply(void 0, [].concat(b));
  }, e.viewportResizeCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.viewportResize) {
      var $;
      ($ = n).viewportResize.apply($, [].concat(b));
    }
    s.apply(void 0, [].concat(b));
  }, e.inputCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.input) {
      var $;
      ($ = n).input.apply($, [].concat(b));
    }
    c.apply(void 0, [].concat(b));
  }, e.mediaInteractionCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.mediaInteaction) {
      var $;
      ($ = n).mediaInteaction.apply($, [].concat(b));
    }
    f.apply(void 0, [].concat(b));
  }, e.styleSheetRuleCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.styleSheetRule) {
      var $;
      ($ = n).styleSheetRule.apply($, [].concat(b));
    }
    d.apply(void 0, [].concat(b));
  }, e.styleDeclarationCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.styleDeclaration) {
      var $;
      ($ = n).styleDeclaration.apply($, [].concat(b));
    }
    p.apply(void 0, [].concat(b));
  }, e.canvasMutationCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.canvasMutation) {
      var $;
      ($ = n).canvasMutation.apply($, [].concat(b));
    }
    g.apply(void 0, [].concat(b));
  }, e.fontCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.font) {
      var $;
      ($ = n).font.apply($, [].concat(b));
    }
    m.apply(void 0, [].concat(b));
  }, e.selectionCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.selection) {
      var $;
      ($ = n).selection.apply($, [].concat(b));
    }
    S.apply(void 0, [].concat(b));
  }, e.customElementCb = function() {
    for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
      b[L] = arguments[L];
    if (n.customElement) {
      var $;
      ($ = n).customElement.apply($, [].concat(b));
    }
    x.apply(void 0, [].concat(b));
  };
}
function PO(e, n) {
  n === void 0 && (n = {});
  var i = e.doc.defaultView;
  if (!i)
    return function() {
    };
  RO(e, n);
  var t;
  e.recordDOM && (t = ay(e, e.doc));
  var r = bO(e), o = wO(e), s = cy(e), c = _O(e, {
    win: i
  }), f = SO(e), d = kO(e), p = function() {
  }, g = function() {
  }, m = function() {
  }, S = function() {
  };
  e.recordDOM && (p = EO(e, {
    win: i
  }), g = ly(e, e.doc), m = AO(e, {
    win: i
  }), e.collectFonts && (S = IO(e)));
  for (var x = OO(e), I = DO(e), b = [], L = Ae(e.plugins), $; !($ = L()).done; ) {
    var W = $.value;
    b.push(W.observer(W.callback, i, W.options));
  }
  return gt(function() {
    xo.forEach(function(V) {
      return V.reset();
    }), t == null || t.disconnect(), r(), o(), s(), c(), f(), d(), p(), g(), m(), S(), x(), I(), b.forEach(function(V) {
      return V();
    });
  });
}
function Wc(e) {
  return typeof window[e] < "u";
}
function qc(e) {
  return !!(typeof window[e] < "u" && // Note: Generally, this check _shouldn't_ be necessary
  // However, in some scenarios (e.g. jsdom) this can sometimes fail, so we check for it here
  window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype);
}
var hv = /* @__PURE__ */ function() {
  function e(i) {
    me(this, "iframeIdToRemoteIdMap", /* @__PURE__ */ new WeakMap()), me(this, "iframeRemoteIdToIdMap", /* @__PURE__ */ new WeakMap()), this.generateIdFn = i;
  }
  var n = e.prototype;
  return n.getId = function(t, r, o, s) {
    var c = o || this.getIdToRemoteIdMap(t), f = s || this.getRemoteIdToIdMap(t), d = c.get(r);
    return d || (d = this.generateIdFn(), c.set(r, d), f.set(d, r)), d;
  }, n.getIds = function(t, r) {
    var o = this, s = this.getIdToRemoteIdMap(t), c = this.getRemoteIdToIdMap(t);
    return r.map(function(f) {
      return o.getId(t, f, s, c);
    });
  }, n.getRemoteId = function(t, r, o) {
    var s = o || this.getRemoteIdToIdMap(t);
    if (typeof r != "number") return r;
    var c = s.get(r);
    return c || -1;
  }, n.getRemoteIds = function(t, r) {
    var o = this, s = this.getRemoteIdToIdMap(t);
    return r.map(function(c) {
      return o.getRemoteId(t, c, s);
    });
  }, n.reset = function(t) {
    if (!t) {
      this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
      return;
    }
    this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
  }, n.getIdToRemoteIdMap = function(t) {
    var r = this.iframeIdToRemoteIdMap.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this.iframeIdToRemoteIdMap.set(t, r)), r;
  }, n.getRemoteIdToIdMap = function(t) {
    var r = this.iframeRemoteIdToIdMap.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this.iframeRemoteIdToIdMap.set(t, r)), r;
  }, e;
}(), BO = /* @__PURE__ */ function() {
  function e(i) {
    me(this, "iframes", /* @__PURE__ */ new WeakMap()), me(this, "crossOriginIframeMap", /* @__PURE__ */ new WeakMap()), me(this, "crossOriginIframeMirror", new hv(Dg)), me(this, "crossOriginIframeStyleMirror"), me(this, "crossOriginIframeRootIdMap", /* @__PURE__ */ new WeakMap()), me(this, "mirror"), me(this, "mutationCb"), me(this, "wrappedEmit"), me(this, "loadListener"), me(this, "stylesheetManager"), me(this, "recordCrossOriginIframes"), this.mutationCb = i.mutationCb, this.wrappedEmit = i.wrappedEmit, this.stylesheetManager = i.stylesheetManager, this.recordCrossOriginIframes = i.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new hv(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = i.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
  }
  var n = e.prototype;
  return n.addIframe = function(t) {
    this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
  }, n.addLoadListener = function(t) {
    this.loadListener = t;
  }, n.attachIframe = function(t, r) {
    var o, s;
    this.mutationCb({
      adds: [
        {
          parentId: this.mirror.getId(t),
          nextId: null,
          node: r
        }
      ],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0
    }), this.recordCrossOriginIframes && ((o = t.contentWindow) == null || o.addEventListener("message", this.handleMessage.bind(this))), (s = this.loadListener) == null || s.call(this, t), t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument));
  }, n.handleMessage = function(t) {
    var r = t;
    if (!(r.data.type !== "rrweb" || // To filter out the rrweb messages which are forwarded by some sites.
    r.origin !== r.data.origin)) {
      var o = t.source;
      if (o) {
        var s = this.crossOriginIframeMap.get(t.source);
        if (s) {
          var c = this.transformCrossOriginEvent(s, r.data.event);
          c && this.wrappedEmit(c, r.data.isCheckout);
        }
      }
    }
  }, n.transformCrossOriginEvent = function(t, r) {
    var o = this, s;
    switch (r.type) {
      case dt.FullSnapshot: {
        this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), this.replaceIdOnNode(r.data.node, t);
        var c = r.data.node.id;
        return this.crossOriginIframeRootIdMap.set(t, c), this.patchRootIdOnNode(r.data.node, c), {
          timestamp: r.timestamp,
          type: dt.IncrementalSnapshot,
          data: {
            source: He.Mutation,
            adds: [
              {
                parentId: this.mirror.getId(t),
                nextId: null,
                node: r.data.node
              }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
          }
        };
      }
      case dt.Meta:
      case dt.Load:
      case dt.DomContentLoaded:
        return !1;
      case dt.Plugin:
        return r;
      case dt.Custom:
        return this.replaceIds(r.data.payload, t, [
          "id",
          "parentId",
          "previousId",
          "nextId"
        ]), r;
      case dt.IncrementalSnapshot:
        switch (r.data.source) {
          case He.Mutation:
            return r.data.adds.forEach(function(f) {
              o.replaceIds(f, t, [
                "parentId",
                "nextId",
                "previousId"
              ]), o.replaceIdOnNode(f.node, t);
              var d = o.crossOriginIframeRootIdMap.get(t);
              d && o.patchRootIdOnNode(f.node, d);
            }), r.data.removes.forEach(function(f) {
              o.replaceIds(f, t, [
                "parentId",
                "id"
              ]);
            }), r.data.attributes.forEach(function(f) {
              o.replaceIds(f, t, [
                "id"
              ]);
            }), r.data.texts.forEach(function(f) {
              o.replaceIds(f, t, [
                "id"
              ]);
            }), r;
          case He.Drag:
          case He.TouchMove:
          case He.MouseMove:
            return r.data.positions.forEach(function(f) {
              o.replaceIds(f, t, [
                "id"
              ]);
            }), r;
          case He.ViewportResize:
            return !1;
          case He.MediaInteraction:
          case He.MouseInteraction:
          case He.Scroll:
          case He.CanvasMutation:
          case He.Input:
            return this.replaceIds(r.data, t, [
              "id"
            ]), r;
          case He.StyleSheetRule:
          case He.StyleDeclaration:
            return this.replaceIds(r.data, t, [
              "id"
            ]), this.replaceStyleIds(r.data, t, [
              "styleId"
            ]), r;
          case He.Font:
            return r;
          case He.Selection:
            return r.data.ranges.forEach(function(f) {
              o.replaceIds(f, t, [
                "start",
                "end"
              ]);
            }), r;
          case He.AdoptedStyleSheet:
            return this.replaceIds(r.data, t, [
              "id"
            ]), this.replaceStyleIds(r.data, t, [
              "styleIds"
            ]), (s = r.data.styles) == null || s.forEach(function(f) {
              o.replaceStyleIds(f, t, [
                "styleId"
              ]);
            }), r;
        }
    }
    return !1;
  }, n.replace = function(t, r, o, s) {
    for (var c = Ae(s), f; !(f = c()).done; ) {
      var d = f.value;
      !Array.isArray(r[d]) && typeof r[d] != "number" || (Array.isArray(r[d]) ? r[d] = t.getIds(o, r[d]) : r[d] = t.getId(o, r[d]));
    }
    return r;
  }, n.replaceIds = function(t, r, o) {
    return this.replace(this.crossOriginIframeMirror, t, r, o);
  }, n.replaceStyleIds = function(t, r, o) {
    return this.replace(this.crossOriginIframeStyleMirror, t, r, o);
  }, n.replaceIdOnNode = function(t, r) {
    var o = this;
    this.replaceIds(t, r, [
      "id",
      "rootId"
    ]), "childNodes" in t && t.childNodes.forEach(function(s) {
      o.replaceIdOnNode(s, r);
    });
  }, n.patchRootIdOnNode = function(t, r) {
    var o = this;
    t.type !== oy.Document && !t.rootId && (t.rootId = r), "childNodes" in t && t.childNodes.forEach(function(s) {
      o.patchRootIdOnNode(s, r);
    });
  }, e;
}(), TO = /* @__PURE__ */ function() {
  function e(i) {
    me(this, "shadowDoms", /* @__PURE__ */ new WeakSet()), me(this, "mutationCb"), me(this, "scrollCb"), me(this, "bypassOptions"), me(this, "mirror"), me(this, "restoreHandlers", []), this.mutationCb = i.mutationCb, this.scrollCb = i.scrollCb, this.bypassOptions = i.bypassOptions, this.mirror = i.mirror, this.init();
  }
  var n = e.prototype;
  return n.init = function() {
    this.reset(), this.patchAttachShadow(Element, document);
  }, n.addShadowRoot = function(t, r) {
    var o = this;
    if (ea(t) && !this.shadowDoms.has(t)) {
      this.shadowDoms.add(t);
      var s = ay(yt({}, this.bypassOptions, {
        doc: r,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this
      }), t);
      this.restoreHandlers.push(function() {
        return s.disconnect();
      }), this.restoreHandlers.push(cy(yt({}, this.bypassOptions, {
        scrollCb: this.scrollCb,
        // https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
        // scroll is not allowed to pass the boundary, so we need to listen the shadow document
        doc: t,
        mirror: this.mirror
      }))), setTimeout(function() {
        t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && o.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, o.mirror.getId(ct.host(t))), o.restoreHandlers.push(ly({
          mirror: o.mirror,
          stylesheetManager: o.bypassOptions.stylesheetManager
        }, t));
      }, 0);
    }
  }, n.observeAttachShadow = function(t) {
    !t.contentWindow || !t.contentDocument || this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
  }, n.patchAttachShadow = function(t, r) {
    var o = this;
    this.restoreHandlers.push(cs(t.prototype, "attachShadow", function(s) {
      return function(c) {
        var f = s.call(this, c), d = ct.shadowRoot(this);
        return d && iy(this) && o.addShadowRoot(d, r), f;
      };
    }));
  }, n.reset = function() {
    this.restoreHandlers.forEach(function(t) {
      try {
        t();
      } catch {
      }
    }), this.restoreHandlers = [], this.shadowDoms = /* @__PURE__ */ new WeakSet();
  }, e;
}(), Vo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", MO = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Vc = 0; Vc < Vo.length; Vc++)
  MO[Vo.charCodeAt(Vc)] = Vc;
var FO = function(n) {
  var i = new Uint8Array(n), t, r = i.length, o = "";
  for (t = 0; t < r; t += 3)
    o += Vo[i[t] >> 2], o += Vo[(i[t] & 3) << 4 | i[t + 1] >> 4], o += Vo[(i[t + 1] & 15) << 2 | i[t + 2] >> 6], o += Vo[i[t + 2] & 63];
  return r % 3 === 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 === 1 && (o = o.substring(0, o.length - 2) + "=="), o;
}, pv = /* @__PURE__ */ new Map();
function NO(e, n) {
  var i = pv.get(e);
  return i || (i = /* @__PURE__ */ new Map(), pv.set(e, i)), i.has(n) || i.set(n, []), i.get(n);
}
var uy = function(e, n, i) {
  if (!(!e || !(dy(e, n) || (typeof e > "u" ? "undefined" : lt(e)) === "object"))) {
    var t = e.constructor.name, r = NO(i, t), o = r.indexOf(e);
    return o === -1 && (o = r.length, r.push(e)), o;
  }
};
function rl(e, n, i) {
  if (Xe(e, Array))
    return e.map(function(x) {
      return rl(x, n, i);
    });
  if (e === null)
    return e;
  if (Xe(e, Float32Array) || Xe(e, Float64Array) || Xe(e, Int32Array) || Xe(e, Uint32Array) || Xe(e, Uint8Array) || Xe(e, Uint16Array) || Xe(e, Int16Array) || Xe(e, Int8Array) || Xe(e, Uint8ClampedArray)) {
    var t = e.constructor.name;
    return {
      rr_type: t,
      args: [
        Object.values(e)
      ]
    };
  } else if (
    // SharedArrayBuffer disabled on most browsers due to spectre.
    // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
    // value instanceof SharedArrayBuffer ||
    Xe(e, ArrayBuffer)
  ) {
    var r = e.constructor.name, o = FO(e);
    return {
      rr_type: r,
      base64: o
    };
  } else if (Xe(e, DataView)) {
    var s = e.constructor.name;
    return {
      rr_type: s,
      args: [
        rl(e.buffer, n, i),
        e.byteOffset,
        e.byteLength
      ]
    };
  } else if (Xe(e, HTMLImageElement)) {
    var c = e.constructor.name, f = e.src;
    return {
      rr_type: c,
      src: f
    };
  } else if (Xe(e, HTMLCanvasElement)) {
    var d = "HTMLImageElement", p = e.toDataURL();
    return {
      rr_type: d,
      src: p
    };
  } else if (Xe(e, ImageData)) {
    var g = e.constructor.name;
    return {
      rr_type: g,
      args: [
        rl(e.data, n, i),
        e.width,
        e.height
      ]
    };
  } else if (dy(e, n) || (typeof e > "u" ? "undefined" : lt(e)) === "object") {
    var m = e.constructor.name, S = uy(e, n, i);
    return {
      rr_type: m,
      index: S
    };
  }
  return e;
}
var fy = function(e, n, i) {
  return e.map(function(t) {
    return rl(t, n, i);
  });
}, dy = function(e, n) {
  var i = [
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLFramebuffer",
    "WebGLProgram",
    "WebGLRenderbuffer",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLTexture",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
    // In old Chrome versions, value won't be an instanceof WebGLVertexArrayObject.
    "WebGLVertexArrayObjectOES"
  ], t = i.filter(function(r) {
    return typeof n[r] == "function";
  });
  return !!t.find(function(r) {
    return Xe(e, n[r]);
  });
};
function LO(e, n, i, t) {
  for (var r = function() {
    var d = f.value;
    try {
      if (typeof n.CanvasRenderingContext2D.prototype[d] != "function")
        return "continue";
      var p = cs(n.CanvasRenderingContext2D.prototype, d, function(m) {
        return function() {
          for (var S = this, x = arguments.length, I = new Array(x), b = 0; b < x; b++)
            I[b] = arguments[b];
          return rn(this.canvas, i, t, !0) || setTimeout(function() {
            var L = fy(I, n, S);
            e(S.canvas, {
              type: rs["2D"],
              property: d,
              args: L
            });
          }, 0), m.apply(this, I);
        };
      });
      o.push(p);
    } catch {
      var g = Kl(n.CanvasRenderingContext2D.prototype, d, {
        set: function(x) {
          e(this.canvas, {
            type: rs["2D"],
            property: d,
            args: [
              x
            ],
            setter: !0
          });
        }
      });
      o.push(g);
    }
  }, o = [], s = Object.getOwnPropertyNames(n.CanvasRenderingContext2D.prototype), c = Ae(s), f; !(f = c()).done; ) r();
  return function() {
    o.forEach(function(d) {
      return d();
    });
  };
}
function UO(e) {
  return e === "experimental-webgl" ? "webgl" : e;
}
function vv(e, n, i, t) {
  var r = [];
  try {
    var o = cs(e.HTMLCanvasElement.prototype, "getContext", function(s) {
      return function(c) {
        for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
          d[p - 1] = arguments[p];
        if (!rn(this, n, i, !0)) {
          var g = UO(c);
          if ("__context" in this || (this.__context = g), t && [
            "webgl",
            "webgl2"
          ].includes(g))
            if (d[0] && lt(d[0]) === "object") {
              var m = d[0];
              m.preserveDrawingBuffer || (m.preserveDrawingBuffer = !0);
            } else
              d.splice(0, 1, {
                preserveDrawingBuffer: !0
              });
        }
        return s.apply(this, [].concat([
          c
        ], d));
      };
    });
    r.push(o);
  } catch {
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return function() {
    r.forEach(function(s) {
      return s();
    });
  };
}
function gv(e, n, i, t, r, o) {
  for (var s = function() {
    var g = p.value;
    if (
      //prop.startsWith('get') ||  // e.g. getProgramParameter, but too risky
      [
        "isContextLost",
        "canvas",
        "drawingBufferWidth",
        "drawingBufferHeight"
      ].includes(g)
    )
      return "continue";
    try {
      if (typeof e[g] != "function")
        return "continue";
      var m = cs(e, g, function(x) {
        return function() {
          for (var I = arguments.length, b = new Array(I), L = 0; L < I; L++)
            b[L] = arguments[L];
          var $ = x.apply(this, b);
          if (uy($, o, this), "tagName" in this.canvas && !rn(this.canvas, t, r, !0)) {
            var W = fy(b, o, this), V = {
              type: n,
              property: g,
              args: W
            };
            i(this.canvas, V);
          }
          return $;
        };
      });
      c.push(m);
    } catch {
      var S = Kl(e, g, {
        set: function(b) {
          i(this.canvas, {
            type: n,
            property: g,
            args: [
              b
            ],
            setter: !0
          });
        }
      });
      c.push(S);
    }
  }, c = [], f = Object.getOwnPropertyNames(e), d = Ae(f), p; !(p = d()).done; ) s();
  return c;
}
function zO(e, n, i, t) {
  var r, o = [];
  if ((r = o).push.apply(r, [].concat(gv(n.WebGLRenderingContext.prototype, rs.WebGL, e, i, t, n))), typeof n.WebGL2RenderingContext < "u") {
    var s;
    (s = o).push.apply(s, [].concat(gv(n.WebGL2RenderingContext.prototype, rs.WebGL2, e, i, t, n)));
  }
  return function() {
    o.forEach(function(c) {
      return c();
    });
  };
}
var hy = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", jO = function(e) {
  return Uint8Array.from(atob(e), function(n) {
    return n.charCodeAt(0);
  });
}, mv = typeof window < "u" && window.Blob && new Blob([
  jO(hy)
], {
  type: "text/javascript;charset=utf-8"
});
function $O(e) {
  var n;
  try {
    if (n = mv && (window.URL || window.webkitURL).createObjectURL(mv), !n) throw "";
    var i = new Worker(n, {
      name: e == null ? void 0 : e.name
    });
    return i.addEventListener("error", function() {
      (window.URL || window.webkitURL).revokeObjectURL(n);
    }), i;
  } catch {
    return new Worker("data:text/javascript;base64," + hy, {
      name: e == null ? void 0 : e.name
    });
  } finally {
    n && (window.URL || window.webkitURL).revokeObjectURL(n);
  }
}
var WO = /* @__PURE__ */ function() {
  function e(i) {
    var t = this;
    me(this, "pendingCanvasMutations", /* @__PURE__ */ new Map()), me(this, "rafStamps", {
      latestId: 0,
      invokeId: null
    }), me(this, "mirror"), me(this, "mutationCb"), me(this, "resetObservers"), me(this, "frozen", !1), me(this, "locked", !1), me(this, "processMutation", function(g, m) {
      var S = t.rafStamps.invokeId && t.rafStamps.latestId !== t.rafStamps.invokeId;
      (S || !t.rafStamps.invokeId) && (t.rafStamps.invokeId = t.rafStamps.latestId), t.pendingCanvasMutations.has(g) || t.pendingCanvasMutations.set(g, []), t.pendingCanvasMutations.get(g).push(m);
    });
    var r = i.sampling, o = r === void 0 ? "all" : r, s = i.win, c = i.blockClass, f = i.blockSelector, d = i.recordCanvas, p = i.dataURLOptions;
    this.mutationCb = i.mutationCb, this.mirror = i.mirror, d && o === "all" && this.initCanvasMutationObserver(s, c, f), d && typeof o == "number" && this.initCanvasFPSObserver(o, s, c, f, {
      dataURLOptions: p
    });
  }
  var n = e.prototype;
  return n.reset = function() {
    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
  }, n.freeze = function() {
    this.frozen = !0;
  }, n.unfreeze = function() {
    this.frozen = !1;
  }, n.lock = function() {
    this.locked = !0;
  }, n.unlock = function() {
    this.locked = !1;
  }, n.initCanvasFPSObserver = function(t, r, o, s, c) {
    var f = this, d = vv(r, o, s, !0), p = /* @__PURE__ */ new Map(), g = new $O();
    g.onmessage = function(L) {
      var $ = L.data.id;
      if (p.set($, !1), "base64" in L.data) {
        var W = L.data, V = W.base64, Q = W.type, ie = W.width, ye = W.height;
        f.mutationCb({
          id: $,
          type: rs["2D"],
          commands: [
            {
              property: "clearRect",
              // wipe canvas
              args: [
                0,
                0,
                ie,
                ye
              ]
            },
            {
              property: "drawImage",
              // draws (semi-transparent) image
              args: [
                {
                  rr_type: "ImageBitmap",
                  args: [
                    {
                      rr_type: "Blob",
                      data: [
                        {
                          rr_type: "ArrayBuffer",
                          base64: V
                        }
                      ],
                      type: Q
                    }
                  ]
                },
                0,
                0
              ]
            }
          ]
        });
      }
    };
    var m = 1e3 / t, S = 0, x, I = function() {
      var L = [];
      return r.document.querySelectorAll("canvas").forEach(function($) {
        rn($, o, s, !0) || L.push($);
      }), L;
    }, b = function(L) {
      if (S && L - S < m) {
        x = requestAnimationFrame(b);
        return;
      }
      S = L;
      var $ = f;
      I().forEach(/* @__PURE__ */ vd(function(W) {
        var V, Q, ie, ye;
        return ua(this, function(ge) {
          switch (ge.label) {
            case 0:
              return Q = $.mirror.getId(W), p.get(Q) ? [
                2
              ] : W.width === 0 || W.height === 0 ? [
                2
              ] : (p.set(Q, !0), [
                "webgl",
                "webgl2"
              ].includes(W.__context) && (ie = W.getContext(W.__context), ((V = ie == null ? void 0 : ie.getContextAttributes()) == null ? void 0 : V.preserveDrawingBuffer) === !1 && ie.clear(ie.COLOR_BUFFER_BIT)), [
                4,
                createImageBitmap(W)
              ]);
            case 1:
              return ye = ge.sent(), g.postMessage({
                id: Q,
                bitmap: ye,
                width: W.width,
                height: W.height,
                dataURLOptions: c.dataURLOptions
              }, [
                ye
              ]), [
                2
              ];
          }
        });
      })), x = requestAnimationFrame(b);
    };
    x = requestAnimationFrame(b), this.resetObservers = function() {
      d(), cancelAnimationFrame(x);
    };
  }, n.initCanvasMutationObserver = function(t, r, o) {
    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
    var s = vv(t, r, o, !1), c = LO(this.processMutation.bind(this), t, r, o), f = zO(this.processMutation.bind(this), t, r, o);
    this.resetObservers = function() {
      s(), c(), f();
    };
  }, n.startPendingCanvasMutationFlusher = function() {
    var t = this;
    requestAnimationFrame(function() {
      return t.flushPendingCanvasMutations();
    });
  }, n.startRAFTimestamping = function() {
    var t = this, r = function(o) {
      t.rafStamps.latestId = o, requestAnimationFrame(r);
    };
    requestAnimationFrame(r);
  }, n.flushPendingCanvasMutations = function() {
    var t = this;
    this.pendingCanvasMutations.forEach(function(r, o) {
      var s = t.mirror.getId(o);
      t.flushPendingCanvasMutationFor(o, s);
    }), requestAnimationFrame(function() {
      return t.flushPendingCanvasMutations();
    });
  }, n.flushPendingCanvasMutationFor = function(t, r) {
    if (!(this.frozen || this.locked)) {
      var o = this.pendingCanvasMutations.get(t);
      if (!(!o || r === -1)) {
        var s = o.map(function(f) {
          f.type;
          var d = ca(f, [
            "type"
          ]);
          return d;
        }), c = o[0].type;
        this.mutationCb({
          id: r,
          type: c,
          commands: s
        }), this.pendingCanvasMutations.delete(t);
      }
    }
  }, e;
}(), qO = /* @__PURE__ */ function() {
  function e(i) {
    me(this, "trackedLinkElements", /* @__PURE__ */ new WeakSet()), me(this, "mutationCb"), me(this, "adoptedStyleSheetCb"), me(this, "styleMirror", new fO()), this.mutationCb = i.mutationCb, this.adoptedStyleSheetCb = i.adoptedStyleSheetCb;
  }
  var n = e.prototype;
  return n.attachLinkElement = function(t, r) {
    "_cssText" in r.attributes && this.mutationCb({
      adds: [],
      removes: [],
      texts: [],
      attributes: [
        {
          id: r.id,
          attributes: r.attributes
        }
      ]
    }), this.trackLinkElement(t);
  }, n.trackLinkElement = function(t) {
    this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
  }, n.adoptStyleSheets = function(t, r) {
    var o, s = function() {
      var g = p.value, m = void 0;
      o.styleMirror.has(g) ? m = o.styleMirror.getId(g) : (m = o.styleMirror.add(g), f.push({
        styleId: m,
        rules: Array.from(g.rules || CSSRule, function(S, x) {
          return {
            rule: kg(S, g.href),
            index: x
          };
        })
      })), c.styleIds.push(m);
    };
    if (t.length !== 0) {
      for (var c = {
        id: r,
        styleIds: []
      }, f = [], d = Ae(t), p; !(p = d()).done; ) o = this, s();
      f.length > 0 && (c.styles = f), this.adoptedStyleSheetCb(c);
    }
  }, n.reset = function() {
    this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
  }, n.trackStylesheetInLinkElement = function(t) {
  }, e;
}(), VO = /* @__PURE__ */ function() {
  function e() {
    me(this, "nodeMap", /* @__PURE__ */ new WeakMap()), me(this, "active", !1);
  }
  var n = e.prototype;
  return n.inOtherBuffer = function(t, r) {
    var o = this.nodeMap.get(t);
    return o && Array.from(o).some(function(s) {
      return s !== r;
    });
  }, n.add = function(t, r) {
    var o = this;
    this.active || (this.active = !0, requestAnimationFrame(function() {
      o.nodeMap = /* @__PURE__ */ new WeakMap(), o.active = !1;
    })), this.nodeMap.set(t, (this.nodeMap.get(t) || /* @__PURE__ */ new Set()).add(r));
  }, n.destroy = function() {
  }, e;
}(), Jt, nl, Xu, bl = !1;
try {
  if (Array.from([
    1
  ], function(e) {
    return e * 2;
  })[0] !== 2) {
    var Qu = document.createElement("iframe");
    document.body.appendChild(Qu), Array.from = ((yp = Qu.contentWindow) == null ? void 0 : yp.Array.from) || Array.from, document.body.removeChild(Qu);
  }
} catch (e) {
  console.debug("Unable to override Array.from", e);
}
var jn = WS();
function Li(e) {
  e === void 0 && (e = {});
  var n = e.emit, i = e.checkoutEveryNms, t = e.checkoutEveryNth, r = e.blockClass, o = r === void 0 ? "rr-block" : r, s = e.blockSelector, c = s === void 0 ? null : s, f = e.ignoreClass, d = f === void 0 ? "rr-ignore" : f, p = e.ignoreSelector, g = p === void 0 ? null : p, m = e.maskTextClass, S = m === void 0 ? "rr-mask" : m, x = e.maskTextSelector, I = x === void 0 ? null : x, b = e.inlineStylesheet, L = b === void 0 ? !0 : b, $ = e.maskAllInputs, W = e.maskInputOptions, V = e.slimDOMOptions, Q = e.maskInputFn, ie = e.maskTextFn, ye = e.hooks, ge = e.packFn, Ie = e.sampling, $e = Ie === void 0 ? {} : Ie, Oe = e.dataURLOptions, Me = Oe === void 0 ? {} : Oe, ke = e.mousemoveWait, ut = e.recordDOM, Ue = ut === void 0 ? !0 : ut, mt = e.recordCanvas, xt = mt === void 0 ? !1 : mt, Te = e.recordCrossOriginIframes, Ot = Te === void 0 ? !1 : Te, Bt = e.recordAfter, br = Bt === void 0 ? e.recordAfter === "DOMContentLoaded" ? e.recordAfter : "load" : Bt, Kt = e.userTriggeredOnInput, Lt = Kt === void 0 ? !1 : Kt, Ut = e.collectFonts, ar = Ut === void 0 ? !1 : Ut, qe = e.inlineImages, Mt = qe === void 0 ? !1 : qe, we = e.plugins, Ge = e.keepIframeSrcFn, bt = Ge === void 0 ? function() {
    return !1;
  } : Ge, wr = e.ignoreCSSAttributes, Tr = wr === void 0 ? /* @__PURE__ */ new Set([]) : wr, er = e.errorHandler;
  yO(er);
  var cr = Ot ? window.parent === window : !0, Tt = !1;
  if (!cr)
    try {
      window.parent.document && (Tt = !1);
    } catch {
      Tt = !0;
    }
  if (cr && !n)
    throw new Error("emit function is required");
  if (!cr && !Tt)
    return function() {
    };
  ke !== void 0 && $e.mousemove === void 0 && ($e.mousemove = ke), jn.reset();
  var tr = $ === !0 ? {
    color: !0,
    date: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
    textarea: !0,
    select: !0,
    password: !0
  } : W !== void 0 ? W : {
    password: !0
  }, Mr = V === !0 || V === "all" ? {
    script: !0,
    comment: !0,
    headFavicon: !0,
    headWhitespace: !0,
    headMetaSocial: !0,
    headMetaRobots: !0,
    headMetaHttpEquiv: !0,
    headMetaVerification: !0,
    // the following are off for slimDOMOptions === true,
    // as they destroy some (hidden) info:
    headMetaAuthorship: V === "all",
    headMetaDescKeywords: V === "all",
    headTitleMutations: V === "all"
  } : V || {};
  uO();
  var pr, zt = 0, _r = function(tt) {
    for (var fr = Ae(we || []), Pe; !(Pe = fr()).done; ) {
      var pt = Pe.value;
      pt.eventProcessor && (tt = pt.eventProcessor(tt));
    }
    return ge && // Disable packing events which will be emitted to parent frames.
    !Tt && (tt = ge(tt)), tt;
  };
  Jt = function(tt, fr) {
    var Pe, pt = tt;
    if (pt.timestamp = yl(), (Pe = xo[0]) != null && Pe.isFrozen() && pt.type !== dt.FullSnapshot && !(pt.type === dt.IncrementalSnapshot && pt.data.source === He.Mutation) && xo.forEach(function(Ci) {
      return Ci.unfreeze();
    }), cr)
      n == null || n(_r(pt), fr);
    else if (Tt) {
      var ri = {
        type: "rrweb",
        event: _r(pt),
        origin: window.location.origin,
        isCheckout: fr
      };
      window.parent.postMessage(ri, "*");
    }
    if (pt.type === dt.FullSnapshot)
      pr = pt, zt = 0;
    else if (pt.type === dt.IncrementalSnapshot) {
      if (pt.data.source === He.Mutation && pt.data.isAttachIframe)
        return;
      zt++;
      var Vn = t && zt >= t, qi = i && pt.timestamp - pr.timestamp > i;
      (Vn || qi) && nl(!0);
    }
  };
  for (var Vr = function(tt) {
    Jt({
      type: dt.IncrementalSnapshot,
      data: yt({
        source: He.Mutation
      }, tt)
    });
  }, Dn = function(tt) {
    return Jt({
      type: dt.IncrementalSnapshot,
      data: yt({
        source: He.Scroll
      }, tt)
    });
  }, Cr = function(tt) {
    return Jt({
      type: dt.IncrementalSnapshot,
      data: yt({
        source: He.CanvasMutation
      }, tt)
    });
  }, pn = function(tt) {
    return Jt({
      type: dt.IncrementalSnapshot,
      data: yt({
        source: He.AdoptedStyleSheet
      }, tt)
    });
  }, Sr = new qO({
    mutationCb: Vr,
    adoptedStyleSheetCb: pn
  }), je = new BO({
    mirror: jn,
    mutationCb: Vr,
    stylesheetManager: Sr,
    recordCrossOriginIframes: Ot,
    wrappedEmit: Jt
  }), Ve = Ae(we || []), Fe; !(Fe = Ve()).done; ) {
    var ht = Fe.value;
    ht.getMirror && ht.getMirror({
      nodeMirror: jn,
      crossOriginIframeMirror: je.crossOriginIframeMirror,
      crossOriginIframeStyleMirror: je.crossOriginIframeStyleMirror
    });
  }
  var lr = new VO();
  Xu = new WO({
    recordCanvas: xt,
    mutationCb: Cr,
    win: window,
    blockClass: o,
    blockSelector: c,
    mirror: jn,
    sampling: $e.canvas,
    dataURLOptions: Me
  });
  var rr = new TO({
    mutationCb: Vr,
    scrollCb: Dn,
    bypassOptions: {
      blockClass: o,
      blockSelector: c,
      maskTextClass: S,
      maskTextSelector: I,
      inlineStylesheet: L,
      maskInputOptions: tr,
      dataURLOptions: Me,
      maskTextFn: ie,
      maskInputFn: Q,
      recordCanvas: xt,
      inlineImages: Mt,
      sampling: $e,
      slimDOMOptions: Mr,
      iframeManager: je,
      stylesheetManager: Sr,
      canvasManager: Xu,
      keepIframeSrcFn: bt,
      processedNodeManager: lr
    },
    mirror: jn
  });
  nl = function(tt) {
    if (tt === void 0 && (tt = !1), !!Ue) {
      Jt({
        type: dt.Meta,
        data: {
          href: window.location.href,
          width: Qm(),
          height: Xm()
        }
      }, tt), Sr.reset(), rr.init(), xo.forEach(function(Pe) {
        return Pe.lock();
      });
      var fr = hE(document, {
        mirror: jn,
        blockClass: o,
        blockSelector: c,
        maskTextClass: S,
        maskTextSelector: I,
        inlineStylesheet: L,
        maskAllInputs: tr,
        maskTextFn: ie,
        maskInputFn: Q,
        slimDOM: Mr,
        dataURLOptions: Me,
        recordCanvas: xt,
        inlineImages: Mt,
        onSerialize: function(Pe) {
          ty(Pe, jn) && je.addIframe(Pe), ry(Pe, jn) && Sr.trackLinkElement(Pe), Gf(Pe) && rr.addShadowRoot(ct.shadowRoot(Pe), document);
        },
        onIframeLoad: function(Pe, pt) {
          je.attachIframe(Pe, pt), rr.observeAttachShadow(Pe);
        },
        onStylesheetLoad: function(Pe, pt) {
          Sr.attachLinkElement(Pe, pt);
        },
        keepIframeSrcFn: bt
      });
      if (!fr)
        return console.warn("Failed to snapshot the document");
      Jt({
        type: dt.FullSnapshot,
        data: {
          node: fr,
          initialOffset: Zm(window)
        }
      }, tt), xo.forEach(function(Pe) {
        return Pe.unlock();
      }), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Sr.adoptStyleSheets(document.adoptedStyleSheets, jn.getId(document));
    }
  };
  try {
    var Qe = [], Be = function(tt) {
      var fr;
      return gt(PO)({
        mutationCb: Vr,
        mousemoveCb: function(Pe, pt) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: {
              source: pt,
              positions: Pe
            }
          });
        },
        mouseInteractionCb: function(Pe) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.MouseInteraction
            }, Pe)
          });
        },
        scrollCb: Dn,
        viewportResizeCb: function(Pe) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.ViewportResize
            }, Pe)
          });
        },
        inputCb: function(Pe) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.Input
            }, Pe)
          });
        },
        mediaInteractionCb: function(Pe) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.MediaInteraction
            }, Pe)
          });
        },
        styleSheetRuleCb: function(Pe) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.StyleSheetRule
            }, Pe)
          });
        },
        styleDeclarationCb: function(Pe) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.StyleDeclaration
            }, Pe)
          });
        },
        canvasMutationCb: Cr,
        fontCb: function(Pe) {
          return Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.Font
            }, Pe)
          });
        },
        selectionCb: function(Pe) {
          Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.Selection
            }, Pe)
          });
        },
        customElementCb: function(Pe) {
          Jt({
            type: dt.IncrementalSnapshot,
            data: yt({
              source: He.CustomElement
            }, Pe)
          });
        },
        blockClass: o,
        ignoreClass: d,
        ignoreSelector: g,
        maskTextClass: S,
        maskTextSelector: I,
        maskInputOptions: tr,
        inlineStylesheet: L,
        sampling: $e,
        recordDOM: Ue,
        recordCanvas: xt,
        inlineImages: Mt,
        userTriggeredOnInput: Lt,
        collectFonts: ar,
        doc: tt,
        maskInputFn: Q,
        maskTextFn: ie,
        keepIframeSrcFn: bt,
        blockSelector: c,
        slimDOMOptions: Mr,
        dataURLOptions: Me,
        mirror: jn,
        iframeManager: je,
        stylesheetManager: Sr,
        shadowDomManager: rr,
        processedNodeManager: lr,
        canvasManager: Xu,
        ignoreCSSAttributes: Tr,
        plugins: ((fr = we == null ? void 0 : we.filter(function(Pe) {
          return Pe.observer;
        })) == null ? void 0 : fr.map(function(Pe) {
          return {
            observer: Pe.observer,
            options: Pe.options,
            callback: function(pt) {
              return Jt({
                type: dt.Plugin,
                data: {
                  plugin: Pe.name,
                  payload: pt
                }
              });
            }
          };
        })) || []
      }, ye);
    };
    je.addLoadListener(function(tt) {
      try {
        Qe.push(Be(tt.contentDocument));
      } catch (fr) {
        console.warn(fr);
      }
    });
    var ur = function() {
      nl(), Qe.push(Be(document)), bl = !0;
    };
    return document.readyState === "interactive" || document.readyState === "complete" ? ur() : (Qe.push(tn("DOMContentLoaded", function() {
      Jt({
        type: dt.DomContentLoaded,
        data: {}
      }), br === "DOMContentLoaded" && ur();
    })), Qe.push(tn("load", function() {
      Jt({
        type: dt.Load,
        data: {}
      }), br === "load" && ur();
    }, window))), function() {
      Qe.forEach(function(tt) {
        return tt();
      }), lr.destroy(), bl = !1, xO();
    };
  } catch (tt) {
    console.warn(tt);
  }
}
Li.addCustomEvent = function(e, n) {
  if (!bl)
    throw new Error("please add custom event after start recording");
  Jt({
    type: dt.Custom,
    data: {
      tag: e,
      payload: n
    }
  });
};
Li.freezePage = function() {
  xo.forEach(function(e) {
    return e.freeze();
  });
};
Li.takeFullSnapshot = function(e) {
  if (!bl)
    throw new Error("please take full snapshot after start recording");
  nl(e);
};
Li.mirror = jn;
var yv;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(yv || (yv = {}));
Li.addCustomEvent;
Li.freezePage;
Li.takeFullSnapshot;
var xv = xe.setImmediate, Pi, Yf, Zf, py = Object.prototype.toString, HO = typeof xv < "u" ? function(n) {
  return xv(n);
} : setTimeout;
try {
  Object.defineProperty({}, "x", {}), Pi = function(n, i, t, r) {
    return Object.defineProperty(n, i, {
      value: t,
      writable: !0,
      configurable: r !== !1
    });
  };
} catch {
  Pi = function(i, t, r) {
    return i[t] = r, i;
  };
}
Zf = /* @__PURE__ */ function() {
  var n, i, t;
  function r(o, s) {
    this.fn = o, this.self = s, this.next = void 0;
  }
  return {
    add: function(s, c) {
      t = new r(s, c), i ? i.next = t : n = t, i = t, t = void 0;
    },
    drain: function() {
      var s = n;
      for (n = i = Yf = void 0; s; )
        s.fn.call(s.self), s = s.next;
    }
  };
}();
function wl(e, n) {
  Zf.add(e, n), Yf || (Yf = HO(Zf.drain));
}
function vy(e) {
  var n, i = typeof e;
  return e !== null && (i === "object" || i === "function") && (n = e.then), typeof n == "function" ? n : !1;
}
function jd() {
  for (var e = 0; e < this.chain.length; e++)
    GO(
      this,
      this.state === 1 ? this.chain[e].success : this.chain[e].failure,
      this.chain[e]
    );
  this.chain.length = 0;
}
function GO(e, n, i) {
  var t, r;
  try {
    n === !1 ? i.reject(e.msg) : (n === !0 ? t = e.msg : t = n.call(void 0, e.msg), t === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (r = vy(t)) ? r.call(t, i.resolve, i.reject) : i.resolve(t));
  } catch (o) {
    i.reject(o);
  }
}
function gy(e) {
  var n, i = this;
  if (!i.triggered) {
    i.triggered = !0, i.def && (i = i.def);
    try {
      (n = vy(e)) ? wl(function() {
        var t = new bv(i);
        try {
          n.call(
            e,
            function() {
              gy.apply(t, arguments);
            },
            function() {
              ra.apply(t, arguments);
            }
          );
        } catch (r) {
          ra.call(t, r);
        }
      }) : (i.msg = e, i.state = 1, i.chain.length > 0 && wl(jd, i));
    } catch (t) {
      ra.call(new bv(i), t);
    }
  }
}
function ra(e) {
  var n = this;
  n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = e, n.state = 2, n.chain.length > 0 && wl(jd, n));
}
function my(e, n, i, t) {
  for (var r = 0; r < n.length; r++)
    (function(s) {
      e.resolve(n[s]).then(
        function(f) {
          i(s, f);
        },
        t
      );
    })(r);
}
function bv(e) {
  this.def = e, this.triggered = !1;
}
function KO(e) {
  this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
}
function Ui(e) {
  if (typeof e != "function")
    throw TypeError("Not a function");
  if (this.__NPO__ !== 0)
    throw TypeError("Not a promise");
  this.__NPO__ = 1;
  var n = new KO(this);
  this.then = function(t, r) {
    var o = {
      success: typeof t == "function" ? t : !0,
      failure: typeof r == "function" ? r : !1
    };
    return o.promise = new this.constructor(function(c, f) {
      if (typeof c != "function" || typeof f != "function")
        throw TypeError("Not a function");
      o.resolve = c, o.reject = f;
    }), n.chain.push(o), n.state !== 0 && wl(jd, n), o.promise;
  }, this.catch = function(t) {
    return this.then(void 0, t);
  };
  try {
    e.call(
      void 0,
      function(t) {
        gy.call(n, t);
      },
      function(t) {
        ra.call(n, t);
      }
    );
  } catch (i) {
    ra.call(n, i);
  }
}
var yy = Pi(
  {},
  "constructor",
  Ui,
  /*configurable=*/
  !1
);
Ui.prototype = yy;
Pi(
  yy,
  "__NPO__",
  0,
  /*configurable=*/
  !1
);
Pi(Ui, "resolve", function(n) {
  var i = this;
  return n && typeof n == "object" && n.__NPO__ === 1 ? n : new i(function(r, o) {
    if (typeof r != "function" || typeof o != "function")
      throw TypeError("Not a function");
    r(n);
  });
});
Pi(Ui, "reject", function(n) {
  return new this(function(t, r) {
    if (typeof t != "function" || typeof r != "function")
      throw TypeError("Not a function");
    r(n);
  });
});
Pi(Ui, "all", function(n) {
  var i = this;
  return py.call(n) !== "[object Array]" ? i.reject(TypeError("Not an array")) : n.length === 0 ? i.resolve([]) : new i(function(r, o) {
    if (typeof r != "function" || typeof o != "function")
      throw TypeError("Not a function");
    var s = n.length, c = Array(s), f = 0;
    my(i, n, function(p, g) {
      c[p] = g, ++f === s && r(c);
    }, o);
  });
});
Pi(Ui, "race", function(n) {
  var i = this;
  return py.call(n) !== "[object Array]" ? i.reject(TypeError("Not an array")) : new i(function(r, o) {
    if (typeof r != "function" || typeof o != "function")
      throw TypeError("Not a function");
    my(i, n, function(c, f) {
      r(f);
    }, o);
  });
});
var kt;
typeof Promise < "u" && Promise.toString().indexOf("[native code]") !== -1 ? kt = Promise : kt = Ui;
var Wn = {
  DEBUG: !1,
  LIB_VERSION: "2.65.0"
}, na = 24 * 60 * 60 * 1e3, Ju = 8 * 1e3, Yl = Array.prototype, YO = Function.prototype, xy = Object.prototype, Oi = Yl.slice, Oa = xy.toString, Zl = xy.hasOwnProperty, hr = xe.console, Di = xe.navigator, wt = xe.document, Hc = xe.opera, wv = xe.screen, mi = Di.userAgent, ef = YO.bind, _v = Yl.forEach, Cv = Yl.indexOf, Sv = Yl.map, ZO = Array.isArray, Xf = {}, _ = {
  trim: function(e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
}, _t = {
  /** @type {function(...*)} */
  log: function() {
    if (Wn.DEBUG && !_.isUndefined(hr) && hr)
      try {
        hr.log.apply(hr, arguments);
      } catch {
        _.each(arguments, function(n) {
          hr.log(n);
        });
      }
  },
  /** @type {function(...*)} */
  warn: function() {
    if (Wn.DEBUG && !_.isUndefined(hr) && hr) {
      var e = ["Mixpanel warning:"].concat(_.toArray(arguments));
      try {
        hr.warn.apply(hr, e);
      } catch {
        _.each(e, function(i) {
          hr.warn(i);
        });
      }
    }
  },
  /** @type {function(...*)} */
  error: function() {
    if (Wn.DEBUG && !_.isUndefined(hr) && hr) {
      var e = ["Mixpanel error:"].concat(_.toArray(arguments));
      try {
        hr.error.apply(hr, e);
      } catch {
        _.each(e, function(i) {
          hr.error(i);
        });
      }
    }
  },
  /** @type {function(...*)} */
  critical: function() {
    if (!_.isUndefined(hr) && hr) {
      var e = ["Mixpanel error:"].concat(_.toArray(arguments));
      try {
        hr.error.apply(hr, e);
      } catch {
        _.each(e, function(i) {
          hr.error(i);
        });
      }
    }
  }
}, tf = function(e, n) {
  return function() {
    return arguments[0] = "[" + n + "] " + arguments[0], e.apply(_t, arguments);
  };
}, ko = function(e) {
  return {
    log: tf(_t.log, e),
    error: tf(_t.error, e),
    critical: tf(_t.critical, e)
  };
}, $d = function(e) {
  return function() {
    try {
      return e.apply(this, arguments);
    } catch (n) {
      _t.critical("Implementation error. Please turn on debug and contact support@mixpanel.com."), Wn.DEBUG && _t.critical(n);
    }
  };
}, by = function(e) {
  var n = e.prototype;
  for (var i in n)
    typeof n[i] == "function" && (n[i] = $d(n[i]));
};
_.bind = function(e, n) {
  var i, t;
  if (ef && e.bind === ef)
    return ef.apply(e, Oi.call(arguments, 1));
  if (!_.isFunction(e))
    throw new TypeError();
  return i = Oi.call(arguments, 2), t = function() {
    if (!(this instanceof t))
      return e.apply(n, i.concat(Oi.call(arguments)));
    var r = {};
    r.prototype = e.prototype;
    var o = new r();
    r.prototype = null;
    var s = e.apply(o, i.concat(Oi.call(arguments)));
    return Object(s) === s ? s : o;
  }, t;
};
_.each = function(e, n, i) {
  if (e != null) {
    if (_v && e.forEach === _v)
      e.forEach(n, i);
    else if (e.length === +e.length) {
      for (var t = 0, r = e.length; t < r; t++)
        if (t in e && n.call(i, e[t], t, e) === Xf)
          return;
    } else
      for (var o in e)
        if (Zl.call(e, o) && n.call(i, e[o], o, e) === Xf)
          return;
  }
};
_.extend = function(e) {
  return _.each(Oi.call(arguments, 1), function(n) {
    for (var i in n)
      n[i] !== void 0 && (e[i] = n[i]);
  }), e;
};
_.isArray = ZO || function(e) {
  return Oa.call(e) === "[object Array]";
};
_.isFunction = function(e) {
  try {
    return /^\s*\bfunction\b/.test(e);
  } catch {
    return !1;
  }
};
_.isArguments = function(e) {
  return !!(e && Zl.call(e, "callee"));
};
_.toArray = function(e) {
  return e ? e.toArray ? e.toArray() : _.isArray(e) || _.isArguments(e) ? Oi.call(e) : _.values(e) : [];
};
_.map = function(e, n, i) {
  if (Sv && e.map === Sv)
    return e.map(n, i);
  var t = [];
  return _.each(e, function(r) {
    t.push(n.call(i, r));
  }), t;
};
_.keys = function(e) {
  var n = [];
  return e === null || _.each(e, function(i, t) {
    n[n.length] = t;
  }), n;
};
_.values = function(e) {
  var n = [];
  return e === null || _.each(e, function(i) {
    n[n.length] = i;
  }), n;
};
_.include = function(e, n) {
  var i = !1;
  return e === null ? i : Cv && e.indexOf === Cv ? e.indexOf(n) != -1 : (_.each(e, function(t) {
    if (i || (i = t === n))
      return Xf;
  }), i);
};
_.includes = function(e, n) {
  return e.indexOf(n) !== -1;
};
_.inherit = function(e, n) {
  return e.prototype = new n(), e.prototype.constructor = e, e.superclass = n.prototype, e;
};
_.isObject = function(e) {
  return e === Object(e) && !_.isArray(e);
};
_.isEmptyObject = function(e) {
  if (_.isObject(e)) {
    for (var n in e)
      if (Zl.call(e, n))
        return !1;
    return !0;
  }
  return !1;
};
_.isUndefined = function(e) {
  return e === void 0;
};
_.isString = function(e) {
  return Oa.call(e) == "[object String]";
};
_.isDate = function(e) {
  return Oa.call(e) == "[object Date]";
};
_.isNumber = function(e) {
  return Oa.call(e) == "[object Number]";
};
_.isElement = function(e) {
  return !!(e && e.nodeType === 1);
};
_.encodeDates = function(e) {
  return _.each(e, function(n, i) {
    _.isDate(n) ? e[i] = _.formatDate(n) : _.isObject(n) && (e[i] = _.encodeDates(n));
  }), e;
};
_.timestamp = function() {
  return Date.now = Date.now || function() {
    return +/* @__PURE__ */ new Date();
  }, Date.now();
};
_.formatDate = function(e) {
  function n(i) {
    return i < 10 ? "0" + i : i;
  }
  return e.getUTCFullYear() + "-" + n(e.getUTCMonth() + 1) + "-" + n(e.getUTCDate()) + "T" + n(e.getUTCHours()) + ":" + n(e.getUTCMinutes()) + ":" + n(e.getUTCSeconds());
};
_.strip_empty_properties = function(e) {
  var n = {};
  return _.each(e, function(i, t) {
    _.isString(i) && i.length > 0 && (n[t] = i);
  }), n;
};
_.truncate = function(e, n) {
  var i;
  return typeof e == "string" ? i = e.slice(0, n) : _.isArray(e) ? (i = [], _.each(e, function(t) {
    i.push(_.truncate(t, n));
  })) : _.isObject(e) ? (i = {}, _.each(e, function(t, r) {
    i[r] = _.truncate(t, n);
  })) : i = e, i;
};
_.JSONEncode = /* @__PURE__ */ function() {
  return function(e) {
    var n = e, i = function(r) {
      var o = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s = {
        // table of character substitutions
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      };
      return o.lastIndex = 0, o.test(r) ? '"' + r.replace(o, function(c) {
        var f = s[c];
        return typeof f == "string" ? f : "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + r + '"';
    }, t = function(r, o) {
      var s = "", c = "    ", f = 0, d = "", p = "", g = 0, m = s, S = [], x = o[r];
      switch (x && typeof x == "object" && typeof x.toJSON == "function" && (x = x.toJSON(r)), typeof x) {
        case "string":
          return i(x);
        case "number":
          return isFinite(x) ? String(x) : "null";
        case "boolean":
        case "null":
          return String(x);
        case "object":
          if (!x)
            return "null";
          if (s += c, S = [], Oa.apply(x) === "[object Array]") {
            for (g = x.length, f = 0; f < g; f += 1)
              S[f] = t(f, x) || "null";
            return p = S.length === 0 ? "[]" : s ? `[
` + s + S.join(`,
` + s) + `
` + m + "]" : "[" + S.join(",") + "]", s = m, p;
          }
          for (d in x)
            Zl.call(x, d) && (p = t(d, x), p && S.push(i(d) + (s ? ": " : ":") + p));
          return p = S.length === 0 ? "{}" : s ? "{" + S.join(",") + m + "}" : "{" + S.join(",") + "}", s = m, p;
      }
    };
    return t("", {
      "": n
    });
  };
}();
_.JSONDecode = function() {
  var e, n, i = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "	"
  }, t, r = function(S) {
    var x = new SyntaxError(S);
    throw x.at = e, x.text = t, x;
  }, o = function(S) {
    return S && S !== n && r("Expected '" + S + "' instead of '" + n + "'"), n = t.charAt(e), e += 1, n;
  }, s = function() {
    var S, x = "";
    for (n === "-" && (x = "-", o("-")); n >= "0" && n <= "9"; )
      x += n, o();
    if (n === ".")
      for (x += "."; o() && n >= "0" && n <= "9"; )
        x += n;
    if (n === "e" || n === "E")
      for (x += n, o(), (n === "-" || n === "+") && (x += n, o()); n >= "0" && n <= "9"; )
        x += n, o();
    if (S = +x, !isFinite(S))
      r("Bad number");
    else
      return S;
  }, c = function() {
    var S, x, I = "", b;
    if (n === '"')
      for (; o(); ) {
        if (n === '"')
          return o(), I;
        if (n === "\\")
          if (o(), n === "u") {
            for (b = 0, x = 0; x < 4 && (S = parseInt(o(), 16), !!isFinite(S)); x += 1)
              b = b * 16 + S;
            I += String.fromCharCode(b);
          } else if (typeof i[n] == "string")
            I += i[n];
          else
            break;
        else
          I += n;
      }
    r("Bad string");
  }, f = function() {
    for (; n && n <= " "; )
      o();
  }, d = function() {
    switch (n) {
      case "t":
        return o("t"), o("r"), o("u"), o("e"), !0;
      case "f":
        return o("f"), o("a"), o("l"), o("s"), o("e"), !1;
      case "n":
        return o("n"), o("u"), o("l"), o("l"), null;
    }
    r('Unexpected "' + n + '"');
  }, p, g = function() {
    var S = [];
    if (n === "[") {
      if (o("["), f(), n === "]")
        return o("]"), S;
      for (; n; ) {
        if (S.push(p()), f(), n === "]")
          return o("]"), S;
        o(","), f();
      }
    }
    r("Bad array");
  }, m = function() {
    var S, x = {};
    if (n === "{") {
      if (o("{"), f(), n === "}")
        return o("}"), x;
      for (; n; ) {
        if (S = c(), f(), o(":"), Object.hasOwnProperty.call(x, S) && r('Duplicate key "' + S + '"'), x[S] = p(), f(), n === "}")
          return o("}"), x;
        o(","), f();
      }
    }
    r("Bad object");
  };
  return p = function() {
    switch (f(), n) {
      case "{":
        return m();
      case "[":
        return g();
      case '"':
        return c();
      case "-":
        return s();
      default:
        return n >= "0" && n <= "9" ? s() : d();
    }
  }, function(S) {
    var x;
    return t = S, e = 0, n = " ", x = p(), f(), n && r("Syntax error"), x;
  };
}();
_.base64Encode = function(e) {
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i, t, r, o, s, c, f, d, p = 0, g = 0, m = "", S = [];
  if (!e)
    return e;
  e = _.utf8Encode(e);
  do
    i = e.charCodeAt(p++), t = e.charCodeAt(p++), r = e.charCodeAt(p++), d = i << 16 | t << 8 | r, o = d >> 18 & 63, s = d >> 12 & 63, c = d >> 6 & 63, f = d & 63, S[g++] = n.charAt(o) + n.charAt(s) + n.charAt(c) + n.charAt(f);
  while (p < e.length);
  switch (m = S.join(""), e.length % 3) {
    case 1:
      m = m.slice(0, -2) + "==";
      break;
    case 2:
      m = m.slice(0, -1) + "=";
      break;
  }
  return m;
};
_.utf8Encode = function(e) {
  e = (e + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
  var n = "", i, t, r = 0, o;
  for (i = t = 0, r = e.length, o = 0; o < r; o++) {
    var s = e.charCodeAt(o), c = null;
    s < 128 ? t++ : s > 127 && s < 2048 ? c = String.fromCharCode(s >> 6 | 192, s & 63 | 128) : c = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128), c !== null && (t > i && (n += e.substring(i, t)), n += c, i = t = o + 1);
  }
  return t > i && (n += e.substring(i, e.length)), n;
};
_.UUID = function() {
  try {
    return xe.crypto.randomUUID();
  } catch {
    for (var e = new Array(36), n = 0; n < 36; n++)
      e[n] = Math.floor(Math.random() * 16);
    return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", _.map(e, function(t) {
      return t.toString(16);
    }).join("");
  }
};
var Ev = [
  "ahrefsbot",
  "ahrefssiteaudit",
  "amazonbot",
  "baiduspider",
  "bingbot",
  "bingpreview",
  "chrome-lighthouse",
  "facebookexternal",
  "petalbot",
  "pinterest",
  "screaming frog",
  "yahoo! slurp",
  "yandex",
  // a whole bunch of goog-specific crawlers
  // https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers
  "adsbot-google",
  "apis-google",
  "duplexweb-google",
  "feedfetcher-google",
  "google favicon",
  "google web preview",
  "google-read-aloud",
  "googlebot",
  "googleweblight",
  "mediapartners-google",
  "storebot-google"
];
_.isBlockedUA = function(e) {
  var n;
  for (e = e.toLowerCase(), n = 0; n < Ev.length; n++)
    if (e.indexOf(Ev[n]) !== -1)
      return !0;
  return !1;
};
_.HTTPBuildQuery = function(e, n) {
  var i, t, r = [];
  return _.isUndefined(n) && (n = "&"), _.each(e, function(o, s) {
    i = encodeURIComponent(o.toString()), t = encodeURIComponent(s), r[r.length] = t + "=" + i;
  }), r.join(n);
};
_.getQueryParam = function(e, n) {
  n = n.replace(/[[]/g, "\\[").replace(/[\]]/g, "\\]");
  var i = "[\\?&]" + n + "=([^&#]*)", t = new RegExp(i), r = t.exec(e);
  if (r === null || r && typeof r[1] != "string" && r[1].length)
    return "";
  var o = r[1];
  try {
    o = decodeURIComponent(o);
  } catch {
    _t.error("Skipping decoding for malformed query param: " + o);
  }
  return o.replace(/\+/g, " ");
};
_.cookie = {
  get: function(e) {
    for (var n = e + "=", i = wt.cookie.split(";"), t = 0; t < i.length; t++) {
      for (var r = i[t]; r.charAt(0) == " "; )
        r = r.substring(1, r.length);
      if (r.indexOf(n) === 0)
        return decodeURIComponent(r.substring(n.length, r.length));
    }
    return null;
  },
  parse: function(e) {
    var n;
    try {
      n = _.JSONDecode(_.cookie.get(e)) || {};
    } catch {
    }
    return n;
  },
  set_seconds: function(e, n, i, t, r, o, s) {
    var c = "", f = "", d = "";
    if (s)
      c = "; domain=" + s;
    else if (t) {
      var p = Av(wt.location.hostname);
      c = p ? "; domain=." + p : "";
    }
    if (i) {
      var g = /* @__PURE__ */ new Date();
      g.setTime(g.getTime() + i * 1e3), f = "; expires=" + g.toGMTString();
    }
    o && (r = !0, d = "; SameSite=None"), r && (d += "; secure"), wt.cookie = e + "=" + encodeURIComponent(n) + f + "; path=/" + c + d;
  },
  set: function(e, n, i, t, r, o, s) {
    var c = "", f = "", d = "";
    if (s)
      c = "; domain=" + s;
    else if (t) {
      var p = Av(wt.location.hostname);
      c = p ? "; domain=." + p : "";
    }
    if (i) {
      var g = /* @__PURE__ */ new Date();
      g.setTime(g.getTime() + i * 24 * 60 * 60 * 1e3), f = "; expires=" + g.toGMTString();
    }
    o && (r = !0, d = "; SameSite=None"), r && (d += "; secure");
    var m = e + "=" + encodeURIComponent(n) + f + "; path=/" + c + d;
    return wt.cookie = m, m;
  },
  remove: function(e, n, i) {
    _.cookie.set(e, "", -1, n, !1, !1, i);
  }
};
var wy = function(e) {
  var n = !0;
  try {
    var i = "__mplss_" + Wd(8), t = "xyz";
    e.setItem(i, t), e.getItem(i) !== t && (n = !1), e.removeItem(i);
  } catch {
    n = !1;
  }
  return n;
}, rf = null, wa = function(e, n) {
  return rf !== null && !n ? rf : rf = wy(e || xe.localStorage);
}, nf = null, XO = function(e, n) {
  return nf !== null && !n ? nf : nf = wy(e || xe.sessionStorage);
};
function _y(e, n, i) {
  var t = function(r) {
    _t.error(n + " error: " + r);
  };
  return {
    is_supported: function(r) {
      var o = i(e, r);
      return o || _t.error(n + " unsupported"), o;
    },
    error: t,
    get: function(r) {
      try {
        return e.getItem(r);
      } catch (o) {
        t(o);
      }
      return null;
    },
    parse: function(r) {
      try {
        return _.JSONDecode(e.getItem(r)) || {};
      } catch {
      }
      return null;
    },
    set: function(r, o) {
      try {
        e.setItem(r, o);
      } catch (s) {
        t(s);
      }
    },
    remove: function(r) {
      try {
        e.removeItem(r);
      } catch (o) {
        t(o);
      }
    }
  };
}
_.localStorage = _y(xe.localStorage, "localStorage", wa);
_.sessionStorage = _y(xe.sessionStorage, "sessionStorage", XO);
_.register_event = function() {
  var e = function(t, r, o, s, c) {
    if (!t) {
      _t.error("No valid element provided to register_event");
      return;
    }
    if (t.addEventListener && !s)
      t.addEventListener(r, o, !!c);
    else {
      var f = "on" + r, d = t[f];
      t[f] = n(t, o, d);
    }
  };
  function n(t, r, o) {
    var s = function(c) {
      if (c = c || i(xe.event), !!c) {
        var f = !0, d, p;
        return _.isFunction(o) && (d = o(c)), p = r.call(t, c), (d === !1 || p === !1) && (f = !1), f;
      }
    };
    return s;
  }
  function i(t) {
    return t && (t.preventDefault = i.preventDefault, t.stopPropagation = i.stopPropagation), t;
  }
  return i.preventDefault = function() {
    this.returnValue = !1;
  }, i.stopPropagation = function() {
    this.cancelBubble = !0;
  }, e;
}();
var QO = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
_.dom_query = /* @__PURE__ */ function() {
  function e(r) {
    return r.all ? r.all : r.getElementsByTagName("*");
  }
  var n = /[\t\r\n]/g;
  function i(r, o) {
    var s = " " + o + " ";
    return (" " + r.className + " ").replace(n, " ").indexOf(s) >= 0;
  }
  function t(r) {
    if (!wt.getElementsByTagName)
      return [];
    var o = r.split(" "), s, c, f, d, p, g, m, S, x, I, b = [wt];
    for (g = 0; g < o.length; g++) {
      if (s = o[g].replace(/^\s+/, "").replace(/\s+$/, ""), s.indexOf("#") > -1) {
        c = s.split("#"), f = c[0];
        var L = c[1], $ = wt.getElementById(L);
        if (!$ || f && $.nodeName.toLowerCase() != f)
          return [];
        b = [$];
        continue;
      }
      if (s.indexOf(".") > -1) {
        c = s.split("."), f = c[0];
        var W = c[1];
        for (f || (f = "*"), d = [], p = 0, m = 0; m < b.length; m++)
          for (f == "*" ? x = e(b[m]) : x = b[m].getElementsByTagName(f), S = 0; S < x.length; S++)
            d[p++] = x[S];
        for (b = [], I = 0, m = 0; m < d.length; m++)
          d[m].className && _.isString(d[m].className) && // some SVG elements have classNames which are not strings
          i(d[m], W) && (b[I++] = d[m]);
        continue;
      }
      var V = s.match(QO);
      if (V) {
        f = V[1];
        var Q = V[2], ie = V[3], ye = V[4];
        for (f || (f = "*"), d = [], p = 0, m = 0; m < b.length; m++)
          for (f == "*" ? x = e(b[m]) : x = b[m].getElementsByTagName(f), S = 0; S < x.length; S++)
            d[p++] = x[S];
        b = [], I = 0;
        var ge;
        switch (ie) {
          case "=":
            ge = function(Ie) {
              return Ie.getAttribute(Q) == ye;
            };
            break;
          case "~":
            ge = function(Ie) {
              return Ie.getAttribute(Q).match(new RegExp("\\b" + ye + "\\b"));
            };
            break;
          case "|":
            ge = function(Ie) {
              return Ie.getAttribute(Q).match(new RegExp("^" + ye + "-?"));
            };
            break;
          case "^":
            ge = function(Ie) {
              return Ie.getAttribute(Q).indexOf(ye) === 0;
            };
            break;
          case "$":
            ge = function(Ie) {
              return Ie.getAttribute(Q).lastIndexOf(ye) == Ie.getAttribute(Q).length - ye.length;
            };
            break;
          case "*":
            ge = function(Ie) {
              return Ie.getAttribute(Q).indexOf(ye) > -1;
            };
            break;
          default:
            ge = function(Ie) {
              return Ie.getAttribute(Q);
            };
        }
        for (b = [], I = 0, m = 0; m < d.length; m++)
          ge(d[m]) && (b[I++] = d[m]);
        continue;
      }
      for (f = s, d = [], p = 0, m = 0; m < b.length; m++)
        for (x = b[m].getElementsByTagName(f), S = 0; S < x.length; S++)
          d[p++] = x[S];
      b = d;
    }
    return b;
  }
  return function(r) {
    return _.isElement(r) ? [r] : _.isObject(r) && !_.isUndefined(r.length) ? r : t.call(this, r);
  };
}();
var JO = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "utm_source_platform", "utm_campaign_id", "utm_creative_format", "utm_marketing_tactic"], e4 = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "sccid", "ttclid", "twclid", "wbraid"];
_.info = {
  campaignParams: function(e) {
    var n = "", i = {};
    return _.each(JO, function(t) {
      n = _.getQueryParam(wt.URL, t), n.length ? i[t] = n : e !== void 0 && (i[t] = e);
    }), i;
  },
  clickParams: function() {
    var e = "", n = {};
    return _.each(e4, function(i) {
      e = _.getQueryParam(wt.URL, i), e.length && (n[i] = e);
    }), n;
  },
  marketingParams: function() {
    return _.extend(_.info.campaignParams(), _.info.clickParams());
  },
  searchEngine: function(e) {
    return e.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : e.search("https?://(.*)bing.com") === 0 ? "bing" : e.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : e.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null;
  },
  searchInfo: function(e) {
    var n = _.info.searchEngine(e), i = n != "yahoo" ? "q" : "p", t = {};
    if (n !== null) {
      t.$search_engine = n;
      var r = _.getQueryParam(e, i);
      r.length && (t.mp_keyword = r);
    }
    return t;
  },
  /**
   * This function detects which browser is running this script.
   * The order of the checks are important since many user agents
   * include key words used in later checks.
   */
  browser: function(e, n, i) {
    return n = n || "", i || _.includes(e, " OPR/") ? _.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : _.includes(e, "IEMobile") || _.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : _.includes(e, "SamsungBrowser/") ? "Samsung Internet" : _.includes(e, "Edge") || _.includes(e, "Edg/") ? "Microsoft Edge" : _.includes(e, "FBIOS") ? "Facebook Mobile" : _.includes(e, "Whale/") ? "Whale Browser" : _.includes(e, "Chrome") ? "Chrome" : _.includes(e, "CriOS") ? "Chrome iOS" : _.includes(e, "UCWEB") || _.includes(e, "UCBrowser") ? "UC Browser" : _.includes(e, "FxiOS") ? "Firefox iOS" : _.includes(n, "Apple") ? _.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : _.includes(e, "Android") ? "Android Mobile" : _.includes(e, "Konqueror") ? "Konqueror" : _.includes(e, "Firefox") ? "Firefox" : _.includes(e, "MSIE") || _.includes(e, "Trident/") ? "Internet Explorer" : _.includes(e, "Gecko") ? "Mozilla" : "";
  },
  /**
   * This function detects which browser version is running this script,
   * parsing major and minor version (e.g., 42.1). User agent strings from:
   * http://www.useragentstring.com/pages/useragentstring.php
   */
  browserVersion: function(e, n, i) {
    var t = _.info.browser(e, n, i), r = {
      "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
      "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
      Chrome: /Chrome\/(\d+(\.\d+)?)/,
      "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
      "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
      Safari: /Version\/(\d+(\.\d+)?)/,
      "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
      Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
      Firefox: /Firefox\/(\d+(\.\d+)?)/,
      "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
      Konqueror: /Konqueror:(\d+(\.\d+)?)/,
      BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
      "Android Mobile": /android\s(\d+(\.\d+)?)/,
      "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
      "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
      Mozilla: /rv:(\d+(\.\d+)?)/,
      "Whale Browser": /Whale\/(\d+(\.\d+)?)/
    }, o = r[t];
    if (o === void 0)
      return null;
    var s = e.match(o);
    return s ? parseFloat(s[s.length - 2]) : null;
  },
  os: function() {
    var e = mi;
    return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : "";
  },
  device: function(e) {
    return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : "";
  },
  referringDomain: function(e) {
    var n = e.split("/");
    return n.length >= 3 ? n[2] : "";
  },
  currentUrl: function() {
    return xe.location.href;
  },
  properties: function(e) {
    return typeof e != "object" && (e = {}), _.extend(_.strip_empty_properties({
      $os: _.info.os(),
      $browser: _.info.browser(mi, Di.vendor, Hc),
      $referrer: wt.referrer,
      $referring_domain: _.info.referringDomain(wt.referrer),
      $device: _.info.device(mi)
    }), {
      $current_url: _.info.currentUrl(),
      $browser_version: _.info.browserVersion(mi, Di.vendor, Hc),
      $screen_height: wv.height,
      $screen_width: wv.width,
      mp_lib: "web",
      $lib_version: Wn.LIB_VERSION,
      $insert_id: Wd(),
      time: _.timestamp() / 1e3
      // epoch time in seconds
    }, _.strip_empty_properties(e));
  },
  people_properties: function() {
    return _.extend(_.strip_empty_properties({
      $os: _.info.os(),
      $browser: _.info.browser(mi, Di.vendor, Hc)
    }), {
      $browser_version: _.info.browserVersion(mi, Di.vendor, Hc)
    });
  },
  mpPageViewProperties: function() {
    return _.strip_empty_properties({
      current_page_title: wt.title,
      current_domain: xe.location.hostname,
      current_url_path: xe.location.pathname,
      current_url_protocol: xe.location.protocol,
      current_url_search: xe.location.search
    });
  }
};
var t4 = function(e, n) {
  var i = null, t = [];
  return function(r) {
    var o = this;
    return t.push(r), i || (i = new kt(function(s) {
      setTimeout(function() {
        var c = e.apply(o, [t]);
        i = null, t = [], s(c);
      }, n);
    })), i;
  };
}, Wd = function(e) {
  var n = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
  return e ? n.substring(0, e) : n;
}, r4 = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i, n4 = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i, Av = function(e) {
  var n = n4, i = e.split("."), t = i[i.length - 1];
  (t.length > 4 || t === "com" || t === "org") && (n = r4);
  var r = e.match(n);
  return r ? r[0] : "";
}, i4 = function() {
  var e = xe.navigator.onLine;
  return _.isUndefined(e) || e;
}, Ri = function() {
}, ns = null, _l = null;
typeof JSON < "u" && (ns = JSON.stringify, _l = JSON.parse);
ns = ns || _.JSONEncode;
_l = _l || _.JSONDecode;
_.info = _.info;
_.info.browser = _.info.browser;
_.info.browserVersion = _.info.browserVersion;
_.info.device = _.info.device;
_.info.properties = _.info.properties;
_.isBlockedUA = _.isBlockedUA;
_.isEmptyObject = _.isEmptyObject;
_.isObject = _.isObject;
_.JSONDecode = _.JSONDecode;
_.JSONEncode = _.JSONEncode;
_.toArray = _.toArray;
_.NPO = Ui;
var o4 = "mixpanelBrowserDb", Cy = "mixpanelRecordingEvents", qd = "mixpanelRecordingRegistry", s4 = 1, a4 = [Cy, qd], ei = function(e) {
  this.dbPromise = null, this.storeName = e;
};
ei.prototype._openDb = function() {
  return new kt(function(e, n) {
    var i = xe.indexedDB.open(o4, s4);
    i.onerror = function() {
      n(i.error);
    }, i.onsuccess = function() {
      e(i.result);
    }, i.onupgradeneeded = function(t) {
      var r = t.target.result;
      a4.forEach(function(o) {
        r.createObjectStore(o);
      });
    };
  });
};
ei.prototype.init = function() {
  return xe.indexedDB ? (this.dbPromise || (this.dbPromise = this._openDb()), this.dbPromise.then(function(e) {
    return e instanceof xe.IDBDatabase ? kt.resolve() : kt.reject(e);
  })) : kt.reject("indexedDB is not supported in this browser");
};
ei.prototype.makeTransaction = function(e, n) {
  var i = this.storeName, t = function(r) {
    return new kt(function(o, s) {
      var c = r.transaction(i, e);
      c.oncomplete = function() {
        o(c);
      }, c.onabort = c.onerror = function() {
        s(c.error);
      }, n(c.objectStore(i));
    });
  };
  return this.dbPromise.then(t).catch((function(r) {
    return r && r.name === "InvalidStateError" ? (this.dbPromise = this._openDb(), this.dbPromise.then(t)) : kt.reject(r);
  }).bind(this));
};
ei.prototype.setItem = function(e, n) {
  return this.makeTransaction("readwrite", function(i) {
    i.put(n, e);
  });
};
ei.prototype.getItem = function(e) {
  var n;
  return this.makeTransaction("readonly", function(i) {
    n = i.get(e);
  }).then(function() {
    return n.result;
  });
};
ei.prototype.removeItem = function(e) {
  return this.makeTransaction("readwrite", function(n) {
    n.delete(e);
  });
};
ei.prototype.getAll = function() {
  var e;
  return this.makeTransaction("readonly", function(n) {
    e = n.getAll();
  }).then(function() {
    return e.result;
  });
};
var c4 = "__mp_opt_in_out_";
function l4(e, n) {
  Ay(!0, e, n);
}
function u4(e, n) {
  Ay(!1, e, n);
}
function f4(e, n) {
  return Ey(e, n) === "1";
}
function Sy(e, n) {
  if (h4(n))
    return _t.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
  var i = Ey(e, n) === "0";
  return i && _t.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), i;
}
function zi(e) {
  return Gd(e, function(n) {
    return this.get_config(n);
  });
}
function ji(e) {
  return Gd(e, function(n) {
    return this._get_config(n);
  });
}
function ls(e) {
  return Gd(e, function(n) {
    return this._get_config(n);
  });
}
function d4(e, n) {
  n = n || {}, Vd(n).remove(
    Hd(e, n),
    !!n.crossSubdomainCookie,
    n.cookieDomain
  );
}
function Vd(e) {
  return e = e || {}, e.persistenceType === "localStorage" ? _.localStorage : _.cookie;
}
function Hd(e, n) {
  return n = n || {}, (n.persistencePrefix || c4) + e;
}
function Ey(e, n) {
  return Vd(n).get(Hd(e, n));
}
function h4(e) {
  if (e && e.ignoreDnt)
    return !1;
  var n = e && e.window || xe, i = n.navigator || {}, t = !1;
  return _.each([
    i.doNotTrack,
    // standard
    i.msDoNotTrack,
    n.doNotTrack
  ], function(r) {
    _.includes([!0, 1, "1", "yes"], r) && (t = !0);
  }), t;
}
function Ay(e, n, i) {
  if (!_.isString(n) || !n.length) {
    _t.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
    return;
  }
  i = i || {}, Vd(i).set(
    Hd(n, i),
    e ? 1 : 0,
    _.isNumber(i.cookieExpiration) ? i.cookieExpiration : null,
    !!i.crossSubdomainCookie,
    !!i.secureCookie,
    !!i.crossSiteCookie,
    i.cookieDomain
  ), i.track && e && i.track(i.trackEventName || "$opt_in", i.trackProperties, {
    send_immediately: !0
  });
}
function Gd(e, n) {
  return function() {
    var i = !1;
    try {
      var t = n.call(this, "token"), r = n.call(this, "ignore_dnt"), o = n.call(this, "opt_out_tracking_persistence_type"), s = n.call(this, "opt_out_tracking_cookie_prefix"), c = n.call(this, "window");
      t && (i = Sy(t, {
        ignoreDnt: r,
        persistenceType: o,
        persistencePrefix: s,
        window: c
      }));
    } catch (d) {
      _t.error("Unexpected error when checking tracking opt-out status: " + d);
    }
    if (!i)
      return e.apply(this, arguments);
    var f = arguments[arguments.length - 1];
    typeof f == "function" && f(0);
  };
}
var p4 = ko("lock"), ky = function(e, n) {
  n = n || {}, this.storageKey = e, this.storage = n.storage || xe.localStorage, this.pollIntervalMS = n.pollIntervalMS || 100, this.timeoutMS = n.timeoutMS || 2e3, this.promiseImpl = n.promiseImpl || kt;
};
ky.prototype.withLock = function(e, n) {
  var i = this.promiseImpl;
  return new i(_.bind(function(t, r) {
    var o = n || (/* @__PURE__ */ new Date()).getTime() + "|" + Math.random(), s = (/* @__PURE__ */ new Date()).getTime(), c = this.storageKey, f = this.pollIntervalMS, d = this.timeoutMS, p = this.storage, g = c + ":X", m = c + ":Y", S = c + ":Z", x = function(W) {
      if ((/* @__PURE__ */ new Date()).getTime() - s > d) {
        p4.error("Timeout waiting for mutex on " + c + "; clearing lock. [" + o + "]"), p.removeItem(S), p.removeItem(m), L();
        return;
      }
      setTimeout(function() {
        try {
          W();
        } catch (V) {
          r(V);
        }
      }, f * (Math.random() + 0.1));
    }, I = function(W, V) {
      W() ? V() : x(function() {
        I(W, V);
      });
    }, b = function() {
      var W = p.getItem(m);
      return W && W !== o ? !1 : (p.setItem(m, o), p.getItem(m) === o ? !0 : (wa(p, !0) || r(new Error("localStorage support dropped while acquiring lock")), !1));
    }, L = function() {
      p.setItem(g, o), I(b, function() {
        if (p.getItem(g) === o) {
          $();
          return;
        }
        x(function() {
          if (p.getItem(m) !== o) {
            L();
            return;
          }
          I(function() {
            return !p.getItem(S);
          }, $);
        });
      });
    }, $ = function() {
      p.setItem(S, "1");
      var W = function() {
        p.removeItem(S), p.getItem(m) === o && p.removeItem(m), p.getItem(g) === o && p.removeItem(g);
      };
      e().then(function(V) {
        W(), t(V);
      }).catch(function(V) {
        W(), r(V);
      });
    };
    try {
      if (wa(p, !0))
        L();
      else
        throw new Error("localStorage support check failed");
    } catch (W) {
      r(W);
    }
  }, this));
};
var Da = function(e) {
  this.storage = e || xe.localStorage;
};
Da.prototype.init = function() {
  return kt.resolve();
};
Da.prototype.setItem = function(e, n) {
  return new kt(_.bind(function(i, t) {
    try {
      this.storage.setItem(e, ns(n));
    } catch (r) {
      t(r);
    }
    i();
  }, this));
};
Da.prototype.getItem = function(e) {
  return new kt(_.bind(function(n, i) {
    var t;
    try {
      t = _l(this.storage.getItem(e));
    } catch (r) {
      i(r);
    }
    n(t);
  }, this));
};
Da.prototype.removeItem = function(e) {
  return new kt(_.bind(function(n, i) {
    try {
      this.storage.removeItem(e);
    } catch (t) {
      i(t);
    }
    n();
  }, this));
};
var kv = ko("batch"), ti = function(e, n) {
  n = n || {}, this.storageKey = e, this.usePersistence = n.usePersistence, this.usePersistence && (this.queueStorage = n.queueStorage || new Da(), this.lock = new ky(e, {
    storage: n.sharedLockStorage || xe.localStorage,
    timeoutMS: n.sharedLockTimeoutMS
  })), this.reportError = n.errorReporter || _.bind(kv.error, kv), this.pid = n.pid || null, this.memQueue = [], this.initialized = !1, n.enqueueThrottleMs ? this.enqueuePersisted = t4(_.bind(this._enqueuePersisted, this), n.enqueueThrottleMs) : this.enqueuePersisted = _.bind(function(i) {
    return this._enqueuePersisted([i]);
  }, this);
};
ti.prototype.ensureInit = function() {
  return this.initialized ? kt.resolve() : this.queueStorage.init().then(_.bind(function() {
    this.initialized = !0;
  }, this)).catch(_.bind(function(e) {
    this.reportError("Error initializing queue persistence. Disabling persistence", e), this.initialized = !0, this.usePersistence = !1;
  }, this));
};
ti.prototype.enqueue = function(e, n) {
  var i = {
    id: Wd(),
    flushAfter: (/* @__PURE__ */ new Date()).getTime() + n * 2,
    payload: e
  };
  return this.usePersistence ? this.enqueuePersisted(i) : (this.memQueue.push(i), kt.resolve(!0));
};
ti.prototype._enqueuePersisted = function(e) {
  var n = _.bind(function() {
    return this.ensureInit().then(_.bind(function() {
      return this.readFromStorage();
    }, this)).then(_.bind(function(i) {
      return this.saveToStorage(i.concat(e));
    }, this)).then(_.bind(function(i) {
      return i && (this.memQueue = this.memQueue.concat(e)), i;
    }, this)).catch(_.bind(function(i) {
      return this.reportError("Error enqueueing items", i, e), !1;
    }, this));
  }, this);
  return this.lock.withLock(n, this.pid).catch(_.bind(function(i) {
    return this.reportError("Error acquiring storage lock", i), !1;
  }, this));
};
ti.prototype.fillBatch = function(e) {
  var n = this.memQueue.slice(0, e);
  return this.usePersistence && n.length < e ? this.ensureInit().then(_.bind(function() {
    return this.readFromStorage();
  }, this)).then(_.bind(function(i) {
    if (i.length) {
      var t = {};
      _.each(n, function(s) {
        t[s.id] = !0;
      });
      for (var r = 0; r < i.length; r++) {
        var o = i[r];
        if ((/* @__PURE__ */ new Date()).getTime() > o.flushAfter && !t[o.id] && (o.orphaned = !0, n.push(o), n.length >= e))
          break;
      }
    }
    return n;
  }, this)) : kt.resolve(n);
};
var Iv = function(e, n) {
  var i = [];
  return _.each(e, function(t) {
    t.id && !n[t.id] && i.push(t);
  }), i;
};
ti.prototype.removeItemsByID = function(e) {
  var n = {};
  if (_.each(e, function(t) {
    n[t] = !0;
  }), this.memQueue = Iv(this.memQueue, n), this.usePersistence) {
    var i = _.bind(function() {
      return this.ensureInit().then(_.bind(function() {
        return this.readFromStorage();
      }, this)).then(_.bind(function(t) {
        return t = Iv(t, n), this.saveToStorage(t);
      }, this)).then(_.bind(function() {
        return this.readFromStorage();
      }, this)).then(_.bind(function(t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          if (o.id && n[o.id])
            throw new Error("Item not removed from storage");
        }
        return !0;
      }, this)).catch(_.bind(function(t) {
        return this.reportError("Error removing items", t, e), !1;
      }, this));
    }, this);
    return this.lock.withLock(i, this.pid).catch(_.bind(function(t) {
      return this.reportError("Error acquiring storage lock", t), wa(this.lock.storage, !0) ? !1 : i().then(_.bind(function(r) {
        return r || this.queueStorage.removeItem(this.storageKey).then(function() {
          return r;
        });
      }, this)).catch(_.bind(function(r) {
        return this.reportError("Error clearing queue", r), !1;
      }, this));
    }, this));
  } else
    return kt.resolve(!0);
};
var Ov = function(e, n) {
  var i = [];
  return _.each(e, function(t) {
    var r = t.id;
    if (r in n) {
      var o = n[r];
      o !== null && (t.payload = o, i.push(t));
    } else
      i.push(t);
  }), i;
};
ti.prototype.updatePayloads = function(e) {
  return this.memQueue = Ov(this.memQueue, e), this.usePersistence ? this.lock.withLock(_.bind(function() {
    return this.ensureInit().then(_.bind(function() {
      return this.readFromStorage();
    }, this)).then(_.bind(function(i) {
      return i = Ov(i, e), this.saveToStorage(i);
    }, this)).catch(_.bind(function(i) {
      return this.reportError("Error updating items", e, i), !1;
    }, this));
  }, this), this.pid).catch(_.bind(function(n) {
    return this.reportError("Error acquiring storage lock", n), !1;
  }, this)) : kt.resolve(!0);
};
ti.prototype.readFromStorage = function() {
  return this.ensureInit().then(_.bind(function() {
    return this.queueStorage.getItem(this.storageKey);
  }, this)).then(_.bind(function(e) {
    return e && (_.isArray(e) || (this.reportError("Invalid storage entry:", e), e = null)), e || [];
  }, this)).catch(_.bind(function(e) {
    return this.reportError("Error retrieving queue", e), [];
  }, this));
};
ti.prototype.saveToStorage = function(e) {
  return this.ensureInit().then(_.bind(function() {
    return this.queueStorage.setItem(this.storageKey, e);
  }, this)).then(function() {
    return !0;
  }).catch(_.bind(function(n) {
    return this.reportError("Error saving queue", n), !1;
  }, this));
};
ti.prototype.clear = function() {
  return this.memQueue = [], this.usePersistence ? this.ensureInit().then(_.bind(function() {
    return this.queueStorage.removeItem(this.storageKey);
  }, this)) : kt.resolve();
};
var v4 = 10 * 60 * 1e3, ia = ko("batch"), In = function(e, n) {
  this.errorReporter = n.errorReporter, this.queue = new ti(e, {
    errorReporter: _.bind(this.reportError, this),
    queueStorage: n.queueStorage,
    sharedLockStorage: n.sharedLockStorage,
    sharedLockTimeoutMS: n.sharedLockTimeoutMS,
    usePersistence: n.usePersistence,
    enqueueThrottleMs: n.enqueueThrottleMs
  }), this.libConfig = n.libConfig, this.sendRequest = n.sendRequestFunc, this.beforeSendHook = n.beforeSendHook, this.stopAllBatching = n.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0, this.itemIdsSentSuccessfully = {}, this.flushOnlyOnInterval = n.flushOnlyOnInterval || !1, this._flushPromise = null;
};
In.prototype.enqueue = function(e) {
  return this.queue.enqueue(e, this.flushInterval);
};
In.prototype.start = function() {
  return this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush();
};
In.prototype.stop = function() {
  this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null);
};
In.prototype.clear = function() {
  return this.queue.clear();
};
In.prototype.resetBatchSize = function() {
  this.batchSize = this.libConfig.batch_size;
};
In.prototype.resetFlush = function() {
  this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
};
In.prototype.scheduleFlush = function(e) {
  this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(_.bind(function() {
    this.stopped || (this._flushPromise = this.flush());
  }, this), this.flushInterval));
};
In.prototype.sendRequestPromise = function(e, n) {
  return new kt(_.bind(function(i) {
    this.sendRequest(e, n, i);
  }, this));
};
In.prototype.flush = function(e) {
  if (this.requestInProgress)
    return ia.log("Flush: Request already in progress"), kt.resolve();
  this.requestInProgress = !0, e = e || {};
  var n = this.libConfig.batch_request_timeout_ms, i = (/* @__PURE__ */ new Date()).getTime(), t = this.batchSize;
  return this.queue.fillBatch(t).then(_.bind(function(r) {
    var o = r.length === t, s = [], c = {};
    if (_.each(r, function(g) {
      var m = g.payload;
      if (this.beforeSendHook && !g.orphaned && (m = this.beforeSendHook(m)), m) {
        m.event && m.properties && (m.properties = _.extend(
          {},
          m.properties,
          { mp_sent_by_lib_version: Wn.LIB_VERSION }
        ));
        var S = !0, x = g.id;
        x ? (this.itemIdsSentSuccessfully[x] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
          item: g,
          batchSize: r.length,
          timesSent: this.itemIdsSentSuccessfully[x]
        }), S = !1) : this.reportError("[dupe] found item with no ID", { item: g }), S && s.push(m);
      }
      c[g.id] = m;
    }, this), s.length < 1)
      return this.requestInProgress = !1, this.resetFlush(), kt.resolve();
    var f = _.bind(function() {
      return this.queue.removeItemsByID(
        _.map(r, function(g) {
          return g.id;
        })
      ).then(_.bind(function(g) {
        return _.each(r, _.bind(function(m) {
          var S = m.id;
          S ? (this.itemIdsSentSuccessfully[S] = this.itemIdsSentSuccessfully[S] || 0, this.itemIdsSentSuccessfully[S]++, this.itemIdsSentSuccessfully[S] > 5 && this.reportError("[dupe] item ID sent too many times", {
            item: m,
            batchSize: r.length,
            timesSent: this.itemIdsSentSuccessfully[S]
          })) : this.reportError("[dupe] found item with no ID while removing", { item: m });
        }, this)), g ? (this.consecutiveRemovalFailures = 0, this.flushOnlyOnInterval && !o ? (this.resetFlush(), kt.resolve()) : this.flush()) : (++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush(), kt.resolve());
      }, this));
    }, this), d = _.bind(function(g) {
      this.requestInProgress = !1;
      try {
        if (e.unloading)
          return this.queue.updatePayloads(c);
        if (_.isObject(g) && g.error === "timeout" && (/* @__PURE__ */ new Date()).getTime() - i >= n)
          return this.reportError("Network timeout; retrying"), this.flush();
        if (_.isObject(g) && (g.httpStatusCode >= 500 || g.httpStatusCode === 429 || g.httpStatusCode <= 0 && !i4() || g.error === "timeout")) {
          var m = this.flushInterval * 2;
          return g.retryAfter && (m = parseInt(g.retryAfter, 10) * 1e3 || m), m = Math.min(v4, m), this.reportError("Error; retry in " + m + " ms"), this.scheduleFlush(m), kt.resolve();
        } else if (_.isObject(g) && g.httpStatusCode === 413)
          if (r.length > 1) {
            var S = Math.max(1, Math.floor(t / 2));
            return this.batchSize = Math.min(this.batchSize, S, r.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush(), kt.resolve();
          } else
            return this.reportError("Single-event request too large; dropping", r), this.resetBatchSize(), f();
        else
          return f();
      } catch (x) {
        this.reportError("Error handling API response", x), this.resetFlush();
      }
    }, this), p = {
      method: "POST",
      verbose: !0,
      ignore_json_errors: !0,
      // eslint-disable-line camelcase
      timeout_ms: n
      // eslint-disable-line camelcase
    };
    return e.unloading && (p.transport = "sendBeacon"), ia.log("MIXPANEL REQUEST:", s), this.sendRequestPromise(s, p).then(d);
  }, this)).catch(_.bind(function(r) {
    this.reportError("Error flushing request queue", r), this.resetFlush();
  }, this));
};
In.prototype.reportError = function(e, n) {
  if (ia.error.apply(ia.error, arguments), this.errorReporter)
    try {
      n instanceof Error || (n = new Error(e)), this.errorReporter(e, n);
    } catch (i) {
      ia.error(i);
    }
};
var Kd = function(e) {
  var n = Date.now();
  return !e || n > e.maxExpires || n > e.idleExpires;
}, g4 = 250, Go = ko("recorder"), Dv = xe.CompressionStream, m4 = {
  batch_size: 1e3,
  batch_flush_interval_ms: 10 * 1e3,
  batch_request_timeout_ms: 90 * 1e3,
  batch_autostart: !0
}, y4 = /* @__PURE__ */ new Set([
  He.MouseMove,
  He.MouseInteraction,
  He.Scroll,
  He.ViewportResize,
  He.Input,
  He.TouchMove,
  He.MediaInteraction,
  He.Drag,
  He.Selection
]);
function x4(e) {
  return e.type === dt.IncrementalSnapshot && y4.has(e.data.source);
}
var $r = function(e) {
  this._mixpanel = e.mixpanelInstance, this._onIdleTimeout = e.onIdleTimeout || Ri, this._onMaxLengthReached = e.onMaxLengthReached || Ri, this._onBatchSent = e.onBatchSent || Ri, this._rrwebRecord = e.rrwebRecord || null, this._stopRecording = null, this.replayId = e.replayId, this.batchStartUrl = e.batchStartUrl || null, this.replayStartUrl = e.replayStartUrl || null, this.idleExpires = e.idleExpires || null, this.maxExpires = e.maxExpires || null, this.replayStartTime = e.replayStartTime || null, this.seqNo = e.seqNo || 0, this.idleTimeoutId = null, this.maxTimeoutId = null, this.recordMaxMs = na, this.recordMinMs = 0;
  var n = wa(e.sharedLockStorage, !0);
  this.batcherKey = "__mprec_" + this.getConfig("name") + "_" + this.getConfig("token") + "_" + this.replayId, this.queueStorage = new ei(Cy), this.batcher = new In(this.batcherKey, {
    errorReporter: this.reportError.bind(this),
    flushOnlyOnInterval: !0,
    libConfig: m4,
    sendRequestFunc: this.flushEventsWithOptOut.bind(this),
    queueStorage: this.queueStorage,
    sharedLockStorage: e.sharedLockStorage,
    usePersistence: n,
    stopAllBatchingFunc: this.stopRecording.bind(this),
    // increased throttle and shared lock timeout because recording events are very high frequency.
    // this will minimize the amount of lock contention between enqueued events.
    // for session recordings there is a lock for each tab anyway, so there's no risk of deadlock between tabs.
    enqueueThrottleMs: g4,
    sharedLockTimeoutMS: 10 * 1e3
  });
};
$r.prototype.unloadPersistedData = function() {
  return this.batcher.stop(), this.batcher.flush().then((function() {
    return this.queueStorage.removeItem(this.batcherKey);
  }).bind(this));
};
$r.prototype.getConfig = function(e) {
  return this._mixpanel.get_config(e);
};
$r.prototype.get_config = function(e) {
  return this.getConfig(e);
};
$r.prototype.startRecording = function(e) {
  if (this._rrwebRecord === null) {
    this.reportError("rrweb record function not provided. ");
    return;
  }
  if (this._stopRecording !== null) {
    Go.log("Recording already in progress, skipping startRecording.");
    return;
  }
  this.recordMaxMs = this.getConfig("record_max_ms"), this.recordMaxMs > na && (this.recordMaxMs = na, Go.critical("record_max_ms cannot be greater than " + na + "ms. Capping value.")), this.maxExpires || (this.maxExpires = (/* @__PURE__ */ new Date()).getTime() + this.recordMaxMs), this.recordMinMs = this.getConfig("record_min_ms"), this.recordMinMs > Ju && (this.recordMinMs = Ju, Go.critical("record_min_ms cannot be greater than " + Ju + "ms. Capping value.")), this.replayStartTime || (this.replayStartTime = (/* @__PURE__ */ new Date()).getTime(), this.batchStartUrl = _.info.currentUrl(), this.replayStartUrl = _.info.currentUrl()), e || this.recordMinMs > 0 ? this.batcher.stop() : this.batcher.start();
  var n = (function() {
    clearTimeout(this.idleTimeoutId);
    var r = this.getConfig("record_idle_timeout_ms");
    this.idleTimeoutId = setTimeout(this._onIdleTimeout, r), this.idleExpires = (/* @__PURE__ */ new Date()).getTime() + r;
  }).bind(this);
  n();
  var i = this.getConfig("record_block_selector");
  (i === "" || i === null) && (i = void 0);
  try {
    this._stopRecording = this._rrwebRecord({
      emit: (function(r) {
        if (this.idleExpires && this.idleExpires < r.timestamp) {
          this._onIdleTimeout();
          return;
        }
        x4(r) && (this.batcher.stopped && (/* @__PURE__ */ new Date()).getTime() - this.replayStartTime >= this.recordMinMs && this.batcher.start(), n()), this.__enqueuePromise = this.batcher.enqueue(r);
      }).bind(this),
      blockClass: this.getConfig("record_block_class"),
      blockSelector: i,
      collectFonts: this.getConfig("record_collect_fonts"),
      dataURLOptions: {
        // canvas image options (https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
        type: "image/webp",
        quality: 0.6
      },
      maskAllInputs: !0,
      maskTextClass: this.getConfig("record_mask_text_class"),
      maskTextSelector: this.getConfig("record_mask_text_selector"),
      recordCanvas: this.getConfig("record_canvas"),
      sampling: {
        canvas: 15
      }
    });
  } catch (r) {
    this.reportError("Unexpected error when starting rrweb recording.", r);
  }
  if (typeof this._stopRecording != "function") {
    this.reportError("rrweb failed to start, skipping this recording."), this._stopRecording = null, this.stopRecording();
    return;
  }
  var t = this.maxExpires - (/* @__PURE__ */ new Date()).getTime();
  this.maxTimeoutId = setTimeout(this._onMaxLengthReached.bind(this), t);
};
$r.prototype.stopRecording = function(e) {
  if (!this.isRrwebStopped()) {
    try {
      this._stopRecording();
    } catch (i) {
      this.reportError("Error with rrweb stopRecording", i);
    }
    this._stopRecording = null;
  }
  var n;
  return this.batcher.stopped ? n = this.batcher.clear() : e || (n = this.batcher.flush()), this.batcher.stop(), clearTimeout(this.idleTimeoutId), clearTimeout(this.maxTimeoutId), n;
};
$r.prototype.isRrwebStopped = function() {
  return this._stopRecording === null;
};
$r.prototype.flushEventsWithOptOut = function(e, n, i) {
  var t = (function(r) {
    r === 0 && (this.stopRecording(), i({ error: "Tracking has been opted out, stopping recording." }));
  }).bind(this);
  this._flushEvents(e, n, i, t);
};
$r.prototype.serialize = function() {
  var e;
  try {
    e = this._mixpanel.get_tab_id();
  } catch (n) {
    this.reportError("Error getting tab ID for serialization ", n), e = null;
  }
  return {
    replayId: this.replayId,
    seqNo: this.seqNo,
    replayStartTime: this.replayStartTime,
    batchStartUrl: this.batchStartUrl,
    replayStartUrl: this.replayStartUrl,
    idleExpires: this.idleExpires,
    maxExpires: this.maxExpires,
    tabId: e
  };
};
$r.deserialize = function(e, n) {
  var i = new $r(_.extend({}, n, {
    replayId: e.replayId,
    batchStartUrl: e.batchStartUrl,
    replayStartUrl: e.replayStartUrl,
    idleExpires: e.idleExpires,
    maxExpires: e.maxExpires,
    replayStartTime: e.replayStartTime,
    seqNo: e.seqNo,
    sharedLockStorage: n.sharedLockStorage
  }));
  return i;
};
$r.prototype._sendRequest = function(e, n, i, t) {
  var r = (function(o, s) {
    o.status === 200 && this.replayId === e && (this.seqNo++, this.batchStartUrl = _.info.currentUrl()), this._onBatchSent(), t({
      status: 0,
      httpStatusCode: o.status,
      responseBody: s,
      retryAfter: o.headers.get("Retry-After")
    });
  }).bind(this);
  xe.fetch(this.getConfig("api_host") + "/" + this.getConfig("api_routes").record + "?" + new URLSearchParams(n), {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(this.getConfig("token") + ":"),
      "Content-Type": "application/octet-stream"
    },
    body: i
  }).then(function(o) {
    o.json().then(function(s) {
      r(o, s);
    }).catch(function(s) {
      t({ error: s });
    });
  }).catch(function(o) {
    t({ error: o, httpStatusCode: 0 });
  });
};
$r.prototype._flushEvents = zi(function(e, n, i) {
  var t = e.length;
  if (t > 0) {
    for (var r = this.replayId, o = 1 / 0, s = -1 / 0, c = !1, f = 0; f < t; f++)
      o = Math.min(o, e[f].timestamp), s = Math.max(s, e[f].timestamp), e[f].type === dt.FullSnapshot && (c = !0);
    if (this.seqNo === 0) {
      if (!c) {
        i({ error: "First batch does not contain a full snapshot. Aborting recording." }), this.stopRecording(!0);
        return;
      }
      this.replayStartTime = o;
    } else this.replayStartTime || (this.reportError("Replay start time not set but seqNo is not 0. Using current batch start time as a fallback."), this.replayStartTime = o);
    var d = s - this.replayStartTime, p = {
      $current_url: this.batchStartUrl,
      $lib_version: Wn.LIB_VERSION,
      batch_start_time: o / 1e3,
      distinct_id: String(this._mixpanel.get_distinct_id()),
      mp_lib: "web",
      replay_id: r,
      replay_length_ms: d,
      replay_start_time: this.replayStartTime / 1e3,
      replay_start_url: this.replayStartUrl,
      seq: this.seqNo
    }, g = JSON.stringify(e), m = this._mixpanel.get_property("$device_id");
    m && (p.$device_id = m);
    var S = this._mixpanel.get_property("$user_id");
    if (S && (p.$user_id = S), Dv) {
      var x = new Blob([g], { type: "application/json" }).stream(), I = x.pipeThrough(new Dv("gzip"));
      new Response(I).blob().then((function(b) {
        p.format = "gzip", this._sendRequest(r, p, b, i);
      }).bind(this));
    } else
      p.format = "body", this._sendRequest(r, p, g, i);
  }
});
$r.prototype.reportError = function(e, n) {
  Go.error.apply(Go.error, arguments);
  try {
    !n && !(e instanceof Error) && (e = new Error(e)), this.getConfig("error_reporter")(e, n);
  } catch (i) {
    Go.error(i);
  }
};
var us = function(e) {
  this.idb = new ei(qd), this.errorReporter = e.errorReporter, this.mixpanelInstance = e.mixpanelInstance, this.sharedLockStorage = e.sharedLockStorage;
};
us.prototype.handleError = function(e) {
  this.errorReporter("IndexedDB error: ", e);
};
us.prototype.setActiveRecording = function(e) {
  var n = e.tabId;
  return n ? this.idb.init().then((function() {
    return this.idb.setItem(n, e);
  }).bind(this)).catch(this.handleError.bind(this)) : (console.warn("No tab ID is set, cannot persist recording metadata."), kt.resolve());
};
us.prototype.getActiveRecording = function() {
  return this.idb.init().then((function() {
    return this.idb.getItem(this.mixpanelInstance.get_tab_id());
  }).bind(this)).then((function(e) {
    return Kd(e) ? null : e;
  }).bind(this)).catch(this.handleError.bind(this));
};
us.prototype.clearActiveRecording = function() {
  return this.getActiveRecording().then((function(e) {
    if (e)
      return e.maxExpires = 0, this.setActiveRecording(e);
  }).bind(this)).catch(this.handleError.bind(this));
};
us.prototype.flushInactiveRecordings = function() {
  return this.idb.init().then((function() {
    return this.idb.getAll();
  }).bind(this)).then((function(e) {
    var n = e.filter(function(i) {
      return Kd(i);
    }).map((function(i) {
      var t = $r.deserialize(i, {
        mixpanelInstance: this.mixpanelInstance,
        sharedLockStorage: this.sharedLockStorage
      });
      return t.unloadPersistedData().then((function() {
        return this.idb.removeItem(i.tabId);
      }).bind(this)).catch(this.handleError.bind(this));
    }).bind(this));
    return kt.all(n);
  }).bind(this)).catch(this.handleError.bind(this));
};
var oa = ko("recorder"), wi = function(e, n, i) {
  this.mixpanelInstance = e, this.rrwebRecord = n || Li, this.sharedLockStorage = i, this.recordingRegistry = new us({
    mixpanelInstance: this.mixpanelInstance,
    errorReporter: oa.error,
    sharedLockStorage: i
  }), this._flushInactivePromise = this.recordingRegistry.flushInactiveRecordings(), this.activeRecording = null;
};
wi.prototype.startRecording = function(e) {
  if (e = e || {}, this.activeRecording && !this.activeRecording.isRrwebStopped()) {
    oa.log("Recording already in progress, skipping startRecording.");
    return;
  }
  var n = (function() {
    oa.log("Idle timeout reached, restarting recording."), this.resetRecording();
  }).bind(this), i = (function() {
    oa.log("Max recording length reached, stopping recording."), this.resetRecording();
  }).bind(this), t = (function() {
    this.recordingRegistry.setActiveRecording(this.activeRecording.serialize()), this.__flushPromise = this.activeRecording.batcher._flushPromise;
  }).bind(this), r = {
    mixpanelInstance: this.mixpanelInstance,
    onBatchSent: t,
    onIdleTimeout: n,
    onMaxLengthReached: i,
    replayId: _.UUID(),
    rrwebRecord: this.rrwebRecord,
    sharedLockStorage: this.sharedLockStorage
  };
  return e.activeSerializedRecording ? this.activeRecording = $r.deserialize(e.activeSerializedRecording, r) : this.activeRecording = new $r(r), this.activeRecording.startRecording(e.shouldStopBatcher), this.recordingRegistry.setActiveRecording(this.activeRecording.serialize());
};
wi.prototype.stopRecording = function() {
  var e = this._stopCurrentRecording(!1);
  return this.recordingRegistry.clearActiveRecording(), this.activeRecording = null, e;
};
wi.prototype.pauseRecording = function() {
  return this._stopCurrentRecording(!1);
};
wi.prototype._stopCurrentRecording = function(e) {
  return this.activeRecording ? this.activeRecording.stopRecording(e) : kt.resolve();
};
wi.prototype.resumeRecording = function(e) {
  return this.activeRecording && this.activeRecording.isRrwebStopped() ? (this.activeRecording.startRecording(!1), kt.resolve(null)) : this.recordingRegistry.getActiveRecording().then((function(n) {
    return n ? this.startRecording({ activeSerializedRecording: n }) : e ? this.startRecording({ shouldStopBatcher: !1 }) : (oa.log("No resumable recording found."), null);
  }).bind(this));
};
wi.prototype.resetRecording = function() {
  this.stopRecording(), this.startRecording({ shouldStopBatcher: !0 });
};
wi.prototype.getActiveReplayId = function() {
  return this.activeRecording && !this.activeRecording.isRrwebStopped() ? this.activeRecording.replayId : null;
};
Object.defineProperty(wi.prototype, "replayId", {
  get: function() {
    return this.getActiveReplayId();
  }
});
xe.__mp_recorder = wi;
var Cl = "change", _a = "click", Rv = "hashchange", Uo = "mp_locationchange", Pv = "popstate", Bv = "scrollend", Qf = "submit", b4 = [
  "clientX",
  "clientY",
  "offsetX",
  "offsetY",
  "pageX",
  "pageY",
  "screenX",
  "screenY",
  "x",
  "y"
], Tv = ["mp-include"], Jf = ["mp-no-track"], Mv = Jf.concat(["mp-sensitive"]), w4 = [
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "href",
  "name",
  "role",
  "title",
  "type"
], dn = ko("autocapture");
function ed(e) {
  for (var n = {}, i = Iy(e).split(" "), t = 0; t < i.length; t++) {
    var r = i[t];
    r && (n[r] = !0);
  }
  return n;
}
function Iy(e) {
  switch (typeof e.className) {
    case "string":
      return e.className;
    case "object":
      return e.className.baseVal || e.getAttribute("class") || "";
    default:
      return "";
  }
}
function _4(e) {
  if (e.previousElementSibling)
    return e.previousElementSibling;
  do
    e = e.previousSibling;
  while (e && !Oy(e));
  return e;
}
function Fv(e, n, i, t, r, o) {
  var s = {
    $classes: Iy(e).split(" "),
    $tag_name: e.tagName.toLowerCase()
  }, c = e.id;
  c && (s.$id = c), Yd(e, n, r, o) && _.each(w4.concat(t), function(g) {
    if (e.hasAttribute(g) && !i[g]) {
      var m = e.getAttribute(g);
      Sl(m) && (s["$attr-" + g] = m);
    }
  });
  for (var f = 1, d = 1, p = e; p = _4(p); )
    f++, p.tagName === e.tagName && d++;
  return s.$nth_child = f, s.$nth_of_type = d, s;
}
function C4(e, n) {
  var i = n.allowElementCallback, t = n.allowSelectors || [], r = n.blockAttrs || [], o = n.blockElementCallback, s = n.blockSelectors || [], c = n.captureTextContent || !1, f = n.captureExtraAttrs || [], d = n.capturedForHeatMap || !1, p = {};
  _.each(r, function(Q) {
    p[Q] = !0;
  });
  var g = null, m = typeof e.target > "u" ? e.srcElement : e.target;
  if (Dy(m) && (m = m.parentNode), A4(m, e) && td(m, e, i, t) && !of(m, e, o, s)) {
    for (var S = [m], x = m; x.parentNode && !Qn(x, "body"); )
      S.push(x.parentNode), x = x.parentNode;
    var I = [], b, L = !1;
    if (_.each(S, function(Q) {
      var ie = Yd(Q, e, i, t);
      !p.href && Q.tagName.toLowerCase() === "a" && (b = Q.getAttribute("href"), b = ie && Sl(b) && b), of(Q, e, o, s) && (L = !0), I.push(Fv(Q, e, p, f, i, t));
    }, this), !L) {
      var $ = wt.documentElement;
      if (g = {
        $event_type: e.type,
        $host: xe.location.host,
        $pathname: xe.location.pathname,
        $elements: I,
        $el_attr__href: b,
        $viewportHeight: Math.max($.clientHeight, xe.innerHeight || 0),
        $viewportWidth: Math.max($.clientWidth, xe.innerWidth || 0),
        $pageHeight: wt.body.offsetHeight || 0,
        $pageWidth: wt.body.offsetWidth || 0
      }, _.each(f, function(Q) {
        if (!p[Q] && m.hasAttribute(Q)) {
          var ie = m.getAttribute(Q);
          Sl(ie) && (g["$el_attr__" + Q] = ie);
        }
      }), c && (W = Nv(m, e, i, t), W && W.length && (g.$el_text = W)), e.type === _a && (_.each(b4, function(Q) {
        Q in e && (g["$" + Q] = e[Q]);
      }), d && (g.$captured_for_heatmap = !0), m = S4(e)), c) {
        var W = Nv(m, e, i, t);
        W && W.length && (g.$el_text = W);
      }
      if (m) {
        if (!td(m, e, i, t) || of(m, e, o, s))
          return null;
        var V = Fv(m, e, p, f, i, t);
        g.$target = V, g.$el_classes = V.$classes, _.extend(g, _.strip_empty_properties({
          $el_id: V.$id,
          $el_tag_name: V.$tag_name
        }));
      }
    }
  }
  return g;
}
function Nv(e, n, i, t) {
  var r = "";
  return Yd(e, n, i, t) && e.childNodes && e.childNodes.length && _.each(e.childNodes, function(o) {
    Dy(o) && o.textContent && (r += _.trim(o.textContent).split(/(\s+)/).filter(Sl).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
  }), _.trim(r);
}
function S4(e) {
  for (var n = e.target, i = e.composedPath(), t = 0; t < i.length; t++) {
    var r = i[t];
    if (Qn(r, "a") || Qn(r, "button") || Qn(r, "input") || Qn(r, "select") || r.getAttribute && r.getAttribute("role") === "button") {
      n = r;
      break;
    }
    if (r === n)
      break;
  }
  return n;
}
function td(e, n, i, t) {
  if (i)
    try {
      if (!i(e, n))
        return !1;
    } catch (s) {
      return dn.critical("Error while checking element in allowElementCallback", s), !1;
    }
  if (!t.length)
    return !0;
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    try {
      if (e.matches(o))
        return !0;
    } catch (s) {
      dn.critical("Error while checking selector: " + o, s);
    }
  }
  return !1;
}
function of(e, n, i, t) {
  var r;
  if (i)
    try {
      if (i(e, n))
        return !0;
    } catch (c) {
      return dn.critical("Error while checking element in blockElementCallback", c), !0;
    }
  if (t && t.length)
    for (r = 0; r < t.length; r++) {
      var o = t[r];
      try {
        if (e.matches(o))
          return !0;
      } catch (c) {
        dn.critical("Error while checking selector: " + o, c);
      }
    }
  var s = ed(e);
  for (r = 0; r < Jf.length; r++)
    if (s[Jf[r]])
      return !0;
  return !1;
}
function Oy(e) {
  return e && e.nodeType === 1;
}
function Qn(e, n) {
  return e && e.tagName && e.tagName.toLowerCase() === n.toLowerCase();
}
function Dy(e) {
  return e && e.nodeType === 3;
}
function E4() {
  try {
    var e = wt.createElement("div");
    return !!e.matches;
  } catch {
    return !1;
  }
}
function A4(e, n) {
  if (!e || Qn(e, "html") || !Oy(e))
    return !1;
  var i = e.tagName.toLowerCase();
  switch (i) {
    case "form":
      return n.type === Qf;
    case "input":
      return ["button", "submit"].indexOf(e.getAttribute("type")) === -1 ? n.type === Cl : n.type === _a;
    case "select":
    case "textarea":
      return n.type === Cl;
    default:
      return n.type === _a;
  }
}
function Yd(e, n, i, t) {
  var r;
  if (!td(e, n, i, t))
    return !1;
  for (var o = e; o.parentNode && !Qn(o, "body"); o = o.parentNode) {
    var s = ed(o);
    for (r = 0; r < Mv.length; r++)
      if (s[Mv[r]])
        return !1;
  }
  var c = ed(e);
  for (r = 0; r < Tv.length; r++)
    if (c[Tv[r]])
      return !0;
  if (Qn(e, "input") || Qn(e, "select") || Qn(e, "textarea") || e.getAttribute("contenteditable") === "true")
    return !1;
  var f = e.type || "";
  if (typeof f == "string")
    switch (f.toLowerCase()) {
      case "hidden":
        return !1;
      case "password":
        return !1;
    }
  var d = e.name || e.id || "";
  if (typeof d == "string") {
    var p = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;
    if (p.test(d.replace(/[^a-zA-Z0-9]/g, "")))
      return !1;
  }
  return !0;
}
function Sl(e) {
  if (e === null || _.isUndefined(e))
    return !1;
  if (typeof e == "string") {
    e = _.trim(e);
    var n = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if (n.test((e || "").replace(/[- ]/g, "")))
      return !1;
    var i = /(^\d{3}-?\d{2}-?\d{4}$)/;
    if (i.test(e))
      return !1;
  }
  return !0;
}
var Ry = "autocapture", k4 = "track_pageview", Py = "full-url", I4 = "url-with-path-and-query-string", O4 = "url-with-path", D4 = "allow_element_callback", By = "allow_selectors", Ty = "allow_url_regexes", My = "block_attrs", Fy = "block_element_callback", Ny = "block_selectors", Ly = "block_url_regexes", Uy = "capture_extra_attrs", zy = "capture_text_content", jy = "scroll_capture_all", $y = "scroll_depth_percent_checkpoints", El = "click", rd = "input", Wy = "pageview", nd = "scroll", id = "submit", Pr = {};
Pr[By] = [];
Pr[Ty] = [];
Pr[My] = [];
Pr[Fy] = null;
Pr[Ny] = [];
Pr[Ly] = [];
Pr[Uy] = [];
Pr[zy] = !1;
Pr[jy] = !1;
Pr[$y] = [25, 50, 75, 100];
Pr[El] = !0;
Pr[rd] = !0;
Pr[Wy] = Py;
Pr[nd] = !0;
Pr[id] = !0;
var Al = {
  $mp_autocapture: !0
}, qy = "$mp_click", R4 = "$mp_input_change", P4 = "$mp_scroll", B4 = "$mp_submit", Cn = function(e) {
  this.mp = e;
};
Cn.prototype.init = function() {
  if (!E4()) {
    dn.critical("Autocapture unavailable: missing required DOM APIs");
    return;
  }
  this.initPageviewTracking(), this.initClickTracking(), this.initInputTracking(), this.initScrollTracking(), this.initSubmitTracking();
};
Cn.prototype.getFullConfig = function() {
  var e = this.mp.get_config(Ry);
  return e ? _.isObject(e) ? _.extend({}, Pr, e) : Pr : {};
};
Cn.prototype.getConfig = function(e) {
  return this.getFullConfig()[e];
};
Cn.prototype.currentUrlBlocked = function() {
  var e, n = _.info.currentUrl(), i = this.getConfig(Ty) || [];
  if (i.length) {
    var t = !1;
    for (e = 0; e < i.length; e++) {
      var r = i[e];
      try {
        if (n.match(r)) {
          t = !0;
          break;
        }
      } catch (s) {
        return dn.critical("Error while checking block URL regex: " + r, s), !0;
      }
    }
    if (!t)
      return !0;
  }
  var o = this.getConfig(Ly) || [];
  if (!o || !o.length)
    return !1;
  for (e = 0; e < o.length; e++)
    try {
      if (n.match(o[e]))
        return !0;
    } catch (s) {
      return dn.critical("Error while checking block URL regex: " + o[e], s), !0;
    }
  return !1;
};
Cn.prototype.pageviewTrackingConfig = function() {
  return this.mp.get_config(Ry) ? this.getConfig(Wy) : this.mp.get_config(k4);
};
Cn.prototype.trackDomEvent = function(e, n) {
  if (!this.currentUrlBlocked()) {
    var i = C4(e, {
      allowElementCallback: this.getConfig(D4),
      allowSelectors: this.getConfig(By),
      blockAttrs: this.getConfig(My),
      blockElementCallback: this.getConfig(Fy),
      blockSelectors: this.getConfig(Ny),
      captureExtraAttrs: this.getConfig(Uy),
      captureTextContent: this.getConfig(zy),
      capturedForHeatMap: n === qy && !this.getConfig(El) && this.mp.is_recording_heatmap_data()
    });
    i && (_.extend(i, Al), this.mp.track(n, i));
  }
};
Cn.prototype.initClickTracking = function() {
  xe.removeEventListener(_a, this.listenerClick), !(!this.getConfig(El) && !this.mp.get_config("record_heatmap_data")) && (dn.log("Initializing click tracking"), this.listenerClick = xe.addEventListener(_a, (function(e) {
    !this.getConfig(El) && !this.mp.is_recording_heatmap_data() || this.trackDomEvent(e, qy);
  }).bind(this)));
};
Cn.prototype.initInputTracking = function() {
  xe.removeEventListener(Cl, this.listenerChange), this.getConfig(rd) && (dn.log("Initializing input tracking"), this.listenerChange = xe.addEventListener(Cl, (function(e) {
    this.getConfig(rd) && this.trackDomEvent(e, R4);
  }).bind(this)));
};
Cn.prototype.initPageviewTracking = function() {
  if (xe.removeEventListener(Pv, this.listenerPopstate), xe.removeEventListener(Rv, this.listenerHashchange), xe.removeEventListener(Uo, this.listenerLocationchange), !!this.pageviewTrackingConfig()) {
    dn.log("Initializing pageview tracking");
    var e = "", n = !1;
    this.currentUrlBlocked() || (n = this.mp.track_pageview(Al)), n && (e = _.info.currentUrl()), this.listenerPopstate = xe.addEventListener(Pv, function() {
      xe.dispatchEvent(new Event(Uo));
    }), this.listenerHashchange = xe.addEventListener(Rv, function() {
      xe.dispatchEvent(new Event(Uo));
    });
    var i = xe.history.pushState;
    typeof i == "function" && (xe.history.pushState = function(r, o, s) {
      i.call(xe.history, r, o, s), xe.dispatchEvent(new Event(Uo));
    });
    var t = xe.history.replaceState;
    typeof t == "function" && (xe.history.replaceState = function(r, o, s) {
      t.call(xe.history, r, o, s), xe.dispatchEvent(new Event(Uo));
    }), this.listenerLocationchange = xe.addEventListener(Uo, $d((function() {
      if (!this.currentUrlBlocked()) {
        var r = _.info.currentUrl(), o = !1, s = r.split("#")[0].split("?")[0] !== e.split("#")[0].split("?")[0], c = this.pageviewTrackingConfig();
        if (c === Py ? o = r !== e : c === I4 ? o = r.split("#")[0] !== e.split("#")[0] : c === O4 && (o = s), o) {
          var f = this.mp.track_pageview(Al);
          f && (e = r), s && (this.lastScrollCheckpoint = 0, dn.log("Path change: re-initializing scroll depth checkpoints"));
        }
      }
    }).bind(this)));
  }
};
Cn.prototype.initScrollTracking = function() {
  xe.removeEventListener(Bv, this.listenerScroll), this.getConfig(nd) && (dn.log("Initializing scroll tracking"), this.lastScrollCheckpoint = 0, this.listenerScroll = xe.addEventListener(Bv, $d((function() {
    if (this.getConfig(nd) && !this.currentUrlBlocked()) {
      var e = this.getConfig(jy), n = (this.getConfig($y) || []).slice().sort(function(f, d) {
        return f - d;
      }), i = xe.scrollY, t = _.extend({ $scroll_top: i }, Al);
      try {
        var r = wt.body.scrollHeight, o = Math.round(i / (r - xe.innerHeight) * 100);
        if (t.$scroll_height = r, t.$scroll_percentage = o, o > this.lastScrollCheckpoint)
          for (var s = 0; s < n.length; s++) {
            var c = n[s];
            o >= c && this.lastScrollCheckpoint < c && (t.$scroll_checkpoint = c, this.lastScrollCheckpoint = c, e = !0);
          }
      } catch (f) {
        dn.critical("Error while calculating scroll percentage", f);
      }
      e && this.mp.track(P4, t);
    }
  }).bind(this))));
};
Cn.prototype.initSubmitTracking = function() {
  xe.removeEventListener(Qf, this.listenerSubmit), this.getConfig(id) && (dn.log("Initializing submit tracking"), this.listenerSubmit = xe.addEventListener(Qf, (function(e) {
    this.getConfig(id) && this.trackDomEvent(e, B4);
  }).bind(this)));
};
by(Cn);
var T4 = xe.fetch, kn = ko("flags"), Vy = "flags", Hy = "context", od = {};
od[Hy] = {};
var Ct = function(e) {
  this.getMpConfig = e.getConfigFunc, this.getDistinctId = e.getDistinctIdFunc, this.track = e.trackingFunc;
};
Ct.prototype.init = function() {
  if (!M4()) {
    kn.critical("Feature Flags unavailable: missing minimum required APIs");
    return;
  }
  this.flags = null, this.fetchFlags(), this.trackedFeatures = /* @__PURE__ */ new Set();
};
Ct.prototype.getFullConfig = function() {
  var e = this.getMpConfig(Vy);
  return e ? _.isObject(e) ? _.extend({}, od, e) : od : {};
};
Ct.prototype.getConfig = function(e) {
  return this.getFullConfig()[e];
};
Ct.prototype.isSystemEnabled = function() {
  return !!this.getMpConfig(Vy);
};
Ct.prototype.areFlagsReady = function() {
  return this.isSystemEnabled() || kn.error("Feature Flags not enabled"), !!this.flags;
};
Ct.prototype.fetchFlags = function() {
  if (this.isSystemEnabled()) {
    var e = this.getDistinctId();
    kn.log("Fetching flags for distinct ID: " + e);
    var n = {
      context: _.extend({ distinct_id: e }, this.getConfig(Hy))
    };
    this.fetchPromise = xe.fetch(this.getMpConfig("api_host") + "/" + this.getMpConfig("api_routes").flags, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(this.getMpConfig("token") + ":"),
        "Content-Type": "application/octet-stream"
      },
      body: JSON.stringify(n)
    }).then((function(i) {
      return i.json().then((function(t) {
        var r = t.flags;
        if (!r)
          throw new Error("No flags in API response");
        var o = /* @__PURE__ */ new Map();
        _.each(r, function(s, c) {
          o.set(c, {
            key: s.variant_key,
            value: s.variant_value
          });
        }), this.flags = o;
      }).bind(this)).catch(function(t) {
        kn.error(t);
      });
    }).bind(this)).catch(function() {
    });
  }
};
Ct.prototype.getVariant = function(e, n) {
  return this.fetchPromise ? this.fetchPromise.then((function() {
    return this.getVariantSync(e, n);
  }).bind(this)).catch(function(i) {
    return kn.error(i), n;
  }) : new Promise(function(i) {
    kn.critical("Feature Flags not initialized"), i(n);
  });
};
Ct.prototype.getVariantSync = function(e, n) {
  if (!this.areFlagsReady())
    return kn.log("Flags not loaded yet"), n;
  var i = this.flags.get(e);
  return i ? (this.trackFeatureCheck(e, i), i) : (kn.log('No flag found: "' + e + '"'), n);
};
Ct.prototype.getVariantValue = function(e, n) {
  return this.getVariant(e, { value: n }).then(function(i) {
    return i.value;
  }).catch(function(i) {
    return kn.error(i), n;
  });
};
Ct.prototype.getFeatureData = function(e, n) {
  return kn.critical("mixpanel.flags.get_feature_data() is deprecated and will be removed in a future release. Use mixpanel.flags.get_variant_value() instead."), this.getVariantValue(e, n);
};
Ct.prototype.getVariantValueSync = function(e, n) {
  return this.getVariantSync(e, { value: n }).value;
};
Ct.prototype.isEnabled = function(e, n) {
  return this.getVariantValue(e).then((function() {
    return this.isEnabledSync(e, n);
  }).bind(this)).catch(function(i) {
    return kn.error(i), n;
  });
};
Ct.prototype.isEnabledSync = function(e, n) {
  n = n || !1;
  var i = this.getVariantValueSync(e, n);
  return i !== !0 && i !== !1 && (kn.error('Feature flag "' + e + '" value: ' + i + " is not a boolean; returning fallback value: " + n), i = n), i;
};
Ct.prototype.trackFeatureCheck = function(e, n) {
  this.trackedFeatures.has(e) || (this.trackedFeatures.add(e), this.track("$experiment_started", {
    "Experiment name": e,
    "Variant name": n.key,
    $experiment_type: "feature_flag"
  }));
};
function M4() {
  return !!T4 && typeof Promise < "u" && typeof Map < "u" && typeof Set < "u";
}
by(Ct);
Ct.prototype.are_flags_ready = Ct.prototype.areFlagsReady;
Ct.prototype.get_variant = Ct.prototype.getVariant;
Ct.prototype.get_variant_sync = Ct.prototype.getVariantSync;
Ct.prototype.get_variant_value = Ct.prototype.getVariantValue;
Ct.prototype.get_variant_value_sync = Ct.prototype.getVariantValueSync;
Ct.prototype.is_enabled = Ct.prototype.isEnabled;
Ct.prototype.is_enabled_sync = Ct.prototype.isEnabledSync;
Ct.prototype.get_feature_data = Ct.prototype.getFeatureData;
var _i = function() {
};
_i.prototype.create_properties = function() {
};
_i.prototype.event_handler = function() {
};
_i.prototype.after_track_handler = function() {
};
_i.prototype.init = function(e) {
  return this.mp = e, this;
};
_i.prototype.track = function(e, n, i, t) {
  var r = this, o = _.dom_query(e);
  if (o.length === 0) {
    _t.error("The DOM query (" + e + ") returned 0 elements");
    return;
  }
  return _.each(o, function(s) {
    _.register_event(s, this.override_event, function(c) {
      var f = {}, d = r.create_properties(i, this), p = r.mp.get_config("track_links_timeout");
      r.event_handler(c, this, f), window.setTimeout(r.track_callback(t, d, f, !0), p), r.mp.track(n, d, r.track_callback(t, d, f));
    });
  }, this), !0;
};
_i.prototype.track_callback = function(e, n, i, t) {
  t = t || !1;
  var r = this;
  return function() {
    i.callback_fired || (i.callback_fired = !0, !(e && e(t, n) === !1) && r.after_track_handler(n, i, t));
  };
};
_i.prototype.create_properties = function(e, n) {
  var i;
  return typeof e == "function" ? i = e(n) : i = _.extend({}, e), i;
};
var is = function() {
  this.override_event = "click";
};
_.inherit(is, _i);
is.prototype.create_properties = function(e, n) {
  var i = is.superclass.create_properties.apply(this, arguments);
  return n.href && (i.url = n.href), i;
};
is.prototype.event_handler = function(e, n, i) {
  i.new_tab = e.which === 2 || e.metaKey || e.ctrlKey || n.target === "_blank", i.href = n.href, i.new_tab || e.preventDefault();
};
is.prototype.after_track_handler = function(e, n) {
  n.new_tab || setTimeout(function() {
    window.location = n.href;
  }, 0);
};
var Xl = function() {
  this.override_event = "submit";
};
_.inherit(Xl, _i);
Xl.prototype.event_handler = function(e, n, i) {
  i.element = n, e.preventDefault();
};
Xl.prototype.after_track_handler = function(e, n) {
  setTimeout(function() {
    n.element.submit();
  }, 0);
};
var Bi = "$set", os = "$set_once", $n = "$unset", Co = "$add", Jn = "$append", So = "$union", yi = "$remove", F4 = "$delete", Gy = {
  set_action: function(e, n) {
    var i = {}, t = {};
    return _.isObject(e) ? _.each(e, function(r, o) {
      this._is_reserved_property(o) || (t[o] = r);
    }, this) : t[e] = n, i[Bi] = t, i;
  },
  unset_action: function(e) {
    var n = {}, i = [];
    return _.isArray(e) || (e = [e]), _.each(e, function(t) {
      this._is_reserved_property(t) || i.push(t);
    }, this), n[$n] = i, n;
  },
  set_once_action: function(e, n) {
    var i = {}, t = {};
    return _.isObject(e) ? _.each(e, function(r, o) {
      this._is_reserved_property(o) || (t[o] = r);
    }, this) : t[e] = n, i[os] = t, i;
  },
  union_action: function(e, n) {
    var i = {}, t = {};
    return _.isObject(e) ? _.each(e, function(r, o) {
      this._is_reserved_property(o) || (t[o] = _.isArray(r) ? r : [r]);
    }, this) : t[e] = _.isArray(n) ? n : [n], i[So] = t, i;
  },
  append_action: function(e, n) {
    var i = {}, t = {};
    return _.isObject(e) ? _.each(e, function(r, o) {
      this._is_reserved_property(o) || (t[o] = r);
    }, this) : t[e] = n, i[Jn] = t, i;
  },
  remove_action: function(e, n) {
    var i = {}, t = {};
    return _.isObject(e) ? _.each(e, function(r, o) {
      this._is_reserved_property(o) || (t[o] = r);
    }, this) : t[e] = n, i[yi] = t, i;
  },
  delete_action: function() {
    var e = {};
    return e[F4] = "", e;
  }
}, Gt = function() {
};
_.extend(Gt.prototype, Gy);
Gt.prototype._init = function(e, n, i) {
  this._mixpanel = e, this._group_key = n, this._group_id = i;
};
Gt.prototype.set = ls(function(e, n, i) {
  var t = this.set_action(e, n);
  return _.isObject(e) && (i = n), this._send_request(t, i);
});
Gt.prototype.set_once = ls(function(e, n, i) {
  var t = this.set_once_action(e, n);
  return _.isObject(e) && (i = n), this._send_request(t, i);
});
Gt.prototype.unset = ls(function(e, n) {
  var i = this.unset_action(e);
  return this._send_request(i, n);
});
Gt.prototype.union = ls(function(e, n, i) {
  _.isObject(e) && (i = n);
  var t = this.union_action(e, n);
  return this._send_request(t, i);
});
Gt.prototype.delete = ls(function(e) {
  var n = this.delete_action();
  return this._send_request(n, e);
});
Gt.prototype.remove = ls(function(e, n, i) {
  var t = this.remove_action(e, n);
  return this._send_request(t, i);
});
Gt.prototype._send_request = function(e, n) {
  e.$group_key = this._group_key, e.$group_id = this._group_id, e.$token = this._get_config("token");
  var i = _.encodeDates(e);
  return this._mixpanel._track_or_batch({
    type: "groups",
    data: i,
    endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").groups,
    batcher: this._mixpanel.request_batchers.groups
  }, n);
};
Gt.prototype._is_reserved_property = function(e) {
  return e === "$group_key" || e === "$group_id";
};
Gt.prototype._get_config = function(e) {
  return this._mixpanel.get_config(e);
};
Gt.prototype.toString = function() {
  return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id;
};
Gt.prototype.remove = Gt.prototype.remove;
Gt.prototype.set = Gt.prototype.set;
Gt.prototype.set_once = Gt.prototype.set_once;
Gt.prototype.union = Gt.prototype.union;
Gt.prototype.unset = Gt.prototype.unset;
Gt.prototype.toString = Gt.prototype.toString;
var Ye = function() {
};
_.extend(Ye.prototype, Gy);
Ye.prototype._init = function(e) {
  this._mixpanel = e;
};
Ye.prototype.set = ji(function(e, n, i) {
  var t = this.set_action(e, n);
  return _.isObject(e) && (i = n), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), t[Bi] = _.extend(
    {},
    _.info.people_properties(),
    t[Bi]
  ), this._send_request(t, i);
});
Ye.prototype.set_once = ji(function(e, n, i) {
  var t = this.set_once_action(e, n);
  return _.isObject(e) && (i = n), this._send_request(t, i);
});
Ye.prototype.unset = ji(function(e, n) {
  var i = this.unset_action(e);
  return this._send_request(i, n);
});
Ye.prototype.increment = ji(function(e, n, i) {
  var t = {}, r = {};
  return _.isObject(e) ? (_.each(e, function(o, s) {
    if (!this._is_reserved_property(s))
      if (isNaN(parseFloat(o))) {
        _t.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
        return;
      } else
        r[s] = o;
  }, this), i = n) : (_.isUndefined(n) && (n = 1), r[e] = n), t[Co] = r, this._send_request(t, i);
});
Ye.prototype.append = ji(function(e, n, i) {
  _.isObject(e) && (i = n);
  var t = this.append_action(e, n);
  return this._send_request(t, i);
});
Ye.prototype.remove = ji(function(e, n, i) {
  _.isObject(e) && (i = n);
  var t = this.remove_action(e, n);
  return this._send_request(t, i);
});
Ye.prototype.union = ji(function(e, n, i) {
  _.isObject(e) && (i = n);
  var t = this.union_action(e, n);
  return this._send_request(t, i);
});
Ye.prototype.track_charge = ji(function() {
  _t.error("mixpanel.people.track_charge() is deprecated and no longer has any effect.");
});
Ye.prototype.clear_charges = function(e) {
  return this.set("$transactions", [], e);
};
Ye.prototype.delete_user = function() {
  if (!this._identify_called()) {
    _t.error("mixpanel.people.delete_user() requires you to call identify() first");
    return;
  }
  var e = { $delete: this._mixpanel.get_distinct_id() };
  return this._send_request(e);
};
Ye.prototype.toString = function() {
  return this._mixpanel.toString() + ".people";
};
Ye.prototype._send_request = function(e, n) {
  e.$token = this._get_config("token"), e.$distinct_id = this._mixpanel.get_distinct_id();
  var i = this._mixpanel.get_property("$device_id"), t = this._mixpanel.get_property("$user_id"), r = this._mixpanel.get_property("$had_persisted_distinct_id");
  i && (e.$device_id = i), t && (e.$user_id = t), r && (e.$had_persisted_distinct_id = r);
  var o = _.encodeDates(e);
  return this._identify_called() ? this._mixpanel._track_or_batch({
    type: "people",
    data: o,
    endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").engage,
    batcher: this._mixpanel.request_batchers.people
  }, n) : (this._enqueue(e), _.isUndefined(n) || (this._get_config("verbose") ? n({ status: -1, error: null }) : n(-1)), _.truncate(o, 255));
};
Ye.prototype._get_config = function(e) {
  return this._mixpanel.get_config(e);
};
Ye.prototype._identify_called = function() {
  return this._mixpanel._flags.identify_called === !0;
};
Ye.prototype._enqueue = function(e) {
  Bi in e ? this._mixpanel.persistence._add_to_people_queue(Bi, e) : os in e ? this._mixpanel.persistence._add_to_people_queue(os, e) : $n in e ? this._mixpanel.persistence._add_to_people_queue($n, e) : Co in e ? this._mixpanel.persistence._add_to_people_queue(Co, e) : Jn in e ? this._mixpanel.persistence._add_to_people_queue(Jn, e) : yi in e ? this._mixpanel.persistence._add_to_people_queue(yi, e) : So in e ? this._mixpanel.persistence._add_to_people_queue(So, e) : _t.error("Invalid call to _enqueue():", e);
};
Ye.prototype._flush_one_queue = function(e, n, i, t) {
  var r = this, o = _.extend({}, this._mixpanel.persistence.load_queue(e)), s = o;
  !_.isUndefined(o) && _.isObject(o) && !_.isEmptyObject(o) && (r._mixpanel.persistence._pop_from_people_queue(e, o), r._mixpanel.persistence.save(), t && (s = t(o)), n.call(r, s, function(c, f) {
    c === 0 && r._mixpanel.persistence._add_to_people_queue(e, o), _.isUndefined(i) || i(c, f);
  }));
};
Ye.prototype._flush = function(e, n, i, t, r, o, s) {
  var c = this;
  this._flush_one_queue(Bi, this.set, e), this._flush_one_queue(os, this.set_once, t), this._flush_one_queue($n, this.unset, o, function(b) {
    return _.keys(b);
  }), this._flush_one_queue(Co, this.increment, n), this._flush_one_queue(So, this.union, r);
  var f = this._mixpanel.persistence.load_queue(Jn);
  if (!_.isUndefined(f) && _.isArray(f) && f.length)
    for (var d, p = function(b, L) {
      b === 0 && c._mixpanel.persistence._add_to_people_queue(Jn, d), _.isUndefined(i) || i(b, L);
    }, g = f.length - 1; g >= 0; g--)
      f = this._mixpanel.persistence.load_queue(Jn), d = f.pop(), c._mixpanel.persistence.save(), _.isEmptyObject(d) || c.append(d, p);
  var m = this._mixpanel.persistence.load_queue(yi);
  if (!_.isUndefined(m) && _.isArray(m) && m.length)
    for (var S, x = function(b, L) {
      b === 0 && c._mixpanel.persistence._add_to_people_queue(yi, S), _.isUndefined(s) || s(b, L);
    }, I = m.length - 1; I >= 0; I--)
      m = this._mixpanel.persistence.load_queue(yi), S = m.pop(), c._mixpanel.persistence.save(), _.isEmptyObject(S) || c.remove(S, x);
};
Ye.prototype._is_reserved_property = function(e) {
  return e === "$distinct_id" || e === "$token" || e === "$device_id" || e === "$user_id" || e === "$had_persisted_distinct_id";
};
Ye.prototype.set = Ye.prototype.set;
Ye.prototype.set_once = Ye.prototype.set_once;
Ye.prototype.unset = Ye.prototype.unset;
Ye.prototype.increment = Ye.prototype.increment;
Ye.prototype.append = Ye.prototype.append;
Ye.prototype.remove = Ye.prototype.remove;
Ye.prototype.union = Ye.prototype.union;
Ye.prototype.track_charge = Ye.prototype.track_charge;
Ye.prototype.clear_charges = Ye.prototype.clear_charges;
Ye.prototype.delete_user = Ye.prototype.delete_user;
Ye.prototype.toString = Ye.prototype.toString;
var Zd = "__mps", Xd = "__mpso", Qd = "__mpus", Jd = "__mpa", eh = "__mpap", th = "__mpr", rh = "__mpu", Ky = "$people_distinct_id", kl = "__alias", Ca = "__timers", N4 = [
  Zd,
  Xd,
  Qd,
  Jd,
  eh,
  th,
  rh,
  Ky,
  kl,
  Ca
], st = function(e) {
  this.props = {}, this.campaign_params_saved = !1, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
  var n = e.persistence;
  n !== "cookie" && n !== "localStorage" && (_t.critical("Unknown persistence type " + n + "; falling back to cookie"), n = e.persistence = "cookie"), n === "localStorage" && _.localStorage.is_supported() ? this.storage = _.localStorage : this.storage = _.cookie, this.load(), this.update_config(e), this.upgrade(), this.save();
};
st.prototype.properties = function() {
  var e = {};
  return this.load(), _.each(this.props, function(n, i) {
    _.include(N4, i) || (e[i] = n);
  }), e;
};
st.prototype.load = function() {
  if (!this.disabled) {
    var e = this.storage.parse(this.name);
    e && (this.props = _.extend({}, e));
  }
};
st.prototype.upgrade = function() {
  var e, n;
  this.storage === _.localStorage ? (e = _.cookie.parse(this.name), _.cookie.remove(this.name), _.cookie.remove(this.name, !0), e && this.register_once(e)) : this.storage === _.cookie && (n = _.localStorage.parse(this.name), _.localStorage.remove(this.name), n && this.register_once(n));
};
st.prototype.save = function() {
  this.disabled || this.storage.set(
    this.name,
    ns(this.props),
    this.expire_days,
    this.cross_subdomain,
    this.secure,
    this.cross_site,
    this.cookie_domain
  );
};
st.prototype.load_prop = function(e) {
  return this.load(), this.props[e];
};
st.prototype.remove = function() {
  this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain);
};
st.prototype.clear = function() {
  this.remove(), this.props = {};
};
st.prototype.register_once = function(e, n, i) {
  return _.isObject(e) ? (typeof n > "u" && (n = "None"), this.expire_days = typeof i > "u" ? this.default_expiry : i, this.load(), _.each(e, function(t, r) {
    (!this.props.hasOwnProperty(r) || this.props[r] === n) && (this.props[r] = t);
  }, this), this.save(), !0) : !1;
};
st.prototype.register = function(e, n) {
  return _.isObject(e) ? (this.expire_days = typeof n > "u" ? this.default_expiry : n, this.load(), _.extend(this.props, e), this.save(), !0) : !1;
};
st.prototype.unregister = function(e) {
  this.load(), e in this.props && (delete this.props[e], this.save());
};
st.prototype.update_search_keyword = function(e) {
  this.register(_.info.searchInfo(e));
};
st.prototype.update_referrer_info = function(e) {
  this.register_once({
    $initial_referrer: e || "$direct",
    $initial_referring_domain: _.info.referringDomain(e) || "$direct"
  }, "");
};
st.prototype.get_referrer_info = function() {
  return _.strip_empty_properties({
    $initial_referrer: this.props.$initial_referrer,
    $initial_referring_domain: this.props.$initial_referring_domain
  });
};
st.prototype.update_config = function(e) {
  this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie);
};
st.prototype.set_disabled = function(e) {
  this.disabled = e, this.disabled ? this.remove() : this.save();
};
st.prototype.set_cookie_domain = function(e) {
  e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save());
};
st.prototype.set_cross_site = function(e) {
  e !== this.cross_site && (this.cross_site = e, this.remove(), this.save());
};
st.prototype.set_cross_subdomain = function(e) {
  e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save());
};
st.prototype.get_cross_subdomain = function() {
  return this.cross_subdomain;
};
st.prototype.set_secure = function(e) {
  e !== this.secure && (this.secure = !!e, this.remove(), this.save());
};
st.prototype._add_to_people_queue = function(e, n) {
  var i = this._get_queue_key(e), t = n[e], r = this._get_or_create_queue(Bi), o = this._get_or_create_queue(os), s = this._get_or_create_queue($n), c = this._get_or_create_queue(Co), f = this._get_or_create_queue(So), d = this._get_or_create_queue(yi, []), p = this._get_or_create_queue(Jn, []);
  i === Zd ? (_.extend(r, t), this._pop_from_people_queue(Co, t), this._pop_from_people_queue(So, t), this._pop_from_people_queue($n, t)) : i === Xd ? (_.each(t, function(g, m) {
    m in o || (o[m] = g);
  }), this._pop_from_people_queue($n, t)) : i === Qd ? _.each(t, function(g) {
    _.each([r, o, c, f], function(m) {
      g in m && delete m[g];
    }), _.each(p, function(m) {
      g in m && delete m[g];
    }), s[g] = !0;
  }) : i === Jd ? (_.each(t, function(g, m) {
    m in r ? r[m] += g : (m in c || (c[m] = 0), c[m] += g);
  }, this), this._pop_from_people_queue($n, t)) : i === rh ? (_.each(t, function(g, m) {
    _.isArray(g) && (m in f || (f[m] = []), _.each(g, function(S) {
      _.include(f[m], S) || f[m].push(S);
    }));
  }), this._pop_from_people_queue($n, t)) : i === th ? (d.push(t), this._pop_from_people_queue(Jn, t)) : i === eh && (p.push(t), this._pop_from_people_queue($n, t)), _t.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), _t.log(n), this.save();
};
st.prototype._pop_from_people_queue = function(e, n) {
  var i = this.props[this._get_queue_key(e)];
  _.isUndefined(i) || _.each(n, function(t, r) {
    e === Jn || e === yi ? _.each(i, function(o) {
      o[r] === t && delete o[r];
    }) : delete i[r];
  }, this);
};
st.prototype.load_queue = function(e) {
  return this.load_prop(this._get_queue_key(e));
};
st.prototype._get_queue_key = function(e) {
  if (e === Bi)
    return Zd;
  if (e === os)
    return Xd;
  if (e === $n)
    return Qd;
  if (e === Co)
    return Jd;
  if (e === Jn)
    return eh;
  if (e === yi)
    return th;
  if (e === So)
    return rh;
  _t.error("Invalid queue:", e);
};
st.prototype._get_or_create_queue = function(e, n) {
  var i = this._get_queue_key(e);
  return n = _.isUndefined(n) ? {} : n, this.props[i] || (this.props[i] = n);
};
st.prototype.set_event_timer = function(e, n) {
  var i = this.load_prop(Ca) || {};
  i[e] = n, this.props[Ca] = i, this.save();
};
st.prototype.remove_event_timer = function(e) {
  var n = this.load_prop(Ca) || {}, i = n[e];
  return _.isUndefined(i) || (delete this.props[Ca][e], this.save()), i;
};
var nh, Yy = function(e, n) {
  throw new Error(e + " not available in this build.");
}, Nr, Zy = 0, L4 = 1, U4 = function(e) {
  return e;
}, An = "mixpanel", Xy = "base64", z4 = "json", ih = "$device:", Ko = xe.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(), Qy = !Ko && mi.indexOf("MSIE") === -1 && mi.indexOf("Mozilla") === -1, Il = null;
Di.sendBeacon && (Il = function() {
  return Di.sendBeacon.apply(Di, arguments);
});
var Jy = {
  track: "track/",
  engage: "engage/",
  groups: "groups/",
  record: "record/",
  flags: "flags/"
}, Lv = {
  api_host: "https://api-js.mixpanel.com",
  api_routes: Jy,
  api_extra_query_params: {},
  api_method: "POST",
  api_transport: "XHR",
  api_payload_format: Xy,
  app_host: "https://mixpanel.com",
  autocapture: !1,
  cdn: "https://cdn.mxpnl.com",
  cross_site_cookie: !1,
  cross_subdomain_cookie: !0,
  error_reporter: Ri,
  flags: !1,
  persistence: "cookie",
  persistence_name: "",
  cookie_domain: "",
  cookie_name: "",
  loaded: Ri,
  mp_loader: null,
  track_marketing: !0,
  track_pageview: !1,
  skip_first_touch_marketing: !1,
  store_google: !0,
  stop_utm_persistence: !1,
  save_referrer: !0,
  test: !1,
  verbose: !1,
  img: !1,
  debug: !1,
  track_links_timeout: 300,
  cookie_expiration: 365,
  upgrade: !1,
  disable_persistence: !1,
  disable_cookie: !1,
  secure_cookie: !1,
  ip: !0,
  opt_out_tracking_by_default: !1,
  opt_out_persistence_by_default: !1,
  opt_out_tracking_persistence_type: "localStorage",
  opt_out_tracking_cookie_prefix: null,
  property_blacklist: [],
  xhr_headers: {},
  // { header: value, header2: value }
  ignore_dnt: !1,
  batch_requests: !0,
  batch_size: 50,
  batch_flush_interval_ms: 5e3,
  batch_request_timeout_ms: 9e4,
  batch_autostart: !0,
  hooks: {},
  record_block_class: new RegExp("^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$"),
  record_block_selector: "img, video",
  record_canvas: !1,
  record_collect_fonts: !1,
  record_heatmap_data: !1,
  record_idle_timeout_ms: 30 * 60 * 1e3,
  // 30 minutes
  record_mask_text_class: new RegExp("^(mp-mask|fs-mask|amp-mask|rr-mask|ph-mask)$"),
  record_mask_text_selector: "*",
  record_max_ms: na,
  record_min_ms: 0,
  record_sessions_percent: 0,
  recorder_src: "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js"
}, ex = !1, X = function() {
}, sd = function(e, n, i) {
  var t, r = i === An ? Nr : Nr[i];
  if (r && nh === Zy)
    t = r;
  else {
    if (r && !_.isArray(r)) {
      _t.error("You have already initialized " + i);
      return;
    }
    t = new X();
  }
  if (t._cached_groups = {}, t._init(e, n, i), t.people = new Ye(), t.people._init(t), !t.get_config("skip_first_touch_marketing")) {
    var o = _.info.campaignParams(null), s = {}, c = !1;
    _.each(o, function(f, d) {
      s["initial_" + d] = f, f && (c = !0);
    }), c && t.people.set_once(s);
  }
  return Wn.DEBUG = Wn.DEBUG || t.get_config("debug"), !_.isUndefined(r) && _.isArray(r) && (t._execute_array.call(t.people, r.people), t._execute_array(r)), t;
};
X.prototype.init = function(e, n, i) {
  if (_.isUndefined(i)) {
    this.report_error("You must name your new library: init(token, config, name)");
    return;
  }
  if (i === An) {
    this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
    return;
  }
  var t = sd(e, n, i);
  return Nr[i] = t, t._loaded(), t;
};
X.prototype._init = function(e, n, i) {
  n = n || {}, this.__loaded = !0, this.config = {};
  var t = {};
  if (!("api_payload_format" in n)) {
    var r = n.api_host || Lv.api_host;
    r.match(/\.mixpanel\.com/) && (t.api_payload_format = z4);
  }
  if (this.set_config(_.extend({}, Lv, t, n, {
    name: i,
    token: e,
    callback_fn: (i === An ? i : An + "." + i) + "._jsc"
  })), this._jsc = Ri, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
    disable_all_events: !1,
    identify_called: !1
  }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
    if (!_.localStorage.is_supported(!0) || !Ko)
      this._batch_requests = !1, _t.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"), _.each(this.get_batcher_configs(), function(c) {
        _t.log("Clearing batch queue " + c.queue_key), _.localStorage.remove(c.queue_key);
      });
    else if (this.init_batchers(), Il && xe.addEventListener) {
      var o = _.bind(function() {
        this.request_batchers.events.stopped || this.request_batchers.events.flush({ unloading: !0 });
      }, this);
      xe.addEventListener("pagehide", function(c) {
        c.persisted && o();
      }), xe.addEventListener("visibilitychange", function() {
        wt.visibilityState === "hidden" && o();
      });
    }
  }
  this.persistence = this.cookie = new st(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
  var s = _.UUID();
  this.get_distinct_id() || this.register_once({
    distinct_id: ih + s,
    $device_id: s
  }, ""), this.flags = new Ct({
    getConfigFunc: _.bind(this.get_config, this),
    getDistinctIdFunc: _.bind(this.get_distinct_id, this),
    trackingFunc: _.bind(this.track, this)
  }), this.flags.init(), this.flags = this.flags, this.autocapture = new Cn(this), this.autocapture.init(), this._init_tab_id(), this._check_and_start_session_recording();
};
X.prototype._init_tab_id = function() {
  if (_.sessionStorage.is_supported())
    try {
      var e = this.get_config("name") + "_" + this.get_config("token"), n = "mp_tab_id_" + e, i = "mp_gen_new_tab_id_" + e;
      (_.sessionStorage.get(i) || !_.sessionStorage.get(n)) && _.sessionStorage.set(n, "$tab-" + _.UUID()), _.sessionStorage.set(i, "1"), this.tab_id = _.sessionStorage.get(n), xe.addEventListener("beforeunload", function() {
        _.sessionStorage.remove(i);
      });
    } catch (t) {
      this.report_error("Error initializing tab id", t);
    }
  else
    this.report_error("Session storage is not supported, cannot keep track of unique tab ID.");
};
X.prototype.get_tab_id = function() {
  return this.tab_id || null;
};
X.prototype._should_load_recorder = function() {
  var e = new ei(qd), n = this.get_tab_id();
  return e.init().then(function() {
    return e.getAll();
  }).then(function(i) {
    for (var t = 0; t < i.length; t++)
      if (Kd(i[t]) || i[t].tabId === n)
        return !0;
    return !1;
  }).catch(_.bind(function(i) {
    this.report_error("Error checking recording registry", i);
  }, this));
};
X.prototype._check_and_start_session_recording = zi(function(e) {
  if (!xe.MutationObserver) {
    _t.critical("Browser does not support MutationObserver; skipping session recording");
    return;
  }
  var n = _.bind(function(t) {
    var r = _.bind(function() {
      this._recorder = this._recorder || new xe.__mp_recorder(this), this._recorder.resumeRecording(t);
    }, this);
    _.isUndefined(xe.__mp_recorder) ? Yy(this.get_config("recorder_src"), r) : r();
  }, this), i = this.get_config("record_sessions_percent") > 0 && Math.random() * 100 <= this.get_config("record_sessions_percent");
  e || i ? n(!0) : this._should_load_recorder().then(function(t) {
    t && n(!1);
  });
});
X.prototype.start_session_recording = function() {
  this._check_and_start_session_recording(!0);
};
X.prototype.stop_session_recording = function() {
  this._recorder && this._recorder.stopRecording();
};
X.prototype.pause_session_recording = function() {
  this._recorder && this._recorder.pauseRecording();
};
X.prototype.resume_session_recording = function() {
  this._recorder && this._recorder.resumeRecording();
};
X.prototype.is_recording_heatmap_data = function() {
  return this._get_session_replay_id() && this.get_config("record_heatmap_data");
};
X.prototype.get_session_recording_properties = function() {
  var e = {}, n = this._get_session_replay_id();
  return n && (e.$mp_replay_id = n), e;
};
X.prototype.get_session_replay_url = function() {
  var e = null, n = this._get_session_replay_id();
  if (n) {
    var i = _.HTTPBuildQuery({
      replay_id: n,
      distinct_id: this.get_distinct_id(),
      token: this.get_config("token")
    });
    e = "https://mixpanel.com/projects/replay-redirect?" + i;
  }
  return e;
};
X.prototype._get_session_replay_id = function() {
  var e = null;
  return this._recorder && (e = this._recorder.replayId), e || null;
};
X.prototype.__get_recorder = function() {
  return this._recorder;
};
X.prototype._loaded = function() {
  if (this.get_config("loaded")(this), this._set_default_superprops(), this.people.set_once(this.persistence.get_referrer_info()), this.get_config("store_google") && this.get_config("stop_utm_persistence")) {
    var e = _.info.campaignParams(null);
    _.each(e, (function(n, i) {
      this.unregister(i);
    }).bind(this));
  }
};
X.prototype._set_default_superprops = function() {
  this.persistence.update_search_keyword(wt.referrer), this.get_config("store_google") && !this.get_config("stop_utm_persistence") && this.register(_.info.campaignParams()), this.get_config("save_referrer") && this.persistence.update_referrer_info(wt.referrer);
};
X.prototype._dom_loaded = function() {
  _.each(this.__dom_loaded_queue, function(e) {
    this._track_dom.apply(this, e);
  }, this), this.has_opted_out_tracking() || _.each(this.__request_queue, function(e) {
    this._send_request.apply(this, e);
  }, this), delete this.__dom_loaded_queue, delete this.__request_queue;
};
X.prototype._track_dom = function(e, n) {
  if (this.get_config("img"))
    return this.report_error("You can't use DOM tracking functions with img = true."), !1;
  if (!ex)
    return this.__dom_loaded_queue.push([e, n]), !1;
  var i = new e().init(this);
  return i.track.apply(i, n);
};
X.prototype._prepare_callback = function(e, n) {
  if (_.isUndefined(e))
    return null;
  if (Ko) {
    var i = function(s) {
      e(s, n);
    };
    return i;
  } else {
    var t = this._jsc, r = "" + Math.floor(Math.random() * 1e8), o = this.get_config("callback_fn") + "[" + r + "]";
    return t[r] = function(s) {
      delete t[r], e(s, n);
    }, o;
  }
};
X.prototype._send_request = function(e, n, i, t) {
  var r = !0;
  if (Qy)
    return this.__request_queue.push(arguments), r;
  var o = {
    method: this.get_config("api_method"),
    transport: this.get_config("api_transport"),
    verbose: this.get_config("verbose")
  }, s = null;
  !t && (_.isFunction(i) || typeof i == "string") && (t = i, i = null), i = _.extend(o, i || {}), Ko || (i.method = "GET");
  var c = i.method === "POST", f = Il && c && i.transport.toLowerCase() === "sendbeacon", d = i.verbose;
  n.verbose && (d = !0), this.get_config("test") && (n.test = 1), d && (n.verbose = 1), this.get_config("img") && (n.img = 1), Ko || (t ? n.callback = t : (d || this.get_config("test")) && (n.callback = "(function(){})")), n.ip = this.get_config("ip") ? 1 : 0, n._ = (/* @__PURE__ */ new Date()).getTime().toString(), c && (s = "data=" + encodeURIComponent(n.data), delete n.data), _.extend(n, this.get_config("api_extra_query_params")), e += "?" + _.HTTPBuildQuery(n);
  var p = this;
  if ("img" in n) {
    var g = wt.createElement("img");
    g.src = e, wt.body.appendChild(g);
  } else if (f) {
    try {
      r = Il(e, s);
    } catch (L) {
      p.report_error(L), r = !1;
    }
    try {
      t && t(r ? 1 : 0);
    } catch (L) {
      p.report_error(L);
    }
  } else if (Ko)
    try {
      var m = new XMLHttpRequest();
      m.open(i.method, e, !0);
      var S = this.get_config("xhr_headers");
      if (c && (S["Content-Type"] = "application/x-www-form-urlencoded"), _.each(S, function(L, $) {
        m.setRequestHeader($, L);
      }), i.timeout_ms && typeof m.timeout < "u") {
        m.timeout = i.timeout_ms;
        var x = (/* @__PURE__ */ new Date()).getTime();
      }
      m.withCredentials = !0, m.onreadystatechange = function() {
        if (m.readyState === 4)
          if (m.status === 200) {
            if (t)
              if (d) {
                var L;
                try {
                  L = _.JSONDecode(m.responseText);
                } catch (V) {
                  if (p.report_error(V), i.ignore_json_errors)
                    L = m.responseText;
                  else
                    return;
                }
                t(L);
              } else
                t(Number(m.responseText));
          } else {
            var $;
            if (m.timeout && !m.status && (/* @__PURE__ */ new Date()).getTime() - x >= m.timeout ? $ = "timeout" : $ = "Bad HTTP status: " + m.status + " " + m.statusText, p.report_error($), t)
              if (d) {
                var W = m.responseHeaders || {};
                t({ status: 0, httpStatusCode: m.status, error: $, retryAfter: W["Retry-After"] });
              } else
                t(0);
          }
      }, m.send(s);
    } catch (L) {
      p.report_error(L), r = !1;
    }
  else {
    var I = wt.createElement("script");
    I.type = "text/javascript", I.async = !0, I.defer = !0, I.src = e;
    var b = wt.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(I, b);
  }
  return r;
};
X.prototype._execute_array = function(e) {
  var n, i = [], t = [], r = [];
  _.each(e, function(s) {
    s && (n = s[0], _.isArray(n) ? r.push(s) : typeof s == "function" ? s.call(this) : _.isArray(s) && n === "alias" ? i.push(s) : _.isArray(s) && n.indexOf("track") !== -1 && typeof this[n] == "function" ? r.push(s) : t.push(s));
  }, this);
  var o = function(s, c) {
    _.each(s, function(f) {
      if (_.isArray(f[0])) {
        var d = c;
        _.each(f, function(p) {
          d = d[p[0]].apply(d, p.slice(1));
        });
      } else
        this[f[0]].apply(this, f.slice(1));
    }, c);
  };
  o(i, this), o(t, this), o(r, this);
};
X.prototype.are_batchers_initialized = function() {
  return !!this.request_batchers.events;
};
X.prototype.get_batcher_configs = function() {
  var e = "__mpq_" + this.get_config("token"), n = this.get_config("api_routes");
  return this._batcher_configs = this._batcher_configs || {
    events: { type: "events", endpoint: "/" + n.track, queue_key: e + "_ev" },
    people: { type: "people", endpoint: "/" + n.engage, queue_key: e + "_pp" },
    groups: { type: "groups", endpoint: "/" + n.groups, queue_key: e + "_gr" }
  }, this._batcher_configs;
};
X.prototype.init_batchers = function() {
  if (!this.are_batchers_initialized()) {
    var e = _.bind(function(i) {
      return new In(
        i.queue_key,
        {
          libConfig: this.config,
          errorReporter: this.get_config("error_reporter"),
          sendRequestFunc: _.bind(function(t, r, o) {
            this._send_request(
              this.get_config("api_host") + i.endpoint,
              this._encode_data_for_request(t),
              r,
              this._prepare_callback(o, t)
            );
          }, this),
          beforeSendHook: _.bind(function(t) {
            return this._run_hook("before_send_" + i.type, t);
          }, this),
          stopAllBatchingFunc: _.bind(this.stop_batch_senders, this),
          usePersistence: !0
        }
      );
    }, this), n = this.get_batcher_configs();
    this.request_batchers = {
      events: e(n.events),
      people: e(n.people),
      groups: e(n.groups)
    };
  }
  this.get_config("batch_autostart") && this.start_batch_senders();
};
X.prototype.start_batch_senders = function() {
  this._batchers_were_started = !0, this.are_batchers_initialized() && (this._batch_requests = !0, _.each(this.request_batchers, function(e) {
    e.start();
  }));
};
X.prototype.stop_batch_senders = function() {
  this._batch_requests = !1, _.each(this.request_batchers, function(e) {
    e.stop(), e.clear();
  });
};
X.prototype.push = function(e) {
  this._execute_array([e]);
};
X.prototype.disable = function(e) {
  typeof e > "u" ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e);
};
X.prototype._encode_data_for_request = function(e) {
  var n = ns(e);
  return this.get_config("api_payload_format") === Xy && (n = _.base64Encode(n)), { data: n };
};
X.prototype._track_or_batch = function(e, n) {
  var i = _.truncate(e.data, 255), t = e.endpoint, r = e.batcher, o = e.should_send_immediately, s = e.send_request_options || {};
  n = n || Ri;
  var c = !0, f = _.bind(function() {
    return s.skip_hooks || (i = this._run_hook("before_send_" + e.type, i)), i ? (_t.log("MIXPANEL REQUEST:"), _t.log(i), this._send_request(
      t,
      this._encode_data_for_request(i),
      s,
      this._prepare_callback(n, i)
    )) : null;
  }, this);
  return this._batch_requests && !o ? r.enqueue(i).then(function(d) {
    d ? n(1, i) : f();
  }) : c = f(), c && i;
};
X.prototype.track = zi(function(e, n, i, t) {
  !t && typeof i == "function" && (t = i, i = null), i = i || {};
  var r = i.transport;
  r && (i.transport = r);
  var o = i.send_immediately;
  if (typeof t != "function" && (t = Ri), _.isUndefined(e)) {
    this.report_error("No event name provided to mixpanel.track");
    return;
  }
  if (this._event_is_disabled(e)) {
    t(0);
    return;
  }
  n = _.extend({}, n), n.token = this.get_config("token");
  var s = this.persistence.remove_event_timer(e);
  if (!_.isUndefined(s)) {
    var c = (/* @__PURE__ */ new Date()).getTime() - s;
    n.$duration = parseFloat((c / 1e3).toFixed(3));
  }
  this._set_default_superprops();
  var f = this.get_config("track_marketing") ? _.info.marketingParams() : {};
  n = _.extend(
    {},
    _.info.properties({ mp_loader: this.get_config("mp_loader") }),
    f,
    this.persistence.properties(),
    this.unpersisted_superprops,
    this.get_session_recording_properties(),
    n
  );
  var d = this.get_config("property_blacklist");
  _.isArray(d) ? _.each(d, function(m) {
    delete n[m];
  }) : this.report_error("Invalid value for property_blacklist config: " + d);
  var p = {
    event: e,
    properties: n
  }, g = this._track_or_batch({
    type: "events",
    data: p,
    endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes").track,
    batcher: this.request_batchers.events,
    should_send_immediately: o,
    send_request_options: i
  }, t);
  return g;
});
X.prototype.set_group = zi(function(e, n, i) {
  _.isArray(n) || (n = [n]);
  var t = {};
  return t[e] = n, this.register(t), this.people.set(e, n, i);
});
X.prototype.add_group = zi(function(e, n, i) {
  var t = this.get_property(e), r = {};
  return t === void 0 ? (r[e] = [n], this.register(r)) : t.indexOf(n) === -1 && (t.push(n), r[e] = t, this.register(r)), this.people.union(e, n, i);
});
X.prototype.remove_group = zi(function(e, n, i) {
  var t = this.get_property(e);
  if (t !== void 0) {
    var r = t.indexOf(n);
    r > -1 && (t.splice(r, 1), this.register({ group_key: t })), t.length === 0 && this.unregister(e);
  }
  return this.people.remove(e, n, i);
});
X.prototype.track_with_groups = zi(function(e, n, i, t) {
  var r = _.extend({}, n || {});
  return _.each(i, function(o, s) {
    o != null && (r[s] = o);
  }), this.track(e, r, t);
});
X.prototype._create_map_key = function(e, n) {
  return e + "_" + JSON.stringify(n);
};
X.prototype._remove_group_from_cache = function(e, n) {
  delete this._cached_groups[this._create_map_key(e, n)];
};
X.prototype.get_group = function(e, n) {
  var i = this._create_map_key(e, n), t = this._cached_groups[i];
  return (t === void 0 || t._group_key !== e || t._group_id !== n) && (t = new Gt(), t._init(this, e, n), this._cached_groups[i] = t), t;
};
X.prototype.track_pageview = zi(function(e, n) {
  typeof e != "object" && (e = {}), n = n || {};
  var i = n.event_name || "$mp_web_page_view", t = _.extend(
    _.info.mpPageViewProperties(),
    _.info.campaignParams(),
    _.info.clickParams()
  ), r = _.extend(
    {},
    t,
    e
  );
  return this.track(i, r);
});
X.prototype.track_links = function() {
  return this._track_dom.call(this, is, arguments);
};
X.prototype.track_forms = function() {
  return this._track_dom.call(this, Xl, arguments);
};
X.prototype.time_event = function(e) {
  if (_.isUndefined(e)) {
    this.report_error("No event name provided to mixpanel.time_event");
    return;
  }
  this._event_is_disabled(e) || this.persistence.set_event_timer(e, (/* @__PURE__ */ new Date()).getTime());
};
var j4 = {
  persistent: !0
}, oh = function(e) {
  var n;
  return _.isObject(e) ? n = e : _.isUndefined(e) ? n = {} : n = { days: e }, _.extend({}, j4, n);
};
X.prototype.register = function(e, n) {
  var i = oh(n);
  i.persistent ? this.persistence.register(e, i.days) : _.extend(this.unpersisted_superprops, e);
};
X.prototype.register_once = function(e, n, i) {
  var t = oh(i);
  t.persistent ? this.persistence.register_once(e, n, t.days) : (typeof n > "u" && (n = "None"), _.each(e, function(r, o) {
    (!this.unpersisted_superprops.hasOwnProperty(o) || this.unpersisted_superprops[o] === n) && (this.unpersisted_superprops[o] = r);
  }, this));
};
X.prototype.unregister = function(e, n) {
  n = oh(n), n.persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e];
};
X.prototype._register_single = function(e, n) {
  var i = {};
  i[e] = n, this.register(i);
};
X.prototype.identify = function(e, n, i, t, r, o, s, c) {
  var f = this.get_distinct_id();
  if (e && f !== e) {
    if (typeof e == "string" && e.indexOf(ih) === 0)
      return this.report_error("distinct_id cannot have $device: prefix"), -1;
    this.register({ $user_id: e });
  }
  if (!this.get_property("$device_id")) {
    var d = f;
    this.register_once({
      $had_persisted_distinct_id: !0,
      $device_id: d
    }, "");
  }
  e !== f && e !== this.get_property(kl) && (this.unregister(kl), this.register({ distinct_id: e })), this._flags.identify_called = !0, this.people._flush(n, i, t, r, o, s, c), e !== f && this.track("$identify", {
    distinct_id: e,
    $anon_distinct_id: f
  }, { skip_hooks: !0 }), e !== f && this.flags.fetchFlags();
};
X.prototype.reset = function() {
  this.persistence.clear(), this._flags.identify_called = !1;
  var e = _.UUID();
  this.register_once({
    distinct_id: ih + e,
    $device_id: e
  }, ""), this.stop_session_recording(), this._check_and_start_session_recording();
};
X.prototype.get_distinct_id = function() {
  return this.get_property("distinct_id");
};
X.prototype.alias = function(e, n) {
  if (e === this.get_property(Ky))
    return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
  var i = this;
  return _.isUndefined(n) && (n = this.get_distinct_id()), e !== n ? (this._register_single(kl, e), this.track("$create_alias", {
    alias: e,
    distinct_id: n
  }, {
    skip_hooks: !0
  }, function() {
    i.identify(e);
  })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e), -1);
};
X.prototype.name_tag = function(e) {
  this._register_single("mp_name_tag", e);
};
X.prototype.set_config = function(e) {
  if (_.isObject(e)) {
    _.extend(this.config, e);
    var n = e.batch_size;
    n && _.each(this.request_batchers, function(i) {
      i.resetBatchSize();
    }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Wn.DEBUG = Wn.DEBUG || this.get_config("debug"), ("autocapture" in e || "record_heatmap_data" in e) && this.autocapture && this.autocapture.init();
  }
};
X.prototype.get_config = function(e) {
  return this.config[e];
};
X.prototype._run_hook = function(e) {
  var n = (this.config.hooks[e] || U4).apply(this, Oi.call(arguments, 1));
  return typeof n > "u" && (this.report_error(e + " hook did not return a value"), n = null), n;
};
X.prototype.get_property = function(e) {
  return this.persistence.load_prop([e]);
};
X.prototype.toString = function() {
  var e = this.get_config("name");
  return e !== An && (e = An + "." + e), e;
};
X.prototype._event_is_disabled = function(e) {
  return _.isBlockedUA(mi) || this._flags.disable_all_events || _.include(this.__disabled_events, e);
};
X.prototype._gdpr_init = function() {
  var e = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
  e && _.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({ persistence_type: "cookie" }) && this.opt_in_tracking({ enable_persistence: !1 }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({ persistence_type: "cookie" }) && this.opt_out_tracking({ clear_persistence: !1 }), this.clear_opt_in_out_tracking({
    persistence_type: "cookie",
    enable_persistence: !1
  })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({ clear_persistence: !0 }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || _.cookie.get("mp_optout")) && (_.cookie.remove("mp_optout"), this.opt_out_tracking({
    clear_persistence: this.get_config("opt_out_persistence_by_default")
  }));
};
X.prototype._gdpr_update_persistence = function(e) {
  var n;
  if (e && e.clear_persistence)
    n = !0;
  else if (e && e.enable_persistence)
    n = !1;
  else
    return;
  !this.get_config("disable_persistence") && this.persistence.disabled !== n && this.persistence.set_disabled(n), n ? (this.stop_batch_senders(), this.stop_session_recording()) : this._batchers_were_started && this.start_batch_senders();
};
X.prototype._gdpr_call_func = function(e, n) {
  return n = _.extend({
    track: _.bind(this.track, this),
    persistence_type: this.get_config("opt_out_tracking_persistence_type"),
    cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
    cookie_expiration: this.get_config("cookie_expiration"),
    cross_site_cookie: this.get_config("cross_site_cookie"),
    cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
    cookie_domain: this.get_config("cookie_domain"),
    secure_cookie: this.get_config("secure_cookie"),
    ignore_dnt: this.get_config("ignore_dnt")
  }, n), _.localStorage.is_supported() || (n.persistence_type = "cookie"), e(this.get_config("token"), {
    track: n.track,
    trackEventName: n.track_event_name,
    trackProperties: n.track_properties,
    persistenceType: n.persistence_type,
    persistencePrefix: n.cookie_prefix,
    cookieDomain: n.cookie_domain,
    cookieExpiration: n.cookie_expiration,
    crossSiteCookie: n.cross_site_cookie,
    crossSubdomainCookie: n.cross_subdomain_cookie,
    secureCookie: n.secure_cookie,
    ignoreDnt: n.ignore_dnt
  });
};
X.prototype.opt_in_tracking = function(e) {
  e = _.extend({
    enable_persistence: !0
  }, e), this._gdpr_call_func(l4, e), this._gdpr_update_persistence(e);
};
X.prototype.opt_out_tracking = function(e) {
  e = _.extend({
    clear_persistence: !0,
    delete_user: !0
  }, e), e.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(u4, e), this._gdpr_update_persistence(e);
};
X.prototype.has_opted_in_tracking = function(e) {
  return this._gdpr_call_func(f4, e);
};
X.prototype.has_opted_out_tracking = function(e) {
  return this._gdpr_call_func(Sy, e);
};
X.prototype.clear_opt_in_out_tracking = function(e) {
  e = _.extend({
    enable_persistence: !0
  }, e), this._gdpr_call_func(d4, e), this._gdpr_update_persistence(e);
};
X.prototype.report_error = function(e, n) {
  _t.error.apply(_t.error, arguments);
  try {
    !n && !(e instanceof Error) && (e = new Error(e)), this.get_config("error_reporter")(e, n);
  } catch (i) {
    _t.error(i);
  }
};
X.prototype.init = X.prototype.init;
X.prototype.reset = X.prototype.reset;
X.prototype.disable = X.prototype.disable;
X.prototype.time_event = X.prototype.time_event;
X.prototype.track = X.prototype.track;
X.prototype.track_links = X.prototype.track_links;
X.prototype.track_forms = X.prototype.track_forms;
X.prototype.track_pageview = X.prototype.track_pageview;
X.prototype.register = X.prototype.register;
X.prototype.register_once = X.prototype.register_once;
X.prototype.unregister = X.prototype.unregister;
X.prototype.identify = X.prototype.identify;
X.prototype.alias = X.prototype.alias;
X.prototype.name_tag = X.prototype.name_tag;
X.prototype.set_config = X.prototype.set_config;
X.prototype.get_config = X.prototype.get_config;
X.prototype.get_property = X.prototype.get_property;
X.prototype.get_distinct_id = X.prototype.get_distinct_id;
X.prototype.toString = X.prototype.toString;
X.prototype.opt_out_tracking = X.prototype.opt_out_tracking;
X.prototype.opt_in_tracking = X.prototype.opt_in_tracking;
X.prototype.has_opted_out_tracking = X.prototype.has_opted_out_tracking;
X.prototype.has_opted_in_tracking = X.prototype.has_opted_in_tracking;
X.prototype.clear_opt_in_out_tracking = X.prototype.clear_opt_in_out_tracking;
X.prototype.get_group = X.prototype.get_group;
X.prototype.set_group = X.prototype.set_group;
X.prototype.add_group = X.prototype.add_group;
X.prototype.remove_group = X.prototype.remove_group;
X.prototype.track_with_groups = X.prototype.track_with_groups;
X.prototype.start_batch_senders = X.prototype.start_batch_senders;
X.prototype.stop_batch_senders = X.prototype.stop_batch_senders;
X.prototype.start_session_recording = X.prototype.start_session_recording;
X.prototype.stop_session_recording = X.prototype.stop_session_recording;
X.prototype.pause_session_recording = X.prototype.pause_session_recording;
X.prototype.resume_session_recording = X.prototype.resume_session_recording;
X.prototype.get_session_recording_properties = X.prototype.get_session_recording_properties;
X.prototype.get_session_replay_url = X.prototype.get_session_replay_url;
X.prototype.get_tab_id = X.prototype.get_tab_id;
X.prototype.DEFAULT_API_ROUTES = Jy;
X.prototype.__get_recorder = X.prototype.__get_recorder;
st.prototype.properties = st.prototype.properties;
st.prototype.update_search_keyword = st.prototype.update_search_keyword;
st.prototype.update_referrer_info = st.prototype.update_referrer_info;
st.prototype.get_cross_subdomain = st.prototype.get_cross_subdomain;
st.prototype.clear = st.prototype.clear;
var Ho = {}, $4 = function() {
  _.each(Ho, function(e, n) {
    n !== An && (Nr[n] = e);
  }), Nr._ = _;
}, W4 = function() {
  Nr.init = function(e, n, i) {
    if (i)
      return Nr[i] || (Nr[i] = Ho[i] = sd(e, n, i), Nr[i]._loaded()), Nr[i];
    var t = Nr;
    Ho[An] ? t = Ho[An] : e && (t = sd(e, n, An), t._loaded(), Ho[An] = t), Nr = t, nh === L4 && (xe[An] = Nr), $4();
  };
}, q4 = function() {
  function e() {
    e.done || (e.done = !0, ex = !0, Qy = !1, _.each(Ho, function(t) {
      t._dom_loaded();
    }));
  }
  function n() {
    try {
      wt.documentElement.doScroll("left");
    } catch {
      setTimeout(n, 1);
      return;
    }
    e();
  }
  if (wt.addEventListener)
    wt.readyState === "complete" ? e() : wt.addEventListener("DOMContentLoaded", e, !1);
  else if (wt.attachEvent) {
    wt.attachEvent("onreadystatechange", e);
    var i = !1;
    try {
      i = xe.frameElement === null;
    } catch {
    }
    wt.documentElement.doScroll && i && n();
  }
  _.register_event(xe, "load", e, !0);
};
function V4(e) {
  return Yy = e, nh = Zy, Nr = new X(), W4(), Nr.init(), q4(), Nr;
}
function H4(e, n) {
  n();
}
V4(H4);
var G4 = { exports: {} };
const K4 = {}, Y4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K4
}, Symbol.toStringTag, { value: "Module" })), Z4 = /* @__PURE__ */ d_(Y4);
(function(e, n) {
  (function(i, t) {
    e.exports = t();
  })(Gc, function() {
    var i = 0;
    function t(h) {
      return "__private_" + i++ + "_" + h;
    }
    function r(h, a) {
      if (!Object.prototype.hasOwnProperty.call(h, a))
        throw new TypeError("attempted to use private field on non-instance");
      return h;
    }
    const o = "clevertap-prod.com", s = "https:", c = "eu1";
    var f = t("accountId"), d = t("region"), p = t("targetDomain"), g = t("dcSdkversion"), m = t("token");
    class S {
      constructor() {
        let {
          id: a
        } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o, v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
        Object.defineProperty(this, f, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, d, {
          writable: !0,
          value: ""
        }), Object.defineProperty(this, p, {
          writable: !0,
          value: o
        }), Object.defineProperty(this, g, {
          writable: !0,
          value: ""
        }), Object.defineProperty(this, m, {
          writable: !0,
          value: ""
        }), this.id = a, l && (this.region = l), u && (this.targetDomain = u), v && (this.token = v);
      }
      get id() {
        return r(this, f)[f];
      }
      set id(a) {
        r(this, f)[f] = a;
      }
      get region() {
        return r(this, d)[d];
      }
      set region(a) {
        r(this, d)[d] = a;
      }
      get dcSDKVersion() {
        return r(this, g)[g];
      }
      set dcSDKVersion(a) {
        r(this, g)[g] = a;
      }
      get targetDomain() {
        return r(this, p)[p];
      }
      set targetDomain(a) {
        r(this, p)[p] = a;
      }
      get token() {
        return r(this, m)[m];
      }
      set token(a) {
        r(this, m)[m] = a;
      }
      get finalTargetDomain() {
        return this.region ? "".concat(this.region, ".").concat(this.targetDomain) : this.targetDomain === o ? "".concat(c, ".").concat(this.targetDomain) : this.targetDomain;
      }
      get dataPostPEURL() {
        return "".concat(s, "//").concat(this.finalTargetDomain, "/defineVars");
      }
      get dataPostURL() {
        return "".concat(s, "//").concat(this.finalTargetDomain, "/a?t=96");
      }
      get recorderURL() {
        return "".concat(s, "//").concat(this.finalTargetDomain, "/r?r=1");
      }
      get emailURL() {
        return "".concat(s, "//").concat(this.finalTargetDomain, "/e?r=1");
      }
    }
    const x = new RegExp(`^\\s+|\\.|:|\\$|'|"|\\\\|\\s+$`, "g"), I = new RegExp(`^\\s+|'|"|\\\\|\\s+$`, "g"), b = new RegExp("'", "g"), L = "clear", $ = "Charged ID", W = "WZRK_CHARGED_ID", V = "WZRK_G", Q = "WZRK_QC", ie = "WZRK_K", ye = "WZRK_CAMP", ge = "WZRK_CAMP_G", Ie = "WZRK_S", $e = 60 * 20, Oe = "WZRK_EV", Me = "WZRK_META", ke = "WZRK_PR", ut = "WZRK_ACCOUNT_ID", Ue = "WZRK_ARP", mt = "WZRK_L", xt = "global", Te = "display", Ot = "WZRK_WPR", Bt = "optOut", br = "ct_optout", Kt = ":OO", Lt = "useIP", Ut = "WZRK_X", ar = 100, qe = "isOUL", Mt = "push", we = "ping", Ge = 86400 * 365, bt = 200, wr = 2 * 60 * 1e3, Tr = 5 * 60 * 1e3, er = "2", cr = "cUsY", Tt = "wzrk_", tr = "wzrk_id", Mr = "Notification Viewed", pr = "Notification Clicked", zt = "WZRK_FPU", _r = "WZRK_PSD", Vr = "$incr", Dn = "$decr", Cr = "$set", pn = "$add", Sr = "$remove", je = "$delete", Ve = "WZRK_INBOX_CONFIG", Fe = "WZRK_INBOX", ht = 15, lr = "WZRK_PE", rr = 1e3, Qe = 1e3 * 60 * 10, Be = "wzrk_fetch", ur = "WZRK_PUSH_CONFIG", tt = "WZRK_APPLICATION_SERVER_KEY_RECIEVED", fr = "WZRK_WEB_PUSH_CONFIG_RECEIVED", Pe = "WZRK_NOTIFICATION_PUSH_DEFERRED", pt = "vapid_migration_prompt_shown", ri = "notif_last_time", Vn = 300, qi = "wzrk_wrapper", Ci = "pnWrapper", Io = "WZRK_POPUP_LOADING", Jl = "ctCustomHtmlPreview", Ba = "_w_", Yt = {
      KV_PAIR: 1,
      BANNER: 2,
      CAROUSEL: 3,
      VISUAL_BUILDER: 4,
      CUSTOM_HTML: 5,
      JSON: 6
    }, Vi = {
      HTML: "html",
      FORM: "form",
      JSON: "json"
    }, Hi = {
      EXIT_INTENT: 1,
      WEB_NATIVE_DISPLAY: 2,
      FOOTER_NOTIFICATION: 0,
      FOOTER_NOTIFICATION_2: null
    }, eu = ["Stayed", "UTM Visited", "App Launched", "Notification Sent", Mr, pr], Ta = [ie, Ut, ke], hs = {
      OPEN_LINK: "url",
      OPEN_LINK_AND_CLOSE: "urlCloseNotification"
    }, Si = (h) => typeof h == "string" || h instanceof String, vn = (h) => Object.prototype.toString.call(h) === "[object Object]", Gi = (h) => typeof h == "object" && h instanceof Date, gn = (h) => {
      for (const a in h)
        if (h.hasOwnProperty(a))
          return !1;
      return !0;
    }, Ma = (h) => !isNaN(parseFloat(h)) && isFinite(h), j = (h) => /^-?[\d.]+(?:e-?\d+)?$/.test(h) && typeof h == "number", se = (h) => !(h == null || h === "undefined"), be = (h, a) => {
      if (typeof h == "object") {
        for (const l in h)
          if (h.hasOwnProperty(l)) {
            const u = be(h[l], a);
            let v;
            v = ze(l, x), v.length > 1024 && (v = v.substring(0, 1024), a.reportError(520, v + "... length exceeded 1024 chars. Trimmed.")), delete h[l], h[v] = u;
          }
      } else {
        let l;
        return Si(h) ? (l = ze(h, I), l.length > 1024 && (l = l.substring(0, 1024), a.reportError(521, l + "... length exceeded 1024 chars. Trimmed."))) : l = h, l;
      }
      return h;
    }, ze = (h, a) => h.replace(a, ""), vt = () => {
      const h = /* @__PURE__ */ new Date();
      return h.getFullYear() + "" + h.getMonth() + h.getDay();
    }, ft = () => Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), rt = (h) => "$D_" + Math.round(h.getTime() / 1e3), nt = (h) => {
      if (Ar(h))
        return "$D_" + h;
    }, Ar = (h) => {
      const a = /^(\d{4})(\d{2})(\d{2})$/.exec(h);
      if (a == null) return !1;
      const l = a[3], u = a[2] - 1, v = a[1], y = new Date(v, u, l);
      return y.getDate() == l && y.getMonth() == u && y.getFullYear() == v;
    };
    var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Gc < "u" ? Gc : typeof self < "u" ? self : {}, $t = { exports: {} };
    function on(h) {
      throw new Error('Could not dynamically require "' + h + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }
    var Rn = { exports: {} }, ni = Rn.exports, kr;
    function it() {
      return kr || (kr = 1, function(h, a) {
        (function(l, u) {
          h.exports = u();
        })(ni, function() {
          var l = l || function(u, v) {
            var y;
            if (typeof window < "u" && window.crypto && (y = window.crypto), typeof self < "u" && self.crypto && (y = self.crypto), typeof globalThis < "u" && globalThis.crypto && (y = globalThis.crypto), !y && typeof window < "u" && window.msCrypto && (y = window.msCrypto), !y && typeof jt < "u" && jt.crypto && (y = jt.crypto), !y && typeof on == "function")
              try {
                y = Z4;
              } catch {
              }
            var k = function() {
              if (y) {
                if (typeof y.getRandomValues == "function")
                  try {
                    return y.getRandomValues(new Uint32Array(1))[0];
                  } catch {
                  }
                if (typeof y.randomBytes == "function")
                  try {
                    return y.randomBytes(4).readInt32LE();
                  } catch {
                  }
              }
              throw new Error("Native crypto module could not be used to get secure random number.");
            }, C = Object.create || /* @__PURE__ */ function() {
              function D() {
              }
              return function(B) {
                var M;
                return D.prototype = B, M = new D(), D.prototype = null, M;
              };
            }(), E = {}, w = E.lib = {}, A = w.Base = /* @__PURE__ */ function() {
              return {
                /**
                 * Creates a new object that inherits from this object.
                 *
                 * @param {Object} overrides Properties to copy into the new object.
                 *
                 * @return {Object} The new object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var MyType = CryptoJS.lib.Base.extend({
                 *         field: 'value',
                 *
                 *         method: function () {
                 *         }
                 *     });
                 */
                extend: function(D) {
                  var B = C(this);
                  return D && B.mixIn(D), (!B.hasOwnProperty("init") || this.init === B.init) && (B.init = function() {
                    B.$super.init.apply(this, arguments);
                  }), B.init.prototype = B, B.$super = this, B;
                },
                /**
                 * Extends this object and runs the init method.
                 * Arguments to create() will be passed to init().
                 *
                 * @return {Object} The new object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var instance = MyType.create();
                 */
                create: function() {
                  var D = this.extend();
                  return D.init.apply(D, arguments), D;
                },
                /**
                 * Initializes a newly created object.
                 * Override this method to add some logic when your objects are created.
                 *
                 * @example
                 *
                 *     var MyType = CryptoJS.lib.Base.extend({
                 *         init: function () {
                 *             // ...
                 *         }
                 *     });
                 */
                init: function() {
                },
                /**
                 * Copies properties into this object.
                 *
                 * @param {Object} properties The properties to mix in.
                 *
                 * @example
                 *
                 *     MyType.mixIn({
                 *         field: 'value'
                 *     });
                 */
                mixIn: function(D) {
                  for (var B in D)
                    D.hasOwnProperty(B) && (this[B] = D[B]);
                  D.hasOwnProperty("toString") && (this.toString = D.toString);
                },
                /**
                 * Creates a copy of this object.
                 *
                 * @return {Object} The clone.
                 *
                 * @example
                 *
                 *     var clone = instance.clone();
                 */
                clone: function() {
                  return this.init.prototype.extend(this);
                }
              };
            }(), N = w.WordArray = A.extend({
              /**
               * Initializes a newly created word array.
               *
               * @param {Array} words (Optional) An array of 32-bit words.
               * @param {number} sigBytes (Optional) The number of significant bytes in the words.
               *
               * @example
               *
               *     var wordArray = CryptoJS.lib.WordArray.create();
               *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
               *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
               */
              init: function(D, B) {
                D = this.words = D || [], B != v ? this.sigBytes = B : this.sigBytes = D.length * 4;
              },
              /**
               * Converts this word array to a string.
               *
               * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
               *
               * @return {string} The stringified word array.
               *
               * @example
               *
               *     var string = wordArray + '';
               *     var string = wordArray.toString();
               *     var string = wordArray.toString(CryptoJS.enc.Utf8);
               */
              toString: function(D) {
                return (D || R).stringify(this);
              },
              /**
               * Concatenates a word array to this word array.
               *
               * @param {WordArray} wordArray The word array to append.
               *
               * @return {WordArray} This word array.
               *
               * @example
               *
               *     wordArray1.concat(wordArray2);
               */
              concat: function(D) {
                var B = this.words, M = D.words, G = this.sigBytes, K = D.sigBytes;
                if (this.clamp(), G % 4)
                  for (var Z = 0; Z < K; Z++) {
                    var re = M[Z >>> 2] >>> 24 - Z % 4 * 8 & 255;
                    B[G + Z >>> 2] |= re << 24 - (G + Z) % 4 * 8;
                  }
                else
                  for (var pe = 0; pe < K; pe += 4)
                    B[G + pe >>> 2] = M[pe >>> 2];
                return this.sigBytes += K, this;
              },
              /**
               * Removes insignificant bits.
               *
               * @example
               *
               *     wordArray.clamp();
               */
              clamp: function() {
                var D = this.words, B = this.sigBytes;
                D[B >>> 2] &= 4294967295 << 32 - B % 4 * 8, D.length = u.ceil(B / 4);
              },
              /**
               * Creates a copy of this word array.
               *
               * @return {WordArray} The clone.
               *
               * @example
               *
               *     var clone = wordArray.clone();
               */
              clone: function() {
                var D = A.clone.call(this);
                return D.words = this.words.slice(0), D;
              },
              /**
               * Creates a word array filled with random bytes.
               *
               * @param {number} nBytes The number of random bytes to generate.
               *
               * @return {WordArray} The random word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.lib.WordArray.random(16);
               */
              random: function(D) {
                for (var B = [], M = 0; M < D; M += 4)
                  B.push(k());
                return new N.init(B, D);
              }
            }), O = E.enc = {}, R = O.Hex = {
              /**
               * Converts a word array to a hex string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The hex string.
               *
               * @static
               *
               * @example
               *
               *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
               */
              stringify: function(D) {
                for (var B = D.words, M = D.sigBytes, G = [], K = 0; K < M; K++) {
                  var Z = B[K >>> 2] >>> 24 - K % 4 * 8 & 255;
                  G.push((Z >>> 4).toString(16)), G.push((Z & 15).toString(16));
                }
                return G.join("");
              },
              /**
               * Converts a hex string to a word array.
               *
               * @param {string} hexStr The hex string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
               */
              parse: function(D) {
                for (var B = D.length, M = [], G = 0; G < B; G += 2)
                  M[G >>> 3] |= parseInt(D.substr(G, 2), 16) << 24 - G % 8 * 4;
                return new N.init(M, B / 2);
              }
            }, T = O.Latin1 = {
              /**
               * Converts a word array to a Latin1 string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The Latin1 string.
               *
               * @static
               *
               * @example
               *
               *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
               */
              stringify: function(D) {
                for (var B = D.words, M = D.sigBytes, G = [], K = 0; K < M; K++) {
                  var Z = B[K >>> 2] >>> 24 - K % 4 * 8 & 255;
                  G.push(String.fromCharCode(Z));
                }
                return G.join("");
              },
              /**
               * Converts a Latin1 string to a word array.
               *
               * @param {string} latin1Str The Latin1 string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
               */
              parse: function(D) {
                for (var B = D.length, M = [], G = 0; G < B; G++)
                  M[G >>> 2] |= (D.charCodeAt(G) & 255) << 24 - G % 4 * 8;
                return new N.init(M, B);
              }
            }, F = O.Utf8 = {
              /**
               * Converts a word array to a UTF-8 string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The UTF-8 string.
               *
               * @static
               *
               * @example
               *
               *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
               */
              stringify: function(D) {
                try {
                  return decodeURIComponent(escape(T.stringify(D)));
                } catch {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              /**
               * Converts a UTF-8 string to a word array.
               *
               * @param {string} utf8Str The UTF-8 string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
               */
              parse: function(D) {
                return T.parse(unescape(encodeURIComponent(D)));
              }
            }, U = w.BufferedBlockAlgorithm = A.extend({
              /**
               * Resets this block algorithm's data buffer to its initial state.
               *
               * @example
               *
               *     bufferedBlockAlgorithm.reset();
               */
              reset: function() {
                this._data = new N.init(), this._nDataBytes = 0;
              },
              /**
               * Adds new data to this block algorithm's buffer.
               *
               * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
               *
               * @example
               *
               *     bufferedBlockAlgorithm._append('data');
               *     bufferedBlockAlgorithm._append(wordArray);
               */
              _append: function(D) {
                typeof D == "string" && (D = F.parse(D)), this._data.concat(D), this._nDataBytes += D.sigBytes;
              },
              /**
               * Processes available data blocks.
               *
               * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
               *
               * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
               *
               * @return {WordArray} The processed data.
               *
               * @example
               *
               *     var processedData = bufferedBlockAlgorithm._process();
               *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
               */
              _process: function(D) {
                var B, M = this._data, G = M.words, K = M.sigBytes, Z = this.blockSize, re = Z * 4, pe = K / re;
                D ? pe = u.ceil(pe) : pe = u.max((pe | 0) - this._minBufferSize, 0);
                var Y = pe * Z, J = u.min(Y * 4, K);
                if (Y) {
                  for (var fe = 0; fe < Y; fe += Z)
                    this._doProcessBlock(G, fe);
                  B = G.splice(0, Y), M.sigBytes -= J;
                }
                return new N.init(B, J);
              },
              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = bufferedBlockAlgorithm.clone();
               */
              clone: function() {
                var D = A.clone.call(this);
                return D._data = this._data.clone(), D;
              },
              _minBufferSize: 0
            });
            w.Hasher = U.extend({
              /**
               * Configuration options.
               */
              cfg: A.extend(),
              /**
               * Initializes a newly created hasher.
               *
               * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
               *
               * @example
               *
               *     var hasher = CryptoJS.algo.SHA256.create();
               */
              init: function(D) {
                this.cfg = this.cfg.extend(D), this.reset();
              },
              /**
               * Resets this hasher to its initial state.
               *
               * @example
               *
               *     hasher.reset();
               */
              reset: function() {
                U.reset.call(this), this._doReset();
              },
              /**
               * Updates this hasher with a message.
               *
               * @param {WordArray|string} messageUpdate The message to append.
               *
               * @return {Hasher} This hasher.
               *
               * @example
               *
               *     hasher.update('message');
               *     hasher.update(wordArray);
               */
              update: function(D) {
                return this._append(D), this._process(), this;
              },
              /**
               * Finalizes the hash computation.
               * Note that the finalize operation is effectively a destructive, read-once operation.
               *
               * @param {WordArray|string} messageUpdate (Optional) A final message update.
               *
               * @return {WordArray} The hash.
               *
               * @example
               *
               *     var hash = hasher.finalize();
               *     var hash = hasher.finalize('message');
               *     var hash = hasher.finalize(wordArray);
               */
              finalize: function(D) {
                D && this._append(D);
                var B = this._doFinalize();
                return B;
              },
              blockSize: 16,
              /**
               * Creates a shortcut function to a hasher's object interface.
               *
               * @param {Hasher} hasher The hasher to create a helper for.
               *
               * @return {Function} The shortcut function.
               *
               * @static
               *
               * @example
               *
               *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
               */
              _createHelper: function(D) {
                return function(B, M) {
                  return new D.init(M).finalize(B);
                };
              },
              /**
               * Creates a shortcut function to the HMAC's object interface.
               *
               * @param {Hasher} hasher The hasher to use in this HMAC helper.
               *
               * @return {Function} The shortcut function.
               *
               * @static
               *
               * @example
               *
               *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
               */
              _createHmacHelper: function(D) {
                return function(B, M) {
                  return new P.HMAC.init(D, M).finalize(B);
                };
              }
            });
            var P = E.algo = {};
            return E;
          }(Math);
          return l;
        });
      }(Rn)), Rn.exports;
    }
    var Oo = { exports: {} }, tu = Oo.exports, lh;
    function Fa() {
      return lh || (lh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(tu, function(l) {
          return function(u) {
            var v = l, y = v.lib, k = y.Base, C = y.WordArray, E = v.x64 = {};
            E.Word = k.extend({
              /**
               * Initializes a newly created 64-bit word.
               *
               * @param {number} high The high 32 bits.
               * @param {number} low The low 32 bits.
               *
               * @example
               *
               *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
               */
              init: function(w, A) {
                this.high = w, this.low = A;
              }
              /**
               * Bitwise NOTs this word.
               *
               * @return {X64Word} A new x64-Word object after negating.
               *
               * @example
               *
               *     var negated = x64Word.not();
               */
              // not: function () {
              // var high = ~this.high;
              // var low = ~this.low;
              // return X64Word.create(high, low);
              // },
              /**
               * Bitwise ANDs this word with the passed word.
               *
               * @param {X64Word} word The x64-Word to AND with this word.
               *
               * @return {X64Word} A new x64-Word object after ANDing.
               *
               * @example
               *
               *     var anded = x64Word.and(anotherX64Word);
               */
              // and: function (word) {
              // var high = this.high & word.high;
              // var low = this.low & word.low;
              // return X64Word.create(high, low);
              // },
              /**
               * Bitwise ORs this word with the passed word.
               *
               * @param {X64Word} word The x64-Word to OR with this word.
               *
               * @return {X64Word} A new x64-Word object after ORing.
               *
               * @example
               *
               *     var ored = x64Word.or(anotherX64Word);
               */
              // or: function (word) {
              // var high = this.high | word.high;
              // var low = this.low | word.low;
              // return X64Word.create(high, low);
              // },
              /**
               * Bitwise XORs this word with the passed word.
               *
               * @param {X64Word} word The x64-Word to XOR with this word.
               *
               * @return {X64Word} A new x64-Word object after XORing.
               *
               * @example
               *
               *     var xored = x64Word.xor(anotherX64Word);
               */
              // xor: function (word) {
              // var high = this.high ^ word.high;
              // var low = this.low ^ word.low;
              // return X64Word.create(high, low);
              // },
              /**
               * Shifts this word n bits to the left.
               *
               * @param {number} n The number of bits to shift.
               *
               * @return {X64Word} A new x64-Word object after shifting.
               *
               * @example
               *
               *     var shifted = x64Word.shiftL(25);
               */
              // shiftL: function (n) {
              // if (n < 32) {
              // var high = (this.high << n) | (this.low >>> (32 - n));
              // var low = this.low << n;
              // } else {
              // var high = this.low << (n - 32);
              // var low = 0;
              // }
              // return X64Word.create(high, low);
              // },
              /**
               * Shifts this word n bits to the right.
               *
               * @param {number} n The number of bits to shift.
               *
               * @return {X64Word} A new x64-Word object after shifting.
               *
               * @example
               *
               *     var shifted = x64Word.shiftR(7);
               */
              // shiftR: function (n) {
              // if (n < 32) {
              // var low = (this.low >>> n) | (this.high << (32 - n));
              // var high = this.high >>> n;
              // } else {
              // var low = this.high >>> (n - 32);
              // var high = 0;
              // }
              // return X64Word.create(high, low);
              // },
              /**
               * Rotates this word n bits to the left.
               *
               * @param {number} n The number of bits to rotate.
               *
               * @return {X64Word} A new x64-Word object after rotating.
               *
               * @example
               *
               *     var rotated = x64Word.rotL(25);
               */
              // rotL: function (n) {
              // return this.shiftL(n).or(this.shiftR(64 - n));
              // },
              /**
               * Rotates this word n bits to the right.
               *
               * @param {number} n The number of bits to rotate.
               *
               * @return {X64Word} A new x64-Word object after rotating.
               *
               * @example
               *
               *     var rotated = x64Word.rotR(7);
               */
              // rotR: function (n) {
              // return this.shiftR(n).or(this.shiftL(64 - n));
              // },
              /**
               * Adds this word with the passed word.
               *
               * @param {X64Word} word The x64-Word to add with this word.
               *
               * @return {X64Word} A new x64-Word object after adding.
               *
               * @example
               *
               *     var added = x64Word.add(anotherX64Word);
               */
              // add: function (word) {
              // var low = (this.low + word.low) | 0;
              // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
              // var high = (this.high + word.high + carry) | 0;
              // return X64Word.create(high, low);
              // }
            }), E.WordArray = k.extend({
              /**
               * Initializes a newly created word array.
               *
               * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
               * @param {number} sigBytes (Optional) The number of significant bytes in the words.
               *
               * @example
               *
               *     var wordArray = CryptoJS.x64.WordArray.create();
               *
               *     var wordArray = CryptoJS.x64.WordArray.create([
               *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
               *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
               *     ]);
               *
               *     var wordArray = CryptoJS.x64.WordArray.create([
               *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
               *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
               *     ], 10);
               */
              init: function(w, A) {
                w = this.words = w || [], A != u ? this.sigBytes = A : this.sigBytes = w.length * 8;
              },
              /**
               * Converts this 64-bit word array to a 32-bit word array.
               *
               * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
               *
               * @example
               *
               *     var x32WordArray = x64WordArray.toX32();
               */
              toX32: function() {
                for (var w = this.words, A = w.length, N = [], O = 0; O < A; O++) {
                  var R = w[O];
                  N.push(R.high), N.push(R.low);
                }
                return C.create(N, this.sigBytes);
              },
              /**
               * Creates a copy of this word array.
               *
               * @return {X64WordArray} The clone.
               *
               * @example
               *
               *     var clone = x64WordArray.clone();
               */
              clone: function() {
                for (var w = k.clone.call(this), A = w.words = this.words.slice(0), N = A.length, O = 0; O < N; O++)
                  A[O] = A[O].clone();
                return w;
              }
            });
          }(), l;
        });
      }(Oo)), Oo.exports;
    }
    var Na = { exports: {} }, tb = Na.exports, uh;
    function rb() {
      return uh || (uh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(tb, function(l) {
          return function() {
            if (typeof ArrayBuffer == "function") {
              var u = l, v = u.lib, y = v.WordArray, k = y.init, C = y.init = function(E) {
                if (E instanceof ArrayBuffer && (E = new Uint8Array(E)), (E instanceof Int8Array || typeof Uint8ClampedArray < "u" && E instanceof Uint8ClampedArray || E instanceof Int16Array || E instanceof Uint16Array || E instanceof Int32Array || E instanceof Uint32Array || E instanceof Float32Array || E instanceof Float64Array) && (E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength)), E instanceof Uint8Array) {
                  for (var w = E.byteLength, A = [], N = 0; N < w; N++)
                    A[N >>> 2] |= E[N] << 24 - N % 4 * 8;
                  k.call(this, A, w);
                } else
                  k.apply(this, arguments);
              };
              C.prototype = y;
            }
          }(), l.lib.WordArray;
        });
      }(Na)), Na.exports;
    }
    var La = { exports: {} }, nb = La.exports, fh;
    function ib() {
      return fh || (fh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(nb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.WordArray, k = u.enc;
            k.Utf16 = k.Utf16BE = {
              /**
               * Converts a word array to a UTF-16 BE string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The UTF-16 BE string.
               *
               * @static
               *
               * @example
               *
               *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
               */
              stringify: function(E) {
                for (var w = E.words, A = E.sigBytes, N = [], O = 0; O < A; O += 2) {
                  var R = w[O >>> 2] >>> 16 - O % 4 * 8 & 65535;
                  N.push(String.fromCharCode(R));
                }
                return N.join("");
              },
              /**
               * Converts a UTF-16 BE string to a word array.
               *
               * @param {string} utf16Str The UTF-16 BE string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
               */
              parse: function(E) {
                for (var w = E.length, A = [], N = 0; N < w; N++)
                  A[N >>> 1] |= E.charCodeAt(N) << 16 - N % 2 * 16;
                return y.create(A, w * 2);
              }
            }, k.Utf16LE = {
              /**
               * Converts a word array to a UTF-16 LE string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The UTF-16 LE string.
               *
               * @static
               *
               * @example
               *
               *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
               */
              stringify: function(E) {
                for (var w = E.words, A = E.sigBytes, N = [], O = 0; O < A; O += 2) {
                  var R = C(w[O >>> 2] >>> 16 - O % 4 * 8 & 65535);
                  N.push(String.fromCharCode(R));
                }
                return N.join("");
              },
              /**
               * Converts a UTF-16 LE string to a word array.
               *
               * @param {string} utf16Str The UTF-16 LE string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
               */
              parse: function(E) {
                for (var w = E.length, A = [], N = 0; N < w; N++)
                  A[N >>> 1] |= C(E.charCodeAt(N) << 16 - N % 2 * 16);
                return y.create(A, w * 2);
              }
            };
            function C(E) {
              return E << 8 & 4278255360 | E >>> 8 & 16711935;
            }
          }(), l.enc.Utf16;
        });
      }(La)), La.exports;
    }
    var Ua = { exports: {} }, ob = Ua.exports, dh;
    function Ki() {
      return dh || (dh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(ob, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.WordArray, k = u.enc;
            k.Base64 = {
              /**
               * Converts a word array to a Base64 string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The Base64 string.
               *
               * @static
               *
               * @example
               *
               *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
               */
              stringify: function(E) {
                var w = E.words, A = E.sigBytes, N = this._map;
                E.clamp();
                for (var O = [], R = 0; R < A; R += 3)
                  for (var T = w[R >>> 2] >>> 24 - R % 4 * 8 & 255, F = w[R + 1 >>> 2] >>> 24 - (R + 1) % 4 * 8 & 255, U = w[R + 2 >>> 2] >>> 24 - (R + 2) % 4 * 8 & 255, P = T << 16 | F << 8 | U, D = 0; D < 4 && R + D * 0.75 < A; D++)
                    O.push(N.charAt(P >>> 6 * (3 - D) & 63));
                var B = N.charAt(64);
                if (B)
                  for (; O.length % 4; )
                    O.push(B);
                return O.join("");
              },
              /**
               * Converts a Base64 string to a word array.
               *
               * @param {string} base64Str The Base64 string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
               */
              parse: function(E) {
                var w = E.length, A = this._map, N = this._reverseMap;
                if (!N) {
                  N = this._reverseMap = [];
                  for (var O = 0; O < A.length; O++)
                    N[A.charCodeAt(O)] = O;
                }
                var R = A.charAt(64);
                if (R) {
                  var T = E.indexOf(R);
                  T !== -1 && (w = T);
                }
                return C(E, w, N);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function C(E, w, A) {
              for (var N = [], O = 0, R = 0; R < w; R++)
                if (R % 4) {
                  var T = A[E.charCodeAt(R - 1)] << R % 4 * 2, F = A[E.charCodeAt(R)] >>> 6 - R % 4 * 2, U = T | F;
                  N[O >>> 2] |= U << 24 - O % 4 * 8, O++;
                }
              return y.create(N, O);
            }
          }(), l.enc.Base64;
        });
      }(Ua)), Ua.exports;
    }
    var za = { exports: {} }, sb = za.exports, hh;
    function ab() {
      return hh || (hh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(sb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.WordArray, k = u.enc;
            k.Base64url = {
              /**
               * Converts a word array to a Base64url string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @param {boolean} urlSafe Whether to use url safe
               *
               * @return {string} The Base64url string.
               *
               * @static
               *
               * @example
               *
               *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
               */
              stringify: function(E, w) {
                w === void 0 && (w = !0);
                var A = E.words, N = E.sigBytes, O = w ? this._safe_map : this._map;
                E.clamp();
                for (var R = [], T = 0; T < N; T += 3)
                  for (var F = A[T >>> 2] >>> 24 - T % 4 * 8 & 255, U = A[T + 1 >>> 2] >>> 24 - (T + 1) % 4 * 8 & 255, P = A[T + 2 >>> 2] >>> 24 - (T + 2) % 4 * 8 & 255, D = F << 16 | U << 8 | P, B = 0; B < 4 && T + B * 0.75 < N; B++)
                    R.push(O.charAt(D >>> 6 * (3 - B) & 63));
                var M = O.charAt(64);
                if (M)
                  for (; R.length % 4; )
                    R.push(M);
                return R.join("");
              },
              /**
               * Converts a Base64url string to a word array.
               *
               * @param {string} base64Str The Base64url string.
               *
               * @param {boolean} urlSafe Whether to use url safe
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
               */
              parse: function(E, w) {
                w === void 0 && (w = !0);
                var A = E.length, N = w ? this._safe_map : this._map, O = this._reverseMap;
                if (!O) {
                  O = this._reverseMap = [];
                  for (var R = 0; R < N.length; R++)
                    O[N.charCodeAt(R)] = R;
                }
                var T = N.charAt(64);
                if (T) {
                  var F = E.indexOf(T);
                  F !== -1 && (A = F);
                }
                return C(E, A, O);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
            };
            function C(E, w, A) {
              for (var N = [], O = 0, R = 0; R < w; R++)
                if (R % 4) {
                  var T = A[E.charCodeAt(R - 1)] << R % 4 * 2, F = A[E.charCodeAt(R)] >>> 6 - R % 4 * 2, U = T | F;
                  N[O >>> 2] |= U << 24 - O % 4 * 8, O++;
                }
              return y.create(N, O);
            }
          }(), l.enc.Base64url;
        });
      }(za)), za.exports;
    }
    var ja = { exports: {} }, cb = ja.exports, ph;
    function Yi() {
      return ph || (ph = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(cb, function(l) {
          return function(u) {
            var v = l, y = v.lib, k = y.WordArray, C = y.Hasher, E = v.algo, w = [];
            (function() {
              for (var F = 0; F < 64; F++)
                w[F] = u.abs(u.sin(F + 1)) * 4294967296 | 0;
            })();
            var A = E.MD5 = C.extend({
              _doReset: function() {
                this._hash = new k.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function(F, U) {
                for (var P = 0; P < 16; P++) {
                  var D = U + P, B = F[D];
                  F[D] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
                }
                var M = this._hash.words, G = F[U + 0], K = F[U + 1], Z = F[U + 2], re = F[U + 3], pe = F[U + 4], Y = F[U + 5], J = F[U + 6], fe = F[U + 7], z = F[U + 8], le = F[U + 9], ne = F[U + 10], ve = F[U + 11], ue = F[U + 12], _e = F[U + 13], Ee = F[U + 14], Ce = F[U + 15], te = M[0], oe = M[1], ce = M[2], ae = M[3];
                te = N(te, oe, ce, ae, G, 7, w[0]), ae = N(ae, te, oe, ce, K, 12, w[1]), ce = N(ce, ae, te, oe, Z, 17, w[2]), oe = N(oe, ce, ae, te, re, 22, w[3]), te = N(te, oe, ce, ae, pe, 7, w[4]), ae = N(ae, te, oe, ce, Y, 12, w[5]), ce = N(ce, ae, te, oe, J, 17, w[6]), oe = N(oe, ce, ae, te, fe, 22, w[7]), te = N(te, oe, ce, ae, z, 7, w[8]), ae = N(ae, te, oe, ce, le, 12, w[9]), ce = N(ce, ae, te, oe, ne, 17, w[10]), oe = N(oe, ce, ae, te, ve, 22, w[11]), te = N(te, oe, ce, ae, ue, 7, w[12]), ae = N(ae, te, oe, ce, _e, 12, w[13]), ce = N(ce, ae, te, oe, Ee, 17, w[14]), oe = N(oe, ce, ae, te, Ce, 22, w[15]), te = O(te, oe, ce, ae, K, 5, w[16]), ae = O(ae, te, oe, ce, J, 9, w[17]), ce = O(ce, ae, te, oe, ve, 14, w[18]), oe = O(oe, ce, ae, te, G, 20, w[19]), te = O(te, oe, ce, ae, Y, 5, w[20]), ae = O(ae, te, oe, ce, ne, 9, w[21]), ce = O(ce, ae, te, oe, Ce, 14, w[22]), oe = O(oe, ce, ae, te, pe, 20, w[23]), te = O(te, oe, ce, ae, le, 5, w[24]), ae = O(ae, te, oe, ce, Ee, 9, w[25]), ce = O(ce, ae, te, oe, re, 14, w[26]), oe = O(oe, ce, ae, te, z, 20, w[27]), te = O(te, oe, ce, ae, _e, 5, w[28]), ae = O(ae, te, oe, ce, Z, 9, w[29]), ce = O(ce, ae, te, oe, fe, 14, w[30]), oe = O(oe, ce, ae, te, ue, 20, w[31]), te = R(te, oe, ce, ae, Y, 4, w[32]), ae = R(ae, te, oe, ce, z, 11, w[33]), ce = R(ce, ae, te, oe, ve, 16, w[34]), oe = R(oe, ce, ae, te, Ee, 23, w[35]), te = R(te, oe, ce, ae, K, 4, w[36]), ae = R(ae, te, oe, ce, pe, 11, w[37]), ce = R(ce, ae, te, oe, fe, 16, w[38]), oe = R(oe, ce, ae, te, ne, 23, w[39]), te = R(te, oe, ce, ae, _e, 4, w[40]), ae = R(ae, te, oe, ce, G, 11, w[41]), ce = R(ce, ae, te, oe, re, 16, w[42]), oe = R(oe, ce, ae, te, J, 23, w[43]), te = R(te, oe, ce, ae, le, 4, w[44]), ae = R(ae, te, oe, ce, ue, 11, w[45]), ce = R(ce, ae, te, oe, Ce, 16, w[46]), oe = R(oe, ce, ae, te, Z, 23, w[47]), te = T(te, oe, ce, ae, G, 6, w[48]), ae = T(ae, te, oe, ce, fe, 10, w[49]), ce = T(ce, ae, te, oe, Ee, 15, w[50]), oe = T(oe, ce, ae, te, Y, 21, w[51]), te = T(te, oe, ce, ae, ue, 6, w[52]), ae = T(ae, te, oe, ce, re, 10, w[53]), ce = T(ce, ae, te, oe, ne, 15, w[54]), oe = T(oe, ce, ae, te, K, 21, w[55]), te = T(te, oe, ce, ae, z, 6, w[56]), ae = T(ae, te, oe, ce, Ce, 10, w[57]), ce = T(ce, ae, te, oe, J, 15, w[58]), oe = T(oe, ce, ae, te, _e, 21, w[59]), te = T(te, oe, ce, ae, pe, 6, w[60]), ae = T(ae, te, oe, ce, ve, 10, w[61]), ce = T(ce, ae, te, oe, Z, 15, w[62]), oe = T(oe, ce, ae, te, le, 21, w[63]), M[0] = M[0] + te | 0, M[1] = M[1] + oe | 0, M[2] = M[2] + ce | 0, M[3] = M[3] + ae | 0;
              },
              _doFinalize: function() {
                var F = this._data, U = F.words, P = this._nDataBytes * 8, D = F.sigBytes * 8;
                U[D >>> 5] |= 128 << 24 - D % 32;
                var B = u.floor(P / 4294967296), M = P;
                U[(D + 64 >>> 9 << 4) + 15] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, U[(D + 64 >>> 9 << 4) + 14] = (M << 8 | M >>> 24) & 16711935 | (M << 24 | M >>> 8) & 4278255360, F.sigBytes = (U.length + 1) * 4, this._process();
                for (var G = this._hash, K = G.words, Z = 0; Z < 4; Z++) {
                  var re = K[Z];
                  K[Z] = (re << 8 | re >>> 24) & 16711935 | (re << 24 | re >>> 8) & 4278255360;
                }
                return G;
              },
              clone: function() {
                var F = C.clone.call(this);
                return F._hash = this._hash.clone(), F;
              }
            });
            function N(F, U, P, D, B, M, G) {
              var K = F + (U & P | ~U & D) + B + G;
              return (K << M | K >>> 32 - M) + U;
            }
            function O(F, U, P, D, B, M, G) {
              var K = F + (U & D | P & ~D) + B + G;
              return (K << M | K >>> 32 - M) + U;
            }
            function R(F, U, P, D, B, M, G) {
              var K = F + (U ^ P ^ D) + B + G;
              return (K << M | K >>> 32 - M) + U;
            }
            function T(F, U, P, D, B, M, G) {
              var K = F + (P ^ (U | ~D)) + B + G;
              return (K << M | K >>> 32 - M) + U;
            }
            v.MD5 = C._createHelper(A), v.HmacMD5 = C._createHmacHelper(A);
          }(Math), l.MD5;
        });
      }(ja)), ja.exports;
    }
    var $a = { exports: {} }, lb = $a.exports, vh;
    function gh() {
      return vh || (vh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(lb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.WordArray, k = v.Hasher, C = u.algo, E = [], w = C.SHA1 = k.extend({
              _doReset: function() {
                this._hash = new y.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(A, N) {
                for (var O = this._hash.words, R = O[0], T = O[1], F = O[2], U = O[3], P = O[4], D = 0; D < 80; D++) {
                  if (D < 16)
                    E[D] = A[N + D] | 0;
                  else {
                    var B = E[D - 3] ^ E[D - 8] ^ E[D - 14] ^ E[D - 16];
                    E[D] = B << 1 | B >>> 31;
                  }
                  var M = (R << 5 | R >>> 27) + P + E[D];
                  D < 20 ? M += (T & F | ~T & U) + 1518500249 : D < 40 ? M += (T ^ F ^ U) + 1859775393 : D < 60 ? M += (T & F | T & U | F & U) - 1894007588 : M += (T ^ F ^ U) - 899497514, P = U, U = F, F = T << 30 | T >>> 2, T = R, R = M;
                }
                O[0] = O[0] + R | 0, O[1] = O[1] + T | 0, O[2] = O[2] + F | 0, O[3] = O[3] + U | 0, O[4] = O[4] + P | 0;
              },
              _doFinalize: function() {
                var A = this._data, N = A.words, O = this._nDataBytes * 8, R = A.sigBytes * 8;
                return N[R >>> 5] |= 128 << 24 - R % 32, N[(R + 64 >>> 9 << 4) + 14] = Math.floor(O / 4294967296), N[(R + 64 >>> 9 << 4) + 15] = O, A.sigBytes = N.length * 4, this._process(), this._hash;
              },
              clone: function() {
                var A = k.clone.call(this);
                return A._hash = this._hash.clone(), A;
              }
            });
            u.SHA1 = k._createHelper(w), u.HmacSHA1 = k._createHmacHelper(w);
          }(), l.SHA1;
        });
      }($a)), $a.exports;
    }
    var Wa = { exports: {} }, ub = Wa.exports, mh;
    function ru() {
      return mh || (mh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(ub, function(l) {
          return function(u) {
            var v = l, y = v.lib, k = y.WordArray, C = y.Hasher, E = v.algo, w = [], A = [];
            (function() {
              function R(P) {
                for (var D = u.sqrt(P), B = 2; B <= D; B++)
                  if (!(P % B))
                    return !1;
                return !0;
              }
              function T(P) {
                return (P - (P | 0)) * 4294967296 | 0;
              }
              for (var F = 2, U = 0; U < 64; )
                R(F) && (U < 8 && (w[U] = T(u.pow(F, 1 / 2))), A[U] = T(u.pow(F, 1 / 3)), U++), F++;
            })();
            var N = [], O = E.SHA256 = C.extend({
              _doReset: function() {
                this._hash = new k.init(w.slice(0));
              },
              _doProcessBlock: function(R, T) {
                for (var F = this._hash.words, U = F[0], P = F[1], D = F[2], B = F[3], M = F[4], G = F[5], K = F[6], Z = F[7], re = 0; re < 64; re++) {
                  if (re < 16)
                    N[re] = R[T + re] | 0;
                  else {
                    var pe = N[re - 15], Y = (pe << 25 | pe >>> 7) ^ (pe << 14 | pe >>> 18) ^ pe >>> 3, J = N[re - 2], fe = (J << 15 | J >>> 17) ^ (J << 13 | J >>> 19) ^ J >>> 10;
                    N[re] = Y + N[re - 7] + fe + N[re - 16];
                  }
                  var z = M & G ^ ~M & K, le = U & P ^ U & D ^ P & D, ne = (U << 30 | U >>> 2) ^ (U << 19 | U >>> 13) ^ (U << 10 | U >>> 22), ve = (M << 26 | M >>> 6) ^ (M << 21 | M >>> 11) ^ (M << 7 | M >>> 25), ue = Z + ve + z + A[re] + N[re], _e = ne + le;
                  Z = K, K = G, G = M, M = B + ue | 0, B = D, D = P, P = U, U = ue + _e | 0;
                }
                F[0] = F[0] + U | 0, F[1] = F[1] + P | 0, F[2] = F[2] + D | 0, F[3] = F[3] + B | 0, F[4] = F[4] + M | 0, F[5] = F[5] + G | 0, F[6] = F[6] + K | 0, F[7] = F[7] + Z | 0;
              },
              _doFinalize: function() {
                var R = this._data, T = R.words, F = this._nDataBytes * 8, U = R.sigBytes * 8;
                return T[U >>> 5] |= 128 << 24 - U % 32, T[(U + 64 >>> 9 << 4) + 14] = u.floor(F / 4294967296), T[(U + 64 >>> 9 << 4) + 15] = F, R.sigBytes = T.length * 4, this._process(), this._hash;
              },
              clone: function() {
                var R = C.clone.call(this);
                return R._hash = this._hash.clone(), R;
              }
            });
            v.SHA256 = C._createHelper(O), v.HmacSHA256 = C._createHmacHelper(O);
          }(Math), l.SHA256;
        });
      }(Wa)), Wa.exports;
    }
    var qa = { exports: {} }, fb = qa.exports, yh;
    function db() {
      return yh || (yh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), ru());
        })(fb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.WordArray, k = u.algo, C = k.SHA256, E = k.SHA224 = C.extend({
              _doReset: function() {
                this._hash = new y.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function() {
                var w = C._doFinalize.call(this);
                return w.sigBytes -= 4, w;
              }
            });
            u.SHA224 = C._createHelper(E), u.HmacSHA224 = C._createHmacHelper(E);
          }(), l.SHA224;
        });
      }(qa)), qa.exports;
    }
    var Va = { exports: {} }, hb = Va.exports, xh;
    function bh() {
      return xh || (xh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Fa());
        })(hb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.Hasher, k = u.x64, C = k.Word, E = k.WordArray, w = u.algo;
            function A() {
              return C.create.apply(C, arguments);
            }
            var N = [A(1116352408, 3609767458), A(1899447441, 602891725), A(3049323471, 3964484399), A(3921009573, 2173295548), A(961987163, 4081628472), A(1508970993, 3053834265), A(2453635748, 2937671579), A(2870763221, 3664609560), A(3624381080, 2734883394), A(310598401, 1164996542), A(607225278, 1323610764), A(1426881987, 3590304994), A(1925078388, 4068182383), A(2162078206, 991336113), A(2614888103, 633803317), A(3248222580, 3479774868), A(3835390401, 2666613458), A(4022224774, 944711139), A(264347078, 2341262773), A(604807628, 2007800933), A(770255983, 1495990901), A(1249150122, 1856431235), A(1555081692, 3175218132), A(1996064986, 2198950837), A(2554220882, 3999719339), A(2821834349, 766784016), A(2952996808, 2566594879), A(3210313671, 3203337956), A(3336571891, 1034457026), A(3584528711, 2466948901), A(113926993, 3758326383), A(338241895, 168717936), A(666307205, 1188179964), A(773529912, 1546045734), A(1294757372, 1522805485), A(1396182291, 2643833823), A(1695183700, 2343527390), A(1986661051, 1014477480), A(2177026350, 1206759142), A(2456956037, 344077627), A(2730485921, 1290863460), A(2820302411, 3158454273), A(3259730800, 3505952657), A(3345764771, 106217008), A(3516065817, 3606008344), A(3600352804, 1432725776), A(4094571909, 1467031594), A(275423344, 851169720), A(430227734, 3100823752), A(506948616, 1363258195), A(659060556, 3750685593), A(883997877, 3785050280), A(958139571, 3318307427), A(1322822218, 3812723403), A(1537002063, 2003034995), A(1747873779, 3602036899), A(1955562222, 1575990012), A(2024104815, 1125592928), A(2227730452, 2716904306), A(2361852424, 442776044), A(2428436474, 593698344), A(2756734187, 3733110249), A(3204031479, 2999351573), A(3329325298, 3815920427), A(3391569614, 3928383900), A(3515267271, 566280711), A(3940187606, 3454069534), A(4118630271, 4000239992), A(116418474, 1914138554), A(174292421, 2731055270), A(289380356, 3203993006), A(460393269, 320620315), A(685471733, 587496836), A(852142971, 1086792851), A(1017036298, 365543100), A(1126000580, 2618297676), A(1288033470, 3409855158), A(1501505948, 4234509866), A(1607167915, 987167468), A(1816402316, 1246189591)], O = [];
            (function() {
              for (var T = 0; T < 80; T++)
                O[T] = A();
            })();
            var R = w.SHA512 = y.extend({
              _doReset: function() {
                this._hash = new E.init([new C.init(1779033703, 4089235720), new C.init(3144134277, 2227873595), new C.init(1013904242, 4271175723), new C.init(2773480762, 1595750129), new C.init(1359893119, 2917565137), new C.init(2600822924, 725511199), new C.init(528734635, 4215389547), new C.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function(T, F) {
                for (var U = this._hash.words, P = U[0], D = U[1], B = U[2], M = U[3], G = U[4], K = U[5], Z = U[6], re = U[7], pe = P.high, Y = P.low, J = D.high, fe = D.low, z = B.high, le = B.low, ne = M.high, ve = M.low, ue = G.high, _e = G.low, Ee = K.high, Ce = K.low, te = Z.high, oe = Z.low, ce = re.high, ae = re.low, Re = pe, ot = Y, at = J, Le = fe, It = z, mr = le, Rr = ne, yr = ve, et = ue, At = _e, dr = Ee, Fr = Ce, Jr = te, zn = oe, mo = ce, vi = ae, sn = 0; sn < 80; sn++) {
                  var an, Gn, Mo = O[sn];
                  if (sn < 16)
                    Gn = Mo.high = T[F + sn * 2] | 0, an = Mo.low = T[F + sn * 2 + 1] | 0;
                  else {
                    var j0 = O[sn - 15], Fo = j0.high, Ws = j0.low, Q1 = (Fo >>> 1 | Ws << 31) ^ (Fo >>> 8 | Ws << 24) ^ Fo >>> 7, $0 = (Ws >>> 1 | Fo << 31) ^ (Ws >>> 8 | Fo << 24) ^ (Ws >>> 7 | Fo << 25), W0 = O[sn - 2], No = W0.high, qs = W0.low, J1 = (No >>> 19 | qs << 13) ^ (No << 3 | qs >>> 29) ^ No >>> 6, q0 = (qs >>> 19 | No << 13) ^ (qs << 3 | No >>> 29) ^ (qs >>> 6 | No << 26), V0 = O[sn - 7], e_ = V0.high, t_ = V0.low, H0 = O[sn - 16], r_ = H0.high, G0 = H0.low;
                    an = $0 + t_, Gn = Q1 + e_ + (an >>> 0 < $0 >>> 0 ? 1 : 0), an = an + q0, Gn = Gn + J1 + (an >>> 0 < q0 >>> 0 ? 1 : 0), an = an + G0, Gn = Gn + r_ + (an >>> 0 < G0 >>> 0 ? 1 : 0), Mo.high = Gn, Mo.low = an;
                  }
                  var n_ = et & dr ^ ~et & Jr, K0 = At & Fr ^ ~At & zn, i_ = Re & at ^ Re & It ^ at & It, o_ = ot & Le ^ ot & mr ^ Le & mr, s_ = (Re >>> 28 | ot << 4) ^ (Re << 30 | ot >>> 2) ^ (Re << 25 | ot >>> 7), Y0 = (ot >>> 28 | Re << 4) ^ (ot << 30 | Re >>> 2) ^ (ot << 25 | Re >>> 7), a_ = (et >>> 14 | At << 18) ^ (et >>> 18 | At << 14) ^ (et << 23 | At >>> 9), c_ = (At >>> 14 | et << 18) ^ (At >>> 18 | et << 14) ^ (At << 23 | et >>> 9), Z0 = N[sn], l_ = Z0.high, X0 = Z0.low, wn = vi + c_, ki = mo + a_ + (wn >>> 0 < vi >>> 0 ? 1 : 0), wn = wn + K0, ki = ki + n_ + (wn >>> 0 < K0 >>> 0 ? 1 : 0), wn = wn + X0, ki = ki + l_ + (wn >>> 0 < X0 >>> 0 ? 1 : 0), wn = wn + an, ki = ki + Gn + (wn >>> 0 < an >>> 0 ? 1 : 0), Q0 = Y0 + o_, u_ = s_ + i_ + (Q0 >>> 0 < Y0 >>> 0 ? 1 : 0);
                  mo = Jr, vi = zn, Jr = dr, zn = Fr, dr = et, Fr = At, At = yr + wn | 0, et = Rr + ki + (At >>> 0 < yr >>> 0 ? 1 : 0) | 0, Rr = It, yr = mr, It = at, mr = Le, at = Re, Le = ot, ot = wn + Q0 | 0, Re = ki + u_ + (ot >>> 0 < wn >>> 0 ? 1 : 0) | 0;
                }
                Y = P.low = Y + ot, P.high = pe + Re + (Y >>> 0 < ot >>> 0 ? 1 : 0), fe = D.low = fe + Le, D.high = J + at + (fe >>> 0 < Le >>> 0 ? 1 : 0), le = B.low = le + mr, B.high = z + It + (le >>> 0 < mr >>> 0 ? 1 : 0), ve = M.low = ve + yr, M.high = ne + Rr + (ve >>> 0 < yr >>> 0 ? 1 : 0), _e = G.low = _e + At, G.high = ue + et + (_e >>> 0 < At >>> 0 ? 1 : 0), Ce = K.low = Ce + Fr, K.high = Ee + dr + (Ce >>> 0 < Fr >>> 0 ? 1 : 0), oe = Z.low = oe + zn, Z.high = te + Jr + (oe >>> 0 < zn >>> 0 ? 1 : 0), ae = re.low = ae + vi, re.high = ce + mo + (ae >>> 0 < vi >>> 0 ? 1 : 0);
              },
              _doFinalize: function() {
                var T = this._data, F = T.words, U = this._nDataBytes * 8, P = T.sigBytes * 8;
                F[P >>> 5] |= 128 << 24 - P % 32, F[(P + 128 >>> 10 << 5) + 30] = Math.floor(U / 4294967296), F[(P + 128 >>> 10 << 5) + 31] = U, T.sigBytes = F.length * 4, this._process();
                var D = this._hash.toX32();
                return D;
              },
              clone: function() {
                var T = y.clone.call(this);
                return T._hash = this._hash.clone(), T;
              },
              blockSize: 1024 / 32
            });
            u.SHA512 = y._createHelper(R), u.HmacSHA512 = y._createHmacHelper(R);
          }(), l.SHA512;
        });
      }(Va)), Va.exports;
    }
    var Ha = { exports: {} }, pb = Ha.exports, wh;
    function vb() {
      return wh || (wh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Fa(), bh());
        })(pb, function(l) {
          return function() {
            var u = l, v = u.x64, y = v.Word, k = v.WordArray, C = u.algo, E = C.SHA512, w = C.SHA384 = E.extend({
              _doReset: function() {
                this._hash = new k.init([new y.init(3418070365, 3238371032), new y.init(1654270250, 914150663), new y.init(2438529370, 812702999), new y.init(355462360, 4144912697), new y.init(1731405415, 4290775857), new y.init(2394180231, 1750603025), new y.init(3675008525, 1694076839), new y.init(1203062813, 3204075428)]);
              },
              _doFinalize: function() {
                var A = E._doFinalize.call(this);
                return A.sigBytes -= 16, A;
              }
            });
            u.SHA384 = E._createHelper(w), u.HmacSHA384 = E._createHmacHelper(w);
          }(), l.SHA384;
        });
      }(Ha)), Ha.exports;
    }
    var Ga = { exports: {} }, gb = Ga.exports, _h;
    function mb() {
      return _h || (_h = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Fa());
        })(gb, function(l) {
          return function(u) {
            var v = l, y = v.lib, k = y.WordArray, C = y.Hasher, E = v.x64, w = E.Word, A = v.algo, N = [], O = [], R = [];
            (function() {
              for (var U = 1, P = 0, D = 0; D < 24; D++) {
                N[U + 5 * P] = (D + 1) * (D + 2) / 2 % 64;
                var B = P % 5, M = (2 * U + 3 * P) % 5;
                U = B, P = M;
              }
              for (var U = 0; U < 5; U++)
                for (var P = 0; P < 5; P++)
                  O[U + 5 * P] = P + (2 * U + 3 * P) % 5 * 5;
              for (var G = 1, K = 0; K < 24; K++) {
                for (var Z = 0, re = 0, pe = 0; pe < 7; pe++) {
                  if (G & 1) {
                    var Y = (1 << pe) - 1;
                    Y < 32 ? re ^= 1 << Y : Z ^= 1 << Y - 32;
                  }
                  G & 128 ? G = G << 1 ^ 113 : G <<= 1;
                }
                R[K] = w.create(Z, re);
              }
            })();
            var T = [];
            (function() {
              for (var U = 0; U < 25; U++)
                T[U] = w.create();
            })();
            var F = A.SHA3 = C.extend({
              /**
               * Configuration options.
               *
               * @property {number} outputLength
               *   The desired number of bits in the output hash.
               *   Only values permitted are: 224, 256, 384, 512.
               *   Default: 512
               */
              cfg: C.cfg.extend({
                outputLength: 512
              }),
              _doReset: function() {
                for (var U = this._state = [], P = 0; P < 25; P++)
                  U[P] = new w.init();
                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
              },
              _doProcessBlock: function(U, P) {
                for (var D = this._state, B = this.blockSize / 2, M = 0; M < B; M++) {
                  var G = U[P + 2 * M], K = U[P + 2 * M + 1];
                  G = (G << 8 | G >>> 24) & 16711935 | (G << 24 | G >>> 8) & 4278255360, K = (K << 8 | K >>> 24) & 16711935 | (K << 24 | K >>> 8) & 4278255360;
                  var Z = D[M];
                  Z.high ^= K, Z.low ^= G;
                }
                for (var re = 0; re < 24; re++) {
                  for (var pe = 0; pe < 5; pe++) {
                    for (var Y = 0, J = 0, fe = 0; fe < 5; fe++) {
                      var Z = D[pe + 5 * fe];
                      Y ^= Z.high, J ^= Z.low;
                    }
                    var z = T[pe];
                    z.high = Y, z.low = J;
                  }
                  for (var pe = 0; pe < 5; pe++)
                    for (var le = T[(pe + 4) % 5], ne = T[(pe + 1) % 5], ve = ne.high, ue = ne.low, Y = le.high ^ (ve << 1 | ue >>> 31), J = le.low ^ (ue << 1 | ve >>> 31), fe = 0; fe < 5; fe++) {
                      var Z = D[pe + 5 * fe];
                      Z.high ^= Y, Z.low ^= J;
                    }
                  for (var _e = 1; _e < 25; _e++) {
                    var Y, J, Z = D[_e], Ee = Z.high, Ce = Z.low, te = N[_e];
                    te < 32 ? (Y = Ee << te | Ce >>> 32 - te, J = Ce << te | Ee >>> 32 - te) : (Y = Ce << te - 32 | Ee >>> 64 - te, J = Ee << te - 32 | Ce >>> 64 - te);
                    var oe = T[O[_e]];
                    oe.high = Y, oe.low = J;
                  }
                  var ce = T[0], ae = D[0];
                  ce.high = ae.high, ce.low = ae.low;
                  for (var pe = 0; pe < 5; pe++)
                    for (var fe = 0; fe < 5; fe++) {
                      var _e = pe + 5 * fe, Z = D[_e], Re = T[_e], ot = T[(pe + 1) % 5 + 5 * fe], at = T[(pe + 2) % 5 + 5 * fe];
                      Z.high = Re.high ^ ~ot.high & at.high, Z.low = Re.low ^ ~ot.low & at.low;
                    }
                  var Z = D[0], Le = R[re];
                  Z.high ^= Le.high, Z.low ^= Le.low;
                }
              },
              _doFinalize: function() {
                var U = this._data, P = U.words;
                this._nDataBytes * 8;
                var D = U.sigBytes * 8, B = this.blockSize * 32;
                P[D >>> 5] |= 1 << 24 - D % 32, P[(u.ceil((D + 1) / B) * B >>> 5) - 1] |= 128, U.sigBytes = P.length * 4, this._process();
                for (var M = this._state, G = this.cfg.outputLength / 8, K = G / 8, Z = [], re = 0; re < K; re++) {
                  var pe = M[re], Y = pe.high, J = pe.low;
                  Y = (Y << 8 | Y >>> 24) & 16711935 | (Y << 24 | Y >>> 8) & 4278255360, J = (J << 8 | J >>> 24) & 16711935 | (J << 24 | J >>> 8) & 4278255360, Z.push(J), Z.push(Y);
                }
                return new k.init(Z, G);
              },
              clone: function() {
                for (var U = C.clone.call(this), P = U._state = this._state.slice(0), D = 0; D < 25; D++)
                  P[D] = P[D].clone();
                return U;
              }
            });
            v.SHA3 = C._createHelper(F), v.HmacSHA3 = C._createHmacHelper(F);
          }(Math), l.SHA3;
        });
      }(Ga)), Ga.exports;
    }
    var Ka = { exports: {} }, yb = Ka.exports, Ch;
    function xb() {
      return Ch || (Ch = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(yb, function(l) {
          /** @preserve
          (c) 2012 by Cédric Mesnil. All rights reserved.
          	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
          	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
              - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
          	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
          */
          return function(u) {
            var v = l, y = v.lib, k = y.WordArray, C = y.Hasher, E = v.algo, w = k.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), A = k.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), N = k.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), O = k.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), R = k.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), T = k.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), F = E.RIPEMD160 = C.extend({
              _doReset: function() {
                this._hash = k.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(K, Z) {
                for (var re = 0; re < 16; re++) {
                  var pe = Z + re, Y = K[pe];
                  K[pe] = (Y << 8 | Y >>> 24) & 16711935 | (Y << 24 | Y >>> 8) & 4278255360;
                }
                var J = this._hash.words, fe = R.words, z = T.words, le = w.words, ne = A.words, ve = N.words, ue = O.words, _e, Ee, Ce, te, oe, ce, ae, Re, ot, at;
                ce = _e = J[0], ae = Ee = J[1], Re = Ce = J[2], ot = te = J[3], at = oe = J[4];
                for (var Le, re = 0; re < 80; re += 1)
                  Le = _e + K[Z + le[re]] | 0, re < 16 ? Le += U(Ee, Ce, te) + fe[0] : re < 32 ? Le += P(Ee, Ce, te) + fe[1] : re < 48 ? Le += D(Ee, Ce, te) + fe[2] : re < 64 ? Le += B(Ee, Ce, te) + fe[3] : Le += M(Ee, Ce, te) + fe[4], Le = Le | 0, Le = G(Le, ve[re]), Le = Le + oe | 0, _e = oe, oe = te, te = G(Ce, 10), Ce = Ee, Ee = Le, Le = ce + K[Z + ne[re]] | 0, re < 16 ? Le += M(ae, Re, ot) + z[0] : re < 32 ? Le += B(ae, Re, ot) + z[1] : re < 48 ? Le += D(ae, Re, ot) + z[2] : re < 64 ? Le += P(ae, Re, ot) + z[3] : Le += U(ae, Re, ot) + z[4], Le = Le | 0, Le = G(Le, ue[re]), Le = Le + at | 0, ce = at, at = ot, ot = G(Re, 10), Re = ae, ae = Le;
                Le = J[1] + Ce + ot | 0, J[1] = J[2] + te + at | 0, J[2] = J[3] + oe + ce | 0, J[3] = J[4] + _e + ae | 0, J[4] = J[0] + Ee + Re | 0, J[0] = Le;
              },
              _doFinalize: function() {
                var K = this._data, Z = K.words, re = this._nDataBytes * 8, pe = K.sigBytes * 8;
                Z[pe >>> 5] |= 128 << 24 - pe % 32, Z[(pe + 64 >>> 9 << 4) + 14] = (re << 8 | re >>> 24) & 16711935 | (re << 24 | re >>> 8) & 4278255360, K.sigBytes = (Z.length + 1) * 4, this._process();
                for (var Y = this._hash, J = Y.words, fe = 0; fe < 5; fe++) {
                  var z = J[fe];
                  J[fe] = (z << 8 | z >>> 24) & 16711935 | (z << 24 | z >>> 8) & 4278255360;
                }
                return Y;
              },
              clone: function() {
                var K = C.clone.call(this);
                return K._hash = this._hash.clone(), K;
              }
            });
            function U(K, Z, re) {
              return K ^ Z ^ re;
            }
            function P(K, Z, re) {
              return K & Z | ~K & re;
            }
            function D(K, Z, re) {
              return (K | ~Z) ^ re;
            }
            function B(K, Z, re) {
              return K & re | Z & ~re;
            }
            function M(K, Z, re) {
              return K ^ (Z | ~re);
            }
            function G(K, Z) {
              return K << Z | K >>> 32 - Z;
            }
            v.RIPEMD160 = C._createHelper(F), v.HmacRIPEMD160 = C._createHmacHelper(F);
          }(), l.RIPEMD160;
        });
      }(Ka)), Ka.exports;
    }
    var Ya = { exports: {} }, bb = Ya.exports, Sh;
    function nu() {
      return Sh || (Sh = 1, function(h, a) {
        (function(l, u) {
          h.exports = u(it());
        })(bb, function(l) {
          (function() {
            var u = l, v = u.lib, y = v.Base, k = u.enc, C = k.Utf8, E = u.algo;
            E.HMAC = y.extend({
              /**
               * Initializes a newly created HMAC.
               *
               * @param {Hasher} hasher The hash algorithm to use.
               * @param {WordArray|string} key The secret key.
               *
               * @example
               *
               *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
               */
              init: function(w, A) {
                w = this._hasher = new w.init(), typeof A == "string" && (A = C.parse(A));
                var N = w.blockSize, O = N * 4;
                A.sigBytes > O && (A = w.finalize(A)), A.clamp();
                for (var R = this._oKey = A.clone(), T = this._iKey = A.clone(), F = R.words, U = T.words, P = 0; P < N; P++)
                  F[P] ^= 1549556828, U[P] ^= 909522486;
                R.sigBytes = T.sigBytes = O, this.reset();
              },
              /**
               * Resets this HMAC to its initial state.
               *
               * @example
               *
               *     hmacHasher.reset();
               */
              reset: function() {
                var w = this._hasher;
                w.reset(), w.update(this._iKey);
              },
              /**
               * Updates this HMAC with a message.
               *
               * @param {WordArray|string} messageUpdate The message to append.
               *
               * @return {HMAC} This HMAC instance.
               *
               * @example
               *
               *     hmacHasher.update('message');
               *     hmacHasher.update(wordArray);
               */
              update: function(w) {
                return this._hasher.update(w), this;
              },
              /**
               * Finalizes the HMAC computation.
               * Note that the finalize operation is effectively a destructive, read-once operation.
               *
               * @param {WordArray|string} messageUpdate (Optional) A final message update.
               *
               * @return {WordArray} The HMAC.
               *
               * @example
               *
               *     var hmac = hmacHasher.finalize();
               *     var hmac = hmacHasher.finalize('message');
               *     var hmac = hmacHasher.finalize(wordArray);
               */
              finalize: function(w) {
                var A = this._hasher, N = A.finalize(w);
                A.reset();
                var O = A.finalize(this._oKey.clone().concat(N));
                return O;
              }
            });
          })();
        });
      }(Ya)), Ya.exports;
    }
    var Za = { exports: {} }, wb = Za.exports, Eh;
    function _b() {
      return Eh || (Eh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), ru(), nu());
        })(wb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.Base, k = v.WordArray, C = u.algo, E = C.SHA256, w = C.HMAC, A = C.PBKDF2 = y.extend({
              /**
               * Configuration options.
               *
               * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
               * @property {Hasher} hasher The hasher to use. Default: SHA256
               * @property {number} iterations The number of iterations to perform. Default: 250000
               */
              cfg: y.extend({
                keySize: 128 / 32,
                hasher: E,
                iterations: 25e4
              }),
              /**
               * Initializes a newly created key derivation function.
               *
               * @param {Object} cfg (Optional) The configuration options to use for the derivation.
               *
               * @example
               *
               *     var kdf = CryptoJS.algo.PBKDF2.create();
               *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
               *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
               */
              init: function(N) {
                this.cfg = this.cfg.extend(N);
              },
              /**
               * Computes the Password-Based Key Derivation Function 2.
               *
               * @param {WordArray|string} password The password.
               * @param {WordArray|string} salt A salt.
               *
               * @return {WordArray} The derived key.
               *
               * @example
               *
               *     var key = kdf.compute(password, salt);
               */
              compute: function(N, O) {
                for (var R = this.cfg, T = w.create(R.hasher, N), F = k.create(), U = k.create([1]), P = F.words, D = U.words, B = R.keySize, M = R.iterations; P.length < B; ) {
                  var G = T.update(O).finalize(U);
                  T.reset();
                  for (var K = G.words, Z = K.length, re = G, pe = 1; pe < M; pe++) {
                    re = T.finalize(re), T.reset();
                    for (var Y = re.words, J = 0; J < Z; J++)
                      K[J] ^= Y[J];
                  }
                  F.concat(G), D[0]++;
                }
                return F.sigBytes = B * 4, F;
              }
            });
            u.PBKDF2 = function(N, O, R) {
              return A.create(R).compute(N, O);
            };
          }(), l.PBKDF2;
        });
      }(Za)), Za.exports;
    }
    var Xa = { exports: {} }, Cb = Xa.exports, Ah;
    function Ei() {
      return Ah || (Ah = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), gh(), nu());
        })(Cb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.Base, k = v.WordArray, C = u.algo, E = C.MD5, w = C.EvpKDF = y.extend({
              /**
               * Configuration options.
               *
               * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
               * @property {Hasher} hasher The hash algorithm to use. Default: MD5
               * @property {number} iterations The number of iterations to perform. Default: 1
               */
              cfg: y.extend({
                keySize: 128 / 32,
                hasher: E,
                iterations: 1
              }),
              /**
               * Initializes a newly created key derivation function.
               *
               * @param {Object} cfg (Optional) The configuration options to use for the derivation.
               *
               * @example
               *
               *     var kdf = CryptoJS.algo.EvpKDF.create();
               *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
               *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
               */
              init: function(A) {
                this.cfg = this.cfg.extend(A);
              },
              /**
               * Derives a key from a password.
               *
               * @param {WordArray|string} password The password.
               * @param {WordArray|string} salt A salt.
               *
               * @return {WordArray} The derived key.
               *
               * @example
               *
               *     var key = kdf.compute(password, salt);
               */
              compute: function(A, N) {
                for (var O, R = this.cfg, T = R.hasher.create(), F = k.create(), U = F.words, P = R.keySize, D = R.iterations; U.length < P; ) {
                  O && T.update(O), O = T.update(A).finalize(N), T.reset();
                  for (var B = 1; B < D; B++)
                    O = T.finalize(O), T.reset();
                  F.concat(O);
                }
                return F.sigBytes = P * 4, F;
              }
            });
            u.EvpKDF = function(A, N, O) {
              return w.create(O).compute(A, N);
            };
          }(), l.EvpKDF;
        });
      }(Xa)), Xa.exports;
    }
    var Qa = { exports: {} }, Sb = Qa.exports, kh;
    function Er() {
      return kh || (kh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Ei());
        })(Sb, function(l) {
          l.lib.Cipher || function(u) {
            var v = l, y = v.lib, k = y.Base, C = y.WordArray, E = y.BufferedBlockAlgorithm, w = v.enc;
            w.Utf8;
            var A = w.Base64, N = v.algo, O = N.EvpKDF, R = y.Cipher = E.extend({
              /**
               * Configuration options.
               *
               * @property {WordArray} iv The IV to use for this operation.
               */
              cfg: k.extend(),
              /**
               * Creates this cipher in encryption mode.
               *
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {Cipher} A cipher instance.
               *
               * @static
               *
               * @example
               *
               *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
               */
              createEncryptor: function(Y, J) {
                return this.create(this._ENC_XFORM_MODE, Y, J);
              },
              /**
               * Creates this cipher in decryption mode.
               *
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {Cipher} A cipher instance.
               *
               * @static
               *
               * @example
               *
               *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
               */
              createDecryptor: function(Y, J) {
                return this.create(this._DEC_XFORM_MODE, Y, J);
              },
              /**
               * Initializes a newly created cipher.
               *
               * @param {number} xformMode Either the encryption or decryption transormation mode constant.
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @example
               *
               *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
               */
              init: function(Y, J, fe) {
                this.cfg = this.cfg.extend(fe), this._xformMode = Y, this._key = J, this.reset();
              },
              /**
               * Resets this cipher to its initial state.
               *
               * @example
               *
               *     cipher.reset();
               */
              reset: function() {
                E.reset.call(this), this._doReset();
              },
              /**
               * Adds data to be encrypted or decrypted.
               *
               * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
               *
               * @return {WordArray} The data after processing.
               *
               * @example
               *
               *     var encrypted = cipher.process('data');
               *     var encrypted = cipher.process(wordArray);
               */
              process: function(Y) {
                return this._append(Y), this._process();
              },
              /**
               * Finalizes the encryption or decryption process.
               * Note that the finalize operation is effectively a destructive, read-once operation.
               *
               * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
               *
               * @return {WordArray} The data after final processing.
               *
               * @example
               *
               *     var encrypted = cipher.finalize();
               *     var encrypted = cipher.finalize('data');
               *     var encrypted = cipher.finalize(wordArray);
               */
              finalize: function(Y) {
                Y && this._append(Y);
                var J = this._doFinalize();
                return J;
              },
              keySize: 128 / 32,
              ivSize: 128 / 32,
              _ENC_XFORM_MODE: 1,
              _DEC_XFORM_MODE: 2,
              /**
               * Creates shortcut functions to a cipher's object interface.
               *
               * @param {Cipher} cipher The cipher to create a helper for.
               *
               * @return {Object} An object with encrypt and decrypt shortcut functions.
               *
               * @static
               *
               * @example
               *
               *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
               */
              _createHelper: /* @__PURE__ */ function() {
                function Y(J) {
                  return typeof J == "string" ? pe : K;
                }
                return function(J) {
                  return {
                    encrypt: function(fe, z, le) {
                      return Y(z).encrypt(J, fe, z, le);
                    },
                    decrypt: function(fe, z, le) {
                      return Y(z).decrypt(J, fe, z, le);
                    }
                  };
                };
              }()
            });
            y.StreamCipher = R.extend({
              _doFinalize: function() {
                var Y = this._process(!0);
                return Y;
              },
              blockSize: 1
            });
            var T = v.mode = {}, F = y.BlockCipherMode = k.extend({
              /**
               * Creates this mode for encryption.
               *
               * @param {Cipher} cipher A block cipher instance.
               * @param {Array} iv The IV words.
               *
               * @static
               *
               * @example
               *
               *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
               */
              createEncryptor: function(Y, J) {
                return this.Encryptor.create(Y, J);
              },
              /**
               * Creates this mode for decryption.
               *
               * @param {Cipher} cipher A block cipher instance.
               * @param {Array} iv The IV words.
               *
               * @static
               *
               * @example
               *
               *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
               */
              createDecryptor: function(Y, J) {
                return this.Decryptor.create(Y, J);
              },
              /**
               * Initializes a newly created mode.
               *
               * @param {Cipher} cipher A block cipher instance.
               * @param {Array} iv The IV words.
               *
               * @example
               *
               *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
               */
              init: function(Y, J) {
                this._cipher = Y, this._iv = J;
              }
            }), U = T.CBC = function() {
              var Y = F.extend();
              Y.Encryptor = Y.extend({
                /**
                 * Processes the data block at offset.
                 *
                 * @param {Array} words The data words to operate on.
                 * @param {number} offset The offset where the block starts.
                 *
                 * @example
                 *
                 *     mode.processBlock(data.words, offset);
                 */
                processBlock: function(fe, z) {
                  var le = this._cipher, ne = le.blockSize;
                  J.call(this, fe, z, ne), le.encryptBlock(fe, z), this._prevBlock = fe.slice(z, z + ne);
                }
              }), Y.Decryptor = Y.extend({
                /**
                 * Processes the data block at offset.
                 *
                 * @param {Array} words The data words to operate on.
                 * @param {number} offset The offset where the block starts.
                 *
                 * @example
                 *
                 *     mode.processBlock(data.words, offset);
                 */
                processBlock: function(fe, z) {
                  var le = this._cipher, ne = le.blockSize, ve = fe.slice(z, z + ne);
                  le.decryptBlock(fe, z), J.call(this, fe, z, ne), this._prevBlock = ve;
                }
              });
              function J(fe, z, le) {
                var ne, ve = this._iv;
                ve ? (ne = ve, this._iv = u) : ne = this._prevBlock;
                for (var ue = 0; ue < le; ue++)
                  fe[z + ue] ^= ne[ue];
              }
              return Y;
            }(), P = v.pad = {}, D = P.Pkcs7 = {
              /**
               * Pads data using the algorithm defined in PKCS #5/7.
               *
               * @param {WordArray} data The data to pad.
               * @param {number} blockSize The multiple that the data should be padded to.
               *
               * @static
               *
               * @example
               *
               *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
               */
              pad: function(Y, J) {
                for (var fe = J * 4, z = fe - Y.sigBytes % fe, le = z << 24 | z << 16 | z << 8 | z, ne = [], ve = 0; ve < z; ve += 4)
                  ne.push(le);
                var ue = C.create(ne, z);
                Y.concat(ue);
              },
              /**
               * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
               *
               * @param {WordArray} data The data to unpad.
               *
               * @static
               *
               * @example
               *
               *     CryptoJS.pad.Pkcs7.unpad(wordArray);
               */
              unpad: function(Y) {
                var J = Y.words[Y.sigBytes - 1 >>> 2] & 255;
                Y.sigBytes -= J;
              }
            };
            y.BlockCipher = R.extend({
              /**
               * Configuration options.
               *
               * @property {Mode} mode The block mode to use. Default: CBC
               * @property {Padding} padding The padding strategy to use. Default: Pkcs7
               */
              cfg: R.cfg.extend({
                mode: U,
                padding: D
              }),
              reset: function() {
                var Y;
                R.reset.call(this);
                var J = this.cfg, fe = J.iv, z = J.mode;
                this._xformMode == this._ENC_XFORM_MODE ? Y = z.createEncryptor : (Y = z.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == Y ? this._mode.init(this, fe && fe.words) : (this._mode = Y.call(z, this, fe && fe.words), this._mode.__creator = Y);
              },
              _doProcessBlock: function(Y, J) {
                this._mode.processBlock(Y, J);
              },
              _doFinalize: function() {
                var Y, J = this.cfg.padding;
                return this._xformMode == this._ENC_XFORM_MODE ? (J.pad(this._data, this.blockSize), Y = this._process(!0)) : (Y = this._process(!0), J.unpad(Y)), Y;
              },
              blockSize: 128 / 32
            });
            var B = y.CipherParams = k.extend({
              /**
               * Initializes a newly created cipher params object.
               *
               * @param {Object} cipherParams An object with any of the possible cipher parameters.
               *
               * @example
               *
               *     var cipherParams = CryptoJS.lib.CipherParams.create({
               *         ciphertext: ciphertextWordArray,
               *         key: keyWordArray,
               *         iv: ivWordArray,
               *         salt: saltWordArray,
               *         algorithm: CryptoJS.algo.AES,
               *         mode: CryptoJS.mode.CBC,
               *         padding: CryptoJS.pad.PKCS7,
               *         blockSize: 4,
               *         formatter: CryptoJS.format.OpenSSL
               *     });
               */
              init: function(Y) {
                this.mixIn(Y);
              },
              /**
               * Converts this cipher params object to a string.
               *
               * @param {Format} formatter (Optional) The formatting strategy to use.
               *
               * @return {string} The stringified cipher params.
               *
               * @throws Error If neither the formatter nor the default formatter is set.
               *
               * @example
               *
               *     var string = cipherParams + '';
               *     var string = cipherParams.toString();
               *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
               */
              toString: function(Y) {
                return (Y || this.formatter).stringify(this);
              }
            }), M = v.format = {}, G = M.OpenSSL = {
              /**
               * Converts a cipher params object to an OpenSSL-compatible string.
               *
               * @param {CipherParams} cipherParams The cipher params object.
               *
               * @return {string} The OpenSSL-compatible string.
               *
               * @static
               *
               * @example
               *
               *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
               */
              stringify: function(Y) {
                var J, fe = Y.ciphertext, z = Y.salt;
                return z ? J = C.create([1398893684, 1701076831]).concat(z).concat(fe) : J = fe, J.toString(A);
              },
              /**
               * Converts an OpenSSL-compatible string to a cipher params object.
               *
               * @param {string} openSSLStr The OpenSSL-compatible string.
               *
               * @return {CipherParams} The cipher params object.
               *
               * @static
               *
               * @example
               *
               *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
               */
              parse: function(Y) {
                var J, fe = A.parse(Y), z = fe.words;
                return z[0] == 1398893684 && z[1] == 1701076831 && (J = C.create(z.slice(2, 4)), z.splice(0, 4), fe.sigBytes -= 16), B.create({
                  ciphertext: fe,
                  salt: J
                });
              }
            }, K = y.SerializableCipher = k.extend({
              /**
               * Configuration options.
               *
               * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
               */
              cfg: k.extend({
                format: G
              }),
              /**
               * Encrypts a message.
               *
               * @param {Cipher} cipher The cipher algorithm to use.
               * @param {WordArray|string} message The message to encrypt.
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {CipherParams} A cipher params object.
               *
               * @static
               *
               * @example
               *
               *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
               *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
               *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
               */
              encrypt: function(Y, J, fe, z) {
                z = this.cfg.extend(z);
                var le = Y.createEncryptor(fe, z), ne = le.finalize(J), ve = le.cfg;
                return B.create({
                  ciphertext: ne,
                  key: fe,
                  iv: ve.iv,
                  algorithm: Y,
                  mode: ve.mode,
                  padding: ve.padding,
                  blockSize: Y.blockSize,
                  formatter: z.format
                });
              },
              /**
               * Decrypts serialized ciphertext.
               *
               * @param {Cipher} cipher The cipher algorithm to use.
               * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {WordArray} The plaintext.
               *
               * @static
               *
               * @example
               *
               *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
               *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
               */
              decrypt: function(Y, J, fe, z) {
                z = this.cfg.extend(z), J = this._parse(J, z.format);
                var le = Y.createDecryptor(fe, z).finalize(J.ciphertext);
                return le;
              },
              /**
               * Converts serialized ciphertext to CipherParams,
               * else assumed CipherParams already and returns ciphertext unchanged.
               *
               * @param {CipherParams|string} ciphertext The ciphertext.
               * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
               *
               * @return {CipherParams} The unserialized ciphertext.
               *
               * @static
               *
               * @example
               *
               *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
               */
              _parse: function(Y, J) {
                return typeof Y == "string" ? J.parse(Y, this) : Y;
              }
            }), Z = v.kdf = {}, re = Z.OpenSSL = {
              /**
               * Derives a key and IV from a password.
               *
               * @param {string} password The password to derive from.
               * @param {number} keySize The size in words of the key to generate.
               * @param {number} ivSize The size in words of the IV to generate.
               * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
               *
               * @return {CipherParams} A cipher params object with the key, IV, and salt.
               *
               * @static
               *
               * @example
               *
               *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
               *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
               */
              execute: function(Y, J, fe, z, le) {
                if (z || (z = C.random(64 / 8)), le)
                  var ne = O.create({
                    keySize: J + fe,
                    hasher: le
                  }).compute(Y, z);
                else
                  var ne = O.create({
                    keySize: J + fe
                  }).compute(Y, z);
                var ve = C.create(ne.words.slice(J), fe * 4);
                return ne.sigBytes = J * 4, B.create({
                  key: ne,
                  iv: ve,
                  salt: z
                });
              }
            }, pe = y.PasswordBasedCipher = K.extend({
              /**
               * Configuration options.
               *
               * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
               */
              cfg: K.cfg.extend({
                kdf: re
              }),
              /**
               * Encrypts a message using a password.
               *
               * @param {Cipher} cipher The cipher algorithm to use.
               * @param {WordArray|string} message The message to encrypt.
               * @param {string} password The password.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {CipherParams} A cipher params object.
               *
               * @static
               *
               * @example
               *
               *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
               *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
               */
              encrypt: function(Y, J, fe, z) {
                z = this.cfg.extend(z);
                var le = z.kdf.execute(fe, Y.keySize, Y.ivSize, z.salt, z.hasher);
                z.iv = le.iv;
                var ne = K.encrypt.call(this, Y, J, le.key, z);
                return ne.mixIn(le), ne;
              },
              /**
               * Decrypts serialized ciphertext using a password.
               *
               * @param {Cipher} cipher The cipher algorithm to use.
               * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
               * @param {string} password The password.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {WordArray} The plaintext.
               *
               * @static
               *
               * @example
               *
               *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
               *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
               */
              decrypt: function(Y, J, fe, z) {
                z = this.cfg.extend(z), J = this._parse(J, z.format);
                var le = z.kdf.execute(fe, Y.keySize, Y.ivSize, J.salt, z.hasher);
                z.iv = le.iv;
                var ne = K.decrypt.call(this, Y, J, le.key, z);
                return ne;
              }
            });
          }();
        });
      }(Qa)), Qa.exports;
    }
    var Ja = { exports: {} }, Eb = Ja.exports, Ih;
    function Ab() {
      return Ih || (Ih = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Eb, function(l) {
          return l.mode.CFB = function() {
            var u = l.lib.BlockCipherMode.extend();
            u.Encryptor = u.extend({
              processBlock: function(y, k) {
                var C = this._cipher, E = C.blockSize;
                v.call(this, y, k, E, C), this._prevBlock = y.slice(k, k + E);
              }
            }), u.Decryptor = u.extend({
              processBlock: function(y, k) {
                var C = this._cipher, E = C.blockSize, w = y.slice(k, k + E);
                v.call(this, y, k, E, C), this._prevBlock = w;
              }
            });
            function v(y, k, C, E) {
              var w, A = this._iv;
              A ? (w = A.slice(0), this._iv = void 0) : w = this._prevBlock, E.encryptBlock(w, 0);
              for (var N = 0; N < C; N++)
                y[k + N] ^= w[N];
            }
            return u;
          }(), l.mode.CFB;
        });
      }(Ja)), Ja.exports;
    }
    var ec = { exports: {} }, kb = ec.exports, Oh;
    function Ib() {
      return Oh || (Oh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(kb, function(l) {
          return l.mode.CTR = function() {
            var u = l.lib.BlockCipherMode.extend(), v = u.Encryptor = u.extend({
              processBlock: function(y, k) {
                var C = this._cipher, E = C.blockSize, w = this._iv, A = this._counter;
                w && (A = this._counter = w.slice(0), this._iv = void 0);
                var N = A.slice(0);
                C.encryptBlock(N, 0), A[E - 1] = A[E - 1] + 1 | 0;
                for (var O = 0; O < E; O++)
                  y[k + O] ^= N[O];
              }
            });
            return u.Decryptor = v, u;
          }(), l.mode.CTR;
        });
      }(ec)), ec.exports;
    }
    var tc = { exports: {} }, Ob = tc.exports, Dh;
    function Db() {
      return Dh || (Dh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Ob, function(l) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */
          return l.mode.CTRGladman = function() {
            var u = l.lib.BlockCipherMode.extend();
            function v(C) {
              if ((C >> 24 & 255) === 255) {
                var E = C >> 16 & 255, w = C >> 8 & 255, A = C & 255;
                E === 255 ? (E = 0, w === 255 ? (w = 0, A === 255 ? A = 0 : ++A) : ++w) : ++E, C = 0, C += E << 16, C += w << 8, C += A;
              } else
                C += 1 << 24;
              return C;
            }
            function y(C) {
              return (C[0] = v(C[0])) === 0 && (C[1] = v(C[1])), C;
            }
            var k = u.Encryptor = u.extend({
              processBlock: function(C, E) {
                var w = this._cipher, A = w.blockSize, N = this._iv, O = this._counter;
                N && (O = this._counter = N.slice(0), this._iv = void 0), y(O);
                var R = O.slice(0);
                w.encryptBlock(R, 0);
                for (var T = 0; T < A; T++)
                  C[E + T] ^= R[T];
              }
            });
            return u.Decryptor = k, u;
          }(), l.mode.CTRGladman;
        });
      }(tc)), tc.exports;
    }
    var rc = { exports: {} }, Rb = rc.exports, Rh;
    function Pb() {
      return Rh || (Rh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Rb, function(l) {
          return l.mode.OFB = function() {
            var u = l.lib.BlockCipherMode.extend(), v = u.Encryptor = u.extend({
              processBlock: function(y, k) {
                var C = this._cipher, E = C.blockSize, w = this._iv, A = this._keystream;
                w && (A = this._keystream = w.slice(0), this._iv = void 0), C.encryptBlock(A, 0);
                for (var N = 0; N < E; N++)
                  y[k + N] ^= A[N];
              }
            });
            return u.Decryptor = v, u;
          }(), l.mode.OFB;
        });
      }(rc)), rc.exports;
    }
    var nc = { exports: {} }, Bb = nc.exports, Ph;
    function Tb() {
      return Ph || (Ph = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Bb, function(l) {
          return l.mode.ECB = function() {
            var u = l.lib.BlockCipherMode.extend();
            return u.Encryptor = u.extend({
              processBlock: function(v, y) {
                this._cipher.encryptBlock(v, y);
              }
            }), u.Decryptor = u.extend({
              processBlock: function(v, y) {
                this._cipher.decryptBlock(v, y);
              }
            }), u;
          }(), l.mode.ECB;
        });
      }(nc)), nc.exports;
    }
    var ic = { exports: {} }, Mb = ic.exports, Bh;
    function Fb() {
      return Bh || (Bh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Mb, function(l) {
          return l.pad.AnsiX923 = {
            pad: function(u, v) {
              var y = u.sigBytes, k = v * 4, C = k - y % k, E = y + C - 1;
              u.clamp(), u.words[E >>> 2] |= C << 24 - E % 4 * 8, u.sigBytes += C;
            },
            unpad: function(u) {
              var v = u.words[u.sigBytes - 1 >>> 2] & 255;
              u.sigBytes -= v;
            }
          }, l.pad.Ansix923;
        });
      }(ic)), ic.exports;
    }
    var oc = { exports: {} }, Nb = oc.exports, Th;
    function Lb() {
      return Th || (Th = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Nb, function(l) {
          return l.pad.Iso10126 = {
            pad: function(u, v) {
              var y = v * 4, k = y - u.sigBytes % y;
              u.concat(l.lib.WordArray.random(k - 1)).concat(l.lib.WordArray.create([k << 24], 1));
            },
            unpad: function(u) {
              var v = u.words[u.sigBytes - 1 >>> 2] & 255;
              u.sigBytes -= v;
            }
          }, l.pad.Iso10126;
        });
      }(oc)), oc.exports;
    }
    var sc = { exports: {} }, Ub = sc.exports, Mh;
    function zb() {
      return Mh || (Mh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Ub, function(l) {
          return l.pad.Iso97971 = {
            pad: function(u, v) {
              u.concat(l.lib.WordArray.create([2147483648], 1)), l.pad.ZeroPadding.pad(u, v);
            },
            unpad: function(u) {
              l.pad.ZeroPadding.unpad(u), u.sigBytes--;
            }
          }, l.pad.Iso97971;
        });
      }(sc)), sc.exports;
    }
    var ac = { exports: {} }, jb = ac.exports, Fh;
    function $b() {
      return Fh || (Fh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(jb, function(l) {
          return l.pad.ZeroPadding = {
            pad: function(u, v) {
              var y = v * 4;
              u.clamp(), u.sigBytes += y - (u.sigBytes % y || y);
            },
            unpad: function(u) {
              for (var v = u.words, y = u.sigBytes - 1, y = u.sigBytes - 1; y >= 0; y--)
                if (v[y >>> 2] >>> 24 - y % 4 * 8 & 255) {
                  u.sigBytes = y + 1;
                  break;
                }
            }
          }, l.pad.ZeroPadding;
        });
      }(ac)), ac.exports;
    }
    var cc = { exports: {} }, Wb = cc.exports, Nh;
    function qb() {
      return Nh || (Nh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Wb, function(l) {
          return l.pad.NoPadding = {
            pad: function() {
            },
            unpad: function() {
            }
          }, l.pad.NoPadding;
        });
      }(cc)), cc.exports;
    }
    var lc = { exports: {} }, Vb = lc.exports, Lh;
    function Hb() {
      return Lh || (Lh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Er());
        })(Vb, function(l) {
          return function(u) {
            var v = l, y = v.lib, k = y.CipherParams, C = v.enc, E = C.Hex, w = v.format;
            w.Hex = {
              /**
               * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
               *
               * @param {CipherParams} cipherParams The cipher params object.
               *
               * @return {string} The hexadecimally encoded string.
               *
               * @static
               *
               * @example
               *
               *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
               */
              stringify: function(A) {
                return A.ciphertext.toString(E);
              },
              /**
               * Converts a hexadecimally encoded ciphertext string to a cipher params object.
               *
               * @param {string} input The hexadecimally encoded string.
               *
               * @return {CipherParams} The cipher params object.
               *
               * @static
               *
               * @example
               *
               *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
               */
              parse: function(A) {
                var N = E.parse(A);
                return k.create({
                  ciphertext: N
                });
              }
            };
          }(), l.format.Hex;
        });
      }(lc)), lc.exports;
    }
    var uc = { exports: {} }, Gb = uc.exports, Uh;
    function Kb() {
      return Uh || (Uh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Ki(), Yi(), Ei(), Er());
        })(Gb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.BlockCipher, k = u.algo, C = [], E = [], w = [], A = [], N = [], O = [], R = [], T = [], F = [], U = [];
            (function() {
              for (var B = [], M = 0; M < 256; M++)
                M < 128 ? B[M] = M << 1 : B[M] = M << 1 ^ 283;
              for (var G = 0, K = 0, M = 0; M < 256; M++) {
                var Z = K ^ K << 1 ^ K << 2 ^ K << 3 ^ K << 4;
                Z = Z >>> 8 ^ Z & 255 ^ 99, C[G] = Z, E[Z] = G;
                var re = B[G], pe = B[re], Y = B[pe], J = B[Z] * 257 ^ Z * 16843008;
                w[G] = J << 24 | J >>> 8, A[G] = J << 16 | J >>> 16, N[G] = J << 8 | J >>> 24, O[G] = J;
                var J = Y * 16843009 ^ pe * 65537 ^ re * 257 ^ G * 16843008;
                R[Z] = J << 24 | J >>> 8, T[Z] = J << 16 | J >>> 16, F[Z] = J << 8 | J >>> 24, U[Z] = J, G ? (G = re ^ B[B[B[Y ^ re]]], K ^= B[B[K]]) : G = K = 1;
              }
            })();
            var P = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], D = k.AES = y.extend({
              _doReset: function() {
                var B;
                if (!(this._nRounds && this._keyPriorReset === this._key)) {
                  for (var M = this._keyPriorReset = this._key, G = M.words, K = M.sigBytes / 4, Z = this._nRounds = K + 6, re = (Z + 1) * 4, pe = this._keySchedule = [], Y = 0; Y < re; Y++)
                    Y < K ? pe[Y] = G[Y] : (B = pe[Y - 1], Y % K ? K > 6 && Y % K == 4 && (B = C[B >>> 24] << 24 | C[B >>> 16 & 255] << 16 | C[B >>> 8 & 255] << 8 | C[B & 255]) : (B = B << 8 | B >>> 24, B = C[B >>> 24] << 24 | C[B >>> 16 & 255] << 16 | C[B >>> 8 & 255] << 8 | C[B & 255], B ^= P[Y / K | 0] << 24), pe[Y] = pe[Y - K] ^ B);
                  for (var J = this._invKeySchedule = [], fe = 0; fe < re; fe++) {
                    var Y = re - fe;
                    if (fe % 4)
                      var B = pe[Y];
                    else
                      var B = pe[Y - 4];
                    fe < 4 || Y <= 4 ? J[fe] = B : J[fe] = R[C[B >>> 24]] ^ T[C[B >>> 16 & 255]] ^ F[C[B >>> 8 & 255]] ^ U[C[B & 255]];
                  }
                }
              },
              encryptBlock: function(B, M) {
                this._doCryptBlock(B, M, this._keySchedule, w, A, N, O, C);
              },
              decryptBlock: function(B, M) {
                var G = B[M + 1];
                B[M + 1] = B[M + 3], B[M + 3] = G, this._doCryptBlock(B, M, this._invKeySchedule, R, T, F, U, E);
                var G = B[M + 1];
                B[M + 1] = B[M + 3], B[M + 3] = G;
              },
              _doCryptBlock: function(B, M, G, K, Z, re, pe, Y) {
                for (var J = this._nRounds, fe = B[M] ^ G[0], z = B[M + 1] ^ G[1], le = B[M + 2] ^ G[2], ne = B[M + 3] ^ G[3], ve = 4, ue = 1; ue < J; ue++) {
                  var _e = K[fe >>> 24] ^ Z[z >>> 16 & 255] ^ re[le >>> 8 & 255] ^ pe[ne & 255] ^ G[ve++], Ee = K[z >>> 24] ^ Z[le >>> 16 & 255] ^ re[ne >>> 8 & 255] ^ pe[fe & 255] ^ G[ve++], Ce = K[le >>> 24] ^ Z[ne >>> 16 & 255] ^ re[fe >>> 8 & 255] ^ pe[z & 255] ^ G[ve++], te = K[ne >>> 24] ^ Z[fe >>> 16 & 255] ^ re[z >>> 8 & 255] ^ pe[le & 255] ^ G[ve++];
                  fe = _e, z = Ee, le = Ce, ne = te;
                }
                var _e = (Y[fe >>> 24] << 24 | Y[z >>> 16 & 255] << 16 | Y[le >>> 8 & 255] << 8 | Y[ne & 255]) ^ G[ve++], Ee = (Y[z >>> 24] << 24 | Y[le >>> 16 & 255] << 16 | Y[ne >>> 8 & 255] << 8 | Y[fe & 255]) ^ G[ve++], Ce = (Y[le >>> 24] << 24 | Y[ne >>> 16 & 255] << 16 | Y[fe >>> 8 & 255] << 8 | Y[z & 255]) ^ G[ve++], te = (Y[ne >>> 24] << 24 | Y[fe >>> 16 & 255] << 16 | Y[z >>> 8 & 255] << 8 | Y[le & 255]) ^ G[ve++];
                B[M] = _e, B[M + 1] = Ee, B[M + 2] = Ce, B[M + 3] = te;
              },
              keySize: 256 / 32
            });
            u.AES = y._createHelper(D);
          }(), l.AES;
        });
      }(uc)), uc.exports;
    }
    var fc = { exports: {} }, Yb = fc.exports, zh;
    function Zb() {
      return zh || (zh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Ki(), Yi(), Ei(), Er());
        })(Yb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.WordArray, k = v.BlockCipher, C = u.algo, E = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], w = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], A = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], N = [{
              0: 8421888,
              268435456: 32768,
              536870912: 8421378,
              805306368: 2,
              1073741824: 512,
              1342177280: 8421890,
              1610612736: 8389122,
              1879048192: 8388608,
              2147483648: 514,
              2415919104: 8389120,
              2684354560: 33280,
              2952790016: 8421376,
              3221225472: 32770,
              3489660928: 8388610,
              3758096384: 0,
              4026531840: 33282,
              134217728: 0,
              402653184: 8421890,
              671088640: 33282,
              939524096: 32768,
              1207959552: 8421888,
              1476395008: 512,
              1744830464: 8421378,
              2013265920: 2,
              2281701376: 8389120,
              2550136832: 33280,
              2818572288: 8421376,
              3087007744: 8389122,
              3355443200: 8388610,
              3623878656: 32770,
              3892314112: 514,
              4160749568: 8388608,
              1: 32768,
              268435457: 2,
              536870913: 8421888,
              805306369: 8388608,
              1073741825: 8421378,
              1342177281: 33280,
              1610612737: 512,
              1879048193: 8389122,
              2147483649: 8421890,
              2415919105: 8421376,
              2684354561: 8388610,
              2952790017: 33282,
              3221225473: 514,
              3489660929: 8389120,
              3758096385: 32770,
              4026531841: 0,
              134217729: 8421890,
              402653185: 8421376,
              671088641: 8388608,
              939524097: 512,
              1207959553: 32768,
              1476395009: 8388610,
              1744830465: 2,
              2013265921: 33282,
              2281701377: 32770,
              2550136833: 8389122,
              2818572289: 514,
              3087007745: 8421888,
              3355443201: 8389120,
              3623878657: 0,
              3892314113: 33280,
              4160749569: 8421378
            }, {
              0: 1074282512,
              16777216: 16384,
              33554432: 524288,
              50331648: 1074266128,
              67108864: 1073741840,
              83886080: 1074282496,
              100663296: 1073758208,
              117440512: 16,
              134217728: 540672,
              150994944: 1073758224,
              167772160: 1073741824,
              184549376: 540688,
              201326592: 524304,
              218103808: 0,
              234881024: 16400,
              251658240: 1074266112,
              8388608: 1073758208,
              25165824: 540688,
              41943040: 16,
              58720256: 1073758224,
              75497472: 1074282512,
              92274688: 1073741824,
              109051904: 524288,
              125829120: 1074266128,
              142606336: 524304,
              159383552: 0,
              176160768: 16384,
              192937984: 1074266112,
              209715200: 1073741840,
              226492416: 540672,
              243269632: 1074282496,
              260046848: 16400,
              268435456: 0,
              285212672: 1074266128,
              301989888: 1073758224,
              318767104: 1074282496,
              335544320: 1074266112,
              352321536: 16,
              369098752: 540688,
              385875968: 16384,
              402653184: 16400,
              419430400: 524288,
              436207616: 524304,
              452984832: 1073741840,
              469762048: 540672,
              486539264: 1073758208,
              503316480: 1073741824,
              520093696: 1074282512,
              276824064: 540688,
              293601280: 524288,
              310378496: 1074266112,
              327155712: 16384,
              343932928: 1073758208,
              360710144: 1074282512,
              377487360: 16,
              394264576: 1073741824,
              411041792: 1074282496,
              427819008: 1073741840,
              444596224: 1073758224,
              461373440: 524304,
              478150656: 0,
              494927872: 16400,
              511705088: 1074266128,
              528482304: 540672
            }, {
              0: 260,
              1048576: 0,
              2097152: 67109120,
              3145728: 65796,
              4194304: 65540,
              5242880: 67108868,
              6291456: 67174660,
              7340032: 67174400,
              8388608: 67108864,
              9437184: 67174656,
              10485760: 65792,
              11534336: 67174404,
              12582912: 67109124,
              13631488: 65536,
              14680064: 4,
              15728640: 256,
              524288: 67174656,
              1572864: 67174404,
              2621440: 0,
              3670016: 67109120,
              4718592: 67108868,
              5767168: 65536,
              6815744: 65540,
              7864320: 260,
              8912896: 4,
              9961472: 256,
              11010048: 67174400,
              12058624: 65796,
              13107200: 65792,
              14155776: 67109124,
              15204352: 67174660,
              16252928: 67108864,
              16777216: 67174656,
              17825792: 65540,
              18874368: 65536,
              19922944: 67109120,
              20971520: 256,
              22020096: 67174660,
              23068672: 67108868,
              24117248: 0,
              25165824: 67109124,
              26214400: 67108864,
              27262976: 4,
              28311552: 65792,
              29360128: 67174400,
              30408704: 260,
              31457280: 65796,
              32505856: 67174404,
              17301504: 67108864,
              18350080: 260,
              19398656: 67174656,
              20447232: 0,
              21495808: 65540,
              22544384: 67109120,
              23592960: 256,
              24641536: 67174404,
              25690112: 65536,
              26738688: 67174660,
              27787264: 65796,
              28835840: 67108868,
              29884416: 67109124,
              30932992: 67174400,
              31981568: 4,
              33030144: 65792
            }, {
              0: 2151682048,
              65536: 2147487808,
              131072: 4198464,
              196608: 2151677952,
              262144: 0,
              327680: 4198400,
              393216: 2147483712,
              458752: 4194368,
              524288: 2147483648,
              589824: 4194304,
              655360: 64,
              720896: 2147487744,
              786432: 2151678016,
              851968: 4160,
              917504: 4096,
              983040: 2151682112,
              32768: 2147487808,
              98304: 64,
              163840: 2151678016,
              229376: 2147487744,
              294912: 4198400,
              360448: 2151682112,
              425984: 0,
              491520: 2151677952,
              557056: 4096,
              622592: 2151682048,
              688128: 4194304,
              753664: 4160,
              819200: 2147483648,
              884736: 4194368,
              950272: 4198464,
              1015808: 2147483712,
              1048576: 4194368,
              1114112: 4198400,
              1179648: 2147483712,
              1245184: 0,
              1310720: 4160,
              1376256: 2151678016,
              1441792: 2151682048,
              1507328: 2147487808,
              1572864: 2151682112,
              1638400: 2147483648,
              1703936: 2151677952,
              1769472: 4198464,
              1835008: 2147487744,
              1900544: 4194304,
              1966080: 64,
              2031616: 4096,
              1081344: 2151677952,
              1146880: 2151682112,
              1212416: 0,
              1277952: 4198400,
              1343488: 4194368,
              1409024: 2147483648,
              1474560: 2147487808,
              1540096: 64,
              1605632: 2147483712,
              1671168: 4096,
              1736704: 2147487744,
              1802240: 2151678016,
              1867776: 4160,
              1933312: 2151682048,
              1998848: 4194304,
              2064384: 4198464
            }, {
              0: 128,
              4096: 17039360,
              8192: 262144,
              12288: 536870912,
              16384: 537133184,
              20480: 16777344,
              24576: 553648256,
              28672: 262272,
              32768: 16777216,
              36864: 537133056,
              40960: 536871040,
              45056: 553910400,
              49152: 553910272,
              53248: 0,
              57344: 17039488,
              61440: 553648128,
              2048: 17039488,
              6144: 553648256,
              10240: 128,
              14336: 17039360,
              18432: 262144,
              22528: 537133184,
              26624: 553910272,
              30720: 536870912,
              34816: 537133056,
              38912: 0,
              43008: 553910400,
              47104: 16777344,
              51200: 536871040,
              55296: 553648128,
              59392: 16777216,
              63488: 262272,
              65536: 262144,
              69632: 128,
              73728: 536870912,
              77824: 553648256,
              81920: 16777344,
              86016: 553910272,
              90112: 537133184,
              94208: 16777216,
              98304: 553910400,
              102400: 553648128,
              106496: 17039360,
              110592: 537133056,
              114688: 262272,
              118784: 536871040,
              122880: 0,
              126976: 17039488,
              67584: 553648256,
              71680: 16777216,
              75776: 17039360,
              79872: 537133184,
              83968: 536870912,
              88064: 17039488,
              92160: 128,
              96256: 553910272,
              100352: 262272,
              104448: 553910400,
              108544: 0,
              112640: 553648128,
              116736: 16777344,
              120832: 262144,
              124928: 537133056,
              129024: 536871040
            }, {
              0: 268435464,
              256: 8192,
              512: 270532608,
              768: 270540808,
              1024: 268443648,
              1280: 2097152,
              1536: 2097160,
              1792: 268435456,
              2048: 0,
              2304: 268443656,
              2560: 2105344,
              2816: 8,
              3072: 270532616,
              3328: 2105352,
              3584: 8200,
              3840: 270540800,
              128: 270532608,
              384: 270540808,
              640: 8,
              896: 2097152,
              1152: 2105352,
              1408: 268435464,
              1664: 268443648,
              1920: 8200,
              2176: 2097160,
              2432: 8192,
              2688: 268443656,
              2944: 270532616,
              3200: 0,
              3456: 270540800,
              3712: 2105344,
              3968: 268435456,
              4096: 268443648,
              4352: 270532616,
              4608: 270540808,
              4864: 8200,
              5120: 2097152,
              5376: 268435456,
              5632: 268435464,
              5888: 2105344,
              6144: 2105352,
              6400: 0,
              6656: 8,
              6912: 270532608,
              7168: 8192,
              7424: 268443656,
              7680: 270540800,
              7936: 2097160,
              4224: 8,
              4480: 2105344,
              4736: 2097152,
              4992: 268435464,
              5248: 268443648,
              5504: 8200,
              5760: 270540808,
              6016: 270532608,
              6272: 270540800,
              6528: 270532616,
              6784: 8192,
              7040: 2105352,
              7296: 2097160,
              7552: 0,
              7808: 268435456,
              8064: 268443656
            }, {
              0: 1048576,
              16: 33555457,
              32: 1024,
              48: 1049601,
              64: 34604033,
              80: 0,
              96: 1,
              112: 34603009,
              128: 33555456,
              144: 1048577,
              160: 33554433,
              176: 34604032,
              192: 34603008,
              208: 1025,
              224: 1049600,
              240: 33554432,
              8: 34603009,
              24: 0,
              40: 33555457,
              56: 34604032,
              72: 1048576,
              88: 33554433,
              104: 33554432,
              120: 1025,
              136: 1049601,
              152: 33555456,
              168: 34603008,
              184: 1048577,
              200: 1024,
              216: 34604033,
              232: 1,
              248: 1049600,
              256: 33554432,
              272: 1048576,
              288: 33555457,
              304: 34603009,
              320: 1048577,
              336: 33555456,
              352: 34604032,
              368: 1049601,
              384: 1025,
              400: 34604033,
              416: 1049600,
              432: 1,
              448: 0,
              464: 34603008,
              480: 33554433,
              496: 1024,
              264: 1049600,
              280: 33555457,
              296: 34603009,
              312: 1,
              328: 33554432,
              344: 1048576,
              360: 1025,
              376: 34604032,
              392: 33554433,
              408: 34603008,
              424: 0,
              440: 34604033,
              456: 1049601,
              472: 1024,
              488: 33555456,
              504: 1048577
            }, {
              0: 134219808,
              1: 131072,
              2: 134217728,
              3: 32,
              4: 131104,
              5: 134350880,
              6: 134350848,
              7: 2048,
              8: 134348800,
              9: 134219776,
              10: 133120,
              11: 134348832,
              12: 2080,
              13: 0,
              14: 134217760,
              15: 133152,
              2147483648: 2048,
              2147483649: 134350880,
              2147483650: 134219808,
              2147483651: 134217728,
              2147483652: 134348800,
              2147483653: 133120,
              2147483654: 133152,
              2147483655: 32,
              2147483656: 134217760,
              2147483657: 2080,
              2147483658: 131104,
              2147483659: 134350848,
              2147483660: 0,
              2147483661: 134348832,
              2147483662: 134219776,
              2147483663: 131072,
              16: 133152,
              17: 134350848,
              18: 32,
              19: 2048,
              20: 134219776,
              21: 134217760,
              22: 134348832,
              23: 131072,
              24: 0,
              25: 131104,
              26: 134348800,
              27: 134219808,
              28: 134350880,
              29: 133120,
              30: 2080,
              31: 134217728,
              2147483664: 131072,
              2147483665: 2048,
              2147483666: 134348832,
              2147483667: 133152,
              2147483668: 32,
              2147483669: 134348800,
              2147483670: 134217728,
              2147483671: 134219808,
              2147483672: 134350880,
              2147483673: 134217760,
              2147483674: 134219776,
              2147483675: 0,
              2147483676: 133120,
              2147483677: 2080,
              2147483678: 131104,
              2147483679: 134350848
            }], O = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], R = C.DES = k.extend({
              _doReset: function() {
                for (var P = this._key, D = P.words, B = [], M = 0; M < 56; M++) {
                  var G = E[M] - 1;
                  B[M] = D[G >>> 5] >>> 31 - G % 32 & 1;
                }
                for (var K = this._subKeys = [], Z = 0; Z < 16; Z++) {
                  for (var re = K[Z] = [], pe = A[Z], M = 0; M < 24; M++)
                    re[M / 6 | 0] |= B[(w[M] - 1 + pe) % 28] << 31 - M % 6, re[4 + (M / 6 | 0)] |= B[28 + (w[M + 24] - 1 + pe) % 28] << 31 - M % 6;
                  re[0] = re[0] << 1 | re[0] >>> 31;
                  for (var M = 1; M < 7; M++)
                    re[M] = re[M] >>> (M - 1) * 4 + 3;
                  re[7] = re[7] << 5 | re[7] >>> 27;
                }
                for (var Y = this._invSubKeys = [], M = 0; M < 16; M++)
                  Y[M] = K[15 - M];
              },
              encryptBlock: function(P, D) {
                this._doCryptBlock(P, D, this._subKeys);
              },
              decryptBlock: function(P, D) {
                this._doCryptBlock(P, D, this._invSubKeys);
              },
              _doCryptBlock: function(P, D, B) {
                this._lBlock = P[D], this._rBlock = P[D + 1], T.call(this, 4, 252645135), T.call(this, 16, 65535), F.call(this, 2, 858993459), F.call(this, 8, 16711935), T.call(this, 1, 1431655765);
                for (var M = 0; M < 16; M++) {
                  for (var G = B[M], K = this._lBlock, Z = this._rBlock, re = 0, pe = 0; pe < 8; pe++)
                    re |= N[pe][((Z ^ G[pe]) & O[pe]) >>> 0];
                  this._lBlock = Z, this._rBlock = K ^ re;
                }
                var Y = this._lBlock;
                this._lBlock = this._rBlock, this._rBlock = Y, T.call(this, 1, 1431655765), F.call(this, 8, 16711935), F.call(this, 2, 858993459), T.call(this, 16, 65535), T.call(this, 4, 252645135), P[D] = this._lBlock, P[D + 1] = this._rBlock;
              },
              keySize: 64 / 32,
              ivSize: 64 / 32,
              blockSize: 64 / 32
            });
            function T(P, D) {
              var B = (this._lBlock >>> P ^ this._rBlock) & D;
              this._rBlock ^= B, this._lBlock ^= B << P;
            }
            function F(P, D) {
              var B = (this._rBlock >>> P ^ this._lBlock) & D;
              this._lBlock ^= B, this._rBlock ^= B << P;
            }
            u.DES = k._createHelper(R);
            var U = C.TripleDES = k.extend({
              _doReset: function() {
                var P = this._key, D = P.words;
                if (D.length !== 2 && D.length !== 4 && D.length < 6)
                  throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                var B = D.slice(0, 2), M = D.length < 4 ? D.slice(0, 2) : D.slice(2, 4), G = D.length < 6 ? D.slice(0, 2) : D.slice(4, 6);
                this._des1 = R.createEncryptor(y.create(B)), this._des2 = R.createEncryptor(y.create(M)), this._des3 = R.createEncryptor(y.create(G));
              },
              encryptBlock: function(P, D) {
                this._des1.encryptBlock(P, D), this._des2.decryptBlock(P, D), this._des3.encryptBlock(P, D);
              },
              decryptBlock: function(P, D) {
                this._des3.decryptBlock(P, D), this._des2.encryptBlock(P, D), this._des1.decryptBlock(P, D);
              },
              keySize: 192 / 32,
              ivSize: 64 / 32,
              blockSize: 64 / 32
            });
            u.TripleDES = k._createHelper(U);
          }(), l.TripleDES;
        });
      }(fc)), fc.exports;
    }
    var dc = { exports: {} }, Xb = dc.exports, jh;
    function Qb() {
      return jh || (jh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Ki(), Yi(), Ei(), Er());
        })(Xb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.StreamCipher, k = u.algo, C = k.RC4 = y.extend({
              _doReset: function() {
                for (var A = this._key, N = A.words, O = A.sigBytes, R = this._S = [], T = 0; T < 256; T++)
                  R[T] = T;
                for (var T = 0, F = 0; T < 256; T++) {
                  var U = T % O, P = N[U >>> 2] >>> 24 - U % 4 * 8 & 255;
                  F = (F + R[T] + P) % 256;
                  var D = R[T];
                  R[T] = R[F], R[F] = D;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function(A, N) {
                A[N] ^= E.call(this);
              },
              keySize: 256 / 32,
              ivSize: 0
            });
            function E() {
              for (var A = this._S, N = this._i, O = this._j, R = 0, T = 0; T < 4; T++) {
                N = (N + 1) % 256, O = (O + A[N]) % 256;
                var F = A[N];
                A[N] = A[O], A[O] = F, R |= A[(A[N] + A[O]) % 256] << 24 - T * 8;
              }
              return this._i = N, this._j = O, R;
            }
            u.RC4 = y._createHelper(C);
            var w = k.RC4Drop = C.extend({
              /**
               * Configuration options.
               *
               * @property {number} drop The number of keystream words to drop. Default 192
               */
              cfg: C.cfg.extend({
                drop: 192
              }),
              _doReset: function() {
                C._doReset.call(this);
                for (var A = this.cfg.drop; A > 0; A--)
                  E.call(this);
              }
            });
            u.RC4Drop = y._createHelper(w);
          }(), l.RC4;
        });
      }(dc)), dc.exports;
    }
    var hc = { exports: {} }, Jb = hc.exports, $h;
    function ew() {
      return $h || ($h = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Ki(), Yi(), Ei(), Er());
        })(Jb, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.StreamCipher, k = u.algo, C = [], E = [], w = [], A = k.Rabbit = y.extend({
              _doReset: function() {
                for (var O = this._key.words, R = this.cfg.iv, T = 0; T < 4; T++)
                  O[T] = (O[T] << 8 | O[T] >>> 24) & 16711935 | (O[T] << 24 | O[T] >>> 8) & 4278255360;
                var F = this._X = [O[0], O[3] << 16 | O[2] >>> 16, O[1], O[0] << 16 | O[3] >>> 16, O[2], O[1] << 16 | O[0] >>> 16, O[3], O[2] << 16 | O[1] >>> 16], U = this._C = [O[2] << 16 | O[2] >>> 16, O[0] & 4294901760 | O[1] & 65535, O[3] << 16 | O[3] >>> 16, O[1] & 4294901760 | O[2] & 65535, O[0] << 16 | O[0] >>> 16, O[2] & 4294901760 | O[3] & 65535, O[1] << 16 | O[1] >>> 16, O[3] & 4294901760 | O[0] & 65535];
                this._b = 0;
                for (var T = 0; T < 4; T++)
                  N.call(this);
                for (var T = 0; T < 8; T++)
                  U[T] ^= F[T + 4 & 7];
                if (R) {
                  var P = R.words, D = P[0], B = P[1], M = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, G = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, K = M >>> 16 | G & 4294901760, Z = G << 16 | M & 65535;
                  U[0] ^= M, U[1] ^= K, U[2] ^= G, U[3] ^= Z, U[4] ^= M, U[5] ^= K, U[6] ^= G, U[7] ^= Z;
                  for (var T = 0; T < 4; T++)
                    N.call(this);
                }
              },
              _doProcessBlock: function(O, R) {
                var T = this._X;
                N.call(this), C[0] = T[0] ^ T[5] >>> 16 ^ T[3] << 16, C[1] = T[2] ^ T[7] >>> 16 ^ T[5] << 16, C[2] = T[4] ^ T[1] >>> 16 ^ T[7] << 16, C[3] = T[6] ^ T[3] >>> 16 ^ T[1] << 16;
                for (var F = 0; F < 4; F++)
                  C[F] = (C[F] << 8 | C[F] >>> 24) & 16711935 | (C[F] << 24 | C[F] >>> 8) & 4278255360, O[R + F] ^= C[F];
              },
              blockSize: 128 / 32,
              ivSize: 64 / 32
            });
            function N() {
              for (var O = this._X, R = this._C, T = 0; T < 8; T++)
                E[T] = R[T];
              R[0] = R[0] + 1295307597 + this._b | 0, R[1] = R[1] + 3545052371 + (R[0] >>> 0 < E[0] >>> 0 ? 1 : 0) | 0, R[2] = R[2] + 886263092 + (R[1] >>> 0 < E[1] >>> 0 ? 1 : 0) | 0, R[3] = R[3] + 1295307597 + (R[2] >>> 0 < E[2] >>> 0 ? 1 : 0) | 0, R[4] = R[4] + 3545052371 + (R[3] >>> 0 < E[3] >>> 0 ? 1 : 0) | 0, R[5] = R[5] + 886263092 + (R[4] >>> 0 < E[4] >>> 0 ? 1 : 0) | 0, R[6] = R[6] + 1295307597 + (R[5] >>> 0 < E[5] >>> 0 ? 1 : 0) | 0, R[7] = R[7] + 3545052371 + (R[6] >>> 0 < E[6] >>> 0 ? 1 : 0) | 0, this._b = R[7] >>> 0 < E[7] >>> 0 ? 1 : 0;
              for (var T = 0; T < 8; T++) {
                var F = O[T] + R[T], U = F & 65535, P = F >>> 16, D = ((U * U >>> 17) + U * P >>> 15) + P * P, B = ((F & 4294901760) * F | 0) + ((F & 65535) * F | 0);
                w[T] = D ^ B;
              }
              O[0] = w[0] + (w[7] << 16 | w[7] >>> 16) + (w[6] << 16 | w[6] >>> 16) | 0, O[1] = w[1] + (w[0] << 8 | w[0] >>> 24) + w[7] | 0, O[2] = w[2] + (w[1] << 16 | w[1] >>> 16) + (w[0] << 16 | w[0] >>> 16) | 0, O[3] = w[3] + (w[2] << 8 | w[2] >>> 24) + w[1] | 0, O[4] = w[4] + (w[3] << 16 | w[3] >>> 16) + (w[2] << 16 | w[2] >>> 16) | 0, O[5] = w[5] + (w[4] << 8 | w[4] >>> 24) + w[3] | 0, O[6] = w[6] + (w[5] << 16 | w[5] >>> 16) + (w[4] << 16 | w[4] >>> 16) | 0, O[7] = w[7] + (w[6] << 8 | w[6] >>> 24) + w[5] | 0;
            }
            u.Rabbit = y._createHelper(A);
          }(), l.Rabbit;
        });
      }(hc)), hc.exports;
    }
    var pc = { exports: {} }, tw = pc.exports, Wh;
    function rw() {
      return Wh || (Wh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Ki(), Yi(), Ei(), Er());
        })(tw, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.StreamCipher, k = u.algo, C = [], E = [], w = [], A = k.RabbitLegacy = y.extend({
              _doReset: function() {
                var O = this._key.words, R = this.cfg.iv, T = this._X = [O[0], O[3] << 16 | O[2] >>> 16, O[1], O[0] << 16 | O[3] >>> 16, O[2], O[1] << 16 | O[0] >>> 16, O[3], O[2] << 16 | O[1] >>> 16], F = this._C = [O[2] << 16 | O[2] >>> 16, O[0] & 4294901760 | O[1] & 65535, O[3] << 16 | O[3] >>> 16, O[1] & 4294901760 | O[2] & 65535, O[0] << 16 | O[0] >>> 16, O[2] & 4294901760 | O[3] & 65535, O[1] << 16 | O[1] >>> 16, O[3] & 4294901760 | O[0] & 65535];
                this._b = 0;
                for (var U = 0; U < 4; U++)
                  N.call(this);
                for (var U = 0; U < 8; U++)
                  F[U] ^= T[U + 4 & 7];
                if (R) {
                  var P = R.words, D = P[0], B = P[1], M = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, G = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, K = M >>> 16 | G & 4294901760, Z = G << 16 | M & 65535;
                  F[0] ^= M, F[1] ^= K, F[2] ^= G, F[3] ^= Z, F[4] ^= M, F[5] ^= K, F[6] ^= G, F[7] ^= Z;
                  for (var U = 0; U < 4; U++)
                    N.call(this);
                }
              },
              _doProcessBlock: function(O, R) {
                var T = this._X;
                N.call(this), C[0] = T[0] ^ T[5] >>> 16 ^ T[3] << 16, C[1] = T[2] ^ T[7] >>> 16 ^ T[5] << 16, C[2] = T[4] ^ T[1] >>> 16 ^ T[7] << 16, C[3] = T[6] ^ T[3] >>> 16 ^ T[1] << 16;
                for (var F = 0; F < 4; F++)
                  C[F] = (C[F] << 8 | C[F] >>> 24) & 16711935 | (C[F] << 24 | C[F] >>> 8) & 4278255360, O[R + F] ^= C[F];
              },
              blockSize: 128 / 32,
              ivSize: 64 / 32
            });
            function N() {
              for (var O = this._X, R = this._C, T = 0; T < 8; T++)
                E[T] = R[T];
              R[0] = R[0] + 1295307597 + this._b | 0, R[1] = R[1] + 3545052371 + (R[0] >>> 0 < E[0] >>> 0 ? 1 : 0) | 0, R[2] = R[2] + 886263092 + (R[1] >>> 0 < E[1] >>> 0 ? 1 : 0) | 0, R[3] = R[3] + 1295307597 + (R[2] >>> 0 < E[2] >>> 0 ? 1 : 0) | 0, R[4] = R[4] + 3545052371 + (R[3] >>> 0 < E[3] >>> 0 ? 1 : 0) | 0, R[5] = R[5] + 886263092 + (R[4] >>> 0 < E[4] >>> 0 ? 1 : 0) | 0, R[6] = R[6] + 1295307597 + (R[5] >>> 0 < E[5] >>> 0 ? 1 : 0) | 0, R[7] = R[7] + 3545052371 + (R[6] >>> 0 < E[6] >>> 0 ? 1 : 0) | 0, this._b = R[7] >>> 0 < E[7] >>> 0 ? 1 : 0;
              for (var T = 0; T < 8; T++) {
                var F = O[T] + R[T], U = F & 65535, P = F >>> 16, D = ((U * U >>> 17) + U * P >>> 15) + P * P, B = ((F & 4294901760) * F | 0) + ((F & 65535) * F | 0);
                w[T] = D ^ B;
              }
              O[0] = w[0] + (w[7] << 16 | w[7] >>> 16) + (w[6] << 16 | w[6] >>> 16) | 0, O[1] = w[1] + (w[0] << 8 | w[0] >>> 24) + w[7] | 0, O[2] = w[2] + (w[1] << 16 | w[1] >>> 16) + (w[0] << 16 | w[0] >>> 16) | 0, O[3] = w[3] + (w[2] << 8 | w[2] >>> 24) + w[1] | 0, O[4] = w[4] + (w[3] << 16 | w[3] >>> 16) + (w[2] << 16 | w[2] >>> 16) | 0, O[5] = w[5] + (w[4] << 8 | w[4] >>> 24) + w[3] | 0, O[6] = w[6] + (w[5] << 16 | w[5] >>> 16) + (w[4] << 16 | w[4] >>> 16) | 0, O[7] = w[7] + (w[6] << 8 | w[6] >>> 24) + w[5] | 0;
            }
            u.RabbitLegacy = y._createHelper(A);
          }(), l.RabbitLegacy;
        });
      }(pc)), pc.exports;
    }
    var vc = { exports: {} }, nw = vc.exports, qh;
    function iw() {
      return qh || (qh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Ki(), Yi(), Ei(), Er());
        })(nw, function(l) {
          return function() {
            var u = l, v = u.lib, y = v.BlockCipher, k = u.algo;
            const C = 16, E = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], w = [[3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946], [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055], [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504], [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]];
            var A = {
              pbox: [],
              sbox: []
            };
            function N(U, P) {
              let D = P >> 24 & 255, B = P >> 16 & 255, M = P >> 8 & 255, G = P & 255, K = U.sbox[0][D] + U.sbox[1][B];
              return K = K ^ U.sbox[2][M], K = K + U.sbox[3][G], K;
            }
            function O(U, P, D) {
              let B = P, M = D, G;
              for (let K = 0; K < C; ++K)
                B = B ^ U.pbox[K], M = N(U, B) ^ M, G = B, B = M, M = G;
              return G = B, B = M, M = G, M = M ^ U.pbox[C], B = B ^ U.pbox[C + 1], {
                left: B,
                right: M
              };
            }
            function R(U, P, D) {
              let B = P, M = D, G;
              for (let K = C + 1; K > 1; --K)
                B = B ^ U.pbox[K], M = N(U, B) ^ M, G = B, B = M, M = G;
              return G = B, B = M, M = G, M = M ^ U.pbox[1], B = B ^ U.pbox[0], {
                left: B,
                right: M
              };
            }
            function T(U, P, D) {
              for (let Z = 0; Z < 4; Z++) {
                U.sbox[Z] = [];
                for (let re = 0; re < 256; re++)
                  U.sbox[Z][re] = w[Z][re];
              }
              let B = 0;
              for (let Z = 0; Z < C + 2; Z++)
                U.pbox[Z] = E[Z] ^ P[B], B++, B >= D && (B = 0);
              let M = 0, G = 0, K = 0;
              for (let Z = 0; Z < C + 2; Z += 2)
                K = O(U, M, G), M = K.left, G = K.right, U.pbox[Z] = M, U.pbox[Z + 1] = G;
              for (let Z = 0; Z < 4; Z++)
                for (let re = 0; re < 256; re += 2)
                  K = O(U, M, G), M = K.left, G = K.right, U.sbox[Z][re] = M, U.sbox[Z][re + 1] = G;
              return !0;
            }
            var F = k.Blowfish = y.extend({
              _doReset: function() {
                if (this._keyPriorReset !== this._key) {
                  var U = this._keyPriorReset = this._key, P = U.words, D = U.sigBytes / 4;
                  T(A, P, D);
                }
              },
              encryptBlock: function(U, P) {
                var D = O(A, U[P], U[P + 1]);
                U[P] = D.left, U[P + 1] = D.right;
              },
              decryptBlock: function(U, P) {
                var D = R(A, U[P], U[P + 1]);
                U[P] = D.left, U[P + 1] = D.right;
              },
              blockSize: 64 / 32,
              keySize: 128 / 32,
              ivSize: 64 / 32
            });
            u.Blowfish = y._createHelper(F);
          }(), l.Blowfish;
        });
      }(vc)), vc.exports;
    }
    var ow = $t.exports, Vh;
    function sw() {
      return Vh || (Vh = 1, function(h, a) {
        (function(l, u, v) {
          h.exports = u(it(), Fa(), rb(), ib(), Ki(), ab(), Yi(), gh(), ru(), db(), bh(), vb(), mb(), xb(), nu(), _b(), Ei(), Er(), Ab(), Ib(), Db(), Pb(), Tb(), Fb(), Lb(), zb(), $b(), qb(), Hb(), Kb(), Zb(), Qb(), ew(), rw(), iw());
        })(ow, function(l) {
          return l;
        });
      }($t)), $t.exports;
    }
    var iu = sw(), ps = t("key"), vs = t("logger"), Zi = t("encryptLocalStorage");
    class aw {
      constructor() {
        Object.defineProperty(this, ps, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, vs, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Zi, {
          writable: !0,
          value: !1
        });
      }
      set logger(a) {
        r(this, vs)[vs] = a;
      }
      get logger() {
        return r(this, vs)[vs];
      }
      set key(a) {
        r(this, ps)[ps] = a;
      }
      get key() {
        return r(this, ps)[ps];
      }
      set enableLocalStorageEncryption(a) {
        r(this, Zi)[Zi] = a;
      }
      get enableLocalStorageEncryption() {
        return r(this, Zi)[Zi];
      }
      shouldEncrypt(a) {
        return r(this, Zi)[Zi] && Ta.includes(a);
      }
      // For backwards compatibility, we should decrypt even if encrypt is false.
      // This means someone switched it on and then off.
      shouldDecrypt(a) {
        return Ta.includes(a);
      }
      encrypt(a) {
        return iu.AES.encrypt(a, this.key).toString();
      }
      decrypt(a) {
        const l = iu.AES.decrypt(a, this.key).toString(iu.enc.Utf8);
        return l === "" ? a : l;
      }
    }
    const ii = new aw();
    class H {
      static save(a, l) {
        if (!a || !l)
          return !1;
        if (this._isLocalStorageSupported())
          return ii.shouldEncrypt(a) ? (localStorage.setItem(a, ii.encrypt(l)), !0) : (localStorage.setItem(a, typeof l == "string" ? l : JSON.stringify(l)), !0);
      }
      static read(a) {
        if (!a)
          return !1;
        let l = null;
        if (this._isLocalStorageSupported() && (l = localStorage.getItem(a)), l != null)
          try {
            ii.shouldDecrypt(a) && (l = ii.decrypt(l)), l = JSON.parse(l);
          } catch {
          }
        return l;
      }
      static remove(a) {
        if (!a)
          return !1;
        if (this._isLocalStorageSupported())
          return localStorage.removeItem(a), !0;
      }
      static removeCookie(a, l) {
        let u = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        l && (u = u + " domain=" + l + "; path=/"), document.cookie = u;
      }
      static createCookie(a, l, u, v) {
        let y = "", k = "";
        if (u) {
          const C = /* @__PURE__ */ new Date();
          C.setTime(C.getTime() + u * 1e3), y = "; expires=" + C.toGMTString();
        }
        v && (k = "; domain=" + v), l = encodeURIComponent(l), document.cookie = a + "=" + l + y + k + "; path=/";
      }
      static readCookie(a) {
        const l = a + "=", u = document.cookie.split(";");
        for (let v = 0; v < u.length; v++) {
          let y = u[v];
          for (; y.charAt(0) === " "; )
            y = y.substring(1, y.length);
          if (y.indexOf(l) == 0)
            return decodeURIComponent(y.substring(l.length, y.length));
        }
        return null;
      }
      static _isLocalStorageSupported() {
        return "localStorage" in window && window.localStorage !== null && typeof window.localStorage.setItem == "function";
      }
      static saveToLSorCookie(a, l) {
        if (l != null)
          try {
            this._isLocalStorageSupported() ? this.save(a, encodeURIComponent(JSON.stringify(l))) : a === V ? this.createCookie(a, encodeURIComponent(l), 0, window.location.hostname) : this.createCookie(a, encodeURIComponent(JSON.stringify(l)), 0, window.location.hostname), q.globalCache[a] = l;
          } catch {
          }
      }
      static readFromLSorCookie(a) {
        let l;
        if (q.globalCache.hasOwnProperty(a))
          return q.globalCache[a];
        if (this._isLocalStorageSupported() ? l = this.read(a) : l = this.readCookie(a), l != null && !(typeof l.trim == "function" && l.trim() === "")) {
          let u;
          try {
            u = JSON.parse(decodeURIComponent(l));
          } catch {
            u = decodeURIComponent(l);
          }
          return q.globalCache[a] = u, u;
        }
      }
      static createBroadCookie(a, l, u, v) {
        if (v) {
          let k = q.broadDomain;
          if (k == null) {
            const C = v.split(".");
            let E = "";
            for (let w = C.length - 1; w >= 0; w--) {
              if (w === 0 ? E = C[w] + E : E = "." + C[w] + E, this.readCookie(a)) {
                var y = "test_" + a + w;
                if (this.createCookie(y, l, 10, E), this.readCookie(y))
                  this.removeCookie(y, E);
                else
                  continue;
              }
              if (this.createCookie(a, l, u, E), this.readCookie(a) == l) {
                k = E, q.broadDomain = k;
                break;
              }
            }
          } else
            this.createCookie(a, l, u, k);
        } else
          this.createCookie(a, l, u, v);
      }
      static getMetaProp(a) {
        const l = this.readFromLSorCookie(Me);
        if (l != null)
          return l[a];
      }
      static setMetaProp(a, l) {
        if (this._isLocalStorageSupported()) {
          let u = this.readFromLSorCookie(Me);
          u == null && (u = {}), l === void 0 ? delete u[a] : u[a] = l, this.saveToLSorCookie(Me, u);
        }
      }
      static getAndClearMetaProp(a) {
        const l = this.getMetaProp(a);
        return this.setMetaProp(a, void 0), l;
      }
      static setInstantDeleteFlagInK() {
        let a = this.readFromLSorCookie(ie);
        a == null && (a = {}), a.flag = !0, this.saveToLSorCookie(ie, a);
      }
      static backupEvent(a, l, u) {
        let v = this.readFromLSorCookie(mt);
        typeof v > "u" && (v = {}), v[l] = {
          q: a
        }, this.saveToLSorCookie(mt, v), u.debug("stored in ".concat(mt, " reqNo : ").concat(l, " -> ").concat(a));
      }
      static removeBackup(a, l) {
        const u = this.readFromLSorCookie(mt);
        typeof u < "u" && u !== null && typeof u[a] < "u" && (l.debug("del event: ".concat(a, " data-> ").concat(u[a].q)), delete u[a], this.saveToLSorCookie(mt, u));
      }
    }
    const q = {
      globalCache: {
        gcookie: null,
        REQ_N: 0,
        RESP_N: 0
      },
      LRU_CACHE: null,
      globalProfileMap: void 0,
      globalEventsMap: void 0,
      blockRequest: !1,
      isOptInRequest: !1,
      broadDomain: null,
      webPushEnabled: null,
      campaignDivMap: {},
      currentSessionId: null,
      wiz_counter: 0,
      // to keep track of number of times we load the body
      notifApi: {
        notifEnabledFromApi: !1
      },
      // helper variable to handle race condition and check when notifications were called
      unsubGroups: [],
      updatedCategoryLong: null,
      inbox: null,
      isPrivacyArrPushed: !1,
      privacyArray: [],
      offline: !1,
      location: null,
      dismissSpamControl: !1,
      globalUnsubscribe: !0,
      flutterVersion: null,
      variableStore: {},
      pushConfig: null
      // domain: window.location.hostname, url -> getHostName()
      // gcookie: -> device
    };
    var St = t("keyOrder"), Xi = t("deleteFromObject");
    class Hh {
      constructor(a) {
        Object.defineProperty(this, Xi, {
          value: cw
        }), Object.defineProperty(this, St, {
          writable: !0,
          value: void 0
        }), this.max = a;
        let l = H.readFromLSorCookie(Ut);
        if (l) {
          const u = {};
          r(this, St)[St] = [], l = l.cache;
          for (const v in l)
            l.hasOwnProperty(v) && (u[l[v][0]] = l[v][1], r(this, St)[St].push(l[v][0]));
          this.cache = u;
        } else
          this.cache = {}, r(this, St)[St] = [];
      }
      get(a) {
        const l = this.cache[a];
        return l && (this.cache = r(this, Xi)[Xi](a, this.cache), this.cache[a] = l, r(this, St)[St].push(a)), this.saveCacheToLS(this.cache), l;
      }
      set(a, l) {
        const u = this.cache[a], v = r(this, St)[St];
        u != null ? this.cache = r(this, Xi)[Xi](a, this.cache) : v.length === this.max && (this.cache = r(this, Xi)[Xi](v[0], this.cache)), this.cache[a] = l, r(this, St)[St][r(this, St)[St] - 1] !== a && r(this, St)[St].push(a), this.saveCacheToLS(this.cache);
      }
      saveCacheToLS(a) {
        const l = [], u = r(this, St)[St];
        for (const v in u)
          if (u.hasOwnProperty(v)) {
            const y = [];
            y.push(u[v]), y.push(a[u[v]]), l.push(y);
          }
        H.saveToLSorCookie(Ut, {
          cache: l
        });
      }
      getKey(a) {
        if (a === null)
          return null;
        const l = r(this, St)[St];
        for (const u in l)
          if (l.hasOwnProperty(u) && this.cache[l[u]] === a)
            return l[u];
        return null;
      }
      getSecondLastKey() {
        const a = r(this, St)[St];
        return a != null && a.length > 1 ? a[a.length - 2] : -1;
      }
      getLastKey() {
        const a = r(this, St)[St].length;
        if (a)
          return r(this, St)[St][a - 1];
      }
    }
    var cw = function(a, l) {
      const u = JSON.parse(JSON.stringify(r(this, St)[St])), v = {};
      let y;
      for (const k in u)
        u.hasOwnProperty(k) && (u[k] !== a ? v[u[k]] = l[u[k]] : y = k);
      return u.splice(y, 1), r(this, St)[St] = JSON.parse(JSON.stringify(u)), v;
    }, Qi = t("logger"), oi = t("request"), Hr = t("device"), Pn = t("session");
    class lw {
      constructor(a) {
        let {
          logger: l,
          request: u,
          device: v,
          session: y
        } = a;
        Object.defineProperty(this, Qi, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, oi, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Hr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Pn, {
          writable: !0,
          value: void 0
        }), r(this, Qi)[Qi] = l, r(this, oi)[oi] = u, r(this, Hr)[Hr] = v, r(this, Pn)[Pn] = y;
      }
      /**
       *
       * @param {string} global gcookie
       * @param {string} session
       * @param {boolean} resume sent true in case of an OUL request from client side, which is returned as it is by server
       * @param {number} respNumber the index of the request in backupmanager
       * @param {boolean} optOutResponse
       * @returns
       */
      s(a, l, u, v, y) {
        let k = !1, C = !1;
        if (window.isOULInProgress && (u || v !== "undefined" && v === window.oulReqN) && (window.isOULInProgress = !1, k = !0), typeof v > "u" && (v = 0), H.removeBackup(v, r(this, Qi)[Qi]), v > q.globalCache.REQ_N)
          return;
        if (se(r(this, Hr)[Hr].gcookie) || a && (C = !0), !se(r(this, Hr)[Hr].gcookie) || u || typeof y == "boolean") {
          const w = r(this, Pn)[Pn].getSessionCookieObject();
          if (window.isOULInProgress || w.s && l < w.s)
            return;
          if (r(this, Qi)[Qi].debug("Cookie was ".concat(r(this, Hr)[Hr].gcookie, " set to ").concat(a)), r(this, Hr)[Hr].gcookie = a, se(r(this, Hr)[Hr].gcookie) || H.getAndClearMetaProp(Lt), a && H._isLocalStorageSupported()) {
            q.LRU_CACHE == null && (q.LRU_CACHE = new Hh(ar));
            const A = H.readFromLSorCookie(ie);
            let N;
            A != null && A.id && (N = q.LRU_CACHE.cache[A.id], u && (N || (H.saveToLSorCookie(zt, !0), q.LRU_CACHE.set(A.id, a)))), H.saveToLSorCookie(V, a);
            const O = q.LRU_CACHE.getSecondLastKey();
            if (H.readFromLSorCookie(zt) && O !== -1) {
              const R = q.LRU_CACHE.cache[O];
              r(this, oi)[oi].unregisterTokenForGuid(R);
            }
          }
          H.createBroadCookie(V, a, Ge, window.location.hostname), H.saveToLSorCookie(V, a);
        }
        H._isLocalStorageSupported() && r(this, Pn)[Pn].manageSession(l);
        const E = r(this, Pn)[Pn].getSessionCookieObject();
        (typeof E.s > "u" || E.s <= l) && (E.s = l, E.t = ft(), r(this, Pn)[Pn].setSessionCookieObject(E)), se(r(this, Hr)[Hr].gcookie) && (q.blockRequest = !1), (k || C) && !r(this, oi)[oi].processingBackup && r(this, oi)[oi].processBackupEvents(), q.globalCache.RESP_N = v;
      }
    }
    var Ji = t("logger");
    class uw {
      constructor(a) {
        let {
          logger: l,
          customId: u
        } = a;
        Object.defineProperty(this, Ji, {
          writable: !0,
          value: void 0
        }), this.gcookie = void 0, r(this, Ji)[Ji] = l, this.gcookie = this.getGuid() || u;
      }
      getGuid() {
        let a = null;
        if (se(this.gcookie))
          return this.gcookie;
        if (H._isLocalStorageSupported()) {
          const l = H.read(V);
          if (se(l)) {
            try {
              a = JSON.parse(decodeURIComponent(l));
            } catch {
              r(this, Ji)[Ji].debug("Cannot parse Gcookie from localstorage - must be encoded " + l), l.length === 32 ? (a = l, H.saveToLSorCookie(V, l)) : r(this, Ji)[Ji].error("Illegal guid " + l);
            }
            se(a) && H.createBroadCookie(V, a, Ge, window.location.hostname);
          }
        }
        return se(a) || (a = H.readCookie(V), se(a) && (a.indexOf("%") === 0 || a.indexOf("'") === 0 || a.indexOf('"') === 0) && (a = null), se(a) && H.saveToLSorCookie(V, a)), a;
      }
    }
    const Do = "This property has been ignored.", Bn = "CleverTap error:", fw = "".concat(Bn, " Incorrect embed script."), dw = "".concat(Bn, " Event structure not valid. ").concat(Do), hw = "".concat(Bn, " Gender value should one of the following: m,f,o,u,male,female,unknown,others (case insensitive). ").concat(Do), pw = "".concat(Bn, " Employed value should be either Y or N. ").concat(Do), vw = "".concat(Bn, " Married value should be either Y or N. ").concat(Do), gw = "".concat(Bn, " Education value should be either School, College or Graduate. ").concat(Do), mw = "".concat(Bn, " Age value should be a number. ").concat(Do), yw = "".concat(Bn, " DOB value should be a Date Object"), xw = "".concat(Bn, " setEnum(value). value should be a string or a number"), Gh = "".concat(Bn, " Phone number should be formatted as +[country code][number]");
    let gs;
    const Kh = (h) => {
      if (vn(h)) {
        for (var a in h)
          if (h.hasOwnProperty(a)) {
            if (vn(h[a]) || Array.isArray(h[a]))
              return !1;
            Gi(h[a]) && (h[a] = rt(h[a]));
          }
        return !0;
      }
      return !1;
    }, bw = (h, a) => {
      if (vn(h)) {
        for (var l in h)
          if (h.hasOwnProperty(l))
            if (l === "Items") {
              if (!Array.isArray(h[l]))
                return !1;
              h[l].length > 50 && a.reportError(522, "Charged Items exceed 50 limit. Actual count: " + h[l].length);
              for (var u in h[l])
                if (h[l].hasOwnProperty(u) && (!vn(h[l][u]) || !Kh(h[l][u])))
                  return !1;
            } else {
              if (vn(h[l]) || Array.isArray(h[l]))
                return !1;
              Gi(h[l]) && (h[l] = rt(h[l]));
            }
        if (Si(h[$]) || j(h[$])) {
          const v = h[$] + "";
          if (typeof gs > "u" && (gs = H.readFromLSorCookie(W)), typeof gs < "u" && gs.trim() === v.trim())
            return a.error("Duplicate charged Id - Dropped" + h), !1;
          gs = v, H.saveToLSorCookie(W, v);
        }
        return !0;
      }
      return !1;
    };
    var Ir = t("logger"), si = t("oldValues"), ms = t("request"), ys = t("isPersonalisationActive"), xs = t("processEventArray");
    class ww extends Array {
      constructor(a, l) {
        let {
          logger: u,
          request: v,
          isPersonalisationActive: y
        } = a;
        super(), Object.defineProperty(this, xs, {
          value: _w
        }), Object.defineProperty(this, Ir, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, si, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ms, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ys, {
          writable: !0,
          value: void 0
        }), r(this, Ir)[Ir] = u, r(this, si)[si] = l, r(this, ms)[ms] = v, r(this, ys)[ys] = y;
      }
      push() {
        if (H.readFromLSorCookie(ut)) {
          for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          return r(this, xs)[xs](l), 0;
        } else
          r(this, Ir)[Ir].error("Account ID is not set");
      }
      _processOldValues() {
        r(this, si)[si] && r(this, xs)[xs](r(this, si)[si]), r(this, si)[si] = null;
      }
      getDetails(a) {
        if (!r(this, ys)[ys]() || (typeof q.globalEventsMap > "u" && (q.globalEventsMap = H.readFromLSorCookie(Oe)), typeof q.globalEventsMap > "u"))
          return;
        const l = q.globalEventsMap[a], u = {};
        if (typeof l < "u")
          return u.firstTime = new Date(l[1] * 1e3), u.lastTime = new Date(l[2] * 1e3), u.count = l[0], u;
      }
    }
    var _w = function(a) {
      if (Array.isArray(a))
        for (; a.length > 0; ) {
          var l = a.shift();
          if (!Si(l)) {
            r(this, Ir)[Ir].error(dw);
            continue;
          }
          if (l.length > 1024 && (l = l.substring(0, 1024), r(this, Ir)[Ir].reportError(510, l + "... length exceeded 1024 chars. Trimmed.")), eu.includes(l)) {
            r(this, Ir)[Ir].reportError(513, l + " is a restricted system event. It cannot be used as an event name.");
            continue;
          }
          const u = {};
          if (u.type = "event", u.evtName = ze(l, x), a.length !== 0) {
            const v = a.shift();
            if (!vn(v))
              a.unshift(v);
            else {
              if (l === "Charged") {
                if (!bw(v, r(this, Ir)[Ir])) {
                  r(this, Ir)[Ir].reportError(511, "Charged event structure invalid. Not sent.");
                  continue;
                }
              } else if (!Kh(v)) {
                r(this, Ir)[Ir].reportError(512, l + " event structure invalid. Not sent.");
                continue;
              }
              u.evtData = v;
            }
          }
          r(this, ms)[ms].processEvent(u);
        }
    };
    const ou = (h) => {
      const a = {}, l = h.indexOf("?");
      if (l > 1) {
        const u = h.substring(l + 1);
        let v;
        const y = /\+/g, k = /([^&=]+)=?([^&]*)/g, C = function(E) {
          let w = E.replace(y, " ");
          try {
            w = decodeURIComponent(w);
          } catch {
          }
          return w;
        };
        for (v = k.exec(u); v; )
          a[C(v[1])] = C(v[2]), v = k.exec(u);
      }
      return a;
    }, Cw = (h) => {
      if (h === "") return "";
      var a = document.createElement("a");
      return a.href = h, a.hostname;
    }, Je = (h, a, l) => h + "&" + a + "=" + encodeURIComponent(l), gc = () => window.location.hostname, Sw = (h) => {
      let a = "=".repeat((4 - h.length % 4) % 4), l = (h + a).replace(/\-/g, "+").replace(/_/g, "/"), u = window.atob(l), v = [];
      for (let y = 0; y < u.length; y++)
        v.push(u.charCodeAt(y));
      return new Uint8Array(v);
    }, Gr = (h, a) => (a && typeof a.debug == "function" && a.debug("dobj:" + h), Yh(h)), Ew = (h) => {
      if (h == null) return "";
      let a, l, u = {}, v = {}, y = "", k = "", C = "", E = 2, w = 3, A = 2, N = "", O = 0, R = 0, T, F = String.fromCharCode;
      for (T = 0; T < h.length; T += 1)
        if (y = h.charAt(T), Object.prototype.hasOwnProperty.call(u, y) || (u[y] = w++, v[y] = !0), k = C + y, Object.prototype.hasOwnProperty.call(u, k))
          C = k;
        else {
          if (Object.prototype.hasOwnProperty.call(v, C)) {
            if (C.charCodeAt(0) < 256) {
              for (a = 0; a < A; a++)
                O = O << 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++;
              for (l = C.charCodeAt(0), a = 0; a < 8; a++)
                O = O << 1 | l & 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = l >> 1;
            } else {
              for (l = 1, a = 0; a < A; a++)
                O = O << 1 | l, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = 0;
              for (l = C.charCodeAt(0), a = 0; a < 16; a++)
                O = O << 1 | l & 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = l >> 1;
            }
            E--, E == 0 && (E = Math.pow(2, A), A++), delete v[C];
          } else
            for (l = u[C], a = 0; a < A; a++)
              O = O << 1 | l & 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = l >> 1;
          E--, E == 0 && (E = Math.pow(2, A), A++), u[k] = w++, C = String(y);
        }
      if (C !== "") {
        if (Object.prototype.hasOwnProperty.call(v, C)) {
          if (C.charCodeAt(0) < 256) {
            for (a = 0; a < A; a++)
              O = O << 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++;
            for (l = C.charCodeAt(0), a = 0; a < 8; a++)
              O = O << 1 | l & 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = l >> 1;
          } else {
            for (l = 1, a = 0; a < A; a++)
              O = O << 1 | l, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = 0;
            for (l = C.charCodeAt(0), a = 0; a < 16; a++)
              O = O << 1 | l & 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = l >> 1;
          }
          E--, E == 0 && (E = Math.pow(2, A), A++), delete v[C];
        } else
          for (l = u[C], a = 0; a < A; a++)
            O = O << 1 | l & 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = l >> 1;
        E--, E == 0 && (E = Math.pow(2, A), A++);
      }
      for (l = 2, a = 0; a < A; a++)
        O = O << 1 | l & 1, R == 15 ? (R = 0, N += F(O), O = 0) : R++, l = l >> 1;
      for (; ; )
        if (O = O << 1, R == 15) {
          N += F(O);
          break;
        } else R++;
      return N;
    }, mc = (() => {
      let h = "", a = 0;
      for (a = 0; a <= 25; a++)
        h = h + String.fromCharCode(a + 65);
      for (a = 0; a <= 25; a++)
        h = h + String.fromCharCode(a + 97);
      for (a = 0; a < 10; a++)
        h = h + a;
      return h + "+/=";
    })(), Yh = (h) => {
      if (h == null) return "";
      var a = "", l, u, v, y, k, C, E, w = 0;
      for (h = Ew(h); w < h.length * 2; )
        w % 2 == 0 ? (l = h.charCodeAt(w / 2) >> 8, u = h.charCodeAt(w / 2) & 255, w / 2 + 1 < h.length ? v = h.charCodeAt(w / 2 + 1) >> 8 : v = NaN) : (l = h.charCodeAt((w - 1) / 2) & 255, (w + 1) / 2 < h.length ? (u = h.charCodeAt((w + 1) / 2) >> 8, v = h.charCodeAt((w + 1) / 2) & 255) : u = v = NaN), w += 3, y = l >> 2, k = (l & 3) << 4 | u >> 4, C = (u & 15) << 2 | v >> 6, E = v & 63, isNaN(u) ? C = E = 64 : isNaN(v) && (E = 64), a = a + mc.charAt(y) + mc.charAt(k) + mc.charAt(C) + mc.charAt(E);
      return a;
    };
    var eo = t("fireRequest"), su = t("dropRequestDueToOptOut"), au = t("addUseIPToRequest"), cu = t("addARPToRequest");
    class Or {
      constructor() {
        this.networkRetryCount = 0, this.minDelayFrequency = 0;
      }
      /**
       *
       * @param {string} url
       * @param {*} skipARP
       * @param {boolean} sendOULFlag
       */
      static fireRequest(a, l, u, v) {
        r(this, eo)[eo](a, 1, l, u, v);
      }
      getDelayFrequency() {
        if (this.logger.debug("Network retry #" + this.networkRetryCount), this.networkRetryCount < 10)
          return this.logger.debug(this.account.id, "Failure count is " + this.networkRetryCount + ". Setting delay frequency to 1s"), this.minDelayFrequency = rr, this.minDelayFrequency;
        if (this.account.region == null)
          return this.logger.debug(this.account.id, "Setting delay frequency to 1s"), rr;
        {
          const a = (Math.floor(Math.random() * 10) + 1) * 1e3;
          return this.minDelayFrequency += a, this.minDelayFrequency < Qe ? (this.logger.debug(this.account.id, "Setting delay frequency to " + this.minDelayFrequency), this.minDelayFrequency) : (this.minDelayFrequency = rr, this.logger.debug(this.account.id, "Setting delay frequency to " + this.minDelayFrequency), this.minDelayFrequency);
        }
      }
    }
    var Aw = function(a, l) {
      if (l === !0) {
        const u = {};
        return u.skipResARP = !0, Je(a, "arp", Gr(JSON.stringify(u), this.logger));
      }
      return H._isLocalStorageSupported() && typeof localStorage.getItem(Ue) < "u" && localStorage.getItem(Ue) !== null ? Je(a, "arp", Gr(JSON.stringify(H.readFromLSorCookie(Ue)), this.logger)) : a;
    }, kw = function(a) {
      var l = H.getMetaProp(Lt);
      return typeof l != "boolean" && (l = !1), Je(a, Lt, l ? "true" : "false");
    }, Iw = function() {
      return q.isOptInRequest || !se(this.device.gcookie) || !Si(this.device.gcookie) ? (q.isOptInRequest = !1, !1) : this.device.gcookie.slice(-3) === Kt;
    }, Ow = function(a, l, u, v, y) {
      var k, C;
      if (r(this, su)[su]()) {
        this.logger.debug("req dropped due to optout cookie: " + this.device.gcookie);
        return;
      }
      if (se(this.device.gcookie) || (q.blockRequest = !0), y && y === Be)
        !se(this.device.gcookie) && q.globalCache.RESP_N < q.globalCache.REQ_N - 1 && setTimeout(() => {
          this.logger.debug("retrying fire request for url: ".concat(a, ", tries: ").concat(this.networkRetryCount)), r(this, eo)[eo](a, void 0, u, v);
        }, this.getDelayFrequency());
      else if (!se(this.device.gcookie) && q.globalCache.RESP_N < q.globalCache.REQ_N - 1 && l < bt) {
        setTimeout(() => {
          this.logger.debug("retrying fire request for url: ".concat(a, ", tries: ").concat(l)), r(this, eo)[eo](a, l + 1, u, v);
        }, 50);
        return;
      }
      if (v ? window.isOULInProgress = !0 : (se(this.device.gcookie) && (a = Je(a, "gc", this.device.gcookie)), a = r(this, cu)[cu](a, u)), a = Je(a, "tries", l), a = r(this, au)[au](a), a = Je(a, "r", (/* @__PURE__ */ new Date()).getTime()), !((k = window.clevertap) === null || k === void 0) && k.hasOwnProperty("plugin") || !((C = window.wizrocket) === null || C === void 0) && C.hasOwnProperty("plugin")) {
        const A = window.clevertap.plugin || window.wizrocket.plugin;
        a = Je(a, "ct_pl", A);
      }
      a.indexOf("chrome-extension:") !== -1 && (a = a.replace("chrome-extension:", "https:"));
      for (var E = document.getElementsByClassName("ct-jp-cb"); E[0] && E[0].parentNode; )
        E[0].parentNode.removeChild(E[0]);
      const w = document.createElement("script");
      w.setAttribute("type", "text/javascript"), w.setAttribute("src", a), w.setAttribute("class", "ct-jp-cb"), w.setAttribute("rel", "nofollow"), w.async = !0, document.getElementsByTagName("head")[0].appendChild(w), this.logger.debug("req snt -> url: " + a);
    };
    Or.logger = void 0, Or.device = void 0, Or.account = void 0, Object.defineProperty(Or, eo, {
      value: Ow
    }), Object.defineProperty(Or, su, {
      value: Iw
    }), Object.defineProperty(Or, au, {
      value: kw
    }), Object.defineProperty(Or, cu, {
      value: Aw
    });
    const to = () => {
      let h = {};
      if (H._isLocalStorageSupported()) {
        let a = H.read(ye);
        a != null ? (a = JSON.parse(decodeURIComponent(a).replace(b, '"')), a.hasOwnProperty("global") ? h.wp = a : h = a) : h = {};
      }
      return h;
    }, yc = (h) => {
      if (H._isLocalStorageSupported()) {
        const a = {
          ...to(),
          ...h
        }, l = JSON.stringify(a);
        H.save(ye, encodeURIComponent(l)), Dw();
      }
    }, Dw = () => {
      if (H._isLocalStorageSupported()) {
        let l = H.read(V);
        if (se(l))
          try {
            l = JSON.parse(decodeURIComponent(H.read(V)));
            const u = H.read(ge) ? JSON.parse(decodeURIComponent(H.read(ge))) : {};
            if (l && H._isLocalStorageSupported()) {
              var h = {}, a = to();
              Object.keys(a).forEach((v) => {
                const y = l in u && Object.keys(u[l]).length && u[l][v] ? u[l][v] : {}, k = a[v].global, C = vt(), E = a[v][C];
                if (typeof k < "u") {
                  const w = Object.keys(k);
                  for (const A in w) {
                    let N = [];
                    if (w.hasOwnProperty(A)) {
                      let O = 0, R = 0;
                      const T = w[A];
                      if (T === "tc")
                        continue;
                      typeof E < "u" && typeof E[T] < "u" && (O = E[T]), typeof k < "u" && typeof k[T] < "u" && (R = k[T]), N = [T, O, R], y[T] = N;
                    }
                  }
                }
                h = {
                  ...h,
                  [v]: y
                };
              }), u[l] = h, H.save(ge, encodeURIComponent(JSON.stringify(u)));
            }
          } catch (u) {
            console.error("Invalid clevertap Id " + u);
          }
      }
    }, Zh = () => {
      const h = JSON.parse(decodeURIComponent(H.read(V)));
      let a = {};
      if (H._isLocalStorageSupported()) {
        let l = {};
        a = to();
        const u = H.read(ge), v = u ? decodeURIComponent(u) : null, y = v ? JSON.parse(v) : null, k = h && u !== void 0 && u !== null && y && y[h] && y[h].wp ? Object.values(y[h].wp) : [], C = h && u !== void 0 && u !== null && y && y[h] && y[h].wi ? Object.values(y[h].wi) : [], E = vt();
        let w = 0, A = 0;
        return a.wp && a.wp[E] && a.wp[E].tc !== "undefined" && (w = a.wp[E].tc), a.wi && a.wi[E] && a.wi[E].tc !== "undefined" && (A = a.wi[E].tc), l = {
          wmp: w,
          wimp: A,
          tlc: k,
          witlc: C
        }, l;
      }
    }, Xh = (h, a) => {
      let {
        logger: l
      } = a, u = !1;
      if (vn(h)) {
        for (const v in h)
          if (h.hasOwnProperty(v)) {
            u = !0;
            let y = h[v];
            if (y == null) {
              delete h[v];
              continue;
            }
            v === "Gender" && !y.match(/\b(?:[mM](?:ale)?|[fF](?:emale)?|[oO](?:thers)?|[uU](?:nknown)?)\b/) && (u = !1, l.error(hw)), v === "Employed" && !y.match(/^Y$|^N$/) && (u = !1, l.error(pw)), v === "Married" && !y.match(/^Y$|^N$/) && (u = !1, l.error(vw)), v === "Education" && !y.match(/^School$|^College$|^Graduate$/) && (u = !1, l.error(gw)), v === "Age" && y != null && (Ma(y) ? h.Age = +y : (u = !1, l.error(mw))), v === "DOB" && (!/^\$D_/.test(y) || (y + "").length !== 11) && !Gi(y) && (u = !1, l.error(yw)), Gi(y) && (h[v] = rt(y)), v === "Phone" && !gn(y) && (y.length > 8 && y.charAt(0) === "+" ? (y = y.substring(1, y.length), Ma(y) ? h.Phone = +y : (u = !1, l.error(Gh + ". Removed."))) : (u = !1, l.error(Gh + ". Removed."))), u || delete h[v];
          }
      }
      return u;
    }, Qh = (h) => {
      const a = {};
      a.Name = h.name, h.id != null && (a.FBID = h.id + ""), h.gender === "male" ? a.Gender = "M" : h.gender === "female" ? a.Gender = "F" : a.Gender = "O";
      const l = function(y) {
        if (y != null) {
          let k = "", C = "";
          for (let E = 0; E < y.length; E++) {
            const w = y[E];
            if (w.type != null) {
              const A = w.type;
              if (A === "Graduate School")
                return "Graduate";
              A === "College" ? k = "1" : A === "High School" && (C = "1");
            }
          }
          if (k === "1")
            return "College";
          if (C === "1")
            return "School";
        }
      };
      h.relationship_status != null && (a.Married = "N", h.relationship_status === "Married" && (a.Married = "Y"));
      const u = l(h.education);
      if (u != null && (a.Education = u), (h.work != null ? h.work.length : 0) > 0 ? a.Employed = "Y" : a.Employed = "N", h.email != null && (a.Email = h.email), h.birthday != null) {
        const y = h.birthday.split("/");
        a.DOB = nt(y[2] + y[0] + y[1]);
      }
      return a;
    }, Jh = (h, a) => {
      let {
        logger: l
      } = a;
      const u = {};
      if (h.displayName != null && (u.Name = h.displayName), h.id != null && (u.GPID = h.id + ""), h.gender != null && (h.gender === "male" ? u.Gender = "M" : h.gender === "female" ? u.Gender = "F" : h.gender === "other" && (u.Gender = "O")), h.image != null && h.image.isDefault === !1 && (u.Photo = h.image.url.split("?sz")[0]), h.emails != null)
        for (let v = 0; v < h.emails.length; v++) {
          const y = h.emails[v];
          y.type === "account" && (u.Email = y.value);
        }
      if (h.organizations != null) {
        u.Employed = "N";
        for (let v = 0; v < h.organizations.length; v++)
          h.organizations[v].type === "work" && (u.Employed = "Y");
      }
      if (h.birthday != null) {
        const v = h.birthday.split("-");
        u.DOB = nt(v[0] + v[1] + v[2]);
      }
      return h.relationshipStatus != null && (u.Married = "N", h.relationshipStatus === "married" && (u.Married = "Y")), l.debug("gplus usr profile " + JSON.stringify(u)), u;
    }, xc = (h, a) => {
      if (H._isLocalStorageSupported()) {
        if (q.globalProfileMap == null && (q.globalProfileMap = H.readFromLSorCookie(ke), q.globalProfileMap == null && (q.globalProfileMap = {})), h._custom != null) {
          const l = h._custom;
          for (const u in l)
            l.hasOwnProperty(u) && (h[u] = l[u]);
          delete h._custom;
        }
        for (const l in h)
          if (h.hasOwnProperty(l)) {
            if (q.globalProfileMap.hasOwnProperty(l) && !a)
              continue;
            q.globalProfileMap[l] = h[l];
          }
        q.globalProfileMap._custom != null && delete q.globalProfileMap._custom, H.saveToLSorCookie(ke, q.globalProfileMap);
      }
    }, bs = (h, a, l) => {
      if (h != null && h !== "-1" && H._isLocalStorageSupported()) {
        const u = to();
        let v = u.wp[l];
        v == null && (v = {}, u[l] = v), v[h] = "dnd", yc(u);
      }
      if (q.campaignDivMap != null) {
        const u = q.campaignDivMap[h];
        u != null && (document.getElementById(u).remove(), u === "intentPreview" ? document.getElementById("intentOpacityDiv") != null && document.getElementById("intentOpacityDiv").remove() : u === "wizParDiv0" ? document.getElementById("intentOpacityDiv0") != null && document.getElementById("intentOpacityDiv0").remove() : u === "wizParDiv2" && document.getElementById("intentOpacityDiv2") != null && document.getElementById("intentOpacityDiv2").remove());
      }
    }, Rw = (h) => {
      if (h.skipResARP != null && h.skipResARP)
        return console.debug("Update ARP Request rejected", h), null;
      const a = h[qe] === !0;
      if (H._isLocalStorageSupported())
        try {
          let l = H.readFromLSorCookie(Ue);
          if (l == null || a) {
            l = {};
            for (const u in h)
              h.hasOwnProperty(u) && (h[u] === -1 ? delete l[u] : l[u] = h[u]);
            H.saveToLSorCookie(Ue, l);
          }
        } catch (l) {
          console.error("Unable to parse ARP JSON: " + l);
        }
    }, Pw = (h, a) => {
      if (Si(h) || j(h))
        return "$E_" + h;
      a.error(xw);
    }, Bw = (h, a, l, u, v) => {
      const y = ou(location.href), k = y.e, C = y.p, E = y.page_type;
      if (typeof k < "u") {
        const w = {};
        w.id = u.id, w.unsubGroups = q.unsubGroups, q.updatedCategoryLong && (w[cr] = q.updatedCategoryLong);
        let A = u.emailURL;
        l && (A = Je(A, "fetchGroups", l)), a && (A = Je(A, "encoded", a)), A = Je(A, "e", k), A = Je(A, "d", Gr(JSON.stringify(w), v)), C && (A = Je(A, "p", C)), h !== "-1" && (A = Je(A, "sub", h)), E && (q.globalUnsubscribe = E === xt, A = Je(A, "page_type", E)), Or.fireRequest(A);
      }
    };
    var Wt = t("logger"), nr = t("request"), ai = t("account"), ci = t("oldValues"), ws = t("isPersonalisationActive"), _s = t("processProfileArray");
    class Tw extends Array {
      constructor(a, l) {
        let {
          logger: u,
          request: v,
          account: y,
          isPersonalisationActive: k
        } = a;
        super(), Object.defineProperty(this, _s, {
          value: Mw
        }), Object.defineProperty(this, Wt, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, nr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ai, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ci, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ws, {
          writable: !0,
          value: void 0
        }), r(this, Wt)[Wt] = u, r(this, nr)[nr] = v, r(this, ai)[ai] = y, r(this, ci)[ci] = l, r(this, ws)[ws] = k;
      }
      push() {
        if (H.readFromLSorCookie(ut)) {
          for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          return r(this, _s)[_s](l), 0;
        } else
          r(this, Wt)[Wt].error("Account ID is not set");
      }
      _processOldValues() {
        r(this, ci)[ci] && r(this, _s)[_s](r(this, ci)[ci]), r(this, ci)[ci] = null;
      }
      getAttribute(a) {
        if (r(this, ws)[ws]() && (q.globalProfileMap == null && (q.globalProfileMap = H.readFromLSorCookie(ke)), q.globalProfileMap != null))
          return q.globalProfileMap[a];
      }
      /**
       *
       * @param {any} key
       * @param {number} value
       * @param {string} command
       * increases or decreases value of the number type properties in profile object
       */
      _handleIncrementDecrementValue(a, l, u) {
        var v;
        if (q.globalProfileMap == null && (q.globalProfileMap = H.readFromLSorCookie(ke)), q.globalProfileMap == null && !(!((v = q.globalProfileMap) === null || v === void 0) && v.hasOwnProperty(a)))
          console.error("Kindly create profile with required proprty to increment/decrement.");
        else if (!l || typeof l != "number" || l <= 0)
          console.error("Value should be a number greater than 0");
        else {
          u === Vr ? q.globalProfileMap[a] = q.globalProfileMap[a] + l : q.globalProfileMap[a] = q.globalProfileMap[a] - l, H.saveToLSorCookie(ke, q.globalProfileMap);
          let y = {};
          const k = {};
          y.type = "profile", k[a] = {
            [u]: l
          }, k.tz == null && (k.tz = (/* @__PURE__ */ new Date()).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]), y.profile = k, y = r(this, nr)[nr].addSystemDataToObject(y, !0), r(this, nr)[nr].addFlags(y);
          const C = Gr(JSON.stringify(y), r(this, Wt)[Wt]);
          let E = r(this, ai)[ai].dataPostURL;
          E = Je(E, "type", Mt), E = Je(E, "d", C), r(this, nr)[nr].saveAndFireRequest(E, q.blockRequest);
        }
      }
      /**
       *
       * @param {any} key
       * @param {array} arrayVal
       * @param {string} command
       * overwrites/sets new value(s) against a key/property in profile object
       */
      _handleMultiValueSet(a, l, u) {
        const v = [];
        for (let k = 0; k < l.length; k++)
          typeof l[k] == "number" && !v.includes(l[k]) ? v.push(l[k]) : typeof l[k] == "string" && !v.includes(l[k].toLowerCase()) ? v.push(l[k].toLowerCase()) : console.error("array supports only string or number type values");
        if (q.globalProfileMap == null) {
          var y;
          q.globalProfileMap = (y = H.readFromLSorCookie(ke)) !== null && y !== void 0 ? y : {};
        }
        q.globalProfileMap[a] = v, H.saveToLSorCookie(ke, q.globalProfileMap), this.sendMultiValueData(a, l, u);
      }
      /**
       *
       * @param {any} propKey - the property name to be added in the profile object
       * @param {string, number, array} propVal - the property value to be added against the @propkey key
       * @param {string} command
       * Adds array or single value against a key/property in profile object
       */
      _handleMultiValueAdd(a, l, u) {
        q.globalProfileMap == null && (q.globalProfileMap = H.readFromLSorCookie(ke) || {});
        const v = q.globalProfileMap[a], y = Array.isArray(v) ? v : v != null ? [v] : [], k = (C) => {
          const E = typeof C == "number" ? C : C.toLowerCase();
          y.includes(E) || y.push(E);
        };
        if (Array.isArray(l))
          l.forEach((C) => {
            typeof C == "string" || typeof C == "number" ? k(C) : r(this, Wt)[Wt].error("Array supports only string or number type values");
          });
        else if (typeof l == "string" || typeof l == "number")
          k(l);
        else {
          r(this, Wt)[Wt].error("Unsupported value type");
          return;
        }
        q.globalProfileMap[a] = y, H.saveToLSorCookie(ke, q.globalProfileMap), this.sendMultiValueData(a, l, u);
      }
      /**
       *
       * @param {any} propKey
       * @param {string, number, array} propVal
       * @param {string} command
       * removes value(s) against a key/property in profile object
       */
      _handleMultiValueRemove(a, l, u) {
        if (q.globalProfileMap == null && (q.globalProfileMap = H.readFromLSorCookie(ke) || {}), !q.globalProfileMap.hasOwnProperty(a)) {
          r(this, Wt)[Wt].error("The property ".concat(a, " does not exist."));
          return;
        }
        const v = (y) => {
          const k = q.globalProfileMap[a].indexOf(y);
          k !== -1 && q.globalProfileMap[a].splice(k, 1);
        };
        if (Array.isArray(l))
          l.forEach(v);
        else if (typeof l == "string" || typeof l == "number")
          v(l);
        else {
          r(this, Wt)[Wt].error("Unsupported propVal type");
          return;
        }
        q.globalProfileMap[a].length === 0 && delete q.globalProfileMap[a], H.saveToLSorCookie(ke, q.globalProfileMap), this.sendMultiValueData(a, l, u);
      }
      /**
       *
       * @param {any} propKey
       * @param {string} command
       * deletes a key value pair from the profile object
       */
      _handleMultiValueDelete(a, l) {
        var u;
        q.globalProfileMap == null && (q.globalProfileMap = H.readFromLSorCookie(ke)), !(q == null || (u = q.globalProfileMap) === null || u === void 0) && u.hasOwnProperty(a) ? delete q.globalProfileMap[a] : r(this, Wt)[Wt].error("The property ".concat(a, " does not exist.")), H.saveToLSorCookie(ke, q.globalProfileMap), this.sendMultiValueData(a, null, l);
      }
      sendMultiValueData(a, l, u) {
        let v = {};
        const y = {};
        v.type = "profile", y[a] = {
          [u]: u === je ? !0 : l
        }, y.tz == null && (y.tz = (/* @__PURE__ */ new Date()).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]), v.profile = y, v = r(this, nr)[nr].addSystemDataToObject(v, !0), r(this, nr)[nr].addFlags(v);
        const k = Gr(JSON.stringify(v), r(this, Wt)[Wt]);
        let C = r(this, ai)[ai].dataPostURL;
        C = Je(C, "type", Mt), C = Je(C, "d", k), r(this, nr)[nr].saveAndFireRequest(C, q.blockRequest);
      }
    }
    var Mw = function(a) {
      if (Array.isArray(a) && a.length > 0) {
        for (const l in a)
          if (a.hasOwnProperty(l)) {
            const u = a[l];
            let v = {}, y;
            if (u.Site != null) {
              if (y = u.Site, gn(y) || !Xh(y, {
                logger: r(this, Wt)[Wt]
              }))
                return;
            } else if (u.Facebook != null) {
              const k = u.Facebook;
              !gn(k) && !k.error && (y = Qh(k));
            } else if (u["Google Plus"] != null) {
              const k = u["Google Plus"];
              !gn(k) && !k.error && (y = Jh(k, {
                logger: r(this, Wt)[Wt]
              }));
            }
            if (y != null && !gn(y)) {
              v.type = "profile", y.tz == null && (y.tz = (/* @__PURE__ */ new Date()).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]), v.profile = y, xc(y, !0), v = r(this, nr)[nr].addSystemDataToObject(v, void 0), r(this, nr)[nr].addFlags(v);
              const k = Gr(JSON.stringify(v), r(this, Wt)[Wt]);
              let C = r(this, ai)[ai].dataPostURL;
              C = Je(C, "type", Mt), C = Je(C, "d", k), r(this, nr)[nr].saveAndFireRequest(C, q.blockRequest);
            }
          }
      }
    }, Tn = t("request"), Dr = t("logger"), Cs = t("account"), Mn = t("session"), li = t("oldValues"), ui = t("device"), lu = t("processOUL"), uu = t("handleCookieFromCache"), fu = t("deleteUser"), Ss = t("processLoginArray");
    class Fw extends Array {
      constructor(a, l) {
        let {
          request: u,
          account: v,
          session: y,
          logger: k,
          device: C
        } = a;
        super(), Object.defineProperty(this, Ss, {
          value: zw
        }), Object.defineProperty(this, fu, {
          value: Uw
        }), Object.defineProperty(this, uu, {
          value: Lw
        }), Object.defineProperty(this, lu, {
          value: Nw
        }), Object.defineProperty(this, Tn, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Dr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Cs, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Mn, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, li, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ui, {
          writable: !0,
          value: void 0
        }), r(this, Tn)[Tn] = u, r(this, Cs)[Cs] = v, r(this, Mn)[Mn] = y, r(this, Dr)[Dr] = k, r(this, li)[li] = l, r(this, ui)[ui] = C;
      }
      // On User Login
      clear() {
        r(this, Dr)[Dr].debug("clear called. Reset flag has been set."), r(this, fu)[fu](), H.setMetaProp(L, !0);
      }
      push() {
        for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
          l[u] = arguments[u];
        return r(this, Ss)[Ss](l), 0;
      }
      _processOldValues() {
        r(this, li)[li] && r(this, Ss)[Ss](r(this, li)[li]), r(this, li)[li] = null;
      }
    }
    var Nw = function(a) {
      let l = !0;
      H.saveToLSorCookie(zt, l);
      const u = (v) => {
        let y = H.readFromLSorCookie(ie);
        const k = H.readFromLSorCookie(V);
        let C;
        if (y == null)
          y = {}, C = v;
        else {
          C = y.id;
          let E = !1, w = !1;
          if (C == null && (C = v[0], E = !0), q.LRU_CACHE == null && H._isLocalStorageSupported() && (q.LRU_CACHE = new Hh(ar)), E)
            k != null && (q.LRU_CACHE.set(C, k), q.blockRequest = !1);
          else
            for (const A in v)
              if (v.hasOwnProperty(A)) {
                const N = v[A];
                if (q.LRU_CACHE.cache[N]) {
                  C = N, w = !0;
                  break;
                }
              }
          if (w) {
            C !== q.LRU_CACHE.getLastKey() ? r(this, uu)[uu]() : (l = !1, H.saveToLSorCookie(zt, l));
            const A = q.LRU_CACHE.get(C);
            q.LRU_CACHE.set(C, A), H.saveToLSorCookie(V, A), r(this, ui)[ui].gcookie = A;
            const N = q.LRU_CACHE.getSecondLastKey();
            if (H.readFromLSorCookie(zt) && N !== -1) {
              const O = q.LRU_CACHE.cache[N];
              r(this, Tn)[Tn].unregisterTokenForGuid(O);
            }
          } else
            E ? k != null && (r(this, ui)[ui].gcookie = k, H.saveToLSorCookie(V, k), l = !1) : this.clear(), H.saveToLSorCookie(zt, !1), C = v[0];
        }
        y.id = C, H.saveToLSorCookie(ie, y);
      };
      if (Array.isArray(a) && a.length > 0) {
        for (const v in a)
          if (a.hasOwnProperty(v)) {
            const y = a[v];
            let k = {}, C;
            if (y.Site != null) {
              if (C = y.Site, gn(C) || !Xh(C, {
                logger: r(this, Dr)[Dr]
              }))
                return;
            } else if (y.Facebook != null) {
              const E = y.Facebook;
              !gn(E) && !E.error && (C = Qh(E));
            } else if (y["Google Plus"] != null) {
              const E = y["Google Plus"];
              gn(E) && !E.error && (C = Jh(E, {
                logger: r(this, Dr)[Dr]
              }));
            }
            if (C != null && !gn(C)) {
              k.type = "profile", C.tz == null && (C.tz = (/* @__PURE__ */ new Date()).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]), k.profile = C;
              const E = [];
              H._isLocalStorageSupported() && (C.Identity && E.push(C.Identity), C.Email && E.push(C.Email), C.GPID && E.push("GP:" + C.GPID), C.FBID && E.push("FB:" + C.FBID), E.length > 0 && u(E)), xc(C, !0), k = r(this, Tn)[Tn].addSystemDataToObject(k, void 0), r(this, Tn)[Tn].addFlags(k), l && (k[qe] = !0);
              const w = Gr(JSON.stringify(k), r(this, Dr)[Dr]);
              let A = r(this, Cs)[Cs].dataPostURL;
              A = Je(A, "type", Mt), A = Je(A, "d", w), r(this, Tn)[Tn].saveAndFireRequest(A, q.blockRequest, l);
            }
          }
      }
    }, Lw = function() {
      q.blockRequest = !1, console.debug("Block request is false"), H._isLocalStorageSupported() && (delete localStorage[ke], delete localStorage[Oe], delete localStorage[Me], delete localStorage[Ue], delete localStorage[ye], delete localStorage[W]), H.removeCookie(ye, gc()), H.removeCookie(r(this, Mn)[Mn].cookieName, q.broadDomain), H.removeCookie(Ue, q.broadDomain), r(this, Mn)[Mn].setSessionCookieObject("");
    }, Uw = function() {
      q.blockRequest = !0, r(this, Dr)[Dr].debug("Block request is true"), q.globalCache = {
        gcookie: null,
        REQ_N: 0,
        RESP_N: 0
      }, H._isLocalStorageSupported() && (delete localStorage[V], delete localStorage[ie], delete localStorage[ke], delete localStorage[Oe], delete localStorage[Me], delete localStorage[Ue], delete localStorage[ye], delete localStorage[W]), H.removeCookie(V, q.broadDomain), H.removeCookie(ye, gc()), H.removeCookie(ie, gc()), H.removeCookie(r(this, Mn)[Mn].cookieName, q.broadDomain), H.removeCookie(Ue, q.broadDomain), r(this, ui)[ui].gcookie = null, r(this, Mn)[Mn].setSessionCookieObject("");
    }, zw = function(a) {
      if (Array.isArray(a) && a.length > 0) {
        const l = a.pop();
        if (l != null && vn(l) && (l.Site != null && Object.keys(l.Site).length > 0 || l.Facebook != null && Object.keys(l.Facebook).length > 0 || l["Google Plus"] != null && Object.keys(l["Google Plus"]).length > 0)) {
          H.setInstantDeleteFlagInK();
          try {
            r(this, lu)[lu]([l]);
          } catch (v) {
            r(this, Dr)[Dr].debug(v);
          }
        } else
          r(this, Dr)[Dr].error("Profile object is in incorrect format");
      }
    };
    class jw extends HTMLElement {
      constructor() {
        super(), this._target = null, this._session = null, this.shadow = null, this.popup = null, this.container = null, this.resizeObserver = null, this.shadow = this.attachShadow({
          mode: "open"
        });
      }
      get target() {
        return this._target || "";
      }
      set target(a) {
        this._target === null && (this._target = a, this.renderImageOnlyPopup());
      }
      get session() {
        return this._session || "";
      }
      set session(a) {
        this._session = a;
      }
      get msgId() {
        return this.target.wzrk_id;
      }
      get pivotId() {
        return this.target.wzrk_pivot;
      }
      get onClickUrl() {
        return this.target.display.onClickUrl;
      }
      get onClickAction() {
        return this.target.display.onClickAction;
      }
      renderImageOnlyPopup() {
        this.shadow.innerHTML = this.getImageOnlyPopupContent(), this.popup = this.shadowRoot.getElementById("imageOnlyPopup"), this.container = this.shadowRoot.getElementById("container"), this.closeIcon = this.shadowRoot.getElementById("close"), this.popup.addEventListener("load", this.updateImageAndContainerWidth()), this.resizeObserver = new ResizeObserver(() => this.handleResize(this.popup, this.container)), this.resizeObserver.observe(this.popup), this.closeIcon.addEventListener("click", () => {
          const a = this.target.wzrk_id.split("_")[0], l = this.session.sessionId;
          if (this.resizeObserver.unobserve(this.popup), document.getElementById("wzrkImageOnlyDiv").style.display = "none", this.remove(), a != null && a !== "-1" && H._isLocalStorageSupported()) {
            const u = to();
            let v = u.wp[l];
            v == null && (v = {}, u[l] = v), v[a] = "dnd", yc(u);
          }
        }), this.target.display.preview || window.clevertap.renderNotificationViewed({
          msgId: this.msgId,
          pivotId: this.pivotId
        }), this.onClickUrl && this.popup.addEventListener("click", () => {
          switch (this.target.display.preview || window.clevertap.renderNotificationClicked({
            msgId: this.msgId,
            pivotId: this.pivotId
          }), this.onClickAction) {
            case hs.OPEN_LINK_AND_CLOSE:
              this.target.display.window ? window.open(this.onClickUrl, "_blank") : window.parent.location.href = this.onClickUrl, this.closeIcon.click();
              break;
            case hs.OPEN_LINK:
            default:
              this.target.display.window ? window.open(this.onClickUrl, "_blank") : window.parent.location.href = this.onClickUrl;
          }
        });
      }
      handleResize(a, l) {
        const u = this.getRenderedImageWidth(a);
        l.style.setProperty("width", "".concat(u, "px"));
      }
      getImageOnlyPopupContent() {
        return `
        `.concat(this.target.msgContent.css, `
        `).concat(this.target.msgContent.html, `
      `);
      }
      updateImageAndContainerWidth() {
        return () => {
          const a = this.getRenderedImageWidth(this.popup);
          this.popup.style.setProperty("width", "".concat(a, "px")), this.container.style.setProperty("width", "".concat(a, "px")), this.container.style.setProperty("height", "auto"), this.container.style.setProperty("position", "fixed"), this.popup.style.setProperty("visibility", "visible"), this.closeIcon.style.setProperty("visibility", "visible"), document.getElementById("wzrkImageOnlyDiv").style.visibility = "visible";
        };
      }
      getRenderedImageWidth(a) {
        const l = a.naturalWidth / a.naturalHeight;
        return a.height * l;
      }
    }
    class e0 extends HTMLElement {
      constructor(a, l) {
        super(), this.wrapper = null, this.snackBar = null, this.shadow = this.attachShadow({
          mode: "open"
        }), this.config = a, this.message = l, l && this.renderMessage(l);
      }
      get pivotId() {
        return this.message.wzrk_pivot;
      }
      get campaignId() {
        return this.message.wzrk_id;
      }
      createEl(a, l, u) {
        const v = document.createElement(a);
        return v.setAttribute("id", l), v.setAttribute("part", u || l), v;
      }
      renderMessage(a) {
        switch (this.wrapper = this.createEl("div", "messageWrapper"), a.templateType) {
          case "text-only":
          case "text-with-icon":
          case "text-with-icon-and-image": {
            const u = this.prepareBasicMessage(a.msg[0]);
            this.wrapper.appendChild(u);
          }
        }
        const l = this.createEl("div", "timeStamp");
        if (l.innerHTML = "<span>".concat(o0(a.id.split("_")[1]), "<span>"), !a.viewed) {
          const u = this.createEl("span", "unreadMarker");
          l.appendChild(u);
        }
        this.wrapper.appendChild(l), this.shadow.appendChild(this.wrapper);
      }
      prepareBasicMessage(a) {
        const l = this.createEl("div", "message");
        if (a.imageUrl) {
          const y = this.addImage(a.imageUrl, "mainImg");
          l.appendChild(y);
        }
        const u = this.createEl("div", "iconTitleDescWrapper");
        if (a.iconUrl) {
          const y = this.addImage(a.iconUrl, "iconImg");
          u.appendChild(y);
        }
        const v = this.createEl("div", "titleDescWrapper");
        if (a.title) {
          const y = this.createEl("div", "title");
          y.innerText = a.title, v.appendChild(y);
        }
        if (a.description) {
          const y = this.createEl("div", "description");
          y.innerText = a.description, v.appendChild(y);
        }
        if ((a.title || a.description) && u.appendChild(v), (a.iconUrl || a.title || a.description) && l.appendChild(u), a.buttons && a.buttons.length) {
          const y = this.addButtons(a.buttons);
          l.appendChild(y);
        }
        return l;
      }
      addButtons() {
        let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        const l = this.createEl("div", "buttonsContainer");
        let u = !1;
        return a.forEach((v, y) => {
          const k = this.createEl("button", "button-".concat(y), "button");
          k.innerText = v.text, y > 0 && (k.style.cssText += "margin-left: 2px;"), v.action === "copy" && (u = !0), l.appendChild(k);
        }), u && this.addSnackbar(l), l;
      }
      addSnackbar(a) {
        this.snackBar = this.createEl("div", "snackbar-".concat(this.campaignId), "snackbar"), this.snackBar.innerHTML = Gw;
        const l = this.createEl("span", "snackbar-msg-".concat(this.campaignId), "snackbar-msg");
        l.innerText = "Copied to clipboard", this.snackBar.appendChild(l), a.appendChild(this.snackBar);
      }
      addImage(a, l) {
        const u = this.createEl("div", "".concat(l, "Container")), v = this.createEl("img", l);
        return v.setAttribute("src", a), v.setAttribute("loading", "lazy"), u.appendChild(v), u;
      }
      raiseClickedEvent(a, l) {
        switch (this.message.templateType) {
          case "text-only":
          case "text-with-icon":
          case "text-with-icon-and-image":
            this.raiseClickedForBasicTemplates(a, l);
        }
      }
      raiseClickedForBasicTemplates(a, l) {
        const u = this.message.msg[0], v = {
          msgId: this.campaignId,
          pivotId: this.pivotId
        };
        if (a.tagName === "BUTTON") {
          const y = a.id.split("-")[1], k = u.buttons[y];
          v.kv = {
            wzrk_c2a: k.text
          }, k.action === "url" ? k.openUrlInNewTab ? window.open(k.url, "_blank") : window.location = k.url : k.action === "copy" && (window.focus(), navigator.clipboard.writeText(k.clipboardText), this.snackBar.style.setProperty("display", "flex", "important"), setTimeout(() => {
            this.snackBar.style.setProperty("display", "none", "important");
          }, 2e3));
        } else a.tagName === "CT-INBOX-MESSAGE" && u.onClickUrl && (u.openUrlInNewTab ? window.open(u.onClickUrl, "_blank") : window.location = u.onClickUrl);
        l ? console.log("Notifiction clicked event will be raised at run time with payload ::", v) : window.clevertap.renderNotificationClicked(v);
      }
    }
    const $w = (h) => {
      let {
        backgroundColor: a,
        borderColor: l,
        titleColor: u,
        descriptionColor: v,
        buttonColor: y,
        buttonTextColor: k,
        unreadMarkerColor: C
      } = h;
      return `
    <style id="messageStyles">
      ct-inbox-message::part(messageWrapper) {
        margin-bottom: 16px; 
      }
      ct-inbox-message::part(message) {
        background-color: `.concat(a, `; 
        border: 1px solid `).concat(l, `;
        border-radius: 4px; 
        overflow: hidden;
        min-height: 40px;
      }
      ct-inbox-message::part(message):hover {
        box-shadow: 0px 4px 8px rgb(0 0 0 / 10%);
        cursor: pointer;
      }
      ct-inbox-message::part(iconTitleDescWrapper) {
        display: flex; 
        padding: 16px;
      }
      ct-inbox-message::part(titleDescWrapper) {
        display: flex; 
        flex-direction: column;
      }
      ct-inbox-message::part(iconImgContainer) {
        display: flex; 
        margin-right: 16px;
      }
      ct-inbox-message::part(mainImgContainer) {
        line-height: 0;
      }
      ct-inbox-message::part(mainImg) {
        width: 100%; 
        background: #b2b1ae;
      }
      ct-inbox-message::part(iconImg) {
        height: 40px; 
        width: 40px;
      }
      ct-inbox-message::part(title) {
        font-size: 14px !important; 
        line-height: 20px; 
        font-weight: 600; 
        color: `).concat(u, `
      }
      ct-inbox-message::part(description) {
        font-size: 14px !important; 
        line-height: 20px; 
        font-weight: 400; 
        color: `).concat(v, `
      }
      ct-inbox-message::part(button) {
        background-color: `).concat(y, `; 
        color: `).concat(k, `; 
        padding: 8px 16px; 
        font-size: 12px; 
        line-height: 16px; 
        font-weight: 600; 
        flex: 1; 
        border-radius: 0px; 
        text-transform: capitalize; 
        cursor: pointer; 
        border: none;
      }
      ct-inbox-message::part(buttonsContainer) {
        display: flex;
        position: relative;
      }
      ct-inbox-message::part(snackbar) {
        position: absolute;
        top: calc(-100% - 12px);
        left: 50%;
        transform: translate(-50%, 0px);
        font-size: 14px;
        font-weight: 400;
        background: #FFFFFF;
        border: 1px solid #ECEDF2;
        box-shadow: 0px 4px 8px rgb(0 0 0 / 6%), 0px 0px 2px rgb(0 0 0 / 4%);
        border-radius: 4px;
        z-index: 2;
        display: none;
        width: max-content;
        align-items: center;
        padding: 8px 16px;
        justify-content: center;
      }

      ct-inbox-message::part(snackbar-msg) {
        color: black;
        margin-left: 8px;
      }

      ct-inbox-message::part(timeStamp) {
        display: flex; 
        justify-content: end; 
        align-items: center; 
        margin-top: 4px; 
        font-size: 12px !important; 
        line-height: 16px; 
        color: black;
      }
      ct-inbox-message::part(unreadMarker) {
        height: 8px; 
        width: 8px; 
        border-radius: 50%; 
        background-color: `).concat(C, `; 
        margin-left: 8px;
      }
      @media only screen and (min-width: 420px) {
        ct-inbox-message::part(mainImg) {
          height: 180px;
        }
      }
    </style>
  `);
    }, Ww = (h) => {
      let {
        panelBackgroundColor: a,
        panelBorderColor: l,
        headerBackgroundColor: u,
        headerTitleColor: v,
        closeIconColor: y,
        categoriesTabColor: k,
        categoriesTitleColor: C,
        categoriesBorderColor: E,
        selectedCategoryTabColor: w,
        selectedCategoryTitleColor: A,
        selectedCategoryBorderColor: N,
        headerCategoryHeight: O
      } = h;
      return `
      <style id="webInboxStyles">
        #inbox {
          width: 100%;
          position: fixed;
          background-color: #fff; 
          display: none; 
          box-shadow: 0px 2px 10px 0px #d7d7d791;
          background-color: `.concat(a, `; 
          border: 1px solid `).concat(l, `;
          top: 0;
          left: 0;
          height: 100%;
          overflow: auto;
          z-index: 1;
          box-sizing: content-box;
          border-radius: 4px;
        }
  
        #emptyInboxMsg {
          display: block;
          padding: 10px;
          text-align: center;
          color: black;
        }
  
        #header {
          height: 36px; 
          width: 100%; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          background-color: `).concat(u, `; 
          background-color: var(--card-bg, `).concat(u, `);
          color: `).concat(v, `;
          position: sticky;
          top: 0;
        }
  
        #closeInbox {
          font-size: 20px; 
          margin-right: 12px; 
          color: `).concat(y, `; 
          cursor: pointer;
        }
  
        #headerTitle {
          font-size: 14px; 
          line-height: 20px; 
          flex-grow: 1; 
          font-weight: 700; 
          text-align: center;
          flex-grow: 1;
          text-align: center;
        }
  
        #categoriesContainer {
          padding: 16px 16px 0 16px; 
          height: 32px; 
          display: flex;
          scroll-behavior: smooth;
          position: relative;
          z-index: -1;
        }

        #categoriesWrapper {
          height: 32px; 
          overflow-x: scroll;
          display: flex;
          white-space: nowrap;
          scrollbar-width: none;
        }

        #categoriesWrapper::-webkit-scrollbar {
          display: none;
        }
  
        #leftArrow, #rightArrow {
          height: 32px;
          align-items: center;
          font-weight: 700;
          position: absolute;
          z-index: 2;
          pointer-events: auto;
          cursor: pointer;
          display: none;
        }

        #leftArrow {
          left: 0;
          padding-left: 4px;
          padding-right: 16px;
          background: linear-gradient(90deg, `).concat(a, " 0%, ").concat(a, "99 80%, ").concat(a, `0d 100%);
        }

        #rightArrow {
          right: 0;
          padding-right: 4px;
          padding-left: 16px;
          background: linear-gradient(-90deg, `).concat(a, " 0%, ").concat(a, "99 80%, ").concat(a, `0d 100%);
        }

        [id^="category-"] {
          display: flex; 
          flex: 1 1 0; 
          justify-content: center; 
          align-items: center; 
          font-size: 14px; 
          line-height: 20px; 
          background-color: `).concat(k, `; 
          color: `).concat(C, `; 
          cursor: pointer;
          padding: 6px 24px;
          margin: 0 3px;
          border-radius: 16px;
          border: `).concat(E ? "1px solid " + E : "none", `;
        }

        [id^="category-"][selected="true"] {
          background-color: `).concat(w, `; 
          color: `).concat(A, `; 
          border: `).concat(N ? "1px solid " + N : "none", `
        }
  
        #inboxCard {
          padding: 0 16px 0 16px;
          overflow-y: auto;
          box-sizing: border-box;
          margin-top: 16px;
          height: 100%;
          overflow: scroll;
        }

        @media only screen and (min-width: 480px) {
          #inbox {
            width: var(--inbox-width, 392px);
            height: var(--inbox-height, 546px);
            position: var(--inbox-position, fixed);
            right: var(--inbox-right, unset);
            bottom: var(--inbox-bottom, unset);
            top: var(--inbox-top, unset);
            left: var(--inbox-left, unset);
          }
  
          #inboxCard {
            height: calc(var(--inbox-height, 546px) - `).concat(O, `px); 
          }
  
        }
      </style>
      `);
    };
    class t0 extends HTMLElement {
      constructor(a) {
        super(), this.isInboxOpen = !1, this.isInboxFromFlutter = !1, this.selectedCategory = null, this.unviewedMessages = {}, this.unviewedCounter = 0, this.isPreview = !1, this.inboxConfigForPreview = {}, this.inboxSelector = null, this.inbox = null, this.emptyInboxMsg = null, this.inboxCard = null, this.unviewedBadge = null, this.observer = null, this.selectedCategoryRef = null, this.addClickListenerOnDocument = (l) => {
          if (l.composedPath().includes(this.inbox)) {
            const u = l.path || l.composedPath && l.composedPath();
            if (u.length) {
              const v = u[0].id;
              if (v === "closeInbox")
                this.toggleInbox();
              else if (v.startsWith("category-"))
                this.prevCategoryRef = this.selectedCategoryRef, this.selectedCategoryRef = u[0], this.updateActiveCategory(u[0].innerText);
              else {
                const y = u.filter((k) => {
                  var C;
                  return ((C = k.id) === null || C === void 0 ? void 0 : C.startsWith("button-")) || k.tagName === "CT-INBOX-MESSAGE";
                });
                y.length && y[y.length - 1].raiseClickedEvent(y[0], this.isPreview);
              }
            }
          } else (this.checkForWebInbox(l) || this.isInboxOpen) && (this.isInboxFromFlutter ? this.isInboxFromFlutter = !1 : this.toggleInbox(l));
        }, this.setBadgeStyle = (l) => {
          if (this.unviewedBadge !== null) {
            this.unviewedBadge.innerText = l > 9 ? "9+" : l;
            const u = l > 0 && document.getElementById(this.config.inboxSelector);
            this.unviewedBadge.style.display = u ? "flex" : "none";
          }
        }, this.logger = a, this.shadow = this.attachShadow({
          mode: "open"
        });
      }
      get incomingMessages() {
        return [];
      }
      set incomingMessages(a) {
        a === void 0 && (a = []), a.length > 0 && this.updateInboxMessages(a);
      }
      get incomingMessagesForPreview() {
        return [];
      }
      set incomingMessagesForPreview(a) {
        a === void 0 && (a = []);
        const l = {};
        a.length > 0 && this.inbox && (this.isPreview = !0, this.unviewedCounter = 0, a.forEach((u) => {
          const v = "".concat(u.wzrk_id.split("_")[0], "_").concat(Date.now());
          u.id = v, l[v] = u, this.unviewedMessages[v] = u, this.unviewedCounter++;
        }), this.buildUIForMessages(l), this.updateUnviewedBadgeCounter());
      }
      connectedCallback() {
        this.init();
      }
      init() {
        this.config = this.isPreview ? this.inboxConfigForPreview : H.readFromLSorCookie(Ve) || {}, Object.keys(this.config).length !== 0 && (this.inboxSelector = document.getElementById(this.config.inboxSelector), this.inboxSelector !== null && (this.config.styles.notificationsBadge ? this.addUnviewedBadge() : this.unviewedBadge && this.unviewedBadge.remove(), this.createinbox(), document.removeEventListener("click", this.addClickListenerOnDocument), document.addEventListener("click", this.addClickListenerOnDocument), this.config.categories.length && this.updateActiveCategory(this.selectedCategoryRef.innerText), this.shadow.innerHTML = this.getInboxStyles(), this.shadow.appendChild(this.inbox)));
      }
      addMsgsToInboxFromLS() {
        const a = this.deleteExpiredAndGetUnexpiredMsgs(!1), l = a ? Object.keys(a) : [];
        l.length !== 0 && (l.forEach((u) => {
          a[u].viewed || (this.unviewedMessages[u] = a[u], this.unviewedCounter++);
        }), this.buildUIForMessages(a), this.updateUnviewedBadgeCounter());
      }
      /**
       * @param {*} deleteMsgsFromUI - If this param is true, then we'll have to check the UI and delete expired messages from the DOM
       * It'll be false when you are building the inbox layout for the very first time.
       *
       * This method reads the inbox messages from LS,
       * based on the deleteMsgsFromUI flag deletes the expired messages from UI and decrements the unviewed counter if the message was not viewed,
       * sorts the messages based on the date,
       * saves the unexpired messages to LS
       * and returns the sorted unexpired messages
       *
       * Scenarios when we encounter expired messages -
       * 1. building ui for the 1st time, no need to decrement the unviewed counter as the correct count will be set at the time of rendering
       * 2. UI is already built (deleteMsgsFromUI = true) and you open the inbox
       *    a. You'll find the expired msg in inbox
       *    b. You'll not find the expired msg in inbox.
       *       This happens when we receive new messages from LC, increment unviewed counter, save it in LS. (We build the UI only when the user opens inbox.)
       *  In both the above scenarios, we'll still have to decrement the unviewed counter if the message was not viewed.
       */
      deleteExpiredAndGetUnexpiredMsgs() {
        let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, l = Hn();
        const u = Math.floor(Date.now() / 1e3);
        for (const v in l)
          if (l[v].wzrk_ttl && l[v].wzrk_ttl > 0 && l[v].wzrk_ttl < u) {
            if (a && this.inbox) {
              const y = this.shadowRoot.getElementById(l[v].id);
              y && y.remove(), l[v].viewed || (this.unviewedCounter--, this.updateUnviewedBadgeCounter());
            }
            delete l[v];
          }
        return l && l.length > 0 && (l = Object.values(l).sort((v, y) => y.date - v.date).reduce((v, y) => (v[y.id] = y, v), {})), Ro(l), l;
      }
      updateInboxMessages() {
        let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        const l = this.deleteExpiredAndGetUnexpiredMsgs(), u = Date.now(), v = {};
        a.forEach((y, k) => {
          const C = "".concat(y.wzrk_id.split("_")[0], "_").concat(Date.now());
          y.id = C, y.date = u - k, y.viewed = 0, l[C] = y, v[C] = y, this.unviewedMessages[C] = y, this.unviewedCounter++;
        }), Ro(l), this.inbox && (this.buildUIForMessages(v), this.updateUnviewedBadgeCounter());
      }
      createEl(a, l, u) {
        const v = document.createElement(a);
        return v.setAttribute("id", l), v.setAttribute("part", u || l), v;
      }
      addUnviewedBadge() {
        this.unviewedBadge || (this.unviewedBadge = this.createEl("div", "unviewedBadge"), this.unviewedBadge.style.cssText = "display: none; position: absolute; height: 16px; width: 26px; border-radius: 8px; background-color: ".concat(this.config.styles.notificationsBadge.backgroundColor, "; font-size: 12px; color: ").concat(this.config.styles.notificationsBadge.textColor, "; font-weight: bold; align-items: center; justify-content: center;"), document.body.appendChild(this.unviewedBadge)), this.updateUnviewedBadgePosition(), window.addEventListener("resize", () => {
          this.updateUnviewedBadgePosition();
        });
      }
      updateUnviewedBadgePosition() {
        try {
          const a = document.getElementById(this.config.inboxSelector) || this.inboxSelector, {
            top: l,
            right: u
          } = a.getBoundingClientRect();
          this.unviewedBadge.style.top = "".concat(l - 8, "px"), this.unviewedBadge.style.left = "".concat(u - 8, "px");
        } catch (a) {
          this.logger.debug("Error updating unviewed badge position:", a);
        }
      }
      createinbox() {
        this.inbox = this.createEl("div", "inbox");
        const a = this.createEl("div", "header"), l = this.createEl("div", "headerTitle");
        l.innerText = this.config.title;
        const u = this.createEl("div", "closeInbox");
        if (u.innerHTML = "&times", a.appendChild(l), a.appendChild(u), this.inbox.appendChild(a), this.config.categories.length) {
          const y = this.createCategories();
          this.inbox.appendChild(y);
        }
        this.inboxCard = this.createEl("div", "inboxCard"), this.inbox.appendChild(this.inboxCard), this.emptyInboxMsg = this.createEl("div", "emptyInboxMsg"), this.emptyInboxMsg.innerText = "All messages will be displayed here.", this.inboxCard.appendChild(this.emptyInboxMsg);
        const v = {
          root: this.inboxCard,
          rootMargin: "0px",
          threshold: 0.5
        };
        this.observer = new IntersectionObserver((y, k) => {
          this.handleMessageViewed(y);
        }, v), this.addMsgsToInboxFromLS();
      }
      createCategories() {
        const a = this.createEl("div", "categoriesContainer"), l = this.createEl("div", "leftArrow");
        l.innerHTML = a0, l.children[0].style = "transform: rotate(180deg)", l.addEventListener("click", () => {
          this.shadowRoot.getElementById("categoriesWrapper").scrollBy(-70, 0);
        }), a.appendChild(l);
        const u = this.createEl("div", "categoriesWrapper");
        ["All", ...this.config.categories].forEach((N, O) => {
          const R = this.createEl("div", "category-".concat(O), "category");
          R.innerText = N, O === 0 && (this.selectedCategoryRef = R), u.appendChild(R);
        }), a.appendChild(u);
        const y = this.createEl("div", "rightArrow");
        y.innerHTML = a0, y.addEventListener("click", () => {
          this.shadowRoot.getElementById("categoriesWrapper").scrollBy(70, 0);
        }), a.appendChild(y);
        const k = {
          root: a,
          threshold: 0.9
        }, C = u.children[0], E = u.children[this.config.categories.length];
        return new IntersectionObserver((N) => {
          this.categoryObserverCb(l, N[0].intersectionRatio >= 0.9);
        }, k).observe(C), new IntersectionObserver((N) => {
          this.categoryObserverCb(y, N[0].intersectionRatio >= 0.9);
        }, k).observe(E), a;
      }
      categoryObserverCb(a, l) {
        a && (a.style.display = l ? "none" : "flex");
      }
      updateActiveCategory(a) {
        this.selectedCategory = a, this.inboxCard.scrollTop = 0;
        let l = 0;
        this.prevCategoryRef && this.prevCategoryRef.setAttribute("selected", "false"), this.selectedCategoryRef.setAttribute("selected", "true"), this.inboxCard.childNodes.forEach((u) => {
          u.getAttribute("id") !== "emptyInboxMsg" && (u.style.display = this.selectedCategory === "All" || u.getAttribute("category") === this.selectedCategory ? "block" : "none", u.style.display === "block" && l++);
        }), l === 0 ? (this.emptyInboxMsg.innerText = "".concat(a, " messages will be displayed here."), this.emptyInboxMsg.style.display = "block") : this.emptyInboxMsg.style.display = "none";
      }
      buildUIForMessages() {
        var a;
        let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        !this.isPreview && this.updateTSForRenderedMsgs(), this.inboxCard.scrollTop = 0;
        const u = (a = this.config.maxMsgsInInbox) !== null && a !== void 0 ? a : ht, v = this.inboxCard.firstChild, y = Object.values(l).sort((E, w) => w.date - E.date).map((E) => E.id);
        for (const E of y) {
          const w = new e0(this.config, l[E]);
          w.setAttribute("id", l[E].id), w.setAttribute("pivot", l[E].wzrk_pivot), w.setAttribute("part", "ct-inbox-message"), this.config.categories.length > 0 ? (w.setAttribute("category", l[E].tags[0] || ""), w.style.display = this.selectedCategory === "All" || l[E].category === this.selectedCategory ? "block" : "none") : w.style.display = "block", this.inboxCard.insertBefore(w, v), this.observer.observe(w);
        }
        let k = this.inboxCard.querySelectorAll("ct-inbox-message").length;
        for (; k > u; ) {
          const E = this.inboxCard.querySelectorAll("ct-inbox-message");
          E.length > 0 && E[E.length - 1].remove(), k--;
        }
        const C = this.inboxCard.querySelectorAll('ct-inbox-message[style*="display: block"]').length;
        this.emptyInboxMsg.style.display = C ? "none" : "block";
      }
      /**
       * Adds a click listener on the document. For every click we check
       * 1. if the click has happenned within the inbox
       *    - on close button, we close the inbox
       *    - on any of the category, we set that as the activeCategory
       *    - on any of the message, we mark raise notification clicked event. To identify the clicks on a button, we have p.id.startsWith('button-')
       * 2. if the user has clicked on the inboxSelector, we toggle inbox
       * 3. if the click is anywhere else on the UI and the inbox is open, we simply close it
       */
      /**
       * Checks if the current event target is part of the stored inboxSelector or the inboxSelector in the document.
       *
       * @param {Event} e - The event object to check.
       * @returns {boolean} - Returns true if the event target is within the inboxSelector, otherwise false.
       */
      checkForWebInbox(a) {
        var l;
        const u = H.readFromLSorCookie(Ve) || {}, v = document.getElementById(u.inboxSelector);
        return ((l = this.inboxSelector) === null || l === void 0 ? void 0 : l.contains(a.target)) || (v == null ? void 0 : v.contains(a.target));
      }
      /**
       * This function will be called every time when a message comes into the inbox viewport and it's visibility increases to 50% or drops below 50%
       * If a msg is 50% visible in the UI, we need to mark the message as viewed in LS and raise notification viewed event
       */
      handleMessageViewed(a) {
        const l = !this.isPreview;
        this.isInboxOpen && a.forEach((u) => {
          u.isIntersecting && this.unviewedMessages.hasOwnProperty(u.target.id) && u.target.message.viewed === 0 && (u.target.message.viewed = 1, l ? (window.clevertap.renderNotificationViewed({
            msgId: u.target.campaignId,
            pivotId: u.target.pivotId
          }), this.updateMessageInLS(u.target.id, {
            ...u.target.message,
            viewed: 1
          }), setTimeout(() => {
            u.target.shadowRoot.getElementById("unreadMarker").style.display = "none";
          }, 1e3)) : console.log("Notifiction viewed event will be raised at run time with payload ::", {
            msgId: u.target.campaignId,
            pivotId: u.target.pivotId
          }), this.unviewedCounter--, this.updateUnviewedBadgeCounter(), delete this.unviewedMessages[u.target.id]);
        });
      }
      updateMessageInLS(a, l) {
        if (!this.isPreview) {
          const u = Hn();
          u[a] = l, Ro(u);
        }
      }
      // create a separte fn fro refactoring
      toggleInbox(a) {
        this.isInboxOpen = !this.isInboxOpen, this.isInboxFromFlutter = !!(a != null && a.rect), this.isInboxOpen ? (this.inboxCard.scrollTop = 0, !this.isPreview && this.deleteExpiredAndGetUnexpiredMsgs(), this.inbox.style.display = "block", this.inbox.style.zIndex = "2147483647", this.config.categories.length && (this.selectedCategoryRef.setAttribute("selected", "false"), this.selectedCategoryRef = this.shadowRoot.getElementById("category-0"), this.updateActiveCategory(this.selectedCategoryRef.innerText), this.shadowRoot.getElementById("categoriesWrapper").scrollLeft -= this.shadowRoot.getElementById("categoriesWrapper").scrollWidth), this.setInboxPosition(a)) : this.inbox.style.display = "none";
      }
      setInboxPosition(a) {
        const l = window.outerWidth, u = getComputedStyle(q.inbox), v = u.getPropertyValue("--inbox-top"), y = u.getPropertyValue("--inbox-bottom"), k = u.getPropertyValue("--inbox-left"), C = u.getPropertyValue("--inbox-right"), E = v || y || k || C;
        if (l > 481 && !E) {
          const w = Hw(a, this.inbox.clientHeight, this.inbox.clientWidth), A = w.xPos, N = w.yPos;
          this.inbox.style.top = N + "px", this.inbox.style.left = A + "px";
        }
      }
      /**
       * Updates the UI with the number of unviewed messages
       * If there are more than 9 unviewed messages, we show the count as 9+
       * Only show this badge if the current document has the inboxNode
       */
      updateUnviewedBadgeCounter() {
        if (this.isPreview) {
          this.setBadgeStyle(this.unviewedCounter);
          return;
        }
        let a = 0;
        this.inboxCard.querySelectorAll("ct-inbox-message").forEach((l) => {
          const u = Hn();
          u[l.id] && u[l.id].viewed === 0 && a++;
        }), this.setBadgeStyle(a);
      }
      updateTSForRenderedMsgs() {
        this.inboxCard.querySelectorAll("ct-inbox-message").forEach((a) => {
          const l = a.id.split("_")[1];
          a.shadow.getElementById("timeStamp").firstChild.innerText = o0(l);
        });
      }
      getInboxStyles() {
        const l = this.config.categories.length ? 64 : 16, u = {
          panelBackgroundColor: this.config.styles.panelBackgroundColor,
          panelBorderColor: this.config.styles.panelBorderColor,
          headerBackgroundColor: this.config.styles.header.backgroundColor,
          headerTitleColor: this.config.styles.header.titleColor,
          closeIconColor: this.config.styles.closeIconColor,
          categoriesTabColor: this.config.styles.categories.tabColor,
          categoriesTitleColor: this.config.styles.categories.titleColor,
          selectedCategoryTabColor: this.config.styles.categories.selectedTab.tabColor,
          selectedCategoryTitleColor: this.config.styles.categories.selectedTab.titleColor,
          headerCategoryHeight: 36 + l
        };
        this.config.styles.categories.borderColor && (u.categoriesBorderColor = this.config.styles.categories.borderColor), this.config.styles.categories.selectedTab.borderColor && (u.selectedCategoryBorderColor = this.config.styles.categories.selectedTab.borderColor);
        const v = Ww(u), y = this.config.styles.cards, k = $w({
          backgroundColor: y.backgroundColor,
          borderColor: y.borderColor,
          titleColor: y.titleColor,
          descriptionColor: y.descriptionColor,
          buttonColor: y.buttonColor,
          buttonTextColor: y.buttonTextColor,
          unreadMarkerColor: y.unreadMarkerColor
        });
        return v + k;
      }
    }
    const qw = function(h) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const l = H.readFromLSorCookie(Ve) || {};
      a ? (q.inbox.inboxConfigForPreview = h, q.inbox.isPreview = !0, q.inbox && q.inbox.init()) : JSON.stringify(l) !== JSON.stringify(h) && (H.saveToLSorCookie(Ve, h), q.inbox && q.inbox.init());
    }, r0 = (h) => {
      h.inbox_preview ? q.inbox.incomingMessagesForPreview = h.inbox_notifs : q.inbox.incomingMessages = h;
    }, Vw = (h) => {
      du(), q.inbox = new t0({
        logger: h
      }), document.body.appendChild(q.inbox);
    }, n0 = (h) => {
      const a = H.readFromLSorCookie(Fe) || {};
      if (Object.keys(a).length > 0 && Object.keys(a)[0].includes("_")) {
        const l = {};
        return l[h] = a, H.saveToLSorCookie(Fe, l), l;
      }
      return a;
    }, Hn = () => {
      const h = JSON.parse(decodeURIComponent(H.read(V)));
      if (!se(h))
        return {};
      const a = n0(h);
      return a.hasOwnProperty(h) ? a[h] : {};
    }, Ro = (h) => {
      const a = JSON.parse(decodeURIComponent(H.read(V)));
      if (!se(a))
        return;
      const u = {
        ...n0(a),
        [a]: h
      };
      H.saveToLSorCookie(Fe, u);
    }, i0 = (h) => new Promise((a, l) => {
      const u = function(A) {
        let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 20;
        return new Promise((R, T) => {
          let F = 0;
          const U = setInterval(() => {
            h.debug("Retry attempt: ".concat(F + 1)), A() || q.inbox !== null ? (clearInterval(U), R()) : F >= O && (clearInterval(U), T(new Error("Condition not met within max retries"))), F++;
          }, N);
        });
      }, v = () => {
        q.inbox === null && Vw(h);
      }, y = () => {
        const A = H.readFromLSorCookie(Ve) || {};
        return document.getElementById(A.inboxSelector) && q.inbox === null;
      }, k = () => {
        h.debug("Failed to add inbox");
      };
      let C = !1;
      const E = () => {
        if (!(H.readFromLSorCookie(Ve) || {}).inboxSelector)
          return h.debug("Web Inbox Retry Skipped, Inbox selector is not configured"), !1;
        C || (C = !0, u(y, 500, 20).then(() => {
          v(), a();
        }).catch(k));
      };
      (() => {
        document.readyState === "complete" ? E() : (window.addEventListener("load", E), document.addEventListener("readystatechange", () => {
          document.readyState === "complete" && E();
        }));
      })();
    }), du = () => {
      customElements.get("ct-web-inbox") === void 0 && (customElements.define("ct-web-inbox", t0), customElements.define("ct-inbox-message", e0));
    }, Hw = (h, a, l) => {
      const u = document.scrollingElement.scrollLeft, v = document.scrollingElement.scrollTop, y = window.innerWidth + u, k = window.innerHeight + v, C = h.rect || h.target.getBoundingClientRect(), E = C.x + u, w = C.y + v, A = C.left + u, N = C.right + u, O = C.top + v, R = C.bottom, T = C.height, F = C.width, U = {
        x: E + F / 2,
        y: w + T / 2
      }, P = a / 2, D = l / 2;
      let B = !1, M, G;
      const K = 16;
      if (R + a <= k) {
        const Z = k - (R + a);
        G = Z >= K ? R + K : R + Z;
      } else if (O - a >= v) {
        const Z = O - a;
        G = Z >= K ? O - a - K : O - a - Z;
      } else
        B = !0, G = U.y - P, G < v ? G = v : G + a > k && (G = k - a);
      if (B) {
        const Z = N + l;
        if (Z <= y) {
          const re = Z + K <= y ? K : y - Z;
          M = N + re;
        } else {
          const re = A - l, pe = re - K >= u ? K : re - u;
          M = re - pe;
        }
      } else
        M = U.x - D, M < u ? A + l <= y ? M = A : M = u : M + l > y && (N - l >= u ? M = N - l : M = y - l);
      return {
        xPos: M,
        yPos: G
      };
    }, o0 = (h) => {
      const a = Date.now();
      let l = Math.floor((a - h) / 6e4);
      return l < 5 ? "Just now" : l < 60 ? "".concat(l, " minute").concat(l > 1 ? "s" : "", " ago") : (l = Math.floor(l / 60), l < 24 ? "".concat(l, " hour").concat(l > 1 ? "s" : "", " ago") : (l = Math.floor(l / 24), "".concat(l, " day").concat(l > 1 ? "s" : "", " ago")));
    }, s0 = () => Object.keys(H.readFromLSorCookie(Ve) || {}).length > 0, a0 = `<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.258435 9.74751C-0.0478584 9.44825 -0.081891 8.98373 0.156337 8.64775L0.258435 8.52836L3.87106 5L0.258435 1.47164C-0.0478588 1.17239 -0.0818914 0.707867 0.156337 0.371887L0.258435 0.252494C0.564728 -0.0467585 1.04018 -0.0800085 1.38407 0.152743L1.50627 0.252494L5.74156 4.39042C6.04786 4.68968 6.08189 5.1542 5.84366 5.49018L5.74156 5.60957L1.50627 9.74751C1.16169 10.0842 0.603015 10.0842 0.258435 9.74751Z" fill="#63698F"/>
</svg>
`, Gw = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM9.6839 5.93602C9.97083 5.55698 10.503 5.48833 10.8725 5.78269C11.2135 6.0544 11.2968 6.54044 11.0819 6.91173L11.0219 7.00198L8.09831 10.864C7.80581 11.2504 7.26654 11.3086 6.90323 11.0122L6.82822 10.9433L5.04597 9.10191C4.71635 8.76136 4.71826 8.21117 5.05023 7.87303C5.35666 7.5609 5.83722 7.53855 6.16859 7.80482L6.24814 7.87739L7.35133 9.01717L9.6839 5.93602Z" fill="#03A387"/>
</svg>
`, Kw = "https://web-native-display-campaign.clevertap.com/production/lib-overlay/overlay.js", Yw = "https://web-native-display-campaign.clevertap.com/production/lib-overlay/style.css", bc = {
      FLICKER_SHOW: "wve-anti-flicker-show",
      FLICKER_HIDE: "wve-anti-flicker-hide",
      FLICKER_ID: "wve-flicker-style"
    }, hu = {
      BUILDER: "ctBuilder",
      PREVIEW: "ctBuilderPreview",
      SDK_CHECK: "ctBuilderSDKCheck"
    }, c0 = {
      CLEVERTAP: "dashboard.clevertap.com"
    }, Zw = function(h, a, l) {
      let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (a !== void 0) {
        if (a.style !== void 0 && Object.keys(a.style).forEach((v) => {
          h.style.setProperty(v, a.style[v]);
        }), a.underline !== void 0) {
          const v = h.style.textDecoration;
          a.underline ? h.style.textDecoration = "".concat(v, " underline").trim() : h.style.textDecoration = v.replace("underline", "").trim();
        }
        if (a.text !== void 0 && (h.innerText = u ? a.text.text : a.text), a.clickDetails !== void 0) {
          const v = a.clickDetails.clickUrl;
          h.onclick = a.clickDetails.newTab ? () => {
            u || window.clevertap.raiseNotificationClicked(l), window.open(v, "_blank").focus();
          } : () => {
            u || window.clevertap.raiseNotificationClicked(l), window.location.href = v;
          };
        }
        a.imgURL !== void 0 && h.tagName.toLowerCase() === "img" && (h.src = a.imgURL);
      }
    }, Xw = (h) => {
      if (h.elementCSS !== void 0) {
        const a = document.createElement("style");
        a.innerHTML = h.elementCSS, document.head.appendChild(a);
      }
    }, l0 = (h, a) => {
      const l = window.parent[h];
      typeof l == "function" && (a.display.kv != null ? l(a.display.kv) : l());
    }, pu = (h, a) => {
      const l = `<script>
      const ct__camapignId = '`.concat(h.wzrk_id, `';
      const ct__formatVal = (v) => {
          return v && v.trim().substring(0, 20);
      }
      const ct__parentOrigin =  window.parent.origin;
      document.body.addEventListener('click', (event) => {
        const elem = event.target.closest?.('a[wzrk_c2a], button[wzrk_c2a]');
        if (elem) {
            const {innerText, id, name, value, href} = elem;
            const clickAttr = elem.getAttribute('onclick') || elem.getAttribute('click');
            const onclickURL = clickAttr?.match(/(window.open)[(]("|')(.*)("|',)/)?.[3] || clickAttr?.match(/(location.href *= *)("|')(.*)("|')/)?.[3];
            const props = {innerText, id, name, value};
            let msgCTkv = Object.keys(props).reduce((acc, c) => {
                const formattedVal = ct__formatVal(props[c]);
                formattedVal && (acc['wzrk_click_' + c] = formattedVal);
                return acc;
            }, {});
            if(onclickURL) { msgCTkv['wzrk_click_' + 'url'] = onclickURL; }
            if(href) { msgCTkv['wzrk_click_' + 'c2a'] = href; }
            const notifData = { msgId: ct__camapignId, msgCTkv, pivotId: '`).concat(h.wzrk_pivot, `' };
            window.parent.clevertap.renderNotificationClicked(notifData);
        }
      });
      <\/script>
    `);
      return a.replace(/(<\s*\/\s*body)/, "".concat(l, `
$1`));
    }, u0 = (h, a) => {
      const l = to(), u = l[a].global;
      if (u != null && a) {
        for (const v in h)
          if (h.hasOwnProperty(v) && (delete u[h[v]], H.read(ge))) {
            const y = JSON.parse(decodeURIComponent(H.read(ge))), k = JSON.parse(decodeURIComponent(H.read(V)));
            y[k] && y[k][a] && y[k][a][h[v]] && (delete y[k][a][h[v]], H.save(ge, encodeURIComponent(JSON.stringify(y))));
          }
      }
      yc(l);
    }, Qw = (h) => {
      if (q.globalEventsMap == null && (q.globalEventsMap = H.readFromLSorCookie(Oe), q.globalEventsMap == null)) {
        q.globalEventsMap = h;
        return;
      }
      for (const a in h)
        if (h.hasOwnProperty(a)) {
          const l = q.globalEventsMap[a], u = h[a];
          q.globalEventsMap[a] != null ? u[0] != null && u[0] > l[0] && (q.globalEventsMap[a] = u) : q.globalEventsMap[a] = u;
        }
    }, f0 = (h, a) => {
      const l = {};
      l.type = "event", l.evtName = Mr, l.evtData = {
        [tr]: h.wzrk_id
      }, h.wzrk_pivot && (l.evtData = {
        ...l.evtData,
        wzrk_pivot: h.wzrk_pivot
      }), a.processEvent(l);
    }, Jw = (h, a, l, u, v, y, k) => {
      if (h !== "" && h != null) {
        let C, E;
        v ? C = l : l !== null && (E = l.getElementsByClassName("jsCT_CTA"), E != null && E.length === 1 && (C = E[0]));
        const w = a.display.jsFunc, A = a.display.preview;
        A == null && (h += d0(y, k)), C != null && (C.onclick = () => {
          if (w != null)
            A == null && Or.fireRequest(h), l0(w, a), bs("-1", u, k.sessionId);
          else {
            const N = a.display.preview ? a.display.onClick : new URL(a.display.onClick).searchParams.get("r"), O = a.wzrk_id.split("_")[0];
            N === "pushPrompt" ? (a.display.preview || window.parent.clevertap.renderNotificationClicked({
              msgId: a.wzrk_id,
              pivotId: a.wzrk_pivot
            }), window.clevertap.notifications.push({
              skipDialog: !0
            }), bs(O, u, k.sessionId)) : N === "none" ? bs(O, u, k.sessionId) : a.display.window === 1 ? (window.open(h, "_blank"), a.display["close-popup"] && bs(O, u, k.sessionId), a.display.preview || window.parent.clevertap.renderNotificationClicked({
              msgId: a.wzrk_id,
              pivotId: a.wzrk_pivot
            })) : window.location = h;
          }
        });
      }
    }, d0 = (h, a) => {
      const l = h.getGuid(), u = a.getSessionCookieObject();
      return "&t=wc&d=" + encodeURIComponent(Yh(l + "|" + u.p + "|" + u.s));
    }, Ai = {
      /**
       * Checks if a campaign triggers a custom event push based on its template type.
       *
       * @param {Object} campaign - The campaign object to evaluate.
       * @returns {boolean} - Returns true if the campaign pushes a custom event, otherwise false.
       */
      doesCampaignPushCustomEvent: (h) => {
        var a, l, u, v, y, k, C;
        return [Yt.KV_PAIR, Yt.JSON].includes(h == null || (a = h.msgContent) === null || a === void 0 ? void 0 : a.type) || (h == null || (l = h.msgContent) === null || l === void 0 ? void 0 : l.type) === Yt.VISUAL_BUILDER && (h == null || (u = h.display) === null || u === void 0 || (v = u.details) === null || v === void 0 || (y = v[0]) === null || y === void 0 || (k = y.selectorData) === null || k === void 0 || (C = k.map((E) => {
          var w;
          return E == null || (w = E.values) === null || w === void 0 ? void 0 : w.editor;
        })) === null || C === void 0 ? void 0 : C.includes(Vi.JSON));
      },
      /**
       * Determines if a campaign mutates the DOM node based on its template type.
       *
       * @param {Object} campaign - The campaign object to evaluate.
       * @returns {boolean} - Returns true if the campaign mutates the DOM node, otherwise false.
       */
      doesCampaignMutateDOMNode: (h) => {
        var a, l, u, v, y, k;
        return [Yt.BANNER, Yt.CAROUSEL, Yt.CUSTOM_HTML].includes(h == null || (a = h.msgContent) === null || a === void 0 ? void 0 : a.type) || Yt.VISUAL_BUILDER === (h == null || (l = h.msgContent) === null || l === void 0 ? void 0 : l.type) && (h == null || (u = h.display) === null || u === void 0 || (v = u.details) === null || v === void 0 || (y = v[0]) === null || y === void 0 || (k = y.selectorData) === null || k === void 0 ? void 0 : k.some((C) => {
          var E;
          return [Vi.HTML, Vi.FORM].includes(C == null || (E = C.values) === null || E === void 0 ? void 0 : E.editor);
        }));
      },
      /**
       * Sorts campaigns based on their priority in descending order.
       *
       * @param {Array<Object>} campaigns - The list of campaign objects.
       * @returns {Array<Object>} - A new array of campaigns sorted by priority.
       */
      sortCampaignsByPriority: (h) => h.sort((a, l) => l.priority - a.priority),
      /**
       * Retrieves the DOM nodes associated with a campaign based on its template type.
       *
       * @param {Object} campaign - The campaign object to extract nodes from.
       * @returns {Array<string>} - An array of DOM node selectors or IDs associated with the campaign.
       */
      getCampaignNodes: (h) => {
        var a, l, u, v;
        const {
          msgContent: y,
          display: k
        } = h, {
          type: C
        } = y;
        switch (C) {
          case Yt.BANNER:
          case Yt.CAROUSEL:
            return [k == null ? void 0 : k.divSelector];
          case Yt.CUSTOM_HTML:
            return [k == null ? void 0 : k.divId];
          case Yt.VISUAL_BUILDER:
            return (k == null || (a = k.details) === null || a === void 0 || (l = a[0]) === null || l === void 0 || (u = l.selectorData) === null || u === void 0 || (v = u.filter((E) => {
              var w;
              return (E == null || (w = E.values) === null || w === void 0 ? void 0 : w.editor) === Vi.HTML;
            })) === null || v === void 0 ? void 0 : v.map((E) => E == null ? void 0 : E.selector)) || [];
          default:
            return [];
        }
      },
      /**
       * Determines whether the current custom event campaign should be skipped based on existing executed targets.
       *
       * @param {Object} targetNotif - The current notification object containing campaign details.
       * @param {ExecutedTargets} executedTargets - An object holding already executed custom events.
       * @returns {boolean} - Returns true if the current custom event campaign should be skipped, false otherwise.
      */
      shouldCurrentCustomEventCampaignBeSkipped(h, a) {
        var l, u, v, y;
        const k = a.customEvents.filter((E) => {
          var w;
          return E.customEventType === (h == null || (w = h.msgContent) === null || w === void 0 ? void 0 : w.type);
        });
        let C = !1;
        if (k != null && k.length)
          switch (h == null || (l = h.msgContent) === null || l === void 0 ? void 0 : l.type) {
            case Yt.KV_PAIR:
              !((u = k.map((E) => E == null ? void 0 : E.eventTopic)) === null || u === void 0) && u.includes(h == null || (v = h.display) === null || v === void 0 || (y = v.kv) === null || y === void 0 ? void 0 : y.topic) && (C = !0);
              break;
            case Yt.VISUAL_BUILDER:
            case Yt.JSON:
              C = !0;
              break;
          }
        return C;
      }
    };
    function h0(h) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "body";
      const l = document.querySelector(a);
      if (!l) return;
      const u = document.createElement("script");
      u.textContent = h.textContent, h.src && (u.src = h.src), u.async = h.async, Array.from(h.attributes).forEach((v) => {
        v.name !== "src" && v.name !== "async" && u.setAttribute(v.name, v.value);
      }), l.appendChild(u), h.remove();
    }
    function p0(h) {
      var a;
      let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "eu1", u = arguments.length > 2 ? arguments[2] : void 0;
      if ((h == null || (a = h.display) === null || a === void 0 ? void 0 : a.preview) === !0)
        return;
      const v = h.wzrk_id.split("_")[0], y = "https://".concat(l, ".dashboard.clevertap.com/").concat(u, "/campaigns/campaign/").concat(v, "/report/stats"), k = {
        ...h,
        url: y
      }, C = H.readFromLSorCookie(Q), E = C ? JSON.parse(decodeURIComponent(C)) : [];
      if (!E.some((A) => A.wzrk_id === h.wzrk_id)) {
        const A = [...E, k];
        H.saveToLSorCookie(Q, encodeURIComponent(JSON.stringify(A)));
      }
    }
    let Fn = null;
    const e1 = (h, a) => {
      const u = new URLSearchParams(window.location.search).get("ctActionMode");
      if (Fn = h, u) {
        const v = window.opener;
        switch (u) {
          case hu.BUILDER:
            Fn.debug("open in visual builder mode"), window.addEventListener("message", v0, !1), v && v.postMessage({
              message: "builder",
              originUrl: window.location.href
            }, "*");
            break;
          case hu.PREVIEW:
            Fn.debug("preview of visual editor"), window.addEventListener("message", v0, !1), v && v.postMessage({
              message: "preview",
              originUrl: window.location.href
            }, "*");
            break;
          case hu.SDK_CHECK:
            v && (Fn.debug("SDK version check"), v.postMessage({
              message: "SDKVersion",
              accountId: a,
              originUrl: window.location.href,
              sdkVersion: "1.15.3"
            }, "*"));
            break;
          default:
            Fn.debug("unknown query param ".concat(u));
            break;
        }
      }
    }, v0 = (h) => {
      if (h.data && s1(h.data.originUrl)) {
        if (!h.origin.endsWith(c0.CLEVERTAP) && !h.origin.endsWith(window.location.origin))
          return;
      } else
        return;
      if (h.data.message === "Dashboard") {
        var a, l;
        window.evtMaster = h.data.personalisation.evtMaster, t1(h.data.url, (a = h.data.variant) !== null && a !== void 0 ? a : null, (l = h.data.details) !== null && l !== void 0 ? l : {}, h.data.personalisation);
      } else h.data.message === "Overlay" && x0(h.data, !0);
    }, t1 = (h, a, l, u) => {
      document.readyState === "complete" ? y0(h, a, l, u) : document.addEventListener("readystatechange", () => {
        document.readyState === "complete" && y0(h, a, l, u);
      });
    };
    let Es, g0 = !1, m0 = !1;
    function y0(h, a, l, u) {
      g0 || (window.Shopify && (m0 = !0), document.body.innerHTML = "", document.head.innerHTML = "", document.documentElement.innerHTML = "", Es = document.createElement("div"), Es.id = "overlayDiv", Es.style.position = "relative", Es.style.display = "flex", document.body.appendChild(Es), n1(Kw, h, a, l, u).then(() => {
        Fn.debug("Overlay script loaded successfully."), g0 = !0;
      }).catch((v) => {
        Fn.debug("Error loading overlay script:", v);
      }), r1());
    }
    function r1() {
      var h = document.createElement("link");
      h.rel = "stylesheet", h.type = "text/css", h.href = Yw, document.head.appendChild(h);
    }
    function n1(h, a, l, u, v) {
      return new Promise((y, k) => {
        var C = document.createElement("script");
        C.type = "module", C.src = h, C.onload = function() {
          typeof window.Overlay == "function" ? (window.Overlay({
            id: "#overlayDiv",
            url: a,
            variant: l,
            details: u,
            isShopify: m0,
            personalisation: v
          }), y()) : k(new Error("ContentLayout not found in overlay.js"));
        }, C.onerror = function(E) {
          k(E);
        }, document.head.appendChild(C);
      });
    }
    const x0 = (h, a, l) => {
      l && (Fn = l);
      const u = [], v = a ? h.details : h.display.details;
      let y = window.location.href;
      if (a) {
        const R = new URL(y);
        R.searchParams.delete("ctActionMode"), y = R.toString();
      }
      let k = !1;
      const C = {
        msgId: h.wzrk_id,
        pivotId: h.wzrk_pivot
      }, E = () => {
        !a && !k && (k = !0, window.clevertap.renderNotificationViewed(C));
      }, w = (R) => {
        window.clevertap.renderNotificationClicked(R);
      }, A = (R, T) => {
        var F;
        if (T.elementCSS && Xw(T), !((F = T.isTrackingClicks) === null || F === void 0) && F.name && R.addEventListener("click", () => {
          const U = {
            msgId: h.wzrk_id,
            pivotId: h.wzrk_pivot,
            msgCTkv: {
              wzrk_selector: T.isTrackingClicks.name
            }
          };
          w(U);
        }), T.values)
          switch (T.values.editor) {
            case "html":
              a ? R.outerHTML = T.values.html.text : R.outerHTML = T.values.html, c1(T.selector);
              break;
            case "json":
              o1(h, T.values, a);
              break;
            case "form":
              C.msgCTkv = {
                wzrk_selector: T.selector
              }, Zw(R, T.values.form, C, a);
              break;
          }
      }, N = (R) => {
        let T = 0;
        const F = setInterval(() => {
          let U;
          try {
            U = document.querySelector(R.selector);
          } catch {
          }
          U ? (E(), A(U, R), clearInterval(F)) : ++T >= 20 && (Fn.debug("No element present on DOM with selector '".concat(R, "'.")), clearInterval(F));
        }, 500);
      };
      v.forEach((R) => {
        R.url === y && R.selectorData.forEach((T) => {
          if ((T.selector.includes("-afterend-") || T.selector.includes("-beforebegin-")) && T.values.initialHtml)
            u.push(T);
          else {
            let F;
            try {
              F = document.querySelector(T.selector);
            } catch {
            }
            F ? (E(), A(F, T)) : N(T);
          }
        });
      });
      const O = (R) => {
        const {
          pos: T,
          sibling: F
        } = i1(R.selector);
        let U = 0;
        const P = setInterval(() => {
          let D = null;
          try {
            const B = document.querySelector(F);
            D = document.querySelector('[ct-selector="'.concat(F, '"]')) || B;
          } catch {
            D = document.querySelector('[ct-selector="'.concat(F, '"]'));
          }
          if (D) {
            const B = document.createElement("div");
            B.innerHTML = R.values.initialHtml;
            const M = B.firstElementChild;
            D.insertAdjacentElement(T, M), D.getAttribute("ct-selector") || D.setAttribute("ct-selector", F);
            const G = document.querySelector('[ct-selector="'.concat(R.selector, '"]'));
            E(), A(G, R), clearInterval(P);
          } else ++U >= 20 && (Fn.debug("No element present on DOM with selector '".concat(F, "'.")), clearInterval(P));
        }, 500);
      };
      u.length > 0 && u.sort((T, F) => {
        const U = parseInt(T.selector.split("-")[0], 10), P = parseInt(F.selector.split("-")[0], 10);
        return U - P;
      }).forEach(O);
    };
    function i1(h) {
      const a = /^(\d+)-(afterend|beforebegin)-(.+)$/, l = h.match(a);
      return l ? {
        pos: l[2],
        sibling: l[3]
      } : {
        pos: "beforebegin",
        sibling: ""
      };
    }
    function o1(h, a) {
      let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      const u = {};
      u.msgId = h.wzrk_id, h.wzrk_pivot && (u.pivotId = h.wzrk_pivot), a.json != null && (l ? u.json = a.json.text : u.json = a.json);
      const v = new CustomEvent("CT_web_native_display_buider", {
        detail: u
      });
      document.dispatchEvent(v);
    }
    function s1(h) {
      try {
        return !!new URL(h);
      } catch {
        return !1;
      }
    }
    function a1(h) {
      const {
        personalizedSelectors: a = [],
        delayTime: l = 2e3
      } = h, u = {};
      let v = 0, y;
      function k(A) {
        const N = A.getBoundingClientRect(), {
          innerHeight: O,
          innerWidth: R
        } = window;
        return N.bottom > 0 && N.right > 0 && N.top < O && N.left < R;
      }
      (function() {
        const A = `
      .wve-anti-flicker-hide {
        opacity: 0 !important;
      }
      .wve-anti-flicker-show {
        transition: opacity 0.5s, filter 0.5s !important;
      }
    `, N = bc.FLICKER_ID;
        if (!document.getElementById(N)) {
          const O = document.createElement("style");
          O.id = N, O.textContent = A, document.head.appendChild(O);
        }
      })();
      function C(A) {
        function N(R) {
          const T = [];
          R.forEach((F) => {
            const U = document.querySelectorAll(F);
            U.length ? (U.forEach((P) => {
              k(P) && T.push(P);
            }), delete u[F]) : u[F] = !1;
          }), E(T);
        }
        function O() {
          N(Object.keys(u)), v++, (Object.keys(u).length === 0 || v > 20) && (v = 0, clearInterval(y));
        }
        N(A), Object.keys(u).length && (y = setInterval(O, 100));
      }
      function E(A) {
        A.forEach((N) => N.classList.add(bc.FLICKER_HIDE)), setTimeout(() => {
          A.forEach((N) => {
            N.classList.remove(bc.FLICKER_HIDE), N.classList.add(bc.FLICKER_SHOW);
          });
        }, l);
      }
      function w() {
        let A = document.location.href;
        new MutationObserver(() => {
          A !== document.location.href && (A = document.location.href, C(a));
        }).observe(document.body, {
          childList: !0,
          subtree: !0
        });
      }
      window.addEventListener("DOMContentLoaded", () => {
        w();
      }), C(a);
    }
    function c1(h) {
      try {
        let a;
        if (h.includes("-afterend-") || h.includes("-beforebegin-") ? a = document.querySelector('[ct-selector="'.concat(h, '"]')) : a = document.querySelector(h), !a) return;
        a.querySelectorAll("script").forEach((u) => {
          h0(u);
        });
      } catch (a) {
        Fn.debug("Error loading script", a);
      }
    }
    class b0 extends HTMLElement {
      constructor() {
        super(), this._details = null, this.shadow = null, this.shadow = this.attachShadow({
          mode: "open"
        });
      }
      get details() {
        return this._details || "";
      }
      set details(a) {
        this._details === null && (this._details = a, this.renderBanner());
      }
      renderBanner() {
        this.shadow.innerHTML = this.getBannerContent(), this.trackClick !== !1 && this.addEventListener("click", () => {
          const a = this.details.onClick;
          a && (this.details.window ? window.open(a, "_blank") : window.parent.location.href = a), window.clevertap.renderNotificationClicked({
            msgId: this.msgId,
            pivotId: this.pivotId
          });
        }), window.clevertap.renderNotificationViewed({
          msgId: this.msgId,
          pivotId: this.pivotId
        });
      }
      getBannerContent() {
        return `
      <style type="text/css">
        .banner {
          position: relative;
          cursor: `.concat(this.details.onClick ? "pointer" : "", `
        }
        img {
          height: `).concat(this.divHeight ? this.divHeight : "auto", `;
          width: 100%;
        }
        .wrapper:is(.left, .right, .center) {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: auto;
          top: 0;
        }
        `).concat(this.details.css ? this.details.css : "", `
      </style>
      <div class="banner">
        <picture>
          <source media="(min-width:480px)" srcset="`).concat(this.details.desktopImageURL, `">
          <source srcset="`).concat(this.details.mobileImageURL, `">
          <img src="`).concat(this.details.desktopImageURL, `" alt="Please upload a picture" style="width:100%;" part="banner__img">
        </picture>
        `).concat(this.details.html ? this.details.html : "", `
      </div>
    `);
      }
    }
    class l1 extends HTMLElement {
      constructor() {
        super(), this._target = null, this._carousel = null, this.shadow = null, this.slides = 0, this.previouslySelectedItem = -1, this.selectedItem = 1, this.autoSlide = null, this.stopAutoSlideTimeout = null, this.shadow = this.attachShadow({
          mode: "open"
        }), customElements.get("ct-web-personalisation-banner") === void 0 && customElements.define("ct-web-personalisation-banner", b0);
      }
      get target() {
        return this._target || "";
      }
      set target(a) {
        this._target === null && (this._target = a, this.renderCarousel());
      }
      get details() {
        return this.target.display.details;
      }
      get display() {
        return this.target.display;
      }
      renderCarousel() {
        this.slides = this.details.length, this.shadow.innerHTML = this.getStyles();
        const a = this.getCarouselContent();
        this.display.showNavBtns && a.insertAdjacentHTML("beforeend", this.display.navBtnsHtml), this.display.showNavArrows && (a.insertAdjacentHTML("beforeend", this.display.leftNavArrowHtml), a.insertAdjacentHTML("beforeend", this.display.rightNavArrowHtml)), this._carousel = a, this.shadow.appendChild(a), this.setupClick(), this.updateSelectedItem(), this.startAutoSlide(), this.setupOnHover(), window.clevertap.renderNotificationViewed({
          msgId: this.target.wzrk_id,
          pivotId: this.target.wzrk_pivot
        });
      }
      setupClick() {
        this._carousel.addEventListener("click", (a) => {
          const l = a.target.id;
          if (l.startsWith("carousel__button")) {
            const u = +l.split("-")[1];
            u !== this.selectedItem && (this.previouslySelectedItem = this.selectedItem, this.selectedItem = u, this.updateSelectedItem(), this.startAutoSlide());
          } else if (l.startsWith("carousel__arrow"))
            l.endsWith("right") ? this.goToNext() : this.goToPrev(), this.startAutoSlide();
          else if (l.indexOf("-") > -1) {
            const u = +l.split("-")[1], v = u - 1;
            window.parent.clevertap && window.clevertap.renderNotificationClicked({
              msgId: this.target.wzrk_id,
              pivotId: this.target.wzrk_pivot,
              wzrk_slideNo: u
            });
            const y = this.details[v].onClick;
            y !== "" && (this.details[v].window ? window.open(y, "_blank") : window.location.href = y);
          }
        });
      }
      setupOnHover() {
        this._carousel.addEventListener("mouseenter", (a) => {
          this.stopAutoSlideTimeout = setTimeout(() => {
            this.autoSlide = clearInterval(this.autoSlide);
          }, 500);
        }), this._carousel.addEventListener("mouseleave", (a) => {
          clearTimeout(this.stopAutoSlideTimeout), this.autoSlide === void 0 && this.startAutoSlide();
        });
      }
      getCarouselContent() {
        const a = document.createElement("div");
        return a.setAttribute("class", "carousel"), this.details.forEach((l, u) => {
          const v = document.createElement("ct-web-personalisation-banner");
          v.classList.add("carousel__item"), v.trackClick = !1, v.setAttribute("id", "carousel__item-".concat(u + 1)), v.details = l, a.appendChild(v);
        }), a;
      }
      getStyles() {
        var a, l;
        return `
      <style>
      .carousel {
        position: relative;
      }

      .carousel__item {
        display: none;
        background-repeat: no-repeat;
        background-size: cover;
      }

      ct-web-personalisation-banner::part(banner__img) {
        height: `.concat(!(this === null || this === void 0 || (a = this.target) === null || a === void 0 || (l = a.display) === null || l === void 0) && l.divHeight ? this.target.display.divHeight : "auto", `;
        width: 100%;
        transition: 2s;
      }

      .carousel__item--selected {
        display: block;
      }
      `).concat(this.display.navBtnsCss, `
      `).concat(this.display.navArrowsCss, `
      </style>
  `);
      }
      updateSelectedItem() {
        if (this.previouslySelectedItem !== -1) {
          const u = this.shadow.getElementById("carousel__item-".concat(this.previouslySelectedItem)), v = this.shadow.getElementById("carousel__button-".concat(this.previouslySelectedItem));
          u.classList.remove("carousel__item--selected"), v && v.classList.remove("carousel__button--selected");
        }
        const a = this.shadow.getElementById("carousel__item-".concat(this.selectedItem)), l = this.shadow.getElementById("carousel__button-".concat(this.selectedItem));
        a.classList.add("carousel__item--selected"), l && l.classList.add("carousel__button--selected");
      }
      startAutoSlide() {
        clearInterval(this.autoSlide), this.autoSlide = setInterval(() => {
          this.goToNext();
        }, this.display.sliderTime ? this.display.sliderTime * 1e3 : 3e3);
      }
      goToNext() {
        this.goTo(this.selectedItem, (this.selectedItem + 1) % this.slides);
      }
      goToPrev() {
        this.goTo(this.selectedItem, this.selectedItem - 1);
      }
      goTo(a, l) {
        this.previouslySelectedItem = a, this.selectedItem = l, l === 0 && (this.selectedItem = this.slides), this.updateSelectedItem();
      }
    }
    const w0 = (h) => {
      var a;
      customElements.get("ct-web-personalisation-banner") === void 0 && customElements.define("ct-web-personalisation-banner", b0);
      const l = (a = h.display.divId) !== null && a !== void 0 ? a : h.display.divSelector, u = document.createElement("ct-web-personalisation-banner");
      u.msgId = h.wzrk_id, u.pivotId = h.wzrk_pivot, u.divHeight = h.display.divHeight, u.details = h.display.details[0];
      const v = h.display.divId ? document.getElementById(l) : document.querySelector(l);
      v.innerHTML = "", v.appendChild(u);
    }, _0 = (h) => {
      var a;
      customElements.get("ct-web-personalisation-carousel") === void 0 && customElements.define("ct-web-personalisation-carousel", l1);
      const l = (a = h.display.divId) !== null && a !== void 0 ? a : h.display.divSelector, u = document.createElement("ct-web-personalisation-carousel");
      u.target = h;
      const v = h.display.divId ? document.getElementById(l) : document.querySelector(l);
      v.innerHTML = "", v.appendChild(u);
    }, u1 = (h) => {
      const a = {};
      a.msgId = h.wzrk_id, h.wzrk_pivot && (a.pivotId = h.wzrk_pivot), h.msgContent.kv != null && (a.kv = h.msgContent.kv);
      const l = new CustomEvent("CT_web_native_display", {
        detail: a
      });
      document.dispatchEvent(l);
    }, C0 = (h, a) => {
      const {
        display: l,
        wzrk_id: u,
        wzrk_pivot: v
      } = h || {}, {
        divId: y
      } = l || {};
      let C = l.details[0].html;
      if (!y || !C) {
        a.error("No div Id or no html found");
        return;
      }
      l["custom-html-click-track"] && (C = pu(h, C));
      let E = !1;
      const w = {
        msgId: u,
        pivotId: v
      }, A = () => {
        E || (E = !0, window.clevertap.renderNotificationViewed(w));
      };
      ((O) => {
        let R = 0;
        const T = setInterval(() => {
          const F = document.querySelector(O);
          if (F) {
            A(), F.innerHTML = C;
            const U = document.createElement("div");
            U.innerHTML = C, U.querySelectorAll("script").forEach((D) => {
              h0(D);
            }), clearInterval(T);
          } else ++R >= 20 && (a.error("No element present on DOM with divId '".concat(O, "'.")), clearInterval(T));
        }, 500);
      })(y);
    }, f1 = (h) => {
      const a = {};
      a.msgId = h.wzrk_id;
      const u = h.display.details[0].json;
      h.wzrk_pivot && (a.pivotId = h.wzrk_pivot), h.display.json != null && (a.json = u);
      const v = new CustomEvent("CT_web_native_display_json", {
        detail: a
      });
      document.dispatchEvent(v);
    };
    function d1(h, a) {
      if (!h.origin.endsWith(c0.CLEVERTAP))
        return;
      const l = JSON.parse(h.data), u = l.inapp_notifs, v = u[0].msgContent;
      l && v && v.templateType === "custom-html" && v.type === 5 && C0(u[0], a);
    }
    const h1 = (h) => {
      const l = new URLSearchParams(window.location.search).get("ctActionMode");
      if (l) {
        const u = window.opener;
        switch (l) {
          case Jl:
            if (u) {
              u.postMessage("ready", "*");
              const v = (y) => d1(y, h);
              window.addEventListener("message", v, !1);
            }
            break;
          default:
            h.debug("unknown query param ".concat(l));
            break;
        }
      }
    }, p1 = (h, a) => {
      const l = "wzrkImageOnlyDiv", u = document.createElement("ct-web-popup-imageonly");
      u.session = a, u.target = h;
      const v = document.getElementById(l);
      v.innerHTML = "", v.style.visibility = "hidden", v.appendChild(u);
    }, v1 = (h) => {
      const a = h.card.borderEnabled ? h.card.border.borderWidth * 2 : 0, u = 360 - 16 * 2 - a;
      return `
    #pnWrapper {
      width: 360px;
      font-family: proxima-nova, Arial, sans-serif;
    }
    
    #pnWrapper * {
       margin: 0px;
       padding: 0px;
       text-align: left;
    }
    `.concat(h.overlay.enabled ? `#pnOverlay {
      background-color: `.concat(h.overlay.color || "rgba(0, 0, 0, .15)", `;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 10000
    }
`) : "", `
    #pnCard {
      background-color: `).concat(h.card.color, `;
      border-radius: `).concat(h.card.borderRadius, `px;
      padding: 16px;
      width: `).concat(u, `px;
      position: fixed;
      z-index: 999999;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      `).concat(h.card.borderEnabled ? `
        border-width: `.concat(h.card.border.borderWidth, `px;
        border-color: `).concat(h.card.border.borderColor, `;
        border-style: solid;
      `) : "", `
      height: fit-content;
    }

    #iconTitleDescWrapper {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      gap: 12px;
    }

    #iconContainer {
      min-width: 64px;
      max-width: 64px;
      aspect-ratio: 1;
      object-fit: cover;
    }

    #titleDescWrapper {
      flex-grow: 1;
      overflow: hidden;
      overflow-wrap: break-word;
    }

    #title {
      font-size: 16px;
      font-weight: 700;
      color: `).concat(h.text.titleColor, `;
      margin-bottom: 4px;
      line-height: 24px;
    }

    #description {
      font-size: 14px;
      font-weight: 500;
      color: `).concat(h.text.descriptionColor, `;
      line-height: 20px;
    }

    #buttonsContainer {
      display: flex;
      justify-content: space-between;
      min-height: 32px;
      gap: 8px;
      align-items: center;
    }

    #primaryButton, #secondaryButton {
      padding: 6px 24px;
      flex: 1;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      height: max-content;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-align: center;
    }

    #primaryButton {
      background-color: `).concat(h.buttons.primaryButton.buttonColor, `;
      color: `).concat(h.buttons.primaryButton.textColor, `;
      border-radius: `).concat(h.buttons.primaryButton.borderRadius, `px;
      `).concat(h.buttons.primaryButton.borderEnabled ? `
          border-width: `.concat(h.buttons.primaryButton.border.borderWidth, `px;
          border-color: `).concat(h.buttons.primaryButton.border.borderColor, `;
          border-style: solid;
        `) : "border: none;", `
    }

    #secondaryButton {
      background-color: `).concat(h.buttons.secondaryButton.buttonColor, `;
      color: `).concat(h.buttons.secondaryButton.textColor, `;
      border-radius: `).concat(h.buttons.secondaryButton.borderRadius, `px;
      `).concat(h.buttons.secondaryButton.borderEnabled ? `
          border-width: `.concat(h.buttons.secondaryButton.border.borderWidth, `px;
          border-color: `).concat(h.buttons.secondaryButton.border.borderColor, `;
          border-style: solid;
        `) : "border: none;", `
    }

    #primaryButton:hover, #secondaryButton:hover {
      opacity: 0.9;
    }
  `);
    }, g1 = (h) => `
    #bell_wrapper {
      position: fixed;
      cursor: pointer;
      background-color: `.concat(h.card.backgroundColor, `;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 999999;
    }

    #bell_icon {
      display: block;
      width: 48px;
      height: 48px;
    }

    #bell_wrapper:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease-in-out;
    }

    #bell_tooltip {
      display: none;
      background-color: #2b2e3e;
      color: #fff;
      border-radius: 4px;
      padding: 4px;
      white-space: nowrap;
      pointer-events: none;
      font-size: 14px;
      line-height: 1.4;
    }

    #gif_modal {
      display: none;
      background-color: #ffffff;
      padding: 4px;
      width: 400px;
      height: 256px;
      border-radius: 4px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      cursor: default;
    }

    #gif_image {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    #close_modal {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 8px;
      right: 8px;
      background: rgba(238, 238, 238, 0.8);
      text-align: center;
      line-height: 20px;
      border-radius: 4px;
      color: #000000;
      font-size: 22px;
      cursor: pointer;
    }
  `), Po = () => {
      const h = navigator.userAgent;
      return h.includes("Chrome") || h.includes("CriOS");
    }, Bo = () => {
      const h = navigator.userAgent;
      return h.includes("Firefox") || h.includes("FxiOS");
    }, ro = () => {
      const h = navigator.userAgent;
      return h.includes("Safari") && !h.includes("CriOS") && !h.includes("FxiOS") && !h.includes("Chrome") && !h.includes("Firefox");
    }, S0 = (h) => !h || typeof h != "object" ? !1 : Array.isArray(h) ? !0 : Object.values(h).some((a) => typeof a == "function" || S0(a)), E0 = function(h) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      const l = {};
      for (const u in h)
        if (Object.hasOwnProperty.call(h, u)) {
          const v = h[u], y = a ? "".concat(a, ".").concat(u) : u;
          typeof v == "object" && v !== null && !Array.isArray(v) ? Object.assign(l, E0(v, y)) : Array.isArray(v) || (l[y] = {
            defaultValue: v,
            type: typeof v
          });
        }
      return l;
    }, A0 = (h) => {
      const a = {};
      for (const l in h)
        if (Object.hasOwnProperty.call(h, l)) {
          const u = h[l], v = l.split(".");
          let y = a;
          v.forEach((k, C) => {
            C === v.length - 1 ? y[k] = u : y = y[k] = y[k] || {};
          });
        }
      return a;
    };
    function k0(h) {
      if (typeof h != "string")
        return {
          isValid: !1,
          error: "ID must be a string."
        };
      const a = h.toLowerCase(), l = a.length;
      return l < 1 || l > 64 ? {
        isValid: !1,
        error: "ID must be between 1 and 64 characters."
      } : /^[a-z0-9()!:@$_-]+$/.test(a) ? {
        isValid: !0,
        sanitizedId: m1(a)
      } : {
        isValid: !1,
        error: "ID contains invalid characters. Only A-Z, a-z, 0-9, (, ), !, :, @, $, _, - are allowed."
      };
    }
    function m1(h) {
      if (typeof h != "string")
        throw new Error("ID must be a string");
      return "".concat(Ba).concat(h.toLowerCase());
    }
    var Kr = t("oldValues"), De = t("logger"), mn = t("request"), no = t("account"), As = t("wizAlertJSPath"), qt = t("fcmPublicKey"), ks = t("setUpWebPush"), io = t("isNativeWebPushSupported"), vu = t("setUpSafariNotifications"), gu = t("setUpChromeFirefoxNotifications"), mu = t("addWizAlertJS"), yu = t("removeWizAlertJS"), Is = t("handleNotificationRegistration");
    class I0 extends Array {
      constructor(a, l) {
        let {
          logger: u,
          session: v,
          request: y,
          account: k
        } = a;
        super(), Object.defineProperty(this, Is, {
          value: S1
        }), Object.defineProperty(this, yu, {
          value: C1
        }), Object.defineProperty(this, mu, {
          value: _1
        }), Object.defineProperty(this, gu, {
          value: w1
        }), Object.defineProperty(this, vu, {
          value: b1
        }), Object.defineProperty(this, io, {
          value: x1
        }), Object.defineProperty(this, ks, {
          value: y1
        }), Object.defineProperty(this, Kr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, De, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, mn, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, no, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, As, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, qt, {
          writable: !0,
          value: void 0
        }), r(this, As)[As] = "https://d2r1yp2w7bby2u.cloudfront.net/js/wzrk_dialog.min.js", r(this, qt)[qt] = null, r(this, Kr)[Kr] = l, r(this, De)[De] = u, r(this, mn)[mn] = y, r(this, no)[no] = k;
      }
      setupWebPush(a) {
        r(this, ks)[ks](a);
      }
      push() {
        if (H.readFromLSorCookie(ut)) {
          const v = H.readFromLSorCookie(fr), y = H.readFromLSorCookie(tt);
          for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          R0({
            logger: r(this, De)[De],
            account: r(this, no)[no],
            request: r(this, mn)[mn],
            displayArgs: l,
            fcmPublicKey: r(this, qt)[qt]
          }), v && y ? wu() : H.saveToLSorCookie(Pe, !0);
        } else
          r(this, De)[De].error("Account ID is not set");
      }
      _processOldValues() {
        r(this, Kr)[Kr] && (Array.isArray(r(this, Kr)[Kr]) && r(this, Kr)[Kr].length > 0 && (R0({
          logger: r(this, De)[De],
          account: r(this, no)[no],
          request: r(this, mn)[mn],
          displayArgs: r(this, Kr)[Kr].slice(),
          fcmPublicKey: r(this, qt)[qt]
        }), H.saveToLSorCookie(Pe, !0)), r(this, ks)[ks](r(this, Kr)[Kr])), r(this, Kr)[Kr] = null;
      }
      setUpWebPushNotifications(a, l, u, v) {
        Po() || Bo() ? r(this, gu)[gu](a, l) : ro() && r(this, vu)[vu](a, u, v, l);
      }
      setApplicationServerKey(a) {
        r(this, qt)[qt] = a;
      }
      _enableWebPush(a, l) {
        q.webPushEnabled = a, l != null && this.setApplicationServerKey(l), !H.readFromLSorCookie(Pe) && q.webPushEnabled && q.notifApi.notifEnabledFromApi && r(this, Is)[Is](q.notifApi.displayArgs);
      }
    }
    var y1 = function(a) {
      q.webPushEnabled && a.length > 0 ? r(this, Is)[Is](a) : q.webPushEnabled == null && a.length > 0 ? (q.notifApi.notifEnabledFromApi = !0, q.notifApi.displayArgs = a.slice()) : q.webPushEnabled === !1 && a.length > 0 && r(this, De)[De].error("Make sure push notifications are fully enabled and integrated");
    }, x1 = function() {
      return "PushManager" in window;
    }, b1 = function(a, l, u, v) {
      const y = document.getElementById("pnWrapper"), k = document.getElementById("wzrk_wrapper");
      r(this, io)[io]() && r(this, qt)[qt] != null ? (H.setMetaProp(pt, !0), navigator.serviceWorker.register(v).then((C) => {
        window.Notification.requestPermission().then((E) => {
          if (E === "granted") {
            const w = {
              applicationServerKey: r(this, qt)[qt],
              userVisibleOnly: !0
            };
            r(this, De)[De].info("Sub Obj" + JSON.stringify(w));
            const A = () => {
              C.pushManager.subscribe(w).then((O) => {
                r(this, De)[De].info("Service Worker registered. Endpoint: " + O.endpoint), r(this, De)[De].info("Service Data Sent: " + JSON.stringify({
                  applicationServerKey: r(this, qt)[qt],
                  userVisibleOnly: !0
                })), r(this, De)[De].info("Subscription Data Received: " + JSON.stringify(O));
                const R = JSON.parse(JSON.stringify(O));
                R.endpoint = R.endpoint.split("/").pop(), H.saveToLSorCookie(_r, R), r(this, mn)[mn].registerToken(R), typeof a < "u" && typeof a == "function" && a();
                const T = document.getElementById("bell_wrapper");
                T && T.parentNode.removeChild(T), y && y.parentNode.removeChild(y), k && k.parentNode.removeChild(k);
              });
            }, N = C.installing || C.waiting || C.active;
            N && N.state === "activated" ? A() : N && N.addEventListener("statechange", (O) => {
              O.target.state === "activated" && (r(this, De)[De].info("Service Worker activated. Proceeding with subscription."), A());
            });
          } else E === "denied" && (r(this, De)[De].info("Error subscribing to Safari web push"), y && y.parentNode.removeChild(y), k && k.parentNode.removeChild(k));
        });
      })) : (typeof l > "u" && r(this, De)[De].error("Ensure that APNS Web Push ID is supplied"), typeof u > "u" && r(this, De)[De].error("Ensure that APNS Web Push service path is supplied"), "safari" in window && "pushNotification" in window.safari && window.safari.pushNotification.requestPermission(u, l, {}, (C) => {
        if (C.permission === "granted") {
          const E = JSON.parse(JSON.stringify(C));
          E.endpoint = C.deviceToken, E.browser = "Safari", r(this, De)[De].info("Service Data Sent: " + JSON.stringify({
            apnsServiceUrl: u,
            apnsWebPushId: l
          })), r(this, De)[De].info("Subscription Data Received: " + JSON.stringify(C));
          const w = document.getElementById("bell_wrapper");
          w && w.parentNode.removeChild(w), y && y.parentNode.removeChild(y), k && k.parentNode.removeChild(k), H.saveToLSorCookie(_r, E), r(this, mn)[mn].registerToken(E), r(this, De)[De].info("Safari Web Push registered. Device Token: " + C.deviceToken);
        } else C.permission === "denied" && (r(this, De)[De].info("Error subscribing to Safari web push"), y && y.parentNode.removeChild(y), k && k.parentNode.removeChild(k));
      }));
    }, w1 = function(a, l) {
      let u = "";
      "serviceWorker" in navigator && navigator.serviceWorker.register(l).then((v) => typeof __wzrk_account_id < "u" ? new Promise((C) => setTimeout(() => C(v), 5e3)) : (u = v.scope, /^(\.?)(\/?)([^/]*).js$/.test(l) ? navigator.serviceWorker.ready : Po() ? new Promise((C) => setTimeout(() => C(v), 5e3)) : navigator.serviceWorker.getRegistrations())).then((v) => {
        Bo() && Array.isArray(v) && (v = v.filter((E) => E.scope === u)[0]);
        const y = {
          userVisibleOnly: !0
        };
        r(this, qt)[qt] != null && (y.applicationServerKey = Sw(r(this, qt)[qt]));
        const k = document.getElementById("pnWrapper"), C = document.getElementById("wzrk_wrapper");
        v.pushManager.subscribe(y).then((E) => {
          r(this, De)[De].info("Service Worker registered. Endpoint: " + E.endpoint), r(this, De)[De].debug("Service Data Sent: " + JSON.stringify(y)), r(this, De)[De].debug("Subscription Data Received: " + JSON.stringify(E));
          const w = JSON.parse(JSON.stringify(E));
          Po() ? (w.endpoint = w.endpoint.split("/").pop(), w.browser = "Chrome") : Bo() && (w.endpoint = w.endpoint.split("/").pop(), w.browser = "Firefox"), H.saveToLSorCookie(_r, w), r(this, mn)[mn].registerToken(w), typeof a < "u" && typeof a == "function" && a();
          const A = document.getElementById("bell_wrapper");
          A && A.parentNode.removeChild(A), k && k.parentNode.removeChild(k), C && C.parentNode.removeChild(C);
        }).catch((E) => {
          v.pushManager.getSubscription().then((w) => {
            w !== null && w.unsubscribe().then((A) => {
              r(this, De)[De].info("Unsubscription successful"), window.clevertap.notifications.push({
                skipDialog: !0
              });
            }).catch((A) => {
              r(this, De)[De].error("Error unsubscribing: " + A);
            });
          }), r(this, De)[De].error("Error subscribing: " + E), k && k.parentNode.removeChild(k), C && C.parentNode.removeChild(C);
        });
      }).catch((v) => {
        r(this, De)[De].error("error registering service worker: " + v);
      });
    }, _1 = function() {
      const a = document.createElement("script");
      return a.setAttribute("type", "text/javascript"), a.setAttribute("id", "wzrk-alert-js"), a.setAttribute("src", r(this, As)[As]), document.getElementsByTagName("body")[0].appendChild(a), a;
    }, C1 = function() {
      const a = document.getElementById("wzrk-alert-js");
      a.parentNode.removeChild(a);
    }, S1 = function(a) {
      let l, u, v, y, k, C, E, w, A, N, O, R, T, F, U;
      const P = ro() && "PushManager" in window && H.getMetaProp(pt) && r(this, qt)[qt] !== null;
      if (a.length === 1) {
        if (vn(a[0])) {
          const M = a[0];
          l = M.titleText, u = M.bodyText, v = M.okButtonText, y = M.rejectButtonText, k = M.okButtonColor, C = M.skipDialog, E = M.askAgainTimeInSeconds, w = M.okCallback, A = M.rejectCallback, N = M.subscriptionCallback, O = M.serviceWorkerPath, R = M.httpsPopupPath, T = M.httpsIframePath, F = M.apnsWebPushId, U = M.apnsWebPushServiceUrl;
        }
      } else
        l = a[0], u = a[1], v = a[2], y = a[3], k = a[4], C = a[5], E = a[6];
      if (C == null && (C = !1), O == null && (O = "/clevertap_sw.js"), typeof navigator.serviceWorker > "u")
        return;
      const D = R != null && T != null;
      if (window.location.protocol !== "https:" && document.location.hostname !== "localhost" && !D) {
        r(this, De)[De].error("Make sure you are https or localhost to register for notifications");
        return;
      }
      if ((Po() || Bo()) && !r(this, io)[io]()) {
        r(this, De)[De].error("Web Push Notification is not supported on this browser");
        return;
      }
      if (!D) {
        if (!("Notification" in window) || Notification == null) {
          r(this, De)[De].error("Notification not supported on this Device or Browser");
          return;
        }
        if (Notification.permission === "granted" && (P || Po() || Bo())) {
          this.setUpWebPushNotifications(N, O, F, U);
          return;
        } else if (Notification.permission === "denied")
          return;
        if (C) {
          this.setUpWebPushNotifications(N, O, F, U);
          return;
        }
      }
      if (!l || !u || !v || !y) {
        r(this, De)[De].error("Missing input parameters; please specify title, body, ok button and cancel button text");
        return;
      }
      (k == null || !k.match(/^#[a-f\d]{6}$/i)) && (k = "#f28046");
      const B = (/* @__PURE__ */ new Date()).getTime() / 1e3;
      if (H.getMetaProp(ri) == null)
        H.setMetaProp(ri, B);
      else {
        E == null && (E = 7 * 24 * 60 * 60);
        const M = H.getMetaProp(ri);
        if (B - M < E) {
          if (!ro() || P || r(this, qt)[qt] === null)
            return;
        } else
          H.setMetaProp(ri, B);
      }
      if (ro() && r(this, io)[io]() && r(this, qt)[qt] !== null && H.setMetaProp(pt, !0), H.readFromLSorCookie(Io) || document.getElementById(qi)) {
        r(this, De)[De].debug("Soft prompt wrapper is already loading or loaded");
        return;
      }
      H.saveToLSorCookie(Io, !0), r(this, mu)[mu]().onload = () => {
        H.saveToLSorCookie(Io, !1), window.wzrkPermissionPopup.wizAlert({
          title: l,
          body: u,
          confirmButtonText: v,
          confirmButtonColor: k,
          rejectButtonText: y
        }, (M) => {
          M ? (typeof w == "function" && w(), this.setUpWebPushNotifications(N, O, F, U)) : typeof A == "function" && A(), r(this, yu)[yu]();
        });
      };
    };
    const E1 = "PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi40OTYyIDUuMjQzOTVDMTIuODM5MSA1LjAzMzE3IDEzLjI4NDcgNS4xNDY4OSAxMy40OTczIDUuNDg4NjdDMTMuNzIyMyA1Ljg1MDE4IDEzLjYwMDIgNi4zMjUxOCAxMy4yMzggNi41NDkwMkM3LjM5Mzk5IDEwLjE2MDYgMy41IDE2LjYyNTcgMy41IDI0LjAwMDNDMy41IDM1LjMyMjEgMTIuNjc4MiA0NC41MDAzIDI0IDQ0LjUwMDNDMjguMDA1NSA0NC41MDAzIDMxLjc0MjYgNDMuMzUxNSAzNC45IDQxLjM2NTVDMzUuMjYwOCA0MS4xMzg1IDM1Ljc0MTYgNDEuMjM4NiAzNS45NjY4IDQxLjYwMDZDMzYuMTc5MiA0MS45NDE5IDM2LjA4NSA0Mi4zOTExIDM1Ljc0NTIgNDIuNjA2QzMyLjM0NjggNDQuNzU1OSAyOC4zMTg3IDQ2LjAwMDMgMjQgNDYuMDAwM0MxMS44NDk3IDQ2LjAwMDMgMiAzNi4xNTA1IDIgMjQuMDAwM0MyIDE2LjA2NjkgNi4xOTkyMSA5LjExNDMyIDEyLjQ5NjIgNS4yNDM5NVpNMzguOCAzOS45MDAzQzM4LjggNDAuMzk3MyAzOC4zOTcxIDQwLjgwMDMgMzcuOSA0MC44MDAzQzM3LjQwMjkgNDAuODAwMyAzNyA0MC4zOTczIDM3IDM5LjkwMDNDMzcgMzkuNDAzMiAzNy40MDI5IDM5LjAwMDMgMzcuOSAzOS4wMDAzQzM4LjM5NzEgMzkuMDAwMyAzOC44IDM5LjQwMzIgMzguOCAzOS45MDAzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNCAxMkMyMi44OTU0IDEyIDIyIDEyLjg5NTQgMjIgMTRWMTQuMjUyQzE4LjU0OTUgMTUuMTQwMSAxNiAxOC4yNzIzIDE2IDIyVjI5LjVIMTUuNDc2OUMxNC42NjEyIDI5LjUgMTQgMzAuMTYxMiAxNCAzMC45NzY5VjMxLjAyMzFDMTQgMzEuODM4OCAxNC42NjEyIDMyLjUgMTUuNDc2OSAzMi41SDMyLjUyMzFDMzMuMzM4OCAzMi41IDM0IDMxLjgzODggMzQgMzEuMDIzMVYzMC45NzY5QzM0IDMwLjE2MTIgMzMuMzM4OCAyOS41IDMyLjUyMzEgMjkuNUgzMlYyMkMzMiAxOC4yNzIzIDI5LjQ1MDUgMTUuMTQwMSAyNiAxNC4yNTJWMTRDMjYgMTIuODk1NCAyNS4xMDQ2IDEyIDI0IDEyWk0yNiAzNFYzMy41SDIyVjM0QzIyIDM1LjEwNDYgMjIuODk1NCAzNiAyNCAzNkMyNS4xMDQ2IDM2IDI2IDM1LjEwNDYgMjYgMzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K", A1 = "PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMzIiIGZpbGw9IiMwMEFFQjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS45OTg2IDIwQzMwLjkxOTggMjAgMzAuMDQyOCAyMC44NzQ2IDMwLjA0MjggMjEuOTUzNEwzMC4wNDI5IDIxLjk3MzRDMjYuNTQzNCAyMi41NTM1IDIzLjg3NSAyNS41OTQzIDIzLjg3NSAyOS4yNTgyVjM4LjA5OTVIMjMuODczNUMyMy4wNTg5IDM4LjA5OTUgMjIuMzk4NCAzOC43NiAyMi4zOTg0IDM5LjU3NDZDMjIuMzk4NCA0MC4zODkzIDIzLjA1ODkgNDEuMDQ5NyAyMy44NzM1IDQxLjA0OTdIMjkuNzgxMlY0MS43ODQyQzI5Ljc4MTIgNDMuMDA3NyAzMC43NzMxIDQzLjk5OTYgMzEuOTk2NiA0My45OTk2QzMzLjIyMDIgNDMuOTk5NiAzNC4yMTIgNDMuMDA3NyAzNC4yMTIgNDEuNzg0MlY0MS4wNDk3SDQwLjEyMzNDNDAuOTM4IDQxLjA0OTcgNDEuNTk4NCA0MC4zODkzIDQxLjU5ODQgMzkuNTc0NkM0MS41OTg0IDM4Ljc2IDQwLjkzOCAzOC4wOTk1IDQwLjEyMzMgMzguMDk5NUg0MC4xMjEyVjI5LjI1ODJDNDAuMTIxMiAyNS41OTQ2IDM3LjQ1MzMgMjIuNTU0MiAzMy45NTQzIDIxLjk3MzZMMzMuOTU0NCAyMS45NTM0QzMzLjk1NDQgMjAuODc0NiAzMy4wNzc1IDIwIDMxLjk5ODYgMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCBvcGFjaXR5PSIwLjUiIHg9IjcuNSIgeT0iNy41IiB3aWR0aD0iNDkiIGhlaWdodD0iNDkiIHJ4PSIyNC41IiBzdHJva2U9IndoaXRlIi8+CjxyZWN0IG9wYWNpdHk9IjAuMyIgeD0iNC41IiB5PSI0LjUiIHdpZHRoPSI1NSIgaGVpZ2h0PSI1NSIgcng9IjI3LjUiIHN0cm9rZT0id2hpdGUiLz4KPHJlY3Qgb3BhY2l0eT0iMC44IiB4PSIxMC41IiB5PSIxMC41IiB3aWR0aD0iNDMiIGhlaWdodD0iNDMiIHJ4PSIyMS41IiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo=";
    let oo = null, Os = "/clevertap_sw.js", yn = null, xu = null, O0 = null, D0 = null, wc = null, bu = null;
    const R0 = function() {
      let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      xu = h.logger, O0 = h.account, D0 = h.request, wc = h.displayArgs, bu = h.fcmPublicKey;
    }, k1 = (h, a, l) => {
      H.saveToLSorCookie(fr, !0), (() => {
        q.pushConfig = h, H.saveToLSorCookie(ur, h);
      })(), h.isPreview && P0({
        logger: a
      });
      try {
        if (H.readFromLSorCookie(Pe)) {
          try {
            wu();
          } catch (y) {
            a.error("processs soft prompt" + y);
          }
          return;
        }
      } catch (v) {
        a.error("Failed to process web push config:", v), wu();
      }
    }, wu = () => {
      const h = H.readFromLSorCookie(ur) || {};
      if (yn = new I0({
        logger: xu,
        session: {},
        request: D0,
        account: O0
      }), h && !(Object.keys(h).length > 0)) {
        yn.setApplicationServerKey(oo), yn.setupWebPush(wc);
        return;
      }
      const {
        showBox: a,
        showBellIcon: l,
        boxType: u
      } = h, {
        serviceWorkerPath: v,
        skipDialog: y,
        okCallback: k,
        subscriptionCallback: C,
        rejectCallback: E,
        apnsWebPushId: w,
        apnsWebPushServiceUrl: A
      } = I1(wc);
      (l || a && u === "new") && P0({
        serviceWorkerPath: v,
        skipDialog: y,
        okCallback: k,
        subscriptionCallback: C,
        rejectCallback: E,
        logger: xu,
        fcmPublicKey: bu,
        apnsWebPushId: w,
        apnsWebPushServiceUrl: A
      }), a && u === "old" && (yn.setApplicationServerKey(oo), yn.setupWebPush(wc)), H.saveToLSorCookie(Pe, !1), H.saveToLSorCookie(tt, !1);
    }, I1 = (h) => {
      if (h && h.length === 1 && vn(h[0])) {
        const {
          serviceWorkerPath: a,
          skipDialog: l,
          okCallback: u,
          subscriptionCallback: v,
          rejectCallback: y,
          apnsWebPushServiceUrl: k,
          apnsWebPushId: C
        } = h[0];
        return {
          serviceWorkerPath: a,
          skipDialog: l,
          okCallback: u,
          subscriptionCallback: v,
          rejectCallback: y,
          apnsWebPushServiceUrl: k,
          apnsWebPushId: C
        };
      }
      return {
        serviceWorkerPath: void 0,
        skipDialog: h[5],
        okCallback: void 0,
        subscriptionCallback: void 0,
        rejectCallback: void 0,
        apnsWebPushServiceUrl: void 0,
        apnsWebPushId: void 0
      };
    }, P0 = (h) => {
      const {
        serviceWorkerPath: a,
        okCallback: l,
        subscriptionCallback: u,
        rejectCallback: v,
        logger: y,
        fcmPublicKey: k,
        apnsWebPushId: C,
        apnsWebPushServiceUrl: E
      } = h;
      let {
        skipDialog: w
      } = h;
      const A = H.readFromLSorCookie(ur) || {};
      if (q.pushConfig = A, !q.pushConfig) {
        y.error("Web Push config data not present");
        return;
      }
      if (a && (Os = a), w === null && (w = !1), w) {
        yn.setApplicationServerKey(oo), yn.setUpWebPushNotifications(u, Os, C, E);
        return;
      }
      const {
        showBox: N,
        boxType: O,
        showBellIcon: R,
        isPreview: T
      } = q.pushConfig;
      T ? (q.pushConfig.boxConfig && B0(q.pushConfig, k), q.pushConfig.bellIconConfig && T0(q.pushConfig)) : (N && O === "new" && B0(q.pushConfig, k, l, u, v, C, E), R && T0(q.pushConfig, u, C, E));
    }, vr = function(h) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const l = document.createElement(h);
      return Object.entries(a).forEach((u) => {
        let [v, y] = u;
        l[v] = y;
      }), l;
    }, B0 = (h, a, l, u, v, y, k) => {
      if (document.getElementById(Ci)) return;
      const {
        boxConfig: {
          content: C,
          style: E
        }
      } = h, w = vr("div", {
        id: Ci
      }), A = E.overlay.enabled ? vr("div", {
        id: "pnOverlay"
      }) : "", N = vr("div", {
        id: "pnCard"
      }), O = vr("div", {
        id: "iconTitleDescWrapper"
      }), R = vr("img", {
        id: "iconContainer",
        src: C.icon.type === "default" ? "data:image/svg+xml;base64,".concat(A1) : C.icon.url
      });
      O.appendChild(R);
      const T = vr("div", {
        id: "titleDescWrapper"
      });
      T.appendChild(vr("div", {
        id: "title",
        textContent: C.title
      })), T.appendChild(vr("div", {
        id: "description",
        textContent: C.description
      })), O.appendChild(T);
      const F = vr("div", {
        id: "buttonsContainer"
      }), U = vr("button", {
        id: "primaryButton",
        textContent: C.buttons.primaryButtonText
      }), P = vr("button", {
        id: "secondaryButton",
        textContent: C.buttons.secondaryButtonText
      });
      F.appendChild(P), F.appendChild(U), N.appendChild(O), N.appendChild(F);
      const D = vr("style", {
        textContent: v1(E)
      });
      w.appendChild(D), w.appendChild(N), A && w.appendChild(A), F0(N, E.card.position);
      const B = ro() && "PushManager" in window && H.getMetaProp(pt) && a !== null;
      if (!h.isPreview && "Notification" in window && Notification !== null) {
        if (Notification.permission === "granted" && (B || Po() || Bo())) {
          yn.setApplicationServerKey(oo), yn.setUpWebPushNotifications(u, Os, y, k);
          return;
        } else if (Notification.permission === "denied")
          return;
      }
      const M = (/* @__PURE__ */ new Date()).getTime() / 1e3, G = H.getMetaProp("webpush_last_notif_time"), K = C.popupFrequency || 7;
      if (!G || M - G >= K * 24 * 60 * 60)
        document.body.appendChild(w), h.isPreview || (H.setMetaProp("webpush_last_notif_time", M), M0(w, l, u, v, y, k), ro() && "PushManager" in window && a != null && H.setMetaProp(pt, !0));
      else if (ro()) {
        if (B || a === null)
          return;
        h.isPreview || (document.body.appendChild(w), M0(w, l, u, v, y, k), H.setMetaProp("webpush_last_notif_time", M), H.setMetaProp(pt, !0));
      }
    }, T0 = (h, a, l, u) => {
      if (document.getElementById("bell_wrapper") || Notification.permission === "granted") return;
      const {
        bellIconConfig: {
          content: v,
          style: y
        }
      } = h, k = vr("div", {
        id: "bell_wrapper"
      }), C = vr("img", {
        id: "bell_icon",
        src: v.icon.type === "default" ? "data:image/svg+xml;base64,".concat(E1) : v.icon.url
      }), E = vr("div", {
        id: "gif_modal",
        style: "display: none;"
      }), w = vr("img", {
        id: "gif_image",
        src: "https://d2r1yp2w7bby2u.cloudfront.net/js/permission_grant.gif"
      }), A = vr("div", {
        id: "close_modal",
        innerHTML: "&times;"
      });
      if (E.appendChild(w), E.appendChild(A), k.appendChild(C), k.appendChild(E), v.hoverText.enabled) {
        const O = vr("div", {
          id: "bell_tooltip",
          textContent: v.hoverText.text
        });
        k.appendChild(O);
      }
      F0(k, y.card.position);
      const N = vr("style", {
        textContent: g1(y)
      });
      return document.head.appendChild(N), document.body.appendChild(k), h.isPreview || D1(k, a, l, u), k;
    }, O1 = (h) => {
      oo = h, bu = h;
    }, M0 = (h, a, l, u, v, y) => {
      const k = h.querySelector("#primaryButton"), C = h.querySelector("#secondaryButton"), E = () => {
        var w;
        return (w = h.parentNode) === null || w === void 0 ? void 0 : w.removeChild(h);
      };
      k.addEventListener("click", () => {
        E(), yn.setApplicationServerKey(oo), yn.setUpWebPushNotifications(l, Os, v, y), typeof a == "function" && a();
      }), C.addEventListener("click", () => {
        E(), typeof u == "function" && u();
      });
    }, D1 = (h, a, l, u) => {
      const v = h.querySelector("#bell_icon");
      v.addEventListener("click", () => {
        Notification.permission === "denied" ? L0(h) : (yn.setApplicationServerKey(oo), yn.setUpWebPushNotifications(a, Os, l, u), Notification.permission === "granted" && h.remove());
      }), v.addEventListener("mouseenter", () => R1(h)), v.addEventListener("mouseleave", () => N0(h)), h.querySelector("#close_modal").addEventListener("click", () => L0(h));
    }, F0 = (h, a) => {
      Object.assign(h.style, {
        inset: "auto",
        transform: "none"
      });
      const l = {
        "Top Right": {
          inset: "16px 16px auto auto"
        },
        "Top Left": {
          inset: "16px auto auto 16px"
        },
        "Bottom Right": {
          inset: "auto 16px 16px auto"
        },
        "Bottom Left": {
          inset: "auto auto 16px 16px"
        },
        Center: {
          inset: "50%",
          transform: "translate(-50%, -50%)"
        },
        Top: {
          inset: "16px auto auto 50%",
          transform: "translateX(-50%)"
        },
        Bottom: {
          inset: "auto auto 16px 50%",
          transform: "translateX(-50%)"
        }
      };
      Object.assign(h.style, l[a] || l["top-right"]);
    }, R1 = (h) => {
      if (h.querySelector("#gif_modal").style.display === "flex")
        return;
      const l = h.querySelector("#bell_tooltip");
      l && (l.style.display = "flex");
      const v = h.querySelector("#bell_icon").getBoundingClientRect();
      var y = window.innerWidth / 2, k = window.innerHeight / 2;
      h.style["flex-direction"] = v.y > k ? "column-reverse" : "column", h.style["align-items"] = v.x > y ? "flex-end" : "flex-start";
    }, N0 = (h) => {
      const a = h.querySelector("#bell_tooltip");
      a && (a.style.display = "none");
    }, L0 = (h) => {
      N0(h);
      const a = h.querySelector("#gif_modal");
      a.style.display = a.style.display === "none" ? "flex" : "none";
    }, _u = (h, a) => {
      let {
        device: l,
        session: u,
        request: v,
        logger: y,
        region: k
      } = a;
      const C = l, E = u, w = v, A = y, N = k;
      let O = 0;
      const R = (z) => {
        const le = z.wzrk_id.split("_")[0], ne = vt(), ve = (Re, ot, at) => {
          let Le = 0, It = 0;
          Re[ot] != null && (Le = Re[ot]), Le++, Re.tc != null && (It = Re.tc), at < 0 && It++, Re.tc = It, Re[ot] = Le;
        };
        if (H._isLocalStorageSupported()) {
          delete sessionStorage[ye];
          var ue = {};
          const Re = to();
          z.display.wtarget_type === 3 && Re.hasOwnProperty("wi") ? ue = Re.wi : (z.display.wtarget_type === 0 || z.display.wtarget_type === 1) && Re.hasOwnProperty("wp") ? ue = Re.wp : ue = {}, Re.hasOwnProperty("global") && (ue.wp = Re), z[Te].wmc == null && (z[Te].wmc = 1), z[Te].wimc == null && (z[Te].wimc = 1);
          var _e = -1;
          let ot = -1, at = -1, Le = -1, It = -1, mr = -1, Rr = -1;
          z[Te].efc != null && (_e = parseInt(z[Te].efc, 10)), z[Te].mdc != null && (ot = parseInt(z[Te].mdc, 10)), z[Te].tdc != null && (at = parseInt(z[Te].tdc, 10)), z[Te].tlc != null && (Le = parseInt(z[Te].tlc, 10)), z[Te].wmp != null && (It = parseInt(z[Te].wmp, 10)), z[Te].wmc != null && (mr = parseInt(z[Te].wmc, 10)), z[Te].wimc != null && (Rr = parseInt(z[Te].wimc, 10));
          var Ee = ue[E.sessionId];
          if (Ee) {
            const yr = Ee[le], et = Ee.tc;
            if (yr === "dnd" && !q.dismissSpamControl)
              return !1;
            if (z[Te].wtarget_type === 3) {
              if (Rr > 0 && et >= Rr && _e < 0)
                return !1;
            } else if (mr > 0 && et >= mr && _e < 0)
              return !1;
            if (ot > 0 && yr >= ot)
              return !1;
          } else
            Ee = {}, ue[E.sessionId] = Ee;
          var Ce = ue[ne];
          if (Ce != null) {
            const yr = Ce[le], et = Ce.tc;
            if (It > 0 && et >= It && _e < 0 || at > 0 && yr >= at)
              return !1;
          } else
            Ce = {}, ue[ne] = Ce;
          var te = ue[xt];
          if (te != null) {
            const yr = te[le];
            if (Le > 0 && yr >= Le)
              return !1;
          } else
            te = {}, ue[xt] = te;
        }
        const oe = z.display;
        if (oe.delay != null && oe.delay > 0) {
          const Re = oe.delay;
          return oe.delay = 0, setTimeout(_u, Re * 1e3, h, {
            device: C,
            session: E,
            request: w,
            logger: A
          }), !1;
        }
        ve(Ee, le, _e), ve(Ce, le, _e), ve(te, le, _e);
        let ce = "wp";
        z[Te].wtarget_type === 3 && (ce = "wi");
        const ae = {};
        ae[E.sessionId] = Ee, ae[ne] = Ce, ae[xt] = te, yc({
          [ce]: ae
        });
      }, T = (z, le, ne, ve, ue) => {
        f0(le, w), Jw(z, le, ne, ve, ue, C, E);
      }, F = (z) => {
        const le = "wzrkImageOnlyDiv";
        if (R(z) === !1 || (q.dismissSpamControl && document.getElementById(le) != null && document.getElementById(le).remove(), document.getElementById(le) != null || document.getElementById("intentPreview") != null))
          return;
        const ne = document.createElement("div");
        return ne.id = le, document.body.appendChild(ne), customElements.get("ct-web-popup-imageonly") === void 0 && customElements.define("ct-web-popup-imageonly", jw), p1(z, E);
      }, U = (z) => {
        const le = document.getElementById("wiz-iframe-intent") || document.getElementById("wiz-iframe");
        return le ? (le.contentDocument || le.contentWindow.document).documentElement.innerHTML.includes(z) : !1;
      }, P = (z, le) => {
        const ne = z.wzrk_id.split("_")[0], ve = z.display;
        if (ve.layout === 1)
          return re(void 0, z);
        if (ve.layout === 3) {
          F(z);
          return;
        }
        if (R(z) === !1)
          return;
        const ue = "wizParDiv" + ve.layout, _e = "intentOpacityDiv" + ve.layout;
        if (q.dismissSpamControl && document.getElementById(ue) != null) {
          const et = document.getElementById(ue), At = document.getElementById(_e);
          et && et.remove(), At && At.remove();
        }
        if (U(ne) || document.getElementById(ue) != null)
          return;
        q.campaignDivMap[ne] = ue;
        const Ee = ve.layout === 2;
        if (le) {
          const et = document.createElement("div");
          et.id = _e;
          const At = z.display.opacity || 0.7, dr = "rgba(0,0,0,".concat(At, ")");
          et.setAttribute("style", "position: fixed;top: 0;bottom: 0;left: 0;width: 100%;height: 100%;z-index: 2147483646;background: ".concat(dr, ";")), document.body.appendChild(et);
        }
        const Ce = document.createElement("div");
        Ce.id = ue;
        const te = window.innerHeight, oe = window.innerWidth;
        let ce = !1;
        if (Ee)
          Ce.setAttribute("style", ve.iFrameStyle);
        else {
          const et = te * 5 / 100;
          var ae = 10;
          let At = oe * 5 / 100, dr = ae + et, Fr = oe * 30 / 100 + 20, Jr = "width:30%;";
          (/mobile/i.test(navigator.userAgent) || /mini/i.test(navigator.userAgent)) && /iPad/i.test(navigator.userAgent) === !1 ? (Fr = oe * 85 / 100 + 20, At = oe * 5 / 100, dr = te * 5 / 100, Jr = "width:80%;") : ("ontouchstart" in window || /tablet/i.test(navigator.userAgent)) && (Fr = oe * 50 / 100 + 20, At = oe * 5 / 100, dr = te * 5 / 100, Jr = "width:50%;"), ve.proto == null ? (ce = !0, Ce.setAttribute("style", "display:block;overflow:hidden; bottom:" + dr + "px !important;width:" + Fr + "px !important;right:" + At + "px !important;position:fixed;z-index:2147483647;")) : Ce.setAttribute("style", Jr + ve.iFrameStyle);
        }
        document.body.appendChild(Ce);
        const Re = document.createElement("iframe"), ot = ve.br === !1 ? "0" : "8";
        Re.frameborder = "0px", Re.marginheight = "0px", Re.marginwidth = "0px", Re.scrolling = "no", Re.id = "wiz-iframe";
        const at = z.display.onClick;
        let Le = "";
        at !== "" && at != null && (Le = "cursor:pointer;"), ve.preview && (Re.sandbox = "allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin");
        let It;
        if (z.msgContent.type === 1)
          It = z.msgContent.html, It = It.replace(/##campaignId##/g, ne), It = It.replace(/##campaignId_batchId##/g, z.wzrk_id);
        else {
          const et = '<style type="text/css">body{margin:0;padding:0;}#contentDiv.wzrk{overflow:hidden;padding:0;text-align:center;' + Le + "}#contentDiv.wzrk td{padding:15px 10px;}.wzrkPPtitle{font-weight: bold;font-size: 16px;font-family:arial;padding-bottom:10px;word-break: break-word;}.wzrkPPdscr{font-size: 14px;font-family:arial;line-height:16px;word-break: break-word;display:inline-block;}.PL15{padding-left:15px;}.wzrkPPwarp{margin:20px 20px 0 5px;padding:0px;border-radius: " + ot + "px;box-shadow: 1px 1px 5px #888888;}a.wzrkClose{cursor:pointer;position: absolute;top: 11px;right: 11px;z-index: 2147483647;font-size:19px;font-family:arial;font-weight:bold;text-decoration: none;width: 25px;/*height: 25px;*/text-align: center; -webkit-appearance: none; line-height: 25px;background: #353535;border: #fff 2px solid;border-radius: 100%;box-shadow: #777 2px 2px 2px;color:#fff;}a:hover.wzrkClose{background-color:#d1914a !important;color:#fff !important; -webkit-appearance: none;}td{vertical-align:top;}td.imgTd{border-top-left-radius:8px;border-bottom-left-radius:8px;}</style>";
          let At, dr, Fr, Jr, zn;
          z.display.theme === "dark" ? (At = "#2d2d2e", dr = "#eaeaea", Fr = "#353535", Jr = "#353535", zn = "#ffffff") : (At = "#ffffff", dr = "#000000", Jr = "#f4f4f4", Fr = "#a5a6a6", zn = "#ffffff");
          const mo = z.msgContent.title, vi = z.msgContent.description;
          let sn = "";
          z.msgContent.imageUrl != null && z.msgContent.imageUrl !== "" && (sn = "<td class='imgTd' style='background-color:" + Jr + "'><img src='" + z.msgContent.imageUrl + "' height='60' width='60'></td>");
          const an = "parent.$WZRK_WR.closeIframe(" + ne + ",'" + ue + "');", Gn = "<div class='wzrkPPwarp' style='color:" + dr + ";background-color:" + At + ";'><a href='javascript:void(0);' onclick=" + an + " class='wzrkClose' style='background-color:" + Fr + ";color:" + zn + "'>&times;</a><div id='contentDiv' class='wzrk'><table cellpadding='0' cellspacing='0' border='0'><tr>" + sn + "<td style='vertical-align:top;'><div class='wzrkPPtitle' style='color:" + dr + "'>" + mo + "</div>", Mo = "<div class='wzrkPPdscr' style='color:" + dr + "'>" + vi + "<div></td></tr></table></div>";
          It = et + Gn + Mo;
        }
        Re.setAttribute("style", "color-scheme: none; z-index: 2147483647; display:block; width: 100% !important; border:0px !important; border-color:none !important;"), Ce.appendChild(Re);
        const mr = new Event("CT_campaign_rendered");
        document.dispatchEvent(mr), ve["custom-editor"] && (It = pu(z, It)), Re.srcdoc = It;
        const Rr = () => {
          ae = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv").scrollHeight, ve["custom-editor"] !== !0 && !Ee && (ae += 25), document.getElementById("wiz-iframe").contentDocument.body.style.margin = "0px", document.getElementById("wiz-iframe").style.height = ae + "px";
        }, yr = navigator.userAgent.toLowerCase();
        if (yr.indexOf("safari") !== -1)
          if (yr.indexOf("chrome") > -1)
            Re.onload = () => {
              Rr();
              const et = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv");
              T(at, z, et, ue, ce);
            };
          else {
            let et = Re.contentDocument || Re.contentWindow;
            et.document && (et = et.document);
            const At = setInterval(() => {
              if (et.readyState === "complete") {
                clearInterval(At), Rr();
                const dr = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv");
                T(at, z, dr, ue, ce);
              }
            }, 300);
          }
        else
          Re.onload = () => {
            Rr();
            const et = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv");
            T(at, z, et, ue, ce);
          };
      }, D = (z) => {
        P(z, !1);
      };
      let B = !1;
      const M = (z) => {
        let le = z.display.onClick;
        const ne = z.display;
        if (window.clevertap.hasOwnProperty("notificationCallback") && typeof window.clevertap.notificationCallback < "u" && typeof window.clevertap.notificationCallback == "function") {
          const _e = window.clevertap.notificationCallback;
          if (!B) {
            const Ee = {};
            Ee.msgContent = z.msgContent, Ee.msgId = z.wzrk_id, z.wzrk_pivot && (Ee.pivotId = z.wzrk_pivot), z.display.kv != null && (Ee.kv = z.display.kv), window.clevertap.raiseNotificationClicked = () => {
              if (le !== "" && le != null) {
                const Ce = z.display.jsFunc;
                if (le += d0(C, E), Ce != null) {
                  Or.fireRequest(le), l0(Ce, z);
                  return;
                }
                z.display.window === 1 ? window.open(le, "_blank") : window.location = le;
              }
            }, window.clevertap.raiseNotificationViewed = () => {
              f0(z);
            }, _e(Ee), B = !0;
          }
        } else {
          if (window.clevertap.popupCurrentWzrkId = z.wzrk_id, ne.deliveryTrigger) {
            ne.deliveryTrigger.inactive && G(z), ne.deliveryTrigger.scroll && K(z), ne.deliveryTrigger.isExitIntent && (Z = z, window.document.body.onmouseleave = re);
            const _e = ne.delay || ne.deliveryTrigger.deliveryDelayed;
            _e != null && _e > 0 && setTimeout(() => {
              D(z);
            }, _e * 1e3);
          } else
            D(z);
          if (window.clevertap.hasOwnProperty("popupCallbacks") && typeof window.clevertap.popupCallbacks < "u" && typeof window.clevertap.popupCallbacks[z.wzrk_id] == "function") {
            const _e = window.clevertap.popupCallbacks[z.wzrk_id], Ee = {};
            Ee.msgContent = z.msgContent, Ee.msgId = z.wzrk_id, z.wzrk_pivot && (Ee.pivotId = z.wzrk_pivot);
            var ve = [];
            for (var ue in z)
              if (ue.startsWith(Tt) && ue !== tr) {
                const Ce = {
                  [ue]: z[ue]
                };
                ve.push(Ce);
              }
            ve.length > 0 && (Ee.msgCTkv = ve), z.display.kv != null && (Ee.kv = z.display.kv), window.clevertap.raisePopupNotificationClicked = (Ce) => {
              if (!Ce || !Ce.msgId)
                return;
              const te = {};
              if (te.type = "event", te.evtName = pr, te.evtData = {
                [tr]: Ce.msgId
              }, z.wzrk_pivot && (te.evtData = {
                ...te.evtData,
                wzrk_pivot: Ce.pivotId
              }), Ce.msgCTkv)
                for (var oe of Ce.msgCTkv)
                  te.evtData = {
                    ...te.evtData,
                    ...oe
                  };
              w.processEvent(te);
            }, _e(Ee);
          }
        }
      }, G = (z) => {
        const le = z.display.deliveryTrigger.inactive * 1e3;
        let ne;
        const ve = ["mousemove", "keypress", "scroll", "mousedown", "touchmove", "click"], ue = () => {
          clearTimeout(ne), ne = setTimeout(() => {
            D(z), Ce();
          }, le);
        }, _e = () => {
          ue();
        }, Ee = () => {
          ve.forEach((te) => window.addEventListener(te, _e, {
            passive: !0
          }));
        }, Ce = () => {
          ve.forEach((te) => window.removeEventListener(te, _e));
        };
        return Ee(), ue(), Ce;
      }, K = (z) => {
        const le = () => {
          const {
            scrollHeight: _e,
            clientHeight: Ee,
            scrollTop: Ce
          } = document.documentElement;
          return Ce / (_e - Ee) * 100;
        }, ue = ((_e, Ee) => {
          let Ce = !1;
          return function() {
            const te = this;
            if (!Ce) {
              for (var oe = arguments.length, ce = new Array(oe), ae = 0; ae < oe; ae++)
                ce[ae] = arguments[ae];
              _e.apply(te, ce), Ce = !0, setTimeout(() => {
                Ce = !1;
              }, Ee);
            }
          };
        })(() => {
          le() >= z.display.deliveryTrigger.scroll && (D(z), window.removeEventListener("scroll", ue));
        }, 200);
        return window.addEventListener("scroll", ue, {
          passive: !0
        }), () => window.removeEventListener("scroll", ue);
      };
      let Z;
      const re = (z, le) => {
        if ((z == null ? void 0 : z.clientY) > 0) return;
        const ne = le || Z, ve = ne.wzrk_id.split("_")[0], ue = ne.display.layout;
        if (U(ve)) return;
        if (ne.display.wtarget_type === 0 && (ue === 0 || ue === 2 || ue === 3)) {
          P(ne, !0);
          return;
        }
        if (R(ne) === !1)
          return;
        if (q.dismissSpamControl && ne.display.wtarget_type === 0) {
          const It = document.getElementById("intentPreview"), mr = document.getElementById("intentOpacityDiv");
          It && mr && (It.remove(), mr.remove());
        }
        if (document.getElementById("intentPreview") != null || document.getElementById("wzrkImageOnlyDiv") != null || ne.display.layout == null && (/mobile/i.test(navigator.userAgent) || /mini/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent) || "ontouchstart" in window || /tablet/i.test(navigator.userAgent)))
          return;
        q.campaignDivMap[ve] = "intentPreview";
        let _e = !1;
        const Ee = document.createElement("div");
        Ee.id = "intentOpacityDiv";
        const Ce = ne.display.opacity || 0.7, te = "rgba(0,0,0,".concat(Ce, ")");
        Ee.setAttribute("style", "position: fixed;top: 0;bottom: 0;left: 0;width: 100%;height: 100%;z-index: 2147483646;background: ".concat(te, ";")), document.body.appendChild(Ee);
        const oe = document.createElement("div");
        oe.id = "intentPreview", ne.display.proto == null ? (_e = !0, oe.setAttribute("style", "display:block;overflow:hidden;top:55% !important;left:50% !important;position:fixed;z-index:2147483647;width:600px !important;height:600px !important;margin:-300px 0 0 -300px !important;")) : oe.setAttribute("style", ne.display.iFrameStyle), document.body.appendChild(oe);
        const ce = document.createElement("iframe"), ae = ne.display.br === !1 ? "0" : "8";
        ce.frameborder = "0px", ce.marginheight = "0px", ce.marginwidth = "0px", ce.scrolling = "no", ce.id = "wiz-iframe-intent";
        const Re = ne.display.onClick;
        let ot = "";
        Re !== "" && Re != null && (ot = "cursor:pointer;"), ne.display.preview && ne.display["custom-editor"] && (ce.sandbox = "allow-scripts allow-popups allow-popups-to-escape-sandbox");
        let at;
        if (ne.msgContent.type === 1)
          at = ne.msgContent.html, at = at.replace(/##campaignId##/g, ve), at = at.replace(/##campaignId_batchId##/g, ne.wzrk_id);
        else {
          const It = '<style type="text/css">body{margin:0;padding:0;}#contentDiv.wzrk{overflow:hidden;padding:0 0 20px 0;text-align:center;' + ot + "}#contentDiv.wzrk td{padding:15px 10px;}.wzrkPPtitle{font-weight: bold;font-size: 24px;font-family:arial;word-break: break-word;padding-top:20px;}.wzrkPPdscr{font-size: 14px;font-family:arial;line-height:16px;word-break: break-word;display:inline-block;padding:20px 20px 0 20px;line-height:20px;}.PL15{padding-left:15px;}.wzrkPPwarp{margin:20px 20px 0 5px;padding:0px;border-radius: " + ae + "px;box-shadow: 1px 1px 5px #888888;}a.wzrkClose{cursor:pointer;position: absolute;top: 11px;right: 11px;z-index: 2147483647;font-size:19px;font-family:arial;font-weight:bold;text-decoration: none;width: 25px;/*height: 25px;*/text-align: center; -webkit-appearance: none; line-height: 25px;background: #353535;border: #fff 2px solid;border-radius: 100%;box-shadow: #777 2px 2px 2px;color:#fff;}a:hover.wzrkClose{background-color:#d1914a !important;color:#fff !important; -webkit-appearance: none;}#contentDiv .button{padding-top:20px;}#contentDiv .button a{font-size: 14px;font-weight:bold;font-family:arial;text-align:center;display:inline-block;text-decoration:none;padding:0 30px;height:40px;line-height:40px;background:#ea693b;color:#fff;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;}</style>";
          let mr, Rr, yr, et;
          ne.display.theme === "dark" ? (mr = "#2d2d2e", Rr = "#eaeaea", yr = "#353535", et = "#ffffff") : (mr = "#ffffff", Rr = "#000000", yr = "#a5a6a6", et = "#ffffff");
          const At = ne.msgContent.title, dr = ne.msgContent.description;
          let Fr = "";
          ne.msgContent.ctaText != null && ne.msgContent.ctaText !== "" && (Fr = "<div class='button'><a href='#'>" + ne.msgContent.ctaText + "</a></div>");
          let Jr = "";
          ne.msgContent.imageUrl != null && ne.msgContent.imageUrl !== "" && (Jr = "<div style='padding-top:20px;'><img src='" + ne.msgContent.imageUrl + "' width='500' alt=" + At + " /></div>");
          const zn = "parent.$WZRK_WR.closeIframe(" + ve + ",'intentPreview');", mo = "<div class='wzrkPPwarp' style='color:" + Rr + ";background-color:" + mr + ";'><a href='javascript:void(0);' onclick=" + zn + " class='wzrkClose' style='background-color:" + yr + ";color:" + et + "'>&times;</a><div id='contentDiv' class='wzrk'><div class='wzrkPPtitle' style='color:" + Rr + "'>" + At + "</div>", vi = "<div class='wzrkPPdscr' style='color:" + Rr + "'>" + dr + "</div>" + Jr + Fr + "</div></div>";
          at = It + mo + vi;
        }
        ce.setAttribute("style", "color-scheme: none; z-index: 2147483647; display:block; height: 100% !important; width: 100% !important;min-height:80px !important;border:0px !important; border-color:none !important;"), oe.appendChild(ce);
        const Le = new Event("CT_campaign_rendered");
        document.dispatchEvent(Le), ne.display["custom-editor"] && (at = pu(ne, at)), ce.srcdoc = at, ce.onload = () => {
          const It = document.getElementById("wiz-iframe-intent").contentDocument.getElementById("contentDiv");
          T(Re, ne, It, "intentPreview", _e);
        };
      };
      if (!document.body) {
        O < 6 && (O++, setTimeout(_u, 1e3, h, {
          device: C,
          session: E,
          request: w,
          logger: A
        }));
        return;
      }
      const pe = (z) => {
        Object.keys(z).map((le) => {
          var ne, ve;
          z[le].display.divId ? (ne = z[le].display.divId, ve = document.getElementById(ne)) : (ne = z[le].display.divSelector, ve = document.querySelector(ne)), ve !== null && (z[le].msgContent.type === 2 ? w0(z[le]) : _0(z[le]), delete z[le]);
        });
      }, Y = (z) => {
        window.addEventListener("load", () => {
          let le = 0;
          if (le < 20) {
            const ne = setInterval(() => {
              pe(z), (Object.keys(z).length === 0 || le === 20) && (clearInterval(ne), z = {}), le++;
            }, 500);
          }
        });
      };
      if (h.inapp_notifs != null) {
        const z = {}, le = Ai.sortCampaignsByPriority(h.inapp_notifs), ne = {
          nodes: [],
          customEvents: []
        };
        for (let ve = 0; ve < le.length; ve++) {
          var J;
          p0(le[ve], N, h == null || (J = h.arp) === null || J === void 0 ? void 0 : J.id);
          const ue = le[ve];
          if (ue.display.wtarget_type === Hi.FOOTER_NOTIFICATION || ue.display.wtarget_type === Hi.FOOTER_NOTIFICATION_2)
            M(ue);
          else if (ue.display.wtarget_type === Hi.EXIT_INTENT)
            Z = ue, window.document.body.onmouseleave = re;
          else if (ue.display.wtarget_type === Hi.WEB_NATIVE_DISPLAY) {
            if (Ai.doesCampaignPushCustomEvent(ue) && ne.customEvents.length > 0 && Ai.shouldCurrentCustomEventCampaignBeSkipped(ue, ne)) {
              A.debug("Custom Event Campaign Skipped with id :: " + (ue == null ? void 0 : ue.wzrk_id));
              continue;
            }
            if (Ai.doesCampaignMutateDOMNode(ue) && ne.nodes.some((_e) => {
              var Ee;
              return (Ee = Ai.getCampaignNodes(ue)) === null || Ee === void 0 ? void 0 : Ee.includes(_e);
            })) {
              A.debug("DOM Campaign Skipped with id :: " + (ue == null ? void 0 : ue.wzrk_id));
              continue;
            }
            if (Ai.doesCampaignPushCustomEvent(ue)) {
              const _e = ue.msgContent.type === Yt.KV_PAIR ? ue.display.kv.topic : null;
              ne.customEvents.push({
                customEventType: ue.msgContent.type,
                eventTopic: _e
              });
            } else if (Ai.doesCampaignMutateDOMNode(ue)) {
              const _e = Ai.getCampaignNodes(ue);
              ne.nodes.push(..._e);
            }
            ue.msgContent.type === Yt.KV_PAIR ? u1(ue) : ue.msgContent.type === Yt.BANNER || ue.msgContent.type === Yt.CAROUSEL ? (ue.display.divId ? document.getElementById(ue.display.divId) : document.querySelector(ue.display.divSelector)) !== null ? ue.msgContent.type === Yt.BANNER ? w0(ue) : _0(ue) : z[ue.wzrk_id.split("_")[0]] = ue : ue.msgContent.type === Yt.VISUAL_BUILDER ? x0(ue, !1, A) : ue.msgContent.type === Yt.CUSTOM_HTML ? C0(ue, A) : ue.msgContent.type === Yt.JSON ? f1(ue) : M(ue);
          }
        }
        Object.keys(z).length && (document.readyState === "complete" ? pe(z) : Y(z));
      }
      const fe = () => {
        if (h.inbox_preview) {
          r0(h);
          return;
        }
        if (h.inbox_notifs) {
          const le = [];
          for (let ne = 0; ne < h.inbox_notifs.length; ne++) {
            var z;
            p0(h.inbox_notifs[ne], N, h == null || (z = h.arp) === null || z === void 0 ? void 0 : z.id), R(h.inbox_notifs[ne]) !== !1 && le.push(h.inbox_notifs[ne]);
          }
          r0(le);
        }
      };
      if ((h.webInboxSetting || h.inbox_notifs != null) && (s0() && du(), q.inbox === null ? (h.webInboxSetting && qw(h.webInboxSetting), i0(A).then(() => {
        fe();
      }).catch((z) => {
      })) : fe()), h.webPushConfig && k1(h.webPushConfig, y), h.vars) {
        q.variableStore.mergeVariables(h.vars);
        return;
      }
      if (H._isLocalStorageSupported())
        try {
          if (h.evpr != null) {
            const z = h.evpr.events, le = h.evpr.profile, ne = h.evpr.expires_in, ve = ft();
            H.setMetaProp("lsTime", ve), H.setMetaProp("exTs", ne), Qw(z), H.saveToLSorCookie(Oe, q.globalEventsMap), q.globalProfileMap == null ? xc(le, !0) : xc(le, !1);
          }
          h.arp != null && Rw(h.arp), h.inapp_stale != null && h.inapp_stale.length > 0 && u0(h.inapp_stale, "wp"), h.inbox_stale != null && h.inbox_stale.length > 0 && u0(h.inbox_stale, "wi");
        } catch (z) {
          A.error("Unable to persist evrp/arp: " + z);
        }
    };
    var so = t("isPersonalisationActive");
    class P1 {
      constructor(a) {
        let {
          isPersonalisationActive: l
        } = a;
        Object.defineProperty(this, so, {
          writable: !0,
          value: void 0
        }), r(this, so)[so] = l;
      }
      getTotalVisits() {
        if (!r(this, so)[so]())
          return;
        let a = H.getMetaProp("sc");
        return a == null && (a = 1), a;
      }
      getLastVisit() {
        if (!r(this, so)[so]())
          return;
        const a = H.getMetaProp("ps");
        if (a != null)
          return new Date(a * 1e3);
      }
    }
    const To = {
      ERROR: 1,
      INFO: 2,
      DEBUG: 3,
      DEBUG_PE: 4
    };
    var Yr = t("logLevel"), fi = t("log"), Cu = t("isLegacyDebug");
    class B1 {
      constructor(a) {
        Object.defineProperty(this, Cu, {
          get: M1,
          set: void 0
        }), Object.defineProperty(this, fi, {
          value: T1
        }), Object.defineProperty(this, Yr, {
          writable: !0,
          value: void 0
        }), this.wzrkError = {}, r(this, Yr)[Yr] = a == null ? a : To.INFO, this.wzrkError = {};
      }
      get logLevel() {
        return r(this, Yr)[Yr];
      }
      set logLevel(a) {
        r(this, Yr)[Yr] = a;
      }
      error(a) {
        r(this, Yr)[Yr] >= To.ERROR && r(this, fi)[fi]("error", a);
      }
      info(a) {
        r(this, Yr)[Yr] >= To.INFO && r(this, fi)[fi]("log", a);
      }
      debug(a) {
        (r(this, Yr)[Yr] >= To.DEBUG || r(this, Cu)[Cu]) && r(this, fi)[fi]("debug", a);
      }
      debugPE(a) {
        r(this, Yr)[Yr] >= To.DEBUG_PE && r(this, fi)[fi]("debug_pe", a);
      }
      reportError(a, l) {
        this.wzrkError.c = a, this.wzrkError.d = l, this.error("".concat(Bn, " ").concat(a, ": ").concat(l));
      }
    }
    var T1 = function(a, l) {
      if (window.console)
        try {
          const u = (/* @__PURE__ */ new Date()).getTime();
          console[a]("CleverTap [".concat(u, "]: ").concat(l));
        } catch {
        }
    }, M1 = function() {
      return typeof sessionStorage < "u" && sessionStorage.WZRK_D === "";
    }, Su = t("logger"), Ds = t("sessionId"), ao = t("isPersonalisationActive");
    class F1 {
      // SCOOKIE_NAME
      constructor(a) {
        let {
          logger: l,
          isPersonalisationActive: u
        } = a;
        Object.defineProperty(this, Su, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Ds, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ao, {
          writable: !0,
          value: void 0
        }), this.cookieName = void 0, this.scookieObj = void 0, this.sessionId = H.getMetaProp("cs"), r(this, Su)[Su] = l, r(this, ao)[ao] = u;
      }
      get sessionId() {
        return r(this, Ds)[Ds];
      }
      set sessionId(a) {
        r(this, Ds)[Ds] = a;
      }
      getSessionCookieObject() {
        let a = H.readCookie(this.cookieName), l = {};
        if (a != null) {
          if (a = a.replace(b, '"'), l = JSON.parse(a), !vn(l))
            l = {};
          else if (typeof l.t < "u") {
            const u = l.t;
            ft() - u > $e + 60 && (l = {});
          }
        }
        return this.scookieObj = l, l;
      }
      setSessionCookieObject(a) {
        const l = JSON.stringify(a);
        H.createBroadCookie(this.cookieName, l, $e, gc());
      }
      manageSession(a) {
        if (typeof this.sessionId > "u" || this.sessionId !== a) {
          const l = H.getMetaProp("cs");
          if (typeof l > "u")
            H.setMetaProp("ps", a), H.setMetaProp("cs", a), H.setMetaProp("sc", 1);
          else if (l !== a) {
            H.setMetaProp("ps", l), H.setMetaProp("cs", a);
            let u = H.getMetaProp("sc");
            typeof u > "u" && (u = 0), H.setMetaProp("sc", u + 1);
          }
          this.sessionId = a;
        }
      }
      getTimeElapsed() {
        if (!r(this, ao)[ao]())
          return;
        this.scookieObj != null && (this.scookieObj = this.getSessionCookieObject());
        const a = this.scookieObj.s;
        if (a != null) {
          const l = ft();
          return Math.floor(l - a);
        }
      }
      getPageCount() {
        if (r(this, ao)[ao]())
          return this.scookieObj != null && (this.scookieObj = this.getSessionCookieObject()), this.scookieObj.p;
      }
    }
    let Eu = 0, U0 = 0;
    var Et = t("logger"), Zr = t("account"), co = t("device"), lo = t("session"), Rs = t("isPersonalisationActive"), xn = t("clearCookie"), Au = t("addToLocalEventMap");
    class N1 {
      constructor(a) {
        let {
          logger: l,
          account: u,
          device: v,
          session: y,
          isPersonalisationActive: k
        } = a;
        Object.defineProperty(this, Au, {
          value: L1
        }), Object.defineProperty(this, Et, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Zr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, co, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, lo, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Rs, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, xn, {
          writable: !0,
          value: !1
        }), this.processingBackup = !1, r(this, Et)[Et] = l, r(this, Zr)[Zr] = u, r(this, co)[co] = v, r(this, lo)[lo] = y, r(this, Rs)[Rs] = k, Or.logger = l, Or.device = v, Or.account = u;
      }
      processBackupEvents() {
        const a = H.readFromLSorCookie(mt);
        if (!(typeof a > "u" || a === null)) {
          this.processingBackup = !0;
          for (const l in a)
            if (a.hasOwnProperty(l)) {
              const u = a[l];
              if (typeof u.fired > "u") {
                if (r(this, Et)[Et].debug("Processing backup event : " + u.q), typeof u.q < "u") {
                  const v = JSON.parse(H.readCookie(Ie + "_" + r(this, Zr)[Zr].id));
                  v != null && v.s && (u.q = u.q + "&s=" + v.s), Or.fireRequest(u.q);
                }
                u.fired = !0;
              }
            }
          H.saveToLSorCookie(mt, a), this.processingBackup = !1;
        }
      }
      addSystemDataToObject(a, l) {
        typeof l > "u" && (a = be(a, r(this, Et)[Et])), gn(r(this, Et)[Et].wzrkError) || (a.wzrk_error = r(this, Et)[Et].wzrkError, r(this, Et)[Et].wzrkError = {}), a.id = r(this, Zr)[Zr].id, se(r(this, co)[co].gcookie) && (a.g = r(this, co)[co].gcookie);
        const u = r(this, lo)[lo].getSessionCookieObject();
        a.s = u.s, a.pg = typeof u.p > "u" ? 1 : u.p;
        let v = document.location.protocol;
        v = v.replace(":", ""), a.af = {
          ...a.af,
          lib: "web-sdk-v1.15.3",
          protocol: v,
          ...q.flutterVersion
        };
        try {
          (sessionStorage.hasOwnProperty("WZRK_D") || sessionStorage.getItem("WZRK_D")) && (a.debug = !0);
        } catch {
          r(this, Et)[Et].debug("Error in reading WZRK_D from session storage");
        }
        return a;
      }
      addFlags(a) {
        if (r(this, xn)[xn] = H.getAndClearMetaProp(L), r(this, xn)[xn] !== void 0 && r(this, xn)[xn] && (a.rc = !0, r(this, Et)[Et].debug("reset cookie sent in request and cleared from meta for future requests.")), r(this, Rs)[Rs]()) {
          const l = H.getMetaProp("lsTime"), u = H.getMetaProp("exTs");
          if (typeof l > "u" || typeof u > "u") {
            a.dsync = !0;
            return;
          }
          const v = ft();
          l + u < v && (a.dsync = !0);
        }
      }
      // saves url to backup cache and fires the request
      /**
       *
       * @param {string} url
       * @param {boolean} override whether the request can go through or not
       * @param {Boolean} sendOULFlag - true in case of a On User Login request
       */
      saveAndFireRequest(a, l, u, v) {
        const y = ft();
        a = Je(a, "rn", ++q.globalCache.REQ_N);
        const k = a + "&i=" + y + "&sn=" + Eu;
        H.backupEvent(k, q.globalCache.REQ_N, r(this, Et)[Et]), !q.offline && ((!l || r(this, xn)[xn] !== void 0 && r(this, xn)[xn]) && !window.isOULInProgress ? (y === U0 ? Eu++ : (U0 = y, Eu = 0), window.oulReqN = q.globalCache.REQ_N, Or.fireRequest(k, !1, u, v)) : r(this, Et)[Et].debug("Not fired due to override - ".concat(q.blockRequest, " or clearCookie - ").concat(r(this, xn)[xn], " or OUL request in progress - ").concat(window.isOULInProgress)));
      }
      unregisterTokenForGuid(a) {
        const l = H.readFromLSorCookie(_r);
        if (l) {
          const u = {};
          u.type = "data", se(a) && (u.g = a), u.action = "unregister", u.id = r(this, Zr)[Zr].id;
          const v = r(this, lo)[lo].getSessionCookieObject();
          u.s = v.s;
          const y = Gr(JSON.stringify(u), r(this, Et)[Et]);
          let k = r(this, Zr)[Zr].dataPostURL;
          k = Je(k, "type", "data"), k = Je(k, "d", y), Or.fireRequest(k, !0), H.saveToLSorCookie(zt, !1);
        }
        this.registerToken(l);
      }
      registerToken(a) {
        if (!a) return;
        a = this.addSystemDataToObject(a, !0), a = JSON.stringify(a);
        let l = r(this, Zr)[Zr].dataPostURL;
        l = Je(l, "type", "data"), l = Je(l, "d", Gr(a, r(this, Et)[Et])), Or.fireRequest(l), H.save(Ot, "ok");
      }
      processEvent(a) {
        r(this, Au)[Au](a.evtName), a = this.addSystemDataToObject(a, void 0), this.addFlags(a), a[ye] = Zh();
        const l = Gr(JSON.stringify(a), r(this, Et)[Et]);
        let u = r(this, Zr)[Zr].dataPostURL;
        u = Je(u, "type", Mt), u = Je(u, "d", l), this.saveAndFireRequest(u, q.blockRequest, !1, a.evtName);
      }
      post(a, l) {
        return fetch(a, {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: l
        }).then((u) => {
          if (u.ok)
            return u.json();
          throw u;
        }).then((u) => (r(this, Et)[Et].debug("Sync data successful", u), u)).catch((u) => {
          throw r(this, Et)[Et].debug("Error in syncing variables", u), u;
        });
      }
    }
    var L1 = function(a) {
      if (H._isLocalStorageSupported()) {
        typeof q.globalEventsMap > "u" && (q.globalEventsMap = H.readFromLSorCookie(Oe), typeof q.globalEventsMap > "u" && (q.globalEventsMap = {}));
        const l = ft();
        let u = q.globalEventsMap[a];
        typeof u < "u" ? (u[2] = l, u[0]++) : (u = [], u.push(1), u.push(l), u.push(l)), q.globalEventsMap[a] = u, H.saveToLSorCookie(Oe, q.globalEventsMap);
      }
    }, uo = t("request"), Ps = t("account"), di = t("oldValues"), Bs = t("logger"), Ts = t("processPrivacyArray");
    class U1 extends Array {
      constructor(a, l) {
        let {
          request: u,
          account: v,
          logger: y
        } = a;
        super(), Object.defineProperty(this, Ts, {
          value: z1
        }), Object.defineProperty(this, uo, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Ps, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, di, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Bs, {
          writable: !0,
          value: void 0
        }), r(this, Bs)[Bs] = y, r(this, uo)[uo] = u, r(this, Ps)[Ps] = v, r(this, di)[di] = l;
      }
      // TODO : Do we need to check if account id is set or not here?
      push() {
        for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
          l[u] = arguments[u];
        return q.isPrivacyArrPushed ? r(this, Ts)[Ts](q.privacyArray.length > 0 ? q.privacyArray : l) : q.privacyArray.push(...l), 0;
      }
      _processOldValues() {
        r(this, di)[di] && r(this, Ts)[Ts](r(this, di)[di]), r(this, di)[di] = null;
      }
    }
    var z1 = function(a) {
      if (Array.isArray(a) && a.length > 0) {
        const u = a.reduce((k, C) => ({
          ...k,
          ...C
        }), {});
        let v = {};
        const y = {};
        var l = !1;
        if (u.hasOwnProperty(Bt) && (l = u[Bt], typeof l == "boolean" && (y[br] = l, q.isOptInRequest = !l)), u.hasOwnProperty(Lt)) {
          const k = u[Lt], C = typeof k == "boolean" ? k : !1;
          H.setMetaProp(Lt, C);
        }
        if (!gn(y)) {
          v.type = "profile", v.profile = y, v = r(this, uo)[uo].addSystemDataToObject(v, void 0);
          const k = Gr(JSON.stringify(v), r(this, Bs)[Bs]);
          let C = r(this, Ps)[Ps].dataPostURL;
          C = Je(C, "type", Mt), C = Je(C, "d", k), C = Je(C, Bt, l ? "true" : "false"), r(this, uo)[uo].saveAndFireRequest(C, q.blockRequest), a.splice(0, a.length);
        }
      }
    }, fo = t("variableStore");
    class Ms {
      /**
       * Creates an instance of the Variable class.
       *
       * @constructor
       * @param {VariableStore} options.variableStore - The VariableStore instance for registration.
       * @param {string|null} options.name - The name of the variable.
       * @param {*} options.defaultValue - The default value of the variable.
       * @param {*} options.value - The current value of the variable.
       * @param {string|null} options.type - The type of the variable (string, number, boolean).
       * @param {boolean} options.hadStarted - A flag indicating whether the variable has started (used internally).
       * @param {Function[]} options.valueChangedCallbacks - Array to store callbacks to be executed when the variable value changes.
       */
      constructor(a) {
        let {
          variableStore: l
        } = a;
        Object.defineProperty(this, fo, {
          writable: !0,
          value: void 0
        }), this.name = null, this.defaultValue = null, this.value = null, this.type = null, this.hadStarted = !1, this.valueChangedCallbacks = [], r(this, fo)[fo] = l;
      }
      getValue() {
        return this.value;
      }
      getdefaultValue() {
        return this.defaultValue;
      }
      /**
       * Defines a new variable with the provided name, default value, and variable store.
       * @static
       * @param {string} name - The name of the variable.
       * @param {*} defaultValue - The default value of the variable.
       * @param {VariableStore} variableStore - The VariableStore instance for registration.
       * @returns {Variable|null} - The created Variable instance or null if invalid parameters are provided.
       */
      static define(a, l, u, v) {
        if (!a || typeof a != "string")
          return v.error("Empty or invalid name parameter provided."), null;
        if (a.startsWith(".") || a.endsWith("."))
          return v.error("Variable name starts or ends with a `.` which is not allowed: " + a), null;
        const y = typeof l;
        if (y !== "string" && y !== "number" && y !== "boolean" && y !== "object")
          return v.error("Only (string, number, boolean, objects) are accepted as value"), null;
        if (y === "object" && S0(l))
          return v.error("Nested arrays/functions are not supported in JSON variables"), null;
        const k = u.getVariable(a);
        if (k)
          return k;
        const C = new Ms({
          variableStore: u
        });
        try {
          C.name = a, C.defaultValue = l, C.value = l, C.type = y, u.registerVariable(C), C.update(l);
        } catch (E) {
          v.error(E);
        }
        return C;
      }
      static defineFileVar(a, l, u) {
        if (!a || typeof a != "string" || a.startsWith(".") || a.endsWith("."))
          return u.error("Empty or invalid name parameter provided."), null;
        const v = new Ms({
          variableStore: l
        });
        try {
          v.name = a, v.defaultValue = "", v.type = "file", l.registerVariable(v), v.update(v.defaultValue);
        } catch (y) {
          u.error(y);
        }
        return v;
      }
      /**
       * Updates the variable's value, triggering callbacks if hasVarsRequestCompleted is returned true.
       * @param {*} newValue - The new value to be assigned to the variable.
       */
      update(a) {
        const l = this.value;
        this.value = a, !(a === null && l === null) && (a !== null && a === l && this.hadStarted || r(this, fo)[fo].hasVarsRequestCompleted() && (this.hadStarted = !0, this.triggerValueChanged()));
      }
      /**
       * Invokes all registered callbacks when the variable value changes.
       */
      triggerValueChanged() {
        this.valueChangedCallbacks.forEach((a) => {
          a(this);
        });
      }
      /**
       * Adds a callback function to the array and triggers it immediately if variable requests have completed.
       * @param {Function} onValueChanged - The callback function to be added.
       */
      addValueChangedCallback(a, l) {
        if (!a) {
          l.log("Invalid callback parameter provided.");
          return;
        }
        this.valueChangedCallbacks.push(a), r(this, fo)[fo].hasVarsRequestCompleted() && a(this);
      }
      /**
       * Removes a callback function from the array.
       * @param {Function} onValueChanged - The callback function to be removed.
       */
      removeValueChangedCallback(a) {
        const l = this.valueChangedCallbacks.indexOf(a);
        l !== -1 && this.valueChangedCallbacks.splice(l, 1);
      }
      /**
       * Resets the `hadStarted` flag to false.
       */
      clearStartFlag() {
        this.hadStarted = !1;
      }
    }
    var Xr = t("logger"), hi = t("account"), ho = t("request"), Fs = t("event"), Dt = t("variables"), Ns = t("remoteVariables"), po = t("fetchCallback"), Nn = t("variablesChangedCallbacks"), bn = t("oneTimeVariablesChangedCallbacks"), Ls = t("hasVarsRequestCompleted"), ku = t("runVariablesChangedCallback");
    class j1 {
      constructor(a) {
        let {
          logger: l,
          request: u,
          account: v,
          event: y
        } = a;
        Object.defineProperty(this, ku, {
          value: $1
        }), Object.defineProperty(this, Xr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, hi, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, ho, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Fs, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Dt, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Ns, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, po, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Nn, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, bn, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Ls, {
          writable: !0,
          value: !1
        }), r(this, Xr)[Xr] = l, r(this, hi)[hi] = v, r(this, ho)[ho] = u, r(this, Fs)[Fs] = y, r(this, Dt)[Dt] = {}, r(this, Ns)[Ns] = {}, r(this, Nn)[Nn] = [], r(this, bn)[bn] = [], q.variableStore = this;
      }
      /**
       * Registers a variable instance in the store.
       * @param {Object} varInstance - The variable instance to be registered.
       */
      registerVariable(a) {
        const {
          name: l
        } = a;
        r(this, Dt)[Dt][l] = a, console.log("registerVariable", r(this, Dt)[Dt]);
      }
      /**
       * Retrieves a variable by its name.
       * @param {string} name - The name of the variable to retrieve.
       * @returns {Object} - The variable instance.
       */
      getVariable(a) {
        return r(this, Dt)[Dt][a];
      }
      hasVarsRequestCompleted() {
        return r(this, Ls)[Ls];
      }
      /**
       * Synchronizes variables with the server.
       * @param {Function} onSyncSuccess - Callback function on successful synchronization.
       * @param {Function} onSyncFailure - Callback function on synchronization failure.
       * @throws Will throw an error if the account token is missing.
       * @returns {Promise} - The result of the synchronization request.
       */
      syncVariables(a, l) {
        if (!r(this, hi)[hi].token) {
          const E = "Account token is missing.";
          return r(this, Xr)[Xr].error(E), Promise.reject(new Error(E));
        }
        const u = {
          type: "varsPayload",
          vars: {}
        };
        for (const E in r(this, Dt)[Dt])
          if (typeof r(this, Dt)[Dt][E].defaultValue == "object") {
            var v;
            const w = E0({
              [(v = r(this, Dt)[Dt][E]) === null || v === void 0 ? void 0 : v.name]: r(this, Dt)[Dt][E].defaultValue
            });
            for (const A in w)
              u.vars[A] = {
                defaultValue: w[A].defaultValue,
                type: w[A].type
              };
          } else r(this, Dt)[Dt][E].type === "file" ? u.vars[E] = {
            type: r(this, Dt)[Dt][E].type
          } : u.vars[E] = {
            defaultValue: r(this, Dt)[Dt][E].defaultValue,
            type: r(this, Dt)[Dt][E].type
          };
        if (Object.keys(u.vars).length === 0) {
          const E = "No variables are defined.";
          return r(this, Xr)[Xr].error(E), Promise.reject(new Error(E));
        }
        let y = {};
        y = r(this, ho)[ho].addSystemDataToObject(y, void 0), y.tk = r(this, hi)[hi].token, y.type = "meta";
        const k = JSON.stringify([y, u]), C = r(this, hi)[hi].dataPostPEURL;
        return r(this, ho)[ho].post(C, k).then((E) => (a && typeof a == "function" && a(E), E)).catch((E) => {
          throw l && typeof l == "function" && l(E), E.status === 400 ? r(this, Xr)[Xr].error("Invalid sync payload or clear the existing draft") : E.status === 401 ? r(this, Xr)[Xr].error("This is not a test profile") : r(this, Xr)[Xr].error("Sync variable failed"), E;
        });
      }
      /**
       * Fetches variables from the server.
       * @param {Function} onFetchCallback - Callback function on fetch completion.
       */
      fetchVariables(a) {
        r(this, Fs)[Fs].push(Be, {
          t: 4
        }), a && typeof a == "function" && (r(this, po)[po] = a);
      }
      mergeVariables(a) {
        console.log("msg vars is ", a), r(this, Ls)[Ls] = !0, H.saveToLSorCookie(lr, a), r(this, Ns)[Ns] = a;
        for (const l in r(this, Dt)[Dt])
          a.hasOwnProperty(l) && r(this, Dt)[Dt][l].update(a[l]);
        r(this, po)[po] && r(this, po)[po](), r(this, ku)[ku]();
      }
      addVariablesChangedCallback(a) {
        a && typeof a == "function" ? (r(this, Nn)[Nn].push(a), this.hasVarsRequestCompleted() && a()) : r(this, Xr)[Xr].error("callback is not a function");
      }
      addOneTimeVariablesChangedCallback(a) {
        a && typeof a == "function" && (this.hasVarsRequestCompleted() ? a() : r(this, bn)[bn].push(a));
      }
      removeVariablesChangedCallback(a) {
        const l = r(this, Nn)[Nn].indexOf(a);
        l !== -1 && r(this, Nn)[Nn].splice(l, 1);
      }
      removeOneTimeVariablesChangedCallback(a) {
        const l = r(this, bn)[bn].indexOf(a);
        l !== -1 && r(this, bn)[bn].splice(l, 1);
      }
    }
    var $1 = function() {
      for (var a of r(this, Nn)[Nn])
        a();
      for (var l of r(this, bn)[bn])
        l();
      r(this, bn)[bn].length = 0;
    }, he = t("logger"), Us = t("api"), Ln = t("onloadcalled"), gr = t("device"), Qt = t("session"), Ne = t("account"), Ke = t("request"), Qr = t("variableStore"), pi = t("isSpa"), zs = t("previousUrl"), Un = t("boundCheckPageChanged"), vo = t("dismissSpamControl"), go = t("pageChangeTimeoutId"), Iu = t("processOldValues"), Ou = t("debounce"), Du = t("checkPageChanged"), Ru = t("updateUnviewedBadgePosition"), js = t("pingRequest"), Pu = t("isPingContinuous"), Bu = t("overrideDSyncFlag"), $s = t("sendLocationData");
    class W1 {
      get spa() {
        return r(this, pi)[pi];
      }
      set spa(a) {
        const l = a === !0;
        r(this, pi)[pi] !== l && r(this, Ln)[Ln] === 1 && (l ? document.addEventListener("click", r(this, Un)[Un]) : document.removeEventListener("click", r(this, Un)[Un])), r(this, pi)[pi] = l;
      }
      get dismissSpamControl() {
        return r(this, vo)[vo];
      }
      set dismissSpamControl(a) {
        const l = a === !0;
        r(this, vo)[vo] = l, q.dismissSpamControl = l;
      }
      constructor() {
        var a, l, u, v, y, k, C, E;
        let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Object.defineProperty(this, $s, {
          value: X1
        }), Object.defineProperty(this, Bu, {
          value: Z1
        }), Object.defineProperty(this, Pu, {
          value: Y1
        }), Object.defineProperty(this, js, {
          value: K1
        }), Object.defineProperty(this, Ru, {
          value: G1
        }), Object.defineProperty(this, Du, {
          value: H1
        }), Object.defineProperty(this, Ou, {
          value: V1
        }), Object.defineProperty(this, Iu, {
          value: q1
        }), Object.defineProperty(this, he, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Us, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Ln, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, gr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Qt, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Ne, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Ke, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Qr, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, pi, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, zs, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, Un, {
          writable: !0,
          value: r(this, Du)[Du].bind(this)
        }), Object.defineProperty(this, vo, {
          writable: !0,
          value: void 0
        }), this.enablePersonalization = void 0, Object.defineProperty(this, go, {
          writable: !0,
          value: void 0
        }), this.popupCallbacks = {}, this.popupCurrentWzrkId = "", r(this, Ln)[Ln] = 0, this._isPersonalisationActive = this._isPersonalisationActive.bind(this), this.raiseNotificationClicked = () => {
        }, r(this, he)[he] = new B1(To.INFO), r(this, Ne)[Ne] = new S((a = w.account) === null || a === void 0 ? void 0 : a[0], w.region || ((l = w.account) === null || l === void 0 ? void 0 : l[1]), w.targetDomain || ((u = w.account) === null || u === void 0 ? void 0 : u[2]), w.token || ((v = w.account) === null || v === void 0 ? void 0 : v[3])), ii.key = (y = w.account) === null || y === void 0 ? void 0 : y[0].id;
        const A = k0(w == null || (k = w.config) === null || k === void 0 ? void 0 : k.customId);
        !A.isValid && (!(w == null || (C = w.config) === null || C === void 0) && C.customId) && r(this, he)[he].error(A.error), r(this, gr)[gr] = new uw({
          logger: r(this, he)[he],
          customId: A != null && A.isValid ? A == null ? void 0 : A.sanitizedId : null
        }), r(this, vo)[vo] = w.dismissSpamControl || !1, this.shpfyProxyPath = w.shpfyProxyPath || "", r(this, Qt)[Qt] = new F1({
          logger: r(this, he)[he],
          isPersonalisationActive: this._isPersonalisationActive
        }), r(this, Ke)[Ke] = new N1({
          logger: r(this, he)[he],
          account: r(this, Ne)[Ne],
          device: r(this, gr)[gr],
          session: r(this, Qt)[Qt],
          isPersonalisationActive: this._isPersonalisationActive
        }), this.enablePersonalization = w.enablePersonalization || !1, this.event = new ww({
          logger: r(this, he)[he],
          request: r(this, Ke)[Ke],
          isPersonalisationActive: this._isPersonalisationActive
        }, w.event), this.profile = new Tw({
          logger: r(this, he)[he],
          request: r(this, Ke)[Ke],
          account: r(this, Ne)[Ne],
          isPersonalisationActive: this._isPersonalisationActive
        }, w.profile), this.onUserLogin = new Fw({
          request: r(this, Ke)[Ke],
          account: r(this, Ne)[Ne],
          session: r(this, Qt)[Qt],
          logger: r(this, he)[he],
          device: r(this, gr)[gr]
        }, w.onUserLogin), this.privacy = new U1({
          request: r(this, Ke)[Ke],
          account: r(this, Ne)[Ne],
          logger: r(this, he)[he]
        }, w.privacy), this.notifications = new I0({
          logger: r(this, he)[he],
          request: r(this, Ke)[Ke],
          account: r(this, Ne)[Ne]
        }, w.notifications), r(this, Qr)[Qr] = new j1({
          logger: r(this, he)[he],
          request: r(this, Ke)[Ke],
          account: r(this, Ne)[Ne],
          event: this.event
        }), r(this, Us)[Us] = new lw({
          logger: r(this, he)[he],
          request: r(this, Ke)[Ke],
          device: r(this, gr)[gr],
          session: r(this, Qt)[Qt]
        }), this.spa = w.spa, this.dismissSpamControl = w.dismissSpamControl, this.user = new P1({
          isPersonalisationActive: this._isPersonalisationActive
        }), ii.logger = r(this, he)[he], this.session = {
          getTimeElapsed: () => r(this, Qt)[Qt].getTimeElapsed(),
          getPageCount: () => r(this, Qt)[Qt].getPageCount()
        }, this.logout = () => {
          r(this, he)[he].debug("logout called"), H.setInstantDeleteFlagInK();
        }, this.clear = () => {
          this.onUserLogin.clear();
        }, this.getCleverTapID = () => r(this, gr)[gr].getGuid(), this.getAccountID = () => r(this, Ne)[Ne].id, this.getSCDomain = () => r(this, Ne)[Ne].finalTargetDomain, this.setLibrary = (P, D) => {
          q.flutterVersion = {
            [P]: D
          };
        }, this.setSCSDKVersion = (P) => {
          r(this, Ne)[Ne].scSDKVersion = P;
          const D = {};
          D.af = {
            scv: "sc-sdk-v" + r(this, Ne)[Ne].scSDKVersion
          };
          let B = r(this, Ne)[Ne].dataPostURL;
          B = Je(B, "type", "page"), B = Je(B, "d", Gr(JSON.stringify(D), r(this, he)[he])), r(this, Ke)[Ke].saveAndFireRequest(B, q.blockRequest);
        }, s0() && (du(), i0(r(this, he)[he])), this.getInboxMessageCount = () => {
          const P = Hn();
          return Object.keys(P).length;
        }, this.getInboxMessageUnreadCount = () => {
          try {
            const P = this.getUnreadInboxMessages();
            return Object.keys(P).length;
          } catch (P) {
            r(this, he)[he].error("Error in getInboxMessageUnreadCount" + P);
          }
        }, this.getAllInboxMessages = () => Hn(), this.getUnreadInboxMessages = () => {
          try {
            const P = Hn(), D = {};
            if (Object.keys(P).length > 0)
              for (const B in P)
                P[B].viewed === 0 && (D[B] = P[B]);
            return D;
          } catch (P) {
            r(this, he)[he].error("Error in getUnreadInboxMessages" + P);
          }
        }, this.getInboxMessageForId = (P) => {
          const D = Hn();
          if ((P !== null || P !== "") && D.hasOwnProperty(P))
            return D[P];
          r(this, he)[he].error("No message available for message Id " + P);
        }, this.deleteInboxMessage = (P) => {
          const D = Hn();
          if ((P !== null || P !== "") && D.hasOwnProperty(P)) {
            if (D[P].viewed === 0) {
              q.inbox && (q.inbox.unviewedCounter--, delete q.inbox.unviewedMessages[P]);
              const M = document.getElementById("unviewedBadge");
              M && (M.innerText = q.inbox.unviewedCounter, M.style.display = q.inbox.unviewedCounter > 0 ? "flex" : "none");
            }
            const B = document.querySelector("ct-web-inbox");
            if (B) {
              const M = B.shadowRoot.getElementById(P);
              M && M.remove();
            }
            delete D[P], Ro(D);
          } else
            r(this, he)[he].error("No message available for message Id " + P);
        }, this.markReadInboxMessage = (P) => {
          const D = Hn();
          if ((P !== null || P !== "") && D.hasOwnProperty(P)) {
            if (D[P].viewed === 1)
              return r(this, he)[he].error("Message already viewed" + P);
            const M = document.querySelector("ct-web-inbox");
            if (M) {
              const K = M.shadowRoot.getElementById(P);
              K !== null && (K.shadowRoot.getElementById("unreadMarker").style.display = "none");
            }
            D[P].viewed = 1;
            const G = document.getElementById("unviewedBadge");
            if (G) {
              var B = parseInt(G.innerText) - 1;
              G.innerText = B, G.style.display = B > 0 ? "flex" : "none";
            }
            window.clevertap.renderNotificationViewed({
              msgId: D[P].wzrk_id,
              pivotId: D[P].pivotId
            }), q.inbox && (q.inbox.unviewedCounter--, delete q.inbox.unviewedMessages[P]), Ro(D);
          } else
            r(this, he)[he].error("No message available for message Id " + P);
        }, this.markReadInboxMessagesForIds = (P) => {
          if (Array.isArray(P))
            for (var D = 0; D < P.length; D++)
              this.markReadInboxMessage(P[D]);
        }, this.markReadAllInboxMessage = () => {
          const P = Hn(), D = this.getUnreadInboxMessages();
          if (Object.keys(D).length > 0) {
            Object.keys(D).forEach((G) => {
              const K = document.querySelector("ct-web-inbox");
              if (K) {
                const Z = K.shadowRoot.getElementById(G);
                Z !== null && (Z.shadowRoot.getElementById("unreadMarker").style.display = "none");
              }
              P[G].viewed = 1, window.clevertap.renderNotificationViewed({
                msgId: P[G].wzrk_id,
                pivotId: P[G].wzrk_pivot
              });
            });
            const M = document.getElementById("unviewedBadge");
            M && (M.innerText = 0, M.style.display = "none"), Ro(P), q.inbox.unviewedCounter = 0, q.inbox.unviewedMessages = {};
          } else
            r(this, he)[he].debug("All messages are already read");
        }, this.toggleInbox = (P) => {
          var D;
          return (D = q.inbox) === null || D === void 0 ? void 0 : D.toggleInbox(P);
        }, this.renderNotificationViewed = (P) => {
          N(Mr, P);
        }, this.renderNotificationClicked = (P) => {
          N(pr, P);
        };
        const N = (P, D) => {
          if (!D || !D.msgId)
            return;
          const B = {};
          if (B.type = "event", B.evtName = P, B.evtData = {
            [tr]: D.msgId
          }, D.pivotId && (B.evtData = {
            ...B.evtData,
            wzrk_pivot: D.pivotId
          }), D.wzrk_slideNo && (B.evtData = {
            ...B.evtData,
            wzrk_slideNo: D.wzrk_slideNo
          }), D.kv && D.kv !== null && D.kv !== void 0)
            for (const M in D.kv)
              M.startsWith(Tt) && (B.evtData = {
                ...B.evtData,
                [M]: D.kv[M]
              });
          if (D.msgCTkv && D.msgCTkv !== null && D.msgCTkv !== void 0)
            for (const M in D.msgCTkv)
              M.startsWith(Tt) && (B.evtData = {
                ...B.evtData,
                [M]: D.msgCTkv[M]
              });
          r(this, Ke)[Ke].processEvent(B);
        };
        this.setLogLevel = (P) => {
          r(this, he)[he].logLevel = Number(P), P === 3 ? sessionStorage.WZRK_D = "" : delete sessionStorage.WZRK_D;
        }, this.handleIncrementValue = (P, D) => {
          this.profile._handleIncrementDecrementValue(P, D, Vr);
        }, this.handleDecrementValue = (P, D) => {
          this.profile._handleIncrementDecrementValue(P, D, Dn);
        }, this.setMultiValuesForKey = (P, D) => {
          Array.isArray(D) ? this.profile._handleMultiValueSet(P, D, Cr) : console.error("setMultiValuesForKey should be called with a value of type array");
        }, this.addMultiValueForKey = (P, D) => {
          typeof D == "string" || typeof D == "number" ? this.profile._handleMultiValueAdd(P, D, pn) : console.error("addMultiValueForKey should be called with a value of type string or number.");
        }, this.addMultiValuesForKey = (P, D) => {
          Array.isArray(D) ? this.profile._handleMultiValueAdd(P, D, pn) : console.error("addMultiValuesForKey should be called with a value of type array.");
        }, this.removeMultiValueForKey = (P, D) => {
          typeof D == "string" || typeof D == "number" ? this.profile._handleMultiValueRemove(P, D, Sr) : console.error("removeMultiValueForKey should be called with a value of type string or number.");
        }, this.removeMultiValuesForKey = (P, D) => {
          Array.isArray(D) ? this.profile._handleMultiValueRemove(P, D, Sr) : console.error("removeMultiValuesForKey should be called with a value of type array.");
        }, this.removeValueForKey = (P) => {
          this.profile._handleMultiValueDelete(P, je);
        }, this.enableLocalStorageEncryption = (P) => {
          ii.enableLocalStorageEncryption = P;
        }, this.isLocalStorageEncryptionEnabled = () => ii.enableLocalStorageEncryption;
        const O = (P, D, B) => {
          Bw(P, D, B, r(this, Ne)[Ne], r(this, he)[he]);
        };
        this.getLocation = function(P, D) {
          if (P && typeof P != "number" || D && typeof D != "number") {
            console.log("Latitude and Longitude must be of number type");
            return;
          }
          if (P && D) {
            if (P <= -90 || P > 90) {
              console.log("A vaid latitude must range between -90 and 90");
              return;
            }
            if (D <= -180 || D > 180) {
              console.log("A valid longitude must range between -180 and 180");
              return;
            }
            q.location = {
              Latitude: P,
              Longitude: D
            }, r(this, $s)[$s]({
              Latitude: P,
              Longitude: D
            });
          } else
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(R.bind(this), T) : console.log("Geolocation is not supported by this browser.");
        };
        function R(P) {
          var D = P.coords.latitude, B = P.coords.longitude;
          q.location = {
            Latitude: D,
            Longitude: B
          }, r(this, $s)[$s]({
            Latitude: D,
            Longitude: B
          });
        }
        function T(P) {
          switch (P.code) {
            case P.PERMISSION_DENIED:
              console.log("User denied the request for Geolocation.");
              break;
            case P.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case P.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            case P.UNKNOWN_ERROR:
              console.log("An unknown error occurred.");
              break;
          }
        }
        const F = r(this, Us)[Us];
        if (F.logout = this.logout, F.clear = this.clear, F.closeIframe = (P, D) => {
          bs(P, D, r(this, Qt)[Qt].sessionId);
        }, F.enableWebPush = (P, D) => {
          O1(D), this.notifications._enableWebPush(P, D);
          try {
            H.saveToLSorCookie(tt, !0);
          } catch (B) {
            r(this, he)[he].error("Could not read value from local storage", B);
          }
        }, F.tr = (P) => {
          _u(P, {
            device: r(this, gr)[gr],
            session: r(this, Qt)[Qt],
            request: r(this, Ke)[Ke],
            logger: r(this, he)[he],
            region: r(this, Ne)[Ne].region
          });
        }, F.setEnum = (P) => {
          Pw(P, r(this, he)[he]);
        }, F.is_onloadcalled = () => r(this, Ln)[Ln] === 1, F.subEmail = (P) => {
          O("1", P);
        }, F.getEmail = (P, D) => {
          O("-1", P, D);
        }, F.unSubEmail = (P) => {
          O("0", P);
        }, F.unsubEmailGroups = (P) => {
          q.unsubGroups = [];
          const D = document.getElementsByClassName("ct-unsub-group-input-item");
          for (let B = 0; B < D.length; B++) {
            const M = D[B];
            if (M.name) {
              const G = {
                name: M.name,
                isUnsubscribed: M.checked
              };
              q.unsubGroups.push(G);
            }
          }
          O(er, P);
        }, F.setSubscriptionGroups = (P) => {
          q.unsubGroups = P;
        }, F.getSubscriptionGroups = () => q.unsubGroups, F.changeSubscriptionGroups = (P, D) => {
          F.setSubscriptionGroups(D), O(er, P);
        }, F.isGlobalUnsubscribe = () => q.globalUnsubscribe, F.setIsGlobalUnsubscribe = (P) => {
          q.globalUnsubscribe = P;
        }, F.setUpdatedCategoryLong = (P) => {
          P[cr] && (q.updatedCategoryLong = P[cr]);
        }, window.$CLTP_WR = window.$WZRK_WR = F, !((E = w.account) === null || E === void 0) && E[0].id) {
          var U;
          H.saveToLSorCookie(ut, (U = w.account) === null || U === void 0 ? void 0 : U[0].id), this.init();
        }
      }
      createCustomIdIfValid(a) {
        const l = k0(a);
        l.isValid || r(this, he)[he].error(l.error), !r(this, gr)[gr].gcookie && (l.isValid ? (r(this, gr)[gr].gcookie = l == null ? void 0 : l.sanitizedId, H.saveToLSorCookie(V, l == null ? void 0 : l.sanitizedId), r(this, he)[he].debug("CT Initialized with customId:: " + (l == null ? void 0 : l.sanitizedId))) : r(this, he)[he].error("Invalid customId"));
      }
      init(a, l, u, v) {
        let y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
          antiFlicker: {},
          customId: null
        };
        if (y != null && y.antiFlicker && Object.keys(y == null ? void 0 : y.antiFlicker).length > 0 && a1(y.antiFlicker), r(this, Ln)[Ln] === 1)
          return;
        if (a && (ii.key = a), H.removeCookie("WZRK_P", window.location.hostname), !r(this, Ne)[Ne].id) {
          if (!a) {
            r(this, he)[he].error(fw);
            return;
          }
          r(this, Ne)[Ne].id = a, H.saveToLSorCookie(ut, a), r(this, he)[he].debug("CT Initialized with Account ID: " + r(this, Ne)[Ne].id);
        }
        e1(r(this, he)[he], r(this, Ne)[Ne].id), h1(r(this, he)[he]), r(this, Qt)[Qt].cookieName = Ie + "_" + r(this, Ne)[Ne].id, l && (r(this, Ne)[Ne].region = l), u && (r(this, Ne)[Ne].targetDomain = u), v && (r(this, Ne)[Ne].token = v), y != null && y.customId && this.createCustomIdIfValid(y.customId);
        const k = location.href, C = ou(k.toLowerCase());
        if (typeof C.e < "u" && C.wzrk_ex == "0")
          return;
        q.isPrivacyArrPushed = !0, q.privacyArray.length > 0 && this.privacy.push(q.privacyArray), r(this, Iu)[Iu](), this.pageChanged();
        const E = setInterval(() => {
          r(this, gr)[gr].gcookie && (clearInterval(E), r(this, Ke)[Ke].processBackupEvents());
        }, 3e3);
        r(this, pi)[pi] ? (document.addEventListener("click", r(this, Un)[Un]), window.addEventListener("popstate", r(this, Un)[Un])) : document.removeEventListener("click", r(this, Un)[Un]), r(this, Ln)[Ln] = 1;
      }
      // process the option array provided to the clevertap object
      // after its been initialized
      pageChanged() {
        const a = window.location.href, l = ou(a.toLowerCase()), u = r(this, Qt)[Qt].getSessionCookieObject();
        let v = typeof u.p > "u" ? 0 : u.p;
        u.p = ++v, r(this, Qt)[Qt].setSessionCookieObject(u);
        let y = {}, k = Cw(document.referrer);
        if (window.location.hostname !== k) {
          k !== "" && (k = k.length > 120 ? k.substring(0, 120) : k, y.referrer = k);
          let w = l.utm_source || l.wzrk_source;
          typeof w < "u" && (w = w.length > 120 ? w.substring(0, 120) : w, y.us = w);
          let A = l.utm_medium || l.wzrk_medium;
          typeof A < "u" && (A = A.length > 120 ? A.substring(0, 120) : A, y.um = A);
          let N = l.utm_campaign || l.wzrk_campaign;
          if (typeof N < "u" && (N = N.length > 120 ? N.substring(0, 120) : N, y.uc = N), typeof l.wzrk_medium < "u") {
            const O = l.wzrk_medium;
            O.match(/^email$|^social$|^search$/) && (y.wm = O);
          }
        }
        y = r(this, Ke)[Ke].addSystemDataToObject(y, void 0), y.cpg = a, y[ye] = Zh();
        let C = r(this, Ne)[Ne].dataPostURL;
        r(this, Ke)[Ke].addFlags(y), parseInt(y.pg) === 1 && r(this, Bu)[Bu](y), C = Je(C, "type", "page"), C = Je(C, "d", Gr(JSON.stringify(y), r(this, he)[he])), r(this, Ke)[Ke].saveAndFireRequest(C, q.blockRequest), parseInt(y.pg) === 1 && this.event.push(Be, {
          t: 4
        }), r(this, zs)[zs] = a, setTimeout(() => {
          v <= 3 && r(this, js)[js](), r(this, Pu)[Pu]() && setInterval(() => {
            r(this, js)[js]();
          }, Tr);
        }, wr), r(this, Ru)[Ru]();
      }
      _isPersonalisationActive() {
        return H._isLocalStorageSupported() && this.enablePersonalization;
      }
      // eslint-disable-next-line accessor-pairs
      set popupCallback(a) {
        this.popupCallbacks[this.popupCurrentWzrkId] = a;
      }
      /**
       *
       * @param {object} payload
       */
      // offline mode
      /**
       * events will be recorded and queued locally when passed with true
       * but will not be sent to the server until offline is disabled by passing false
       * @param {boolean} arg
       */
      setOffline(a) {
        if (typeof a != "boolean") {
          console.error("setOffline should be called with a value of type boolean");
          return;
        }
        q.offline !== a && !a && r(this, Ke)[Ke].processBackupEvents(), q.offline = a;
      }
      getSDKVersion() {
        return "web-sdk-v1.15.3";
      }
      defineVariable(a, l) {
        return Ms.define(a, l, r(this, Qr)[Qr], r(this, he)[he]);
      }
      defineFileVariable(a) {
        return Ms.defineFileVar(a, r(this, Qr)[Qr], r(this, he)[he]);
      }
      syncVariables(a, l) {
        if (r(this, he)[he].logLevel === 4)
          return r(this, Qr)[Qr].syncVariables(a, l);
        {
          const u = "App log level is not set to 4";
          return r(this, he)[he].error(u), Promise.reject(new Error(u));
        }
      }
      fetchVariables(a) {
        r(this, Qr)[Qr].fetchVariables(a);
      }
      getVariables() {
        return A0(H.readFromLSorCookie(lr));
      }
      getVariableValue(a) {
        const l = H.readFromLSorCookie(lr), u = A0(l);
        if (l.hasOwnProperty(a))
          return l[a];
        if (u.hasOwnProperty(a))
          return u[a];
      }
      addVariablesChangedCallback(a) {
        r(this, Qr)[Qr].addVariablesChangedCallback(a);
      }
      addOneTimeVariablesChangedCallback(a) {
        r(this, Qr)[Qr].addOneTimeVariablesChangedCallback(a);
      }
      /*
         This function is used for debugging and getting the details of all the campaigns
         that were qualified and rendered for the current user
      */
      getAllQualifiedCampaignDetails() {
        return H.readFromLSorCookie(Q) && JSON.parse(decodeURIComponent(H.readFromLSorCookie(Q)));
      }
    }
    var q1 = function() {
      this.onUserLogin._processOldValues(), this.privacy._processOldValues(), this.event._processOldValues(), this.profile._processOldValues(), this.notifications._processOldValues();
    }, V1 = function(a) {
      let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50, u;
      return function() {
        clearTimeout(u), u = setTimeout(a, l);
      };
    }, H1 = function() {
      r(this, Ou)[Ou](() => {
        r(this, zs)[zs] !== location.href && this.pageChanged();
      })();
    }, G1 = function() {
      try {
        r(this, go)[go] && clearTimeout(r(this, go)[go]);
        const a = document.getElementById("unviewedBadge");
        if (!a) {
          r(this, he)[he].debug("unViewedBadge not found");
          return;
        }
        a.style.display = "none", r(this, go)[go] = setTimeout(() => {
          const l = H.readFromLSorCookie(Ve) || {}, u = document.getElementById(l == null ? void 0 : l.inboxSelector), v = document.getElementById("unviewedBadge");
          if (!v) {
            r(this, he)[he].debug("unViewedBadge not found");
            return;
          }
          if (u) {
            const {
              top: y,
              right: k
            } = u.getBoundingClientRect();
            (Number(v.innerText) > 0 || v.innerText === "9+") && (v.style.display = "flex"), v.style.top = "".concat(y - 8, "px"), v.style.left = "".concat(k - 8, "px");
          }
        }, Vn);
      } catch (a) {
        r(this, he)[he].debug("Error updating unviewed badge position:", a);
      }
    }, K1 = function() {
      let a = r(this, Ne)[Ne].dataPostURL, l = {};
      l = r(this, Ke)[Ke].addSystemDataToObject(l, void 0), a = Je(a, "type", we), a = Je(a, "d", Gr(JSON.stringify(l), r(this, he)[he])), r(this, Ke)[Ke].saveAndFireRequest(a, q.blockRequest);
    }, Y1 = function() {
      return typeof window.wzrk_d < "u" && window.wzrk_d.ping === "continuous";
    }, Z1 = function(a) {
      this._isPersonalisationActive() && (a.dsync = !0);
    }, X1 = function(a) {
      let l = {};
      l.af = {};
      const u = {};
      l.type = "profile", u.tz == null && (u.tz = (/* @__PURE__ */ new Date()).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]), l.profile = u, a && Object.keys(a).forEach((C) => {
        l.af[C] = a[C];
      }), q.location && (l.af = {
        ...l.af,
        ...q.location
      }), l = r(this, Ke)[Ke].addSystemDataToObject(l, !0), r(this, Ke)[Ke].addFlags(l);
      const v = Gr(JSON.stringify(l), r(this, he)[he]);
      let y = r(this, Ne)[Ne].dataPostURL;
      y = Je(y, "type", Mt), y = Je(y, "d", v), r(this, Ke)[Ke].saveAndFireRequest(y, q.blockRequest);
    };
    const z0 = new W1(window.clevertap);
    return window.clevertap = window.wizrocket = z0, z0;
  });
})(G4);
var Se = {}, ad = { exports: {} };
(function(e, n) {
  (function(i, t) {
    var r = "1.0.40", o = "", s = "?", c = "function", f = "undefined", d = "object", p = "string", g = "major", m = "model", S = "name", x = "type", I = "vendor", b = "version", L = "architecture", $ = "console", W = "mobile", V = "tablet", Q = "smarttv", ie = "wearable", ye = "embedded", ge = 500, Ie = "Amazon", $e = "Apple", Oe = "ASUS", Me = "BlackBerry", ke = "Browser", ut = "Chrome", Ue = "Edge", mt = "Firefox", xt = "Google", Te = "Huawei", Ot = "LG", Bt = "Microsoft", br = "Motorola", Kt = "Opera", Lt = "Samsung", Ut = "Sharp", ar = "Sony", qe = "Xiaomi", Mt = "Zebra", we = "Facebook", Ge = "Chromium OS", bt = "Mac OS", wr = " Browser", Tr = function(je, Ve) {
      var Fe = {};
      for (var ht in je)
        Ve[ht] && Ve[ht].length % 2 === 0 ? Fe[ht] = Ve[ht].concat(je[ht]) : Fe[ht] = je[ht];
      return Fe;
    }, er = function(je) {
      for (var Ve = {}, Fe = 0; Fe < je.length; Fe++)
        Ve[je[Fe].toUpperCase()] = je[Fe];
      return Ve;
    }, cr = function(je, Ve) {
      return typeof je === p ? Tt(Ve).indexOf(Tt(je)) !== -1 : !1;
    }, Tt = function(je) {
      return je.toLowerCase();
    }, tr = function(je) {
      return typeof je === p ? je.replace(/[^\d\.]/g, o).split(".")[0] : t;
    }, Mr = function(je, Ve) {
      if (typeof je === p)
        return je = je.replace(/^\s\s*/, o), typeof Ve === f ? je : je.substring(0, ge);
    }, pr = function(je, Ve) {
      for (var Fe = 0, ht, lr, rr, Qe, Be, ur; Fe < Ve.length && !Be; ) {
        var tt = Ve[Fe], fr = Ve[Fe + 1];
        for (ht = lr = 0; ht < tt.length && !Be && tt[ht]; )
          if (Be = tt[ht++].exec(je), Be)
            for (rr = 0; rr < fr.length; rr++)
              ur = Be[++lr], Qe = fr[rr], typeof Qe === d && Qe.length > 0 ? Qe.length === 2 ? typeof Qe[1] == c ? this[Qe[0]] = Qe[1].call(this, ur) : this[Qe[0]] = Qe[1] : Qe.length === 3 ? typeof Qe[1] === c && !(Qe[1].exec && Qe[1].test) ? this[Qe[0]] = ur ? Qe[1].call(this, ur, Qe[2]) : t : this[Qe[0]] = ur ? ur.replace(Qe[1], Qe[2]) : t : Qe.length === 4 && (this[Qe[0]] = ur ? Qe[3].call(this, ur.replace(Qe[1], Qe[2])) : t) : this[Qe] = ur || t;
        Fe += 2;
      }
    }, zt = function(je, Ve) {
      for (var Fe in Ve)
        if (typeof Ve[Fe] === d && Ve[Fe].length > 0) {
          for (var ht = 0; ht < Ve[Fe].length; ht++)
            if (cr(Ve[Fe][ht], je))
              return Fe === s ? t : Fe;
        } else if (cr(Ve[Fe], je))
          return Fe === s ? t : Fe;
      return Ve.hasOwnProperty("*") ? Ve["*"] : je;
    }, _r = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, Vr = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Dn = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [b, [S, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [b, [S, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [S, b], [/opios[\/ ]+([\w\.]+)/i], [b, [S, Kt + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [b, [S, Kt + " GX"]], [/\bopr\/([\w\.]+)/i], [b, [S, Kt]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [b, [S, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [b, [S, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [S, b], [/quark(?:pc)?\/([-\w\.]+)/i], [b, [S, "Quark"]], [/\bddg\/([\w\.]+)/i], [b, [S, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [b, [S, "UC" + ke]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [b, [S, "WeChat"]], [/konqueror\/([\w\.]+)/i], [b, [S, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [b, [S, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [b, [S, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [b, [S, "Smart Lenovo " + ke]], [/(avast|avg)\/([\w\.]+)/i], [[S, /(.+)/, "$1 Secure " + ke], b], [/\bfocus\/([\w\.]+)/i], [b, [S, mt + " Focus"]], [/\bopt\/([\w\.]+)/i], [b, [S, Kt + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [b, [S, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [b, [S, "Dolphin"]], [/coast\/([\w\.]+)/i], [b, [S, Kt + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [b, [S, "MIUI" + wr]], [/fxios\/([\w\.-]+)/i], [b, [S, mt]], [/\bqihoobrowser\/?([\w\.]*)/i], [b, [S, "360"]], [/\b(qq)\/([\w\.]+)/i], [[S, /(.+)/, "$1Browser"], b], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[S, /(.+)/, "$1" + wr], b], [/samsungbrowser\/([\w\.]+)/i], [b, [S, Lt + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [b, [S, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[S, "Sogou Mobile"], b], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [S, b], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [S], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [b, S], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[S, we], b], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [S, b], [/\bgsa\/([\w\.]+) .*safari\//i], [b, [S, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [b, [S, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [b, [S, ut + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[S, ut + " WebView"], b], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [b, [S, "Android " + ke]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [S, b], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [b, [S, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [b, S], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [S, [b, zt, _r]], [/(webkit|khtml)\/([\w\.]+)/i], [S, b], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[S, "Netscape"], b], [/(wolvic|librewolf)\/([\w\.]+)/i], [S, b], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [b, [S, mt + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [S, [b, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [S, [b, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[L, "amd64"]], [/(ia32(?=;))/i], [[L, Tt]], [/((?:i[346]|x)86)[;\)]/i], [[L, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[L, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[L, "armhf"]], [/windows (ce|mobile); ppc;/i], [[L, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[L, /ower/, o, Tt]], [/(sun4\w)[;\)]/i], [[L, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[L, Tt]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [m, [I, Lt], [x, V]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [m, [I, Lt], [x, W]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [m, [I, $e], [x, W]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [m, [I, $e], [x, V]], [/(macintosh);/i], [m, [I, $e]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [m, [I, Ut], [x, W]], [/(?:honor)([-\w ]+)[;\)]/i], [m, [I, "Honor"], [x, W]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [m, [I, Te], [x, V]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [m, [I, Te], [x, W]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [[m, /_/g, " "], [I, qe], [x, W]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[m, /_/g, " "], [I, qe], [x, V]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [m, [I, "OPPO"], [x, W]], [/\b(opd2\d{3}a?) bui/i], [m, [I, "OPPO"], [x, V]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [m, [I, "Vivo"], [x, W]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [m, [I, "Realme"], [x, W]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [m, [I, br], [x, W]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [m, [I, br], [x, V]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [m, [I, Ot], [x, V]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [m, [I, Ot], [x, W]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [m, [I, "Lenovo"], [x, V]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[m, /_/g, " "], [I, "Nokia"], [x, W]], [/(pixel c)\b/i], [m, [I, xt], [x, V]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [m, [I, xt], [x, W]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [m, [I, ar], [x, W]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[m, "Xperia Tablet"], [I, ar], [x, V]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [m, [I, "OnePlus"], [x, W]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [m, [I, Ie], [x, V]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[m, /(.+)/g, "Fire Phone $1"], [I, Ie], [x, W]], [/(playbook);[-\w\),; ]+(rim)/i], [m, I, [x, V]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [m, [I, Me], [x, W]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [m, [I, Oe], [x, V]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [m, [I, Oe], [x, W]], [/(nexus 9)/i], [m, [I, "HTC"], [x, V]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [I, [m, /_/g, " "], [x, W]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [m, [I, "TCL"], [x, V]], [/(itel) ((\w+))/i], [[I, Tt], m, [x, zt, { tablet: ["p10001l", "w7001"], "*": "mobile" }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [m, [I, "Acer"], [x, V]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [m, [I, "Meizu"], [x, W]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [m, [I, "Ulefone"], [x, W]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [m, [I, "Energizer"], [x, W]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [m, [I, "Cat"], [x, W]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [m, [I, "Smartfren"], [x, W]], [/droid.+; (a(?:015|06[35]|142p?))/i], [m, [I, "Nothing"], [x, W]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [I, m, [x, W]], [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [I, m, [x, V]], [/(surface duo)/i], [m, [I, Bt], [x, V]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [m, [I, "Fairphone"], [x, W]], [/(u304aa)/i], [m, [I, "AT&T"], [x, W]], [/\bsie-(\w*)/i], [m, [I, "Siemens"], [x, W]], [/\b(rct\w+) b/i], [m, [I, "RCA"], [x, V]], [/\b(venue[\d ]{2,7}) b/i], [m, [I, "Dell"], [x, V]], [/\b(q(?:mv|ta)\w+) b/i], [m, [I, "Verizon"], [x, V]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [m, [I, "Barnes & Noble"], [x, V]], [/\b(tm\d{3}\w+) b/i], [m, [I, "NuVision"], [x, V]], [/\b(k88) b/i], [m, [I, "ZTE"], [x, V]], [/\b(nx\d{3}j) b/i], [m, [I, "ZTE"], [x, W]], [/\b(gen\d{3}) b.+49h/i], [m, [I, "Swiss"], [x, W]], [/\b(zur\d{3}) b/i], [m, [I, "Swiss"], [x, V]], [/\b((zeki)?tb.*\b) b/i], [m, [I, "Zeki"], [x, V]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[I, "Dragon Touch"], m, [x, V]], [/\b(ns-?\w{0,9}) b/i], [m, [I, "Insignia"], [x, V]], [/\b((nxa|next)-?\w{0,9}) b/i], [m, [I, "NextBook"], [x, V]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[I, "Voice"], m, [x, W]], [/\b(lvtel\-)?(v1[12]) b/i], [[I, "LvTel"], m, [x, W]], [/\b(ph-1) /i], [m, [I, "Essential"], [x, W]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [m, [I, "Envizen"], [x, V]], [/\b(trio[-\w\. ]+) b/i], [m, [I, "MachSpeed"], [x, V]], [/\btu_(1491) b/i], [m, [I, "Rotor"], [x, V]], [/(shield[\w ]+) b/i], [m, [I, "Nvidia"], [x, V]], [/(sprint) (\w+)/i], [I, m, [x, W]], [/(kin\.[onetw]{3})/i], [[m, /\./g, " "], [I, Bt], [x, W]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [m, [I, Mt], [x, V]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [m, [I, Mt], [x, W]], [/smart-tv.+(samsung)/i], [I, [x, Q]], [/hbbtv.+maple;(\d+)/i], [[m, /^/, "SmartTV"], [I, Lt], [x, Q]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[I, Ot], [x, Q]], [/(apple) ?tv/i], [I, [m, $e + " TV"], [x, Q]], [/crkey/i], [[m, ut + "cast"], [I, xt], [x, Q]], [/droid.+aft(\w+)( bui|\))/i], [m, [I, Ie], [x, Q]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [m, [I, Ut], [x, Q]], [/(bravia[\w ]+)( bui|\))/i], [m, [I, ar], [x, Q]], [/(mitv-\w{5}) bui/i], [m, [I, qe], [x, Q]], [/Hbbtv.*(technisat) (.*);/i], [I, m, [x, Q]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[I, Mr], [m, Mr], [x, Q]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[x, Q]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [I, m, [x, $]], [/droid.+; (shield) bui/i], [m, [I, "Nvidia"], [x, $]], [/(playstation [345portablevi]+)/i], [m, [I, ar], [x, $]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [m, [I, Bt], [x, $]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], [m, [I, Lt], [x, ie]], [/((pebble))app/i], [I, m, [x, ie]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [m, [I, $e], [x, ie]], [/droid.+; (glass) \d/i], [m, [I, xt], [x, ie]], [/droid.+; (wt63?0{2,3})\)/i], [m, [I, Mt], [x, ie]], [/droid.+; (glass) \d/i], [m, [I, xt], [x, ie]], [/(pico) (4|neo3(?: link|pro)?)/i], [I, m, [x, ie]], [/; (quest( \d| pro)?)/i], [m, [I, we], [x, ie]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [I, [x, ye]], [/(aeobc)\b/i], [m, [I, Ie], [x, ye]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [m, [x, W]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [m, [x, V]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[x, V]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[x, W]], [/(android[-\w\. ]{0,9});.+buil/i], [m, [I, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [b, [S, Ue + "HTML"]], [/(arkweb)\/([\w\.]+)/i], [S, b], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [b, [S, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [S, b], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [b, S]], os: [[/microsoft (windows) (vista|xp)/i], [S, b], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [S, [b, zt, Vr]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[b, zt, Vr], [S, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[b, /_/g, "."], [S, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[S, bt], [b, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [b, S], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [S, b], [/\(bb(10);/i], [b, [S, Me]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [b, [S, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [b, [S, mt + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [b, [S, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [b, [S, "watchOS"]], [/crkey\/([\d\.]+)/i], [b, [S, ut + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[S, Ge], b], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [S, b], [/(sunos) ?([\w\.\d]*)/i], [[S, "Solaris"], b], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [S, b]] }, Cr = function(je, Ve) {
      if (typeof je === d && (Ve = je, je = t), !(this instanceof Cr))
        return new Cr(je, Ve).getResult();
      var Fe = typeof i !== f && i.navigator ? i.navigator : t, ht = je || (Fe && Fe.userAgent ? Fe.userAgent : o), lr = Fe && Fe.userAgentData ? Fe.userAgentData : t, rr = Ve ? Tr(Dn, Ve) : Dn, Qe = Fe && Fe.userAgent == ht;
      return this.getBrowser = function() {
        var Be = {};
        return Be[S] = t, Be[b] = t, pr.call(Be, ht, rr.browser), Be[g] = tr(Be[b]), Qe && Fe && Fe.brave && typeof Fe.brave.isBrave == c && (Be[S] = "Brave"), Be;
      }, this.getCPU = function() {
        var Be = {};
        return Be[L] = t, pr.call(Be, ht, rr.cpu), Be;
      }, this.getDevice = function() {
        var Be = {};
        return Be[I] = t, Be[m] = t, Be[x] = t, pr.call(Be, ht, rr.device), Qe && !Be[x] && lr && lr.mobile && (Be[x] = W), Qe && Be[m] == "Macintosh" && Fe && typeof Fe.standalone !== f && Fe.maxTouchPoints && Fe.maxTouchPoints > 2 && (Be[m] = "iPad", Be[x] = V), Be;
      }, this.getEngine = function() {
        var Be = {};
        return Be[S] = t, Be[b] = t, pr.call(Be, ht, rr.engine), Be;
      }, this.getOS = function() {
        var Be = {};
        return Be[S] = t, Be[b] = t, pr.call(Be, ht, rr.os), Qe && !Be[S] && lr && lr.platform && lr.platform != "Unknown" && (Be[S] = lr.platform.replace(/chrome os/i, Ge).replace(/macos/i, bt)), Be;
      }, this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function() {
        return ht;
      }, this.setUA = function(Be) {
        return ht = typeof Be === p && Be.length > ge ? Mr(Be, ge) : Be, this;
      }, this.setUA(ht), this;
    };
    Cr.VERSION = r, Cr.BROWSER = er([S, b, g]), Cr.CPU = er([L]), Cr.DEVICE = er([m, I, x, $, W, Q, V, ie, ye]), Cr.ENGINE = Cr.OS = er([S, b]), e.exports && (n = e.exports = Cr), n.UAParser = Cr;
    var pn = typeof i !== f && (i.jQuery || i.Zepto);
    if (pn && !pn.ua) {
      var Sr = new Cr();
      pn.ua = Sr.getResult(), pn.ua.get = function() {
        return Sr.getUA();
      }, pn.ua.set = function(je) {
        Sr.setUA(je);
        var Ve = Sr.getResult();
        for (var Fe in Ve)
          pn.ua[Fe] = Ve[Fe];
      };
    }
  })(typeof window == "object" ? window : Gc);
})(ad, ad.exports);
var X4 = ad.exports;
Object.defineProperty(Se, "__esModule", { value: !0 });
function Q4(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var jr = fd, Nt = Q4(jr), tx = X4, $i = new tx(), qr = $i.getBrowser(), J4 = $i.getCPU(), Sn = $i.getDevice(), sh = $i.getEngine(), Wi = $i.getOS(), Ra = $i.getUA(), rx = function(n) {
  return $i.setUA(n);
}, Pa = function(n) {
  if (!n) {
    console.error("No userAgent string was provided");
    return;
  }
  var i = new tx(n);
  return {
    UA: i,
    browser: i.getBrowser(),
    cpu: i.getCPU(),
    device: i.getDevice(),
    engine: i.getEngine(),
    os: i.getOS(),
    ua: i.getUA(),
    setUserAgent: function(r) {
      return i.setUA(r);
    }
  };
}, nx = /* @__PURE__ */ Object.freeze({
  ClientUAInstance: $i,
  browser: qr,
  cpu: J4,
  device: Sn,
  engine: sh,
  os: Wi,
  ua: Ra,
  setUa: rx,
  parseUserAgent: Pa
});
function Uv(e, n) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), i.push.apply(i, t);
  }
  return i;
}
function eD(e) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Uv(Object(i), !0).forEach(function(t) {
      iD(e, t, i[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Uv(Object(i)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
    });
  }
  return e;
}
function sa(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sa = function(n) {
    return typeof n;
  } : sa = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, sa(e);
}
function tD(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function rD(e, n) {
  for (var i = 0; i < n.length; i++) {
    var t = n[i];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function nD(e, n, i) {
  return n && rD(e.prototype, n), e;
}
function iD(e, n, i) {
  return n in e ? Object.defineProperty(e, n, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = i, e;
}
function cd() {
  return cd = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var t in i)
        Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    }
    return e;
  }, cd.apply(this, arguments);
}
function oD(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), n && ud(e, n);
}
function ld(e) {
  return ld = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, ld(e);
}
function ud(e, n) {
  return ud = Object.setPrototypeOf || function(t, r) {
    return t.__proto__ = r, t;
  }, ud(e, n);
}
function sD(e, n) {
  if (e == null) return {};
  var i = {}, t = Object.keys(e), r, o;
  for (o = 0; o < t.length; o++)
    r = t[o], !(n.indexOf(r) >= 0) && (i[r] = e[r]);
  return i;
}
function On(e, n) {
  if (e == null) return {};
  var i = sD(e, n), t, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      t = o[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
  }
  return i;
}
function il(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function aD(e, n) {
  if (n && (typeof n == "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return il(e);
}
function cD(e, n) {
  return lD(e) || uD(e, n) || fD(e, n) || dD();
}
function lD(e) {
  if (Array.isArray(e)) return e;
}
function uD(e, n) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var t = [], r = !0, o = !1, s, c;
    try {
      for (i = i.call(e); !(r = (s = i.next()).done) && (t.push(s.value), !(n && t.length === n)); r = !0)
        ;
    } catch (f) {
      o = !0, c = f;
    } finally {
      try {
        !r && i.return != null && i.return();
      } finally {
        if (o) throw c;
      }
    }
    return t;
  }
}
function fD(e, n) {
  if (e) {
    if (typeof e == "string") return zv(e, n);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return zv(e, n);
  }
}
function zv(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var i = 0, t = new Array(n); i < n; i++) t[i] = e[i];
  return t;
}
function dD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Lr = {
  Mobile: "mobile",
  Tablet: "tablet",
  SmartTv: "smarttv",
  Console: "console",
  Wearable: "wearable",
  Embedded: "embedded",
  Browser: void 0
}, hn = {
  Chrome: "Chrome",
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: "IE",
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: "Samsung Browser"
}, fs = {
  IOS: "iOS",
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MAC_OS: "Mac OS"
}, hD = {
  isMobile: !1,
  isTablet: !1,
  isBrowser: !1,
  isSmartTV: !1,
  isConsole: !1,
  isWearable: !1
}, pD = function(n) {
  switch (n) {
    case Lr.Mobile:
      return {
        isMobile: !0
      };
    case Lr.Tablet:
      return {
        isTablet: !0
      };
    case Lr.SmartTv:
      return {
        isSmartTV: !0
      };
    case Lr.Console:
      return {
        isConsole: !0
      };
    case Lr.Wearable:
      return {
        isWearable: !0
      };
    case Lr.Browser:
      return {
        isBrowser: !0
      };
    case Lr.Embedded:
      return {
        isEmbedded: !0
      };
    default:
      return hD;
  }
}, vD = function(n) {
  return rx(n);
}, We = function(n) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return n || i;
}, ah = function() {
  return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1;
}, ch = function(n) {
  var i = ah();
  return i && i.platform && (i.platform.indexOf(n) !== -1 || i.platform === "MacIntel" && i.maxTouchPoints > 1 && !window.MSStream);
}, gD = function(n, i, t, r, o) {
  return {
    isBrowser: n,
    browserMajorVersion: We(i.major),
    browserFullVersion: We(i.version),
    browserName: We(i.name),
    engineName: We(t.name),
    engineVersion: We(t.version),
    osName: We(r.name),
    osVersion: We(r.version),
    userAgent: We(o)
  };
}, jv = function(n, i, t, r) {
  return eD({}, n, {
    vendor: We(i.vendor),
    model: We(i.model),
    os: We(t.name),
    osVersion: We(t.version),
    ua: We(r)
  });
}, mD = function(n, i, t, r) {
  return {
    isSmartTV: n,
    engineName: We(i.name),
    engineVersion: We(i.version),
    osName: We(t.name),
    osVersion: We(t.version),
    userAgent: We(r)
  };
}, yD = function(n, i, t, r) {
  return {
    isConsole: n,
    engineName: We(i.name),
    engineVersion: We(i.version),
    osName: We(t.name),
    osVersion: We(t.version),
    userAgent: We(r)
  };
}, xD = function(n, i, t, r) {
  return {
    isWearable: n,
    engineName: We(i.name),
    engineVersion: We(i.version),
    osName: We(t.name),
    osVersion: We(t.version),
    userAgent: We(r)
  };
}, bD = function(n, i, t, r, o) {
  return {
    isEmbedded: n,
    vendor: We(i.vendor),
    model: We(i.model),
    engineName: We(t.name),
    engineVersion: We(t.version),
    osName: We(r.name),
    osVersion: We(r.version),
    userAgent: We(o)
  };
};
function wD(e) {
  var n = e ? Pa(e) : nx, i = n.device, t = n.browser, r = n.engine, o = n.os, s = n.ua, c = pD(i.type), f = c.isBrowser, d = c.isMobile, p = c.isTablet, g = c.isSmartTV, m = c.isConsole, S = c.isWearable, x = c.isEmbedded;
  if (f)
    return gD(f, t, r, o, s);
  if (g)
    return mD(g, r, o, s);
  if (m)
    return yD(m, r, o, s);
  if (d || p)
    return jv(c, i, o, s);
  if (S)
    return xD(S, r, o, s);
  if (x)
    return bD(x, i, r, o, s);
}
var ix = function(n) {
  var i = n.type;
  return i === Lr.Mobile;
}, ox = function(n) {
  var i = n.type;
  return i === Lr.Tablet;
}, sx = function(n) {
  var i = n.type;
  return i === Lr.Mobile || i === Lr.Tablet;
}, ax = function(n) {
  var i = n.type;
  return i === Lr.SmartTv;
}, Ol = function(n) {
  var i = n.type;
  return i === Lr.Browser;
}, cx = function(n) {
  var i = n.type;
  return i === Lr.Wearable;
}, lx = function(n) {
  var i = n.type;
  return i === Lr.Console;
}, ux = function(n) {
  var i = n.type;
  return i === Lr.Embedded;
}, fx = function(n) {
  var i = n.vendor;
  return We(i);
}, dx = function(n) {
  var i = n.model;
  return We(i);
}, hx = function(n) {
  var i = n.type;
  return We(i, "browser");
}, px = function(n) {
  var i = n.name;
  return i === fs.Android;
}, vx = function(n) {
  var i = n.name;
  return i === fs.Windows;
}, gx = function(n) {
  var i = n.name;
  return i === fs.MAC_OS;
}, mx = function(n) {
  var i = n.name;
  return i === fs.WindowsPhone;
}, yx = function(n) {
  var i = n.name;
  return i === fs.IOS;
}, xx = function(n) {
  var i = n.version;
  return We(i);
}, bx = function(n) {
  var i = n.name;
  return We(i);
}, wx = function(n) {
  var i = n.name;
  return i === hn.Chrome;
}, _x = function(n) {
  var i = n.name;
  return i === hn.Firefox;
}, Cx = function(n) {
  var i = n.name;
  return i === hn.Chromium;
}, Dl = function(n) {
  var i = n.name;
  return i === hn.Edge;
}, Sx = function(n) {
  var i = n.name;
  return i === hn.Yandex;
}, Ex = function(n) {
  var i = n.name;
  return i === hn.Safari || i === hn.MobileSafari;
}, Ax = function(n) {
  var i = n.name;
  return i === hn.MobileSafari;
}, kx = function(n) {
  var i = n.name;
  return i === hn.Opera;
}, Ix = function(n) {
  var i = n.name;
  return i === hn.InternetExplorer || i === hn.Ie;
}, Ox = function(n) {
  var i = n.name;
  return i === hn.MIUI;
}, Dx = function(n) {
  var i = n.name;
  return i === hn.SamsungBrowser;
}, Rx = function(n) {
  var i = n.version;
  return We(i);
}, Px = function(n) {
  var i = n.major;
  return We(i);
}, Bx = function(n) {
  var i = n.name;
  return We(i);
}, Tx = function(n) {
  var i = n.name;
  return We(i);
}, Mx = function(n) {
  var i = n.version;
  return We(i);
}, Fx = function() {
  var n = ah(), i = n && n.userAgent && n.userAgent.toLowerCase();
  return typeof i == "string" ? /electron/.test(i) : !1;
}, Yo = function(n) {
  return typeof n == "string" && n.indexOf("Edg/") !== -1;
}, Nx = function() {
  var n = ah();
  return n && (/iPad|iPhone|iPod/.test(n.platform) || n.platform === "MacIntel" && n.maxTouchPoints > 1) && !window.MSStream;
}, Xn = function() {
  return ch("iPad");
}, Lx = function() {
  return ch("iPhone");
}, Ux = function() {
  return ch("iPod");
}, zx = function(n) {
  return We(n);
};
function jx(e) {
  var n = e || nx, i = n.device, t = n.browser, r = n.os, o = n.engine, s = n.ua;
  return {
    isSmartTV: ax(i),
    isConsole: lx(i),
    isWearable: cx(i),
    isEmbedded: ux(i),
    isMobileSafari: Ax(t) || Xn(),
    isChromium: Cx(t),
    isMobile: sx(i) || Xn(),
    isMobileOnly: ix(i),
    isTablet: ox(i) || Xn(),
    isBrowser: Ol(i),
    isDesktop: Ol(i),
    isAndroid: px(r),
    isWinPhone: mx(r),
    isIOS: yx(r) || Xn(),
    isChrome: wx(t),
    isFirefox: _x(t),
    isSafari: Ex(t),
    isOpera: kx(t),
    isIE: Ix(t),
    osVersion: xx(r),
    osName: bx(r),
    fullBrowserVersion: Rx(t),
    browserVersion: Px(t),
    browserName: Bx(t),
    mobileVendor: fx(i),
    mobileModel: dx(i),
    engineName: Tx(o),
    engineVersion: Mx(o),
    getUA: zx(s),
    isEdge: Dl(t) || Yo(s),
    isYandex: Sx(t),
    deviceType: hx(i),
    isIOS13: Nx(),
    isIPad13: Xn(),
    isIPhone13: Lx(),
    isIPod13: Ux(),
    isElectron: Fx(),
    isEdgeChromium: Yo(s),
    isLegacyEdge: Dl(t) && !Yo(s),
    isWindows: vx(r),
    isMacOs: gx(r),
    isMIUI: Ox(t),
    isSamsungBrowser: Dx(t)
  };
}
var $x = ax(Sn), Wx = lx(Sn), qx = cx(Sn), _D = ux(Sn), CD = Ax(qr) || Xn(), SD = Cx(qr), Ql = sx(Sn) || Xn(), Vx = ix(Sn), Hx = ox(Sn) || Xn(), Gx = Ol(Sn), ED = Ol(Sn), Kx = px(Wi), Yx = mx(Wi), Zx = yx(Wi) || Xn(), AD = wx(qr), kD = _x(qr), ID = Ex(qr), OD = kx(qr), Xx = Ix(qr), DD = xx(Wi), RD = bx(Wi), PD = Rx(qr), BD = Px(qr), TD = Bx(qr), MD = fx(Sn), FD = dx(Sn), ND = Tx(sh), LD = Mx(sh), UD = zx(Ra), zD = Dl(qr) || Yo(Ra), jD = Sx(qr), $D = hx(Sn), WD = Nx(), qD = Xn(), VD = Lx(), HD = Ux(), GD = Fx(), KD = Yo(Ra), YD = Dl(qr) && !Yo(Ra), ZD = vx(Wi), XD = gx(Wi), QD = Ox(qr), JD = Dx(qr), eR = function(n) {
  if (!n || typeof n != "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var i = Pa(n), t = i.device, r = i.browser, o = i.os, s = i.engine, c = i.ua;
  return jx({
    device: t,
    browser: r,
    os: o,
    engine: s,
    ua: c
  });
}, tR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Kx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, rR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Gx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, nR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Xx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, iR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Zx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, oR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Ql ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, sR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Hx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, aR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Yx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, cR = function(n) {
  var i = n.renderWithFragment, t = n.children;
  n.viewClassName, n.style;
  var r = On(n, ["renderWithFragment", "children", "viewClassName", "style"]);
  return Vx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, lR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return $x ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, uR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return Wx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, fR = function(n) {
  var i = n.renderWithFragment, t = n.children, r = On(n, ["renderWithFragment", "children"]);
  return qx ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", r, t) : null;
}, dR = function(n) {
  var i = n.renderWithFragment, t = n.children;
  n.viewClassName, n.style;
  var r = n.condition, o = On(n, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return r ? i ? Nt.createElement(jr.Fragment, null, t) : Nt.createElement("div", o, t) : null;
};
function hR(e) {
  return /* @__PURE__ */ function(n) {
    oD(i, n);
    function i(t) {
      var r;
      return tD(this, i), r = aD(this, ld(i).call(this, t)), r.isEventListenerAdded = !1, r.handleOrientationChange = r.handleOrientationChange.bind(il(r)), r.onOrientationChange = r.onOrientationChange.bind(il(r)), r.onPageLoad = r.onPageLoad.bind(il(r)), r.state = {
        isLandscape: !1,
        isPortrait: !1
      }, r;
    }
    return nD(i, [{
      key: "handleOrientationChange",
      value: function() {
        this.isEventListenerAdded || (this.isEventListenerAdded = !0);
        var r = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: r === 0,
          isLandscape: r === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function() {
        (typeof window > "u" ? "undefined" : sa(window)) !== void 0 && Ql && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        window.removeEventListener("resize", this.onOrientationChange, !1);
      }
    }, {
      key: "render",
      value: function() {
        return Nt.createElement(e, cd({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]), i;
  }(Nt.Component);
}
function pR() {
  var e = jr.useState(function() {
    var o = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: o === 0,
      isLandscape: o === 90,
      orientation: o === 0 ? "portrait" : "landscape"
    };
  }), n = cD(e, 2), i = n[0], t = n[1], r = jr.useCallback(function() {
    var o = window.innerWidth > window.innerHeight ? 90 : 0, s = {
      isPortrait: o === 0,
      isLandscape: o === 90,
      orientation: o === 0 ? "portrait" : "landscape"
    };
    i.orientation !== s.orientation && t(s);
  }, [i.orientation]);
  return jr.useEffect(function() {
    return (typeof window > "u" ? "undefined" : sa(window)) !== void 0 && Ql && (r(), window.addEventListener("load", r, !1), window.addEventListener("resize", r, !1)), function() {
      window.removeEventListener("resize", r, !1), window.removeEventListener("load", r, !1);
    };
  }, [r]), i;
}
function Qx(e) {
  var n = e || window.navigator.userAgent;
  return Pa(n);
}
function vR(e) {
  var n = e || window.navigator.userAgent, i = Qx(n), t = jx(i);
  return [t, i];
}
Se.AndroidView = tR;
Se.BrowserTypes = hn;
Se.BrowserView = rR;
Se.ConsoleView = uR;
Se.CustomView = dR;
Se.IEView = nR;
Se.IOSView = iR;
Se.MobileOnlyView = cR;
Se.MobileView = oR;
Se.OsTypes = fs;
Se.SmartTVView = lR;
Se.TabletView = sR;
Se.WearableView = fR;
Se.WinPhoneView = aR;
Se.browserName = TD;
Se.browserVersion = BD;
Se.deviceDetect = wD;
Se.deviceType = $D;
Se.engineName = ND;
Se.engineVersion = LD;
Se.fullBrowserVersion = PD;
Se.getSelectorsByUserAgent = eR;
Se.getUA = UD;
Se.isAndroid = Kx;
Se.isBrowser = Gx;
Se.isChrome = AD;
Se.isChromium = SD;
Se.isConsole = Wx;
Se.isDesktop = ED;
Se.isEdge = zD;
Se.isEdgeChromium = KD;
Se.isElectron = GD;
Se.isEmbedded = _D;
Se.isFirefox = kD;
Se.isIE = Xx;
Se.isIOS = Zx;
Se.isIOS13 = WD;
Se.isIPad13 = qD;
Se.isIPhone13 = VD;
Se.isIPod13 = HD;
Se.isLegacyEdge = YD;
Se.isMIUI = QD;
Se.isMacOs = XD;
Se.isMobile = Ql;
Se.isMobileOnly = Vx;
Se.isMobileSafari = CD;
Se.isOpera = OD;
Se.isSafari = ID;
Se.isSamsungBrowser = JD;
Se.isSmartTV = $x;
Se.isTablet = Hx;
Se.isWearable = qx;
Se.isWinPhone = Yx;
Se.isWindows = ZD;
Se.isYandex = jD;
Se.mobileModel = FD;
Se.mobileVendor = MD;
Se.osName = RD;
Se.osVersion = DD;
Se.parseUserAgent = Pa;
Se.setUserAgent = vD;
Se.useDeviceData = Qx;
Se.useDeviceSelectors = vR;
Se.useMobileOrientation = pR;
Se.withOrientationChange = hR;
const gR = () => {
  try {
    const e = localStorage.getItem("mock");
    return e ? JSON.parse(e) : !1;
  } catch {
    return !1;
  }
}, mR = (e = [], n = window.location.href) => {
  const i = new URL(n);
  return e.forEach((t) => {
    i.searchParams.delete(t);
  }), i.toString();
};
let yR;
const xR = () => ir.create({
  baseURL: yR,
  timeout: 18e4
}), ds = xR();
ds.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
ds.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8";
ds.defaults.headers.common["X-TENANT-ID"] = `${window.location.origin}undefined`.slice(
  0,
  -1
);
ds.interceptors.request.use((e) => e);
ds.interceptors.response.use(
  (e) => e,
  (e) => {
    var n, i, t, r, o, s;
    return ((n = e == null ? void 0 : e.response) == null ? void 0 : n.status) == 401 && (localStorage.clear(), window.location.href = `${window.location.origin}undefinedwelcome?referrer=${encodeURIComponent(
      mR(["token"], window.location.href)
    )}`), e && e.response || (e = {
      response: {
        data: {
          errors: {
            message: (e == null ? void 0 : e.message) ?? "Something went wrong.",
            headers: ((i = e == null ? void 0 : e.config) == null ? void 0 : i.headers) ?? {},
            baseUrl: ((t = e == null ? void 0 : e.config) == null ? void 0 : t.baseURL) ?? "",
            url: ((r = e == null ? void 0 : e.config) == null ? void 0 : r.url) ?? "",
            method: ((o = e == null ? void 0 : e.config) == null ? void 0 : o.method) ?? "",
            data: ((s = e == null ? void 0 : e.config) == null ? void 0 : s.data) ?? {}
          }
        }
      }
    }), Promise.reject(e);
  }
);
const bR = {
  data: {}
}, wR = (e, n = {}, i = {}) => {
  const t = j_;
  return gR() ? Promise.resolve(bR) : ds.post(
    t,
    {
      workflow_id: e,
      input_args: {
        inputs: {
          ...n
        }
      }
    },
    {
      headers: i
    }
  );
}, Jx = (e, n = {}, i = {}) => wR(e, n, i).then((t) => t).catch((t) => {
  throw t;
}), _R = (e) => {
  const [n, i] = ln([]), [t, r] = ln(!1), [o, s] = ln(null), c = en(async (d) => {
    var p, g, m;
    r(!0), s(null);
    try {
      const S = await Jx("google_nearby_v2", {
        latitude: d.latitude,
        longitude: d.longitude,
        type: d.type,
        keyword: d.keyword
      }), x = (m = (g = (p = S == null ? void 0 : S.data) == null ? void 0 : p.data) == null ? void 0 : g.final_result) == null ? void 0 : m.results;
      x ? (i(x), typeof window < "u" && window.analytics && window.analytics.track("nearby_search_completed", {
        category: d.type,
        keyword: d.keyword,
        resultsCount: (x == null ? void 0 : x.length) || 0,
        location: { lat: d.latitude, lng: d.longitude }
      })) : i([]);
    } catch (S) {
      const x = S instanceof Error ? S.message : "Failed to search places";
      s(x), e == null || e.logError(S, "useNearbySearch.searchPlaces"), typeof window < "u" && window.analytics && window.analytics.track("nearby_search_error", {
        category: d.type,
        error: x
      });
    } finally {
      r(!1);
    }
  }, [e]), f = en(() => {
    i([]), s(null);
  }, []);
  return {
    places: n,
    loading: t,
    error: o,
    searchPlaces: c,
    clearPlaces: f
  };
}, CR = (e) => {
  const [n, i] = ln(null), [t, r] = ln(!1), [o, s] = ln(null), [c, f] = ln(!1), d = en(async () => {
    if (!e) {
      s("Location service not available");
      return;
    }
    r(!0), s(null);
    try {
      if (e.requestPermission) {
        const g = await e.requestPermission();
        if (f(g), !g)
          throw new Error("Location permission denied");
      }
      const p = await e.getCurrentLocation();
      i(p), f(!0), typeof window < "u" && localStorage.setItem("nearbyAssistant_lastLocation", JSON.stringify(p));
    } catch (p) {
      const g = p instanceof Error ? p.message : "Failed to get location";
      if (s(g), f(!1), typeof window < "u") {
        const m = localStorage.getItem("nearbyAssistant_lastLocation");
        if (m)
          try {
            const S = JSON.parse(m);
            i(S), s("Using cached location");
          } catch {
          }
      }
    } finally {
      r(!1);
    }
  }, [e]);
  return $o(() => {
    e && !n && !t && d();
  }, [e, n, t, d]), {
    userLocation: n,
    loading: t,
    error: o,
    requestLocation: d,
    hasPermission: c
  };
}, SR = () => {
  const [e, n] = ln({}), i = en(async (o) => {
    var s, c, f;
    try {
      const d = await Jx("google_nearby_location_image", {
        photoreference: o,
        maxwidth: 400
      }), p = (f = (c = (s = d == null ? void 0 : d.data) == null ? void 0 : s.data) == null ? void 0 : c.final_result) == null ? void 0 : f.photo_url;
      if (!p)
        throw new Error("No photo URL in response");
      return p;
    } catch (d) {
      throw d;
    }
  }, []), t = en(async (o) => {
    const s = o.filter(
      (f) => {
        var d;
        return f.photos && f.photos.length > 0 && ((d = f.photos[0]) == null ? void 0 : d.photo_reference);
      }
    );
    if (s.length === 0)
      return;
    const c = s.map(async (f) => {
      try {
        const d = await i(f.photos[0].photo_reference);
        return { placeId: f.place_id, photoUrl: d };
      } catch {
        return { placeId: f.place_id, photoUrl: null };
      }
    });
    try {
      const f = await Promise.allSettled(c), d = {};
      f.forEach((p) => {
        p.status === "fulfilled" && p.value.photoUrl && (d[p.value.placeId] = p.value.photoUrl);
      }), n((p) => ({ ...p, ...d }));
    } catch {
    }
  }, [i]), r = en(() => {
    n({});
  }, []);
  return {
    placePhotos: e,
    loadPlacePhotos: t,
    getPhotoUrl: i,
    resetPhotos: r
  };
};
function eb(e) {
  var n, i, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (n = 0; n < r; n++) e[n] && (i = eb(e[n])) && (t && (t += " "), t += i);
  } else for (i in e) e[i] && (t && (t += " "), t += i);
  return t;
}
function _n() {
  for (var e, n, i = 0, t = "", r = arguments.length; i < r; i++) (e = arguments[i]) && (n = eb(e)) && (t && (t += " "), t += n);
  return t;
}
const ER = ({
  title: e,
  children: n,
  onBack: i,
  showBackButton: t = !1,
  extra: r,
  className: o = ""
}) => /* @__PURE__ */ de.jsxs("div", { className: _n("flex flex-col h-full bg-gray-50", o), children: [
  (e || t || r) && /* @__PURE__ */ de.jsx("div", { className: "sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100", children: /* @__PURE__ */ de.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
    /* @__PURE__ */ de.jsxs("div", { className: "flex items-center gap-3", children: [
      t && /* @__PURE__ */ de.jsx(
        "button",
        {
          onClick: i,
          className: "p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors duration-200",
          children: /* @__PURE__ */ de.jsx(b_, { size: 20, className: "text-gray-600" })
        }
      ),
      e && /* @__PURE__ */ de.jsx("h1", { className: "text-lg font-semibold text-gray-900 truncate", children: e })
    ] }),
    r && /* @__PURE__ */ de.jsx("div", { className: "flex-shrink-0", children: r })
  ] }) }),
  /* @__PURE__ */ de.jsx("div", { className: "flex-1 overflow-hidden", children: n })
] }), AR = ({
  category: e,
  isActive: n,
  onClick: i,
  disabled: t = !1
}) => {
  const { icon: r, label: o, color: s } = e;
  return /* @__PURE__ */ de.jsxs(
    "button",
    {
      onClick: i,
      disabled: t,
      className: _n(
        "flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 min-h-[80px]",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        n ? [
          `bg-${s}-50 text-${s}-600 shadow-sm`,
          `focus:ring-${s}-500`
        ] : [
          "hover:bg-gray-50 text-gray-600",
          "focus:ring-gray-300"
        ],
        t ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ de.jsx("div", { className: _n(
          "p-3 rounded-full transition-colors duration-200",
          n ? `bg-${s}-100` : "bg-gray-100"
        ), children: /* @__PURE__ */ de.jsx(r, { size: 24 }) }),
        /* @__PURE__ */ de.jsx("span", { className: "text-sm font-medium text-center leading-tight", children: o })
      ]
    }
  );
}, kR = ({
  rating: e,
  maxRating: n = 5,
  size: i = 16,
  showRating: t = !1,
  className: r = ""
}) => {
  const o = Math.floor(e), s = e % 1 !== 0, c = Math.max(0, n - o - (s ? 1 : 0));
  return /* @__PURE__ */ de.jsxs("div", { className: _n("flex items-center gap-1", r), children: [
    /* @__PURE__ */ de.jsxs("div", { className: "flex items-center", children: [
      Array.from({ length: o }).map((f, d) => /* @__PURE__ */ de.jsx(
        _c,
        {
          size: i,
          className: "fill-yellow-400 text-yellow-400"
        },
        `full-${d}`
      )),
      s && /* @__PURE__ */ de.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ de.jsx(_c, { size: i, className: "text-gray-300" }),
        /* @__PURE__ */ de.jsx("div", { className: "absolute inset-0 overflow-hidden w-1/2", children: /* @__PURE__ */ de.jsx(_c, { size: i, className: "fill-yellow-400 text-yellow-400" }) })
      ] }),
      Array.from({ length: c }).map((f, d) => /* @__PURE__ */ de.jsx(
        _c,
        {
          size: i,
          className: "text-gray-300"
        },
        `empty-${d}`
      ))
    ] }),
    t && /* @__PURE__ */ de.jsx("span", { className: "text-sm text-gray-600 ml-1 font-medium", children: e.toFixed(1) })
  ] });
}, IR = (e) => {
  const n = {
    doctor: Yv,
    hospital: Hv,
    lab: Zv,
    pharmacy: Gv,
    restaurant: Xv,
    shopping_mall: Kv,
    default: Qs
  };
  return n[e] || n.default;
}, OR = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20"
}, DR = {
  sm: 20,
  md: 24,
  lg: 28
}, RR = ({
  photoUrl: e,
  placeType: n,
  placeName: i,
  size: t = "md",
  className: r = ""
}) => {
  const [o, s] = ln(!1), [c, f] = ln(!0), d = IR(n), p = e && !o, g = () => {
    f(!1);
  }, m = () => {
    s(!0), f(!1);
  };
  return /* @__PURE__ */ de.jsx("div", { className: _n(
    "relative rounded-xl overflow-hidden bg-gray-100 flex-shrink-0",
    OR[t],
    r
  ), children: p ? /* @__PURE__ */ de.jsxs(de.Fragment, { children: [
    /* @__PURE__ */ de.jsx(
      "img",
      {
        src: e,
        alt: i || `${n} image`,
        className: _n(
          "w-full h-full object-cover transition-opacity duration-200",
          c ? "opacity-0" : "opacity-100"
        ),
        onLoad: g,
        onError: m
      }
    ),
    c && /* @__PURE__ */ de.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ de.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600" }) })
  ] }) : /* @__PURE__ */ de.jsx("div", { className: "w-full h-full flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ de.jsx(
    d,
    {
      size: DR[t],
      className: "text-gray-400"
    }
  ) }) });
}, PR = ({
  place: e,
  categoryType: n,
  onDetailsClick: i,
  onCallClick: t,
  onDirectionsClick: r,
  onBookingClick: o,
  photoUrl: s,
  showBooking: c = !1,
  className: f = ""
}) => {
  const d = !!e.formatted_phone_number, p = !!e.rating;
  return /* @__PURE__ */ de.jsxs("div", { className: _n(
    "group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md",
    "transition-all duration-200 border border-gray-100",
    f
  ), children: [
    /* @__PURE__ */ de.jsx(
      "div",
      {
        onClick: i,
        className: "p-4 cursor-pointer",
        children: /* @__PURE__ */ de.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ de.jsx(
            RR,
            {
              photoUrl: s,
              placeType: n,
              placeName: e.name,
              size: "md"
            }
          ),
          /* @__PURE__ */ de.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ de.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ de.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ de.jsx("h3", { className: "text-base font-semibold text-gray-900 truncate", children: e.name }),
              /* @__PURE__ */ de.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ de.jsx(Qs, { size: 14, className: "text-gray-400 flex-shrink-0" }),
                /* @__PURE__ */ de.jsx("p", { className: "text-sm text-gray-600 line-clamp-2", children: e.vicinity })
              ] }),
              /* @__PURE__ */ de.jsxs("div", { className: "flex items-center gap-3 mt-2", children: [
                p && /* @__PURE__ */ de.jsx(
                  kR,
                  {
                    rating: e.rating,
                    showRating: !0,
                    size: 14
                  }
                ),
                e.business_status === "OPERATIONAL" && /* @__PURE__ */ de.jsx("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800", children: "Open" })
              ] }),
              e.user_ratings_total && /* @__PURE__ */ de.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
                e.user_ratings_total,
                " reviews"
              ] })
            ] }),
            /* @__PURE__ */ de.jsx("div", { className: "flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200", children: /* @__PURE__ */ de.jsx(
              "svg",
              {
                className: "w-5 h-5 text-gray-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ de.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 5l7 7-7 7"
                  }
                )
              }
            ) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ de.jsxs("div", { className: "flex items-center border-t border-gray-100 bg-gray-50/50", children: [
      /* @__PURE__ */ de.jsx(
        "button",
        {
          onClick: (g) => {
            g.stopPropagation(), c && o ? o() : d && t();
          },
          disabled: !d && !c,
          className: _n(
            "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium",
            "transition-colors duration-200 border-r border-gray-100",
            d || c ? "text-gray-600 hover:text-blue-600" : "text-gray-400 cursor-not-allowed"
          ),
          children: c ? /* @__PURE__ */ de.jsxs(de.Fragment, { children: [
            /* @__PURE__ */ de.jsx(__, { size: 16 }),
            /* @__PURE__ */ de.jsx("span", { children: "Book" })
          ] }) : /* @__PURE__ */ de.jsxs(de.Fragment, { children: [
            /* @__PURE__ */ de.jsx(T_, { size: 16 }),
            /* @__PURE__ */ de.jsx("span", { children: "Call" })
          ] })
        }
      ),
      /* @__PURE__ */ de.jsxs(
        "button",
        {
          onClick: (g) => {
            g.stopPropagation(), r();
          },
          className: "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200",
          children: [
            /* @__PURE__ */ de.jsx(P_, { size: 16 }),
            /* @__PURE__ */ de.jsx("span", { children: "Directions" })
          ]
        }
      )
    ] })
  ] });
}, BR = ({
  specialties: e,
  selectedSpecialty: n,
  onSpecialtyChange: i,
  isOpen: t,
  onToggle: r,
  placeholder: o = "Select Specialty"
}) => {
  var f;
  const s = f_(null);
  $o(() => {
    const d = (p) => {
      s.current && !s.current.contains(p.target) && t && r();
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, [t, r]);
  const c = ((f = e.find((d) => d.id === n)) == null ? void 0 : f.name) || o;
  return /* @__PURE__ */ de.jsxs("div", { className: "relative", ref: s, children: [
    /* @__PURE__ */ de.jsxs(
      "button",
      {
        onClick: r,
        className: _n(
          "w-full flex items-center justify-between px-4 py-3",
          "bg-white border border-gray-200 rounded-xl text-sm text-gray-700",
          "hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
          "focus:border-transparent shadow-sm transition-all duration-200"
        ),
        children: [
          /* @__PURE__ */ de.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ de.jsx("span", { children: c }) }),
          /* @__PURE__ */ de.jsx(
            A_,
            {
              size: 16,
              className: _n(
                "transform transition-transform duration-200",
                t ? "rotate-180" : ""
              )
            }
          )
        ]
      }
    ),
    t && /* @__PURE__ */ de.jsx("div", { className: _n(
      "absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl",
      "shadow-lg max-h-60 overflow-y-auto"
    ), children: e.map((d) => /* @__PURE__ */ de.jsx(
      "button",
      {
        onClick: () => {
          i(d.id), r();
        },
        className: _n(
          "w-full px-4 py-2.5 text-left text-sm transition-colors duration-150",
          "hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl",
          n === d.id ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"
        ),
        children: d.name
      },
      d.id
    )) })
  ] });
}, TR = [
  { id: "all", name: "All Specialists" },
  { id: "general_physician", name: "General Physician", keywords: ["general practitioner", "family doctor"] },
  { id: "cardiologist", name: "Cardiologist", keywords: ["heart doctor", "cardiology"] },
  { id: "dermatologist", name: "Dermatologist", keywords: ["skin doctor", "dermatology"] },
  { id: "pediatrician", name: "Pediatrician", keywords: ["child doctor", "pediatrics"] },
  { id: "orthopedic", name: "Orthopedic", keywords: ["bone doctor", "orthopedics"] },
  { id: "gynecologist", name: "Gynecologist", keywords: ["women doctor", "gynecology"] },
  { id: "dentist", name: "Dentist", keywords: ["dental", "tooth doctor"] },
  { id: "ophthalmologist", name: "Ophthalmologist", keywords: ["eye doctor", "optometrist"] },
  { id: "neurologist", name: "Neurologist", keywords: ["brain doctor", "neurology"] },
  { id: "psychiatrist", name: "Psychiatrist", keywords: ["mental health", "psychology"] },
  { id: "ent", name: "ENT Specialist", keywords: ["ear nose throat", "otolaryngology"] }
], MR = [
  {
    id: "doctor",
    label: "Doctors",
    icon: Yv,
    color: "blue",
    specialties: TR,
    keywords: ["doctor", "physician", "clinic", "medical"]
  },
  {
    id: "hospital",
    label: "Hospitals",
    icon: Hv,
    color: "red",
    keywords: ["hospital", "medical center", "emergency"]
  },
  {
    id: "lab",
    label: "Labs",
    icon: Zv,
    color: "green",
    keywords: ["diagnostic lab", "laboratory", "pathology", "blood test"]
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    icon: Gv,
    color: "purple",
    keywords: ["pharmacy", "medical store", "chemist", "drugstore"]
  },
  {
    id: "restaurant",
    label: "Restaurants",
    icon: Xv,
    color: "orange",
    keywords: ["restaurant", "food", "dining"]
  },
  {
    id: "gas_station",
    label: "Gas Stations",
    icon: S_,
    color: "indigo",
    keywords: ["gas station", "fuel", "petrol"]
  },
  {
    id: "cafe",
    label: "Cafes",
    icon: I_,
    color: "amber",
    keywords: ["cafe", "coffee shop", "coffee"]
  },
  {
    id: "shopping_mall",
    label: "Shopping",
    icon: Kv,
    color: "pink",
    keywords: ["shopping mall", "store", "market"]
  }
], FR = {
  colors: {
    primary: "#3B82F6",
    secondary: "#6B7280",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem"
  }
}, $v = {
  en: {
    nearby_places: "Nearby Places",
    doctors: "Doctors",
    hospitals: "Hospitals",
    labs: "Labs",
    pharmacy: "Pharmacy",
    restaurants: "Restaurants",
    shopping: "Shopping",
    gas_stations: "Gas Stations",
    cafes: "Cafes",
    loading: "Loading...",
    no_results: "No places found nearby",
    try_again: "Try expanding your search",
    call: "Call",
    directions: "Directions",
    book_appointment: "Book Appointment",
    view_details: "View Details",
    getting_location: "Getting your location...",
    location_required: "Location access required",
    select_specialty: "Select Specialty",
    all_specialists: "All Specialists",
    rating: "Rating",
    open_now: "Open Now",
    closed: "Closed",
    loading_nearby_places: "Finding nearby places...",
    no_places_found_nearby: "No places found nearby",
    try_expanding_search: "Try expanding your search radius"
  }
}, NR = () => ({
  getCurrentLocation: async () => new Promise((e, n) => {
    if (!navigator.geolocation) {
      n(new Error("Geolocation is not supported"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (i) => {
        e({
          lat: i.coords.latitude,
          lng: i.coords.longitude
        });
      },
      (i) => {
        n(i);
      },
      {
        enableHighAccuracy: !0,
        timeout: 1e4,
        maximumAge: 3e5
      }
    );
  }),
  requestPermission: async () => {
    if (!navigator.permissions) return !0;
    try {
      return (await navigator.permissions.query({ name: "geolocation" })).state === "granted";
    } catch {
      return !0;
    }
  }
}), LR = () => ({
  track: (e, n) => {
    console.log(`📊 Analytics Event: ${e}`, n), typeof window < "u" && window.gtag && window.gtag("event", e, n);
  }
}), UR = () => ({
  logError: (e, n) => {
    console.error(`❌ Error${n ? ` in ${n}` : ""}:`, e), typeof window < "u" && window.Sentry && window.Sentry.captureException(e, { tags: { context: n } });
  }
}), zR = (e = "en") => ({
  t: (n) => ($v[e] || $v.en)[n] || n,
  language: e
}), jR = (e = {}) => ({
  searchService: {
    searchPlaces: async () => {
      throw new Error("🚨 searchPlaces service not implemented. Please provide your own implementation.");
    },
    getPhotoUrl: async () => {
      throw new Error("🚨 getPhotoUrl service not implemented. Please provide your own implementation.");
    },
    getPlaceDetails: async () => {
      throw new Error("🚨 getPlaceDetails service not implemented. Please provide your own implementation.");
    }
  },
  locationService: NR(),
  analyticsService: LR(),
  errorHandler: UR(),
  i18nService: zR(),
  categories: MR,
  theme: FR,
  searchConfig: {
    radius: 5e3,
    language: "en",
    autoSearch: !0,
    enableSpecialtyFilter: !0
  },
  features: {
    enableBooking: !1,
    enableReviews: !0,
    enablePhotos: !0,
    enableDirections: !0,
    enableCalling: !0,
    enableFilters: !0
  },
  ...e
}), cP = ({
  config: e,
  className: n = "",
  onError: i
}) => {
  var xt, Te, Ot, Bt, br, Kt, Lt, Ut, ar, qe, Mt;
  const t = { ...jR(), ...e }, [r, o] = ln(((Te = (xt = t.categories) == null ? void 0 : xt[0]) == null ? void 0 : Te.id) || "doctor"), [s, c] = ln("all"), [f, d] = ln(!1), { userLocation: p, loading: g, requestLocation: m } = CR(t.locationService), { places: S, loading: x, error: I, searchPlaces: b, clearPlaces: L } = _R(
    t.errorHandler
  ), { placePhotos: $, loadPlacePhotos: W, resetPhotos: V } = SR(), { t: Q } = t.i18nService || { t: (we) => we }, ie = t.analyticsService, ye = ((Ot = t.layout) == null ? void 0 : Ot.component) || ER, ge = (Bt = t.categories) == null ? void 0 : Bt.find((we) => we.id === r), Ie = (ge == null ? void 0 : ge.specialties) && ge.specialties.length > 0;
  console.log("🔍 Debug Info:", {
    activeCategory: r,
    currentCategory: ge == null ? void 0 : ge.label,
    hasSpecialties: Ie,
    userLocation: p,
    locationLoading: g,
    searchLoading: x,
    searchError: I,
    enableSpecialtyFilter: (br = t.searchConfig) == null ? void 0 : br.enableSpecialtyFilter
  });
  const $e = en(async (we) => {
    var bt, wr, Tr;
    if (!p) {
      await m();
      return;
    }
    if (o(we), c("all"), L(), V(), d(!1), ie == null || ie.track("nearby_category_selected", {
      category: we,
      location: p
    }), (bt = t.categories) == null ? void 0 : bt.find((er) => er.id === we)) {
      const er = {
        latitude: p.lat,
        longitude: p.lng,
        type: we,
        radius: ((wr = t.searchConfig) == null ? void 0 : wr.radius) || 5e3,
        language: ((Tr = t.searchConfig) == null ? void 0 : Tr.language) || "en"
      };
      await b(er);
    }
  }, [p, m, L, V, ie, t.categories, t.searchConfig, b]), Oe = en(async (we) => {
    var wr, Tr, er, cr;
    if (!p || !ge) return;
    c(we), L(), V(), ie == null || ie.track("nearby_specialty_selected", {
      category: r,
      specialty: we,
      location: p
    });
    let Ge = "";
    if (we !== "all") {
      const Tt = (wr = ge.specialties) == null ? void 0 : wr.find((tr) => tr.id === we);
      Tt && (Ge = ((Tr = Tt.keywords) == null ? void 0 : Tr[0]) || Tt.name);
    }
    const bt = {
      latitude: p.lat,
      longitude: p.lng,
      type: r,
      keyword: Ge,
      radius: ((er = t.searchConfig) == null ? void 0 : er.radius) || 5e3,
      language: ((cr = t.searchConfig) == null ? void 0 : cr.language) || "en"
    };
    await b(bt);
  }, [p, ge, r, L, V, ie, b, t.searchConfig]), Me = en((we) => {
    var Ge, bt;
    ie == null || ie.track("nearby_place_clicked", {
      category: r,
      place_id: we.place_id,
      place_name: we.name
    }), (bt = (Ge = t.navigation) == null ? void 0 : Ge.onPlaceClick) == null || bt.call(Ge, we, r);
  }, [r, ie, t.navigation]), ke = en((we) => {
    var Ge, bt;
    we.formatted_phone_number && (ie == null || ie.track("nearby_call_clicked", {
      category: r,
      place_id: we.place_id,
      phone_number: we.formatted_phone_number
    }), (bt = (Ge = t.navigation) == null ? void 0 : Ge.onCallClick) == null || bt.call(Ge, we.formatted_phone_number, we));
  }, [r, ie, t.navigation]), ut = en((we) => {
    var Ge, bt;
    ie == null || ie.track("nearby_directions_clicked", {
      category: r,
      place_id: we.place_id
    }), (bt = (Ge = t.navigation) == null ? void 0 : Ge.onDirectionsClick) == null || bt.call(Ge, we);
  }, [r, ie, t.navigation]), Ue = en((we) => {
    var Ge, bt;
    ie == null || ie.track("nearby_booking_clicked", {
      category: r,
      place_id: we.place_id
    }), (bt = (Ge = t.navigation) == null ? void 0 : Ge.onBookingClick) == null || bt.call(Ge, we, r);
  }, [r, ie, t.navigation]);
  $o(() => {
    var we;
    S.length > 0 && ((we = t.features) != null && we.enablePhotos) && W(S);
  }, [S, W, (Kt = t.features) == null ? void 0 : Kt.enablePhotos]), $o(() => {
    var we;
    p && ((we = t.searchConfig) != null && we.autoSearch) && (console.log("🚀 Auto-searching for category:", r), $e(r));
  }, [p]), $o(() => {
    !p && !g && (console.log("🌍 Requesting location on mount"), m());
  }, []), $o(() => {
    var we;
    I && (i == null || i(I), (we = t.errorHandler) == null || we.logError(I, "NearByAssistant search"));
  }, [I, i, t.errorHandler]);
  const mt = g || x;
  return /* @__PURE__ */ de.jsx(
    ye,
    {
      title: ((Lt = t.layout) == null ? void 0 : Lt.title) || Q("nearby_places"),
      showBackButton: (Ut = t.layout) == null ? void 0 : Ut.showBackButton,
      className: (ar = t.layout) == null ? void 0 : ar.className,
      children: /* @__PURE__ */ de.jsxs("div", { className: _n("w-full h-full flex flex-col", n), children: [
        /* @__PURE__ */ de.jsx("div", { className: "sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-4", children: /* @__PURE__ */ de.jsx("div", { className: "flex gap-2 overflow-x-auto max-w-full", children: (qe = t.categories) == null ? void 0 : qe.map((we) => /* @__PURE__ */ de.jsx(
          AR,
          {
            category: we,
            isActive: r === we.id,
            onClick: () => $e(we.id),
            disabled: !p || mt
          },
          we.id
        )) }) }),
        /* @__PURE__ */ de.jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: [
          Ie && ((Mt = t.searchConfig) == null ? void 0 : Mt.enableSpecialtyFilter) && /* @__PURE__ */ de.jsx("div", { className: "max-w-2xl mx-auto mb-4", children: /* @__PURE__ */ de.jsx(
            BR,
            {
              specialties: ge.specialties,
              selectedSpecialty: s,
              onSpecialtyChange: Oe,
              isOpen: f,
              onToggle: () => d(!f),
              placeholder: Q("select_specialty")
            }
          ) }),
          !p && g && /* @__PURE__ */ de.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ de.jsxs("div", { className: "animate-pulse", children: [
            /* @__PURE__ */ de.jsx(Qs, { size: 48, className: "mx-auto text-gray-300 mb-4" }),
            /* @__PURE__ */ de.jsx("p", { className: "text-gray-600", children: Q("getting_location") })
          ] }) }),
          x && /* @__PURE__ */ de.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ de.jsxs("div", { className: "animate-pulse", children: [
            /* @__PURE__ */ de.jsx("div", { className: "mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4", children: /* @__PURE__ */ de.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-2 border-blue-300 border-t-blue-600" }) }),
            /* @__PURE__ */ de.jsx("p", { className: "text-blue-600", children: Q("loading_nearby_places") })
          ] }) }),
          I && !mt && /* @__PURE__ */ de.jsxs("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ de.jsx("div", { className: "bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ de.jsx(Qs, { size: 40, className: "text-red-300" }) }),
            /* @__PURE__ */ de.jsx("p", { className: "text-red-600 font-medium", children: "Search Service Error" }),
            /* @__PURE__ */ de.jsx("p", { className: "text-sm text-red-400 mt-1 max-w-md mx-auto", children: I }),
            /* @__PURE__ */ de.jsx(
              "button",
              {
                onClick: () => $e(r),
                className: "mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
                children: "Try Again"
              }
            )
          ] }),
          /* @__PURE__ */ de.jsxs("div", { className: "max-w-2xl mx-auto space-y-3 pb-16", children: [
            S.map((we) => {
              var Ge;
              return /* @__PURE__ */ de.jsx(
                PR,
                {
                  place: we,
                  categoryType: r,
                  onDetailsClick: () => Me(we),
                  onCallClick: () => ke(we),
                  onDirectionsClick: () => ut(we),
                  onBookingClick: () => Ue(we),
                  photoUrl: $[we.place_id],
                  showBooking: ((Ge = t.features) == null ? void 0 : Ge.enableBooking) && r === "doctor"
                },
                we.place_id
              );
            }),
            !mt && S.length === 0 && p && !I && /* @__PURE__ */ de.jsxs("div", { className: "text-center py-12", children: [
              /* @__PURE__ */ de.jsx("div", { className: "bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ de.jsx(Qs, { size: 40, className: "text-gray-300" }) }),
              /* @__PURE__ */ de.jsx("p", { className: "text-gray-600 font-medium", children: Q("no_places_found_nearby") }),
              /* @__PURE__ */ de.jsx("p", { className: "text-sm text-gray-400 mt-1", children: Q("try_expanding_search") })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, lP = (e, n) => {
  const [i, t] = ln({}), r = en(async (c) => {
    try {
      return await e.getPhotoUrl(c);
    } catch (f) {
      throw n == null || n.logError(f, "usePhotoUrl.getPhotoUrl"), f;
    }
  }, [e, n]), o = en(async (c) => {
    const f = c.filter((p) => p.photos && p.photos.length > 0);
    if (f.length === 0)
      return;
    const d = f.map(async (p) => {
      try {
        const g = await r(p.photos[0].photo_reference);
        return { placeId: p.place_id, photoUrl: g };
      } catch (g) {
        return n == null || n.logError(g, `loadPlacePhotos for ${p.place_id}`), { placeId: p.place_id, photoUrl: "" };
      }
    });
    try {
      const p = await Promise.allSettled(d), g = {};
      p.forEach((m) => {
        m.status === "fulfilled" && m.value.photoUrl && (g[m.value.placeId] = m.value.photoUrl);
      }), t((m) => ({ ...m, ...g }));
    } catch (p) {
      n == null || n.logError(p, "loadPlacePhotos batch operation");
    }
  }, [r, n]), s = en(() => {
    t({});
  }, []);
  return {
    placePhotos: i,
    loadPlacePhotos: o,
    getPhotoUrl: r,
    resetPhotos: s
  };
}, Wv = {
  doctor: [
    {
      place_id: "demo_doctor_1",
      name: "City Medical Center",
      vicinity: "123 Medical Ave, Downtown",
      rating: 4.5,
      formatted_phone_number: "+1 (555) 123-4567",
      types: ["doctor", "health", "establishment"]
    },
    {
      place_id: "demo_doctor_2",
      name: "Family Health Clinic",
      vicinity: "456 Health St, Medical District",
      rating: 4.2,
      formatted_phone_number: "+1 (555) 234-5678",
      types: ["doctor", "health", "establishment"]
    }
  ],
  hospital: [
    {
      place_id: "demo_hospital_1",
      name: "Central Hospital",
      vicinity: "789 Emergency Blvd, Hospital District",
      rating: 4,
      formatted_phone_number: "+1 (555) 345-6789",
      types: ["hospital", "health", "establishment"]
    }
  ],
  pharmacy: [
    {
      place_id: "demo_pharmacy_1",
      name: "HealthMart Pharmacy",
      vicinity: "321 Pharmacy Lane, Shopping Center",
      rating: 4.3,
      formatted_phone_number: "+1 (555) 456-7890",
      types: ["pharmacy", "health", "establishment"]
    }
  ],
  lab: [
    {
      place_id: "demo_lab_1",
      name: "Diagnostic Labs Inc",
      vicinity: "654 Lab Street, Medical Complex",
      rating: 4.1,
      formatted_phone_number: "+1 (555) 567-8901",
      types: ["health", "establishment"]
    }
  ],
  restaurant: [
    {
      place_id: "demo_restaurant_1",
      name: "Bella Vista Restaurant",
      vicinity: "987 Food Ave, Restaurant Row",
      rating: 4.6,
      formatted_phone_number: "+1 (555) 678-9012",
      types: ["restaurant", "food", "establishment"]
    }
  ],
  cafe: [
    {
      place_id: "demo_cafe_1",
      name: "Morning Brew Coffee",
      vicinity: "111 Coffee St, Arts District",
      rating: 4.7,
      formatted_phone_number: "+1 (555) 789-0123",
      types: ["cafe", "food", "establishment"]
    }
  ]
}, uP = () => ({
  searchPlaces: async (e) => {
    await new Promise((r) => setTimeout(r, 1e3)), console.log("🔍 Demo Search:", e);
    const n = Wv[e.type] || [];
    let i = n;
    return e.keyword && (i = n.filter(
      (r) => r.name.toLowerCase().includes(e.keyword.toLowerCase()) || r.vicinity.toLowerCase().includes(e.keyword.toLowerCase())
    )), [...i].sort(() => Math.random() - 0.5);
  },
  getPhotoUrl: async (e) => `https://picsum.photos/400/300?random=${e}`,
  getPlaceDetails: async (e) => {
    for (const n of Object.values(Wv)) {
      const i = n.find((t) => t.place_id === e);
      if (i)
        return {
          ...i,
          // Add some additional details for the detail view
          formatted_address: i.vicinity,
          geometry: { location: { lat: 37.7749, lng: -122.4194 } },
          opening_hours: { open_now: !0 },
          website: "https://example.com",
          photos: [{ photo_reference: `photo_${e}`, height: 400, width: 600 }]
        };
    }
    return {
      place_id: e,
      name: "Demo Place",
      vicinity: "Demo Location",
      formatted_address: "123 Demo Street, Demo City",
      geometry: { location: { lat: 37.7749, lng: -122.4194 } },
      opening_hours: { open_now: !0 },
      website: "https://example.com",
      photos: [{ photo_reference: `photo_${e}`, height: 400, width: 600 }]
    };
  }
});
export {
  AR as CategoryButton,
  ER as DefaultLayout,
  cP as NearByAssistant,
  PR as PlaceCard,
  RR as PlaceImage,
  BR as SpecialtyDropdown,
  kR as StarRating,
  LR as createDefaultAnalyticsService,
  jR as createDefaultConfig,
  UR as createDefaultErrorHandler,
  zR as createDefaultI18nService,
  NR as createDefaultLocationService,
  uP as createDemoSearchService,
  MR as defaultCategories,
  TR as defaultSpecialties,
  FR as defaultTheme,
  $v as defaultTranslations,
  CR as useLocation,
  _R as useNearbySearch,
  lP as usePhotoUrl
};
