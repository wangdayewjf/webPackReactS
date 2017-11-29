import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const paramsExample=()=>{

	return (
			<div>
				<h2>paramsExample</h2>
				<ul>
					<li>
						<Link to="/href1">链接1</Link>
					</li>
					<li>
						<Link to="/href2">链接2</Link>
					</li>
					<li>
						<Link to="/href3">链接3</Link>
					</li>
					<li>
						<Link to="/href4">链接4</Link>
					</li>
				</ul>
				<Route path="/:id" component={child} />
			</div>
	)
}

const child =({match})=>{
	return (
			<div>
				<h3>ID: {match.params.id}</h3>
			</div>
		)
	
}

export default paramsExample;
//输一个 li 然后contrlo +E 自动补全