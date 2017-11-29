import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Index = ()=>(
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
  );


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

export default Index;

//笔记：
//官方文档：https://reacttraining.com/react-router/web/api
//1，2.x到4.x版本的变化就是，原先默认会自动匹配router下的第一个，而，现在只匹配
