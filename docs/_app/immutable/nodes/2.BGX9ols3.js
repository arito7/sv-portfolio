import{a as be,d as Ye,b as U,t as Q}from"../chunks/CutPBI5F.js";import{G as Se,E as I,p as _e,P as w,_ as Be,$ as ke,o as J,n as oe,t as V,a0 as W,a1 as Te,C as fe,a2 as $e,z as Re,g as ye,a3 as qe,a4 as Ke,y as Ue,a5 as Xe,K as De,j as Oe,B as ze,a6 as Je,v as We,f as Ze,q as Qe,a7 as ue,a8 as de,a9 as et,aa as we,ab as Le,ac as tt,ad as at,k as Me,i as st,w as rt,m as it,ae as lt,af as nt,ag as ot,D as ct,L as vt,W as X,F as _t,ah as Z,ai as xe,X as h,Z as x,Y as p,aj as z}from"../chunks/CgK8UiS5.js";import{d as ft,s as Ee}from"../chunks/_U13yiob.js";import{b as H}from"../chunks/B5-zWpMC.js";import{o as ut}from"../chunks/1biGq73F.js";function ce(t,e){return e}function dt(t,e,a,s){for(var r=[],o=e.length,n=0;n<o;n++)Ke(e[n].e,r,!0);var m=o>0&&r.length===0&&a!==null;if(m){var c=a.parentNode;Ue(c),c.append(a),s.clear(),R(t,e[0].prev,e[o-1].next)}Xe(r,()=>{for(var b=0;b<o;b++){var f=e[b];m||(s.delete(f.k),R(t,f.prev,f.next)),De(f.e,!m)}})}function ve(t,e,a,s,r,o=null){var n=t,m={flags:e,items:new Map,first:null},c=(e&Le)!==0;if(c){var b=t;n=I?J(Oe(b)):b.appendChild(ze())}I&&_e();var f=null,g=!1,A=Je(()=>{var i=a();return st(i)?i:i==null?[]:Re(i)});Se(()=>{var i=w(A),v=i.length;if(g&&v===0)return;g=v===0;let u=!1;if(I){var T=n.data===Be;T!==(v===0)&&(n=ke(),J(n),oe(!1),u=!0)}if(I){for(var k=null,y,q=0;q<v;q++){if(V.nodeType===8&&V.data===We){n=V,u=!0,oe(!1);break}var E=i[q],l=s(E,q);y=Pe(V,m,k,null,E,l,q,r,e),m.items.set(l,y),k=y}v>0&&J(ke())}if(!I){var _=Ze;pt(i,m,n,r,e,(_.f&W)!==0,s)}o!==null&&(v===0?f?Te(f):f=fe(()=>o(n)):f!==null&&$e(f,()=>{f=null})),u&&oe(!0),w(A)}),I&&(n=V)}function pt(t,e,a,s,r,o,n,m){var F,G,K,Y;var c=(r&tt)!==0,b=(r&(ue|de))!==0,f=t.length,g=e.items,A=e.first,i=A,v,u=null,T,k=[],y=[],q,E,l,_;if(c)for(_=0;_<f;_+=1)q=t[_],E=n(q,_),l=g.get(E),l!==void 0&&((F=l.a)==null||F.measure(),(T??(T=new Set)).add(l));for(_=0;_<f;_+=1){if(q=t[_],E=n(q,_),l=g.get(E),l===void 0){var ee=i?i.e.nodes_start:a;u=Pe(ee,e,u,u===null?e.first:u.next,q,E,_,s,r),g.set(E,u),k=[],y=[],i=u.next;continue}if(b&&mt(l,q,_,r),l.e.f&W&&(Te(l.e),c&&((G=l.a)==null||G.unfix(),(T??(T=new Set)).delete(l))),l!==i){if(v!==void 0&&v.has(l)){if(k.length<y.length){var j=y[0],C;u=j.prev;var D=k[0],O=k[k.length-1];for(C=0;C<k.length;C+=1)Ae(k[C],j,a);for(C=0;C<y.length;C+=1)v.delete(y[C]);R(e,D.prev,O.next),R(e,u,D),R(e,O,j),i=j,u=O,_-=1,k=[],y=[]}else v.delete(l),Ae(l,i,a),R(e,l.prev,l.next),R(e,l,u===null?e.first:u.next),R(e,u,l),u=l;continue}for(k=[],y=[];i!==null&&i.k!==E;)(o||!(i.e.f&W))&&(v??(v=new Set)).add(i),y.push(i),i=i.next;if(i===null)continue;l=i}k.push(l),u=l,i=l.next}if(i!==null||v!==void 0){for(var L=v===void 0?[]:Re(v);i!==null;)(o||!(i.e.f&W))&&L.push(i),i=i.next;var M=L.length;if(M>0){var te=r&Le&&f===0?a:null;if(c){for(_=0;_<M;_+=1)(K=L[_].a)==null||K.measure();for(_=0;_<M;_+=1)(Y=L[_].a)==null||Y.fix()}dt(e,L,te,g)}}c&&Qe(()=>{var B;if(T!==void 0)for(l of T)(B=l.a)==null||B.apply()}),ye.first=e.first&&e.first.e,ye.last=u&&u.e}function mt(t,e,a,s){s&ue&&qe(t.v,e),s&de?qe(t.i,a):t.i=a}function Pe(t,e,a,s,r,o,n,m,c,b){var f=(c&ue)!==0,g=(c&at)===0,A=f?g?et(r):we(r):r,i=c&de?we(n):n,v={i,v:A,k:o,a:null,e:null,prev:a,next:s};try{return v.e=fe(()=>m(t,A,i),I),v.e.prev=a&&a.e,v.e.next=s&&s.e,a===null?e.first=v:(a.next=v,a.e.next=v.e),s!==null&&(s.prev=v,s.e.prev=v.e),v}finally{}}function Ae(t,e,a){for(var s=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,o=t.e.nodes_start;o!==s;){var n=Me(o);r.before(o),o=n}}function R(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ht(t,e,a,s,r){var o=t,n="",m;Se(()=>{if(n===(n=e()??"")){I&&_e();return}m!==void 0&&(De(m),m=void 0),n!==""&&(m=fe(()=>{if(I){V.data;for(var c=_e(),b=c;c!==null&&(c.nodeType!==8||c.data!=="");)b=c,c=Me(c);if(c===null)throw rt(),it;be(V,b),o=J(c);return}var f=n+"",g=Ye(f);be(Oe(g),g.lastChild),o.before(g)}))})}function He(t){var e,a,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(a=He(t[e]))&&(s&&(s+=" "),s+=a)}else for(a in t)t[a]&&(s&&(s+=" "),s+=a);return s}function gt(){for(var t,e,a=0,s="",r=arguments.length;a<r;a++)(t=arguments[a])&&(e=He(t))&&(s&&(s+=" "),s+=e);return s}function Ie(t){return typeof t=="object"?gt(t):t??""}function $(t,e,a,s){var r=t.__attributes??(t.__attributes={});I&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[lt]=a),a==null?t.removeAttribute(e):typeof a!="string"&&bt(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Ce=new Map;function bt(t){var e=Ce.get(t.nodeName);if(e)return e;Ce.set(t.nodeName,e=[]);for(var a,s=t,r=Element.prototype;r!==s;){a=ot(s);for(var o in a)a[o].set&&e.push(o);s=nt(s)}return e}function Ne(t,e,a){var s=t.__className,r=kt(e,a);I&&t.className===r?t.__className=r:(s!==r||I&&t.className!==r)&&(t.className=r,t.__className=r)}function kt(t,e){return(t??"")+(" "+e)}const yt=(t,e)=>{Z(e,!0),window.document.body.style.overflow="hidden"};var qt=(t,e,a)=>e(w(a)),wt=Q('<li class="nav__list__item svelte-1v0t5q7"><button class="nav__list__item__link"> </button></li>'),xt=Q('<li class="project__languages__language svelte-1v0t5q7"><a target="_blank"><img></a></li>'),Et=Q('<div class="project svelte-1v0t5q7"><div class="project__image svelte-1v0t5q7"><img alt="SDSGC App" class="svelte-1v0t5q7"></div> <div class="project__description svelte-1v0t5q7"><h3 class="svelte-1v0t5q7"> </h3> <!></div> <div class="project__languages svelte-1v0t5q7"><ul class="svelte-1v0t5q7"></ul></div></div>'),At=Q(`<header class="svelte-1v0t5q7"><div class="navwrapper svelte-1v0t5q7"><nav class="nav svelte-1v0t5q7"><h1 class="svelte-1v0t5q7">Yuji</h1> <ul><button class="nav__close-btn svelte-1v0t5q7"><img src="./images/close.svg" width="32px" alt=""></button> <!></ul> <button class="nav__menu-btn svelte-1v0t5q7"><img src="./images/menu.svg" width="32px" alt=""></button></nav></div></header> <main class="svelte-1v0t5q7"><button><span>お問い合わせ</span><img width="32px" src="./images/contact-mail.svg" alt="" class="svelte-1v0t5q7"></button> <section id="intro" class="section intro svelte-1v0t5q7"><h2 class="section__title svelte-1v0t5q7">Introduction</h2> <div class="section__connector svelte-1v0t5q7"></div> <p class="svelte-1v0t5q7">アメリカで20年以上過ごし、英語力を活かしてフリーランスの翻訳・通訳業務を行っています。TOEIC
			990点を取得しており、ビジネスや国際的な環境での円滑なコミュニケーションに強みがあります。
			加えて、Python、Excel、ウェブ開発（JavaScript、HTML、CSS、React、Svelte）を駆使し、業務の効率化やシステム開発をサポート。ExcelではVBAを用いて作業の自動化やデータ分析を行い、ReactやSvelteを活用してインタラクティブなウェブサイトを構築しています。
			自己開発でAndroidアプリも制作しており、幅広い技術を組み合わせて、クライアントの多様なニーズに応えています。今後もこれらのスキルを活かし、更なる成長を目指し貢献していきたいと考えています。</p></section> <section class="section svelte-1v0t5q7"><h2 class="section__title svelte-1v0t5q7">ツール制作</h2></section> <section id="projects" class="section projects svelte-1v0t5q7"><h2 class="section__title svelte-1v0t5q7">Projects</h2> <!></section> <section id="contact" class="section contact svelte-1v0t5q7"><h2 class="section__title svelte-1v0t5q7">Contact</h2> <form class="contact-form svelte-1v0t5q7" action="https://api.web3forms.com/submit" method="POST"><input class="contact-form__input svelte-1v0t5q7" type="text" name="name" required placeholder="Name"> <input class="contact-form__input svelte-1v0t5q7" type="email" name="email" required placeholder="Email"> <input type="hidden" name="access_key" value="b7d864e2-0a79-4044-ab01-60c6c87ea2b0"> <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <textarea class="contact-form__input textarea svelte-1v0t5q7" name="message" required placeholder="text" aria-multiline="true"></textarea> <button type="submit" class="svelte-1v0t5q7"><span>お問い合わせ</span> <img src="./images/arrow.svg" width="28px" alt=""></button></form></section> <section class="section links svelte-1v0t5q7"><ul class="links__list svelte-1v0t5q7"><li class="links__list__item svelte-1v0t5q7"><a class="links__list__item__link" href="https://github.com/arito7" target="_blank"><img class="links__list__item__icon" src="./images/github.svg" alt=""></a></li> <li class="links__list__item svelte-1v0t5q7"><a class="links__list__item__link" href="mailto:pon372591@gmail.com"><img width="24px" class="links__list__item__icon" src="./images/contact-mail.svg" alt=""></a></li></ul></section></main> <footer class="svelte-1v0t5q7"><span>Copyright &copy; 2025 Yuji</span></footer>`,1);function Rt(t,e){ct(e,!0);const a=[{platform:"android",name:"SDSGC App",description:`
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
			`,image_path:"./images/osrs.png",languages:["playstore","expo","react"]}],s={react:"https://reactnative.dev",expo:"https://expo.dev"},r=["Intro","Tools","Projects","Contact"];let o=xe(!0),n=xe(!1),m,c,b,f,g,A,i;const v=()=>{A.scrollIntoView({behavior:"smooth",block:"start"})},u=()=>{Z(n,!1),window.document.body.style.overflow="auto"},T=d=>{switch(d){case"Intro":b.scrollIntoView({behavior:"smooth",block:"start"});break;case"Tools":f.scrollIntoView({behavior:"smooth",block:"start"});break;case"Projects":g.scrollIntoView({behavior:"smooth",block:"start"});break;case"Contact":A.scrollIntoView({behavior:"smooth",block:"start"});break}w(n)&&u(),console.log(d)};ut(()=>{m.onclick=v,new IntersectionObserver(N=>{N.forEach(S=>{S.isIntersecting?Z(o,!1):Z(o,!0)})}).observe(c)});var k=At(),y=vt(k),q=h(y),E=h(q),l=x(h(E),2),_=h(l);_.__click=u;var ee=x(_,2);ve(ee,17,()=>r,ce,(d,N)=>{var S=wt(),P=h(S);P.__click=[qt,T,N];var ae=h(P,!0);p(P),p(S),X(()=>Ee(ae,w(N))),U(d,S)}),p(l),H(l,d=>i=d,()=>i);var j=x(l,2);j.__click=[yt,n],p(E),p(q),p(y);var C=x(y,2),D=h(C);H(D,d=>m=d,()=>m);var O=x(D,2),L=h(O);H(L,d=>b=d,()=>b),z(4),p(O);var M=x(O,2),te=h(M);H(te,d=>f=d,()=>f),p(M);var F=x(M,2),G=h(F);H(G,d=>g=d,()=>g);var K=x(G,2);ve(K,17,()=>a,ce,(d,N)=>{var S=Et(),P=h(S),ae=h(P);p(P);var se=x(P,2),re=h(se),je=h(re,!0);p(re);var Fe=x(re,2);ht(Fe,()=>w(N).description),p(se);var me=x(se,2),he=h(me);ve(he,21,()=>w(N).languages,ce,(Ge,ie)=>{var le=xt(),ne=h(le),ge=h(ne);p(ne),p(le),X(()=>{$(ne,"href",s[w(ie)]),$(ge,"src",`./images/${w(ie)}.svg`),$(ge,"alt",w(ie))}),U(Ge,le)}),p(he),p(me),p(S),X(()=>{$(ae,"src",w(N).image_path),Ee(je,w(N).name)}),U(d,S)}),p(F);var Y=x(F,2),B=h(Y);H(B,d=>A=d,()=>A);var pe=x(B,2),Ve=x(h(pe),8);H(Ve,d=>c=d,()=>c),z(2),p(pe),p(Y),z(2),p(C),z(2),X(()=>{Ne(l,Ie(["nav__list",w(n)?"nav__list--open":""]),"svelte-1v0t5q7"),Ne(D,Ie(["cta_button",w(o)?"":"cta_button--hidden"]),"svelte-1v0t5q7"),$(D,"style",w(n)?"display: none":"")}),U(t,k),_t()}ft(["click"]);export{Rt as component};
