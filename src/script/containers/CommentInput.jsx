import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputDubmp from '../components/CommentInput'
import {initComments,addComment,deleteComment} from '../reducers/comments'

class CommentInput extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }

  }
  componentDidMount () {
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
    this.props.addComment(subObj);//这个this.props.addComment是在包装者中
    console.log(this.props.comments);
    localStorage.setItem('comments',JSON.stringify(this.props.comments));
  }
  render () {
    return (
      <InputDubmp userName={this.state.username}
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
