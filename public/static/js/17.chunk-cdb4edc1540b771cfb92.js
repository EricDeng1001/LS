/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{568:function(e,t,n){(t=e.exports=n(14)(!1)).push([e.i,"._29y5Wtse6tpcmfXFKlNoUX{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}.KDrMmD9hHxtI2Khtl40tB{width:100%;height:95%;display:flex;flex-direction:row}.KDrMmD9hHxtI2Khtl40tB ._3AHcdEdYnMabz_ubcw25Ta{width:30%;margin-right:1%}.KDrMmD9hHxtI2Khtl40tB ._28qU3NDRQkYYbrml0Jlc1m{width:68%;border-right:2px dashed #000;margin-right:1%}.wPYw_m6iGVkjNN4BXw_fU{position:absolute;bottom:0;width:100%;height:5%}",""]),t.locals={HUD:"_29y5Wtse6tpcmfXFKlNoUX",wrapper:"KDrMmD9hHxtI2Khtl40tB",rightPane:"_3AHcdEdYnMabz_ubcw25Ta",leftPane:"_28qU3NDRQkYYbrml0Jlc1m",controlPane:"wPYw_m6iGVkjNN4BXw_fU"}},569:function(e,t,n){var a=n(568);"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(13)(a,s);a.locals&&(e.exports=a.locals)},570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=N(n(2)),s=N(n(480)),o=N(n(11)),i=N(n(4)),l=N(n(10)),r=N(n(3)),d=N(n(5)),u=N(n(1)),c=n(19),f=n(17),m=n(475),h=N(n(569)),p=(N(n(33)),N(n(139))),g=N(n(140)),w=N(n(492)),y=N(n(489)),v=N(n(488)),S=N(n(487)),b=(N(n(491)),N(n(490)),n(503)),E=n(224),Q=n(228),k=n(510),x=N(n(478)),_=(N(n(474)),N(n(473))),q=N(n(220)),A=N(n(472));function N(e){return e&&e.__esModule?e:{default:e}}var W=function(e){function t(e){(0,i.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.loadQuestions=function(){n.props.loadQuestions({url:"/api/getQuestion",body:{username:n.props.username,lock:0,articleId:0},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},n.nextStep=function(){n.setState({processStep:n.state.processStep+1})},n.confirm=function(){n.nextStep()},n.quit=function(){for(var e=0;e<questions.length;e++)unlockAndHide(questions[e].questionId);hideAllTranslate(),n.props.history.goBack()},n.doMore=function(){var e=n.props,t=e.unlockAndHide,a=e.loadContent,s=e.questions,o=e.hideAllTranslate;a(),n.loadQuestions();for(var i=0;i<s.length;i++)t(s[i].questionId);o(),n.setState({processStep:0,displayByWords:!0})},n.submitQuestions=function(){var e=n.props,t=e.username,a=e.questions,s=e.articleId,o=e.submitQuestionState,i=e.submiting,l=e.lockAndShow,r=o.resolved;if(!i){for(var d="",u=0;u<a.length;u++)a[u].choosed!==a[u].rightKey&&(d+=a[u].questionId+" ");if(n.props.submitQuestions({url:"/api/recordWrongQuestion",body:{username:t,article_id:s,wrong_question_ids:d,time:r+1}}),0==(r+1&1))for(u=0;u<a.length;u++)l(a[u].questionId)}},n.actions=[n.submitQuestions,e.translateWords,function(){n.confirm(),n.setState({displayByWords:!1})},function(){e.translateSentences(),n.confirm()},function(){e.hideTranslate(),n.confirm()},n.submitQuestions,[n.confirm,e.translateAll],[n.quit,n.doMore]],n.texts=["submit","translate words","confirm","translate sentences","confirm","submit",["confirm","translate all"],["end","do more"]],n.describes=["read this page, and try to answer the questions in right, and then submit.","choose your unknown words","read the explaination","choose the sentences you do not understand well","check all translates again","do these questions again","check your answers and see analysises","want to do more?"],n.state={processStep:0,displayByWords:!0},n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.props.loadContent(),this.loadQuestions()}},{key:"render",value:function(){var e,t=this,n=this.state.processStep,a=this.props,o=a.translateWordsState,i=(a.submitQuestionState,a.loadQuestionState),l=a.translateWords,r=(a.translateSentences,a.loadArticleState),d=a.loadContent,c=a.ined,f=this.state.displayByWords,_="",q=[],A=[];if(Array.isArray(this.texts[n])){var N=(0,s.default)(this.actions[n]);e=N[0],q=N.slice(1);var W=(0,s.default)(this.texts[n]);_=W[0],A=W.slice(1),e={action:e,text:_},q=(0,x.default)({action:q,text:A})}else e={action:this.actions[n],text:this.texts[n]};return u.default.createElement(u.default.Fragment,null,u.default.createElement(m.Prompt,{when:0!==n&&n!==this.actions.length-1,message:"you need to do it again, are you sure to quit?"}),u.default.createElement("div",{className:h.default.HUD},"Step ",n+1,": ",this.describes[n]),u.default.createElement("div",{className:h.default.wrapper},u.default.createElement("div",{className:h.default.leftPane},u.default.createElement(w.default,{loading:r.pending,wasLoaded:r.resolved,lastFailed:r.lastFailed,reloader:d,center:!0},u.default.createElement(y.default,{play:c},u.default.createElement(Q.view,{displayByWords:f})))),u.default.createElement("div",{className:h.default.rightPane},function(){switch(n){case 0:case 5:case 6:return u.default.createElement(w.default,{loading:i.pending,wasLoaded:i.resolved,lastFailed:i.lastFailed,reloader:t.loadQuestions,center:!0},u.default.createElement(v.default,{play:c},u.default.createElement(E.view,{submiter:t.submitQuestions,loader:t.loadQuestions})));case 1:return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"makeLoadingCenter"},u.default.createElement(w.default,{center:!0,loading:o.pending,lastFailed:o.lastFailed,wasLoaded:o.resolved,reloader:l,info:"Click on the word you don't know"})));case 2:case 4:return u.default.createElement(k.view,null);case 3:return u.default.createElement(p.default,{info:"Click on the sentence you don't know"});case 7:return u.default.createElement(b.view,null)}}())),u.default.createElement("div",{className:h.default.controlPane},u.default.createElement(S.default,{play:c},u.default.createElement(g.default,{mainAction:e,additionalActions:q}))))}}]),t}(u.default.PureComponent);t.default=(0,A.default)([(0,_.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}},translateWordsState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),q.default,(0,c.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState}},function(e){return(0,a.default)({},(0,f.bindActionCreators)(E.actions,e),(0,f.bindActionCreators)(Q.actions,e))})],W)}}]);