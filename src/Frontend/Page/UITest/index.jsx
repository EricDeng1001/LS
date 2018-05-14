import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';
//import $ from 'jquery';

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

class UITest extends React.PureComponent {

    constructor( props ){
      super( props );
      this.state = {
        processStep: 0,
        buttonClick: false
      };
    }

    componentDidMount(){
      this.function();
    }

  // function = () => {
  //   const {username} = this.props;
  //   console.log(username)
  //   this.props.loadButtonContents({
  //     url: "/api/logicCeshi",
  //     body: {
  //       username: this.props.username,
  //       //articleId: 1
  //     }
  //   })
  // }

  // function1 = () => {
  //   this.setState({
  //     buttonClick: true
  //   });
  //   this.props.loadPortContent({
  //     url: "/api/eng_getWriteTest",
  //     body: {
  //       username: "lxq",
  //       articleId: 1
  //     }
  //   })
  // }

  function = () => {
    // this.setState({
    //   buttonClick: true
    // });
    this.props.loadPortContent({
      url: "/api/eng_getUnit",
      body:{
        username: "lxq"
      }
    });
  }

  render(){

    const {
      content
    } = this.props;

    console.log(content);

    return (
      <React.Fragment>

        <Button text="显示答案" onClick={() => this.setState({buttonClick: true}) }/>
        {/* <Button text="显示答案" onClick={ () => this.fuction }/> */}

            {this.state.buttonClick?
              <div>
                {content.course}
                <br/>
                {content.unit}
              </div>
              :
              <h5>hello</h5>
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
  UITest
);
