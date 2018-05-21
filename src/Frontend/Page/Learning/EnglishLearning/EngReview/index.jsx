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

  render(){

    const {
      content,
    } = this.props;

    console.log(content);

    return(
      <React.Fragment>
        <div>

          <div className={style.pageTitle}>复习</div>
          <br/>

          {
            content == undefined?null:
            content.map((list, key)=>
            <div key = {key} ><li>
              Unit{list.unit} Course{list.course}
            </li></div>
            )
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
