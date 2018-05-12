/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{560:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=A(a(2)),o=A(a(519)),l=A(a(19)),s=A(a(11)),r=A(a(4)),i=A(a(10)),d=A(a(3)),u=A(a(5)),c=A(a(1)),f=a(18),p=a(17),m=a(510),h=A(a(628)),v=(A(a(30)),A(a(70))),g=A(a(142)),_=A(a(527)),w=A(a(523)),y=A(a(525)),b=A(a(524)),S=(A(a(528)),A(a(526)),a(551)),x=a(235),E=a(246),k=a(626),I=A(a(518)),Q=(A(a(509)),A(a(508))),N=A(a(232)),C=A(a(507));function A(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){(0,r.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.loadQuestions=function(){console.log((0,l.default)(a.props.articleId)),a.props.loadQuestions({url:"/api/eng_getQuestion",body:{username:a.props.username,lock:0,article_id:a.props.articleId},parser:function(e){return e.map(function(e){return{questionId:e.questionid,options:e.choice,rightKey:e.key,question:e.question,analysis:e.analysis}})}})},a.nextStep=function(){a.setState({processStep:a.state.processStep+1})},a.confirm=function(){a.nextStep()},a.quit=function(){for(var e=0;e<questions.length;e++)unlockAndHide(questions[e].questionId);hideAllTranslate(),a.props.history.goBack()},a.doMore=function(){var e=a.props,t=e.unlockAndHide,n=e.loadContent,o=e.questions,l=e.hideAllTranslate;n(),a.loadQuestions();for(var s=0;s<o.length;s++)t(o[s].questionId);l(),a.setState({processStep:0,displayByWords:!0})},a.submitQuestions=function(){var e=a.props,t=e.username,n=e.questions,o=e.articleId,l=e.submitQuestionState,s=e.submiting,r=e.lockAndShow,i=l.resolved;if(!s){for(var d="",u=0;u<n.length;u++)n[u].choosed!==n[u].rightKey&&(d+=n[u].questionId+" ");if(a.props.submitQuestions({url:"/api/eng_recordWrongQuestion",body:{username:t,article_id:o.toString(),wrong_question_ids:d,time:i+1}}),0==(i+1&1))for(u=0;u<n.length;u++)r(n[u].questionId)}},a.actions=[a.submitQuestions,e.translateWords,function(){a.confirm(),a.setState({displayByWords:!1})},function(){e.translateSentences(),a.confirm()},function(){e.hideTranslate(),a.confirm()},a.submitQuestions,[a.confirm,e.translateAll],[a.quit,a.doMore]],a.texts=["submit","translate words","confirm","translate sentences","confirm","submit",["confirm","translate all"],["end","do more"]],a.describes=["read this page, and try to answer the questions in right, and then submit.","choose your unknown words","read the explaination","choose the sentences you do not understand well","check all translates again","do these questions again","check your answers and see analysises","want to do more?"],a.state={processStep:0,displayByWords:!0},a}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.loadContent(),this.loadQuestions()}},{key:"render",value:function(){var e,t=this,a=this.state.processStep,n=this.props,l=n.translateWordsState,s=(n.submitQuestionState,n.loadQuestionState),r=n.translateWords,i=(n.translateSentences,n.loadArticleState),d=n.loadContent,u=n.ined,f=this.state.displayByWords,p="",Q=[],N=[];if(Array.isArray(this.texts[a])){var C=(0,o.default)(this.actions[a]);e=C[0],Q=C.slice(1);var A=(0,o.default)(this.texts[a]);p=A[0],N=A.slice(1),e={action:e,text:p},Q=(0,I.default)({action:Q,text:N})}else e={action:this.actions[a],text:this.texts[a]};return c.default.createElement(c.default.Fragment,null,c.default.createElement(m.Prompt,{when:0!==a&&a!==this.actions.length-1,message:"you need to do it again, are you sure to quit?"}),c.default.createElement("div",{className:h.default.HUD},"Step ",a+1,": ",this.describes[a]),c.default.createElement("div",{className:h.default.wrapper},c.default.createElement("div",{className:h.default.leftPane},c.default.createElement(_.default,{loading:i.pending,wasLoaded:i.resolved,lastFailed:i.lastFailed,reloader:d,center:!0},c.default.createElement(w.default,{play:u},c.default.createElement(E.view,{displayByWords:f})))),c.default.createElement("div",{className:h.default.rightPane},function(){switch(a){case 0:case 5:case 6:return c.default.createElement(_.default,{loading:s.pending,wasLoaded:s.resolved,lastFailed:s.lastFailed,reloader:t.loadQuestions,center:!0},c.default.createElement(y.default,{play:u},c.default.createElement(x.view,{submiter:t.submitQuestions,loader:t.loadQuestions})));case 1:return c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"makeLoadingCenter"},c.default.createElement(_.default,{center:!0,loading:l.pending,lastFailed:l.lastFailed,wasLoaded:l.resolved,reloader:r,info:"Click on the word you don't know"})));case 2:case 4:return c.default.createElement(k.view,null);case 3:return c.default.createElement(v.default,{info:"Click on the sentence you don't know"});case 7:return c.default.createElement(S.view,null)}}())),c.default.createElement("div",{className:h.default.controlPane},c.default.createElement(b.default,{play:u},c.default.createElement(g.default,{mainAction:e,additionalActions:Q}))))}}]),t}(c.default.PureComponent);t.default=(0,C.default)([(0,Q.default)({submitQuestionState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}},translateWordsState:{onResolved:function(){this.nextStep()},onRejected:function(){this.props.alert("失败")}}}),N.default,(0,f.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,questions:e.SingleOptionQuestions.content,showSentencesTranslates:e.EnglishArticle.showSentencesTranslates,loadQuestionState:e.SingleOptionQuestions.loadState,submitQuestionState:e.SingleOptionQuestions.submitState,loadArticleState:e.EnglishArticle.loadState,translateWordsState:e.EnglishArticle.translateWordsState,articleId:e.EnglishArticle.articleId}},function(e){return(0,n.default)({},(0,p.bindActionCreators)(x.actions,e),(0,p.bindActionCreators)(E.actions,e))})],j)},620:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2OgU-ZcrYjDbe-s18Swiut{margin-bottom:20px;padding-bottom:10px;padding-left:4px;border-bottom:2px solid #d3d3d3}",""]),t.locals={oneItem:"_2OgU-ZcrYjDbe-s18Swiut"}},621:function(e,t,a){var n=a(620);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,o);n.locals&&(e.exports=n.locals)},622:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._16tTVG8O1DKb39h7ZlHfxj{font-size:22px;padding-left:1em;background-color:#000;color:#96d6de}.UeaKkuV7u2-PmZL_Dec4o{font-size:24px;font-weight:700;font-style:italic}._1r4HwCacOICNC1rNL00I-J,._2enePVoD-Mp6yv49Izd6dt,._3zjSAK2z3ndrDrb8a5lkBj,._8XyKrDCyTej038nsNiuS3{padding-left:2em;background-color:#96d6de;color:#000}",""]),t.locals={label:"_16tTVG8O1DKb39h7ZlHfxj",word:"UeaKkuV7u2-PmZL_Dec4o",example:"_3zjSAK2z3ndrDrb8a5lkBj",translate:"_1r4HwCacOICNC1rNL00I-J",exampleTranslate:"_8XyKrDCyTej038nsNiuS3",expression:"_2enePVoD-Mp6yv49Izd6dt"}},623:function(e,t,a){var n=a(622);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,o);n.locals&&(e.exports=n.locals)},624:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(11)),o=u(a(4)),l=u(a(10)),s=u(a(3)),r=u(a(5)),i=u(a(1)),d=u(a(623));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,r.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.word,a=e.example,n=e.translate,o=e.exampleTranslate,l=e.expression,s=e.pronouncation;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:d.default.word},t," |",s||"none","|"),i.default.createElement("div",{className:d.default.label},"Meaning:"),i.default.createElement("div",{className:d.default.translate},n||"none"),i.default.createElement("div",{className:d.default.label},"Example:"),i.default.createElement("div",{className:d.default.example},a||"none"),i.default.createElement("div",{className:d.default.label},"Meaning:"),i.default.createElement("div",{className:d.default.exampleTranslate},o||"none"),i.default.createElement("div",{className:d.default.label},"RegularExpression:"),i.default.createElement("div",{className:d.default.expression},l||"none"))}}]),t}(i.default.PureComponent);t.default=c},625:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(a(11)),o=p(a(4)),l=p(a(10)),s=p(a(3)),r=p(a(5)),i=p(a(1)),d=a(18),u=p(a(624)),c=p(a(70)),f=p(a(621));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,r.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.words;return i.default.createElement("div",{className:"container"},0===e.length?i.default.createElement(c.default,{info:"You do not have unknown words, congratulations!"}):e.map(function(e){return i.default.createElement("div",{className:f.default.oneItem,key:e.word},i.default.createElement(u.default,e))}))}}]),t}(i.default.PureComponent);t.default=(0,d.connect)(function(e){return{words:e.EnglishArticle.wordsTranslates}})(m)},626:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var n,o=a(625),l=(n=o)&&n.__esModule?n:{default:n};t.view=l.default},627:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2lIFl5fh-pzNfBA6vqSFCI{display:flex;height:5%;width:100%;background-color:#282c34;color:#fff;font-size:100%;justify-content:center;align-items:center;text-align:center;font-family:Arvo}._1B626kxwVHOvML1heuQS0I{width:100%;height:95%;display:flex;flex-direction:row}._1B626kxwVHOvML1heuQS0I ._3mLpIrkUBb9jY_vjJS0iei{width:30%;margin-right:1%;overflow-y:scroll}._1B626kxwVHOvML1heuQS0I ._256veLC127p9f056CMTsjz{width:68%;border-right:2px dashed #000;margin-right:1%;overflow-y:scroll}._1siY0Dhoi5nQGhDPmWbdU3{position:absolute;bottom:0;width:100%;height:5%}",""]),t.locals={HUD:"_2lIFl5fh-pzNfBA6vqSFCI",wrapper:"_1B626kxwVHOvML1heuQS0I",rightPane:"_3mLpIrkUBb9jY_vjJS0iei",leftPane:"_256veLC127p9f056CMTsjz",controlPane:"_1siY0Dhoi5nQGhDPmWbdU3"}},628:function(e,t,a){var n=a(627);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,o);n.locals&&(e.exports=n.locals)}}]);