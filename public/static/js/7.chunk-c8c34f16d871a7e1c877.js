/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(n(2)),a=g(n(11)),o=g(n(4)),r=g(n(10)),u=g(n(3)),i=g(n(5)),s=g(n(1)),c=n(18),d=n(17),f=(n(510),g(n(622))),m=g(n(30)),p=(g(n(546)),g(n(527)),g(n(523)),g(n(525)),g(n(524)),g(n(528)),g(n(526)),g(n(509)),g(n(508))),h=g(n(232)),v=g(n(507)),_=n(233);function g(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.loadChtoEng=function(){n.props.loadPortContent({url:"/api/eng_getWriteTest",body:{username:"lxq",articleId:1}})},n.state={submit:!1},n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadChtoEng()}},{key:"render",value:function(){var e=this,t=this.props.content;return console.log(t),s.default.createElement(s.default.Fragment,null,s.default.createElement("div",null,s.default.createElement("div",{className:f.default.pageTitle}," 汉译英 "),s.default.createElement("br",null),t.map(function(t,n){return s.default.createElement("div",{key:n,className:f.default.chtoengall},t.chinese,s.default.createElement("br",null),s.default.createElement("textarea",{"aria-label":"With textarea",className:f.default.textarea}),e.state.submit?s.default.createElement("p",null," ",t.english):null)}),s.default.createElement(m.default,{text:"显示答案",className:f.default.buttonShowEng,onClick:function(){return e.setState({submit:!0})}})))}}]),t}(s.default.PureComponent);t.default=(0,v.default)([(0,p.default)({}),h.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,content:e.PortTest.content}},function(e){return(0,l.default)({},(0,d.bindActionCreators)(_.actions,e))})],b)},621:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3l9Nv4FIJlx_sXQLl_mL7F{font-family:cursive;font-size:30px;color:blue;text-align:center}._1vjV3K89R4h-_x4wcwB-rs{position:relative;left:5%;width:60%}._1Z-7-WZJ9nWOovV5cH7cYK{position:relative;width:100%;height:100px}._2tjtcsIlLkVW1lt0jmVbOH{position:absolute;right:35%}",""]),t.locals={pageTitle:"_3l9Nv4FIJlx_sXQLl_mL7F",chtoengall:"_1vjV3K89R4h-_x4wcwB-rs",textarea:"_1Z-7-WZJ9nWOovV5cH7cYK",buttonShowEng:"_2tjtcsIlLkVW1lt0jmVbOH"}},622:function(e,t,n){var l=n(621);"string"==typeof l&&(l=[[e.i,l,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(12)(l,a);l.locals&&(e.exports=l.locals)}}]);