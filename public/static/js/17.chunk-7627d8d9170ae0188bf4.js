/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=j(n(2)),l=j(n(11)),o=j(n(4)),r=j(n(10)),u=j(n(3)),i=j(n(5)),s=j(n(1)),c=n(18),d=n(17),f=n(503),p=j(n(587)),m=j(n(30)),g=j(n(92)),h=(j(n(142)),j(n(521))),_=(j(n(518)),j(n(517))),v=(j(n(516)),j(n(520)),j(n(519))),E=n(233),b=n(231),y=n(240),x=n(239),S=(j(n(235)),j(n(143)),j(n(585))),C=j(n(141)),w=j(n(502)),k=j(n(501)),N=j(n(230)),T=j(n(500));function j(e){return e&&e.__esModule?e:{default:e}}var Q=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadPortContent({url:"/api/logicCeshi",body:{username:n.props.username,chapter_name:n.props.chapter_name}}),n.props.loadQuestions({url:"/api/logicCeshi",body:{username:n.props.username,chapter_name:n.props.chapter_name},parser:function(e){for(var t=[],n=0;n<e.timu.length;n++)e.timu[n].map(function(e){return t.push(e)});return t.map(function(e){return{questionId:e.id,options:[e.op_one,e.op_two,e.op_three,e.op_four,e.op_five],rightKey:(0,C.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.content,l=e.questions,o=e.submitQuestionState,r=e.submiting,u=e.lockAndShow;console.log(l);o.resolved;if(!r){for(var i="",s="",c=0;c<l.length;c++)i+=l[c].questionId+"*",l[c].choosed!==l[c].rightKey&&(s+="1*"),l[c].choosed==l[c].rightKey&&(s+="0*");console.log(t,a.chapter_name,i,s),n.props.submitQuestions({url:"/api/logicCeShiTongJi",body:{username:t,dalei:a.chapter_name,question_id:i,RightOrWrong:s}});for(c=0;c<l.length;c++)u(l[c].questionId)}},n.loadChapterError=function(){n.setState({unitTongjiShow:!0}),n.props.loadZhentiTongji({url:"/api/logicCeshiResult",body:{username:n.props.username,chapter_name:n.props.chapter_name}}),n.props.loadAllZhentiTongji({url:"/api/logicResult",body:{username:n.props.username,chapter_name:n.props.chapter_name}})},n.questions=[],n.state={end:!1,unitTongjiShow:!1},n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"render",value:function(){var e=this,t=this.state.end,n=this.props,a=(n.submitQuestionState,n.loadQuestionState),l=(n.loadContent,n.loadContentState,n.ined),o=n.questions,r=n.content;n.setChoice;return console.log(o),s.default.createElement(s.default.Fragment,null,s.default.createElement(f.Prompt,{when:0==t,message:"you need to do it again, are you sure to quit?"}),0==this.state.unitTongjiShow?1==r.flag?s.default.createElement("div",null,s.default.createElement("div",{className:p.default.pageTitle}," 单元测试 "),s.default.createElement("div",{className:p.default.logic_knowledge},s.default.createElement(h.default,{loading:a.pending,wasLoaded:a.resolved,lastFailed:a.lastFailed,reloader:this.loadQuestions,center:!0},s.default.createElement(_.default,{play:l},s.default.createElement("div",null,s.default.createElement("h4",{className:p.default.dalei}," ",r.chapter_name," "),s.default.createElement(E.view,{loader:this.loadQuestions,subject:"logic_test"}),s.default.createElement("strong",{align:"center"},s.default.createElement("div",{style:{color:"red"}},"请先确认提交，再查看章节数据统计，否则，统计数据将会是上次测试的统计结果")),s.default.createElement(m.default,{className:p.default.submitButton,text:"确认提交",onClick:this.submitQuestions}),s.default.createElement(m.default,{className:p.default.viewStatistics,text:"查看本章数据统计",onClick:function(){return e.loadChapterError()}})))))):2==r.flag?s.default.createElement(g.default,{info:"您还没有完成入口测试，请先完成入口测试！"}):3==r.flag?s.default.createElement(g.default,{info:"您还没有完成重点习题，请先完成重点习题！"}):s.default.createElement(g.default,{info:"您还没有完成强化练习，请先完成强化练习！"}):s.default.createElement(S.default,{chapter_name:this.props.chapter_name,ceshiData:this.props.ceshiData,chapterData:this.props.chapterData}))}}]),t}(s.default.PureComponent);t.default=(0,T.default)([(0,k.default)({submitQuestionState:{onResolved:function(){},onRejected:function(){this.props.alert("失败")}}}),(0,w.default)({logined:{satisfy:function(e){return!0===e},block:function(){var e=this.props,t=e.openWindow,n=e.history,a=e.closeMask,l=e.openMask;t(v.default,{width:"380px",height:"300px",position:{top:"calc( 50% - 190px)",left:"calc( 50% - 150px)"},onCancel:function(){return n.goBack()||a()},onSuccess:a}),l()}}}),N.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,content:e.PortTest.content,loadContentState:e.PortTest.loadState,chapter_name:e.LearningTypeSelect.chapter_name,ceshiData:e.ZhentiPerYearTongji.tongji,chapterData:e.ZhentiAllYearTongji.tongji}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(E.actions,e),(0,d.bindActionCreators)(b.actions,e),(0,d.bindActionCreators)(y.actions,e),(0,d.bindActionCreators)(x.actions,e))})],Q)},550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=N(n(2)),l=N(n(11)),o=N(n(4)),r=N(n(10)),u=N(n(3)),i=N(n(5)),s=N(n(1)),c=n(18),d=n(17),f=n(503),p=N(n(589)),m=N(n(30)),g=N(n(92)),h=(N(n(142)),N(n(521))),_=(N(n(518)),N(n(517))),v=(N(n(516)),N(n(520)),N(n(519))),E=n(233),b=n(231),y=n(234),x=(N(n(235)),N(n(143)),N(n(141))),S=N(n(502)),C=N(n(501)),w=N(n(230)),k=N(n(500));function N(e){return e&&e.__esModule?e:{default:e}}var T=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadPortContent({url:"/api/logicQianghua",body:{username:n.props.username,chapter_name:n.props.chapter_name}}),n.props.loadQuestions({url:"/api/logicQianghua",body:{username:n.props.username,chapter_name:n.props.chapter_name},parser:function(e){for(var t=[],n=0;n<e.timu.length;n++)e.timu[n].map(function(e){return t.push(e)});return t.map(function(e){return{questionId:e.id,options:[e.op_one,e.op_two,e.op_three,e.op_four,e.op_five],rightKey:(0,x.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.content,l=e.questions,o=e.submitQuestionState,r=e.submiting,u=e.lockAndShow;console.log(l);o.resolved;if(!r){for(var i="",s="",c=0;c<l.length;c++)i+=l[c].questionId+"*",l[c].choosed!==l[c].rightKey&&(s+="1*"),l[c].choosed==l[c].rightKey&&(s+="0*");console.log(t,a.chapter_name,i,s),n.props.submitQuestions({url:"/api/logicQianghuaTongji",body:{username:t,dalei:a.chapter_name,question_id:i,RightOrWrong:s}});for(c=0;c<l.length;c++)u(l[c].questionId)}},n.questions=[],n.state={end:!1},n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"render",value:function(){var e=this.state.end,t=this.props,n=(t.submitQuestionState,t.loadQuestionState),a=(t.loadContent,t.loadContentState,t.ined),l=(t.questions,t.content),o=(t.setChoice,t.setLearningType);return console.log(this.props),s.default.createElement(s.default.Fragment,null,s.default.createElement(f.Prompt,{when:0==e,message:"you need to do it again, are you sure to quit?"}),1==l.flag?s.default.createElement("div",null,s.default.createElement("div",{className:p.default.pageTitle}," 强化练习 "),s.default.createElement("div",{className:p.default.logic_knowledge},s.default.createElement(h.default,{loading:n.pending,wasLoaded:n.resolved,lastFailed:n.lastFailed,reloader:this.loadQuestions,center:!0},s.default.createElement(_.default,{play:a},s.default.createElement("div",null,s.default.createElement("h4",{className:p.default.dalei}," ",l.chapter_name," "),s.default.createElement(E.view,{loader:this.loadQuestions,subject:"logic_test"}),s.default.createElement(m.default,{className:p.default.submitButton,text:"确认提交",onClick:this.submitQuestions}),s.default.createElement(m.default,{className:p.default.enterNextButton,text:"进入单元测试",onClick:function(){return o("单元测试")}})))))):2==l.flag?s.default.createElement(g.default,{info:"您还没有完成入口测试，请先完成入口测试！"}):s.default.createElement(g.default,{info:"您还没有完成重点习题，请先完成重点习题！"}))}}]),t}(s.default.PureComponent);t.default=(0,k.default)([(0,C.default)({submitQuestionState:{onResolved:function(){},onRejected:function(){this.props.alert("失败")}}}),(0,S.default)({logined:{satisfy:function(e){return!0===e},block:function(){var e=this.props,t=e.openWindow,n=e.history,a=e.closeMask,l=e.openMask;t(v.default,{width:"380px",height:"300px",position:{top:"calc( 50% - 190px)",left:"calc( 50% - 150px)"},onCancel:function(){return n.goBack()||a()},onSuccess:a}),l()}}}),w.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,content:e.PortTest.content,loadContentState:e.PortTest.loadState,chapter_name:e.LearningTypeSelect.chapter_name}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(E.actions,e),(0,d.bindActionCreators)(b.actions,e),(0,d.bindActionCreators)(y.actions,e))})],T)},580:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._1D3JovJRlbA8cupThfekim{font-size:20px;line-height:40px}._3QNJ4YBCq0kllTXZBfec8x{padding-top:10px;padding-left:10px;font-size:30px;text-align:center;color:blue}._1jvQxF87C3q6NYzUk08T34{padding-left:30px;font-size:25px;color:orange}._2MyDikyhsjDZnJlJQaiRnO{color:red;white-space:nowrap}",""]),t.locals={help:"_1D3JovJRlbA8cupThfekim",title:"_3QNJ4YBCq0kllTXZBfec8x",part:"_1jvQxF87C3q6NYzUk08T34",qiangdiao:"_2MyDikyhsjDZnJlJQaiRnO"}},581:function(e,t,n){var a=n(580);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(11)),l=c(n(4)),o=c(n(10)),r=c(n(3)),u=c(n(5)),i=c(n(1)),s=c(n(581));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return i.default.createElement("div",{className:s.default.help},i.default.createElement("h4",{className:s.default.title}," 逻辑科目学习指南 "),i.default.createElement("span",{className:s.default.part}," 水平测试 "),i.default.createElement("br",null),i.default.createElement("ol",null,i.default.createElement("li",null,"用户首次进行逻辑科目的学习时，系统会强制进行测试"),i.default.createElement("li",null,"完成入口测试后，用户可以查看测试的正确率统计数据"),i.default.createElement("li",null,"只有完成入口测试后才可以进入学习，学习的章节内容与入口测试的做题情况有关")),i.default.createElement("span",{className:s.default.part}," 进入学习 "),i.default.createElement("br",null),i.default.createElement("ol",null,i.default.createElement("li",null,"每一单元的学习分为四个部分：知识点精要、重点题型、强化练习以及单元测试"),i.default.createElement("li",null,"知识点精要是对本单元知识点的详细介绍"),i.default.createElement("li",null,"重点题型涵盖本单元涉及到所有小类的题目"),i.default.createElement("li",null,"强化练习是对本单元学习知识的巩固"),i.default.createElement("li",null,"单元测试是用户对本单元所学习内容的自我检测,",i.default.createElement("span",{style:{color:"red"}},"只有单元测试正确率在三分之二及其以上，用户才可以进行下一章节的学习；否则用户需要重新学习本章节，直到测试正确率达到三分之二及其以上"))),i.default.createElement("span",{className:s.default.part}," 复习 "),i.default.createElement("br",null),i.default.createElement("ol",null,i.default.createElement("li",null,"复习部分可以查看用户之前所学过的所有课程内容")))}}]),t}(i.default.PureComponent);t.default=d},583:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2QnuO57a8Dnbj2P2Ii7LjB{padding-left:5%;font-size:20px}.AXgpWfjozF0gnfJ3qKhgD{font-size:25px;text-align:center}",""]),t.locals={wholeErrorTongji:"_2QnuO57a8Dnbj2P2Ii7LjB",note:"AXgpWfjozF0gnfJ3qKhgD"}},584:function(e,t,n){var a=n(583);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(11)),l=d(n(4)),o=d(n(10)),r=d(n(3)),u=d(n(5)),i=d(n(1)),s=d(n(584)),c=(d(n(92)),d(n(30)));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.chapter_name,n=e.ceshiData,a=e.chapterData,l=e.stayThisChapter,o=e.enterNextChapter;return console.log(this.props),i.default.createElement("div",{className:s.default.wholeErrorTongji},i.default.createElement("div",{className:s.default.note},"您在  ",i.default.createElement("span",{style:{color:"red"}},t),"  章节的做题情况统计如下"),i.default.createElement("br",null),i.default.createElement("div",null,"您在本章的所有题目，包括重点习题、强化习题以及单元测试的总错误概率为：  ",i.default.createElement("span",{style:{color:"red"}},a.total)),i.default.createElement("br",null),i.default.createElement("div",null,"您在本章的所有题目中，按类型统计率统计如下："),i.default.createElement("br",null),i.default.createElement("table",{border:"1",align:"center"},void 0==a.mba_type?null:i.default.createElement("tr",null,i.default.createElement("th",null,"类别名称"),a.mba_type.map(function(e,t){return i.default.createElement("th",{key:t}," ",e," ")})),void 0==a.xiaolei_mba?null:i.default.createElement("tr",null,i.default.createElement("th",null,"错误率"),a.xiaolei_mba.map(function(e,t){return i.default.createElement("th",{key:t}," ",e," ")}))),i.default.createElement("br",null),i.default.createElement("div",null,"您在本章的单元测试的统计如下："),i.default.createElement("br",null),i.default.createElement("table",{border:"1",align:"center"},i.default.createElement("tr",null,i.default.createElement("th",null,"题目总数"),i.default.createElement("th",null,n.total_timu)),i.default.createElement("tr",null,i.default.createElement("th",null,"正确个数"),i.default.createElement("th",null,n.right_timu)),i.default.createElement("tr",null,i.default.createElement("th",null,"错误个数"),i.default.createElement("th",null,n.wrong_timu))),i.default.createElement("br",null),1==n.flag?i.default.createElement("strong",{align:"center"},i.default.createElement("div",{style:{color:"red"}},"根据您的做题情况，系统建议您进入下一章的学习")):2==n.flag?i.default.createElement("strong",{align:"center"},i.default.createElement("div",{style:{color:"red"}},"根据您的做题情况，系统建议您留在本章的学习")):null,i.default.createElement("br",null),i.default.createElement("span",null,"请选择留在本章学习还是进入下一章节的学习："),i.default.createElement("span",null,i.default.createElement(c.default,{text:"留在本章",onClick:l}),"      ",i.default.createElement(c.default,{text:"进入下一章",onClick:o})))}}]),t}(i.default.PureComponent);t.default=f},586:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._1TMgdPH8EBNexxZWwRtoU6{font-family:cursive;font-size:30px;color:blue;text-align:center}._24pbPQX2_xI7dGn_OIERUj{font-size:25px;color:red;text-align:center}._33h4Yfw8qWcjTnsYMC4M0R{font-size:22px;color:orange;line-height:45px}._2NPEngXw5OCOvbozkCgvAX{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._3NIXsKQ4KxPu_UOpooCOUR{position:absolute;left:40%}._3TJd7GF-iEyhKrPwKhQa13{position:absolute;left:50%}",""]),t.locals={pageTitle:"_1TMgdPH8EBNexxZWwRtoU6",dalei:"_24pbPQX2_xI7dGn_OIERUj",logic_knowledge_title:"_33h4Yfw8qWcjTnsYMC4M0R",HUD:"_2NPEngXw5OCOvbozkCgvAX",submitButton:"_3NIXsKQ4KxPu_UOpooCOUR",viewStatistics:"_3TJd7GF-iEyhKrPwKhQa13"}},587:function(e,t,n){var a=n(586);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},588:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,".tsEPlYGh9vFjKdq811Xsp{font-family:cursive;font-size:30px;color:blue;text-align:center}._1Fd-Ru8Niiv1-l7GSGEAfc{font-size:25px;color:red;text-align:center}._2bUmliGGxVQY8RXx-YkCtf{font-size:22px;color:orange;line-height:45px}.dHNVQTPDjdhzAdn5A9lmY{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._31M8X22lKjp5cSKSopeYM9{position:absolute;left:40%}._1e1XIyd1Ze74IsT7QXGgYY{position:absolute;left:50%}",""]),t.locals={pageTitle:"tsEPlYGh9vFjKdq811Xsp",dalei:"_1Fd-Ru8Niiv1-l7GSGEAfc",logic_knowledge_title:"_2bUmliGGxVQY8RXx-YkCtf",HUD:"dHNVQTPDjdhzAdn5A9lmY",submitButton:"_31M8X22lKjp5cSKSopeYM9",enterNextButton:"_1e1XIyd1Ze74IsT7QXGgYY"}},589:function(e,t,n){var a=n(588);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},594:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,'._2bLzIFK1iKSavuxLYr5OHt{height:100%;width:100%}._1ttgVcqK0KpugKR8NCQhO8{font-size:30px;color:blue;text-align:center}._1ovtElT-0Jv1evzpkqP02Z,._3r4l6_KAr_E_85rC2zpbFc,._3x5BGrV8lLu5T0eqcag8wG,._27GCcNgjqsK6VYmNCiRdZz{position:absolute;width:15%;height:50%;top:30%;font-size:30px;text-align:center;border:1px solid;border-radius:4px;border-color:#5379c6;background-color:orange;background:url("/static/images/background.jpg")}._1ovtElT-0Jv1evzpkqP02Z ._3_xG-yo5xGF0twKysQbISb,._3r4l6_KAr_E_85rC2zpbFc ._3_xG-yo5xGF0twKysQbISb,._3x5BGrV8lLu5T0eqcag8wG ._3_xG-yo5xGF0twKysQbISb,._27GCcNgjqsK6VYmNCiRdZz ._3_xG-yo5xGF0twKysQbISb{position:relative;height:70%;top:15%}._1ovtElT-0Jv1evzpkqP02Z ._3_xG-yo5xGF0twKysQbISb ._15_06UgTcCO0KIOrGLq6ZD,._3r4l6_KAr_E_85rC2zpbFc ._3_xG-yo5xGF0twKysQbISb ._15_06UgTcCO0KIOrGLq6ZD,._3x5BGrV8lLu5T0eqcag8wG ._3_xG-yo5xGF0twKysQbISb ._15_06UgTcCO0KIOrGLq6ZD,._27GCcNgjqsK6VYmNCiRdZz ._3_xG-yo5xGF0twKysQbISb ._15_06UgTcCO0KIOrGLq6ZD{border-radius:50%}._3x5BGrV8lLu5T0eqcag8wG{position:absolute;left:8%}._27GCcNgjqsK6VYmNCiRdZz{left:31%}._1ovtElT-0Jv1evzpkqP02Z{left:54%}._3r4l6_KAr_E_85rC2zpbFc{left:77%}._3cWclL52_tLt3dwpxx_Dem{color:#000}._2HF4PMpsBneFyz5CGmnmeS{color:blue}',""]),t.locals={whole:"_2bLzIFK1iKSavuxLYr5OHt",typeSelect:"_1ttgVcqK0KpugKR8NCQhO8",fangkuang1:"_3x5BGrV8lLu5T0eqcag8wG",fangkuang2:"_27GCcNgjqsK6VYmNCiRdZz",fangkuang3:"_1ovtElT-0Jv1evzpkqP02Z",fangkuang4:"_3r4l6_KAr_E_85rC2zpbFc",tupianPosition:"_3_xG-yo5xGF0twKysQbISb",tupian:"_15_06UgTcCO0KIOrGLq6ZD",normal_type:"_3cWclL52_tLt3dwpxx_Dem",choosed_type:"_2HF4PMpsBneFyz5CGmnmeS"}},595:function(e,t,n){var a=n(594);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},596:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(2)),l=y(n(11)),o=y(n(4)),r=y(n(10)),u=y(n(3)),i=y(n(5)),s=y(n(1)),c=n(18),d=n(17),f=y(n(595)),p=n(234),m=y(n(92)),g=y(n(535)),h=y(n(534)),_=y(n(550)),v=y(n(549)),E=(y(n(502)),y(n(501)),y(n(230))),b=y(n(500));function y(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.getLogicChapterName=function(e){console.log(n.props.username,e),n.props.getChapterName({url:"/api/logicGetChapterName",body:{username:n.props.username,xingshi:e}})},n.TypeSelectNote=function(){alert("您还没有选择要学习的类型，请选择您要学习的类型!"),n.setState({typeSelectShow:!0})},n.FinishTestNote=function(){alert("您还没有完成入口测试，请先完成入口测试!"),n.setState({typeSelectShow:!0})},n.state={type1Selected:!1,type2Selected:!1,typeSelectShow:!0},n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){for(var e=this,t=this.props,n=t.setLearningType,a=t.learningType,l=t.finished_level_test,o=[],r=0;r<4;r++)o[0]="知识点"==a?f.default.choosed_type:f.default.normal_type,o[1]="重点"==a?f.default.choosed_type:f.default.normal_type,o[2]="强化"==a?f.default.choosed_type:f.default.normal_type,o[3]="测试"==a?f.default.choosed_type:f.default.normal_type;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:f.default.whole},this.state.typeSelectShow?s.default.createElement("div",null,s.default.createElement(m.default,{info:"请点击选择您要学习的类型："}),s.default.createElement("div",{className:f.default.typeSelect},s.default.createElement("br",null),s.default.createElement("span",{style:this.state.type1Selected?{color:"orange"}:null,onClick:function(){e.setState({type1Selected:!0,type2Selected:!1}),e.getLogicChapterName(1)}}," 形式逻辑"),"         ",s.default.createElement("span",{style:this.state.type2Selected?{color:"orange"}:null,onClick:function(){e.setState({type2Selected:!0,type1Selected:!1}),e.getLogicChapterName(0)}}," 论证逻辑")),s.default.createElement("div",{className:f.default.fangkuang1},s.default.createElement("div",{className:f.default.tupianPosition},s.default.createElement("img",{className:f.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:o[0],onMouseOver:function(){return n("知识点")},onClick:function(){n("知识点精要"),e.setState({typeSelectShow:!1})}},"点击进入",s.default.createElement("br",null),"知识点精要")),s.default.createElement("div",{className:f.default.fangkuang2},s.default.createElement("div",{className:f.default.tupianPosition},s.default.createElement("img",{className:f.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:o[1],onMouseOver:function(){return n("重点")},onClick:function(){n("重点习题"),e.setState({typeSelectShow:!1})}},"点击进入",s.default.createElement("br",null),"重点习题")),s.default.createElement("div",{className:f.default.fangkuang3},s.default.createElement("div",{className:f.default.tupianPosition},s.default.createElement("img",{className:f.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:o[2],onMouseOver:function(){return n("强化")},onClick:function(){n("强化练习"),e.setState({typeSelectShow:!1})}},"点击进入",s.default.createElement("br",null),"强化练习")),s.default.createElement("div",{className:f.default.fangkuang4},s.default.createElement("div",{className:f.default.tupianPosition},s.default.createElement("img",{className:f.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:o[3],onMouseOver:function(){return n("测试")},onClick:function(){n("单元测试"),e.setState({typeSelectShow:!1})}},"点击进入",s.default.createElement("br",null),"单元测试"))):0!=this.state.type1Selected||0!=this.state.type2Selected||"知识点精要"!=a&&"重点习题"!=a&&"强化练习"!=a&&"单元测试"!=a?0==l?s.default.createElement("div",null,this.FinishTestNote()):"知识点精要"==a?s.default.createElement(g.default,null):"重点习题"==a?s.default.createElement(h.default,null):"强化练习"==a?s.default.createElement(_.default,null):"单元测试"==a?s.default.createElement(v.default,null):null:s.default.createElement("div",null,this.TypeSelectNote())))}}]),t}(s.default.PureComponent);t.default=(0,b.default)([E.default,(0,c.connect)(function(e){return{username:e.UserManager.name,learningType:e.LearningTypeSelect.learningType,finished_level_test:e.LearningTypeSelect.finished_level_test}},function(e){return(0,a.default)({},(0,d.bindActionCreators)(p.actions,e))})],x)},597:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._1zUOYaLveU3gwVpavB4X9f{height:100%;width:100%}._1Po89-hjdRZKQvbq-KVCzx{position:absolute;height:6%;width:100%;background-color:#5379c6;color:#fff;font-size:100%;align-items:center;font-family:Arvo}._8GXXd-eMnv7wonpMeVUS9{position:absolute;left:5%;font-size:25px}._13UTFlcUb6XunqI_HKKbYj{position:absolute;right:8%;font-size:25px}._1UoLnmcKncm3X7CarzNYix{position:absolute;top:6%;left:0;bottom:0;width:12%;background:#5379c6;font-size:25px;text-align:center}._2zzFlex8vw-dIRaum9rOb_{width:80px;height:80px;border-radius:50%}._3QkZ7Xjju9cLfsmCy5NbGC{color:#fff;font-size:20px}._1Lh4Y1kEzE1QjTbox4cxSy,._300xp2mbKWjguled8zLeKf{font-size:25px;padding-top:5px;padding-bottom:5px;color:#fff}._1Lh4Y1kEzE1QjTbox4cxSy{background:orange}.WO8D7L0F4MHn6DgjI_tqk{position:absolute;top:8%;left:12%;height:92%;width:88%;overflow-y:scroll}.WO8D7L0F4MHn6DgjI_tqk ._2F90rGhoUNrtRCt8txBsnt{display:block;position:absolute;text-align:center;font-size:20px;bottom:5%;left:40%}._2tRsuAFqCuqFfhewZoGbls{color:orange}._1SPCF2TKj8WLsinfzR7ZOA{color:#fff}",""]),t.locals={wholeLogicPage:"_1zUOYaLveU3gwVpavB4X9f",logicPageTitle:"_1Po89-hjdRZKQvbq-KVCzx",title:"_8GXXd-eMnv7wonpMeVUS9",goback:"_13UTFlcUb6XunqI_HKKbYj",subjectText:"_1UoLnmcKncm3X7CarzNYix",picture:"_2zzFlex8vw-dIRaum9rOb_",username:"_3QkZ7Xjju9cLfsmCy5NbGC",normalText:"_300xp2mbKWjguled8zLeKf",chosedText:"_1Lh4Y1kEzE1QjTbox4cxSy",mainContent:"WO8D7L0F4MHn6DgjI_tqk",bottomButton:"_2F90rGhoUNrtRCt8txBsnt",chosedLogin:"_2tRsuAFqCuqFfhewZoGbls",normalLogin:"_1SPCF2TKj8WLsinfzR7ZOA"}},598:function(e,t,n){var a=n(597);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(11)),l=y(n(4)),o=y(n(10)),r=y(n(3)),u=y(n(5)),i=y(n(1)),s=n(18),c=(n(17),n(503),y(n(598))),d=y(n(553)),f=y(n(596)),p=(y(n(535)),y(n(534)),y(n(550)),y(n(549)),y(n(551))),m=y(n(582)),g=y(n(92)),h=n(242),_=(y(n(502)),y(n(501))),v=y(n(230)),E=y(n(500)),b=y(n(505));function y(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,l.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.type=["入口测试","进入学习","开始复习","查看帮助"],n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.username,e.logined),n=e.newTo,a=e.choice;e.learningType;return i.default.createElement(i.default.Fragment,null,0==t?i.default.createElement(b.default,null):i.default.createElement("div",null,i.default.createElement(h.view,{subjectFunctions:this.type}),i.default.createElement("div",{className:c.default.mainContent},0==a?1==n[1]?i.default.createElement(d.default,null):i.default.createElement(g.default,{info:"您已经完成测试!"}):1==a?i.default.createElement(f.default,{learningType:""}):2==a?i.default.createElement(p.default,null):i.default.createElement(m.default,null))))}}]),t}(i.default.PureComponent);t.default=(0,E.default)([(0,_.default)({}),v.default,(0,s.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectSelect.choice}},function(e){return{}})],x)}}]);