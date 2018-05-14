import React from 'react';
import style from 'style';
import WriteGraph from 'UI/WriteGraph';

class EngChart extends React.PureComponent {
  constructor( props ){
    super( props );
  }

  render(){
    return(
      <React.Fragment>
        {
          <div>
            <div className={style.pageTitle}>累计生词类型分析</div>
            <WriteGraph/>
            <br/>
            <div className={style.pageTitle}>考研单词所占百分比折线图</div>
          </div>



        }


      </React.Fragment>
    )
  }




}


export default EngChart
