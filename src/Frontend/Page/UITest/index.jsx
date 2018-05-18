import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import WriteGraph from 'UI/WriteGraph';
import Highcharts from 'react-highcharts';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
// import {
//   view as EditText,
//   actions as EditTextActions
// } from 'Connected/EditText';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class UnitTest extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      // pieBasicInfo:[],
      // data: [],
    }
  }

  componentDidMount(){
    this.function();
    // this.loadAllWordRate();
    // this.showPieBasic();
  }

  // componentWillMount(){
  //   this.showPieBasic();
  //   this.loadAllWordRate();
  // }

  // componentWillReceiveProps(NextProps){
  //   if(this.props.content != NextProps.content){
  //     this.showPieBasic();
  //     alert('pp');
  //   }
  // }

// function = () => {
//   this.props.loadPortContent({
//     url: "/api/eng_getWordAndRecord",
//     body: {
//       username:  this.props.username,
//       article_id: this.props.articleId,
//       all_words: "{'hello','sunshine'}"
//     }
//   })
// }

// submitFile = () => {
// const{
//   username,
//   choice
// } = this.props;
// console.log(username,choice,this.text)
// //this.props.submitQuestions({
//   //url: "/api/lunZhengFileUpload",
//   //body: {
// //     username: username,
// //     choice: "管理类联考2010年真题",
// //     text: this.text
// //   }
// // })
// }

// loadAllWordRate = () => {
//   this.props.loadPortContent({
//     url: "/api/eng_getAllWordRate",
//     body: {
//       username:  this.props.username,
//     }
//   })
// }

// showPieBasic = () => {
//   console.log(this.props.content);
//   // const{
//   //   content
//   // }=this.props;
//   this.setState(
//     {
//       pieBasicInfo: {
//         chart: {
//            plotBackgroundColor: null,
//            plotBorderWidth: null,
//            plotShadow: false
//         },
//         title: {
//            text: '累计生词类型分析'
//         },
//         tooltip: {
//            headerFormat: '{series.name}<br>',
//            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         plotOptions: {
//            pie: {
//                allowPointSelect: true,
//                cursor: 'pointer',
//                dataLabels: {
//                    enabled: true,
//                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                    style: {
//                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                    }
//                }
//            }
//         },
//         series: [{
//            type: 'pie',
//            name: '生词类型占比',
//            data: [
//                ['中考',   45.0],
//                ['高考',       26.8],
//                {
//                    name: '四级',
//                    y: 12.8,
//                    sliced: true,
//                    selected: true
//                },
//                ['六级',    8.5],
//                ['考研',     6.2],
//                ['超纲',   0.7]
//            ]
//            // data: [
//            //     ['中考',   this.props.content.zhongkao_rate],
//            //     ['高考',       this.props.content.gaokao],
//            //     {
//            //         name: '四级',
//            //         y: this.props.content.siji,
//            //         sliced: true,
//            //         selected: true
//            //     },
//            //     ['六级',    this.props.content.liuji],
//            //     ['考研',     this.props.content.kaoyan],
//            //     ['超纲',   this.props.content.chaogang]
//            // ]
//         }]
//       }
//     }
//   )
// }

// function = () => {
//   this.setState(
//     {
//       data:this.props.content.liuji
//     }
//   )
// }

function = () => {
  this.props.loadPortContent({
    url: "/api/eng_getUserWord",
    body: {
      username:  this.props.username,
      ariticleId: this.props.articleId,
    }
  })
}

  render(){

    const {
      content,
      // data
    } = this.props;

    // var pieBasicInfo={};
    // if(content != []){
    //   pieBasicInfo= {
    //           chart: {
    //              plotBackgroundColor: null,
    //              plotBorderWidth: null,
    //              plotShadow: false
    //           },
    //           title: {
    //              text: '累计生词类型分析'
    //           },
    //           tooltip: {
    //              headerFormat: '{series.name}<br>',
    //              pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    //           },
    //           plotOptions: {
    //              pie: {
    //                  allowPointSelect: true,
    //                  cursor: 'pointer',
    //                  dataLabels: {
    //                      enabled: true,
    //                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
    //                      style: {
    //                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
    //                      }
    //                  }
    //              }
    //           },
    //           series: [{
    //              type: 'pie',
    //              name: '生词类型占比',
    //              // data: [
    //              //     ['中考',   45.0],
    //              //     ['高考',       26.8],
    //              //     {
    //              //         name: '四级',
    //              //         y: 12.8,
    //              //         sliced: true,
    //              //         selected: true
    //              //     },
    //              //     ['六级',    8.5],
    //              //     ['考研',     6.2],
    //              //     ['超纲',   0.7]
    //              // ]
    //              data: [
    //                  ['中考',   content.zhongkao_rate],
    //                  ['高考',   content.gaokao],
    //                  {
    //                      name: '四级',
    //                      y: content.siji,
    //                      sliced: true,
    //                      selected: true
    //                  },
    //                  ['六级',    content.liuji],
    //                  ['考研',    content.kaoyan],
    //                  ['超纲',    content.chaogang]
    //              ]
    //           }]
    //         };
    // }

    // const{
    //   pieBasicInfo,
    // }=this.state;

    console.log(content)

    return (
      <React.Fragment>
        {/* <EditText/> */}

        {
            <div>
                <div>
                    {/* content[0] == undefined?null:<p>{content[0].chaogang}</p> */}
                    {/* <p>{content.chaogang}</p> */}
                     {/* {content[0] == undefined?null
                     :
                     content.map((wordRate, key)=>
                     <div key = {key} >
                       { wordRate.chaogang }
                       <br/>
                     </div>
                     )
                   } */}
                   <p>content</p>

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
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      articleId: state.EnglishArticle.articleId,
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UnitTest
);
