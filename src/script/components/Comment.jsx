import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Comment extends Component {
  static propTypes = {
    comment: PropTypes.any,
    deleteComment: PropTypes.func
  }//要求prop参数类型。
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
    clearInterval(this._timer);
    if(this.props.deleteComment){

      this.props.deleteComment(this.props.index);
    }else{
      console.log("请传入deleteComment参数");
    }
    
  }
  render () {
    console.log('commentRender');
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.state.username} </span>：
          <span>{this.state.content}</span>
        </div>
        <p>
          <span>{this.state.timeStr}</span>
        </p>
        <a href="javascript:void(0);" onClick={this._deleteComment.bind(this)}>
            删除
        </a>
      </div>
    )
  }
}


export default Comment
