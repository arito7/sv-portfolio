var Pn=Array.isArray,Xt=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,Qt=Object.getPrototypeOf;const Yn=()=>{};function jn(t){return t()}function tn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,U=8,ot=16,x=32,V=64,Z=128,N=256,z=512,p=1024,D=2048,q=4096,F=8192,L=16384,nn=32768,Tt=65536,Hn=1<<17,rn=1<<19,mt=1<<20,ht=Symbol("$state"),Bn=Symbol("legacy props"),Un=Symbol("");function gt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Zn(){tt=!0}const zn=1,Wn=2,Xn=16,Jn=1,Qn=2,tr=4,nr=8,rr=16,er=1,lr=2,_n="[",cn="[!",vn="]",Rt={},sr=Symbol();function it(t,n){var r={f:0,v:t,reactions:null,equals:gt,rv:0,wv:0};return r}function ar(t){return pn(it(t))}function ur(t,n=!1){var e;const r=it(t);return n||(r.equals=At),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function pn(t){return u!==null&&!R&&u.f&y&&(g===null?xn([t]):g.push(t)),t}function or(t,n){return u!==null&&!R&&nt()&&u.f&(y|ot)&&(g===null||!g.includes(t))&&fn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Vt(),xt(t,D),nt()&&i!==null&&i.f&p&&!(i.f&(x|V))&&(A===null?Dn([t]):A.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&D||!e&&a===i||(T(a,n),o&(p|N)&&(o&y?xt(a,q):et(a)))}}function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let I=!1;function ir(t){I=t}let w;function Y(t){if(t===null)throw Dt(),Rt;return w=t}function fr(){return Y(C(w))}function _r(t){if(I){if(C(w)!==null)throw Dt(),Rt;w=t}}function cr(t=1){if(I){for(var n=t,r=w;n--;)r=C(r);w=r}}function vr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var dt,St,kt;function pr(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;St=pt(n,"firstChild").get,kt=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return St.call(t)}function C(t){return kt.call(t)}function hr(t,n){if(!I)return st(t);var r=st(w);if(r===null)r=w.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),Y(e),e}return Y(r),r}function dr(t,n){if(!I){var r=st(t);return r instanceof Comment&&r.data===""?C(r):r}return w}function Er(t,n=1,r=!1){let e=I?w:t;for(var l;n--;)l=e,e=C(e);if(!I)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),Y(a),a}return Y(e),e}function yr(t){t.textContent=""}function It(t){var n=y|D;i===null?n|=N:i.f|=mt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:gt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function wr(t){const n=It(t);return n.equals=At,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ft(e):O(e)}}}function dn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Nt(t){var n,r=i;J(dn(t));try{Ot(t),n=Kt(t)}finally{J(r)}return n}function Ct(t){var n=Nt(t),r=(k||t.f&N)&&t.deps!==null?q:p;T(t,r),t.equals(n)||(t.v=n,t.wv=Vt())}function ft(t){Ot(t),B(t,0),T(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){i===null&&u===null&&an(),u!==null&&u.f&N&&sn(),_t&&ln()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var l=(t&V)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=b;try{Et(!0),ct(a),a.f|=nn}catch(m){throw O(a),m}finally{Et(o)}}else n!==null&&et(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|Z))===0;if(!_&&!l&&e&&(s!==null&&En(a,s),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function Tr(t){const n=M(U,null,!1);return T(n,p),n.teardown=t,n}function mr(t){bt();var n=i!==null&&(i.f&x)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Pt(t);return e}}function gr(t){return bt(),yn(t)}function Ar(t){const n=M(V,t,!0);return(r={})=>new Promise(e=>{r.outro?mn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Pt(t){return M(wt,t,!1)}function yn(t){return M(U,t,!0)}function Rr(t,n=[],r=It){const e=n.map(r);return wn(()=>t(...e.map(Cn)))}function wn(t,n=0){return M(U|ot|n,t,!0)}function xr(t,n=!0){return M(U|x,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=u;yt(!0),X(null);try{n.call(null)}finally{yt(r),X(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:C(e);e.remove(),e=s}r=!0}Lt(t,n&&!r),qt(t),B(t,0),T(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ft(t);var o=t.parent;o!==null&&o.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mn(t,n){var r=[];Yt(t,r,!0),gn(r,()=>{O(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&x)!==0;Yt(e,n,s?r:!1),e=l}}}function Dr(t){jt(t,!0)}function jt(t,n){if(t.f&F){t.f^=F,t.f&p||(t.f^=p),G(t)&&(T(t,D),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&x)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let W=!1,at=[];function Ht(){W=!1;const t=at.slice();at=[],tn(t)}function Sr(t){W||(W=!0,queueMicrotask(Ht)),at.push(t)}function An(){W&&Ht()}const Bt=0,Rn=1;let K=!1,$=Bt,j=!1,H=null,b=!1,_t=!1;function Et(t){b=t}function yt(t){_t=t}let S=[],P=0;let u=null,R=!1;function X(t){u=t}let i=null;function J(t){i=t}let g=null;function xn(t){g=t}let h=null,E=0,A=null;function Dn(t){A=t}let Ut=1,Q=0,k=!1,f=null;function Vt(){return++Ut}function nt(){return!tt||f!==null&&f.l===null}function G(t){var c;var n=t.f;if(n&D)return!0;if(n&q){var r=t.deps,e=(n&N)!==0;if(r!==null){var l,s,a=(n&z)!==0,o=e&&i!==null&&!k,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=z)}for(l=0;l<_;l++)if(s=r[l],G(s)&&Ct(s),s.wv>t.wv)return!0}(!e||i!==null&&!k)&&T(t,p)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function kn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(K){if(r===null&&(K=!1),kn(n))throw t;return}r!==null&&(K=!0);{Sn(t,n);return}}function Gt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Gt(s,n,r+1):n===s&&(r===0?T(s,D):s.f&p&&T(s,q),et(s))}}function Kt(t){var vt;var n=h,r=E,e=A,l=u,s=k,a=g,o=f,_=R,c=t.f;h=null,E=0,A=null,u=c&(x|V)?null:t,k=!b&&(c&N)!==0,g=null,f=t.ctx,R=!1,Q++;try{var m=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(B(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!k)for(d=E;d<v.length;d++)((vt=v[d]).reactions??(vt.reactions=[])).push(t)}else v!==null&&E<v.length&&(B(t,E),v.length=E);if(nt()&&A!==null&&!(t.f&(y|q|D)))for(d=0;d<A.length;d++)Gt(A[d],t);return l!==null&&Q++,m}finally{h=n,E=r,A=e,u=l,k=s,g=a,f=o,R=_}}function In(t,n){let r=n.reactions;if(r!==null){var e=Xt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,q),n.f&(N|z)||(n.f^=z),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function ct(t){var n=t.f;if(!(n&L)){T(t,p);var r=i,e=f;i=t;try{n&ot?Tn(t):Lt(t),qt(t),Ft(t);var l=Kt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ut;var s=t.deps,a}catch(o){rt(o,t,r,e||t.ctx)}finally{i=r}}}function $t(){if(P>1e3){P=0;try{un()}catch(t){if(H!==null)rt(t,H,null);else throw t}}P++}function Zt(t){var n=t.length;if(n!==0){$t();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];zt(l,s),On(s)}}finally{b=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|F)))try{G(e)&&(ct(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Nn(){if(j=!1,P>1001)return;const t=S;S=[],Zt(t),j||(P=0,H=null)}function et(t){$===Bt&&(j||(j=!0,queueMicrotask(Nn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(V|x)){if(!(r&p))return;n.f^=p}}S.push(n)}function zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&F))if(l&U){if(s)r.f^=p;else try{G(r)&&ct(r)}catch(v){rt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&wt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var m=0;m<e.length;m++)_=e[m],n.push(_),zt(_,n)}function Wt(t){var n=$,r=S;try{$t();const l=[];$=Rn,S=l,j=!1,Zt(r);var e=t==null?void 0:t();return An(),(S.length>0||l.length>0)&&Wt(),P=0,H=null,e}finally{$=n,S=r}}async function kr(){await Promise.resolve(),Wt()}function Cn(t){var m;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=Nt(t);return ft(t),e}if(u!==null&&!R){g!==null&&g.includes(t)&&on();var l=u.deps;t.rv<Q&&(t.rv=Q,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(m=c.deriveds)!=null&&m.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,G(s)&&Ct(s)),t.v}function Ir(t){var n=R;try{return R=!0,t()}finally{R=n}}const bn=-7169;function T(t,n){t.f=t.f&bn|n}function Or(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:it(!1)})}function Nr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];J(s.effect),X(s.reaction),Pt(s.fn)}}finally{J(r),X(e)}}f=n.p,n.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{jn as $,ir as A,Y as B,fr as C,w as D,vn as E,Dt as F,Vn as G,_n as H,yr as I,Fn as J,Ar as K,lt as L,xr as M,Or as N,I as O,Nr as P,wn as Q,Tt as R,ht as S,Yn as T,sr as U,O as V,dr as W,er as X,lr as Y,gr as Z,tn as _,Mn as a,Cr as a0,It as a1,Zn as a2,Rr as a3,Er as a4,hr as a5,_r as a6,cn as a7,vr as a8,F as a9,Wt as aA,kr as aB,en as aC,Dr as aa,mn as ab,hn as ac,Yt as ad,gn as ae,wr as af,ur as ag,Wn as ah,zn as ai,Xn as aj,Un as ak,Jt as al,Tr as am,ar as an,cr as ao,Gn as ap,Hn as aq,tr as ar,At as as,x as at,V as au,Jn as av,Qn as aw,nr as ax,Bn as ay,rr as az,Kn as b,or as c,Cn as d,i as e,$n as f,pt as g,Qt as h,Pn as i,Pt as j,f as k,tt as l,mr as m,qn as n,Ln as o,X as p,Sr as q,yn as r,it as s,J as t,Ir as u,u as v,pr as w,st as x,C as y,Rt as z};
