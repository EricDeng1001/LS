/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{598:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=b(n(2)),l=b(n(11)),r=b(n(4)),i=b(n(10)),o=b(n(3)),u=b(n(5)),c=b(n(1)),s=n(16),d=n(15),f=(n(250),b(n(649))),p=b(n(27)),h=(b(n(575)),b(n(254)),b(n(251)),b(n(253)),b(n(252)),b(n(255)),n(256)),m=n(260),g=(b(n(574)),b(n(249)),b(n(248))),v=b(n(142)),_=b(n(247)),E=n(143);function b(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,r.default)(this,t);var n=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadChtoEng=function(){n.props.loadPortContent({url:"/api/eng_getWriteTest",body:{username:n.props.username,articleId:n.props.articleId}})},n.state={submit:!1},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.loadChtoEng()}},{key:"render",value:function(){var e=this,t=this.props,n=t.content,a=t.setLearningType;t.learningType;return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("div",{className:f.default.pageTitle}," 汉译英 "),c.default.createElement("br",null),void 0==n[0]?null:n.map(function(t,n){return c.default.createElement("div",{key:n,className:f.default.chtoengall},t.chinese,c.default.createElement("br",null),c.default.createElement("textarea",{"aria-label":"With textarea",className:f.default.textarea}),e.state.submit?c.default.createElement("p",null," ",t.english):null)}),c.default.createElement("div",{className:f.default.ShowEngAndReturn},c.default.createElement(p.default,{text:"返回英语学习主页面",onClick:function(){a("英语主页面")}}),"  ",c.default.createElement(p.default,{text:"显示答案",onClick:function(){return e.setState({submit:!0})}}))))}}]),t}(c.default.PureComponent);t.default=(0,_.default)([(0,g.default)({}),v.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,content:e.PortTest.content,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(m.actions,e),(0,d.bindActionCreators)(E.actions,e),(0,d.bindActionCreators)(h.actions,e))})],x)},648:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._3l9Nv4FIJlx_sXQLl_mL7F{font-family:cursive;font-size:30px;color:blue;text-align:center}._1vjV3K89R4h-_x4wcwB-rs{position:relative;left:5%;width:60%}._1Z-7-WZJ9nWOovV5cH7cYK{position:relative;width:100%;height:100px}._3R_PiR4hLK3Y26kYhPhoK4{position:absolute;right:35%}",""]),t.locals={pageTitle:"_3l9Nv4FIJlx_sXQLl_mL7F",chtoengall:"_1vjV3K89R4h-_x4wcwB-rs",textarea:"_1Z-7-WZJ9nWOovV5cH7cYK",ShowEngAndReturn:"_3R_PiR4hLK3Y26kYhPhoK4"}},649:function(e,t,n){var a=n(648);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)}}]);