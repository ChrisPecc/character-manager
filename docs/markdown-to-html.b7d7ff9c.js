parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Dl52":[function(require,module,exports) {
!function(){"use strict";var e,t="",n="block",r=[{pattern:/(#{1,6})([^\n]+)/g,replace:"<h$L1>$2</h$L1>",type:n},{pattern:/\n(?!<\/?\w+>|\s?\*|\s?[0-9]+|>|\&gt;|-{5,})([^\n]+)/g,replace:"<p>$1</p>",type:n},{pattern:/\n(?:&gt;|\>)\W*(.*)/g,replace:"<blockquote><p>$1</p></blockquote>",type:n},{pattern:/\n\s?\*\s*(.*)/g,replace:"<ul>\n\t<li>$1</li>\n</ul>",type:n},{pattern:/\n\s?[0-9]+\.\s*(.*)/g,replace:"<ol>\n\t<li>$1</li>\n</ol>",type:n},{pattern:/(\*\*|__)(.*?)\1/g,replace:"<strong>$2</strong>",type:"inline"},{pattern:/(\*|_)(.*?)\1/g,replace:"<em>$2</em>",type:"inline"},{pattern:/([^!])\[([^\[]+)\]\(([^\)]+)\)/g,replace:'$1<a href="$3">$2</a>',type:"inline"},{pattern:/!\[([^\[]+)\]\(([^\)]+)\)/g,replace:'<img src="$2" alt="$1" />',type:"inline"},{pattern:/\~\~(.*?)\~\~/g,replace:"<del>$1</del>",type:"inline"},{pattern:/`(.*?)`/g,replace:"<code>$1</code>",type:"inline"},{pattern:/\n-{5,}\n/g,replace:"<hr />",type:n}];function p(e){return t="\n"+e+"\n",r.forEach(function(e){t=t.replace(e.pattern,function(){return function(e,t,r){var p;for(p in e)e.hasOwnProperty(p)&&(t=(t=t.split("$"+p).join(e[p])).split("$L"+p).join(e[p].length));r===n&&(t=t.trim()+"\n");return t}.call(this,arguments,e.replace,e.type)})}),t=(t=(t=function(e){return[{match:/<\/([uo]l)>\s*<\1>/g,replacement:""},{match:/(<\/\w+>)<\/(blockquote)>\s*<\2>/g,replacement:"$1"}].forEach(function(t){e=e.replace(t.match,t.replacement)}),e}(t)).trim()).replace(/[\n]{1,}/g,"\n")}"undefined"!=typeof module&&void 0!==module.exports?e=module.exports:"undefined"!=typeof window&&(window.MarkdownToHtml={},e=window.MarkdownToHtml),e.parse=p}();
},{}]},{},["Dl52"], null)
//# sourceMappingURL=markdown-to-html.b7d7ff9c.js.map