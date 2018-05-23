import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class EngReview extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      showButton:-1,
      showReviewList: true,
      showWordAndSentence: false,
      showArticle: false,
    };
  }

  componentDidMount(){
    this.loadReviewList();
  }

  loadReviewList = () => {
    this.props.loadPortContent({
      url: "/api/eng_getReviewList",
      body: {
        username:  this.props.username,
      }
    })
  }

  changeButtonId = (showButton, key) => {
    if(showButton==-1) return key;
    else return -1;
  }

  render(){

    const {
      content,
    } = this.props;

    const{
      showButton,
      showReviewList,
      showWordAndSentence,
      showArticle,
    } = this.state;

    // console.log(content);

    return(
      <React.Fragment>
        <div>
          {
            showReviewList == true ?
            <div>

              <div className={style.pageTitle}>复习</div>
              <br/>

              {
                content == undefined?null:
                content.map((list, key)=>
                <div key = {key} >
                  <li
                    // style = {list == choice ? {"color":"blue"} : null}
                      onClick = {() => {this.setState({showButton: this.changeButtonId(showButton,key)})}}
                    >
                    Unit{list.unit} Course{list.course}
                  </li>
                  {
                    showButton != key ? null :
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button text="查看重点词汇、长难句"
                        onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: true, showArticle: false})}} />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button text="查看阅读文章"
                      onClick = {() => {this.setState({showReviewList: false , showWordAndSentence: false, showArticle: true})}} />
                    </div>
                  }
                  <br/>
                </div>
                )
              }

            </div>

            :
            showWordAndSentence == true ?
            <div>
              <p>重点词汇、长难句</p>
              <Button text="返回列表页面"
              onClick = {() =>  {this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})}} />
            </div>

            :
            showArticle == true ?
            <div>
              <p>英语文章</p>
              <Button text="返回列表页面"
              onClick = {() =>  {this.setState({showReviewList: true , showWordAndSentence: false, showArticle: false})}} />
            </div>

            :
            null









          }

        </div>

      </React.Fragment>
    )
  }




}


// export default EngReview
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
  EngReview
);
