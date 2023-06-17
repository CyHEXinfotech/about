/*!
 * Copyright (c) 2011 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version ${Version}
 */
var Cufon=function(){var e,t,n,o,r,i,a,l,s,c=function(){return c.replace.apply(null,arguments)},u=c.DOM={ready:(t=!1,n={loaded:1,complete:1},o=[],r=function(){if(!t){t=!0;for(var e;e=o.shift();e());}},document.addEventListener&&(document.addEventListener("DOMContentLoaded",r,!1),window.addEventListener("pageshow",r,!1)),!window.opera&&document.readyState&&function(){n[document.readyState]?r():setTimeout(arguments.callee,10)}(),document.readyState&&document.createStyleSheet&&function(){try{document.body.doScroll("left"),r()}catch(e){setTimeout(arguments.callee,1)}}(),m(window,"load",r),function(e){arguments.length?t?e():o.push(e):r()}),root:function(){return document.documentElement||document.body},strict:"BackCompat"!=document.compatMode&&((e=document.doctype)?!/frameset|transitional/i.test(e.publicId):8==(e=document.firstChild).nodeType&&!/^DOCTYPE.+(transitional|frameset)/i.test(e.data))},d=c.CSS={Size:function(e,t){this.value=parseFloat(e),this.unit=String(e).match(/[a-z%]*$/)[0]||"px",this.convert=function(e){return e/t*this.value},this.convertFrom=function(e){return e/this.value*t},this.toString=function(){return this.value+this.unit}},addClass:function(e,t){var n=e.className;return e.className=n+(n&&" ")+t,e},color:v((function(e){var t={};return t.color=e.replace(/^rgba\((.*?),\s*([\d.]+)\)/,(function(e,n,o){return t.opacity=parseFloat(o),"rgb("+n+")"})),t})),fontStretch:v((function(e){return"number"==typeof e?e:/%$/.test(e)?parseFloat(e)/100:{"ultra-condensed":.5,"extra-condensed":.625,condensed:.75,"semi-condensed":.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[e]||1})),getStyle:function(e){var t=document.defaultView;return t&&t.getComputedStyle?new h(t.getComputedStyle(e,null)):e.currentStyle?new h(e.currentStyle):new h(e.style)},gradient:v((function(e){for(var t,n={id:e,type:e.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},o=e.substr(e.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/gi),r=0,i=o.length;r<i;++r)t=o[r].split("=",2).reverse(),n.stops.push([t[1]||r/(i-1),t[0]]);return n})),quotedList:v((function(e){for(var t,n=[],o=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g;t=o.exec(e);)n.push(t[3]||t[1]);return n})),recognizesMedia:v((function(e){var t,n,o,r=document.createElement("style");r.type="text/css",r.media=e;try{r.appendChild(document.createTextNode("/**/"))}catch(e){}return(n=w("head")[0]).insertBefore(r,n.firstChild),o=(t=r.sheet||r.styleSheet)&&!t.disabled,n.removeChild(r),o})),removeClass:function(e,t){var n=RegExp("(?:^|\\s+)"+t+"(?=\\s|$)","g");return e.className=e.className.replace(n,""),e},supports:function(e,t){var n=document.createElement("span").style;return void 0!==n[e]&&(n[e]=t,n[e]===t)},textAlign:function(e,t,n,o){return"right"==t.get("textAlign")?n>0&&(e=" "+e):n<o-1&&(e+=" "),e},textShadow:v((function(e){if("none"==e)return null;for(var t,n=[],o={},r=0,i=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/gi;t=i.exec(e);)","==t[0]?(n.push(o),o={},r=0):t[1]?o.color=t[1]:o[["offX","offY","blur"][r++]]=t[2];return n.push(o),n})),textTransform:(s={uppercase:function(e){return e.toUpperCase()},lowercase:function(e){return e.toLowerCase()},capitalize:function(e){return e.replace(/(?:^|\s)./g,(function(e){return e.toUpperCase()}))}},function(e,t){var n=s[t.get("textTransform")];return n?n(e):e}),whiteSpace:(i={inline:1,"inline-block":1,"run-in":1},a=/^\s+/,l=/\s+$/,function(e,t,n,o,r){return r?e.replace(a,"").replace(l,""):(o&&"br"==o.nodeName.toLowerCase()&&(e=e.replace(a,"")),i[t.get("display")]||(n.previousSibling||(e=e.replace(a,"")),n.nextSibling||(e=e.replace(l,""))),e)})};function f(e){var t,n,o=this.face=e.face,r=[],i={" ":1," ":1,"　":1};this.glyphs=function(e){var t,n={"‑":"-","­":"‑"};for(t in n)x(n,t)&&(e[t]||(e[t]=e[n[t]]));return e}(e.glyphs),this.w=e.w,this.baseSize=parseInt(o["units-per-em"],10),this.family=o["font-family"].toLowerCase(),this.weight=o["font-weight"],this.style=o["font-style"]||"normal",this.viewBox=(t=o.bbox.split(/\s+/),(n={minX:parseInt(t[0],10),minY:parseInt(t[1],10),maxX:parseInt(t[2],10),maxY:parseInt(t[3],10)}).width=n.maxX-n.minX,n.height=n.maxY-n.minY,n.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")},n),this.ascent=-parseInt(o.ascent,10),this.descent=-parseInt(o.descent,10),this.height=-this.ascent+this.descent,this.spacing=function(e,t,n){for(var o,r,a,l,s,c=this.glyphs,u=[],d=0,f=-1,p=-1;s=e[++f];)(o=c[s]||this.missingGlyph)&&(r&&(d-=a=r[s]||0,u[p]-=a),l=o.w,isNaN(l)&&(l=+this.w),l>0&&(l+=t,i[s]&&(l+=n)),d+=u[++p]=~~l,r=o.k);return u.total=d,u},this.applyLigatures=function(e,t){for(var n,o=0;o<r.length&&!n;o++)r[o].ligatures===t&&(n=r[o]);if(!n){var i=[];for(var a in t)this.glyphs[t[a]]&&i.push(a);var l=i.sort((function(e,t){return t.length-e.length||e>t})).join("|");r.push(n={ligatures:t,regexp:l.length>0?A[l]||(A[l]=new RegExp(l,"g")):null})}return n.regexp?e.replace(n.regexp,(function(e){return t[e]||e})):e}}function p(){var e={},t={oblique:"italic",italic:"oblique"};this.add=function(t){(e[t.style]||(e[t.style]={}))[t.weight]=t},this.get=function(n,o){var r=e[n]||e[t[n]]||e.normal||e.italic||e.oblique;if(!r)return null;if(r[o={normal:400,bold:700}[o]||parseInt(o,10)])return r[o];var i,a,l={1:1,99:0}[o%100],s=[];for(var c in void 0===l&&(l=o>400),500==o&&(o=400),r)x(r,c)&&(c=parseInt(c,10),(!i||c<i)&&(i=c),(!a||c>a)&&(a=c),s.push(c));return o<i&&(o=i),o>a&&(o=a),s.sort((function(e,t){return(l?e>=o&&t>=o?e<t:e>t:e<=o&&t<=o?e>t:e<t)?-1:1})),r[s[0]]}}function h(e){var t={},n={};this.extend=function(e){for(var n in e)x(e,n)&&(t[n]=e[n]);return this},this.get=function(n){return null!=t[n]?t[n]:e[n]},this.getSize=function(e,t){return n[e]||(n[e]=new d.Size(this.get(e),t))},this.isUsable=function(){return!!e}}function m(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function g(e,t){if(t._mediatorMode)return e;var n=B.get(e),o=n.options;if(o){if(o===t)return e;o.hover&&O.detach(e)}return t.hover&&t.hoverables[e.nodeName.toLowerCase()]&&O.attach(e),n.options=t,e}function v(e){var t={};return function(n){return x(t,n)||(t[n]=e.apply(null,arguments)),t[n]}}function y(e,t){for(var n,o=d.quotedList(t.get("fontFamily").toLowerCase()),r=0;n=o[r];++r)if(H[n])return H[n].get(t.get("fontStyle"),t.get("fontWeight"));return null}function w(e){return document.getElementsByTagName(e)}function x(e,t){return e.hasOwnProperty(t)}function C(){for(var e,t,n={},o=0,r=arguments.length;e=arguments[o],o<r;++o)for(t in e)x(e,t)&&(n[t]=e[t]);return n}function S(e,t,n,o,r,i){var a,l=document.createDocumentFragment();if(""===t)return l;var s=o.separate,c=t.split(G[s]),u="words"==s;u&&L&&(/^\s/.test(t)&&c.unshift(""),/\s$/.test(t)&&c.push(""));for(var f=0,p=c.length;f<p;++f)(a=q[o.engine](e,u?d.textAlign(c[f],n,f,p):c[f],n,o,r,i,f<p-1))&&l.appendChild(a);return l}function b(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n)}function E(e,t){var n=e.nodeName.toLowerCase();if(!(t.ignore[n]||t.ignoreClass&&t.ignoreClass.test(e.className))){t.onBeforeReplace&&t.onBeforeReplace(e,t);var o=!t.textless[n],r="simple"===t.trim,i=d.getStyle(g(e,t)).extend(t);if(0!==parseFloat(i.get("fontSize"))){var a,l,s,c,u,f,p,h,v=y(0,i),w=t.softHyphens,x=!1,C=/\u00ad/g,b=t.modifyText;if(v){for(a=e.firstChild;a;a=s)l=a.nodeType,s=a.nextSibling,o&&3==l&&(w&&e.nodeName.toLowerCase()!=F&&(p=a.data.indexOf("­"))>=0&&(a.splitText(p),(s=a.nextSibling).deleteData(0,1),(h=document.createElement(F)).appendChild(document.createTextNode("­")),e.insertBefore(h,s),s=h,x=!0),c?(c.appendData(a.data),e.removeChild(a)):c=a,s)||(c&&(u=c.data,w||(u=u.replace(C,"")),u=d.whiteSpace(u,i,c,f,r),b&&(u=b(u,c,e,t)),e.replaceChild(S(v,u,i,t,a,e),c),c=null),1==l&&(a.firstChild&&("cufon"==a.nodeName.toLowerCase()?q[t.engine](v,null,i,t,a,e):arguments.callee(a,t)),f=a));w&&x&&(N(e),X||m(window,"resize",z),X=!0),t.onAfterReplace&&t.onAfterReplace(e,t)}}}}function N(e){var t,n,o,r,i,a,l,s;for(t=e.getElementsByTagName(F),s=0;n=t[s];++s)if(n.className=k,(r=o=n.parentNode).nodeName.toLowerCase()!=M)(i=document.createElement(M)).appendChild(n.previousSibling),o.insertBefore(i,n),i.appendChild(n);else if((r=r.parentNode).nodeName.toLowerCase()==M){for(o=r.parentNode;r.firstChild;)o.insertBefore(r.firstChild,r);o.removeChild(r)}for(s=0;n=t[s];++s)n.className="",o=(r=n.parentNode).parentNode,(l=(a=r.nextSibling||o.nextSibling).nodeName.toLowerCase()==M?r:n.previousSibling).offsetTop>=a.offsetTop&&(n.className=k,l.offsetTop<a.offsetTop&&(i=document.createElement(M),o.insertBefore(i,r),i.appendChild(r),i.appendChild(a)))}function z(){j||(d.addClass(u.root(),Y),clearTimeout(T),T=setTimeout((function(){j=!0,d.removeClass(u.root(),Y),N(document),j=!1}),100))}d.ready=function(){var e=!d.recognizesMedia("all"),t=!1,n=[],o=function(){e=!0;for(var t;t=n.shift();t());},r=w("link"),i=w("style"),a={"":1,"text/css":1};function l(e){return!a[e.type.toLowerCase()]||(e.disabled||s(e.sheet,e.media||"screen"))}function s(e,t){if(!d.recognizesMedia(t||"all"))return!0;if(!e||e.disabled)return!1;try{var n,o=e.cssRules;if(o)e:for(var r=0,i=o.length;n=o[r],r<i;++r)switch(n.type){case 2:break;case 3:if(!s(n.styleSheet,n.media.mediaText))return!1;break;default:break e}}catch(e){}return!0}function c(){if(document.createStyleSheet)return!0;var e,t;for(t=0;e=r[t];++t)if("stylesheet"==e.rel.toLowerCase()&&!l(e))return!1;for(t=0;e=i[t];++t)if(!l(e))return!1;return!0}return u.ready((function(){t||(t=d.getStyle(document.body).isUsable()),e||t&&c()?o():setTimeout(arguments.callee,10)})),function(t){e?t():n.push(t)}}();var T,L=0==" ".split(/\s+/).length,M="cufonglue",F="cufonshy",k="cufon-shy-disabled",Y="cufon-viewport-resizing",A={},B=new function(){var e={},t=0;this.get=function(n){var o=function(e){return e.cufid||(e.cufid=++t)}(n);return e[o]||(e[o]={})}},O=new function(){function e(e){var t=e.relatedTarget;t&&function(e,t){try{return e.contains?e.contains(t):16&e.compareDocumentPosition(t)}catch(e){}return!1}(this,t)||n(this,"mouseover"==e.type)}function t(e){e||(e=window.event),n(e.target||e.srcElement,"mouseenter"==e.type)}function n(e,t){setTimeout((function(){var n=B.get(e).options;t&&((n=C(n,n.hover))._mediatorMode=1),c.replace(e,n,!0)}),10)}this.attach=function(n){void 0===n.onmouseenter?(m(n,"mouseover",e),m(n,"mouseout",e)):(m(n,"mouseenter",t),m(n,"mouseleave",t))},this.detach=function(n){void 0===n.onmouseenter?(b(n,"mouseover",e),b(n,"mouseout",e)):(b(n,"mouseenter",t),b(n,"mouseleave",t))}},I=new function(){var e=[],t={};function n(n){for(var o,r=[],i=0;o=n[i];++i)r[i]=e[t[o]];return r}this.add=function(n,o){t[n]=e.push(o)-1},this.repeat=function(){for(var t,o=arguments.length?n(arguments):e,r=0;t=o[r++];)c.replace(t[0],t[1],!0)}},R=!1,X=!1,j=!1,q={},H={},D={autoDetect:!1,engine:null,forceHitArea:!1,hover:!1,hoverables:{a:!0},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,noscript:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},ignoreClass:null,modifyText:null,onAfterReplace:null,onBeforeReplace:null,printable:!0,selector:window.Sizzle||window.jQuery&&function(e){return jQuery(e)}||window.dojo&&dojo.query||window.glow&&glow.dom&&glow.dom.get||window.Ext&&Ext.query||window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query||window.$$&&function(e){return $$(e)}||window.$&&function(e){return $(e)}||document.querySelectorAll&&function(e){return document.querySelectorAll(e)}||w,separate:"words",softHyphens:!0,textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none",trim:"advanced",ligatures:{ff:"ﬀ",fi:"ﬁ",fl:"ﬂ",ffi:"ﬃ",ffl:"ﬄ","ſt":"ﬅ",st:"ﬆ"}},G={words:/\s/.test(" ")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};return c.now=function(){return u.ready(),c},c.refresh=function(){return I.repeat.apply(I,arguments),c},c.registerEngine=function(e,t){return t?(q[e]=t,c.set("engine",e)):c},c.registerFont=function(e){if(!e)return c;var t=new f(e),n=t.family;return H[n]||(H[n]=new p),H[n].add(t),c.set("fontFamily",'"'+n+'"')},c.replace=function(e,t,n){return(t=C(D,t)).engine?(R||(d.addClass(u.root(),"cufon-active cufon-loading"),d.ready((function(){d.addClass(d.removeClass(u.root(),"cufon-loading"),"cufon-ready")})),R=!0),t.hover&&(t.forceHitArea=!0),t.autoDetect&&delete t.fontFamily,"string"==typeof t.ignoreClass&&(t.ignoreClass=new RegExp("(?:^|\\s)(?:"+t.ignoreClass.replace(/\s+/g,"|")+")(?:\\s|$)")),"string"==typeof t.textShadow&&(t.textShadow=d.textShadow(t.textShadow)),"string"==typeof t.color&&/^-/.test(t.color)?t.textGradient=d.gradient(t.color):delete t.textGradient,"string"==typeof e?(n||I.add(e,arguments),e=[e]):e.nodeType&&(e=[e]),d.ready((function(){for(var n=0,o=e.length;n<o;++n){var r=e[n];"string"==typeof r?c.replace(t.selector(r),t,!0):E(r,t)}})),c):c},c.set=function(e,t){return D[e]=t,c},c}();Cufon.registerEngine("vml",function(){var e=document.namespaces;if(e){e.add("cvml","urn:schemas-microsoft-com:vml"),e=null;var t=document.createElement("cvml:shape");if(t.style.behavior="url(#default#VML)",t.coordsize){t=null;var n=(document.documentMode||0)<8,o=document.createElement("style");o.type="text/css",o.styleSheet.cssText=("cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:"+(n?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;text-align:left;}cufonshy.cufon-shy-disabled,.cufon-viewport-resizing cufonshy{display:none;}cufonglue{white-space:nowrap;display:inline-block;}.cufon-viewport-resizing cufonglue{white-space:normal;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}").replace(/;/g,"!important;"),document.getElementsByTagName("head")[0].appendChild(o);var r={};return function(e,t,o,l,s,c,u){var d=null===t;d&&(t=s.alt);var f,p,h=e.viewBox,m=o.computedFontSize||(o.computedFontSize=new Cufon.CSS.Size(function(e,t){return i(e,/(?:em|ex|%)$|^[a-z-]+$/i.test(t)?"1em":t)}(c,o.get("fontSize"))+"px",e.baseSize));if(d)f=s,p=s.firstChild;else{if((f=document.createElement("cufon")).className="cufon cufon-vml",f.alt=t,p=document.createElement("cufoncanvas"),f.appendChild(p),l.printable){var g=document.createElement("cufontext");g.appendChild(document.createTextNode(t)),f.appendChild(g)}u||f.appendChild(document.createElement("cvml:shape"))}var v=f.style,y=p.style,w=m.convert(h.height),x=Math.ceil(w),C=x/w*Cufon.CSS.fontStretch(o.get("fontStretch")),S=h.minX,b=h.minY;y.height=x,y.top=Math.round(m.convert(b-e.ascent)),y.left=Math.round(m.convert(S)),v.height=m.convert(e.height)+"px";var E=o.get("color"),N=Cufon.CSS.textTransform(l.ligatures?e.applyLigatures(t,l.ligatures):t,o).split(""),z=e.spacing(N,a(c,o,m,"letterSpacing"),a(c,o,m,"wordSpacing"));if(!z.length)return null;for(var T,L=z.total,M=-S+L+(h.width-z[z.length-1]),F=m.convert(M*C),k=Math.round(F),Y=M+","+h.height,A="r"+Y+"ns",B=l.textGradient&&function(e){var t=e.id;if(!r[t]){var n=e.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient",o.angle=180,o.focus="0",o.method="none",o.color=n[0][1];for(var a=1,l=n.length-1;a<l;++a)i.push(100*n[a][0]+"% "+n[a][1]);o.colors=i.join(","),o.color2=n[l][1],r[t]=o}return r[t]}(l.textGradient),$=e.glyphs,O=0,I=l.textShadow,R=-1,X=0;N[++R];){var j,q=$[N[R]]||e.missingGlyph;if(q){if(d)for(j=p.childNodes[X];j.firstChild;)j.removeChild(j.firstChild);else j=document.createElement("cvml:shape"),p.appendChild(j);j.stroked="f",j.coordsize=Y,j.coordorigin=T=S-O+","+b,j.path=(q.d?"m"+q.d+"xe":"")+"m"+T+A,j.fillcolor=E,B&&j.appendChild(B.cloneNode(!1));var H=j.style;if(H.width=k,H.height=x,I){var D,G=I[0],P=I[1],U=Cufon.CSS.color(G.color),V=document.createElement("cvml:shadow");V.on="t",V.color=U.color,V.offset=G.offX+","+G.offY,P&&(D=Cufon.CSS.color(P.color),V.type="double",V.color2=D.color,V.offset2=P.offX+","+P.offY),V.opacity=U.opacity||D&&D.opacity||1,j.appendChild(V)}O+=z[X++]}}var Q,_,W=j.nextSibling;if(l.forceHitArea?(W||((W=document.createElement("cvml:rect")).stroked="f",W.className="cufon-vml-cover",(Q=document.createElement("cvml:fill")).opacity=0,W.appendChild(Q),p.appendChild(W)),(_=W.style).width=k,_.height=x):W&&p.removeChild(W),v.width=Math.max(Math.ceil(m.convert(L*C)),0),n){var J=o.computedYAdjust;if(void 0===J){var K=o.get("lineHeight");"normal"==K?K="1em":isNaN(K)||(K+="em"),o.computedYAdjust=J=.5*(i(c,K)-parseFloat(v.height))}J&&(v.marginTop=Math.ceil(J)+"px",v.marginBottom=J+"px")}return f}}}function i(e,t){if(!isNaN(t)||/px$/i.test(t))return parseFloat(t);var n=e.style.left,o=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=t.replace("%","em");var r=e.style.pixelLeft;return e.style.left=n,e.runtimeStyle.left=o,r}function a(e,t,n,o){var r="computed"+o,a=t[r];return isNaN(a)&&(a=t.get(o),t[r]=a="normal"==a?0:~~n.convertFrom(i(e,a))),a}}()),Cufon.registerEngine("canvas",function(){var e=document.createElement("canvas");if(e&&e.getContext&&e.getContext.apply){e=null;var t=Cufon.CSS.supports("display","inline-block"),n=!t&&("BackCompat"==document.compatMode||/frameset|transitional/i.test(document.doctype.publicId)),o=document.createElement("style");return o.type="text/css",o.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(n?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;text-align:left;text-indent:-10000in;}"+(t?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"cufonshy.cufon-shy-disabled,.cufon-viewport-resizing cufonshy{display:none;}cufonglue{white-space:nowrap;display:inline-block;}.cufon-viewport-resizing cufonglue{white-space:normal;}}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;"))),document.getElementsByTagName("head")[0].appendChild(o),function(e,n,o,a,l,s){var c=null===n;c&&(n=l.getAttribute("alt"));var u=e.viewBox,d=o.getSize("fontSize",e.baseSize),f=0,p=0,h=0,m=0,g=a.textShadow,v=[];if(g)for(var y=g.length;y--;){var w=g[y],x=d.convertFrom(parseFloat(w.offX)),C=d.convertFrom(parseFloat(w.offY));v[y]=[x,C],C<f&&(f=C),x>p&&(p=x),C>h&&(h=C),x<m&&(m=x)}var S=Cufon.CSS.textTransform(a.ligatures?e.applyLigatures(n,a.ligatures):n,o).split(""),b=e.spacing(S,~~d.convertFrom(parseFloat(o.get("letterSpacing"))||0),~~d.convertFrom(parseFloat(o.get("wordSpacing"))||0));if(!b.length)return null;var E,N,z=b.total;if(p+=u.width-b[b.length-1],m+=u.minX,c)E=l,N=l.firstChild;else if((E=document.createElement("cufon")).className="cufon cufon-canvas",E.setAttribute("alt",n),N=document.createElement("canvas"),E.appendChild(N),a.printable){var T=document.createElement("cufontext");T.appendChild(document.createTextNode(n)),E.appendChild(T)}var L=E.style,M=N.style,F=d.convert(u.height),k=Math.ceil(F)/F,Y=k*Cufon.CSS.fontStretch(o.get("fontStretch")),A=z*Y,B=Math.ceil(d.convert(A+p-m)),$=Math.ceil(d.convert(u.height-f+h));N.width=B,N.height=$,M.width=B+"px",M.height=$+"px",f+=u.minY,M.top=Math.round(d.convert(f-e.ascent))+"px",M.left=Math.round(d.convert(m))+"px";var O=Math.max(Math.ceil(d.convert(A)),0)+"px";t?(L.width=O,L.height=d.convert(e.height)+"px"):(L.paddingLeft=O,L.paddingBottom=d.convert(e.height)-1+"px");var I=N.getContext("2d"),R=F/u.height,X=window.devicePixelRatio||1;function j(){var t=e.glyphs,n=-1,o=-1;for(I.scale(Y,1);S[++n];){var a;(a=t[S[n]]||e.missingGlyph)&&(a.d&&(I.beginPath(),I.moveTo(0,0),a.code?i(a.code,I):a.code=r("m"+a.d,I),I.fill()),I.translate(b[++o],0))}I.restore()}if(1!=X&&(N.width=B*X,N.height=$*X,I.scale(X,X)),I.scale(R,R*k),I.translate(-m,-f),I.save(),g)for(y=g.length;y--;){w=g[y];I.save(),I.fillStyle=w.color,I.translate.apply(I,v[y]),j()}var q=a.textGradient;if(q){for(var H=q.stops,D=I.createLinearGradient(0,u.minY,0,u.maxY),G=(y=0,H.length);y<G;++y)D.addColorStop.apply(D,H[y]);I.fillStyle=D}else I.fillStyle=o.get("color");return j(),E}}function r(e,t){var n,o=0,r=0,i=[],a=/([mrvxe])([^a-z]*)/g;e:for(var l=0;n=a.exec(e);++l){var s=n[2].split(",");switch(n[1]){case"v":i[l]={m:"bezierCurveTo",a:[o+~~s[0],r+~~s[1],o+~~s[2],r+~~s[3],o+=~~s[4],r+=~~s[5]]};break;case"r":i[l]={m:"lineTo",a:[o+=~~s[0],r+=~~s[1]]};break;case"m":i[l]={m:"moveTo",a:[o=~~s[0],r=~~s[1]]};break;case"x":i[l]={m:"closePath"};break;case"e":break e}t[i[l].m].apply(t,i[l].a)}return i}function i(e,t){for(var n=0,o=e.length;n<o;++n){var r=e[n];t[r.m].apply(t,r.a)}}}());