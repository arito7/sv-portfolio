import{d as C,s as A,b as D,i as M,f as P,g as k,h as T,j as Y,H as j,k as B,m as E,n as g,o as O,p as $,t as p,v as q,w as z,x as F,y as W,z as G,A as J,B as K,C as Q,D as U,E as b,F as X,c as Z}from"./CgK8UiS5.js";import{a as x}from"./CutPBI5F.js";const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}const H=new Set,S=new Set;function sr(r){for(var e=0;e<r.length;e++)H.add(r[e]);for(var a of S)a(r)}function m(r){var R;var e=this,a=e.ownerDocument,c=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],t=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(t=i[d]||r.target,t!==e){C(r,"currentTarget",{configurable:!0,get(){return t||a}});var w=P,o=k;A(null),D(null);try{for(var n,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(M(l)){var[L,...V]=l;L.apply(t,[r,...V])}else l.call(t,r)}catch(y){n?s.push(y):n=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{r.__root=e,delete r.currentTarget,A(w),D(o)}}}function or(r,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function tr(r,e){return I(r,e)}function ir(r,e){T(),e.intro=e.intro??!1;const a=e.target,c=b,i=p;try{for(var t=Y(a);t&&(t.nodeType!==8||t.data!==j);)t=B(t);if(!t)throw E;g(!0),O(t),$();const d=I(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==q)throw z(),E;return g(!1),d}catch(d){if(d===E)return e.recover===!1&&F(),T(),W(a),g(!1),tr(r,e);throw d}finally{g(c),O(i)}}const v=new Map;function I(r,{target:e,anchor:a,props:c={},events:i,context:t,intro:d=!0}){T();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var f=er(s);e.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};u(G(H)),S.add(u);var h=void 0,w=J(()=>{var o=a??e.appendChild(K());return Q(()=>{if(t){U({});var n=Z;n.c=t}i&&(c.$$events=i),b&&x(o,null),h=r(o,c)||{},b&&(k.nodes_end=p),t&&X()}),()=>{var f;for(var n of _){e.removeEventListener(n,m);var s=v.get(n);--s===0?(document.removeEventListener(n,m),v.delete(n)):v.set(n,s)}S.delete(u),o!==a&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function fr(r,e){const a=N.get(r);return a?(N.delete(r),a(e)):Promise.resolve()}export{sr as d,ir as h,tr as m,or as s,fr as u};
