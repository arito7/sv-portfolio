var Pn=Array.isArray,Xt=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,Qt=Object.getPrototypeOf;const Yn=()=>{};function Hn(t){return t()}function tn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,Q=8,ot=16,R=32,B=64,$=128,C=256,Z=512,h=1024,S=2048,q=4096,F=8192,L=16384,nn=32768,Tt=65536,jn=1<<17,rn=1<<19,mt=1<<20,ht=Symbol("$state"),Bn=Symbol("legacy props"),Un=Symbol("");function gt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Zn(){tt=!0}const zn=1,Wn=2,Xn=4,Jn=8,Qn=16,tr=1,nr=2,rr=4,er=8,lr=16,sr=1,ar=2,_n="[",cn="[!",vn="]",Dt={},ur=Symbol();function it(t,n){var r={f:0,v:t,reactions:null,equals:gt,rv:0,wv:0};return r}function or(t){return pn(it(t))}function ir(t,n=!1){var e;const r=it(t);return n||(r.equals=At),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function pn(t){return u!==null&&!D&&u.f&y&&(m===null?Rn([t]):m.push(t)),t}function fr(t,n){return u!==null&&!D&&nt()&&u.f&(y|ot)&&(m===null||!m.includes(t))&&fn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Vt(),Rt(t,S),nt()&&i!==null&&i.f&h&&!(i.f&(R|B))&&(A===null?Sn([t]):A.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&S||!e&&a===i||(g(a,n),o&(h|C)&&(o&y?Rt(a,q):et(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function _r(t){O=t}let w;function M(t){if(t===null)throw St(),Dt;return w=t}function cr(){return M(N(w))}function vr(t){if(O){if(N(w)!==null)throw St(),Dt;w=t}}function pr(t=1){if(O){for(var n=t,r=w;n--;)r=N(r);w=r}}function hr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var dt,xt,It;function dr(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;xt=pt(n,"firstChild").get,It=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return xt.call(t)}function N(t){return It.call(t)}function Er(t,n){if(!O)return st(t);var r=st(w);if(r===null)r=w.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function yr(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function wr(t,n=1,r=!1){let e=O?w:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function Tr(t){t.textContent=""}function Ot(t){var n=y|S;i===null?n|=C:i.f|=mt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:gt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function mr(t){const n=Ot(t);return n.equals=At,n}function kt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ft(e):k(e)}}}function dn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=i;X(dn(t));try{kt(t),n=Kt(t)}finally{X(r)}return n}function Nt(t){var n=Ct(t),r=(I||t.f&C)&&t.deps!==null?q:h;g(t,r),t.equals(n)||(t.v=n,t.wv=Vt())}function ft(t){kt(t),j(t,0),g(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){i===null&&u===null&&an(),u!==null&&u.f&C&&sn(),_t&&ln()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function U(t,n,r,e=!0){var l=(t&B)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=b;try{Et(!0),ct(a),a.f|=nn}catch(T){throw k(a),T}finally{Et(o)}}else n!==null&&et(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|$))===0;if(!_&&!l&&e&&(s!==null&&En(a,s),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function gr(t){bt();var n=i!==null&&(i.f&R)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Pt(t);return e}}function Ar(t){return bt(),yn(t)}function Dr(t){const n=U(B,t,!0);return(r={})=>new Promise(e=>{r.outro?mn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Pt(t){return U(wt,t,!1)}function yn(t){return U(Q,t,!0)}function Rr(t,n=[],r=Ot){const e=n.map(r);return wn(()=>t(...e.map(Nn)))}function wn(t,n=0){return U(Q|ot|n,t,!0)}function Sr(t,n=!0){return U(Q|R,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=u;yt(!0),W(null);try{n.call(null)}finally{yt(r),W(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&R||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}Lt(t,n&&!r),qt(t),j(t,0),g(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ft(t);var o=t.parent;o!==null&&o.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mn(t,n){var r=[];Yt(t,r,!0),gn(r,()=>{k(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&R)!==0;Yt(e,n,s?r:!1),e=l}}}function xr(t){Ht(t,!0)}function Ht(t,n){if(t.f&F){t.f^=F,t.f&h||(t.f^=h),V(t)&&(g(t,S),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&R)!==0;Ht(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let z=!1,at=[];function jt(){z=!1;const t=at.slice();at=[],tn(t)}function Ir(t){z||(z=!0,queueMicrotask(jt)),at.push(t)}function An(){z&&jt()}const Bt=0,Dn=1;let G=!1,K=Bt,Y=!1,H=null,b=!1,_t=!1;function Et(t){b=t}function yt(t){_t=t}let x=[],P=0;let u=null,D=!1;function W(t){u=t}let i=null;function X(t){i=t}let m=null;function Rn(t){m=t}let p=null,E=0,A=null;function Sn(t){A=t}let Ut=1,J=0,I=!1,f=null;function Vt(){return++Ut}function nt(){return!tt||f!==null&&f.l===null}function V(t){var c;var n=t.f;if(n&S)return!0;if(n&q){var r=t.deps,e=(n&C)!==0;if(r!==null){var l,s,a=(n&Z)!==0,o=e&&i!==null&&!I,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=Z)}for(l=0;l<_;l++)if(s=r[l],V(s)&&Nt(s),s.wv>t.wv)return!0}(!e||i!==null&&!I)&&g(t,h)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw G=!1,t}function In(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&$)===0)}function rt(t,n,r,e){if(G){if(r===null&&(G=!1),In(n))throw t;return}r!==null&&(G=!0);{xn(t,n);return}}function Gt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Gt(s,n,r+1):n===s&&(r===0?g(s,S):s.f&h&&g(s,q),et(s))}}function Kt(t){var vt;var n=p,r=E,e=A,l=u,s=I,a=m,o=f,_=D,c=t.f;p=null,E=0,A=null,u=c&(R|B)?null:t,I=!b&&(c&C)!==0,m=null,f=t.ctx,D=!1,J++;try{var T=(0,t.fn)(),v=t.deps;if(p!==null){var d;if(j(t,E),v!==null&&E>0)for(v.length=E+p.length,d=0;d<p.length;d++)v[E+d]=p[d];else t.deps=v=p;if(!I)for(d=E;d<v.length;d++)((vt=v[d]).reactions??(vt.reactions=[])).push(t)}else v!==null&&E<v.length&&(j(t,E),v.length=E);if(nt()&&A!==null&&!(t.f&(y|q|S)))for(d=0;d<A.length;d++)Gt(A[d],t);return l!==null&&J++,T}finally{p=n,E=r,A=e,u=l,I=s,m=a,f=o,D=_}}function On(t,n){let r=n.reactions;if(r!==null){var e=Xt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(p===null||!p.includes(n))&&(g(n,q),n.f&(C|Z)||(n.f^=Z),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function ct(t){var n=t.f;if(!(n&L)){g(t,h);var r=i,e=f;i=t;try{n&ot?Tn(t):Lt(t),qt(t),Ft(t);var l=Kt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ut;var s=t.deps,a}catch(o){rt(o,t,r,e||t.ctx)}finally{i=r}}}function $t(){if(P>1e3){P=0;try{un()}catch(t){if(H!==null)rt(t,H,null);else throw t}}P++}function Zt(t){var n=t.length;if(n!==0){$t();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];zt(l,s),kn(s)}}finally{b=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|F)))try{V(e)&&(ct(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Cn(){if(Y=!1,P>1001)return;const t=x;x=[],Zt(t),Y||(P=0,H=null)}function et(t){K===Bt&&(Y||(Y=!0,queueMicrotask(Cn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|R)){if(!(r&h))return;n.f^=h}}x.push(n)}function zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&R)!==0,a=s&&(l&h)!==0,o=r.next;if(!a&&!(l&F))if(l&Q){if(s)r.f^=h;else try{V(r)&&ct(r)}catch(v){rt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&wt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var T=0;T<e.length;T++)_=e[T],n.push(_),zt(_,n)}function Wt(t){var n=K,r=x;try{$t();const l=[];K=Dn,x=l,Y=!1,Zt(r);var e=t==null?void 0:t();return An(),(x.length>0||l.length>0)&&Wt(),P=0,H=null,e}finally{K=n,x=r}}async function Or(){await Promise.resolve(),Wt()}function Nn(t){var T;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=Ct(t);return ft(t),e}if(u!==null&&!D){m!==null&&m.includes(t)&&on();var l=u.deps;t.rv<J&&(t.rv=J,p===null&&l!==null&&l[E]===t?E++:p===null?p=[t]:p.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(T=c.deriveds)!=null&&T.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,V(s)&&Nt(s)),t.v}function kr(t){var n=D;try{return D=!0,t()}finally{D=n}}const bn=-7169;function g(t,n){t.f=t.f&bn|n}function Cr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:it(!1)})}function Nr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];X(s.effect),W(s.reaction),Pt(s.fn)}}finally{X(r),W(e)}}f=n.p,n.m=!0}return{}}function br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{hn as $,Sr as A,Cr as B,O as C,Nr as D,wn as E,Tt as F,Yn as G,_n as H,k as I,yr as J,Ar as K,tn as L,Nn as M,Hn as N,br as O,Ot as P,Rr as Q,wr as R,Er as S,vr as T,sr as U,ar as V,cn as W,hr as X,F as Y,xr as Z,mn as _,kr as a,Yt as a0,gn as a1,mr as a2,Ir as a3,zn as a4,Wn as a5,ir as a6,it as a7,Xn as a8,Jn as a9,Wt as aA,Or as aB,or as aC,en as aD,Qn as aa,Un as ab,Qt as ac,Jt as ad,pr as ae,ht as af,Ln as ag,Mn as ah,Kn as ai,fr as aj,pt as ak,ur as al,$n as am,Pt as an,yn as ao,Gn as ap,jn as aq,rr as ar,At as as,R as at,B as au,tr as av,nr as aw,er as ax,Bn as ay,lr as az,X as b,f as c,qn as d,Zn as e,u as f,i as g,dr as h,Pn as i,st as j,N as k,tt as l,Dt as m,_r as n,M as o,cr as p,w as q,vn as r,W as s,St as t,gr as u,Vn as v,Tr as w,Fn as x,Dr as y,lt as z};
