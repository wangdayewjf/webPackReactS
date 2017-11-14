import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../css/index.css'
import CommentApp from './containers/CommentApp'
import reducer from './reducers/comments'


const store = createStore(reducer)//初始化store

class Index extends Component {
  render () {
    return (
      <div>
        <CommentApp />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)