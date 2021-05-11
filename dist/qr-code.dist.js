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
function t(t,e,s,i){for(var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o
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
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`);class o{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,l=-1,f=0;const{strings:d,values:{length:v}}=t;for(;f<v;){const t=o.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)h(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=d[f],s=u.exec(e)[2],i=s.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const o=n.split(r);this.parts.push({type:"attribute",index:l,name:s,strings:o}),f+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,n=e.split(r),o=n.length-1;for(let e=0;e<o;e++){let s,r=n[e];if(""===r)s=a();else{const t=u.exec(r);null!==t&&h(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++l})}""===n[o]?(i.insertBefore(a(),t),s.push(t)):t.data=n[o],f+=o}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&l!==c||(l++,e.insertBefore(a(),t)),c=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(s.push(t),l--),f++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),f++}}else o.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const h=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,a=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let r=d(i),o=i[r],h=-1,c=0;const a=[];let u=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(a.push(t),null===u&&(u=t)),null!==u&&c++;void 0!==o&&o.index===h;)o.index=null!==u?-1:o.index-c,r=d(i,r),o=i[r]}a.forEach(t=>t.parentNode.removeChild(t))}const f=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},d=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(c(e))return s}return-1};
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
class y{constructor(t,e,s){this.t=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.t)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,h=0,a=n.nextNode();for(;o<i.length;)if(r=i[o],c(r)){for(;h<r.index;)h++,"TEMPLATE"===a.nodeName&&(s.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=s.pop(),a=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}else this.t.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const g=` ${i} `;class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const h=u.exec(t);e+=null===h?t+(s?g:n):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class _{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(x(t)||!S(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||x(t)&&t===this.value||(this.value=t,p(t)||(this.committer.dirty=!0))}commit(){for(;p(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(a()),this.endNode=t.appendChild(a())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=a()),t.i(this.endNode=a())}insertAfterPart(t){t.i(this.startNode=a()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;p(this.s);){const t=this.s;this.s=w,t(this)}const t=this.s;t!==w&&(x(t)?t!==this.value&&this.o(t):t instanceof b?this.h(t):t instanceof Node?this.u(t):S(t)?this.l(t):t===m?(this.value=m,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}u(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.u(document.createTextNode(s)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this.u(i),this.value=s}}l(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new M(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ${constructor(t,e,s){if(this.value=void 0,this.s=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.s=t}commit(){for(;p(this.s);){const t=this.s;this.s=w,t(this)}if(this.s===w)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=w}}class C extends _{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new F(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class F extends k{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class P{constructor(t,e,s){this.value=void 0,this.s=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.v=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;p(this.s);){const t=this.s;this.s=w,t(this)}if(this.s===w)return;const t=this.s,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.v,this.p),i&&(this.p=E(t),this.element.addEventListener(this.eventName,this.v,this.p)),this.value=t,this.s=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function O(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const j=new Map,T=new WeakMap;
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
 */const U=new
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
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new C(t,e.slice(1),s).parts}return"@"===n?[new P(t,e.slice(1),i.eventContext)]:"?"===n?[new $(t,e.slice(1),s)]:new _(t,e,s).parts}handleTextExpression(t){return new M(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const N=(t,...e)=>new b(t,e,"html",U)
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
 */,q=(t,e)=>`${t}--${e}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const I=t=>e=>{const s=q(e.type,t);let n=j.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const h=e.strings.join(i);if(r=n.keyString.get(h),void 0===r){const s=e.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(s,t),r=new o(e,s),n.keyString.set(h,r)}return n.stringsArray.set(e.strings,r),r},z=["html","svg"],L=new Set,R=(t,e,s)=>{L.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{z.forEach(e=>{const s=j.get(q(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),l(t,s)})})})(t);const h=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=d(n),h=0,c=-1;for(;r.nextNode();){for(c++,r.currentNode===s&&(h=f(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===c;){if(h>0){for(;-1!==o;)n[o].index+=h,o=d(n,o);return}o=d(n,o)}}}(s,o,h.firstChild):h.insertBefore(o,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){h.insertBefore(o,h.firstChild);const t=new Set;t.add(o),l(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:J};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=J){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||H,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||H.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=B){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
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
const D=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};
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
const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class Z{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const K={};class X extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==K&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return K}}X.finalized=!0,X.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=T.has(e),o=V&&11===e.nodeType&&!!e.host,h=o&&!L.has(n),c=h?document.createDocumentFragment():e;if(((t,e,i)=>{let n=T.get(e);void 0===n&&(s(e,e.firstChild),T.set(e,n=new M(Object.assign({templateFactory:O},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:I(n)},i)),h){const t=T.get(c);T.delete(c);const i=t.value instanceof y?t.value.template:void 0;R(n,c,i),s(e,e.firstChild),e.appendChild(c),T.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)},
/*!
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
 * passes jshint with suppressing comments
 */
function(t,e){for(var s="length",i=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],n=/^\d*$/,r=/^[A-Za-z0-9 $%*+\-./:] * $ /,o=/^[A-Z0-9 $%*+\-./:] * $ /,h=[],c=[-1],a=0,u=1;a<255;++a)h.push(u),c[u]=a,u=2*u^(u>=128?285:0);for(var l=[[]],f=0;f<30;++f){for(var d=l[f],v=[],p=0;p<=f;++p){var w=p<f?h[d[p]]:0,m=h[(f+(d[p-1]||0))%255];v.push(c[w^m])}l.push(v)}for(var y={},g=0;g<45;++g)y["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(g)]=g;var b=[function(t,e){return(t+e)%2==0},function(t){return t%2==0},function(t,e){return e%3==0},function(t,e){return(t+e)%3==0},function(t,e){return((t/2|0)+(e/3|0))%2==0},function(t,e){return t*e%2+t*e%3==0},function(t,e){return(t*e%2+t*e%3)%2==0},function(t,e){return((t+e)%2+t*e%3)%2==0}],x=function(t){return t>6},S=function(t,e){var n=-8&function(t){var e=i[t],n=16*t*t+128*t+64;return x(t)&&(n-=36),e[2][s]&&(n-=25*e[2][s]*e[2][s]-10*e[2][s]-55),n}(t),r=i[t];return n-=8*r[0][e]*r[1][e]},_=function(t,e){switch(e){case 1:return t<10?10:t<27?12:14;case 2:return t<10?9:t<27?11:13;case 4:return t<10?8:16;case 8:return t<10?8:t<27?10:12}},k=function(t,e,s){var i=S(t,s)-4-_(t,e);switch(e){case 1:return 3*(i/10|0)+(i%10<4?0:i%10<7?1:2);case 2:return 2*(i/11|0)+(i%11<6?0:1);case 4:return i/8|0;case 8:return i/13|0}},M=function(t,e){for(var i=t.slice(0),n=t[s],r=e[s],o=0;o<r;++o)i.push(0);for(var a=0;a<n;){var u=c[i[a++]];if(u>=0)for(var l=0;l<r;++l)i[a+l]^=h[(u+e[l])%255]}return i.slice(n)},$=function(t,e,s,i){for(var n=t<<i,r=e-1;r>=0;--r)n>>i+r&1&&(n^=s<<r);return t<<i|n},C=function(t,e,i){for(var n=b[i],r=t[s],o=0;o<r;++o)for(var h=0;h<r;++h)e[o][h]||(t[o][h]^=n(o,h));return t},F=function(t,e,i,n){for(var r=t[s],o=21522^$(i<<3|n,5,1335,10),h=0;h<15;++h){var c=[r-1,r-2,r-3,r-4,r-5,r-6,r-7,r-8,7,5,4,3,2,1,0][h];t[[0,1,2,3,4,5,7,8,r-7,r-6,r-5,r-4,r-3,r-2,r-1][h]][8]=t[8][c]=o>>h&1}return t},A=function(t){for(var e=function(t){for(var e=0,i=0;i<t[s];++i)t[i]>=5&&(e+=t[i]-5+3);for(var n=5;n<t[s];n+=2){var r=t[n];t[n-1]===r&&t[n-2]===3*r&&t[n-3]===r&&t[n-4]===r&&(t[n-5]>=4*r||t[n+1]>=4*r)&&(e+=40)}return e},i=t[s],n=0,r=0,o=0;o<i;++o){var h,c=t[o];h=[0];for(var a=0;a<i;){var u;for(u=0;a<i&&c[a];++u)++a;for(h.push(u),u=0;a<i&&!c[a];++u)++a;h.push(u)}n+=e(h),h=[0];for(var l=0;l<i;){var f;for(f=0;l<i&&t[l][o];++f)++l;for(h.push(f),f=0;l<i&&!t[l][o];++f)++l;h.push(f)}n+=e(h);var d=t[o+1]||[];r+=c[0];for(var v=1;v<i;++v){var p=c[v];r+=p,c[v-1]===p&&d[v]===p&&d[v-1]===p&&(n+=3)}}return n+=10*(Math.abs(r/i/i-.5)/.05|0)},P=function(t,e,n,r,o){var h=i[e],c=function(t,e,i,n){var r=[],o=0,h=8,c=i[s],a=function(t,e){if(e>=h){for(r.push(o|t>>(e-=h));e>=8;)r.push(t>>(e-=8)&255);o=0,h=8}e>0&&(o|=(t&(1<<e)-1)<<(h-=e))},u=_(t,e);switch(a(e,4),a(c,u),e){case 1:for(var l=2;l<c;l+=3)a(parseInt(i.substring(l-2,l+1),10),10);a(parseInt(i.substring(l-2),10),[0,4,7][c%3]);break;case 2:for(var f=1;f<c;f+=2)a(45*y[i.charAt(f-1)]+y[i.charAt(f)],11);c%2==1&&a(y[i.charAt(f-1)],6);break;case 4:for(var d=0;d<c;++d)a(i[d],8)}for(a(0,4),h<8&&r.push(o);r[s]+1<n;)r.push(236,17);return r[s]<n&&r.push(236),r}(e,n,t,S(e,r)>>3);c=function(t,e,i){for(var n=[],r=t[s]/e|0,o=0,h=e-t[s]%e,c=0;c<h;++c)n.push(o),o+=r;for(var a=h;a<e;++a)n.push(o),o+=r+1;n.push(o);for(var u=[],l=0;l<e;++l)u.push(M(t.slice(n[l],n[l+1]),i));for(var f=[],d=t[s]/e|0,v=0;v<d;++v)for(var p=0;p<e;++p)f.push(t[n[p]+v]);for(var w=h;w<e;++w)f.push(t[n[w+1]-1]);for(var m=0;m<i[s];++m)for(var y=0;y<e;++y)f.push(u[y][m]);return f}(c,h[1][r],l[h[0][r]]);var a=function(t){for(var e=i[t],n=function(t){return 4*t+17}(t),r=[],o=[],h=0;h<n;++h)r.push([]),o.push([]);var c=function(t,e,s,i,n){for(var h=0;h<s;++h)for(var c=0;c<i;++c)r[t+h][e+c]=n[h]>>c&1,o[t+h][e+c]=1};c(0,0,9,9,[127,65,93,93,93,65,383,0,64]),c(n-8,0,8,9,[256,127,65,93,93,93,65,127]),c(0,n-8,9,8,[254,130,186,186,186,130,254,0,0]);for(var a=9;a<n-8;++a)r[6][a]=r[a][6]=1&~a,o[6][a]=o[a][6]=1;for(var u=e[2],l=u[s],f=0;f<l;++f)for(var d=0===f?l-1:l,v=0===f||f===l-1?1:0;v<d;++v)c(u[f],u[v],5,5,[31,17,21,17,31]);if(x(t))for(var p=$(t,6,7973,12),w=0,m=0;m<6;++m)for(var y=0;y<3;++y)r[m][n-11+y]=r[n-11+y][m]=p>>w++&1,o[m][n-11+y]=o[n-11+y][m]=1;return{matrix:r,reserved:o}}(e),u=a.matrix,f=a.reserved;if(function(t,e,i){for(var n=t[s],r=0,o=-1,h=n-1;h>=0;h-=2){6===h&&--h;for(var c=o<0?n-1:0,a=0;a<n;++a){for(var u=h;u>h-2;--u)e[c][u]||(t[c][u]=i[r>>3]>>(7&~r)&1,++r);c+=o}o=-o}}(u,f,c),o<0){C(u,f,0),F(u,0,r,0);var d=0,v=A(u);for(C(u,f,0),o=1;o<8;++o){C(u,f,o),F(u,0,r,o);var p=A(u);v>p&&(v=p,d=o),C(u,f,o)}o=d}return C(u,f,o),F(u,0,r,o),u},E={generate:function(t,e){var i=e||{},h={numeric:1,alphanumeric:2,octet:4},c={L:1,M:0,Q:3,H:2},a=i.version||-1,u=c[(i.ecclevel||"L").toUpperCase()],l=i.mode?h[i.mode.toLowerCase()]:-1,f="mask"in i?i.mask:-1;if(l<0)l="string"==typeof t?t.match(n)?1:t.match(o)?2:4:4;else if(1!==l&&2!==l&&4!==l)throw"invalid or unsupported mode";if(null===(t=function(t,e){switch(t){case 1:return e.match(n)?e:null;case 2:return e.match(r)?e.toUpperCase():null;case 4:if("string"==typeof e){for(var i=[],o=0;o<e[s];++o){var h=e.charCodeAt(o);h<128?i.push(h):h<2048?i.push(192|h>>6,128|63&h):h<65536?i.push(224|h>>12,128|h>>6&63,128|63&h):i.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|63&h)}return i}return e}}(l,t)))throw"invalid data format";if(u<0||u>3)throw"invalid ECC level";if(a<0){for(a=1;a<=40&&!(t[s]<=k(a,l,u));++a);if(a>40)throw"too large data"}else if(a<1||a>40)throw"invalid version";if(-1!==f&&(f<0||f>8))throw"invalid mask";return P(t,a,l,u,f)},generateHTML:function(t,i){for(var n=i||{},r=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",h=E.generate(t,n),c=Math.max(n.modulesize||5,.5),a=Math.max(null!==n.margin?n.margin:4,0),u=e.createElement("div"),l=h[s],f=['<table border="0" cellspacing="0" cellpadding="0" style="border:'+c*a+"px solid "+r+";background:"+r+'">'],d=0;d<l;++d){f.push("<tr>");for(var v=0;v<l;++v)f.push('<td style="width:'+c+"px;height:"+c+"px"+(h[d][v]?";background:"+o:"")+'"></td>');f.push("</tr>")}u.className="qrcode";var p=e.createRange();p.selectNodeContents(u);var w=p.createContextualFragment(f.join("")+"</table>");return u.appendChild(w),u},generateSVG:function(t,i){var n=i||{},r=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",h=E.generate(t,n),c=h[s],a=Math.max(n.modulesize||5,.5),u=Math.max(n.margin?n.margin:4,0),l=a*(c+2*u),f=e.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttributeNS(null,"viewBox","0 0 "+l+" "+l),f.setAttributeNS(null,"style","shape-rendering:crispEdges");var d="qrcode"+Date.now();f.setAttributeNS(null,"id",d);var v=e.createDocumentFragment(),p=e.createElementNS("http://www.w3.org/2000/svg","style");p.appendChild(e.createTextNode("#"+d+" .bg{fill:"+r+"}#"+d+" .fg{fill:"+o+"}")),v.appendChild(p);var w=function(t,s,i,n,r){var o=e.createElementNS("http://www.w3.org/2000/svg","rect")||"";return o.setAttributeNS(null,"class",t),o.setAttributeNS(null,"fill",s),o.setAttributeNS(null,"x",i),o.setAttributeNS(null,"y",n),o.setAttributeNS(null,"width",r),o.setAttributeNS(null,"height",r),o};v.appendChild(w("bg","none",0,0,l));for(var m=u*a,y=0;y<c;++y){for(var g=u*a,b=0;b<c;++b)h[y][b]&&v.appendChild(w("fg","none",g,m,a)),g+=a;m+=a}return f.appendChild(v),f},generatePNG:function(t,i){var n,r=i||{},o=r.fillcolor||"#FFFFFF",h=r.textcolor||"#000000",c=E.generate(t,r),a=Math.max(r.modulesize||5,.5),u=Math.max(null!==r.margin&&void 0!==r.margin?r.margin:4,0),l=c[s],f=a*(l+2*u),d=e.createElement("canvas");if(d.width=d.height=f,!(n=d.getContext("2d")))throw"canvas support is needed for PNG output";n.fillStyle=o,n.fillRect(0,0,f,f),n.fillStyle=h;for(var v=0;v<l;++v)for(var p=0;p<l;++p)c[v][p]&&n.fillRect(a*(u+p),a*(u+v),a,a);return d.toDataURL()}};t.QRCode=E}("undefined"!=typeof window?window:void 0,document);let Y=class extends X{constructor(){super(),this.text="",window.addEventListener("message",t=>{const{type:e,text:s}=t.data;t.origin===window.location.origin&&t.source===window&&s&&"qr-code.changeText"===e&&(this.text=s)},!1)}render(){return this.text?N`<div class="qrCanvas" 
      title="${this.text}" 
      style="background-image:url('${QRCode.generatePNG(this.text,{})}')"></div>`:N``}};var tt,et;Y.styles=((t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Z(s,Q)})`
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
  `,t([(t,e)=>void 0!==e?((t,e,s)=>{e.constructor.createProperty(s,t)})(tt,t,e):D(tt,t)],Y.prototype,"text",void 0),Y=t([(et="qr-code",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(et,t):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(et,t))],Y);export{Y as QRCodeElement};
