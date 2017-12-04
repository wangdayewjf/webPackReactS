import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../../css/css-TwoRoutesonePage-noMatch.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt,
  Switch,
  Redirect
} from 'react-router-dom'

const switchDoms = [
	{
		path:'/',
		exact:true,
		slidebar:()=>(<div>home!</div>),
		main:()=>(<div>Home!</div>)
	},
	{
		path:'/bubblegum',
		exact:true,
		slidebar:()=>(<div>bubblegum</div>),
		main:()=>(<div>Bubblegum</div>)
	},
	{ 	
		path: '/shoelaces',
	    slidebar: () => <div>shoelaces!</div>,
	    main: () => <h2>Shoelaces</h2>
	  }


];

const SidebarExample =()=>(
	<div className="mainDiv">
		<div style={{flex:1}}> 
			<ul style={{ listStyleType: 'none', padding: 0 }}>
	          <li><Link to="/">Home</Link></li>
	          <li><Link to="/bubblegum">Bubblegum</Link></li>
	          <li><Link to="/shoelaces">Shoelaces</Link></li>
	          <li><Link to="/shoelacesxxxx">shoelacesxxxx</Link></li>
	        </ul>
	        <Switch>
	        	{switchDoms.map((route,index)=>(
		        	<Route 
		        		key={index}
		        		path={route.path}
		        		exact={route.exact}
		        		component={route.slidebar}

		        	/>

		        	))}
	        	 <Route component={()=><div> no Match</div>}/>
	        </Switch>
	        
		</div>
		<div style={{flex:2,padding:'10px'}}>
		  <Switch>
		  	
		  
			{switchDoms.map((route,index)=>(
	        	<Route 
	        		key={index}
	        		path={route.path}
	        		exact={route.exact}
	        		component={route.main}

	        	/>

	        	))}
			 <Route component={NoMatch}/>
		  </Switch>

		</div>

	</div>
	);

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default SidebarExample;