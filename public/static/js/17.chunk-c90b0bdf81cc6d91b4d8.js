/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{561:function(e,t,n){(t=e.exports=n(14)(!1)).push([e.i,"._1D3JovJRlbA8cupThfekim{font-size:20px;line-height:40px}._3QNJ4YBCq0kllTXZBfec8x{padding-top:10px;padding-left:10px;font-size:30px;text-align:center;color:blue}._1jvQxF87C3q6NYzUk08T34{padding-left:30px;font-size:25px;color:orange}._2MyDikyhsjDZnJlJQaiRnO{color:red;white-space:nowrap}",""]),t.locals={help:"_1D3JovJRlbA8cupThfekim",title:"_3QNJ4YBCq0kllTXZBfec8x",part:"_1jvQxF87C3q6NYzUk08T34",qiangdiao:"_2MyDikyhsjDZnJlJQaiRnO"}},562:function(e,t,n){var a=n(561);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(13)(a,l);a.locals&&(e.exports=a.locals)},563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(11)),l=d(n(4)),o=d(n(10)),i=d(n(3)),u=d(n(5)),s=d(n(1)),r=d(n(562));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return(0,l.default)(this,t),(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:r.default.help},s.default.createElement("h4",{className:r.default.title}," 逻辑科目学习指南 "),s.default.createElement("span",{className:r.default.part}," 水平测试 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"用户首次进行逻辑科目的学习时，系统会强制进行测试"),s.default.createElement("li",null,"完成入口测试后，用户可以查看测试的正确率统计数据"),s.default.createElement("li",null,"只有完成入口测试后才可以进入学习，学习的章节内容与入口测试的做题情况有关")),s.default.createElement("span",{className:r.default.part}," 进入学习 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"每一单元的学习分为四个部分：知识点精要、重点题型、强化练习以及单元测试"),s.default.createElement("li",null,"知识点精要是对本单元知识点的详细介绍"),s.default.createElement("li",null,"重点题型涵盖本单元涉及到所有小类的题目"),s.default.createElement("li",null,"强化练习是对本单元学习知识的巩固"),s.default.createElement("li",null,"单元测试是用户对本单元所学习内容的自我检测,",s.default.createElement("span",{style:{color:"red"}},"只有单元测试正确率在三分之二及其以上，用户才可以进行下一章节的学习；否则用户需要重新学习本章节，直到测试正确率达到三分之二及其以上"))),s.default.createElement("span",{className:r.default.part}," 复习 "),s.default.createElement("br",null),s.default.createElement("ol",null,s.default.createElement("li",null,"复习部分可以查看用户之前所学过的所有课程内容")))}}]),t}(s.default.PureComponent);t.default=c},564:function(e,t,n){(t=e.exports=n(14)(!1)).push([e.i,"._1TMgdPH8EBNexxZWwRtoU6{font-family:cursive;font-size:30px;color:blue;text-align:center}._24pbPQX2_xI7dGn_OIERUj{font-size:25px;color:red;text-align:center}._33h4Yfw8qWcjTnsYMC4M0R{font-size:22px;color:orange;line-height:45px}._2NPEngXw5OCOvbozkCgvAX{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._3KH3YlyWflV-QDDbxs9H_H{position:absolute;left:45%}",""]),t.locals={pageTitle:"_1TMgdPH8EBNexxZWwRtoU6",dalei:"_24pbPQX2_xI7dGn_OIERUj",logic_knowledge_title:"_33h4Yfw8qWcjTnsYMC4M0R",HUD:"_2NPEngXw5OCOvbozkCgvAX",button:"_3KH3YlyWflV-QDDbxs9H_H"}},565:function(e,t,n){var a=n(564);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(13)(a,l);a.locals&&(e.exports=a.locals)},566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=S(n(2)),l=S(n(11)),o=S(n(4)),i=S(n(10)),u=S(n(3)),s=S(n(5)),r=S(n(1)),d=n(18),c=n(17),f=n(489),p=S(n(565)),m=S(n(29)),h=S(n(140)),g=(S(n(142)),S(n(506))),_=(S(n(503)),S(n(502))),v=(S(n(501)),S(n(505)),S(n(504))),b=n(227),x=n(226),E=(S(n(229)),S(n(143)),S(n(141))),y=S(n(488)),C=S(n(487)),N=S(n(224)),k=S(n(486));function S(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadPortContent({url:"/api/logicCeshi",body:{username:n.props.username}}),n.props.loadQuestions({url:"/api/logicCeshi",body:{username:n.props.username},parser:function(e){for(var t=[],n=0;n<e.timu.length;n++)e.timu[n].map(function(e){return t.push(e)});return t.map(function(e){return{questionId:e.id,options:[e.op_one,e.op_two,e.op_three,e.op_four,e.op_five],rightKey:(0,E.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.content,l=e.questions,o=e.submitQuestionState,i=e.submiting,u=e.lockAndShow;console.log(l);o.resolved;if(!i){for(var s="",r="",d=0;d<l.length;d++)s+=l[d].questionId+"*",l[d].choosed!==l[d].rightKey&&(r+="1*"),l[d].choosed==l[d].rightKey&&(r+="0*");console.log(t,a.chapter_name,s,r),n.props.submitQuestions({url:"/api/logicCeShiTongJi",body:{username:t,dalei:a.chapter_name,question_id:s,RightOrWrong:r}});for(d=0;d<l.length;d++)u(l[d].questionId)}},n.questions=[],n.state={end:!1},n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"render",value:function(){var e=this.state.end,t=this.props,n=(t.submitQuestionState,t.loadQuestionState),a=(t.loadContent,t.loadContentState,t.ined),l=t.questions,o=t.content;t.setChoice;return console.log(l),r.default.createElement(r.default.Fragment,null,r.default.createElement(f.Prompt,{when:0==e,message:"you need to do it again, are you sure to quit?"}),1==o.flag?r.default.createElement("div",null,r.default.createElement("div",{className:p.default.pageTitle}," 单元测试 "),r.default.createElement("div",{className:p.default.logic_knowledge},r.default.createElement(g.default,{loading:n.pending,wasLoaded:n.resolved,lastFailed:n.lastFailed,reloader:this.loadQuestions,center:!0},r.default.createElement(_.default,{play:a},r.default.createElement("div",null,r.default.createElement(b.view,{loader:this.loadQuestions,subject:"logic_test"}),r.default.createElement(m.default,{className:p.default.button,text:"确认提交",onClick:this.submitQuestions})))))):2==o.flag?r.default.createElement(h.default,{info:"您还没有完成入口测试，请先完成入口测试！"}):3==o.flag?r.default.createElement(h.default,{info:"您还没有完成重点习题，请先完成重点习题！"}):r.default.createElement(h.default,{info:"您还没有完成强化练习，请先完成强化练习！"}))}}]),t}(r.default.PureComponent);t.default=(0,k.default)([(0,C.default)({submitQuestionState:{onResolved:function(){},onRejected:function(){this.props.alert("失败")}}}),(0,y.default)({logined:{satisfy:function(e){return!0===e},block:function(){var e=this.props,t=e.openWindow,n=e.history,a=e.closeMask,l=e.openMask;t(v.default,{width:"380px",height:"300px",position:{top:"calc( 50% - 190px)",left:"calc( 50% - 150px)"},onCancel:function(){return n.goBack()||a()},onSuccess:a}),l()}}}),N.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,content:e.PortTest.content,loadContentState:e.PortTest.loadState}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(b.actions,e),(0,c.bindActionCreators)(x.actions,e))})],j)},567:function(e,t,n){(t=e.exports=n(14)(!1)).push([e.i,".tsEPlYGh9vFjKdq811Xsp{font-family:cursive;font-size:30px;color:blue;text-align:center}._1Fd-Ru8Niiv1-l7GSGEAfc{font-size:25px;color:red;text-align:center}._2bUmliGGxVQY8RXx-YkCtf{font-size:22px;color:orange;line-height:45px}.dHNVQTPDjdhzAdn5A9lmY{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._1P-u8svdoHqtcoaPlrcgjS{position:absolute;left:45%}",""]),t.locals={pageTitle:"tsEPlYGh9vFjKdq811Xsp",dalei:"_1Fd-Ru8Niiv1-l7GSGEAfc",logic_knowledge_title:"_2bUmliGGxVQY8RXx-YkCtf",HUD:"dHNVQTPDjdhzAdn5A9lmY",button:"_1P-u8svdoHqtcoaPlrcgjS"}},568:function(e,t,n){var a=n(567);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(13)(a,l);a.locals&&(e.exports=a.locals)},569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=S(n(2)),l=S(n(11)),o=S(n(4)),i=S(n(10)),u=S(n(3)),s=S(n(5)),r=S(n(1)),d=n(18),c=n(17),f=n(489),p=S(n(568)),m=S(n(29)),h=S(n(140)),g=(S(n(142)),S(n(506))),_=(S(n(503)),S(n(502))),v=(S(n(501)),S(n(505)),S(n(504))),b=n(227),x=n(226),E=(S(n(229)),S(n(143)),S(n(141))),y=S(n(488)),C=S(n(487)),N=S(n(224)),k=S(n(486));function S(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadPortContent({url:"/api/logicQianghua",body:{username:n.props.username}}),n.props.loadQuestions({url:"/api/logicQianghua",body:{username:n.props.username},parser:function(e){for(var t=[],n=0;n<e.timu.length;n++)e.timu[n].map(function(e){return t.push(e)});return t.map(function(e){return{questionId:e.id,options:[e.op_one,e.op_two,e.op_three,e.op_four,e.op_five],rightKey:(0,E.default)(e.answer),question:e.question,analysis:e.analysis}})}})},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.content,l=e.questions,o=e.submitQuestionState,i=e.submiting,u=e.lockAndShow;console.log(l);o.resolved;if(!i){for(var s="",r="",d=0;d<l.length;d++)s+=l[d].questionId+"*",l[d].choosed!==l[d].rightKey&&(r+="1*"),l[d].choosed==l[d].rightKey&&(r+="0*");console.log(t,a.chapter_name,s,r),n.props.submitQuestions({url:"/api/logicQianghuaTongji",body:{username:t,dalei:a.chapter_name,question_id:s,RightOrWrong:r}});for(d=0;d<l.length;d++)u(l[d].questionId)}},n.questions=[],n.state={end:!1},n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"render",value:function(){var e=this.state.end,t=this.props,n=(t.submitQuestionState,t.loadQuestionState),a=(t.loadContent,t.loadContentState,t.ined),l=(t.questions,t.content);t.setChoice;return console.log(this.props),r.default.createElement(r.default.Fragment,null,r.default.createElement(f.Prompt,{when:0==e,message:"you need to do it again, are you sure to quit?"}),1==l.flag?r.default.createElement("div",null,r.default.createElement("div",{className:p.default.pageTitle}," 强化练习 "),r.default.createElement("div",{className:p.default.logic_knowledge},r.default.createElement(g.default,{loading:n.pending,wasLoaded:n.resolved,lastFailed:n.lastFailed,reloader:this.loadQuestions,center:!0},r.default.createElement(_.default,{play:a},r.default.createElement("div",null,r.default.createElement("h4",{className:p.default.dalei}," ",l.chapter_name," "),r.default.createElement(b.view,{loader:this.loadQuestions,subject:"logic_test"}),r.default.createElement(m.default,{className:p.default.button,text:"确认提交",onClick:this.submitQuestions})))))):2==l.flag?r.default.createElement(h.default,{info:"您还没有完成入口测试，请先完成入口测试！"}):r.default.createElement(h.default,{info:"您还没有完成重点习题，请先完成重点习题！"}))}}]),t}(r.default.PureComponent);t.default=(0,k.default)([(0,C.default)({submitQuestionState:{onResolved:function(){},onRejected:function(){this.props.alert("失败")}}}),(0,y.default)({logined:{satisfy:function(e){return!0===e},block:function(){var e=this.props,t=e.openWindow,n=e.history,a=e.closeMask,l=e.openMask;t(v.default,{width:"380px",height:"300px",position:{top:"calc( 50% - 190px)",left:"calc( 50% - 150px)"},onCancel:function(){return n.goBack()||a()},onSuccess:a}),l()}}}),N.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,content:e.PortTest.content,loadContentState:e.PortTest.loadState}},function(e){return(0,a.default)({},(0,c.bindActionCreators)(b.actions,e),(0,c.bindActionCreators)(x.actions,e))})],j)},574:function(e,t,n){(t=e.exports=n(14)(!1)).push([e.i,'.O82z5_DcqEuW8378-akJe{height:100%;width:100%}._2bt4FLWudq-VGKbApQTBth,._2txe_Z6T3dqtLLJXGljb7V,.cdjpDZPGh-HKI9NZY4F-S,.hlydcMW_G3jY2S2DIavR_{position:absolute;width:15%;height:50%;top:25%;font-size:30px;text-align:center;border:1px solid;border-radius:4px;border-color:#5379c6;background-color:orange;background:url("/static/images/background.jpg")}._2bt4FLWudq-VGKbApQTBth .NkZ4zpGdPt09cCWNnBx_G,._2txe_Z6T3dqtLLJXGljb7V .NkZ4zpGdPt09cCWNnBx_G,.cdjpDZPGh-HKI9NZY4F-S .NkZ4zpGdPt09cCWNnBx_G,.hlydcMW_G3jY2S2DIavR_ .NkZ4zpGdPt09cCWNnBx_G{position:relative;height:70%;top:15%}._2bt4FLWudq-VGKbApQTBth .NkZ4zpGdPt09cCWNnBx_G .LtRrvIx67tfQVl8efgDHK,._2txe_Z6T3dqtLLJXGljb7V .NkZ4zpGdPt09cCWNnBx_G .LtRrvIx67tfQVl8efgDHK,.cdjpDZPGh-HKI9NZY4F-S .NkZ4zpGdPt09cCWNnBx_G .LtRrvIx67tfQVl8efgDHK,.hlydcMW_G3jY2S2DIavR_ .NkZ4zpGdPt09cCWNnBx_G .LtRrvIx67tfQVl8efgDHK{border-radius:50%}._2bt4FLWudq-VGKbApQTBth{position:absolute;left:8%}.cdjpDZPGh-HKI9NZY4F-S{left:31%}._2txe_Z6T3dqtLLJXGljb7V{left:54%}.hlydcMW_G3jY2S2DIavR_{left:77%}._1-2hPSadnYy1Nj63VgBrRR{color:#000}.pHN-E1i6s3ftGPpypWYpz{color:blue}',""]),t.locals={whole:"O82z5_DcqEuW8378-akJe",fangkuang1:"_2bt4FLWudq-VGKbApQTBth",fangkuang2:"cdjpDZPGh-HKI9NZY4F-S",fangkuang3:"_2txe_Z6T3dqtLLJXGljb7V",fangkuang4:"hlydcMW_G3jY2S2DIavR_",tupianPosition:"NkZ4zpGdPt09cCWNnBx_G",tupian:"LtRrvIx67tfQVl8efgDHK",normal_type:"_1-2hPSadnYy1Nj63VgBrRR",choosed_type:"pHN-E1i6s3ftGPpypWYpz"}},575:function(e,t,n){var a=n(574);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(13)(a,l);a.locals&&(e.exports=a.locals)},576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=_(n(11)),l=_(n(4)),o=_(n(10)),i=_(n(3)),u=_(n(5)),s=_(n(1)),r=n(18),d=(n(17),_(n(575))),c=_(n(530)),f=_(n(529)),p=_(n(569)),m=_(n(566)),h=(_(n(488)),_(n(487)),_(n(224))),g=_(n(486));function _(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={typeselect:!0,zhishidian:!1,zhongdian:!1,qianghua:!1,ceshi:!1,changeColor1:!1,changeColor2:!1,changeColor3:!1,changeColor4:!1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=[];return this.state.changeColor1?t[0]=d.default.choosed_type:t[0]=d.default.normal_type,this.state.changeColor2?t[1]=d.default.choosed_type:t[1]=d.default.normal_type,this.state.changeColor3?t[2]=d.default.choosed_type:t[2]=d.default.normal_type,this.state.changeColor4?t[3]=d.default.choosed_type:t[3]=d.default.normal_type,s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:d.default.whole},this.state.typeselect?s.default.createElement("div",null,s.default.createElement("div",{className:d.default.fangkuang1},s.default.createElement("div",{className:d.default.tupianPosition},s.default.createElement("img",{className:d.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:t[0],onMouseOver:function(){return e.setState({changeColor1:!0})},onMouseLeave:function(){return e.setState({changeColor1:!1})},onClick:function(){return e.setState({typeselect:!1,zhishidian:!0,zhongdian:!1,qianghua:!1,ceshi:!1})}},"点击进入",s.default.createElement("br",null),"知识点精要")),s.default.createElement("div",{className:d.default.fangkuang2},s.default.createElement("div",{className:d.default.tupianPosition},s.default.createElement("img",{className:d.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:t[1],onMouseOver:function(){return e.setState({changeColor2:!0})},onMouseLeave:function(){return e.setState({changeColor2:!1})},onClick:function(){return e.setState({typeselect:!1,zhishidian:!1,zhongdian:!0,qianghua:!1,ceshi:!1})}},"点击进入",s.default.createElement("br",null),"重点习题")),s.default.createElement("div",{className:d.default.fangkuang3},s.default.createElement("div",{className:d.default.tupianPosition},s.default.createElement("img",{className:d.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:t[2],onMouseOver:function(){return e.setState({changeColor3:!0})},onMouseLeave:function(){return e.setState({changeColor3:!1})},onClick:function(){return e.setState({typeselect:!1,zhishidian:!1,zhongdian:!1,qianghua:!0,ceshi:!1})}},"点击进入",s.default.createElement("br",null),"强化练习")),s.default.createElement("div",{className:d.default.fangkuang4},s.default.createElement("div",{className:d.default.tupianPosition},s.default.createElement("img",{className:d.default.tupian,src:"/static/images/admin.jpg"})),s.default.createElement("div",{className:t[3],onMouseOver:function(){return e.setState({changeColor4:!0})},onMouseLeave:function(){return e.setState({changeColor4:!1})},onClick:function(){return e.setState({typeselect:!1,zhishidian:!1,zhongdian:!1,qianghua:!1,ceshi:!0})}},"点击进入",s.default.createElement("br",null),"单元测试"))):this.state.zhishidian?s.default.createElement(c.default,null):this.state.zhongdian?s.default.createElement(f.default,null):this.state.qianghua?s.default.createElement(p.default,null):this.state.ceshi?s.default.createElement(m.default,null):null))}}]),t}(s.default.PureComponent);t.default=(0,g.default)([h.default,(0,r.connect)(function(e){return{}},function(e){return{}})],v)},577:function(e,t,n){(t=e.exports=n(14)(!1)).push([e.i,"._1zUOYaLveU3gwVpavB4X9f{height:100%;width:100%}._1Po89-hjdRZKQvbq-KVCzx{position:absolute;height:6%;width:100%;background-color:#5379c6;color:#fff;font-size:100%;align-items:center;font-family:Arvo}._8GXXd-eMnv7wonpMeVUS9{position:absolute;left:5%;font-size:25px}._13UTFlcUb6XunqI_HKKbYj{position:absolute;right:8%;font-size:25px}._1UoLnmcKncm3X7CarzNYix{position:absolute;top:6%;left:0;bottom:0;width:12%;background:#5379c6;font-size:25px;text-align:center}._2zzFlex8vw-dIRaum9rOb_{width:80px;height:80px;border-radius:50%}._3QkZ7Xjju9cLfsmCy5NbGC{color:#fff;font-size:20px}._1Lh4Y1kEzE1QjTbox4cxSy,._300xp2mbKWjguled8zLeKf{font-size:25px;padding-top:5px;padding-bottom:5px;color:#fff}._1Lh4Y1kEzE1QjTbox4cxSy{background:orange}.WO8D7L0F4MHn6DgjI_tqk{position:absolute;top:8%;left:12%;height:94%;width:88%;overflow-y:scroll}.WO8D7L0F4MHn6DgjI_tqk ._2F90rGhoUNrtRCt8txBsnt{display:block;position:absolute;text-align:center;font-size:20px;bottom:5%;left:40%}._2tRsuAFqCuqFfhewZoGbls{color:orange}._1SPCF2TKj8WLsinfzR7ZOA{color:#fff}",""]),t.locals={wholeLogicPage:"_1zUOYaLveU3gwVpavB4X9f",logicPageTitle:"_1Po89-hjdRZKQvbq-KVCzx",title:"_8GXXd-eMnv7wonpMeVUS9",goback:"_13UTFlcUb6XunqI_HKKbYj",subjectText:"_1UoLnmcKncm3X7CarzNYix",picture:"_2zzFlex8vw-dIRaum9rOb_",username:"_3QkZ7Xjju9cLfsmCy5NbGC",normalText:"_300xp2mbKWjguled8zLeKf",chosedText:"_1Lh4Y1kEzE1QjTbox4cxSy",mainContent:"WO8D7L0F4MHn6DgjI_tqk",bottomButton:"_2F90rGhoUNrtRCt8txBsnt",chosedLogin:"_2tRsuAFqCuqFfhewZoGbls",normalLogin:"_1SPCF2TKj8WLsinfzR7ZOA"}},578:function(e,t,n){var a=n(577);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(13)(a,l);a.locals&&(e.exports=a.locals)},579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(n(11)),l=E(n(4)),o=E(n(10)),i=E(n(3)),u=E(n(5)),s=E(n(1)),r=n(18),d=(n(17),n(489),E(n(578))),c=E(n(534)),f=E(n(576)),p=E(n(531)),m=E(n(563)),h=(E(n(29)),E(n(140))),g=(E(n(488)),E(n(487))),_=E(n(224)),v=E(n(486)),b=E(n(491)),x=n(230);function E(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.type=["入口测试","进入学习","开始复习","查看帮助"],n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.logined,a=e.newTo,l=e.choice;return s.default.createElement(s.default.Fragment,null,0==n?s.default.createElement(b.default,null):s.default.createElement("div",{className:d.default.wholeLogicPage},s.default.createElement("div",{className:d.default.logicPageTitle},s.default.createElement("div",{className:d.default.title}," 学习系统 "),s.default.createElement("div",{className:d.default.goback,onClick:function(){return history.back()}}," 返回 ")),s.default.createElement("div",{className:d.default.subjectText},s.default.createElement("br",null),s.default.createElement("img",{className:d.default.picture,src:"/static/images/admin.jpg"}),s.default.createElement("br",null),s.default.createElement("div",{className:d.default.username}," ",t," "),s.default.createElement("br",null),s.default.createElement(x.view,{text:this.type,normalStyle:d.default.normalText,choosedStyle:d.default.chosedText})),s.default.createElement("div",{className:d.default.mainContent},0==l?1==a[1]?s.default.createElement(c.default,null):s.default.createElement(h.default,{info:"您已经完成测试!"}):1==l?s.default.createElement(f.default,null):2==l?s.default.createElement(p.default,null):s.default.createElement(m.default,null))))}}]),t}(s.default.PureComponent);t.default=(0,v.default)([(0,g.default)({}),_.default,(0,r.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,newTo:e.UserManager.newTo,choice:e.SubjectSelect.choice}},function(e){return{}})],y)}}]);