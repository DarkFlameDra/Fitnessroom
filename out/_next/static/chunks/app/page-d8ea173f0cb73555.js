(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3137:function(e,t,n){Promise.resolve().then(n.bind(n,3709))},3709:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9368);n(2609);var s=n(6041);function i(){let[e,t]=(0,s.useState)([]),[n,i]=(0,s.useState)([]),[a,c]=(0,s.useState)(""),[o,l]=(0,s.useState)([]),[d,u]=(0,s.useState)([]);(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("/Fitness/api/trainers"),n=await fetch("/Fitness/api/courses");if(!e.ok||!n.ok)throw Error("Failed to fetch data");let r=await e.json(),s=await n.json();t(r),i(s),l(r),u(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,s.useEffect)(()=>{l(e.filter(e=>e.name.toLowerCase().includes(a.toLowerCase()))),u(n.filter(e=>e.title.toLowerCase().includes(a.toLowerCase())))},[a,e,n]);let h=n.reduce((e,t)=>(e[t._id]=t.title,e),{});return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Fitness Trainers and Courses"}),(0,r.jsx)("input",{type:"text",placeholder:"Search for trainers or courses...",value:a,onChange:e=>c(e.target.value)}),(0,r.jsx)("h2",{children:"Trainers"}),(0,r.jsx)("ul",{children:o.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:(0,r.jsx)("a",{href:"/Fitness/appointment?trainer=".concat(encodeURIComponent(e.name)),children:e.name})}),(0,r.jsxs)("p",{children:["Expertise: ",e.expertise.map(e=>h[e]).join(", ")]})]},e._id))}),(0,r.jsx)("h2",{children:"Courses"}),(0,r.jsx)("ul",{children:d.map(t=>{let n=e.filter(e=>e.expertise.includes(t._id));return(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:t.title}),(0,r.jsxs)("p",{children:["Description: ",t.description]}),(0,r.jsxs)("p",{children:["Trainers: ",n.length>0?n.map(e=>(0,r.jsx)("a",{href:"/Fitness/appointment?trainer=".concat(encodeURIComponent(e.name)),children:e.name},e._id)).reduce((e,t)=>[e,", ",t]):"No trainers available"]})]},t._id)})})]})}},2609:function(){}},function(e){e.O(0,[849,111,487,744],function(){return e(e.s=3137)}),_N_E=e.O()}]);