import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import WriteGraph from 'UI/WriteGraph';

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
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class ChtoEng extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      submit: false
    };
  }

  componentDidMount(){
    this.loadChtoEng();
  }

loadChtoEng = () => {
  this.props.loadPortContent({
    url: "/api/eng_getWriteTest",
    body: {
      username: "lxq",
      articleId: 1
    }
  })
}


  render(){

    const {
      content
    } = this.props;
    // console.log(content);

    return (
      <React.Fragment>

        {
            <div>
              <div className={style.pageTitle}> 汉译英 </div>
              <br/>
              {
                // content[0] == undefined?null:<p>{content[0].chinese}</p>
                content.map((chtoeng, key)=>
                <div key = {key} className={style.chtoengall}>
                  { chtoeng.chinese }
                  <br/>
                  <textarea  aria-label="With textarea" className = {style.textarea}></textarea>
                  {
                    this.state.submit?
                    <p> { chtoeng.english }</p>
                    :
                    null
                  }
                </div>
                )
              }
              {
                <Button text="显示答案" className={style.buttonShowEng} onClick={() => this.setState({submit: true}) }/>
              }
            </div>
        }

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
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  ChtoEng
);
