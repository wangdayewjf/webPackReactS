import React, { Component } from 'react'

class Comment extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: '',
      timeStr:''
    }

  }
  componentWillMount () {
    this._updateTimeStr();
    this._timer = setInterval(
      this._updateTimeStr.bind(this),
      5000
    )
  }
  componentWillUnmount(){
    clearInterval(this._timer);
  }
  _updateTimeStr(){
    let secs = (Date.now()-this.props.comment.createTime)/1000;
    this.setState({
      timeStr:secs>60?`${Math.round(secs/60)}分钟前`:`${Math.round((Math.max(secs)))}秒前`,
      username:this.props.comment.username,
      content:this.props.comment.content
     });
  }
  _deleteComment(){
    //clearInterval(this._timer);
    this.props.deleteComment(this.props.index);
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.state.username} </span>：
        </div>
        <p>{this.state.content}</p>
        <p>
          <span>{this.state.timeStr}</span>
        </p>
        <input type='button' onClick={this._deleteComment.bind(this)} value='删除'/>
      </div>
    )
  }
}

export default Comment
