import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import WriteGraph from 'UI/WriteGraph';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as EditText,
  actions as EditTextActions
} from 'Connected/EditText';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class UnitTest extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  componentDidMount(){
    this.function();
    // this.loadArticleId();
    // this.loadAllWordRate();
  }

// loadArticleId = () => {
//   this.props.loadPortContent({
//     url: "/api/eng_getArticleId",
//     body: {
//       username:  this.props.username,
//     }
//   })
// }
submitFile = () => {
const{
  username,
  choice
} = this.props;
console.log(username,choice,this.text)
//this.props.submitQuestions({
  //url: "/api/lunZhengFileUpload",
  //body: {
//     username: username,
//     choice: "管理类联考2010年真题",
//     text: this.text
//   }
// })
}

function = () => {
  this.props.loadPortContent({
    url: "/api/eng_getWordAndRecord",
    body: {
      username:  this.props.username,
      article_id: this.props.articleId,
      all_words: "{'hello','sunshine'}"
    }
  })
}

// loadAllWordRate = () => {
//   this.props.loadPortContent({
//     url: "/api/eng_getAllWordRate",
//     body: {
//       username:  this.props.username,
//     }
//   })
// }


  render(){

    const {
      content,
    } = this.props;

    console.log(content)

    return (
      <React.Fragment>
        <EditText/>

        {
            <div>
              {
                // content[0] == undefined?null:<p>{content[0].translate}</p>
                content[0] == undefined?null
                :
                content.map((translate, key)=>
                <div key = {key} >
                  { translate.translate }
                  <br/>
                </div>
                )
              }
             </div>
        }

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      articleId: state.EnglishArticle.articleId,
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UnitTest
);
