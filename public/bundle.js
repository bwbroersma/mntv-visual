var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function i(){return Object.create(null)}function a(e){e.forEach(n)}function d(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}const o="undefined"!=typeof window;let r=o?()=>window.performance.now():()=>Date.now(),s=o?e=>requestAnimationFrame(e):e;const l=new Set;let u,f=!1;function p(){l.forEach(e=>{e[0](r())||(l.delete(e),e[1]())}),(f=l.size>0)&&s(p)}function h(e){let t;return f||(f=!0,s(p)),{promise:new Promise(n=>{l.add(t=[e,n])}),abort(){l.delete(t)}}}function g(e,t){e.appendChild(t)}function R(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function v(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function b(){return $(" ")}function x(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function w(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function k(e){return""===e?void 0:+e}function C(e,t){t=""+t,e.data!==t&&(e.data=t)}function j(e,t){(null!=t||e.value)&&(e.value=t)}function z(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}function B(e,t,n){e.classList[n?"add":"remove"](t)}let E,V=0,M={};function O(e,t,n,i,a,d,c,o=0){const r=16.666/i;let s="{\n";for(let e=0;e<=1;e+=r){const i=t+(n-t)*d(e);s+=100*e+`%{${c(i,1-i)}}\n`}const l=s+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(l)}_${o}`;if(!M[f]){if(!u){const e=_("style");document.head.appendChild(e),u=e.sheet}M[f]=!0,u.insertRule(`@keyframes ${f} ${l}`,u.cssRules.length)}const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${a}ms 1 both`,V+=1,f}function T(e,t){e.style.animation=(e.style.animation||"").split(", ").filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")).join(", "),t&&!--V&&s(()=>{if(V)return;let e=u.cssRules.length;for(;e--;)u.deleteRule(e);M={}})}function F(e){E=e}const S=[],A=[],L=[],P=[],N=Promise.resolve();let q,G=!1;function H(e){L.push(e)}function D(){const e=new Set;do{for(;S.length;){const e=S.shift();F(e),I(e.$$)}for(;A.length;)A.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];e.has(n)||(n(),e.add(n))}L.length=0}while(S.length);for(;P.length;)P.pop()();G=!1}function I(e){e.fragment&&(e.update(e.dirty),a(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(H))}function J(){return q||(q=Promise.resolve()).then(()=>{q=null}),q}function K(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const Q=new Set;let U;function W(){U={r:0,c:[],p:U}}function X(){U.r||a(U.c),U=U.p}function Y(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function Z(e,t,n,i){if(e&&e.o){if(Q.has(e))return;Q.add(e),U.c.push(()=>{Q.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}const ee={duration:0};function te(n,i,a){let c,o,s=i(n,a),l=!1,u=0;function f(){c&&T(n,c)}function p(){const{delay:i=0,duration:a=300,easing:d=t,tick:p=e,css:g}=s||ee;g&&(c=O(n,0,1,a,i,d,g,u++)),p(0,1);const R=r()+i,m=R+a;o&&o.abort(),l=!0,H(()=>K(n,!0,"start")),o=h(e=>{if(l){if(e>=m)return p(1,0),K(n,!0,"end"),f(),l=!1;if(e>=R){const t=d((e-R)/a);p(t,1-t)}}return l})}let g=!1;return{start(){g||(T(n),d(s)?(s=s(),J().then(p)):p())},invalidate(){g=!1},end(){l&&(f(),l=!1)}}}function ne(n,i,c){let o,s=i(n,c),l=!0;const u=U;function f(){const{delay:i=0,duration:d=300,easing:c=t,tick:f=e,css:p}=s||ee;p&&(o=O(n,1,0,d,i,c,p));const g=r()+i,R=g+d;H(()=>K(n,!1,"start")),h(e=>{if(l){if(e>=R)return f(0,1),K(n,!1,"end"),--u.r||a(u.c),!1;if(e>=g){const t=c((e-g)/d);f(1-t,t)}}return l})}return u.r+=1,d(s)?J().then(()=>{s=s(),f()}):f(),{end(e){e&&s.tick&&s.tick(1,0),l&&(o&&T(n,o),l=!1)}}}function ie(n,i,c,o){let s=i(n,c),l=o?0:1,u=null,f=null,p=null;function g(){p&&T(n,p)}function R(e,t){const n=e.b-l;return t*=Math.abs(n),{a:l,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function m(i){const{delay:d=0,duration:c=300,easing:o=t,tick:m=e,css:y}=s||ee,_={start:r()+d,b:i};i||(_.group=U,U.r+=1),u?f=_:(y&&(g(),p=O(n,l,i,c,d,o,y)),i&&m(0,1),u=R(_,c),H(()=>K(n,i,"start")),h(e=>{if(f&&e>f.start&&(u=R(f,c),f=null,K(n,u.b,"start"),y&&(g(),p=O(n,l,u.b,u.duration,0,o,s.css))),u)if(e>=u.end)m(l=u.b,1-l),K(n,u.b,"end"),f||(u.b?g():--u.group.r||a(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;l=u.a+u.d*o(t/u.duration),m(l,1-l)}return!(!u&&!f)}))}return{run(e){d(s)?J().then(()=>{s=s(),m(e)}):m(e)},end(){g(),u=f=null}}}function ae(e,t){e.$$.fragment&&(a(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function de(e,t){e.$$.dirty||(S.push(e),G||(G=!0,N.then(D)),e.$$.dirty=i()),e.$$.dirty[t]=!0}function ce(t,c,o,r,s,l){const u=E;F(t);const f=c.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:s,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:null};let h=!1;p.ctx=o?o(t,f,(e,n,i=n)=>(p.ctx&&s(p.ctx[e],p.ctx[e]=i)&&(p.bound[e]&&p.bound[e](i),h&&de(t,e)),n)):f,p.update(),h=!0,a(p.before_update),p.fragment=r(p.ctx),c.target&&(c.hydrate?p.fragment.l(function(e){return Array.from(e.childNodes)}(c.target)):p.fragment.c(),c.intro&&Y(t.$$.fragment),function(e,t,i){const{fragment:c,on_mount:o,on_destroy:r,after_update:s}=e.$$;c.m(t,i),H(()=>{const t=o.map(n).filter(d);r?r.push(...t):a(t),e.$$.on_mount=[]}),s.forEach(H)}(t,c.target,c.anchor),D()),F(u)}let oe;"undefined"!=typeof HTMLElement&&(oe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){ae(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class re{$destroy(){ae(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function se(e){const t=e-1;return t*t*t+1}function le(e,{delay:t=0,duration:n=400}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,css:e=>`opacity: ${e*i}`}}function ue(e,{delay:t=0,duration:n=400,easing:i=se,start:a=0,opacity:d=0}){const c=getComputedStyle(e),o=+c.opacity,r="none"===c.transform?"":c.transform,s=1-a,l=o*(1-d);return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${r} scale(${1-s*t});\n\t\t\topacity: ${o-l*t}\n\t\t`}}function fe(e,t,n){const i=Object.create(e);return i.id=t[n].id,i.color=t[n].color,i.fifty=t[n].fifty,i.elected=t[n].elected,i.i=n,i}function pe(e,t,n){const i=Object.create(e);return i.candidate=t[n],i.i=n,i}function he(e){var t,n,i,a,d,c,o,r,s,l,u,f,p,h,y,_,b,x,k,j,z,B,E,V,M,O=e.candidate.red.toFixed(1)+"",T=e.candidate.blue.toFixed(1)+"",F=e.candidate.total.toFixed(1)+"";return{c(){t=v("g"),n=v("rect"),i=v("title"),a=$(O),d=$("% punt door rood"),u=v("rect"),f=v("title"),p=$(T),h=$("% punt door blauw"),z=v("text"),B=$(F),E=$("%"),w(n,"class","red svelte-jwryaz"),w(n,"x","0"),w(n,"y",c=100-e.candidate.total),w(n,"width",o=2*e.circleRadius),w(n,"height",r=e.candidate.red),w(u,"class","blue svelte-jwryaz"),w(u,"x","0"),w(u,"y",y=100-e.candidate.blue),w(u,"width",_=2*e.circleRadius),w(u,"height",b=e.candidate.blue),w(u,"title",x=e.candidate.blue.toFixed(1)+"% punt door blauw"),w(z,"x",e.circleRadius),w(z,"y","117"),w(z,"class","svelte-jwryaz"),w(t,"class","candidate score svelte-jwryaz"),w(t,"transform",V="translate("+(100+e.i*e.circleRadius*2.5)+", 175)")},m(e,c){R(e,t,c),g(t,n),g(n,i),g(i,a),g(i,d),g(t,u),g(u,f),g(f,p),g(f,h),g(t,z),g(z,B),g(z,E),M=!0},p(e,i){M&&!e.candidates||O===(O=i.candidate.red.toFixed(1)+"")||C(a,O),M&&!e.candidates||c===(c=100-i.candidate.total)||w(n,"y",c),M&&!e.circleRadius||o===(o=2*i.circleRadius)||w(n,"width",o),M&&!e.candidates||r===(r=i.candidate.red)||w(n,"height",r),M&&!e.candidates||T===(T=i.candidate.blue.toFixed(1)+"")||C(p,T),M&&!e.candidates||y===(y=100-i.candidate.blue)||w(u,"y",y),M&&!e.circleRadius||_===(_=2*i.circleRadius)||w(u,"width",_),M&&!e.candidates||b===(b=i.candidate.blue)||w(u,"height",b),M&&!e.candidates||x===(x=i.candidate.blue.toFixed(1)+"% punt door blauw")||w(u,"title",x),M&&!e.candidates||F===(F=i.candidate.total.toFixed(1)+"")||C(B,F),M&&!e.circleRadius||w(z,"x",i.circleRadius),M&&!e.circleRadius||V===(V="translate("+(100+i.i*i.circleRadius*2.5)+", 175)")||w(t,"transform",V)},i(e){M||(H(()=>{l&&l.end(1),s||(s=te(n,ue,{})),s.start()}),H(()=>{j&&j.end(1),k||(k=te(u,ue,{})),k.start()}),M=!0)},o(e){s&&s.invalidate(),l=ne(n,le,{}),k&&k.invalidate(),j=ne(u,le,{}),M=!1},d(e){e&&(m(t),l&&l.end(),j&&j.end())}}}function ge(e){var t,n,i,a,d,c,o,r,s,l=e.id+"";return{c(){t=v("g"),n=v("circle"),a=v("text"),d=$(l),w(n,"cx",e.circleRadius),w(n,"cy",e.circleRadius),w(n,"r",e.circleRadius),w(n,"class","svelte-jwryaz"),w(a,"y",c=1.3*e.circleRadius),w(a,"x",e.circleRadius),w(a,"class","svelte-jwryaz"),w(t,"class",o="candidate "+e.color+" svelte-jwryaz"),w(t,"transform",r="translate("+(100+e.i*e.circleRadius*2.5)+", 300)"),B(t,"fifty",e.fifty),B(t,"elected",e.elected)},m(e,i){R(e,t,i),g(t,n),g(t,a),g(a,d),s=!0},p(e,i){s&&!e.circleRadius||(w(n,"cx",i.circleRadius),w(n,"cy",i.circleRadius),w(n,"r",i.circleRadius)),s&&!e.candidates||l===(l=i.id+"")||C(d,l),s&&!e.circleRadius||c===(c=1.3*i.circleRadius)||w(a,"y",c),s&&!e.circleRadius||w(a,"x",i.circleRadius),s&&!e.candidates||o===(o="candidate "+i.color+" svelte-jwryaz")||w(t,"class",o),s&&!e.circleRadius||r===(r="translate("+(100+i.i*i.circleRadius*2.5)+", 300)")||w(t,"transform",r),(e.candidates||e.candidates)&&(B(t,"fifty",i.fifty),B(t,"elected",i.elected))},i(e){s||(H(()=>{i||(i=ie(n,ue,{},!0)),i.run(1)}),s=!0)},o(e){i||(i=ie(n,ue,{},!1)),i.run(0),s=!1},d(e){e&&(m(t),i&&i.end())}}}function Re(e){var t,n,i,d,c,o,r,s,l,u,f,p,h,k,B,E,V,M,O,T,F,S,A,L,P,N,q,G,D,I,J,K,Q,U,ee,te,ne,ae,de,ce,oe,re,se,le,Re,ye,_e,ve,$e,be,xe,we,ke,Ce,je,ze,Be,Ee,Ve,Me,Oe,Te,Fe,Se,Ae,Le,Pe,Ne,qe,Ge,He,De,Ie,Je,Ke,Qe,Ue,We,Xe,Ye,Ze,et,tt,nt,it,at,dt,ct,ot,rt,st,lt,ut,ft,pt,ht,gt,Rt,mt,yt,_t,vt,$t,bt,xt,wt,kt,Ct=e.Math.round(100*e.supportRed)+"";let jt=e.candidates,zt=[];for(let t=0;t<jt.length;t+=1)zt[t]=he(pe(e,jt,t));const Bt=e=>Z(zt[e],1,1,()=>{zt[e]=null});let Et=e.candidates,Vt=[];for(let t=0;t<Et.length;t+=1)Vt[t]=ge(fe(e,Et,t));const Mt=e=>Z(Vt[e],1,1,()=>{Vt[e]=null});return{c(){t=_("div"),(n=_("h1")).textContent="Parameters",i=b(),d=_("label"),c=_("h2"),o=$("Voordracht aantal ("),r=$(e.nomination),s=$(")"),l=b(),u=_("input"),f=b(),p=_("label"),h=_("h2"),k=$("Blauwe kandidaten ("),B=$(e.candidatesBlue),E=$(")"),V=b(),M=_("input"),O=b(),T=_("label"),F=_("h2"),S=$("Rode kandidaten ("),A=$(e.candidatesRed),L=$(")"),P=b(),N=_("input"),q=b(),G=_("label"),D=_("h2"),I=$("Rode kandidaten in voordracht ("),J=$(e.nominationRed),K=$(")"),Q=b(),U=_("input"),ee=b(),te=_("label"),ne=_("h2"),ae=$("Steun rode kandidaten ("),de=$(Ct),ce=$("%)"),oe=b(),re=_("input"),se=b(),le=_("label"),Re=_("h2"),ye=$("Gemiddeld aantal stemmen ("),_e=$(e.avgVoteCount),ve=$(")"),$e=b(),be=_("input"),xe=b(),(we=_("h2")).textContent="Rood stemtactiek",ke=b(),Ce=_("label"),je=_("input"),ze=$("Geen / random"),Be=b(),Ee=_("label"),Ve=_("input"),Me=$("Bullet"),Oe=b(),Te=_("label"),Fe=_("input"),Se=$("Op volgorde"),Ae=b(),Le=v("svg"),Pe=v("g"),Ne=v("line"),qe=v("text"),Ge=$("50%"),He=v("g"),De=v("line"),Ke=v("text"),Qe=$("voordracht"),We=v("text"),Xe=$("niet voorgedragen");for(let e=0;e<zt.length;e+=1)zt[e].c();Ze=$("");for(let e=0;e<Vt.length;e+=1)Vt[e].c();et=v("g"),tt=v("circle"),it=v("text"),at=$("50%+1 ("),dt=$(e.fiftyCount),ct=$("/"),ot=$(me),rt=$(")"),ft=v("g"),pt=v("circle"),gt=v("text"),Rt=$("verkozen ("),mt=$(e.electedCount),yt=$("/"),_t=$(me),vt=$(")"),w(c,"class","svelte-jwryaz"),w(u,"type","range"),w(u,"min","0"),w(u,"max",e.candidatesTotal),w(u,"step","1"),w(h,"class","svelte-jwryaz"),w(M,"type","range"),w(M,"min","1"),w(M,"max",3*me),w(M,"step","1"),w(F,"class","svelte-jwryaz"),w(N,"type","range"),w(N,"min","1"),w(N,"max",3*me),w(N,"step","1"),w(D,"class","svelte-jwryaz"),w(U,"type","range"),w(U,"min","0"),w(U,"max",e.candidatesRed),w(U,"step","1"),w(ne,"class","svelte-jwryaz"),w(re,"type","range"),w(re,"min","0"),w(re,"max","1"),w(re,"step","0.01"),w(Re,"class","svelte-jwryaz"),w(be,"type","range"),w(be,"min","0"),w(be,"max",me),w(be,"step","1"),w(we,"class","svelte-jwryaz"),e.$$binding_groups[0].push(je),w(je,"type","radio"),je.__value="random",je.value=je.__value,w(je,"class","svelte-jwryaz"),e.$$binding_groups[0].push(Ve),w(Ve,"type","radio"),Ve.__value="bullet",Ve.value=Ve.__value,w(Ve,"class","svelte-jwryaz"),e.$$binding_groups[0].push(Fe),w(Fe,"type","radio"),Fe.__value="ordered",Fe.value=Fe.__value,w(Fe,"class","svelte-jwryaz"),w(t,"class","controls svelte-jwryaz"),w(Ne,"y1","225"),w(Ne,"y2","225"),w(Ne,"x1","0"),w(Ne,"x2","80%"),w(Ne,"stroke-width","1"),w(Ne,"stroke","black"),w(Ne,"stroke-opacity","1"),z(Ne,"shape-rendering","crispEdges"),w(qe,"x","10"),w(qe,"y","222"),w(Pe,"class","fifty"),w(De,"y1","300"),w(De,"y2","375"),w(De,"x1",Ie=100+(2.5*e.nomination-.25)*e.circleRadius),w(De,"x2",Je=100+(2.5*e.nomination-.25)*e.circleRadius),w(De,"stroke-width","2"),w(De,"stroke","black"),w(De,"stroke-opacity","1"),z(De,"shape-rendering","crispEdges"),w(De,"stroke-dasharray","10,10"),w(Ke,"class","end svelte-jwryaz"),w(Ke,"x",Ue=100+(2.5*e.nomination-.5)*e.circleRadius),w(Ke,"y","370"),w(We,"class","start svelte-jwryaz"),w(We,"x",Ye=100+2.5*e.nomination*e.circleRadius),w(We,"y","370"),w(He,"class","nomination svelte-jwryaz"),w(tt,"cx",e.circleRadius),w(tt,"cy",e.circleRadius),w(tt,"r",e.circleRadius),w(tt,"fill","#fff"),w(tt,"class","svelte-jwryaz"),w(it,"class","legenda svelte-jwryaz"),w(it,"y",st=1.3*e.circleRadius),w(it,"x",lt=2.5*e.circleRadius),w(et,"class","candidate fifty svelte-jwryaz"),w(et,"transform",ut="translate("+e.circleRadius+", "+e.circleRadius+")"),w(pt,"cx",e.circleRadius),w(pt,"cy",e.circleRadius),w(pt,"r",e.circleRadius),w(pt,"fill","#fff"),w(pt,"class","svelte-jwryaz"),w(gt,"class","legenda svelte-jwryaz"),w(gt,"y",$t=1.3*e.circleRadius),w(gt,"x",bt=2.5*e.circleRadius),w(ft,"class","candidate fifty elected svelte-jwryaz"),w(ft,"transform",xt="translate("+e.circleRadius+", "+3.5*e.circleRadius+")"),w(Le,"class","svelte-jwryaz"),kt=[x(u,"change",e.input0_change_input_handler),x(u,"input",e.input0_change_input_handler),x(M,"change",e.input1_change_input_handler),x(M,"input",e.input1_change_input_handler),x(N,"change",e.input2_change_input_handler),x(N,"input",e.input2_change_input_handler),x(U,"change",e.input3_change_input_handler),x(U,"input",e.input3_change_input_handler),x(re,"change",e.input4_change_input_handler),x(re,"input",e.input4_change_input_handler),x(be,"change",e.input5_change_input_handler),x(be,"input",e.input5_change_input_handler),x(je,"change",e.input6_change_handler),x(Ve,"change",e.input7_change_handler),x(Fe,"change",e.input8_change_handler)]},m(a,m){R(a,t,m),g(t,n),g(t,i),g(t,d),g(d,c),g(c,o),g(c,r),g(c,s),g(d,l),g(d,u),j(u,e.nomination),g(t,f),g(t,p),g(p,h),g(h,k),g(h,B),g(h,E),g(p,V),g(p,M),j(M,e.candidatesBlue),g(t,O),g(t,T),g(T,F),g(F,S),g(F,A),g(F,L),g(T,P),g(T,N),j(N,e.candidatesRed),g(t,q),g(t,G),g(G,D),g(D,I),g(D,J),g(D,K),g(G,Q),g(G,U),j(U,e.nominationRed),g(t,ee),g(t,te),g(te,ne),g(ne,ae),g(ne,de),g(ne,ce),g(te,oe),g(te,re),j(re,e.supportRed),g(t,se),g(t,le),g(le,Re),g(Re,ye),g(Re,_e),g(Re,ve),g(le,$e),g(le,be),j(be,e.avgVoteCount),g(t,xe),g(t,we),g(t,ke),g(t,Ce),g(Ce,je),je.checked=je.__value===e.votingRed,g(Ce,ze),g(t,Be),g(t,Ee),g(Ee,Ve),Ve.checked=Ve.__value===e.votingRed,g(Ee,Me),g(t,Oe),g(t,Te),g(Te,Fe),Fe.checked=Fe.__value===e.votingRed,g(Te,Se),R(a,Ae,m),R(a,Le,m),g(Le,Pe),g(Pe,Ne),g(Pe,qe),g(qe,Ge),g(Le,He),g(He,De),g(He,Ke),g(Ke,Qe),g(He,We),g(We,Xe);for(let e=0;e<zt.length;e+=1)zt[e].m(Le,null);g(Le,Ze);for(let e=0;e<Vt.length;e+=1)Vt[e].m(Le,null);g(Le,et),g(et,tt),g(et,it),g(it,at),g(it,dt),g(it,ct),g(it,ot),g(it,rt),g(Le,ft),g(ft,pt),g(ft,gt),g(gt,Rt),g(gt,mt),g(gt,yt),g(gt,_t),g(gt,vt),wt=!0},p(e,t){if(wt&&!e.nomination||C(r,t.nomination),e.nomination&&j(u,t.nomination),wt&&!e.candidatesTotal||w(u,"max",t.candidatesTotal),wt&&!e.candidatesBlue||C(B,t.candidatesBlue),e.candidatesBlue&&j(M,t.candidatesBlue),wt&&!e.candidatesRed||C(A,t.candidatesRed),e.candidatesRed&&j(N,t.candidatesRed),wt&&!e.nominationRed||C(J,t.nominationRed),e.nominationRed&&j(U,t.nominationRed),wt&&!e.candidatesRed||w(U,"max",t.candidatesRed),wt&&!e.supportRed||Ct===(Ct=t.Math.round(100*t.supportRed)+"")||C(de,Ct),e.supportRed&&j(re,t.supportRed),wt&&!e.avgVoteCount||C(_e,t.avgVoteCount),e.avgVoteCount&&j(be,t.avgVoteCount),e.votingRed&&(je.checked=je.__value===t.votingRed),e.votingRed&&(Ve.checked=Ve.__value===t.votingRed),e.votingRed&&(Fe.checked=Fe.__value===t.votingRed),wt&&!e.nomination&&!e.circleRadius||Ie===(Ie=100+(2.5*t.nomination-.25)*t.circleRadius)||w(De,"x1",Ie),wt&&!e.nomination&&!e.circleRadius||Je===(Je=100+(2.5*t.nomination-.25)*t.circleRadius)||w(De,"x2",Je),wt&&!e.nomination&&!e.circleRadius||Ue===(Ue=100+(2.5*t.nomination-.5)*t.circleRadius)||w(Ke,"x",Ue),wt&&!e.nomination&&!e.circleRadius||Ye===(Ye=100+2.5*t.nomination*t.circleRadius)||w(We,"x",Ye),e.circleRadius||e.candidates){let n;for(jt=t.candidates,n=0;n<jt.length;n+=1){const i=pe(t,jt,n);zt[n]?(zt[n].p(e,i),Y(zt[n],1)):(zt[n]=he(i),zt[n].c(),Y(zt[n],1),zt[n].m(Le,Ze))}for(W(),n=jt.length;n<zt.length;n+=1)Bt(n);X()}if(e.candidates||e.circleRadius){let n;for(Et=t.candidates,n=0;n<Et.length;n+=1){const i=fe(t,Et,n);Vt[n]?(Vt[n].p(e,i),Y(Vt[n],1)):(Vt[n]=ge(i),Vt[n].c(),Y(Vt[n],1),Vt[n].m(Le,et))}for(W(),n=Et.length;n<Vt.length;n+=1)Mt(n);X()}wt&&!e.circleRadius||(w(tt,"cx",t.circleRadius),w(tt,"cy",t.circleRadius),w(tt,"r",t.circleRadius)),wt&&!e.fiftyCount||C(dt,t.fiftyCount),wt&&!e.circleRadius||st===(st=1.3*t.circleRadius)||w(it,"y",st),wt&&!e.circleRadius||lt===(lt=2.5*t.circleRadius)||w(it,"x",lt),wt&&!e.circleRadius||ut===(ut="translate("+t.circleRadius+", "+t.circleRadius+")")||w(et,"transform",ut),wt&&!e.circleRadius||(w(pt,"cx",t.circleRadius),w(pt,"cy",t.circleRadius),w(pt,"r",t.circleRadius)),wt&&!e.electedCount||C(mt,t.electedCount),wt&&!e.circleRadius||$t===($t=1.3*t.circleRadius)||w(gt,"y",$t),wt&&!e.circleRadius||bt===(bt=2.5*t.circleRadius)||w(gt,"x",bt),wt&&!e.circleRadius||xt===(xt="translate("+t.circleRadius+", "+3.5*t.circleRadius+")")||w(ft,"transform",xt)},i(e){if(!wt){for(let e=0;e<jt.length;e+=1)Y(zt[e]);for(let e=0;e<Et.length;e+=1)Y(Vt[e]);H(()=>{nt||(nt=ie(tt,ue,{},!0)),nt.run(1)}),H(()=>{ht||(ht=ie(pt,ue,{},!0)),ht.run(1)}),wt=!0}},o(e){zt=zt.filter(Boolean);for(let e=0;e<zt.length;e+=1)Z(zt[e]);Vt=Vt.filter(Boolean);for(let e=0;e<Vt.length;e+=1)Z(Vt[e]);nt||(nt=ie(tt,ue,{},!1)),nt.run(0),ht||(ht=ie(pt,ue,{},!1)),ht.run(0),wt=!1},d(n){n&&m(t),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(je),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(Ve),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(Fe),1),n&&(m(Ae),m(Le)),y(zt,n),y(Vt,n),n&&(nt&&nt.end(),ht&&ht.end()),a(kt)}}}const me=11;function ye(e,t,n){let{nomination:i=me,avgVoteCount:a=9,candidatesBlue:d=me+1,candidatesRed:c=2,supportRed:o=.63}=t,{nominationRed:r=0}=t,{votingRed:s="random",circleRadius:l=20}=t,u=0,f=0,p=[];let h,g,R;return e.$set=e=>{"nomination"in e&&n("nomination",i=e.nomination),"avgVoteCount"in e&&n("avgVoteCount",a=e.avgVoteCount),"candidatesBlue"in e&&n("candidatesBlue",d=e.candidatesBlue),"candidatesRed"in e&&n("candidatesRed",c=e.candidatesRed),"supportRed"in e&&n("supportRed",o=e.supportRed),"nominationRed"in e&&n("nominationRed",r=e.nominationRed),"votingRed"in e&&n("votingRed",s=e.votingRed),"circleRadius"in e&&n("circleRadius",l=e.circleRadius)},e.$$.update=(e={supportRed:1,nominationRed:1,candidatesRed:1,nomination:1,candidatesBlue:1,votingRed:1,avgVoteCount:1,nominationBlue:1,candidatesTotal:1,supportBlue:1})=>{if(e.supportRed&&n("supportBlue",h=1-o),(e.nominationRed||e.candidatesRed)&&r>c&&n("nominationRed",r=c),(e.nominationRed||e.nomination)&&r>i&&n("nominationRed",r=i),(e.nomination||e.candidatesBlue||e.nominationRed)&&i>d+r&&n("nominationRed",r=i-d),(e.nomination||e.nominationRed)&&n("nominationBlue",g=i-r),(e.candidatesBlue||e.candidatesRed)&&n("candidatesTotal",R=d+c),e.votingRed||e.avgVoteCount||e.candidatesRed||e.nomination||e.nominationBlue||e.candidatesBlue||e.nominationRed||e.candidatesTotal||e.supportBlue||e.supportRed){function t(e){let t;switch(s){case"random":{if("red"==e.color){t=Math.min(1,a/c);break}let n=a-c;t=n>0&&e.id<=i?Math.min(1,n/g):Math.max(0,(n-g)/(d-g));break}case"bullet":t="red"==e.color?Math.min(1,a/c):0;break;case"ordered":{if("red"==e.color){t=e.id<=r&&e.id<a||e.id<=g+a?1:0;break}let n=a-c;t=n>0&&e.id<=c+n?1:0;break}}let n=Math.min(1,e.id<=i?a/i:Math.max(0,(a-i)/(R-i)));return{...e,fifty:n*h+t*o>.5,total:n*h*100+t*o*100,blue:n*h*100,red:t*o*100}}const e=[];for(let n=0;n<R;n++)e.push(t({id:n+1,color:n>=r&&n<i||n>=c+g?"blue":"red"}));const l=new Set(e.slice().filter(e=>e.fifty).sort((e,t)=>t.total-e.total).map(e=>e.id).slice(0,me));for(let t=0;t<e.length;t++)e[t].elected=l.has(e[t].id);n("electedCount",u=l.size),n("fiftyCount",f=e.filter(e=>e.fifty).length),n("candidates",p=e)}},{nomination:i,avgVoteCount:a,candidatesBlue:d,candidatesRed:c,supportRed:o,nominationRed:r,votingRed:s,circleRadius:l,electedCount:u,fiftyCount:f,candidates:p,candidatesTotal:R,Math:Math,input0_change_input_handler:function(){i=k(this.value),n("nomination",i)},input1_change_input_handler:function(){d=k(this.value),n("candidatesBlue",d)},input2_change_input_handler:function(){c=k(this.value),n("candidatesRed",c)},input3_change_input_handler:function(){r=k(this.value),n("nominationRed",r),n("candidatesRed",c),n("nomination",i),n("candidatesBlue",d)},input4_change_input_handler:function(){o=k(this.value),n("supportRed",o)},input5_change_input_handler:function(){a=k(this.value),n("avgVoteCount",a)},input6_change_handler:function(){s=this.__value,n("votingRed",s)},input7_change_handler:function(){s=this.__value,n("votingRed",s)},input8_change_handler:function(){s=this.__value,n("votingRed",s)},$$binding_groups:[[]]}}return new class extends re{constructor(e){super(),ce(this,e,ye,Re,c,["nomination","avgVoteCount","candidatesBlue","candidatesRed","supportRed","nominationRed","votingRed","circleRadius"])}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
