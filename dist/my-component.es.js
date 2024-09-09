var U = Object.defineProperty;
var q = (e, t, n) => t in e ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => q(e, typeof t != "symbol" ? t + "" : t, n);
function y() {
}
function H(e) {
  return e();
}
function P() {
  return /* @__PURE__ */ Object.create(null);
}
function k(e) {
  e.forEach(H);
}
function I(e) {
  return typeof e == "function";
}
function z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function F(e) {
  return Object.keys(e).length === 0;
}
function C(e, t) {
  e.appendChild(t);
}
function G(e, t, n) {
  const s = K(e);
  if (!s.getElementById(t)) {
    const r = g("style");
    r.id = t, r.textContent = n, Q(s, r);
  }
}
function K(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Q(e, t) {
  return C(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function _(e, t, n) {
  e.insertBefore(t, n || null);
}
function a(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function g(e) {
  return document.createElement(e);
}
function O(e) {
  return document.createTextNode(e);
}
function B() {
  return O(" ");
}
function V(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function W(e) {
  return Array.from(e.childNodes);
}
function M(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function X(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let N;
function p(e) {
  N = e;
}
const b = [], R = [];
let m = [];
const T = [], Y = /* @__PURE__ */ Promise.resolve();
let j = !1;
function Z() {
  j || (j = !0, Y.then(x));
}
function A(e) {
  m.push(e);
}
const E = /* @__PURE__ */ new Set();
let h = 0;
function x() {
  if (h !== 0)
    return;
  const e = N;
  do {
    try {
      for (; h < b.length; ) {
        const t = b[h];
        h++, p(t), tt(t.$$);
      }
    } catch (t) {
      throw b.length = 0, h = 0, t;
    }
    for (p(null), b.length = 0, h = 0; R.length; ) R.pop()();
    for (let t = 0; t < m.length; t += 1) {
      const n = m[t];
      E.has(n) || (E.add(n), n());
    }
    m.length = 0;
  } while (b.length);
  for (; T.length; )
    T.pop()();
  j = !1, E.clear(), p(e);
}
function tt(e) {
  if (e.fragment !== null) {
    e.update(), k(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(A);
  }
}
function et(e) {
  const t = [], n = [];
  m.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), m = t;
}
const nt = /* @__PURE__ */ new Set();
function st(e, t) {
  e && e.i && (nt.delete(e), e.i(t));
}
function it(e, t, n) {
  const { fragment: s, after_update: r } = e.$$;
  s && s.m(t, n), A(() => {
    const l = e.$$.on_mount.map(H).filter(I);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : k(l), e.$$.on_mount = [];
  }), r.forEach(A);
}
function rt(e, t) {
  const n = e.$$;
  n.fragment !== null && (et(n.after_update), k(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(e, t) {
  e.$$.dirty[0] === -1 && (b.push(e), Z(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ct(e, t, n, s, r, l, i = null, o = [-1]) {
  const u = N;
  p(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: y,
    not_equal: r,
    bound: P(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: P(),
    dirty: o,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  i && i(c.root);
  let d = !1;
  if (c.ctx = n ? n(e, t.props || {}, (f, v, ...L) => {
    const S = L.length ? L[0] : v;
    return c.ctx && r(c.ctx[f], c.ctx[f] = S) && (!c.skip_bound && c.bound[f] && c.bound[f](S), d && ot(e, f)), v;
  }) : [], c.update(), d = !0, k(c.before_update), c.fragment = s ? s(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = W(t.target);
      c.fragment && c.fragment.l(f), f.forEach(a);
    } else
      c.fragment && c.fragment.c();
    t.intro && st(e.$$.fragment), it(e, t.target, t.anchor), x();
  }
  p(u);
}
let D;
typeof HTMLElement == "function" && (D = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    $(this, "$$ctor");
    /** Slots */
    $(this, "$$s");
    /** The Svelte component instance */
    $(this, "$$c");
    /** Whether or not the custom element is connected */
    $(this, "$$cn", !1);
    /** Component props data */
    $(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    $(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(i) {
        return () => {
          let o;
          return {
            c: function() {
              o = g("slot"), i !== "default" && V(o, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, f) {
              _(d, o, f);
            },
            d: function(d) {
              d && a(o);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const s = {}, r = X(this);
      for (const i of this.$$s)
        i in r && (s[i] = [n(i)]);
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = w(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$scope: {
            ctx: []
          }
        }
      });
      const l = () => {
        this.$$r = !0;
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const o = w(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const i in this.$$l)
        for (const o of this.$$l[i]) {
          const u = this.$$c.$on(i, o);
          this.$$l_u.set(o, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = w(t, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function w(e, t, n, s) {
  var l;
  const r = (l = n[e]) == null ? void 0 : l.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ut(e, t, n, s, r, l) {
  let i = class extends D {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((o) => {
    Object.defineProperty(i.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var c;
        u = w(o, u, t), this.$$d[o] = u, (c = this.$$c) == null || c.$set({ [o]: u });
      }
    });
  }), s.forEach((o) => {
    Object.defineProperty(i.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
class lt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    rt(this, 1), this.$destroy = y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!I(n))
      return y;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !F(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const $t = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($t);
function ft(e) {
  G(e, "svelte-18fb6uy", ".btn.svelte-18fb6uy{background-color:#007bff;color:white;border:none;border-radius:5px;padding:10px 20px;cursor:pointer}.btn.svelte-18fb6uy:hover{background-color:#0056b3}");
}
function at(e) {
  let t, n, s, r, l, i, o;
  return {
    c() {
      t = g("button"), n = O(
        /*label*/
        e[0]
      ), s = B(), r = g("p"), r.textContent = "gef", l = B(), i = g("h1"), o = O(
        /*message*/
        e[1]
      ), V(t, "class", "bg-black p-5 btn svelte-18fb6uy");
    },
    m(u, c) {
      _(u, t, c), C(t, n), _(u, s, c), _(u, r, c), _(u, l, c), _(u, i, c), C(i, o);
    },
    p(u, [c]) {
      c & /*label*/
      1 && M(
        n,
        /*label*/
        u[0]
      ), c & /*message*/
      2 && M(
        o,
        /*message*/
        u[1]
      );
    },
    i: y,
    o: y,
    d(u) {
      u && (a(t), a(s), a(r), a(l), a(i));
    }
  };
}
function dt(e, t, n) {
  let { label: s = "Click me" } = t, { message: r = "" } = t;
  return e.$$set = (l) => {
    "label" in l && n(0, s = l.label), "message" in l && n(1, r = l.message);
  }, [s, r];
}
class J extends lt {
  constructor(t) {
    super(), ct(this, t, dt, at, z, { label: 0, message: 1 }, ft);
  }
  get label() {
    return this.$$.ctx[0];
  }
  set label(t) {
    this.$$set({ label: t }), x();
  }
  get message() {
    return this.$$.ctx[1];
  }
  set message(t) {
    this.$$set({ message: t }), x();
  }
}
ut(J, { label: {}, message: {} }, [], [], !0);
customElements.define("my-button", class extends HTMLElement {
  constructor() {
    super(), this._shadowRoot = this.attachShadow({ mode: "open" }), this._svelteComponent = new J({
      target: this._shadowRoot,
      props: { label: this.getAttribute("label") || "Click me" }
    });
  }
  static get observedAttributes() {
    return ["label"];
  }
  attributeChangedCallback(e, t, n) {
    e === "label" && this._svelteComponent.$set({ label: n });
  }
});
