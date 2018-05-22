/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=j(n(2)),l=j(n(570)),o=j(n(11)),s=j(n(4)),r=j(n(10)),i=j(n(3)),d=j(n(5)),u=j(n(1)),c=n(16),f=n(15),p=n(250),m=j(n(658)),h=(j(n(27)),j(n(50))),v=j(n(145)),g=j(n(254)),_=j(n(251)),y=j(n(253)),b=j(n(252)),S=(j(n(255)),j(n(574)),n(579)),w=n(259),x=n(260),E=n(656),I=n(143),C=n(256),k=j(n(569)),Q=(j(n(249)),j(n(248))),A=j(n(142)),N=j(n(247));function j(e){return e&&e.__esModule?e:{default:e}}var M=function(e){function t(e){(0,s.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:n.props.username,lock:0,article_id:n.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},n.nextStep=function(){n.setState({processStep:n.state.processStep+1})},n.confirm=function(){n.nextStep()},n.quit=function(){for(var e=0;e<questions.length;e++)unlockAndHide(questions[e].questionId);hideAllTranslate(),n.props.history.goBack()},n.doMore=function(){n.props.setLearningType("英语生词难句")},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.questions,l=e.articleId,o=e.submitQuestionState,s=e.submiting,r=e.lockAndShow,i=o.resolved;if(!s){for(var d="",u=0;u<a.length;u++)a[u].choosed!==a[u].rightKey&&(d+=a[u].questionId+" ");if(n.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:l.toString(),wrong_question_ids:d,time:i+1}}),0==(i+1&1))for(u=0;u<a.length;u++)r(a[u].questionId)}},n.function=function(){n.props.loadPortContent({url:"/api/eng_getUnit",body:{username:n.props.username}})},n.actions=[n.submitQuestions,e.translateWords,function(){n.confirm(),n.setState({displayByWords:!1})},function(){e.translateSentences(),n.confirm()},function(){e.hideTranslate(),n.confirm()},n.submitQuestions,[n.confirm,e.translateAll],[n.quit,n.doMore]],n.texts=["提交答案","翻译生词","下一步","翻译难句","下一步","提交答案",["查看统计","翻译全文"],["结束","进入生词难句"]],n.describes=["阅读文章，可标记不会的生词，并在右侧点击认为相对正确的题目答案","确认自己不明白的单词，确认全部点击后，提交系统，等待翻译","请阅读生词解释","选择自己不理解的句子，点击，提交系统，等待翻译","请阅读难句解释","再次完成试题，如果觉得刚才选的有误，可修改答案，点击确认后，查看正确答案和解析","请仔细阅读正确答案和解析，如需查看全文翻译，请点击翻译全文按钮，否则请点击查看统计","想做更多吗？"],n.state={processStep:0,displayByWords:!0},n}return(0,d.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.props.loadContent(),this.loadQuestions(),this.function()}},{key:"render",value:function(){var e,t=this,n=this.state.processStep,a=this.props,o=a.translateWordsState,s=(a.submitQuestionState,a.loadQuestionState),r=a.translateWords,i=(a.translateSentences,a.loadArticleState),d=a.loadContent,c=a.UnitAndCourse,f=(a.setLearningType,a.learningType,a.ined),I=this.state.displayByWords,C="",Q=[],A=[];if(Array.isArray(this.texts[n])){var N=(0,l.default)(this.actions[n]);e=N[0],Q=N.slice(1);var j=(0,l.default)(this.texts[n]);C=j[0],A=j.slice(1),e={action:e,text:C},Q=(0,k.default)({action:Q,text:A})}else e={action:this.actions[n],text:this.texts[n]};return u.default.createElement(u.default.Fragment,null,u.default.createElement(p.Prompt,{when:0!==n&&n!==this.actions.length-1,message:"你需要再做一遍，确定退出吗?"}),u.default.createElement("div",{className:m.default.HUD},"[Unit ",c.unit," Course ",c.course,"] Step ",n+1,": ",this.describes[n]),u.default.createElement("div",{className:m.default.wrapper},u.default.createElement("div",{className:m.default.leftPane},u.default.createElement(g.default,{loading:i.pending,wasLoaded:i.resolved,lastFailed:i.lastFailed,reloader:d,center:!0},u.default.createElement(_.default,{play:f},u.default.createElement(x.view,{displayByWords:I})))),u.default.createElement("div",{className:m.default.rightPane},function(){switch(n){case 0:case 5:case 6:return u.default.createElement(g.default,{loading:s.pending,wasLoaded:s.resolved,lastFailed:s.lastFailed,reloader:t.loadQuestions,center:!0},u.default.createElement(y.default,{play:f},u.default.createElement(w.view,{submiter:t.submitQuestions,loader:t.loadQuestions})));case 1:return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"makeLoadingCenter"},u.default.createElement(g.default,{center:!0,loading:o.pending,lastFailed:o.lastFailed,wasLoaded:o.resolved,reloader:r,info:"点击不认识的单词"})));case 2:case 4:return u.default.createElement(E.view,null);case 3:return u.default.createElement(h.default,{info:"点击不理解的句子"});case 7:return u.default.createElement(S.view,null)}}())),u.default.createElement("div",{className:m.default.controlPane},u.default.createElement(b.default,{play:f},u.default.createElement(v.default,{mainAction:e,additionalActions:Q}))))}}]),t}(u.default.PureComponent);t.default=(0,N.default)([(0,Q.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}},translateWordsState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),A.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState,articleId:e.EnglishArticle.articleId,UnitAndCourse:e.PortTest.content,learningType:e.LearningTypeSelect.learningType}},function(e){return(0,a.default)({},(0,f.bindActionCreators)(w.actions,e),(0,f.bindActionCreators)(x.actions,e),(0,f.bindActionCreators)(I.actions,e),(0,f.bindActionCreators)(C.actions,e))})],M)},650:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2OgU-ZcrYjDbe-s18Swiut{margin-bottom:20px;padding-bottom:10px;padding-left:4px;border-bottom:2px solid #d3d3d3}",""]),t.locals={oneItem:"_2OgU-ZcrYjDbe-s18Swiut"}},651:function(e,t,n){var a=n(650);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},652:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._16tTVG8O1DKb39h7ZlHfxj{font-size:22px;padding-left:1em;background-color:#000;color:#96d6de}.UeaKkuV7u2-PmZL_Dec4o{font-size:24px;font-weight:700;font-style:italic}._1r4HwCacOICNC1rNL00I-J,._2enePVoD-Mp6yv49Izd6dt,._3zjSAK2z3ndrDrb8a5lkBj,._8XyKrDCyTej038nsNiuS3{padding-left:2em;background-color:#96d6de;color:#000}",""]),t.locals={label:"_16tTVG8O1DKb39h7ZlHfxj",word:"UeaKkuV7u2-PmZL_Dec4o",example:"_3zjSAK2z3ndrDrb8a5lkBj",translate:"_1r4HwCacOICNC1rNL00I-J",exampleTranslate:"_8XyKrDCyTej038nsNiuS3",expression:"_2enePVoD-Mp6yv49Izd6dt"}},653:function(e,t,n){var a=n(652);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)},654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(11)),l=u(n(4)),o=u(n(10)),s=u(n(3)),r=u(n(5)),i=u(n(1)),d=u(n(653));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.example,a=e.translate,l=e.exampleTranslate,o=e.expression,s=e.pronouncation;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:d.default.word},t," |",s||"none","|"),i.default.createElement("div",{className:d.default.label},"Meaning:"),i.default.createElement("div",{className:d.default.translate},a||"none"),i.default.createElement("div",{className:d.default.label},"Example:"),i.default.createElement("div",{className:d.default.example},n||"none"),i.default.createElement("div",{className:d.default.label},"Meaning:"),i.default.createElement("div",{className:d.default.exampleTranslate},l||"none"),i.default.createElement("div",{className:d.default.label},"RegularExpression:"),i.default.createElement("div",{className:d.default.expression},o||"none"))}}]),t}(i.default.PureComponent);t.default=c},655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(n(11)),l=p(n(4)),o=p(n(10)),s=p(n(3)),r=p(n(5)),i=p(n(1)),d=n(16),u=p(n(654)),c=p(n(50)),f=p(n(651));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.words;return i.default.createElement("div",{className:"container"},0===e.length?i.default.createElement(c.default,{info:"You do not have unknown words, congratulations!"}):e.map(function(e){return i.default.createElement("div",{className:f.default.oneItem,key:e.word},i.default.createElement(u.default,e))}))}}]),t}(i.default.PureComponent);t.default=(0,d.connect)(function(e){return{words:e.EnglishArticle.wordsTranslates}})(m)},656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var a,l=n(655),o=(a=l)&&a.__esModule?a:{default:a};t.view=o.default},657:function(e,t,n){(t=e.exports=n(13)(!1)).push([e.i,"._2lIFl5fh-pzNfBA6vqSFCI{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._1B626kxwVHOvML1heuQS0I{width:100%;height:95%;display:flex;flex-direction:row}._1B626kxwVHOvML1heuQS0I ._3mLpIrkUBb9jY_vjJS0iei{width:30%;margin-right:1%;overflow-y:scroll}._1B626kxwVHOvML1heuQS0I ._256veLC127p9f056CMTsjz{width:68%;border-right:2px dashed #000;margin-right:1%;overflow-y:scroll}._1siY0Dhoi5nQGhDPmWbdU3{position:absolute;bottom:0;width:100%;height:5%}",""]),t.locals={HUD:"_2lIFl5fh-pzNfBA6vqSFCI",wrapper:"_1B626kxwVHOvML1heuQS0I",rightPane:"_3mLpIrkUBb9jY_vjJS0iei",leftPane:"_256veLC127p9f056CMTsjz",controlPane:"_1siY0Dhoi5nQGhDPmWbdU3"}},658:function(e,t,n){var a=n(657);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,l);a.locals&&(e.exports=a.locals)}}]);