
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import style from 'style';

class LogicReviewModel extends React.PureComponent {

  render(){
    const {
      whetherHaveFinishedChapter,
      ordinaryChapterName,
      importantChapterName,
      loader,
    } = this.props;
    console.log(this.props);

    return (
      <div className="container">
        <div>重点复习</div>
        <div>一般复习</div>


      </div>
    );
  }
};

export default connect(
  ({ LogicReviewModel: ownState }) => ({
    whetherHaveFinishedChapter: ownState.whetherHaveFinishedChapter,
    ordinaryChapterName: ownState.ordinaryChapterName,
    importantChapterName: ownState.importantChapterName
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( LogicReviewModel );
