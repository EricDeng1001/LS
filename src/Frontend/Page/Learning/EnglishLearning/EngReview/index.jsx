import React from 'react';
import style from 'style';
import WriteGraph from 'UI/WriteGraph';

class EngReview extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){
    return(
      <React.Fragment>
        {
          <div className={style.pageTitle}>复习</div>
        }

      </React.Fragment>
    )
  }




}


export default EngReview
