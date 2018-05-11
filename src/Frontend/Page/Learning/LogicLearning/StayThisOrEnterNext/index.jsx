import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import Info from 'UI/Info';

import Knowledge from 'Page/Learning/LogicLearning/Knowledge';
import ZhongDian from 'Page/Learning/LogicLearning/ZhongDian';
import QiangHua from 'Page/Learning/LogicLearning/QiangHua';
import UnitTest from 'Page/Learning/LogicLearning/UnitTest';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';


class StayThisOrEnterNext extends React.PureComponent {
  constructor( props ){
    super( props );
    //this.state = {
      //type1Selected: false,
      //type2Selected: false,
      //typeSelectDisplay: true
    //}
  }

  getLogicChapterName = ( num ) => {
    console.log(this.props.username,num)
    this.props.getChapterName({
      url: "/api/logicGetChapterName",
      body: {
        username: this.props.username,
        xingshi: num
      },
    })
  }

  //TypeSelectNote = () =>{
  //  alert("您还没有选择要学习的类型，请选择您要学习的类型!");
    //this.setState({typeSelectDisplay: true})
  //}

  FinishTestNote = () =>{
    alert("您还没有完成入口测试，请先完成入口测试!");
    this.setState({typeSelectDisplay: true})
  }

  componentDidMount(){
    this.props.setLearningType("");
  }



  render(){
    const {
      setLearningType,
      learningType,
      finished_level_test,
      chapter_name
    } = this.props;
    console.log(this.props)

    var TextStyle = [];
    for( var i = 0 ; i < 4 ; i++ ){
      learningType == "知识点" ? TextStyle[0] = style.choosed_type : TextStyle[0] = style.normal_type ;
      learningType == "重点" ? TextStyle[1] = style.choosed_type : TextStyle[1] = style.normal_type ;
      learningType == "强化" ? TextStyle[2] = style.choosed_type : TextStyle[2] = style.normal_type ;
      learningType == "测试" ? TextStyle[3] = style.choosed_type : TextStyle[3] = style.normal_type ;
    }


    return(
      <React.Fragment>
        <div className = {style.whole}>
          测试
          {/*
            this.state.typeSelectDisplay ?
            <div>
              <Info info = "请点击选择您要学习的类型："/>
              <div className = {style.typeSelect}><br/>
              您当前所在章节的是&nbsp;&nbsp;<span style = {{"color":"red"}}>{chapter_name}</span>
              </div>

              <div className = {style.fangkuang1}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div className = {TextStyle[0]}
                     onMouseOver = {() => setLearningType("知识点")}
                     onClick = {() => {setLearningType("知识点精要") ; this.setState({typeSelectDisplay: false})}}>
                     点击进入<br/>知识点精要
                </div>
              </div>

              <div className = {style.fangkuang2}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div  className = {TextStyle[1]}
                      onMouseOver = {() => setLearningType("重点")}
                      onClick = {() => {setLearningType("重点习题") ; this.setState({typeSelectDisplay: false})}}>
                       点击进入<br/>重点习题
                </div>
              </div>

              <div className = {style.fangkuang3}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div  className = {TextStyle[2]}
                      onMouseOver = {() => setLearningType("强化")}
                      onClick = {() => {setLearningType("强化练习") ; this.setState({typeSelectDisplay: false})}}>
                      点击进入<br/>强化练习
                </div>
              </div>

              <div className = {style.fangkuang4}>
                <div className = {style.tupianPosition}><img className = {style.tupian} src = "/static/images/admin.jpg"/></div>
                <div className = {TextStyle[3]}
                     onMouseOver = {() => setLearningType("测试")}
                     onClick = {() => {setLearningType("单元测试") ; this.setState({typeSelectDisplay: false})}}>
                     点击进入<br/>单元测试
                </div>
              </div>
            </div>
            : <div>另一种情况</div>
        */  }

        </div>
      </React.Fragment>
    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      //logined: state.UserManager.logined,
      username: state.UserManager.name,
      learningType: state.LearningTypeSelect.learningType,
      finished_level_test: state.LearningTypeSelect.finished_level_test,
      chapter_name: state.LearningTypeSelect.chapter_name
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  StayThisOrEnterNext
);
