!function(a){a("keyBoard",["require"],function(a){function b(){var a=0,b=0,c=screen.height,d=screen.width,e=document.documentElement.clientHeight,f=document.documentElement.clientWidth,j=window.devicePixelRatio;switch(window.orientation){case 0:case 180:i?(a=Math.max(c,d),b=Math.max(e,f),g||h||a/j>=b&&f!=d&&(a/=j)):(a=Math.min(c,d),b=Math.min(e,f),g||h||Math.ceil(a/j)>=b&&e!=c&&(a/=j));break;case-90:case 90:i?(a=Math.min(c,d),b=Math.min(e,f),g||h||a/j>=b&&e!=c&&(a/=j)):k||l?(a=Math.max(c,d),b=Math.max(e,f),g||h||a/j>=b&&f!=d&&(a=a/j-100)):(a=Math.max(c,d),b=Math.max(e,f),g||h||Math.ceil(a/j)>=b&&f!=d&&(a/=j));break;default:a=d}window.remFontSize=a/16,document.documentElement.style.fontSize=a/16+"px";try{for(var m=document.getElementById(kb.settings.id+"_kb").querySelectorAll(".keyboardEle"),n=0;n<m.length;n++)$(m[n]).removeClass("active").removeClass("active2")}catch(a){}}function c(){g&&(document.querySelector("html").className="ua-ipad")}function d(a){this.settings={id:"",aW:0,pressStatus:0,kbType:0,pg:{},odd:1,status:0},void 0!=a&&(this.settings=a)}function e(a){return new d($.extend({chaosMode:0,pressStatus:1,kbType:0,odd:51,status:0},a))}var f=null,g=window.navigator.appVersion.match(/iPad/gi),h=window.navigator.appVersion.match(/iphone/gi),i=window.navigator.appVersion.match(/SM-T800/gi),j=window.navigator.appVersion.match(/UCBrowser/gi),k=window.navigator.appVersion.match(/Lenovo A890e/gi)&&window.navigator.appVersion.match(/360 Aphone Browser/gi),l=window.navigator.appVersion.match(/HUAWEI D2-6070/gi)&&window.navigator.appVersion.match(/LieBaoFast/gi),m=!0;c();var n=window.navigator.appVersion.match(/android/gi);if(n&&j){var o=null;window.addEventListener("orientationchange",function(){m=!1,clearTimeout(o),o=setTimeout(b,300)},!1);var p=navigator.userAgent.match(/Firefox/gi);p&&window.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(b,300)},!1),b()}else!function(a,b){function c(){var b=g.getBoundingClientRect().width,c=b/16;g.style.fontSize=c+"px",l.rem=a.rem=c}var d,e=a.document,g=e.documentElement,h=e.querySelector('meta[name="viewport"]'),i=e.querySelector('meta[name="flexible"]'),j=0,k=0,l=b.flexible||(b.flexible={});if(h){0;var m=h.getAttribute("content").match(/initial\-scale=([\d\.]+)/);m&&(k=parseFloat(m[1]),j=parseInt(1/k))}else if(i){var n=i.getAttribute("content");if(n){var o=n.match(/initial\-dpr=([\d\.]+)/),p=n.match(/maximum\-dpr=([\d\.]+)/);o&&(j=parseFloat(o[1]),k=parseFloat((1/j).toFixed(2))),p&&(j=parseFloat(p[1]),k=parseFloat((1/j).toFixed(2)))}}if(!j&&!k){var q=(a.navigator.appVersion.match(/android/gi),a.navigator.appVersion.match(/iphone/gi)),r=a.devicePixelRatio;j=q?r>=3&&(!j||j>=3)?3:r>=2&&(!j||j>=2)?2:1:1,k=1/j}if(g.setAttribute("data-dpr",j),!h)if(h=e.createElement("meta"),h.setAttribute("name","viewport"),h.setAttribute("content","initial-scale="+k+", maximum-scale="+k+", minimum-scale="+k+", user-scalable=no"),g.firstElementChild)g.firstElementChild.appendChild(h);else{var s=e.createElement("div");s.appendChild(h),e.write(s.innerHTML)}a.addEventListener("resize",function(){0,clearTimeout(d),d=setTimeout(c,300)},!1),a.addEventListener("pageshow",function(a){0,a.persisted&&(clearTimeout(d),d=setTimeout(c,300))},!1),a.addEventListener("pagehide",function(a){if(0,null!=f)for(var b=0;b<f.G.length;b++)window.clearInterval(f.G[b])},!1),"complete"===e.readyState?(0,e.body.style.fontSize=12*j+"px"):e.addEventListener("DOMContentLoaded",function(a){0,e.body.style.fontSize=12*j+"px"},!1),c(),l.dpr=a.dpr=j,l.refreshRem=c,l.rem2px=function(a){var b=parseFloat(a)*this.rem;return"string"==typeof a&&a.match(/rem$/)&&(b+="px"),b},l.px2rem=function(a){var b=parseFloat(a)/this.rem;return"string"==typeof a&&a.match(/px$/)&&(b+="rem"),b}}(window,window.lib||(window.lib={}));return d.prototype.generate=function(a){f=a,this.settings.id=(new Date).getTime();var b="",c=!1,d=!0;b=0==this.settings.kbType?'<div id="'+this.settings.id+'_kb" class="keyboard-box" style="-webkit-user-select: none;-moz-user-select: none;">            <div class="keyboard-chinese">                <div class="row1">                    <div class="english">                        <div class="white-52-78 keyboardEle" data-value="q" data-name="0">q</div>                        <div class="white-52-78 keyboardEle" data-value="w" data-name="0">w</div>                        <div class="white-52-78 keyboardEle" data-value="e" data-name="0">e</div>                        <div class="white-52-78 keyboardEle" data-value="r" data-name="0">r</div>                        <div class="white-52-78 keyboardEle" data-value="t" data-name="0">t</div>                        <div class="white-52-78 keyboardEle" data-value="y" data-name="0">y</div>                        <div class="white-52-78 keyboardEle" data-value="u" data-name="0">u</div>                        <div class="white-52-78 keyboardEle" data-value="i" data-name="0">i</div>                        <div class="white-52-78 keyboardEle" data-value="o" data-name="0">o</div>                        <div class="white-52-78 keyboardEle last52-78" data-value="p" data-name="0">p</div>                    </div>                    <div class="number" style="display:none;">                        <div class="white-52-78 keyboardEle" data-value="1" data-name="0">1</div>                        <div class="white-52-78 keyboardEle" data-value="2" data-name="0">2</div>                        <div class="white-52-78 keyboardEle" data-value="3" data-name="0">3</div>                        <div class="white-52-78 keyboardEle" data-value="4" data-name="0">4</div>                        <div class="white-52-78 keyboardEle" data-value="5" data-name="0">5</div>                        <div class="white-52-78 keyboardEle" data-value="6" data-name="0">6</div>                        <div class="white-52-78 keyboardEle" data-value="7" data-name="0">7</div>                        <div class="white-52-78 keyboardEle" data-value="8" data-name="0">8</div>                        <div class="white-52-78 keyboardEle" data-value="9" data-name="0">9</div>                        <div class="white-52-78 keyboardEle" data-value="0" data-name="0">0</div>                    </div>                    <div class="mark" style="display:none;">                        <div class="white-52-78 keyboardEle" data-value="[" data-name="0">[</div>                        <div class="white-52-78 keyboardEle" data-value="]" data-name="0">]</div>                        <div class="white-52-78 keyboardEle" data-value="{" data-name="0">{</div>                        <div class="white-52-78 keyboardEle" data-value="}" data-name="0">}</div>                        <div class="white-52-78 keyboardEle" data-value="#" data-name="0">#</div>                        <div class="white-52-78 keyboardEle" data-value="%" data-name="0">%</div>                        <div class="white-52-78 keyboardEle" data-value="^" data-name="0">^</div>                        <div class="white-52-78 keyboardEle" data-value="*" data-name="0">*</div>                        <div class="white-52-78 keyboardEle" data-value="+" data-name="0">+</div>                        <div class="white-52-78 keyboardEle" data-value="=" data-name="0">=</div>                    </div>                </div>                <div class="row2">                    <div class="english">                        <div class="white-52-78 keyboardEle" data-value="a" data-name="0">a</div>                        <div class="white-52-78 keyboardEle" data-value="s" data-name="0">s</div>                        <div class="white-52-78 keyboardEle" data-value="d" data-name="0">d</div>                        <div class="white-52-78 keyboardEle" data-value="f" data-name="0">f</div>                        <div class="white-52-78 keyboardEle" data-value="g" data-name="0">g</div>                        <div class="white-52-78 keyboardEle" data-value="h" data-name="0">h</div>                        <div class="white-52-78 keyboardEle" data-value="j" data-name="0">j</div>                        <div class="white-52-78 keyboardEle" data-value="k" data-name="0">k</div>                        <div class="white-52-78 keyboardEle" data-value="l" data-name="0">l</div>                    </div>                    <div class="number" style="display:none;">                        <div class="white-52-78 keyboardEle" data-value="-" data-name="0">-</div>                        <div class="white-52-78 keyboardEle" data-value="/" data-name="0">/</div>                        <div class="white-52-78 keyboardEle" data-value=":" data-name="0">:</div>                        <div class="white-52-78 keyboardEle" data-value=";" data-name="0">;</div>                        <div class="white-52-78 keyboardEle" data-value="(" data-name="0">(</div>                        <div class="white-52-78 keyboardEle" data-value=")" data-name="0">)</div>                        <div class="white-52-78 keyboardEle" data-value="$" data-name="0">$</div>                        <div class="white-52-78 keyboardEle" data-value="&" data-name="0">&</div>                        <div class="white-52-78 keyboardEle" data-value="@" data-name="0">@</div>                        <div class="white-52-78 keyboardEle" data-value="\\"" data-name="0">"</div>                    </div>                    <div class="mark" style="display:none;">                        <div class="white-52-78 keyboardEle" data-value="_" data-name="0">_</div>                        <div class="white-52-78 keyboardEle" data-value="\\" data-name="0">/</div>                        <div class="white-52-78 keyboardEle" data-value="|" data-name="0">|</div>                        <div class="white-52-78 keyboardEle" data-value="~" data-name="0">~</div>                        <div class="white-52-78 keyboardEle" data-value="<" data-name="0"><</div>                        <div class="white-52-78 keyboardEle" data-value=">" data-name="0">></div>                        <div class="white-52-78 keyboardEle" data-value="$" data-name="0">$</div>                        <div class="white-52-78 keyboardEle" data-value="&" data-name="0">&</div>                        <div class="white-52-78 keyboardEle" data-value="@" data-name="0">@</div>                        <div class="white-52-78 keyboardEle" data-value="`" data-name="0">`</div>                    </div>                </div>                <div class="row3">                    <div class="english">                        <div class="gray-72-78 shift-72-78 keyboardEle" data-value="\u5927\u5C0F\u5199" data-name="1"><div class="shift-72-78-bg"></div></div>                        <div class="white-52-78 keyboardEle keyboardEle" data-value="z" data-name="0">z</div>                        <div class="white-52-78 keyboardEle keyboardEle" data-value="x" data-name="0">x</div>                        <div class="white-52-78 keyboardEle keyboardEle" data-value="c" data-name="0">c</div>                        <div class="white-52-78 keyboardEle keyboardEle" data-value="v" data-name="0">v</div>                        <div class="white-52-78 keyboardEle keyboardEle" data-value="b" data-name="0">b</div>                        <div class="white-52-78 keyboardEle keyboardEle" data-value="n" data-name="0">n</div>                        <div class="white-52-78 keyboardEle keyboardEle" data-value="m" data-name="0">m</div>                    </div>                    <div class="number" style="display:none;">                        <div class="gray-72-78 keyboardEle" data-value="\u5207\u6362\u7B26\u53F7\u952E\u76D8" data-name="2">#+=</div>                        <div class="white-78-78 keyboardEle" data-value="." data-name="0">.</div>                        <div class="white-78-78 keyboardEle" data-value="," data-name="0">,</div>                        <div class="white-78-78 keyboardEle" data-value="?" data-name="0">?</div>                        <div class="white-78-78 keyboardEle" data-value="!" data-name="0">!</div>                        <div class="white-78-78 keyboardEle" data-value="\'" data-name="0">\'</div>                    </div>                    <div class="mark" style="display:none;">                        <div class="gray-72-78 keyboardEle" data-value="\u5207\u6362\u6570\u5B57\u952E\u76D8" data-name="3">123</div>                        <div class="white-78-78 keyboardEle" data-value="." data-name="0">.</div>                        <div class="white-78-78 keyboardEle" data-value="," data-name="0">,</div>                        <div class="white-78-78 keyboardEle" data-value="?" data-name="0">?</div>                        <div class="white-78-78 keyboardEle" data-value="!" data-name="0">!</div>                        <div class="white-78-78 keyboardEle" data-value="\'" data-name="0">\'</div>                    </div>                    <div class="gray-72-78 del-72-78 keyboardEle" data-value="\u56DE\u5220" data-name="4"><div class="del-72-78-bg"></div></div>                </div>                <div class="row4">                    <div class="english">                        <div class="gray-148-78 keyboardEle" data-value="\u5207\u6362\u6570\u5B57\u952E\u76D8" data-name="3">.?123</div>                    </div>                    <div class="number" style="display:none;">                        <div class="gray-148-78 keyboardEle" data-value="\u5207\u6362\u82F1\u6587\u952E\u76D8" data-name="5">ABC</div>                    </div>                    <div class="mark" style="display:none;">                        <div class="gray-148-78 keyboardEle" data-value="\u5207\u6362\u82F1\u6587\u952E\u76D8" data-name="5">ABC</div>                    </div>                    <div class="white-308-78 keyboardEle" data-value=" " data-name="0">space</div>                    <div class="gray-148-78 keybord-196-94 keyboardEle" data-value="\u5173\u95ED\u952E\u76D8" data-name="6"><div class="keybord-196-94-bg"></div></div>                </div>            </div>        </div>':'<div id="'+this.settings.id+'_kb" class="keyboard-box" style="visibility:hidden;">            <ul class="keyboard-tel">            \t<div class="row1">                <li class="white-196-94 keyboardEle" data-value="1" data-name="0">1</li>                <li class="white-196-94 keyboardEle" data-value="2" data-name="0">2</li>                <li class="white-196-94 keyboardEle" data-value="3" data-name="0">3</li>                </div>                <div class="row1">                <li class="white-196-94 keyboardEle" data-value="4" data-name="0">4</li>                <li class="white-196-94 keyboardEle" data-value="5" data-name="0">5</li>                <li class="white-196-94 keyboardEle" data-value="6" data-name="0">6</li>                </div>                <div class="row1">                <li class="white-196-94 keyboardEle" data-value="7" data-name="0">7</li>                <li class="white-196-94 keyboardEle" data-value="8" data-name="0">8</li>                <li class="white-196-94 keyboardEle" data-value="9" data-name="0">9</li>                </div>                <div class="row1">                <li class="gray-196-94 keybord-196-94 keyboardEle" data-value="\u5173\u95ED\u952E\u76D8" data-name="6"><div class="keybord-196-94-bg"></div></li>                <li class="white-196-94 keyboardEle" data-value="0" data-name="0">0</li>                <li class="gray-196-94 del-196-94 keyboardEle" data-value="\u56DE\u5220" data-name="4"><div class="del-196-94-bg"></div></li>                </div>            </ul>        </div>',$("body").append(b),0==this.settings.kbType?$(".keyboard-chinese")[0].ontouchstart=function(a){var b=a.target.className;if(b.indexOf("row1")>-1||b.indexOf("row2")>-1||b.indexOf("row3")>-1||b.indexOf("row4")>-1)return a.preventDefault(),!1}:1==this.settings.kbType;for(var e=document.getElementById(this.settings.id+"_kb").querySelectorAll(".keyboardEle"),g=this,h=[],i=0;i<e.length;i++){if($(e[i]).on("tap",function(a){if(!c||d){var b=-1,e=this.getAttribute("data-name"),f=this.getAttribute("data-value"),h=g.jq();if(b="6"==e?1:"4"==e?2:"3"==e?4:"5"==e?5:"2"==e?6:"1"==e?7:0,2==g.settings.aW&&0==b){var i=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];i=g.randArray(i,l);for(var j=document.getElementById(g.settings.id+"_kb").querySelectorAll(".row1 .english .keyboardEle,.row2 .english .keyboardEle,.row3 .english .white-52-78"),k=0;k<j.length;k++)j[k].innerHTML=i[k],j[k].setAttribute("data-value",i[k])}if(" "!=f){"6"!=e&&"1"!=e&&h.trigger($.Event("keyboard:pressing")),g.preCallBack(b,f.charCodeAt()^g.settings.odd),"6"!=e&&"1"!=e&&h.trigger($.Event("keyboard:pressed"));var l=!1,m=0;l=!(!$(".shift-72-78").hasClass("active2")&&!$(".shift-72-78").hasClass("active")),$(".shift-72-78").hasClass("active2")||$(".shift-72-78").hasClass("active")?$(".shift-72-78").hasClass("active2")?m=1:$(".shift-72-78").hasClass("active")&&(m=2):m=0,"1"==e?0==m?($(this).addClass("active2"),$(".english").removeClass("low"),$(".english").addClass("upp"),$(".english .white-52-78").each(function(){var a=$(this).attr("data-value");$(this).attr("data-value",a.toUpperCase())})):($(this).removeClass("active2"),$(this).removeClass("active"),$(".english").removeClass("upp"),$(".english").addClass("low"),$(".english .white-52-78").each(function(){var a=$(this).attr("data-value");$(this).attr("data-value",a.toLowerCase())})):(2!=m&&($(".shift-72-78").removeClass("active2"),$(".shift-72-78").removeClass("active")),$(".shift-72-78").hasClass("active2")||$(".shift-72-78").hasClass("active")?($(".english").removeClass("low"),$(".english").addClass("upp"),$(".english .white-52-78").each(function(){var a=$(this).attr("data-value");$(this).attr("data-value",a.toUpperCase())})):($(".english").removeClass("upp"),$(".english").addClass("low"),$(".english .white-52-78").each(function(){var a=$(this).attr("data-value");$(this).attr("data-value",a.toLowerCase())})),$(this).removeClass("active"))}}}),1==g.settings.pressStatus){var j,k=0,l=0,m=!1;e[i].ontouchstart=function(a){if(k=(new Date).getTime(),!c||d){k=(new Date).getTime();var b=$(this).attr("data-name");"1"!=b&&($(this).addClass("active"),c=!0,d=!1);var e=this;return j=window.setInterval(function(){l=(new Date).getTime();var a=l-k,b=$(e).attr("data-name");if("4"==b&&a>500){var c=document.getElementById(g.settings.pg.settings.id),d=setInterval(function(){g.settings.pg.v=g.settings.pg.v.substr(0,g.settings.pg.v.length-1),g.settings.pg.J=g.settings.pg.J.substr(0,g.settings.pg.J.length-1),c.value=c.value.substr(0,g.settings.pg.J.length-1)},50);h.push(d),clearInterval(j)}},1),a.preventDefault(),!1}},e[i].ontouchmove=function(a){return a.preventDefault(),!1},e[i].ontouchend=function(a){c=!1;var b=$(this).attr("data-name");if("1"!=b&&$(this).removeClass("active"),"4"==b){clearInterval(j);for(var d=0;d<h.length;d++)window.clearInterval(h[d]);h=[];for(var e=document.getElementById(g.settings.pg.settings.id),f="",i=0;i<g.settings.pg.J.length;i++)f+="*";e.value=f}return m=!1,a.preventDefault(),!1}}$(e[i]).on("longTap",function(a){return $(this).attr("data-name"),a.preventDefault(),!1}),$(e[i]).on("doubleTap",function(){var a=$(this).attr("data-name");"1"==a&&($(this).removeClass("active2"),$(this).addClass("active"),$(this).hasClass("active2")?($(this).removeClass("active2"),$(this).removeClass("active"),$(".english").removeClass("upp"),$(".english").addClass("low"),$(".english .white-52-78").each(function(){var a=$(this).attr("data-value");$(this).attr("data-value",a.toLowerCase())})):($(".english").removeClass("low"),$(".english").addClass("upp"),$(".english .white-52-78").each(function(){var a=$(this).attr("data-value");$(this).attr("data-value",a.toUpperCase())})))})}},d.prototype.randArray=function(a,b){for(var c=a.length,d=new Array,e=0;c>e;e++)try1[e]=e;for(var f=new Array,e=0;c>e;e++)try2[e]=d.splice(Math.floor(Math.random()*d.length),1);for(var g=new Array,e=0;c>e;e++)b?g[e]=a[f[e]].toUpperCase():g[e]=a[f[e]].toLowerCase();return g},d.prototype.show=function(){var a=this,b='<div id="'+this.settings.id+'_kbLayer" class="keyboard-box-layer"></div>',c=a.jq();c.trigger($.Event("keyboard:show")),setTimeout(function(){if(1==a.settings.aW){var c=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l"];c=a.randArray(c);for(var d=document.getElementById(a.settings.id+"_kb").querySelectorAll(".row1 .english .keyboardEle,.row2 .english .keyboardEle"),e=0;e<d.length;e++)d[e].innerHTML=c[e],d[e].setAttribute("data-value",c[e])}var f=(document.documentElement.scrollTop||document.body.scrollTop,$(".keyboard-box").height()+200);$("body").css("padding-bottom",f);var g=document.getElementById(a.settings.id+"_kb");$(".keyboard-box").addClass("key-board-box-active"),g.style.visibility="visible",a.settings.status=1;var h=$("#"+a.settings.id+"_kbLayer");h.length||$("body").append(b),$("#"+a.settings.id+"_kbLayer").on("tap",function(b){b.stopPropagation(),$(".keyboard-box").hasClass("key-board-box-active")&&a.hide()})},700)},d.prototype.hide=function(){var a=this,b=$("#"+a.settings.id+"_kbLayer");b&&(b.off(),b.remove());var c=a.jq();c.trigger($.Event("keyboard:hide")),setTimeout(function(){$(".keyboard-box").removeClass("key-board-box-active"),$("body").css("padding-bottom",0);for(var b=document.getElementById(a.settings.id+"_kb"),c=0;c<f.G.length;c++)f.currentG!=f.G[c]&&window.clearInterval(f.G[c]);for(var d=0;d<f.T.length;d++)f.T[d].value=f.T[d].value.replace(/I/,"");a.settings.pg={},a.settings.odd=1,setTimeout(function(){b.style.visibility="hidden"},500),a.settings.status=0},0)},d.prototype.jq=function(){return $(document.getElementById(this.settings.id+"_kb"))},e})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),!function(define){define("passGuard",["require"],function(require){function passGuard(a){this.settings={id:"",maxLength:12,regExp1:"[0-9]",regExp2:"[0-9]{6,12}",displayMode:0,rsaPublicKey:"",randomKey:"",enterEvent:"",keyBoard:{},mappingArray:[]},this.J="",this.v="",void 0!=a&&(this.settings=a)}function Plugin(a){return new passGuard($.extend({maxLength:99,regExp1:"",regExp2:"",displayMode:0},a))}return passGuard.G=[],passGuard.T=[],passGuard.L=void 0,passGuard.prototype.generate=function(a,b){this.settings.keyBoard=b,this.settings.id=a;var c=this.settings.httpClient,d=document.getElementById(a);passGuard.T.push(d);var e=this,f=!1,g=null;try{d.onfocus=function(a){e.jq().trigger($.Event("passguard:focus"));for(var d=0;d<passGuard.G.length;d++)window.clearInterval(passGuard.G[d]);for(var h=0;h<passGuard.T.length;h++)passGuard.T[h].value=passGuard.T[h].value.replace(/I/,"");passGuard.G=[],void 0==passGuard.L&&c("IF010010",{}).then(function(a){e.setMapping(a.keys)});var i=this;return g=setInterval(function(){f?(i.value=i.value.replace(/I/,""),f=!1):(i.value=i.value+"I",f=!0)},500),passGuard.G.push(g),b.preCallBack=e.preCallBack,b.settings.pg=e,b.settings.odd=51,0==b.settings.status&&b.show(),this.blur(),a.preventDefault(),!1}}catch(a){alert(a)}},passGuard.prototype.show=function(a,b){this.settings.keyBoard=b,this.settings.id=a;var c=document.getElementById(a);passGuard.T.push(c);var d=this,e=!1,f=null;try{for(var g=0;g<passGuard.G.length;g++)window.clearInterval(passGuard.G[g]);for(var h=0;h<passGuard.T.length;h++)passGuard.T[h].value=passGuard.T[h].value.replace(/I/,"");passGuard.G=[],void 0==passGuard.L&&httpClient("IF010010",{}).then(function(a){d.setMapping(a.keys)});var i=this;f=setInterval(function(){e?(i.value=i.value.replace(/I/,""),e=!1):(i.value=i.value+"I",e=!0)},500),passGuard.G.push(f),b.preCallBack=d.preCallBack,b.settings.pg=d,b.settings.odd=51,b.show()}catch(a){alert(a)}},passGuard.prototype.preCallBack=function(a,b){var c=51^b,d=this.settings.pg,e=document.getElementById(d.settings.id);if(e.value=e.value.replace(/I/,""),1==a)this.settings.pg.settings.keyBoard.hide();else if(2==a)e.value=e.value.substr(0,e.value.length-1),d.v=d.v.substr(0,d.v.length-1),d.J=d.J.substr(0,d.J.length-1);else if(4==a)$(".english").hide(),$(".number").show(),$(".mark").hide();else if(5==a)$(".english").show(),$(".number").hide(),$(".mark").hide();else if(6==a)$(".mark").show(),$(".number").hide();else if(0==a){var f=new RegExp(d.settings.regExp1),g=String.fromCharCode(c),h=d.settings.maxLength,i=e.value.length;h>i?f.test(g)&&(d.J+=d.mapping(g),d.v+=g,1==d.settings.displayMode?e.value+=g:e.value+="*",i>=h-1&&this.hide()):this.hide()}},passGuard.prototype.setMapping=function(a){a&&(passGuard.L=a)},passGuard.prototype.getOutput=function(){return this.J},passGuard.prototype.getLength=function(){return this.J.length},passGuard.prototype.getValid=function(){var a=new RegExp(this.settings.regExp2);return a.test(this.v)?0:1},passGuard.prototype.mapping=function(key){var keyCode=key.charCodeAt(0),bC=passGuard.L,aE=eval(bC);return String.fromCharCode(aE[keyCode-33])},passGuard.prototype.setRandKey=function(a){try{a&&(this.settings.randomKey=a)}catch(a){alert(a)}},passGuard.prototype.clearPass=function(){var a=document.getElementById(this.settings.id);a.value="",this.v="",this.J=""},passGuard.prototype.build=function(a,b){this.generate(a,b),b.generate(passGuard)},passGuard.prototype.jq=function(){return $(document.getElementById(this.settings.id))},Plugin})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)});