import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';
//import $ from 'jquery';

import Button from 'UI/Button';
import WriteGraph from 'UI/WriteGraph';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

class UITest extends React.PureComponent {

  constructor( props ){
    super( props );
    this.state = {
      processStep: 0,
      buttonClick: false
    };
  }

// function = () => {
//   this.props.loadButtonContents({
//     module.exports = ({ req , res }) => {
//       const { name,password } = req.body;
//       const [ errCode , res ] = callPython("login.py",`${name} $password`);
//       const[errCode , res ] = callPython("offer_lunzheng_zhenti_mingcheng.py");
//       if(errCode){
//         res.status(500).end();
//       } else {
//         res.send(res);
//       }
//     url: "http://59.110.23.212/LearningSystem/BackEnd/logic_test_new1.php",
//     url: "http://59.110.23.212/LearningSystem/BackEnd/lunzheng_zhenti.php",
//     body: {
//       username: "lxq"
//     }
//   })
// }


// function = () => {
//   const {username} = this.props;
//   console.log(username)
//   this.props.loadButtonContents({
//     url: "/api/logicCeshi",
//     body: {
//       username: this.props.username,
//       //articleId: 1
//     }
//   })
// }

function = () => {
  this.setState({
    buttonClick: true
  });
  this.props.loadPortContent({
    url: "/api/eng_getWriteTest",
    body: {
      username: "lxq",
      articleId: 1
    }
  })
  // parser: questions => questions.map( q => ({
  //   type: q.type,
  //   id: q.id,
  //   chinese: q.chinese,
  //   english: q.english,
  // }))
}




  render(){
    const { processStep } = this.state;

    const {
      ined,
      content
    } = this.props;
    console.log(content);
    function uploadFile(){
      var objFile = document.getElementById("FileSelect");
      if (objFile.value == ""){
        alert("未选择文件")
      }
      console.log(objFile.files[0].size);
      console.log(objFile.files[0])
      var files = document.getElementById("FileSelect");
      console.log(files.length)
      //var files = document.getElementById("FileSelect").prop('files');
      //var files = $('#fileId').prop('files');//获取到文件列表
        if(files.length == 0){
            alert('请选择文件');
        }else{
            var reader = new FileReader();//新建一个FileReader
          //console.log(reader.readAsText(objFile.files[0], "UTF-8"))  ;
            reader.readAsText(objFile.files[0], "UTF-8");//读取文件
            reader.onload = function(){ //读取完文件之后会回来这里
                var fileString = this.result; // 读取文件内容
                console.log(fileString)
            }

            //reader.onload = function(evt){ //读取完文件之后会回来这里
              //  var fileString = evt.target.result; // 读取文件内容
                //console.log(fileString)

        //}
      }

      //document.getElementById("FileSelect").change(function(){
    //var fileSelector = $("FileSelect")[0].files;
    var fileSelector = document.getElementById("FileSelect").files;
    var file = fileSelector[0];
    console.log(file);

    //document.getElementById('fileNameDes').text(fileSelector[0].name);

    var reader = new FileReader();
    reader.onload = function()
    {
        document.getElementById("showFile").innerHTML = this.result;
    };
    console.log(reader.readAsText(file,"UTF-8"));

//});


      //  var fileObj = document.getElementById("upload-file").files[0]; // 获取文件对象
        //var FileController = "entityServlet1"; // 接收上传文件的后台地址

        //if(fileObj){
            //alert(fileObj);
             // FormData 对象
                 //var form = new FormData();
                // form.append("file", fileObj);// 文件对象

                 // XMLHttpRequest 对象
                 //var xhr = new XMLHttpRequest();
                // xhr.open("post", FileController, true);
                 //xhr.onload = function () {
                     //alert(xhr.responseText);
                // };
                // xhr.send(form);

      //  }else{
          //  alert("未选择文件");
        //}
    }
    function jsReadFiles(file) {
      var fileObj = document.getElementById("FileSelect");
    var file = fileSelector[0];
    }
    function SwapTxt(){
     var txt = document.getElementById("eml").value;  //获取文本框里的值
     console.log(txt)
         //document.getElementById("lyny").innerHTML=txt;  //在#lyny显示文本框的值
      }


    return (
      <React.Fragment>

        <Button text="测试" onClick={this.function} />
        <textarea  id = "eml" onKeyUp={()=>SwapTxt()}></textarea>
       <p id="lyny"></p>

        <div>
          <label style = {{"color":"red"}}>请选择一个word或pdf文件:<br/>
            <a href="javascript:;" className="btn red" id="file">
              <span className="glyphicon glyphicon-download-alt"></span> 打开
            </a>
            <span id="fileNameDes"></span>
         </label>
         <input type="file" //style={{"display": "none"}}
            id="FileSelect" name="userfile" //accept =".doc,.pdf"
            multiple/>
      </div>

      <div>
        <textarea id="showFile" name="showFile" className="form-control" maxLength="10000"  //style={{'width':'500px','resize': 'none'}}
        placeholder="文本输入"></textarea>
      </div>

  <button onClick = {()=>uploadFile()}>上传文件</button>

        {
          this.state.buttonClick?
            <div>
              {
                // content[0] == undefined?null:<p>{content[0].chinese}</p>
                content.map((chtoeng, key)=>
                <p key = {key}>
                  { chtoeng.chinese }
                  <br/>
                  <input type="text"></input>
                  {/* { chtoeng.english } */}
                </p>
                )

              }
            </div>
          :
          null
        }
        {/* {buttonTexts.map(( oneway , key ) =>
          <div key = {key}>
            <Button className = {style.buttonSize} text={oneway}
                    onClick = {() => {setButtonChoice(oneway);requestData( oneway )} }
            /><br/>
          </div>
          )
        } */}

      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
/*  protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
        openWindow( UserManagerWindow,
          {
            width: '380px',
            height: '300px',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),*/
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      content: state.PortTest.content,
    }),
    dispatch => ({
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  UITest
);
