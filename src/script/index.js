import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../css/index.css'
import CommentApp from './containers/CommentApp'
import reducer from './reducers/comments';
import BasicRouter from './routerDemos/basicRouter';
import PramaterAndLinkRouter from './routerDemos/pramaterAndLinkRouter'
import WithRouterRdux from './routerDemos/withRouterRdux' //redux，和withRouter结合
import ChoseShowAndRedirect from './routerDemos/choseShowAndRedirect';
import FormValidation from './routerDemos/formValidation';
import TwoRoutesonePage from './routerDemos/css-TwoRoutesonePage-noMatch';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const store = createStore(reducer)//初始化store
/*
class Index extends Component {
  render () {
    return (
       <Router>
        <Route path="/" component={CommentApp}>
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            <Route path="messages/:id" component={Message} />
          </Route>
        </Route>
      </Router>
    )
  }
}*/


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <TwoRoutesonePage />
    </Router>
  </Provider>,
  document.getElementById('root')
)




