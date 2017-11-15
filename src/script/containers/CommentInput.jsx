import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputDubmp from '../components/CommentInput'//引入dump组件(笨组件)
import {initComments,addComment,deleteComment} from '../reducers/comments'

class CommentInput extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }

  }
  componentWillMount () {
    let localUserName = this._getUsername();
    this.setState({
      username:localUserName
    });
  }
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }
  _getUsername(){
    let userName = localStorage.getItem('username');
    return userName;
  }
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  _handleSubmit(subObj){
    //更新store中的comments
    //TO DO
    let commentsBefor = this.props.comments;
    let commentsLater = '';
   
    this.props.addComment(subObj);//这个this.props.addComment是在包装者中
    //问：这里就算添加了，这里会props.comments会变么？也变了，会不会在这里的时候props还没变化？
    //答：猜测，props，需要此组件重新渲染之后才会更新，此时并没有更新
    //问：组件何时渲染？
    commentsLater=this.props.comments;
    //console.log(this.props.comments);
    //
    let locatObj = [...commentsBefor,subObj]
    localStorage.setItem('comments',JSON.stringify(locatObj));
  }
  render () {
    return (
      <InputDubmp username={this.state.username}
                  saveUsername={this._saveUsername.bind(this)}
                  onSubmit={this._handleSubmit.bind(this)}
                  getUserName = {this._getUsername.bind(this)}
      />
    )
  }
}




//从store中取的state
const CommentsInputFromStateStoreToProps = (state) => {
  return {
    comments: state.comments
  }
}



//修改store中state的接口
const CommentInputChangeStateToProps = (dispatch) => {
  return {
    initComments:(comments)=>{
      dispatch(initComments(comments));
    },
    addComment:(comment)=>{
      dispatch(addComment(comment));
    },
    deleteComment:(commentIndex)=>{
      dispatch(deleteComment(commentIndex));
    }
  }
}
CommentInput = connect(CommentsInputFromStateStoreToProps,CommentInputChangeStateToProps)(CommentInput);

export default CommentInput;
