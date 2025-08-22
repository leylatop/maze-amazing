var Tn = Object.defineProperty;
var jn = (t, r, e) => r in t ? Tn(t, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[r] = e;
var sr = (t, r, e) => jn(t, typeof r != "symbol" ? r + "" : r, e);
import "./modulepreload-polyfill-B5Qt9EMX.js";
/**
 * @license
 * MIT License
 * 
 * Copyright (c) 2014-present, Lee Byron and other contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var kt = "delete"
  , m = 5
  , k = 1 << m
  , R = k - 1
  , y = {};
function dr() {
  return {
    value: !1
  }
}
function P(t) {
  t && (t.value = !0)
}
function qr() {}
function ct(t) {
  return t.size === void 0 && (t.size = t.__iterate(be)),
  t.size
}
function rt(t, r) {
  if (typeof r != "number") {
    var e = r >>> 0;
    if ("" + e !== r || e === 4294967295)
      return NaN;
    r = e
  }
  return r < 0 ? ct(t) + r : r
}
function be() {
  return !0
}
function tr(t, r, e) {
  return (t === 0 && !$e(t) || e !== void 0 && t <= -e) && (r === void 0 || e !== void 0 && r >= e)
}
function Pt(t, r) {
  return Re(t, r, 0)
}
function rr(t, r) {
  return Re(t, r, r)
}
function Re(t, r, e) {
  return t === void 0 ? e : $e(t) ? r === 1 / 0 ? r : Math.max(0, r + t) | 0 : r === void 0 || r === t ? t : Math.min(r, t) | 0
}
function $e(t) {
  return t < 0 || t === 0 && 1 / t === -1 / 0
}
var Te = "@@__IMMUTABLE_ITERABLE__@@";
function B(t) {
  return !!(t && t[Te])
}
var je = "@@__IMMUTABLE_KEYED__@@";
function z(t) {
  return !!(t && t[je])
}
var Le = "@@__IMMUTABLE_INDEXED__@@";
function D(t) {
  return !!(t && t[Le])
}
function Ar(t) {
  return z(t) || D(t)
}
var q = function(r) {
  return B(r) ? r : U(r)
}
  , K = function(t) {
  function r(e) {
    return z(e) ? e : nt(e)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r
}(q)
  , at = function(t) {
  function r(e) {
    return D(e) ? e : F(e)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r
}(q)
  , gt = function(t) {
  function r(e) {
    return B(e) && !Ar(e) ? e : Et(e)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r
}(q);
q.Keyed = K;
q.Indexed = at;
q.Set = gt;
var Ne = "@@__IMMUTABLE_SEQ__@@";
function br(t) {
  return !!(t && t[Ne])
}
var De = "@@__IMMUTABLE_RECORD__@@";
function St(t) {
  return !!(t && t[De])
}
function Z(t) {
  return B(t) || St(t)
}
var mt = "@@__IMMUTABLE_ORDERED__@@";
function x(t) {
  return !!(t && t[mt])
}
var Ct = 0
  , W = 1
  , C = 2
  , yr = typeof Symbol == "function" && Symbol.iterator
  , Be = "@@iterator"
  , er = yr || Be
  , l = function(r) {
  this.next = r
};
l.prototype.toString = function() {
  return "[Iterator]"
}
;
l.KEYS = Ct;
l.VALUES = W;
l.ENTRIES = C;
l.prototype.inspect = l.prototype.toSource = function() {
  return this.toString()
}
;
l.prototype[er] = function() {
  return this
}
;
function E(t, r, e, n) {
  var i = t === 0 ? r : t === 1 ? e : [r, e];
  return n ? n.value = i : n = {
    value: i,
    done: !1
  },
  n
}
function T() {
  return {
    value: void 0,
    done: !0
  }
}
function Ue(t) {
  return Array.isArray(t) ? !0 : !!nr(t)
}
function ue(t) {
  return t && typeof t.next == "function"
}
function lr(t) {
  var r = nr(t);
  return r && r.call(t)
}
function nr(t) {
  var r = t && (yr && t[yr] || t[Be]);
  if (typeof r == "function")
    return r
}
function Ln(t) {
  var r = nr(t);
  return r && r === t.entries
}
function Nn(t) {
  var r = nr(t);
  return r && r === t.keys
}
var wt = Object.prototype.hasOwnProperty;
function ke(t) {
  return Array.isArray(t) || typeof t == "string" ? !0 : t && typeof t == "object" && Number.isInteger(t.length) && t.length >= 0 && (t.length === 0 ? Object.keys(t).length === 1 : t.hasOwnProperty(t.length - 1))
}
var U = function(t) {
  function r(e) {
    return e == null ? $r() : Z(e) ? e.toSeq() : Bn(e)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.toSeq = function() {
    return this
  }
  ,
  r.prototype.toString = function() {
    return this.__toString("Seq {", "}")
  }
  ,
  r.prototype.cacheResult = function() {
    return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(),
    this.size = this._cache.length),
    this
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this._cache;
    if (u) {
      for (var o = u.length, s = 0; s !== o; ) {
        var a = u[i ? o - ++s : s++];
        if (n(a[1], a[0], this) === !1)
          break
      }
      return s
    }
    return this.__iterateUncached(n, i)
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = this._cache;
    if (u) {
      var o = u.length
        , s = 0;
      return new l(function() {
        if (s === o)
          return T();
        var a = u[i ? o - ++s : s++];
        return E(n, a[0], a[1])
      }
      )
    }
    return this.__iteratorUncached(n, i)
  }
  ,
  r
}(q)
  , nt = function(t) {
  function r(e) {
    return e == null ? $r().toKeyedSeq() : B(e) ? z(e) ? e.toSeq() : e.fromEntrySeq() : St(e) ? e.toSeq() : Tr(e)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.toKeyedSeq = function() {
    return this
  }
  ,
  r
}(U)
  , F = function(t) {
  function r(e) {
    return e == null ? $r() : B(e) ? z(e) ? e.entrySeq() : e.toIndexedSeq() : St(e) ? e.toSeq().entrySeq() : Pe(e)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.of = function() {
    return r(arguments)
  }
  ,
  r.prototype.toIndexedSeq = function() {
    return this
  }
  ,
  r.prototype.toString = function() {
    return this.__toString("Seq [", "]")
  }
  ,
  r
}(U)
  , Et = function(t) {
  function r(e) {
    return (B(e) && !Ar(e) ? e : F(e)).toSetSeq()
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.of = function() {
    return r(arguments)
  }
  ,
  r.prototype.toSetSeq = function() {
    return this
  }
  ,
  r
}(U);
U.isSeq = br;
U.Keyed = nt;
U.Set = Et;
U.Indexed = F;
U.prototype[Ne] = !0;
var st = function(t) {
  function r(e) {
    this._array = e,
    this.size = e.length
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.get = function(n, i) {
    return this.has(n) ? this._array[rt(this, n)] : i
  }
  ,
  r.prototype.__iterate = function(n, i) {
    for (var u = this._array, o = u.length, s = 0; s !== o; ) {
      var a = i ? o - ++s : s++;
      if (n(u[a], a, this) === !1)
        break
    }
    return s
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = this._array
      , o = u.length
      , s = 0;
    return new l(function() {
      if (s === o)
        return T();
      var a = i ? o - ++s : s++;
      return E(n, a, u[a])
    }
    )
  }
  ,
  r
}(F)
  , Rr = function(t) {
  function r(e) {
    var n = Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []);
    this._object = e,
    this._keys = n,
    this.size = n.length
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.get = function(n, i) {
    return i !== void 0 && !this.has(n) ? i : this._object[n]
  }
  ,
  r.prototype.has = function(n) {
    return wt.call(this._object, n)
  }
  ,
  r.prototype.__iterate = function(n, i) {
    for (var u = this._object, o = this._keys, s = o.length, a = 0; a !== s; ) {
      var f = o[i ? s - ++a : a++];
      if (n(u[f], f, this) === !1)
        break
    }
    return a
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = this._object
      , o = this._keys
      , s = o.length
      , a = 0;
    return new l(function() {
      if (a === s)
        return T();
      var f = o[i ? s - ++a : a++];
      return E(n, f, u[f])
    }
    )
  }
  ,
  r
}(nt);
Rr.prototype[mt] = !0;
var Dn = function(t) {
  function r(e) {
    this._collection = e,
    this.size = e.length || e.size
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.__iterateUncached = function(n, i) {
    if (i)
      return this.cacheResult().__iterate(n, i);
    var u = this._collection
      , o = lr(u)
      , s = 0;
    if (ue(o))
      for (var a; !(a = o.next()).done && n(a.value, s++, this) !== !1; )
        ;
    return s
  }
  ,
  r.prototype.__iteratorUncached = function(n, i) {
    if (i)
      return this.cacheResult().__iterator(n, i);
    var u = this._collection
      , o = lr(u);
    if (!ue(o))
      return new l(T);
    var s = 0;
    return new l(function() {
      var a = o.next();
      return a.done ? a : E(n, s++, a.value)
    }
    )
  }
  ,
  r
}(F), oe;
function $r() {
  return oe || (oe = new st([]))
}
function Tr(t) {
  var r = jr(t);
  if (r)
    return r.fromEntrySeq();
  if (typeof t == "object")
    return new Rr(t);
  throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: " + t)
}
function Pe(t) {
  var r = jr(t);
  if (r)
    return r;
  throw new TypeError("Expected Array or collection object of values: " + t)
}
function Bn(t) {
  var r = jr(t);
  if (r)
    return Ln(t) ? r.fromEntrySeq() : Nn(t) ? r.toSetSeq() : r;
  if (typeof t == "object")
    return new Rr(t);
  throw new TypeError("Expected Array or collection object of values, or keyed object: " + t)
}
function jr(t) {
  return ke(t) ? new st(t) : Ue(t) ? new Dn(t) : void 0
}
var Ce = "@@__IMMUTABLE_MAP__@@";
function Lr(t) {
  return !!(t && t[Ce])
}
function Ke(t) {
  return Lr(t) && x(t)
}
function se(t) {
  return !!(t && typeof t.equals == "function" && typeof t.hashCode == "function")
}
function N(t, r) {
  if (t === r || t !== t && r !== r)
    return !0;
  if (!t || !r)
    return !1;
  if (typeof t.valueOf == "function" && typeof r.valueOf == "function") {
    if (t = t.valueOf(),
    r = r.valueOf(),
    t === r || t !== t && r !== r)
      return !0;
    if (!t || !r)
      return !1
  }
  return !!(se(t) && se(r) && t.equals(r))
}
var qt = typeof Math.imul == "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function(r, e) {
  r |= 0,
  e |= 0;
  var n = r & 65535
    , i = e & 65535;
  return n * i + ((r >>> 16) * i + n * (e >>> 16) << 16 >>> 0) | 0
}
;
function ir(t) {
  return t >>> 1 & 1073741824 | t & 3221225471
}
var Un = Object.prototype.valueOf;
function j(t) {
  if (t == null)
    return ae(t);
  if (typeof t.hashCode == "function")
    return ir(t.hashCode(t));
  var r = Fn(t);
  if (r == null)
    return ae(r);
  switch (typeof r) {
  case "boolean":
    return r ? 1108378657 : 1108378656;
  case "number":
    return kn(r);
  case "string":
    return r.length > Yn ? Pn(r) : gr(r);
  case "object":
  case "function":
    return Kn(r);
  case "symbol":
    return Cn(r);
  default:
    if (typeof r.toString == "function")
      return gr(r.toString());
    throw new Error("Value type " + typeof r + " cannot be hashed.")
  }
}
function ae(t) {
  return t === null ? 1108378658 : 1108378659
}
function kn(t) {
  if (t !== t || t === 1 / 0)
    return 0;
  var r = t | 0;
  for (r !== t && (r ^= t * 4294967295); t > 4294967295; )
    t /= 4294967295,
    r ^= t;
  return ir(r)
}
function Pn(t) {
  var r = hr[t];
  return r === void 0 && (r = gr(t),
  fr === Hn && (fr = 0,
  hr = {}),
  fr++,
  hr[t] = r),
  r
}
function gr(t) {
  for (var r = 0, e = 0; e < t.length; e++)
    r = 31 * r + t.charCodeAt(e) | 0;
  return ir(r)
}
function Cn(t) {
  var r = ce[t];
  return r !== void 0 || (r = We(),
  ce[t] = r),
  r
}
function Kn(t) {
  var r;
  if (Sr && (r = mr.get(t),
  r !== void 0) || (r = t[ot],
  r !== void 0) || !he && (r = t.propertyIsEnumerable && t.propertyIsEnumerable[ot],
  r !== void 0 || (r = Wn(t),
  r !== void 0)))
    return r;
  if (r = We(),
  Sr)
    mr.set(t, r);
  else {
    if (fe !== void 0 && fe(t) === !1)
      throw new Error("Non-extensible objects are not allowed as keys.");
    if (he)
      Object.defineProperty(t, ot, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      });
    else if (t.propertyIsEnumerable !== void 0 && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable)
      t.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
      }
      ,
      t.propertyIsEnumerable[ot] = r;
    else if (t.nodeType !== void 0)
      t[ot] = r;
    else
      throw new Error("Unable to set a non-enumerable property on object.")
  }
  return r
}
var fe = Object.isExtensible
  , he = function() {
  try {
    return Object.defineProperty({}, "@", {}),
    !0
  } catch {
    return !1
  }
}();
function Wn(t) {
  if (t && t.nodeType > 0)
    switch (t.nodeType) {
    case 1:
      return t.uniqueID;
    case 9:
      return t.documentElement && t.documentElement.uniqueID
    }
}
function Fn(t) {
  return t.valueOf !== Un && typeof t.valueOf == "function" ? t.valueOf(t) : t
}
function We() {
  var t = ++ar;
  return ar & 1073741824 && (ar = 0),
  t
}
var Sr = typeof WeakMap == "function", mr;
Sr && (mr = new WeakMap);
var ce = Object.create(null)
  , ar = 0
  , ot = "__immutablehash__";
typeof Symbol == "function" && (ot = Symbol(ot));
var Yn = 16
  , Hn = 255
  , fr = 0
  , hr = {}
  , ur = function(t) {
  function r(e, n) {
    this._iter = e,
    this._useKeys = n,
    this.size = e.size
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.get = function(n, i) {
    return this._iter.get(n, i)
  }
  ,
  r.prototype.has = function(n) {
    return this._iter.has(n)
  }
  ,
  r.prototype.valueSeq = function() {
    return this._iter.valueSeq()
  }
  ,
  r.prototype.reverse = function() {
    var n = this
      , i = Nr(this, !0);
    return this._useKeys || (i.valueSeq = function() {
      return n._iter.toSeq().reverse()
    }
    ),
    i
  }
  ,
  r.prototype.map = function(n, i) {
    var u = this
      , o = xe(this, n, i);
    return this._useKeys || (o.valueSeq = function() {
      return u._iter.toSeq().map(n, i)
    }
    ),
    o
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this;
    return this._iter.__iterate(function(o, s) {
      return n(o, s, u)
    }, i)
  }
  ,
  r.prototype.__iterator = function(n, i) {
    return this._iter.__iterator(n, i)
  }
  ,
  r
}(nt);
ur.prototype[mt] = !0;
var Fe = function(t) {
  function r(e) {
    this._iter = e,
    this.size = e.size
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.includes = function(n) {
    return this._iter.includes(n)
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this
      , o = 0;
    return i && ct(this),
    this._iter.__iterate(function(s) {
      return n(s, i ? u.size - ++o : o++, u)
    }, i)
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = this
      , o = this._iter.__iterator(W, i)
      , s = 0;
    return i && ct(this),
    new l(function() {
      var a = o.next();
      return a.done ? a : E(n, i ? u.size - ++s : s++, a.value, a)
    }
    )
  }
  ,
  r
}(F)
  , Ye = function(t) {
  function r(e) {
    this._iter = e,
    this.size = e.size
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.has = function(n) {
    return this._iter.includes(n)
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this;
    return this._iter.__iterate(function(o) {
      return n(o, o, u)
    }, i)
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = this._iter.__iterator(W, i);
    return new l(function() {
      var o = u.next();
      return o.done ? o : E(n, o.value, o.value, o)
    }
    )
  }
  ,
  r
}(Et)
  , He = function(t) {
  function r(e) {
    this._iter = e,
    this.size = e.size
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.entrySeq = function() {
    return this._iter.toSeq()
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this;
    return this._iter.__iterate(function(o) {
      if (o) {
        pe(o);
        var s = B(o);
        return n(s ? o.get(1) : o[1], s ? o.get(0) : o[0], u)
      }
    }, i)
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = this._iter.__iterator(W, i);
    return new l(function() {
      for (; ; ) {
        var o = u.next();
        if (o.done)
          return o;
        var s = o.value;
        if (s) {
          pe(s);
          var a = B(s);
          return E(n, a ? s.get(0) : s[0], a ? s.get(1) : s[1], o)
        }
      }
    }
    )
  }
  ,
  r
}(nt);
Fe.prototype.cacheResult = ur.prototype.cacheResult = Ye.prototype.cacheResult = He.prototype.cacheResult = Ur;
function Je(t) {
  var r = G(t);
  return r._iter = t,
  r.size = t.size,
  r.flip = function() {
    return t
  }
  ,
  r.reverse = function() {
    var e = t.reverse.apply(this);
    return e.flip = function() {
      return t.reverse()
    }
    ,
    e
  }
  ,
  r.has = function(e) {
    return t.includes(e)
  }
  ,
  r.includes = function(e) {
    return t.has(e)
  }
  ,
  r.cacheResult = Ur,
  r.__iterateUncached = function(e, n) {
    var i = this;
    return t.__iterate(function(u, o) {
      return e(o, u, i) !== !1
    }, n)
  }
  ,
  r.__iteratorUncached = function(e, n) {
    if (e === C) {
      var i = t.__iterator(e, n);
      return new l(function() {
        var u = i.next();
        if (!u.done) {
          var o = u.value[0];
          u.value[0] = u.value[1],
          u.value[1] = o
        }
        return u
      }
      )
    }
    return t.__iterator(e === W ? Ct : W, n)
  }
  ,
  r
}
function xe(t, r, e) {
  var n = G(t);
  return n.size = t.size,
  n.has = function(i) {
    return t.has(i)
  }
  ,
  n.get = function(i, u) {
    var o = t.get(i, y);
    return o === y ? u : r.call(e, o, i, t)
  }
  ,
  n.__iterateUncached = function(i, u) {
    var o = this;
    return t.__iterate(function(s, a, f) {
      return i(r.call(e, s, a, f), a, o) !== !1
    }, u)
  }
  ,
  n.__iteratorUncached = function(i, u) {
    var o = t.__iterator(C, u);
    return new l(function() {
      var s = o.next();
      if (s.done)
        return s;
      var a = s.value
        , f = a[0];
      return E(i, f, r.call(e, a[1], f, t), s)
    }
    )
  }
  ,
  n
}
function Nr(t, r) {
  var e = this
    , n = G(t);
  return n._iter = t,
  n.size = t.size,
  n.reverse = function() {
    return t
  }
  ,
  t.flip && (n.flip = function() {
    var i = Je(t);
    return i.reverse = function() {
      return t.flip()
    }
    ,
    i
  }
  ),
  n.get = function(i, u) {
    return t.get(r ? i : -1 - i, u)
  }
  ,
  n.has = function(i) {
    return t.has(r ? i : -1 - i)
  }
  ,
  n.includes = function(i) {
    return t.includes(i)
  }
  ,
  n.cacheResult = Ur,
  n.__iterate = function(i, u) {
    var o = this
      , s = 0;
    return u && ct(t),
    t.__iterate(function(a, f) {
      return i(a, r ? f : u ? o.size - ++s : s++, o)
    }, !u)
  }
  ,
  n.__iterator = function(i, u) {
    var o = 0;
    u && ct(t);
    var s = t.__iterator(C, !u);
    return new l(function() {
      var a = s.next();
      if (a.done)
        return a;
      var f = a.value;
      return E(i, r ? f[0] : u ? e.size - ++o : o++, f[1], a)
    }
    )
  }
  ,
  n
}
function Ze(t, r, e, n) {
  var i = G(t);
  return n && (i.has = function(u) {
    var o = t.get(u, y);
    return o !== y && !!r.call(e, o, u, t)
  }
  ,
  i.get = function(u, o) {
    var s = t.get(u, y);
    return s !== y && r.call(e, s, u, t) ? s : o
  }
  ),
  i.__iterateUncached = function(u, o) {
    var s = this
      , a = 0;
    return t.__iterate(function(f, h, c) {
      if (r.call(e, f, h, c))
        return a++,
        u(f, n ? h : a - 1, s)
    }, o),
    a
  }
  ,
  i.__iteratorUncached = function(u, o) {
    var s = t.__iterator(C, o)
      , a = 0;
    return new l(function() {
      for (; ; ) {
        var f = s.next();
        if (f.done)
          return f;
        var h = f.value
          , c = h[0]
          , _ = h[1];
        if (r.call(e, _, c, t))
          return E(u, n ? c : a++, _, f)
      }
    }
    )
  }
  ,
  i
}
function Jn(t, r, e) {
  var n = it().asMutable();
  return t.__iterate(function(i, u) {
    n.update(r.call(e, i, u, t), 0, function(o) {
      return o + 1
    })
  }),
  n.asImmutable()
}
function xn(t, r, e) {
  var n = z(t)
    , i = (x(t) ? Q() : it()).asMutable();
  t.__iterate(function(o, s) {
    i.update(r.call(e, o, s, t), function(a) {
      return a = a || [],
      a.push(n ? [s, o] : o),
      a
    })
  });
  var u = Br(t);
  return i.map(function(o) {
    return g(t, u(o))
  }).asImmutable()
}
function Zn(t, r, e) {
  var n = z(t)
    , i = [[], []];
  t.__iterate(function(o, s) {
    i[r.call(e, o, s, t) ? 1 : 0].push(n ? [s, o] : o)
  });
  var u = Br(t);
  return i.map(function(o) {
    return g(t, u(o))
  })
}
function Dr(t, r, e, n) {
  var i = t.size;
  if (tr(r, e, i))
    return t;
  if (typeof i > "u" && (r < 0 || e < 0))
    return Dr(t.toSeq().cacheResult(), r, e, n);
  var u = Pt(r, i), o = rr(e, i), s = o - u, a;
  s === s && (a = s < 0 ? 0 : s);
  var f = G(t);
  return f.size = a === 0 ? a : t.size && a || void 0,
  !n && br(t) && a >= 0 && (f.get = function(h, c) {
    return h = rt(this, h),
    h >= 0 && h < a ? t.get(h + u, c) : c
  }
  ),
  f.__iterateUncached = function(h, c) {
    var _ = this;
    if (a === 0)
      return 0;
    if (c)
      return this.cacheResult().__iterate(h, c);
    var p = 0
      , v = !0
      , d = 0;
    return t.__iterate(function(b, Y) {
      if (!(v && (v = p++ < u)))
        return d++,
        h(b, n ? Y : d - 1, _) !== !1 && d !== a
    }),
    d
  }
  ,
  f.__iteratorUncached = function(h, c) {
    if (a !== 0 && c)
      return this.cacheResult().__iterator(h, c);
    if (a === 0)
      return new l(T);
    var _ = t.__iterator(h, c)
      , p = 0
      , v = 0;
    return new l(function() {
      for (; p++ < u; )
        _.next();
      if (++v > a)
        return T();
      var d = _.next();
      return n || h === W || d.done ? d : h === Ct ? E(h, v - 1, void 0, d) : E(h, v - 1, d.value[1], d)
    }
    )
  }
  ,
  f
}
function Gn(t, r, e) {
  var n = G(t);
  return n.__iterateUncached = function(i, u) {
    var o = this;
    if (u)
      return this.cacheResult().__iterate(i, u);
    var s = 0;
    return t.__iterate(function(a, f, h) {
      return r.call(e, a, f, h) && ++s && i(a, f, o)
    }),
    s
  }
  ,
  n.__iteratorUncached = function(i, u) {
    var o = this;
    if (u)
      return this.cacheResult().__iterator(i, u);
    var s = t.__iterator(C, u)
      , a = !0;
    return new l(function() {
      if (!a)
        return T();
      var f = s.next();
      if (f.done)
        return f;
      var h = f.value
        , c = h[0]
        , _ = h[1];
      return r.call(e, _, c, o) ? i === C ? f : E(i, c, _, f) : (a = !1,
      T())
    }
    )
  }
  ,
  n
}
function Ge(t, r, e, n) {
  var i = G(t);
  return i.__iterateUncached = function(u, o) {
    var s = this;
    if (o)
      return this.cacheResult().__iterate(u, o);
    var a = !0
      , f = 0;
    return t.__iterate(function(h, c, _) {
      if (!(a && (a = r.call(e, h, c, _))))
        return f++,
        u(h, n ? c : f - 1, s)
    }),
    f
  }
  ,
  i.__iteratorUncached = function(u, o) {
    var s = this;
    if (o)
      return this.cacheResult().__iterator(u, o);
    var a = t.__iterator(C, o)
      , f = !0
      , h = 0;
    return new l(function() {
      var c, _, p;
      do {
        if (c = a.next(),
        c.done)
          return n || u === W ? c : u === Ct ? E(u, h++, void 0, c) : E(u, h++, c.value[1], c);
        var v = c.value;
        _ = v[0],
        p = v[1],
        f && (f = r.call(e, p, _, s))
      } while (f);
      return u === C ? c : E(u, _, p, c)
    }
    )
  }
  ,
  i
}
function Xn(t, r) {
  var e = z(t)
    , n = [t].concat(r).map(function(o) {
    return B(o) ? e && (o = K(o)) : o = e ? Tr(o) : Pe(Array.isArray(o) ? o : [o]),
    o
  }).filter(function(o) {
    return o.size !== 0
  });
  if (n.length === 0)
    return t;
  if (n.length === 1) {
    var i = n[0];
    if (i === t || e && z(i) || D(t) && D(i))
      return i
  }
  var u = new st(n);
  return e ? u = u.toKeyedSeq() : D(t) || (u = u.toSetSeq()),
  u = u.flatten(!0),
  u.size = n.reduce(function(o, s) {
    if (o !== void 0) {
      var a = s.size;
      if (a !== void 0)
        return o + a
    }
  }, 0),
  u
}
function Xe(t, r, e) {
  var n = G(t);
  return n.__iterateUncached = function(i, u) {
    if (u)
      return this.cacheResult().__iterate(i, u);
    var o = 0
      , s = !1;
    function a(f, h) {
      f.__iterate(function(c, _) {
        return (!r || h < r) && B(c) ? a(c, h + 1) : (o++,
        i(c, e ? _ : o - 1, n) === !1 && (s = !0)),
        !s
      }, u)
    }
    return a(t, 0),
    o
  }
  ,
  n.__iteratorUncached = function(i, u) {
    if (u)
      return this.cacheResult().__iterator(i, u);
    var o = t.__iterator(i, u)
      , s = []
      , a = 0;
    return new l(function() {
      for (; o; ) {
        var f = o.next();
        if (f.done !== !1) {
          o = s.pop();
          continue
        }
        var h = f.value;
        if (i === C && (h = h[1]),
        (!r || s.length < r) && B(h))
          s.push(o),
          o = h.__iterator(i, u);
        else
          return e ? f : E(i, a++, h, f)
      }
      return T()
    }
    )
  }
  ,
  n
}
function Qn(t, r, e) {
  var n = Br(t);
  return t.toSeq().map(function(i, u) {
    return n(r.call(e, i, u, t))
  }).flatten(!0)
}
function Vn(t, r) {
  var e = G(t);
  return e.size = t.size && t.size * 2 - 1,
  e.__iterateUncached = function(n, i) {
    var u = this
      , o = 0;
    return t.__iterate(function(s) {
      return (!o || n(r, o++, u) !== !1) && n(s, o++, u) !== !1
    }, i),
    o
  }
  ,
  e.__iteratorUncached = function(n, i) {
    var u = t.__iterator(W, i), o = 0, s;
    return new l(function() {
      return (!s || o % 2) && (s = u.next(),
      s.done) ? s : o % 2 ? E(n, o++, r) : E(n, o++, s.value, s)
    }
    )
  }
  ,
  e
}
function _t(t, r, e) {
  r || (r = Qe);
  var n = z(t)
    , i = 0
    , u = t.toSeq().map(function(o, s) {
    return [s, o, i++, e ? e(o, s, t) : o]
  }).valueSeq().toArray();
  return u.sort(function(o, s) {
    return r(o[3], s[3]) || o[2] - s[2]
  }).forEach(n ? function(o, s) {
    u[s].length = 2
  }
  : function(o, s) {
    u[s] = o[1]
  }
  ),
  n ? nt(u) : D(t) ? F(u) : Et(u)
}
function Ht(t, r, e) {
  if (r || (r = Qe),
  e) {
    var n = t.toSeq().map(function(i, u) {
      return [i, e(i, u, t)]
    }).reduce(function(i, u) {
      return _e(r, i[1], u[1]) ? u : i
    });
    return n && n[0]
  }
  return t.reduce(function(i, u) {
    return _e(r, i, u) ? u : i
  })
}
function _e(t, r, e) {
  var n = t(e, r);
  return n === 0 && e !== r && (e == null || e !== e) || n > 0
}
function Jt(t, r, e, n) {
  var i = G(t)
    , u = new st(e).map(function(o) {
    return o.size
  });
  return i.size = n ? u.max() : u.min(),
  i.__iterate = function(o, s) {
    for (var a = this.__iterator(W, s), f, h = 0; !(f = a.next()).done && o(f.value, h++, this) !== !1; )
      ;
    return h
  }
  ,
  i.__iteratorUncached = function(o, s) {
    var a = e.map(function(c) {
      return c = q(c),
      lr(s ? c.reverse() : c)
    })
      , f = 0
      , h = !1;
    return new l(function() {
      var c;
      return h || (c = a.map(function(_) {
        return _.next()
      }),
      h = n ? c.every(function(_) {
        return _.done
      }) : c.some(function(_) {
        return _.done
      })),
      h ? T() : E(o, f++, r.apply(null, c.map(function(_) {
        return _.value
      })))
    }
    )
  }
  ,
  i
}
function g(t, r) {
  return t === r ? t : br(t) ? r : t.constructor(r)
}
function pe(t) {
  if (t !== Object(t))
    throw new TypeError("Expected [K, V] tuple: " + t)
}
function Br(t) {
  return z(t) ? K : D(t) ? at : gt
}
function G(t) {
  return Object.create((z(t) ? nt : D(t) ? F : Et).prototype)
}
function Ur() {
  return this._iter.cacheResult ? (this._iter.cacheResult(),
  this.size = this._iter.size,
  this) : U.prototype.cacheResult.call(this)
}
function Qe(t, r) {
  return t === void 0 && r === void 0 ? 0 : t === void 0 ? 1 : r === void 0 ? -1 : t > r ? 1 : t < r ? -1 : 0
}
function H(t, r) {
  r = r || 0;
  for (var e = Math.max(0, t.length - r), n = new Array(e), i = 0; i < e; i++)
    n[i] = t[i + r];
  return n
}
function $t(t, r) {
  if (!t)
    throw new Error(r)
}
function L(t) {
  $t(t !== 1 / 0, "Cannot perform this action with an infinite size.")
}
function Ve(t) {
  if (ke(t) && typeof t != "string")
    return t;
  if (x(t))
    return t.toArray();
  throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: " + t)
}
var ti = Object.prototype.toString;
function ri(t) {
  if (!t || typeof t != "object" || ti.call(t) !== "[object Object]")
    return !1;
  var r = Object.getPrototypeOf(t);
  if (r === null)
    return !0;
  for (var e = r, n = Object.getPrototypeOf(r); n !== null; )
    e = n,
    n = Object.getPrototypeOf(e);
  return e === r
}
function et(t) {
  return typeof t == "object" && (Z(t) || Array.isArray(t) || ri(t))
}
function jt(t) {
  try {
    return typeof t == "string" ? JSON.stringify(t) : String(t)
  } catch {
    return JSON.stringify(t)
  }
}
function ei(t, r) {
  return Z(t) ? t.has(r) : et(t) && wt.call(t, r)
}
function tn(t, r, e) {
  return Z(t) ? t.get(r, e) : ei(t, r) ? typeof t.get == "function" ? t.get(r) : t[r] : e
}
function Xt(t) {
  if (Array.isArray(t))
    return H(t);
  var r = {};
  for (var e in t)
    wt.call(t, e) && (r[e] = t[e]);
  return r
}
function ni(t, r) {
  if (!et(t))
    throw new TypeError("Cannot update non-data-structure value: " + t);
  if (Z(t)) {
    if (!t.remove)
      throw new TypeError("Cannot update immutable value without .remove() method: " + t);
    return t.remove(r)
  }
  if (!wt.call(t, r))
    return t;
  var e = Xt(t);
  return Array.isArray(e) ? e.splice(r, 1) : delete e[r],
  e
}
function ii(t, r, e) {
  if (!et(t))
    throw new TypeError("Cannot update non-data-structure value: " + t);
  if (Z(t)) {
    if (!t.set)
      throw new TypeError("Cannot update immutable value without .set() method: " + t);
    return t.set(r, e)
  }
  if (wt.call(t, r) && e === t[r])
    return t;
  var n = Xt(t);
  return n[r] = e,
  n
}
function zt(t, r, e, n) {
  n || (n = e,
  e = void 0);
  var i = rn(Z(t), t, Ve(r), 0, e, n);
  return i === y ? e : i
}
function rn(t, r, e, n, i, u) {
  var o = r === y;
  if (n === e.length) {
    var s = o ? i : r
      , a = u(s);
    return a === s ? r : a
  }
  if (!o && !et(r))
    throw new TypeError("Cannot update within non-data-structure value in path [" + e.slice(0, n).map(jt) + "]: " + r);
  var f = e[n]
    , h = o ? y : tn(r, f, y)
    , c = rn(h === y ? t : Z(h), h, e, n + 1, i, u);
  return c === h ? r : c === y ? ni(r, f) : ii(o ? t ? J() : {} : r, f, c)
}
function ui(t, r, e) {
  return zt(t, r, y, function() {
    return e
  })
}
function kr(t, r) {
  return ui(this, t, r)
}
function oi(t, r) {
  return zt(t, r, function() {
    return y
  })
}
function Pr(t) {
  return oi(this, t)
}
function en(t, r, e, n) {
  return zt(t, [r], e, n)
}
function Cr(t, r, e) {
  return arguments.length === 1 ? t(this) : en(this, t, r, e)
}
function Kr(t, r, e) {
  return zt(this, t, r, e)
}
function nn() {
  for (var t = [], r = arguments.length; r--; )
    t[r] = arguments[r];
  return on(this, t)
}
function un(t) {
  for (var r = [], e = arguments.length - 1; e-- > 0; )
    r[e] = arguments[e + 1];
  if (typeof t != "function")
    throw new TypeError("Invalid merger function: " + t);
  return on(this, r, t)
}
function on(t, r, e) {
  for (var n = [], i = 0; i < r.length; i++) {
    var u = K(r[i]);
    u.size !== 0 && n.push(u)
  }
  return n.length === 0 ? t : t.toSeq().size === 0 && !t.__ownerID && n.length === 1 ? t.constructor(n[0]) : t.withMutations(function(o) {
    for (var s = e ? function(f, h) {
      en(o, h, y, function(c) {
        return c === y ? f : e(c, f, h)
      })
    }
    : function(f, h) {
      o.set(h, f)
    }
    , a = 0; a < n.length; a++)
      n[a].forEach(s)
  })
}
function Wr(t, r, e) {
  return Fr(t, r, si(e))
}
function Fr(t, r, e) {
  if (!et(t))
    throw new TypeError("Cannot merge into non-data-structure value: " + t);
  if (Z(t))
    return typeof e == "function" && t.mergeWith ? t.mergeWith.apply(t, [e].concat(r)) : t.merge ? t.merge.apply(t, r) : t.concat.apply(t, r);
  for (var n = Array.isArray(t), i = t, u = n ? at : K, o = n ? function(a) {
    i === t && (i = Xt(i)),
    i.push(a)
  }
  : function(a, f) {
    var h = wt.call(i, f)
      , c = h && e ? e(i[f], a, f) : a;
    (!h || c !== i[f]) && (i === t && (i = Xt(i)),
    i[f] = c)
  }
  , s = 0; s < r.length; s++)
    u(r[s]).forEach(o);
  return i
}
function si(t) {
  function r(e, n, i) {
    return et(e) && et(n) && ai(e, n) ? Fr(e, [n], r) : t ? t(e, n, i) : n
  }
  return r
}
function ai(t, r) {
  var e = U(t)
    , n = U(r);
  return D(e) === D(n) && z(e) === z(n)
}
function sn() {
  for (var t = [], r = arguments.length; r--; )
    t[r] = arguments[r];
  return Wr(this, t)
}
function an(t) {
  for (var r = [], e = arguments.length - 1; e-- > 0; )
    r[e] = arguments[e + 1];
  return Wr(this, r, t)
}
function Yr(t) {
  for (var r = [], e = arguments.length - 1; e-- > 0; )
    r[e] = arguments[e + 1];
  return zt(this, t, J(), function(n) {
    return Fr(n, r)
  })
}
function Hr(t) {
  for (var r = [], e = arguments.length - 1; e-- > 0; )
    r[e] = arguments[e + 1];
  return zt(this, t, J(), function(n) {
    return Wr(n, r)
  })
}
function Kt(t) {
  var r = this.asMutable();
  return t(r),
  r.wasAltered() ? r.__ensureOwner(this.__ownerID) : this
}
function Wt() {
  return this.__ownerID ? this : this.__ensureOwner(new qr)
}
function Ft() {
  return this.__ensureOwner()
}
function Jr() {
  return this.__altered
}
var it = function(t) {
  function r(e) {
    return e == null ? J() : Lr(e) && !x(e) ? e : J().withMutations(function(n) {
      var i = t(e);
      L(i.size),
      i.forEach(function(u, o) {
        return n.set(o, u)
      })
    })
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.toString = function() {
    return this.__toString("Map {", "}")
  }
  ,
  r.prototype.get = function(n, i) {
    return this._root ? this._root.get(0, void 0, n, i) : i
  }
  ,
  r.prototype.set = function(n, i) {
    return ye(this, n, i)
  }
  ,
  r.prototype.remove = function(n) {
    return ye(this, n, y)
  }
  ,
  r.prototype.deleteAll = function(n) {
    var i = q(n);
    return i.size === 0 ? this : this.withMutations(function(u) {
      i.forEach(function(o) {
        return u.remove(o)
      })
    })
  }
  ,
  r.prototype.clear = function() {
    return this.size === 0 ? this : this.__ownerID ? (this.size = 0,
    this._root = null,
    this.__hash = void 0,
    this.__altered = !0,
    this) : J()
  }
  ,
  r.prototype.sort = function(n) {
    return Q(_t(this, n))
  }
  ,
  r.prototype.sortBy = function(n, i) {
    return Q(_t(this, i, n))
  }
  ,
  r.prototype.map = function(n, i) {
    var u = this;
    return this.withMutations(function(o) {
      o.forEach(function(s, a) {
        o.set(a, n.call(i, s, a, u))
      })
    })
  }
  ,
  r.prototype.__iterator = function(n, i) {
    return new fi(this,n,i)
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this
      , o = 0;
    return this._root && this._root.iterate(function(s) {
      return o++,
      n(s[1], s[0], u)
    }, i),
    o
  }
  ,
  r.prototype.__ensureOwner = function(n) {
    return n === this.__ownerID ? this : n ? xr(this.size, this._root, n, this.__hash) : this.size === 0 ? J() : (this.__ownerID = n,
    this.__altered = !1,
    this)
  }
  ,
  r
}(K);
it.isMap = Lr;
var w = it.prototype;
w[Ce] = !0;
w[kt] = w.remove;
w.removeAll = w.deleteAll;
w.setIn = kr;
w.removeIn = w.deleteIn = Pr;
w.update = Cr;
w.updateIn = Kr;
w.merge = w.concat = nn;
w.mergeWith = un;
w.mergeDeep = sn;
w.mergeDeepWith = an;
w.mergeIn = Yr;
w.mergeDeepIn = Hr;
w.withMutations = Kt;
w.wasAltered = Jr;
w.asImmutable = Ft;
w["@@transducer/init"] = w.asMutable = Wt;
w["@@transducer/step"] = function(t, r) {
  return t.set(r[0], r[1])
}
;
w["@@transducer/result"] = function(t) {
  return t.asImmutable()
}
;
var Lt = function(r, e) {
  this.ownerID = r,
  this.entries = e
};
Lt.prototype.get = function(r, e, n, i) {
  for (var u = this.entries, o = 0, s = u.length; o < s; o++)
    if (N(n, u[o][0]))
      return u[o][1];
  return i
}
;
Lt.prototype.update = function(r, e, n, i, u, o, s) {
  for (var a = u === y, f = this.entries, h = 0, c = f.length; h < c && !N(i, f[h][0]); h++)
    ;
  var _ = h < c;
  if (_ ? f[h][1] === u : a)
    return this;
  if (P(s),
  (a || !_) && P(o),
  !(a && f.length === 1)) {
    if (!_ && !a && f.length >= di)
      return hi(r, f, i, u);
    var p = r && r === this.ownerID
      , v = p ? f : H(f);
    return _ ? a ? h === c - 1 ? v.pop() : v[h] = v.pop() : v[h] = [i, u] : v.push([i, u]),
    p ? (this.entries = v,
    this) : new Lt(r,v)
  }
}
;
var pt = function(r, e, n) {
  this.ownerID = r,
  this.bitmap = e,
  this.nodes = n
};
pt.prototype.get = function(r, e, n, i) {
  e === void 0 && (e = j(n));
  var u = 1 << ((r === 0 ? e : e >>> r) & R)
    , o = this.bitmap;
  return o & u ? this.nodes[fn(o & u - 1)].get(r + m, e, n, i) : i
}
;
pt.prototype.update = function(r, e, n, i, u, o, s) {
  n === void 0 && (n = j(i));
  var a = (e === 0 ? n : n >>> e) & R
    , f = 1 << a
    , h = this.bitmap
    , c = (h & f) !== 0;
  if (!c && u === y)
    return this;
  var _ = fn(h & f - 1)
    , p = this.nodes
    , v = c ? p[_] : void 0
    , d = Zr(v, r, e + m, n, i, u, o, s);
  if (d === v)
    return this;
  if (!c && d && p.length >= yi)
    return _i(r, p, h, a, d);
  if (c && !d && p.length === 2 && le(p[_ ^ 1]))
    return p[_ ^ 1];
  if (c && d && p.length === 1 && le(d))
    return d;
  var b = r && r === this.ownerID
    , Y = c ? d ? h : h ^ f : h | f
    , ut = c ? d ? hn(p, _, d, b) : vi(p, _, b) : pi(p, _, d, b);
  return b ? (this.bitmap = Y,
  this.nodes = ut,
  this) : new pt(r,Y,ut)
}
;
var Nt = function(r, e, n) {
  this.ownerID = r,
  this.count = e,
  this.nodes = n
};
Nt.prototype.get = function(r, e, n, i) {
  e === void 0 && (e = j(n));
  var u = (r === 0 ? e : e >>> r) & R
    , o = this.nodes[u];
  return o ? o.get(r + m, e, n, i) : i
}
;
Nt.prototype.update = function(r, e, n, i, u, o, s) {
  n === void 0 && (n = j(i));
  var a = (e === 0 ? n : n >>> e) & R
    , f = u === y
    , h = this.nodes
    , c = h[a];
  if (f && !c)
    return this;
  var _ = Zr(c, r, e + m, n, i, u, o, s);
  if (_ === c)
    return this;
  var p = this.count;
  if (!c)
    p++;
  else if (!_ && (p--,
  p < li))
    return ci(r, h, p, a);
  var v = r && r === this.ownerID
    , d = hn(h, a, _, v);
  return v ? (this.count = p,
  this.nodes = d,
  this) : new Nt(r,p,d)
}
;
var vt = function(r, e, n) {
  this.ownerID = r,
  this.keyHash = e,
  this.entries = n
};
vt.prototype.get = function(r, e, n, i) {
  for (var u = this.entries, o = 0, s = u.length; o < s; o++)
    if (N(n, u[o][0]))
      return u[o][1];
  return i
}
;
vt.prototype.update = function(r, e, n, i, u, o, s) {
  n === void 0 && (n = j(i));
  var a = u === y;
  if (n !== this.keyHash)
    return a ? this : (P(s),
    P(o),
    Gr(this, r, e, n, [i, u]));
  for (var f = this.entries, h = 0, c = f.length; h < c && !N(i, f[h][0]); h++)
    ;
  var _ = h < c;
  if (_ ? f[h][1] === u : a)
    return this;
  if (P(s),
  (a || !_) && P(o),
  a && c === 2)
    return new X(r,this.keyHash,f[h ^ 1]);
  var p = r && r === this.ownerID
    , v = p ? f : H(f);
  return _ ? a ? h === c - 1 ? v.pop() : v[h] = v.pop() : v[h] = [i, u] : v.push([i, u]),
  p ? (this.entries = v,
  this) : new vt(r,this.keyHash,v)
}
;
var X = function(r, e, n) {
  this.ownerID = r,
  this.keyHash = e,
  this.entry = n
};
X.prototype.get = function(r, e, n, i) {
  return N(n, this.entry[0]) ? this.entry[1] : i
}
;
X.prototype.update = function(r, e, n, i, u, o, s) {
  var a = u === y
    , f = N(i, this.entry[0]);
  if (f ? u === this.entry[1] : a)
    return this;
  if (P(s),
  a) {
    P(o);
    return
  }
  return f ? r && r === this.ownerID ? (this.entry[1] = u,
  this) : new X(r,this.keyHash,[i, u]) : (P(o),
  Gr(this, r, e, j(i), [i, u]))
}
;
Lt.prototype.iterate = vt.prototype.iterate = function(t, r) {
  for (var e = this.entries, n = 0, i = e.length - 1; n <= i; n++)
    if (t(e[r ? i - n : n]) === !1)
      return !1
}
;
pt.prototype.iterate = Nt.prototype.iterate = function(t, r) {
  for (var e = this.nodes, n = 0, i = e.length - 1; n <= i; n++) {
    var u = e[r ? i - n : n];
    if (u && u.iterate(t, r) === !1)
      return !1
  }
}
;
X.prototype.iterate = function(t, r) {
  return t(this.entry)
}
;
var fi = function(t) {
  function r(e, n, i) {
    this._type = n,
    this._reverse = i,
    this._stack = e._root && ve(e._root)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.next = function() {
    for (var n = this._type, i = this._stack; i; ) {
      var u = i.node
        , o = i.index++
        , s = void 0;
      if (u.entry) {
        if (o === 0)
          return cr(n, u.entry)
      } else if (u.entries) {
        if (s = u.entries.length - 1,
        o <= s)
          return cr(n, u.entries[this._reverse ? s - o : o])
      } else if (s = u.nodes.length - 1,
      o <= s) {
        var a = u.nodes[this._reverse ? s - o : o];
        if (a) {
          if (a.entry)
            return cr(n, a.entry);
          i = this._stack = ve(a, i)
        }
        continue
      }
      i = this._stack = this._stack.__prev
    }
    return T()
  }
  ,
  r
}(l);
function cr(t, r) {
  return E(t, r[0], r[1])
}
function ve(t, r) {
  return {
    node: t,
    index: 0,
    __prev: r
  }
}
function xr(t, r, e, n) {
  var i = Object.create(w);
  return i.size = t,
  i._root = r,
  i.__ownerID = e,
  i.__hash = n,
  i.__altered = !1,
  i
}
var de;
function J() {
  return de || (de = xr(0))
}
function ye(t, r, e) {
  var n, i;
  if (t._root) {
    var u = dr()
      , o = dr();
    if (n = Zr(t._root, t.__ownerID, 0, void 0, r, e, u, o),
    !o.value)
      return t;
    i = t.size + (u.value ? e === y ? -1 : 1 : 0)
  } else {
    if (e === y)
      return t;
    i = 1,
    n = new Lt(t.__ownerID,[[r, e]])
  }
  return t.__ownerID ? (t.size = i,
  t._root = n,
  t.__hash = void 0,
  t.__altered = !0,
  t) : n ? xr(i, n) : J()
}
function Zr(t, r, e, n, i, u, o, s) {
  return t ? t.update(r, e, n, i, u, o, s) : u === y ? t : (P(s),
  P(o),
  new X(r,n,[i, u]))
}
function le(t) {
  return t.constructor === X || t.constructor === vt
}
function Gr(t, r, e, n, i) {
  if (t.keyHash === n)
    return new vt(r,n,[t.entry, i]);
  var u = (e === 0 ? t.keyHash : t.keyHash >>> e) & R, o = (e === 0 ? n : n >>> e) & R, s, a = u === o ? [Gr(t, r, e + m, n, i)] : (s = new X(r,n,i),
  u < o ? [t, s] : [s, t]);
  return new pt(r,1 << u | 1 << o,a)
}
function hi(t, r, e, n) {
  t || (t = new qr);
  for (var i = new X(t,j(e),[e, n]), u = 0; u < r.length; u++) {
    var o = r[u];
    i = i.update(t, 0, void 0, o[0], o[1])
  }
  return i
}
function ci(t, r, e, n) {
  for (var i = 0, u = 0, o = new Array(e), s = 0, a = 1, f = r.length; s < f; s++,
  a <<= 1) {
    var h = r[s];
    h !== void 0 && s !== n && (i |= a,
    o[u++] = h)
  }
  return new pt(t,i,o)
}
function _i(t, r, e, n, i) {
  for (var u = 0, o = new Array(k), s = 0; e !== 0; s++,
  e >>>= 1)
    o[s] = e & 1 ? r[u++] : void 0;
  return o[n] = i,
  new Nt(t,u + 1,o)
}
function fn(t) {
  return t -= t >> 1 & 1431655765,
  t = (t & 858993459) + (t >> 2 & 858993459),
  t = t + (t >> 4) & 252645135,
  t += t >> 8,
  t += t >> 16,
  t & 127
}
function hn(t, r, e, n) {
  var i = n ? t : H(t);
  return i[r] = e,
  i
}
function pi(t, r, e, n) {
  var i = t.length + 1;
  if (n && r + 1 === i)
    return t[r] = e,
    t;
  for (var u = new Array(i), o = 0, s = 0; s < i; s++)
    s === r ? (u[s] = e,
    o = -1) : u[s] = t[s + o];
  return u
}
function vi(t, r, e) {
  var n = t.length - 1;
  if (e && r === n)
    return t.pop(),
    t;
  for (var i = new Array(n), u = 0, o = 0; o < n; o++)
    o === r && (u = 1),
    i[o] = t[o + u];
  return i
}
var di = k / 4
  , yi = k / 2
  , li = k / 4
  , cn = "@@__IMMUTABLE_LIST__@@";
function _n(t) {
  return !!(t && t[cn])
}
var Ot = function(t) {
  function r(e) {
    var n = Gt();
    if (e == null)
      return n;
    if (_n(e))
      return e;
    var i = t(e)
      , u = i.size;
    return u === 0 ? n : (L(u),
    u > 0 && u < k ? Dt(0, u, m, null, new tt(i.toArray())) : n.withMutations(function(o) {
      o.setSize(u),
      i.forEach(function(s, a) {
        return o.set(a, s)
      })
    }))
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.of = function() {
    return this(arguments)
  }
  ,
  r.prototype.toString = function() {
    return this.__toString("List [", "]")
  }
  ,
  r.prototype.get = function(n, i) {
    if (n = rt(this, n),
    n >= 0 && n < this.size) {
      n += this._origin;
      var u = pn(this, n);
      return u && u.array[n & R]
    }
    return i
  }
  ,
  r.prototype.set = function(n, i) {
    return gi(this, n, i)
  }
  ,
  r.prototype.remove = function(n) {
    return this.has(n) ? n === 0 ? this.shift() : n === this.size - 1 ? this.pop() : this.splice(n, 1) : this
  }
  ,
  r.prototype.insert = function(n, i) {
    return this.splice(n, 0, i)
  }
  ,
  r.prototype.clear = function() {
    return this.size === 0 ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0,
    this._level = m,
    this._root = this._tail = this.__hash = void 0,
    this.__altered = !0,
    this) : Gt()
  }
  ,
  r.prototype.push = function() {
    var n = arguments
      , i = this.size;
    return this.withMutations(function(u) {
      V(u, 0, i + n.length);
      for (var o = 0; o < n.length; o++)
        u.set(i + o, n[o])
    })
  }
  ,
  r.prototype.pop = function() {
    return V(this, 0, -1)
  }
  ,
  r.prototype.unshift = function() {
    var n = arguments;
    return this.withMutations(function(i) {
      V(i, -n.length);
      for (var u = 0; u < n.length; u++)
        i.set(u, n[u])
    })
  }
  ,
  r.prototype.shift = function() {
    return V(this, 1)
  }
  ,
  r.prototype.concat = function() {
    for (var n = arguments, i = [], u = 0; u < arguments.length; u++) {
      var o = n[u]
        , s = t(typeof o != "string" && Ue(o) ? o : [o]);
      s.size !== 0 && i.push(s)
    }
    return i.length === 0 ? this : this.size === 0 && !this.__ownerID && i.length === 1 ? this.constructor(i[0]) : this.withMutations(function(a) {
      i.forEach(function(f) {
        return f.forEach(function(h) {
          return a.push(h)
        })
      })
    })
  }
  ,
  r.prototype.setSize = function(n) {
    return V(this, 0, n)
  }
  ,
  r.prototype.map = function(n, i) {
    var u = this;
    return this.withMutations(function(o) {
      for (var s = 0; s < u.size; s++)
        o.set(s, n.call(i, o.get(s), s, u))
    })
  }
  ,
  r.prototype.slice = function(n, i) {
    var u = this.size;
    return tr(n, i, u) ? this : V(this, Pt(n, u), rr(i, u))
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = i ? this.size : 0
      , o = ge(this, i);
    return new l(function() {
      var s = o();
      return s === Tt ? T() : E(n, i ? --u : u++, s)
    }
    )
  }
  ,
  r.prototype.__iterate = function(n, i) {
    for (var u = i ? this.size : 0, o = ge(this, i), s; (s = o()) !== Tt && n(s, i ? --u : u++, this) !== !1; )
      ;
    return u
  }
  ,
  r.prototype.__ensureOwner = function(n) {
    return n === this.__ownerID ? this : n ? Dt(this._origin, this._capacity, this._level, this._root, this._tail, n, this.__hash) : this.size === 0 ? Gt() : (this.__ownerID = n,
    this.__altered = !1,
    this)
  }
  ,
  r
}(at);
Ot.isList = _n;
var O = Ot.prototype;
O[cn] = !0;
O[kt] = O.remove;
O.merge = O.concat;
O.setIn = kr;
O.deleteIn = O.removeIn = Pr;
O.update = Cr;
O.updateIn = Kr;
O.mergeIn = Yr;
O.mergeDeepIn = Hr;
O.withMutations = Kt;
O.wasAltered = Jr;
O.asImmutable = Ft;
O["@@transducer/init"] = O.asMutable = Wt;
O["@@transducer/step"] = function(t, r) {
  return t.push(r)
}
;
O["@@transducer/result"] = function(t) {
  return t.asImmutable()
}
;
var tt = function(r, e) {
  this.array = r,
  this.ownerID = e
};
tt.prototype.removeBefore = function(r, e, n) {
  if (n === e ? 1 << e : this.array.length === 0)
    return this;
  var i = n >>> e & R;
  if (i >= this.array.length)
    return new tt([],r);
  var u = i === 0, o;
  if (e > 0) {
    var s = this.array[i];
    if (o = s && s.removeBefore(r, e - m, n),
    o === s && u)
      return this
  }
  if (u && !o)
    return this;
  var a = dt(this, r);
  if (!u)
    for (var f = 0; f < i; f++)
      a.array[f] = void 0;
  return o && (a.array[i] = o),
  a
}
;
tt.prototype.removeAfter = function(r, e, n) {
  if (n === (e ? 1 << e : 0) || this.array.length === 0)
    return this;
  var i = n - 1 >>> e & R;
  if (i >= this.array.length)
    return this;
  var u;
  if (e > 0) {
    var o = this.array[i];
    if (u = o && o.removeAfter(r, e - m, n),
    u === o && i === this.array.length - 1)
      return this
  }
  var s = dt(this, r);
  return s.array.splice(i + 1),
  u && (s.array[i] = u),
  s
}
;
var Tt = {};
function ge(t, r) {
  var e = t._origin
    , n = t._capacity
    , i = Bt(n)
    , u = t._tail;
  return o(t._root, t._level, 0);
  function o(f, h, c) {
    return h === 0 ? s(f, c) : a(f, h, c)
  }
  function s(f, h) {
    var c = h === i ? u && u.array : f && f.array
      , _ = h > e ? 0 : e - h
      , p = n - h;
    return p > k && (p = k),
    function() {
      if (_ === p)
        return Tt;
      var v = r ? --p : _++;
      return c && c[v]
    }
  }
  function a(f, h, c) {
    var _, p = f && f.array, v = c > e ? 0 : e - c >> h, d = (n - c >> h) + 1;
    return d > k && (d = k),
    function() {
      for (; ; ) {
        if (_) {
          var b = _();
          if (b !== Tt)
            return b;
          _ = null
        }
        if (v === d)
          return Tt;
        var Y = r ? --d : v++;
        _ = o(p && p[Y], h - m, c + (Y << h))
      }
    }
  }
}
function Dt(t, r, e, n, i, u, o) {
  var s = Object.create(O);
  return s.size = r - t,
  s._origin = t,
  s._capacity = r,
  s._level = e,
  s._root = n,
  s._tail = i,
  s.__ownerID = u,
  s.__hash = o,
  s.__altered = !1,
  s
}
function Gt() {
  return Dt(0, 0, m)
}
function gi(t, r, e) {
  if (r = rt(t, r),
  r !== r)
    return t;
  if (r >= t.size || r < 0)
    return t.withMutations(function(o) {
      r < 0 ? V(o, r).set(0, e) : V(o, 0, r + 1).set(r, e)
    });
  r += t._origin;
  var n = t._tail
    , i = t._root
    , u = dr();
  return r >= Bt(t._capacity) ? n = wr(n, t.__ownerID, 0, r, e, u) : i = wr(i, t.__ownerID, t._level, r, e, u),
  u.value ? t.__ownerID ? (t._root = i,
  t._tail = n,
  t.__hash = void 0,
  t.__altered = !0,
  t) : Dt(t._origin, t._capacity, t._level, i, n) : t
}
function wr(t, r, e, n, i, u) {
  var o = n >>> e & R
    , s = t && o < t.array.length;
  if (!s && i === void 0)
    return t;
  var a;
  if (e > 0) {
    var f = t && t.array[o]
      , h = wr(f, r, e - m, n, i, u);
    return h === f ? t : (a = dt(t, r),
    a.array[o] = h,
    a)
  }
  return s && t.array[o] === i ? t : (u && P(u),
  a = dt(t, r),
  i === void 0 && o === a.array.length - 1 ? a.array.pop() : a.array[o] = i,
  a)
}
function dt(t, r) {
  return r && t && r === t.ownerID ? t : new tt(t ? t.array.slice() : [],r)
}
function pn(t, r) {
  if (r >= Bt(t._capacity))
    return t._tail;
  if (r < 1 << t._level + m) {
    for (var e = t._root, n = t._level; e && n > 0; )
      e = e.array[r >>> n & R],
      n -= m;
    return e
  }
}
function V(t, r, e) {
  r !== void 0 && (r |= 0),
  e !== void 0 && (e |= 0);
  var n = t.__ownerID || new qr
    , i = t._origin
    , u = t._capacity
    , o = i + r
    , s = e === void 0 ? u : e < 0 ? u + e : i + e;
  if (o === i && s === u)
    return t;
  if (o >= s)
    return t.clear();
  for (var a = t._level, f = t._root, h = 0; o + h < 0; )
    f = new tt(f && f.array.length ? [void 0, f] : [],n),
    a += m,
    h += 1 << a;
  h && (o += h,
  i += h,
  s += h,
  u += h);
  for (var c = Bt(u), _ = Bt(s); _ >= 1 << a + m; )
    f = new tt(f && f.array.length ? [f] : [],n),
    a += m;
  var p = t._tail
    , v = _ < c ? pn(t, s - 1) : _ > c ? new tt([],n) : p;
  if (p && _ > c && o < u && p.array.length) {
    f = dt(f, n);
    for (var d = f, b = a; b > m; b -= m) {
      var Y = c >>> b & R;
      d = d.array[Y] = dt(d.array[Y], n)
    }
    d.array[c >>> m & R] = p
  }
  if (s < u && (v = v && v.removeAfter(n, 0, s)),
  o >= _)
    o -= _,
    s -= _,
    a = m,
    f = null,
    v = v && v.removeBefore(n, 0, o);
  else if (o > i || _ < c) {
    for (h = 0; f; ) {
      var ut = o >>> a & R;
      if (ut !== _ >>> a & R)
        break;
      ut && (h += (1 << a) * ut),
      a -= m,
      f = f.array[ut]
    }
    f && o > i && (f = f.removeBefore(n, a, o - h)),
    f && _ < c && (f = f.removeAfter(n, a, _ - h)),
    h && (o -= h,
    s -= h)
  }
  return t.__ownerID ? (t.size = s - o,
  t._origin = o,
  t._capacity = s,
  t._level = a,
  t._root = f,
  t._tail = v,
  t.__hash = void 0,
  t.__altered = !0,
  t) : Dt(o, s, a, f, v)
}
function Bt(t) {
  return t < k ? 0 : t - 1 >>> m << m
}
var Q = function(t) {
  function r(e) {
    return e == null ? At() : Ke(e) ? e : At().withMutations(function(n) {
      var i = K(e);
      L(i.size),
      i.forEach(function(u, o) {
        return n.set(o, u)
      })
    })
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.of = function() {
    return this(arguments)
  }
  ,
  r.prototype.toString = function() {
    return this.__toString("OrderedMap {", "}")
  }
  ,
  r.prototype.get = function(n, i) {
    var u = this._map.get(n);
    return u !== void 0 ? this._list.get(u)[1] : i
  }
  ,
  r.prototype.clear = function() {
    return this.size === 0 ? this : this.__ownerID ? (this.size = 0,
    this._map.clear(),
    this._list.clear(),
    this.__altered = !0,
    this) : At()
  }
  ,
  r.prototype.set = function(n, i) {
    return me(this, n, i)
  }
  ,
  r.prototype.remove = function(n) {
    return me(this, n, y)
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this;
    return this._list.__iterate(function(o) {
      return o && n(o[1], o[0], u)
    }, i)
  }
  ,
  r.prototype.__iterator = function(n, i) {
    return this._list.fromEntrySeq().__iterator(n, i)
  }
  ,
  r.prototype.__ensureOwner = function(n) {
    if (n === this.__ownerID)
      return this;
    var i = this._map.__ensureOwner(n)
      , u = this._list.__ensureOwner(n);
    return n ? Xr(i, u, n, this.__hash) : this.size === 0 ? At() : (this.__ownerID = n,
    this.__altered = !1,
    this._map = i,
    this._list = u,
    this)
  }
  ,
  r
}(it);
Q.isOrderedMap = Ke;
Q.prototype[mt] = !0;
Q.prototype[kt] = Q.prototype.remove;
function Xr(t, r, e, n) {
  var i = Object.create(Q.prototype);
  return i.size = t ? t.size : 0,
  i._map = t,
  i._list = r,
  i.__ownerID = e,
  i.__hash = n,
  i.__altered = !1,
  i
}
var Se;
function At() {
  return Se || (Se = Xr(J(), Gt()))
}
function me(t, r, e) {
  var n = t._map, i = t._list, u = n.get(r), o = u !== void 0, s, a;
  if (e === y) {
    if (!o)
      return t;
    i.size >= k && i.size >= n.size * 2 ? (a = i.filter(function(f, h) {
      return f !== void 0 && u !== h
    }),
    s = a.toKeyedSeq().map(function(f) {
      return f[0]
    }).flip().toMap(),
    t.__ownerID && (s.__ownerID = a.__ownerID = t.__ownerID)) : (s = n.remove(r),
    a = u === i.size - 1 ? i.pop() : i.set(u, void 0))
  } else if (o) {
    if (e === i.get(u)[1])
      return t;
    s = n,
    a = i.set(u, [r, e])
  } else
    s = n.set(r, i.size),
    a = i.set(i.size, [r, e]);
  return t.__ownerID ? (t.size = s.size,
  t._map = s,
  t._list = a,
  t.__hash = void 0,
  t.__altered = !0,
  t) : Xr(s, a)
}
var vn = "@@__IMMUTABLE_STACK__@@";
function Er(t) {
  return !!(t && t[vn])
}
var Qr = function(t) {
  function r(e) {
    return e == null ? xt() : Er(e) ? e : xt().pushAll(e)
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.of = function() {
    return this(arguments)
  }
  ,
  r.prototype.toString = function() {
    return this.__toString("Stack [", "]")
  }
  ,
  r.prototype.get = function(n, i) {
    var u = this._head;
    for (n = rt(this, n); u && n--; )
      u = u.next;
    return u ? u.value : i
  }
  ,
  r.prototype.peek = function() {
    return this._head && this._head.value
  }
  ,
  r.prototype.push = function() {
    var n = arguments;
    if (arguments.length === 0)
      return this;
    for (var i = this.size + arguments.length, u = this._head, o = arguments.length - 1; o >= 0; o--)
      u = {
        value: n[o],
        next: u
      };
    return this.__ownerID ? (this.size = i,
    this._head = u,
    this.__hash = void 0,
    this.__altered = !0,
    this) : bt(i, u)
  }
  ,
  r.prototype.pushAll = function(n) {
    if (n = t(n),
    n.size === 0)
      return this;
    if (this.size === 0 && Er(n))
      return n;
    L(n.size);
    var i = this.size
      , u = this._head;
    return n.__iterate(function(o) {
      i++,
      u = {
        value: o,
        next: u
      }
    }, !0),
    this.__ownerID ? (this.size = i,
    this._head = u,
    this.__hash = void 0,
    this.__altered = !0,
    this) : bt(i, u)
  }
  ,
  r.prototype.pop = function() {
    return this.slice(1)
  }
  ,
  r.prototype.clear = function() {
    return this.size === 0 ? this : this.__ownerID ? (this.size = 0,
    this._head = void 0,
    this.__hash = void 0,
    this.__altered = !0,
    this) : xt()
  }
  ,
  r.prototype.slice = function(n, i) {
    if (tr(n, i, this.size))
      return this;
    var u = Pt(n, this.size)
      , o = rr(i, this.size);
    if (o !== this.size)
      return t.prototype.slice.call(this, n, i);
    for (var s = this.size - u, a = this._head; u--; )
      a = a.next;
    return this.__ownerID ? (this.size = s,
    this._head = a,
    this.__hash = void 0,
    this.__altered = !0,
    this) : bt(s, a)
  }
  ,
  r.prototype.__ensureOwner = function(n) {
    return n === this.__ownerID ? this : n ? bt(this.size, this._head, n, this.__hash) : this.size === 0 ? xt() : (this.__ownerID = n,
    this.__altered = !1,
    this)
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this;
    if (i)
      return new st(this.toArray()).__iterate(function(a, f) {
        return n(a, f, u)
      }, i);
    for (var o = 0, s = this._head; s && n(s.value, o++, this) !== !1; )
      s = s.next;
    return o
  }
  ,
  r.prototype.__iterator = function(n, i) {
    if (i)
      return new st(this.toArray()).__iterator(n, i);
    var u = 0
      , o = this._head;
    return new l(function() {
      if (o) {
        var s = o.value;
        return o = o.next,
        E(n, u++, s)
      }
      return T()
    }
    )
  }
  ,
  r
}(at);
Qr.isStack = Er;
var $ = Qr.prototype;
$[vn] = !0;
$.shift = $.pop;
$.unshift = $.push;
$.unshiftAll = $.pushAll;
$.withMutations = Kt;
$.wasAltered = Jr;
$.asImmutable = Ft;
$["@@transducer/init"] = $.asMutable = Wt;
$["@@transducer/step"] = function(t, r) {
  return t.unshift(r)
}
;
$["@@transducer/result"] = function(t) {
  return t.asImmutable()
}
;
function bt(t, r, e, n) {
  var i = Object.create($);
  return i.size = t,
  i._head = r,
  i.__ownerID = e,
  i.__hash = n,
  i.__altered = !1,
  i
}
var we;
function xt() {
  return we || (we = bt(0))
}
var dn = "@@__IMMUTABLE_SET__@@";
function Vr(t) {
  return !!(t && t[dn])
}
function yn(t) {
  return Vr(t) && x(t)
}
function ln(t, r) {
  if (t === r)
    return !0;
  if (!B(r) || t.size !== void 0 && r.size !== void 0 && t.size !== r.size || t.__hash !== void 0 && r.__hash !== void 0 && t.__hash !== r.__hash || z(t) !== z(r) || D(t) !== D(r) || x(t) !== x(r))
    return !1;
  if (t.size === 0 && r.size === 0)
    return !0;
  var e = !Ar(t);
  if (x(t)) {
    var n = t.entries();
    return r.every(function(a, f) {
      var h = n.next().value;
      return h && N(h[1], a) && (e || N(h[0], f))
    }) && n.next().done
  }
  var i = !1;
  if (t.size === void 0)
    if (r.size === void 0)
      typeof t.cacheResult == "function" && t.cacheResult();
    else {
      i = !0;
      var u = t;
      t = r,
      r = u
    }
  var o = !0
    , s = r.__iterate(function(a, f) {
    if (e ? !t.has(a) : i ? !N(a, t.get(f, y)) : !N(t.get(f, y), a))
      return o = !1,
      !1
  });
  return o && t.size === s
}
function ft(t, r) {
  var e = function(n) {
    t.prototype[n] = r[n]
  };
  return Object.keys(r).forEach(e),
  Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(r).forEach(e),
  t
}
function Qt(t) {
  if (!t || typeof t != "object")
    return t;
  if (!B(t)) {
    if (!et(t))
      return t;
    t = U(t)
  }
  if (z(t)) {
    var r = {};
    return t.__iterate(function(n, i) {
      r[i] = Qt(n)
    }),
    r
  }
  var e = [];
  return t.__iterate(function(n) {
    e.push(Qt(n))
  }),
  e
}
var or = function(t) {
  function r(e) {
    return e == null ? Rt() : Vr(e) && !x(e) ? e : Rt().withMutations(function(n) {
      var i = t(e);
      L(i.size),
      i.forEach(function(u) {
        return n.add(u)
      })
    })
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.of = function() {
    return this(arguments)
  }
  ,
  r.fromKeys = function(n) {
    return this(K(n).keySeq())
  }
  ,
  r.intersect = function(n) {
    return n = q(n).toArray(),
    n.length ? I.intersect.apply(r(n.pop()), n) : Rt()
  }
  ,
  r.union = function(n) {
    return n = q(n).toArray(),
    n.length ? I.union.apply(r(n.pop()), n) : Rt()
  }
  ,
  r.prototype.toString = function() {
    return this.__toString("Set {", "}")
  }
  ,
  r.prototype.has = function(n) {
    return this._map.has(n)
  }
  ,
  r.prototype.add = function(n) {
    return Zt(this, this._map.set(n, n))
  }
  ,
  r.prototype.remove = function(n) {
    return Zt(this, this._map.remove(n))
  }
  ,
  r.prototype.clear = function() {
    return Zt(this, this._map.clear())
  }
  ,
  r.prototype.map = function(n, i) {
    var u = this
      , o = !1
      , s = Zt(this, this._map.mapEntries(function(a) {
      var f = a[1]
        , h = n.call(i, f, f, u);
      return h !== f && (o = !0),
      [h, h]
    }, i));
    return o ? s : this
  }
  ,
  r.prototype.union = function() {
    for (var n = [], i = arguments.length; i--; )
      n[i] = arguments[i];
    return n = n.filter(function(u) {
      return u.size !== 0
    }),
    n.length === 0 ? this : this.size === 0 && !this.__ownerID && n.length === 1 ? this.constructor(n[0]) : this.withMutations(function(u) {
      for (var o = 0; o < n.length; o++)
        typeof n[o] == "string" ? u.add(n[o]) : t(n[o]).forEach(function(s) {
          return u.add(s)
        })
    })
  }
  ,
  r.prototype.intersect = function() {
    for (var n = [], i = arguments.length; i--; )
      n[i] = arguments[i];
    if (n.length === 0)
      return this;
    n = n.map(function(o) {
      return t(o)
    });
    var u = [];
    return this.forEach(function(o) {
      n.every(function(s) {
        return s.includes(o)
      }) || u.push(o)
    }),
    this.withMutations(function(o) {
      u.forEach(function(s) {
        o.remove(s)
      })
    })
  }
  ,
  r.prototype.subtract = function() {
    for (var n = [], i = arguments.length; i--; )
      n[i] = arguments[i];
    if (n.length === 0)
      return this;
    n = n.map(function(o) {
      return t(o)
    });
    var u = [];
    return this.forEach(function(o) {
      n.some(function(s) {
        return s.includes(o)
      }) && u.push(o)
    }),
    this.withMutations(function(o) {
      u.forEach(function(s) {
        o.remove(s)
      })
    })
  }
  ,
  r.prototype.sort = function(n) {
    return Ut(_t(this, n))
  }
  ,
  r.prototype.sortBy = function(n, i) {
    return Ut(_t(this, i, n))
  }
  ,
  r.prototype.wasAltered = function() {
    return this._map.wasAltered()
  }
  ,
  r.prototype.__iterate = function(n, i) {
    var u = this;
    return this._map.__iterate(function(o) {
      return n(o, o, u)
    }, i)
  }
  ,
  r.prototype.__iterator = function(n, i) {
    return this._map.__iterator(n, i)
  }
  ,
  r.prototype.__ensureOwner = function(n) {
    if (n === this.__ownerID)
      return this;
    var i = this._map.__ensureOwner(n);
    return n ? this.__make(i, n) : this.size === 0 ? this.__empty() : (this.__ownerID = n,
    this._map = i,
    this)
  }
  ,
  r
}(gt);
or.isSet = Vr;
var I = or.prototype;
I[dn] = !0;
I[kt] = I.remove;
I.merge = I.concat = I.union;
I.withMutations = Kt;
I.asImmutable = Ft;
I["@@transducer/init"] = I.asMutable = Wt;
I["@@transducer/step"] = function(t, r) {
  return t.add(r)
}
;
I["@@transducer/result"] = function(t) {
  return t.asImmutable()
}
;
I.__empty = Rt;
I.__make = gn;
function Zt(t, r) {
  return t.__ownerID ? (t.size = r.size,
  t._map = r,
  t) : r === t._map ? t : r.size === 0 ? t.__empty() : t.__make(r)
}
function gn(t, r) {
  var e = Object.create(I);
  return e.size = t ? t.size : 0,
  e._map = t,
  e.__ownerID = r,
  e
}
var Ee;
function Rt() {
  return Ee || (Ee = gn(J()))
}
var Si = function(t) {
  function r(e, n, i) {
    if (i === void 0 && (i = 1),
    !(this instanceof r))
      return new r(e,n,i);
    if ($t(i !== 0, "Cannot step a Range by 0"),
    $t(e !== void 0, "You must define a start value when using Range"),
    $t(n !== void 0, "You must define an end value when using Range"),
    i = Math.abs(i),
    n < e && (i = -i),
    this._start = e,
    this._end = n,
    this._step = i,
    this.size = Math.max(0, Math.ceil((n - e) / i - 1) + 1),
    this.size === 0) {
      if (_r)
        return _r;
      _r = this
    }
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.prototype.toString = function() {
    return this.size === 0 ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]"
  }
  ,
  r.prototype.get = function(n, i) {
    return this.has(n) ? this._start + rt(this, n) * this._step : i
  }
  ,
  r.prototype.includes = function(n) {
    var i = (n - this._start) / this._step;
    return i >= 0 && i < this.size && i === Math.floor(i)
  }
  ,
  r.prototype.slice = function(n, i) {
    return tr(n, i, this.size) ? this : (n = Pt(n, this.size),
    i = rr(i, this.size),
    i <= n ? new r(0,0) : new r(this.get(n, this._end),this.get(i, this._end),this._step))
  }
  ,
  r.prototype.indexOf = function(n) {
    var i = n - this._start;
    if (i % this._step === 0) {
      var u = i / this._step;
      if (u >= 0 && u < this.size)
        return u
    }
    return -1
  }
  ,
  r.prototype.lastIndexOf = function(n) {
    return this.indexOf(n)
  }
  ,
  r.prototype.__iterate = function(n, i) {
    for (var u = this.size, o = this._step, s = i ? this._start + (u - 1) * o : this._start, a = 0; a !== u && n(s, i ? u - ++a : a++, this) !== !1; )
      s += i ? -o : o;
    return a
  }
  ,
  r.prototype.__iterator = function(n, i) {
    var u = this.size
      , o = this._step
      , s = i ? this._start + (u - 1) * o : this._start
      , a = 0;
    return new l(function() {
      if (a === u)
        return T();
      var f = s;
      return s += i ? -o : o,
      E(n, i ? u - ++a : a++, f)
    }
    )
  }
  ,
  r.prototype.equals = function(n) {
    return n instanceof r ? this._start === n._start && this._end === n._end && this._step === n._step : ln(this, n)
  }
  ,
  r
}(F), _r;
function Sn(t, r, e) {
  for (var n = Ve(r), i = 0; i !== n.length; )
    if (t = tn(t, n[i++], y),
    t === y)
      return e;
  return t
}
function mn(t, r) {
  return Sn(this, t, r)
}
function mi(t, r) {
  return Sn(t, r, y) !== y
}
function wi(t) {
  return mi(this, t)
}
function wn() {
  L(this.size);
  var t = {};
  return this.__iterate(function(r, e) {
    t[e] = r
  }),
  t
}
q.Iterator = l;
ft(q, {
  toArray: function() {
    L(this.size);
    var r = new Array(this.size || 0)
      , e = z(this)
      , n = 0;
    return this.__iterate(function(i, u) {
      r[n++] = e ? [u, i] : i
    }),
    r
  },
  toIndexedSeq: function() {
    return new Fe(this)
  },
  toJS: function() {
    return Qt(this)
  },
  toKeyedSeq: function() {
    return new ur(this,!0)
  },
  toMap: function() {
    return it(this.toKeyedSeq())
  },
  toObject: wn,
  toOrderedMap: function() {
    return Q(this.toKeyedSeq())
  },
  toOrderedSet: function() {
    return Ut(z(this) ? this.valueSeq() : this)
  },
  toSet: function() {
    return or(z(this) ? this.valueSeq() : this)
  },
  toSetSeq: function() {
    return new Ye(this)
  },
  toSeq: function() {
    return D(this) ? this.toIndexedSeq() : z(this) ? this.toKeyedSeq() : this.toSetSeq()
  },
  toStack: function() {
    return Qr(z(this) ? this.valueSeq() : this)
  },
  toList: function() {
    return Ot(z(this) ? this.valueSeq() : this)
  },
  toString: function() {
    return "[Collection]"
  },
  __toString: function(r, e) {
    return this.size === 0 ? r + e : r + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e
  },
  concat: function() {
    for (var r = [], e = arguments.length; e--; )
      r[e] = arguments[e];
    return g(this, Xn(this, r))
  },
  includes: function(r) {
    return this.some(function(e) {
      return N(e, r)
    })
  },
  entries: function() {
    return this.__iterator(C)
  },
  every: function(r, e) {
    L(this.size);
    var n = !0;
    return this.__iterate(function(i, u, o) {
      if (!r.call(e, i, u, o))
        return n = !1,
        !1
    }),
    n
  },
  filter: function(r, e) {
    return g(this, Ze(this, r, e, !0))
  },
  partition: function(r, e) {
    return Zn(this, r, e)
  },
  find: function(r, e, n) {
    var i = this.findEntry(r, e);
    return i ? i[1] : n
  },
  forEach: function(r, e) {
    return L(this.size),
    this.__iterate(e ? r.bind(e) : r)
  },
  join: function(r) {
    L(this.size),
    r = r !== void 0 ? "" + r : ",";
    var e = ""
      , n = !0;
    return this.__iterate(function(i) {
      n ? n = !1 : e += r,
      e += i != null ? i.toString() : ""
    }),
    e
  },
  keys: function() {
    return this.__iterator(Ct)
  },
  map: function(r, e) {
    return g(this, xe(this, r, e))
  },
  reduce: function(r, e, n) {
    return ze(this, r, e, n, arguments.length < 2, !1)
  },
  reduceRight: function(r, e, n) {
    return ze(this, r, e, n, arguments.length < 2, !0)
  },
  reverse: function() {
    return g(this, Nr(this, !0))
  },
  slice: function(r, e) {
    return g(this, Dr(this, r, e, !0))
  },
  some: function(r, e) {
    L(this.size);
    var n = !1;
    return this.__iterate(function(i, u, o) {
      if (r.call(e, i, u, o))
        return n = !0,
        !1
    }),
    n
  },
  sort: function(r) {
    return g(this, _t(this, r))
  },
  values: function() {
    return this.__iterator(W)
  },
  butLast: function() {
    return this.slice(0, -1)
  },
  isEmpty: function() {
    return this.size !== void 0 ? this.size === 0 : !this.some(function() {
      return !0
    })
  },
  count: function(r, e) {
    return ct(r ? this.toSeq().filter(r, e) : this)
  },
  countBy: function(r, e) {
    return Jn(this, r, e)
  },
  equals: function(r) {
    return ln(this, r)
  },
  entrySeq: function() {
    var r = this;
    if (r._cache)
      return new st(r._cache);
    var e = r.toSeq().map(zi).toIndexedSeq();
    return e.fromEntrySeq = function() {
      return r.toSeq()
    }
    ,
    e
  },
  filterNot: function(r, e) {
    return this.filter(pr(r), e)
  },
  findEntry: function(r, e, n) {
    var i = n;
    return this.__iterate(function(u, o, s) {
      if (r.call(e, u, o, s))
        return i = [o, u],
        !1
    }),
    i
  },
  findKey: function(r, e) {
    var n = this.findEntry(r, e);
    return n && n[0]
  },
  findLast: function(r, e, n) {
    return this.toKeyedSeq().reverse().find(r, e, n)
  },
  findLastEntry: function(r, e, n) {
    return this.toKeyedSeq().reverse().findEntry(r, e, n)
  },
  findLastKey: function(r, e) {
    return this.toKeyedSeq().reverse().findKey(r, e)
  },
  first: function(r) {
    return this.find(be, null, r)
  },
  flatMap: function(r, e) {
    return g(this, Qn(this, r, e))
  },
  flatten: function(r) {
    return g(this, Xe(this, r, !0))
  },
  fromEntrySeq: function() {
    return new He(this)
  },
  get: function(r, e) {
    return this.find(function(n, i) {
      return N(i, r)
    }, void 0, e)
  },
  getIn: mn,
  groupBy: function(r, e) {
    return xn(this, r, e)
  },
  has: function(r) {
    return this.get(r, y) !== y
  },
  hasIn: wi,
  isSubset: function(r) {
    return r = typeof r.includes == "function" ? r : q(r),
    this.every(function(e) {
      return r.includes(e)
    })
  },
  isSuperset: function(r) {
    return r = typeof r.isSubset == "function" ? r : q(r),
    r.isSubset(this)
  },
  keyOf: function(r) {
    return this.findKey(function(e) {
      return N(e, r)
    })
  },
  keySeq: function() {
    return this.toSeq().map(Ei).toIndexedSeq()
  },
  last: function(r) {
    return this.toSeq().reverse().first(r)
  },
  lastKeyOf: function(r) {
    return this.toKeyedSeq().reverse().keyOf(r)
  },
  max: function(r) {
    return Ht(this, r)
  },
  maxBy: function(r, e) {
    return Ht(this, e, r)
  },
  min: function(r) {
    return Ht(this, r ? Oe(r) : Ie)
  },
  minBy: function(r, e) {
    return Ht(this, e ? Oe(e) : Ie, r)
  },
  rest: function() {
    return this.slice(1)
  },
  skip: function(r) {
    return r === 0 ? this : this.slice(Math.max(0, r))
  },
  skipLast: function(r) {
    return r === 0 ? this : this.slice(0, -Math.max(0, r))
  },
  skipWhile: function(r, e) {
    return g(this, Ge(this, r, e, !0))
  },
  skipUntil: function(r, e) {
    return this.skipWhile(pr(r), e)
  },
  sortBy: function(r, e) {
    return g(this, _t(this, e, r))
  },
  take: function(r) {
    return this.slice(0, Math.max(0, r))
  },
  takeLast: function(r) {
    return this.slice(-Math.max(0, r))
  },
  takeWhile: function(r, e) {
    return g(this, Gn(this, r, e))
  },
  takeUntil: function(r, e) {
    return this.takeWhile(pr(r), e)
  },
  update: function(r) {
    return r(this)
  },
  valueSeq: function() {
    return this.toIndexedSeq()
  },
  hashCode: function() {
    return this.__hash || (this.__hash = Oi(this))
  }
});
var A = q.prototype;
A[Te] = !0;
A[er] = A.values;
A.toJSON = A.toArray;
A.__toStringMapper = jt;
A.inspect = A.toSource = function() {
  return this.toString()
}
;
A.chain = A.flatMap;
A.contains = A.includes;
ft(K, {
  flip: function() {
    return g(this, Je(this))
  },
  mapEntries: function(r, e) {
    var n = this
      , i = 0;
    return g(this, this.toSeq().map(function(u, o) {
      return r.call(e, [o, u], i++, n)
    }).fromEntrySeq())
  },
  mapKeys: function(r, e) {
    var n = this;
    return g(this, this.toSeq().flip().map(function(i, u) {
      return r.call(e, i, u, n)
    }).flip())
  }
});
var Yt = K.prototype;
Yt[je] = !0;
Yt[er] = A.entries;
Yt.toJSON = wn;
Yt.__toStringMapper = function(t, r) {
  return jt(r) + ": " + jt(t)
}
;
ft(at, {
  toKeyedSeq: function() {
    return new ur(this,!1)
  },
  filter: function(r, e) {
    return g(this, Ze(this, r, e, !1))
  },
  findIndex: function(r, e) {
    var n = this.findEntry(r, e);
    return n ? n[0] : -1
  },
  indexOf: function(r) {
    var e = this.keyOf(r);
    return e === void 0 ? -1 : e
  },
  lastIndexOf: function(r) {
    var e = this.lastKeyOf(r);
    return e === void 0 ? -1 : e
  },
  reverse: function() {
    return g(this, Nr(this, !1))
  },
  slice: function(r, e) {
    return g(this, Dr(this, r, e, !1))
  },
  splice: function(r, e) {
    var n = arguments.length;
    if (e = Math.max(e || 0, 0),
    n === 0 || n === 2 && !e)
      return this;
    r = Pt(r, r < 0 ? this.count() : this.size);
    var i = this.slice(0, r);
    return g(this, n === 1 ? i : i.concat(H(arguments, 2), this.slice(r + e)))
  },
  findLastIndex: function(r, e) {
    var n = this.findLastEntry(r, e);
    return n ? n[0] : -1
  },
  first: function(r) {
    return this.get(0, r)
  },
  flatten: function(r) {
    return g(this, Xe(this, r, !1))
  },
  get: function(r, e) {
    return r = rt(this, r),
    r < 0 || this.size === 1 / 0 || this.size !== void 0 && r > this.size ? e : this.find(function(n, i) {
      return i === r
    }, void 0, e)
  },
  has: function(r) {
    return r = rt(this, r),
    r >= 0 && (this.size !== void 0 ? this.size === 1 / 0 || r < this.size : this.indexOf(r) !== -1)
  },
  interpose: function(r) {
    return g(this, Vn(this, r))
  },
  interleave: function() {
    var r = [this].concat(H(arguments))
      , e = Jt(this.toSeq(), F.of, r)
      , n = e.flatten(!0);
    return e.size && (n.size = e.size * r.length),
    g(this, n)
  },
  keySeq: function() {
    return Si(0, this.size)
  },
  last: function(r) {
    return this.get(-1, r)
  },
  skipWhile: function(r, e) {
    return g(this, Ge(this, r, e, !1))
  },
  zip: function() {
    var r = [this].concat(H(arguments));
    return g(this, Jt(this, Me, r))
  },
  zipAll: function() {
    var r = [this].concat(H(arguments));
    return g(this, Jt(this, Me, r, !0))
  },
  zipWith: function(r) {
    var e = H(arguments);
    return e[0] = this,
    g(this, Jt(this, r, e))
  }
});
var Mt = at.prototype;
Mt[Le] = !0;
Mt[mt] = !0;
ft(gt, {
  get: function(r, e) {
    return this.has(r) ? r : e
  },
  includes: function(r) {
    return this.has(r)
  },
  keySeq: function() {
    return this.valueSeq()
  }
});
var yt = gt.prototype;
yt.has = A.includes;
yt.contains = yt.includes;
yt.keys = yt.values;
ft(nt, Yt);
ft(F, Mt);
ft(Et, yt);
function ze(t, r, e, n, i, u) {
  return L(t.size),
  t.__iterate(function(o, s, a) {
    i ? (i = !1,
    e = o) : e = r.call(n, e, o, s, a)
  }, u),
  e
}
function Ei(t, r) {
  return r
}
function zi(t, r) {
  return [r, t]
}
function pr(t) {
  return function() {
    return !t.apply(this, arguments)
  }
}
function Oe(t) {
  return function() {
    return -t.apply(this, arguments)
  }
}
function Me() {
  return H(arguments)
}
function Ie(t, r) {
  return t < r ? 1 : t > r ? -1 : 0
}
function Oi(t) {
  if (t.size === 1 / 0)
    return 0;
  var r = x(t)
    , e = z(t)
    , n = r ? 1 : 0;
  return t.__iterate(e ? r ? function(i, u) {
    n = 31 * n + qe(j(i), j(u)) | 0
  }
  : function(i, u) {
    n = n + qe(j(i), j(u)) | 0
  }
  : r ? function(i) {
    n = 31 * n + j(i) | 0
  }
  : function(i) {
    n = n + j(i) | 0
  }
  ),
  Mi(t.size, n)
}
function Mi(t, r) {
  return r = qt(r, 3432918353),
  r = qt(r << 15 | r >>> -15, 461845907),
  r = qt(r << 13 | r >>> -13, 5),
  r = (r + 3864292196 | 0) ^ t,
  r = qt(r ^ r >>> 16, 2246822507),
  r = qt(r ^ r >>> 13, 3266489909),
  r = ir(r ^ r >>> 16),
  r
}
function qe(t, r) {
  return t ^ r + 2654435769 + (t << 6) + (t >> 2) | 0
}
var Ut = function(t) {
  function r(e) {
    return e == null ? zr() : yn(e) ? e : zr().withMutations(function(n) {
      var i = gt(e);
      L(i.size),
      i.forEach(function(u) {
        return n.add(u)
      })
    })
  }
  return t && (r.__proto__ = t),
  r.prototype = Object.create(t && t.prototype),
  r.prototype.constructor = r,
  r.of = function() {
    return this(arguments)
  }
  ,
  r.fromKeys = function(n) {
    return this(K(n).keySeq())
  }
  ,
  r.prototype.toString = function() {
    return this.__toString("OrderedSet {", "}")
  }
  ,
  r
}(or);
Ut.isOrderedSet = yn;
var ht = Ut.prototype;
ht[mt] = !0;
ht.zip = Mt.zip;
ht.zipWith = Mt.zipWith;
ht.zipAll = Mt.zipAll;
ht.__empty = zr;
ht.__make = En;
function En(t, r) {
  var e = Object.create(ht);
  return e.size = t ? t.size : 0,
  e._map = t,
  e.__ownerID = r,
  e
}
var Ae;
function zr() {
  return Ae || (Ae = En(At()))
}
function Ii(t) {
  if (St(t))
    throw new Error("Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.");
  if (Z(t))
    throw new Error("Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.");
  if (t === null || typeof t != "object")
    throw new Error("Can not call `Record` with a non-object as default values. Use a plain javascript object instead.")
}
var M = function(r, e) {
  var n;
  Ii(r);
  var i = function(s) {
    var a = this;
    if (s instanceof i)
      return s;
    if (!(this instanceof i))
      return new i(s);
    if (!n) {
      n = !0;
      var f = Object.keys(r)
        , h = u._indices = {};
      u._name = e,
      u._keys = f,
      u._defaultValues = r;
      for (var c = 0; c < f.length; c++) {
        var _ = f[c];
        h[_] = c,
        u[_] ? typeof console == "object" && console.warn && console.warn("Cannot define " + re(this) + ' with property "' + _ + '" since that property name is part of the Record API.') : qi(u, _)
      }
    }
    return this.__ownerID = void 0,
    this._values = Ot().withMutations(function(p) {
      p.setSize(a._keys.length),
      K(s).forEach(function(v, d) {
        p.set(a._indices[d], v === a._defaultValues[d] ? void 0 : v)
      })
    }),
    this
  }
    , u = i.prototype = Object.create(S);
  return u.constructor = i,
  e && (i.displayName = e),
  i
};
M.prototype.toString = function() {
  for (var r = re(this) + " { ", e = this._keys, n, i = 0, u = e.length; i !== u; i++)
    n = e[i],
    r += (i ? ", " : "") + n + ": " + jt(this.get(n));
  return r + " }"
}
;
M.prototype.equals = function(r) {
  return this === r || St(r) && lt(this).equals(lt(r))
}
;
M.prototype.hashCode = function() {
  return lt(this).hashCode()
}
;
M.prototype.has = function(r) {
  return this._indices.hasOwnProperty(r)
}
;
M.prototype.get = function(r, e) {
  if (!this.has(r))
    return e;
  var n = this._indices[r]
    , i = this._values.get(n);
  return i === void 0 ? this._defaultValues[r] : i
}
;
M.prototype.set = function(r, e) {
  if (this.has(r)) {
    var n = this._values.set(this._indices[r], e === this._defaultValues[r] ? void 0 : e);
    if (n !== this._values && !this.__ownerID)
      return te(this, n)
  }
  return this
}
;
M.prototype.remove = function(r) {
  return this.set(r)
}
;
M.prototype.clear = function() {
  var r = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : te(this, r)
}
;
M.prototype.wasAltered = function() {
  return this._values.wasAltered()
}
;
M.prototype.toSeq = function() {
  return lt(this)
}
;
M.prototype.toJS = function() {
  return Qt(this)
}
;
M.prototype.entries = function() {
  return this.__iterator(C)
}
;
M.prototype.__iterator = function(r, e) {
  return lt(this).__iterator(r, e)
}
;
M.prototype.__iterate = function(r, e) {
  return lt(this).__iterate(r, e)
}
;
M.prototype.__ensureOwner = function(r) {
  if (r === this.__ownerID)
    return this;
  var e = this._values.__ensureOwner(r);
  return r ? te(this, e, r) : (this.__ownerID = r,
  this._values = e,
  this)
}
;
M.isRecord = St;
M.getDescriptiveName = re;
var S = M.prototype;
S[De] = !0;
S[kt] = S.remove;
S.deleteIn = S.removeIn = Pr;
S.getIn = mn;
S.hasIn = A.hasIn;
S.merge = nn;
S.mergeWith = un;
S.mergeIn = Yr;
S.mergeDeep = sn;
S.mergeDeepWith = an;
S.mergeDeepIn = Hr;
S.setIn = kr;
S.update = Cr;
S.updateIn = Kr;
S.withMutations = Kt;
S.asMutable = Wt;
S.asImmutable = Ft;
S[er] = S.entries;
S.toJSON = S.toObject = A.toObject;
S.inspect = S.toSource = function() {
  return this.toString()
}
;
function te(t, r, e) {
  var n = Object.create(Object.getPrototypeOf(t));
  return n._values = r,
  n.__ownerID = e,
  n
}
function re(t) {
  return t.constructor.displayName || t.constructor.name || "Record"
}
function lt(t) {
  return Tr(t._keys.map(function(r) {
    return [r, t.get(r)]
  }))
}
function qi(t, r) {
  try {
    Object.defineProperty(t, r, {
      get: function() {
        return this.get(r)
      },
      set: function(e) {
        $t(this.__ownerID, "Cannot set on an immutable record."),
        this.set(r, e)
      }
    })
  } catch {}
}
class Ai {
  constructor(r, e) {
    sr(this, "x");
    sr(this, "y");
    this.x = r,
    this.y = e
  }
  lte(r) {
    return this.y < r.y || this.y == r.y && this.x <= r.x
  }
  toString() {
    return `${this.x},${this.y}`
  }
}
const vr = new Map
  , It = (t, r) => {
  const e = `${t}-${r}`;
  if (vr.has(e))
    return vr.get(e);
  const n = new Ai(t,r);
  return Object.freeze(n),
  vr.set(e, n),
  n
}
  , zn = It(0, -1)
  , ee = It(1, 0)
  , ne = It(0, 1)
  , On = It(-1, 0)
  , Or = t => r => It(t.x + r.x, t.y + r.y)
  , Mn = 2147483648
  , bi = 1103515245
  , Ri = 12345;
function $i(t) {
  return (bi * t + Ri) % Mn
}
function In(t, r) {
  const e = Math.abs($i(t));
  return r <= 1 ? [e, 0] : [e, Math.floor(e / Mn * r)]
}
function Ti(t, r) {
  const e = new Array(t)
    , n = Ot();
  for (let s = 0; s < t ** 2; s++)
    e[s] = [It(s % t, Math.floor(s / t)), n];
  const [i,u] = In(r, t ** 2);
  return [e[u][0], it(e), i]
}
function ji(t, r) {
  return [zn, ne, ee, On].map(Or(t)).filter(e => {
    var n;
    return ((n = r.get(e)) == null ? void 0 : n.size) === 0
  }
  )
}
function Mr(t, r, e) {
  const n = ji(t, r);
  if (n.length === 0)
    return [r, e];
  const [i,u] = In(e, n.length)
    , o = n[u]
    , [s,a] = Mr(o, r.set(t, r.get(t).push(o)).set(o, r.get(o).push(t)), i);
  return Mr(t, s, a)
}
function qn(t, r=Date.now()) {
  const [e,n,i] = Ti(t, r)
    , [u] = Mr(e, n, i);
  return u
}
it([[zn, "north"], [ee, "east"], [ne, "south"], [On, "west"]]);
function An(t, r, e) {
  const n = (t + 2) * r
    , i = r
    , u = (t + 1) * r
    , o = `<path d="M ${i} ${i} L ${u} ${i}" />`
    , s = `<path d="M ${i} ${i} L ${i} ${u}" />`
    , a = e.reduce( (f, h, c) => {
    const _ = [ne, ee].filter(p => !h.includes(Or(p)(c))).map(Or(c)).map(p => [p.x, p.y, c.x + 1, c.y + 1]).map(p => p.map(v => (v + 1) * r)).map( ([p,v,d,b]) => `<path d="M ${p} ${v} L ${d} ${b}" />`);
    return f.push(..._)
  }
  , Ot()).join(`
`);
  return `width="${n}" height="${n}" viewBox="0 0 ${n} ${n}">
     width="1">
      ${o}
      ${s}
      ${a}
     </g>
    </svg>`
}
const ie = 10
  , bn = 42
  , Rn = document.querySelectorAll.bind(document)
  , Ir = document.querySelector.bind(document)
  , Vt = Ir(".maze-wrapper");
function $n() {
  if (!Vt)
    return;
  const t = Number((Ir(".maze-input--size") ?? {
    value: ie
  }).value)
    , r = Number((Ir(".maze-input--seed") ?? {
    value: bn
  }).value)
    , e = qn(t, r);
  Vt.innerHTML = An(t, 25, e)
}
Rn(".maze-input").forEach(t => {
  t.addEventListener("change", $n)
}
);
Rn("form").forEach(t => {
  t.addEventListener("submit", r => {
    $n(),
    r.preventDefault()
  }
  )
}
);
const Li = qn(ie, bn);
Vt && (Vt.innerHTML = An(ie, 25, Li));
