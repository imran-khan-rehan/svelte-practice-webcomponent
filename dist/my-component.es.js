var K = Object.defineProperty;
var Q = (e, t, n) => t in e ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => Q(e, typeof t != "symbol" ? t + "" : t, n);
function d() {
}
function T(e) {
  return e();
}
function B() {
  return /* @__PURE__ */ Object.create(null);
}
function k(e) {
  e.forEach(T);
}
function I(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function W(e) {
  return Object.keys(e).length === 0;
}
function C(e, t) {
  e.appendChild(t);
}
function X(e, t, n) {
  const r = Y(e);
  if (!r.getElementById(t)) {
    const i = m("style");
    i.id = t, i.textContent = n, Z(r, i);
  }
}
function Y(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Z(e, t) {
  return C(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function h(e, t, n) {
  e.insertBefore(t, n || null);
}
function a(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function m(e) {
  return document.createElement(e);
}
function j(e) {
  return document.createTextNode(e);
}
function M() {
  return j(" ");
}
function O(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function tt(e) {
  return Array.from(e.childNodes);
}
function R(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function et(e) {
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
const b = [], z = [];
let g = [];
const H = [], nt = /* @__PURE__ */ Promise.resolve();
let v = !1;
function st() {
  v || (v = !0, nt.then(w));
}
function A(e) {
  g.push(e);
}
const E = /* @__PURE__ */ new Set();
let _ = 0;
function w() {
  if (_ !== 0)
    return;
  const e = N;
  do {
    try {
      for (; _ < b.length; ) {
        const t = b[_];
        _++, p(t), rt(t.$$);
      }
    } catch (t) {
      throw b.length = 0, _ = 0, t;
    }
    for (p(null), b.length = 0, _ = 0; z.length; ) z.pop()();
    for (let t = 0; t < g.length; t += 1) {
      const n = g[t];
      E.has(n) || (E.add(n), n());
    }
    g.length = 0;
  } while (b.length);
  for (; H.length; )
    H.pop()();
  v = !1, E.clear(), p(e);
}
function rt(e) {
  if (e.fragment !== null) {
    e.update(), k(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(A);
  }
}
function it(e) {
  const t = [], n = [];
  g.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), g = t;
}
const ot = /* @__PURE__ */ new Set();
function ct(e, t) {
  e && e.i && (ot.delete(e), e.i(t));
}
function lt(e, t, n) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), A(() => {
    const s = e.$$.on_mount.map(T).filter(I);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : k(s), e.$$.on_mount = [];
  }), i.forEach(A);
}
function ut(e, t) {
  const n = e.$$;
  n.fragment !== null && (it(n.after_update), k(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function $t(e, t) {
  e.$$.dirty[0] === -1 && (b.push(e), st(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function D(e, t, n, r, i, s, c = null, u = [-1]) {
  const l = N;
  p(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: d,
    not_equal: i,
    bound: B(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: B(),
    dirty: u,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  c && c(o.root);
  let y = !1;
  if (o.ctx = n ? n(e, t.props || {}, (f, L, ...S) => {
    const P = S.length ? S[0] : L;
    return o.ctx && i(o.ctx[f], o.ctx[f] = P) && (!o.skip_bound && o.bound[f] && o.bound[f](P), y && $t(e, f)), L;
  }) : [], o.update(), y = !0, k(o.before_update), o.fragment = r ? r(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = tt(t.target);
      o.fragment && o.fragment.l(f), f.forEach(a);
    } else
      o.fragment && o.fragment.c();
    t.intro && ct(e.$$.fragment), lt(e, t.target, t.anchor), w();
  }
  p(l);
}
let J;
typeof HTMLElement == "function" && (J = class extends HTMLElement {
  constructor(t, n, r) {
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
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let c;
          return {
            c: function() {
              c = m("slot"), s !== "default" && O(c, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(o, y) {
              h(o, c, y);
            },
            d: function(o) {
              o && a(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = et(this);
      for (const s of this.$$s)
        s in r && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const c = this.$$g_p(s.name);
        c in this.$$d || (this.$$d[c] = x(c, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const c = x(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const s in this.$$l)
        for (const c of this.$$l[s]) {
          const u = this.$$c.$on(s, c);
          this.$$l_u.set(c, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = x(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function x(e, t, n, r) {
  var s;
  const i = (s = n[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function U(e, t, n, r, i, s) {
  let c = class extends J {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((u) => {
    Object.defineProperty(c.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(l) {
        var o;
        l = x(u, l, t), this.$$d[u] = l, (o = this.$$c) == null || o.$set({ [u]: l });
      }
    });
  }), r.forEach((u) => {
    Object.defineProperty(c.prototype, u, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[u];
      }
    });
  }), e.element = /** @type {any} */
  c, c;
}
class q {
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
    ut(this, 1), this.$destroy = d;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!I(n))
      return d;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !W(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ft = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ft);
function at(e) {
  X(e, "svelte-4jvgzs", ".btn.svelte-4jvgzs{background-color:#007bff;color:white;border:none;border-radius:5px;padding:10px 20px;cursor:pointer}.btn.svelte-4jvgzs:hover{background-color:#b30036}");
}
function dt(e) {
  let t, n, r, i, s, c, u;
  return {
    c() {
      t = m("button"), n = j(
        /*label*/
        e[0]
      ), r = M(), i = m("p"), i.textContent = "gefgfdg", s = M(), c = m("h1"), u = j(
        /*message*/
        e[1]
      ), O(t, "class", "bg-black p-5 btn svelte-4jvgzs");
    },
    m(l, o) {
      h(l, t, o), C(t, n), h(l, r, o), h(l, i, o), h(l, s, o), h(l, c, o), C(c, u);
    },
    p(l, [o]) {
      o & /*label*/
      1 && R(
        n,
        /*label*/
        l[0]
      ), o & /*message*/
      2 && R(
        u,
        /*message*/
        l[1]
      );
    },
    i: d,
    o: d,
    d(l) {
      l && (a(t), a(r), a(i), a(s), a(c));
    }
  };
}
function ht(e, t, n) {
  let { label: r = "Click me" } = t, { message: i = "" } = t;
  return e.$$set = (s) => {
    "label" in s && n(0, r = s.label), "message" in s && n(1, i = s.message);
  }, [r, i];
}
class F extends q {
  constructor(t) {
    super(), D(this, t, ht, dt, V, { label: 0, message: 1 }, at);
  }
  get label() {
    return this.$$.ctx[0];
  }
  set label(t) {
    this.$$set({ label: t }), w();
  }
  get message() {
    return this.$$.ctx[1];
  }
  set message(t) {
    this.$$set({ message: t }), w();
  }
}
U(F, { label: {}, message: {} }, [], [], !0);
function _t(e) {
  let t;
  return {
    c() {
      t = m("h1"), t.textContent = "Hello world!", O(t, "class", "text-3xl font-bold underline");
    },
    m(n, r) {
      h(n, t, r);
    },
    p: d,
    i: d,
    o: d,
    d(n) {
      n && a(t);
    }
  };
}
class G extends q {
  constructor(t) {
    super(), D(this, t, null, _t, V, {});
  }
}
U(G, {}, [], [], !0);
const mt = new G({
  target: document.body
});
customElements.define("my-button", class extends HTMLElement {
  constructor() {
    super(), this._shadowRoot = this.attachShadow({ mode: "open" }), this._svelteComponent = new F({
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
export {
  mt as default
};
