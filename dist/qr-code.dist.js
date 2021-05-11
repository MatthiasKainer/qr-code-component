/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${n}`);class o{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,l=-1,f=0;const{strings:d,values:{length:v}}=t;for(;f<v;){const t=o.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)h(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=d[f],i=u.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const o=n.split(r);this.parts.push({type:"attribute",index:l,name:i,strings:o}),f+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,n=e.split(r),o=n.length-1;for(let e=0;e<o;e++){let i,r=n[e];if(""===r)i=a();else{const t=u.exec(r);null!==t&&h(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}s.insertBefore(i,t),this.parts.push({type:"node",index:++l})}""===n[o]?(s.insertBefore(a(),t),i.push(t)):t.data=n[o],f+=o}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&l!==c||(l++,e.insertBefore(a(),t)),c=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(i.push(t),l--),f++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),f++}}else o.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const h=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,a=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let r=d(s),o=s[r],h=-1,c=0;const a=[];let u=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(a.push(t),null===u&&(u=t)),null!==u&&c++;void 0!==o&&o.index===h;)o.index=null!==u?-1:o.index-c,r=d(s,r),o=s[r]}a.forEach(t=>t.parentNode.removeChild(t))}const f=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},d=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(c(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=new WeakMap,p=t=>"function"==typeof t&&v.has(t),w={},m={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,h=0,a=n.nextNode();for(;o<s.length;)if(r=s[o],c(r)){for(;h<r.index;)h++,"TEMPLATE"===a.nodeName&&(i.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=i.pop(),a=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}else this.t.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${s} `;class S{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const h=u.exec(t);e+=null===h?t+(i?b:n):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==g&&(e=g.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new M(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!_(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(x(t)||!_(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class M{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||x(t)&&t===this.value||(this.value=t,p(t)||(this.committer.dirty=!0))}commit(){for(;p(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(a()),this.endNode=t.appendChild(a())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=a()),t.s(this.endNode=a())}insertAfterPart(t){t.s(this.startNode=a()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;p(this.i);){const t=this.i;this.i=w,t(this)}const t=this.i;t!==w&&(x(t)?t!==this.value&&this.o(t):t instanceof S?this.h(t):t instanceof Node?this.u(t):_(t)?this.l(t):t===m?(this.value=m,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}u(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.u(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),s=i._clone();i.update(t.values),this.u(s),this.value=i}}l(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new k(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ${constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=w}}class F extends C{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends M{}let P=!1;(()=>{try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.v=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.v,this.p),s&&(this.p=E(t),this.element.addEventListener(this.eventName,this.v,this.p)),this.value=t,this.i=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new o(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const j=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new F(t,e.slice(1),i).parts}return"@"===n?[new T(t,e.slice(1),s.eventContext)]:"?"===n?[new $(t,e.slice(1),i)]:new C(t,e,i).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const q=(t,...e)=>new S(t,e,"html",N)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,V=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const L=t=>e=>{const i=V(e.type,t);let n=j.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const h=e.strings.join(s);if(r=n.keyString.get(h),void 0===r){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(e,i),n.keyString.set(h,r)}return n.stringsArray.set(e.strings,r),r},z=["html","svg"],R=new Set,H=(t,e,i)=>{R.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{z.forEach(e=>{const i=j.get(V(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),l(t,i)})})})(t);const h=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let o=d(n),h=0,c=-1;for(;r.nextNode();){for(c++,r.currentNode===i&&(h=f(e),i.parentNode.insertBefore(e,i));-1!==o&&n[o].index===c;){if(h>0){for(;-1!==o;)n[o].index+=h,o=d(n,o);return}o=d(n,o)}}}(i,o,h.firstChild):h.insertBefore(o,h.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){h.insertBefore(o,h.firstChild);const t=new Set;t.add(o),l(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const J={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:B};class D extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=B){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||J,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||J.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}D.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class K{constructor(t,e){if(e!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const X={};class Y extends D{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new K(String(e),Z)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==X&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return X}}Y.finalized=!0,Y.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=U.has(e),o=I&&11===e.nodeType&&!!e.host,h=o&&!R.has(n),c=h?document.createDocumentFragment():e;if(((t,e,s)=>{let n=U.get(e);void 0===n&&(i(e,e.firstChild),U.set(e,n=new k(Object.assign({templateFactory:O},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:L(n)},s)),h){const t=U.get(c);U.delete(c);const s=t.value instanceof y?t.value.template:void 0;H(n,c,s),i(e,e.firstChild),e.appendChild(c),U.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)},Y.shadowRootOptions={mode:"open"},
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
 */
function(t,e){for(var i="length",s=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],n=/^\d*$/,r=/^[A-Za-z0-9 $%*+\-./:]*$/,o=/^[A-Z0-9 $%*+\-./:]*$/,h=[],c=[-1],a=0,u=1;a<255;++a)h.push(u),c[u]=a,u=2*u^(u>=128?285:0);for(var l=[[]],f=0;f<30;++f){for(var d=l[f],v=[],p=0;p<=f;++p){var w=p<f?h[d[p]]:0,m=h[(f+(d[p-1]||0))%255];v.push(c[w^m])}l.push(v)}for(var y={},g=0;g<45;++g)y["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(g)]=g;var b=[function(t,e){return(t+e)%2==0},function(t){return t%2==0},function(t,e){return e%3==0},function(t,e){return(t+e)%3==0},function(t,e){return((t/2|0)+(e/3|0))%2==0},function(t,e){return t*e%2+t*e%3==0},function(t,e){return(t*e%2+t*e%3)%2==0},function(t,e){return((t+e)%2+t*e%3)%2==0}],S=function(t){return t>6},x=function(t,e){var n=-8&function(t){var e=s[t],n=16*t*t+128*t+64;return S(t)&&(n-=36),e[2][i]&&(n-=25*e[2][i]*e[2][i]-10*e[2][i]-55),n}(t),r=s[t];return n-=8*r[0][e]*r[1][e]},_=function(t,e){switch(e){case 1:return t<10?10:t<27?12:14;case 2:return t<10?9:t<27?11:13;case 4:return t<10?8:16;case 8:return t<10?8:t<27?10:12}},C=function(t,e,i){var s=x(t,i)-4-_(t,e);switch(e){case 1:return 3*(s/10|0)+(s%10<4?0:s%10<7?1:2);case 2:return 2*(s/11|0)+(s%11<6?0:1);case 4:return s/8|0;case 8:return s/13|0}},M=function(t,e){for(var s=t.slice(0),n=t[i],r=e[i],o=0;o<r;++o)s.push(0);for(var a=0;a<n;){var u=c[s[a++]];if(u>=0)for(var l=0;l<r;++l)s[a+l]^=h[(u+e[l])%255]}return s.slice(n)},k=function(t,e,i,s){for(var n=t<<s,r=e-1;r>=0;--r)n>>s+r&1&&(n^=i<<r);return t<<s|n},$=function(t,e,s){for(var n=b[s],r=t[i],o=0;o<r;++o)for(var h=0;h<r;++h)e[o][h]||(t[o][h]^=n(o,h));return t},F=function(t,e,s,n){for(var r=t[i],o=21522^k(s<<3|n,5,1335,10),h=0;h<15;++h){var c=[r-1,r-2,r-3,r-4,r-5,r-6,r-7,r-8,7,5,4,3,2,1,0][h];t[[0,1,2,3,4,5,7,8,r-7,r-6,r-5,r-4,r-3,r-2,r-1][h]][8]=t[8][c]=o>>h&1}return t},A=function(t){for(var e=function(t){for(var e=0,s=0;s<t[i];++s)t[s]>=5&&(e+=t[s]-5+3);for(var n=5;n<t[i];n+=2){var r=t[n];t[n-1]===r&&t[n-2]===3*r&&t[n-3]===r&&t[n-4]===r&&(t[n-5]>=4*r||t[n+1]>=4*r)&&(e+=40)}return e},s=t[i],n=0,r=0,o=0;o<s;++o){var h,c=t[o];h=[0];for(var a=0;a<s;){var u;for(u=0;a<s&&c[a];++u)++a;for(h.push(u),u=0;a<s&&!c[a];++u)++a;h.push(u)}n+=e(h),h=[0];for(var l=0;l<s;){var f;for(f=0;l<s&&t[l][o];++f)++l;for(h.push(f),f=0;l<s&&!t[l][o];++f)++l;h.push(f)}n+=e(h);var d=t[o+1]||[];r+=c[0];for(var v=1;v<s;++v){var p=c[v];r+=p,c[v-1]===p&&d[v]===p&&d[v-1]===p&&(n+=3)}}return n+=10*(Math.abs(r/s/s-.5)/.05|0)},P=function(t,e,n,r,o){var h=s[e],c=function(t,e,s,n){var r=[],o=0,h=8,c=s[i],a=function(t,e){if(e>=h){for(r.push(o|t>>(e-=h));e>=8;)r.push(t>>(e-=8)&255);o=0,h=8}e>0&&(o|=(t&(1<<e)-1)<<(h-=e))},u=_(t,e);switch(a(e,4),a(c,u),e){case 1:for(var l=2;l<c;l+=3)a(parseInt(s.substring(l-2,l+1),10),10);a(parseInt(s.substring(l-2),10),[0,4,7][c%3]);break;case 2:for(var f=1;f<c;f+=2)a(45*y[s.charAt(f-1)]+y[s.charAt(f)],11);c%2==1&&a(y[s.charAt(f-1)],6);break;case 4:for(var d=0;d<c;++d)a(s[d],8)}for(a(0,4),h<8&&r.push(o);r[i]+1<n;)r.push(236,17);return r[i]<n&&r.push(236),r}(e,n,t,x(e,r)>>3);c=function(t,e,s){for(var n=[],r=t[i]/e|0,o=0,h=e-t[i]%e,c=0;c<h;++c)n.push(o),o+=r;for(var a=h;a<e;++a)n.push(o),o+=r+1;n.push(o);for(var u=[],l=0;l<e;++l)u.push(M(t.slice(n[l],n[l+1]),s));for(var f=[],d=t[i]/e|0,v=0;v<d;++v)for(var p=0;p<e;++p)f.push(t[n[p]+v]);for(var w=h;w<e;++w)f.push(t[n[w+1]-1]);for(var m=0;m<s[i];++m)for(var y=0;y<e;++y)f.push(u[y][m]);return f}(c,h[1][r],l[h[0][r]]);var a=function(t){for(var e=s[t],n=function(t){return 4*t+17}(t),r=[],o=[],h=0;h<n;++h)r.push([]),o.push([]);var c=function(t,e,i,s,n){for(var h=0;h<i;++h)for(var c=0;c<s;++c)r[t+h][e+c]=n[h]>>c&1,o[t+h][e+c]=1};c(0,0,9,9,[127,65,93,93,93,65,383,0,64]),c(n-8,0,8,9,[256,127,65,93,93,93,65,127]),c(0,n-8,9,8,[254,130,186,186,186,130,254,0,0]);for(var a=9;a<n-8;++a)r[6][a]=r[a][6]=1&~a,o[6][a]=o[a][6]=1;for(var u=e[2],l=u[i],f=0;f<l;++f)for(var d=0===f?l-1:l,v=0===f||f===l-1?1:0;v<d;++v)c(u[f],u[v],5,5,[31,17,21,17,31]);if(S(t))for(var p=k(t,6,7973,12),w=0,m=0;m<6;++m)for(var y=0;y<3;++y)r[m][n-11+y]=r[n-11+y][m]=p>>w++&1,o[m][n-11+y]=o[n-11+y][m]=1;return{matrix:r,reserved:o}}(e),u=a.matrix,f=a.reserved;if(function(t,e,s){for(var n=t[i],r=0,o=-1,h=n-1;h>=0;h-=2){6===h&&--h;for(var c=o<0?n-1:0,a=0;a<n;++a){for(var u=h;u>h-2;--u)e[c][u]||(t[c][u]=s[r>>3]>>(7&~r)&1,++r);c+=o}o=-o}}(u,f,c),o<0){$(u,f,0),F(u,0,r,0);var d=0,v=A(u);for($(u,f,0),o=1;o<8;++o){$(u,f,o),F(u,0,r,o);var p=A(u);v>p&&(v=p,d=o),$(u,f,o)}o=d}return $(u,f,o),F(u,0,r,o),u},T={generate:function(t,e){var s=e||{},h={numeric:1,alphanumeric:2,octet:4},c={L:1,M:0,Q:3,H:2},a=s.version||-1,u=c[(s.ecclevel||"L").toUpperCase()],l=s.mode?h[s.mode.toLowerCase()]:-1,f="mask"in s?s.mask:-1;if(l<0)l="string"==typeof t?t.match(n)?1:t.match(o)?2:4:4;else if(1!==l&&2!==l&&4!==l)throw"invalid or unsupported mode";if(null===(t=function(t,e){switch(t){case 1:return e.match(n)?e:null;case 2:return e.match(r)?e.toUpperCase():null;case 4:if("string"==typeof e){for(var s=[],o=0;o<e[i];++o){var h=e.charCodeAt(o);h<128?s.push(h):h<2048?s.push(192|h>>6,128|63&h):h<65536?s.push(224|h>>12,128|h>>6&63,128|63&h):s.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|63&h)}return s}return e}}(l,t)))throw"invalid data format";if(u<0||u>3)throw"invalid ECC level";if(a<0){for(a=1;a<=40&&!(t[i]<=C(a,l,u));++a);if(a>40)throw"too large data"}else if(a<1||a>40)throw"invalid version";if(-1!==f&&(f<0||f>8))throw"invalid mask";return P(t,a,l,u,f)},generateHTML:function(t,s){for(var n=s||{},r=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",h=T.generate(t,n),c=Math.max(n.modulesize||5,.5),a=Math.max(null!==n.margin?n.margin:4,0),u=e.createElement("div"),l=h[i],f=['<table border="0" cellspacing="0" cellpadding="0" style="border:'+c*a+"px solid "+r+";background:"+r+'">'],d=0;d<l;++d){f.push("<tr>");for(var v=0;v<l;++v)f.push('<td style="width:'+c+"px;height:"+c+"px"+(h[d][v]?";background:"+o:"")+'"></td>');f.push("</tr>")}u.className="qrcode";var p=e.createRange();p.selectNodeContents(u);var w=p.createContextualFragment(f.join("")+"</table>");return u.appendChild(w),u},generateSVG:function(t,s){var n=s||{},r=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",h=T.generate(t,n),c=h[i],a=Math.max(n.modulesize||5,.5),u=Math.max(n.margin?n.margin:4,0),l=a*(c+2*u),f=e.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttributeNS(null,"viewBox","0 0 "+l+" "+l),f.setAttributeNS(null,"style","shape-rendering:crispEdges");var d="qrcode"+Date.now();f.setAttributeNS(null,"id",d);var v=e.createDocumentFragment(),p=e.createElementNS("http://www.w3.org/2000/svg","style");p.appendChild(e.createTextNode("#"+d+" .bg{fill:"+r+"}#"+d+" .fg{fill:"+o+"}")),v.appendChild(p);var w=function(t,i,s,n,r){var o=e.createElementNS("http://www.w3.org/2000/svg","rect")||"";return o.setAttributeNS(null,"class",t),o.setAttributeNS(null,"fill",i),o.setAttributeNS(null,"x",s),o.setAttributeNS(null,"y",n),o.setAttributeNS(null,"width",r),o.setAttributeNS(null,"height",r),o};v.appendChild(w("bg","none",0,0,l));for(var m=u*a,y=0;y<c;++y){for(var g=u*a,b=0;b<c;++b)h[y][b]&&v.appendChild(w("fg","none",g,m,a)),g+=a;m+=a}return f.appendChild(v),f},generatePNG:function(t,s){var n,r=s||{},o=r.fillcolor||"#FFFFFF",h=r.textcolor||"#000000",c=T.generate(t,r),a=Math.max(r.modulesize||5,.5),u=Math.max(null!==r.margin&&void 0!==r.margin?r.margin:4,0),l=c[i],f=a*(l+2*u),d=e.createElement("canvas");if(d.width=d.height=f,!(n=d.getContext("2d")))throw"canvas support is needed for PNG output";n.fillStyle=o,n.fillRect(0,0,f,f),n.fillStyle=h;for(var v=0;v<l;++v)for(var p=0;p<l;++p)c[v][p]&&n.fillRect(a*(u+p),a*(u+v),a,a);return d.toDataURL()}};t.QRCode=T}("undefined"!=typeof window?window:void 0,document);let tt=class extends Y{constructor(){super(),this.text="",window.addEventListener("message",t=>{const{type:e,text:i}=t.data;t.origin===window.location.origin&&t.source===window&&i&&"qr-code.changeText"===e&&(this.text=i)},!1)}render(){return this.text?q`<div class="qrCanvas" 
      title="${this.text}" 
      style="background-image:url('${QRCode.generatePNG(this.text,{})}')"></div>`:q``}};var et,it;tt.styles=((t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new K(i,Z)})`
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
  `,t([(t,e)=>void 0!==e?((t,e,i)=>{e.constructor.createProperty(i,t)})(et,t,e):G(et,t)],tt.prototype,"text",void 0),tt=t([(it="qr-code",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(it,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(it,t))],tt);export{tt as QRCodeElement};
