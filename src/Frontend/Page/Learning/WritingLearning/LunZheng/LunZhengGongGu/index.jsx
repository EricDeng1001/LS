import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as WriteContent,
  actions as WriteContentActions
} from 'Connected/WriteContent';
import {
  view as EditText,
  actions as EditTextActions
} from 'Connected/EditText';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZhengGongGu extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      uploadText: false,
      viewText: false,
      viewEgArticle: false
    }
  }

  loadGongguContent = ( choice ) => {
    this.props.loadWriteContents({
      url: "/api/lunZhengGongGuContent",
      body: {
        requestQuestion: choice
      }
    });
  }

  saveOrSubmitText = ( flag ) => {
    this.props.saveOrSubmitText({
      url: "/api/lunZhengSaveOrSubmitText",
      body: {
        username: this.props.username,
        choice: this.props.choice,
      //  text: ,
        saveOrSubmit: flag  // flag=0 暂存  , flag=1 提交
      }
    })
  }


  render(){
    const{
      choice,
      name,
      example_article
    } = this.props;
    return (
      <React.Fragment>
        <div className={style.title}>
          <div className={style.zhentiMingcheng}>{choice}</div>
          <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
        </div>

        <div className={style.option}>
          <div className = {style.egArticleText}>
            <span onClick={() => this.setState({uploadText: true , viewText: false , viewEgArticle: false})}> 上传文章 </span>&nbsp;&nbsp;&nbsp;
            <span onClick={() => this.setState({uploadText: false , viewText: true , viewEgArticle: false})}> 已传文章 </span>&nbsp;&nbsp;&nbsp;
            <span onClick = {() => this.setState({uploadText: false , viewText: false , viewEgArticle: true})}> 参考范文 </span>
          </div>

          <div className = {style.egArticle}>
          {
            this.state.uploadText ?
            <div>
              <EditText sizeStyle = {style.inputBox}/>
              <div className = {style.saveOrSubmit}>
              <button onClick = {() => this.saveOrSubmitText(0)}> 暂存文本 </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick = {() => this.saveOrSubmitText(1)}> 确认提交 </button>
            </div>
            </div> :
            this.state.viewText ? <div>已传内容</div> :
            this.state.viewEgArticle ?
            <div>

              <p className = {style.article_title}>{name}</p>
                {example_article.map((onePara , key) =>
                  <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
                )}
              </div>

            :
            null
          }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default applyHOCs([

  protect({
    logined: {
      satisfy: l => l === true,
      block(){
        const { openWindow , history, closeMask , openMask } = this.props;
        openWindow( UserManagerWindow,
          {
            width: '380px',
            height: '300px',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      choice: state.ButtonExpand.choice,
      name: state.WriteContent.name,
      example_article: state.WriteContent.example_article,
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
      ...bindActionCreators( EditTextActions , dispatch )
    })

  )],
  LunZhengGongGu
);
