(this["webpackJsonppomodoro-clock-app"]=this["webpackJsonppomodoro-clock-app"]||[]).push([[0],{22:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var i,r,a,s,o,c,d,l,m,b,x=t(0),u=t.n(x),p=t(8),f=t.n(p),h=(t(22),t(3)),j=t(4),g=j.a.div(i||(i=Object(h.a)(["\n  background: #eb5757;\n  background: -webkit-linear-gradient(to bottom, #000000, #eb5757);\n  background: linear-gradient(to bottom, #000000, #eb5757);\n  background-size: cover;\n  margin: 0 auto;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  text-align: center;\n"]))),O=j.a.div(r||(r=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 6rem;\n\n  @media only screen and (max-width: 768px) {\n    grid-gap: 4rem;\n  }\n\n  @media only screen and (max-width: 480px) {\n    grid-gap: 2rem;\n  }\n"]))),k=t(2),w=t(10),v={breakTime:5,sessionTime:25,interval:"Session",timeLeft:1500,timerOn:!1,audioElement:null},y=Object(w.b)({name:"time",initialState:v,reducers:{addBreak:function(n,e){n.breakTime>0&&n.breakTime<60&&(n.breakTime+=1)},minusBreak:function(n,e){n.breakTime>1&&n.breakTime<=60&&(n.breakTime-=1)},addSession:function(n,e){var t=n.sessionTime<60?n.sessionTime+=1:n.sessionTime;n.timeLeft=60*t},minusSession:function(n,e){var t=n.sessionTime>1?n.sessionTime-=1:n.sessionTime;n.timeLeft=60*t},stopTimer:function(n,e){n.timerOn=!1},startTimer:function(n,e){n.timerOn=!0},resetTimer:function(){return v},switchBreak:function(n,e){n.interval="Break",n.timeLeft=60*n.breakTime},switchSession:function(n,e){n.interval="Session",n.timeLeft=60*n.sessionTime},decrementTime:function(n,e){n.timeLeft-=1}}}),T=y.actions,z=T.addBreak,S=T.minusBreak,B=T.addSession,C=T.minusSession,L=T.startTimer,E=T.stopTimer,I=T.resetTimer,N=T.decrementTime,A=T.switchBreak,R=T.switchSession,D=function(n){return n.time.sessionTime},J=function(n){return n.time.breakTime},Z=function(n){return n.time.timeLeft},M=function(n){return n.time.interval},P=function(n){return n.time.timerOn},_=y.reducer,q=t(7),F=t(1),G=function(){var n=Object(k.c)(J),e=Object(k.b)();return Object(F.jsxs)(H,{id:"break-label",children:[Object(F.jsx)("h1",{children:"Break Time"}),Object(F.jsxs)(K,{children:[Object(F.jsx)("div",{id:"break-decrement",children:Object(F.jsx)(q.a,{className:"minus",onClick:function(){return e(S())}})}),Object(F.jsx)("h2",{id:"break-length",children:n}),Object(F.jsx)("div",{id:"break-increment",children:Object(F.jsx)(q.b,{className:"plus",onClick:function(){return e(z())}})})]})]})},H=j.a.div(a||(a=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  h1 {\n    font-size: 1.5rem;\n    background: linear-gradient(to top, #eef2f3, #8e9eab);\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n    background-clip: text;\n\n    @media only screen and (max-width: 768px) {\n      font-size: 1rem;\n    }\n  }\n"]))),K=j.a.div(s||(s=Object(h.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: -1rem;\n  padding: 0;\n  color: #fff;\n\n  h2 {\n    font-size: 2rem;\n    @media only screen and (max-width: 768px) {\n      font-size: 1.5rem;\n    }\n  }\n\n  svg {\n    font-size: 2rem;\n    cursor: pointer;\n\n    @media only screen and (max-width: 768px) {\n      font-size: 1.5rem;\n      \n    }\n  }\n\n  .plus {\n    background-color: #00ab66;\n    outline: none;\n  }\n  .minus {\n    background-color: #a40000;\n  }\n"]))),Q=function(){var n=Object(k.c)(D),e=Object(k.b)();return Object(F.jsxs)(U,{id:"session-label",children:[Object(F.jsx)("h1",{children:"Session Time"}),Object(F.jsxs)(V,{children:[Object(F.jsx)("div",{id:"session-decrement",children:Object(F.jsx)(q.a,{className:"minus",onClick:function(){return e(C())}})}),Object(F.jsx)("h2",{id:"session-length",children:n}),Object(F.jsx)("div",{id:"session-increment",children:Object(F.jsx)(q.b,{className:"plus",onClick:function(){return e(B())}})})]})]})},U=j.a.div(o||(o=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  h1 {\n    font-size: 1.5rem;\n    background: linear-gradient(to top, #eef2f3, #8e9eab);\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n    background-clip: text;\n\n    @media only screen and (max-width: 768px) {\n      font-size: 1rem;\n    }\n  }\n"]))),V=j.a.div(c||(c=Object(h.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: -1rem;\n  padding: 0;\n  color: #fff;\n\n  h2 {\n    font-size: 2rem;\n    @media only screen and (max-width: 768px) {\n      font-size: 1.5rem;\n    }\n  }\n\n  svg {\n    font-size: 2rem;\n    cursor: pointer;\n\n    @media only screen and (max-width: 768px) {\n      font-size: 1.5rem;\n    }\n  }\n\n  .plus {\n    background-color: #00ab66;\n    outline: none;\n  }\n  .minus {\n    background-color: #a40000;\n  }\n"]))),W=t(9),X=t.n(W),Y=t(16),$=t.n(Y),nn=t(17),en=function(){var n=Object(x.useState)(""),e=Object(nn.a)(n,2),t=e[0],i=e[1],r=Object(k.c)(P),a=Object(k.b)();return Object(F.jsx)(tn,{style:{backgroundColor:t?"#A40000":"#00AB66"},id:"start_stop",onClick:function(){a(r?E():L()),i(!t)},children:r?"STOP":"START"})},tn=j.a.button(d||(d=Object(h.a)(['\n  display: block;\n  font-family: "Zen Dots", cursive;\n  border-radius: 10px;\n  width: 150px;\n  height: 50px;\n  color: #fff;\n  border: none;\n  font-size: 20px;\n  transition: 0.3s ease-in all;\n  cursor: pointer;\n\n  &:hover {\n    background: transparent;\n    transition: ease-in 0.3s all;\n    transform: scale(1.05);\n  }\n  &:active {\n    transform: scale(0.95);\n    transition: 0.3s ease-in all;\n    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: 125px;\n    height: 40px;\n    font-size: 16px;\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: 100px;\n    height: 35px;\n    font-size: 14px;\n  }\n']))),rn=function(){var n=Object(k.b)();return Object(F.jsx)(an,{className:"btn",id:"reset",onClick:function(){return n(I())},children:"RESET"})},an=j.a.button(l||(l=Object(h.a)(['\n  display: block;\n  font-family: "Zen Dots", cursive;\n  border-radius: 10px;\n  width: 150px;\n  height: 50px;\n  background-color: transparent;\n  color: #a40000;\n  border: 3px solid #a40000;\n  font-size: 20px;\n  transition: 0.3s ease-in all;\n  cursor: pointer;\n\n  &:hover {\n    background: transparent;\n    border: 3px solid #a40000;\n    transition: ease-in 0.3s all;\n    transform: scale(1.05);\n  }\n  &:active {\n    transform: scale(0.95);\n    transition: 0.3s ease-in all;\n    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: 125px;\n    height: 40px;\n    font-size: 16px;\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: 100px;\n    height: 35px;\n    font-size: 14px;\n  }\n'])));$()(X.a);var sn=function(){var n=Object(k.c)(Z),e=Object(k.c)(P),t=Object(k.c)(M),i=Object(k.b)(),r=Object(x.useRef)(null),a=X.a.duration(n,"s").format("mm:ss",{trim:!1});return Object(x.useEffect)((function(){var a=null;return e&&n>0?a=setInterval((function(){i(N())}),1e3):e&&0===n?(a=setInterval((function(){i(N())}),1e3),r.current.play(),"Session"===t?i(A()):"Break"===t&&i(R())):(clearInterval(a),r.current.load()),function(){return clearInterval(a)}}),[t,n,e,i,r]),Object(F.jsxs)(on,{children:[Object(F.jsx)("h2",{id:"timer-label",children:t}),Object(F.jsx)("h1",{id:"time-left",children:a}),Object(F.jsxs)(cn,{children:[Object(F.jsx)(en,{}),Object(F.jsx)(rn,{})]}),Object(F.jsx)("audio",{ref:r,id:"beep",children:Object(F.jsx)("source",{src:"https://onlineclock.net/audio/options/default.mp3",type:"audio/mpeg"})})]})},on=j.a.div(m||(m=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 2px solid black;\n  max-width: 500px;\n  max-height: 500px;\n  width: 100%;\n  height: 100%;\n  background: #8e9eab;\n  background: -webkit-linear-gradient(to bottom, #eef2f3, #8e9eab);\n  background: linear-gradient(to bottom, #eef2f3, #8e9eab);\n  border-radius: 50%;\n\n  @media only screen and (max-width: 768px) {\n    max-width: 450px;\n    max-height: 450px;\n    width: 100%;\n    height: 100%;\n    margin-right: auto;\n    margin-left: auto;\n\n    @media only screen and (max-width: 480px) {\n      max-width: 320px;\n      max-height: 320px;\n      width: 95%;\n      height: 95%;\n    }\n  }\n  h2 {\n    font-size: 30px;\n    text-transform: uppercase;\n    text-shadow: -5px 5px 8px rgba(0, 0, 0, 0.6);\n    @media only screen and (max-width: 768px) {\n      font-size: 20px;\n    }\n  }\n  h1 {\n    font-size: 75px;\n    @media only screen and (max-width: 768px) {\n      font-size: 50px;\n    }\n  }\n"]))),cn=j.a.div(b||(b=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n"])));var dn=function(){return Object(F.jsxs)(g,{children:[Object(F.jsx)(sn,{}),Object(F.jsxs)(O,{children:[Object(F.jsx)(Q,{}),Object(F.jsx)(G,{})]})]})},ln=Object(w.a)({reducer:{time:_}});f.a.render(Object(F.jsx)(u.a.StrictMode,{children:Object(F.jsx)(k.a,{store:ln,children:Object(F.jsx)(dn,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.74498a6d.chunk.js.map