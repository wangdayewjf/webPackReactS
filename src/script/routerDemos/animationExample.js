import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import '../../css/animationExample.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

//api https://reactcommunity.org/react-transition-group/#Transition
//易懂 https://www.cnblogs.com/qq120848369/p/6066837.html

const AnimationExample = () => (
    <Route render={({ location }) => {
      return (
              <div style={styles.fill}>
                <ul style={styles.nav}>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/albumn">Albumn</NavLink>
                </ul>

                <div style={styles.content}>
                  <TransitionGroup>
                      <CSSTransition key={location.key} style={{position:'relative'}} timeout={500} 
                        addEndListener={(node, done) => {

                           node.addEventListener('transitionend', function endTest(event) {
                             done(event)
                             console.log('endTest');
                           }, false);
                           //添加动画完成之后的回调事件、
                           //注意这个属性跟timeout有点违背，如果timeout小于css里面动画事件，这个就不会执行？所以
                           //一般加这个属性，就不加timeout，加timeout就不加这个属性
                           //按那样说，应该TransitionGroup 下面有 很多CSSTransition 为什么这里只一个？而且他们不是通过key来判断
                           //是否是哪个移出哪个移入的么？
                        }}
                        classNames="fade" mountOnEnter={true} unmountOnExit={true}>
                          <Switch location={location}>
                              <Route path="/" exact component={Home} />
                              <Route path="/blog" component={Blog} />
                              <Route path="/albumn" component={Albumn}/>
                          </Switch>
                      </CSSTransition>
                  </TransitionGroup>
                </div>
              </div>
            );
    }}/>
)
//这里的CSSTransition timeout 完全是用于控制回调的等待时间，真正的动画效果，还是写在css
const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)
const Home = (props)=>(
    <div style={{position:"absolute", width: "100%"}} >
      Home

    </div>
  );
const Blog =(props)=>(
  <div style={{position:"absolute", width: "100%"}}>
    Blog
  </div>
)

const Albumn = (props)=>(
  <div  style={{position:"absolute", width: "100%"}}>
    Albumn

  </div>
  )

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default AnimationExample;