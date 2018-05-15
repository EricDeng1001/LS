/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{563:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=S(a(2)),u=S(a(11)),i=S(a(4)),r=S(a(10)),l=S(a(3)),o=S(a(5)),s=S(a(1)),d=a(18),f=a(17),c=a(510),m=S(a(636)),h=S(a(30)),g=S(a(70)),p=(S(a(142)),S(a(634))),v=S(a(527)),_=(S(a(523)),S(a(525))),b=(S(a(524)),S(a(528)),S(a(526)),a(249)),y=(S(a(141)),S(a(248)),S(a(633))),Q=(S(a(509)),S(a(508)),S(a(232))),E=S(a(507));function S(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){(0,i.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.loadQuestions=function(){a.props.loadQuestions({url:"/api/logicTest"})},a.submitQuestions=function(){var e=a.props,t=e.username,n=e.questions,u=e.submitQuestionState,i=e.submiting;u.resolved;if(!i){var r="",l="",o="",s="",d="",f="",c="",m="",h="",g="",p="",v="",_="",b="",Q="",E=(0,y.default)(n);r+=E[0],l+=E[1],o+=E[2],s+=E[3],d+=E[4],f+=E[5],c+=E[6],m+=E[7],h+=E[8],g+=E[9],p+=E[10],v+=E[11],_+=E[12],b+=E[13],Q+=E[14],a.props.submitQuestions({url:"/api/logicTestRightRate",body:{username:t,right_rate0:r,right_rate1:l,right_rate2:o,right_rate3:s,right_rate4:d,right_rate5:f,right_rate6:c,right_rate7:m,right_rate8:h,right_rate9:g,right_rate10:p,right_rate11:v,right_rate12:_,right_rate13:b,right_rate14:Q}})}},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"componentWillReceiveProps",value:function(e){this.props.testend!==e.testend&&this.submitQuestions()}},{key:"render",value:function(){var e=this.props,t=(e.submitQuestionState,e.loadQuestionState),a=e.ined,n=e.questions,u=(e.next,e.forceNext),i=e.testend;e.username;return s.default.createElement(s.default.Fragment,null,s.default.createElement(c.Prompt,{when:!0!==i,message:"you need to do it again, are you sure to quit?"}),s.default.createElement("div",{className:m.default.wrapper},i?s.default.createElement("div",null,s.default.createElement(g.default,{info:"您的各类题型正确率统计如下："}),s.default.createElement("div",{className:m.default.chart},s.default.createElement(p.default,{chartTitle:["逻辑语言","命题逻辑","词项逻辑","逻辑应用","演绎推理","归纳逻辑","假设","支持","削弱","评价","解释","推论","比较","描述","综合"],chartData:(0,y.default)(n)}))):s.default.createElement("div",null,s.default.createElement("div",{className:m.default.question},s.default.createElement(v.default,{loading:t.pending,wasLoaded:t.resolved,lastFailed:t.lastFailed,reloader:this.loadQuestions,center:!0},s.default.createElement(_.default,{play:a},s.default.createElement(b.view,{submiter:this.submitQuestions,loader:this.loadQuestions}))),s.default.createElement(h.default,{className:m.default.nextQuestion,text:"下一题",onClick:u})))))}}]),t}(s.default.PureComponent);t.default=(0,E.default)([Q.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleSubjectTest.content,loadQuestionState:e.SingleSubjectTest.loadState,submitQuestionState:e.SingleSubjectTest.submitState,lock:e.SingleSubjectTest.lock,show:e.SingleSubjectTest.show,testend:e.SingleSubjectTest.testendState}},function(e){return(0,n.default)({},(0,f.bindActionCreators)(b.actions,e))})],j)},633:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(45)),u=i(a(141));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){for(var t={0:"luojiyuyan",1:"mingtiluoji",2:"cixiangluoji",3:"luojiyingyong",4:"yanyituili",5:"guinaluoji",6:"jiashe",7:"zhichi",8:"xueruo",9:"pingjia",10:"jieshi",11:"tuilun",12:"bijiao",13:"miaoshu",14:"zonghe"},a=function(e){for(var a in t)if(t[a]==e)return a},i=[],r=(0,n.default)(e).length,l=0;l<r;l++)i.push(0);for(var o in e){var s=a(o);for(var d in e[o])e[o][d].choosed==(0,u.default)(e[o][d].answer)&&("易"==e[o][d].nanyi?i[s]+=.22:"中"==e[o][d].nanyi?i[s]+=.33:"难"==e[o][d].nanyi?i[s]+=.45:i[o][0]+=0)}return i}},634:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(11)),u=s(a(4)),i=s(a(10)),r=s(a(3)),l=s(a(5)),o=s(a(1));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,u.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.chartTitle,a=e.chartData;return o.default.createElement("table",{border:"1"},o.default.createElement("tr",null,o.default.createElement("th",null," 类型 "),o.default.createElement("th",null," 正确率 ")),a.map(function(e,a){return o.default.createElement("tr",{key:a},o.default.createElement("td",null,t[a]),o.default.createElement("td",null,e))}))}}]),t}(o.default.PureComponent);t.default=d},635:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._28gxYQDEWmrF8NaQMuI1Uq{position:absolute;right:10%;bottom:5%}._3Qy27sUvFRxvimvZQRtCNZ{position:absolute;left:40%}",""]),t.locals={nextQuestion:"_28gxYQDEWmrF8NaQMuI1Uq",chart:"_3Qy27sUvFRxvimvZQRtCNZ"}},636:function(e,t,a){var n=a(635);"string"==typeof n&&(n=[[e.i,n,""]]);var u={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,u);n.locals&&(e.exports=n.locals)}}]);