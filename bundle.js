// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isComplex64=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,c=n.__lookupSetter__;var f=e,l=function(r,t,e){var f,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||c.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r},y=t()?f:l,p=y;var s=function(r,t,e){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var v=function(r){return"number"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var m=function(){return b&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,_=d;var h=function(r){return _.call(r)},g=Object.prototype.hasOwnProperty;var w=function(r,t){return null!=r&&g.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",j=w,S=E,T=d;var A=h,O=function(r){var t,e,n;if(null==r)return T.call(r);e=r[S],t=j(r,S);try{r[S]=void 0}catch(t){return T.call(r)}return n=T.call(r),t?r[S]=e:delete r[S],n},P=m()?O:A,F=Number,N=F.prototype.toString;var x=P,B=F,I=function(r){try{return N.call(r),!0}catch(r){return!1}},V=m();var C=function(r){return"object"==typeof r&&(r instanceof B||(V?I(r):"[object Number]"===x(r)))},M=v,R=C;var k=s,G=function(r){return M(r)||R(r)},L=C;k(G,"isPrimitive",v),k(G,"isObject",L);var Y=G,X="function"==typeof Math.fround?Math.fround:null,J=P,q="function"==typeof Float32Array;var z=function(r){return q&&r instanceof Float32Array||"[object Float32Array]"===J(r)},D=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null,K=z,Q=D,U=H;var W="function"==typeof Float32Array?Float32Array:void 0,Z=function(){throw new Error("not implemented")},$=new(function(){var r,t;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,5e40]),r=K(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Q}catch(t){r=!1}return r}()?W:Z)(1);var rr=X;"function"!=typeof rr&&(rr=function(r){return $[0]=r,$[0]});var tr=Y.isPrimitive,er=y,nr=s,or=rr,ir=function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"},ur=function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r};function ar(r,t){if(!(this instanceof ar))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!tr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!tr(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return er(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:or(r)}),er(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:or(t)}),this}nr(ar,"BYTES_PER_ELEMENT",4),nr(ar.prototype,"BYTES_PER_ELEMENT",4),nr(ar.prototype,"byteLength",8),nr(ar.prototype,"toString",ir),nr(ar.prototype,"toJSON",ur);var cr=ar;var fr=function(){return/^\s*function\s*([^(]*)/i},lr=fr;s(lr,"REGEXP",fr());var yr=lr,pr=P;var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===pr(r)};var vr=function(r){return null!==r&&"object"==typeof r};s(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!sr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vr));var br=vr;var mr=P,dr=yr.REGEXP,_r=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var t,e,n;if(("Object"===(e=mr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=dr.exec(n.toString()))return t[1]}return _r(r)?"Buffer":e},gr=cr,wr=hr;return function(r){return r instanceof gr||"Complex64"===wr(r)}}));
//# sourceMappingURL=bundle.js.map
