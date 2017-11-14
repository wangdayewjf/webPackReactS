import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentListContainer from './CommentListContainer'
import { connect } from 'react-redux'

class CommentApp extends Component {
  constructor () {
    super()
    
  }
  componentDidMount () {
      console.log('componentDidMount');
    }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentListContainer />
      </div>
    )
  }
}

export default CommentApp;
