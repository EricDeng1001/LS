import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
// import WriteGraph from 'UI/WriteGraph';
// import Highcharts from 'react-highcharts';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class UITest extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      getArticleId: false,
    }
  }

  componentDidMount(){
    // this.loadArticleId();
    // this.loadShengCi();
    this.loadNanJu();
  }

  componentWillMount(){
    this.loadArticleId();
  }

  loadShengCi = () => {
    this.props.loadPortContent({
      url: "/api/eng_getUserWord",
      body: {
        username:  this.props.username,
        ariticleId: 18,
        // articleId: this.props.articleId2,
      }
    })
  }

  loadNanJu = () => {
    this.props.loadPortContent3({
      url: "/api/eng_engToCh",
      body: {
        username:  this.props.username,
        articleId: 18,
        // articleId: this.props.articleId2,
      }
    });
  }

  loadArticleId = () => {
    this.props.loadPortContent2({
      url: "/api/eng_getArticleId",
      body: {
        username:  this.props.username,
      }
    });
    this.setState({ getArticleId: true });
  }

  render(){

    const {
      articleId,
      articleId2,
      shengci,
      nanju,
    } = this.props;

    console.log(articleId2);

    return (
      <React.Fragment>
        <div>
          <div className={style.pageTitle}>本课生词：</div>
          <br/>
          <div>
            {
              articleId2==undefined?null:
              <Button text="test" onClick = {() => {this.loadShengCi()}} />
            }
          </div>
          <div className={style.chtoengall}>
            {
              shengci[0] == undefined?null:
              shengci.map((word, key)=>
              <div key = {key} >
                { word.word_l }
                <br/>
                { word.translate }
              </div>
              )
            }
          </div>

          <br/>



          <br/>
          <div className={style.pageTitle}>本课难句：</div>
          <br/>
          <div className={style.chtoengall}>
          {
            nanju == undefined?null:
            nanju.map((sentence, key)=>
            <div key = {key} >
              { sentence.english }
              <br/>
              { sentence.chinese }
            </div>
            )
          }
        </div>
          <br/>

        </div>

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
      shengci: state.PortTest.content,
      nanju: state.PortTest.content3,
      articleId2: state.PortTest.content2.pre_artid,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UITest
);
