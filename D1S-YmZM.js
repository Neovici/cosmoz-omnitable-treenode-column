System.register(["./IdDjdMaM.js","./VvJZPoe8.js"],(function(e){"use strict";var t,r,n,o,i,a,s,c,u,l,f,p,d,h,m,g,v,y,b,w,O,x,k,C,T,E,R;return{setters:[function(e){t=e.n,r=e.d,n=e.Z,o=e.i,i=e._,a=e.g,s=e.a,c=e.c,u=e.W,l=e.J,f=e.t,p=e.m,d=e.j,h=e.l,m=e.k,g=e.o,v=e.p,y=e.s,b=e.q,w=e.u,O=e.v,x=e.w,k=e.x,C=e.y,T=e.z,E=e.B},function(e){R=e.r}],execute:function(){var S="undefined"!=typeof Element,P="function"==typeof Map,j="function"==typeof Set,A="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function H(e,r){if(e===r)return!0;if(e&&r&&"object"==t(e)&&"object"==t(r)){if(e.constructor!==r.constructor)return!1;var n,o,i,a;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!H(e[o],r[o]))return!1;return!0}if(P&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(a=e.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;for(a=e.entries();!(o=a.next()).done;)if(!H(o.value[1],r.get(o.value[0])))return!1;return!0}if(j&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(a=e.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;return!0}if(A&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(e[o]!==r[o])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof r.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof r.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;if(S&&e instanceof Element)return!1;for(o=n;0!=o--;)if(("_owner"!==i[o]&&"__v"!==i[o]&&"__o"!==i[o]||!e.$$typeof)&&!H(e[i[o]],r[i[o]]))return!1;return!0}return e!=e&&r!=r}var M=function(e,t){try{return H(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}};function B(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function D(e){return e instanceof L(e).Element||e instanceof Element}function W(e){return e instanceof L(e).HTMLElement||e instanceof HTMLElement}function V(e){return"undefined"!=typeof ShadowRoot&&(e instanceof L(e).ShadowRoot||e instanceof ShadowRoot)}var U={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];W(o)&&B(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});W(n)&&B(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function z(e){return e.split("-")[0]}var F=Math.max,N=Math.min,q=Math.round;function X(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function Y(){return!/^((?!chrome|android).)*safari/i.test(X())}function I(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&W(e)&&(o=e.offsetWidth>0&&q(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&q(n.height)/e.offsetHeight||1);var a=(D(e)?L(e):window).visualViewport,s=!Y()&&r,c=(n.left+(s&&a?a.offsetLeft:0))/o,u=(n.top+(s&&a?a.offsetTop:0))/i,l=n.width/o,f=n.height/i;return{width:l,height:f,top:u,right:c+l,bottom:u+f,left:c,x:c,y:u}}function _(e){var t=I(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function $(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&V(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function J(e){return L(e).getComputedStyle(e)}function Z(e){return["table","td","th"].indexOf(B(e))>=0}function G(e){return((D(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===B(e)?e:e.assignedSlot||e.parentNode||(V(e)?e.host:null)||G(e)}function Q(e){return W(e)&&"fixed"!==J(e).position?e.offsetParent:null}function ee(e){for(var t=L(e),r=Q(e);r&&Z(r)&&"static"===J(r).position;)r=Q(r);return r&&("html"===B(r)||"body"===B(r)&&"static"===J(r).position)?t:r||function(e){var t=/firefox/i.test(X());if(/Trident/i.test(X())&&W(e)&&"fixed"===J(e).position)return null;var r=K(e);for(V(r)&&(r=r.host);W(r)&&["html","body"].indexOf(B(r))<0;){var n=J(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function re(e,t,r){return F(e,N(t,r))}function ne(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function oe(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var ie={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=z(r.placement),c=te(s),u=[h,m].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return ne("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:oe(e,x))}(o.padding,r),f=_(i),p="y"===c?d:h,g="y"===c?v:m,y=r.rects.reference[u]+r.rects.reference[c]-a[c]-r.rects.popper[u],b=a[c]-r.rects.reference[c],w=ee(i),O=w?"y"===c?w.clientHeight||0:w.clientWidth||0:0,k=y/2-b/2,C=l[p],T=O-f[u]-l[g],E=O/2-f[u]/2+k,R=re(C,E,T),S=c;r.modifiersData[n]=((t={})[S]=R,t.centerOffset=R-E,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&$(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var se={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ce(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,f=e.isFixed,p=a.x,y=void 0===p?0:p,b=a.y,w=void 0===b?0:b,O="function"==typeof l?l({x:y,y:w}):{x:y,y:w};y=O.x,w=O.y;var x=a.hasOwnProperty("x"),k=a.hasOwnProperty("y"),C=h,T=d,E=window;if(u){var R=ee(r),S="clientHeight",P="clientWidth";R===L(r)&&"static"!==J(R=G(r)).position&&"absolute"===s&&(S="scrollHeight",P="scrollWidth"),(o===d||(o===h||o===m)&&i===g)&&(T=v,w-=(f&&R===E&&E.visualViewport?E.visualViewport.height:R[S])-n.height,w*=c?1:-1),o!==h&&(o!==d&&o!==v||i!==g)||(C=m,y-=(f&&R===E&&E.visualViewport?E.visualViewport.width:R[P])-n.width,y*=c?1:-1)}var j,A=Object.assign({position:s},u&&se),H=!0===l?function(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:q(r*o)/o||0,y:q(n*o)/o||0}}({x:y,y:w},L(r)):{x:y,y:w};return y=H.x,w=H.y,c?Object.assign({},A,((j={})[T]=k?"0":"",j[C]=x?"0":"",j.transform=(E.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",j)):Object.assign({},A,((t={})[T]=k?w+"px":"",t[C]=x?y+"px":"",t.transform="",t))}var ue={passive:!0},le={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return le[e]}))}var pe={start:"end",end:"start"};function de(e){return e.replace(/start|end/g,(function(e){return pe[e]}))}function he(e){var t=L(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function me(e){return I(G(e)).left+he(e).scrollLeft}function ge(e){var t=J(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function ve(e){return["html","body","#document"].indexOf(B(e))>=0?e.ownerDocument.body:W(e)&&ge(e)?e:ve(K(e))}function ye(e,t){var r;void 0===t&&(t=[]);var n=ve(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=L(n),a=o?[i].concat(i.visualViewport||[],ge(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(ye(K(a)))}function be(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function we(e,t,r){return t===T?be(function(e,t){var r=L(e),n=G(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=Y();(u||!u&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+me(e),y:c}}(e,r)):D(t)?function(e,t){var r=I(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):be(function(e){var t,r=G(e),n=he(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=F(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=F(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+me(e),c=-n.scrollTop;return"rtl"===J(o||r).direction&&(s+=F(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(G(e)))}function Oe(e,t,r,n){var o="clippingParents"===t?function(e){var t=ye(K(e)),r=["absolute","fixed"].indexOf(J(e).position)>=0&&W(e)?ee(e):e;return D(r)?t.filter((function(e){return D(e)&&$(e,r)&&"body"!==B(e)})):[]}(e):[].concat(t),i=[].concat(o,[r]),a=i[0],s=i.reduce((function(t,r){var o=we(e,r,n);return t.top=F(o.top,t.top),t.right=N(o.right,t.right),t.bottom=N(o.bottom,t.bottom),t.left=F(o.left,t.left),t}),we(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function xe(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?z(o):null,a=o?ae(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case d:t={x:s,y:r.y-n.height};break;case v:t={x:s,y:r.y+r.height};break;case m:t={x:r.x+r.width,y:c};break;case h:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var u=i?te(i):null;if(null!=u){var l="y"===u?"height":"width";switch(a){case y:t[u]=t[u]-(r[l]/2-n[l]/2);break;case g:t[u]=t[u]+(r[l]/2-n[l]/2)}}return t}function ke(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.strategy,a=void 0===i?e.strategy:i,s=r.boundary,c=void 0===s?E:s,u=r.rootBoundary,l=void 0===u?T:u,f=r.elementContext,p=void 0===f?b:f,h=r.altBoundary,g=void 0!==h&&h,y=r.padding,w=void 0===y?0:y,O=ne("number"!=typeof w?w:oe(w,x)),C=p===b?k:b,R=e.rects.popper,S=e.elements[g?C:p],P=Oe(D(S)?S:S.contextElement||G(e.elements.popper),c,l,a),j=I(e.elements.reference),A=xe({reference:j,element:R,strategy:"absolute",placement:o}),H=be(Object.assign({},R,A)),M=p===b?H:j,B={top:P.top-M.top+O.top,bottom:M.bottom-P.bottom+O.bottom,left:P.left-M.left+O.left,right:M.right-P.right+O.right},L=e.modifiersData.offset;if(p===b&&L){var W=L[o];Object.keys(B).forEach((function(e){var t=[m,v].indexOf(e)>=0?1:-1,r=[d,v].indexOf(e)>=0?"y":"x";B[e]+=W[r]*t}))}return B}var Ce={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,u=r.padding,l=r.boundary,f=r.rootBoundary,p=r.altBoundary,g=r.flipVariations,b=void 0===g||g,k=r.allowedAutoPlacements,T=t.options.placement,E=z(T),R=c||(E!==T&&b?function(e){if(z(e)===w)return[];var t=fe(e);return[de(e),t,de(t)]}(T):[fe(T)]),S=[T].concat(R).reduce((function(e,r){return e.concat(z(r)===w?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,u=void 0===c?O:c,l=ae(n),f=l?s?C:C.filter((function(e){return ae(e)===l})):x,p=f.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,r){return t[r]=ke(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[z(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:l,rootBoundary:f,padding:u,flipVariations:b,allowedAutoPlacements:k}):r)}),[]),P=t.rects.reference,j=t.rects.popper,A=new Map,H=!0,M=S[0],B=0;B<S.length;B++){var L=S[B],D=z(L),W=ae(L)===y,V=[d,v].indexOf(D)>=0,U=V?"width":"height",F=ke(t,{placement:L,boundary:l,rootBoundary:f,altBoundary:p,padding:u}),N=V?W?m:h:W?v:d;P[U]>j[U]&&(N=fe(N));var q=fe(N),X=[];if(i&&X.push(F[D]<=0),s&&X.push(F[N]<=0,F[q]<=0),X.every((function(e){return e}))){M=L,H=!1;break}A.set(L,X)}if(H)for(var Y=function(e){var t=S.find((function(t){var r=A.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},I=b?3:1;I>0&&"break"!==Y(I);I--);t.placement!==M&&(t.modifiersData[n]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Te(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ee(e){return[d,m,v,h].some((function(t){return e[t]>=0}))}var Re={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=O.reduce((function(e,r){return e[r]=function(e,t,r){var n=z(e),o=[h,d].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[h,m].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=a}},Se={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,u=r.rootBoundary,l=r.altBoundary,f=r.padding,p=r.tether,g=void 0===p||p,b=r.tetherOffset,w=void 0===b?0:b,O=ke(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),x=z(t.placement),k=ae(t.placement),C=!k,T=te(x),E="x"===T?"y":"x",R=t.modifiersData.popperOffsets,S=t.rects.reference,P=t.rects.popper,j="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,A="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(R){if(i){var B,L="y"===T?d:h,D="y"===T?v:m,W="y"===T?"height":"width",V=R[T],U=V+O[L],q=V-O[D],X=g?-P[W]/2:0,Y=k===y?S[W]:P[W],I=k===y?-P[W]:-S[W],$=t.elements.arrow,J=g&&$?_($):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=Z[L],K=Z[D],Q=re(0,S[W],J[W]),ne=C?S[W]/2-X-Q-G-A.mainAxis:Y-Q-G-A.mainAxis,oe=C?-S[W]/2+X+Q+K+A.mainAxis:I+Q+K+A.mainAxis,ie=t.elements.arrow&&ee(t.elements.arrow),se=ie?"y"===T?ie.clientTop||0:ie.clientLeft||0:0,ce=null!=(B=null==H?void 0:H[T])?B:0,ue=V+oe-ce,le=re(g?N(U,V+ne-ce-se):U,V,g?F(q,ue):q);R[T]=le,M[T]=le-V}if(s){var fe,pe="x"===T?d:h,de="x"===T?v:m,he=R[E],me="y"===E?"height":"width",ge=he+O[pe],ve=he-O[de],ye=-1!==[d,h].indexOf(x),be=null!=(fe=null==H?void 0:H[E])?fe:0,we=ye?ge:he-S[me]-P[me]-be+A.altAxis,Oe=ye?he+S[me]+P[me]-be-A.altAxis:ve,xe=g&&ye?function(e,t,r){var n=re(e,t,r);return n>r?r:n}(we,he,Oe):re(g?we:ge,he,g?Oe:ve);R[E]=xe,M[E]=xe-he}t.modifiersData[n]=M}},requiresIfExists:["offset"]};function Pe(e,t,r){void 0===r&&(r=!1);var n,o,i=W(t),a=W(t)&&function(e){var t=e.getBoundingClientRect(),r=q(t.width)/e.offsetWidth||1,n=q(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=G(t),c=I(e,a,r),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!r)&&(("body"!==B(t)||ge(s))&&(u=(n=t)!==L(n)&&W(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:he(n)),W(t)?((l=I(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=me(s))),{x:c.left+u.scrollLeft-l.x,y:c.top+u.scrollTop-l.y,width:c.width,height:c.height}}function je(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var Ae={placement:"bottom",modifiers:[],strategy:"absolute"};function He(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var Me=function(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?Ae:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ae,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;f(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:D(e)?ye(e):e.contextElement?ye(e.contextElement):[],popper:ye(t)};var a,u,d=function(e){var t=je(e);return p.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,s.options.modifiers),u=a.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:l,options:n});c.push(i||function(){})}})),l.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,r=e.popper;if(He(t,r)){s.rects={reference:Pe(t,ee(r),"fixed"===s.options.strategy),popper:_(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:l})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){f(),u=!0}};if(!He(e,t))return l;function f(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=L(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",r.update,ue)})),s&&c.addEventListener("resize",r.update,ue),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",r.update,ue)})),s&&c.removeEventListener("resize",r.update,ue)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=xe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,u={placement:z(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},U,Re,Ce,Se,ie,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ke(t,{elementContext:"reference"}),s=ke(t,{altBoundary:!0}),c=Te(a,n),u=Te(s,o,i),l=Ee(c),f=Ee(u);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]}),Be=r.exports.createContext(),Le=r.exports.createContext();function De(e){var t=e.children,n=r.exports.useState(null),o=n[0],i=n[1],a=r.exports.useRef(!1);r.exports.useEffect((function(){return function(){a.current=!0}}),[]);var s=r.exports.useCallback((function(e){a.current||i(e)}),[]);return r.exports.createElement(Be.Provider,{value:o},r.exports.createElement(Le.Provider,{value:s},t))}var We=function(e){return Array.isArray(e)?e[0]:e},Ve=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Ue=function(e,t){if("function"==typeof e)return Ve(e,t);null!=e&&(e.current=t)},ze=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},Fe="undefined"!=typeof window&&window.document&&window.document.createElement?r.exports.useLayoutEffect:r.exports.useEffect,Ne=[],qe=function(){},Xe=function(){return Promise.resolve(null)},Ye=[];function Ie(e){var t=e.placement,n=void 0===t?"bottom":t,o=e.strategy,i=void 0===o?"absolute":o,a=e.modifiers,s=void 0===a?Ye:a,c=e.referenceElement,u=e.onFirstUpdate,l=e.innerRef,f=e.children,p=r.exports.useContext(Be),d=r.exports.useState(null),h=d[0],m=d[1],g=r.exports.useState(null),v=g[0],y=g[1];r.exports.useEffect((function(){Ue(l,h)}),[l,h]);var b=r.exports.useMemo((function(){return{placement:n,strategy:i,onFirstUpdate:u,modifiers:[].concat(s,[{name:"arrow",enabled:null!=v,options:{element:v}}])}}),[n,i,u,s,v]),w=function(e,t,n){void 0===n&&(n={});var o=r.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Ne},a=r.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],u=r.exports.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);R.exports.flushSync((function(){c({styles:ze(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:ze(r.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),l=r.exports.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return M(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),f=r.exports.useRef();return Fe((function(){f.current&&f.current.setOptions(l)}),[l]),Fe((function(){if(null!=e&&null!=t){var r=(n.createPopper||Me)(e,t,l);return f.current=r,function(){r.destroy(),f.current=null}}}),[e,t,n.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}(c||p,h,b),O=w.state,x=w.styles,k=w.forceUpdate,C=w.update,T=r.exports.useMemo((function(){return{ref:m,style:x.popper,placement:O?O.placement:n,hasPopperEscaped:O&&O.modifiersData.hide?O.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:O&&O.modifiersData.hide?O.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:x.arrow,ref:y},forceUpdate:k||qe,update:C||Xe}}),[m,y,n,O,x,C,k]);return We(f)(T)}function _e(e){var t=e.children,n=e.innerRef,o=r.exports.useContext(Le),i=r.exports.useCallback((function(e){Ue(n,e),Ve(o,e)}),[n,o]);return r.exports.useEffect((function(){return function(){return Ue(n,null)}}),[]),r.exports.useEffect((function(){}),[o]),We(t)({ref:i})}var $e=n.createContext({}),Je=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},Ze=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},Ge=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),a({},e,{style:a({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),a({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Je(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Je(t.props.hideTooltip,e.onMouseLeave)},{style:a({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}o(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},r.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},r.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},r.render=function(){var e=this.props,t=e.arrowProps,r=e.placement,o=e.tooltip;return n.createElement($e.Provider,{value:this.contextValue},o({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:r,tooltipRef:this.getTooltipRef}))},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(r.exports.Component);Ge.contextType=$e;var Ke=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=a({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),a({},e,t.isTriggeredBy("click")&&{onClick:Je(t.clickToggle,e.onClick),onTouchEnd:Je(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Je(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&a({onMouseEnter:Je(t.showTooltip,e.onMouseEnter),onMouseLeave:Je(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Je(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Je(t.showTooltip,e.onFocus),onBlur:Je(t.hideTooltip,e.onBlur)})},t}o(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.clearScheduled()},r.render=function(){var e=this,t=this.props,r=t.children,o=t.tooltip,s=t.placement,c=t.trigger,u=t.getTriggerRef,l=t.modifiers,f=t.closeOnReferenceHidden,p=t.usePortal,d=t.portalContainer,h=t.followCursor,m=t.getTooltipRef,g=t.mutationObserverOptions,v=i(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=n.createElement(Ie,a({innerRef:m,placement:s,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(l)},v),(function(t){var r=t.ref,i=t.style,s=t.placement,u=t.arrowProps,l=t.isReferenceHidden,p=t.update;if(h&&e.popperOffset){var d=e.state,m=d.pageX,v=d.pageY,y=e.popperOffset,b=y.width,w=y.height,O=m+b>window.pageXOffset+document.body.offsetWidth?m-b:m,x=v+w>window.pageYOffset+document.body.offsetHeight?v-w:v;i.transform="translate3d("+O+"px, "+x+"px, 0"}return n.createElement(Ge,a({arrowProps:u,closeOnReferenceHidden:f,isReferenceHidden:l,placement:s,update:p,style:i,tooltip:o,trigger:c,mutationObserverOptions:g},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:r}))}));return n.createElement(De,null,n.createElement(_e,{innerRef:u},(function(t){var n=t.ref;return r({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(p?R.exports.createPortal(y,d):y))},r.isControlled=function(){return void 0!==this.props.tooltipShown},r.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(r.exports.Component);Ke.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:Ze()?document.body:null,trigger:"hover",usePortal:Ze(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Qe=Ke;function et(){return et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},et.apply(this,arguments)}var tt,rt,nt=s(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),ot=c.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(nt("top",n,-8,"auto"),"px"),top:"".concat(nt("bottom",n,-8,"auto"),"px"),right:"".concat(nt("left",n,-8,"auto"),"px"),left:"".concat(nt("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(nt("top",n,"0",8),"px"),borderTopWidth:"".concat(nt("bottom",n,"0",8),"px"),borderRightWidth:"".concat(nt("left",n,"0",8),"px"),borderLeftWidth:"".concat(nt("right",n,"0",8),"px"),borderTopColor:nt("top",n,t.color[r]||r||"light"===t.base?u(t.background.app):l(t.background.app),"transparent"),borderBottomColor:nt("bottom",n,t.color[r]||r||"light"===t.base?u(t.background.app):l(t.background.app),"transparent"),borderLeftColor:nt("left",n,t.color[r]||r||"light"===t.base?u(t.background.app):l(t.background.app),"transparent"),borderRightColor:nt("right",n,t.color[r]||r||"light"===t.base?u(t.background.app):l(t.background.app),"transparent")}})),it=c.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?u(t.background.app):l(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),at=function(e){var t=e.placement,r=e.hasChrome,o=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return n.createElement(it,et({hasChrome:r,placement:t,ref:a},u,{color:c}),r&&n.createElement(ot,et({placement:t,ref:s},i,{color:c})),o)};function st(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ct(){return ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ct.apply(this,arguments)}function ut(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function lt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}at.displayName="Tooltip",at.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var ft=f.document,pt=c.div(tt||(tt=lt(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),dt=c.g(rt||(rt=lt(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),ht=e("WithTooltipPure",(function(e){var t=e.svg,r=e.trigger;e.closeOnClick;var o=e.placement,i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,u=e.tooltipShown,l=e.onVisibilityChange,f=ut(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),p=t?dt:pt;return n.createElement(Qe,{placement:o,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:l,tooltip:function(e){var t=e.getTooltipProps,r=e.getArrowProps,o=e.tooltipRef,i=e.arrowRef,c=e.placement;return n.createElement(at,ct({hasChrome:a,placement:c,tooltipRef:o,arrowRef:i,arrowProps:r()},t()),"function"==typeof s?s({onHide:function(){return l(!1)}}):s)}},(function(e){var t=e.getTriggerProps,r=e.triggerRef;return n.createElement(p,ct({ref:r},t(),f),c)}))}));ht.displayName="WithTooltipPure",ht.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var mt=function(e){var t=e.startOpen,o=e.onVisibilityChange,i=ut(e,["startOpen","onVisibilityChange"]),a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return st(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?st(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.exports.useState(t||!1),2),s=a[0],c=a[1],u=r.exports.useCallback((function(e){o&&!1===o(e)||c(e)}),[o]);return r.exports.useEffect((function(){var e=function(){return u(!1)};ft.addEventListener("keydown",e,!1);var t=Array.from(ft.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){ft.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),n.createElement(ht,ct({},i,{tooltipShown:s,onVisibilityChange:u}))};e({WithToolTipState:mt,WithTooltip:mt}),mt.displayName="WithToolTipState"}}}));
