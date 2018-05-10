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

class UITest extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      processStep: 0,
      buttonClick: false
    };
  }

// function = () => {
//   this.props.loadButtonContents({
//     module.exports = ({ req , res }) => {
//       const { name,password } = req.body;
//       const [ errCode , res ] = callPython("login.py",`${name} $password`);
//       const[errCode , res ] = callPython("offer_lunzheng_zhenti_mingcheng.py");
//       if(errCode){
//         res.status(500).end();
//       } else {
//         res.send(res);
//       }
//     url: "http://59.110.23.212/LearningSystem/BackEnd/logic_test_new1.php",
//     url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti.php",
//     body: {
//       username: "lxq"
//     }
//   })
// }


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

function = () => {
  this.setState({
    buttonClick: true
  });
  this.props.loadPortContent({
    url: "/api/eng_getWriteTest",
    body: {
      username: "lxq",
      articleId: 1
    }
  })
  // parser: questions => questions.map( q => ({
  //   type: q.type,
  //   id: q.id,
  //   chinese: q.chinese,
  //   english: q.english,
  // }))
}


  render(){
    const { processStep } = this.state;

    const {
      ined,
      content
    } = this.props;
    console.log(content);

    return (
      <React.Fragment>

        <Button text="测试" onClick={this.function} />
        {
          this.state.buttonClick?
            <div>
              {
                content[0] == undefined?null:<p>{content[0].chinese}</p>
                content.map((chtoeng, key)=>
                <p key = {key}>
                  { chtoeng.chinese }
                  <br/>
                  <input type="text"></input>
                  {/* { chtoeng.english } */}
                </p>
                )

              }
            </div>
          :
          null
        }
        {/* {buttonTexts.map(( oneway , key ) =>
          <div key = {key}>
            <Button className = {style.buttonSize} text={oneway}
                    onClick = {() => {setButtonChoice(oneway);requestData( oneway )} }
            /><br/>
          </div>
          )
        } */}

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
/*  protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
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
  }),*/
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
