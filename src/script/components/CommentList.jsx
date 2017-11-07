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

export default CommentList
