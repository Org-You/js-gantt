import{s as Y,q as ce,e as L,a as F,c as E,b as I,f as h,g as G,r as u,i as S,h as b,v as de,w as fe,x as ue,l as se,n as me,a1 as oe,k as ae,Z as re,_ as le,J as he,o as $e,y as pe,B as we,a2 as Ie,t as N,d as O}from"../chunks/scheduler.lruobs1Y.js";import{S as K,i as Q,a as R,t as H,g as ye,c as Le,b as W,d as j,m as B,e as P}from"../chunks/index.DyGm78TJ.js";import{S as Ee,t as x,a as De}from"../chunks/index.Up5bhyj0.js";import{e as ge,u as Se,o as Me}from"../chunks/each.DqwAsWNO.js";import{g as Te,a as Re}from"../chunks/spread.CgU5AtxT.js";import{b as He}from"../chunks/paths.oQcPQ3IF.js";const Ve=r=>({}),_e=r=>({}),Ze=r=>({}),be=r=>({});function Ae(r){let t,e,s,l,o;const d=r[1].title,a=ce(d,r,r[0],be),n=r[1].subtitle,i=ce(n,r,r[0],_e);return{c(){t=L("div"),e=L("h2"),a&&a.c(),s=F(),l=L("p"),i&&i.c(),this.h()},l(c){t=E(c,"DIV",{class:!0});var g=I(t);e=E(g,"H2",{class:!0});var $=I(e);a&&a.l($),$.forEach(h),s=G(g),l=E(g,"P",{class:!0});var p=I(l);i&&i.l(p),p.forEach(h),g.forEach(h),this.h()},h(){u(e,"class","text-lg font-medium text-slate-500"),u(l,"class","text-slate-400 pt-1"),u(t,"class","bg-slate-200/40 p-4")},m(c,g){S(c,t,g),b(t,e),a&&a.m(e,null),b(t,s),b(t,l),i&&i.m(l,null),o=!0},p(c,[g]){a&&a.p&&(!o||g&1)&&de(a,d,c,c[0],o?ue(d,c[0],g,Ze):fe(c[0]),be),i&&i.p&&(!o||g&1)&&de(i,n,c,c[0],o?ue(n,c[0],g,Ve):fe(c[0]),_e)},i(c){o||(R(a,c),R(i,c),o=!0)},o(c){H(a,c),H(i,c),o=!1},d(c){c&&h(t),a&&a.d(c),i&&i.d(c)}}}function Ce(r,t,e){let{$$slots:s={},$$scope:l}=t;return r.$$set=o=>{"$$scope"in o&&e(0,l=o.$$scope)},[l,s]}class te extends K{constructor(t){super(),Q(this,t,Ce,Ae,Y,{})}}function ve(r){let t,e,s,l;return{c(){t=L("div"),e=re("svg"),s=re("path"),l=re("path"),this.h()},l(o){t=E(o,"DIV",{class:!0,style:!0,"data-dependency-id":!0});var d=I(t);e=le(d,"svg",{class:!0,xmlns:!0,"shape-rendering":!0,height:!0,width:!0});var a=I(e);s=le(a,"path",{class:!0,d:!0,stroke:!0,"stroke-width":!0,fill:!0}),I(s).forEach(h),l=le(a,"path",{d:!0,fill:!0}),I(l).forEach(h),a.forEach(h),d.forEach(h),this.h()},h(){u(s,"class","select-area svelte-12syssu"),u(s,"d",r[6]),u(s,"stroke",r[1]),u(s,"stroke-width",r[2]),u(s,"fill","transparent"),u(l,"d",r[5]),u(l,"fill",r[1]),u(e,"class","arrow svelte-12syssu"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"shape-rendering","crispEdges"),u(e,"height","100%"),u(e,"width","100%"),u(t,"class","sg-dependency svelte-12syssu"),he(t,"left","0"),he(t,"top","0"),u(t,"data-dependency-id",r[0])},m(o,d){S(o,t,d),b(t,e),b(e,s),b(e,l)},p(o,d){d&64&&u(s,"d",o[6]),d&2&&u(s,"stroke",o[1]),d&4&&u(s,"stroke-width",o[2]),d&32&&u(l,"d",o[5]),d&2&&u(l,"fill",o[1]),d&1&&u(t,"data-dependency-id",o[0])},d(o){o&&h(t)}}}function Ne(r){let t,e=(!r[3]&&!r[4]||r[3]!==r[4])&&ve(r);return{c(){e&&e.c(),t=se()},l(s){e&&e.l(s),t=se()},m(s,l){e&&e.m(s,l),S(s,t,l)},p(s,[l]){!s[3]&&!s[4]||s[3]!==s[4]?e?e.p(s,l):(e=ve(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:me,o:me,d(s){s&&h(t),e&&e.d(s)}}}const V=12,C=5;function Oe(r,t,e){let s,l;const{rowStore:o,taskStore:d}=oe("dataStore");ae(r,o,f=>e(13,s=f)),ae(r,d,f=>e(14,l=f));let{id:a}=t,{fromId:n}=t,{toId:i}=t,{stroke:c="red"}=t,{strokeWidth:g=2}=t,$,p,v,M,m,Z;return r.$$set=f=>{"id"in f&&e(0,a=f.id),"fromId"in f&&e(9,n=f.fromId),"toId"in f&&e(10,i=f.toId),"stroke"in f&&e(1,c=f.stroke),"strokeWidth"in f&&e(2,g=f.strokeWidth)},r.$$.update=()=>{if(r.$$.dirty&32344){e(11,v=l.entities[n]),e(3,M=s.entities[v.model.resourceId].hidden),e(12,m=l.entities[i]),e(4,Z=s.entities[m.model.resourceId].hidden);let f=v.top+v.height/2,y=v.left+v.width,k=m.top+m.height/2,D=m.left,T=D-y,q=k-f;M?(e(6,p=`M${D} ${k}`),y+V>=D&&f!=k?e(6,p+=`L ${D+1.5-V} ${k}`):e(6,p+=`L ${D+1.5-T/2} ${k}`),e(6,p+="m -2 -2 a 2 2 0 1 1 0 4 a 2 2 0 1 1 0 -4"),e(5,$=`M${m.left-C}  ${m.top+m.height/2-C} 
                            L${m.left} ${m.top+m.height/2} 
                            L${m.left-C} ${m.top+m.height/2+C} Z`)):Z?(e(6,p=`M${y} ${f}`),y+V>=D&&f!=k?e(6,p+=`L ${y+1.5+V} ${f}`):e(6,p+=`L ${y+1.5+T/2} ${f}`),e(6,p+="m -2 -2 a 2 2 0 1 1 0 4 a 2 2 0 1 1 0 -4"),e(5,$="")):!M&&!Z&&(e(6,p=`M${y} ${f}`),y+V>=D&&f!=k?e(6,p+=`L ${y+V} ${f} 
                            L ${y+V} ${f+q/2}
                            L ${D-V} ${f+q/2}
                            L ${D-V} ${k}
                            L ${D-2} ${k}`):e(6,p+=`L ${y+T/2} ${f} 
                            L ${y+T/2} ${k}
                            L ${D-2} ${k}`),e(5,$=`M${m.left-C} ${m.top+m.height/2-C} 
                            L${m.left} ${m.top+m.height/2} 
                            L${m.left-C} ${m.top+m.height/2+C} Z`))}},[a,c,g,M,Z,$,p,o,d,n,i,v,m,s,l]}class ze extends K{constructor(t){super(),Q(this,t,Oe,Ne,Y,{id:0,fromId:9,toId:10,stroke:1,strokeWidth:2})}}function ke(r,t,e){const s=r.slice();return s[7]=t[e],s}function xe(r,t){let e,s,l;const o=[t[7]];let d={};for(let a=0;a<o.length;a+=1)d=$e(d,o[a]);return s=new ze({props:d}),{key:r,first:null,c(){e=se(),W(s.$$.fragment),this.h()},l(a){e=se(),j(s.$$.fragment,a),this.h()},h(){this.first=e},m(a,n){S(a,e,n),B(s,a,n),l=!0},p(a,n){t=a;const i=n&1?Te(o,[Re(t[7])]):{};s.$set(i)},i(a){l||(R(s.$$.fragment,a),l=!0)},o(a){H(s.$$.fragment,a),l=!1},d(a){a&&h(e),P(s,a)}}}function Fe(r){let t,e=[],s=new Map,l,o=ge(r[0]);const d=a=>a[7].id;for(let a=0;a<o.length;a+=1){let n=ke(r,o,a),i=d(n);s.set(i,e[a]=xe(i,n))}return{c(){t=L("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=E(a,"DIV",{class:!0});var n=I(t);for(let i=0;i<e.length;i+=1)e[i].l(n);n.forEach(h),this.h()},h(){u(t,"class","dependency-container svelte-epxabx")},m(a,n){S(a,t,n);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,null);l=!0},p(a,[n]){n&1&&(o=ge(a[0]),ye(),e=Se(e,n,d,1,a,o,s,t,Me,xe,null,ke),Le())},i(a){if(!l){for(let n=0;n<o.length;n+=1)R(e[n]);l=!0}},o(a){for(let n=0;n<e.length;n+=1)H(e[n]);l=!1},d(a){a&&h(t);for(let n=0;n<e.length;n+=1)e[n].d()}}}function Ge(r,t,e){let s,l;const{visibleHeight:o}=oe("dimensions");ae(r,o,c=>e(5,s=c));const{taskStore:d}=oe("dataStore");ae(r,d,c=>e(6,l=c));let{paddingTop:a}=t,{dependencies:n=[]}=t,i=[];return r.$$set=c=>{"paddingTop"in c&&e(3,a=c.paddingTop),"dependencies"in c&&e(4,n=c.dependencies)},r.$$.update=()=>{if(r.$$.dirty&120){const c=[];for(let g=0;g<n.length;g++){const $=n[g],p=l.entities,v=p[$.fromId],M=p[$.toId];v&&M&&Math.min(v.top,M.top)<=a+s&&Math.max(v.top,M.top)>=a&&c.push($)}e(0,i=c)}},[i,o,d,a,n,s,l]}class We extends K{constructor(t){super(),Q(this,t,Ge,Fe,Y,{paddingTop:3,dependencies:4})}}const je=We;function Be(r){let t,e,s;return e=new Ee({props:{from:x("8:00"),to:x("16:00"),fitWidth:!0,ganttTableModules:[De],ganttBodyModules:[je],rows:[{id:1,label:"Jedd Balden"},{id:2,label:"Rozele McFarland"},{id:3,label:"Chrissy Bullard"},{id:4,label:"Patience Leschelle"},{id:5,label:"Rosette Henrie"}],dependencies:[{id:1,fromId:3,toId:4,stroke:"#64748b"}],tasks:r[0],timeRanges:[{id:0,from:x("10:00"),to:x("11:00"),classes:"time-range-lunch",label:"Lunch",resizable:!1}]}}),{c(){t=L("div"),W(e.$$.fragment),this.h()},l(l){t=E(l,"DIV",{class:!0});var o=I(t);j(e.$$.fragment,o),o.forEach(h),this.h()},h(){u(t,"class","example w-full svelte-1decuf8")},m(l,o){S(l,t,o),B(e,t,null),s=!0},p(l,[o]){const d={};o&1&&(d.tasks=l[0]),e.$set(d)},i(l){s||(R(e.$$.fragment,l),s=!0)},o(l){H(e.$$.fragment,l),s=!1},d(l){l&&h(t),P(e)}}}function Pe(r,t,e){let s=[{id:1,resourceId:1,from:x("9:00"),to:x("10:00"),label:"Site visit",classes:"task-slate"},{id:2,resourceId:3,from:x("9:00"),to:x("12:15"),label:"Development",classes:"task-slate",enableDragging:!1,enableResize:!1},{id:3,resourceId:4,from:x("8:30"),to:x("10:30"),label:"Design",classes:"task-blue"},{id:4,resourceId:5,from:x("12:30"),to:x("14:30"),label:"Review",classes:"task-blue"},{id:5,resourceId:2,from:x("12:30"),to:x("15:00"),label:"Review",classes:"task-pink"}],l=0;const o=[{resourceId:1,from:x("9:00"),to:x("10:00"),classes:"task-blue"},{resourceId:2,from:x("8:30"),to:x("11:30"),classes:"task-pink"},{resourceId:3,from:x("12:30"),to:x("14:30"),classes:"task-blue"}];return setInterval(()=>{e(1,l++,l)},2e3),r.$$.update=()=>{if(r.$$.dirty&3){const d=o[l%o.length];Object.assign(s[0],d),e(0,s),e(1,l)}},[s,l]}class qe extends K{constructor(t){super(),Q(this,t,Pe,Be,Y,{})}}function Ue(r){let t;return{c(){t=N("Interactive")},l(e){t=O(e,"Interactive")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function Je(r){let t;return{c(){t=N("Items can be added, moved and resized. Select multiple to move them at once.")},l(e){t=O(e,"Items can be added, moved and resized. Select multiple to move them at once.")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function Xe(r){let t;return{c(){t=N("Fast")},l(e){t=O(e,"Fast")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function Ye(r){let t;return{c(){t=N("Display thousands of tasks assigned to thousands of resources. Update them in real-time.")},l(e){t=O(e,"Display thousands of tasks assigned to thousands of resources. Update them in real-time.")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function Ke(r){let t;return{c(){t=N("Zoom")},l(e){t=O(e,"Zoom")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function Qe(r){let t;return{c(){t=N("Zoom the chart in or out. Display different periods of time.")},l(e){t=O(e,"Zoom the chart in or out. Display different periods of time.")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function et(r){let t;return{c(){t=N("Layouts")},l(e){t=O(e,"Layouts")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function tt(r){let t;return{c(){t=N("Display tasks overlapped or spaced apart.")},l(e){t=O(e,"Display tasks overlapped or spaced apart.")},m(e,s){S(e,t,s)},d(e){e&&h(t)}}}function st(r){let t,e,s,l=`<div class="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-200"><div class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div></div> <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32"><h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">Lightweight and fast interactive <span class="bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-violet-500">Gantt chart.</span></h1> <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"><span class="font-medium bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-violet-500">Svelte-gantt</span> is a lightweight and fast interactive gantt chart/resource booking component
					made with Svelte. Compatible with React, Angular, Vue, Svelte... Zero dependencies.</p> <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm"><a class="group text-white font-medium text-2xl transition-all hover:scale-105 px-6 py-3 text-soft mb-12 bg-gradient-to-tr from-pink-500 to-violet-500 hover:bg-violet-600 mx-auto transition-all" href="${He}/docs/getting-started/installation"><span class="inline-block transform transition-transform duration-100 group-hover:translate-x-0">Get started</span></a></div></div>`,o,d,a,n,i,c,g,$,p,v,M,m,Z,f,y,k,D,T,q='<div class="relative max-w-5xl mx-auto"><div class="text-slate-100">@2024 Ante Novokmet - <a href="https://github.com/ANovokmet/">ANovokmet</a></div></div>',ee;return i=new qe({}),v=new te({props:{$$slots:{subtitle:[Je],title:[Ue]},$$scope:{ctx:r}}}),m=new te({props:{$$slots:{subtitle:[Ye],title:[Xe]},$$scope:{ctx:r}}}),f=new te({props:{$$slots:{subtitle:[Qe],title:[Ke]},$$scope:{ctx:r}}}),k=new te({props:{$$slots:{subtitle:[tt],title:[et]},$$scope:{ctx:r}}}),{c(){t=L("main"),e=L("header"),s=L("div"),s.innerHTML=l,o=F(),d=L("div"),a=L("div"),n=L("div"),W(i.$$.fragment),c=F(),g=L("section"),$=L("div"),p=L("div"),W(v.$$.fragment),M=F(),W(m.$$.fragment),Z=F(),W(f.$$.fragment),y=F(),W(k.$$.fragment),D=F(),T=L("footer"),T.innerHTML=q,this.h()},l(_){t=E(_,"MAIN",{class:!0});var w=I(t);e=E(w,"HEADER",{class:!0});var z=I(e);s=E(z,"DIV",{class:!0,"data-svelte-h":!0}),pe(s)!=="svelte-bmuix0"&&(s.innerHTML=l),o=G(z),d=E(z,"DIV",{class:!0});var U=I(d);a=E(U,"DIV",{class:!0});var J=I(a);n=E(J,"DIV",{class:!0});var X=I(n);j(i.$$.fragment,X),X.forEach(h),J.forEach(h),U.forEach(h),z.forEach(h),c=G(w),g=E(w,"SECTION",{class:!0});var ne=I(g);$=E(ne,"DIV",{class:!0});var ie=I($);p=E(ie,"DIV",{class:!0});var A=I(p);j(v.$$.fragment,A),M=G(A),j(m.$$.fragment,A),Z=G(A),j(f.$$.fragment,A),y=G(A),j(k.$$.fragment,A),A.forEach(h),ie.forEach(h),ne.forEach(h),D=G(w),T=E(w,"FOOTER",{class:!0,"data-svelte-h":!0}),pe(T)!=="svelte-5lbwz8"&&(T.innerHTML=q),w.forEach(h),this.h()},h(){u(s,"class","px-4 sm:px-6 md:px-8 pt-12"),u(n,"class","relative overflow-hidden shadow-xl flex bg-white max-h-[60vh] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none]"),u(a,"class","-mx-4 sm:mx-0"),u(d,"class","max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32"),u(e,"class","relative"),u(p,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"),u($,"class","relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 mb-20 sm:mb-24 lg:mb-32 px-4 sm:px-6 md:px-8 lg:px-0"),u(g,"class","grow"),u(T,"class","h-40 bg-slate-400 flex items-center justify-center"),u(t,"class","overflow-hidden flex flex-col min-h-screen")},m(_,w){S(_,t,w),b(t,e),b(e,s),b(e,o),b(e,d),b(d,a),b(a,n),B(i,n,null),b(t,c),b(t,g),b(g,$),b($,p),B(v,p,null),b(p,M),B(m,p,null),b(p,Z),B(f,p,null),b(p,y),B(k,p,null),b(t,D),b(t,T),ee=!0},p(_,[w]){const z={};w&2&&(z.$$scope={dirty:w,ctx:_}),v.$set(z);const U={};w&2&&(U.$$scope={dirty:w,ctx:_}),m.$set(U);const J={};w&2&&(J.$$scope={dirty:w,ctx:_}),f.$set(J);const X={};w&2&&(X.$$scope={dirty:w,ctx:_}),k.$set(X)},i(_){ee||(R(i.$$.fragment,_),R(v.$$.fragment,_),R(m.$$.fragment,_),R(f.$$.fragment,_),R(k.$$.fragment,_),ee=!0)},o(_){H(i.$$.fragment,_),H(v.$$.fragment,_),H(m.$$.fragment,_),H(f.$$.fragment,_),H(k.$$.fragment,_),ee=!1},d(_){_&&h(t),P(i),P(v),P(m),P(f),P(k)}}}function at(r){let t=new IntersectionObserver(e=>{e.forEach(s=>{s.target.classList.remove("opacity-0","translate-y-2"),s.target.classList.add("opacity-100","translate-y-0")})});return we(()=>{document.body.classList.add("landing-page"),document.querySelectorAll(".loading").forEach(e=>t.observe(e))}),Ie(()=>{document.body.classList.remove("landing-page")}),[]}class dt extends K{constructor(t){super(),Q(this,t,at,st,Y,{})}}export{dt as component};
