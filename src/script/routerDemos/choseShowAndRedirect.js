import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const AutExample = ()=>{
	return (
			<div>
				//这里显示选择内容
				<ul>
					<li><Link to="/public">public page</Link></li>
					<li><Link to="/protect">protected page</Link></li>
				</ul>
				<Route path="/public"  component={Public}/>
				 <Route path="/login" component={Login}/>
				<PrivateRoute path="/protect" component={Protected}/>
			</div>


		);


}


const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

//验证对象
const fakeAuth = {
	isLogIn:false,
	logIn(){
		this.isLogIn = true;
	},
	logOut(){
		this.isLogIn = false;
	}
}
//
const PrivateRoute = ({component:Component,...res})=>(
	<Route  {...res} render={props=>(
		fakeAuth.isLogIn?(
			<Component {...props}/>
			):(
				<Redirect to={{
					pathname:'/login',
					state:{from:props.location}
				}}/>
			)

		)}/>
		
	);
//问题：什么情况下回刷新页面，刷新那些部分？因为我看没有相对于prop,以及state的内容。答：不是有么?
class Login  extends React.Component {
	_handelLogIn(){
		fakeAuth.logIn();
	}
	render(){
		return (

			 <div>
		        
		        <button onClick={this._handelLogIn}>Log in</button>
		      </div>
			);
	}
}

export default AutExample;
