/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),u=(r=o)&&r.__esModule?r:{default:r};t.default={socket:{},persistentState:{UserManager:{logined:!0,name:!0,password:!0,newTo:!0}},onAppWillMount:function(e,t){},onAppWillClose:function(e,t,n){},onUIErrorShowErrorMessage:!0,UIErrorMessage:u.default.createElement("div",null,"a bug happened"),UIErrorHandler:function(e,t){console.log(e,t)}}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(261),o=n(258),u=n(259),i=n(271),d=n(94),a=n(146),c=(n(281),n(264)),l=n(143),s=n(149),f=n(147),g=n(263),p=n(265),_=n(257),b=n(266),j=n(269),y=n(151),M=n(150),v=n(262);t.default={SingleOptionQuestions:r.reducer,UserManager:o.reducer,EnglishArticle:u.reducer,SingleSubjectTest:i.reducer,ButtonExpand:d.reducer,WriteContent:a.reducer,WriteKnowledge:c.reducer,PortTest:l.reducer,SubjectSelect:s.reducer,ZhentiPerYearTongji:f.reducer,ZhentiAllYearTongji:g.reducer,PageDesign:p.reducer,LearningTypeSelect:_.reducer,LogicReviewModel:b.reducer,LogicTestTongji:j.reducer,EditText:y.reducer,ViewFinishedText:M.reducer,LogicState:v.reducer}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});u(n(1));var r=u(n(152)),o=u(n(465));function u(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)(function(){return n.e(5).then(function(){var e=n(576);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),d=(0,r.default)(function(){return n.e(4).then(function(){var e=n(567);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),a=(0,r.default)(function(){return n.e(3).then(function(){var e=n(575);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),c=(0,r.default)(function(){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=n(570);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),l=(0,r.default)(function(){return n.e(1).then(function(){var e=n(568);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default={"/":{page:o.default},"/learning":{page:a,nested:!0},"/learningsystem":{page:i,nested:!0},"/loginOrSignup":{page:d},"/ui":{page:c},"/404":{page:l},"*":{redirect:"/404"}}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={UserManager:{logined:!0,name:"testdzh",password:"testdzh",newTo:[0,1,0,0]}}},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(286)),o=u(n(285));function u(e){return e&&e.__esModule?e:{default:e}}t.default={middleWares:[r.default,o.default]}},466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"*":{"*":{entering:{left:"100%"},entered:{left:"0"},exiting:{left:"-100%"},time:800,timingFunction:"ease",toAnimate:"all"},from:{"/notFound":{entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},timingFunction:"linear",time:800}},to:{"/notFound":{time:0}}},"/":{"/test":{entering:{top:"100%"},entered:{top:"0"},exiting:{left:"100%"}}},"/test":{"/":{entering:{left:"100%"},entered:{left:"0"},exiting:{top:"100%"}}}}}}]);