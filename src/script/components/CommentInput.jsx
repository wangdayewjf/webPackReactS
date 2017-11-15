import React, { Component } from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component {
   static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    saveUsername: PropTypes.func
  }//要求prop参数类型。
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }

  }
  componentWillMount () {
    this.setState({
      username:this.props.username
    });
  }
  componentDidMount () {
    
    /*this.setState({
      username:localUserName
    });*/
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    });
    if(this.props.saveUsername){
      this.props.saveUsername(event.target.value);
    }
    
  }
  /*_saveUsername (username) {
    localStorage.setItem('username', username)
  }*/
  /*_getUsername(){
    let userName = localStorage.getItem('username');
    return userName;
  }*///这应该写在smartComment里面
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createTime:+Date.now()
      })
    }
    this.setState({ content: '' })
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}


export default CommentInput;
