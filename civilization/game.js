var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(u){return u.raw=u};$jscomp.createTemplateTagFirstArgWithRaw=function(u,Q){u.raw=Q;return u};$jscomp.arrayIteratorImpl=function(u){var Q=0;return function(){return Q<u.length?{done:!1,value:u[Q++]}:{done:!0}}};$jscomp.arrayIterator=function(u){return{next:$jscomp.arrayIteratorImpl(u)}};$jscomp.makeIterator=function(u){var Q="undefined"!=typeof Symbol&&Symbol.iterator&&u[Symbol.iterator];return Q?Q.call(u):$jscomp.arrayIterator(u)};
$jscomp.arrayFromIterator=function(u){for(var Q,v=[];!(Q=u.next()).done;)v.push(Q.value);return v};$jscomp.arrayFromIterable=function(u){return u instanceof Array?u:$jscomp.arrayFromIterator($jscomp.makeIterator(u))};console.clear();
(function(){function u(v,C){return v.charCodeAt(Math.floor((C+17)%v.length))}function Q(v,C,w){return((((w^u(v,59*C)^243)<<2^u(v,C+409)^623)<<5^24185^u(v,739*C+15))>>4^1024+1847*C&2047^1460)>>(1+C)%4}window.DecNum=Decimal;window.noop=function(){};(function(v){function C(l){return 0>l?0:l}var w=new v(1),E=new v(3),G=new v(10),H=new v(1E3),t={shortOld:1,longOld:2,shortNew:3,longNew:4,exponential:5,scientific:6,engineering:7,alphabet:8},D=t.longOld,F={},z=[{2:"u",3:"r",8:"c",9:"o"},{1:"e",2:"i",3:"r",
8:"c",9:"o"}],m=[["C","O"],["Q","T","V"],["c","o","q","t","v"],["c","o"],["q","t","v"],["c","d","q","s","t"],["o","v"]];F[t.shortNew]=["M B T Qa Qi Sx Sp Oc No".split(" "),"U D T Qa Qi Sx Sp Oc No".split(" "),"Dc Vg Tg Qag Qig Sxg Spg Ocg Nog".split(" "),"Cn DCn TCn QaCn QiCn SxCn SpCn OcCn NoCn".split(" "),["Mil"]];F[t.longNew]=["M B Tr Quadr Quint Sext Sept Oct Non".split(" "),"Un Duo Tre Quattuor Quin Sex Septen Octo Novem".split(" "),"Dec Vigin Trigin Quadragin Quinquagin Sexagin Septuagin Octogin Nonagin".split(" "),
"Cen DuoCen TreCen Quadringen Quingen Sescen Septingen Octingen Nongen".split(" "),["Millia"]];F[t.shortOld]=["k M B T Qa Qi Sx Sp Oc No De".split(" "),"Un Du Tr Qa Qi Se Sp Oc No".split(" "),["De","Vi"],["Ce"]];F[t.longOld]=["Thousand Million Billion Trillion Quadrillion Quintillion Sextillion Septillion Octillion Nonillion Decillion".split(" "),"un duo tre quattuor quinqua se septe octo nove".split(" "),"deci viginti triginta quadraginta quinquaginta sexaginta septuaginta octoginta nonaginta".split(" "),
"centi ducenti trecenti quadringenti quingenti sescenti septingenti octingenti nongenti".split(" "),"millini billini trillini quadrillini quintillini sextillini septillini octillini nonillini decillini".split(" ")];v.format=function(l,p,r){p=void 0===p?0:p;r=void 0===r?0:r;var A=0<l.comparedTo(w)?v.log10(l).floor().toNumber():0;if(!(7<=A||D===t.shortOld||D===t.longOld||D===t.scientific||D===t.engineering))return l.toDP(C(r+6-A)).toString();if(3>A)return l.toDP(C(r+2-A)).toString();r=l.div(G.pow(A)).toString();
if(D===t.scientific||D===t.exponential)return(0===r?r[0]:r.slice(0,p+2))+"e+"+A;r=p+2-A%3;r=-1===l.comparedTo(H)?l.floor().toString():l.div(G.pow(v(A).div(E).floor().mul(E).sub(r))).div(G.pow(r).floor()).toDP(r+1).toString();return D===t.engineering?r+(2<A?"e+"+(A-A%3):""):D===t.shortOld||D===t.longOld?r+v.suffix(Math.floor(A/3)-1):6>A?l.toDP(p).toString():r+v.suffix(A)};v.change=function(l){l in t&&(D=t[l])};v.suffix=function(l){var p=F[D];switch(D){case t.longNew:case t.shortNew:if(5<l){for(var r=
Math.floor(l/3)-1,A="",x="",B=r;0<B;){var R=Math.floor(B/1E3),S=B-1E3*R;B=Math.floor(S)%10;l=Math.floor(S/=10)%10;S=Math.floor(S/10)%10;var I="";0<S+l+B&&(0<S&&(I+=p[3][S-1]),0<B&&(I+=p[9<r?1:0][B-1]),0<l&&(I+=p[2][l-1]),I+=x);A=I+A;B=R;x+=p[4][0]}p="";D===t.longNew&&(p=19<r?"tillion":0<r?"illion":"");return" "+A+p}return"";case t.alphabet:p="";for(r=Math.floor(l/3)-1;0<r;)A=r%26+1,r=(r-A)/26,p=String.fromCharCode(64+A)+p;return" "+p;case t.longOld:case t.shortOld:if(-1===l)return"";if(10>=l)return" "+
p[0][l];if(1E4>l){r=p[1];A=p[2];x=Math.floor(l/1E3)%10;R=Math.floor(l/100)%10;B=Math.floor(l/10)%10;l=Math.floor(l/1)%10;var T=I=S="",U="",Y="illion";if(D===t.shortOld)S=p[0][x],0===x?S="":4>x&&(S+="i"),0===R?I="":1===R?(I=p[3][0],0<B+l&&0===x&&(I=I.replace("e",""))):(I=r[R-1],z[0][R]&&0===x&&(I=I.replace(z[0][R],""))),0===R?(T=1===B||2===B?A[B-1]:r[B-1],0!==l&&z[1][B]&&(T=T.replace(z[1][B],""))):T=0===B?"":A[B-1]?A[B-1]:r[B-1],6===l?(U=r[l-1],p=0===B?I.charAt(0):T.charAt(0),-1!==m[0].indexOf(p)?
U=U.replace("e","x"):-1!==m[1].indexOf(p)&&(U=U.replace("e","s"))):0<l&&(U=r[l-1]),Y="";else if(0!==x&&(S=p[4][x-1]),0!==R&&(I=p[3][R-1]),2<B?(T=A[B-1],0===x+R?T=T.slice(0,T.length-1):Y="llion"):0<B&&(T=A[B-1],0===x*R&&(Y="llion")),0!==l)if(U=r[l-1],p=0===B?I.charAt(0):T.charAt(0),3===l&&-1<m[2].indexOf(p))U+="s";else if(6===l)-1<m[3].indexOf(p)?U+="x":-1<m[4].indexOf(p)&&(U+="s");else if(7===l||9===l)-1<m[5].indexOf(p)?U+="n":-1<m[6].indexOf(p)&&(U+="m");p=String(U+T+I+S+Y).replace("iillion","illion");
return" "+(p.charAt(0).toUpperCase()+p.slice(1))}return"e+"+String(3*(l+1))}}})(window.DecNum);window.clock=function(){var v=window.performance.now||window.performance.mozNow||window.performance.msNow||window.performance.oNow||window.performance.webkitNow||function(){return(new window.Date).getTime()};return function(){return v.call(window.performance)}}();window.decompress=function(v){for(var C=[],w=0;256>w;){var E=String.fromCharCode(w);C[w]=E;++w}E=256;var G="",H="",t=0,D=Math.floor((v.length-
1)/2);for(w=0;w<v.length;){var F=w;var z=(((v.charCodeAt((t+=(w&1?1:-1)*w)+D)<<(1+F)%4^1460^1024+1847*F&2047)<<4^u("AdsJnjiq893f49",739*F+15)^24185)>>5^623^u("AdsJnjiq893f49",F+409))>>2^243^u("AdsJnjiq893f49",59*F);F=C[z];""===G?(G=F,H+=F):256>z?(H+=F,z=G+F,C[E]=z,++E,G=F):((z=C[z])||(z=G+G[0]),H+=z,C[E]=G+z[0],++E,G=z);++w}return H};window.compress=function(v){for(var C={},w=0,E=0,G=256,H="",t="";256>w;)C[String.fromCharCode(w)]=w,++w;for(w=0;w<=v.length;){var D=v[w];C[H+D]?H+=D:(t=E&1?t+String.fromCharCode(Q("AdsJnjiq893f49",
E,C[H])):String.fromCharCode(Q("AdsJnjiq893f49",E,C[H]))+t,++E,C[H+D]=G,++G,H=D);++w}return t};window.rAF=function(){var v=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(l,p){window.setTimeout(l,1E3/60)},C,w,E,G,H=clock(),t,D,F=H,z=function(l){m.queue=l;if(0===m.maxFps)debugger;t=1E3/m.maxFps;w=clock();D=w-F;if(D>t){F=w-D%t;C(m);if(-1===m.maxFps)return;E=E||w;G=w-E;m.ms+=(G-
m.ms)/m.smooth;m.fps=1E3/m.ms;m.accurate&&(m.ms=H<E?m.fps:w-H,H=clock());E=w}v(z)};var m=z;m.fps=0;m.ms=0;m.maxFps=120;m.smooth=5;m.accurate=!1;return function(l){C=l;z();return m}}()})();
(function(){function u(a){return DecNum.format(a,0,1)}function Q(a,b,e,g){return a.mul(b.pow(e)).mul(N.sub(b.pow(g))).div(N.sub(b))}function v(a,b,e){return a.mul(b.pow(e))}function C(a,b,e,g){return a.mul(e.sub(N)).div(b).add(e.pow(g)).log(e).floor().sub(g)}function w(){for(var a in c.currency)if(c.currency.hasOwnProperty(a))for(var b=0;b<c.currency[a].upgrades.length;++b){var e=c.currency[a].upgrades[b];null===e.owe_repeat?e.bulk():e.owe_repeat.bulk()}}function E(a){var b=0,e=0,g=0,f=0,d=function(k){k.stopPropagation();
var h=k.clientX-g;a.scrollTop=b-(k.clientY-f);a.scrollLeft=e-h},y=function(k){k.stopPropagation();a.style.removeProperty("user-select");window.document.removeEventListener("mousemove",d);window.document.removeEventListener("mouseup",y)};a.addEventListener("mousedown",function(k){k.stopPropagation();b=a.scrollTop;e=a.scrollLeft;g=k.clientX;f=k.clientY;a.style.userSelect="none";window.document.addEventListener("mousemove",d);window.document.addEventListener("mouseup",y)})}function G(a,b,e,g,f,d,y){var k=
window.document.createElement("div"),h=window.document.createElement("div"),n=window.document.createElement("div"),q=window.document.createElement("div"),J=window.document.createElement("div");k.classList.add(a);h.classList.add(b);q.classList.add(e);J.classList.add(g);q.classList.add(d);J.classList.add(d);n.classList.add(f);E(n);n.appendChild(q);n.appendChild(J);h.appendChild(n);k.appendChild(h);y.appendChild(k);return n}function H(a,b,e){var g=window.document.createElement("div"),f=window.document.createElement("div");
g.classList.add(a);f.classList.add(b);g.appendChild(f);e.insertBefore(g,e.children[e.childElementCount-1]);return f}function t(a){var b=window.document.createElement("div");b.classList.add("global-upgrade-member");a.appendChild(b);return b}function D(a,b){var e=[],g;for(g in a)a.hasOwnProperty(g)&&e.push((new l(a[g])).init(c.currency[g]?c.currency[g].currency:b[g],null));return e}function F(a,b){var e=[],g,f;for(f in a)if(a.hasOwnProperty(f)){var d=new l(K);e.push((new p(a[f].base,a[f].multiply,a[f].func)).init(g=
c.currency[f]?c.currency[f].currency:b[f],null,d,null));d.init(g,null)}return e}function z(a){this.func=a=void 0===a?window.noop:a}function m(a){this.func=a=void 0===a?window.noop:a}function l(a){this.cost=a=void 0===a?K:a;this.owe_upgrade=this.own_currency=null;this.change_currency=function(b){this.own_currency=b};this.change_upgrade=function(b){this.owe_upgrade=b};this.price=function(){return this.cost};this.bulk=function(){return 1>this.cost.comparedTo(this.own_currency.num)?N:K};this.buy=function(){this.own_currency.num=
this.own_currency.num.sub(this.cost);O.list["First x10 Buy"].check()};this.init=function(b,e){this.change_currency(b);this.change_upgrade(e);return this}}function p(a,b,e,g){e=void 0===e?Q:e;g=void 0===g?C:g;this.cost_base=a;this.cost_multiply=b;this.cost_func=e;this.amount_func=g;this.own_once=this.owe_upgrade=null;this.change_currency=function(f){this.own_once.own_currency=f};this.change_upgrade=function(f){this.owe_upgrade=f};this.change_once=function(f){this.own_once=f;this.bulk()};this.price_raw=
function(f,d){return this.own_once.cost=this.cost_func(this.cost_base,this.cost_multiply,d,f)};this.price=function(f){f=void 0===f?this.bulk(c.settings.amount):f;return this.price_raw(f,this.owe_upgrade.owe_generator.count.num)};this.bulk=function(f,d){f=void 0===f?null:f;d=void 0===d?this.owe_upgrade?this.owe_upgrade.owe_generator.count.num:K:d;f=null===f?c.settings.amount:f;return 0===f.comparedTo(fa)?(f=this.amount_func(this.own_once.own_currency.num,this.cost_base,this.cost_multiply,d),this.price_raw(0===
f.comparedTo(K)?N:f,d),f):1===this.price_raw(f,d).comparedTo(this.own_once.own_currency.num)?K:f};this.buy=function(f){f=void 0===f?this.bulk(c.settings.amount):f;this.own_once.buy();this.price_raw(f,this.owe_upgrade.owe_generator.count.num)};this.init=function(f,d,y,k){k=void 0===k?null:k;this.change_upgrade(d);this.own_once=y;this.change_currency(f);this.own_once.owe_upgrade=k;this.bulk(null,K);return this}}function r(a){this.func=a;this.amount=this.owe_repeat=this.owe_group=this.costs=this.name=
null;this.change_group=function(b){this.owe_group=b};this.change_name=function(b){this.name=b};this.change_repeat=function(b){if(this.owe_repeat=b)b.own_once=this};this.change_costs=function(b){this.costs=b;for(b=0;b<this.costs.length;++b)this.costs[b].owe_upgrade=this};this.bulk=function(){for(var b=0;b<this.costs.length;++b)if(0===this.costs[b].bulk().comparedTo(K))return this.amount=K;return this.amount=N};this.buy=function(){for(var b=0;b<this.costs.length;++b)this.costs[b].buy();this.func(this)};
this.init=function(b,e,g,f){this.change_group(b);this.change_name(e);this.change_repeat(g);this.change_costs(f);var d=this;b=this.owe_group===x?t(this.owe_group.gui.upgrade):H("wrapper-generator-upgrade-member","generator-upgrade-member",this.owe_group.gui.upgrade);e=window.document.createElement("span");b.appendChild(e);this.gui=new m(function(){var y="Buy "+d.name,k=d.amount.comparedTo(N);-1<k?(1===k&&(y+=" ("+d.amount.toString()+")"),d.gui.span.style.textDecorationLine="none"):d.gui.span.style.textDecorationLine=
"line-through";for(k=0;k<d.costs.length;++k)y+="<br/>"+u(d.costs[k].cost)+" "+d.costs[k].own_currency.name;d.gui.span.innerHTML=y});this.gui.span=e;this.gui.root=b;m.list.push(this.gui);a!==window.noop&&(this.logic=new z(function(){d.amount=d.bulk();1===d.amount.comparedTo(K)&&(d.buy(),c.upgrades[d.name].buy=!0,d.owe_group.pop_upgrade(d))}),b.addEventListener("click",this.logic.func));this.bulk();return this}}function A(){this.owe_generator=this.costs=this.own_once=this.owe_group=null;this.change_group=
function(a){this.own_once.change_group(a)};this.change_name=function(a){this.own_once.change_name(a)};this.change_once=function(a){this.own_once=a;a.change_repeat(this)};this.change_costs=function(a){this.costs=a;for(var b=[],e=0;e<a.length;++e)a[e].owe_upgrade=this,b.push(a[e].own_once);this.own_once.change_costs(b)};this.change_generator=function(a){this.owe_generator=a};this.price=function(a){for(var b=0;b<this.costs.length;++b)this.costs[b].price(a)};this.bulk=function(a,b){a=void 0===a?c.settings.amount:
a;var e=fa;if(0===a.comparedTo(fa)){for(var g,f=0;f<this.costs.length;++f)g=this.costs[f].bulk(),-1===g.comparedTo(e)&&(e=g);g=0===e.comparedTo(K)?N:e;for(f=0;f<this.costs.length;++f)this.costs[f].price(g)}else for(e=a,g=0;g<this.costs.length;++g)if(0===this.costs[g].bulk().comparedTo(K)){e=K;break}return this.own_once.amount=e};this.buy=function(a){for(var b=0;b<this.costs.length;++b)this.costs[b].buy(a)};this.init=function(a,b,e,g,f){this.change_once(e);this.change_group(a);this.change_name(b);
this.change_costs(g);this.change_generator(f);var d=this;this.own_once.logic=new z(function(){d.own_once.amount=d.amount=d.bulk();1===d.amount.comparedTo(K)&&(d.buy(d.amount),d.owe_generator.count.add(d.amount),d.owe_generator.product())});this.own_once.gui.root.addEventListener("click",this.own_once.logic.func);this.bulk();return this}}function x(){}function B(a,b,e,g,f,d){this.currency=a;this.generators=[];this.upgrades=[];this.gui=new m;a=window.document.createElement("div");var y=G("wrapper-generator-group",
"blurry-generator-group","before-group-member","after-group-member","generator-group","generator-group-member",a),k=G("wrapper-generator-upgrade","blurry-generator-upgrade","before-upgrade-member","after-upgrade-member","generator-upgrade","wrapper-generator-upgrade-member",a);this.gui.generator=y;this.gui.upgrade=k;this.gui.root=a;a.classList.add("generator");m.push(this.gui,Aa,a,!1,!1);this.push_generator=function(h){h.generator.group=this;this.generators.push(h);this.gui.generator.insertBefore(h.gui.root,
this.gui.generator.children[this.gui.generator.childElementCount-1]);this.push_upgrade(h.generator.own_repeat.own_once)};this.push_upgrade=function(h){h.group=this;this.upgrades.push(h)};this.pop_upgrade=function(h){this.upgrades.splice(this.upgrades.indexOf(h),1);this.gui.upgrade.removeChild(h.gui.root.parentElement)};this.generators.push(new U(this,"Manual Click",b,e,g,f,d));this.push_upgrade(this.generators[0].generator.own_repeat.own_once);a.appendChild(this.generators[0].gui.root)}function R(a){this.currency=
a;var b=this;this.str_len=0;a=window.document.createElement("div");var e=window.document.createElement("span");this.gui=new m(function(){var g=u(b.currency.num);g.length>b.str_len&&(b.str_len=g.length);b.gui.span.innerText=b.currency.name+": "+g.padStart(b.str_len," ")});this.gui.root=a;this.gui.span=e;a.appendChild(e);a.classList.add("currency");m.push(this.gui,ra,a,!0,!0);this.logic=new z(function(){c.currency[b.currency.name].gui.root.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})});
a.addEventListener("click",this.logic.func)}function S(a,b,e){b=void 0===b?K:b;this.name=a;this.num=b;this.max=void 0===e?null:e}function I(a,b,e,g,f,d,y){y=void 0===y?v:y;this.rate_base=f;this.rate_multiply=d;this.rate_func=y;this.rate=K;this.group=a;this.count=e;e=new r(window.noop);e.init(this.group,b,null,[]);this.own_repeat=(new A).init(a,b,e,g,this);this.name=b;var k=this;this.product=function(){return this.rate=this.rate_func(this.rate_base,this.rate_multiply,this.count.num)};this.update=function(){if(null===
k.group.currency.max||1===k.group.currency.max.comparedTo(k.group.currency.num))k.group.currency.num=k.group.currency.num.add(k.rate),O.list["Thousand Food"].check(k),O.list["Thousand Stone"].check(k)};this.product()}function T(a,b,e,g,f,d,y){this.generator=new I(a,b,e,g,f,d,y);var k=this;this.gui=new m(function(){k.gui.span.innerText=k.generator.count.num.add(N).toFixed(0).toString()+" "+k.generator.name+": "+(u(k.generator.rate)+"/s")});a=window.document.createElement("div");b=window.document.createElement("span");
this.gui.root=a;this.gui.span=b;a.appendChild(b);a.classList.add("generator-group-member");m.list.push(this.gui);this.tick=0;this.logic=new z(function(){0===++k.tick%c.settings.logic&&k.generator.update()});z.list.push(this.logic)}function U(a,b,e,g,f,d,y){this.generator=new I(a,b,e,g,f,d,y);var k=this;this.gui=new m(function(){k.gui.span.innerHTML="+"+u(k.generator.rate)+" "+k.generator.group.currency.name+" ("+k.generator.count.num.add(N).toString()+")<br/>"+u(k.generator.group.currency.num)+(null===
k.generator.group.currency.max?"":" / "+u(k.generator.group.currency.max))});a=window.document.createElement("div");b=window.document.createElement("span");this.gui.root=a;this.gui.span=b;a.appendChild(b);a.classList.add("generator-manual");m.list.push(this.gui);this.logic=new z(k.generator.update);a.addEventListener("click",this.logic.func)}function Y(a){this.num=a=void 0===a?K:a;this.add=function(b){b=void 0===b?c.settings.amount:b;return this.num=this.num.add(b)}}function O(){this.logic=this.gui=
null;this.done=!1;this.tip="";this.func=window.noop;this.change_func=function(a){this.func=a};this.change_done=function(a){this.done=void 0===a?!1:a};this.change_tip=function(a){this.tip=a=void 0===a?"":a;this.gui.root.setAttribute("data-tooltip",a)};this.unlock=function(){this.done||(this.change_done(!0),this.gui.func(this))};this.check=function(){this.logic.func.apply(this.logic,[this].concat($jscomp.arrayFromIterable(arguments)))};this.init=function(a,b,e,g){this.change_done(g);this.change_func(e);
this.gui=new m(function(f){f.gui.root.style.setProperty("--mode-blur-amount","0");f.gui.lock.style.visibility="hidden"});e=window.document.createElement("div");g=window.document.createElement("div");this.gui.root=e;this.gui.lock=g;this.gui.url=a;e.style.setProperty("--image-url","url("+this.gui.url+")");e.appendChild(g);e.classList.add("popup-achievement-member");ha.appendChild(e);this.change_tip(b);this.logic=new z(function(f,d){for(var y=1;y<arguments.length;++y);!f.done&&f.func.apply(f,arguments)&&
(f.change_done(!0),f.gui.func(f))});this.done&&this.logic.func(this);return this}}function sa(a){switch(a){case 0:c.settings.amount=N;ca.children[0].innerText="x1";break;case 1:c.settings.amount=ka;ca.children[0].innerText="x10";break;case 2:c.settings.amount=Ba;ca.children[0].innerText="x100";break;case 3:c.settings.amount=fa,ca.children[0].innerText="Max"}}function ta(){2===aa?(aa=1,window.setTimeout(ta,500)):(la.style.setProperty("--image-url","url('https://img.icons8.com/ios-filled/100/000000/save.png')"),
aa=0)}function ma(a){c.settings.theme=a;window.document.documentElement.setAttribute("data-theme",a);switch(a){case "light":ia.children[0].children[0].checked=!0;break;case "dark":ia.children[1].children[0].checked=!0}}function da(a){for(var b=1;b<ja.childElementCount;++b)ja.children[b]!==a&&(ja.children[b].style.display="none",ja.children[b].style.visibility="hidden")}function ua(){var a={currencies:{},upgrades:{now:[],done:[]},achievement:[]},b;for(b in c.currency)if(c.currency.hasOwnProperty(b)&&
"Global"!==b){var e=a.currencies[b]={},g=c.currency[b];e.name=g.currency.name;e.num=g.currency.num.toJSON();e.max=g.currency.max?g.currency.max.toJSON():null;e.generators=[];for(var f=0;f<g.generators.length;++f){for(var d=g.generators[f].generator,y={name:d.name,costs:{},rate_base:d.rate_base.toJSON(),rate_multiply:d.rate_multiply.toJSON(),count:d.count.num.toJSON()},k=0;k<d.own_repeat.costs.length;++k){var h=d.own_repeat.costs[k];y.costs[h.own_once.own_currency.name]={base:h.cost_base.toJSON(),
multiply:h.cost_multiply.toJSON()}}e.generators.push(y)}e.upgrades=[];for(f=0;f<g.upgrades.length;++f)d=g.upgrades[f],null===d.owe_repeat&&e.upgrades.unshift(d.name)}for(b=0;b<c.currency.Global.upgrades.length;++b)a.upgrades.now.unshift(c.currency.Global.upgrades[b].name);for(var n in c.upgrades)c.upgrades.hasOwnProperty(n)&&c.upgrades[n].buy&&-1===a.upgrades.now.indexOf(n)&&a.upgrades.done.push(n);a.settings={};for(var q in c.settings)c.settings.hasOwnProperty(q)&&(a.settings[q]=c.settings[q]);a.settings.amount=
na;for(var J in O.list)O.list.hasOwnProperty(J)&&O.list[J].done&&a.achievement.push(J);window.localStorage.setItem("civil_save",window.compress(window.btoa(window.JSON.stringify(a))))}function va(){window.localStorage.removeItem("civil_save");window.CP?window.location.href=window.location.href:location.reload()}var K=new DecNum(0),N=new DecNum(1),ka=new DecNum(10),Ba=new DecNum(100),wa=new DecNum(1E3),fa=new DecNum(Infinity);new DecNum(Math.E);var c={multiply:new DecNum(1.035),currency:{},settings:{amount:N,
render:1,theme:null,logic:60,difficulty:0}},ea=window.document.getElementById("after-wrapper-interact"),ra=window.document.getElementsByClassName("number")[0],Aa=window.document.getElementById("interact"),ba=window.document.getElementById("global-upgrade"),ha=window.document.getElementById("popup-achievement"),ca=window.document.getElementById("bulk"),la=window.document.getElementById("save"),Ca=window.document.getElementById("achievement"),xa=window.document.getElementById("settings");E(ea);E(ra);
E(ba);z.list=[];m.push=function(a,b,e,g,f){g&&m.list.push(a);f?b.insertBefore(e,b.children[b.childElementCount-1]):b.appendChild(e)};m.list=[];x.upgrades=[];x.gui=new m;x.gui.upgrade=ba;x.push_upgrade=function(a){a.group=x;x.upgrades.push(a)};x.pop_upgrade=function(a){x.upgrades.splice(x.upgrades.indexOf(a),1);x.gui.upgrade.removeChild(a.gui.root)};x.prototype.upgrades=x.upgrades;x.prototype.gui=x.gui;x.prototype.push_upgrade=x.push_upgrade;x.prototype.pop_upgrade=x.pop_upgrade;c.currency.Global=
x;var na=0;ca.addEventListener("click",function(){sa(na=(na+1)%4);w()});m.list.push(new m(function(){w()}));var aa=0,oa=!0,pa=0;la.addEventListener("click",function(){ua();++pa;oa&&(oa=!1,window.setTimeout(function(){O.list["Never Be Sure"].check(pa);pa=0;oa=!0},275));0===aa?(aa=1,la.style.setProperty("--image-url","url('https://img.icons8.com/ios-filled/100/000000/checkmark.png')"),window.setTimeout(ta,1500)):aa=2});var ia=document.querySelector("#popup-menu-extra > div:nth-child(1) > div");for(ea=
0;ea<ia.childElementCount;++ea)ba=ia.children[ea].children[0],ba.value===c.settings.theme&&(ba.checked=!0),ba.addEventListener("click",function(){ma(this.value)});var ya=document.querySelector("#popup-menu-extra > div:nth-child(2) > input");ya.addEventListener("input",function(){c.settings.render=60/parseInt(this.value)});document.querySelector("#popup-menu-extra > div:nth-child(3) > div").addEventListener("click",va);var W=window.document.getElementById("wrapper-popup"),ja=W.children[0],qa=window.document.getElementById("popup-close"),
za=window.document.getElementById("popup-menu-extra");Ca.addEventListener("click",function(){W.style.opacity="1";da(ha);ha.style.display="inline-flex";W.style.visibility=ha.style.visibility="visible"});xa.addEventListener("click",function(){W.style.opacity="1";da(xa);za.style.display="flex";W.style.visibility=za.style.visibility="visible"});qa.addEventListener("click",function(){W.style.opacity="0";setTimeout(function(){W.style.visibility="hidden";da()},500)});window.civil_save_raw=function(a){window.localStorage.setItem("civil_save",
window.compress(window.btoa(a)))};(function(){function a(h,n,q,J,P,V,L,M){L=void 0===L?{}:L;M=void 0===M?K:M;var X={};n=new S(h,n);q=(X[h]={base:q,multiply:J},X);q=Object.assign({},L,q);L={};c.currency[h]=new B(n,new Y(M),F(q,(L[h]=n,L)),P,V);new R(c.currency[h].currency)}function b(h,n,q,J,P,V,L){V=void 0===V?c.multiply:V;L=void 0===L?new Y(K):L;return{group:n,cost:q,func:function(M){O.list["First Gernerator"].unlock();0===P.comparedTo(ka)&&O.list["First 10/s Gernerator"].unlock();M.group.push_generator(new T(c.currency[n],
h,L,F(J),P,V))},type:1}}function e(h){c.currency[c.upgrades[h].group].push_upgrade((new r(c.upgrades[h].func)).init(c.currency[c.upgrades[h].group],h,null,D(c.upgrades[h].cost)));c.upgrades[h].unlock=!0}function g(){var h=JSON.parse(window.atob(window.decompress(window.localStorage.getItem("civil_save")))),n=function(Da){return"Manual Click"===Da.name},q;for(q in h.currencies)if(h.currencies.hasOwnProperty(q)){var J=h.currencies[q],P=J.generators.find(n),V={},L;for(L in P.costs)P.costs.hasOwnProperty(L)&&
L!==q&&(V[L]={base:new DecNum(P.costs[L].base),multiply:new DecNum(P.costs[L].multiply)});a(J.name,new DecNum(J.num),new DecNum(P.costs[q].base),new DecNum(P.costs[q].multiply),new DecNum(P.rate_base),new DecNum(P.rate_multiply),V,new DecNum(P.count))}for(var M in h.currencies)if(h.currencies.hasOwnProperty(M)){n=h.currencies[M];for(q=1;q<n.generators.length;++q){J=n.generators[q];P={};for(var X in n.generators[q].costs)n.generators[q].costs.hasOwnProperty(X)&&(V=n.generators[q].costs[X],P[X]={base:new DecNum(V.base),
multiply:new DecNum(V.multiply)});c.currency[M].push_generator(new T(c.currency[M],J.name,new Y(new DecNum(J.count)),F(P),new DecNum(J.rate_base),new DecNum(J.rate_multiply)))}for(q=1;q<n.upgrades.length;++q)e(n.upgrades[q])}for(M=0;M<h.upgrades.now.length;++M)e(h.upgrades.now[M]);for(M=0;M<h.upgrades.done.length;++M)X=h.upgrades.done[M],0===c.upgrades[X].type&&c.upgrades[X].func(),c.upgrades[X].unlock=!0,c.upgrades[X].buy=!0;for(var Z in h.settings)h.settings.hasOwnProperty(Z)&&(c.settings[Z]=h.settings[Z]);
sa(h.settings.amount);ya.value=String(60/c.settings.render);ma(c.settings.theme);for(Z=0;Z<h.achievement.length;++Z)O.list[h.achievement[Z]].unlock()}function f(h){for(var n=0;n<z.list.length;++n)z.list[n].func();if(++k.count>=c.settings.render){for(n=0;n<m.list.length;++n)m.list[n].func();k.count-=c.settings.render}k.fps=h.fps;k.ms=h.ms;h.maxFps=k.maxFps;h.smooth=k.smooth}var d={};O.list=(d["First Gernerator"]=(new O).init("https://img.icons8.com/ios/50/000000/delivery-time.png","Buy first generator",
function(){return!0}),d["First 10/s Gernerator"]=(new O).init("https://img.icons8.com/ios/50/000000/factory-1.png","Buy first 10/s generator. That was very productive!",function(){return!0}),d["Thousand Food"]=(new O).init("https://img.icons8.com/ios/50/000000/bread.png","What will you do with a thousand food? Eat it of course!",function(h,n){return n.group===c.currency.Food?-1<c.currency.Food.currency.num.comparedTo(wa):!1}),d["Thousand Stone"]=(new O).init("https://img.icons8.com/ios/50/000000/mountain.png",
"Legend said by having a thousand stones, one can build a house!",function(h,n){if(n.group===c.currency.Stone)return-1<c.currency.Stone.currency.num.comparedTo(wa)}),d["First x10 Buy"]=(new O).init("https://img.icons8.com/ios/50/000000/10.png","Buy upgrades using x10 amounts. Wow that's expensive!",function(){return 0===c.settings.amount.comparedTo(ka)}),d["Never Be Sure"]=(new O).init("https://img.icons8.com/ios/50/000000/save-all.png","One is enough. Two is just enough. Three is more than enough.",
function(h,n){return 2<n}),d);d={};c.upgrades=(d["First Farm"]=b("Farm","Food",{Food:new DecNum(20)},{Food:{base:new DecNum(10),multiply:c.multiply}},N),d["First Barn"]=b("Barn","Food",{Food:new DecNum(50)},{Food:{base:new DecNum(25),multiply:c.multiply}},new DecNum(2.5)),d["First Ranch"]=b("Ranch","Food",{Food:new DecNum(100),Wood:new DecNum(25)},{Food:{base:new DecNum(50),multiply:c.multiply},Wood:{base:new DecNum(12.5),multiply:c.multiply}},new DecNum(5)),d["First Pasture"]=b("Pasture","Food",
{Food:new DecNum(1E3),Stone:new DecNum(200),Coal:new DecNum(50)},{Food:{base:new DecNum(500),multiply:c.multiply},Stone:{base:new DecNum(100),multiply:c.multiply},Coal:{base:new DecNum(25),multiply:c.multiply}},new DecNum(10)),d["First Wood"]={group:"Global",cost:{Food:new DecNum(75)},func:function(h){a("Wood",new DecNum(0),new DecNum(10),c.multiply,new DecNum(1),c.multiply)},type:2},d["First Lumber"]=b("Lumber","Wood",{Wood:new DecNum(20)},{Wood:{base:new DecNum(10),multiply:c.multiply}},N),d["First Saw"]=
b("Saw","Wood",{Food:new DecNum(75),Wood:new DecNum(50)},{Food:{base:new DecNum(37.5),multiply:c.multiply},Wood:{base:new DecNum(25),multiply:c.multiply}},new DecNum(2.5)),d["First Mill"]=b("Mill","Wood",{Food:new DecNum(200),Wood:new DecNum(100),Stone:new DecNum(25)},{Food:{base:new DecNum(100),multiply:c.multiply},Wood:{base:new DecNum(50),multiply:c.multiply},Stone:{base:new DecNum(12.5),multiply:c.multiply}},new DecNum(5)),d["First Forestry"]=b("Forestry","Wood",{Wood:new DecNum(1E3),Stone:new DecNum(200),
Coal:new DecNum(50)},{Wood:{base:new DecNum(500),multiply:c.multiply},Stone:{base:new DecNum(100),multiply:c.multiply},Coal:{base:new DecNum(25),multiply:c.multiply}},new DecNum(10)),d["First Stone"]={group:"Global",cost:{Food:new DecNum(225),Wood:new DecNum(75)},func:function(h){a("Stone",new DecNum(0),new DecNum(10),c.multiply,new DecNum(1),c.multiply)},type:2},d["First Quarry"]=b("Quarry","Stone",{Stone:new DecNum(20)},{Stone:{base:new DecNum(10),multiply:c.multiply}},N),d["First Cutter"]=b("Cutter",
"Stone",{Wood:new DecNum(75),Stone:new DecNum(50)},{Wood:{base:new DecNum(37.5),multiply:c.multiply},Stone:{base:new DecNum(25),multiply:c.multiply}},new DecNum(2.5)),d["First Grinder"]=b("Grinder","Stone",{Wood:new DecNum(200),Stone:new DecNum(100),Coal:new DecNum(25)},{Wood:{base:new DecNum(100),multiply:c.multiply},Stone:{base:new DecNum(50),multiply:c.multiply},Coal:{base:new DecNum(12.5),multiply:c.multiply}},new DecNum(5)),d["First Coal"]={group:"Global",cost:{Food:new DecNum(675),Wood:new DecNum(225),
Stone:new DecNum(75)},func:function(h){a("Coal",new DecNum(0),new DecNum(10),c.multiply,new DecNum(1),c.multiply,{Wood:{base:new DecNum(112.5),multiply:c.multiply}})},type:2},d["First Colliery"]=b("Colliery","Coal",{Stone:new DecNum(50),Coal:new DecNum(20)},{Stone:{base:new DecNum(25),multiply:c.multiply},Coal:{base:new DecNum(10),multiply:c.multiply}},N),d["First Extractor"]=b("Extractor","Coal",{Wood:new DecNum(300),Stone:new DecNum(150),Coal:new DecNum(50)},{Wood:{base:new DecNum(150),multiply:c.multiply},
Stone:{base:new DecNum(75),multiply:c.multiply},Coal:{base:new DecNum(20),multiply:c.multiply}},new DecNum(2.5)),d["First Washer"]=b("Washer","Coal",{Food:new DecNum(1500),Wood:new DecNum(750),Coal:new DecNum(100),Iron:new DecNum(25)},{Food:{base:new DecNum(750),multiply:c.multiply},Wood:{base:new DecNum(375),multiply:c.multiply},Coal:{base:new DecNum(50),multiply:c.multiply},Iron:{base:new DecNum(12.5),multiply:c.multiply}},new DecNum(5)),d["First Iron"]={group:"Global",cost:{Food:new DecNum(2025),
Wood:new DecNum(675),Stone:new DecNum(225),Coal:new DecNum(75)},func:function(h){a("Iron",new DecNum(1E4),new DecNum(10),c.multiply,new DecNum(1),c.multiply,{Food:{base:new DecNum(1012.5),multiply:c.multiply},Stone:{base:new DecNum(112.5),multiply:c.multiply}})},type:2},d["First Mine"]=b("Mine","Iron",{Food:new DecNum(1250),Wood:new DecNum(750),Iron:new DecNum(20)},{Food:{base:new DecNum(625),multiply:c.multiply},Wood:{base:new DecNum(375),multiply:c.multiply},Iron:{base:new DecNum(10),multiply:c.multiply}},
N),d["First Smelter"]=b("Smelter","Iron",{Wood:new DecNum(1E3),Stone:new DecNum(500),Coal:new DecNum(75),Iron:new DecNum(50)},{Wood:{base:new DecNum(500),multiply:c.multiply},Stone:{base:new DecNum(250),multiply:c.multiply},Coal:{base:new DecNum(37.5),multiply:c.multiply},Iron:{base:new DecNum(25),multiply:c.multiply}},new DecNum(2.5)),d);z.list.push(new z(function(){for(var h in c.upgrades)if(c.upgrades.hasOwnProperty(h)){var n=!1,q;for(q in c.upgrades[h].cost)if(!c.currency[q]||1===c.upgrades[h].cost[q].comparedTo(c.currency[q].currency.num)){n=
!0;break}n||c.upgrades[h].unlock||e(h)}}));if(null===window.localStorage.getItem("civil_save")){var y=window.document.getElementById("popup-difficulty");da(y);W.style.visibility=y.style.visibility="visible";W.style.opacity="1";qa.style.visibility="hidden";window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?c.settings.theme="dark":c.settings.theme="light";ma(c.settings.theme);for(d={$jscomp$loop$prop$i$28$32:1};d.$jscomp$loop$prop$i$28$32<y.childElementCount;d={$jscomp$loop$prop$i$28$32:d.$jscomp$loop$prop$i$28$32},
++d.$jscomp$loop$prop$i$28$32)y.children[d.$jscomp$loop$prop$i$28$32].addEventListener("click",function(h){return function(){switch(c.settings.difficulty=h.$jscomp$loop$prop$i$28$32-1){case 0:c.settings.logic=10;break;case 1:c.settings.logic=60}W.style.opacity="0";setTimeout(function(){qa.style.visibility="inherit";W.style.visibility=y.style.visibility="hidden";da()},500);a("Food",new DecNum(0),new DecNum(10),c.multiply,new DecNum(1),c.multiply)}}(d))}else g();var k={fps:60,ms:0,smooth:5,maxFps:60,
count:0};window.civil_save=ua;window.civil_data=c;window.civil_reset=va;window.document.addEventListener("DOMContentLoaded",function(){window.rAF(f)})})()})();
