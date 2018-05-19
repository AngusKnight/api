var __DirectusExtension__=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=39)}({0:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o,l){var a=typeof(e=e||{}).default;"object"!==a&&"function"!==a||(e=e.default);var u,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=n,h._compiled=!0),r&&(h.functional=!0),s&&(h._scopeId=s),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},h._ssrRegister=u):i&&(u=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(h.functional){h._injectStyles=u;var p=h.render;h.render=function(e,t){return u.call(t),p(e,t)}}else{var c=h.beforeCreate;h.beforeCreate=c?[].concat(c,u):[u]}return{exports:e,options:h}}n.d(t,"a",function(){return r})},1:function(e,t){e.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1}}}},127:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".interface-markdown[data-v-36c0f214]{max-width:var(--width-large);position:relative}.preview[data-v-36c0f214],.textarea[data-v-36c0f214]{max-width:var(--width-large);min-height:200px}.textarea[data-v-36c0f214]{font-family:monospace}button[data-v-36c0f214]{position:absolute;top:1em;right:1em}button i[data-v-36c0f214]{color:var(--light-gray);transition:var(--fast) var(--transition)}.user-is-tabbing button:focus i[data-v-36c0f214],button:hover i[data-v-36c0f214]{color:var(--primary)}.preview[data-v-36c0f214]{background-color:var(--white);padding:10px;border:var(--input-border-width) solid var(--lighter-gray);border-radius:var(--border-radius)}",""])},128:function(e,t,n){var r=n(127);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,n(4).default)("215c7cae",r,!0,{})},14:function(e,t){var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}e.exports=n},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],o=s[0],l={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},25:function(e,t,n){(function(r){var i,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(function(){"use strict";var r={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:b,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:b,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:b,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};function o(e){this.tokens=[],this.tokens.links={},this.options=e||y.defaults,this.rules=r.normal,this.options.gfm&&(this.options.tables?this.rules=r.tables:this.rules=r.gfm)}r.bullet=/(?:[*+-]|\d+\.)/,r.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,r.item=c(r.item,"gm")(/bull/g,r.bullet)(),r.list=c(r.list)(/bull/g,r.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+r.def.source+")")(),r.blockquote=c(r.blockquote)("def",r.def)(),r._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",r.html=c(r.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,r._tag)(),r.paragraph=c(r.paragraph)("hr",r.hr)("heading",r.heading)("lheading",r.lheading)("blockquote",r.blockquote)("tag","<"+r._tag)("def",r.def)(),r.normal=m({},r),r.gfm=m({},r.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),r.gfm.paragraph=c(r.paragraph)("(?!","(?!"+r.gfm.fences.source.replace("\\1","\\2")+"|"+r.list.source.replace("\\1","\\3")+"|")(),r.tables=m({},r.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),o.rules=r,o.lex=function(e,t){return new o(t).lex(e)},o.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},o.prototype.token=function(e,t,n){var i,s,o,l,a,u,h,p,c;for(e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(t&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),u={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},p=0;p<u.align.length;p++)/^ *-+: *$/.test(u.align[p])?u.align[p]="right":/^ *:-+: *$/.test(u.align[p])?u.align[p]="center":/^ *:-+ *$/.test(u.align[p])?u.align[p]="left":u.align[p]=null;for(p=0;p<u.cells.length;p++)u.cells[p]=u.cells[p].split(/ *\| */);this.tokens.push(u)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t,!0),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),l=o[2],this.tokens.push({type:"list_start",ordered:l.length>1}),i=!1,c=(o=o[0].match(this.rules.item)).length,p=0;p<c;p++)h=(u=o[p]).length,~(u=u.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(h-=u.length,u=this.options.pedantic?u.replace(/^ {1,4}/gm,""):u.replace(new RegExp("^ {1,"+h+"}","gm"),"")),this.options.smartLists&&p!==c-1&&(l===(a=r.bullet.exec(o[p+1])[0])||l.length>1&&a.length>1||(e=o.slice(p+1).join("\n")+e,p=c-1)),s=i||/\n\n(?!\s*$)/.test(u),p!==c-1&&(i="\n"===u.charAt(u.length-1),s||(s=i)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(u,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});else if(!n&&t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(t&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),u={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<u.align.length;p++)/^ *-+: *$/.test(u.align[p])?u.align[p]="right":/^ *:-+: *$/.test(u.align[p])?u.align[p]="center":/^ *:-+ *$/.test(u.align[p])?u.align[p]="left":u.align[p]=null;for(p=0;p<u.cells.length;p++)u.cells[p]=u.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(u)}else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var l={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,url:b,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:b,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};function a(e,t){if(this.options=t||y.defaults,this.links=e,this.rules=l.normal,this.renderer=this.options.renderer||new u,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=l.breaks:this.rules=l.gfm:this.options.pedantic&&(this.rules=l.pedantic)}function u(e){this.options=e||{}}function h(e){this.tokens=[],this.token=null,this.options=e||y.defaults,this.options.renderer=this.options.renderer||new u,this.renderer=this.options.renderer,this.renderer.options=this.options}function p(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=(i=i.source||i).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function f(e,t){return d[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?d[" "+e]=e+"/":d[" "+e]=e.replace(/[^/]*$/,"")),e=d[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}l._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,l._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,l.link=c(l.link)("inside",l._inside)("href",l._href)(),l.reflink=c(l.reflink)("inside",l._inside)(),l.normal=m({},l),l.pedantic=m({},l.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),l.gfm=m({},l.normal,{escape:c(l.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(l.text)("]|","~]|")("|","|https?://|")()}),l.breaks=m({},l.gfm,{br:c(l.br)("{2,}","*")(),text:c(l.gfm.text)("{2,}","*")()}),a.rules=l,a.output=function(e,t,n){return new a(t,n).output(e)},a.prototype.output=function(e){for(var t,n,r,i,s="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),s+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=p(":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1])),r=this.mangle("mailto:")+n):r=n=p(i[1]),s+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):p(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,s+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){s+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),s+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),s+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),s+=this.renderer.codespan(p(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),s+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),s+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),s+=this.renderer.text(p(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),r=n=p(i[1]),s+=this.renderer.link(r,null,n);return s},a.prototype.outputLink=function(e,t){var n=p(t.href),r=t.title?p(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,p(e[1]))},a.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},a.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},u.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+p(t,!0)+'">'+(n?e:p(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"\n</code></pre>"},u.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},u.prototype.html=function(e){return e},u.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},u.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},u.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},u.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},u.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},u.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},u.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},u.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},u.prototype.strong=function(e){return"<strong>"+e+"</strong>"},u.prototype.em=function(e){return"<em>"+e+"</em>"},u.prototype.codespan=function(e){return"<code>"+e+"</code>"},u.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},u.prototype.del=function(e){return"<del>"+e+"</del>"},u.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent((i=e,i.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}var i;this.options.baseUrl&&!g.test(e)&&(e=f(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+">"+n+"</a>"},u.prototype.image=function(e,t,n){this.options.baseUrl&&!g.test(e)&&(e=f(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+(this.options.xhtml?"/>":">")},u.prototype.text=function(e){return e},h.parse=function(e,t,n){return new h(t,n).parse(e)},h.prototype.parse=function(e){this.inline=new a(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},h.prototype.next=function(){return this.token=this.tokens.pop()},h.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},h.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},h.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)this.token.align[e],n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var o=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o);case"list_item_start":for(s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var d={},g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function b(){}function m(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function y(e,t,n){if(n||"function"==typeof t){n||(n=t,t=null);var r,i,s=(t=m({},y.defaults,t||{})).highlight,l=0;try{r=o.lex(e,t)}catch(e){return n(e)}i=r.length;var a=function(e){if(e)return t.highlight=s,n(e);var i;try{i=h.parse(r,t)}catch(t){e=t}return t.highlight=s,e?n(e):n(null,i)};if(!s||s.length<3)return a();if(delete t.highlight,!i)return a();for(;l<r.length;l++)!function(e){"code"!==e.type?--i||a():s(e.text,e.lang,function(t,n){return t?a(t):null==n||n===e.text?--i||a():(e.text=n,e.escaped=!0,void(--i||a()))})}(r[l])}else try{return t&&(t=m({},y.defaults,t)),h.parse(o.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(t||y.defaults).silent)return"<p>An error occurred:</p><pre>"+p(e.message+"",!0)+"</pre>";throw e}}b.exec=b,y.options=y.setOptions=function(e){return m(y.defaults,e),y},y.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new u,xhtml:!1,baseUrl:null},y.Parser=h,y.parser=h.parse,y.Renderer=u,y.Lexer=o,y.lexer=o.lex,y.InlineLexer=a,y.inlineLexer=a.output,y.parse=y,void 0!==e&&"object"===s(t)?e.exports=y:void 0===(i=function(){return y}.call(t,n,t,e))||(e.exports=i)}).call(function(){return this||("undefined"!=typeof window?window:r)}())}).call(this,n(14))},3:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var s=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[r].concat(o).concat([s]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},39:function(e,t,n){"use strict";n.r(t);var r=n(25),i=n.n(r),s=n(1),o={data:function(){return{editor:!0}},computed:{compiledMarkdown:function(){return this.value?i()(this.value):this.value}},mixins:[n.n(s).a]},l=n(0),a=Object(l.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-markdown"},[n("v-textarea",{directives:[{name:"show",rawName:"v-show",value:e.editor,expression:"editor"}],staticClass:"textarea",attrs:{value:e.value,id:e.name},on:{input:function(t){e.$emit("input",t)}}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.editor,expression:"!editor"}],staticClass:"preview",domProps:{innerHTML:e._s(e.compiledMarkdown)}}),e._v(" "),n("button",{on:{click:function(t){e.editor=!e.editor}}},[n("i",{staticClass:"material-icons"},[e._v(e._s(e.editor?"remove_red_eye":"code"))])])],1)},[],!1,function(e){n(128)},"data-v-36c0f214",null);t.default=a.exports},4:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(2),i=n.n(r),s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},l=s&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,h=!1,p=function(){},c=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,r){h=n,c=r||{};var s=i()(e,t);return b(s),function(t){for(var n=[],r=0;r<s.length;r++){var l=s[r];(a=o[l.id]).refs--,n.push(a)}for(t?b(s=i()(e,t)):s=[],r=0;r<n.length;r++){var a;if(0===(a=n[r]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete o[a.id]}}}}function b(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(y(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(y(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(h)return p;r.parentNode.removeChild(r)}if(d){var i=u++;r=a||(a=m()),t=k.bind(null,r,i,!1),n=k.bind(null,r,i,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),c.ssrId&&e.setAttribute(f,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var v,x=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function k(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}}});