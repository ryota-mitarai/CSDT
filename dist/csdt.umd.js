!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("yjs")):"function"==typeof define&&define.amd?define(["yjs"],t):t((e||self).yjs)}(this,function(e){function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var n=t(e);function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var r=function(e){var t,r;function i(){var t;return t=e.call(this)||this,window.document.addEventListener("CSDT-check-support",function(){var e=new CustomEvent("CSDT-response-check-support",{detail:t.version});window.parent.document.dispatchEvent(e)}),window.document.addEventListener("CSDT-y-update",function(e){n.applyUpdate(t.ydoc,e.detail)}),t.ydoc.on("update",function(e,t,n,o){var r=new CustomEvent("CSDT-y-update",{detail:e});window.parent.document.dispatchEvent(r)}),t}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,o(t,r),i}(function(){this.version="0.1.0",this.ydoc=new n.Doc});window.CSDT=new r});
//# sourceMappingURL=csdt.umd.js.map