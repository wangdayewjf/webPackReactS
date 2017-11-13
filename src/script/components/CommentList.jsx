import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  _deleteComment(index){
    if(this.props.deleteComment){
      this.props.deleteComment(index);
    }
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) =>
          <Comment comment={comment} key={i} 
            index={i}
            deleteComment={this._deleteComment.bind(this)}
           />
        )}
      </div>
    )
  }
}


//从store中取的state
const CommentsListFromStateStoreToProps = (state) => {
  return {
    commentListState: state.commentListState
  }
}

//修改store中state的接口
const CommentListChangeStateToProps = (dispatch) => {
  return {
    onChangeStoreState: (commentState) => {
      dispatch({ type: 'COMMENT_LIST_STATE', commentListState: commentListState })
    }
  }
}
CommentList = connect(CommentsListFromStateStoreToProps,CommentListChangeStateToProps)(CommentList);

export default CommentList;
