(this["webpackJsonpwww.powerhooks.dev"]=this["webpackJsonpwww.powerhooks.dev"]||[]).push([[81],{282:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,s=i.length;-1!==t.code.indexOf(o=n(a,s));)++s;return i[s]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(s){for(var c=0;c<s.length&&!(o>=r.length);c++){var p=s[c];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=r[o],g=t.tokenStack[u],l="string"===typeof p?p:p.content,f=n(a,u),k=l.indexOf(f);if(k>-1){++o;var h=l.substring(0,k),d=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=l.substring(k+f.length),v=[];h&&v.push.apply(v,i([h])),v.push(d),m&&v.push.apply(v,i([m])),"string"===typeof p?s.splice.apply(s,[c,1].concat(v)):p.content=v}}else p.content&&i(p.content)}return s}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.a87635cd.chunk.js.map