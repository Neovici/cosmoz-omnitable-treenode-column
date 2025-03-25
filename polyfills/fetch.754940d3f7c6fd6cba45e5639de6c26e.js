!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||{},r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in e,a="ArrayBuffer"in e;if(a)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function p(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=d(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}if(o)return this.blob().then(p);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t,e,r,n,o,i=d(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),n=/charset=([A-Za-z0-9_-]+)/.exec(t.type),o=n?n[1]:"utf-8",e.readAsText(t,o),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=f(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[f(t)]},h.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},h.prototype.set=function(t,e){this.map[f(t)]=c(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),l(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),l(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),l(t)},n&&(h.prototype[Symbol.iterator]=h.prototype.entries);var m=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function w(t,r){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,o,i=(r=r||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,r.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=r.credentials||this.credentials||"same-origin",!r.headers&&this.headers||(this.headers=new h(r.headers)),this.method=(n=r.method||this.method||"GET",o=n.toUpperCase(),m.indexOf(o)>-1?o:n),this.mode=r.mode||this.mode||null,this.signal=r.signal||this.signal||function(){if("AbortController"in e)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==r.cache&&"no-cache"!==r.cache)){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},v.call(w.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:200,statusText:""});return t.ok=!1,t.status=0,t.type="error",t};var O=[301,302,303,307,308];E.redirect=function(t,e){if(-1===O.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function A(r,n){return new Promise((function(i,s){var u=new w(r,n);if(u.signal&&u.signal.aborted)return s(new t.DOMException("Aborted","AbortError"));var l=new XMLHttpRequest;function d(){l.abort()}if(l.onload=function(){var t,e,r={statusText:l.statusText,headers:(t=l.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();try{e.append(n,o)}catch(t){console.warn("Response "+t.message)}}})),e)};0===u.url.indexOf("file://")&&(l.status<200||l.status>599)?r.status=200:r.status=l.status,r.url="responseURL"in l?l.responseURL:r.headers.get("X-Request-URL");var n="response"in l?l.response:l.responseText;setTimeout((function(){i(new E(n,r))}),0)},l.onerror=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},l.ontimeout=function(){setTimeout((function(){s(new TypeError("Network request timed out"))}),0)},l.onabort=function(){setTimeout((function(){s(new t.DOMException("Aborted","AbortError"))}),0)},l.open(u.method,function(t){try{return""===t&&e.location.href?e.location.href:t}catch(e){return t}}(u.url),!0),"include"===u.credentials?l.withCredentials=!0:"omit"===u.credentials&&(l.withCredentials=!1),"responseType"in l&&(o?l.responseType="blob":a&&(l.responseType="arraybuffer")),n&&"object"==typeof n.headers&&!(n.headers instanceof h||e.Headers&&n.headers instanceof e.Headers)){var y=[];Object.getOwnPropertyNames(n.headers).forEach((function(t){y.push(f(t)),l.setRequestHeader(t,c(n.headers[t]))})),u.headers.forEach((function(t,e){-1===y.indexOf(e)&&l.setRequestHeader(e,t)}))}else u.headers.forEach((function(t,e){l.setRequestHeader(e,t)}));u.signal&&(u.signal.addEventListener("abort",d),l.onreadystatechange=function(){4===l.readyState&&u.signal.removeEventListener("abort",d)}),l.send(void 0===u._bodyInit?null:u._bodyInit)}))}A.polyfill=!0,e.fetch||(e.fetch=A,e.Headers=h,e.Request=w,e.Response=E),t.Headers=h,t.Request=w,t.Response=E,t.fetch=A,Object.defineProperty(t,"__esModule",{value:!0})})),function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(t,e,r){return e=s(e),function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,u()?Reflect.construct(e,r||[],s(t).constructor):e.apply(t,r))}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var t=n.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},a.apply(null,arguments)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function u(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(u=function(){return!!t})()}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function c(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}!function(t){t.AbortSignal,t.AbortController}("undefined"!=typeof self?self:global);var l=function(){return o((function t(){r(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}),[{key:"addEventListener",value:function(t,e,r){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push({callback:e,options:r})}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var r=this.listeners[t],n=0,o=r.length;n<o;n++)if(r[n].callback===e)return void r.splice(n,1)}},{key:"dispatchEvent",value:function(t){var e=this;if(t.type in this.listeners){for(var r=this.listeners[t.type].slice(),n=function(){var n=r[o];try{n.callback.call(e,t)}catch(t){Promise.resolve().then((function(){throw t}))}n.options&&n.options.once&&e.removeEventListener(t.type,n.callback)},o=0,i=r.length;o<i;o++)n();return!t.defaultPrevented}}}])}(),h=function(t){function n(){var t;return r(this,n),(t=e(this,n)).listeners||l.call(t),Object.defineProperty(t,"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(t,"onabort",{value:null,writable:!0,configurable:!0}),Object.defineProperty(t,"reason",{value:void 0,writable:!0,configurable:!0}),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(n,t),o(n,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){var e,r,o,i,u;"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),(e=n,r="dispatchEvent",o=this,u=a(s(1&(i=3)?e.prototype:e),r,o),2&i&&"function"==typeof u?function(t){return u.apply(o,t)}:u)([t])}},{key:"throwIfAborted",value:function(){var t=this.aborted,e=this.reason;if(t)throw void 0===e?"Aborted":e}}],[{key:"timeout",value:function(t){var e=new d;return setTimeout((function(){return e.abort(new DOMException("This signal is timeout in ".concat(t,"ms"),"TimeoutError"))}),t),e.signal}},{key:"any",value:function(t){var e=new d;function r(){e.abort(this.reason),function(){var e,n=i(t);try{for(n.s();!(e=n.n()).done;){e.value.removeEventListener("abort",r)}}catch(t){n.e(t)}finally{n.f()}}()}var n,o=i(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a.aborted){e.abort(a.reason);break}a.addEventListener("abort",r)}}catch(t){o.e(t)}finally{o.f()}return e.signal}}])}(l),d=function(){return o((function t(){r(this,t),Object.defineProperty(this,"signal",{value:new h,writable:!0,configurable:!0})}),[{key:"abort",value:function(t){var e=function(t){if(void 0===t)if("undefined"==typeof document)(t=new Error("This operation was aborted")).name="AbortError";else try{t=new DOMException("signal is aborted without reason"),Object.defineProperty(t,"name",{value:"AbortError"})}catch(e){(t=new Error("This operation was aborted")).name="AbortError"}return t}(t),r=function(t){var e;try{e=new Event("abort")}catch(t){"undefined"!=typeof document?document.createEvent?(e=document.createEvent("Event")).initEvent("abort",!1,!1):(e=document.createEventObject()).type="abort":e={type:"abort",bubbles:!1,cancelable:!1}}return e.reason=t,e}(e);this.signal.reason=e,this.signal.dispatchEvent(r)}},{key:"toString",value:function(){return"[object AbortController]"}}])}();function y(t){return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof t.Request&&!t.Request.prototype.hasOwnProperty("signal")||!t.AbortController}"undefined"!=typeof Symbol&&Symbol.toStringTag&&(d.prototype[Symbol.toStringTag]="AbortController",h.prototype[Symbol.toStringTag]="AbortSignal"),function(t){if(y(t))if(t.fetch){var e=function(t){"function"==typeof t&&(t={fetch:t});var e=t,r=e.fetch,n=e.Request,o=void 0===n?r.Request:n,i=e.AbortController,a=e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,s=void 0!==a&&a;if(!y({fetch:r,Request:o,AbortController:i,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:s}))return{fetch:r,Request:u};var u=o;(u&&!u.prototype.hasOwnProperty("signal")||s)&&((u=function(t,e){var r;e&&e.signal&&(r=e.signal,delete e.signal);var n=new o(t,e);return r&&Object.defineProperty(n,"signal",{writable:!1,enumerable:!1,configurable:!0,value:r}),n}).prototype=o.prototype);var f=r;return{fetch:function(t,e){var r=u&&u.prototype.isPrototypeOf(t)?t.signal:e?e.signal:void 0;if(r){var n;try{n=new DOMException("Aborted","AbortError")}catch(t){(n=new Error("Aborted")).name="AbortError"}if(r.aborted)return Promise.reject(n);var o=new Promise((function(t,e){r.addEventListener("abort",(function(){return e(n)}),{once:!0})}));return e&&e.signal&&delete e.signal,Promise.race([o,f(t,e)])}return f(t,e)},Request:u}}(t),r=e.fetch,n=e.Request;t.fetch=r,t.Request=n,Object.defineProperty(t,"AbortController",{writable:!0,enumerable:!1,configurable:!0,value:d}),Object.defineProperty(t,"AbortSignal",{writable:!0,enumerable:!1,configurable:!0,value:h})}else console.warn("fetch() is not available, cannot install abortcontroller-polyfill")}("undefined"!=typeof self?self:global)}));