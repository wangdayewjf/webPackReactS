import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../css/index.css'
import CommentApp from './containers/CommentApp'
import reducer from './reducers/comments';

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

const Index = ()=>(
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  );

//笔记：
//1，2.x到4.x版本的变化就是，原先默认会自动匹配router下的第一个，而，现在只匹配

const Home = ()=>(
  <div>
    <h2>Home</h2>
  </div>
 );


const Topics = ({match})=>(
    <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>  

  );

const Topic = ({match})=>(
<div>
  <h3>{match.params.topicId}</h3>
</div>
  );



//问：match这款参数口有点类似于，一般模块的prop?

const About = ()=>(
  <div>
    <h2>About</h2>
  </div>
 );

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)




