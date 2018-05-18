
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import * as actionCreators from 'actions';
import style from 'style';

class EditText extends React.PureComponent {
  constructor( props ){
    super( props );

    this.text = "";
  }

  componentDidMount() {
    document.getElementById("eml").value = "北京"
  }

  /*  实时监测输入框中的文字变化  */
  SwapTxt = () => {
    var text = document.getElementById("eml").value; // 读取文本框中的文本
    text = text.replace(/\n/g, '_@').replace(/\s/g, '_#'); // 将空格替换成 _# , 换行替换成 _@
    this.text = text;
    console.log(this.text)
  }




  render(){
    const {
      sizeStyle,
      saveOrSubmitText,
      loadLastSaveText,
      loadAllSubmitText,
      lastSaveText,  // 最新一次保存的文本
      allSubmitText   // 所有提交的文本
    } = this.props;
    console.log(this.props);
    var te = "北京";

    return (
      <div className="container">
        {/* <input type = "txt" id = "eml"/> */}
        <textarea id = "eml" className = {sizeStyle} onKeyUp = {()=>this.SwapTxt()} onChange = {() => this.SwapTxt()}></textarea><br/>
        {/* <button onClick = {saveOrSubmitText}> 暂存文本 </button>&nbsp;&nbsp;
        <button onClick = {saveOrSubmitText}> 确认提交 </button> */}
      </div>
    );
  }
};

export default connect(
  ({ EditText: ownState }) => ({
    lastSaveText: ownState.lastSaveText,
    allSubmitText: ownState.allSubmitText
  }),
  dispatch => bindActionCreators( actionCreators , dispatch )
)( EditText );
