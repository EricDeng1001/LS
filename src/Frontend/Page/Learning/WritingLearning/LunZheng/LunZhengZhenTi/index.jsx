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
  view as MultOptionQuestons,
  actions as MultOptionQuestionsActions
} from 'Connected/MultOptionQuestions';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LunZhengZhenTi extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  loadZhentiContent = ( choice ) => {
    this.props.loadWriteContents({
      url: "/api/lunZhengZhenTiContent",
      body: {
        requestQuestion: choice
      }
    });
  }


  render(){
    const{
      choice
    } = this.props;
    return (
      <React.Fragment>
        <div className={style.title}>
          <div className={style.zhentiMingcheng}>{choice}</div>
          <WriteContent className={style.zhentiContent}  loader={this.loadWriteContents}/>
        </div>
        <div className={style.option}>
           <MultOptionQuestons/>
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
    }),
    dispatch => ({
      ...bindActionCreators( WriteContentActions , dispatch ),
    })

  )],
  LunZhengZhenTi
);
