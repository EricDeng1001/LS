import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';

import style from 'style';

class ButtonExpand extends React.PureComponent {

  render(){
    const {
      buttonTexts,
      loader,
      requestData,
      setButtonChoice
    } = this.props;
    console.log(this.props)


    return (
      <div className="container">

        {buttonTexts.map(( oneway , key ) =>
          <div key = {key}>
            <Button className = {style.buttonSize} text={oneway}
                    onClick = {() => {setButtonChoice(oneway);requestData( oneway )} }
            /><br/>
          </div>
          )
        }


      {/*
         Object.entries(buttonTexts).map( ([waykey,oneway]) =>
           <div key={waykey}>
             <Button className={style.buttonSize} text={oneway}
             onClick = {() => {setButtonChoice(oneway);requestData( oneway )}}
             /><br/>
           </div>
        )
      */}
      </div>
    );
  }
};

export default connect(
  ({ ButtonExpand: ownState }) => ({
    buttonTexts: ownState.content,
    loadingData: ownState.loadingData,
    choice: ownState.choice,
    showContent: ownState.showContent,
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( ButtonExpand );