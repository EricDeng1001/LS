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
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';
import TextAndImag from 'UI/TextAndImag';
import Info from 'UI/Info';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';
import UserManagerWindow from "Windows/UserManager";

class Knowledge extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  loadContent = () => {
    this.props.loadPortContent({
      url: "http://59.110.23.212/LearningSystem/BackEnd/logic_zhishidian.php",
      body: {
        username: this.props.username
      },
    });
  }

  componentDidMount(){
    this.loadContent();
  }


  render(){
    const {
      submitQuestionState,
      loadQuestionState,
      loadContent,
      loadContentState,
      content,
      ined
    } = this.props;
    //console.log(this.props)

    return (
      <React.Fragment>
        {content.flag == 1 ?
        <div>
          <div className={style.pageTitle}> 知识点精要 </div>

          <div className = {style.logic_knowledge}>
            <Loading
              loading={loadContentState.pending}
              wasLoaded={loadContentState.resolved}
              lastFailed={loadContentState.lastFailed}
              reloader={this.loadContent}
              center
            >
              <SlideRL play={ined}>
                <h4 className = {style.dalei}> {content.chapter_name} </h4>
                <TextAndImag list = {content.content}/>
                {
                  content.shunxu == undefined ? null :
                  <div>{content.shunxu.map((onetype , key) =>
                  <div key = {key}>
                    <div className = {style.logic_knowledge_title}> {onetype} </div>
                    {content.xiaolei == undefined ? null:  <TextAndImag list = {content.xiaolei[key]} />}
                  </div>)}</div>
                }
              </SlideRL>
            </Loading>
          </div>
        </div>
        :
        <Info info = "您还没有完成入口测试，请先完成入口测试！"/>
        }

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      content: state.PortTest.content,
      loadContentState: state.PortTest.loadState,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch )
    })
  )],
  Knowledge
);
