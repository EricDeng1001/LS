import React from 'react';
import style from 'style';

class Shengcinanju extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){
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
        </div>

      </React.Fragment>
    )
  }




}


export default Shengcinanju
