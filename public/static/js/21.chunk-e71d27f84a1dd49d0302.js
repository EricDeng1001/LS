/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,20],{574:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(2)),r=a(n(1)),u=a(n(562)),l=n(257);function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,u.default)(function(e){return r.default.createElement(l.view,(0,o.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},576:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,"",""])},577:function(e,t,n){var o=n(576);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(o,r);o.locals&&(e.exports=o.locals)},578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p(n(11)),r=p(n(4)),u=p(n(10)),l=p(n(3)),a=p(n(5)),c=p(n(1)),d=n(16),i=n(564),s=p(n(261)),f=p(n(50));p(n(577));function p(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,a.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.wordCount,n=e.choosedWordCount,o=e.allWordCount;return c.default.createElement("div",{className:"container"},c.default.createElement(f.default,{info:"Unknown words:"+n+" of "+t+" = "+100*(n/t).toFixed(3)+"%;Total Num: "+o+" "}))}}]),t}(c.default.PureComponent),h=function(e){for(var t=[],n=0;n<e.length;n++)for(var o=0;o<e[n].length;o++)for(var r=0;r<e[n][o].length;r++)t.push(e[n][o][r]);return t},w=(0,i.createSelector)(h,function(e){for(var t=new s.default,n=0;n<e.length;n++)t.insert(e[n]);return t}),_=(0,i.createSelector)(w,function(e){return e.root.count});t.default=(0,d.connect)(function(e){return{allWordCount:h(e.EnglishArticle.paragraphedWords).length,wordCount:_(e.EnglishArticle.paragraphedWords),choosedWordCount:e.EnglishArticle.choosedWords.root.count}})(v)},579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=void 0;var o,r=n(578),u=(o=r)&&o.__esModule?o:{default:o};t.view=u.default}}]);