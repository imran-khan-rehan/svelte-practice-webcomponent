(function($,f){typeof exports=="object"&&typeof module<"u"?module.exports=f():typeof define=="function"&&define.amd?define(f):($=typeof globalThis<"u"?globalThis:$||self,$.MyComponent=f())})(this,function(){"use strict";var _t=Object.defineProperty;var bt=($,f,_)=>f in $?_t($,f,{enumerable:!0,configurable:!0,writable:!0,value:_}):$[f]=_;var d=($,f,_)=>bt($,typeof f!="symbol"?f+"":f,_);function $(){}function f(e){return e()}function _(){return Object.create(null)}function w(e){e.forEach(f)}function P(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function K(e){return Object.keys(e).length===0}function j(e,t){e.appendChild(t)}function Q(e,t,n){const i=W(e);if(!i.getElementById(t)){const o=m("style");o.id=t,o.textContent=n,X(i,o)}}function W(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function X(e,t){return j(e.head||e,t),t.sheet}function b(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function M(){return v(" ")}function A(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.data!==t&&(e.data=t)}function Z(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let O;function x(e){O=e}const p=[],T=[];let g=[];const z=[],tt=Promise.resolve();let N=!1;function et(){N||(N=!0,tt.then(k))}function L(e){g.push(e)}const S=new Set;let y=0;function k(){if(y!==0)return;const e=O;do{try{for(;y<p.length;){const t=p[y];y++,x(t),nt(t.$$)}}catch(t){throw p.length=0,y=0,t}for(x(null),p.length=0,y=0;T.length;)T.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];S.has(n)||(S.add(n),n())}g.length=0}while(p.length);for(;z.length;)z.pop()();N=!1,S.clear(),x(e)}function nt(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function st(e){const t=[],n=[];g.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),g=t}const it=new Set;function ot(e,t){e&&e.i&&(it.delete(e),e.i(t))}function rt(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),L(()=>{const s=e.$$.on_mount.map(f).filter(P);e.$$.on_destroy?e.$$.on_destroy.push(...s):w(s),e.$$.on_mount=[]}),o.forEach(L)}function ct(e,t){const n=e.$$;n.fragment!==null&&(st(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(e,t){e.$$.dirty[0]===-1&&(p.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,i,o,s,c=null,l=[-1]){const u=O;x(e);const r=e.$$={fragment:null,ctx:[],props:s,update:$,not_equal:o,bound:_(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:_(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};c&&c(r.root);let C=!1;if(r.ctx=n?n(e,t.props||{},(h,q,...F)=>{const G=F.length?F[0]:q;return r.ctx&&o(r.ctx[h],r.ctx[h]=G)&&(!r.skip_bound&&r.bound[h]&&r.bound[h](G),C&&ut(e,h)),q}):[],r.update(),C=!0,w(r.before_update),r.fragment=i?i(r.ctx):!1,t.target){if(t.hydrate){const h=Y(t.target);r.fragment&&r.fragment.l(h),h.forEach(a)}else r.fragment&&r.fragment.c();t.intro&&ot(e.$$.fragment),rt(e,t.target,t.anchor),k()}x(u)}let I;typeof HTMLElement=="function"&&(I=class extends HTMLElement{constructor(t,n,i){super();d(this,"$$ctor");d(this,"$$s");d(this,"$$c");d(this,"$$cn",!1);d(this,"$$d",{});d(this,"$$r",!1);d(this,"$$p_d",{});d(this,"$$l",{});d(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,i&&this.attachShadow({mode:"open"})}addEventListener(t,n,i){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const o=this.$$c.$on(t,n);this.$$l_u.set(n,o)}super.addEventListener(t,n,i)}removeEventListener(t,n,i){if(super.removeEventListener(t,n,i),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let c;return{c:function(){c=m("slot"),s!=="default"&&A(c,"name",s)},m:function(r,C){b(r,c,C)},d:function(r){r&&a(c)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},i=Z(this);for(const s of this.$$s)s in i&&(n[s]=[t(s)]);for(const s of this.attributes){const c=this.$$g_p(s.name);c in this.$$d||(this.$$d[c]=E(c,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const c=E(s,this.$$d[s],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,c)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const s in this.$$l)for(const c of this.$$l[s]){const l=this.$$c.$on(s,c);this.$$l_u.set(c,l)}this.$$l={}}}attributeChangedCallback(t,n,i){var o;this.$$r||(t=this.$$g_p(t),this.$$d[t]=E(t,i,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function E(e,t,n,i){var s;const o=(s=n[e])==null?void 0:s.type;if(t=o==="Boolean"&&typeof t!="boolean"?t!=null:t,!i||!n[e])return t;if(i==="toAttribute")switch(o){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function V(e,t,n,i,o,s){let c=class extends I{constructor(){super(e,n,o),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Object.keys(t).forEach(l=>{Object.defineProperty(c.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(u){var r;u=E(l,u,t),this.$$d[l]=u,(r=this.$$c)==null||r.$set({[l]:u})}})}),i.forEach(l=>{Object.defineProperty(c.prototype,l,{get(){var u;return(u=this.$$c)==null?void 0:u[l]}})}),e.element=c,c}class D{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){ct(this,1),this.$destroy=$}$on(t,n){if(!P(n))return $;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!K(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(lt);function $t(e){Q(e,"svelte-4jvgzs",".btn.svelte-4jvgzs{background-color:#007bff;color:white;border:none;border-radius:5px;padding:10px 20px;cursor:pointer}.btn.svelte-4jvgzs:hover{background-color:#b30036}")}function ft(e){let t,n,i,o,s,c,l;return{c(){t=m("button"),n=v(e[0]),i=M(),o=m("p"),o.textContent="gefgfdg",s=M(),c=m("h1"),l=v(e[1]),A(t,"class","bg-black p-5 btn svelte-4jvgzs")},m(u,r){b(u,t,r),j(t,n),b(u,i,r),b(u,o,r),b(u,s,r),b(u,c,r),j(c,l)},p(u,[r]){r&1&&R(n,u[0]),r&2&&R(l,u[1])},i:$,o:$,d(u){u&&(a(t),a(i),a(o),a(s),a(c))}}}function dt(e,t,n){let{label:i="Click me"}=t,{message:o=""}=t;return e.$$set=s=>{"label"in s&&n(0,i=s.label),"message"in s&&n(1,o=s.message)},[i,o]}class J extends D{constructor(t){super(),H(this,t,dt,ft,B,{label:0,message:1},$t)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),k()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),k()}}V(J,{label:{},message:{}},[],[],!0);function at(e){let t;return{c(){t=m("h1"),t.textContent="Hello world!",A(t,"class","text-3xl font-bold underline")},m(n,i){b(n,t,i)},p:$,i:$,o:$,d(n){n&&a(t)}}}class U extends D{constructor(t){super(),H(this,t,null,at,B,{})}}V(U,{},[],[],!0);const ht=new U({target:document.body});return customElements.define("my-button",class extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._svelteComponent=new J({target:this._shadowRoot,props:{label:this.getAttribute("label")||"Click me"}})}static get observedAttributes(){return["label"]}attributeChangedCallback(e,t,n){e==="label"&&this._svelteComponent.$set({label:n})}}),ht});
