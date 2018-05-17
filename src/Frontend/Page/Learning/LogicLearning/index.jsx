import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Login from 'Page/Login';
import { view as PageDesign } from 'Connected/PageDesign';
import LogicTest from 'Page/Learning/LogicLearning/LogicTest';
import EnterLearning from 'Page/Learning/LogicLearning/EnterLearning';
import LogicReview from 'Page/Learning/LogicLearning/LogicReview';
import SimulationTest from 'Page/Learning/LogicLearning/SimulationTest';
import LogicStatistics from 'Page/Learning/LogicLearning/LogicStatistics';
import LogicHelp from 'UI/Help/LogicHelp';
import Info from 'UI/Info';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class LogicLearning extends React.PureComponent {
  constructor( props ){
    super( props );
    this.type = ["入口测试" , "进入学习" , "开始复习" , "模拟测试" , "数据统计" , "查看帮助"];
  }

  render(){
    const{
      username,
      logined,
      newTo,
      choice,
      learningType
    } = this.props;
    //console.log(this.props);
    return (
      <React.Fragment>
      { logined == false ?  <Login/> :
        <div>
          <PageDesign subjectFunctions = {this.type}/>

          <div className = {style.mainContent}>
            {
             choice == 0 ? <LogicTest/> :
             choice == 1 ? <EnterLearning learningType = ""/>:
             choice == 2 ? <LogicReview/> :
             choice == 3 ? <SimulationTest/> :
             choice == 4 ? <LogicStatistics/> :
             <LogicHelp/>
            }
          </div>

        </div>
      }
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
  /*protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
        openWindow( UserManagerWindow,
          {
            width: '40%',
            height: '70%',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
              //top: 'calc( 50% - 190px)',
              //left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),*/
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      newTo: state.UserManager.newTo,
      choice: state.SubjectSelect.choice,
      //learningType: state.LearningTypeSelect.choice
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  LogicLearning
);
