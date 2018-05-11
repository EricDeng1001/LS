import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from 'style';

import {
  view as LogicReviewModel,
  actions as LogicReviewModelActions
} from 'Connected/LogicReviewModel';

import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class LogicReview extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  getReviewChapterName = () => {
    this.props.getLogicReviewChapterName({
      url: "/api/logicGetReviewChapterName",
      body: {
        username: this.props.username
      }
    })
  }

  componentDidMount(){
    this.getReviewChapterName();
  }


  render(){
    const {
      whetherHaveFinishedChapter,
      ordinaryChapterName,
      importantChapterName
    } = this.props;

    return(
      <React.Fragment>
        {
/*<div className = {style.putongReview}> 普通复习 </div>

</div>

<div className = {style.zhongdianReview}> 重点复习 </div><div>*/
        }
        <LogicReviewModel/>


      </React.Fragment>
    )
  }




}

export default applyHOCs([
  makePage,
  connect(
    state => ({
      username: state.UserManager.name,
      whetherHaveFinishedChapter: state.LogicReviewModel.whetherHaveFinishedChapter,
      ordinaryChapterName: state.LogicReviewModel.ordinaryChapterName,
      importantChapterName: state.LogicReviewModel.importantChapterName,
    }),
    dispatch => ({
      ...bindActionCreators( LogicReviewModelActions , dispatch )
    })
  )],
  LogicReview
);
