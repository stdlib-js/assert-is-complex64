// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,m,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):u.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(e){return e!=e}function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,s,u,l,f,p,g,d,h;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",u=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))s+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,S(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+v(h):v(h)+p)),s+=n.arg||"",u+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=j.exec(e);n;)(r=e.slice(i,j.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=j.lastIndex,n=j.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var V=Object.prototype,I=V.toString,O=V.__defineGetter__,C=V.__defineSetter__,P=V.__lookupGetter__,R=V.__lookupSetter__,$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};function N(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return B&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"",Y=M()?function(e){var r,t,n,i,o;if(null==e)return G.call(e);t=e[X],o=X,r=null!=(i=e)&&Z.call(i,o);try{e[X]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[X]=t:delete e[X],n}:function(e){return G.call(e)},U=Number,z=U.prototype.toString,J=M();function q(e){return"object"==typeof e&&(e instanceof U||(J?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function D(e){return L(e)||q(e)}N(D,"isPrimitive",L),N(D,"isObject",q);var H="function"==typeof Math.fround?Math.fround:null,K="function"==typeof Float32Array,Q=Number.POSITIVE_INFINITY,ee="function"==typeof Float32Array?Float32Array:null,re="function"==typeof Float32Array?Float32Array:void 0,te=new(function(){var e,r,t;if("function"!=typeof ee)return!1;try{r=new ee([1,3.14,-3.14,5e40]),t=r,e=(K&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Q}catch(r){e=!1}return e}()?re:function(){throw new Error("not implemented")})(1),ne="function"==typeof H?H:function(e){return te[0]=e,te[0]};function ie(e,r){if(!(this instanceof ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!L(e))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",e));if(!L(r))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ne(e)}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ne(r)}),this}function oe(){return/^\s*function\s*([^(]*)/i}N(ie,"BYTES_PER_ELEMENT",4),N(ie.prototype,"BYTES_PER_ELEMENT",4),N(ie.prototype,"byteLength",8),N(ie.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),N(ie.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ae=/^\s*function\s*([^(]*)/i;N(oe,"REGEXP",ae);var ce=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};function se(e){return null!==e&&"object"==typeof e}function ue(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ae.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}return N(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ce(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se)),function(e){return e instanceof ie||"Complex64"===ue(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplex64=r();
//# sourceMappingURL=browser.js.map
