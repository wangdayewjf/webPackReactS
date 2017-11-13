import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../css/index.css'
import App from 'app'

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red',
    commentState:'commentState',
    commentAppState:'commentAppState',
    commentInputState:'commentInputState'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    case 'COMMENT_STATE'
      return {...state,commentState:action.commentState}
    case 'COMMENTAPP_STATE'
      return {...state,commentAppState:action.commentAppState}
    case 'COMMENT_INPUT_STATE'
      return {...state,commentInputState.action.commentInputState}
    default:
      return state
  }
}

const store = createStore(themeReducer)

class Index extends Component {
  render () {
    return (
      <div>
        <App />
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