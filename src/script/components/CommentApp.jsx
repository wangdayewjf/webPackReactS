import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { connect } from 'react-redux'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  componentDidMount () {
      let comments = [];
      if(this._getComments()!=null){
        comments = this._getComments();
        console.log('this._getComments',this._getComments());
      }
      this.setState({
        comments:comments
      });
      console.log('componentDidMount');
    }
  _getComments(){
    let comments = [];
    let commentStr = localStorage.getItem('comments',this.state.comments);
    comments = JSON.parse(commentStr);//json字符串，转json对象。
    return comments;
  }
  _deleteComment(index){
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({
      comments:comments
    });
    this._setComments();
    console.log('_deleteComment');
  }
  _setComments(){
    localStorage.setItem('comments', JSON.stringify(this.state.comments));
  }
  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    });
    this._setComments();
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}
          deleteComment={this._deleteComment.bind(this)}
        />
      </div>
    )
  }
}


//从store中取的state
const CommentAppsStateFromStateStoreToProps = (state) => {
  return {
    commentAppState: state.commentAppState
  }
}

//修改store中state的接口
const CommentAppChangeStateToProps = (dispatch) => {
  return {
    onChangeStoreState: (commentAppState) => {
      dispatch({ type: 'COMMENTAPP_STATE', commentAppState: commentAppState })
    }
  }
}
CommentApp = connect(CommentAppsStateFromStateStoreToProps,CommentAppChangeStateToProps)(CommentApp);

export default CommentApp;
