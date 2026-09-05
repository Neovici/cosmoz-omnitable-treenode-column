const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./flow-Bk5W63PM.js","./rolldown-runtime-DaJ6WEGw.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./preload-helper-si3HNj2m.js";var r,i,a,o,s,c,l,u,d=e((()=>{r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap,s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}},c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e})),f,p,m,h,g,_,v,y,b,ee,x,S,C,w,T,E=e((()=>{d(),{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:h,getOwnPropertySymbols:g,getPrototypeOf:_}=Object,v=globalThis,y=v.trustedTypes,b=y?y.emptyScript:``,ee=v.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},C=(e,t)=>!f(e,t),w={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:C},Symbol.metadata??=Symbol(`metadata`),v.litPropertyMetadata??=new WeakMap,T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(x(`elementProperties`)))return;let e=_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x(`properties`))){let e=this.properties,t=[...h(e),...g(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?S:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?S:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??C)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},T.elementStyles=[],T.shadowRootOptions={mode:`open`},T[x(`elementProperties`)]=new Map,T[x(`finalized`)]=new Map,ee?.({ReactiveElement:T}),(v.reactiveElementVersions??=[]).push(`2.1.2`)}));function te(e,t){if(!de(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ae===void 0?t:ae.createHTML(t)}function D(e,t,n=e,r){if(t===M)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ue(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=D(e,i._$AS(e,t.values),i,r)),t}var ne,re,ie,ae,O,k,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,A,j,M,N,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,P=e((()=>{ne=globalThis,re=e=>e,ie=ne.trustedTypes,ae=ie?ie.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,O=`$lit$`,k=`lit$${Math.random().toFixed(9).slice(2)}$`,oe=`?`+k,se=`<${oe}>`,ce=document,le=()=>ce.createComment(``),ue=e=>e===null||typeof e!=`object`&&typeof e!=`function`,de=Array.isArray,fe=e=>de(e)||typeof e?.[Symbol.iterator]==`function`,pe=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ge=/>/g,_e=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ve=/'/g,ye=/"/g,be=/^(?:script|style|textarea|title)$/i,xe=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),A=xe(1),j=xe(2),xe(3),M=Symbol.for(`lit-noChange`),N=Symbol.for(`lit-nothing`),Se=new WeakMap,Ce=ce.createTreeWalker(ce,129),we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=me;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===me?c[1]===`!--`?o=he:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=_e):(be.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=_e):o=ge:o===_e?c[0]===`>`?(o=i??me,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?_e:c[3]===`"`?ye:ve):o===ye||o===ve?o=_e:o===he||o===ge?o=me:(o=_e,i=void 0);let d=o===_e&&e[t+1].startsWith(`/>`)?` `:``;a+=o===me?n+se:l>=0?(r.push(s),n.slice(0,l)+O+n.slice(l)+k+d):n+k+(l===-2?t:d)}return[te(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),Ce.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ce.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(O)){let t=u[o++],n=i.getAttribute(e).split(k),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ke:r[1]===`?`?Ae:r[1]===`@`?je:Oe}),i.removeAttribute(e)}else e.startsWith(k)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(be.test(i.tagName)){let e=i.textContent.split(k),t=e.length-1;if(t>0){i.textContent=ie?ie.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],le()),Ce.nextNode(),c.push({type:2,index:++a});i.append(e[t],le())}}}else if(i.nodeType===8)if(i.data===oe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(k,e+1))!==-1;)c.push({type:7,index:a}),e+=k.length-1}a++}}static createElement(e,t){let n=ce.createElement(`template`);return n.innerHTML=e,n}},Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ce).importNode(t,!0);Ce.currentNode=r;let i=Ce.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new De(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ce.nextNode(),a++)}return Ce.currentNode=ce,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},De=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),ue(e)?e===N||e==null||e===``?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==M&&this._(e):e._$litType$===void 0?e.nodeType===void 0?fe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(te(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ee(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){de(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(le()),this.O(le()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=re(e).nextSibling;re(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=D(this,e,t,0),a=!ue(e)||e!==this._$AH&&e!==M,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=D(this,r[n+o],t,o),s===M&&(s=this._$AH[o]),a||=!ue(s)||s!==this._$AH[o],s===N?e=N:e!==N&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ke=class extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},Ae=class extends Oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},je=class extends Oe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??N)===M)return;let n=this._$AH,r=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Ne={M:O,P:k,A:oe,C:1,L:we,R:Ee,D:fe,V:D,I:De,H:Oe,N:Ae,U:je,B:ke,F:Me},Pe=ne.litHtmlPolyfillSupport,Pe?.(Te,De),(ne.litHtmlVersions??=[]).push(`3.3.3`),Fe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new De(t.insertBefore(le(),e),e,void 0,n??{})}return i._$AI(e),i}})),Ie,Le,Re,ze=e((()=>{E(),E(),P(),P(),Ie=globalThis,Le=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}},Le._$litElement$=!0,Le.finalized=!0,Ie.litElementHydrateSupport?.({LitElement:Le}),Re=Ie.litElementPolyfillSupport,Re?.({LitElement:Le}),(Ie.litElementVersions??=[]).push(`4.2.2`)})),Be=e((()=>{})),Ve=e((()=>{E(),P(),ze(),Be()})),He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et=e((()=>{P(),{I:He}=Ne,Ue=e=>e,We=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ge=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Ke=e=>e.strings===void 0,qe=()=>document.createComment(``),Je=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){let t=r.insertBefore(qe(),i),a=r.insertBefore(qe(),i);n=new He(t,a,e,e.options)}else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Ue(e).nextSibling;Ue(r).insertBefore(e,i),e=t}}}return n},Ye=(e,t,n=e)=>(e._$AI(t,n),e),Xe={},Ze=(e,t=Xe)=>e._$AH=t,Qe=e=>e._$AH,$e=e=>{e._$AR(),e._$AA.remove()}}));function tt(e){it=e}function nt(){it=null,at=0}function rt(){return at++}var it,at,ot=e((()=>{at=0})),st,ct,lt,ut,dt,ft,pt,mt=e((()=>{st=Symbol(`haunted.phase`),ct=Symbol(`haunted.hook`),lt=Symbol(`haunted.update`),ut=Symbol(`haunted.commit`),dt=Symbol(`haunted.effects`),ft=Symbol(`haunted.layoutEffects`),pt=`haunted.context`})),ht,gt=e((()=>{ot(),mt(),ht=class{update;host;virtual;[ct];[dt];[ft];constructor(e,t){this.update=e,this.host=t,this[ct]=new Map,this[dt]=[],this[ft]=[]}run(e){tt(this);let t=e();return nt(),t}_runEffects(e){let t=this[e];tt(this);for(let e of t)e.call(this);nt()}runEffects(){this._runEffects(dt)}runLayoutEffects(){this._runEffects(ft)}teardown(){this[ct].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),_t,vt=e((()=>{_t=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function yt(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=xt(n)}}var bt,xt,St,Ct,wt,Tt=e((()=>{gt(),mt(),vt(),bt=100,xt=Promise.resolve().then.bind(Promise.resolve()),St=yt(),Ct=yt(),wt=class e{renderer;host;state;[st];_updateQueued;_active;_updateCount;_processing;static maxUpdates=bt;constructor(e,t){this.renderer=e,this.host=t,this.state=new ht(this.update.bind(this),t),this[st]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new _t(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,St(()=>{let e=this.handlePhase(lt);Ct(()=>{this.handlePhase(ut,e),Ct(()=>{this.handlePhase(dt),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[st]=e,e){case ut:this.commit(t),this.runEffects(ft);return;case lt:return this.render();case dt:return this.runEffects(dt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),Et,Dt,Ot,F,kt=e((()=>{Et=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},Dt=e=>e?.map(e=>typeof e==`string`?Et(e):e),Ot=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),F=Ot}));function At(e){class t extends wt{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=Dt(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,jt(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var jt,Mt=e((()=>{Tt(),kt(),jt=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function Nt(e,...t){let n=rt(),r=it[ct],i=r.get(n);return i||(i=new e(n,it,...t),r.set(n,i)),i.update(...t)}function Pt(e){return Nt.bind(null,e)}var I,Ft=e((()=>{ot(),mt(),I=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function It(e){return Pt(class extends I{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var Lt=e((()=>{Ft()}));function Rt(e,t){e[dt].push(t)}var L,zt=e((()=>{mt(),Lt(),L=It(Rt)})),Bt,Vt,Ht=e((()=>{Ft(),mt(),zt(),Bt=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Vt=Pt(class extends I{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Rt(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Bt(this.state.host).dispatchEvent(new CustomEvent(pt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Ut(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(pt,this)}disconnectedCallback(){this.removeEventListener(pt,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Vt(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Wt=e((()=>{mt(),Ht()})),R,Gt=e((()=>{Ft(),R=Pt(class extends I{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),z,Kt=e((()=>{Gt(),z=(e,t)=>R(()=>e,t)}));function qt(e,t){e[ft].push(t)}var Jt,Yt=e((()=>{mt(),Lt(),Jt=It(qt)})),Xt,Zt=e((()=>{Ft(),Xt=Pt(class extends I{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Qt,$t=e((()=>{Ft(),Qt=Pt(class extends I{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),en,tn,nn,rn=e((()=>{Ft(),en=/([A-Z])/gu,tn=Pt(class extends I{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(en,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}}),nn=e=>t=>{t.preventDefault(),e(t.detail.updater??t.detail.value)}}));function an(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function B(e){return R(()=>an(e),[])}var on=e((()=>{Gt()})),sn=e((()=>{Ft(),Pt(class extends I{update(){return this.state.host}})}));function cn({render:e}){let t=At(e);return{component:t,createContext:Ut(t)}}var ln=e((()=>{Mt(),Wt(),Kt(),zt(),Yt(),Zt(),$t(),Gt(),Ht(),rn(),on(),sn(),Ft(),Tt(),gt(),vt()})),V,un,dn,H=e((()=>{V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},un=e=>(...t)=>({_$litDirective$:e,values:t}),dn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function fn(e){this._$AN===void 0?this._$AM=e:(hn(this),this._$AM=e,gn(this))}function pn(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)mn(r[e],!1),hn(r[e]);else r!=null&&(mn(r,!1),hn(r));else mn(this,e)}var mn,hn,gn,_n,vn,yn=e((()=>{et(),H(),mn=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),mn(e,t);return!0},hn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},gn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),_n(t)}},_n=e=>{e.type==V.CHILD&&(e._$AP??=pn,e._$AQ??=fn)},vn=class extends dn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),gn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(mn(this,e),hn(this))}setValue(e){if(Ke(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function bn(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(xn.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?bn(e,t):e.teardown();break}else if(xn.call(a.addedNodes,n.nextSibling)){i.disconnect(),bn(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var xn,Sn=e((()=>{H(),P(),yn(),Tt(),xn=Array.prototype.includes})),U,Cn,wn=e((()=>{P(),ln(),Sn(),{component:U,createContext:Cn}=cn({render:Fe})})),W=e((()=>{wn(),ln(),kt(),ln()})),Tn=e((()=>{W()})),En,Dn=e((()=>{En=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),On,kn=e((()=>{On=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t}})),An=e((()=>{Tn(),Dn(),kn()})),jn,Mn,Nn=e((()=>{P(),yn(),H(),jn=new WeakMap,Mn=un(class extends vn{render(e){return N}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),N}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=jn.get(t);n===void 0&&(n=new WeakMap,jn.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?jn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),Pn,Fn=e((()=>{W(),Pn=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=B(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return L(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),L(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),In,Ln,Rn,zn=e((()=>{W(),P(),Nn(),Fn(),In=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Ln=F`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,Rn=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=B(),[s,c]=tn(`opened`,!1),l=z(()=>{n||(c(!0),o.current?.showPopover?.())},[n]),u=z(()=>{c(!1),o.current?.hidePopover?.()},[]),d=z(()=>{n||(o.current?.matches(`:popover-open`)?u():l())},[n]);L(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),L(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:f,cancelClose:p}=Pn({host:e,popoverRef:o,disabled:n,openOnHover:i,openOnFocus:a,open:l,close:u}),m=a?l:d,h=z(t=>{In(t),c(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return A`
		<slot name="button" @click=${m}></slot>
		${n&&r?A`<slot></slot>`:A`<div
					popover
					style="position-area: ${t}"
					@toggle=${h}
					@select=${u}
					@focusout=${f}
					@focusin=${p}
					${Mn(e=>e&&(o.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,U(Rn,{styleSheets:[Ln],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),G,K=e((()=>{P(),G=e=>e??N}));function q(e,t,n){return e?t(e):n?.(e)}var J=e((()=>{})),Bn=e((()=>{P(),K()})),Vn=e((()=>{P(),K()})),Hn=e((()=>{P(),K()})),Un=e((()=>{P(),K()})),Wn=e((()=>{P(),K()})),Gn=e((()=>{P(),K()})),Kn=e((()=>{P(),K()})),qn=e((()=>{P(),K()})),Jn=e((()=>{P(),K()})),Yn=e((()=>{P(),K()})),Xn=e((()=>{P(),K()})),Zn=e((()=>{P(),K()})),Qn=e((()=>{P(),K()})),$n=e((()=>{P(),K()})),er=e((()=>{P(),K()})),tr=e((()=>{P(),K()})),nr=e((()=>{P(),K()})),rr=e((()=>{P(),K()})),ir=e((()=>{P(),K()})),ar=e((()=>{P(),K()})),or=e((()=>{P(),K()})),sr=e((()=>{P(),K()})),cr=e((()=>{P(),K()})),lr=e((()=>{P(),K()})),ur=e((()=>{P(),K()})),dr=e((()=>{P(),K()})),fr=e((()=>{P(),K()})),pr=e((()=>{P(),K()})),mr=e((()=>{P(),K()})),hr=e((()=>{P(),K()})),gr=e((()=>{P(),K()})),_r=e((()=>{P(),K()})),vr=e((()=>{P(),K()})),yr=e((()=>{P(),K()})),br=e((()=>{P(),K()})),xr=e((()=>{P(),K()})),Sr=e((()=>{P(),K()})),Cr=e((()=>{P(),K()})),wr=e((()=>{P(),K()})),Tr=e((()=>{P(),K()})),Er=e((()=>{P(),K()})),Dr=e((()=>{P(),K()})),Or=e((()=>{P(),K()})),kr=e((()=>{P(),K()})),Ar=e((()=>{P(),K()})),jr=e((()=>{P(),K()})),Mr=e((()=>{P(),K()})),Nr=e((()=>{P(),K()})),Pr=e((()=>{P(),K()})),Fr=e((()=>{P(),K()})),Ir=e((()=>{P(),K()})),Lr=e((()=>{P(),K()})),Rr=e((()=>{P(),K()})),zr=e((()=>{P(),K()})),Br=e((()=>{P(),K()})),Vr=e((()=>{P(),K()})),Hr=e((()=>{P(),K()})),Ur=e((()=>{P(),K()})),Wr=e((()=>{P(),K()})),Gr=e((()=>{P(),K()})),Kr=e((()=>{P(),K()})),qr=e((()=>{P(),K()})),Jr=e((()=>{P(),K()})),Yr=e((()=>{P(),K()})),Xr=e((()=>{P(),K()})),Zr=e((()=>{P(),K()})),Qr=e((()=>{P(),K()})),$r=e((()=>{P(),K()})),ei=e((()=>{P(),K()})),ti=e((()=>{P(),K()})),ni=e((()=>{P(),K()})),ri=e((()=>{P(),K()})),ii=e((()=>{P(),K()})),ai=e((()=>{P(),K()})),oi=e((()=>{P(),K()})),si=e((()=>{P(),K()})),ci=e((()=>{P(),K()})),li=e((()=>{P(),K()})),ui=e((()=>{P(),K()})),di=e((()=>{P(),K()})),fi=e((()=>{P(),K()})),pi=e((()=>{P(),K()})),mi=e((()=>{P(),K()})),hi=e((()=>{P(),K()})),gi=e((()=>{P(),K()})),_i=e((()=>{P(),K()})),vi=e((()=>{P(),K()})),yi=e((()=>{P(),K()})),bi=e((()=>{P(),K()})),xi=e((()=>{P(),K()})),Si=e((()=>{P(),K()})),Ci=e((()=>{P(),K()})),wi=e((()=>{P(),K()})),Ti=e((()=>{P(),K()})),Ei=e((()=>{P(),K()})),Di=e((()=>{P(),K()})),Oi=e((()=>{P(),K()})),ki=e((()=>{P(),K()})),Ai=e((()=>{P(),K()})),ji=e((()=>{P(),K()})),Mi=e((()=>{P(),K()})),Ni=e((()=>{P(),K()})),Pi=e((()=>{P(),K()})),Fi=e((()=>{P(),K()})),Ii=e((()=>{P(),K()})),Li=e((()=>{P(),K()})),Ri=e((()=>{P(),K()})),zi=e((()=>{P(),K()})),Bi=e((()=>{P(),K()})),Vi=e((()=>{P(),K()})),Hi=e((()=>{P(),K()})),Ui=e((()=>{P(),K()})),Wi=e((()=>{P(),K()})),Gi=e((()=>{P(),K()})),Ki=e((()=>{P(),K()})),qi=e((()=>{P(),K()})),Ji=e((()=>{P(),K()})),Yi=e((()=>{P(),K()})),Xi=e((()=>{P(),K()})),Zi=e((()=>{P(),K()})),Qi=e((()=>{P(),K()})),$i=e((()=>{P(),K()})),ea=e((()=>{P(),K()})),ta=e((()=>{P(),K()})),na=e((()=>{P(),K()})),ra=e((()=>{P(),K()})),ia=e((()=>{P(),K()})),aa=e((()=>{P(),K()})),oa=e((()=>{P(),K()})),sa=e((()=>{P(),K()})),ca=e((()=>{P(),K()})),la=e((()=>{P(),K()})),ua=e((()=>{P(),K()})),da=e((()=>{P(),K()})),fa=e((()=>{P(),K()})),pa=e((()=>{P(),K()})),ma=e((()=>{P(),K()})),ha=e((()=>{P(),K()})),ga=e((()=>{P(),K()})),_a=e((()=>{P(),K()})),va=e((()=>{P(),K()})),ya=e((()=>{P(),K()})),ba=e((()=>{P(),K()})),xa=e((()=>{P(),K()})),Sa=e((()=>{P(),K()})),Ca=e((()=>{P(),K()})),wa=e((()=>{P(),K()})),Ta=e((()=>{P(),K()})),Ea=e((()=>{P(),K()})),Da=e((()=>{P(),K()})),Oa=e((()=>{P(),K()})),ka=e((()=>{P(),K()})),Aa=e((()=>{P(),K()})),ja=e((()=>{P(),K()})),Ma=e((()=>{P(),K()})),Na=e((()=>{P(),K()})),Pa=e((()=>{P(),K()})),Fa=e((()=>{P(),K()})),Ia=e((()=>{P(),K()})),La=e((()=>{P(),K()})),Ra=e((()=>{P(),K()})),za=e((()=>{P(),K()})),Ba=e((()=>{P(),K()})),Va=e((()=>{P(),K()})),Ha=e((()=>{P(),K()})),Ua=e((()=>{P(),K()})),Wa=e((()=>{P(),K()})),Ga=e((()=>{P(),K()})),Ka=e((()=>{P(),K()})),qa=e((()=>{P(),K()})),Ja=e((()=>{P(),K()})),Ya=e((()=>{P(),K()})),Xa=e((()=>{P(),K()})),Za=e((()=>{P(),K()})),Qa=e((()=>{P(),K()})),$a=e((()=>{P(),K()})),eo=e((()=>{P(),K()})),to=e((()=>{P(),K()})),no=e((()=>{P(),K()})),ro=e((()=>{P(),K()})),io=e((()=>{P(),K()})),ao=e((()=>{P(),K()})),oo=e((()=>{P(),K()})),so=e((()=>{P(),K()})),co=e((()=>{P(),K()})),lo=e((()=>{P(),K()})),uo=e((()=>{P(),K()})),fo=e((()=>{P(),K()})),po=e((()=>{P(),K()})),mo=e((()=>{P(),K()})),ho=e((()=>{P(),K()})),go=e((()=>{P(),K()})),_o=e((()=>{P(),K()})),vo=e((()=>{P(),K()})),yo=e((()=>{P(),K()})),bo=e((()=>{P(),K()})),xo=e((()=>{P(),K()})),So=e((()=>{P(),K()})),Co=e((()=>{P(),K()})),wo=e((()=>{P(),K()})),To=e((()=>{P(),K()})),Eo=e((()=>{P(),K()})),Do=e((()=>{P(),K()})),Oo=e((()=>{P(),K()})),ko=e((()=>{P(),K()})),Ao=e((()=>{P(),K()})),jo=e((()=>{P(),K()})),Mo=e((()=>{P(),K()})),No=e((()=>{P(),K()})),Po=e((()=>{P(),K()})),Fo=e((()=>{P(),K()})),Io=e((()=>{P(),K()})),Lo=e((()=>{P(),K()})),Ro=e((()=>{P(),K()})),zo=e((()=>{P(),K()})),Bo=e((()=>{P(),K()})),Vo=e((()=>{P(),K()})),Ho=e((()=>{P(),K()})),Uo=e((()=>{P(),K()})),Wo=e((()=>{P(),K()})),Go=e((()=>{P(),K()})),Ko=e((()=>{P(),K()})),qo=e((()=>{P(),K()})),Jo=e((()=>{P(),K()})),Yo=e((()=>{P(),K()})),Xo=e((()=>{P(),K()})),Zo=e((()=>{P(),K()})),Qo=e((()=>{P(),K()})),$o=e((()=>{P(),K()})),es,ts=e((()=>{P(),K(),J(),es=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`chevron-down-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),ns=e((()=>{P(),K()})),rs=e((()=>{P(),K()})),is=e((()=>{P(),K()})),as=e((()=>{P(),K()})),os=e((()=>{P(),K()})),ss=e((()=>{P(),K()})),cs,ls=e((()=>{P(),K(),J(),cs=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`chevron-selector-vertical-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
  </svg>
`})),us=e((()=>{P(),K()})),ds=e((()=>{P(),K()})),fs=e((()=>{P(),K()})),ps=e((()=>{P(),K()})),ms=e((()=>{P(),K()})),hs=e((()=>{P(),K()})),gs=e((()=>{P(),K()})),_s=e((()=>{P(),K()})),vs=e((()=>{P(),K()})),ys=e((()=>{P(),K()})),bs=e((()=>{P(),K()})),xs=e((()=>{P(),K()})),Ss=e((()=>{P(),K()})),Cs=e((()=>{P(),K()})),ws=e((()=>{P(),K()})),Ts=e((()=>{P(),K()})),Es=e((()=>{P(),K()})),Ds=e((()=>{P(),K()})),Os=e((()=>{P(),K()})),ks=e((()=>{P(),K()})),As=e((()=>{P(),K()})),js=e((()=>{P(),K()})),Ms=e((()=>{P(),K()})),Ns=e((()=>{P(),K()})),Ps=e((()=>{P(),K()})),Fs=e((()=>{P(),K()})),Is=e((()=>{P(),K()})),Ls=e((()=>{P(),K()})),Rs=e((()=>{P(),K()})),zs=e((()=>{P(),K()})),Bs=e((()=>{P(),K()})),Vs=e((()=>{P(),K()})),Hs=e((()=>{P(),K()})),Us=e((()=>{P(),K()})),Ws=e((()=>{P(),K()})),Gs=e((()=>{P(),K()})),Ks=e((()=>{P(),K()})),qs=e((()=>{P(),K()})),Js=e((()=>{P(),K()})),Ys=e((()=>{P(),K()})),Xs=e((()=>{P(),K()})),Zs=e((()=>{P(),K()})),Qs=e((()=>{P(),K()})),$s=e((()=>{P(),K()})),ec=e((()=>{P(),K()})),tc=e((()=>{P(),K()})),nc=e((()=>{P(),K()})),rc=e((()=>{P(),K()})),ic=e((()=>{P(),K()})),ac=e((()=>{P(),K()})),oc=e((()=>{P(),K()})),sc=e((()=>{P(),K()})),cc=e((()=>{P(),K()})),lc=e((()=>{P(),K()})),uc=e((()=>{P(),K()})),dc=e((()=>{P(),K()})),fc=e((()=>{P(),K()})),pc=e((()=>{P(),K()})),mc=e((()=>{P(),K()})),hc=e((()=>{P(),K()})),gc=e((()=>{P(),K()})),_c=e((()=>{P(),K()})),vc=e((()=>{P(),K()})),yc=e((()=>{P(),K()})),bc=e((()=>{P(),K()})),xc=e((()=>{P(),K()})),Sc=e((()=>{P(),K()})),Cc=e((()=>{P(),K()})),wc=e((()=>{P(),K()})),Tc=e((()=>{P(),K()})),Ec=e((()=>{P(),K()})),Dc=e((()=>{P(),K()})),Oc=e((()=>{P(),K()})),kc=e((()=>{P(),K()})),Ac=e((()=>{P(),K()})),jc=e((()=>{P(),K()})),Mc=e((()=>{P(),K()})),Nc=e((()=>{P(),K()})),Pc=e((()=>{P(),K()})),Fc=e((()=>{P(),K()})),Ic=e((()=>{P(),K()})),Lc=e((()=>{P(),K()})),Rc=e((()=>{P(),K()})),zc=e((()=>{P(),K()})),Bc=e((()=>{P(),K()})),Vc=e((()=>{P(),K()})),Hc=e((()=>{P(),K()})),Uc=e((()=>{P(),K()})),Wc=e((()=>{P(),K()})),Gc=e((()=>{P(),K()})),Kc=e((()=>{P(),K()})),qc=e((()=>{P(),K()})),Jc=e((()=>{P(),K()})),Yc=e((()=>{P(),K()})),Xc=e((()=>{P(),K()})),Zc=e((()=>{P(),K()})),Qc=e((()=>{P(),K()})),$c=e((()=>{P(),K()})),el=e((()=>{P(),K()})),tl=e((()=>{P(),K()})),nl=e((()=>{P(),K()})),rl=e((()=>{P(),K()})),il=e((()=>{P(),K()})),al=e((()=>{P(),K()})),ol=e((()=>{P(),K()})),sl=e((()=>{P(),K()})),cl=e((()=>{P(),K()})),ll=e((()=>{P(),K()})),ul=e((()=>{P(),K()})),dl=e((()=>{P(),K()})),fl=e((()=>{P(),K()})),pl=e((()=>{P(),K()})),ml=e((()=>{P(),K()})),hl=e((()=>{P(),K()})),gl=e((()=>{P(),K()})),_l=e((()=>{P(),K()})),vl=e((()=>{P(),K()})),yl=e((()=>{P(),K()})),bl=e((()=>{P(),K()})),xl=e((()=>{P(),K()})),Sl=e((()=>{P(),K()})),Cl=e((()=>{P(),K()})),wl=e((()=>{P(),K()})),Tl=e((()=>{P(),K()})),El=e((()=>{P(),K()})),Dl=e((()=>{P(),K()})),Ol=e((()=>{P(),K()})),kl=e((()=>{P(),K()})),Al=e((()=>{P(),K()})),jl=e((()=>{P(),K()})),Ml=e((()=>{P(),K()})),Nl=e((()=>{P(),K()})),Pl=e((()=>{P(),K()})),Fl=e((()=>{P(),K()})),Il=e((()=>{P(),K()})),Ll=e((()=>{P(),K()})),Rl=e((()=>{P(),K()})),zl=e((()=>{P(),K()})),Bl=e((()=>{P(),K()})),Vl=e((()=>{P(),K()})),Hl=e((()=>{P(),K()})),Ul=e((()=>{P(),K()})),Wl=e((()=>{P(),K()})),Gl=e((()=>{P(),K()})),Kl=e((()=>{P(),K()})),ql=e((()=>{P(),K()})),Jl=e((()=>{P(),K()})),Yl=e((()=>{P(),K()})),Xl=e((()=>{P(),K()})),Zl=e((()=>{P(),K()})),Ql=e((()=>{P(),K()})),$l=e((()=>{P(),K()})),eu=e((()=>{P(),K()})),tu=e((()=>{P(),K()})),nu=e((()=>{P(),K()})),ru=e((()=>{P(),K()})),iu=e((()=>{P(),K()})),au=e((()=>{P(),K()})),ou=e((()=>{P(),K()})),su=e((()=>{P(),K()})),cu=e((()=>{P(),K()})),lu=e((()=>{P(),K()})),uu=e((()=>{P(),K()})),du=e((()=>{P(),K()})),fu=e((()=>{P(),K()})),pu=e((()=>{P(),K()})),mu=e((()=>{P(),K()})),hu=e((()=>{P(),K()})),gu=e((()=>{P(),K()})),_u=e((()=>{P(),K()})),vu=e((()=>{P(),K()})),yu,bu=e((()=>{P(),K(),J(),yu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`dots-vertical-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})),xu,Su=e((()=>{P(),K(),J(),xu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`download-01-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path
      d="M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-5-5 5m0 0-5-5m5 5V3"
    />
  </svg>
`})),Cu=e((()=>{P(),K()})),wu=e((()=>{P(),K()})),Tu=e((()=>{P(),K()})),Eu=e((()=>{P(),K()})),Du=e((()=>{P(),K()})),Ou=e((()=>{P(),K()})),ku=e((()=>{P(),K()})),Au=e((()=>{P(),K()})),ju=e((()=>{P(),K()})),Mu=e((()=>{P(),K()})),Nu=e((()=>{P(),K()})),Pu=e((()=>{P(),K()})),Fu=e((()=>{P(),K()})),Iu=e((()=>{P(),K()})),Lu=e((()=>{P(),K()})),Ru,zu=e((()=>{P(),K(),J(),Ru=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`equal-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path d="M5 9h14M5 15h14" />
  </svg>
`})),Bu=e((()=>{P(),K()})),Vu=e((()=>{P(),K()})),Hu=e((()=>{P(),K()})),Uu=e((()=>{P(),K()})),Wu=e((()=>{P(),K()})),Gu=e((()=>{P(),K()})),Ku=e((()=>{P(),K()})),qu=e((()=>{P(),K()})),Ju=e((()=>{P(),K()})),Yu=e((()=>{P(),K()})),Xu=e((()=>{P(),K()})),Zu=e((()=>{P(),K()})),Qu=e((()=>{P(),K()})),$u=e((()=>{P(),K()})),ed=e((()=>{P(),K()})),td=e((()=>{P(),K()})),nd=e((()=>{P(),K()})),rd=e((()=>{P(),K()})),id=e((()=>{P(),K()})),ad=e((()=>{P(),K()})),od=e((()=>{P(),K()})),sd=e((()=>{P(),K()})),cd=e((()=>{P(),K()})),ld=e((()=>{P(),K()})),ud=e((()=>{P(),K()})),dd=e((()=>{P(),K()})),fd=e((()=>{P(),K()})),pd=e((()=>{P(),K()})),md=e((()=>{P(),K()})),hd=e((()=>{P(),K()})),gd=e((()=>{P(),K()})),_d=e((()=>{P(),K()})),vd=e((()=>{P(),K()})),yd=e((()=>{P(),K()})),bd=e((()=>{P(),K()})),xd=e((()=>{P(),K()})),Sd=e((()=>{P(),K()})),Cd=e((()=>{P(),K()})),wd=e((()=>{P(),K()})),Td=e((()=>{P(),K()})),Ed=e((()=>{P(),K()})),Dd=e((()=>{P(),K()})),Od=e((()=>{P(),K()})),kd=e((()=>{P(),K()})),Ad=e((()=>{P(),K()})),jd=e((()=>{P(),K()})),Md=e((()=>{P(),K()})),Nd=e((()=>{P(),K()})),Pd=e((()=>{P(),K()})),Fd=e((()=>{P(),K()})),Id=e((()=>{P(),K()})),Ld=e((()=>{P(),K()})),Rd=e((()=>{P(),K()})),zd=e((()=>{P(),K()})),Bd=e((()=>{P(),K()})),Vd=e((()=>{P(),K()})),Hd=e((()=>{P(),K()})),Ud=e((()=>{P(),K()})),Wd=e((()=>{P(),K()})),Gd=e((()=>{P(),K()})),Kd=e((()=>{P(),K()})),qd=e((()=>{P(),K()})),Jd=e((()=>{P(),K()})),Yd=e((()=>{P(),K()})),Xd=e((()=>{P(),K()})),Zd=e((()=>{P(),K()})),Qd=e((()=>{P(),K()})),$d=e((()=>{P(),K()})),ef=e((()=>{P(),K()})),tf=e((()=>{P(),K()})),nf=e((()=>{P(),K()})),rf=e((()=>{P(),K()})),af=e((()=>{P(),K()})),of=e((()=>{P(),K()})),sf=e((()=>{P(),K()})),cf=e((()=>{P(),K()})),lf=e((()=>{P(),K()})),uf=e((()=>{P(),K()})),df=e((()=>{P(),K()})),ff=e((()=>{P(),K()})),pf=e((()=>{P(),K()})),mf=e((()=>{P(),K()})),hf=e((()=>{P(),K()})),gf=e((()=>{P(),K()})),_f=e((()=>{P(),K()})),vf=e((()=>{P(),K()})),yf=e((()=>{P(),K()})),bf=e((()=>{P(),K()})),xf=e((()=>{P(),K()})),Sf=e((()=>{P(),K()})),Cf=e((()=>{P(),K()})),wf=e((()=>{P(),K()})),Tf=e((()=>{P(),K()})),Ef=e((()=>{P(),K()})),Df=e((()=>{P(),K()})),Of=e((()=>{P(),K()})),kf=e((()=>{P(),K()})),Af=e((()=>{P(),K()})),jf=e((()=>{P(),K()})),Mf=e((()=>{P(),K()})),Nf=e((()=>{P(),K()})),Pf=e((()=>{P(),K()})),Ff=e((()=>{P(),K()})),If=e((()=>{P(),K()})),Lf=e((()=>{P(),K()})),Rf=e((()=>{P(),K()})),zf=e((()=>{P(),K()})),Bf=e((()=>{P(),K()})),Vf=e((()=>{P(),K()})),Hf=e((()=>{P(),K()})),Uf=e((()=>{P(),K()})),Wf=e((()=>{P(),K()})),Gf=e((()=>{P(),K()})),Kf=e((()=>{P(),K()})),qf=e((()=>{P(),K()})),Jf=e((()=>{P(),K()})),Yf=e((()=>{P(),K()})),Xf=e((()=>{P(),K()})),Zf=e((()=>{P(),K()})),Qf=e((()=>{P(),K()})),$f=e((()=>{P(),K()})),ep=e((()=>{P(),K()})),tp=e((()=>{P(),K()})),np=e((()=>{P(),K()})),rp=e((()=>{P(),K()})),ip=e((()=>{P(),K()})),ap=e((()=>{P(),K()})),op=e((()=>{P(),K()})),sp=e((()=>{P(),K()})),cp=e((()=>{P(),K()})),lp=e((()=>{P(),K()})),up=e((()=>{P(),K()})),dp=e((()=>{P(),K()})),fp=e((()=>{P(),K()})),pp=e((()=>{P(),K()})),mp=e((()=>{P(),K()})),hp=e((()=>{P(),K()})),gp=e((()=>{P(),K()})),_p=e((()=>{P(),K()})),vp=e((()=>{P(),K()})),yp=e((()=>{P(),K()})),bp=e((()=>{P(),K()})),xp=e((()=>{P(),K()})),Sp=e((()=>{P(),K()})),Cp=e((()=>{P(),K()})),wp=e((()=>{P(),K()})),Tp=e((()=>{P(),K()})),Ep=e((()=>{P(),K()})),Dp=e((()=>{P(),K()})),Op=e((()=>{P(),K()})),kp=e((()=>{P(),K()})),Ap=e((()=>{P(),K()})),jp=e((()=>{P(),K()})),Mp=e((()=>{P(),K()})),Np=e((()=>{P(),K()})),Pp=e((()=>{P(),K()})),Fp=e((()=>{P(),K()})),Ip=e((()=>{P(),K()})),Lp=e((()=>{P(),K()})),Rp=e((()=>{P(),K()})),zp=e((()=>{P(),K()})),Bp=e((()=>{P(),K()})),Vp=e((()=>{P(),K()})),Hp=e((()=>{P(),K()})),Up=e((()=>{P(),K()})),Wp=e((()=>{P(),K()})),Gp=e((()=>{P(),K()})),Kp=e((()=>{P(),K()})),qp=e((()=>{P(),K()})),Jp=e((()=>{P(),K()})),Yp=e((()=>{P(),K()})),Xp=e((()=>{P(),K()})),Zp=e((()=>{P(),K()})),Qp=e((()=>{P(),K()})),$p=e((()=>{P(),K()})),em=e((()=>{P(),K()})),tm=e((()=>{P(),K()})),nm=e((()=>{P(),K()})),rm=e((()=>{P(),K()})),im=e((()=>{P(),K()})),am=e((()=>{P(),K()})),om=e((()=>{P(),K()})),sm=e((()=>{P(),K()})),cm=e((()=>{P(),K()})),lm=e((()=>{P(),K()})),um=e((()=>{P(),K()})),dm=e((()=>{P(),K()})),fm=e((()=>{P(),K()})),pm=e((()=>{P(),K()})),mm=e((()=>{P(),K()})),hm=e((()=>{P(),K()})),gm=e((()=>{P(),K()})),_m=e((()=>{P(),K()})),vm=e((()=>{P(),K()})),ym=e((()=>{P(),K()})),bm=e((()=>{P(),K()})),xm=e((()=>{P(),K()})),Sm=e((()=>{P(),K()})),Cm=e((()=>{P(),K()})),wm=e((()=>{P(),K()})),Tm=e((()=>{P(),K()})),Em,Dm=e((()=>{P(),K(),J(),Em=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`info-circle-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})),Om=e((()=>{P(),K()})),km=e((()=>{P(),K()})),Am=e((()=>{P(),K()})),jm=e((()=>{P(),K()})),Mm=e((()=>{P(),K()})),Nm=e((()=>{P(),K()})),Pm=e((()=>{P(),K()})),Fm=e((()=>{P(),K()})),Im=e((()=>{P(),K()})),Lm=e((()=>{P(),K()})),Rm=e((()=>{P(),K()})),zm=e((()=>{P(),K()})),Bm=e((()=>{P(),K()})),Vm=e((()=>{P(),K()})),Hm=e((()=>{P(),K()})),Um=e((()=>{P(),K()})),Wm=e((()=>{P(),K()})),Gm=e((()=>{P(),K()})),Km=e((()=>{P(),K()})),qm=e((()=>{P(),K()})),Jm=e((()=>{P(),K()})),Ym=e((()=>{P(),K()})),Xm=e((()=>{P(),K()})),Zm=e((()=>{P(),K()})),Qm=e((()=>{P(),K()})),$m=e((()=>{P(),K()})),eh=e((()=>{P(),K()})),th=e((()=>{P(),K()})),nh=e((()=>{P(),K()})),rh=e((()=>{P(),K()})),ih=e((()=>{P(),K()})),ah=e((()=>{P(),K()})),oh=e((()=>{P(),K()})),sh=e((()=>{P(),K()})),ch=e((()=>{P(),K()})),lh=e((()=>{P(),K()})),uh=e((()=>{P(),K()})),dh=e((()=>{P(),K()})),fh=e((()=>{P(),K()})),ph=e((()=>{P(),K()})),mh=e((()=>{P(),K()})),hh=e((()=>{P(),K()})),gh=e((()=>{P(),K()})),_h=e((()=>{P(),K()})),vh=e((()=>{P(),K()})),yh=e((()=>{P(),K()})),bh=e((()=>{P(),K()})),xh=e((()=>{P(),K()})),Sh=e((()=>{P(),K()})),Ch=e((()=>{P(),K()})),wh=e((()=>{P(),K()})),Th=e((()=>{P(),K()})),Eh=e((()=>{P(),K()})),Dh=e((()=>{P(),K()})),Oh=e((()=>{P(),K()})),kh=e((()=>{P(),K()})),Ah=e((()=>{P(),K()})),jh=e((()=>{P(),K()})),Mh=e((()=>{P(),K()})),Nh=e((()=>{P(),K()})),Ph=e((()=>{P(),K()})),Fh=e((()=>{P(),K()})),Ih=e((()=>{P(),K()})),Lh=e((()=>{P(),K()})),Rh=e((()=>{P(),K()})),zh=e((()=>{P(),K()})),Bh=e((()=>{P(),K()})),Vh=e((()=>{P(),K()})),Hh=e((()=>{P(),K()})),Uh=e((()=>{P(),K()})),Wh=e((()=>{P(),K()})),Gh=e((()=>{P(),K()})),Kh=e((()=>{P(),K()})),qh=e((()=>{P(),K()})),Jh=e((()=>{P(),K()})),Yh=e((()=>{P(),K()})),Xh=e((()=>{P(),K()})),Zh=e((()=>{P(),K()})),Qh=e((()=>{P(),K()})),$h=e((()=>{P(),K()})),eg=e((()=>{P(),K()})),tg=e((()=>{P(),K()})),ng=e((()=>{P(),K()})),rg=e((()=>{P(),K()})),ig=e((()=>{P(),K()})),ag=e((()=>{P(),K()})),og=e((()=>{P(),K()})),sg=e((()=>{P(),K()})),cg=e((()=>{P(),K()})),lg=e((()=>{P(),K()})),ug=e((()=>{P(),K()})),dg=e((()=>{P(),K()})),fg=e((()=>{P(),K()})),pg=e((()=>{P(),K()})),mg=e((()=>{P(),K()})),hg=e((()=>{P(),K()})),gg=e((()=>{P(),K()})),_g=e((()=>{P(),K()})),vg=e((()=>{P(),K()})),yg=e((()=>{P(),K()})),bg=e((()=>{P(),K()})),xg=e((()=>{P(),K()})),Sg=e((()=>{P(),K()})),Cg=e((()=>{P(),K()})),wg=e((()=>{P(),K()})),Tg=e((()=>{P(),K()})),Eg=e((()=>{P(),K()})),Dg=e((()=>{P(),K()})),Og=e((()=>{P(),K()})),kg=e((()=>{P(),K()})),Ag=e((()=>{P(),K()})),jg=e((()=>{P(),K()})),Mg=e((()=>{P(),K()})),Ng=e((()=>{P(),K()})),Pg=e((()=>{P(),K()})),Fg=e((()=>{P(),K()})),Ig=e((()=>{P(),K()})),Lg=e((()=>{P(),K()})),Rg=e((()=>{P(),K()})),zg=e((()=>{P(),K()})),Bg=e((()=>{P(),K()})),Vg=e((()=>{P(),K()})),Hg=e((()=>{P(),K()})),Ug=e((()=>{P(),K()})),Wg=e((()=>{P(),K()})),Gg=e((()=>{P(),K()})),Kg=e((()=>{P(),K()})),qg=e((()=>{P(),K()})),Jg=e((()=>{P(),K()})),Yg=e((()=>{P(),K()})),Xg=e((()=>{P(),K()})),Zg=e((()=>{P(),K()})),Qg=e((()=>{P(),K()})),$g=e((()=>{P(),K()})),e_=e((()=>{P(),K()})),t_=e((()=>{P(),K()})),n_=e((()=>{P(),K()})),r_=e((()=>{P(),K()})),i_=e((()=>{P(),K()})),a_=e((()=>{P(),K()})),o_=e((()=>{P(),K()})),s_=e((()=>{P(),K()})),c_=e((()=>{P(),K()})),l_=e((()=>{P(),K()})),u_=e((()=>{P(),K()})),d_=e((()=>{P(),K()})),f_=e((()=>{P(),K()})),p_=e((()=>{P(),K()})),m_=e((()=>{P(),K()})),h_=e((()=>{P(),K()})),g_=e((()=>{P(),K()})),__=e((()=>{P(),K()})),v_=e((()=>{P(),K()})),y_=e((()=>{P(),K()})),b_=e((()=>{P(),K()})),x_=e((()=>{P(),K()})),S_=e((()=>{P(),K()})),C_=e((()=>{P(),K()})),w_=e((()=>{P(),K()})),T_=e((()=>{P(),K()})),E_=e((()=>{P(),K()})),D_=e((()=>{P(),K()})),O_=e((()=>{P(),K()})),k_=e((()=>{P(),K()})),A_=e((()=>{P(),K()})),j_=e((()=>{P(),K()})),M_=e((()=>{P(),K()})),N_=e((()=>{P(),K()})),P_=e((()=>{P(),K()})),F_=e((()=>{P(),K()})),I_=e((()=>{P(),K()})),L_=e((()=>{P(),K()})),R_=e((()=>{P(),K()})),z_=e((()=>{P(),K()})),B_=e((()=>{P(),K()})),V_=e((()=>{P(),K()})),H_=e((()=>{P(),K()})),U_=e((()=>{P(),K()})),W_=e((()=>{P(),K()})),G_=e((()=>{P(),K()})),K_=e((()=>{P(),K()})),q_=e((()=>{P(),K()})),J_=e((()=>{P(),K()})),Y_=e((()=>{P(),K()})),X_=e((()=>{P(),K()})),Z_=e((()=>{P(),K()})),Q_=e((()=>{P(),K()})),$_=e((()=>{P(),K()})),ev=e((()=>{P(),K()})),tv=e((()=>{P(),K()})),nv=e((()=>{P(),K()})),rv=e((()=>{P(),K()})),iv=e((()=>{P(),K()})),av=e((()=>{P(),K()})),ov=e((()=>{P(),K()})),sv=e((()=>{P(),K()})),cv=e((()=>{P(),K()})),lv=e((()=>{P(),K()})),uv=e((()=>{P(),K()})),dv=e((()=>{P(),K()})),fv=e((()=>{P(),K()})),pv=e((()=>{P(),K()})),mv=e((()=>{P(),K()})),hv=e((()=>{P(),K()})),gv=e((()=>{P(),K()})),_v=e((()=>{P(),K()})),vv=e((()=>{P(),K()})),yv=e((()=>{P(),K()})),bv=e((()=>{P(),K()})),xv=e((()=>{P(),K()})),Sv=e((()=>{P(),K()})),Cv=e((()=>{P(),K()})),wv=e((()=>{P(),K()})),Tv=e((()=>{P(),K()})),Ev=e((()=>{P(),K()})),Dv=e((()=>{P(),K()})),Ov=e((()=>{P(),K()})),kv=e((()=>{P(),K()})),Av=e((()=>{P(),K()})),jv=e((()=>{P(),K()})),Mv=e((()=>{P(),K()})),Nv=e((()=>{P(),K()})),Pv=e((()=>{P(),K()})),Fv=e((()=>{P(),K()})),Iv=e((()=>{P(),K()})),Lv=e((()=>{P(),K()})),Rv=e((()=>{P(),K()})),zv=e((()=>{P(),K()})),Bv=e((()=>{P(),K()})),Vv=e((()=>{P(),K()})),Hv=e((()=>{P(),K()})),Uv=e((()=>{P(),K()})),Wv=e((()=>{P(),K()})),Gv=e((()=>{P(),K()})),Kv=e((()=>{P(),K()})),qv=e((()=>{P(),K()})),Jv=e((()=>{P(),K()})),Yv=e((()=>{P(),K()})),Xv=e((()=>{P(),K()})),Zv=e((()=>{P(),K()})),Qv=e((()=>{P(),K()})),$v=e((()=>{P(),K()})),ey=e((()=>{P(),K()})),ty=e((()=>{P(),K()})),ny=e((()=>{P(),K()})),ry=e((()=>{P(),K()})),iy=e((()=>{P(),K()})),ay=e((()=>{P(),K()})),oy=e((()=>{P(),K()})),sy=e((()=>{P(),K()})),cy=e((()=>{P(),K()})),ly=e((()=>{P(),K()})),uy=e((()=>{P(),K()})),dy=e((()=>{P(),K()})),fy=e((()=>{P(),K()})),py=e((()=>{P(),K()})),my=e((()=>{P(),K()})),hy=e((()=>{P(),K()})),gy=e((()=>{P(),K()})),_y=e((()=>{P(),K()})),vy=e((()=>{P(),K()})),yy=e((()=>{P(),K()})),by=e((()=>{P(),K()})),xy=e((()=>{P(),K()})),Sy=e((()=>{P(),K()})),Cy=e((()=>{P(),K()})),wy=e((()=>{P(),K()})),Ty=e((()=>{P(),K()})),Ey=e((()=>{P(),K()})),Dy=e((()=>{P(),K()})),Oy=e((()=>{P(),K()})),ky=e((()=>{P(),K()})),Ay=e((()=>{P(),K()})),jy=e((()=>{P(),K()})),My=e((()=>{P(),K()})),Ny=e((()=>{P(),K()})),Py=e((()=>{P(),K()})),Fy=e((()=>{P(),K()})),Iy=e((()=>{P(),K()})),Ly=e((()=>{P(),K()})),Ry=e((()=>{P(),K()})),zy=e((()=>{P(),K()})),By=e((()=>{P(),K()})),Vy=e((()=>{P(),K()})),Hy=e((()=>{P(),K()})),Uy=e((()=>{P(),K()})),Wy=e((()=>{P(),K()})),Gy=e((()=>{P(),K()})),Ky=e((()=>{P(),K()})),qy=e((()=>{P(),K()})),Jy=e((()=>{P(),K()})),Yy=e((()=>{P(),K()})),Xy=e((()=>{P(),K()})),Zy=e((()=>{P(),K()})),Qy=e((()=>{P(),K()})),$y=e((()=>{P(),K()})),eb=e((()=>{P(),K()})),tb=e((()=>{P(),K()})),nb=e((()=>{P(),K()})),rb=e((()=>{P(),K()})),ib=e((()=>{P(),K()})),ab=e((()=>{P(),K()})),ob=e((()=>{P(),K()})),sb=e((()=>{P(),K()})),cb=e((()=>{P(),K()})),lb=e((()=>{P(),K()})),ub=e((()=>{P(),K()})),db=e((()=>{P(),K()})),fb=e((()=>{P(),K()})),pb=e((()=>{P(),K()})),mb=e((()=>{P(),K()})),hb=e((()=>{P(),K()})),gb=e((()=>{P(),K()})),_b=e((()=>{P(),K()})),vb=e((()=>{P(),K()})),yb=e((()=>{P(),K()})),bb=e((()=>{P(),K()})),xb=e((()=>{P(),K()})),Sb=e((()=>{P(),K()})),Cb=e((()=>{P(),K()})),wb=e((()=>{P(),K()})),Tb=e((()=>{P(),K()})),Eb=e((()=>{P(),K()})),Db=e((()=>{P(),K()})),Ob=e((()=>{P(),K()})),kb=e((()=>{P(),K()})),Ab=e((()=>{P(),K()})),jb=e((()=>{P(),K()})),Mb=e((()=>{P(),K()})),Nb=e((()=>{P(),K()})),Pb=e((()=>{P(),K()})),Fb=e((()=>{P(),K()})),Ib=e((()=>{P(),K()})),Lb=e((()=>{P(),K()})),Rb=e((()=>{P(),K()})),zb=e((()=>{P(),K()})),Bb=e((()=>{P(),K()})),Vb=e((()=>{P(),K()})),Hb=e((()=>{P(),K()})),Ub=e((()=>{P(),K()})),Wb=e((()=>{P(),K()})),Gb=e((()=>{P(),K()})),Kb=e((()=>{P(),K()})),qb=e((()=>{P(),K()})),Jb=e((()=>{P(),K()})),Yb=e((()=>{P(),K()})),Xb=e((()=>{P(),K()})),Zb=e((()=>{P(),K()})),Qb=e((()=>{P(),K()})),$b=e((()=>{P(),K()})),ex=e((()=>{P(),K()})),tx=e((()=>{P(),K()})),nx=e((()=>{P(),K()})),rx=e((()=>{P(),K()})),ix=e((()=>{P(),K()})),ax=e((()=>{P(),K()})),ox=e((()=>{P(),K()})),sx=e((()=>{P(),K()})),cx=e((()=>{P(),K()})),lx=e((()=>{P(),K()})),ux=e((()=>{P(),K()})),dx=e((()=>{P(),K()})),fx=e((()=>{P(),K()})),px=e((()=>{P(),K()})),mx=e((()=>{P(),K()})),hx=e((()=>{P(),K()})),gx=e((()=>{P(),K()})),_x=e((()=>{P(),K()})),vx=e((()=>{P(),K()})),yx=e((()=>{P(),K()})),bx=e((()=>{P(),K()})),xx=e((()=>{P(),K()})),Sx=e((()=>{P(),K()})),Cx=e((()=>{P(),K()})),wx=e((()=>{P(),K()})),Tx=e((()=>{P(),K()})),Ex=e((()=>{P(),K()})),Dx=e((()=>{P(),K()})),Ox=e((()=>{P(),K()})),kx=e((()=>{P(),K()})),Ax=e((()=>{P(),K()})),jx=e((()=>{P(),K()})),Mx=e((()=>{P(),K()})),Nx=e((()=>{P(),K()})),Px=e((()=>{P(),K()})),Fx=e((()=>{P(),K()})),Ix=e((()=>{P(),K()})),Lx=e((()=>{P(),K()})),Rx=e((()=>{P(),K()})),zx=e((()=>{P(),K()})),Bx=e((()=>{P(),K()})),Vx=e((()=>{P(),K()})),Hx=e((()=>{P(),K()})),Ux=e((()=>{P(),K()})),Wx=e((()=>{P(),K()})),Gx=e((()=>{P(),K()})),Kx=e((()=>{P(),K()})),qx=e((()=>{P(),K()})),Jx=e((()=>{P(),K()})),Yx=e((()=>{P(),K()})),Xx=e((()=>{P(),K()})),Zx=e((()=>{P(),K()})),Qx=e((()=>{P(),K()})),$x=e((()=>{P(),K()})),eS=e((()=>{P(),K()})),tS=e((()=>{P(),K()})),nS=e((()=>{P(),K()})),rS=e((()=>{P(),K()})),iS=e((()=>{P(),K()})),aS=e((()=>{P(),K()})),oS=e((()=>{P(),K()})),sS=e((()=>{P(),K()})),cS=e((()=>{P(),K()})),lS=e((()=>{P(),K()})),uS=e((()=>{P(),K()})),dS=e((()=>{P(),K()})),fS=e((()=>{P(),K()})),pS=e((()=>{P(),K()})),mS=e((()=>{P(),K()})),hS=e((()=>{P(),K()})),gS=e((()=>{P(),K()})),_S=e((()=>{P(),K()})),vS=e((()=>{P(),K()})),yS=e((()=>{P(),K()})),bS=e((()=>{P(),K()})),xS=e((()=>{P(),K()})),SS=e((()=>{P(),K()})),CS=e((()=>{P(),K()})),wS=e((()=>{P(),K()})),TS=e((()=>{P(),K()})),ES=e((()=>{P(),K()})),DS=e((()=>{P(),K()})),OS=e((()=>{P(),K()})),kS=e((()=>{P(),K()})),AS=e((()=>{P(),K()})),jS=e((()=>{P(),K()})),MS=e((()=>{P(),K()})),NS=e((()=>{P(),K()})),PS=e((()=>{P(),K()})),FS=e((()=>{P(),K()})),IS=e((()=>{P(),K()})),LS=e((()=>{P(),K()})),RS=e((()=>{P(),K()})),zS=e((()=>{P(),K()})),BS=e((()=>{P(),K()})),VS=e((()=>{P(),K()})),HS=e((()=>{P(),K()})),US=e((()=>{P(),K()})),WS=e((()=>{P(),K()})),GS=e((()=>{P(),K()})),KS=e((()=>{P(),K()})),qS=e((()=>{P(),K()})),JS=e((()=>{P(),K()})),YS=e((()=>{P(),K()})),XS=e((()=>{P(),K()})),ZS=e((()=>{P(),K()})),QS=e((()=>{P(),K()})),$S=e((()=>{P(),K()})),eC=e((()=>{P(),K()})),tC=e((()=>{P(),K()})),nC=e((()=>{P(),K()})),rC=e((()=>{P(),K()})),iC=e((()=>{P(),K()})),aC=e((()=>{P(),K()})),oC=e((()=>{P(),K()})),sC=e((()=>{P(),K()})),cC=e((()=>{P(),K()})),lC=e((()=>{P(),K()})),uC=e((()=>{P(),K()})),dC=e((()=>{P(),K()})),fC=e((()=>{P(),K()})),pC=e((()=>{P(),K()})),mC=e((()=>{P(),K()})),hC=e((()=>{P(),K()})),gC=e((()=>{P(),K()})),_C=e((()=>{P(),K()})),vC=e((()=>{P(),K()})),yC=e((()=>{P(),K()})),bC=e((()=>{P(),K()})),xC=e((()=>{P(),K()})),SC=e((()=>{P(),K()})),CC=e((()=>{P(),K()})),wC=e((()=>{P(),K()})),TC=e((()=>{P(),K()})),EC=e((()=>{P(),K()})),DC=e((()=>{P(),K()})),OC=e((()=>{P(),K()})),kC=e((()=>{P(),K()})),AC=e((()=>{P(),K()})),jC=e((()=>{P(),K()})),MC=e((()=>{P(),K()})),NC=e((()=>{P(),K()})),PC=e((()=>{P(),K()})),FC=e((()=>{P(),K()})),IC=e((()=>{P(),K()})),LC=e((()=>{P(),K()})),RC=e((()=>{P(),K()})),zC=e((()=>{P(),K()})),BC=e((()=>{P(),K()})),VC=e((()=>{P(),K()})),HC=e((()=>{P(),K()})),UC=e((()=>{P(),K()})),WC=e((()=>{P(),K()})),GC=e((()=>{P(),K()})),KC=e((()=>{P(),K()})),qC=e((()=>{P(),K()})),JC=e((()=>{P(),K()})),YC=e((()=>{P(),K()})),XC=e((()=>{P(),K()})),ZC=e((()=>{P(),K()})),QC=e((()=>{P(),K()})),$C=e((()=>{P(),K()})),ew=e((()=>{P(),K()})),tw=e((()=>{P(),K()})),nw=e((()=>{P(),K()})),rw=e((()=>{P(),K()})),iw=e((()=>{P(),K()})),aw=e((()=>{P(),K()})),ow=e((()=>{P(),K()})),sw=e((()=>{P(),K()})),cw=e((()=>{P(),K()})),lw=e((()=>{P(),K()})),uw=e((()=>{P(),K()})),dw=e((()=>{P(),K()})),fw=e((()=>{P(),K()})),pw=e((()=>{P(),K()})),mw=e((()=>{P(),K()})),hw=e((()=>{P(),K()})),gw=e((()=>{P(),K()})),_w=e((()=>{P(),K()})),vw=e((()=>{P(),K()})),yw=e((()=>{P(),K()})),bw=e((()=>{P(),K()})),xw=e((()=>{P(),K()})),Sw,Cw=e((()=>{P(),K(),J(),Sw=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`x-circle-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path
      d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})),ww,Tw=e((()=>{P(),K(),J(),ww=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>A`
  <svg
    slot=${G(e)}
    class=${`x-close-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>j`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})),Ew=e((()=>{P(),K()})),Dw=e((()=>{P(),K()})),Ow=e((()=>{P(),K()})),kw=e((()=>{P(),K()})),Aw=e((()=>{P(),K()})),jw=e((()=>{P(),K()})),Mw=e((()=>{P(),K()})),Nw=e((()=>{P(),K()})),Pw=e((()=>{P(),K()})),Fw=e((()=>{Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),ts(),ns(),rs(),is(),as(),os(),ss(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),bu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Cw(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw()})),Iw,Lw=e((()=>{P(),H(),et(),Iw=un(class extends dn{constructor(e){if(super(e),e.type!==V.PROPERTY&&e.type!==V.ATTRIBUTE&&e.type!==V.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ke(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===M||t===N)return t;let n=e.element,r=e.name;if(e.type===V.PROPERTY){if(t===n[r])return M}else if(e.type===V.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return M}else if(e.type===V.ATTRIBUTE&&n.getAttribute(r)===t+``)return M;return Ze(e),t}})})),Rw,zw=e((()=>{W(),Rw=Et(F`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)})),Bw,Vw=e((()=>{zw(),W(),P(),Bw=F`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,U(()=>A`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[Rw,Bw]}))})),Hw,Uw=e((()=>{W(),Hw=Et(F`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`)})),Ww,Gw,Kw=e((()=>{W(),P(),J(),Vw(),Uw(),Ww=(e,t,n)=>Fe(A`<cosmoz-tooltip-content>
			${q(t,()=>A`<strong slot="heading">${t}</strong>`)}
			${q(n,()=>A`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,e),Gw=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=B(),l=!!(r||i)&&!s;L(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(Hw)||(t.adoptedStyleSheets=[...u,Hw]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,Ww(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),L(()=>{!n||!c.current||Ww(c.current,r,i)},[r,i,n]),L(()=>{!s||!c.current||c.current.hidePopover()},[s])}})),qw,Jw=e((()=>{W(),qw=e=>{let[t,n]=Xt(!1);return L(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})),Yw,Xw,Zw=e((()=>{zw(),W(),P(),Nn(),J(),Vw(),Uw(),Kw(),Jw(),Yw=F`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,Xw=e=>{let{heading:t,description:n,for:r,placement:i=`top`,delay:a=300,disabled:o=!1}=e,s=B(),c=B(),l=B(),u=qw(l),d=!!(t||n||u)&&!o,f=z(()=>{d&&(clearTimeout(c.current),c.current=window.setTimeout(()=>{s.current?.showPopover()},a))},[a,d]);L(()=>{o&&(clearTimeout(c.current),s.current?.hidePopover())},[o]);let p=z(()=>{clearTimeout(c.current),s.current?.hidePopover()},[]);return L(()=>{if(r)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||p()};return e.addEventListener(`pointerover`,f),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,f),e.removeEventListener(`pointerout`,t)}},[r,f,p]),Gw(e,{for:r,heading:t,description:n,placement:i,delay:a,disabled:o}),r?N:d?A`
		<slot @focusin=${f} @focusout=${p}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${i}"
			${Mn(s)}
		>
			<cosmoz-tooltip-content>
				${q(t,()=>A`<strong slot="heading">${t}</strong>`)}
				${q(n,()=>A`<p slot="description">${n}</p>`)}
				<slot name="content" ${Mn(l)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:A`
			<slot></slot>
			<slot name="content" ${Mn(l)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,U(Xw,{styleSheets:[Rw,Hw,Yw],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})),Qw=e((()=>{Zw()})),$w,eT,tT=e((()=>{Fw(),Qw(),P(),J(),$w=(e,{hint:t,label:n,invalid:r,errorMessage:i,compact:a,required:o})=>A`
		<!-- label: hidden in compact mode -->
		${q(!a&&n,()=>A`<label for="input" part="label"
					>${n}
					${q(o,()=>A`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${q(a&&r&&i,()=>A`<cosmoz-tooltip
						placement="top"
						description=${i}
						delay="300"
					>
						${Em({width:`16px`,height:`16px`})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${q(!a&&t&&!r,()=>A`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${q(!a&&r&&i,()=>A`<span class="error" part="error">${i}</span>`)}
	`,eT=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`]})),nT,rT=e((()=>{An(),nT=En`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		margin-bottom: calc(var(--cz-spacing) * 6);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		cursor: not-allowed;
	}

	:host([invalid]) {
		caret-color: var(--cz-color-text-error);
	}

	:host([invalid]) .required,
	.error {
		color: var(--cz-color-text-error);
	}

	/* === Layout === */

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: var(--cz-radius-md);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
		transition-duration: 0.1s;
		transition-timing-function: linear;
		transition-property: box-shadow, background;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: inset 0 0 0 1px var(--cz-color-border-error);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error);
	}

	.control {
		flex: 1;
		position: relative;
	}

	/* === Input === */

	#input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
		color: var(--cz-color-text-primary);
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* === Label === */

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	.error {
		font-size: var(--cz-text-xs);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	/* === Tooltip (fluid error indicator) === */

	cosmoz-tooltip {
		display: flex;
		align-items: center;
		margin-right: calc(var(--cz-spacing) * 2);
	}

	:host([invalid]) cosmoz-tooltip {
		color: var(--cz-color-text-error);
	}

	:host([variant='inline']) cosmoz-tooltip {
		display: none;
	}

	/* === Slots === */

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	/* === Variant: inline === */
	:host([variant='inline']) {
		margin-bottom: 0;
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
		box-shadow: none;
		padding-inline: 0;
	}

	:host([variant='inline']) .wrap:has(#input:focus) {
		box-shadow: none;
	}

	:host([variant='inline']) .hint,
	:host([variant='inline']) .error {
		display: none;
	}
	:host([variant='inline'][disabled]) label {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}
	:host([variant='inline']) label {
		position: absolute;
		top: 25%;
		left: 0;
		width: 100%;
		transform-origin: left;
		transition:
			transform 0.25s,
			width 0.25s;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}

	:host([variant='inline']:focus-within) label,
	:host([variant='inline'][has-value]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([variant='inline']) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(0);
		}
	}

	/* === Variant: cell === */

	:host([variant='cell']) {
		margin-bottom: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host([variant='cell']) .wrap:has(#input) {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}

	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell'][invalid]) .wrap:has(#input) {
		border-color: var(--cz-color-border-error);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}

	:host([variant='cell']) label {
		display: none;
	}

	:host([variant='cell']) .error {
		left: calc(var(--cz-spacing) * 3);
		bottom: 50%;
		transform: translateY(50%);
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: calc(100% - calc(var(--cz-spacing) * 6));
	}

	:host([variant='cell']:focus-within) .error,
	:host([variant='cell'][has-value]) .error {
		visibility: hidden;
	}

	/* === No spinner === */

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	/* === Autosize === */

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		--_pad: calc(var(--cz-spacing) * 12);
		min-width: calc(2ch + var(--_pad));
		width: calc(var(--chars) + var(--_pad));
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px + var(--_pad));
		min-width: calc(2ch + 0.25em + 15px + var(--_pad));
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: calc(var(--width) + var(--_pad));
		min-width: calc(2ch + 0.25em + var(--_pad));
	}
	slot[name='prefix']::slotted(*) {
		padding-inline-start: calc(var(--cz-spacing) * 2);
	}

	slot[name='suffix']::slotted(*) {
		padding-inline-end: calc(var(--cz-spacing) * 2);
	}
`})),iT,aT=e((()=>{W(),iT=e=>R(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),oT,sT=e((()=>{W(),oT=Pt(class extends I{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),cT,lT=e((()=>{W(),cT=Pt(class extends I{update(){return this.state.host}})})),uT,dT,fT,pT=e((()=>{W(),lT(),uT=/([A-Z])/gu,dT=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(uT,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},fT=(e,t,n=[t])=>{let r=cT();L(()=>{dT(r,e,t)},n)}})),mT,hT=e((()=>{sT(),pT(),W(),mT=e=>{let t=B(void 0),n=z(e=>t.current=e,[]),r=e.shadowRoot,i=z(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=z(t=>dT(e,`value`,t.target.value),[]),o=z(t=>dT(e,`focused`,t.type===`focus`),[]),s=z(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return oT({validate:s},[s]),L(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),gT,_T,vT=e((()=>{gT=({placeholder:e})=>e||` `,_T=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),yT,bT,xT=e((()=>{W(),P(),K(),Lw(),Nn(),tT(),rT(),aT(),hT(),vT(),yT=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...eT],bT=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:o,disabled:s,min:c,max:l,step:u,maxlength:d,required:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=mT(e),_=iT(r);return e.toggleAttribute(`has-value`,!!a),$w(A`
			<input
				${Mn(g)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${G(n)}
				autocomplete=${G(i)}
				placeholder=${gT({placeholder:e.placeholder})}
				?readonly=${o}
				aria-disabled=${s?`true`:`false`}
				?disabled=${s}
				?required=${f}
				.value=${Iw(a??``)}
				maxlength=${G(d)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${G(c)}
				max=${G(_T(t,l))}
				step=${G(u)}
			/>
		`,e)},customElements.define(`cosmoz-input`,U(bT,{observedAttributes:yT,styleSheets:[Et(nT)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),ST,CT,wT,TT=e((()=>{W(),ST=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},CT=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},wT=e=>{let{value:t,maxRows:n}=e,r=R(()=>()=>e.shadowRoot.querySelector(`#input`),[]);L(()=>CT(r(),n),[n,r]),L(()=>ST(r()),[r,t]),L(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>ST(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),ET,DT,OT=e((()=>{P(),K(),Lw(),Nn(),W(),tT(),rT(),TT(),hT(),ET=[`rows`,`placeholder`,`label`,`hint`,`required`,...eT],DT=e=>{let{autocomplete:t,value:n,placeholder:r,readonly:i,disabled:a,rows:o,cols:s,maxlength:c}=e,{onChange:l,onFocus:u,onInput:d,onRef:f}=mT(e);return wT(e),$w(A`
			<textarea id="input" part="input"
				${Mn(f)}
				autocomplete=${G(t)}
				placeholder=${r||` `}
				rows=${o??1} cols=${G(s)}
				?readonly=${i} ?aria-disabled=${a} ?disabled=${a}
				.value=${Iw(n??``)} maxlength=${G(c)} @input=${d}
				@change=${l} @focus=${u} @blur=${u}>`,e)},customElements.define(`cosmoz-textarea`,U(DT,{observedAttributes:ET,styleSheets:[Et(nT)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),kT,AT,jT,MT=e((()=>{W(),Lw(),J(),kT=e=>{let{label:t,value:n,disabled:r,error:i}=e,a=z(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return A`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Iw(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${q(t,()=>A`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${q(i,e=>A`<div class="failure">${e}</div>`)} `},AT=F`
	.toggle {
		appearance: none;
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,jT=F`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: calc(var(--cz-spacing) * 1);
	}
`,customElements.define(`cosmoz-toggle`,U(kT,{styleSheets:[jT,AT],observedAttributes:[`label`,`disabled`,`error`]}))})),NT=e((()=>{xT(),OT(),MT(),hT(),tT(),rT()})),Y,PT,FT,IT,LT,RT,zT,BT,VT,HT,UT,WT,GT,KT,qT,JT,YT,XT,ZT,QT,$T,eE,tE,nE,X,rE,iE,aE,oE,sE,cE,lE,uE,dE,fE,pE,mE,hE,gE,_E,vE,yE,bE,xE,SE,CE,wE,TE,EE,DE,OE,kE,Z,AE,jE=e((()=>{Y=e=>typeof e==`string`,PT=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},FT=e=>e==null?``:``+e,IT=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},LT=/###/g,RT=e=>e&&e.indexOf(`###`)>-1?e.replace(LT,`.`):e,zT=e=>!e||Y(e),BT=(e,t,n)=>{let r=Y(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(zT(e))return{};let t=RT(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return zT(e)?{}:{obj:e,k:RT(r[i])}},VT=(e,t,n)=>{let{obj:r,k:i}=BT(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=BT(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=BT(e,o,Object),s&&s.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},HT=(e,t,n,r)=>{let{obj:i,k:a}=BT(e,t,Object);i[a]=i[a]||[],i[a].push(n)},UT=(e,t)=>{let{obj:n,k:r}=BT(e,t);if(n)return n[r]},WT=(e,t,n)=>{let r=UT(e,n);return r===void 0?UT(t,n):r},GT=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(r in e?Y(e[r])||e[r]instanceof String||Y(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):GT(e[r],t[r],n):e[r]=t[r]);return e},KT=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),qT={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},JT=e=>Y(e)?e.replace(/[&<>"'\/]/g,e=>qT[e]):e,YT=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},XT=[` `,`,`,`?`,`!`,`;`],ZT=new YT(20),QT=(e,t,n)=>{t||=``,n||=``;let r=XT.filter(e=>t.indexOf(e)<0&&n.indexOf(e)<0);if(r.length===0)return!0;let i=ZT.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},$T=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`.`;if(!e)return;if(e[t])return e[t];let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].indexOf(typeof t)>-1&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},eE=e=>e&&e.replace(`_`,`-`),tE={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}},nE=class e{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||`i18next:`,this.logger=e||tE,this.options=t,this.debug=t.debug}log(){var e=[...arguments];return this.forward(e,`log`,``,!0)}warn(){var e=[...arguments];return this.forward(e,`warn`,``,!0)}error(){var e=[...arguments];return this.forward(e,`error`,``)}deprecate(){var e=[...arguments];return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(Y(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},X=new nE,rE=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){var t=[...arguments].slice(1);this.observers[e]&&Array.from(this.observers[e].entries()).forEach(e=>{let[n,r]=e;for(let e=0;e<r;e++)n(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(n=>{let[r,i]=n;for(let n=0;n<i;n++)r.apply(r,[e,...t])})}},iE=class extends rE{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:[`translation`],defaultNS:`translation`};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.indexOf(`.`)>-1?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Y(n)&&i?o.push(...n.split(i)):o.push(n)));let s=UT(this.data,o);return!s&&!t&&!n&&e.indexOf(`.`)>-1&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!Y(n)?s:$T(this.data&&this.data[e]&&this.data[e][t],n,i)}addResource(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.indexOf(`.`)>-1&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),VT(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(let r in n)(Y(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(`.`)>-1&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=UT(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?GT(s,n,i):s={...s,...n},VT(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.options.compatibilityAPI===`v1`?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},aE={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{this.processors[e]&&(t=this.processors[e].process(t,n,r,i))}),t}},oE={},sE=class e extends rE{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),IT([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=X.create(`translator`)}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;let n=this.resolve(e,t);return n&&n.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.indexOf(n)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!QT(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Y(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(a[0])>-1)&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:Y(i)?[i]:i}}translate(t,n,r){if(typeof n!=`object`&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n==`object`&&(n={...n}),n||={},t==null)return``;Array.isArray(t)||(t=[String(t)]);let i=n.returnDetails===void 0?this.options.returnDetails:n.returnDetails,a=n.keySeparator===void 0?this.options.keySeparator:n.keySeparator,{key:o,namespaces:s}=this.extractFromKey(t[t.length-1],n),c=s[s.length-1],l=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&l.toLowerCase()===`cimode`){if(u){let e=n.nsSeparator||this.options.nsSeparator;return i?{res:`${c}${e}${o}`,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:`${c}${e}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:o}let d=this.resolve(t,n),f=d&&d.res,p=d&&d.usedKey||o,m=d&&d.exactUsedKey||o,h=Object.prototype.toString.apply(f),g=[`[object Number]`,`[object Function]`,`[object RegExp]`],_=n.joinArrays===void 0?this.options.joinArrays:n.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,y=!Y(f)&&typeof f!=`boolean`&&typeof f!=`number`;if(v&&f&&y&&g.indexOf(h)<0&&!(Y(_)&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,f,{...n,ns:s}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(d.res=e,d.usedParams=this.getUsedParamsDetails(n),d):e}if(a){let e=Array.isArray(f),t=e?[]:{},r=e?m:p;for(let e in f)if(Object.prototype.hasOwnProperty.call(f,e)){let i=`${r}${a}${e}`;t[e]=this.translate(i,{...n,joinArrays:!1,ns:s}),t[e]===i&&(t[e]=f[e])}f=t}}else if(v&&Y(_)&&Array.isArray(f))f=f.join(_),f&&=this.extendTranslation(f,t,n,r);else{let i=!1,s=!1,u=n.count!==void 0&&!Y(n.count),p=e.hasDefaultValue(n),m=u?this.pluralResolver.getSuffix(l,n.count,n):``,h=n.ordinal&&u?this.pluralResolver.getSuffix(l,n.count,{ordinal:!1}):``,g=u&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),_=g&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${m}`]||n[`defaultValue${h}`]||n.defaultValue;!this.isValidLookup(f)&&p&&(i=!0,f=_),this.isValidLookup(f)||(s=!0,f=o);let v=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&s?void 0:f,y=p&&_!==f&&this.options.updateMissing;if(s||i||y){if(this.logger.log(y?`updateKey`:`missingKey`,l,c,o,y?_:f),a){let e=this.resolve(o,{...n,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(n.lng||this.language):e.push(n.lng||this.language);let r=(e,t,r)=>{let i=p&&r!==f?r:v;this.options.missingKeyHandler?this.options.missingKeyHandler(e,c,t,i,y,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,c,t,i,y,n),this.emit(`missingKey`,e,c,t,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&u?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,n);g&&n[`defaultValue${this.options.pluralSeparator}zero`]&&t.indexOf(`${this.options.pluralSeparator}zero`)<0&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{r([e],o+t,n[`defaultValue${t}`]||_)})}):r(e,o,_))}f=this.extendTranslation(f,t,n,d,r),s&&f===o&&this.options.appendNamespaceToMissingKey&&(f=`${c}:${o}`),(s||i)&&this.options.parseMissingKeyHandler&&(f=this.options.compatibilityAPI===`v1`?this.options.parseMissingKeyHandler(f):this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${o}`:o,i?f:void 0))}return i?(d.res=f,d.usedParams=this.getUsedParamsDetails(n),d):f}extendTranslation(e,t,n,r,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let o=Y(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),s;if(o){let t=e.match(this.interpolator.nestingRegexp);s=t&&t.length}let c=n.replace&&!Y(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),e=this.interpolator.interpolate(e,c,n.lng||this.language||r.usedLng,n),o){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;s<r&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!==`v1`&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){var e=[...arguments];return i&&i[0]===e[0]&&!n.context?(a.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):a.translate(...e,t)},n)),n.interpolation&&this.interpolator.reset()}let o=n.postProcess||this.options.postProcess,s=Y(o)?[o]:o;return e!=null&&s&&s.length&&n.applyPostProcessor!==!1&&(e=aE.handle(s,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,r,i,a,o;return Y(e)&&(e=[e]),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!Y(t.count),d=u&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),f=t.context!==void 0&&(Y(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!oE[`${p[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(o)&&(oE[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(o.push(c+e),t.ordinal&&e.indexOf(i)===0&&o.push(c+e.replace(i,this.options.pluralSeparator)),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator}${t.context}`;o.push(r),u&&(o.push(r+e),t.ordinal&&e.indexOf(i)===0&&o.push(r+e.replace(i,this.options.pluralSeparator)),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!Y(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.substring(0,12)===`defaultValue`&&e[t]!==void 0)return!0;return!1}},cE=e=>e.charAt(0).toUpperCase()+e.slice(1),lE=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=X.create(`languageUtils`)}getScriptPartFromCode(e){if(e=eE(e),!e||e.indexOf(`-`)<0)return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=eE(e),!e||e.indexOf(`-`)<0)return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Y(e)&&e.indexOf(`-`)>-1){if(typeof Intl<`u`&&Intl.getCanonicalLocales!==void 0)try{let t=Intl.getCanonicalLocales(e)[0];if(t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t)return t}catch{}let t=[`hans`,`hant`,`latn`,`cyrl`,`cans`,`mong`,`arab`],n=e.split(`-`);return this.options.lowerCaseLng?n=n.map(e=>e.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=cE(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!==`sgn`&&n[2].length===2&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=cE(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=cE(n[2].toLowerCase()))),n.join(`-`)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(e=>{if(e===n||!(e.indexOf(`-`)<0&&n.indexOf(`-`)<0)&&(e.indexOf(`-`)>0&&n.indexOf(`-`)<0&&e.substring(0,e.indexOf(`-`))===n||e.indexOf(n)===0&&n.length>1))return e})}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Y(e)&&(e.indexOf(`-`)>-1||e.indexOf(`_`)>-1)?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):Y(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.indexOf(e)<0&&i(this.formatLanguageCode(e))}),r}},uE=[{lngs:[`ach`,`ak`,`am`,`arn`,`br`,`fil`,`gun`,`ln`,`mfe`,`mg`,`mi`,`oc`,`pt`,`pt-BR`,`tg`,`tl`,`ti`,`tr`,`uz`,`wa`],nr:[1,2],fc:1},{lngs:`af.an.ast.az.bg.bn.ca.da.de.dev.el.en.eo.es.et.eu.fi.fo.fur.fy.gl.gu.ha.hi.hu.hy.ia.it.kk.kn.ku.lb.mai.ml.mn.mr.nah.nap.nb.ne.nl.nn.no.nso.pa.pap.pms.ps.pt-PT.rm.sco.se.si.so.son.sq.sv.sw.ta.te.tk.ur.yo`.split(`.`),nr:[1,2],fc:2},{lngs:[`ay`,`bo`,`cgg`,`fa`,`ht`,`id`,`ja`,`jbo`,`ka`,`km`,`ko`,`ky`,`lo`,`ms`,`sah`,`su`,`th`,`tt`,`ug`,`vi`,`wo`,`zh`],nr:[1],fc:3},{lngs:[`be`,`bs`,`cnr`,`dz`,`hr`,`ru`,`sr`,`uk`],nr:[1,2,5],fc:4},{lngs:[`ar`],nr:[0,1,2,3,11,100],fc:5},{lngs:[`cs`,`sk`],nr:[1,2,5],fc:6},{lngs:[`csb`,`pl`],nr:[1,2,5],fc:7},{lngs:[`cy`],nr:[1,2,3,8],fc:8},{lngs:[`fr`],nr:[1,2],fc:9},{lngs:[`ga`],nr:[1,2,3,7,11],fc:10},{lngs:[`gd`],nr:[1,2,3,20],fc:11},{lngs:[`is`],nr:[1,2],fc:12},{lngs:[`jv`],nr:[0,1],fc:13},{lngs:[`kw`],nr:[1,2,3,4],fc:14},{lngs:[`lt`],nr:[1,2,10],fc:15},{lngs:[`lv`],nr:[1,2,0],fc:16},{lngs:[`mk`],nr:[1,2],fc:17},{lngs:[`mnk`],nr:[0,1,2],fc:18},{lngs:[`mt`],nr:[1,2,11,20],fc:19},{lngs:[`or`],nr:[2,1],fc:2},{lngs:[`ro`],nr:[1,2,20],fc:20},{lngs:[`sl`],nr:[5,1,2,3],fc:21},{lngs:[`he`,`iw`],nr:[1,2,20,21],fc:22}],dE={1:e=>Number(e>1),2:e=>Number(e!=1),3:e=>0,4:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),5:e=>Number(e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5),6:e=>Number(e==1?0:e>=2&&e<=4?1:2),7:e=>Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),8:e=>Number(e==1?0:e==2?1:e!=8&&e!=11?2:3),9:e=>Number(e>=2),10:e=>Number(e==1?0:e==2?1:e<7?2:e<11?3:4),11:e=>Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3),12:e=>Number(e%10!=1||e%100==11),13:e=>Number(e!==0),14:e=>Number(e==1?0:e==2?1:e==3?2:3),15:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2),16:e=>Number(e%10==1&&e%100!=11?0:e===0?2:1),17:e=>Number(e==1||e%10==1&&e%100!=11?0:1),18:e=>Number(e==0?0:e==1?1:2),19:e=>Number(e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3),20:e=>Number(e==1?0:e==0||e%100>0&&e%100<20?1:2),21:e=>Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0),22:e=>Number(e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3)},fE=[`v1`,`v2`,`v3`],pE=[`v4`],mE={zero:0,one:1,two:2,few:3,many:4,other:5},hE=()=>{let e={};return uE.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:dE[t.fc]}})}),e},gE=class{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=X.create(`pluralResolver`),(!this.options.compatibilityJSON||pE.includes(this.options.compatibilityJSON))&&(typeof Intl>`u`||!Intl.PluralRules)&&(this.options.compatibilityJSON=`v3`,this.logger.error(`Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.`)),this.rules=hE(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){let n=eE(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(!e.match(/-|_/))return;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((e,t)=>mE[e]-mE[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):n.numbers.map(n=>this.getSuffix(e,n,t)):[]}getSuffix(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=this.getRule(e,n);return r?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:this.getSuffixRetroCompatible(r,t):(this.logger.warn(`no plural rule found for: ${e}`),``)}getSuffixRetroCompatible(e,t){let n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),r=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r=`plural`:r===1&&(r=``));let i=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON===`v1`?r===1?``:typeof r==`number`?`_plural_${r.toString()}`:i():this.options.compatibilityJSON===`v2`||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?i():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!fE.includes(this.options.compatibilityJSON)}},_E=function(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:`.`,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=WT(e,t,n);return!a&&i&&Y(n)&&(a=$T(e,n,r),a===void 0&&(a=$T(t,n,r))),a},vE=e=>e.replace(/\$/g,`$$$$`),yE=class{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=X.create(`interpolator`),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?JT:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?KT(i):a||`{{`,this.suffix=o?KT(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u||`-`,this.unescapeSuffix=this.unescapePrefix?``:l||``,this.nestingPrefix=d?KT(d):f||KT(`$t(`),this.nestingSuffix=p?KT(p):m||KT(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(e.indexOf(this.formatSeparator)<0){let i=_E(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(_E(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp();let l=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>vE(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?vE(this.escape(e)):vE(e)}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=Y(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else!Y(a)&&!this.useRawValueToEscape&&(a=FT(a));let s=t.safeValue(a);if(e=e.replace(i[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;let r=e.split(RegExp(`${n}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);(o&&o.length%2==0&&!s||s.length%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!Y(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){let e=r[1].split(this.formatSeparator).map(e=>e.trim());r[1]=e.shift(),s=e,c=!0}if(i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!Y(i))return i;Y(i)||(i=FT(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),c&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},bE=e=>{let t=e.toLowerCase().trim(),n={};if(e.indexOf(`(`)>-1){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].substring(0,r[1].length-1);t===`currency`&&i.indexOf(`:`)<0?n.currency||=i.trim():t===`relativetime`&&i.indexOf(`:`)<0?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},xE=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(eE(r),i),t[o]=s),s(n)}},SE=class{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=X.create(`formatter`),this.options=e,this.formats={number:xE((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:xE((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:xE((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:xE((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:xE((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||`,`}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=xE(t)}format(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf(`(`)>1&&i[0].indexOf(`)`)<0&&i.find(e=>e.indexOf(`)`)>-1)){let e=i.findIndex(e=>e.indexOf(`)`)>-1);i[0]=[i[0],...i.splice(1,e)].join(this.formatSeparator)}return i.reduce((e,t)=>{let{formatName:i,formatOptions:a}=bE(t);if(this.formats[i]){let t=e;try{let o=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},CE=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},wE=class extends rE{constructor(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=X.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{HT(n.loaded,[i],a),CE(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:``,n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend&&this.backend.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},TE=()=>({debug:!1,initImmediate:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,simplifyPluralSuffix:!0,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),Y(e[1])&&(t.defaultValue=e[1]),Y(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0}}),EE=e=>(Y(e.ns)&&(e.ns=[e.ns]),Y(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Y(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf(`cimode`)<0&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),DE=()=>{},OE=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},kE=class e extends rE{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=EE(e),this.services={},this.logger=X,this.modules={external:[]},OE(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t==`function`&&(n=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(Y(t.ns)?t.defaultNS=t.ns:t.ns.indexOf(`translation`)<0&&(t.defaultNS=t.ns[0]));let r=TE();this.options={...r,...this.options,...EE(t)},this.options.compatibilityAPI!==`v1`&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);let i=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?X.init(i(this.modules.logger),this.options):X.init(null,this.options);let t;this.modules.formatter?t=this.modules.formatter:typeof Intl<`u`&&(t=SE);let n=new lE(this.options);this.store=new iE(this.options.resources,this.options);let a=this.services;a.logger=X,a.resourceStore=this.store,a.languageUtils=n,a.pluralResolver=new gE(n,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),t&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(a.formatter=i(t),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new yE(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new wE(i(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on(`*`,function(t){var n=[...arguments].slice(1);e.emit(t,...n)}),this.modules.languageDetector&&(a.languageDetector=i(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=i(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new sE(this.services,this.options),this.translator.on(`*`,function(t){var n=[...arguments].slice(1);e.emit(t,...n)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,n||=DE,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(t=>{this[t]=function(){return e.store[t](...arguments)}}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(t=>{this[t]=function(){return e.store[t](...arguments),e}});let a=PT(),o=()=>{let e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),a.resolve(t),n(e,t)};if(this.languages&&this.options.compatibilityAPI!==`v1`&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?o():setTimeout(o,0),a}loadResources(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:DE,n=Y(e)?e:this.language;if(typeof e==`function`&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return t();let e=[],r=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&e.indexOf(t)<0&&e.push(t)})};n?r(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>r(e)),this.options.preload&&this.options.preload.forEach(e=>r(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),t(e)})}else t(null)}reloadResources(e,t,n){let r=PT();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=DE,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&aE.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!([`cimode`,`dev`].indexOf(e)>-1))for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(!([`cimode`,`dev`].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;let r=PT();this.emit(`languageChanging`,e);let i=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},a=(e,a)=>{a?(i(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,r.resolve(function(){return n.t(...arguments)}),t&&t(e,function(){return n.t(...arguments)})},o=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=Y(t)?t:this.services.languageUtils.getBestMatchFromCodes(t);n&&(this.language||i(n),this.translator.language||this.translator.changeLanguage(n),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(n)),this.loadResources(n,e=>{a(e,n)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),r}getFixedT(e,t,n){var r=this;let i=function(e,t){let a;if(typeof t!=`object`){var o=[...arguments].slice(2);a=r.options.overloadTranslationOptionHandler([e,t].concat(o))}else a={...t};a.lng=a.lng||i.lng,a.lngs=a.lngs||i.lngs,a.ns=a.ns||i.ns,a.keyPrefix!==``&&(a.keyPrefix=a.keyPrefix||n||i.keyPrefix);let s=r.options.keySeparator||`.`,c;return c=a.keyPrefix&&Array.isArray(e)?e.map(e=>`${a.keyPrefix}${s}${e}`):a.keyPrefix?`${a.keyPrefix}${s}${e}`:e,r.t(c,a)};return Y(e)?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=n,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=PT();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=PT();Y(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>r.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return`rtl`;let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services&&this.services.languageUtils||new lE(TE());return t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new e(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:DE,r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);return(t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new iE(this.store.data,i),a.services.resourceStore=a.store),a.translator=new sE(a.services,i),a.translator.on(`*`,function(e){var t=[...arguments].slice(1);a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Z=kE.createInstance(),Z.createInstance=kE.createInstance,Z.createInstance,Z.dir,Z.init,Z.loadResources,Z.reloadResources,Z.use,Z.changeLanguage,Z.getFixedT,AE=Z.t,Z.exists,Z.setDefaultNamespace,Z.hasLoadedNamespace,Z.loadNamespaces,Z.loadLanguages})),ME,NE,PE=e((()=>{P(),H(),ME={},NE=un(class extends dn{constructor(){super(...arguments),this.ot=ME}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return M}else if(this.ot===t)return M;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),FE,IE,LE=e((()=>{FE=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},IE=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),RE,zE,BE,VE,HE=e((()=>{P(),et(),yn(),LE(),H(),RE=e=>!We(e)&&typeof e.then==`function`,zE=1073741823,BE=class extends vn{constructor(){super(...arguments),this._$Cwt=zE,this._$Cbt=[],this._$CK=new FE(this),this._$CX=new IE}render(...e){return e.find(e=>!RE(e))??M}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!RE(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=zE,r=0,Promise.resolve(o).then(async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return M}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},VE=un(BE)})),UE=e((()=>{H()})),WE=e((()=>{yn()})),GE,KE,qE=e((()=>{P(),H(),et(),GE=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},KE=un(class extends dn{constructor(e){if(super(e),e.type!==V.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Qe(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Ye(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Ye(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Ye(i[d],a[m]),Je(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Ye(i[f],a[p]),Je(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=GE(o,p,m),u=GE(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Je(e,i[d]);Ye(t,a[p]),c[p]=t}else c[p]=Ye(n,a[p]),Je(e,i[d],n),i[t]=null;p++}else $e(i[f]),f--;else $e(i[d]),d++;for(;p<=m;){let t=Je(e,c[m+1]);Ye(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&$e(e)}return this.ut=o,Ze(e,c),M}})})),JE=e((()=>{qE()})),YE,XE,ZE,QE=e((()=>{YE=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},YE.eventName=`rangeChanged`,XE=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},XE.eventName=`visibilityChanged`,ZE=class e extends Event{constructor(){super(e.eventName,{bubbles:!1})}},ZE.eventName=`unpinned`})),$E,eD,tD=e((()=>{$E=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},eD=class extends $E{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior===`smooth`?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:`smooth`},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);let i=Math.abs(n-e),a=Math.abs(r-t);i<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener(`scroll`,this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener(`scroll`,this._checkForArrival))}}}));function nD(e){let t=window.getComputedStyle(e);return{marginTop:rD(t.marginTop),marginRight:rD(t.marginRight),marginBottom:rD(t.marginBottom),marginLeft:rD(t.marginLeft)}}function rD(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function iD(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function aD(e,t=!1){let n=[],r=t?e:iD(e);for(;r!==null;)n.push(r),r=iD(r);return n}function oD(e,t=!1){let n=!1;return aD(e,t).filter(e=>{if(n)return!1;let t=getComputedStyle(e);return n=t.position===`fixed`,t.overflow!==`visible`})}var sD,cD,lD,uD,dD,fD=e((()=>{QE(),tD(),t(),sD=typeof window<`u`?window.ResizeObserver:void 0,cD=Symbol(`virtualizerRef`),lD=`virtualizer-sizer`,dD=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error(`Virtualizer constructor requires a configuration object`);if(e.hostElement)this._init(e);else throw Error(`Virtualizer configuration requires the "hostElement" property`)}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new sD(()=>this._hostElementSizeChanged()),this._childrenRO=new sD(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[cD]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=oD(this._hostElement,e),this._scrollerController=new eD(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener(`scroll`,this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener(`scroll`,this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise(`disconnected`),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||`block`,e.position=e.position||`relative`,e.contain=e.contain||`size layout`,this._isScroller&&(e.overflow=e.overflow||`auto`,e.minHeight=e.minHeight||`150px`)}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${lD}]`);t||(t=document.createElement(`div`),t.setAttribute(lD,``),e.appendChild(t)),Object.assign(t.style,{position:`absolute`,margin:`-2px 0 0 0`,padding:0,visibility:`hidden`,fontSize:`2px`}),t.textContent=`&nbsp;`,t.setAttribute(lD,``),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||uD;if(typeof t==`function`&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,r;if(typeof e.type==`function`){r=e.type;let n={...e};delete n.type,t=n}else t=e;r===void 0&&(uD=r=(await n(async()=>{let{FlowLayout:e}=await import(`./flow-Bk5W63PM.js`);return{FlowLayout:e}},__vite__mapDeps([0,1]),import.meta.url)).FlowLayout),this._layout=new r(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes==`function`&&(typeof this._layout.measureChildren==`function`&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener(`load`,this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName(`uv-virtualizing`,`measure`).filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let i=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[a]=n.call(this,i,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},nD(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&=(this._notifyVisibility(),!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_handleScrollEvent(){if(this._benchmarkStart&&`mark`in window.performance){try{window.performance.measure(`uv-virtualizing`,`uv-start`,`uv-end`)}catch(e){console.warn(`Error measuring performance data: `,e)}window.performance.mark(`uv-start`)}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case`scroll`:(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn(`event not handled`,e)}}_handleLayoutMessage(e){e.type===`stateChanged`?this._updateDOM(e):e.type===`visibilityChanged`?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type===`unpinned`&&this._hostElement.dispatchEvent(new ZE)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(lD)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let r,i,a,o,s=e.getBoundingClientRect();r=0,i=0,a=window.innerHeight,o=window.innerWidth;let c=this._clippingAncestors.map(e=>e.getBoundingClientRect());c.unshift(s);for(let e of c)r=Math.max(r,e.top),i=Math.max(i,e.left),a=Math.min(a,e.bottom),o=Math.min(o,e.right);let l=t.getBoundingClientRect(),u={left:s.left-l.left,top:s.top-l.top},d={width:t.scrollWidth,height:t.scrollHeight},f=r-s.top+e.scrollTop,p=i-s.left+e.scrollLeft,m=Math.max(0,a-r);n.viewportSize={width:Math.max(0,o-i),height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=d,n.offsetWithinScroller=u}}_sizeHostElement(e){let t=82e5,n=e&&e.width!==null?Math.min(t,e.width):0,r=e&&e.height!==null?Math.min(t,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=n?`${n}px`:`100%`,e.minHeight=r?`${r}px`:`100%`}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:n,height:r,xOffset:i,yOffset:a},o)=>{let s=this._children[o-this._first];s&&(s.style.position=`absolute`,s.style.boxSizing=`border-box`,s.style.transform=`translate(${t}px, ${e}px)`,n!==void 0&&(s.style.width=n+`px`),r!==void 0&&(s.style.height=r+`px`),s.style.left=i===void 0?null:i+`px`,s.style.top=a===void 0?null:a+`px`)})}async _adjustRange(e){let{_first:t,_last:n,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior===`smooth`){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new YE({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new XE({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t}),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}})),pD,mD,hD,gD,_D=e((()=>{Ve(),UE(),WE(),JE(),fD(),pD=e=>e,mD=(e,t)=>A`${t}: ${JSON.stringify(e,null,2)}`,hD=class extends vn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>mD(e,t+this._first),this._keyFunction=(e,t)=>pD(e,t+this._first),this._items=[],e.type!==V.CHILD)throw Error(`The virtualize directive can only be used in child expressions`)}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return KE(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?M:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(e,n)=>t(e,n+this._first)),n&&(this._keyFunction=(e,t)=>n(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:n,scroller:r,items:i}=t;this._virtualizer=new dD({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){let n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener(`rangeChanged`,e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},gD=un(hD)})),vD,yD,bD,xD=e((()=>{P(),H(),vD=(e,t)=>{if(!e||!t)return;let n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(e=>n.includes(e)?[]:[[e,void 0]]))},yD=class extends dn{_props;render(e){return M}update(e,[t]){return this._props!==t&&Object.assign(e.element,vD(this._props,t),this._props=t),M}},bD=un(yD)}));function SD(e){return()=>e}var CD,wD,TD,ED,DD=e((()=>{CD=SD(),wD=CD,TD=e=>e,ED=(e,...t)=>typeof e==`function`?e(...t):e})),OD,kD=e((()=>{W(),lT(),OD=e=>{let t=cT(),n=R(()=>new CSSStyleSheet,[]);L(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),L(()=>{n.replaceSync(e)},[e])}}));function AD(e){return e?t=>typeof t==`object`&&t?t[e]:t:TD}var jD,MD,ND=e((()=>{DD(),jD=e=>{let t=AD(e);return e=>typeof e==`string`?e:t(e)?.toString()||``},MD=e=>t=>{let n={};for(let r in t)e.includes(r)&&(n[r]=t[r]);return n}})),PD,FD,ID=e((()=>{W(),J(),PD=F`
	:host {
		display: block;
		font-family: var(--cz-font-body);
		background: var(--cz-color-bg-primary);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		padding-block: var(--cz-spacing);
	}
	.items {
		position: relative;
		overflow-y: auto;
		scrollbar-width: thin;
		contain: layout paint !important;
		padding-inline: calc(var(--cz-spacing) * 1.5);
		min-width: calc(var(--cz-spacing) * 20);
	}
	:host(:focus-within) {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	.items:focus-visible {
		outline: none;
	}
	.item {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		box-sizing: border-box;
		border-radius: var(--cz-radius-sm);
		width: calc(100% - var(--cz-spacing) * 3);
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.25s;
		color: var(--cz-color-text-primary);
		overflow: hidden;
		padding-inline: calc(var(--cz-spacing) * 2);
		margin-block: 1px;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 calc(var(--cz-spacing) * 5);
		overflow: hidden;
		max-width: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host(:not([multi])) .item[aria-selected] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.25)
		);
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: calc(var(--cz-spacing) * 2);
		margin-right: calc(var(--cz-spacing) * 2);
		background: var(--cz-color-bg-tertiary);
		border: 1px solid var(--cz-color-bg-quaternary);
		border-radius: var(--cz-radius-xs);
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: var(--cz-color-bg-brand-solid);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,FD=({index:e,itemHeight:t,auto:n})=>F`
	${q(!n,()=>F`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}
	.item[data-index='${e||`0`}'] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.15)
		);
	}
	.item[data-index='${e||`0`}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`})),LD,RD=e((()=>{W(),LD=e=>{let t=e===`auto`,[n,r]=Xt(t?40:e);return[n,e=>t?r(e):void 0]}})),zD,BD=e((()=>{zD=Symbol(`any key`)})),VD,HD=e((()=>{W(),DD(),VD=Cn(()=>wD),customElements.define(`cosmoz-keybinding-provider`,VD.Provider)})),UD,WD=e((()=>{W(),UD=e=>{let t=R(()=>({}),[]);return R(()=>Object.assign(t,e),[t,...Object.values(e)])}})),GD,KD=e((()=>{W(),HD(),WD(),GD=(e,t)=>{let n=Vt(VD),r=UD(e);L(()=>n(r),t)}})),qD,JD,YD,XD,ZD=e((()=>{BD(),qD=e=>([t])=>Object.entries(t).every(([t,n])=>e[t]===n||n===zD),JD=e=>{if(e==null)return!1;let t=e.getBoundingClientRect(),n=e.getRootNode().elementFromPoint(t.x+t.width/2,t.y+t.height/2);return n!=null&&(e===n||e.contains(n))},YD=(e=document)=>{let t=e.activeElement;return t?t.shadowRoot?YD(t.shadowRoot):t:null},XD=()=>{let e=YD(document);return e?!!(e.matches(`input:not([type="checkbox"]), textarea`)||`isContentEditable`in e&&e.isContentEditable):!1}})),QD,$D=e((()=>{W(),WD(),ZD(),QD=e=>{let t=UD({bindings:e});return L(()=>{let e=e=>{if(e.defaultPrevented)return;let n=t.bindings.find(qD(e));if(!n)return;let[,r,,i]=n;if(!i?.allowInEditable&&XD())return;let a=r.flatMap(e=>t[e]??[]);if(a.length===0)return;let o=a.find(e=>e.check&&!e.check()||e.element&&!JD(e.element())?!1:e);o&&(o.allowDefault||e.preventDefault(),o.callback(e))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[]),z(e=>(t[e.activity]=[e,...t[e.activity]??[]],()=>{t[e.activity]=t[e.activity]?.filter(t=>t!==e)}),[])}})),eO=e((()=>{BD(),HD(),KD(),$D()})),tO,nO,rO,iO,aO=e((()=>{tO=Symbol(`listbox.navigate.up`),nO=Symbol(`listbox.navigate.down`),rO=Symbol(`listbox.select`),iO=[[{key:`ArrowUp`},[tO],{title:`Navigate up`,description:`Move to previous listbox item`},{allowInEditable:!0}],[{key:`ArrowDown`},[nO],{title:`Navigate down`,description:`Move to next listbox item`},{allowInEditable:!0}],[{key:`Enter`},[rO],{title:`Select`,description:`Select current listbox item`},{allowInEditable:!0}]]})),oO,sO=e((()=>{lT(),eO(),aO(),oO=({onUp:e,onDown:t,onEnter:n})=>{let r=cT();GD({activity:tO,callback:e,element:()=>r},[]),GD({activity:nO,callback:t,element:()=>r},[]),GD({activity:rO,callback:n,element:()=>r},[])}})),cO,lO=e((()=>{W(),sO(),cO=({items:e,onSelect:t,defaultIndex:n=0})=>{let[r,i]=Xt({index:n}),{index:a}=r,{length:o}=e;return L(()=>{i({index:r.index<0?n:Math.min(r.index,e.length-1),scroll:!0})},[e,n]),oO({onUp:z(()=>i(e=>({index:e.index>0?e.index-1:o-1,scroll:!0})),[o]),onDown:z(()=>i(e=>({index:e.index<o-1?e.index+1:0,scroll:!0})),[o]),onEnter:z(()=>a>-1&&a<o&&t?.(e[a],a),[a,e,t])}),{position:r,highlight:z(e=>i({index:e}),[]),select:z(e=>t?.(e),[t])}}}));function uO(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:dO(e)?Array.from(e):[e]}var dO,fO,pO=e((()=>{DD(),dO=e=>typeof e==`object`&&!!e&&Symbol.iterator in e,fO=(e,t=TD)=>n=>{let r=uO(e).map(t);return uO(n).filter(e=>!r.includes(t(e)))}})),mO,hO,gO=e((()=>{pO(),P(),mO=(e,t)=>t?n=>n!=null&&uO(e).find(e=>e[t]===n[t]):t=>t!=null&&uO(e).includes(t),hO=(e,t)=>{if(!t||!e)return e;let n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;let r=n+t.length;return[e.slice(0,n),A`<mark>${e.slice(n,r)}</mark>`,e.slice(r)]}})),_O,vO=e((()=>{DD(),P(),gO(),_O=(e=TD)=>(t,n,{highlight:r,select:i,textual:a=TD,query:o,isSelected:s})=>{let c=a(t),l=e(hO(c,o),t,n);return A`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${s(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
				title=${c}
			>
				${l}
			</div>
			<div class="sizer" virtualizer-sizer>${l}</div>`},_O()})),yO,bO=e((()=>{WD(),W(),vO(),yO=({itemRenderer:e=_O(),...t})=>{let n=UD(t);return z((t,r)=>e(t,r,n),[n,e])}})),xO,SO,CO=e((()=>{W(),RD(),lO(),bO(),gO(),xO=[`query`,`items`,`onSelect`,`textual`,`anchor`,`itemHeight`,`itemLimit`,`itemRenderer`,`defaultIndex`,`value`,`valueProperty`,`loading`],SO=({value:e,valueProperty:t,items:n,onSelect:r,defaultIndex:i,query:a,textual:o,itemRenderer:s,itemHeight:c=40,itemLimit:l=5})=>{let u=R(()=>mO(e,t),[e,t]),d=R(()=>n.slice(),[n,u]),{position:f,highlight:p,select:m}=cO({items:d,onSelect:r,defaultIndex:isNaN(i)?void 0:Number(i)}),[h,g]=LD(c);return{position:f,items:d,height:Math.min(l,d.length)*h,highlight:p,select:m,itemHeight:h,setItemHeight:g,renderItem:yO({itemRenderer:s,items:d,position:f,highlight:p,select:m,textual:o,query:a,isSelected:u})}}})),wO,TO,EO,DO=e((()=>{_D(),An(),xD(),DD(),kD(),ND(),W(),Nn(),ID(),CO(),wO=wD,TO=e=>{let t=B(void 0),{position:n,items:r,renderItem:i,height:a,itemHeight:o,setItemHeight:s}=SO(e);return L(()=>{let n=t.current?.[cD];n&&n.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent(`layout-complete`));let{averageChildSize:t,averageMarginSize:r}=n._layout._metricsCache;return s(t+r*2)},wO)},[r]),L(()=>{if(!n.scroll)return;let e=t.current?.[cD];if(e){if(!e?._layout){e.layoutComplete.then(()=>e.element(n.index)?.scrollIntoView({block:`nearest`}),wO);return}e.element(n.index)?.scrollIntoView({block:`nearest`})}},[n]),OD(FD({...n,itemHeight:o,auto:e.itemHeight===`auto`})),A`<div
			class="items"
			style="min-height: ${a}px"
			${Mn(e=>t.current=e)}
		>
			<div virtualizer-sizer></div>
			${gD({items:r,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`},customElements.define(`cosmoz-listbox`,U(TO,{styleSheets:[On(PD)]})),EO=({multi:e,...t},n)=>A`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${bD(MD(xO)(t))}
		>${n}</cosmoz-listbox
	>`})),Q,OO,kO=e((()=>{W(),Q=e=>`calc(var(--cz-spacing) * ${e})`,OO=F`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-block;
		max-width: 100%;
		min-width: 0;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${Q(1.5)};
		max-width: 100%;
		min-width: calc(var(--cz-spacing) * 2);
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid
			var(--cosmoz-badge-border-color, var(--cz-color-border-secondary));
		background-color: var(
			--cosmoz-badge-bg-color,
			var(--cz-color-bg-secondary)
		);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${Q(.5)} ${Q(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-brand-50);
		color: var(--cz-color-brand-800);
		border-color: var(--cz-color-brand-300);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-error-200);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-warning-200);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-success-200);
	}

	:host([color='processing']) .badge {
		background-color: var(--cz-color-indigo-100);
		color: var(--cz-color-indigo-800);
		border-color: var(--cz-color-indigo-300);
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${Q(.5)} ${Q(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${Q(.5)} ${Q(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${Q(1)};
	}

	:host([size='lg']) .badge {
		padding: ${Q(1)} ${Q(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${Q(.5)} ${Q(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${Q(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${Q(1)} ${Q(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${Q(2)};
		height: ${Q(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host(:not([dot])) .dot {
		display: none;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) .dot {
		background-color: var(--cz-color-indigo-800);
	}
	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${Q(.5)} ${Q(2.5)} ${Q(.5)} ${Q(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${Q(.5)} ${Q(2)} ${Q(.5)} ${Q(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${Q(1)} ${Q(3)} ${Q(1)} ${Q(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${Q(.5)} ${Q(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${Q(.5)} ${Q(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${Q(1)} ${Q(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${Q(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${Q(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${Q(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${Q(4)};
		height: ${Q(4)};
	}

	:host([type='icon'][size='sm']) ::slotted(svg) {
		width: ${Q(3)};
		height: ${Q(3)};
	}
	:host([type='icon'][size='lg']) ::slotted(svg) {
		width: ${Q(5)};
		height: ${Q(5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${Q(3)};
		height: ${Q(3)};
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) ::slotted(svg) {
		color: var(--cz-color-indigo-800);
	}
`})),AO,jO=e((()=>{zw(),W(),kO(),AO=()=>A`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`,customElements.define(`cosmoz-badge`,U(AO,{styleSheets:[Rw,OO]}))})),MO=e((()=>{jO()})),$,NO,PO=e((()=>{W(),$=e=>`calc(var(--cz-spacing) * ${e})`,NO=F`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	.close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition: opacity 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;
	}

	.close:hover {
		opacity: 1;
	}

	.close:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${$(2.5)};
		height: ${$(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${$(3)};
		height: ${$(3)};
	}

	:host([size='lg']) .close svg {
		width: ${$(3.5)};
		height: ${$(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${$(3.5)};
		height: ${$(3.5)};
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`})),FO,IO=e((()=>{MO(),Fw(),zw(),W(),K(),J(),PO(),FO=e=>{let{color:t,size:n,disabled:r,removable:i}=e,a=()=>{r||e.dispatchEvent(new CustomEvent(`remove`))};return A`<cosmoz-badge
		color=${G(t)}
		size=${G(n)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${q(i,()=>A` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${e=>e.preventDefault()}
					@click=${a}
				>
					${ww()}
				</button>`)}
	</cosmoz-badge>`},customElements.define(`cosmoz-tag`,U(FO,{observedAttributes:[`color`,`size`,`disabled`,`removable`],styleSheets:[Rw,NO]}))})),LO=e((()=>{IO()})),RO,zO=e((()=>{LO(),W(),K(),RO=({content:e,onClear:t,disabled:n,className:r=`chip`,hidden:i,slot:a})=>A`<cosmoz-tag
		class=${G(r)}
		slot=${G(a)}
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		?removable=${!!t&&!n}
		@remove=${t}
		title=${G(typeof e==`string`?e:void 0)}
		>${e}</cosmoz-tag
	>`})),BO,VO=e((()=>{P(),zO(),BO=({value:e,min:t=0,onDeselect:n,textual:r,disabled:i,chipRenderer:a=RO})=>[...e.filter(Boolean).map(o=>a({item:o,content:r(o),onClear:e.length>t&&(()=>n(o)),disabled:i,slot:`control`})),a({item:null,content:A`<span></span>`,className:`badge`,disabled:!0,slot:`control`,hidden:!0})]})),HO,UO=e((()=>{W(),P(),HO=F`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`,customElements.define(`cosmoz-autocomplete-skeleton-span`,U(()=>N,{styleSheets:[HO]}))})),WO,GO=e((()=>{An(),WO=En`
	:host {
		display: block;
		position: relative;
		min-width: calc(var(--cz-spacing) * 9);
	}

	:host([mode='select']) {
		--cosmoz-badge-border-color: transparent;
		--cosmoz-badge-bg-color: transparent;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	:host(:not([variant='inline'])) cosmoz-listbox {
		margin-top: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-input::part(control) {
		display: flex;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label),
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag)::part(label) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-single]::part(input) {
		flex: 0;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
		padding-right: calc(var(--cz-spacing) * 2);
	}

	:host([wrap]) cosmoz-tag {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`})),KO,qO,JO=e((()=>{KO=(e,t=()=>({}))=>{let n={type:e,toString(){return e}};return Object.assign((...e)=>Object.assign(t(...e),n),n)},qO=e=>e.type||e.toString()})),YO,XO,ZO=e((()=>{JO(),YO=e=>Array.isArray(e)?e:[e],XO=(e,t)=>{let n=YO(t),r=(n.every(Array.isArray)?n:[n]).map(([e,t])=>({actions:YO(e).map(qO),handle:t}));return(t=e,n)=>{let i=r.find(e=>e.actions.includes(qO(n)));return i?i.handle(t,n):t}}})),QO=e((()=>{JO(),ZO()})),$O,ek,tk,nk,rk,ik,ak,ok=e((()=>{W(),QO(),$O={pending:`pending`,rejected:`rejected`,resolved:`resolved`},ek={error:void 0,result:void 0,state:$O.pending},tk=KO($O.pending),nk=KO($O.resolved,e=>({result:e})),rk=KO($O.rejected,e=>({error:e})),ik=XO(ek,[[tk,()=>({error:void 0,result:void 0,state:$O.pending})],[nk,(e,{result:t})=>({error:void 0,result:t,state:$O.resolved})],[rk,(e,{error:t})=>({error:t,result:void 0,state:$O.rejected})]]),ak=e=>{let[{error:t,result:n,state:r},i]=Qt(ik,ek);return L(()=>{if(!e)return;let t=!1;return i(tk()),e.then(e=>!t&&i(nk(e)),e=>!t&&i(rk(e))),()=>{t=!0}},[e]),[n,t,r]}})),sk,ck,lk,uk=e((()=>{eO(),aO(),sk=Symbol(`autocomplete.deselect.last`),ck=Symbol(`autocomplete.search.when.selected`),lk=[...iO,[{key:`Backspace`},[sk],{title:`Deselect last`,description:`Remove the last selected item`},{allowInEditable:!0}],[{key:zD},[ck],{title:`Start searching`,description:`Start searching when you start typing when an item is selected`},{allowInEditable:!0}]]})),dk,fk,pk,mk,hk,gk,_k=e((()=>{dk=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/gu,``),fk=(e,t,n)=>{if(!t)return e;let r=dk(t.toLowerCase()),i=[];for(let t of e){let e=dk(n(t).toLowerCase()).indexOf(r);e<0||i.push({item:t,index:e})}return i.sort((e,t)=>e.index-t.index).map(({item:e})=>e)},pk=e=>e===!1||e==null?[]:e,mk=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),hk=[],gk=e=>(...t)=>{let n,r=()=>{n&&cancelAnimationFrame(n)};return r(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),r}})),vk,yk,bk=e((()=>{pO(),lT(),WD(),ok(),eO(),ND(),W(),uk(),_k(),vk=(e,t,n)=>z(r=>{t?.(r),e.dispatchEvent(new CustomEvent(n,{detail:r}))},[t]),yk=({value:e,text:t,mode:n,onChange:r,onText:i,onSelect:a,limit:o,min:s,source:c,textProperty:l,textual:u,valueProperty:d,keepOpened:f,keepQuery:p,preserveOrder:m,defaultIndex:h,externalSearch:g,disabled:_,lazyOpen:v})=>{let y=o==null?void 0:Number(o),b=s==null?void 0:Number(s),ee=n===`select`,x=R(()=>(u??jD)(l),[u,l]),S=cT(),[C,w]=tn(`opened`,!1),T=!t,E=R(()=>t?.trim(),[t]),te=vk(S,i,`text`),D=z(e=>{r?.(e,()=>w(!1));let t=ee?e[0]:e;mk(S,`value`,t)},[r]),[ne,re]=Xt([]),ie=!!(v&&!E),ae=R(()=>ie?Promise.resolve([]):Promise.resolve(typeof c==`function`?c({query:E,active:C}):c).then(pk),[c,C,E,ie]),O=R(()=>uO(e),[e]);L(()=>ae.then(re),[ae]),GD({activity:sk,callback:()=>{let e=uO(O);e.length>(b??0)&&D(e.slice(0,-1))},check:()=>!_&&T&&S.matches(`:focus-within`),element:()=>S},[]),GD({activity:ck,callback:e=>{let t=uO(O),n=y===1;t.length>0&&n&&e.key.length===1&&D(t.slice(0,-1))},allowDefault:!0,check:()=>!_&&T&&S.matches(`:focus-within`),element:()=>S},[y]),L(()=>{!C&&!p&&te(``)},[C,p]),L(()=>{S.toggleAttribute(`opened`,!!C)},[C]);let k=UD({onText:te,onChange:D,value:O,limit:y,min:b,keepQuery:p,keepOpened:f,setOpened:w,onSelect:a,valueProperty:d}),[,,oe]=ak(ae);return{limit:y,opened:C,query:E,textual:x,value:O,source$:ae,loading:oe===`pending`,items:R(()=>{if(!C||ie)return hk;let e=m?ne:[...O,...fO(O,AD(d))(ne)];return g?e:fk(e,E,x)},[ne,C,E,x,T,O,m,d,g,ie]),onToggle:z(e=>{_||w(e.newState===`open`)},[_]),onText:z(e=>{_||(te(e.target.value),w(!0))},[_,te,t,w]),onSelect:z(e=>{if(_)return;k.onSelect?.(e,k);let{onChange:t,onText:n,limit:r,min:i,value:a,keepQuery:o,keepOpened:s,setOpened:c,valueProperty:l}=k;o||n(``),s||c(!1);let u=uO(a),d=AD(l),f=u.some(t=>d(t)===d(e));f&&u.length===i||t((f?fO(e,d)(u):[...u,e]).slice(-r))},[_,k]),onDeselect:z(e=>{_||k.onChange(fO(e,AD(k.valueProperty))(k.value))},[_,k]),defaultIndex:E!==void 0&&E?.length>0?0:h}}})),xk,Sk,Ck=e((()=>{lT(),W(),_k(),xk=e=>{let t=e.shadowRoot.querySelectorAll(`.chip`),n=e.shadowRoot.querySelector(`.badge`);if(!n)return;n.hidden=!0;for(let e of t)e.hidden=!1;let r=e.shadowRoot.querySelector(`cosmoz-input`).shadowRoot?.querySelector(`.control`)?.getBoundingClientRect(),i;for(i=0;i<t.length;i++){let e=t[i].getBoundingClientRect();if(!(e.x+e.width<=r.x+r.width-24))break}let a=t.length-i;for(n.querySelector(`span`).textContent=`+`+a.toString(),n.hidden=a<1;i<t.length;i++)t[i].hidden=!0},Sk=({value:e,opened:t,wrap:n,limit:r})=>{let i=cT(),a=!(n||r===1)&&e.length>0,o=R(()=>gk(()=>xk(i)),[]),[s,c]=Xt(0);Jt(()=>{if(!a)return;let e=i.shadowRoot.querySelector(`cosmoz-input`),t=new ResizeObserver(e=>{c(e[0].contentRect.width)});return t.observe(e),()=>t.disconnect()},[a]),Jt(()=>a?o():void 0,[a,s,t,e])}})),wk,Tk,Ek,Dk,Ok,kk=e((()=>{zn(),Fw(),NT(),jE(),P(),PE(),K(),Lw(),HE(),J(),DO(),VO(),UO(),GO(),bk(),Ck(),wk=[`input`,`control`,`label`,`line`,`error`,`wrap`].map(e=>`${e}: input-${e}`).join(),Tk=({opened:e,isSingle:t,showSingle:n,hasResultsOrQuery:r})=>!e||t&&!n?!1:r,Ek=e=>{let{variant:t,opened:n,invalid:r,errorMessage:i,hint:a,label:o,placeholder:s,required:c,disabled:l,textual:u,text:d,onText:f,onToggle:p,onDeselect:m,value:h,limit:g,min:_,showSingle:v,items:y,source$:b,loading:ee,chipRenderer:x,mode:S}=e,C=g===1,w=C&&h?.[0]!=null,T=ee||y.length>0||d!=null&&d.length>0;return A`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${l}
			.opened=${n}
			@dropdown-toggle=${p}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${o}
				.placeholder=${w?void 0:s}
				hint=${G(a)}
				variant=${G(t)}
				?readonly=${w}
				?disabled=${l}
				?required=${c}
				?invalid=${NE([b,r],()=>VE(b.then(()=>r,()=>!0),r))}
				.errorMessage=${NE([b,i],()=>VE(b.then(()=>i,e=>e.message),i))}
				.value=${Iw(d)}
				@value-changed=${f}
				autocomplete="off"
				exportparts=${wk}
				?data-one=${C}
				?data-single=${w}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${q(S===`select`,()=>es({styles:`margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);`,width:`16`,height:`16`}))}
				</slot>
				${BO({value:h,min:_,isOne:C,onDeselect:m,textual:u,disabled:l,chipRenderer:x})}
			</cosmoz-input>

			${q(Tk({opened:n,isSingle:w,showSingle:v,hasResultsOrQuery:T}),()=>EO({...e,items:y,multi:!C},q(ee,()=>A`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>q(d!=null&&d.length>0&&y.length===0,()=>A`<slot name="no-result">
											<span class="no-result">${AE(`No results found`)}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Dk=e=>{let t={...e,...yk(e)};return Sk(t),Ek(t)},Ok=[`variant`,`disabled`,`invalid`,`required`,`hint`,`text-property`,`value-property`,`limit`,`min`,`show-single`,`preserve-order`,`keep-opened`,`keep-query`,`default-index`,`external-search`,`item-height`,`item-limit`,`wrap`,`lazy-open`,`mode`]})),Ak,jk,Mk,Nk=e((()=>{An(),W(),kk(),Ak=e=>{let{onChange:t,onText:n,mode:r,...i}=e,a=r===`select`,[o,s]=tn(`value`);return L(()=>{e.onChange!=null&&console.warn(`onChange is deprecated; use value-changed and lift instead`)},[]),Dk({...i,...a&&{limit:1,min:1,showSingle:!0},mode:r,value:o,onChange:z((e,...n)=>{s(a?e[0]:e),t?.(e,...n)},[t,a]),onText:z(t=>{e.text=t,n?.(t)},[n])})},jk=[On(WO)],Mk={mode:`open`,delegatesFocus:!0},customElements.define(`cosmoz-autocomplete-ui`,U(Dk,{observedAttributes:Ok,styleSheets:jk,shadowRootInit:Mk})),customElements.define(`cosmoz-autocomplete`,U(Ak,{observedAttributes:Ok,styleSheets:jk,shadowRootInit:Mk}))})),Pk,Fk=e((()=>{W(),Pk=F`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E`}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`})),Ik,Lk,Rk=e((()=>{Ik=e=>({item:e,excluded:!1}),Lk=e=>e.item})),zk,Bk=e((()=>{DD(),W(),Nk(),Rk(),zk=e=>{let[t,n]=tn(e);return{value:t,setExcludingValue:z(e=>n(t=>{let n=ED(e,t?.map(Lk));if(!n)return;if(!t)return n.map(Ik);let r=t.reduce((e,t)=>n.includes(t.item)?[...e,t]:t.excluded?e:[...e,{...t,excluded:!0}],[]),i=n.filter(e=>!t.some(t=>t.item===e)).map(Ik);return[...r,...i]}),[]),setValue:n}}})),Vk,Hk,Uk,Wk,Gk,Kk=e((()=>{LO(),W(),K(),Nk(),kk(),Fk(),Bk(),Rk(),Vk=(e,t)=>e?.some(e=>e.item===t&&e.excluded),Hk=(e,t)=>t&&Vk(e,t)?`error`:`gray`,Uk=e=>(t,n,{highlight:r,select:i,textual:a,isSelected:o})=>{let s=a(t);return A`<div
				class="item"
				role="option"
				part="option ${Hk(e,t)}"
				?aria-selected=${o(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
			>
				${s}
			</div>
			<div class="sizer" virtualizer-sizer>${s}</div>`},Wk=(e,t)=>({item:n,content:r,disabled:i,hidden:a,className:o=`chip`,slot:s})=>A`<cosmoz-tag
			class=${G(o)}
			slot=${G(s)}
			exportparts="chip-text, chip-clear"
			color=${Hk(e,n)}
			?disabled=${i}
			?hidden=${a}
			?removable=${!!n}
			@remove=${()=>t(n)}
			title=${G(typeof r==`string`?r:void 0)}
		>
			${r}
		</cosmoz-tag>`,Gk=e=>{let{value:t,setValue:n,setExcludingValue:r}=zk(`value`),[i,a]=tn(`text`),o=z(e=>n(t=>t?.filter(t=>t.item!==e)),[]);return Dk({...e,value:R(()=>t?.map(Lk),[t]),onChange:z(e=>{r(e)},[]),text:i,onText:z(e=>{a(e)},[]),itemRenderer:R(()=>Uk(t),[t]),chipRenderer:R(()=>Wk(t,o),[t,o])})},customElements.define(`cosmoz-autocomplete-excluding`,U(Gk,{observedAttributes:Ok,styleSheets:[WO,Pk],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),qk=e((()=>{Nk(),Kk(),uk(),aO()}));export{yu as $,Z as A,Zt as At,tT as B,zt as Bt,KE as C,H as Ct,NE as D,rn as Dt,VE as E,B as Et,fT as F,z as Ft,Tw as G,Ge as Gt,zw as H,F as Ht,sT as I,Gt as It,Sw as J,Fe as Jt,ww as K,Ve as Kt,oT as L,R as Lt,NT as M,Yt as Mt,pT as N,Jt as Nt,PE as O,nn as Ot,dT as P,Kt as Pt,Su as Q,j as Qt,rT as R,Ht as Rt,gD as S,dn as St,HE as T,on as Tt,Rw as U,kt as Ut,$w as V,L as Vt,Fw as W,et as Wt,zu as X,A as Xt,Ru as Y,M as Yt,xu as Z,P as Zt,TD as _,W as _t,pO as a,J as at,wD as b,wn as bt,QD as c,G as ct,WD as d,Mn as dt,bu as et,UD as f,An as ft,jD as g,En as gt,MD as h,Dn as ht,uO as i,ts as it,AE as j,Xt as jt,jE as k,tn as kt,KD as l,zn as lt,AD as m,On as mt,lk as n,ls as nt,eO as o,q as ot,ND as p,kn as pt,Cw as q,N as qt,uk as r,es as rt,$D as s,K as st,qk as t,cs as tt,GD as u,Nn as ut,DD as v,U as vt,qE as w,V as wt,_D as x,un as xt,ED as y,Cn as yt,nT as z,Vt as zt};