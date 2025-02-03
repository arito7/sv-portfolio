import{a as Q,d as he,b as Y,t as q}from"../chunks/6qxL8Mi0.js";import"../chunks/yHR66rpH.js";import{E as oe,C as E,p as G,M as S,W as ye,X as W,o as L,n as F,q as I,r as we,Y as M,Z as ce,A as B,_ as be,x as fe,g as Z,$ as ee,a0 as Ae,w as Ee,a1 as ke,I as ve,j as _e,z as Re,a2 as Se,f as Te,a3 as xe,a4 as V,a5 as U,a6 as Ie,a7 as ae,a8 as ue,i as Ne,a9 as Ce,aa as De,k as de,t as He,m as Le,ab as Me,ac as Oe,ad as Pe,R as C,J as Ye,S as R,T as A,ae as re,Q as se}from"../chunks/ByEdamyx.js";import{s as Fe}from"../chunks/D7rlLTKj.js";function ie(r,e){return e}function Ge(r,e,a,t){for(var l=[],f=e.length,o=0;o<f;o++)Ae(e[o].e,l,!0);var d=f>0&&l.length===0&&a!==null;if(d){var n=a.parentNode;Ee(n),n.append(a),t.clear(),x(r,e[0].prev,e[f-1].next)}ke(l,()=>{for(var p=0;p<f;p++){var _=e[p];d||(t.delete(_.k),x(r,_.prev,_.next)),ve(_.e,!d)}})}function te(r,e,a,t,l,f=null){var o=r,d={flags:e,items:new Map,first:null},n=(e&ue)!==0;if(n){var p=r;o=E?L(_e(p)):p.appendChild(Re())}E&&G();var _=null,h=!1,b=Se(()=>{var s=a();return Ne(s)?s:s==null?[]:fe(s)});oe(()=>{var s=S(b),c=s.length;if(h&&c===0)return;h=c===0;let u=!1;if(E){var k=o.data===ye;k!==(c===0)&&(o=W(),L(o),F(!1),u=!0)}if(E){for(var g=null,y,m=0;m<c;m++){if(I.nodeType===8&&I.data===we){o=I,u=!0,F(!1);break}var w=s[m],i=t(w,m);y=pe(I,d,g,null,w,i,m,l,e),d.items.set(i,y),g=y}c>0&&L(W())}if(!E){var v=Te;qe(s,d,o,l,e,(v.f&M)!==0,t)}f!==null&&(c===0?_?ce(_):_=B(()=>f(o)):_!==null&&be(_,()=>{_=null})),u&&F(!0),S(b)}),E&&(o=I)}function qe(r,e,a,t,l,f,o,d){var $,j,z,J;var n=(l&Ce)!==0,p=(l&(V|U))!==0,_=r.length,h=e.items,b=e.first,s=b,c,u=null,k,g=[],y=[],m,w,i,v;if(n)for(v=0;v<_;v+=1)m=r[v],w=o(m,v),i=h.get(w),i!==void 0&&(($=i.a)==null||$.measure(),(k??(k=new Set)).add(i));for(v=0;v<_;v+=1){if(m=r[v],w=o(m,v),i=h.get(w),i===void 0){var ge=s?s.e.nodes_start:a;u=pe(ge,e,u,u===null?e.first:u.next,m,w,v,t,l),h.set(w,u),g=[],y=[],s=u.next;continue}if(p&&Be(i,m,v,l),i.e.f&M&&(ce(i.e),n&&((j=i.a)==null||j.unfix(),(k??(k=new Set)).delete(i))),i!==s){if(c!==void 0&&c.has(i)){if(g.length<y.length){var D=y[0],T;u=D.prev;var X=g[0],O=g[g.length-1];for(T=0;T<g.length;T+=1)le(g[T],D,a);for(T=0;T<y.length;T+=1)c.delete(y[T]);x(e,X.prev,O.next),x(e,u,X),x(e,O,D),s=D,u=O,v-=1,g=[],y=[]}else c.delete(i),le(i,s,a),x(e,i.prev,i.next),x(e,i,u===null?e.first:u.next),x(e,u,i),u=i;continue}for(g=[],y=[];s!==null&&s.k!==w;)(f||!(s.e.f&M))&&(c??(c=new Set)).add(s),y.push(s),s=s.next;if(s===null)continue;i=s}g.push(i),u=i,s=i.next}if(s!==null||c!==void 0){for(var N=c===void 0?[]:fe(c);s!==null;)(f||!(s.e.f&M))&&N.push(s),s=s.next;var P=N.length;if(P>0){var me=l&ue&&_===0?a:null;if(n){for(v=0;v<P;v+=1)(z=N[v].a)==null||z.measure();for(v=0;v<P;v+=1)(J=N[v].a)==null||J.fix()}Ge(e,N,me,h)}}n&&xe(()=>{var K;if(k!==void 0)for(i of k)(K=i.a)==null||K.apply()}),Z.first=e.first&&e.first.e,Z.last=u&&u.e}function Be(r,e,a,t){t&V&&ee(r.v,e),t&U?ee(r.i,a):r.i=a}function pe(r,e,a,t,l,f,o,d,n,p){var _=(n&V)!==0,h=(n&De)===0,b=_?h?Ie(l):ae(l):l,s=n&U?ae(o):o,c={i:s,v:b,k:f,a:null,e:null,prev:a,next:t};try{return c.e=B(()=>d(r,b,s),E),c.e.prev=a&&a.e,c.e.next=t&&t.e,a===null?e.first=c:(a.next=c,a.e.next=c.e),t!==null&&(t.prev=c,t.e.prev=c.e),c}finally{}}function le(r,e,a){for(var t=r.next?r.next.e.nodes_start:a,l=e?e.e.nodes_start:a,f=r.e.nodes_start;f!==t;){var o=de(f);l.before(f),f=o}}function x(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ve(r,e,a,t,l){var f=r,o="",d;oe(()=>{if(o===(o=e()??"")){E&&G();return}d!==void 0&&(ve(d),d=void 0),o!==""&&(d=B(()=>{if(E){I.data;for(var n=G(),p=n;n!==null&&(n.nodeType!==8||n.data!=="");)p=n,n=de(n);if(n===null)throw He(),Le;Q(I,p),f=L(n);return}var _=o+"",h=he(_);Q(_e(h),h.lastChild),f.before(h)}))})}function H(r,e,a,t){var l=r.__attributes??(r.__attributes={});E&&(l[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||l[e]!==(l[e]=a)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[Me]=a),a==null?r.removeAttribute(e):typeof a!="string"&&Ue(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var ne=new Map;function Ue(r){var e=ne.get(r.nodeName);if(e)return e;ne.set(r.nodeName,e=[]);for(var a,t=r,l=Element.prototype;l!==t;){a=Pe(t);for(var f in a)a[f].set&&e.push(f);t=Oe(t)}return e}var Xe=q('<li class="project__languages__language svelte-114yrwy"><a target="_blank"><img></a></li>'),$e=q('<div class="project svelte-114yrwy"><div class="project__image svelte-114yrwy"><img alt="SDSGC App" class="svelte-114yrwy"></div> <div class="project__description svelte-114yrwy"><h3 class="svelte-114yrwy"> </h3> <!></div> <div class="project__languages svelte-114yrwy"><ul class="svelte-114yrwy"></ul></div></div>'),je=q('<header class="svelte-114yrwy"><div class="navwrapper svelte-114yrwy"><h1 class="svelte-114yrwy">Yuji</h1> <nav></nav></div></header> <main class="svelte-114yrwy"><section class="section projects svelte-114yrwy"><h2 class="section__title svelte-114yrwy">Projects</h2> <!></section> <section class="section contact svelte-114yrwy"><ul class="contact__list svelte-114yrwy"><li class="contact__list__item svelte-114yrwy"><a class="contact__list__item__link" href="https://github.com/arito7" target="_blank"><img class="contact__list__item__icon svelte-114yrwy" src="./images/github.svg" alt=""></a></li> <li class="contact__list__item svelte-114yrwy"><a class="contact__list__item__link" href="mailto:pon372591@gmail.com"><img class="contact__list__item__icon svelte-114yrwy" src="./images/email.png" alt=""></a></li></ul></section></main> <footer class="svelte-114yrwy"><span>Copyright &copy; 2025 Yuji</span></footer>',1);function We(r){const e=[{platform:"android",name:"SDSGC App",description:`
				<p style='margin-bottom: 8px'>
				An app for managing game characters for the mobile game 
				<b><i>Seven Deadly Sins: Grand Cross</i></b>. 
				</p>
				<h3><u><b>Features</b></u></h3>
				<ul style='margin-bottom: 8px;'>
					<li>
					🟆 Voting system for users to rank certain characters.
					</li>
					<li>
					🟆 Runtime updates for new characters.
					</li>
					<li>
					🟆 User data backups to Firestore
					</li>
					<li>
					🟆 Data stored in Google Spreadsheets
					</li>
				</ul>
				<ul>
					<li>
						Platform: <b>Android (Playstore)</b>
					</li>
					<li>
						Language: <b>React Native</b>
					</li>
					<li>
						Framework: <b>Expo</b>
					</li>
					<li>
						Backend: <b>Firestore</b>
					</li>
				</ul>
				`,image_path:"./images/sdsgc.png",languages:["playstore","expo","react"]},{platform:"android",name:"OSRS Prices",description:`
				<p style='margin-bottom: 8px'>
				An app to track real time prices for an in-game marketplace for the game <b><i>Runescape</i></b>.
				</p>
				<h3><u><b>Features</b></u></h3>
				<ul style='margin-bottom: 8px;'>
					<li>
					🟆 Hits the publicly available game API for realtime data.
					</li>
					<li>
					🟆 Graphs the data to selected time intervals.
					</li>
				</ul>
				<ul>
					<li>
						Platform: <b>Android (Playstore)</b>
					</li>
					<li>
						Language: <b>React Native</b>
					</li>
					<li>
						Framework: <b>Expo</b>
					</li>
				</ul>
			`,image_path:"./images/osrs.png",languages:["playstore","expo","react"]}],a={react:"https://reactnative.dev",expo:"https://expo.dev"};var t=je(),l=C(Ye(t),2),f=R(l),o=C(R(f),2);te(o,1,()=>e,ie,(d,n)=>{var p=$e(),_=R(p),h=R(_);A(_);var b=C(_,2),s=R(b),c=R(s,!0);A(s);var u=C(s,2);Ve(u,()=>S(n).description),A(b);var k=C(b,2),g=R(k);te(g,5,()=>S(n).languages,ie,(y,m)=>{var w=Xe(),i=R(w),v=R(i);A(i),A(w),se(()=>{H(i,"href",a[S(m)]),H(v,"src",`./images/${S(m)}.svg`),H(v,"alt",S(m))}),Y(y,w)}),A(g),A(k),A(p),se(()=>{H(h,"src",S(n).image_path),Fe(c,S(n).name)}),Y(d,p)}),A(f),re(2),A(l),re(2),Y(r,t)}export{We as component};
