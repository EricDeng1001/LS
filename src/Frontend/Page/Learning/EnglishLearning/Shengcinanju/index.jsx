import React from 'react';
import style from 'style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'UI/Button';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';


import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class Shengcinanju extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  componentDidMount(){
    // this.loadArticleId();
    this.loadShengCi();
    this.loadNanJu();
  }

  loadShengCi = () => {
    this.props.loadPortContent({
      url: "/api/eng_getUserWord",
      body: {
        username:  this.props.username,
        ariticleId: 18,
      }
    })
  }

  loadNanJu = () => {
    this.props.loadPortContent3({
      url: "/api/eng_engToCh",
      body: {
        username:  this.props.username,
        articleId: 18,
      }
    });
  }

  // loadArticleId = () => {
  //   this.props.loadPortContent2({
  //     url: "/api/eng_getArticleId",
  //     body: {
  //       username:  this.props.username,
  //     }
  //   })
  // }


  render(){

    const {
      setLearningType,
      learningType,
      articleId,
      // articleId2,
      shengci,
      nanju,
    } = this.props;

    // console.log(this.props.articleId2);
    // console.log(nanju);
    console.log(shengci);

    return(
      <React.Fragment>
        <div>
          <div className={style.pageTitle}>本课生词：</div>
          <br/>
            {
              shengci == undefined?null:
              shengci.map((word, key)=>
              <div key = {key} >
                { word.word_l }
                <br/>
                { word.translate }
              </div>
              )
            }

          <br/>



          <br/>
          <div className={style.pageTitle}>本课难句：</div>
          <br/>
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
          <br/>


          <Button text="进入汉译英" onClick = {() => {setLearningType("英语汉译英")}}/>
        </div>

      </React.Fragment>
    )
  }

}


export default applyHOCs([
  makePage,
  connect(
    state => ({
      learningType: state.LearningTypeSelect.learningType,
      username: state.UserManager.name,
      articleId: state.EnglishArticle.articleId,
      shengci: state.PortTest.content,
      nanju: state.PortTest.content3,
      // articleId2: state.PortTest.content2,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  Shengcinanju
);
// export default Shengcinanju
