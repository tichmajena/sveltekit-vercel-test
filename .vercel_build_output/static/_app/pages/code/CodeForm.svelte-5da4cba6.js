import{S as s,i as e,s as t,e as a,k as o,t as c,c as r,a as i,d as p,n as l,g as n,b as d,f,G as u,O as h,H as v,I as x,K as E}from"../../chunks/vendor-66f8d0bb.js";import{a as m}from"../../chunks/store-8cdc886f.js";function b(s){let e,t,E,m,b,k,A;return{c(){e=a("div"),t=a("textarea"),E=o(),m=a("label"),b=c("Code..."),this.h()},l(s){e=r(s,"DIV",{class:!0});var a=i(e);t=r(a,"TEXTAREA",{class:!0,type:!0,rows:!0,id:!0}),i(t).forEach(p),E=l(a),m=r(a,"LABEL",{class:!0,for:!0});var o=i(m);b=n(o,"Code..."),o.forEach(p),a.forEach(p),this.h()},h(){d(t,"class","snippet__code-input  "),d(t,"type","text"),d(t,"rows","3"),d(t,"id","snippet-field"),d(m,"class",""),d(m,"for","snippet-field"),d(e,"class","flex flex-col-reverse")},m(a,o){f(a,e,o),u(e,t),h(t,s[1][0].steps[s[0]].code),u(e,E),u(e,m),u(m,b),k||(A=v(t,"input",s[2]),k=!0)},p(s,[e]){3&e&&h(t,s[1][0].steps[s[0]].code)},i:x,o:x,d(s){s&&p(e),k=!1,A()}}}function k(s,e,t){let a;E(s,m,(s=>t(1,a=s)));let{step:o}=e;return s.$$set=s=>{"step"in s&&t(0,o=s.step)},[o,a,function(){a[0].steps[o].code=this.value,m.set(a),t(0,o)}]}export default class extends s{constructor(s){super(),e(this,s,k,b,t,{step:0})}}