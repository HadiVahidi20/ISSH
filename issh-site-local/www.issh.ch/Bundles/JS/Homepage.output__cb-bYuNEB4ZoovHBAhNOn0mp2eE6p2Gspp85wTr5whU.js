
/*!
 * Flip 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  'use strict';
  function p(t) {
    var e = t.ownerDocument || t;
    !(k in t.style) && 'msTransform' in t.style && (C = (k = 'msTransform') + 'Origin');
    for (; e.parentNode && (e = e.parentNode); );
    if (((y = window), (m = new F()), e)) {
      (a = (g = e).documentElement), (b = e.body), ((s = g.createElementNS('http://www.w3.org/2000/svg', 'g')).style.transform = 'none');
      var i = e.createElement('div'),
        n = e.createElement('div'),
        r = e && (e.body || e.firstElementChild);
      r &&
        r.appendChild &&
        (r.appendChild(i),
        i.appendChild(n),
        i.setAttribute('style', 'position:static;transform:translate3d(0,0,1px)'),
        (w = n.offsetParent !== i),
        r.removeChild(i));
    }
    return e;
  }
  function t() {
    return y.pageYOffset || g.scrollTop || a.scrollTop || b.scrollTop || 0;
  }
  function u() {
    return y.pageXOffset || g.scrollLeft || a.scrollLeft || b.scrollLeft || 0;
  }
  function v(t) {
    return t.ownerSVGElement || ('svg' === (t.tagName + '').toLowerCase() ? t : null);
  }
  function x(t, e) {
    if (t.parentNode && (g || p(t))) {
      var i = v(t),
        n = i ? i.getAttribute('xmlns') || 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
        r = i ? (e ? 'rect' : 'g') : 'div',
        a = 2 !== e ? 0 : 100,
        s = 3 === e ? 100 : 0,
        o = 'position:absolute;display:block;pointer-events:none;margin:0;padding:0;',
        l = g.createElementNS ? g.createElementNS(n.replace(/^https/, 'http'), r) : g.createElement(r);
      return (
        e &&
          (i
            ? ((d = d || x(t)),
              l.setAttribute('width', 0.01),
              l.setAttribute('height', 0.01),
              l.setAttribute('transform', 'translate(' + a + ',' + s + ')'),
              d.appendChild(l))
            : (f || ((f = x(t)).style.cssText = o), (l.style.cssText = o + 'width:0.1px;height:0.1px;top:' + s + 'px;left:' + a + 'px'), f.appendChild(l))),
        l
      );
    }
    throw 'Need document and parent.';
  }
  function z(t) {
    var e,
      i = t.getCTM();
    return (
      i ||
        ((e = t.style[k]),
        (t.style[k] = 'none'),
        t.appendChild(s),
        (i = s.getCTM()),
        t.removeChild(s),
        e ? (t.style[k] = e) : t.style.removeProperty(k.replace(/([A-Z])/g, '-$1').toLowerCase())),
      i || m.clone()
    );
  }
  function A(t, e) {
    var i,
      n,
      r,
      a,
      s,
      o,
      l = v(t),
      u = t === l,
      h = l ? E : M,
      p = t.parentNode,
      c = p && !l && p.shadowRoot && p.shadowRoot.appendChild ? p.shadowRoot : p;
    if (t === y) return t;
    if ((h.length || h.push(x(t, 1), x(t, 2), x(t, 3)), (i = l ? d : f), l))
      u
        ? ((a = -(r = z(t)).e / r.a), (s = -r.f / r.d), (n = m))
        : t.getBBox
        ? ((r = t.getBBox()),
          (a =
            (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
              ? 1 < n.numberOfItems
                ? (function _consolidate(t) {
                    for (var e = new F(), i = 0; i < t.numberOfItems; i++) e.multiply(t.getItem(i).matrix);
                    return e;
                  })(n)
                : n.getItem(0).matrix
              : m).a *
              r.x +
            n.c * r.y),
          (s = n.b * r.x + n.d * r.y))
        : ((n = new F()), (a = s = 0)),
        e && 'g' === t.tagName.toLowerCase() && (a = s = 0),
        (u ? l : p).appendChild(i),
        i.setAttribute('transform', 'matrix(' + n.a + ',' + n.b + ',' + n.c + ',' + n.d + ',' + (n.e + a) + ',' + (n.f + s) + ')');
    else {
      if (((a = s = 0), w))
        for (n = t.offsetParent, r = t; (r = r && r.parentNode) && r !== n && r.parentNode; )
          4 < (y.getComputedStyle(r)[k] + '').length && ((a = r.offsetLeft), (s = r.offsetTop), (r = 0));
      if ('absolute' !== (o = y.getComputedStyle(t)).position && 'fixed' !== o.position)
        for (n = t.offsetParent; p && p !== n; ) (a += p.scrollLeft || 0), (s += p.scrollTop || 0), (p = p.parentNode);
      ((r = i.style).top = t.offsetTop - s + 'px'),
        (r.left = t.offsetLeft - a + 'px'),
        (r[k] = o[k]),
        (r[C] = o[C]),
        (r.position = 'fixed' === o.position ? 'fixed' : 'absolute'),
        c.appendChild(i);
    }
    return i;
  }
  function B(t, e, i, n, r, a, s) {
    return (t.a = e), (t.b = i), (t.c = n), (t.d = r), (t.e = a), (t.f = s), t;
  }
  var g,
    y,
    a,
    b,
    f,
    d,
    m,
    s,
    w,
    i,
    k = 'transform',
    C = k + 'Origin',
    E = [],
    M = [],
    F =
      (((i = Matrix2D.prototype).inverse = function inverse() {
        var t = this.a,
          e = this.b,
          i = this.c,
          n = this.d,
          r = this.e,
          a = this.f,
          s = t * n - e * i || 1e-10;
        return B(this, n / s, -e / s, -i / s, t / s, (i * a - n * r) / s, -(t * a - e * r) / s);
      }),
      (i.multiply = function multiply(t) {
        var e = this.a,
          i = this.b,
          n = this.c,
          r = this.d,
          a = this.e,
          s = this.f,
          o = t.a,
          l = t.c,
          u = t.b,
          h = t.d,
          p = t.e,
          c = t.f;
        return B(this, o * e + u * n, o * i + u * r, l * e + h * n, l * i + h * r, a + p * e + c * n, s + p * i + c * r);
      }),
      (i.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (i.equals = function equals(t) {
        var e = this.a,
          i = this.b,
          n = this.c,
          r = this.d,
          a = this.e,
          s = this.f;
        return e === t.a && i === t.b && n === t.c && r === t.d && a === t.e && s === t.f;
      }),
      (i.apply = function apply(t, e) {
        void 0 === e && (e = {});
        var i = t.x,
          n = t.y,
          r = this.a,
          a = this.b,
          s = this.c,
          o = this.d,
          l = this.e,
          u = this.f;
        return (e.x = i * r + n * s + l || 0), (e.y = i * a + n * o + u || 0), e;
      }),
      Matrix2D);
  function Matrix2D(t, e, i, n, r, a) {
    void 0 === t && (t = 1),
      void 0 === e && (e = 0),
      void 0 === i && (i = 0),
      void 0 === n && (n = 1),
      void 0 === r && (r = 0),
      void 0 === a && (a = 0),
      B(this, t, e, i, n, r, a);
  }
  function getGlobalMatrix(e, i, n, r) {
    if (!e || !e.parentNode || (g || p(e)).documentElement === e) return new F();
    var a = (function _forceNonZeroScale(t) {
        for (var e, i; t && t !== b; )
          (i = t._gsap) && i.uncache && i.get(t, 'x'),
            i && !i.scaleX && !i.scaleY && i.renderTransform && ((i.scaleX = i.scaleY = 1e-4), i.renderTransform(1, i), e ? e.push(i) : (e = [i])),
            (t = t.parentNode);
        return e;
      })(e),
      s = v(e) ? E : M,
      o = A(e, n),
      l = s[0].getBoundingClientRect(),
      h = s[1].getBoundingClientRect(),
      c = s[2].getBoundingClientRect(),
      f = o.parentNode,
      d =
        !r &&
        (function _isFixed(t) {
          return 'fixed' === y.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
        })(e),
      m = new F((h.left - l.left) / 100, (h.top - l.top) / 100, (c.left - l.left) / 100, (c.top - l.top) / 100, l.left + (d ? 0 : u()), l.top + (d ? 0 : t()));
    if ((f.removeChild(o), a)) for (l = a.length; l--; ) ((h = a[l]).scaleX = h.scaleY = 0), h.renderTransform(1, h);
    return i ? m.inverse() : m;
  }
  function L(t, e) {
    return t.actions.forEach(function (t) {
      return t.vars[e] && t.vars[e](t);
    });
  }
  function S(t) {
    return 'string' == typeof t ? t.split(' ').join('').split(',') : t;
  }
  function V(t) {
    return I(t)[0] || console.warn('Element not found:', t);
  }
  function W(t) {
    return Math.round(1e4 * t) / 1e4 || 0;
  }
  function X(t, e, i) {
    return t.forEach(function (t) {
      return t.classList[i](e);
    });
  }
  function $(t) {
    return t.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
  function _(t, e) {
    var i,
      n = {};
    for (i in t) e[i] || (n[i] = t[i]);
    return n;
  }
  function ba(t) {
    var e = (st[t] = S(t));
    return (et[t] = e.concat(nt)), e;
  }
  function ea(t, e, i) {
    return (
      t.forEach(function (t) {
        return (t.d = (function _getDOMDepth(t, e, i) {
          void 0 === i && (i = 0);
          for (var n = t.parentNode, r = 1e3 * Math.pow(10, i) * (e ? -1 : 1), a = e ? 900 * -r : 0; t; ) (a += r), (t = t.previousSibling);
          return n ? a + _getDOMDepth(n, e, i + 1) : a;
        })(i ? t.element : t.t, e));
      }),
      t.sort(function (t, e) {
        return t.d - e.d;
      }),
      t
    );
  }
  function fa(t, e) {
    for (var i, n, r = t.element.style, a = (t.css = t.css || []), s = e.length; s--; )
      (n = r[(i = e[s])] || r.getPropertyValue(i)), a.push(n ? i : Y[i] || (Y[i] = $(i)), n);
    return r;
  }
  function ga(t) {
    var e = t.css,
      i = t.element.style,
      n = 0;
    for (t.cache.uncache = 1; n < e.length; n += 2) e[n + 1] ? (i[e[n]] = e[n + 1]) : i.removeProperty(e[n]);
    !e[e.indexOf('transform') + 1] && i.translate && (i.removeProperty('translate'), i.removeProperty('scale'), i.removeProperty('rotate'));
  }
  function ha(t, e) {
    t.forEach(function (t) {
      return (t.a.cache.uncache = 1);
    }),
      e || t.finalStates.forEach(ga);
  }
  function ja(e, i, n) {
    var r,
      a,
      s,
      o = e.element,
      l = e.width,
      h = e.height,
      p = e.uncache,
      c = e.getProp,
      f = o.style,
      d = 4;
    if (('object' != typeof i && (i = e), tt && 1 !== n))
      return (
        tt._abs.push({ t: o, b: e, a: e, sd: 0 }),
        tt._final.push(function () {
          return (e.cache.uncache = 1) && ga(e);
        }),
        o
      );
    for (
      a = 'none' === c('display'),
        (e.isVisible && !a) ||
          (a && (fa(e, ['display']).display = i.display), (e.matrix = i.matrix), (e.width = l = e.width || i.width), (e.height = h = e.height || i.height)),
        fa(e, R),
        s = window.getComputedStyle(o);
      d--;

    )
      f[R[d]] = s[R[d]];
    if (
      ((f.gridArea = '1 / 1 / 1 / 1'),
      (f.transition = 'none'),
      (f.position = 'absolute'),
      (f.width = l + 'px'),
      (f.height = h + 'px'),
      f.top || (f.top = '0px'),
      f.left || (f.left = '0px'),
      p)
    )
      r = new ht(o);
    else if ((((r = _(e, D)).position = 'absolute'), e.simple)) {
      var m = o.getBoundingClientRect();
      r.matrix = new F(1, 0, 0, 1, m.left + u(), m.top + t());
    } else r.matrix = getGlobalMatrix(o, !1, !1, !0);
    return (r = ot(r, e, !0)), (e.x = P(r.x, 0.01)), (e.y = P(r.y, 0.01)), o;
  }
  function ka(t, e) {
    return (
      !0 !== e &&
        ((e = I(e)),
        (t = t.filter(function (t) {
          if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
          t.t._gsap.renderTransform(1), t.b.isVisible && ((t.t.style.width = t.b.width + 'px'), (t.t.style.height = t.b.height + 'px'));
        }))),
      t
    );
  }
  function la(t) {
    return ea(t, !0).forEach(function (t) {
      return (t.a.isVisible || t.b.isVisible) && ja(t.sd < 0 ? t.b : t.a, t.b, 1);
    });
  }
  function pa(t, e) {
    var i,
      n = t.style || t;
    for (i in e) n[i] = e[i];
  }
  function ra(t) {
    return t.map(function (t) {
      return t.element;
    });
  }
  function sa(t, e, i) {
    return t && e.length && i.add(t(ra(e), i, new ut(e, 0, !0)), 0);
  }
  function ua(t, e) {
    return t instanceof ut ? t : new ut(t, e);
  }
  function va(t, e, i) {
    var n = t.idLookup[i],
      r = t.alt[i];
    return !r.isVisible || ((e.getElementState(r.element) || r).isVisible && n.isVisible) ? n : r;
  }
  function za(t) {
    if (t !== l) {
      var e = o.style,
        i = o.clientWidth === window.outerWidth,
        n = o.clientHeight === window.outerHeight,
        r = 4;
      if (t && (i || n)) {
        for (; r--; ) j[r] = e[H[r]];
        i && ((e.width = o.clientWidth + 'px'), (e.overflowY = 'hidden')), n && ((e.height = o.clientHeight + 'px'), (e.overflowX = 'hidden')), (l = t);
      } else if (l) {
        for (; r--; ) j[r] ? (e[H[r]] = j[r]) : e.removeProperty($(H[r]));
        l = t;
      }
    }
  }
  function Aa(t, e, r, i) {
    (t instanceof ut && e instanceof ut) || console.warn('Not a valid state object.');
    var a,
      s,
      o,
      l,
      u,
      h,
      p,
      c,
      f,
      n,
      d,
      m,
      g,
      v,
      y,
      x = (r = r || {}).clearProps,
      b = r.onEnter,
      w = r.onLeave,
      S = r.absolute,
      k = r.absoluteOnLeave,
      C = r.custom,
      V = r.delay,
      E = r.paused,
      M = r.repeat,
      B = r.repeatDelay,
      F = r.yoyo,
      I = r.toggleClass,
      L = r.nested,
      P = r.zIndex,
      A = r.scale,
      T = r.fade,
      O = r.stagger,
      N = r.spin,
      D = r.prune,
      z = ('props' in r ? r : t).props,
      Y = _(r, rt),
      R = Q.timeline({ delay: V, paused: E, repeat: M, repeatDelay: B, yoyo: F, data: 'isFlip' }),
      W = Y,
      G = [],
      j = [],
      H = [],
      q = [],
      $ = !0 === N ? 1 : N || 0,
      Z =
        'function' == typeof N
          ? N
          : function () {
              return $;
            },
      J = t.interrupted || e.interrupted,
      U = R[1 !== i ? 'to' : 'from'];
    for (s in e.idLookup)
      (d = e.alt[s] ? va(e, t, s) : e.idLookup[s]),
        (u = d.element),
        (n = t.idLookup[s]),
        !t.alt[s] || u !== n.element || (!t.alt[s].isVisible && d.isVisible) || (n = t.alt[s]),
        n
          ? ((h = { t: u, b: n, a: d, sd: n.element === u ? 0 : d.isVisible ? 1 : -1 }),
            H.push(h),
            h.sd &&
              (h.sd < 0 && ((h.b = d), (h.a = n)), J && fa(h.b, z ? et[z] : nt), T && H.push((h.swap = { t: n.element, b: h.b, a: h.a, sd: -h.sd, swap: h }))),
            (u._flip = n.element._flip = tt ? tt.timeline : R))
          : d.isVisible && (H.push({ t: u, b: _(d, { isVisible: 1 }), a: d, sd: 0, entering: 1 }), (u._flip = tt ? tt.timeline : R));
    z &&
      (st[z] || ba(z)).forEach(function (e) {
        return (Y[e] = function (t) {
          return H[t].a.props[e];
        });
      }),
      (H.finalStates = f = []),
      (m = function run() {
        for (ea(H), za(!0), l = 0; l < H.length; l++)
          (h = H[l]),
            (g = h.a),
            (v = h.b),
            !D || g.isDifferent(v) || h.entering
              ? ((u = h.t),
                !L || h.sd < 0 || !l || (g.matrix = getGlobalMatrix(u, !1, !1, !0)),
                v.isVisible && g.isVisible
                  ? (h.sd < 0
                      ? ((p = new ht(u, z, t.simple)),
                        ot(p, g, A, 0, 0, p),
                        (p.matrix = getGlobalMatrix(u, !1, !1, !0)),
                        (p.css = h.b.css),
                        (h.a = g = p),
                        T && (u.style.opacity = J ? v.opacity : g.opacity),
                        O && q.push(u))
                      : 0 < h.sd && T && (u.style.opacity = J ? g.opacity - v.opacity : '0'),
                    ot(g, v, A, z))
                  : v.isVisible !== g.isVisible &&
                    (v.isVisible
                      ? g.isVisible || ((v.css = g.css), j.push(v), H.splice(l--, 1), S && L && ot(g, v, A, z))
                      : (g.isVisible && G.push(g), H.splice(l--, 1))),
                A ||
                  ((u.style.maxWidth = Math.max(g.width, v.width) + 'px'),
                  (u.style.maxHeight = Math.max(g.height, v.height) + 'px'),
                  (u.style.minWidth = Math.min(g.width, v.width) + 'px'),
                  (u.style.minHeight = Math.min(g.height, v.height) + 'px')),
                L && I && u.classList.add(I))
              : H.splice(l--, 1),
            f.push(g);
        var e;
        if (
          (I &&
            ((e = f.map(function (t) {
              return t.element;
            })),
            L &&
              e.forEach(function (t) {
                return t.classList.remove(I);
              })),
          za(!1),
          A
            ? ((Y.scaleX = function (t) {
                return H[t].a.scaleX;
              }),
              (Y.scaleY = function (t) {
                return H[t].a.scaleY;
              }))
            : ((Y.width = function (t) {
                return H[t].a.width + 'px';
              }),
              (Y.height = function (t) {
                return H[t].a.height + 'px';
              }),
              (Y.autoRound = r.autoRound || !1)),
          (Y.x = function (t) {
            return H[t].a.x + 'px';
          }),
          (Y.y = function (t) {
            return H[t].a.y + 'px';
          }),
          (Y.rotation = function (t) {
            return H[t].a.rotation + (N ? 360 * Z(t, c[t], c) : 0);
          }),
          (Y.skewX = function (t) {
            return H[t].a.skewX;
          }),
          (c = H.map(function (t) {
            return t.t;
          })),
          (!P && 0 !== P) ||
            ((Y.modifiers = {
              zIndex: function zIndex() {
                return P;
              }
            }),
            (Y.zIndex = P),
            (Y.immediateRender = !1 !== r.immediateRender)),
          T &&
            (Y.opacity = function (t) {
              return H[t].sd < 0 ? 0 : 0 < H[t].sd ? H[t].a.opacity : '+=0';
            }),
          q.length)
        ) {
          O = Q.utils.distribute(O);
          var i = c.slice(q.length);
          Y.stagger = function (t, e) {
            return O(~q.indexOf(e) ? c.indexOf(H[t].swap.t) : t, e, i);
          };
        }
        if (
          (it.forEach(function (t) {
            return r[t] && R.eventCallback(t, r[t], r[t + 'Params']);
          }),
          C && c.length)
        )
          for (s in ((W = _(Y, rt)), 'scale' in C && ((C.scaleX = C.scaleY = C.scale), delete C.scale), C))
            ((a = _(C[s], at))[s] = Y[s]),
              !('duration' in a) && 'duration' in Y && (a.duration = Y.duration),
              (a.stagger = Y.stagger),
              U.call(R, c, a, 0),
              delete W[s];
        (c.length || j.length || G.length) &&
          (I &&
            R.add(function () {
              return X(e, I, R._zTime < 0 ? 'remove' : 'add');
            }, 0) &&
            !E &&
            X(e, I, 'add'),
          c.length && U.call(R, c, W, 0)),
          sa(b, G, R),
          sa(w, j, R);
        var n = tt && tt.timeline;
        n &&
          (n.add(R, 0),
          tt._final.push(function () {
            return ha(H, !x);
          })),
          (o = R.duration()),
          R.call(function () {
            var t = R.time() >= o;
            t && !n && ha(H, !x), I && X(e, I, t ? 'remove' : 'add');
          });
      }),
      k &&
        (S = H.filter(function (t) {
          return !t.sd && !t.a.isVisible && t.b.isVisible;
        }).map(function (t) {
          return t.a.element;
        })),
      tt ? (S && (y = tt._abs).push.apply(y, ka(H, S)), tt._run.push(m)) : (S && la(ka(H, S)), m());
    var K = tt ? tt.timeline : R;
    return (
      (K.revert = function () {
        return lt(K, 1, 1);
      }),
      K
    );
  }
  function Da(t) {
    for (var e, i = (t.idLookup = {}), n = (t.alt = {}), r = t.elementStates, a = r.length; a--; ) i[(e = r[a]).id] ? (n[e.id] = e) : (i[e.id] = e);
  }
  var I,
    Q,
    tt,
    r,
    o,
    P,
    T,
    l,
    n,
    c = 1,
    h = {},
    O = 180 / Math.PI,
    N = Math.PI / 180,
    D = {},
    Y = {},
    et = {},
    it = S('onStart,onUpdate,onComplete,onReverseComplete,onInterrupt'),
    nt = S('transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight'),
    rt = {
      zIndex: 1,
      kill: 1,
      simple: 1,
      spin: 1,
      clearProps: 1,
      targets: 1,
      toggleClass: 1,
      onComplete: 1,
      onUpdate: 1,
      onInterrupt: 1,
      onStart: 1,
      delay: 1,
      repeat: 1,
      repeatDelay: 1,
      yoyo: 1,
      scale: 1,
      fade: 1,
      absolute: 1,
      props: 1,
      onEnter: 1,
      onLeave: 1,
      custom: 1,
      paused: 1,
      nested: 1,
      prune: 1,
      absoluteOnLeave: 1
    },
    at = { zIndex: 1, simple: 1, clearProps: 1, scale: 1, absolute: 1, fitChild: 1, getVars: 1, props: 1 },
    st = {},
    R = 'paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition'.split(','),
    G = function _parseElementState(t, e, i, n) {
      return t instanceof ht
        ? t
        : t instanceof ut
        ? (function _findElStateInState(t, e) {
            return (e && t.idLookup[G(e).id]) || t.elementStates[0];
          })(t, n)
        : new ht('string' == typeof t ? V(t) || console.warn(t + ' not found') : t, e, i);
    },
    ot = function _fit(t, e, i, n, r, a) {
      var s,
        o,
        l,
        u,
        h,
        p,
        c,
        f = t.element,
        d = t.cache,
        m = t.parent,
        g = t.x,
        v = t.y,
        y = e.width,
        x = e.height,
        b = e.scaleX,
        w = e.scaleY,
        S = e.rotation,
        k = e.bounds,
        _ = a && T && T(f, 'transform,width,height'),
        C = t,
        V = e.matrix,
        E = V.e,
        M = V.f,
        B = t.bounds.width !== k.width || t.bounds.height !== k.height || t.scaleX !== b || t.scaleY !== w || t.rotation !== S,
        F = !B && t.simple && e.simple && !r;
      return (
        F || !m
          ? ((b = w = 1), (S = s = 0))
          : ((p = (h = (function _getInverseGlobalMatrix(t) {
              var e = t._gsap || Q.core.getCache(t);
              return e.gmCache === Q.ticker.frame ? e.gMatrix : ((e.gmCache = Q.ticker.frame), (e.gMatrix = getGlobalMatrix(t, !0, !1, !0)));
            })(m))
              .clone()
              .multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix)),
            (S = W(Math.atan2(p.b, p.a) * O)),
            (s = W(Math.atan2(p.c, p.d) * O + S) % 360),
            (b = Math.sqrt(Math.pow(p.a, 2) + Math.pow(p.b, 2))),
            (w = Math.sqrt(Math.pow(p.c, 2) + Math.pow(p.d, 2)) * Math.cos(s * N)),
            r &&
              ((r = I(r)[0]),
              (u = Q.getProperty(r)),
              (c = r.getBBox && 'function' == typeof r.getBBox && r.getBBox()),
              (C = {
                scaleX: u('scaleX'),
                scaleY: u('scaleY'),
                width: c ? c.width : Math.ceil(parseFloat(u('width', 'px'))),
                height: c ? c.height : parseFloat(u('height', 'px'))
              })),
            (d.rotation = S + 'deg'),
            (d.skewX = s + 'deg')),
        i
          ? ((b *= y !== C.width && C.width ? y / C.width : 1), (w *= x !== C.height && C.height ? x / C.height : 1), (d.scaleX = b), (d.scaleY = w))
          : ((y = P((y * b) / C.scaleX, 0)), (x = P((x * w) / C.scaleY, 0)), (f.style.width = y + 'px'), (f.style.height = x + 'px')),
        n && pa(f, e.props),
        F || !m
          ? ((g += E - t.matrix.e), (v += M - t.matrix.f))
          : B || m !== e.parent
          ? (d.renderTransform(1, d),
            (p = getGlobalMatrix(r || f, !1, !1, !0)),
            (o = h.apply({ x: p.e, y: p.f })),
            (g += (l = h.apply({ x: E, y: M })).x - o.x),
            (v += l.y - o.y))
          : ((h.e = h.f = 0), (g += (l = h.apply({ x: E - t.matrix.e, y: M - t.matrix.f })).x), (v += l.y)),
        (g = P(g, 0.02)),
        (v = P(v, 0.02)),
        !a || a instanceof ht ? ((d.x = g + 'px'), (d.y = v + 'px'), d.renderTransform(1, d)) : _ && _.revert(),
        a && ((a.x = g), (a.y = v), (a.rotation = S), (a.skewX = s), i ? ((a.scaleX = b), (a.scaleY = w)) : ((a.width = y), (a.height = x))),
        a || d
      );
    },
    j = [],
    H = 'width,height,overflowX,overflowY'.split(','),
    lt = function _killFlip(t, e, i) {
      if (t && t.progress() < 1 && (!t.paused() || i))
        return (
          e &&
            ((function _interrupt(t) {
              t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(_interrupt);
            })(t),
            e < 2 && t.progress(1),
            t.kill()),
          !0
        );
    },
    ut =
      (((n = FlipState.prototype).update = function update(t) {
        var e = this;
        return (
          (this.elementStates = this.targets.map(function (t) {
            return new ht(t, e.props, e.simple);
          })),
          Da(this),
          this.interrupt(t),
          this.recordInlineStyles(),
          this
        );
      }),
      (n.clear = function clear() {
        return (this.targets.length = this.elementStates.length = 0), Da(this), this;
      }),
      (n.fit = function fit(t, e, i) {
        for (var n, r, a = ea(this.elementStates.slice(0), !1, !0), s = (t || this).idLookup, o = 0; o < a.length; o++)
          (n = a[o]),
            i && (n.matrix = getGlobalMatrix(n.element, !1, !1, !0)),
            (r = s[n.id]) && ot(n, r, e, !0, 0, n),
            (n.matrix = getGlobalMatrix(n.element, !1, !1, !0));
        return this;
      }),
      (n.getProperty = function getProperty(t, e) {
        var i = this.getElementState(t) || D;
        return (e in i ? i : i.props || D)[e];
      }),
      (n.add = function add(t) {
        for (var e, i, n, r = t.targets.length, a = this.idLookup, s = this.alt; r--; )
          (n = a[(i = t.elementStates[r]).id]) && (i.element === n.element || (s[i.id] && s[i.id].element === i.element))
            ? ((e = this.elementStates.indexOf(i.element === n.element ? n : s[i.id])),
              this.targets.splice(e, 1, t.targets[r]),
              this.elementStates.splice(e, 1, i))
            : (this.targets.push(t.targets[r]), this.elementStates.push(i));
        return t.interrupted && (this.interrupted = !0), t.simple || (this.simple = !1), Da(this), this;
      }),
      (n.compare = function compare(t) {
        function lh(t, e, i) {
          return (t.isVisible !== e.isVisible ? (t.isVisible ? f : d) : t.isVisible ? c : p).push(i) && m.push(i);
        }
        function mh(t, e, i) {
          return m.indexOf(i) < 0 && lh(t, e, i);
        }
        var e,
          i,
          n,
          r,
          a,
          s,
          o,
          l,
          u = t.idLookup,
          h = this.idLookup,
          p = [],
          c = [],
          f = [],
          d = [],
          m = [],
          g = t.alt,
          v = this.alt;
        for (n in u)
          (a = g[n]),
            (s = v[n]),
            (r = (e = a ? va(t, this, n) : u[n]).element),
            (i = h[n]),
            s
              ? ((l = i.isVisible || (!s.isVisible && r === i.element) ? i : s),
                (o = !a || e.isVisible || a.isVisible || l.element !== a.element ? e : a).isVisible && l.isVisible && o.element !== l.element
                  ? ((o.isDifferent(l) ? c : p).push(o.element, l.element), m.push(o.element, l.element))
                  : lh(o, l, o.element),
                a && o.element === a.element && (a = u[n]),
                mh(o.element !== i.element && a ? a : o, i, i.element),
                mh(a && a.element === s.element ? a : o, s, s.element),
                a && mh(a, s.element === a.element ? s : i, a.element))
              : (i ? (i.isDifferent(e) ? lh(e, i, r) : p.push(r)) : f.push(r), a && mh(a, i, a.element));
        for (n in h) u[n] || (d.push(h[n].element), v[n] && d.push(v[n].element));
        return { changed: c, unchanged: p, enter: f, leave: d };
      }),
      (n.recordInlineStyles = function recordInlineStyles() {
        for (var t = et[this.props] || nt, e = this.elementStates.length; e--; ) fa(this.elementStates[e], t);
      }),
      (n.interrupt = function interrupt(n) {
        var r = this,
          a = [];
        this.targets.forEach(function (t) {
          var e = t._flip,
            i = lt(e, n ? 0 : 1);
          n &&
            i &&
            a.indexOf(e) < 0 &&
            e.add(function () {
              return r.updateVisibility();
            }),
            i && a.push(e);
        }),
          !n && a.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!a.length);
      }),
      (n.updateVisibility = function updateVisibility() {
        this.elementStates.forEach(function (t) {
          var e = t.element.getBoundingClientRect();
          (t.isVisible = !!(e.width || e.height || e.top || e.left)), (t.uncache = 1);
        });
      }),
      (n.getElementState = function getElementState(t) {
        return this.elementStates[this.targets.indexOf(V(t))];
      }),
      (n.makeAbsolute = function makeAbsolute() {
        return ea(this.elementStates.slice(0), !0, !0).map(ja);
      }),
      FlipState);
  function FlipState(t, e, i) {
    if (((this.props = e && e.props), (this.simple = !(!e || !e.simple)), i)) (this.targets = ra(t)), (this.elementStates = t), Da(this);
    else {
      this.targets = I(t);
      var n = e && (!1 === e.kill || (e.batch && !e.kill));
      tt && !n && tt._kill.push(this), this.update(n || !!tt);
    }
  }
  var q,
    ht =
      (((q = ElementState.prototype).isDifferent = function isDifferent(t) {
        var e = this.bounds,
          i = t.bounds;
        return (
          e.top !== i.top ||
          e.left !== i.left ||
          e.width !== i.width ||
          e.height !== i.height ||
          !this.matrix.equals(t.matrix) ||
          this.opacity !== t.opacity ||
          (this.props && t.props && JSON.stringify(this.props) !== JSON.stringify(t.props))
        );
      }),
      (q.update = function update(e, i) {
        var n = this,
          r = n.element,
          a = Q.getProperty(r),
          s = Q.core.getCache(r),
          o = r.getBoundingClientRect(),
          l = r.getBBox && 'function' == typeof r.getBBox && 'svg' !== r.nodeName.toLowerCase() && r.getBBox(),
          h = i ? new F(1, 0, 0, 1, o.left + u(), o.top + t()) : getGlobalMatrix(r, !1, !1, !0);
        (s.uncache = 1),
          (n.getProp = a),
          (n.element = r),
          (n.id = (function _getID(t) {
            var e = t.getAttribute('data-flip-id');
            return e || t.setAttribute('data-flip-id', (e = 'auto-' + c++)), e;
          })(r)),
          (n.matrix = h),
          (n.cache = s),
          (n.bounds = o),
          (n.isVisible = !!(o.width || o.height || o.left || o.top)),
          (n.display = a('display')),
          (n.position = a('position')),
          (n.parent = r.parentNode),
          (n.x = a('x')),
          (n.y = a('y')),
          (n.scaleX = s.scaleX),
          (n.scaleY = s.scaleY),
          (n.rotation = a('rotation')),
          (n.skewX = a('skewX')),
          (n.opacity = a('opacity')),
          (n.width = l ? l.width : P(a('width', 'px'), 0.04)),
          (n.height = l ? l.height : P(a('height', 'px'), 0.04)),
          e &&
            (function _recordProps(t, e) {
              for (var i = Q.getProperty(t.element, null, 'native'), n = (t.props = {}), r = e.length; r--; ) n[e[r]] = (i(e[r]) + '').trim();
              n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0);
            })(n, st[e] || ba(e)),
          (n.ctm = r.getCTM && 'svg' === r.nodeName.toLowerCase() && z(r).inverse()),
          (n.simple = i || (1 === W(h.a) && !W(h.b) && !W(h.c) && 1 === W(h.d))),
          (n.uncache = 0);
      }),
      ElementState);
  function ElementState(t, e, i) {
    (this.element = t), this.update(e, i);
  }
  var Z,
    J =
      (((Z = FlipAction.prototype).getStateById = function getStateById(t) {
        for (var e = this.states.length; e--; ) if (this.states[e].idLookup[t]) return this.states[e];
      }),
      (Z.kill = function kill() {
        this.batch.remove(this);
      }),
      FlipAction);
  function FlipAction(t, e) {
    (this.vars = t), (this.batch = e), (this.states = []), (this.timeline = e.timeline);
  }
  var U,
    K =
      (((U = FlipBatch.prototype).add = function add(e) {
        var t = this.actions.filter(function (t) {
          return t.vars === e;
        });
        return t.length ? t[0] : ((t = new J('function' == typeof e ? { animate: e } : e, this)), this.actions.push(t), t);
      }),
      (U.remove = function remove(t) {
        var e = this.actions.indexOf(t);
        return 0 <= e && this.actions.splice(e, 1), this;
      }),
      (U.getState = function getState(e) {
        var i = this,
          t = tt,
          n = r;
        return (
          (tt = this).state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (t) {
            t.vars.getState && ((t.states.length = 0), ((r = t).state = t.vars.getState(t))),
              e &&
                t.states.forEach(function (t) {
                  return i.state.add(t);
                });
          }),
          (r = n),
          (tt = t),
          this.killConflicts(),
          this
        );
      }),
      (U.animate = function animate() {
        var t,
          e,
          i = this,
          n = tt,
          r = this.timeline,
          a = this.actions.length;
        for (
          tt = this,
            r.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (t) {
              t.vars.animate && t.vars.animate(t);
              var e,
                i,
                n = t.vars.onEnter,
                r = t.vars.onLeave,
                a = t.targets;
              a &&
                a.length &&
                (n || r) &&
                ((e = new ut()),
                t.states.forEach(function (t) {
                  return e.add(t);
                }),
                (i = e.compare(pt.getState(a))).enter.length && n && n(i.enter),
                i.leave.length && r && r(i.leave));
            }),
            la(this._abs),
            this._run.forEach(function (t) {
              return t();
            }),
            e = r.duration(),
            t = this._final.slice(0),
            r.add(function () {
              e <= r.time() &&
                (t.forEach(function (t) {
                  return t();
                }),
                L(i, 'onComplete'));
            }),
            tt = n;
          a--;

        )
          this.actions[a].vars.once && this.actions[a].kill();
        return L(this, 'onStart'), r.restart(), this;
      }),
      (U.loadState = function loadState(n) {
        n =
          n ||
          function done() {
            return 0;
          };
        var r = [];
        return (
          this.actions.forEach(function (e) {
            if (e.vars.loadState) {
              var i,
                t = function f(t) {
                  t && (e.targets = t), ~(i = r.indexOf(f)) && (r.splice(i, 1), r.length || n());
                };
              r.push(t), e.vars.loadState(t);
            }
          }),
          r.length || n(),
          this
        );
      }),
      (U.setState = function setState() {
        return (
          this.actions.forEach(function (t) {
            return (t.targets = t.vars.setState && t.vars.setState(t));
          }),
          this
        );
      }),
      (U.killConflicts = function killConflicts(e) {
        return (
          this.state.interrupt(e),
          this._kill.forEach(function (t) {
            return t.interrupt(e);
          }),
          this
        );
      }),
      (U.run = function run(t, e) {
        var i = this;
        return (
          this !== tt &&
            (t || this.getState(e),
            this.loadState(function () {
              i._killed || (i.setState(), i.animate());
            })),
          this
        );
      }),
      (U.clear = function clear(t) {
        this.state.clear(), t || (this.actions.length = 0);
      }),
      (U.getStateById = function getStateById(t) {
        for (var e, i = this.actions.length; i--; ) if ((e = this.actions[i].getStateById(t))) return e;
        return this.state.idLookup[t] && this.state;
      }),
      (U.kill = function kill() {
        (this._killed = 1), this.clear(), delete h[this.id];
      }),
      FlipBatch);
  function FlipBatch(t) {
    (this.id = t),
      (this.actions = []),
      (this._kill = []),
      (this._final = []),
      (this._abs = []),
      (this._run = []),
      (this.data = {}),
      (this.state = new ut()),
      (this.timeline = Q.timeline());
  }
  var pt =
    ((Flip.getState = function getState(t, e) {
      var i = ua(t, e);
      return r && r.states.push(i), e && e.batch && Flip.batch(e.batch).state.add(i), i;
    }),
    (Flip.from = function from(t, e) {
      return (
        'clearProps' in (e = e || {}) || (e.clearProps = !0),
        Aa(t, ua(e.targets || t.targets, { props: e.props || t.props, simple: e.simple, kill: !!e.kill }), e, -1)
      );
    }),
    (Flip.to = function to(t, e) {
      return Aa(t, ua(e.targets || t.targets, { props: e.props || t.props, simple: e.simple, kill: !!e.kill }), e, 1);
    }),
    (Flip.fromTo = function fromTo(t, e, i) {
      return Aa(t, e, i);
    }),
    (Flip.fit = function fit(t, e, i) {
      var n = i ? _(i, at) : {},
        r = i || n,
        a = r.absolute,
        s = r.scale,
        o = r.getVars,
        l = r.props,
        u = r.runBackwards,
        h = r.onComplete,
        p = r.simple,
        c = i && i.fitChild && V(i.fitChild),
        f = G(e, l, p, t),
        d = G(t, 0, p, f),
        m = l ? et[l] : nt,
        g = Q.context();
      return (
        l && pa(n, f.props),
        fa(d, m),
        u &&
          ('immediateRender' in n || (n.immediateRender = !0),
          (n.onComplete = function () {
            ga(d), h && h.apply(this, arguments);
          })),
        a && ja(d, f),
        (n = ot(d, f, s || c, !n.duration && l, c, n.duration || o ? n : 0)),
        'object' == typeof i && 'zIndex' in i && (n.zIndex = i.zIndex),
        g &&
          !o &&
          g.add(function () {
            return function () {
              return ga(d);
            };
          }),
        o ? n : n.duration ? Q.to(d.element, n) : null
      );
    }),
    (Flip.makeAbsolute = function makeAbsolute(t, e) {
      return (t instanceof ut ? t : new ut(t, e)).makeAbsolute();
    }),
    (Flip.batch = function batch(t) {
      return h[(t = t || 'default')] || (h[t] = new K(t));
    }),
    (Flip.killFlipsOf = function killFlipsOf(t, e) {
      (t instanceof ut ? t.targets : I(t)).forEach(function (t) {
        return t && lt(t._flip, !1 !== e ? 1 : 2);
      });
    }),
    (Flip.isFlipping = function isFlipping(t) {
      var e = Flip.getByTarget(t);
      return !!e && e.isActive();
    }),
    (Flip.getByTarget = function getByTarget(t) {
      return (V(t) || D)._flip;
    }),
    (Flip.getElementState = function getElementState(t, e) {
      return new ht(V(t), e);
    }),
    (Flip.convertCoordinates = function convertCoordinates(t, e, i) {
      var n = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
      return i ? n.apply(i) : n;
    }),
    (Flip.register = function register(t) {
      if ((o = 'undefined' != typeof document && document.body)) {
        (Q = t), p(o), (I = Q.utils.toArray), (T = Q.core.getStyleSaver);
        var i = Q.utils.snap(0.1);
        P = function _closestTenth(t, e) {
          return i(parseFloat(t) + e);
        };
      }
    }),
    Flip);
  function Flip() {}
  (pt.version = '3.13.0'), 'undefined' != typeof window && window.gsap && window.gsap.registerPlugin(pt), (e.Flip = pt), (e.default = pt);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});

class isTickerBar{constructor(e){this.opts={duration:6,main:".ticker-bar",child:".scroll-item-wrapper",elemsInChild:".scroll-item-wrapper .scroll-item",pauseOnHover:!0,...e},this.tween=null,this.destroyed=!0}clone(){const e=document.querySelector(this.opts.child),t=e.parentNode,i=e.cloneNode(!0);i.classList.add("clone"),this.removeFocus(i.querySelectorAll("a")),this.removeFocus(i.querySelectorAll("button")),t.appendChild(i)}removeFocus(e){e.forEach((e=>{e.setAttribute("tabindex",-1)}))}set(){this.main=document.querySelectorAll(this.opts.main),this.main.forEach((e=>{const t=e.querySelectorAll(this.opts.child);gsap.set(t,{xPercent:e=>100*e})}))}pauseOnHoverEvents(e,t){this.opts.pauseOnHover&&document.querySelector("html").classList.contains("no-touch")&&(e.addEventListener("mouseover",(e=>{t.paused()||t.pause()})),e.addEventListener("mouseleave",(e=>{t.paused()&&t.play()})))}animate(){this.main.forEach((e=>{const t=e.querySelectorAll(this.opts.child),i=e.querySelectorAll(this.opts.elemsInChild).length;i>0&&(this.opts.duration*=i);const r=gsap.to(t,{duration:this.opts.duration,ease:"none",xPercent:"-=100",modifiers:{xPercent:gsap.utils.unitize((e=>parseFloat(e)%-100))},repeat:-1});this.tween=r,this.pauseOnHoverEvents(e,r)}))}destroy(){null!==this.tween&&(this.tween.kill(!0),this.main.forEach((e=>{e.querySelector(".clone").remove(),gsap.set(e.querySelector(this.opts.child),{clearProps:"all"})})),this.tween=null,this.destroyed=!0)}initMobile(){let e=window.innerWidth;resizer((()=>(e=e!==window.innerWidth?window.innerWidth:e,e<768&&("desktop"===this.type||void 0===this.type)&&(this.type="mobile",this.destroyed||this.destroy(),this.destroyed)?(this.init(),!1):e>767&&("mobile"===this.type||void 0===this.type)?(this.type="desktop",this.destroyed||this.destroy(),!1):void 0)))}init(){document.querySelectorAll(this.opts.main).length>0&&(this.clone(),this.set(),this.animate(),this.destroyed=!1)}}const checkExpiredTicker={init(){const e=document.querySelector(".ticker-bar");if(null===e)return;let t=e.querySelectorAll(".scroll-item");t.length>0&&(t.forEach((e=>{const t=e.querySelector(".liveBannerStartDateUTC"),i=e.querySelector(".liveBannerExpiryDateUTC");null!==t&&null!==i&&hasExpired(t,i)&&e.remove()})),t=e.querySelectorAll(".scroll-item"),0===t.length?e.remove():document.querySelector("body").classList.add("has-ticker-bar"))}};document.addEventListener("DOMContentLoaded",(()=>{try{if(checkExpiredTicker.init(),null!==document.querySelector(".ticker-bar")){(new isTickerBar).init()}if(null!==document.querySelector(".stats")){new isTickerBar({main:".stats",child:".stats .stats-wrapper",elemsInChild:".stats .stats-wrapper .stat",duration:4.8}).init()}if(null!==document.querySelector(".welcome-section .alternating-stage")){new isTickerBar({main:".welcome-section .alternating-stage",child:".welcome-section .alternating-stage-inner",elemsInChild:".welcome-section .alternating-stage .box",duration:4,pauseOnHover:!1}).initMobile()}const e=document.querySelectorAll(".image-ticker-js");e.length>0&&e.forEach(((e,t)=>{e.setAttribute("id",`ticker-bar-${t}`);new isTickerBar({main:`#ticker-bar-${t}`,child:`#ticker-bar-${t} .image-wrapper`,elemsInChild:`#ticker-bar-${t} .image-wrapper .box`,duration:4,pauseOnHover:!1}).init()}))}catch(e){}}));
class isVideo{constructor(t){const e={container:document.querySelector(".video-section-js"),pausedTitle:"Pause video",playTitle:"Play video",muteTitle:"Mute video",unmuteTitle:"Unmute video"};this.closedCaptionFlag=!1,this.opts={...e,...t}}pause(t,e){const s=e.classList;e.setAttribute("title",this.opts.playTitle),t.pause(),t.setAttribute("paused",!0),s.add("paused")}mute(t,e){const s=e.classList;e.setAttribute("title",this.opts.unmuteTitle),t.muted=!0,s.add("muted")}pauseVideoOnScroll(){const t=this.opts.container;ScrollTrigger.create({trigger:this.opts.container,start:"bottom top",end:"bottom top",onEnterBack:()=>{const e=new CustomEvent("play",{bubbles:!0,cancelable:!0});t.dispatchEvent(e)},onLeave:()=>{const e=new CustomEvent("pause",{bubbles:!0,cancelable:!0});t.dispatchEvent(e)}}),gsap.matchMedia().add("(min-width: 767px)",(()=>(gsap.to(".hero-hp .hero-area__video",{yPercent:-20,ease:"none",scrollTrigger:{trigger:".hero-hp",scrub:!0,pin:!0,pinSpacing:!1,start:"top top",end:"bottom top"}}),()=>{})))}closedCaption(t,e){if(!this.closedCaptionFlag)return t.textTracks[0].mode="showing",e.classList.add("active"),void(this.closedCaptionFlag=!0);t.textTracks[0].mode="hidden",e.classList.remove("active"),this.closedCaptionFlag=!1}unmute(t,e){const s=e.classList;e.setAttribute("title",this.opts.muteTitle),t.muted=!1,s.remove("muted")}play(t,e){const s=e.classList;e.setAttribute("title",this.opts.pausedTitle),t.play(),t.setAttribute("paused",!1),s.remove("paused")}handleButtonPlay(t,e){const s=e.classList;return s.contains("paused")?(this.play(t,e),s.remove("paused"),!1):(this.pause(t,e),s.add("paused"),!1)}handleSound(t,e){const s=e.classList;return s.contains("muted")?(this.unmute(t,e),s.remove("muted"),!1):(this.mute(t,e),s.add("muted"),!1)}events(){const t=this.opts.container;if(null!==t){const e=t.querySelector("video"),s=t.querySelector(".video-control-js"),o=t.querySelector(".sound-control-js"),i=t.querySelector(".video-section__cc");null!==e&&(t.addEventListener("play",(t=>{this.play(e,s)})),t.addEventListener("pause",(t=>{this.pause(e,s)})),null!==s&&s.addEventListener("click",(t=>{t.preventDefault(),this.handleButtonPlay(e,s)})),null!==o&&o.addEventListener("click",(t=>{t.preventDefault(),this.handleSound(e,o)})),null!==i&&i.addEventListener("click",(t=>{t.preventDefault(),this.closedCaption(e,i)})))}}init(){this.events(),this.pauseVideoOnScroll()}}document.addEventListener("DOMContentLoaded",(()=>{try{const t=document.querySelector(".hero-hp video"),e=document.querySelector(".hero-hp .video-control-js"),s=new isVideo;document.addEventListener("preloader-completed",(o=>{s.init(),s.play(t,e)}))}catch(t){}}));
const preloader=()=>{const e=document.querySelector("html"),t=document.querySelector(".custom-preloader");t&&(setTimeout((()=>{e.classList.add("first-stage")}),200),setTimeout((()=>{e.classList.add("second-stage")}),710),setTimeout((()=>{e.classList.add("third-stage");const t=new CustomEvent("preloader-completed",{bubbles:!0,cancelable:!0});document.dispatchEvent(t)}),1400),setTimeout((()=>{e.classList.add("hide-preloader"),t.remove()}),1950))};document.addEventListener("DOMContentLoaded",(()=>{preloader()}));

class WelcomePopup{constructor(e){this.opts={section:".welcome-section",parent:".welcome-popup",title:".welcome-popup__title",close:".welcome-popup__close",card:".staff-card-welcome",staffObj:null},this.staffCollection=e,this.openingTimeout=0,this.destroyPopupTimeout=0,this.popupChangingTimeout=0,this.popupRemovalTimeout=0,this.addScrollTimeout=0,this.generateRelatedTimeout=0,this.activeid=null}focusTrap(e,t){const o=document.querySelector("body").querySelectorAll("*:not(.welcome-popup");if(void 0!==t&&(this.activeid=t),0!==o.length)if("open"!==e){if(null!==this.activeid){const e=document.querySelector(`[data-welcomestaffid="${this.activeid}"] button`);null!==e&&e.focus()}o.forEach((e=>{e.removeAttribute("inert")}))}else o.forEach((e=>{e.setAttribute("inert","")}))}generatePopupRelated(e){new ISGeneralService({type:"staffrelated",url:`${ISWebsiteInformation.websiteUrl}/ajax-calls/`,callback:e=>{const t=document.querySelector(".welcome-popup__related"),o=document.querySelectorAll(".welcome-popup__related-container");if(0===e.length)return t&&t.remove(),void ScrollTrigger.refresh();e.forEach((e=>{const t=sharedGenerateStaffHP(e,!0);o.length>0&&o[o.length-1].insertAdjacentHTML("beforeend",t)}));const s=new CustomEvent("welcome-related-generated",{detail:{cards:document.querySelectorAll(`${this.opts.card}:not(.generated)`)},bubbles:!0,cancelable:!0});document.dispatchEvent(s),this.staffCollection.push(...e),ScrollTrigger.refresh()}},{staffID:e,Take:3}).init()}popupDataGenerate(e,t){const o='<img src="{IMAGE}" alt="" />',s=(void 0!==e.Image&&e.Image.length,e.Image),i=o.replace(/{IMAGE}/g,window.location.host.includes("localhost")?s:cdnGeneralHelpers.getImage(s,{size:500,commands:"&command_3=default&default_3=/Images/default-thumbs/cards-default.jpg",media:!0}));return t.replace(/{NAME}/g,e.FirstName.length>0?e.FirstName:e.FullName).replace(/{IMAGE}/g,i).replace(/{ROLE}/g,e.Roles.length>0?`<span class="role safe-wrap"> / ${e.Roles[0]}</span>`:"").replace(/{HAS_BIO}/g,e.Bio.length>0?"has-bio":"no-bio").replace(/{SUMMARY}/g,e.Summary.length>0?`\n        <div class="secondLvlCss welcome-popup__blockquote safe-wrap">\n          <blockquote>\n            <p>${e.Summary}</p>\n          </blockquote>\n        </div>\n      `:"").replace(/{BIO}/g,e.Bio.length>0?`\n        <div class="welcome-popup__in-column inherit-styles-hp">\n          <div class="secondLvlCss safe-wrap">\n            ${e.Bio}\n          </div>\n        </div>\n      `:"")}generatePopup(e,t,o){const s='\n      <div class="welcome-popup">\n        {WRAPPER}\n      </div>\n    ',i='\n      <div class="welcome-popup__wrapper {ADDITIONAL_CLASSES}">\n        <h3 class="welcome-popup__title"><span class="title safe-wrap"><strong class="name">{NAME}</strong> {ROLE}</span></h3>\n        <div class="welcome-popup__container">\n          <div class="welcome-popup__inner">\n            <button class="welcome-popup__close">\n              <span class="sr-only">Close popup</span>\n              <span class="close-icon"></span>\n            </button>\n            <div class="welcome-popup__content-wrapper">\n              <div class="welcome-popup__content">\n                <div class="welcome-popup__image">\n                  {IMAGE}\n                </div>\n                <div class="welcome-popup__blockquote"></div>\n                <div class="welcome-popup__description">\n                  {SUMMARY}\n                  {BIO}\n                </div>\n              </div>\n              <div class="welcome-popup__related">\n                <h3 class="welcome-popup__related-title">Related Profiles</h3>\n                <div class="welcome-popup__related-container"></div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    ',n=this.staffCollection.find((t=>t.ID==e));if("from-related"===t){const e=document.querySelector(".welcome-popup");e&&e.insertAdjacentHTML("beforeend",this.popupDataGenerate(n,i.replace(/{ADDITIONAL_CLASSES}/g,"is-hidden")));const t=document.querySelectorAll(".welcome-popup__wrapper");gsap.to(t[0],{duration:.5,scrollTo:0,onComplete:()=>{clearTimeout(this.popupChangingTimeout),this.popupChangingTimeout=setTimeout((()=>{t.length>0&&t[t.length-1].classList.remove("is-hidden"),ScrollTrigger.refresh()}),1),clearTimeout(this.popupRemovalTimeout),setTimeout((()=>{t[0].remove()}),300)}})}else{const e=document.querySelector("body"),t=document.querySelector(this.opts.parent);t&&t.remove(),e.insertAdjacentHTML("beforeend",this.popupDataGenerate(n,s.replace(/{WRAPPER}/g,i.replace(/{ADDITIONAL_CLASSES}/g,""))))}const r="from-related"===t?0:501;clearTimeout(this.generateRelatedTimeout),this.generateRelatedTimeout=setTimeout((()=>{this.generatePopupRelated(e)}),r),"function"==typeof o&&o()}destroyScrollTrigger(){const e=ScrollTrigger.getById("titlePin");e&&e.kill(!0);const t=ScrollTrigger.getById("closePin");t&&t.kill(!0)}destroyPopup(){const e=document.querySelector(this.opts.parent);document.querySelector(this.opts.section);e&&(this.destroyScrollTrigger(),e.remove())}pinTitle(e){ScrollTrigger.create({id:"titlePin",scroller:e,trigger:e.querySelector(this.opts.title),pin:!0,pinSpacing:!1,pinType:"fixed"}),ScrollTrigger.create({id:"closePin",scroller:e,trigger:e.querySelector(".welcome-popup__container"),start:"top top+=100px",end:"bottom bottom",pin:e.querySelector(this.opts.close),pinSpacing:!1,pinType:"fixed"})}closePopup(){const e=document.querySelector(this.opts.section),t=document.querySelector(this.opts.parent);this.focusTrap("close"),t.classList.remove("is-active"),e.classList.remove("popup-active"),bodyFix("close","welcome-popup-active"),clearTimeout(this.destroyPopupTimeout),this.destroyPopupTimeout=setTimeout((()=>{this.destroyPopup()}),550)}openPopup(e,t){if(this.focusTrap("open",e),this.generatePopup(e,t,(()=>{const e=document.querySelectorAll(".welcome-popup__wrapper");e.length>0&&(clearTimeout(this.addScrollTimeout),this.addScrollTimeout=setTimeout((()=>{this.pinTitle(e[e.length-1])}),501))})),"from-related"===t)return;const o=document.querySelector(this.opts.section),s=document.querySelector(this.opts.parent);clearTimeout(this.openingTimeout),this.openingTimeout=setTimeout((()=>{s.classList.add("is-active"),o.classList.add("popup-active"),bodyFix("open","welcome-popup-active")}),1)}events(){document.querySelector("body").addEventListener("click",(e=>{const t=e.target.closest(".welcome-section .js-welcomeStaff"),o=e.target.closest(".welcome-section .js-welcomeStaff .trigger-staff"),s=e.target.closest(".welcome-popup .js-welcomeStaff"),i=e.target.closest(".welcome-popup .js-welcomeStaff .trigger-staff"),n=e.target.closest(this.opts.close);if(o&&(e.preventDefault(),e.stopPropagation(),!t.classList.contains("swiper-slide"))){const e=o.getAttribute("data-welcomestaffid");this.openPopup(e,"original")}if(i){e.preventDefault(),e.stopPropagation();const t=s.getAttribute("data-welcomestaffid");this.openPopup(t,"from-related")}if(n)return this.closePopup(),e.preventDefault(),e.stopPropagation(),!1})),document.addEventListener("swiper-slide-clicked",(e=>{const t=e.detail.id;this.openPopup(t,"original")}))}init(){this.events()}}class WelcomeSection{constructor(){this.opts={parent:".welcome-section",carousel:".welcome-section__staff-cards",card:".staff-card-welcome",prevBtn:".welcome-section__prev",nextBtn:".welcome-section__next",progressBar:".welcome-section .swiper-progress",hover:".staff-card-inner",whereToAppend:".staff-card-image"},this.staffObj=null,this.swiper=null}initSwiper(e){if(!e.classList.contains("module-carousel--initialized")){const t=this,o=document.querySelector(t.opts.progressBar),s=document.querySelector(t.opts.prevBtn),i=document.querySelector(t.opts.nextBtn);const fixGrid=e=>{const t=window.innerWidth,o=parseInt((t-70)/241)-1;return o>0?e.slice(0,-o):e},n=new Swiper(e,{slidesPerView:"auto",spaceBetween:30,freeMode:{enable:!0,momentum:!1},focusableElements:"input",navigation:{nextEl:t.opts.nextBtn,prevEl:t.opts.prevBtn,lockClass:"hidden",disabledClass:"disabled"},on:{progress:function(e,t){null!==o&&o.style.setProperty("--scale",`${Math.max(0,Math.min(1,t))}`)},click:function(e,t){const o=t.target;if(t.target.classList.contains("trigger-staff")){const e=o.getAttribute("data-welcomestaffid"),t=new CustomEvent("swiper-slide-clicked",{detail:{id:e},bubbles:!0,cancelable:!0});document.dispatchEvent(t)}},transitionEnd:function(){null!==o&&o.style.removeProperty("--transition")},update:function(){const e=fixGrid(this.slidesGrid);this.snapGrid=[...e]},init:function(){const e=fixGrid(this.slidesGrid);this.snapGrid=[...e]},resize:function(){const e=fixGrid(this.slidesGrid);this.snapGrid=[...e]}}});return i.addEventListener("click",(()=>{o.style.setProperty("--transition","transform 0.3s ease")})),s.addEventListener("click",(()=>{o.style.setProperty("--transition","transform 0.3s ease")})),e.classList.add("module-carousel--initialized"),n}}destroySwiper(e,t,o){e&&(e.destroy(!0,!0),t.classList.remove("module-carousel--initialized"),o.forEach((e=>{e.classList.remove("swiper-slide"),e.removeAttribute("role"),e.removeAttribute("aria-label")})),t.querySelector(".swiper-wrapper").removeAttribute("aria-live"),t.querySelector(".swiper-wrapper").removeAttribute("id"),t.classList.remove("swiper-backface-hidden"))}handleMobileSwiper(){gsap.matchMedia().add("(max-width: 767px",(()=>{const e=document.querySelector(this.opts.carousel);if(null===e)return;const t=e.querySelectorAll(this.opts.card);t.forEach((e=>{e.classList.contains("swiper-slide")||e.classList.add("swiper-slide")}));const o=this.initSwiper(e);return()=>{this.destroySwiper(o,e,t)}}))}playPauseVideoOnHover(e){let t="";const o=e.querySelector(this.opts.hover);this.generateInlineVideo(e),o.addEventListener("mouseenter",(()=>{t=e.querySelector(".inline-video-element"),null!==t&&t.paused&&t.play()})),o.addEventListener("mouseleave",(()=>{null===t||""===t||t.paused||(clearTimeout(this.timeout),this.timeout=setTimeout((()=>{t.currentTime=0}),300),t.pause())}))}generateInlineVideo(e){if(!document.querySelector("html").classList.contains("no-touch"))return;const t=e.querySelector(`${this.opts.hover}:not(.generated)`);if(null===t)return;const o=e.dataset.videoId;if(!(o&&null!==o&&o.length>6||!1))return void t.classList.add("no-video");const s='\n        <div class="staff-card__video">\n          <video muted playsinline loop class="inline-video-element lazyload" data-src="{VIDEO_LINK}" type="video/mp4"></video>\n        </div>\n      ';t.querySelector(this.opts.whereToAppend).insertAdjacentHTML("afterBegin",s.replace(/{VIDEO_LINK}/g,o)),t.classList.add("generated")}generateStaff(e){const t=document.querySelector(this.opts.parent);if(!t)return;const o=t.getAttribute("data-search-subject").split(",");new ISGeneralService({type:"staff",url:`${ISWebsiteInformation.websiteUrl}/ajax-calls/`,callback:e=>{if(e.length>0){const t=document.querySelector(".welcome-section__staff-cards .swiper-wrapper");e.forEach((e=>{const o=sharedGenerateStaffHP(e,!0);t.insertAdjacentHTML("beforeend",o)})),this.initPopup(e),this.handleMobileSwiper(),document.querySelectorAll(`${this.opts.card}:not(.generated)`).forEach((e=>{this.playPauseVideoOnHover(e),e.classList.add("generated")})),ScrollTrigger.refresh()}}},{Take:4,Subject:o}).init()}initPopup(e){new WelcomePopup(e).init(),document.addEventListener("welcome-related-generated",(e=>{const t=e.detail.cards;0!==t.length&&t.forEach((e=>{this.playPauseVideoOnHover(e),e.classList.add("generated")}))}))}init(){this.generateStaff()}}document.addEventListener("DOMContentLoaded",(function(){(new WelcomeSection).init()}));
class AccordionSection{constructor(){this.opts={container:".accordion-section",content:".accordion-section__content",items:".item"},this.contentTops=[],this.hoverTimeout=0,this.removeTimeout=0,this.increment=0,this.sectionId="accordion-section-{ID}"}ariaControl(e,t,o){let i=!0,c=!1;"close"===o&&(i=!1,c=!0),e.setAttribute("aria-expanded",i),t.setAttribute("aria-hidden",c)}ariaIds(e,t){e.setAttribute("aria-controls",this.sectionId.replace(/{ID}/g,this.increment)),t.setAttribute("id",this.sectionId.replace(/{ID}/g,this.increment)),this.increment++}open(e){const t=e.querySelector(".item__content"),o=e.querySelector("button"),i=e.dataset.itemId;document.querySelectorAll(`.accordion-section__images .changed-image[data-image-id="${i}"]`).forEach((e=>{e.classList.add("active")})),e.classList.add("active"),this.ariaControl(o,t,"open")}close(e){const t=e.querySelector(".item__content"),o=e.querySelector("button"),i=e.dataset.itemId;document.querySelectorAll(`.accordion-section__images .changed-image[data-image-id="${i}"]`).forEach((e=>{e.classList.remove("active")})),e.classList.remove("active"),this.ariaControl(o,t,"close")}calculateHeight(e,t){let o=e.offsetHeight;const i=e.querySelector(".accordion-section__container"),c=e.querySelector(".accordion-section__images"),s=e.querySelectorAll(".item__content");let n=Array.from(s).reduce(((e,t)=>t.offsetHeight),0);if(null===i)return;let r=i.offsetHeight;const setStyles=()=>{i.style.marginTop=(o-r-n)/2+"px",c.style.height=o-n+"px"};setStyles(),$(window).smartresize((function(){n=Array.from(s).reduce(((e,t)=>t.offsetHeight),0),o!==e.offsetHeight&&(o=e.offsetHeight),r!==i.offsetHeight&&(r=i.offsetHeight),setStyles()}))}hoverEvents(e){const t=document.querySelector("html");let o=!1;const i=document.querySelector(".accordion-section");e.forEach(((c,s)=>{t.classList.contains("no-touch")&&(c.addEventListener("mouseenter",(()=>{clearTimeout(this.hoverTimeout),clearTimeout(this.removeTimeout),o=!0,this.hoverTimeout=setTimeout((()=>{this.open(c),i.classList.add("active-element")}),300)})),c.addEventListener("mouseleave",(()=>{clearTimeout(this.hoverTimeout),clearTimeout(this.removeTimeout),this.removeTimeout=setTimeout((()=>{i.classList.remove("active-element")}),100),this.close(c),o=!1})));const n=c.querySelector("button");null!==n&&n.addEventListener("click",(()=>{if(clearTimeout(this.hoverTimeout),!o){if(e.forEach((e=>{e!==c&&this.close(e)})),c.classList.contains("active"))return this.close(c),void i.classList.remove("active-element");i.classList.add("active-element"),this.open(c)}})),document.addEventListener("click",(t=>{null===t.target.closest(".accordion-section__content .item__container")&&(e.forEach((e=>{this.close(e)})),i.classList.remove("active-element"))}))}))}init(){const e=document.querySelector(this.opts.container);if(!e)return;const t=e.querySelector(this.opts.content);if(!t)return;const o=t.querySelectorAll(this.opts.items);0!==o.length&&(o.forEach((e=>{const t=e.querySelector("button"),o=e.querySelector(".item__content");this.ariaIds(t,o)})),this.hoverEvents(o),this.calculateHeight(e,t))}}document.addEventListener("DOMContentLoaded",(()=>{(new AccordionSection).init()}));
ScrollTrigger.config({ignoreMobileResize:!0});class CardsScroller{constructor(){this.opts={scroller:".cards-scroller",fader:".cards-scroller__container",items:".cards-scroller__item",rotatorParent:".cards-scroller__rotator",rotatorItems:".cards-scroller__rotator-item",devTools:!1},this.mainTimeline=null}renderRotator(t){const r=document.querySelectorAll(this.opts.items).length,e=r<10?`0${r}`:r;let o="";for(let t=0;t<r;t++)o+=`<div class="cards-scroller__rotator-item">${t<10?`0${t+1}`:t+1}</div>`;const s=`\n      <div class="cards-scroller__rotator">\n        <div class="cards-scroller__rotator-inner">\n          <div class="cards-scroller__rotator-current">\n            ${o}\n            <div class="reference" aria-hidden="true">02</div>\n          </div>\n          <span class="separator">/</span>\n          <div class="cards-scroller__rotator-total">${e}</div>\n        </div>\n      </div>\n    `;t.insertAdjacentHTML("afterBegin",s)}setRotatorNumber(t){const r=t.querySelectorAll(this.opts.rotatorItems),e=gsap.timeline({id:"rotator-timeline",paused:1});r.forEach(((t,o)=>{gsap.set(t,{top:100*o+"%",yPercent:0,opacity:0}),0===o&&gsap.set(t,{opacity:1}),e.add(`m${o}`),o>0&&(e.to(r,{yPercent:-100*o,duration:1}),e.to(t,{opacity:1,duration:1},"<"),e.to(r[o-1],{opacity:0,duration:1},"<"))})),this.timeline=e,window.tl=e}faderDestroy(t,r){const e=document.querySelectorAll(this.opts.rotatorItems);e.length>0&&e.forEach((t=>{t.removeAttribute("style")})),t.slick("unslick"),t[0].classList.forEach((r=>{r.includes("slick-number")&&t[0].classList.remove(r)})),r.forEach((t=>{t.removeAttribute("tabindex"),t.removeAttribute("style")}))}handleFaderNumberRotator(t,r,e){const o=document.querySelectorAll(this.opts.rotatorItems),tlIn=()=>{const t=gsap.timeline({id:"tlIn"});return t.fromTo(o[r],{yPercent:100*e,opacity:0},{yPercent:0,opacity:1}),t},tlOut=r=>{const s=gsap.timeline({id:"tlOut"});return s.fromTo(o[t],{yPercent:0,opacity:1},{yPercent:-100*e,opacity:0}),s};return((t,r)=>{const e=gsap.timeline({id:"is-rotator"});return e.add(tlIn).add(tlOut,">"),e})()}faderInit(t){t.on("beforeChange",((t,r,e,o)=>{let s=0;s=1==Math.abs(o-e)?o-e>0?1:-1:o-e>0?-1:1,this.handleFaderNumberRotator(e,o,s)})),t.slick({arrows:!1,autoplay:!1,fade:!0,rows:0})}scroller(t,r){if(0===t.length)return;const e=gsap.matchMedia();e.add("(min-width: 768px)",(()=>(this.setRotatorNumber(r),ScrollTrigger.create({animation:this.timeline,trigger:r,start:"top top",scrub:1,end:"bottom bottom",pin:r.querySelector(this.opts.rotatorParent),pinSpacing:!1,markers:!1}),t.forEach(((r,e)=>{e<t.length-1&&gsap.to(r,{scale:.8,willChange:"transform",scrollTrigger:{trigger:r,markers:!1,start:"top top",end:"bottom+=100% top",pin:!0,pinSpacing:!1,scrub:!0}})})),()=>{gsap.set(t,{clearProps:"all"}),killTimeline("rotator-timeline")}))),e.add("(max-width: 767px)",(()=>{const r=$(this.opts.fader);return this.faderInit(r),()=>{this.faderDestroy(r,t),killTimeline("tlIn"),killTimeline("tlOut"),killTimeline("is-rotator")}}))}devTools(){GSDevTools.create({animation:"rorator-timeline"})}init(){const t=document.querySelectorAll(this.opts.scroller);if(0===t.length)return;const r=t[0],e=r.querySelectorAll(this.opts.items);this.renderRotator(r),this.scroller(e,r),this.opts.devTools&&this.devTools()}}document.addEventListener("DOMContentLoaded",(()=>{(new CardsScroller).init()}));
class Tilling{constructor(){this.opts={parent:".tilling-cards",images:".tilling__images",tillingCards:".tilling__card",description:".tilling-cards__description"},this.breakpoints={1600:{columns:7,rows:7,placement:{0:{col:4,row:1,span:2},1:{col:2,row:3,span:1},2:{col:3,row:4,span:2}}},"1025, 1599":{columns:6,rows:7,placement:{0:{col:4,row:1,span:2},1:{col:2,row:3,span:1},2:{col:3,row:4,span:2}}},"768, 1024":{columns:4,rows:7,placement:{0:{col:2,row:1,span:2},1:{col:1,row:3,span:1},2:{col:2,row:4,span:2}}},"0, 767":{columns:3,rows:9,placement:{0:{col:1,row:1,span:2},1:{col:1,row:4,span:1},2:{col:1,row:6,span:2}}}},this.cardId=0,this.smallCards=[],this.bigCards=[]}createTileCard(){this.cardId++;const e=gsap.utils.wrap(1,10);return`<div class="tilling__card" data-id="${this.cardId}" data-placeholder="${e(this.cardId)}">\n      <div class="tilling__card-animate-container">\n        <img data-src="Images/assets/plaques/Plaque${e(this.cardId)}.jpg" class="tilling__image full-image lazyload" />\n      </div>\n    </div>`}progressBar(e,t){this.opts;const a=e.querySelector(".progress-bar"),s=e.querySelector("video");void 0!==this.animationFrame&&null!==this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),t?s.pause():s.play();const updateProgressBar=()=>{const e=s.currentTime/s.duration;a.style.setProperty("--updateProgress",`${e}`),this.animationFrame=requestAnimationFrame(updateProgressBar)};s.addEventListener("timeupdate",updateProgressBar),s.addEventListener("play",(()=>{this.animationFrame=requestAnimationFrame(updateProgressBar)}))}staffCardTemplate(e,t,a){const s='<img data-src="{IMAGE}" alt="" class="full-image lazyload" />',n='\n      <div class="staff-card staff-card-tilling  {HAS_BIO} {HAS_VIDEO}">\n        <div class="staff-card-inner">\n          {SOUND_CONTROL}\n          <button class="full-link js-staffPopup" data-staffid="{STAFF_ID}"></button>\n          {PROGRESS_BAR}\n          <div class="staff-card-image">\n            {IMAGE}\n            {VIDEO}\n          </div>\n          <div class="staff-card-content">\n            <div class="scc-inner">\n              <p class="scc-name safe-wrap"><span class="name">{NAME}</span>{YEAR}{ARROW}</p>\n              {SUMMARY}\n            </div>\n          </div>\n        </div>\n      </div>\n    ',r=void 0!==e.MobileImage&&e.MobileImage.length>2?e.MobileImage:e.Image,i=s.replace(/{IMAGE}/g,window.location.host.includes("localhost")?r:cdnGeneralHelpers.getImage(r,{size:500,commands:"&command_3=default&default_3=/Images/default-thumbs/cards-default.jpg",media:!0})),l=e.VideoUrl.length>2&&a?`\n        <div class="staff-card__video">\n          <video muted playsinline loop class="inline-video-element lazyload" data-src="${e.VideoUrl}" type="video/mp4"></video>\n        </div>\n      `:"",o=e.VideoUrl.length>2&&a?'\n        <button class="sound-control muted">\n          <span class="g-icon g-sound-on-icon"></span>\n          <span class="g-icon g-sound-off-icon"></span>\n          <span class="sr-only muted-text">Mute</span>\n          <span class="sr-only unmute-text">Unmute</span>\n        </button>\n      ':"",c=e.VideoUrl.length>2&&a?'<div class="progress-bar" style="--updateProgress: 0;"><span class="progress-bar__inner"></span></div>':"";return n.replace(/{IMAGE}/g,i).replace(/{URL}/g,e.Url).replace(/{NAME}/g,e.FirstName).replace(/{VIDEO}/g,l).replace(/{PROGRESS_BAR}/g,c).replace(/{SOUND_CONTROL}/g,o).replace(/{HAS_VIDEO}/g,e.VideoUrl.length>2?"has-video":"no-video").replace(/{YEAR}/g,e.Year.length>0?`<span class="scc-year safe-wrap"> / ${e.Year[0]}</span>`:"").replace(/{HAS_BIO}/g,e.Bio.length>0?"has-bio":"no-bio").replace(/{ARROW}/g,e.Bio.length>0?'<span class="g-plus"></span>':"").replace(/{SUMMARY}/g,e.Summary.length>0&&t?`\n        <div class="staff-card-summary">\n          <p>${e.Summary}</p>\n        </div>\n      `:"").replace(/{STAFF_ID}/g,e.ID)}createStaffCard(e,t){const a=2===t?this.bigCards.filter((e=>!e.usedInGrid)):this.smallCards.filter((e=>!e.usedInGrid));if(2===t){if(0===a.length)return`\n          ${this.createTileCard()}\n          ${this.createTileCard()}\n        `;const e=`<div class="tilling__card tilling-card__staff tilling-card__span-2">      <div class="tilling__card-animate-container">${this.staffCardTemplate(a[0],!0,!0)}</div></div>`;return a[0].usedInGrid=!0,e}if(1===t){if(0===a.length)return this.createTileCard();const e=`<div class="tilling__card tilling-card__staff tilling-card__span-1">      <div class="tilling__card-animate-container">${this.staffCardTemplate(a[0],!1,!1)}</div></div>`;return a[0].usedInGrid=!0,e}return""}createCards(e,t,a,s,n){this.bigCards.length>0&&this.bigCards.forEach((e=>{e.usedInGrid=!1})),this.smallCards.length>0&&this.smallCards.forEach((e=>{e.usedInGrid=!1})),e.innerHTML="";const r=Array.from(e.classList).find((e=>e.startsWith("grid-")));e.classList.remove(r),e.classList.add(`grid-${t}`);for(let t=0;t<a;t++){const a=document.createElement("div");a.className="column";let r=0;for(const e in n){const s=n[e];if(s.col===t){for(;r<s.row;)a.insertAdjacentHTML("beforeend",this.createTileCard()),r++;a.insertAdjacentHTML("beforeend",this.createStaffCard(e,s.span)),r+=s.span}}for(;r<s;)a.insertAdjacentHTML("beforeend",this.createTileCard()),r++;e.appendChild(a)}const i=e.dataset.plaqueText;i&&i.length>0&&e.insertAdjacentHTML("beforeend",`<div class="plaque-text"><p>${i}</p></div>`),ScrollTrigger.refresh()}generateTileCards(){const e=gsap.matchMedia(),t=this.breakpoints;Object.keys(t).forEach(((a,s)=>{const n=t[a],r=a.split(",").map((e=>e.trim())),i=r[0]?`(min-width: ${r[0]}px)`:"",l=r[1]?`and (max-width: ${r[1]}px)`:"",o=n.placement;e.add(`${i} ${l}`,(()=>{const e=document.querySelector(".tilling__layer");this.createCards(e,r[0],n.columns,n.rows,o),r[0]>0&&(gsap.to(`${this.opts.description} .secondLvlCss`,{yPercent:-60,scrollTrigger:{trigger:this.opts.description,pin:this.opts.description,pinSpacing:!1,start:"top top",end:"bottom top",scrub:!0}}),gsap.from(`${this.opts.tillingCards} .tilling__card-animate-container`,{yPercent:function(e,t){return t.parentNode.classList.contains("long")?50:100},stagger:{each:.02,axis:"x",from:"center"},duration:1,scrollTrigger:{trigger:".tilling-cards",start:"top bottom",end:"top+=15% top",scrub:1}}),gsap.to(".tilling__layer",{scale:.9,autoAlpha:0,transformOrigin:"center bottom",scrollTrigger:{trigger:".tilling__layer",start:"bottom bottom",end:"bottom center",pinSpacing:!1,scrub:!0,pin:!0}}),gsap.from(".tilling-cards__description2 .tilling-cards__description-inner",{yPercent:100,scrollTrigger:{trigger:".tilling-cards__description2",start:"top bottom",end:"center+=40% top",scrub:!0}}),ScrollTrigger.create({trigger:".tilling-cards__description2",start:"top top",end:"bottom top",pin:".tilling-cards__description2",pinSpacing:!0}));return document.querySelectorAll(".tilling__card").forEach((e=>{null!==e.querySelector("video")&&ScrollTrigger.create({trigger:e,start:"center bottom",end:"bottom-=10% top",invalideateOnRefresh:!0,onEnter:()=>this.progressBar(e,!1),onEnterBack:()=>this.progressBar(e,!1),onLeave:()=>this.progressBar(e,!0),onLeaveBack:()=>this.progressBar(e,!0)})})),ScrollTrigger.refresh(!0),()=>{cancelAnimationFrame(this.animationFrame),this.animationFrame=null,e.innerHTML=""}}))}))}bringStaffData(){const e=document.querySelector(this.opts.parent);if(null===e)return;const t=void 0!==e.dataset.searchSubject&&null!==e.dataset.searchSubject&&e.dataset.searchSubject.length>2?e.dataset.searchSubject.split(","):[];new ISGeneralService({type:"staff",url:`${ISWebsiteInformation.websiteUrl}/ajax-calls/`,callback:e=>{e.length>0&&e.forEach((e=>{const t=e.VideoUrl.length>3;e.usedInGrid=!1,t?this.bigCards.push(e):this.smallCards.push(e)})),this.generateTileCards()}},{Take:3,Subject:t}).init()}events(){document.addEventListener("click",(e=>{const t=e.target.closest(".staff-card-tilling.has-video .sound-control");if(null!==t){const e=t.parentNode.querySelector("video");null!==e&&(t.classList.contains("muted")?(t.classList.remove("muted"),e.muted=!1):(t.classList.add("muted"),e.muted=!0))}}))}init(){this.bringStaffData(),this.events()}}document.addEventListener("DOMContentLoaded",(()=>{(new Tilling).init()}));
class OthersPopup{constructor(){}openSlideout(e){document.querySelector(`.${e}`).classList.add("opened")}buildNotice(e){return`\n      <div class="slideout-card notices-card ${null!==e.image&&e.image.length>0?"has-image":""}">\n        ${null!==e.image&&e.image.length>0?`<div class="slideout-card-image-col"><div class="slideout-card-image"><img data-src="${e.image}" alt="" class="lazyload"></img></div></div>`:""}\n        <div class="slideout-card-content">\n          <p class="slideout-card-title">${e.title}</p>\n          <div class="slideout-card-text inherit-styles-hp">\n            <div class="secondLvlCss">${e.description}</div>\n            ${null!==e.url&&e.url.length>0?`<a href="${e.url}" target="${e.target}" class="read-more"><span class="txt">Find out more</span> <span class="g-icon g-arrow-corner-bold-icon"></span></a>`:""}\n            \n          </div>\n        </div>\n      </div>`}buildNotices(){let e=null;const t=document.querySelector(".popup-btn--notices"),o=document.querySelector(".popup-btn-wrapper--notices"),l=document.querySelector(".notices-popup");if(null===l||null===t)return;const n=l.querySelector(".slideout-content");if("undefined"==typeof noticesCollection||0===noticesCollection.length)return t.remove(),void l.remove();e=noticesCollection.filter((e=>{const t=e.noticeStartDateUTC,o=e.noticeExpiryDateUTC,l=new Date(t).getTime()||new Date("2020/01/01 12:00").getTime(),n=new Date(o).getTime()||new Date("2050/01/02 12:00").getTime(),r=new Date,c=new Date(r.toISOString());if(!(c>=n||c<=l))return e}));const r=e.length;if(0===r)return o.remove(),t.remove(),void l.remove();t.classList.add("has-content"),t.querySelector(".counter-js").innerHTML=r,e.forEach((e=>{n.insertAdjacentHTML("beforeend",this.buildNotice(e))}))}listeners(){document.querySelectorAll(".open-slideout").forEach((e=>{e.addEventListener("click",(t=>{this.openSlideout(e.dataset.target),bodyFix("open","modal-opened")}))})),this.close()}closeAlert(){const e=document.querySelector(".alert-popup");e.classList.remove("opened"),bodyFix("close","modal-opened");const t=document.querySelectorAll(".popup-btn-wrapper");null!==e?"1"!==cdnGeneralHelpers.getCookie("alert-opened")&&(cdnGeneralHelpers.setCookie("alert-opened",1,30),t.length>0&&document.querySelectorAll(".popup-btn-wrapper").forEach((e=>{e.classList.add("show")}))):t.length>0&&t.forEach((e=>{e.classList.add("show")}))}checkAlertExpiry(){const e=document.querySelector(".alertStartDateUTC"),t=document.querySelector(".alertExpiryDateUTC"),o=document.querySelectorAll(".popup-btn-wrapper");if(null!==e&&null!==t&&hasExpired(e,t)){const e=document.querySelector(".alert-popup"),t=document.querySelector(".popup-btn--alert");if(o.length>0&&document.querySelectorAll(".popup-btn-wrapper").forEach((e=>{e.classList.add("show")})),null===e||null===t)return;e.remove(),t.remove()}}openOnLoad(){const e=document.querySelector(".alert-popup");null!==e&&"1"!==cdnGeneralHelpers.getCookie("alert-opened")&&null!=e&&(e.classList.add("opened"),bodyFix("open","modal-opened"))}openAlert(){const e=document.querySelector(".popup-btn--alert"),t=document.querySelector(".alert-popup");if(null===e||null===t)return;const o=document.querySelector(".alert-popup .close-button");e.classList.add("has-content"),e.addEventListener("click",(()=>{t.classList.add("opened"),bodyFix("open","modal-opened")})),t.addEventListener("click",(e=>{e.target.closest(".alert-popup-card")||this.closeAlert()})),o.addEventListener("click",(e=>{this.closeAlert()}))}close(){document.querySelectorAll(".others-popup").forEach((e=>{e.addEventListener("click",(t=>{!t.target.closest(".slideout")&&e.classList.contains("opened")&&(e.classList.remove("opened"),bodyFix("close","modal-opened"))})),e.querySelector(".close-button").addEventListener("click",(()=>{e.classList.remove("opened"),bodyFix("close","modal-opened")}))}))}init(){this.checkAlertExpiry(),this.buildNotices(),this.listeners(),this.openAlert(),this.openOnLoad()}}
const hpMarketing={textSlider:null,handleDescription:()=>{$(".hp-marketing .hpm-description").clone().prependTo(".hp-section-1")},initializeCarousels:()=>{const e=new Swiper(".hpm-image-slider",{speed:900,loop:!0,crossFade:!0,autoplay:{delay:$(".hp-marketing").attr("data-carousel-delay")},effect:"fade",pagination:{el:".hpm-text-container .swiper-pagination",clickable:!0,renderBullet:function(e,t){return`<button class="${t} crsl-ctrl"></button>`}}});function updateMaxHeight(e){let t=0;e.slides.forEach((e=>{const i=e.querySelector("p");i&&(t=Math.max(t,i.offsetHeight)),hpMarketing.textSlider&&hpMarketing.textSlider.updateSize()})),gsap.set(e.el,{height:`${t}px`})}hpMarketing.textSlider=new Swiper(".hpm-text-slider",{direction:"vertical",speed:900,loop:!0,slidesPerView:1,allowTouchMove:!1,autoHeight:!0,on:{init:e=>{updateMaxHeight(e),document.fonts&&document.fonts.ready&&document.fonts.ready.then((()=>updateMaxHeight(e))),resizer((()=>{updateMaxHeight(e)})),gsap.to(".hpm-text-container",{autoAlpha:1,duration:.5})}}}),e.controller.control=hpMarketing.textSlider,hpMarketing.textSlider.controller.control=e,resizer((()=>{updateMaxHeight(hpMarketing.textSlider)}))},init:()=>{hpMarketing.initializeCarousels(),hpMarketing.handleDescription()}};hpMarketing.init();
!function(e){e.HomepageAsync=function(){},e.HomepageAsync.AddMediaItems=function(n){MediaServiceHelper=new e.MediaServiceHelper({ServiceUrl:e("#MediaPlusUrl").val(),FeedsJson:MediaPlusFeedsArray,FeedGroups:sharedFeedGroups,InitCallBack:function(t){const d=[];for(let e=0;e<t.FeedGroups.length;e++)for(let n=0;n<t.FeedGroups[e].FeedIds.length;n++){"events"!==t.FeedGroups[e].GroupName.toLowerCase()&&d.push(t.FeedGroups[e].FeedIds[n])}n.length&&d.length&&function(n,t){if(t.length)for(let d=0;d<n.length;d++){const o=e(n[d]);e.MediaServiceHelper.GetMediaItemsAdvanced({FeedIds:t,TakeCount:12,callback:function(e){if(e.length>0){"undefined"!=typeof mpHelper&&mpHelper.storeInfoForMediaPopup(e);for(let n=0;n<e.length;n++)o.append(sharedGenerateMediaItemHtmlHP(e[n]));hpSection4.callback()}else o.remove()}})}}(n,d)}})}}(jQuery);
const hpCustomElements={highlightedText:()=>{document.querySelectorAll(".hp-section-3 strong, .hp-section-6 strong").forEach((e=>{gsap.to(e,{scrollTrigger:{trigger:e,start:"top 80%",once:!0},onStart:()=>{gsap.to(e,{backgroundSize:"100% 100%",duration:1})}})}))},init:()=>{hpCustomElements.highlightedText()}},hpSection1={scroller:()=>{gsap.set(".hp1-description",{autoAlpha:0,y:50});gsap.timeline({scrollTrigger:{trigger:".hp1-inner",start:"top center",end:"bottom bottom"}}).to(".hp1-description",{autoAlpha:1,y:0,duration:1})},init:()=>{hpSection1.scroller()}},hpSection2={carousel:null,userHasInteracted:!1,firstInit:!0,$container:$(".hp2-carousel"),getCards:()=>new Promise((e=>{new ISGeneralService({type:"cards"}).init((t=>e(t||[])))})),appendCardsInterleaved:(e,t)=>{const n=$(".hp2-carousel .swiper-wrapper"),o=Math.max(e.length,t.length);for(let a=0;a<o;a++)a<t.length&&n.append(sharedGenerateCardHP(t[a])),a<e.length&&n.append(hpSection2.generateStatCardHP(e[a]))},generateStatCardHP:e=>`\n    <div class="swiper-slide">\n      <div class="stat-card-hp">\n        <div class="stat-card-hp-inner">\n          <div class="schp-content">\n            <div class="schp-quote secondLvlCss"><blockquote>${e.quote??""}</blockquote></div>\n            <div class="schp-info">\n              <div class="schp-name">${e.name??""}</div>\n              ${e.role&&""!==e.role.trim()?`<div class="schp-role">${e.role}</div>`:""}\n            </div>\n          </div>\n        </div>\n        ${e.image&&""!==e.image.trim()?`<div class="schp-image">\n                 <img src="" data-src="${e.image}" alt="Photo of ${e.name??""}" class="lazyload">\n               </div>`:""}\n      </div>\n    </div>\n  `,initializeCarousel:()=>{const e=document.querySelector(".hp2-navigation .swiper-button-next"),t=document.querySelector(".hp2-navigation .swiper-button-prev");hpSection2.carousel=new Swiper(".hp2-carousel",{navigation:{nextEl:e,prevEl:t},initialSlide:1,loop:!0,on:{touchStart:()=>{hpSection2.userHasInteracted=!0},sliderMove:()=>{hpSection2.userHasInteracted=!0}},centeredSlides:!0,spaceBetween:20,breakpoints:{0:{slidesPerView:1.28},450:{slidesPerView:1.8},600:{slidesPerView:2.2},768:{slidesPerView:2.3},1024:{slidesPerView:3.25},1200:{slidesPerView:4},1440:{slidesPerView:4.25},1920:{slidesPerView:5.25},2200:{slidesPerView:6.25}}})},handleVideo:()=>{const e=".hp1-video-wrapper.not-ghost",t=".hp1-video-container",n=".hp1-video-decoration",o=".hp1-video-audio",a=".hp1-video",r=".hp1-col",i=".hp1-inner";function getPlaybackState(){const t=$(e).find(a).get(0);if(!t)return{playing:!1,muted:!0};return{playing:!t.paused&&!t.ended,muted:t.muted}}function applyUI(a,r,i){$(n).toggleClass("active",a),$(o).toggleClass("active",a).toggleClass("audio-toggle",r),$(t).toggleClass("active",a),"mobile"===i&&$(e).toggleClass("active",a)}function flipTargets(){return[e,`${e} ${t}`,`${e} ${n}`,`${e} ${o}`]}const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function flipFrom(e,t){s?t&&"function"==typeof t.onComplete&&t.onComplete():Flip.from(e,t)}let l=!1;function desktopFlipToggle(n,o={}){if(l)return;const s=$(e);if(!s.length)return;const p=Flip.getState(flipTargets()),d=s.find(a).get(0),c=!!o.preserveMute,u=!d||d.muted;d?n?c?(d.paused&&d.play().catch((()=>{})),d.muted=u,applyUI(!0,d.muted,"desktop")):(d.muted=!1,applyUI(!0,d.muted,"desktop"),d.play().catch((()=>{d.muted=!0,applyUI(!0,d.muted,"desktop"),d.play().catch((()=>{}))}))):(d.pause(),d.muted=!0,applyUI(!1,d.muted,"desktop")):applyUI(!!n,!0,"desktop"),n?(s.appendTo(i).addClass("active"),s.find(t).addClass("active")):(s.appendTo(r).removeClass("active"),s.find(t).removeClass("active")),l=!0,flipFrom(p,{duration:1,ease:"power1.inOut",absolute:!0,nested:!0,onComplete:()=>{(()=>{const e=getPlaybackState();applyUI(e.playing,e.muted,"desktop")})(),l=!1}})}!function(){const t=$(e).find(a).get(0);if(!t)return;const sync=()=>{const e=matchMedia("(max-width: 767px)").matches?"mobile":"desktop",t=getPlaybackState();applyUI(t.playing,t.muted,e)};t.addEventListener("play",sync),t.addEventListener("playing",sync),t.addEventListener("pause",sync),t.addEventListener("ended",sync),t.addEventListener("volumechange",sync)}();const p=gsap.matchMedia();p.add("(min-width: 768px)",(()=>{$(document).off("click.hp1desk click.hp1deskAudio"),$(document).on("click.hp1desk",`${e} ${n}`,(t=>{t.preventDefault(),t.stopImmediatePropagation();desktopFlipToggle(!$(e).hasClass("active"),{preserveMute:!1})})),$(document).on("click.hp1deskAudio",`${e} ${o}`,(t=>{t.preventDefault();const n=$(e).find(a).get(0);if(!n)return;n.muted=!n.muted;const o=getPlaybackState();applyUI(o.playing,o.muted,"desktop")}));const t=getPlaybackState(),r=$(e);if(r.length){const e=r.parent().is(i);t.playing&&!e?desktopFlipToggle(!0,{preserveMute:!0}):!t.playing&&e?desktopFlipToggle(!1,{preserveMute:!0}):applyUI(t.playing,t.muted,"desktop")}return()=>$(document).off("click.hp1desk click.hp1deskAudio")})),p.add("(max-width: 767px)",(()=>{const t=$(e);if(!t.length)return;const s=getPlaybackState();if(t.parent().is(i)){const e=Flip.getState(flipTargets());t.appendTo(r).removeClass("active"),flipFrom(e,{duration:.9,ease:"power1.inOut",absolute:!0,scale:!0,nested:!0,onComplete:()=>{applyUI(s.playing,s.muted,"mobile")}})}else applyUI(s.playing,s.muted,"mobile");return $(document).off("click.hp1mob"),$(document).on("click.hp1mob",`${e} ${n}`,(()=>{!function(t){const n=$(e);if(!n.length)return;const o=n.find(a).get(0);if(!o)return;o.setAttribute("playsinline","");const sync=()=>{const e=getPlaybackState();applyUI(e.playing,e.muted,"mobile")};t?(o.muted=!1,applyUI(!0,o.muted,"mobile"),o.play().then((()=>requestAnimationFrame(sync))).catch((()=>{o.muted=!0,applyUI(!0,o.muted,"mobile"),o.play().then(sync).catch(sync)}))):(o.pause(),o.muted=!0,sync())}(!getPlaybackState().playing)})),$(document).on("click.hp1mob",`${e} ${o}`,(()=>{const t=$(e).find(a).get(0);if(!t)return;t.muted=!t.muted;const n=getPlaybackState();applyUI(n.playing,n.muted,"mobile")})),()=>$(document).off("click.hp1mob")})),function(){let e=null;const sync=()=>{e=null;const t=getPlaybackState(),n=matchMedia("(max-width: 767px)").matches?"mobile":"desktop";applyUI(t.playing,t.muted,n)},schedule=()=>{e||(e=requestAnimationFrame(sync))};window.addEventListener("orientationchange",schedule),window.addEventListener("resize",schedule)}()},callback:()=>{$(".hp2-carousel-wrapper").addClass("loaded")},scroller:()=>{const e=gsap.utils.toArray([".hp2-subheader",".hp2-header",".hp2-description"]);gsap.from(e,{autoAlpha:0,y:50,duration:1,stagger:.2,scrollTrigger:{trigger:".hp-section-2",start:"top center",endTrigger:".hp2-text",end:"top center"}})},init:async()=>{try{const e="undefined"!=typeof statsHPCollection?statsHPCollection:[],t=await hpSection2.getCards();hpSection2.callback(),hpSection2.appendCardsInterleaved(e,t),hpSection2.initializeCarousel(),hpSection2.handleVideo(),hpSection2.scroller()}catch(e){}}},hpSection3={scroller:()=>{const e=gsap.utils.toArray([".hp3-subheader",".hp3-header",".hp3-description"]);gsap.from(e,{autoAlpha:0,y:50,duration:1,stagger:.2,scrollTrigger:{trigger:".hp-section-3",start:"top center",endTrigger:".hp3-title",end:"top center"}})},init:()=>{hpSection3.scroller()}};function horizontalLoop(e,t){e=gsap.utils.toArray(e);const n=(t=t||{}).onChange;let o=0;const a=gsap.timeline({repeat:t.repeat,onUpdate:n&&function(){const t=a.closestIndex();o!==t&&(o=t,n(e[t],t))},paused:t.paused,defaults:{ease:"none"},onReverseComplete:()=>a.totalTime(a.rawTime()+100*a.duration())}),r=e.length,i=e[0].offsetLeft,s=[],l=[],p=[],d=[];let c=0,u=!1;const g=t.center,h=100*(t.speed||1),m=!1===t.snap?e=>e:gsap.utils.snap(t.snap||1);let f=0;const v=!0===g?e[0].parentNode:gsap.utils.toArray(g)[0]||e[0].parentNode;let y;const populateWidths=()=>{let n,o=v.getBoundingClientRect();e.forEach(((e,t)=>{l[t]=parseFloat(gsap.getProperty(e,"width","px")),d[t]=m(parseFloat(gsap.getProperty(e,"x","px"))/l[t]*100+gsap.getProperty(e,"xPercent")),n=e.getBoundingClientRect(),p[t]=n.left-(t?o.right:o.left),o=n})),gsap.set(e,{xPercent:e=>d[e]}),y=e[r-1].offsetLeft+d[r-1]/100*l[r-1]-i+p[0]+e[r-1].offsetWidth*gsap.getProperty(e[r-1],"scaleX")+(parseFloat(t.paddingRight)||0)};let w;const populateOffsets=()=>{f=g?a.duration()*(v.offsetWidth/2)/y:0,g&&s.forEach(((e,t)=>{s[t]=w(a.labels[`label${t}`]+a.duration()*l[t]/2/y-f)}))},getClosest=(e,t,n)=>{let o,a=e.length,r=1e10,i=0;for(;a--;)o=Math.abs(e[a]-t),o>n/2&&(o=n-o),o<r&&(r=o,i=a);return i},populateTimeline=()=>{let t,n,o,c,u;for(a.clear(),t=0;t<r;t++)n=e[t],o=d[t]/100*l[t],c=n.offsetLeft+o-i+p[0],u=c+l[t]*gsap.getProperty(n,"scaleX"),a.to(n,{xPercent:m((o-u)/l[t]*100),duration:u/h},0).fromTo(n,{xPercent:m((o-u+y)/l[t]*100)},{xPercent:d[t],duration:(o-u+y-o)/h,immediateRender:!1},u/h).add(`label${t}`,c/h),s[t]=c/h;w=gsap.utils.wrap(0,a.duration())};let S;function toIndex(e,t){t=t||{},Math.abs(e-c)>r/2&&(e+=e>c?-r:r);const n=gsap.utils.wrap(0,r,e);let o=s[n];return o>a.time()!=e>c&&e!==c&&(o+=a.duration()*(e>c?1:-1)),(o<0||o>a.duration())&&(t.modifiers={time:w}),c=n,t.overwrite=!0,gsap.killTweensOf(S),0===t.duration?a.time(w(o)):a.tweenTo(o,t)}if(gsap.set(e,{x:0}),populateWidths(),populateTimeline(),populateOffsets(),a.toIndex=(e,t)=>toIndex(e,t),a.closestIndex=e=>{const t=getClosest(s,a.time(),a.duration());return e&&(c=t,u=!1),t},a.current=()=>u?a.closestIndex(!0):c,a.next=e=>toIndex(a.current()+1,e),a.previous=e=>toIndex(a.current()-1,e),a.times=s,a.progress(1,!0).progress(0,!0),t.reversed&&(a.vars.onReverseComplete(),a.reverse()),t.draggable&&"function"==typeof Draggable){S=document.createElement("div");const t=gsap.utils.wrap(0,1);let n,o,r,i,l;const align=()=>a.progress(t(o+(r.startX-r.x)*n)),syncIndex=()=>a.closestIndex(!0);r=Draggable.create(S,{trigger:e[0].parentNode,type:"x",onPressInit:function(){const e=this.x;gsap.killTweensOf(a),o=a.progress(),(e=>{const t=a.progress();a.progress(0,!0),populateWidths(),e&&populateTimeline(),populateOffsets(),e&&a.draggable?a.time(s[c],!0):a.progress(t,!0)})(),n=1/y,l=o/-n-e,gsap.set(S,{x:o/-n})},onDrag:align,onThrowUpdate:align,overshootTolerance:0,inertia:!0,snap:function(e){if(Math.abs(o/-n-this.x)<10)return i+l;const t=-e*n*a.duration(),r=w(t);let p=s[getClosest(s,r,a.duration())]-r;return Math.abs(p)>a.duration()/2&&(p+=p<0?a.duration():-a.duration()),i=(t+p)/a.duration()/-n,i},onRelease:function(){syncIndex(),r.isThrowing&&(u=!0)},onThrowComplete:syncIndex})[0],a.draggable=r}return a.closestIndex(!0),o=c,n&&n(e[c],c),a}const hpSection4={callback:()=>{hpSection4.organizeCards(),hpSection4.horizontalShow()},horizontalShow:()=>{let e=null,t=null;const n=gsap.utils.toArray(".hp4-row-1 .hp4-item"),o=gsap.utils.toArray(".hp4-row-2 .hp4-item"),a=document.querySelector(".hp4-row-1"),r=document.querySelector(".hp4-row-2"),loopBehaviourRef_loop1Pause=()=>e&&e.pause(),loopBehaviourRef_loop1Resume=()=>e&&e.reverse(),loopBehaviourRef_loop2Pause=()=>t&&t.pause(),loopBehaviourRef_loop2Resume=()=>t&&t.play();function initializeLoops(){e=horizontalLoop(n,{repeat:-1,draggable:!1,reversed:!0,speed:.4}),t=horizontalLoop(o,{repeat:-1,draggable:!1,reversed:!1,speed:.4}),a.addEventListener("mouseenter",loopBehaviourRef_loop1Pause),a.addEventListener("mouseleave",loopBehaviourRef_loop1Resume),r.addEventListener("mouseenter",loopBehaviourRef_loop2Pause),r.addEventListener("mouseleave",loopBehaviourRef_loop2Resume)}window.innerWidth>1024&&null===e&&null===t&&initializeLoops(),resizer((()=>{window.innerWidth>=1024?null===e&&null===t&&initializeLoops():(e&&(e.kill(),e=null),t&&(t.kill(),t=null),a.removeEventListener("mouseenter",loopBehaviourRef_loop1Pause),a.removeEventListener("mouseleave",loopBehaviourRef_loop1Resume),r.removeEventListener("mouseenter",loopBehaviourRef_loop2Pause),r.removeEventListener("mouseleave",loopBehaviourRef_loop2Resume),gsap.set([".hp4-row-1 .hp4-item",".hp4-row-2 .hp4-item"],{clearProps:"all"}))}))},organizeCards:()=>{const e=$(".hp4-stats .hp4-item").toArray(),t=$(".hp4-stories .hp4-item").toArray(),n=$(".hp4-row-1").empty(),o=$(".hp4-row-2").empty(),a=["M","M","S","M","M","S","M","M","S"],r=["S","M","M","S","M","M","S","M","M"];let i=0,s=0,l=0;for(;i<e.length||s<t.length;){const p=a[l%a.length];"S"===p&&i<e.length?n.append(e[i++]):"M"===p&&s<t.length&&n.append(t[s++]);const d=r[l%r.length];"S"===d&&i<e.length?o.append(e[i++]):"M"===d&&s<t.length&&o.append(t[s++]),l++}},getStories:()=>{"undefined"!=typeof MediaPlusFeedsArray&&MediaPlusFeedsArray.length>0&&$.HomepageAsync.AddMediaItems($(".hp4-stories"))},init:()=>{hpSection4.getStories()}};
jQuery(document).ready((()=>{customElements.init(),popupsFunc.init(),alertPopup.checkStartAndExpiryDates(),noticesPopup.checkStartAndExpiryDates(),popupsBehaviour.init(),noticesPopup.init(),alertPopup.init(),noticesPopup.checkPopupTriggers(),hpCustomElements.init(),hpSection1.init(),hpSection2.init(),hpSection3.init(),hpSection4.init(),hpSection5.init(),hpSection6.init(),footer.init(),window.addEventListener("pageshow",(()=>{document.querySelector("html").classList.add("js-hide-loader")})),ScrollTrigger.create({trigger:"body",start:"top+=80px top",end:"bottom top-=1000%",toggleClass:{targets:"html",className:"sticky"}})})),window.addEventListener("load",(()=>{document.querySelector("html").classList.add("js-hide-loader")}));