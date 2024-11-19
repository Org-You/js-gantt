import{s as z,e as f,c as g,b as E,f as l,r as w,i,n as M,o as T,p as j,a as v,H as A,y as x,g as $,z as W}from"../chunks/scheduler.lruobs1Y.js";import{S as B,i as P,b as D,d as C,m as L,a as H,t as R,e as S}from"../chunks/index.DyGm78TJ.js";import{g as G,a as I}from"../chunks/spread.CgU5AtxT.js";import{L as N}from"../chunks/layout.zjTtpqzV.js";import{S as U,t as d}from"../chunks/index.Up5bhyj0.js";function V(u){let n,e,p;return e=new U({props:{from:d("8:00"),to:d("14:00"),minWidth:400,fitWidth:!0,rows:[{id:1},{id:2}],timeRanges:[{id:1,from:d("8:00"),to:d("9:00"),classes:null,label:"Breakfast"},{id:0,from:d("10:00"),to:d("11:00"),classes:"time-range-lunch",label:"Lunch",resizable:!1},{id:2,from:d("12:00"),to:d("13:00"),label:"Custom class",classes:"gradient"}]}}),{c(){n=f("div"),D(e.$$.fragment),this.h()},l(t){n=g(t,"DIV",{class:!0});var a=E(n);C(e.$$.fragment,a),a.forEach(l),this.h()},h(){w(n,"class","example border my-12 svelte-134mm6g")},m(t,a){i(t,n,a),L(e,n,null),p=!0},p:M,i(t){p||(H(e.$$.fragment,t),p=!0)},o(t){R(e.$$.fragment,t),p=!1},d(t){t&&l(n),S(e)}}}class F extends B{constructor(n){super(),P(this,n,null,V,z,{})}}function J(u){let n,e='Time range<a class="header-anchor" aria-hidden="true" href="#time-range">#</a>',p,t,a="Renders a block of time spanning all the rows.",c,r,O='<thead><tr><th>Name</th> <th>Description</th> <th>Type</th> <th align="right">Default</th></tr></thead> <tbody><tr><td><code>id</code></td> <td>Unique id of time range.</td> <td><code>number</code>|<code>string</code></td> <td align="right">undefined</td></tr> <tr><td><code>from</code></td> <td>Datetime timeRange starts on.</td> <td><code>number</code></td> <td align="right">undefined</td></tr> <tr><td><code>to</code></td> <td>Datetime timeRange ends on.</td> <td><code>number</code></td> <td align="right">undefined</td></tr> <tr><td><code>classes</code></td> <td>Custom CSS classes.</td> <td><code>string</code>|<code>Array</code></td> <td align="right">undefined</td></tr> <tr><td><code>label</code></td> <td>Display label.</td> <td><code>string</code></td> <td align="right">undefined</td></tr> <tr><td><code>resizable</code></td> <td>Should the time range be resizable.</td> <td><code>boolean</code></td> <td align="right">false</td></tr></tbody>',y,k,h,q=`<code class="language-js"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">timeRanges</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-02-01T08:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-02-01T09:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breakfast'</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-02-01T10:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-02-01T11:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">classes</span><span class="token operator">:</span> <span class="token string">'time-range-lunch'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lunch'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">resizable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-02-01T11:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-02-01T12:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Custom class'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">classes</span><span class="token operator">:</span> <span class="token string">'gradient'</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,_,m,b;return m=new F({}),{c(){n=f("h1"),n.innerHTML=e,p=v(),t=f("p"),t.textContent=a,c=v(),r=f("table"),r.innerHTML=O,y=v(),k=f("pre"),h=new A(!1),_=v(),D(m.$$.fragment),this.h()},l(s){n=g(s,"H1",{id:!0,tabindex:!0,"data-svelte-h":!0}),x(n)!=="svelte-snhjny"&&(n.innerHTML=e),p=$(s),t=g(s,"P",{"data-svelte-h":!0}),x(t)!=="svelte-1ikt61s"&&(t.textContent=a),c=$(s),r=g(s,"TABLE",{"data-svelte-h":!0}),x(r)!=="svelte-1j6yvtm"&&(r.innerHTML=O),y=$(s),k=g(s,"PRE",{class:!0});var o=E(k);h=W(o,!1),o.forEach(l),_=$(s),C(m.$$.fragment,s),this.h()},h(){w(n,"id","time-range"),w(n,"tabindex","-1"),h.a=null,w(k,"class","language-js")},m(s,o){i(s,n,o),i(s,p,o),i(s,t,o),i(s,c,o),i(s,r,o),i(s,y,o),i(s,k,o),h.m(q,k),i(s,_,o),L(m,s,o),b=!0},p:M,i(s){b||(H(m.$$.fragment,s),b=!0)},o(s){R(m.$$.fragment,s),b=!1},d(s){s&&(l(n),l(p),l(t),l(c),l(r),l(y),l(k),l(_)),S(m,s)}}}function K(u){let n,e;const p=[u[0]];let t={$$slots:{default:[J]},$$scope:{ctx:u}};for(let a=0;a<p.length;a+=1)t=T(t,p[a]);return n=new N({props:t}),{c(){D(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,c){L(n,a,c),e=!0},p(a,[c]){const r=c&1?G(p,[I(a[0])]):{};c&2&&(r.$$scope={dirty:c,ctx:a}),n.$set(r)},i(a){e||(H(n.$$.fragment,a),e=!0)},o(a){R(n.$$.fragment,a),e=!1},d(a){S(n,a)}}}function Q(u,n,e){return u.$$set=p=>{e(0,n=T(T({},n),j(p)))},n=j(n),[n]}class an extends B{constructor(n){super(),P(this,n,Q,K,z,{})}}export{an as component};
