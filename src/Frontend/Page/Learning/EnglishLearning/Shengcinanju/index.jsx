import React from 'react';
import style from 'style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'UI/Button';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class Shengcinanju extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){

    const {
      setLearningType,
      learningType,
    } = this.props;

    return(
      <React.Fragment>
        <div>
          <div className={style.pageTitle}>本课生词：</div>
          <br/>
          暂无
          <br/>
          <div className={style.pageTitle}>本课难句：</div>
          <br/>
          暂无
          <br/>
          <Button text="进入汉译英" onClick = {() => {setLearningType("英语汉译英")}}/>
        </div>

      </React.Fragment>
    )
  }

}


export default applyHOCs([
  makePage,
  connect(
    state => ({
      learningType: state.LearningTypeSelect.learningType,
    }),
    dispatch => ({
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
    })
  )],
  Shengcinanju
);
// export default Shengcinanju
