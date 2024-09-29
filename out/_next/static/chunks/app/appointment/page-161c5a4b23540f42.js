(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{6841:function(e,n,o){Promise.resolve().then(o.bind(o,3165))},3165:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return s}});var t=o(9368),i=o(6041),r=o(2269);o(3626),o(2609);let a=["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];function c(){(0,r.useRouter)();let[e,n]=(0,i.useState)(null),[o,c]=(0,i.useState)(null),[s,l]=(0,i.useState)(!1),[d,h]=(0,i.useState)(!1),[u,f]=(0,i.useState)({});(0,i.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("trainer");e&&n(e)},[]),(0,i.useEffect)(()=>{(async()=>{try{let e=await fetch("/Fitness/api/bookings");if(e.ok){let n=await e.json(),o={};n.forEach(e=>{o[e.time]=!0}),f(o)}else console.error("Failed to fetch bookings.")}catch(e){console.error("Error fetching bookings:",e)}})()},[]);let m=e=>{u[e]?(c(e),h(!0)):(c(e),l(!0))},g=async()=>{if(!e||!o){alert("Trainer or time slot is missing.");return}try{let n=await fetch("/Fitness/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trainer:e,time:o})});if(n.ok)f(e=>({...e,[o]:!0})),alert("Booking confirmed for ".concat(o," today with ").concat(e,"!")),l(!1),c(null);else{let e=await n.json();alert("Booking failed: ".concat(e.message))}}catch(e){console.error("Error confirming booking:",e),alert("An error occurred while confirming the booking.")}},k=async()=>{if(!e||!o){alert("Trainer or time slot is missing.");return}try{let n=await fetch("/Fitness/api/bookings",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({trainer:e,time:o})});if(n.ok)f(e=>({...e,[o]:!1})),alert("Booking canceled for ".concat(o," today with ").concat(e,".")),h(!1),c(null);else{let e=await n.json();alert("Cancellation failed: ".concat(e.message))}}catch(e){console.error("Error canceling booking:",e),alert("An error occurred while canceling the booking.")}},b=()=>{l(!1),h(!1),c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{children:["Booking for Today with ",e||"Loading..."]}),(0,t.jsx)("h2",{children:"Available Time Slots for Today:"}),(0,t.jsx)("div",{className:"time-slots",children:a.map(e=>(0,t.jsx)("button",{className:"time-slot ".concat(u[e]?"booked":o===e?"selected":""),style:{backgroundColor:u[e]?"green":"blue",color:"white"},onClick:()=>m(e),children:e},e))}),s&&(0,t.jsx)("div",{className:"modal-background",children:(0,t.jsxs)("div",{className:"confirmation-modal",children:[(0,t.jsxs)("p",{children:["Confirm your booking for ",o," today with ",e,"?"]}),(0,t.jsx)("button",{onClick:g,children:"Confirm"}),(0,t.jsx)("button",{className:"cancel",onClick:b,children:"Cancel"})]})}),d&&(0,t.jsx)("div",{className:"modal-background",children:(0,t.jsxs)("div",{className:"confirmation-modal",children:[(0,t.jsxs)("p",{children:["Cancel your booking for ",o," today with ",e,"?"]}),(0,t.jsx)("button",{onClick:k,children:"Confirm Cancel"}),(0,t.jsx)("button",{className:"cancel",onClick:b,children:"Cancel"})]})})]})}function s(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Appointment Page"}),(0,t.jsx)(c,{})]})}},2609:function(){},3626:function(){}},function(e){e.O(0,[255,849,111,487,744],function(){return e(e.s=6841)}),_N_E=e.O()}]);