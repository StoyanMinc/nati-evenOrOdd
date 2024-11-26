(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var D=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},L=ht,_t=K,mt=At,$t=st,yt=at,wt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function K(e){for(var t=[],n=0,r=0,i="",s;(s=wt.exec(e))!=null;){var o=s[0],h=s[1],a=s.index;if(i+=e.slice(r,a),r=a+o.length,h){i+=h[1];continue}i&&(t.push(i),i="");var c=s[2],l=s[3],p=s[4],g=s[5],f=s[6],A=s[7],ft=f==="+"||f==="*",vt=f==="?"||f==="*",J=c||"/",gt=p||g||(A?".*":"[^"+J+"]+?");t.push({name:l||n++,prefix:c||"",delimiter:J,optional:vt,repeat:ft,pattern:bt(gt)})}return r<e.length&&(i+=e.substr(r)),i&&t.push(i),t}function At(e){return st(K(e))}function st(e){for(var t=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(r){for(var i="",s=r||{},o=0;o<e.length;o++){var h=e[o];if(typeof h=="string"){i+=h;continue}var a=s[h.name],c;if(a==null){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to be defined')}if(D(a)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received "'+a+'"');if(a.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var l=0;l<a.length;l++){if(c=encodeURIComponent(a[l]),!t[o].test(c))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received "'+c+'"');i+=(l===0?h.prefix:h.delimiter)+c}continue}if(c=encodeURIComponent(a),!t[o].test(c))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+c+'"');i+=h.prefix+c}return i}}function Q(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function bt(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function G(e,t){return e.keys=t,e}function ot(e){return e.sensitive?"":"i"}function xt(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return G(e,t)}function Et(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(ht(e[i],t,n).source);var s=new RegExp("(?:"+r.join("|")+")",ot(n));return G(s,t)}function Tt(e,t,n){for(var r=K(e),i=at(r,n),s=0;s<r.length;s++)typeof r[s]!="string"&&t.push(r[s]);return G(i,t)}function at(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,i="",s=e[e.length-1],o=typeof s=="string"&&/\/$/.test(s),h=0;h<e.length;h++){var a=e[h];if(typeof a=="string")i+=Q(a);else{var c=Q(a.prefix),l=a.pattern;a.repeat&&(l+="(?:"+c+l+")*"),a.optional?c?l="(?:"+c+"("+l+"))?":l="("+l+")?":l=c+"("+l+")",i+=l}}return n||(i=(o?i.slice(0,-2):i)+"(?:\\/(?=$))?"),r?i+="$":i+=n&&o?"":"(?=\\/|$)",new RegExp("^"+i,ot(t))}function ht(e,t,n){return t=t||[],D(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?xt(e,t):D(e)?Et(e,t,n):Tt(e,t,n)}L.parse=_t;L.compile=mt;L.tokensToFunction=$t;L.tokensToRegExp=yt;var b=typeof document<"u",v=typeof window<"u",I=typeof history<"u",Rt=typeof process<"u",z=b&&document.ontouchstart?"touchstart":"click",_=v&&!!(window.history.location||window.location);function u(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}u.prototype.configure=function(e){var t=e||{};this._window=t.window||v&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&v,this._click=t.click!==!1&&b,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):v&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(z,this.clickHandler,!1):b&&n.document.removeEventListener(z,this.clickHandler,!1),this._hashbang&&v&&!I?n.addEventListener("hashchange",this._onpopstate,!1):v&&n.removeEventListener("hashchange",this._onpopstate,!1)};u.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};u.prototype._getBase=function(){var e=this._base;if(e)return e;var t=v&&this._window&&this._window.location;return v&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};u.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};u.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var n;if(_){var r=this._window,i=r.location;this._hashbang&&~i.hash.indexOf("#!")?n=i.hash.substr(2)+i.search:this._hashbang?n=i.search+i.hash:n=i.pathname+i.search+i.hash}this.replace(n,null,!0,t.dispatch)}};u.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(z,this.clickHandler,!1),v&&e.removeEventListener("popstate",this._onpopstate,!1),v&&e.removeEventListener("hashchange",this._onpopstate,!1)}};u.prototype.show=function(e,t,n,r){var i=new P(e,t,this),s=this.prevContext;return this.prevContext=i,this.current=i.path,n!==!1&&this.dispatch(i,s),i.handled!==!1&&r!==!1&&i.pushState(),i};u.prototype.back=function(e,t){var n=this;if(this.len>0){var r=this._window;I&&r.history.back(),this.len--}else setTimeout(e?function(){n.show(e,t)}:function(){n.show(n._getBase(),t)})};u.prototype.redirect=function(e,t){var n=this;typeof e=="string"&&typeof t=="string"&&M.call(this,e,function(r){setTimeout(function(){n.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){n.replace(e)},0)};u.prototype.replace=function(e,t,n,r){var i=new P(e,t,this),s=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),r!==!1&&this.dispatch(i,s),i};u.prototype.dispatch=function(e,t){var n=0,r=0,i=this;function s(){var h=i.exits[r++];if(!h)return o();h(t,s)}function o(){var h=i.callbacks[n++];if(e.path!==i.current){e.handled=!1;return}if(!h)return Ht.call(i,e);h(e,o)}t?s():o()};u.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var n=new U(e,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))};u.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n){for(var r=0;r<n.length;r++)if(n[r].nodeName&&n[r].nodeName.toUpperCase()==="A"&&n[r].href){t=n[r];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var i=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var s=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||s==="#"))&&!(s&&s.indexOf("mailto:")>-1)&&!(i?t.target.baseVal:t.target)&&!(!i&&!this.sameOrigin(t.href))){var o=i?t.href.baseVal:t.pathname+t.search+(t.hash||"");o=o[0]!=="/"?"/"+o:o,Rt&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var h=o,a=this._getBase();o.indexOf(a)===0&&(o=o.substr(a.length)),this._hashbang&&(o=o.replace("#!","")),!(a&&h===o&&(!_||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(h))}}}}};u.prototype._onpopstate=function(){var e=!1;return v?(b&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(n){if(e){var r=this;if(n.state){var i=n.state.path;r.replace(i,n.state)}else if(_){var s=r._window.location;r.show(s.pathname+s.search+s.hash,void 0,void 0,!1)}}}):function(){}}();u.prototype._which=function(e){return e=e||v&&this._window.event,e.which==null?e.button:e.which};u.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&_)return new URL(e,t.location.toString());if(b){var n=t.document.createElement("a");return n.href=e,n}};u.prototype.sameOrigin=function(e){if(!e||!_)return!1;var t=this._toURL(e),n=this._window,r=n.location;return r.protocol===t.protocol&&r.hostname===t.hostname&&(r.port===t.port||r.port===""&&(t.port==80||t.port==443))};u.prototype._samePath=function(e){if(!_)return!1;var t=this._window,n=t.location;return e.pathname===n.pathname&&e.search===n.search};u.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function ct(){var e=new u;function t(){return M.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=ct,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(n){e.len=n}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(n){e.current=n}}),t.Context=P,t.Route=U,t}function M(e,t){if(typeof e=="function")return M.call(this,"*",e);if(typeof t=="function")for(var n=new U(e,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function Ht(e){if(!e.handled){var t,n=this,r=n._window;n._hashbang?t=_&&this._getBase()+r.location.hash.replace("#!",""):t=_&&r.location.pathname+r.location.search,t!==e.canonicalPath&&(n.stop(),e.handled=!1,_&&(r.location.href=e.canonicalPath))}}function Ct(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e,t,n){var r=this.page=n||M,i=r._window,s=r._hashbang,o=r._getBase();e[0]==="/"&&e.indexOf(o)!==0&&(e=o+(s?"#!":"")+e);var h=e.indexOf("?");this.canonicalPath=e;var a=new RegExp("^"+Ct(o));if(this.path=e.replace(a,"")||"/",s&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&i.document.title,this.state=t||{},this.state.path=e,this.querystring=~h?r._decodeURLEncodedURIComponent(e.slice(h+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~h?e.slice(0,h):e),this.params={},this.hash="",!s){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=r._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}P.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,I&&t.history.pushState(this.state,this.title,n&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};P.prototype.save=function(){var e=this.page;I&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function U(e,t,n){var r=this.page=n||Z,i=t||{};i.strict=i.strict||r._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=L(this.path,this.keys=[],i)}U.prototype.middleware=function(e){var t=this;return function(n,r){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,r);r()}};U.prototype.match=function(e,t){var n=this.keys,r=e.indexOf("?"),i=~r?e.slice(0,r):e,s=this.regexp.exec(decodeURIComponent(i));if(!s)return!1;delete t[0];for(var o=1,h=s.length;o<h;++o){var a=n[o-1],c=this.page._decodeURLEncodedURIComponent(s[o]);(c!==void 0||!hasOwnProperty.call(t,a.name))&&(t[a.name]=c)}return!0};var Z=ct(),B=Z,Nt=Z;B.default=Nt;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,O=T.trustedTypes,Y=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,lt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+m,Lt=`<${pt}>`,w=document,R=()=>w.createComment(""),H=e=>e===null||typeof e!="object"&&typeof e!="function",k=Array.isArray,Pt=e=>k(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",q=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,$=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,it=/"/g,ut=/^(?:script|style|textarea|title)$/i,Ut=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),X=Ut(1),C=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,y=w.createTreeWalker(w,129);function dt(e,t){if(!k(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const St=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=E;for(let h=0;h<n;h++){const a=e[h];let c,l,p=-1,g=0;for(;g<a.length&&(o.lastIndex=g,l=o.exec(a),l!==null);)g=o.lastIndex,o===E?l[1]==="!--"?o=tt:l[1]!==void 0?o=et:l[2]!==void 0?(ut.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=$):l[3]!==void 0&&(o=$):o===$?l[0]===">"?(o=i??E,p=-1):l[1]===void 0?p=-2:(p=o.lastIndex-l[2].length,c=l[1],o=l[3]===void 0?$:l[3]==='"'?it:nt):o===it||o===nt?o=$:o===tt||o===et?o=E:(o=$,i=void 0);const f=o===$&&e[h+1].startsWith("/>")?" ":"";s+=o===E?a+Lt:p>=0?(r.push(c),a.slice(0,p)+lt+a.slice(p)+m+f):a+m+(p===-2?h:f)}return[dt(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class N{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const h=t.length-1,a=this.parts,[c,l]=St(t,n);if(this.el=N.createElement(c,r),y.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=y.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(lt)){const g=l[o++],f=i.getAttribute(p).split(m),A=/([.?@])?(.*)/.exec(g);a.push({type:1,index:s,name:A[2],strings:f,ctor:A[1]==="."?It:A[1]==="?"?Mt:A[1]==="@"?Bt:j}),i.removeAttribute(p)}else p.startsWith(m)&&(a.push({type:6,index:s}),i.removeAttribute(p));if(ut.test(i.tagName)){const p=i.textContent.split(m),g=p.length-1;if(g>0){i.textContent=O?O.emptyScript:"";for(let f=0;f<g;f++)i.append(p[f],R()),y.nextNode(),a.push({type:2,index:++s});i.append(p[g],R())}}}else if(i.nodeType===8)if(i.data===pt)a.push({type:2,index:s});else{let p=-1;for(;(p=i.data.indexOf(m,p+1))!==-1;)a.push({type:7,index:s}),p+=m.length-1}s++}}static createElement(t,n){const r=w.createElement("template");return r.innerHTML=t,r}}function x(e,t,n=e,r){var o,h;if(t===C)return t;let i=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=H(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=x(e,i._$AS(e,t.values),i,r)),t}class Ot{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??w).importNode(n,!0);y.currentNode=i;let s=y.nextNode(),o=0,h=0,a=r[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new S(s,s.nextSibling,this,t):a.type===1?c=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(c=new jt(s,this,t)),this._$AV.push(c),a=r[++h]}o!==(a==null?void 0:a.index)&&(s=y.nextNode(),o++)}return y.currentNode=w,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class S{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=x(this,t,n),H(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var s;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=N.createElement(dt(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const o=new Ot(i,this),h=o.u(this.options);o.p(n),this.T(h),this._$AH=o}}_$AC(t){let n=rt.get(t.strings);return n===void 0&&rt.set(t.strings,n=new N(t)),n}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new S(this.O(R()),this.O(R()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=x(this,t,n,0),o=!H(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{const h=t;let a,c;for(t=s[0],a=0;a<s.length-1;a++)c=x(this,h[r+a],n,a),c===C&&(c=this._$AH[a]),o||(o=!H(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Mt extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Bt extends j{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=x(this,t,n,0)??d)===C)return;const r=this._$AH,i=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==d&&(r===d||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const V=T.litHtmlPolyfillSupport;V==null||V(N,S),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.2.1");const W=(e,t,n)=>{const r=t;let i=r._$litPart$;return i===void 0&&(r._$litPart$=i=new S(t.insertBefore(R(),null),null,void 0,{})),i._$AI(e),i};function qt(){return Math.floor(Math.random()*20)}const F=document.querySelector(".container"),Vt=(e,t)=>X`
    <section id="form">
        <div class="form">
            <h4 class="score" id="score">точки: <span id="points">0</span></h4>
            <h1 id="question">Нати, числото <span id="number">${e}</span> четно ли е, или нечетно ?</h1>
            <div id="btn-container">
                <button class="btn" name="even" @click = ${t} id="even">Четно</button>
                <button class="btn" name="odd" @click=${t} id="odd">Нечетно</button>
            </div>
        </div>
    </section>
`,Wt=()=>X`
    <section id="you-win">
        <h1>Бравоооо!!! Ти победи, спечели <span>10</span> точки!!! </h1>
        <a class="btn" href="/even-or-odd">Да играем отново?</a>
    </section>
`,Ft=()=>X`
    <section id="wrong-answer">
        <h1>Грешен отговор :(</h1>
        <a class="btn" id="start" href="/even-or-odd" >Опитай отново :)</a>
    </section>
`;function Dt(){document.querySelector("#greeting-msg").style.display="none";const e=qt();console.log(e),W(Vt(e,t),F);function t(n){const r=document.querySelector("#points");let i;e%2===0?i="even":i="odd";const s=n.target.name;if(i===s){if(r.textContent=Number(r.textContent)+1,Number(r.textContent)===10)return W(Wt(),F);B.redirect("/even-or-odd")}else return W(Ft(),F)}}B("/even-or-odd",Dt);B.start();