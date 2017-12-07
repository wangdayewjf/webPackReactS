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

/*
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  EXITING:  {opacity: 0.5},
  EXITED:   {opacity: 0 }
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state)=>(
        <Route
          location={location}
          key={location.key}
          path="/:h/:s/:l"
          component={HSL}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}

        />)}
  </Transition>
);
let testNum = true;
const AnimationExample = () => (
    <Route render={({ location }) => {
      testNum = !testNum; 
      console.log('testNum',testNum);
      return (
              <div style={styles.fill}>
                <ul style={styles.nav}>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/albumn">Albumn</NavLink>
                </ul>

                <div style={styles.content}>
                  <TransitionGroup>
                      <CSSTransition key={location.key} timeout={500} classNames="fading-animation-transition" mountOnEnter={true} unmountOnExit={true}>
                          <Switch location={location}>
                              <Route path="/" exact component={Home} />
                              <Route path="/blog" component={Blog} />
                              <Route path="/albumn" component={Albumn} />
                          </Switch>
                      </CSSTransition>
                  </TransitionGroup>
                </div>
              </div>
            );
    }}/>
)

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)
const Home = (props)=>(
    <div>
      Home

    </div>
  );
const Blog =(props)=>(
  <div>
    Blog
  </div>
)

const Albumn = (props)=>(
  <div>
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