/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class e{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const r=new Map,n=t=>{let n=r.get(t);return void 0===n&&r.set(t,n=new e(t,i)),n},s=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>n("string"==typeof t?t:t+""))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o,l,u,a;const h={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},c=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:c};class d extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,e)=>{const r=this.Πp(e,i);void 0!==r&&(this.Πm.set(r,e),t.push(r))}),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,e,i);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(r){const n=this[t];this[i]=r,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(s(t))}else void 0!==t&&i.push(s(t));return i}static"Πp"(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var i,e;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])})}createRenderRoot(){var i;const e=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{t?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,i.appendChild(e)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,i,e){this.K(t,e)}"Πj"(t,i,e=v){var r,n;const s=this.constructor.Πp(t,e);if(void 0!==s&&!0===e.reflect){const o=(null!==(n=null===(r=e.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:h.toAttribute)(i,e.type);this.Πh=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this.Πh=null}}K(t,i){var e,r,n;const s=this.constructor,o=s.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=s.getPropertyOptions(o),l=t.converter,u=null!==(n=null!==(r=null===(e=l)||void 0===e?void 0:e.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==n?n:h.fromAttribute;this.Πh=o,this[o]=u(i,t.type),this.Πh=null}}requestUpdate(t,i,e){let r=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===e.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,e))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,i)=>this[i]=t),this.Πi=void 0);let i=!1;const e=this.L;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)}),this.update(e)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(e)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach(t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,i)=>this.Πj(i,this[i],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f,p,g,b;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null===(l=(o=globalThis).reactiveElementPlatformSupport)||void 0===l||l.call(o,{ReactiveElement:d}),(null!==(u=(a=globalThis).reactiveElementVersions)&&void 0!==u?u:a.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,y=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,S="?"+m,x=`<${S}>`,$=document,j=(t="")=>$.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,M=/>/g,F=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,A=/"/g,q=/^(?:script|style|textarea)$/i,R=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),U=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),_=new WeakMap,P=$.createTreeWalker($,129,null,!1);class z{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let n=0,s=0;const o=t.length-1,l=this.parts,[u,a]=((t,i)=>{const e=t.length-1,r=[];let n,s=2===i?"<svg>":"",o=k;for(let i=0;i<e;i++){const e=t[i];let l,u,a=-1,h=0;for(;h<e.length&&(o.lastIndex=h,u=o.exec(e),null!==u);)h=o.lastIndex,o===k?"!--"===u[1]?o=E:void 0!==u[1]?o=M:void 0!==u[2]?(q.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=F):void 0!==u[3]&&(o=F):o===F?">"===u[0]?(o=null!=n?n:k,a=-1):void 0===u[1]?a=-2:(a=o.lastIndex-u[2].length,l=u[1],o=void 0===u[3]?F:'"'===u[3]?A:T):o===A||o===T?o=F:o===E||o===M?o=k:(o=F,n=void 0);const c=o===F&&t[i+1].startsWith("/>")?" ":"";s+=o===k?e+x:a>=0?(r.push(l),e.slice(0,a)+"$lit$"+e.slice(a)+m+c):e+m+(-2===a?(r.push(void 0),i):c)}const l=s+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==y?y.createHTML(l):l,r]})(t,i);if(this.el=z.createElement(u,e),P.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(r=P.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const i of r.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(m)){const e=a[s++];if(t.push(i),void 0!==e){const t=r.getAttribute(e.toLowerCase()+"$lit$").split(m),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?W:"@"===i[1]?Z:D})}else l.push({type:6,index:n})}for(const i of t)r.removeAttribute(i)}if(q.test(r.tagName)){const t=r.textContent.split(m),i=t.length-1;if(i>0){r.textContent=w?w.emptyScript:"";for(let e=0;e<i;e++)r.append(t[e],j()),P.nextNode(),l.push({type:2,index:++n});r.append(t[i],j())}}}else if(8===r.nodeType)if(r.data===S)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(m,t+1));)l.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,i){const e=$.createElement("template");return e.innerHTML=t,e}}function I(t,i,e=t,r){var n,s,o,l;if(i===U)return i;let u=void 0!==r?null===(n=e.Σi)||void 0===n?void 0:n[r]:e.Σo;const a=C(i)?void 0:i._$litDirective$;return(null==u?void 0:u.constructor)!==a&&(null===(s=null==u?void 0:u.O)||void 0===s||s.call(u,!1),void 0===a?u=void 0:(u=new a(t),u.T(t,e,r)),void 0!==r?(null!==(o=(l=e).Σi)&&void 0!==o?o:l.Σi=[])[r]=u:e.Σo=u),void 0!==u&&(i=I(t,u.S(t,i.values),u,r)),i}class L{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:e},parts:r}=this.D,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:$).importNode(e,!0);P.currentNode=n;let s=P.nextNode(),o=0,l=0,u=r[0];for(;void 0!==u;){if(o===u.index){let i;2===u.type?i=new B(s,s.nextSibling,this,t):1===u.type?i=new u.ctor(s,u.name,u.strings,this,t):6===u.type&&(i=new G(s,this,t)),this.l.push(i),u=r[++l]}o!==(null==u?void 0:u.index)&&(s=P.nextNode(),o++)}return n}v(t){let i=0;for(const e of this.l)void 0!==e&&(void 0!==e.strings?(e.I(t,e,i),i+=e.strings.length-2):e.I(t[i])),i++}}class B{constructor(t,i,e,r){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=e,this.options=r}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=I(this,t,i),C(t)?t===N||null==t||""===t?(this.H!==N&&this.R(),this.H=N):t!==this.H&&t!==U&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return O(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$($.createTextNode(t)),this.H=t}_(t){var i;const{values:e,_$litType$:r}=t,n="number"==typeof r?this.C(t):(void 0===r.el&&(r.el=z.createElement(r.h,this.options)),r);if((null===(i=this.H)||void 0===i?void 0:i.D)===n)this.H.v(e);else{const t=new L(n,this),i=t.u(this.options);t.v(e),this.$(i),this.H=t}}C(t){let i=_.get(t.strings);return void 0===i&&_.set(t.strings,i=new z(t)),i}g(t){O(this.H)||(this.H=[],this.R());const i=this.H;let e,r=0;for(const n of t)r===i.length?i.push(e=new B(this.k(j()),this.k(j()),this,this.options)):e=i[r],e.I(n),r++;r<i.length&&(this.R(e&&e.B.nextSibling,r),i.length=r)}R(t=this.A.nextSibling,i){var e;for(null===(e=this.P)||void 0===e||e.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class D{constructor(t,i,e,r,n){this.type=1,this.H=N,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=r,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this.H=Array(e.length-1).fill(N),this.strings=e):this.H=N}get tagName(){return this.element.tagName}I(t,i=this,e,r){const n=this.strings;let s=!1;if(void 0===n)t=I(this,t,i,0),s=!C(t)||t!==this.H&&t!==U,s&&(this.H=t);else{const r=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=I(this,r[e+o],i,o),l===U&&(l=this.H[o]),s||(s=!C(l)||l!==this.H[o]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+n[o+1]),this.H[o]=l}s&&!r&&this.W(t)}W(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends D{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===N?void 0:t}}class W extends D{constructor(){super(...arguments),this.type=4}W(t){t&&t!==N?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Z extends D{constructor(){super(...arguments),this.type=5}I(t,i=this){var e;if((t=null!==(e=I(this,t,i,0))&&void 0!==e?e:N)===U)return;const r=this.H,n=t===N&&r!==N||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==N&&(r===N||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,e;"function"==typeof this.H?this.H.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this.H.handleEvent(t)}}class G{constructor(t,i,e){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=e}I(t){I(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,Q,V,K,X,Y;null===(p=(f=globalThis).litHtmlPlatformSupport)||void 0===p||p.call(f,z,B),(null!==(g=(b=globalThis).litHtmlVersions)&&void 0!==g?g:b.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(J=(Y=globalThis).litElementVersions)&&void 0!==J?J:Y.litElementVersions=[]).push("3.0.0-rc.2");class tt extends d{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();super.update(t),this.Φt=((t,i,e)=>{var r,n;const s=null!==(r=null==e?void 0:e.renderBefore)&&void 0!==r?r:i;let o=s._$litPart$;if(void 0===o){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new B(i.insertBefore(j(),t),t,void 0,e)}return o.I(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return U}}tt.finalized=!0,tt._$litElement$=!0,null===(V=(Q=globalThis).litElementHydrateSupport)||void 0===V||V.call(Q,{LitElement:tt}),null===(X=(K=globalThis).litElementPlatformSupport)||void 0===X||X.call(K,{LitElement:tt});const it=t=>(t=>void 0!==t&&void 0!==t.props)(t)?(t.props||[]).reduce((t,i)=>(Object.entries(i).forEach(([i,e])=>t[i]=e),t),{}):(t=>Object.entries(t).reduce((t,[i,e])=>(t[i]=function(t){return"boolean"==typeof t?{type:Boolean}:Array.isArray(t)?{type:Array}:"object"==typeof t?{type:Object}:{}}(e),t),{}))((null==t?void 0:t.defaults)||{}),et={};var rt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},nt={},st={},ot={};Object.defineProperty(ot,"t",{value:!0}),ot.shallowClone=void 0,ot.shallowClone=function(t){return"object"!=typeof t||!t||t instanceof Date||t instanceof RegExp?t:Array.isArray(t)?[...t]:Object.assign({},t)};var lt={};function ut(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}function at(t){const i=t;if(i.o)return i;const e=ut(t),r=e.updated;return i.o={index:0,count:0,states:[],reducers:[]},e.updated=t=>(i.o.index=0,r(t)),i}Object.defineProperty(lt,"t",{value:!0}),lt.withReducer=lt.withState=lt.decorate=lt.asUpdateableLitElement=void 0,lt.asUpdateableLitElement=ut,lt.decorate=at,lt.withState=function(t,i,e={}){const r=at(t),{index:n,count:s}=r.o;return n===s?(r.o.index++,r.o.count++,r.o.states.push(i),i):(r.o.index++,e.updateDefault&&r.o.states[n].inject(i.getState()),r.o.states[n])},lt.withReducer=function(t,i){const e=at(t),{index:r,count:n,reducers:s}=e.o;return r!==n||s[r-1]?e.o.reducers[r-1]:(e.o.reducers[r-1]=i,i)};var ht=rt&&rt.u||function(t,i,e,r){return new(e||(e=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(t){s(t)}}function l(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var i;t.done?n(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(o,l)}u((r=r.apply(t,i||[])).next())}))};Object.defineProperty(st,"t",{value:!0}),st.useState=void 0;const ct=ot,vt=lt;st.useState=(t,i,e={})=>{let r=ct.shallowClone(i);const n=[()=>t.requestUpdate()];return vt.withState(t,{publish:t=>ht(void 0,void 0,void 0,(function*(){r!==t&&(r=ct.shallowClone(t),n.forEach(t=>t(r)))})),subscribe:t=>n.push(t),getState:()=>r,inject:t=>{r=t}},e)};var dt={};Object.defineProperty(dt,"t",{value:!0}),dt.useReducer=void 0;const ft=st,pt=lt;dt.useReducer=(t,i,e,r={})=>{const{getState:n,publish:s}=ft.useState(t,e,r),o=[];return pt.withReducer(t,{getState:n,subscribe:t=>o.push(t),when:(t,i)=>o.push((e,r)=>e===t&&i(r)),publish:(e,l)=>{const u=i(n());u[e]&&(s(u[e](l)),o.forEach(t=>t(e,n())),r.dispatchEvent&&t.dispatchEvent(new CustomEvent(e,{detail:n()})))}})},function(t){Object.defineProperty(t,"t",{value:!0});var i=st;Object.defineProperty(t,"useState",{enumerable:!0,get:function(){return i.useState}});var e=dt;Object.defineProperty(t,"useReducer",{enumerable:!0,get:function(){return e.useReducer}})}(nt);var gt={},bt={},wt={};function yt(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}function mt(t){const i=t;if(i.i)return i;const e=yt(t),r=e.updated;return i.i={index:0,count:0,effects:[]},e.updated=t=>(i.i.index=0,r(t)),i}Object.defineProperty(wt,"t",{value:!0}),wt.withEffect=wt.decorate=wt.asUpdateableLitElement=void 0,wt.asUpdateableLitElement=yt,wt.decorate=mt,wt.withEffect=function(t,i){const e=mt(t),{index:r,count:n}=e.i;return r===n?(e.i.index++,e.i.count++,e.i.effects.push(i),i):(e.i.index++,e.i.effects[r])},Object.defineProperty(bt,"t",{value:!0}),bt.useOnce=bt.useEffect=void 0;const St=wt;function xt(t,i,e){const r=St.withEffect(t,{on:i,observe:["__initial__dirty"]});r.observe.some((t,i)=>e[i]!==t)&&r.on(),r.observe=e}bt.useEffect=xt,bt.useOnce=(t,i)=>xt(t,i,[]),function(t){Object.defineProperty(t,"t",{value:!0});var i=bt;Object.defineProperty(t,"useEffect",{enumerable:!0,get:function(){return i.useEffect}}),Object.defineProperty(t,"useOnce",{enumerable:!0,get:function(){return i.useOnce}})}(gt);var $t=gt.useOnce,jt=nt.useState;
/*!
 * @see {@link https://github.com/englishextra/qrjs2}
 * modified qr.js -- QR code generator in Javascript (revision 2011-01-19)
 * Written by Kang Seonghoon <public+qrjs@mearie.org>.
 * v0.0.20110119
 * This source code is in the public domain; if your jurisdiction does not
 * recognize the public domain the terms of Creative Commons CC0 license
 * apply. In the other words, you can always do what you want.
 * added options properties: fillcolor and textcolor
 * svg now works in Edge 13 and IE 11
 * @see {@link https://gist.github.com/englishextra/b46969e3382ef737c611bb59d837220b}
 * @see {@link https://github.com/lifthrasiir/qr.js/blob/v0.0.20110119/qr.js}
 * @params {String} data
 * @params {Object} settings object
 * element = QRCode.generateSVG(data, settings)
 * passes jshint with suppressing comments
 */!function(t,i){for(var e="length",r=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],n=/^\d*$/,s=/^[A-Za-z0-9 $%*+\-./:]*$/,o=/^[A-Z0-9 $%*+\-./:]*$/,l=[],u=[-1],a=0,h=1;a<255;++a)l.push(h),u[h]=a,h=2*h^(h>=128?285:0);for(var c=[[]],v=0;v<30;++v){for(var d=c[v],f=[],p=0;p<=v;++p){var g=p<v?l[d[p]]:0,b=l[(v+(d[p-1]||0))%255];f.push(u[g^b])}c.push(f)}for(var w={},y=0;y<45;++y)w["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(y)]=y;var m=[function(t,i){return(t+i)%2==0},function(t){return t%2==0},function(t,i){return i%3==0},function(t,i){return(t+i)%3==0},function(t,i){return((t/2|0)+(i/3|0))%2==0},function(t,i){return t*i%2+t*i%3==0},function(t,i){return(t*i%2+t*i%3)%2==0},function(t,i){return((t+i)%2+t*i%3)%2==0}],S=function(t){return t>6},x=function(t,i){var n=-8&function(t){var i=r[t],n=16*t*t+128*t+64;return S(t)&&(n-=36),i[2][e]&&(n-=25*i[2][e]*i[2][e]-10*i[2][e]-55),n}(t),s=r[t];return n-=8*s[0][i]*s[1][i]},$=function(t,i){switch(i){case 1:return t<10?10:t<27?12:14;case 2:return t<10?9:t<27?11:13;case 4:return t<10?8:16;case 8:return t<10?8:t<27?10:12}},j=function(t,i,e){var r=x(t,e)-4-$(t,i);switch(i){case 1:return 3*(r/10|0)+(r%10<4?0:r%10<7?1:2);case 2:return 2*(r/11|0)+(r%11<6?0:1);case 4:return r/8|0;case 8:return r/13|0}},C=function(t,i){for(var r=t.slice(0),n=t[e],s=i[e],o=0;o<s;++o)r.push(0);for(var a=0;a<n;){var h=u[r[a++]];if(h>=0)for(var c=0;c<s;++c)r[a+c]^=l[(h+i[c])%255]}return r.slice(n)},O=function(t,i,e,r){for(var n=t<<r,s=i-1;s>=0;--s)n>>r+s&1&&(n^=e<<s);return t<<r|n},k=function(t,i,r){for(var n=m[r],s=t[e],o=0;o<s;++o)for(var l=0;l<s;++l)i[o][l]||(t[o][l]^=n(o,l));return t},E=function(t,i,r,n){for(var s=t[e],o=21522^O(r<<3|n,5,1335,10),l=0;l<15;++l){var u=[s-1,s-2,s-3,s-4,s-5,s-6,s-7,s-8,7,5,4,3,2,1,0][l];t[[0,1,2,3,4,5,7,8,s-7,s-6,s-5,s-4,s-3,s-2,s-1][l]][8]=t[8][u]=o>>l&1}return t},M=function(t){for(var i=function(t){for(var i=0,r=0;r<t[e];++r)t[r]>=5&&(i+=t[r]-5+3);for(var n=5;n<t[e];n+=2){var s=t[n];t[n-1]===s&&t[n-2]===3*s&&t[n-3]===s&&t[n-4]===s&&(t[n-5]>=4*s||t[n+1]>=4*s)&&(i+=40)}return i},r=t[e],n=0,s=0,o=0;o<r;++o){var l,u=t[o];l=[0];for(var a=0;a<r;){var h;for(h=0;a<r&&u[a];++h)++a;for(l.push(h),h=0;a<r&&!u[a];++h)++a;l.push(h)}n+=i(l),l=[0];for(var c=0;c<r;){var v;for(v=0;c<r&&t[c][o];++v)++c;for(l.push(v),v=0;c<r&&!t[c][o];++v)++c;l.push(v)}n+=i(l);var d=t[o+1]||[];s+=u[0];for(var f=1;f<r;++f){var p=u[f];s+=p,u[f-1]===p&&d[f]===p&&d[f-1]===p&&(n+=3)}}return n+=10*(Math.abs(s/r/r-.5)/.05|0)},F=function(t,i,n,s,o){var l=r[i],u=function(t,i,r,n){var s=[],o=0,l=8,u=r[e],a=function(t,i){if(i>=l){for(s.push(o|t>>(i-=l));i>=8;)s.push(t>>(i-=8)&255);o=0,l=8}i>0&&(o|=(t&(1<<i)-1)<<(l-=i))},h=$(t,i);switch(a(i,4),a(u,h),i){case 1:for(var c=2;c<u;c+=3)a(parseInt(r.substring(c-2,c+1),10),10);a(parseInt(r.substring(c-2),10),[0,4,7][u%3]);break;case 2:for(var v=1;v<u;v+=2)a(45*w[r.charAt(v-1)]+w[r.charAt(v)],11);u%2==1&&a(w[r.charAt(v-1)],6);break;case 4:for(var d=0;d<u;++d)a(r[d],8)}for(a(0,4),l<8&&s.push(o);s[e]+1<n;)s.push(236,17);return s[e]<n&&s.push(236),s}(i,n,t,x(i,s)>>3);u=function(t,i,r){for(var n=[],s=t[e]/i|0,o=0,l=i-t[e]%i,u=0;u<l;++u)n.push(o),o+=s;for(var a=l;a<i;++a)n.push(o),o+=s+1;n.push(o);for(var h=[],c=0;c<i;++c)h.push(C(t.slice(n[c],n[c+1]),r));for(var v=[],d=t[e]/i|0,f=0;f<d;++f)for(var p=0;p<i;++p)v.push(t[n[p]+f]);for(var g=l;g<i;++g)v.push(t[n[g+1]-1]);for(var b=0;b<r[e];++b)for(var w=0;w<i;++w)v.push(h[w][b]);return v}(u,l[1][s],c[l[0][s]]);var a=function(t){for(var i=r[t],n=function(t){return 4*t+17}(t),s=[],o=[],l=0;l<n;++l)s.push([]),o.push([]);var u=function(t,i,e,r,n){for(var l=0;l<e;++l)for(var u=0;u<r;++u)s[t+l][i+u]=n[l]>>u&1,o[t+l][i+u]=1};u(0,0,9,9,[127,65,93,93,93,65,383,0,64]),u(n-8,0,8,9,[256,127,65,93,93,93,65,127]),u(0,n-8,9,8,[254,130,186,186,186,130,254,0,0]);for(var a=9;a<n-8;++a)s[6][a]=s[a][6]=1&~a,o[6][a]=o[a][6]=1;for(var h=i[2],c=h[e],v=0;v<c;++v)for(var d=0===v?c-1:c,f=0===v||v===c-1?1:0;f<d;++f)u(h[v],h[f],5,5,[31,17,21,17,31]);if(S(t))for(var p=O(t,6,7973,12),g=0,b=0;b<6;++b)for(var w=0;w<3;++w)s[b][n-11+w]=s[n-11+w][b]=p>>g++&1,o[b][n-11+w]=o[n-11+w][b]=1;return{matrix:s,reserved:o}}(i),h=a.matrix,v=a.reserved;if(function(t,i,r){for(var n=t[e],s=0,o=-1,l=n-1;l>=0;l-=2){6===l&&--l;for(var u=o<0?n-1:0,a=0;a<n;++a){for(var h=l;h>l-2;--h)i[u][h]||(t[u][h]=r[s>>3]>>(7&~s)&1,++s);u+=o}o=-o}}(h,v,u),o<0){k(h,v,0),E(h,0,s,0);var d=0,f=M(h);for(k(h,v,0),o=1;o<8;++o){k(h,v,o),E(h,0,s,o);var p=M(h);f>p&&(f=p,d=o),k(h,v,o)}o=d}return k(h,v,o),E(h,0,s,o),h},T={generate:function(t,i){var r=i||{},l={numeric:1,alphanumeric:2,octet:4},u={L:1,M:0,Q:3,H:2},a=r.version||-1,h=u[(r.ecclevel||"L").toUpperCase()],c=r.mode?l[r.mode.toLowerCase()]:-1,v="mask"in r?r.mask:-1;if(c<0)c="string"==typeof t?t.match(n)?1:t.match(o)?2:4:4;else if(1!==c&&2!==c&&4!==c)throw"invalid or unsupported mode";if(null===(t=function(t,i){switch(t){case 1:return i.match(n)?i:null;case 2:return i.match(s)?i.toUpperCase():null;case 4:if("string"==typeof i){for(var r=[],o=0;o<i[e];++o){var l=i.charCodeAt(o);l<128?r.push(l):l<2048?r.push(192|l>>6,128|63&l):l<65536?r.push(224|l>>12,128|l>>6&63,128|63&l):r.push(240|l>>18,128|l>>12&63,128|l>>6&63,128|63&l)}return r}return i}}(c,t)))throw"invalid data format";if(h<0||h>3)throw"invalid ECC level";if(a<0){for(a=1;a<=40&&!(t[e]<=j(a,c,h));++a);if(a>40)throw"too large data"}else if(a<1||a>40)throw"invalid version";if(-1!==v&&(v<0||v>8))throw"invalid mask";return F(t,a,c,h,v)},generateHTML:function(t,r){for(var n=r||{},s=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",l=T.generate(t,n),u=Math.max(n.modulesize||5,.5),a=Math.max(null!==n.margin?n.margin:4,0),h=i.createElement("div"),c=l[e],v=['<table border="0" cellspacing="0" cellpadding="0" style="border:'+u*a+"px solid "+s+";background:"+s+'">'],d=0;d<c;++d){v.push("<tr>");for(var f=0;f<c;++f)v.push('<td style="width:'+u+"px;height:"+u+"px"+(l[d][f]?";background:"+o:"")+'"></td>');v.push("</tr>")}h.className="qrcode";var p=i.createRange();p.selectNodeContents(h);var g=p.createContextualFragment(v.join("")+"</table>");return h.appendChild(g),h},generateSVG:function(t,r){var n=r||{},s=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",l=T.generate(t,n),u=l[e],a=Math.max(n.modulesize||5,.5),h=Math.max(n.margin?n.margin:4,0),c=a*(u+2*h),v=i.createElementNS("http://www.w3.org/2000/svg","svg");v.setAttributeNS(null,"viewBox","0 0 "+c+" "+c),v.setAttributeNS(null,"style","shape-rendering:crispEdges");var d="qrcode"+Date.now();v.setAttributeNS(null,"id",d);var f=i.createDocumentFragment(),p=i.createElementNS("http://www.w3.org/2000/svg","style");p.appendChild(i.createTextNode("#"+d+" .bg{fill:"+s+"}#"+d+" .fg{fill:"+o+"}")),f.appendChild(p);var g=function(t,e,r,n,s){var o=i.createElementNS("http://www.w3.org/2000/svg","rect")||"";return o.setAttributeNS(null,"class",t),o.setAttributeNS(null,"fill",e),o.setAttributeNS(null,"x",r),o.setAttributeNS(null,"y",n),o.setAttributeNS(null,"width",s),o.setAttributeNS(null,"height",s),o};f.appendChild(g("bg","none",0,0,c));for(var b=h*a,w=0;w<u;++w){for(var y=h*a,m=0;m<u;++m)l[w][m]&&f.appendChild(g("fg","none",y,b,a)),y+=a;b+=a}return v.appendChild(f),v},generatePNG:function(t,r){var n,s=r||{},o=s.fillcolor||"#FFFFFF",l=s.textcolor||"#000000",u=T.generate(t,s),a=Math.max(s.modulesize||5,.5),h=Math.max(null!==s.margin&&void 0!==s.margin?s.margin:4,0),c=u[e],v=a*(c+2*h),d=i.createElement("canvas");if(d.width=d.height=v,!(n=d.getContext("2d")))throw"canvas support is needed for PNG output";n.fillStyle=o,n.fillRect(0,0,v,v),n.fillStyle=l;for(var f=0;f<c;++f)for(var p=0;p<c;++p)u[f][p]&&n.fillRect(a*(h+p),a*(h+f),a,a);return d.toDataURL()}};t.QRCode=T}("undefined"!=typeof window?window:void 0,document);var Ct=((t,i,e)=>{if(et[t])return et[t];customElements.define(t,class extends tt{static get properties(){return it(e)}static get styles(){return null==e?void 0:e.styles}constructor(){super(),(t=>void 0!==t&&void 0!==t.defaults)(e)&&Object.entries(e.defaults).forEach(([t,i])=>{this[t]=i})}render(){return i(this)}});const r=document.createElement(t);return et[t]=r,r})("qr-code",t=>{const i=jt(t,t.text);$t(t,()=>window.addEventListener("message",t=>{const{type:e,text:r}=t.data;t.origin===window.location.origin&&t.source===window&&r&&"qr-code.changeText"===e&&i.publish(r)},!1));const e=i.getState();return e?R`<div class="qrCanvas" 
    title="${e}" 
    style="background-image:url('${QRCode.generatePNG(e,{})}')"></div>`:R``},{styles:((t,...i)=>{const r=1===t.length?t[0]:i.reduce((i,r,n)=>i+(t=>{if(t instanceof e)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return n(r)})`
:host {
  display: block;
  width: 100%;
  height: 100%;
}
.qrCanvas {
  background-size:cover;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
`,defaults:{text:""}});export default Ct;
