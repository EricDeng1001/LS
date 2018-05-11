/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{514:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=h(n(11)),o=h(n(4)),a=h(n(10)),i=h(n(3)),u=h(n(5)),r=h(n(1)),s=n(18),c=h(n(627)),d=n(232),f=n(144),g=(h(n(502)),h(n(501)),h(n(230))),m=h(n(500));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,o.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.log=function(){n.props.logined?(alert("您已经登录!"),n.setState({loginShow:!1})):n.setState({loginShow:!0,signupShow:!1})},n.sign=function(){n.setState({signupShow:!0,loginShow:!1}),console.log(n.state.signupShow),console.log(n.state.loginShow)},n.subject=["英语科目","逻辑科目","写作科目","数学科目"],n.introduction=["英语科目简介","逻辑科目简介","写作科目简介","数学科目简介"],n.useIntroduction=["英语学习部分分为测试、学习、复习三个部分","逻辑学习部分分为测试、知识点精要、学习、复习四个部分","写作学习部分分为论证有效性分析和论说文两个部分,涵盖了做题技巧、巩固练习和真题演练","数学学习部分分为测试、学习、复习三个部分"],n.state={loginShow:!1,signupShow:!1},n}return(0,u.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.logined,l=t.choice;t.username;return n&&this.setState({loginShow:!1}),r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:c.default.wholePage},r.default.createElement("div",{className:c.default.HUD},r.default.createElement("div",{className:c.default.sysTitle}," 学习系统 "),r.default.createElement("div",{className:c.default.loginOrSignup},r.default.createElement("a",{onClick:function(){return e.log()}},r.default.createElement("u",null," 登录 "))," ",r.default.createElement("a",null,"   "),r.default.createElement("a",{onClick:function(){return e.sign()}},r.default.createElement("u",null," 注册 ")))),r.default.createElement("div",{className:c.default.subjectText,"background-color":"orange"},r.default.createElement(f.view,{text:this.subject,normalStyle:c.default.normalText,choosedStyle:c.default.chosedText})),r.default.createElement("div",{className:c.default.subjectIntroduction},r.default.createElement("div",{className:c.default.title},this.introduction[l]),r.default.createElement("br",null),r.default.createElement("div",{className:c.default.brifIntroduction},this.useIntroduction[l]),r.default.createElement("br",null),0==l?r.default.createElement("a",{href:"/learning/english"}," 开始英语学习 "):1==l?r.default.createElement("a",{href:"/learning/logic"}," 开始逻辑学习 "):2==l?r.default.createElement("a",{href:"/learning/writing"}," 开始写作学习 "):3==l?r.default.createElement("a",{href:"/learning/math"}," 开始数学学习 "):null),this.state.loginShow?r.default.createElement("div",{className:c.default.login},r.default.createElement(d.view,{loginOrSignup:"login",onSuccess:function(){return e.setState({loginShow:!1})},signup:function(){return e.setState({signupShow:!0,loginShow:!1})},onCancel:function(){return e.setState({loginShow:!1,signupShow:!1})}})):null,this.state.signupShow?r.default.createElement("div",{className:c.default.login},r.default.createElement(d.view,{loginOrSignup:"signup",onCancel:function(){return e.setState({signupShow:!1,loginShow:!1})}})):null))}}]),t}(r.default.PureComponent);t.default=(0,m.default)([g.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,choice:e.SubjectSelect.choice}})],p)},626:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,'._1ECh9abxv97B6JKxsGoO6Y{width:100%;height:100%;background:url("/static/images/background.jpg");background-size:100% 100%}._3IYdPZERNGuH1FIOL02avU{position:absolute;height:8%;width:100%;background-color:#5379c6;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._2DskmxQoayBFXUPo1ku_La{position:absolute;left:5%;font-size:25px}._18mpZsBI2AeNNMKTlrdd-O{position:absolute;right:8%;font-size:30px}._18mpZsBI2AeNNMKTlrdd-O a:link{color:#000}._18mpZsBI2AeNNMKTlrdd-O a:hover{color:orange;text-decoration:none}._1jFX-s8mwoKvCyl1XuGabl{position:absolute;top:20%;left:60%;font-size:25px}._2NNs7k3XfjTLIw8Qm6mXl5{position:absolute;top:30%;left:10%;width:40%;font-size:20px}._1cZRr-_p5OkAd8XrKo1zoj{font-size:25px;font-weight:50px}.rIEJLEOGm4QlLpqPm8G14{font-size:20px}._3wgS1Iml0k6Wcs7km_BJPh{font-size:90px}._3TegdS2kqo3d9hrVxDFlv3{font-size:25px}.Xvadqd_WzmowNA1M0XLTR{font-size:25px;color:#5379c6}._1ofAPDxcnTec_OxxnSOL7J{color:orange}._2DmpbEeALRRdXKzOSlR9F2{color:#fff}.f-NLTQCLwl86m2OaILP_8{position:absolute;width:40%;height:70%;top:20%;left:30%;background:#fff;border-radius:8px}',""]),t.locals={wholePage:"_1ECh9abxv97B6JKxsGoO6Y",HUD:"_3IYdPZERNGuH1FIOL02avU",sysTitle:"_2DskmxQoayBFXUPo1ku_La",loginOrSignup:"_18mpZsBI2AeNNMKTlrdd-O",subjectText:"_1jFX-s8mwoKvCyl1XuGabl",subjectIntroduction:"_2NNs7k3XfjTLIw8Qm6mXl5",title:"_1cZRr-_p5OkAd8XrKo1zoj",brifIntroduction:"rIEJLEOGm4QlLpqPm8G14",selcetedStyle:"_3wgS1Iml0k6Wcs7km_BJPh",normalText:"_3TegdS2kqo3d9hrVxDFlv3",chosedText:"Xvadqd_WzmowNA1M0XLTR",chosedLogin:"_1ofAPDxcnTec_OxxnSOL7J",normalLogin:"_2DmpbEeALRRdXKzOSlR9F2",login:"f-NLTQCLwl86m2OaILP_8"}},627:function(e,t,n){var l=n(626);"string"==typeof l&&(l=[[e.i,l,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(l,o);l.locals&&(e.exports=l.locals)}}]);