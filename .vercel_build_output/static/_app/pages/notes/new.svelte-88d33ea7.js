import{S as t,i as s,s as a,e,t as o,k as l,c as n,a as c,g as r,d as i,n as u,b as d,f as h,G as p,O as f,H as b,I as m,J as y}from"../../chunks/vendor-66f8d0bb.js";function g(t){let s,a,g,x,v,w,N,k,O,T,j,E,I,P,S;return{c(){s=e("h1"),a=o("Notes"),g=l(),x=e("div"),v=e("h3"),w=o("Add Note"),N=l(),k=e("input"),O=l(),T=e("input"),j=l(),E=e("button"),I=o("Publish"),this.h()},l(t){s=n(t,"H1",{class:!0});var e=c(s);a=r(e,"Notes"),e.forEach(i),g=u(t),x=n(t,"DIV",{class:!0});var o=c(x);v=n(o,"H3",{class:!0});var l=c(v);w=r(l,"Add Note"),l.forEach(i),N=u(o),k=n(o,"INPUT",{class:!0,placeholder:!0,type:!0}),O=u(o),T=n(o,"INPUT",{class:!0,placeholder:!0,type:!0}),j=u(o),E=n(o,"BUTTON",{class:!0});var d=c(E);I=r(d,"Publish"),d.forEach(i),o.forEach(i),this.h()},h(){d(s,"class","text-2xl font-bold "),d(v,"class","text-center text-2xl mb-5"),d(k,"class","w-full rounded mb-5"),d(k,"placeholder","Title"),d(k,"type","text"),d(T,"class","w-full rounded mb-5"),d(T,"placeholder","Content"),d(T,"type","text"),d(E,"class","px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"),d(x,"class","mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg")},m(e,o){h(e,s,o),p(s,a),h(e,g,o),h(e,x,o),p(x,v),p(v,w),p(x,N),p(x,k),f(k,t[0]),p(x,O),p(x,T),f(T,t[1]),p(x,j),p(x,E),p(E,I),P||(S=[b(k,"input",t[3]),b(T,"input",t[4]),b(E,"click",t[2])],P=!0)},p(t,[s]){1&s&&k.value!==t[0]&&f(k,t[0]),2&s&&T.value!==t[1]&&f(T,t[1])},i:m,o:m,d(t){t&&i(s),t&&i(g),t&&i(x),P=!1,y(S)}}}function x(t,s,a){let e,o;return[e,o,async function(){let t=localStorage.getItem("token");t=JSON.parse(t);try{const s=await fetch("https://imajenation.co.zw/mydiary/wp-json/wp/v2/note",{method:"POST",credentials:"include",headers:{"Content-type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify({title:e,content:o,status:"publish"})}),a=await s.json();console.log(a),s.ok?console.log("res is okay"):console.log("res has an error")}catch(s){console.log("ERROR!!!: ",s)}},function(){e=this.value,a(0,e)},function(){o=this.value,a(1,o)}]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{})}}