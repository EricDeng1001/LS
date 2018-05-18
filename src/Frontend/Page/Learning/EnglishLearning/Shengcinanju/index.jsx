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
    this.function();
  }

    function = () => {
      this.props.loadPortContent({
        url: "/api/eng_getUserWord",
        body: {
          username:  this.props.username,
          ariticleId: this.props.articleId,
        }
      })
    }


  render(){

    const {
      setLearningType,
      learningType,
      content,
    } = this.props;

    // console.log(this.props.articleId);

    return(
      <React.Fragment>
        <div>
          <div className={style.pageTitle}>本课生词：</div>
          <br/>

          {
            content == undefined?null:
            content.map((word, key)=>
            <div key = {key} >
              { word.word_l }
              <br/>
              { word.translate }
            </div>
            )
          }

          <br/>
          <div className={style.pageTitle}>本课难句：</div>
          <br/>
          暂无
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
      content: state.PortTest.content,
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
