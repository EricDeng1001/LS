import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import WriteHelp from 'UI/Help/WriteHelp';
import WriteGraph from "UI/WriteGraph";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class WritingPage extends React.PureComponent {

  constructor( props ){
    super( props );

    this.subject = ["入口测试" , "进入学习" , "数据统计" , "查看帮助","上传文件"];
    this.state = {
      test : true,
      learning : false,
      //review : false,
      statistics : false,
      help : false,
      upload: false
    }
  }

  showIntroduction = (num) => {
    num == 0 ? this.setState({test: true , learning: false , statistics: false , help: false, upload: false }) :
    num == 1 ? this.setState({test: false , learning: true ,  statistics: false , help : false, upload: false }) :
    num == 2 ? this.setState({test: false , learning: false , statistics: true , help : false, upload: false }) :
    num == 3 ? this.setState({test: false , learning: false , statistics: false , help : true, upload: false}) :
    this.setState({test: false, learning: false, statistics: false, help: false, upload: true})
    //num == 0 ? this.setState({test: true , learning: false , review: false , statistics: false , help: false }) :
    //num == 1 ? this.setState({test: false , learning: true , review: false , statistics: false , help : false }) :
    //num == 2 ? this.setState({test: false , learning: false , review: true , statistics: false , help : false }) :
    //num == 2 ? this.setState({test: false , learning: false , review: false , statistics: true , help : false}) :
    //this.setState({test: false , learning: false , review: false , statistics: false , help : true})
  }

  render(){
    const {username} = this.props;

    var TextStyle = [];
    this.state.test ? TextStyle[0] = style.chosedText : TextStyle[0] = style.normalText;
    this.state.learning ? TextStyle[1] = style.chosedText : TextStyle[1] = style.normalText;
    //this.state.review ? TextStyle[2] = style.chosedText : TextStyle[2] = style.normalText;
    this.state.statistics ? TextStyle[2] = style.chosedText : TextStyle[2] = style.normalText;
    this.state.help ? TextStyle[3] = style.chosedText : TextStyle[3] = style.normalText;
    this.state.upload ? TextStyle[4] = style.chosedText: TextStyle[4] = style.normalText;

    return (
      <React.Fragment>
        <div className = {style.wholePage}>

          <div className={style.HUD}>
            <div className={style.title}> 学习系统 </div>
            <div className = {style.goback} onClick = {() => history.back()}> 返回 </div>
          </div>

          <div className = {style.subjectText}>
            <br/><img className = {style.picture} src = "http://59.110.23.212/LearningSystem/admin.jpg"/>
            <br/><div className = {style.username}> {username } </div><br/>
            <div>
              {this.subject.map((sub , key) =>
                <div key = {key} className = {TextStyle[key]}
                    onMouseMove = { () => this.showIntroduction(key) }
                    onClick = { () => this.showIntroduction(key) }
                >{sub}</div>
              )}
            </div>
          </div>

          <div className = {style.mainContent}>
            {this.state.test ? <div>测试</div> :
            this.state.learning ?
              <div>
                <a href = "/learning/writing/lunzheng"> 论证有效性分析 </a>
                <a href = "/learning/writing/lunshuo"> 论说文 </a>
              </div>
            :
            //this.state.review ? <div>复习</div> :
            this.state.statistics ? <WriteGraph /> :
            this.state.help ? <WriteHelp /> :
            <input type="file" />
          }
          </div>



        </div>
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
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
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  WritingPage
);