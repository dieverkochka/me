(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2601:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8960)},7135:function(e,t,n){Promise.resolve().then(n.bind(n,3192)),Promise.resolve().then(n.t.bind(n,6105,23)),Promise.resolve().then(n.t.bind(n,8418,23)),Promise.resolve().then(n.t.bind(n,9351,23))},3192:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return Analytics}});var r=n(7437),o=n(2601);function Analytics(){let e=o.env.NEXT_PUBLIC_BEAM_TOKEN;return e?(0,r.jsx)("script",{src:"https://beamanalytics.b-cdn.net/beam.min.js","data-token":e,async:!0}):null}},6105:function(){},9351:function(e){e.exports={style:{fontFamily:"'__Inter_8662f3', '__Inter_Fallback_8662f3'",fontStyle:"normal"},className:"__className_8662f3",variable:"__variable_8662f3"}},8418:function(e){e.exports={style:{fontFamily:"'__calSans_a2dc63', '__calSans_Fallback_a2dc63'"},className:"__className_a2dc63",variable:"__variable_a2dc63"}},8960:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var i=[],u=!1,c=-1;function cleanUpNextTick(){u&&r&&(u=!1,r.length?i=r.concat(i):c=-1,i.length&&drainQueue())}function drainQueue(){if(!u){var e=runTimeout(cleanUpNextTick);u=!0;for(var t=i.length;t;){for(r=i,i=[];++c<t;)r&&r[c].run();c=-1,t=i.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.push(new Item(e,t)),1!==i.length||u||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,__nccwpck_require__),i=!1}finally{i&&delete n[e]}return o.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:u.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=7135)}),_N_E=e.O()}]);