import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import LogicTest from 'Page/Learning/LogicLearning/LogicTest';
import LearningTypeSelect from 'Page/Learning/EnglishLearning/LearningTypeSelect';
import LogicReview from 'Page/Learning/LogicLearning/LogicReview';
import EnglishHelp from 'UI/Help/EnglishHelp';
import Button from 'UI/Button';
import Info from 'UI/Info';
//import LearningTypeSelect from 'UI/LearningTypeSelect';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

//import UserManagerWindow from "Windows/UserManager";
//import { view as UserManager } from 'Connected/UserManager';
import Login from 'Page/Login';
import  {
  view as SubjectSelect
} from 'Connected/SubjectSelect';

class EnglishLearning extends React.PureComponent {
  constructor( props ){
    super( props );

    this.type = ["词汇测试" , "进入学习" , "开始复习" , "查看帮助"];
  }

  render(){
    const{
      username,
      logined,
      newTo,
      choice
    } = this.props;
    //console.log(this.props);
    return (
      <React.Fragment>
      { logined == false ?  <Login/> :

        <div className = {style.wholePage}>

          <div className = {style.pagetitle}>
            <div className = {style.title}> 学习系统 </div>
            <div className = {style.goback} onClick = {() => history.back()}> 返回 </div>
          </div>

        <div className = {style.subjectText}>
            <br/><img className = {style.picture} src = "/static/images/admin.jpg"/>
            <br/><div className = {style.username}> {username} </div><br/>
            <SubjectSelect text = {this.type} normalStyle = {style.normalText} choosedStyle = {style.chosedText} />
          </div>

          <div className = {style.mainContent}>
            {choice == 0 ?
              newTo[0] == 1 ?
              <LogicTest/> : <Info info = {"您已经完成测试!"} /> :
             choice == 1 ? <LearningTypeSelect/> :
             choice == 2 ? <LogicReview/> : <EnglishHelp/>
            }
          </div>


        </div>}
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
      choice: state.SubjectSelect.choice
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  EnglishLearning
);

/*class LogicSubject extends React.PureComponent {

  constructor( props ){
    super( props );

    this.subject = ["入口测试" , "进入学习" , "复习" , "数据统计" , "帮助"];
    this.state = {
      test : true,
      learning : false,
      review : false,
      statistics : false,
      help : false,
    }
  }

  showIntroduction = (num) => {
    num == 0 ? this.setState({test: true , learning: false , review: false , statistics: false , help: false }) :
    num == 1 ? this.setState({test: false , learning: true , review: false , statistics: false , help : false }) :
    num == 2 ? this.setState({test: false , learning: false , review: true , statistics: false , help : false }) :
    num == 3 ? this.setState({test: false , learning: false , review: false , statistics: true , help : false}) :
    this.setState({test: false , learning: false , review: false , statistics: false , help : true})

  }

  render(){
    const{
      username,
      logined
    } = this.props;
    //Request.getSession().setAttribute("username",username)
    //HttpServletRequest = ServletActionContext.getRequest();
    /*var customerId = sessionStorage.customerId;
    console.log(customerId)
    if(customerId == undefined){
      <UserManager loginOrSignup = "login"/>
    }*/
    /*console.log(sessionStorage.getItem("user"));
    if(sessionStorage.getItem("user") == "undefined"){
      <Login/>
    }*/
    //var customerId = sessionStorage.username;
    //var user = '$username'.val();
    //console.log(customerId)
    //console.log(session["username"])
    //Session["Name"] = username;

    /*var TextStyle = [];
    this.state.test ? TextStyle[0] = style.chosedText : TextStyle[0] = style.normalText;
    this.state.learning ? TextStyle[1] = style.chosedText : TextStyle[1] = style.normalText;
    this.state.review ? TextStyle[2] = style.chosedText : TextStyle[2] = style.normalText;
    this.state.statistics ? TextStyle[3] = style.chosedText : TextStyle[3] = style.normalText;
    this.state.help ? TextStyle[4] = style.chosedText : TextStyle[4] = style.normalText;

    if(logined){  sessionStorage.setItem("user",username); }

    return (
      <React.Fragment>
      {/*sessionStorage.getItem("user") == "undefined" ?
        <UserManager loginOrSignup = "login"  onCancel = {() => history.back()}/>:*/
        /*<div className = {style.wholePage}>

          <div className={style.HUD}>
            <div className={style.title}> 学习系统 </div>
          </div>

          <div className = {style.subjectText}>
            <br/><img className = {style.picture} src = "/static/images/admin.jpg"/>
            <br/><div className = {style.username}> 用户名 </div><br/>
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
            {this.state.test ? <LogicTest/> :
            this.state.learning ? <div><KnowLedge/><Button text = {"点击进入重点题型"}/></div> :
            this.state.review ? <div>复习</div> :
            this.state.statistics ? <div>统计表单</div> :
            <LogicHelp/>}
          </div>



        </div>}
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
/*  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  LogicSubject
);*/




/*import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import ButtonControlPane from 'UI/ButtonControlPane';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import {
  view as EnglishLearningSummary
} from 'Connected/EnglishLearningSummary';
import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as TranslatedWords
} from 'Connected/TranslatedWords';

import mergeArraysIntoOne from 'direct-core/Algorithm/mergeArraysIntoOne';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class EnglishLearning extends React.PureComponent {

  constructor( props ){
    super( props );
    this.actions =
    [ this.submitQuestions , props.translateWords , () => { this.confirm(); this.setState({displayByWords:false})} , () => { props.translateSentences(); this.confirm() } , () => { props.hideTranslate();this.confirm() }, this.submitQuestions , [ this.confirm , props.translateAll ] ,  [ this.quit , this.doMore ]];
    this.texts =
    [ "submit" , "translate words" , "confirm" , "translate sentences" , "confirm" , "submit" , [ "confirm" , "translate all" ] ,  [ "end" , "do more" ] ];
    this.describes =
    ["read this page, and try to answer the questions in right, and then submit.","choose your unknown words","read the explaination", "choose the sentences you do not understand well" , "check all translates again" , "do these questions again" , "check your answers and see analysises" , "want to do more?"];
    this.state = {
      processStep: 0,
      displayByWords: true
    };

  }


  loadQuestions = () => {
    this.props.loadQuestions({
      url: "/api/getQuestion",
      //url: "LSCode/BackEnd/get_question.php",
      body: {
        username: this.props.username,
        lock: 0,
        articleId: 0
      },
      parser: questions => questions.map( q => ({
        questionId: q.questionid,
        options: q.choice,
        rightKey: q.key,
        question: q.question,
        analysis: q.analysis
      }))
    });
  }

  nextStep = () => {
    this.setState({
      processStep: this.state.processStep + 1
    });
  }

  confirm = () => {
    this.nextStep();
  }

  quit = () => {
    for( var i = 0; i < questions.length ; i++ ){
      unlockAndHide( questions[i].questionId );
    }
    hideAllTranslate();
    this.props.history.goBack();
  }

  doMore = () => {
    const { unlockAndHide , loadContent , questions , hideAllTranslate } = this.props;
    loadContent();
    this.loadQuestions();
    for( var i = 0; i < questions.length ; i++ ){
      unlockAndHide( questions[i].questionId );
    }
    hideAllTranslate();
    this.setState({
      processStep: 0, // 0 ->
      displayByWords: true
    });
  }

  submitQuestions = () => {
    const {
      username,
      questions,
      articleId,
      submitQuestionState,
      submiting,
      lockAndShow
    } = this.props;
    var submitTime = submitQuestionState.resolved;
    if( submiting ){
      return;
    }
    var wrongList = "";
    for( var i = 0 ; i < questions.length ; i++ ){
      if( questions[i].choosed !== questions[i].rightKey ){
        wrongList += `${questions[i].questionId} `;
      }
    }
    this.props.submitQuestions({
      url: "/api/recordWrongQuestion",
      body: {
        username: username,
        article_id: articleId,
        wrong_question_ids: wrongList,
        time: submitTime + 1
      }
    });
    if( ( ( submitTime + 1 ) & 1 ) === 0 ){
      for( var i = 0; i < questions.length ; i++ ){
        lockAndShow( questions[i].questionId );
      }
    }
  }

  componentDidMount(){
    console.log("mount");
    this.props.loadContent();
    this.loadQuestions();
  }


  render(){
    const { processStep } = this.state;
    const {
      translateWordsState,
      submitQuestionState,
      loadQuestionState,
      translateWords,
      translateSentences,
      loadArticleState,
      loadContent,
      ined
    } = this.props;
    var { displayByWords } = this.state;
    var text = "";
    var mainAction;

    var additionalActions = [];
    var additionalTexts = [];
    if( Array.isArray( this.texts[processStep] ) ){
      [ mainAction , ...additionalActions ] = this.actions[processStep];
      [ text , ...additionalTexts ] = this.texts[processStep];
      mainAction = {
        action: mainAction,
        text: text
      };
      additionalActions = mergeArraysIntoOne({
        action: additionalActions,
        text: additionalTexts
      });
    }
    else {
      mainAction = {
        action: this.actions[processStep],
        text: this.texts[processStep]
      };
    }

    return (
      <React.Fragment>
        <Prompt
          when={processStep !== 0 && processStep !== this.actions.length - 1}
          message="you need to do it again, are you sure to quit?"
        />

        <div className={style.HUD}>
          Step {processStep + 1}: {this.describes[processStep]}
        </div>
        <div className={style.wrapper}>
          <div className={style.leftPane}>
            <Loading
              loading={loadArticleState.pending}
              wasLoaded={loadArticleState.resolved}
              lastFailed={loadArticleState.lastFailed}
              reloader={loadContent}
              center
            >
              <SlideLR play={ined} >
                <EnglishArticle
                  displayByWords={displayByWords}
                />
              </SlideLR>
            </Loading>
            </div>
            <div className={style.rightPane}>
            {
              /*
              processStep:
              0 ->submit first
              1 -> choose words and submit
              2 -> confirm
              3 -> choose sentence and submit
              4 -> confirm
              5 -> submit second time
              6( no leading )  -> translateAll ( optional )
              6 -> go writing
              7 -> write english and confirm
              8 -> write chinese and confirm
              8( no leading ) -> check review ( optional )
              9 -> do more

              */
              /*   (() => {
                  switch( processStep ){
                    case 0:
                    case 5:
                    case 6:
                      return (
                        <Loading
                          loading={loadQuestionState.pending}
                          wasLoaded={loadQuestionState.resolved}
                          lastFailed={loadQuestionState.lastFailed}
                          reloader={this.loadQuestions}
                          center
                        >
                          <SlideRL play={ined}>
                            <SingleOptionQuestions
                              submiter={this.submitQuestions}
                              loader={this.loadQuestions}
                            />
                          </SlideRL>
                        </Loading>
                      );
                    case 1:
                      return (
                        <div className="container">
                          <div className="makeLoadingCenter">
                            <Loading
                              center
                              loading={translateWordsState.pending}
                              lastFailed={translateWordsState.lastFailed}
                              wasLoaded={translateWordsState.resolved}
                              reloader={translateWords}
                              info="Click on the word you don't know"
                            />
                          </div>
                        </div>
                      );
                    case 2:
                    case 4:
                      return (
                        <TranslatedWords />
                      );
                    case 3:
                      return (
                        <Info info="Click on the sentence you don't know"/>
                      );
                    case 7:
                      return (
                          <EnglishLearningSummary />
                      );
                  }
                })()
            }
          </div>
        </div>
        <div className={style.controlPane}>
          <SlideDU play={ined}>
            <ButtonControlPane
              mainAction={mainAction}
              additionalActions={additionalActions}
            />
          </SlideDU>
        </div>
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
    submitQuestionState: {
      onResolved: function(){
        this.nextStep()
      },
      onRejected: function(){
        this.props.alert( "失败" )
      }
    },
    translateWordsState: {
      onResolved: function(){
        this.nextStep()
      },
      onRejected: function(){
        this.props.alert("失败")
      }
    }
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
      questions: state.SingleOptionQuestions.content,
      showSentencesTranslates: state.EnglishArticle.showSentencesTranslates,
      loadQuestionState: state.SingleOptionQuestions.loadState,
      submitQuestionState: state.SingleOptionQuestions.submitState,
      loadArticleState: state.EnglishArticle.loadState,
      translateWordsState: state.EnglishArticle.translateWordsState,
      articleId: state.EnglishArticle.articleId
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( EnglishArticleActions , dispatch )
    })
  )],
  EnglishLearning
);*/
