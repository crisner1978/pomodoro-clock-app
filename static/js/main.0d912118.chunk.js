(this["webpackJsonppomodoro-clock-app"]=this["webpackJsonppomodoro-clock-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(3),c=n.n(s),o=(n(14),n(15),n(2)),a=n(5),u={breakTime:5,sessionTime:25,interval:"Session",timeLeft:1500,timerOn:!1,audioElement:null},m=Object(a.b)({name:"time",initialState:u,reducers:{addBreak:function(e,t){e.breakTime>0&&e.breakTime<60&&(e.breakTime+=1)},minusBreak:function(e,t){e.breakTime>1&&e.breakTime<=60&&(e.breakTime-=1)},addSession:function(e,t){var n=e.sessionTime<60?e.sessionTime+=1:e.sessionTime;e.timeLeft=60*n},minusSession:function(e,t){var n=e.sessionTime>1?e.sessionTime-=1:e.sessionTime;e.timeLeft=60*n},stopTimer:function(e,t){e.timerOn=!1},startTimer:function(e,t){e.timerOn=!0},resetTimer:function(){return u},switchBreak:function(e,t){e.interval="Break",e.timeLeft=60*e.breakTime},switchSession:function(e,t){e.interval="Session",e.timeLeft=60*e.sessionTime},decrementTime:function(e,t){e.timeLeft-=1}}}),b=m.actions,j=b.addBreak,d=b.minusBreak,l=b.addSession,f=b.minusSession,O=b.startTimer,h=b.stopTimer,k=b.resetTimer,x=b.decrementTime,v=b.switchBreak,T=b.switchSession,p=function(e){return e.time.sessionTime},S=function(e){return e.time.breakTime},B=function(e){return e.time.timeLeft},L=function(e){return e.time.interval},N=function(e){return e.time.timerOn},g=m.reducer,w=n(1),C=function(){var e=Object(o.c)(S),t=Object(o.b)();return Object(w.jsxs)("div",{id:"break-label",children:[Object(w.jsx)("h1",{children:"Break Length"}),Object(w.jsxs)("div",{className:"break-time",children:[Object(w.jsx)("button",{id:"break-decrement",onClick:function(){return t(d())},children:" - "}),Object(w.jsx)("h1",{id:"break-length",children:e}),Object(w.jsx)("button",{id:"break-increment",onClick:function(){return t(j())},children:" + "})]})]})},I=function(){var e=Object(o.c)(p),t=Object(o.b)();return Object(w.jsxs)("div",{id:"session-label",children:[Object(w.jsx)("h1",{children:"Session Length"}),Object(w.jsxs)("div",{className:"session-time",children:[Object(w.jsx)("button",{id:"session-decrement",onClick:function(){return t(f())},children:" - "}),Object(w.jsx)("h1",{id:"session-length",children:e}),Object(w.jsx)("button",{id:"session-increment",onClick:function(){return t(l())},children:" + "})]})]})},y=n(4),E=n.n(y),J=n(9),R=function(){var e=Object(o.c)(N),t=Object(o.b)();return Object(w.jsx)("button",{className:"btn",id:"start_stop",onClick:function(){t(e?h():O())},children:e?"Stop":"Start"})},A=function(){var e=Object(o.b)();return Object(w.jsx)("button",{className:"btn",id:"reset",onClick:function(){return e(k())},children:"Reset"})};n.n(J)()(E.a);var M=function(){var e=Object(o.c)(B),t=Object(o.c)(N),n=Object(o.c)(L),r=Object(o.b)(),s=Object(i.useRef)(null),c=E.a.duration(e,"s").format("mm:ss",{trim:!1});return Object(i.useEffect)((function(){var i=null;return t&&e>0?i=setInterval((function(){r(x())}),1e3):t&&0===e?(i=setInterval((function(){r(x())}),1e3),s.current.play(),"Session"===n?r(v()):"Break"===n&&r(T())):(clearInterval(i),s.current.load()),function(){return clearInterval(i)}}),[n,e,t,r,s]),Object(w.jsxs)("div",{className:"timer",children:[Object(w.jsx)("h1",{id:"timer-label",children:n}),Object(w.jsx)("h1",{id:"time-left",children:c}),Object(w.jsx)(R,{}),Object(w.jsx)(A,{}),Object(w.jsx)("audio",{ref:s,id:"beep",children:Object(w.jsx)("source",{src:"https://onlineclock.net/audio/options/default.mp3",type:"audio/mpeg"})})]})};var _=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)("div",{className:"timers",children:[Object(w.jsx)(C,{}),Object(w.jsx)(I,{})]}),Object(w.jsx)(M,{})]})},q=Object(a.a)({reducer:{time:g}});c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(o.a,{store:q,children:Object(w.jsx)(_,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0d912118.chunk.js.map