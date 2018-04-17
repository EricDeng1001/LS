import React from 'react';
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

class YueDu extends React.PureComponent {

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
                (() => {
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
  // protect({
  //   logined: {
  //     satisfy: l => l === true,
  //     block(){
  //       const { openWindow , history, closeMask , openMask } = this.props;
  //       openWindow( UserManagerWindow,
  //         {
  //           width: '380px',
  //           height: '300px',
  //           position: {
  //             top: 'calc( 50% - 190px)',
  //             left: 'calc( 50% - 150px)'
  //           },
  //           onCancel: () => history.goBack() || closeMask(),
  //           onSuccess: closeMask,
  //         }
  //       );
  //       openMask();
  //     }
  //   }
  // }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      // logined: true,
      // username: "lxq",
      questions: state.SingleOptionQuestions.content,
      showSentencesTranslates: state.EnglishArticle.showSentencesTranslates,
      loadQuestionState: state.SingleOptionQuestions.loadState,
      submitQuestionState: state.SingleOptionQuestions.submitState,
      loadArticleState: state.EnglishArticle.loadState,
      translateWordsState: state.EnglishArticle.translateWordsState
      //articleId: state.EnglishArticle.articleId
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( EnglishArticleActions , dispatch )
    })
  )],
  YueDu
);
